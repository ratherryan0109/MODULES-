# Module 62 Project: Interactive Technical Documentation with Figures

## Project Overview
Build an interactive technical documentation page for a programming topic of your choice. The page must use `<figure>` and `<figcaption>` extensively for all code listings, diagrams, tables, screenshots, and blockquotes. The documentation should include a navigation sidebar, a figure-of-contents, cross-references, and accessibility features.

## Learning Objectives
- Master semantic usage of `<figure>` and `<figcaption>` in a real-world document
- Implement CSS counter-based auto-numbering for multiple figure types
- Create cross-reference links between text and figures
- Build a responsive, accessible documentation layout
- Implement a dynamic figure-of-contents generator
- Apply print styles for document export

## Requirements

### Content Requirements
- **Topic**: Any programming concept (CSS Grid, React hooks, Python decorators, etc.)
- **Minimum 6 figures**:
  - 2 code listings (with syntax highlighting)
  - 1 diagram or architecture illustration (CSS-drawn or SVG)
  - 1 data table
  - 1 screenshot mockup (CSS-styled placeholder)
  - 1 blockquote (expert quote or note)
- **Document length**: 500+ words across 4+ sections

### Structural Requirements
- `<figure>` wraps every content element listed above
- Every `<figure>` has a `<figcaption>`
- Caption position varies (some above, some below) based on content type
- Auto-numbering via CSS counters (Figure 1, Listing 1, Table 1)
- In-text cross-references link to figure IDs (e.g., `see <a href="#fig-3">Figure 3</a>`)
- Sidebar navigation with links to all sections
- Figure-of-contents section listing all figures with page/anchor links

### Technical Requirements
- **CSS Counters**: Separate counter for figures, listings, and tables
- **Responsive Design**: Desktop sidebar + content; mobile collapses sidebar to hamburger
- **Print Styles**: Figures use `break-inside: avoid`; sidebar hidden in print
- **Accessibility**:
  - `aria-labelledby` on figures linking to figcaption
  - Skip-to-content link
  - Proper heading hierarchy (h1-h4)
  - Keyboard-navigable cross-references
- **JavaScript** (optional but recommended):
  - Generate figure-of-contents dynamically
  - Highlight active section in sidebar on scroll
  - Mobile hamburger toggle

## Suggested Architecture

### HTML Structure
```html
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <header>
    <h1>Topic: CSS Grid Layout Guide</h1>
    <button class="menu-toggle" aria-label="Toggle navigation">☰</button>
  </header>

  <nav id="sidebar" aria-label="Documentation navigation">
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#grid-container">Grid Container</a></li>
      <li><a href="#grid-items">Grid Items</a></li>
      <!-- Section links -->
    </ul>
    <h2>Figures</h2>
    <ul id="figure-toc">
      <!-- Dynamically populated -->
    </ul>
  </nav>

  <main id="main">
    <section id="introduction">
      <h2>Introduction</h2>
      <p>As shown in <a href="#fig-basic">Figure 1</a>, CSS Grid...</p>

      <figure id="fig-basic">
        <div class="diagram"><!-- CSS-drawn grid --></div>
        <figcaption>Basic CSS Grid with three columns and two rows</figcaption>
      </figure>
    </section>

    <section id="grid-container">
      <h2>Grid Container</h2>

      <figure id="listing-container">
        <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}</code></pre>
        <figcaption>Setting up a basic grid container</figcaption>
      </figure>

      <figure id="table-properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Values</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>display</td><td>grid | inline-grid</td><td>Enables grid layout</td></tr>
          </tbody>
        </table>
        <figcaption>Common grid container properties</figcaption>
      </figure>
    </section>
  </main>
</body>
```

### CSS Architecture
```css
/* Counter setup */
body {
  counter-reset: figure 0 listing 0 table 0;
}

/* Figure numbering */
figure[data-type="figure"] figcaption::before {
  counter-increment: figure;
  content: "Figure " counter(figure) ": ";
}

figure[data-type="listing"] figcaption::before {
  counter-increment: listing;
  content: "Listing " counter(listing) ": ";
}

figure[data-type="table"] figcaption::before {
  counter-increment: table;
  content: "Table " counter(table) ": ";
}

/* Layout */
body {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "header header" "sidebar main";
}

/* Mobile */
@media (max-width: 768px) {
  body {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main";
  }
  nav#sidebar {
    position: fixed;
    transform: translateX(-100%);
  }
  nav#sidebar.open {
    transform: translateX(0);
  }
}

/* Print */
@media print {
  nav#sidebar { display: none; }
  figure { break-inside: avoid; }
}
```

### JavaScript Functionality
```javascript
// Generate figure-of-contents
function generateFigureTOC() {
  const figures = document.querySelectorAll('figure[id]');
  const toc = document.getElementById('figure-toc');

  figures.forEach(fig => {
    const caption = fig.querySelector('figcaption');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + fig.id;
    a.textContent = caption.textContent;
    li.appendChild(a);
    toc.appendChild(li);
  });
}

// Active section highlighting
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('#sidebar a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.hash === '#' + current);
    });
  });
}
```

## Implementation Guide

### Step 1: Choose Topic & Outline
Select a programming topic and outline 4-6 sections. Plan where each figure goes.

### Step 2: Write Content
Write 500+ words of documentation. Insert figure placeholders.

### Step 3: Mark Up Figures
Wrap each content block in `<figure>` with `<figcaption>`. Add IDs and data-type attributes.

### Step 4: CSS Styling
Implement layout, figure styling, counters, responsive design, and print styles.

### Step 5: Cross-References
Add `<a>` links from text to figure IDs.

### Step 6: JavaScript Features
Generate figure-of-contents, scroll spy, and mobile menu.

### Step 7: Accessibility Audit
Test with screen reader, check ARIA attributes, verify keyboard navigation.

### Step 8: Polish
Refine typography, spacing, colors, and responsive breakpoints.

## Bonus Features
- **Dark mode toggle** with CSS custom properties
- **Copy-to-clipboard** buttons on code listings
- **Expandable code listings** (show more/less for long code)
- **Figure zoom** modal for diagrams
- **Search** within the documentation
- **Multi-page** navigation between related docs
- **Version selector** for different framework versions

## Validation Checklist
- [ ] 6+ figures with all required types (code, diagram, table, screenshot, blockquote)
- [ ] Every figure has a `<figcaption>`
- [ ] CSS counters auto-number figures correctly
- [ ] In-text cross-references link to figures
- [ ] Figure-of-contents is generated and accurate
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] Print styles hide sidebar and prevent figure page breaks
- [ ] Accessibility: skip link, ARIA labels, keyboard navigation
- [ ] Semantic HTML: proper heading hierarchy, landmark elements
- [ ] Cross-references work (clicking navigates to figure)

## Submission
Submit a single `index.html` file with embedded CSS and JavaScript. Include a screenshot of the documentation page.
