# Ruby Rockets — Project Brief

**Client:** Ruby Rockets (Ruby’s Naturals Inc.)
**Figma:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/Ruby-Rockets-%7C-Dev-BKP
**Figma file key:** 716dxbZpF2R0c3qnv7cZkF
**Dev store:** jp-dev-07.myshopify.com
**Templates in scope:** Homepage (`index`), FAQ (`page.faq`), Our Story (`page.our-story`), Retailers & Partners (`page.retailers-partners` — Figma frame "IP - Find Us" `3:7112`), Contact (`page.contact`) + global header/footer. **Added 2026-11-03:** legal pages (Privacy Policy, Terms & Conditions, Accessibility Statement, Cookie preference settings), Search Result (`search`), Error (`404`).
**Added 2026-11-03 (later):** Learn blog (`blog`, frame "IP - Learn" `23:12287`) and article (`article`, second "IP - Learn" frame `23:12547`).
**Out of scope:** store locator (`3:6866`), login, cart, landing page, default template. The default-template frame (`3:5863`) is used only as a typography reference.

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

| Section               | Node ID             | Template(s)                           | Complexity | Status  |
| --------------------- | ------------------- | ------------------------------------- | ---------- | ------- |
| Announcement Bar      | `3:353`             | all (global)                          | low        | built   |
| Header                | `3:378`             | all (global)                          | high       | built   |
| Footer                | `3:1651` + `3:1714` | all (global)                          | medium     | built   |
| Instagram Feed        | `3:1141`            | all in-scope pages                    | medium     | built   |
| Page Banner           | `3:6108`            | faq, our-story, retailers, contact    | low        | built   |
| Image With Text       | `3:6631`            | our-story, retailers                  | low        | built   |
| Function Meets Flavor | `3:775`             | index, retailers                      | medium     | built   |
| CTA Banner            | `3:1115`            | index, faq, retailers                 | medium     | built   |
| Video Hero            | `3:454`             | index                                 | high       | built   |
| Benefit Marquee       | `3:611`             | index                                 | medium     | built   |
| Featured Products     | `3:652`             | index                                 | high       | built   |
| Community Videos      | `3:808`             | index                                 | high       | built   |
| Reviews               | `3:950`             | index                                 | high       | built   |
| FAQ                   | `3:6110`            | faq                                   | high       | built   |
| Founder Story         | `3:6695`            | our-story                             | low        | built   |
| Team                  | `3:6797`            | our-story                             | medium     | built   |
| Partner Cards         | `3:7200`            | retailers                             | medium     | built   |
| Contact               | `3:5203`            | contact                               | medium     | built   |
| Legal Content         | `23:12915` (+3)     | privacy, terms, accessibility, cookie | low        | built   |
| Error 404             | `23:13359`          | 404                                   | low        | built   |
| Search Results        | `23:13245`          | search                                | medium     | built   |
| Collection Grid       | `23:10274`          | collection                            | high       | built   |
| Product Main (PDP)    | `23:10287`          | product                               | high       | built   |
| Blog Featured         | `23:12298`          | blog                                  | medium     | built   |
| Blog Latest           | `23:12393`          | blog                                  | medium     | pending |
| Article Main          | `23:12558`          | article                               | medium     | pending |

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

