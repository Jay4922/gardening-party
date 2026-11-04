# Project Doc & Section Brief Template

The whole project lives in ONE file: `docs/figma-brief.md`. Structure:

1. **Project header** (top of file): client name, Figma link + file key, dev store, templates in scope, global design tokens tables, status table (| Section | Node ID | Template(s) | Complexity | Status |), recommended build order, project-level risks.
2. **One brief entry per section** below, each starting with `## <Section Name>` and following the exact structure below. Handle = kebab-case, matching the eventual Liquid filename (entry `## Hero Banner` with handle `hero-banner` → `sections/hero-banner.liquid`).

Consistent structure is what allows the build workflow and the qa agent to reliably find a section's entry by heading.

---

```markdown
## <Section Name>

**Status:** pending | built | passed | blocked
**Node ID:** <figma-node-id>
**Figma link:** https://www.figma.com/design/<file-key>/?node-id=<node-id>
**Templates:** <home | product | collection | page.about | ...>
**Complexity:** low | medium | high
**Section file:** _(filled in after build)_ sections/<handle>.liquid

## Visual brief

<2–6 sentences: layout structure, columns/grid, alignment, background treatment,
how desktop differs from mobile (stacking, hidden elements, different image crops).>

## Content elements

- <heading — text style token>
- <body copy — text style token>
- <image(s) — aspect ratio, focal behavior>
- <buttons/links — style variant>
- <badges, icons, video, etc.>

## Schema plan

**Section settings:**

- <setting_id> — <type> — <what it controls> — default: <value>

**Blocks:**

- <block_type>: <settings list> — min/max if relevant

<Justify anything non-obvious: why block vs setting, why a select vs checkbox.>

## Design tokens used

- Colors: <token names>
- Typography: <token names>
- Spacing: <token names / scale steps>

## Interactions & JS

<none | Swiper 11 carousel (config notes) | accordion | video embed | hover states |
custom behavior — describe expected behavior at both breakpoints>

## Reuse check

<"Matches library section X — reuse with these modifications: ..." |
"Near match: X, differences: ..." | "No match — build from scratch">

## Dependencies & risks

<metafields, metaobjects, apps, third-party scripts, client content needed,
ambiguities in the design that need clarification — or "none">

## QA

_(NOT run during development. Filled in only when the user explicitly runs the qa agent on this section/page. Until then this stays empty and status stays `built`.)_

- **Last QA run:** _(date + scope: full | liquid | css | js | ada | performance | seo)_
- **Result:** _(PASS | PASS WITH ISSUES | FAIL — quality score)_
- **Open issues:** _(critical / medium / minor carried forward)_
- **Non-blocking suggestions:** _(nits/warnings)_

## Build notes

_(filled in during/after build: approved schema deviations, decisions made,
anything a future developer should know)_
```

---

Rules:

- Never invent content that isn't in the Figma frame; if something is ambiguous, put it under Dependencies & risks as a question.
- Complexity guide: **low** = static layout, no JS, ≤5 settings; **medium** = blocks or simple JS; **high** = carousel/custom JS, metafields, app integration, or conditional logic.
- Node ID is mandatory. A brief without a node ID is invalid.
