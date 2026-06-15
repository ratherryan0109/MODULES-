# Building Layouts with Flexbox - Quick Reference

## Common Layout Patterns

| Pattern | CSS |
|---------|-----|
| **Sticky Footer** | `body { display: flex; flex-direction: column; min-height: 100vh; }`<br>`main { flex: 1; }` |
| **Holy Grail** | Page: column flex; Middle: row flex; Sidebars: fixed; Main: flex: 1 |
| **Nav Bar** | `display: flex; justify-content: space-between; align-items: center;` |
| **Card Grid** | `display: flex; flex-wrap: wrap; gap: 15px;`<br>Cards: `flex: 1 1 250px;` |
| **Hero Center** | `display: flex; flex-direction: column; justify-content: center; align-items: center;` |
| **Media Object** | `display: flex; gap: 15px; align-items: flex-start;`<br>Text: `flex: 1;` |
| **Equal Height Cards** | Card: `display: flex; flex-direction: column;`<br>Button: `margin-top: auto;` |
| **Sidebar Layout** | Container: `display: flex;`<br>Sidebar: `flex: 0 0 250px;`<br>Content: `flex: 1;` |
