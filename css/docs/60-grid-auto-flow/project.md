# Project: Magazine Layout with Dense Grid

## Goal
Build a magazine-style layout that uses `grid-auto-flow: dense` to arrange articles of varying sizes (featured, standard, sidebar, briefs) into a compact, visually interesting grid.

## Requirements
1. **4-column grid** using `grid-template-columns: repeat(4, 1fr)`
2. **Auto-rows of 120px** with `grid-auto-rows: 120px`
3. **Dense packing** via `grid-auto-flow: dense`
4. **At least 12 items** with these sizes:
   - 1 featured article (2 cols × 2 rows)
   - 1 sidebar article (1 col × 3 rows)
   - 2 medium articles (2 cols × 1 row)
   - 2 tall articles (1 col × 2 rows)
   - 6 standard articles (1 col × 1 row)
5. **Category colors** — use different background colors per article category (News, Opinion, Sports, Arts, Tech)
6. **Responsive** — collapse to 2 columns at 768px and 1 column at 480px
7. **Article cards** inside each grid cell with: headline (h3), category label, excerpt line, and read-more link
8. **No visible gaps** — use a gap of 12px and card styling with 8px border-radius

## Bonus Challenge
Add a `--order` custom property on each article that sets `order` to change the placement priority. Can you control which articles appear first in the dense fill order?

## Evaluation Criteria
- [ ] Dense packing fills all gaps
- [ ] DOM order does not match visual order (acceptable for magazine content)
- [ ] Grid is responsive without media queries (except for column count changes)
- [ ] All cards are styled consistently with category colors
- [ ] No horizontal overflow
- [ ] Dense packing does not create layout shifts

## Hints
- Use `grid-column: span 2; grid-row: span 2;` for featured articles
- Use `grid-row: span 3;` for sidebar articles
- Use `grid-column: span 2;` for medium articles
- Test with articles in different DOM orders to see how dense reflows them
- Consider accessibility — use `aria-label` and ensure tab order is logical
