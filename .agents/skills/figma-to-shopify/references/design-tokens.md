# Design Tokens: Figma → Theme Mapping

How Figma styles become theme tokens. Used during intake (documenting tokens) and build (using the right token instead of arbitrary values). Full CSS architecture is in the tailwind-css skill.

## Principle

Every color, font, and recurring value from Figma is defined GLOBALLY FIRST, then used from the token. Arbitrary inline values (`text-[#020002]`, `font-[...]`, `w-[437px]` where a step exists) are defects.

## Workflow when a Figma link is provided

Before building any section from a Figma link, first review the colors and typography used in that design and register them:

1. **Colors** → define each as a variable in `css/application.css`:
   `--color-off-white: #f3f3f3;` — semantic-ish names, no duplicates for near-identical shades (flag "snap to existing --color-x?" during intake when values are within a minor shade).
   Section background/text colors map to **Shopify color schemes** (Theme settings → Colors: primary, secondary, background minimum) — the section consumes them via its `color_scheme` setting, never hardcoded.
2. **Fonts** → check Shopify Typography settings first; if unavailable, attach files (Google/Adobe embed or `@font-face` with woff2 + `font-display: swap`), then define the variable:
   `--font-global: "roc-grotesk", sans-serif;` — always used via the variable. Font Scale stays 100%.
3. **Typography system** → h1–h6 responsive styles defined once in `css/base.css` (via `@apply`, using the project breakpoints and pixel utilities like `text-32`), matched to the Figma type scale. Sections never restyle headings inline.
4. **Spacing** → pixel-true via `--spacing: 1px` (so `px-10` = 10px); document the recurring spacing rhythm during intake so sections stay consistent.
5. **Radii/borders/shadows** → recurring values become variables in application.css; one-offs get a comment.
6. **Container/content width** → derive from a full-width Figma section's outer gutter (`canvas_width - 2 × gutter`) and set Dawn's `page_width` theme setting (`config/settings_data.json` → `current.page_width`, raising `config/settings_schema.json`'s slider range first if needed) to match — before building the first section. Dawn's stock default is `1200px`; most Figma layouts are wider. See the tailwind-css skill's "Container width" section.

## Verify against the rendered page, not just the code

A section isn't `built` until its _rendered_ output has been checked against the logged tokens above — matching markup/schema to Figma is necessary but not sufficient:

- **Background/text color**: check the actual computed background-color in the browser against the logged hex. Dawn's default `color_scheme` (usually `scheme-1`, white) will silently not match a Figma cream/dark background — if no existing scheme matches, add one to `config/settings_data.json`'s `color_schemes` and assign it, don't assume the default is close enough.
- **Positioning at non-Figma widths**: if an element's placement was derived from Figma's canvas coordinates, check it at a viewport width other than the exact Figma canvas width (e.g. 1366px, not just 1920px). Fixed-pixel offsets copied straight from Figma (e.g. `right-448` derived from `x=1118` on a `1920`-wide frame) only hold at that exact width — prefer a relative/flex-based layout so positioning holds generally, and reserve fixed-canvas math for values that are inherently width-independent (font sizes, gaps, radii).
- **Decorative/background layers — use real numbers, not a guessed round value**: a brief entry that describes a background graphic qualitatively ("upper-left", "low opacity", "faint texture") is not enough to build from — it was written from a screenshot, not the layer's actual transform. Before writing the CSS, call `get_design_context` (or read the brief's node ID and re-fetch it) and use the layer's real width/height/x/y/opacity. Caught case: "Shop by Categories" (`1:1010`) shipped with a decorative wave graphic at `w-400 opacity-20`, guessed from "upper-left, low opacity" in the brief — the real Figma layer was `1715px` wide (89% of the 1920 canvas) at `30%` opacity, bleeding `112px` above the section. The guessed version was visually present but the wrong size/strength entirely. Express the fix as a fraction/relationship of the section's canvas width, not a flat pixel guess.
- **A brief item marked "unconfirmed" is a build blocker, not a green light to guess**: if `docs/figma-brief.md` flags a value as unconfirmed/raster-asset/needs-a-direct-pick, the build step must resolve it by re-fetching that node (`get_design_context`/`get_screenshot`, download the actual asset) before shipping — never ship a plausible substitute and leave the flag standing in Build notes. Caught case: New Arrivals (`1:579`) card SALE ribbon was logged as "raster asset, candidate Danger/600, needs a direct color pick" — the build shipped a flat rotated CSS badge (`bg-[var(--color-danger-600)]`, `#c0392b`) instead of pulling the real asset. The actual Figma layer is an 88×88px corner-fold ribbon SVG with a red gradient (`#FF223E` → `#B5182C`, fold shadow `#BA192D` → `#690E19`) — wrong shape (badge vs. corner ribbon) and wrong color, not just an unconfirmed shade. Any "candidate"/"unconfirmed"/"needs designer confirmation" language in the brief must be closed out with a real asset fetch during build, not carried forward as a shipped guess.
- **A multi-line text node with different styling per line is not one setting** — check `get_design_context`'s returned markup for multiple `<span>`s inside one text node before collapsing it to a single schema field. Figma frequently mixes font-size/weight within what reads as "one heading" in a screenshot (e.g. a small regular lead-in line + a large bold line below it). Caught case: New Arrivals (`1:579`) banner tile's headline is `<span>` "The latest" at Yrsa Regular 40px + `<span>` "Fragrances" at Yrsa Bold 60px — one text node, two type treatments. The build read it as a single string and rendered both lines through one `text-40 font-bold` class, shipping the wrong size/weight on both lines. If a text node's design context shows ≥2 spans with different `text-*`/`font-*` classes, give each its own schema setting (or use `richtext` only if the merchant genuinely needs to control the emphasis split) — never one field + one CSS class for the whole block.
- **Don't rely on a plain `text` schema setting plus `newline_to_br` to carry an intentional line break** — Shopify's single-line `text` input strips real newlines in the theme-editor UI, so a merchant edit silently collapses `"The latest\nFragrances"` to `"The latestFragrances"` (space and break both gone) the first time they touch the field. This is the same root cause as the mixed-styling case above and is usually fixed the same way: split the two lines into two settings instead of one field with an embedded line break. If a genuinely merchant-authored multi-line value is needed (not a fixed two-part heading), use `textarea` or `richtext`, not `text`.

The project breakpoint set is defined in `application.css` (see tailwind-css skill for the full list, 375 → 1920). Use those tokens; do not invent new breakpoints. Padding schema mobile split is `max-width: 989px`.

## Intake output format

In `docs/figma-brief.md`, the Global design tokens section contains:

| Figma color style | Hex | Variable name | Color scheme? |
| Figma text style | Size/weight/LH per breakpoint | Maps to (h1–h6 / .h* / body) |
| Fonts | Source (Shopify Typography / Google / files) | Variable name |

plus a list of any proposed NEW tokens with justification.
