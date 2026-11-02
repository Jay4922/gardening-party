# Ruby Rockets — Project Brief

**Client:** Ruby Rockets (Ruby’s Naturals Inc.)
**Figma:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/Ruby-Rockets-%7C-Dev-BKP
**Figma file key:** 716dxbZpF2R0c3qnv7cZkF
**Dev store:** jp-dev-07.myshopify.com
**Templates in scope:** Homepage (`index`), FAQ (`page.faq`), Our Story (`page.our-story`), Retailers & Partners (`page.retailers-partners` — Figma frame "IP - Find Us" `3:7112`), Contact (`page.contact`) + global header/footer.
**Out of scope:** product/collection pages, Learn/blog, store locator (`3:6866`), legal pages, search, 404, login, cart, landing page, default template. The default-template frame (`3:5863`) is used only as a typography reference.

### Figma frames (in scope)

| Page                 | Desktop (1512)                                | Mobile (376)                                     |
| -------------------- | --------------------------------------------- | ------------------------------------------------ |
| Homepage             | `3:350`                                       | `3:8746`                                         |
| FAQ                  | `3:6099` (one item open), `3:6353` (all open) | `3:10056`, `3:10344`                             |
| Our Story            | `3:6620`                                      | — none                                           |
| Retailers & Partners | `3:7112`                                      | — none                                           |
| Contact              | `3:5192`                                      | — none                                           |
| Header states        | `3:11654` (Products dropdown, search open)    | `3:11934` (menu closed/open), `3:11999` (search) |
| Fonts                | `3:12042`                                     |                                                  |

## Global design tokens

| Figma color style                       | Hex                                                                                                       | Variable name           | Color scheme?                                                                        |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------ |
| Black                                   | `#000000`                                                                                                 | `--color-black`         | Yes — dark scheme background                                                         |
| White                                   | `#FFFFFF`                                                                                                 | `--color-white`         | Yes — light scheme background                                                        |
| Cream for BG                            | `#FFF8F0`                                                                                                 | `--color-cream`         | Yes — cream scheme background                                                        |
| Chocolate Brownie Batter / Rocket Red   | `#EF1207`                                                                                                 | `--color-rocket-red`    | No (Best Seller tag)                                                                 |
| Chocolate Brownie Batter / Orange       | `#FF6F00`                                                                                                 | `--color-orange`        | No (eyebrows, links — confirm)                                                       |
| Chocolate Brownie Batter / Light Orange | `#FF9D42`                                                                                                 | `--color-light-orange`  | No                                                                                   |
| Mocha / Vibrant Magenta                 | `#D11771`                                                                                                 | `--color-magenta`       | No (Energy accent)                                                                   |
| Chocolate Peanut Butter / Electric Blue | `#3E41D7`                                                                                                 | `--color-electric-blue` | No (Recovery accent)                                                                 |
| Chocolate Peanut Butter / Deep Purple   | `#45158C`                                                                                                 | `--color-deep-purple`   | No                                                                                   |
| Gradient (brand, 90°)                   | `#FB8B30 0%` → `#F95B1D 17.52%` → `#E44236 38.85%` → `#D62F4F 59.04%` → `#862176 79.99%` → `#3F1B7D 100%` | `--gradient-brand`      | Announcement bar, CTA bands, footer bottom bar, button borders, active-nav underline |
| Section fade                            | `#FFF8F0` → `#FFFFFF` (top → bottom)                                                                      | `--gradient-cream`      | Light content sections                                                               |

Color schemes to add in `config/settings_data.json`: **dark** (black bg, white text), **cream** (`#FFF8F0` bg, black text), **light** (white bg, black text).

| Figma text style   | Desktop                                                    | Mobile            | Maps to                    |
| ------------------ | ---------------------------------------------------------- | ----------------- | -------------------------- |
| For Header Desktop | Plus Jakarta Sans Bold 80, tracking 4%, LH 1.26, uppercase | 32 (H3 style)     | `.h0` hero / page banner   |
| H2/H2-1            | Plus Jakarta Sans Bold 48, tracking 4%, uppercase          | 32                | `h2` section titles        |
| H3/H3-1            | Plus Jakarta Sans Bold 32, tracking 4%, uppercase          | 32 → 24 (confirm) | `h3` card / product titles |
| H4.1/H4.1-1        | Plus Jakarta Sans Bold 24, tracking 6%                     | 24                | `h4`                       |
| H4.2/H4.2-1        | Plus Jakarta Sans Bold 20                                  | 20                | `h5`                       |
| H5/H5-1            | Plus Jakarta Sans Bold 16                                  | 16                | `h6`                       |
| H3/H3-2B           | Inter Medium 32                                            | —                 | `.content-large` (stats)   |
| H4.1/H4.1-2B       | Inter Medium 24                                            | —                 | `.content-subtitle`        |
| H4.2/H4.2-2B       | Inter Medium 20                                            | 20                | `.content-medium`          |
| H5/H5-2M           | Inter Medium 16                                            | 16                | nav, buttons, eyebrows     |
| H5/H5-2            | Inter Regular 16                                           | 16                | `p` body                   |
| H6/H6-2B           | Inter Medium 12                                            | 12                | `.caption`                 |

Figma line height is "normal" in codegen (≈1.2) even though styles say 100% — confirm against the rendered text per section.

| Font              | Source                                                           | Variable name    |
| ----------------- | ---------------------------------------------------------------- | ---------------- |
| Plus Jakarta Sans | Check Shopify Typography first, else Google Fonts (Bold 700)     | `--font-heading` |
| Inter             | Shopify Typography (Regular 400, Medium 500, Black 900 for tags) | `--font-body`    |

**Container / `page_width`:** header, footer and announcement bar use a 55px gutter (1512 − 110 = **1402px**). Content sections use 80–100px side padding (Instagram 80px → 1352px; product grid 100px → 1312px). Proposal: `page_width` = 1402px with 55px gutter, and sections add their own inner padding. Needs confirmation (see risks).

**Buttons (global component):** pill, `rounded-80`, `px-28 py-10`, Inter Medium 16 uppercase, optional 20px arrow icon. Variants:

- `btn-outline-gradient`: gradient border (Figma exports it as `#FB8B30`; the render shows the full brand gradient), white or black fill.
- `btn-black`: black fill, white text, gradient border.
- `btn-white`: white fill, black text (used on gradient CTA bands).

**Other recurring values:** card radius 16–20px (confirm per card); quantity stepper `rounded-50`, 2px black border; tag `rounded-22`, `px-14 py-4`, Inter Black 12 uppercase.

## Status

| Section               | Node ID             | Template(s)                        | Complexity | Status  |
| --------------------- | ------------------- | ---------------------------------- | ---------- | ------- |
| Announcement Bar      | `3:353`             | all (global)                       | low        | built   |
| Header                | `3:378`             | all (global)                       | high       | built   |
| Footer                | `3:1651` + `3:1714` | all (global)                       | medium     | pending |
| Instagram Feed        | `3:1141`            | all in-scope pages                 | medium     | built   |
| Page Banner           | `3:6108`            | faq, our-story, retailers, contact | low        | built   |
| Image With Text       | `3:6631`            | our-story, retailers               | low        | built   |
| Function Meets Flavor | `3:775`             | index, retailers                   | medium     | pending |
| CTA Banner            | `3:1115`            | index, faq, retailers              | medium     | built   |
| Video Hero            | `3:454`             | index                              | high       | built   |
| Benefit Marquee       | `3:611`             | index                              | medium     | built   |
| Featured Products     | `3:652`             | index                              | high       | built   |
| Community Videos      | `3:808`             | index                              | high       | pending |
| Reviews               | `3:950`             | index                              | high       | pending |
| FAQ                   | `3:6110`            | faq                                | high       | built   |
| Founder Story         | `3:6695`            | our-story                          | low        | built   |
| Team                  | `3:6797`            | our-story                          | medium     | built   |
| Partner Cards         | `3:7200`            | retailers                          | medium     | pending |
| Contact               | `3:5203`            | contact                            | medium     | pending |