- **Fix (2026-11-03, Figma `23:15702`):** the 4px brand-gradient bar under the active-page link (and on hover) never appeared. The show rules used a shorter selector than the base `::after` rule, so it won on specificity and the bar stayed at `opacity: 0`. The show rules now use the same `> .list-menu > li >` path.
- Option 1 (restyle Dawn header + CTA) approved; schema approved 2026-11-02.
- Live Figma vs brief: dropdown is solid black (not #1E1E1E), 280 wide, bottom radius 20, pt-10/pb-28/px-28, gap 13; active underline is 4px; search panel black, right-aligned, bottom radius 20, p-28, 440px input (white 20% fill, 2px white border, radius 48); mobile bar py-14 px-20, 20px icons gap 12, logo 70x55. Built to the live values.
- Schema: added `cta_label` / `cta_link` / `show_cta_mobile_drawer`, `drawer_color_scheme` (white drawer while dropdown stays black), mobile padding (14/14), `custom_class`; padding step 4 → 2; defaults → scheme-3, no separator, no localization selectors.
- CTA shows whenever the label is set; an empty link falls back to `/collections/all` until the "Join the launch" destination is confirmed.
- Drawer submenu turned into an in-place accordion with CSS (Dawn's slide-in panel hidden/static). Known deviation: Dawn's JS still traps focus inside an open submenu — Escape closes it. Acceptable for now; revisit if keyboard testing flags it.
- Store setup needed (admin/customizer, not theme code): main menu = Products (3 flavor links) / Learn / Our Story / Find Us / Retailers & Partners / Contact; upload the logo (Theme settings → Logo, width 90 — nearest step to Figma 92; CSS renders 92 desktop / 70 mobile).
- Verified: dev server renders header (padding class, CTA desktop + drawer, scheme-3), 0 Liquid errors, Theme Check 0 errors.
- **Visual diff at 1512 / 800 / 376 deferred** — user will check visually later.
- **Fix (2026-11-02):** cart icon looked smaller than search/account (Dawn's cart SVGs sit in a padded 40x40 viewBox). Header now uses the Figma cart icon `assets/icon-cart-figma.svg` (tight 20x20) for both cart states.

---

## Footer

**Status:** built
**Node ID:** 3:1651 (main) + 3:1714 (bottom bar); component `3:1140`
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-1651
**Templates:** all (footer group)
**Complexity:** medium
**Section file:** sections/footer.liquid (Dawn, restyled) + `css/layout.css` + `custom-footer-accordion` in `assets/custom.js`

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

- **Fix (2026-11-03):** the footer's active-page link no longer has an underline (it overrides Dawn's `.list-menu__item--active`). The hover underline stays.
- Built from Option A (restyle Dawn's footer); schema approved 2026-11-02.
- Live Figma vs brief: 80px gap between the newsletter (440px) and the columns; the email field has a white 20% fill, 2px white border and radius 48; Subscribe is `btn-dark-gradient` (black fill); links are Inter **Medium** 16; social icons are **black** circles (28px) with white glyphs; the © and ♥ icons are 24px with a 4px gap and 20px between the two groups; the bar is py-10 px-55 on desktop and p-20 stacked on mobile; the mobile logo is 108×80.
- Markup: newsletter moved left of the columns in `.footer__main` (the padding class moved there so the gradient bar sits outside the section padding). Link-list headings are `<h2 class="footer__menu-heading h5"><button aria-expanded>` and collapse below 990px. Dawn's bottom row was replaced by `.footer__bar`. "Powered by Shopify" was removed. Localization and payment markup is kept but off by default.
- Schema: defaults are scheme-3 with Follow on Shop, localization, payment and policies off. Added `newsletter_placeholder`, `newsletter_button_label`, `mobile_logo` + `mobile_logo_width`, `copyright_text`, `credit_text`, `credit_link`, the 4 padding ranges (step 5) and `custom_class`. Every setting is referenced in the output.
- `footer-group.json`: footer settings set to Figma values, plus 4 `link_list` blocks (Products / Company / Support / Legal) with no menus attached.
- Verified before the server stopped: renders with 0 Liquid errors (newsletter, Subscribe button, © and credit line). Theme Check is clean for footer.liquid; ESLint is clean.
- Verified after the dev-server restart: the 4 link columns render (headings + mobile toggles, `FooterMenu-*` ids), 0 Liquid errors. Social icons don't show yet because no social URLs are set (expected).
- **Store setup:** create the 4 footer menus in admin and assign them to the blocks; add the Instagram, Facebook and X URLs in Theme settings → Social media; upload the mobile logo.

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
- **Fix (2026-11-02, by the homepage session):** content ran edge-to-edge on wide screens; desktop padding now `max(80px, (100% - 1512px)/2 + 80px)` so it aligns with the 1512px container (CSS only, `.instagram-feed` in components.css).

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
- **Fix (2026-11-03):** on Retailers & Partners, the title ran onto one line at 80px under the product boxes (copy was capped at 1062px). On desktop `.page-banner__copy` is now capped at 50% of the content width, so it wraps to "Retailers &⏎Partners" like Figma. On desktop the background image is also anchored to the right and bottom (`object-right-bottom`), so a flattened banner image (photo + products in one file) keeps its products in view when `cover` crops it between 990 and 1512px or above 1512px.
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

**Status:** built
**Node ID:** 3:775 (also 3:7187 on Retailers; mobile 3:9144)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-775
**Templates:** index, retailers
**Complexity:** medium
**Section file:** sections/custom-function-flavor.liquid

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

- Option 1 (real `<img>` column + stat blocks) — user replied "Continue" to the options, taken as the recommended option; schema approved 2026-11-02.
- Live Figma vs brief: eyebrow is Light Orange `#FF9D42` Inter Medium 24/20 (new `.content-eyebrow-light`); body Inter Medium 24/20; stat values Plus Jakarta Sans Bold 48/32 (new `.content-stat`), labels Inter Medium 20 (`.content-stat-label`); bars 60x4 desktop / 4px vertical on mobile; dividers 1px white 40% (from the Figma line asset), max 685 wide; desktop `p-100`, text column 745 starting at x 667; gaps 10 / 28 / 55.
- Image: desktop `<img>` absolutely positioned over the left 46.84% (Figma fill layer is mirrored: negative width) — `mirror_image` (default on) flips it with `scale-x: -1`; mobile image in flow below the text at natural aspect (Figma places it at the bottom ~45% with a 250px spacer). Lazy-loaded with widths/sizes.
- Mobile bottom padding defaults to 0 so the mobile image runs to the section edge.
- Added to `templates/index.json` after Featured Products with Figma's 3 stats.
- Verified: dev server renders eyebrow, 3 stats (10G/4G/120), button; 0 Liquid errors; Theme Check 0 errors.
- **Visual diff deferred** — user will check visually later. Image to be uploaded in the customizer.
- **Change after first upload (2026-11-02):** the merchant uploads the whole composition as one wide image (bar + glow left, black right). The desktop image now spans the full section anchored left, scaled to the section **height** (`h-full w-auto`, no vertical crop — wide screens were cutting the bar top with `object-cover`), `sizes: 100vw` instead of a 46.84% column, and `mirror_image` defaults to **off** (index + retailers templates set to false). Without a mobile image, the wide image is cropped to its left part on mobile (`h-360 object-left`) so the bar stays visible.

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
- The background is a new color scheme `scheme-6` "Brand gradient" (Dawn `background_gradient` = the brand gradient, text white) in `config/settings_data.json`. Dawn's `background-attachment: fixed` is reset globally by `.gradient { @apply bg-scroll; }` in `css/utilities.css` (added by another session).
- The streaks are a texture image (Figma `e36a9.png`) blended with multiply. That resolves the brief's risk: it's now the `texture_image` setting and is not bundled.
- The eyebrow uses the new global `.h-eyebrow` (Plus Jakarta Bold 20 → 24 with 6% tracking from 990px). Buttons reuse `ctm-button` + `btn-outline-gradient` / `btn-dark-gradient`; the arrow is `icon-arrow-right.svg`.
- Verified: Theme Check clean, renders on 127.0.0.1:9292, scheme-6 variables are output, and every setting is referenced in the output. Browser visual check skipped by user preference.
- **Merchant to-do:** upload the streak texture to `texture_image` on each page. Without it the band is a plain gradient.
- Home (`3:1115`) and Retailers (`3:7261`) versions aren't placed yet. Use `layout: stacked` with a subheading, button 2 and `decor_image` for Home, and an inline layout with a blank eyebrow for Retailers.
- Homepage (`3:1115`) placed in `templates/index.json` after Reviews by the homepage build session: `layout: stacked`, no eyebrow, heading + subheading, "Shop the launch" (outline, arrow) + "Join the launch" (dark), scheme-6, padding 100/100 desktop, 55/55 mobile. `decor_image` / `texture_image` still to upload in the customizer.

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
- **Fix (2026-11-03):** the "Join the launch" button (`.btn-glass-gradient`, Figma `3:460`) now has a 48% black fill and the gradient border drawn as a masked `::before` ring. Before, the gradient was painted under the translucent fill, so the gradient showed through the middle of the button. Hover still goes solid black.
- **Fix (2026-11-03):** pagination re-checked against `3:465`: the active bar is the brand gradient with a 2px white **outside** stroke. The old inner `border-2` + `box-border` filled the whole 4px desktop bar, so the gradient never showed. `.ctm-pagination` now draws the ring with `box-shadow: 0 0 0 2px` and keeps the full 40 × 4 gradient. This applies to every slider that uses `.ctm-pagination`.
- **Fix (2026-11-02):** on wide screens the copy and dots now align with the 1512px container (`padding-left: max(55px, (100% - 1512px)/2 + 55px)`), copy capped at 775px.

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

## Collection Grid

**Status:** built
**Node ID:** 23:10274 (frame "IP - Products + Gift Card" `23:9970`; no mobile frame found)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-9970
**Templates:** collection (`templates/collection.json`; header "Products" goes to `/collections/frontpage`)
**Complexity:** high
**Section file:** sections/main-collection-product-grid.liquid (Dawn, extended) + snippets/card-product.liquid (`card_style: 'collection'`) + templates/collection.json

## Visual brief

**Page stack:** Page Banner ("IP Header" `23:9979`, 400 tall, "FUNCTION MEETS FROZEN" plus the product photo, reusing `custom-page-banner`), then the product grid, then the Instagram Feed and the footer (both global, already built).

**Grid** (`23:10274`): cream→white gradient (`#fff8f0`→white), `px-40 py-80`, 3 equal cards (440.67 wide) with a 55px gap. Each card is a centered column with a 20px gap:

- Product image: 202×280.
- Optional red "BEST SELLER" tag: `#EF1207`, Inter Black 12 uppercase, `px-14 py-4`, radius 22, at 20/15 from the card's top-left.
- Function name: Plus Jakarta Sans Bold 32, uppercase, 1.28 tracking. Flavor below it: Inter Medium 20, 4px gap.
- Description: Inter 16.
- Price: Inter Medium 20, "$XX.XX / pack" (5px gaps).
- Buttons, full width, stacked 10px apart:
  - "ADD TO CART": black fill, gradient border (`btn-dark-gradient`).
  - "FIND IN STORES": white fill, gradient border (`btn-outline-gradient`).

**Hidden in Figma:**

- Sort row (`23:9983`), filter sidebar (`23:9991`), and a second card row (`23:10198`).
- Gift Card card (`23:10017`): image 328×280, "Gift Card" / "Their flavor. Your treat." / "Give them something cool.", plus an old-style stepper and add-to-cart button.
- Wide "Gift Card" banner variants (`23:10236`, `23:10244`).

## Content elements

- Products come from the collection.
- Per card: image, badge, function name, flavor, description, price + "/ pack", Add to cart, Find in stores.

## Client decisions (2026-11-03)

- Build as the **collection template**, not a custom page.
- **Gift card shows as a normal card** in the grid, with the same layout as the snack cards. It needs a denomination choice before Add to cart.
- **No filters or sorting.** Pagination stays for larger collections.
- **"Find in stores"** uses one section-level URL setting for every card.

## Reuse check

- `custom-page-banner`: reuse as is.
- Instagram Feed and footer: global, already in place.
- `card-product` `card_style: 'function'`: closest match, but it has a quantity stepper, no price and a single outline button. Extend it with a variant; don't fork it.
- `main-collection-product-grid`: Dawn's grid with pagination; restyle it or replace its card call.

## Dependencies & risks

- Metafields `custom.function_name`, `custom.short_description` and `custom.badge` are still not created in the store (same as Featured Products), so cards fall back to product titles until they exist.
- Gift card denominations: the card needs a variant select, since Figma shows none.
- No mobile frame. Planned: 1 column, stacked, matching the homepage card's mobile type scale.
- The "/ pack" suffix is hard-coded copy (translatable). Confirm that every product is sold per pack; the gift card won't show it.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Option 1 (restyle Dawn's grid + add a `collection` card variant) approved; schema approved 2026-11-03.
- Banner image per collection: `custom-page-banner` uses the collection metafield `custom.collection_banner` (Image, created by the user 2026-11-03) when it's set, otherwise the section's `background_image`. The desktop aspect ratio follows whichever image is used.
- Template: `custom-page-banner` replaces `main-collection-banner`. Its heading falls back to the collection title, so "FUNCTION MEETS FROZEN" only shows if it's typed into the banner's heading, which then applies to every collection. Banner images need uploading in the customizer.
- Grid: filters and sorting are off, quick add is `standard`, 12 per page, 3 columns on desktop and 1 on mobile, `scheme-7` (cream→white), 80/80 padding on desktop and 60/60 on mobile, 40px side inset, 55px gaps (Dawn grid spacing variables).
- Card: reuses the `function` branch. `collection` adds the price + `price_suffix` and full-width "Add to cart" (`btn-dark-gradient`) + "Find in stores" (`btn-outline-gradient`), with no stepper. The image box is 202 × 280, or 328 × 280 for gift cards. Multi-variant non-gift products show "Choose options" linking to the product page.
- Gift card: a `<select name="id">` of denominations, no price row, and no "Find in stores" button (gift cards aren't sold in stores). This is a judgement call, so confirm with the client.
- `stores_link` is set to `/pages/retailers-partners` in the template as a placeholder, because the header's "Find Us" goes to `#`. Change it in the customizer.
- Verified on the dev server: `/collections/frontpage` and `/collections/all` render with 0 Liquid errors. Snack products show the price, "/ pack" and both buttons, and multi-variant products show "Choose options". Theme Check: 0 errors. The LiquidComplexity warning on `card-product.liquid` rose from 140 to 173.
- **Not verified:** the gift card path, because the dev store has no gift card product. The visual diff is deferred; the user checks visually.

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
- **Fix (2026-11-02):** image slot now fits the uploaded photo (square photos no longer leave ~100px of empty space: `h-auto`, max 280/360) and the quantity + add-to-cart row is pinned to the card bottom (`mt-auto`) so rows align when titles wrap.

---

## Community Videos

**Status:** built
**Node ID:** 3:808 (mobile 3:9175)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-808
**Templates:** index
**Complexity:** high
**Section file:** sections/custom-community-videos.liquid + snippets/card-product.liquid (`card_style: 'mini'`) + `custom-card-slider` / `custom-video-modal` in assets/custom.js

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

- Option 2 (popup player) approved over the recommended inline play; schema approved 2026-11-02. Figma was briefly disconnected; build used the live nodes after re-auth.
- Live Figma vs brief: cream→white fade, `p-100` / `py-80 px-20`; eyebrow Orange Inter Medium 24/20; header left-aligned desktop / centered mobile; video card 460 (desktop) / 400 x 320 (mobile), radius 20, p-20, top fade rgba(0,0,0,.8) 3.4% → transparent 27.4%; @ icon 18px + Inter Regular 16; play icon 55px; product mini-card cream, 1px black border, radius 10, p-20/p-10, 83x80 image, name Plus Jakarta Bold 20 (h5 style), price Inter Medium 16; pagination 60x6 desktop / 40x6 mobile (new `.ctm-pagination-wide`), slider at all widths.
- Product mini-card is Dawn `card-product` with a new `card_style: 'mini'` branch (team rule: one product card snippet) — real price via money filter (`from_price_html` when prices vary).
- Icons `assets/icon-at.svg` and `assets/icon-play-circle.svg` taken from the Figma SVG assets (fill → currentColor).
- Popup: native `<dialog>` (built-in focus trap, Escape, top layer) instead of Dawn's `trapFocus` — deviation from the schema note, same behaviour; backdrop click / × close; video only loads when the popup opens (`<template>` per card); focus returns to the play button; scroll locked while open; slider autoplay paused while open. No popup design exists in Figma — layout invented to match the cards (flagged).
- Play button is a real `<button>` labelled "Play video by @handle"; its ::after stretches over the card media so the whole image is clickable (handle link stays on top).
- Cards without a video show no play button (empty state).
- Added to `templates/index.json` after Function Meets Flavor, linked to the 3 flavor products.
- Verified: 3 cards, 3 mini-cards with real prices, dialog present, valid Swiper JSON; 0 Liquid errors; Theme Check 0 errors; ESLint clean.
- **Visual diff + popup/slider interaction check deferred** — user will check later; videos/posters to be uploaded in the customizer.
- **Fix (2026-11-02):** mini-cards overflowed their 410px columns (content-box inheritance inside Swiper) — fixed by the global `.swiper-slide` border-box rule. Blank posters/thumbnails in the user's full-page capture were lazy-loading in the capture tool; images are present in the HTML (`Card_8.png` etc.).

---

## Reviews

**Status:** built
**Node ID:** 3:950 (mobile 3:9296)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-950
**Templates:** index
**Complexity:** high
**Section file:** sections/custom-reviews.liquid (+ arrow support in `custom-card-slider`, assets/custom.js)

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

- Option 1 (review blocks + optional product link) approved; schema approved 2026-11-02.
- Live Figma vs brief: black with corner glows (Figma 2637x2179 SVG → two CSS radial gradients, `show_glows`); `px-28 py-100` / `px-20 py-80`; eyebrow Light Orange; header intro pl-68 | vertical divider | summary pr-68 (5 x 28px orange stars + value, label, underlined "Read all reviews" link); mobile centered with horizontal divider and a one-row summary (1 star + value | 27px line | label).
- Cards: cream, radius 20, p-28 / p-20, 320 wide on mobile; stars 28/18 + tag bar 28x4 / 20x2 + Inter Black 16/12 in the per-review accent (Orange / Magenta / **Deep Purple** for Recovery — differs from the Electric Blue used elsewhere); title sentence-case Plus Jakarta Bold 24 (6%) / 20 (new `.title-review`); quote Inter 20/16 (new `.content-quote`); footer divider + name | line | blue check + "Verified Buyer".
- **Font deviation:** Figma mobile card titles use **Fredoka Bold 20** (only use in the file). Built with Plus Jakarta Sans per recommendation (user didn't choose) — flag to designer.
- Desktop: 3 per view, 40px circle arrows (Swiper navigation, added to the shared `custom-card-slider`), no dots. Mobile: 320 centered cards + white-20% dots (new `.ctm-pagination-light`), no arrows.
- Icons from Figma SVGs: `icon-star.svg`, `icon-circle-arrow-right.svg` (prev = rotated), `icon-check-circle.svg` (Electric Blue).
- Tag text/colour: override → product `custom.function_name` / `custom.accent_color` → product title / Orange. Template sets the Figma labels/colours explicitly and links each review to its flavor product.
- Added to `templates/index.json` after Community Videos. Divider colours (white 40% on dark, black 20% on cards) inferred — Figma line assets not read.
- Verified: 3 cards, 2 arrows, verified badges, accents #FF6F00 / #D11771 / #45158C; 0 Liquid errors; Theme Check 0 errors; ESLint clean.
- **Visual diff + arrow/slider interaction check deferred** — user will check later.
- **Fix (2026-11-02, full-page review):** third card was clipped and cards overlapped — Swiper's `.swiper-wrapper` is content-box and Dawn's `box-sizing: inherit` made padded slides grow past their columns. Global rule in components.css forces `border-box` on `.swiper-slide` and descendants (also fixes Community Videos mini-cards and video-card heights).

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

- **Card layout (2026-11-03, product page, Figma `23:10713`):** option 1 approved and schema approved. A new `layout` setting, "page" (default, unchanged) or "card", adds an image card to `custom-faq`. In card mode the eyebrow, subheading, search and tabs are hidden, and the heading is left-aligned. The 571 × 400 card (radius 20, brand tint from Figma's gradient stops) sits beside one numbered list, 55px apart, bottoms aligned; on mobile the card is 320 tall and stacks above the list. The card's settings are `card_image`, `card_gradient`, `card_heading` (a `<p class="h2">`, so it isn't a second heading), the button (falls back to `/pages/faq`), and two text links that each need both a label and a URL.
- The question row markup moved into `snippets/faq-item.liquid`, which both layouts render. The FAQ page output is unchanged: 38 items, 6 tabs, 0 errors.
- Placed in `templates/product.json` as `product_faq_section` (between `function_flavor_band` and `reviews`): `scheme-7`, padding 80/80 on desktop and 60/60 on mobile, 5 questions with Figma's placeholder answers. The card image still needs uploading.
- **SEO watch:** this section prints its own FAQPage JSON-LD. If the `product_faq` block in `main-product` also prints FAQPage, the page will have two, so one of them must be dropped.
- **Fix (2026-11-03, user screenshot vs `23:10983`):** the card heading rendered black. It's a `<p class="h2">`, and `.title-white` only colors h1–h6, so `.faq__card-heading` now sets white itself. "Shipping information" also wrapped to a second line: Figma's row only just fits (207 + 89 + 191 + 2 × 20 = 527 of 531px). On desktop the actions row no longer wraps, the links don't shrink, and the pill is `flex-1 min-w-0`. **Known deviation:** the pill's side padding is 20px instead of Figma's 28 so "View all FAQs →" isn't squeezed. It still wraps on mobile.

- Built from Option A (section blocks: `category` + `question`, `max_blocks: 50`). Template `templates/page.faq.json` holds the 6 tabs and the 13 Figma questions under "Products and functions". The other 5 tabs have 5 demo placeholder questions each (`demo_question_1`–`25`, added by another session) until the client supplies real content. That's 44 of the 50-block limit.
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

**Status:** built
**Node ID:** 3:7200
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-7200
**Templates:** retailers
**Complexity:** medium
**Section file:** sections/custom-partner-cards.liquid

## Visual brief

Cream→white gradient background (`scheme-7`), `px-40 py-100`, header→cards gap 40.

- **Heading:** centered eyebrow "PARTNER WITH US" (Inter Medium 24, orange) and heading "BUILT FOR MORE THAN ONE AISLE." (H2 48), 10 apart.
- **Cards:** 3 cards, 20 apart; transparent, 2px border `rgba(0,0,0,0.2)`, radius 20, padding 20. Image fills the left half at full card height (~200×227, radius 10); right half: title (Plus Jakarta Sans Bold 20 uppercase = h5), text (Inter 16) 10 below, full-width "LEARN MORE →" outline-gradient pill ≥28 below, pinned to the card bottom.
- **Mobile:** no frame. Stack the cards.

## Content elements

- Eyebrow, heading
- Per card: image, title, text, button label + link

## Schema plan

**Section settings:**

- `eyebrow` — text
- `heading` — textarea
- `heading_tag` — select (h2/h3)
- `columns_desktop` — select 2/3/4 (default 3)
- Mandatory trio (color scheme: `scheme-7`)

**Blocks:**

- card: `image` (image_picker), `title` (text), `text` (textarea), `button_label` (text), `button_link` (url) — max 6

## Design tokens used

- Colors: `--color-cream`, `--color-white`, `--color-orange`
- Typography: H2/H2-1, H4.2/H4.2-1 (card title), H5/H5-2
- Spacing: 40 side / 100 vertical, 20 card gap/padding, 10/28 internal

## Interactions & JS

None.

## Reuse check

No match — build from scratch.

## Dependencies & risks

Card link destinations unknown — buttons stay hidden until a link is set. Card copy is lorem ipsum in Figma; real copy needed from the client.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-02, Option B (Merchant Editable).
- **Interpolated:** 1 column below 750, 2 from 750–1198, desktop setting from 1199; below 480 the card image stacks above the text at 200:227; mobile padding 60/60; side gutter 20 below 990.
- Created `templates/page.retailers-partners.json`: Page Banner → Image With Text ("Retailers & Partners / Let’s Stock⏎Something Better.", BECOME A PARTNER) → Function Meets Flavor (copied from `index.json`) → Partner Cards → CTA Banner (inline, "Ready to work together?", CONTACT US → /pages/contact, scheme-6).
- Verified: Theme Check clean, no Liquid errors on `?view=retailers-partners`, all section/block settings referenced. **Visual check deferred.**

---

## Contact

**Status:** built
**Node ID:** 3:5203
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=3-5203
**Templates:** contact
**Complexity:** medium
**Section file:** sections/custom-contact.liquid

## Visual brief

Cream→white gradient (`scheme-7`), `p-100`, two columns 604 / 653 with a 55 gap.

- **Left:**
  - Eyebrow "CONTACT" (orange) and heading "LET'S TALK" (48)
  - Intro text (Inter Medium 24, forced break after "freezer thoughts?"), 10 under the heading
  - Three icon rows: phone "302.499.3506", email "information@greenhillbrands.com" (Inter Medium 20 orange link), address "Kennett Square, Pennsylvania & New Castle, Delaware"
  - Rows: Inter Regular 20, icons 20 (pin 19×25), 10 icon gap, 20 row gap
  - A greyscale map image (radius 10) filling the remaining column height (604×253 at 1512); 55 between title block, rows and map
- **Right:** a form card with a 6px brand-gradient border (measured), radius 20, padding 20, titled "SEND A MESSAGE" (H3 32), containing:
  - First and last name side by side, then email and message
  - Labels Inter Medium 16 uppercase 10 above the field; pill inputs (radius 48, 2px black border, white/20 fill, placeholder black/40); message textarea radius 18, ~109 tall; field groups 28 apart, name pair 20 apart
  - A full-width black "SEND MESSAGE →" pill, and the note "We’ll get back to you as soon as we can"
  - reCAPTCHA (Shopify adds it automatically)
  - A hidden "What can we help with?" select exists in Figma (not built)
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

- Built 2026-11-02, Option B (Merchant Editable): `contact_item` blocks (phone / email / location, auto `tel:`/`mailto:`), fixed four-field `form 'contact'` with editable labels/placeholders/button/note/success message.
- New shared pieces: `.ctm-field` / `.ctm-label` / `.ctm-input` / `.ctm-textarea` and `.ctm-gradient-card` (masked ring, transparent interior) in `css/components.css`; `.content-xsmall`, `.content-contact`, `.content-contact-accent` in `css/base.css`; icons `icon-phone.svg`, `icon-email.svg`, `icon-location.svg` (from Figma, currentColor); `<custom-contact-form>` in `assets/custom.js` joins first + last name into `contact[name]` on submit (first/last also post as their own fields).
- **Interpolated:** stacked below 990 (info → rows → map at 604:253 → form); name fields stacked below 480; gap 40 → 55 from 1366; mobile padding 60/60.
- `templates/page.contact.json` replaced: Page Banner → Contact (Dawn `main-page` + `contact-form` removed from the template; their files untouched).
- Verified: Theme Check clean, ESLint clean, no Liquid errors on `/pages/contact`, tel/mailto links and all `contact[...]` fields render, all settings referenced. Test submission not sent (would email the store). **Visual check deferred.**

---

## Legal Content

**Status:** built
**Node ID:** 23:12915 (Privacy) · 23:12998 (Terms) · 23:13084 (Accessibility) · 23:13166 (Cookie preference settings)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-13084
**Templates:** page.legal (new) — Privacy Policy, Terms & Conditions, Accessibility Statement, Cookie preference settings
**Complexity:** low
**Section file:** sections/custom-legal-content.liquid

Frames (1512 desktop only, no mobile): Privacy `23:12903`, Terms `23:12986`, Accessibility `23:13072`, Cookie `23:13154`. All four use the same layout; no page banner (header → content → footer; Instagram feed not shown).

## Visual brief

Cream→white gradient (`#FFF8F0` → white), padding 80 top/bottom, 55 sides, a single 1000px column centered (x=256 at 1512), sections stacked with a 55 gap.

- H1 page title: Plus Jakarta Sans Bold 64, tracking 4% (2.56px), uppercase, `#2D2926` (Black C). Cookie title wraps to two lines at 1000px.
- Intro paragraph (optional, Privacy/Terms/Accessibility): Inter Regular 16, black.
- Repeating groups: heading Plus Jakarta Sans Bold 24, tracking 6% (1.44px), uppercase, `#2D2926`; 20 below it, one or more paragraphs Inter Regular 16 with 20 between paragraphs.
- Mobile: no frame. Interpolate: 20px gutter, title 32 (H3 mobile scale), group heading 20, gap 40, padding 60.

## Content elements

- Page title (H1)
- Intro paragraph
- Heading + paragraph groups (Privacy 3, Terms 4, Accessibility 2 "DISCLAIMER"/"CONTACT US", Cookie 2)
- Copy: Accessibility has final copy; Privacy/Terms/Cookie are lorem ipsum placeholders.

## Schema plan

Section: `show_title`, `content_width` (1000), mandatory trio (scheme-7, padding 80/80 · 60/60, `custom_class`). Blocks: `group` (heading, richtext). Copy lives in each page's content in admin.

## Design tokens used

- Colors: `--color-cream` gradient (`--gradient-cream`), `#2D2926` heading color, black body
- Typography: H1/H1-1 (64), H4.1/H4.1-1 (24), H5/H5-2 (16)
- Spacing: 80 / 55 / 20

## Interactions & JS

None.

## Reuse check

Dawn `main-page` renders `page.title` + `page.content` (rte) — near match; needs Figma typography/width/gradient. No existing custom section matches.

## Dependencies & risks

- Shopify's built-in `/policies/*` pages are not theme-templatable; these are built as regular Pages using the `page.legal` template, linked from the footer Legal menu.
- Privacy/Terms/Cookie copy is lorem ipsum — real legal copy needed from the client.
- "Cookie preference settings" is designed as a static text page; a real consent toggle (Shopify Customer Privacy API / consent banner app) is not in the design. Confirm.
- No mobile frame.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-03, Option C (page title + `page.content`, optional `group` blocks). Template `templates/page.legal.json` (assign it to the 4 legal pages in admin).
- CSS: `.legal*` in `css/components.css`; new token `--color-ink: #2d2926` (Figma "Black C") in `css/application.css`. Rich text H2/H3/H4 in page content get the 24 uppercase group-heading style; 55 between groups, 20 heading→text and between paragraphs.
- **Interpolated (no mobile frame):** title 32 → 48 (768) → 64 (1199); group heading 20 → 24 (990); gaps 40 → 55 (990); padding 60/60 mobile, 20px gutter.
- Per-policy templates with Figma copy as `group` blocks (blank heading = intro paragraph): `page.privacy-policy.json` (intro + 3), `page.terms-conditions.json` (intro + 4), `page.accessibility-statement.json` (intro + Disclaimer + Contact Us, final copy), `page.cookie-preference-settings.json` (2). Assign each to its page and leave the page body empty (body would render above the blocks). `page.legal.json` stays as the blank shared variant.
- Store pages not created yet (Shopify connector needed re-auth). Page bodies prepared from Figma copy (Accessibility final, others lorem ipsum).
- Verified: Theme Check clean, 0 Liquid errors on `/pages/contact?view=legal`, all settings referenced.
- **Visual check 2026-11-03** (1512 / 860 / 376, sample blocks): matches 23:13084/23:12915 — 1000 column at x=256, 64 title, 24 headings, 55/20 rhythm, cream gradient. No overflow.

---

## Error 404

**Status:** built
**Node ID:** 23:13359
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-13359
**Templates:** 404
**Complexity:** low
**Section file:** sections/custom-404.liquid

Frame `23:13347` (1512, desktop only). Header → content → footer; no banner or Instagram feed.

## Visual brief

Cream→white gradient, padding 80 top/bottom, 55 sides, centered column with a 40 gap:

- Image 740×383, radius 10, `object-cover` (photo of four people with frozen bars).
- Heading "404 ERROR." Plus Jakarta Sans Bold 48, tracking 4% (1.92px), uppercase, black, centered.
- 10 below: "Page not found." Inter Medium 32, `#2D2926`, centered (H3/H3-2B).
- Button "GO HOME →": project's outline-gradient pill (white fill, 2px gradient border, px-28 py-10, radius 80, Inter Medium 16 uppercase, 20px arrow).
- Mobile: interpolate — image full-width at 740:383 ratio, heading 32, subheading 20.

## Content elements

- Image (image_picker, never bundled)
- Heading, subheading, button label + link

## Schema plan

Section: `image`, `heading`, `subheading`, `button_label`, `button_link`, mandatory trio (scheme-7, padding 80/80 · 60/60, `custom_class`). No blocks.

## Design tokens used

- Colors: `--gradient-cream`, black, `#2D2926`, `--gradient-brand` (button border)
- Typography: H2/H2-1 (48), H3/H3-2B (32), H5/H5-2M (16)

## Interactions & JS

None.

## Reuse check

Dawn `main-404` (fixed translated strings, no image). Button style matches the existing outline-gradient pill used across the theme.

## Dependencies & risks

- Image comes from the merchant (image_picker); blank state = no image block.
- No mobile frame.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-03, Option B. `templates/404.json` now uses `custom-404` (Dawn `main-404.liquid` untouched). Heading is the page's H1 (`.h2` scale = 48 at 1440+). Button: `ctm-button btn-outline-gradient`, blank link → homepage.
- Image not set in the template (image_picker, merchant uploads); no image = section starts at the heading.
- **Interpolated:** image full width at 740:383, subheading 20 → 32 (990).
- Verified: Theme Check clean, 0 Liquid errors on `/products/does-not-exist` (404), all settings referenced.
- **Visual check 2026-11-03** (1512 / 376): heading, subheading and button match 23:13359. Image area not yet comparable — no image uploaded.

---

## Search Results

**Status:** built
**Node ID:** 23:13245
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-13245
**Templates:** search
**Complexity:** medium
**Section file:** sections/custom-search-results.liquid

Frame `23:13233` (1512, desktop only): Header → **Page Banner** ("SEARCH", 400 tall — reuse `custom-page-banner`) → Search Results → **Instagram Feed** (reuse `custom-instagram-feed`) → Footer.

## Visual brief

Cream→white gradient, padding 100 all sides (1312 inner width):

- Search field right-aligned: 410×40, white/20 fill, 2px black border, radius 48, px-20 py-10, 20px search icon + Inter Regular 16 placeholder "Search" (same style as `.ctm-input`).
- 40 gap, then a 3-column card grid (410.67 cols, 40 column gap, 40 row gap): image 280 tall radius 10 cover; 20 gap; title Plus Jakarta Sans Bold 24 tracking 6% uppercase centered; excerpt Inter Regular 16 centered, truncated (~3 lines with "…"); "LEARN MORE →" outline-gradient pill centered.
- Pagination centered, 8 gap: 40px circular prev/next arrow buttons (gradient ring), page numbers Plus Jakarta Sans Bold 16; current page has the brand-gradient fill + white text (px-9 py-3, radius 1); "..." for gaps.
- Mobile: interpolate — 1 column (2 at tablet), full-width search field, padding 60/20.

## Content elements

- Search input (query prefilled with `search.terms`)
- Result cards: image, title, excerpt, button (works for products, articles, pages)
- Pagination
- Empty / no-results state (not in Figma)

## Schema plan

Section: `placeholder`, `results_per_page` (6), `show_image`, `show_excerpt`, `excerpt_words` (22), `button_label`, `empty_heading`, `empty_text`, mandatory trio (scheme-7, padding 100/100 · 60/60, `custom_class`). No blocks (one card type).

## Design tokens used

- Colors: `--gradient-cream`, `--gradient-brand`, black
- Typography: H4.1/H4.1-1 (24), H5/H5-2 (16), H5/H5-1 (16 bold, pagination)
- Spacing: 100 / 40 / 20

## Interactions & JS

Standard GET form to `/search`; Shopify pagination links. Optional Dawn predictive search on the input.

## Reuse check

Dawn `main-search` (product grid + filters/sort, Dawn product cards) — functionally a match but visually far from Figma. `custom-page-banner` and `custom-instagram-feed` reused as-is. `snippets/pagination.liquid` exists (Dawn markup).

## Dependencies & risks

- Figma shows no filters/sorting/result-type tabs — Dawn's filters would be removed.
- Result types are mixed (products/articles/pages); card image/excerpt source differs per type.
- No empty-state or mobile design.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-03, Option B. `templates/search.json`: Page Banner (heading "Search") → Search Results; Instagram feed comes from `footer-group.json` (global). Dawn `main-search` removed from the template only.
- Cards: product `featured_media`, article `image`, pages get a neutral `bg-black/5` image box for alignment; excerpt `strip_html | truncatewords` + 3-line clamp. Buttons `aria-describedby` the card title. Visually hidden results-count H2 (`role=status`).
- Pagination: `paginate.parts`, 40px gradient-ring arrows (disabled at ends, 40% opacity), gradient-filled current page.
- **Interpolated:** 1 col → 2 (640) → 3 (990); search field full width below 768; padding 60 mobile, 20 gutter.
- **Deviation:** no-results state has no Figma design (uses H4 + body text). Couldn't trigger it on the dev store — Shopify's fuzzy search returned results for nonsense queries.
- Verified: Theme Check clean, 0 Liquid errors on `/search`, `/search?q=a` (6 cards, pagination), `?page=2`, all settings referenced.
- **Visual check 2026-11-03** (headless Chrome at 1512 / 860 / 376, no horizontal overflow): matches 23:13245. Fixed after the check: (1) image-less cards collapsed — Dawn's `div:empty{display:none}` hid the empty media box → `.search-card__media:empty{display:block}`; (2) buttons now share a row baseline (`.search-card > .ctm-button{mt-auto}`).
- **Watch:** `shopify theme dev --theme-editor-sync` overwrote `templates/search.json` with Dawn's `main-search` once (17:34) — rewritten. If the search page shows Dawn's layout again, the editor sync pulled the remote template back.

---

## Product Main (PDP)

**Status:** built
**Node ID:** 23:10287 ("SEction 1" in frame "IP - Products 1" `23:10276`)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-10287
**Templates:** product (section `main`)
**Complexity:** high
**Section file:** sections/main-product.liquid (Dawn, restyled in place — Option A)

## Visual brief

Cream→white gradient (scheme-7), p-100. Gallery 680 (four 120×120 thumbs, 20 apart, active = 3px brand-gradient ring | 540×540 cream/28% panel, radius 20) · 55 gap · info column 577: eyebrow (orange H4.1 24), title (H2 48, Black C), "6-PACK — $XX.XX" (24 bold), 5×28 stars + "58 Reviews", description (Inter 16), stats row between 1px black/40 rules, Choose Your Function + Flavor cards, QUANTITY + pill stepper, Add to cart (black) + Find in stores (outline) halves, 3 accordions. Groups 28 apart; eyebrow→rating group 10 apart.

## Build notes

- Option A: Dawn's main-product kept (variant JS, product-form, media gallery, pickup, app blocks). Wrapper `.main-product`, inner `.main-product__inner` (1512 container, px 20/55/100). Desktop grid 680fr/577fr at 990+. CSS under `/* ===== PDP main ===== */` in css/components.css.
- New blocks: `eyebrow` (text, falls back to `custom.function_name`). Price block gained `pack_label` (falls back to the selected variant title; hidden for single-variant products) — inside `#price-{section}` so it updates on variant change. Rating block now renders `snippets/product-rating.liquid` (Figma star `icon-star.svg`, `reviews.rating` / `reviews.rating_count`, locale `products.product.review_count`). Buy buttons gained `find_in_stores_label` / `find_in_stores_link` (blank link hides it) and a `submit_class` param (`ctm-button btn-dark-gradient`).
- Section settings added: `padding_top_mobile`, `padding_bottom_mobile` (desktop padding switches at 990, no more 0.75 scaling), `custom_class`.
- Gallery = Dawn "thumbnail" layout restyled: thumbs column left on desktop (scrolls past 540), main media forced square (`--aspect-ratio: 1`) with object-contain + 20 inset. Mobile keeps Dawn's swipe slider + counter.
- Add-to-cart loading spinner removed (markup in buy-buttons + `loading` toggles in assets/product-form.js) per shopify-liquid rule; `aria-disabled` still blocks double submits.
- Template: vendor, share and variant_picker blocks removed (not in Figma); Shop Pay button off.
- Product blocks: `product_stats`, `product_faq`, `function_flavor` each render their own snippet (product-stats / product-faq / product-function).
- Verified: Theme Check clean (only Dawn's existing `seo_media` UnusedAssign), `/products/chocolate-brownie-batter` 200 with 0 Liquid errors. Eyebrow, pack label, rating and Find in stores don't render on the dev product yet — their data (metafield, variants, review metafields, link) is empty. **Visual check deferred** — user will check.
- **Open:** review source (app vs standard metafields), "6-PACK" source, Find in stores destination.

### Per-product accent colour (Figma Products 1–4: 23:10276 orange, 23:11940 Energy magenta, 23:11596 Recovery deep purple, 23:11267)

**Create this metafield definition in Shopify admin** (Settings → Custom data → Products → Add definition):

| Field     | Value                                                                  |
| --------- | ---------------------------------------------------------------------- |
| Name      | Accent color                                                           |
| Namespace | `custom`                                                               |
| Key       | `accent_color`                                                         |
| Type      | Color (single value)                                                   |
| Usage     | Eyebrow, review stars, gallery panel tint (28%); open FAQ stays orange |

- Code: main-product reads `product.metafields.custom.accent_color.value`; when set it adds `.main-product--accent` and `style="--product-accent: #hex"` on the wrapper. Empty = no output; CSS falls back to the orange token (eyebrow/stars) and the cream/28% panel.
- Values (Figma variables): Daily Protein = orange `#FF6F00`, Energy / Mocha = magenta `#D11771`, Recovery = deep purple `#45158C` ("Chocolate Peanut Butter/Deep Purple", same as `--color-deep-purple`). Closed FAQ titles stay black on every product.

### FAQ under the gallery (Figma Products 4, 23:11267)

- Product FAQ block has a `placement` setting: "Product info column" (default, Products 1–3) or "Under the gallery" (680 wide, 55 below the images from 750 up, where the PDP is two columns; below 750 it follows the product info).
- Alternate template **`templates/product.faq-under-gallery.json`** = product.json with only `product_faq.settings.placement: "media"`. Figma mocks it with **Chocolate Brownie Batter** (Daily Protein); assign it per product in admin (Products → product → Theme template → `faq-under-gallery`) for whichever products the client wants in this layout. Keep the two templates' other blocks/sections in sync if product.json changes.

---

## Learn — page layout (blog + article)

Two desktop frames (1512), no mobile frames:

- **Blog** `23:12287` ("IP - Learn"): Header → **Page Banner** "LEARN" (`23:12296`, IP Header instance, 400 tall — reuse `custom-page-banner`) → **Blog Featured** (`23:12298`) → **Blog Latest** (`23:12393`) → Instagram Feed + Footer (global, `footer-group.json`).
- **Article** `23:12547` (second frame also named "IP - Learn"): Header (IP Header instance hidden — no banner) → **Article Main** (`23:12558`) → Instagram Feed + Footer.

Typography values below are read from the screenshots + layer heights and matched to the global type scale. `get_design_context` was unavailable during analysis (Figma MCP auth dropped) — **re-verify font sizes/colors on the Phase 3 fetch.**

---

## Blog Featured

**Status:** built
**Node ID:** 23:12298 ("Section 1" in `23:12297`)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-12298
**Templates:** blog
**Complexity:** medium
**Section file:** sections/custom-blog-featured.liquid (+ snippets/article-meta.liquid)

## Visual brief

1512×800, cream→white gradient, p-100 (1312 inner), 40 between toolbar and card.

- **Toolbar** (items-end, 40 gap): H2 "GOOD STUFF TO KNOW." (Plus Jakarta Sans Bold 48 / 4%) left; right half = search pill 410×40 + 20 gap + "Filter" pill (Inter Regular 16 + 16px `bi:filter`). Both pills: white/20 fill, 2px black border, radius 48, px-20 py-10.
- **Featured card**: **6px brand-gradient border, radius 10**; image fills the left half (left corners rounded); 55 gap; copy column padded 28 top/right/bottom, 28 between groups:
  - eyebrow "FEATURED" — **Inter Medium 24**, `#FF6F00`, uppercase; 10 above the title
  - title — H2 48 / 4%, 2 lines
  - infos — 24px icons (`hugeicons:user-round`, `basil:calendar-outline`, `hugeicons:tag-02`), 4 gap, **Inter Medium 16**, 28 between items
  - excerpt — Inter Regular 16, 2 paragraphs
  - "READ THE STORY →" — black pill, gradient border, radius 80, px-28 py-10 (`.btn-dark-gradient`)
- Figma composes the image from three stacked photos — built as the single article image.
- Mobile (interpolated): toolbar stacks (heading, then search + filter row); card stacks image (4:3) above copy, p-20.

## Content elements

- Section heading, Featured eyebrow, button label, search placeholder, filter labels — locale strings (`blogs.learn.*`)
- Featured article = newest article in the blog (`blog.articles.first`): image, title, author, date, first tag, excerpt (falls back to content truncated to 55 words)
- Search form → `/search?type=article`; Filter `<details>` → `blog.all_tags` tag URLs

## Schema plan

**User decision (2026-11-03): content is managed in the admin only.** The customizer exposes just `padding_top`, `padding_bottom`, `padding_top_mobile`, `padding_bottom_mobile` and `custom_class`. Color scheme is fixed to scheme-7 (cream gradient). No blocks.

## Design tokens used

- Colors: scheme-7 (`--gradient-cream`), `--gradient-brand` (card ring, button border), `--color-orange` (eyebrow, active filter), black
- Typography: H2 (48), `.content-large` (Inter Medium 24) eyebrow, Inter Medium 16 meta, Inter Regular 16 body
- Spacing: 100 / 55 / 40 / 28 / 20 / 10 / 4

## Interactions & JS

No JS. Search = GET form. Filter = native `<details>` dropdown (All + each tag, `aria-current` on the active one); closes on toggle, not on outside click.

## Reuse check

Reuses `.search-results__form` / `__input` / `__form-icon` (search pill), `.ctm-gradient-card` (6px ring, radius overridden to 10), `.ctm-button.btn-dark-gradient`, `.content` / `.ctm-title` wrappers. New shared snippet `article-meta` (Blog Latest + Article Main reuse it).

## Dependencies & risks

- **Category = first tag** (no category field on articles) — confirm, or add an article metafield later.
- Search lands on the global Search Results page filtered to articles (all blogs, not just Learn).
- The featured article also appears in "The Latest" (excluding it would break pagination counts).
- No mobile design.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

- Built 2026-11-03, Option B then reduced to admin-only per user (no article picker / text settings). Locale keys under `blogs.learn` in `locales/en.default.json`.
- New SVG icons: `assets/icon-user-round.svg`, `icon-calendar.svg`, `icon-tag.svg`, `icon-blog-filter.svg` (Figma paths, `currentColor`, 24/16 roots).
- Image `loading` eager when the section is in the first two slots (it sits right under the banner), lazy otherwise; `sizes` from the 623px desktop half.
- `templates/blog.json`: Page Banner ("Learn", h1, same settings as search.json) → `featured` → Dawn `main` (until Blog Latest replaces it).
- CSS under `/* ===== Blog featured ... */` and `/* ===== Article meta row ... */` at the end of css/components.css.
- Verified: JSON valid, Theme Check — no findings in the new files, Tailwind test build compiles the new classes, `/blogs/news` 200 with 0 Liquid errors (featured card, tag filter with 2 dev tags, author/date/tag rendered). Dev article has no image — the empty 4:3/488 box is kept. **Visual check deferred** — user will check.

---

## Blog Latest

**Status:** pending
**Node ID:** 23:12393 ("Section 2" in `23:12297`)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-12393
**Templates:** blog
**Complexity:** medium
**Section file:** _(filled in after build)_

## Visual brief

1512×855, **black** background (dark scheme), padding 80 (content 1352 at x 80 — note: 80 gutter, not the 100 used by Blog Featured).

- H2 "THE LATEST" (48, white), left-aligned.
- 40 below: 3-column card grid, cards 424 wide, 40 column gap (424×3 + 40×2 = 1352). Card (515 tall):
  - image 424×280, radius ~10, cover
  - 20 gap, title centered (30 tall ≈ H4.1 24 tracking 6% uppercase, white)
  - 20 gap, infos row (author · date · category with 24px icons) spread across full card width (author x 0, date x 155, category x 324)
  - 20 gap, excerpt Inter 16 centered, 3 lines with "…"
  - 20 gap, "LEARN MORE →" white pill with gradient border, centered (193×44)
- 40 below the grid: pagination centered — 40px gradient-ring circle prev/next arrows, page numbers 1 2 3 … 5, current page gradient-filled (same as Search Results pagination).
- Mobile (interpolated): 1 col → 2 (640) → 3 (990); padding 60/20.

## Content elements

- Heading — H2
- Article cards: image, title, author, date, category, excerpt, button
- Pagination (3 per page in the mock)

## Schema plan

_(Proposed.)_ This is the blog's main listing (`paginate blog.articles`), so it is the template's `main` section.

- `heading` — text — "The Latest"
- `articles_per_page` — range (3–24, default 6; Figma shows 3)
- `show_image` / `show_author` / `show_date` / `show_category` / `show_excerpt` — checkbox
- `excerpt_words` — range; `button_label` — text ("Learn more")
- Mandatory trio (dark scheme, padding 80/80 · 60/60, `custom_class`)

## Design tokens used

- Colors: black bg, white text, `--gradient-brand` (button ring, pagination)
- Typography: H2 48, H4.1 24, H5/H5-2 16
- Spacing: 80 / 40 / 20

## Interactions & JS

None beyond pagination links. Tag-filtered URLs (`/blogs/<blog>/tagged/<tag>`) reuse this listing.

## Reuse check

- Near match: `custom-search-results` card + pagination (same card structure, centered title/excerpt/button) — differences: dark background, infos row, 424 cards / 80 gutter. Extract a shared `article-card` style or reuse its classes.
- Dawn `snippets/article-card.liquid` exists (Dawn markup) — restyle or replace.

## Dependencies & risks

- Card buttons alternate between "Button 4" and "Button 5" component instances in Figma; screenshot shows them identical — treated as one style.
- Category source (see Blog Featured).
- No empty state / mobile design.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes

---

## Article Main

**Status:** pending
**Node ID:** 23:12558 ("Section 1" in article frame `23:12547`)
**Figma link:** https://www.figma.com/design/716dxbZpF2R0c3qnv7cZkF/?node-id=23-12558
**Templates:** article
**Complexity:** medium
**Section file:** _(filled in after build)_

## Visual brief

1512×1588, cream→white gradient, padding 100 (content 1312 at x 100). No page banner on this template.

- y 100: "← BACK TO BLOG" pill, 208×44, left-aligned, black fill + gradient border (`btn-dark-gradient`).
- y 184 (40 below): centered content column 1000 wide (x 256):
  - featured image 690×500, centered, radius ~10
  - 20 gap, title centered (40 tall ≈ H3 32 uppercase)
  - 20 gap, infos row centered (440 wide: author · date · category, 24px icons)
  - 20 gap, article body (richtext, Inter 16, centered text in the mock; paragraphs ~24 apart)
  - 20 gap, "SHOP NOW →" outline-gradient pill, centered (179×44)
- y 1444 (40 below column): prev/next row full 1312 — "← PREVIOUS" outline pill left (171×44), "NEXT →" black pill right (133×44).
- Mobile (interpolated): image full width (aspect 690:500), padding 60/20, prev/next stay on one row.

## Content elements

- Back-to-blog link (→ `blog.url`)
- `article.image`, `article.title`, author, `published_at` (`%m/%d/%Y`), category
- `article.content`
- Shop Now CTA (merchant URL)
- Previous / Next article links (`blog.previous_article` / `blog.next_article`)

## Schema plan

_(Proposed.)_

- `back_label` — text ("Back to blog")
- `show_image` / `show_author` / `show_date` / `show_category` — checkbox
- `cta_label` — text ("Shop now"); `cta_link` — url (blank hides the button)
- `prev_label` / `next_label` — text
- Mandatory trio (scheme-7, padding 100/100 · 60/60, `custom_class`)

## Design tokens used

- Colors: `--gradient-cream`, `--gradient-brand`, black
- Typography: H3 32, H5/H5-2 16, buttons H5/H5-2M
- Spacing: 100 / 40 / 20

## Interactions & JS

None. Prev/next hide when there is no adjacent article. Comments not in Figma (blog comments off, or render Dawn's comment form below if enabled — confirm).

## Reuse check

- Dawn `main-article` (blocks: featured_image, title, share, content) — same data, different layout; restyle with blocks or replace with a custom section.
- Infos row identical to Blog Featured / Blog Latest — shared snippet (`article-meta`).

## Dependencies & risks

- Body text is centered in the mock — long-form centered copy hurts readability; confirm vs left-aligned.
- Shop Now destination (single URL vs per-article metafield).
- Article JSON-LD (`Article`) needed for SEO.
- Category source (shared risk).
- No mobile design.

## QA

- **Last QA run:**
- **Result:**
- **Open issues:**
- **Non-blocking suggestions:**

## Build notes