## Build order

1. Project setup from tokens: fonts, colors, color schemes, `page_width`, h1–h6, `.content`/`.ctm-title`, buttons.
2. Global: Announcement Bar → Header → Footer → Instagram Feed.
3. Shared sections: Page Banner → CTA Banner → Image With Text → Function Meets Flavor.
4. Homepage: Video Hero → Benefit Marquee → Featured Products → Community Videos → Reviews.
5. FAQ → Our Story (Founder Story, Team) → Retailers & Partners (Partner Cards) → Contact.

## Project-level risks

- **Missing mobile frames:** only Homepage and FAQ have mobile designs. Our Story, Retailers & Partners and Contact mobile layouts will be interpolated from homepage patterns (stack columns, 20px gutter, 32px headings).
- **Mixed gutters:** 55px (header/footer), 80px (Instagram), 100px (product grid). Confirm which is the content width before setting `page_width`.
- **Reviews and Instagram data source:** static merchant-entered blocks, or an app (Judge.me / Okendo / Instagram feed app)? This changes the schema completely.
- **Placeholder imagery:** several photos carry Adobe Stock watermarks, and review text is lorem ipsum. Final assets and copy are needed from the client.
- **Review card title font:** "Exactly what I needed" on mobile (`3:9296`) renders in a rounded display face, not Plus Jakarta Sans. Confirm the font, or snap it to Plus Jakarta Sans.
- **Translations:** no `CLAUDE.md` defines an i18n choice. Assuming single-locale plain English strings until confirmed.
- **Links to out-of-scope pages:** "Join the launch", "Shop the launch", "Learn more", "store locator" and the footer links point to pages that aren't being built. Destinations need confirming (URL settings so the merchant can set them).

---

## Announcement Bar

**Status:** built
**Node ID:** 3:353
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-353
**Templates:** all (header group)
**Complexity:** low
**Section file:** sections/announcement-bar.liquid (Dawn, restyled) + `css/utilities.css`

## Visual brief

Full-width bar with the brand gradient background, `py-10 px-55`, one centered line of white Inter Medium 16 text. Mobile (`3:8748`) is the same with a smaller font (~14) and wraps if needed.

## Content elements

- Announcement text — Inter Medium 16, white, centered
- Optional link on the whole bar

## Schema plan

**Section settings:** Dawn's existing announcement-bar settings, plus the mandatory trio (background is fixed to the brand gradient instead of a color scheme).

**Blocks:**

- announcement: `text`, `link` — reuse Dawn's block

Reuse Dawn's announcement bar (rotation, theme-editor support) and only restyle it in `utilities.css`.

## Design tokens used

- Colors: `--gradient-brand`, `--color-white`
- Typography: H5/H5-2M
- Spacing: 10px vertical, 55px horizontal

## Interactions & JS

None beyond Dawn's built-in slider when there are multiple announcements.

## Reuse check

Matches Dawn `announcement-bar` — reuse with a gradient background and type overrides.

## Dependencies & risks

None.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Option 1 (restyle Dawn) approved; schema approved 2026-11-02.
- Added: `use_brand_gradient` (default on), padding trio (10/10 desktop + mobile, step 2), `custom_class`. Defaults changed: `color_scheme` → `scheme-3`, `show_line_separator` → off.
- The gradient is painted in the section `{% style %}` block, and Dawn's `.gradient` class is dropped while it is on (Dawn's unlayered `.gradient` would otherwise override it).
- Dawn gives the message the `.h5` class, which now carries the global heading style; `css/utilities.css` resets it to Inter Medium 12 (mobile, per Figma 3:8752) / 16 (990+), no uppercase, no tracking, and removes Dawn's message padding/min-height.
- `sections/header-group.json`: text set to the Figma copy, settings updated to match.
- Verified: dev server renders the bar (scheme-3, gradient, text), 0 Liquid errors, Theme Check 0 errors.
- **Visual diff at 1512 / 800 / 376 deferred** — user will check visually later.

---

## Header

**Status:** built
**Node ID:** 3:378
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-378
**Templates:** all (header group)
**Complexity:** high
**Section file:** sections/header.liquid + snippets/header-drawer.liquid (Dawn, extended) + `css/layout.css`

## Visual brief

Black bar, `px-55 py-20`.

- **Left:** white script logo (92×73), then six menu links (Inter Medium 16, white, 27px gap, 10px padding). The active link has a 3px brand-gradient underline.
- **Right:** "JOIN THE LAUNCH" outline-gradient pill button, then search, account and cart icons (28px, 10px gap).
- **Products dropdown** (`3:11654`): dark rounded panel (`#1E1E1E`-ish, radius ~16) listing the three flavors, centered.
- **Search** (`3:11654`): opens a dark panel under the icons with a rounded search input and a close ×.
- **Mobile** (`3:8748`, `3:11934`): hamburger + search on the left, centered logo, account + cart on the right. The menu opens as a full-width white drawer with stacked links (Inter Medium 16, 20px gutter), and Products expands as an accordion on a cream background with divider lines. A sticky black footer in the drawer holds a full-width "JOIN THE LAUNCH" pill. Mobile search (`3:11999`) is a panel under the bar.

## Content elements

- Logo — image from Dawn's logo setting
- Menu — Shopify menu (main-menu) with a Products child list
- CTA button — "JOIN THE LAUNCH", outline-gradient variant
- Icons — search, account, cart (with count bubble)

## Schema plan

**Section settings:** Dawn header settings, plus:

- `cta_label` — text — default "Join the launch"
- `cta_link` — url
- `custom_class`

Padding settings aren't needed (the header has fixed padding); keep Dawn's sticky option.

**Blocks:** none

Keep Dawn's header so cart drawer, predictive search, account and localization keep working; restyle in `layout.css`.

## Design tokens used

- Colors: `--color-black`, `--color-white`, `--gradient-brand`
- Typography: H5/H5-2M
- Spacing: gutter 55 desktop / 20 mobile; gap 55 (logo→menu), 27 (links), 28 (CTA→icons)

## Interactions & JS

Dawn's existing header JS: dropdown on hover/click (`details-disclosure`), drawer (`details-modal`), predictive search. Restyle only, plus the gradient underline for the active state.

## Reuse check

Near match: Dawn `header` (middle-left logo layout, dropdown menu, drawer). Differences: CTA button slot, gradient active underline, dark dropdown panel, custom drawer footer CTA.

## Dependencies & risks

- Main menu must be created in admin with Products → three flavor links.
- "Join the launch" destination is unknown (out-of-scope page).

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Option 1 (restyle Dawn header + CTA) approved; schema approved 2026-11-02.
- Live Figma vs brief: dropdown is solid black (not #1E1E1E), 280 wide, bottom radius 20, pt-10/pb-28/px-28, gap 13; active underline is 4px; search panel black, right-aligned, bottom radius 20, p-28, 440px input (white 20% fill, 2px white border, radius 48); mobile bar py-14 px-20, 20px icons gap 12, logo 70x55. Built to the live values.
- Schema: added `cta_label` / `cta_link` / `show_cta_mobile_drawer`, `drawer_color_scheme` (white drawer while dropdown stays black), mobile padding (14/14), `custom_class`; padding step 4 → 2; defaults → scheme-3, no separator, no localization selectors.
- CTA shows whenever the label is set; an empty link falls back to `/collections/all` until the "Join the launch" destination is confirmed.
- Drawer submenu turned into an in-place accordion with CSS (Dawn's slide-in panel hidden/static). Known deviation: Dawn's JS still traps focus inside an open submenu — Escape closes it. Acceptable for now; revisit if keyboard testing flags it.
- Store setup needed (admin/customizer, not theme code): main menu = Products (3 flavor links) / Learn / Our Story / Find Us / Retailers & Partners / Contact; upload the logo (Theme settings → Logo, width 90 — nearest step to Figma 92; CSS renders 92 desktop / 70 mobile).
- Verified: dev server renders header (padding class, CTA desktop + drawer, scheme-3), 0 Liquid errors, Theme Check 0 errors.
- **Visual diff at 1512 / 800 / 376 deferred** — user will check visually later.

---

## Footer

**Status:** pending
**Node ID:** 3:1651 (main) + 3:1714 (bottom bar); component `3:1140`
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-1651
**Templates:** all (footer group)
**Complexity:** medium
**Section file:** _(filled in after build)_ sections/custom-footer.liquid

## Visual brief

**Main band:** black, `p-55`, two columns.

- **Left (440 wide):** "JOIN OUR NEWSLETTER" (Plus Jakarta Sans Bold 32, white, uppercase), a dark rounded email input (white 2px border, `#333`-ish fill, radius 80), and an outline-gradient "SUBSCRIBE →" pill.
- **Right:** four link columns: Products, Company, Support, Legal. Headings are Plus Jakarta Sans Bold 20 uppercase; links are Inter 16 with a 20px row gap.

**Bottom bar** (48px, brand gradient):

- Left: social icons (Instagram, Facebook, X) in white circles, 28px.
- Right: "© 2026 Ruby’s Naturals Inc." and "♥ // TECHYSCOUTS".

**Mobile** (`3:9459`): centered gradient logo, then the newsletter, then the four columns as accordions (heading + ▼), then the bottom bar stacked and centered.

## Content elements

- Newsletter heading, email field, subscribe button
- 4 menus (headings + links)
- Mobile-only logo
- Social links, copyright text, credit text with link

## Schema plan

**Section settings:**

- `newsletter_heading` — text
- `button_label` — text
- `mobile_logo` — image_picker
- `copyright_text` — text
- `credit_text` — text
- `credit_link` — url
- Social icons read from Dawn's global social settings
- Mandatory trio: `color_scheme` (dark), padding, `custom_class`

**Blocks:**

- menu: `heading` (text), `menu` (link_list) — max 4

Blocks for menus so the merchant can reorder or remove columns.

## Design tokens used

- Colors: `--color-black`, `--color-white`, `--gradient-brand`
- Typography: H3/H3-1 (newsletter), H4.2/H4.2-1 (column headings), H5/H5-2 (links)
- Spacing: gutter 55; column gap ~85

## Interactions & JS

Newsletter uses Shopify's `{% form 'customer' %}`. Mobile accordions use native `<details>` (no JS).

## Reuse check

Near match: Dawn `footer` (link_list blocks, newsletter, social icons). The layout differs too much (gradient bottom bar, mobile accordions), so build a new `custom-footer` section and reuse Dawn's newsletter form markup.

## Dependencies & risks

- Footer menus must be created in admin.
- Many links point to out-of-scope pages.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

---

## Instagram Feed

**Status:** built
**Node ID:** 3:1141
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-1141
**Templates:** index, faq, our-story, retailers, contact (sits directly above the footer)
**Complexity:** medium
**Section file:** sections/custom-instagram-feed.liquid

## Visual brief

White background, `px-80 py-50`.

- **Heading row:** "FOLLOW THE FROZEN REVOLUTION." (Plus Jakarta Sans Bold 32, black, uppercase) with "@RUBYROCKETSSNACKS" below (Plus Jakarta Sans Bold 24, orange); "FOLLOW US →" outline-gradient pill on the right.
- **Images:** a row of 4 square images (323×323, 20px gap, radius ~16).
- **Mobile** (`3:9459` top): centered heading, handle and button, then a 2×2 image grid (16px gap).

## Content elements

- Heading — H3 style
- Handle — orange, links to Instagram
- Button — "FOLLOW US →"
- 4 images — 1:1, cover

## Schema plan

**Section settings:**

- `heading` — text
- `handle` — text
- `button_label` — text
- `button_link` — url
- Mandatory trio

**Blocks:**

- image: `image` (image_picker), `link` (url) — max 4

Static blocks unless the client wants a live feed app (see risks).

## Design tokens used

- Colors: `--color-white`, `--color-black`, `--color-orange`
- Typography: H3/H3-1, H4.1/H4.1-1
- Spacing: 80 side, 20 gap

## Interactions & JS

None (hover zoom optional).

## Reuse check

No match — build from scratch. Can be placed in the footer group so it shows on every page.

## Dependencies & risks

- Live Instagram feed (app) or static images? Decide before build.
- Mobile shows "@RUBYROCKETS" while desktop shows "@RUBYROCKETSSNACKS". Confirm the handle.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built from Option C: 4 manual `image` blocks, plus an `@app` block that replaces the grid when an Instagram app is installed. It's placed in `sections/footer-group.json` above the footer, with `disabled_on` set for cart and password.
- Corrections from the live Figma: corners are 20px; tiles are 1:1 in a 4-column grid with a 20px gap (2×2 with a 16px gap on mobile); 20px between the header row and the grid; 10px between heading and handle.
- The heading is `h2` styled `.h3`. The handle uses `.h-eyebrow` with the new `.title-orange` modifier (base.css) and links out when `handle_link` is set. The button is `ctm-button btn-outline-gradient` and falls back to the handle link.
- Empty image blocks render Shopify's placeholder SVG. The 4 Figma photos are not bundled (image rule), so the merchant uploads them.
- Verified: Theme Check clean for this file, renders in the footer group on the FAQ page, and every setting is referenced in the output. Browser check skipped by user preference.
- **Still open:** the handle (`@rubyrocketssnacks` on desktop vs `@RUBYROCKETS` on mobile) and the Instagram profile URL are needed from the client.

---

## Page Banner

**Status:** built
**Node ID:** 3:6108 (instance of "IP Header"; also 3:6629, 3:7121, 3:5201); mobile 3:10069
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-6108
**Templates:** faq, our-story, retailers, contact
**Complexity:** low
**Section file:** sections/custom-page-banner.liquid

## Visual brief

Full-width banner, 400px tall.

- **Background:** a desaturated/sepia photo with the brand gradient overlaid at low opacity (stronger orange on the left, purple on the right).
- **Left:** page title in white, Plus Jakarta Sans Bold 80 uppercase, vertically centered, 55px from the left.
- **Right:** a product image (three boxes on a pedestal), bottom-aligned and bleeding to the right edge.
- **Mobile** (`3:10069`, 376×400): title centered, 48px, 80px from top; product image 349×226 centered and flush with the bottom edge.

## Content elements

- Title — `.h0`, white (defaults to the page title)
- Background image — cover, tinted
- Foreground product image — transparent PNG

## Schema plan

**Section settings:**

- `heading` — text — default blank (falls back to `page.title`)
- `background_image` — image_picker
- `product_image` — image_picker
- `overlay_opacity` — range
- Mandatory trio

**Blocks:** none

## Design tokens used

- Colors: `--gradient-brand` (overlay), `--color-white`
- Typography: For Header Desktop
- Spacing: 55 left

## Interactions & JS

None. Eager-load the background image (above the fold, LCP).

## Reuse check

No match — build from scratch. One section serves all four pages.

## Dependencies & risks

- Exact overlay blend (gradient + desaturation) to pull from `get_design_context` at build.
- No mobile frame.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built from Option B (merchant-editable, no blocks). Template: `templates/page.faq.json`.
- Overlay = brand gradient (alpha 1 → .4 → .2 → .2 → .4 → 1; 120° desktop, 100° mobile) over a 270° black scrim (.6/.42). CSS in `css/components.css` (`.page-banner*`); title uses the new global `.h-banner` class in `css/base.css` (48 → 64 @1199 → 80 @1440).
- Product image: `drop-shadow(0 4px 20px rgb(0 0 0 / .4))` from Figma's layer shadow. Slot is right/bottom-anchored, 43.6% wide (max 659) on desktop, and 349×56.5% centered on mobile.
- Verified at 1512 / 900 / 376 using the Figma images loaded locally for the test only (not committed). Every schema setting is referenced in the output.
- **Known deviation:** Figma crops its own product shot (−12.6px top bleed, about 13px off the bottom). Per the image_picker rule, the uploaded image is shown whole (object-contain, bottom-anchored) instead of copying Figma's crop.

---

## Image With Text

**Status:** built
**Node ID:** 3:6631 (also 3:6732, 3:7123)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-6631
**Templates:** our-story, retailers
**Complexity:** low
**Section file:** sections/custom-image-with-text.liquid

## Visual brief

Cream-to-white gradient background, `py-100`, two columns.

- **Left:** image 628.5×500, radius 10 (image left in all three instances).
- **Right:** vertically centered text: eyebrow (Inter Medium 24, orange, uppercase), heading (Plus Jakarta Sans Bold 48, uppercase), body (Inter 16) and a black pill button with an arrow.
- **Copy per instance:** "Our Story / We Are on a Mission." (WHY WE DO IT) / "Our Mission / Why We Do⏎What We Do" (COLLABORATE, forced 2-line heading) / "Retailers & Partners / Let's Stock Something Better." (BECOME A PARTNER).
- **Spacing:** eyebrow→heading 10, heading→body→button 28; column gap 55; outer padding 100.
- **Mobile:** no frame. Stack the image above the text.

## Content elements

- Eyebrow, heading, body (richtext), button label + link, image

## Schema plan

**Section settings:**

- `image` — image_picker
- `image_position` — select (left/right)
- `eyebrow` — text
- `heading` — textarea (`newline_to_br`, keeps the forced line break)
- `heading_tag` — select (h2/h3)
- `body` — richtext
- `button_label` — text
- `button_link` — url
- Mandatory trio (color scheme: `scheme-7` = cream→white gradient)

**Blocks:** none

## Design tokens used

- Colors: `--gradient-cream`, `--color-orange`, `--color-black`
- Typography: H4.2/H4.2-2B (eyebrow), H2/H2-1, H5/H5-2
- Spacing: 100 vertical, column gap 55

## Interactions & JS

None.

## Reuse check

Near match: Dawn `image-with-text`, but the eyebrow/button styling and the team schema trio mean a new `custom-` section is cleaner.

## Dependencies & risks

None.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-02, Option B (Merchant Editable).
- Added `scheme-7` to `config/settings_data.json` (bg `#FFF8F0`, gradient 180° `#FFF8F0`→`#FFFFFF`); `scheme-6` was already taken by the brand-gradient CTA scheme.
- Reuses `.content-eyebrow-large` (24px desktop), global `h2`, `.ctm-button btn-dark-gradient` + `assets/icon-arrow-right.svg`.
- Image uses a fixed 628.5:500 aspect ratio at every width. Gutter 20 / 55 (990+) / 100 (1366+); gap 32 / 40 / 55.
- **Interpolated (no mobile frame):** image stacked above text, mobile padding 60/60.
- Our Story template: two instances (`image_with_text_story`, `image_with_text_mission`) with Figma copy; images and button links left blank for the customizer.
- Verified: Theme Check clean for this file, no Liquid errors on `/pages/our-story?view=our-story`, all schema settings referenced. **Visual check deferred** (browser checks skipped per user).

---

## Function Meets Flavor

**Status:** pending
**Node ID:** 3:775 (also 3:7187 on Retailers; mobile 3:9144)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-775
**Templates:** index, retailers
**Complexity:** medium
**Section file:** _(filled in after build)_ sections/custom-function-flavor.liquid

## Visual brief

Black background, two columns.

- **Left:** a hand holding a frozen bar, with a radial orange→magenta glow behind it (part of the image).
- **Right:**
  - Eyebrow "WHY RUBY ROCKETS" (orange, uppercase)
  - Heading "FUNCTION MEETS FLAVOR" (Plus Jakarta Sans Bold 48, white)
  - White body text
  - A stats row between two thin grey dividers: 3 stats ("10G / Plant-Based Protein", "4G / Sugar", "120 / Calories"), each with a large Inter Medium 48 value and a short colored underline (orange, magenta, blue)
  - Outline-gradient "LEARN MORE →" pill
- **Mobile** (`3:9144`): text first, stats as a vertical list with a colored left bar on each, then the image at the bottom.

## Content elements

- Eyebrow, heading, body, button, image
- 3–4 stats (value, label, accent color)

## Schema plan

**Section settings:**

- `image` — image_picker
- `eyebrow` — text
- `heading` — text
- `body` — richtext
- `button_label` — text
- `button_link` — url
- Mandatory trio (color scheme: dark)

**Blocks:**

- stat: `value` (text), `label` (text), `accent_color` (color) — max 4

## Design tokens used

- Colors: `--color-black`, `--color-white`, `--color-orange`, `--color-magenta`, `--color-electric-blue`
- Typography: H2/H2-1, H3/H3-2B for stat values
- Spacing: confirm at build

## Interactions & JS

None.

## Reuse check

No match — build from scratch. Shared by Homepage and Retailers & Partners.

## Dependencies & risks

The glow is baked into the image (transparent PNG over black). Confirm the asset.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

---

## CTA Banner

**Status:** built
**Node ID:** 3:1115 (home); variants 3:6341 (FAQ), 3:7261 (Retailers)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-1115
**Templates:** index, faq, retailers
**Complexity:** medium
**Section file:** sections/custom-cta-banner.liquid

## Visual brief

Full-width brand-gradient band. Three layouts:

- **Home** (458px): centered "LOW SUGAR, DAIRY-FREE SNACKS THIS WAY" (white, 48), a subtitle, white "SHOP THE LAUNCH →" and black "JOIN THE LAUNCH" pills, and a decorative frozen bar image bleeding off the right edge.
- **FAQ** (220px): centered eyebrow "STILL HAVE QUESTIONS?" and heading "LET'S TALK" with a white "CONTACT US →" pill inline.
- **Retailers** (170px): "READY TO WORK TOGETHER?" and a white pill on one centered line.
- **Mobile home** (`3:9446`): left-aligned, full-width stacked buttons, bar image bottom-right.

## Content elements

- Eyebrow (optional), heading, subtitle (optional), 1–2 buttons, decorative image (optional)

## Schema plan

**Section settings:**

- `layout` — select (stacked / inline)
- `eyebrow` — text
- `heading` — text
- `subheading` — text
- `button_1_label` — text
- `button_1_link` — url
- `button_2_label` — text
- `button_2_link` — url
- `decor_image` — image_picker
- Mandatory trio (background fixed to the brand gradient)

**Blocks:** none

One section with a layout select covers all three variants.

## Design tokens used

- Colors: `--gradient-brand`, `--color-white`, `--color-black`
- Typography: H2/H2-1, H4.1/H4.1-2B
- Spacing: confirm at build

## Interactions & JS

None.

## Reuse check

No match — build from scratch.

## Dependencies & risks

The home variant's background shows soft light streaks over the gradient. That may be an image, not a pure CSS gradient — check at build.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built from Option B (one section, `layout` select inline/stacked, 2 fixed button slots, no blocks). It's in the FAQ template with "Contact us" linking to `/pages/contact`.
- The background is a new color scheme `scheme-6` "Brand gradient" (Dawn `background_gradient` = the brand gradient, text white) in `config/settings_data.json`. `.cta-banner.gradient` resets Dawn's `background-attachment: fixed` to scroll.
- The streaks are a texture image (Figma `e36a9.png`) blended with multiply. That resolves the brief's risk: it's now the `texture_image` setting and is not bundled.
- The eyebrow uses the new global `.h-eyebrow` (Plus Jakarta Bold 20 → 24 with 6% tracking from 990px). Buttons reuse `ctm-button` + `btn-outline-gradient` / `btn-dark-gradient`; the arrow is `icon-arrow-right.svg`.
- Verified: Theme Check clean, renders on 127.0.0.1:9292, scheme-6 variables are output, and every setting is referenced in the output. Browser visual check skipped by user preference.
- **Merchant to-do:** upload the streak texture to `texture_image` on each page. Without it the band is a plain gradient.
- Home (`3:1115`) and Retailers (`3:7261`) versions aren't placed yet. Use `layout: stacked` with a subheading, button 2 and `decor_image` for Home, and an inline layout with a blank eyebrow for Retailers.

---

## Video Hero

**Status:** built
**Node ID:** 3:454 (mobile 3:8808)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-454
**Templates:** index
**Complexity:** high
**Section file:** sections/custom-hero-slider.liquid + `custom-hero-slider` in assets/custom.js

## Visual brief

**Desktop:** 640px full-width background video/image (man at a gym) with an orange→purple gradient tint.

- **Left:** "FUEL YOUR GAINS, NOT YOUR GUILT" (Plus Jakarta Sans Bold 80, white, 3 lines), subtitle "Functional frozen snacking has arrived.", white "SHOP THE LAUNCH →" and outline "JOIN THE LAUNCH" pills.
- **Right:** product boxes image.
- **Bottom-left:** slide indicators (one active gradient bar, two white bars), so it's a slider.

**Mobile** (`3:8808`, 700px): media on top (image with products), then text on a black→gradient background below; buttons stack full width.

## Content elements

- Per slide: background video or image, product overlay image, heading, subtitle, 2 buttons

## Schema plan

**Section settings:**

- `autoplay` — checkbox
- `autoplay_delay` — range
- Mandatory trio

**Blocks:**

- slide: `video` (video), `image` (image_picker), `mobile_image` (image_picker), `product_image` (image_picker), `heading` (text), `subheading` (text), `button_1_label` (text), `button_1_link` (url), `button_2_label` (text), `button_2_link` (url) — max 5

## Design tokens used

- Colors: `--gradient-brand`, `--color-white`, `--color-black`
- Typography: For Header Desktop, H4.1/H4.1-2B
- Spacing: 55 left

## Interactions & JS

Swiper 11 slider (custom element in `custom.js`), with pagination as gradient bars. The background is an HTML5 video (Shopify-hosted), muted, looping, `playsinline`, with a poster image for LCP. Respect reduced motion.

## Reuse check

Near match: Dawn `slideshow`, but the video slides and mobile split layout need a custom section.

## Dependencies & risks

- Final video file needed (current frame shows an Adobe Stock watermark).
- Confirm whether multiple slides are real or the indicators are decorative.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Option 2 (Swiper slideshow, block per slide) approved; schema approved 2026-11-02. Section handle `custom-hero-slider` (brief planned `custom-video-hero`).
- Live Figma vs brief: subtitle is Inter Medium 32 desktop / 16 mobile (new `.content-xlarge` modifier); secondary button is 48% black + gradient border (new `.btn-glass-gradient`); pagination bars 40 x 4 desktop / 40 x 6 mobile, 8px gap, active = gradient + 2px white border (`.ctm-pagination`, reusable for other sliders).
- Background tint: the hero frame's own fill isn't exposed by Figma (hidden "Slider 1–3" variants are empty), so the overlay reuses the IP Header (3:6108) brand-gradient + dark scrim values as shared `.overlay-brand-photo`; strength via `overlay_opacity`. Deviation to confirm visually.
- Mobile glow ("Assets" SVG layer 3:8810) recreated as two CSS radial gradients — no raster/SVG asset shipped.
- Product image: mobile 86% wide at 16% / top 197 (Figma 323 x 209 at x 60 on 376); desktop min(760px, 50.3%) bottom-right, bleeding 22px (Figma 760 x 492 at y 170 on a 640 frame), drop shadow 0 4 20 rgba(0,0,0,.4).
- Swiper 11 from the jsDelivr CDN: CSS before base.css (so theme CSS wins), JS before custom.js (so it is defined when the element connects). Theme Check flags both as RemoteAsset warnings (expected per shopify-javascript skill).
- `heading_tag` defaults to h2 because Dawn's header wraps the logo in an h1 on the homepage.
- Buttons with an empty link fall back to `/collections/all` until destinations are confirmed.
- Added to `templates/index.json` as the first section with 3 slides (images to be uploaded in the customizer).
- Verified: dev server renders 3 slides, valid Swiper JSON, h2 heading, both buttons; 0 Liquid errors; Theme Check 0 errors; ESLint clean.
- **Visual diff + slider interaction check deferred** — user will check visually later.

---

## Benefit Marquee

**Status:** built
**Node ID:** 3:611 (mobile 3:9019)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-611
**Templates:** index
**Complexity:** medium
**Section file:** sections/custom-benefit-marquee.liquid + `custom-benefit-marquee` in assets/custom.js

## Visual brief

60px white strip with a continuously scrolling row of benefit items ("10G Plant-Based Protein | 4G Sugar | 120 Calories | Dairy-Free | No Added Sugar…") in Inter Medium 16 black, separated by thin vertical dividers. Same on mobile.

## Content elements

- Benefit items — text

## Schema plan

**Section settings:**

- `speed` — range
- Mandatory trio

**Blocks:**

- item: `text` (text) — max 12

## Design tokens used

- Colors: `--color-white`, `--color-black`
- Typography: H5/H5-2M
- Spacing: item gap — compute from `get_metadata` at build

## Interactions & JS

CSS-only infinite marquee (duplicated track, `@keyframes`), paused under reduced motion. No Swiper (it's not a slider).

## Reuse check

No match — build from scratch.

## Dependencies & risks

None.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Option 2 (Swiper continuous ticker) approved over the recommended CSS marquee; schema approved 2026-11-02.
- Live Figma vs brief: background is **black** (scheme-3), not white; separator is a 3x20 brand-gradient bar (radius 20) before each item; 28px bar→text and item→item; py-20 px-55; Inter Medium 16 white (new `.content-label` modifier). Mobile identical.
- Swiper: `slidesPerView: 'auto'`, `spaceBetween: 28`, loop, freeMode (no momentum), autoplay delay 0 + linear wrapper easing (`--swiper-wrapper-transition-timing-function`). Reduced motion → no autoplay (static, swipeable). Swiper a11y module off — the ticker is decorative and copies are aria-hidden.
- Seamless loop: the block list is rendered 3x server-side (copies 2–3 `aria-hidden`, no `shopify_attributes`) instead of duplicating in JS.
- Added to `templates/index.json` after the hero with Figma's 5 benefits.
- Verified: dev server renders 15 items (10 aria-hidden copies), valid config JSON; 0 Liquid errors; Theme Check 0 errors; ESLint clean.
- **Visual diff + motion check deferred** — user will check visually later.

---

## Featured Products

**Status:** built
**Node ID:** 3:652 (mobile 3:9020)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-652
**Templates:** index
**Complexity:** high
**Section file:** sections/custom-featured-products.liquid + snippets/card-product.liquid (`card_style: 'function'`) + `custom-mobile-slider` in assets/custom.js

## Visual brief

Cream→white background, `p-100`.

- **Heading row:** "FIND YOUR FUNCTION." (48) with subtitle (Inter Medium 24) on the left; "SHOP ALL PRODUCTS →" outline pill on the right.
- **Cards:** 3 cards (410 wide, `justify-between`), each with:
  - Product image (260×360)
  - Optional red "BEST SELLER" tag top-left
  - Title (Plus Jakarta Sans Bold 32 uppercase) and flavor subtitle (Inter Medium 20)
  - Short description (Inter 16)
  - Quantity stepper (black border pill) and "ADD TO CART" outline pill
- **Mobile** (`3:9020`): stacked heading, button below, then a 1-card slider with gradient-bar pagination.

## Content elements

- Section heading, subtitle, button
- Per product: image, badge, title, flavor (subtitle), short description, quantity, add to cart

## Schema plan

**Section settings:**

- `heading` — text
- `subheading` — text
- `button_label` — text
- `button_link` — url
- `collection` — collection
- `quick_add` — select (team-standard Quick add setting)
- Mandatory trio (color scheme: cream)

**Blocks:** none (products come from the collection)

Card content needs product metafields: `custom.function_name` (e.g. "Daily Protein"), `custom.flavor` (e.g. "Chocolate Brownie Batter"), `custom.short_description`, `custom.badge`.

## Design tokens used

- Colors: `--gradient-cream`, `--color-black`, `--color-rocket-red`
- Typography: H2/H2-1, H4.1/H4.1-2B, H3/H3-1, H4.2/H4.2-2B, H5/H5-2
- Spacing: 100 padding, 55 heading→cards, 20 inside cards

## Interactions & JS

AJAX add to cart with quantity (Dawn `product-form` / cart API), updating the cart drawer and count. Mobile: Swiper 11 slider.

## Reuse check

Must render Dawn's `card-product` (team rule). Extend it with a "function" layout variant (centered, metafield title + flavor + description + qty stepper). `card-product` can't do the stepper or metafield titles today, so this needs an extension, not a fork.

## Dependencies & risks

- Products and the 4 metafields must exist in admin.
- Real prices aren't shown on this card (none in the design).

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Option 1 (product picker + product metafields) approved; schema approved 2026-11-02. User approved **only the schema** — metafield definitions were NOT created in the store.
- Live Figma vs brief: mobile `py-80 px-20`, heading→button 28, →cards 40, one 340px card per view; mobile title 24 / 6% tracking; mobile-only accent glow behind the image; pagination on light bg = black 20% bars (new `.ctm-pagination-dark`).
- Dawn `card-product` extended (not forked) with `card_style: 'function'`: badge, function name (falls back to product title), flavor subtitle (product title, only when a function name exists), short description, `quantity-input` stepper + add to cart inside Dawn `product-form`. Price hidden (none in Figma). Multi-variant / quantity-rule products show "Choose options" linking to the product.
- `quick_add` default is `standard` (team skill default is `none`) because Figma shows quantity + add to cart on every card.
- `assets/product-form.js`: the two `.loading__spinner` lookups made optional (`?.`) so cards without a spinner don't throw — first step of the Liquid skill's sitewide spinner removal (rest still pending approval).
- Theme Check: new LiquidComplexity **warning** on `card-product.liquid` (140 > 120) from the added branch; no errors.
- Template: products set to `chocolate-brownie-batter`, `mocha-caffeine`, `chocolate-peanut-butter-creatine` (existing dev-store handles).
- **Store setup needed:** product metafields `custom.function_name`, `custom.short_description`, `custom.badge`, `custom.accent_color` + values for the 3 products. Until then titles = product titles, no badges/glow.
- Verified: dev server renders 3 cards, 3 product forms with quantity inputs, "Add to cart" buttons; 0 Liquid errors; ESLint clean.
- **Visual diff + add-to-cart / slider interaction check deferred** — user will check later.

---

## Community Videos

**Status:** pending
**Node ID:** 3:808 (mobile 3:9175)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-808
**Templates:** index
**Complexity:** high
**Section file:** _(filled in after build)_ sections/custom-community-videos.liquid

## Visual brief

Cream background.

- **Heading:** eyebrow "FROM THE COMMUNITY" (orange) and heading "ROCKETS IN THE WILD." (48).
- **Cards:** 3 visible cards in a slider. Each card has:
  - A portrait video thumbnail (radius ~16) with an "@NameGoesHere" overlay top-left and a centered white play button
  - Below it, a bordered product mini-card: small product image, title, price, and a black "SHOP NOW" pill with a gradient border
- **Pagination:** 3 bars, the active one gradient.
- **Mobile** (`3:9175`): one centered card with neighbours peeking on both sides.

## Content elements

- Eyebrow, heading
- Per card: video (or image + video URL), creator handle, linked product

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — text
- Mandatory trio (color scheme: cream)

**Blocks:**

- video: `video` (video), `poster` (image_picker), `handle` (text), `product` (product) — max 10

## Design tokens used

- Colors: `--color-cream`, `--color-orange`, `--color-black`
- Typography: H4.2/H4.2-2B (eyebrow), H2/H2-1, H5/H5-1 (mini-card title)
- Spacing: confirm at build

## Interactions & JS

Swiper 11 slider. Play button plays the video inline (or opens a modal — confirm). Shop now links to the product (no PDP being built, so confirm the destination).

## Reuse check

No match — build from scratch.

## Dependencies & risks

- Real UGC videos needed (Adobe Stock watermark on placeholders).
- Inline play vs modal not specified.
- Price shows "$00.00" placeholder.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

---

## Reviews

**Status:** pending
**Node ID:** 3:950 (mobile 3:9296)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-950
**Templates:** index
**Complexity:** high
**Section file:** _(filled in after build)_ sections/custom-reviews.liquid

## Visual brief

Black background with soft gradient glows in the corners.

- **Left:** eyebrow "REAL PEOPLE. REAL REVIEWS.", heading "THE WORD IS GETTING OUT." (white 48) and a subtitle.
- **Right (after a divider):** 5 stars, "5.0", "Based on customer reviews", and a "READ ALL REVIEWS →" underlined link.
- **Review cards:** 3 cream cards, radius ~16. Each card has:
  - Colored stars, plus a product tag top-right (dash + label, colored per product)
  - A bold title
  - A quoted review
  - Author, then "✓ Verified Buyer" after a divider
- **Arrows:** circular prev/next outside the cards.
- **Mobile** (`3:9296`): centered heading, rating row, link, one card with peeks, gradient-bar pagination.

## Content elements

- Eyebrow, heading, subtitle, rating value, rating label, link
- Per review: stars, product tag + color, title, text, author, verified flag

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — text
- `subheading` — text
- `rating` — text
- `rating_label` — text
- `link_label` — text
- `link_url` — url
- Mandatory trio (color scheme: dark)

**Blocks:**

- review: `rating` (range 1–5), `product_label` (text), `accent_color` (color), `title` (text), `text` (textarea), `author` (text), `verified` (checkbox) — max 12

## Design tokens used

- Colors: `--color-black`, `--color-cream`, `--color-orange`, `--color-magenta`, `--color-deep-purple`
- Typography: H2/H2-1, H4.2/H4.2-1 (card title), H5/H5-2
- Spacing: confirm at build

## Interactions & JS

Swiper 11 with prev/next arrows and pagination.

## Reuse check

No match — build from scratch.

## Dependencies & risks

- Static blocks vs a reviews app (Judge.me/Okendo) — decide before build.
- The card title font looks different on mobile (see project risks).
- Corner glows: image or CSS radial gradients — check at build.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

---

## FAQ

**Status:** built
**Node ID:** 3:6110 (collapsed state); 3:6364 (expanded state); mobile 3:10056 / 3:10344
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-6110
**Templates:** faq
**Complexity:** high
**Section file:** sections/custom-faq.liquid

## Visual brief

Cream→white background.

- **Heading:** centered eyebrow "FAQ" (orange), heading "WE'VE GOT ANSWERS." (48) and subtitle "Find what you need fast."
- **Search:** a centered rounded search input.
- **Category tabs:** a row of 6 pills ("PRODUCTS AND FUNCTIONS", "INGREDIENTS AND NUTRITION", …). The active pill is gradient-filled with white text; the rest are outline-gradient.
- **Accordion:** a ~900px column of numbered questions. Each row has an orange number "01", the question (Plus Jakarta Sans Bold 16 uppercase) and a circular +/− icon on the right (gradient-filled when open). Answers are Inter 14–16 and can contain links (orange "store locator"). Thin dividers between rows.
- **Mobile** (`3:10056`): check the frame at build (tabs likely scroll horizontally).

## Content elements

- Eyebrow, heading, subtitle, search placeholder
- Categories (tabs)
- Per question: category, question, answer (richtext)

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — text
- `subheading` — text
- `show_search` — checkbox
- `search_placeholder` — text
- Mandatory trio (color scheme: cream)

**Blocks:**

- category: `title` (text)
- question: `question` (text), `answer` (richtext)

Questions belong to the category block above them, so the merchant groups them by order. Alternative: a metaobject. Decide in the options step.

## Design tokens used

- Colors: `--gradient-cream`, `--gradient-brand`, `--color-orange`, `--color-black`
- Typography: H2/H2-1, H5/H5-1 (questions), H5/H5-2
- Spacing: confirm at build

## Interactions & JS

Custom element in `custom.js`:

- Accordion (native `<details>`)
- Tab filtering by category
- Client-side text search filtering questions, with an empty-state message

Also add `FAQPage` JSON-LD (seo skill).

## Reuse check

Near match: Dawn `collapsible-content`, but the tabs and search need a custom section.

## Dependencies & risks

- Full question list per category needed (Figma only shows "Products and functions").
- The "store locator" link targets an out-of-scope page.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built from Option A (section blocks: `category` + `question`, `max_blocks: 50`). Template `templates/page.faq.json` holds the 6 tabs and the 13 Figma questions under "Products and functions". The other 5 tabs are empty until the client supplies content.
- Live Figma corrections to the brief: questions and numbers are 20px (16 on mobile) Plus Jakarta Bold with no tracking (new global `.h-faq`); the number is orange only when the row is open; the column is 1000px wide; dividers are black at 40%; eyebrow and subheading are 24 → 20 on mobile (new `.content-eyebrow-large` and the existing `.content-large`).
- Tabs: gradient-bordered pills on desktop (wrap and center below 1441px, spread across the width from 1441px); below 990px a gradient dropdown toggle. Native `<details>`; keyboard support for the tabs (arrows, Home/End, Esc).
- Search filters every category at once and keeps each row's original number. Clicking a tab clears the search.
- In the theme editor, selecting a block switches to its tab and opens it.
- `FAQPage` JSON-LD comes from every question with an answer.
- CSS: `.faq*` in `css/components.css`. JS: `custom-faq` in `assets/custom.js`. Icons: `assets/icon-faq-{toggle,search,caret}.svg`.
- Verified: Theme Check clean, ESLint clean, renders on 127.0.0.1:9292 (13 items, 6 tabs, valid JSON-LD), and every setting is referenced in the output. Browser and interaction checks were skipped by user preference and are left for the user to do visually.
- **Known deviations:** the mobile dropdown's open panel (`3:10134`) is hidden in Figma, so its styling (white rounded panel with centered items) is my interpretation. The answer copy was transcribed from the `3:6353` screenshot and should be checked against the client's source.
- **Risks still open:** the 50-block cap limits the full FAQ to 44 questions in total; the "store locator" link points to `/pages/store-locator`, which is out of scope.

---

## Founder Story

**Status:** built
**Node ID:** 3:6695
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-6695
**Templates:** our-story
**Complexity:** low
**Section file:** sections/custom-founder-story.liquid

## Visual brief

Black background, three columns.

- **Left (500w):** eyebrow "HOW IT STARTED" (Inter Medium 24, light orange `#FF9D42`), heading "ONE SMALL IDEA. A MUCH BIGGER MISSION." (white, H2 48), a quote "“I was on a mission to eat healthier.”" and attribution "WENDY MAKKENA, FOUNDER" (both Inter Medium 24 white). Gaps: eyebrow→heading 10, heading→quote→attribution 28.
- **Center:** image 505×333, radius 20.
- **Right:** short statement "A simple idea sparked a bigger purpose - to make snacks that fuel brighter days." (Inter Medium 24 white, 235w) with a 2px brand-gradient underline 20px below.
- **Layout:** padding 80 all sides, columns spaced 56 apart (justify-between).
- **Mobile:** no frame. Stack the columns.

## Content elements

- Eyebrow, heading, quote, attribution, image, side statement

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — textarea
- `heading_tag` — select (h2/h3)
- `quote` — text
- `attribution` — text
- `image` — image_picker
- `statement` — textarea
- `show_statement_line` — checkbox
- Mandatory trio (color scheme: `scheme-3`, black)

**Blocks:** none

## Design tokens used

- Colors: `--color-black`, `--color-white`, `--color-light-orange`, `--gradient-brand`
- Typography: H2/H2-1, H4.1/H4.1-2B
- Spacing: 80 padding, 56 column gap, 10/28/20 internal

## Interactions & JS

None.

## Reuse check

No match — build from scratch.

## Dependencies & risks

None.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-02, Option B (Merchant Editable).
- Added `.content-eyebrow-light` (light-orange eyebrow) to `css/base.css`; quote/attribution/statement use `.content-large`.
- Desktop grid `500fr 505fr 235fr`, gap 56 from 1366 (exact at 1512). **Interpolated:** 990–1199 text + image side by side with the statement below (max 500w); below 990 stacked; mobile padding 60/60. Image keeps 505:333 aspect at all widths.
- Added to `templates/page.our-story.json` between the two Image With Text instances; image left blank for the customizer.
- Verified: Theme Check clean, no Liquid errors on `/pages/our-story?view=our-story`, all schema settings referenced. **Visual check deferred.**

---

## Team

**Status:** built
**Node ID:** 3:6797
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-6797
**Templates:** our-story
**Complexity:** medium
**Section file:** sections/custom-team.liquid

## Visual brief

Black background.

- **Heading:** "OUR TEAM" (white 48).
- **Cards:** 3 cards in a row. Each card has:
  - A photo 424×280 (radius 10)
  - A centered name (Plus Jakarta Sans Bold 24, 6% tracking, white uppercase = global h4) and position (Inter Medium 20), 10 apart
  - A 3-line truncated bio (Inter 16, ends in "…")
  - A white "LEARN MORE →" outline-gradient pill
  - Card internal gap 20; cards 424 wide, 40 apart; heading→cards 40; padding 80
- **Mobile:** no frame. Use a 1-column stack or a slider.

## Content elements

- Heading
- Per member: photo, name, position, bio, button label + link

## Schema plan

**Section settings:**

- `heading` — text
- `heading_tag` — select (h2/h3)
- `columns_desktop` — select 2/3/4 (default 3)
- `columns_mobile` — select 1/2 (default 1)
- `bio_lines` — range 2–8 (default 3)
- Mandatory trio (color scheme: `scheme-3`, black)

**Blocks:**

- member: `image` (image_picker), `name` (text), `position` (text), `bio` (textarea), `button_label` (text), `button_link` (url) — max 12

## Design tokens used

- Colors: `--color-black`, `--color-white`
- Typography: H2/H2-1, H4.1/H4.1-1 (name), H4.2/H4.2-2B (position), H5/H5-2 (bio)
- Spacing: 80 padding, 40 gaps, 20 card internal

## Interactions & JS

None unless "Learn more" opens a bio modal (confirm).

## Reuse check

No match — build from scratch.

## Dependencies & risks

What "Learn more" does (link or modal) is not specified — built as a link (Option B); a `<dialog>` bio modal can be added later without changing the blocks. Real names, positions, bios and photos are needed from the client (Figma has placeholders).

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-02, Option B (Merchant Editable).
- Name renders as `h3` (or `h4` when the section heading is `h3`) with the global `.h4` style; position uses `.content-medium`; bio clamped via `line-clamp-(--bio-lines)`; button `.ctm-button btn-outline-gradient`, hidden unless both label and link are set.
- **Interpolated:** 2 columns from 750–989px; mobile setting below 750; mobile padding 60/60; gutter 20 / 55 (990+) / 80 (1366+).
- Added to `templates/page.our-story.json` after "Our Mission" with three placeholder member blocks (no links, so buttons are hidden until set).
- Verified: Theme Check clean, no Liquid errors on `/pages/our-story?view=our-story`, all section and block settings referenced. **Visual check deferred.**

---

## Partner Cards

**Status:** pending
**Node ID:** 3:7200
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-7200
**Templates:** retailers
**Complexity:** medium
**Section file:** _(filled in after build)_ sections/custom-partner-cards.liquid

## Visual brief

Cream background.

- **Heading:** centered eyebrow "PARTNER WITH US" (orange) and heading "BUILT FOR MORE THAN ONE AISLE." (48).
- **Cards:** 3 horizontal cards (white, 1px grey border, radius ~10). Each card has a square image on the left, and on the right a title (Plus Jakarta Sans Bold 16 uppercase), short text and a "LEARN MORE →" outline pill.
- **Mobile:** no frame. Stack the cards.

## Content elements

- Eyebrow, heading
- Per card: image, title, text, button label + link

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — text
- Mandatory trio (color scheme: cream)

**Blocks:**

- card: `image` (image_picker), `title` (text), `text` (textarea), `button_label` (text), `button_link` (url) — max 6

## Design tokens used

- Colors: `--color-cream`, `--color-white`, `--color-orange`
- Typography: H2/H2-1, H5/H5-1, H5/H5-2
- Spacing: confirm at build

## Interactions & JS

None.

## Reuse check

No match — build from scratch.

## Dependencies & risks

Card link destinations unknown.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

---

## Contact

**Status:** pending
**Node ID:** 3:5203
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-5203
**Templates:** contact
**Complexity:** medium
**Section file:** _(filled in after build)_ sections/custom-contact.liquid

## Visual brief

Cream background, two columns.

- **Left:**
  - Eyebrow "CONTACT" (orange) and heading "LET'S TALK" (48)
  - Intro text (Inter Medium 20)
  - Three icon rows: phone "302.499.3506", email "information@greenhillbrands.com" (orange link), address "Kennett Square, Pennsylvania & New Castle, Delaware"
  - A greyscale map image (radius ~10)
- **Right:** a form card with a 4px brand-gradient border and radius ~20, titled "SEND A MESSAGE" (32), containing:
  - First and last name side by side, then email and message
  - Pill inputs with a black 2px border; the message is a rounded textarea
  - A full-width black "SEND MESSAGE →" pill, and the note "We’ll get back to you as soon as we can"
  - reCAPTCHA (Shopify adds it automatically)
- **Mobile:** no frame. Stack the columns, info first.

## Content elements

- Eyebrow, heading, intro, phone, email, address, map
- Form: first name, last name, email, message, submit, success/error states

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — text
- `intro` — text
- `phone` — text
- `email` — text
- `address` — text
- `map_image` — image_picker
- `map_link` — url
- `form_heading` — text
- `button_label` — text
- `form_note` — text
- Mandatory trio (color scheme: cream)

**Blocks:** none

## Design tokens used

- Colors: `--color-cream`, `--color-orange`, `--color-black`, `--gradient-brand`
- Typography: H2/H2-1, H3/H3-1, H4.2/H4.2-2B, H5/H5-2
- Spacing: confirm at build

## Interactions & JS

Shopify `{% form 'contact' %}` with success and error messages; the first + last name fields combine into the contact name.

## Reuse check

Near match: Dawn `contact-form` (reuse its form handling), but with a new two-column layout.

## Dependencies & risks

- Map: static image vs an embedded Google Map iframe (lazy). Confirm.
- The email domain (greenhillbrands.com) differs from the brand. Confirm it's correct.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes
