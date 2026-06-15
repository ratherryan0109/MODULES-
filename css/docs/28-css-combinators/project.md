# Mini Project: Combinator-Powered Blog Theme

## Objective
Build a blog theme that uses CSS combinators extensively to style content without relying on excessive classes. The goal is to create a maintainable, semantic HTML structure where styling is driven by element relationships.

## Requirements

### HTML Structure (Semantic)
```html
<body>
  <header>
    <nav>
      <ul>
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li class="has-submenu">
          <a>Categories</a>
          <ul>
            <li><a>Tech</a></li>
            <li><a>Design</a></li>
          </ul>
        </li>
        <li><a>About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Article Title</h1>
        <p class="meta">Posted by Author</p>
      </header>
      <section class="content">
        <p>Article content with multiple sections...</p>
        <h2>Section Heading</h2>
        <p>Text with <a>links</a> and <strong>bold</strong>.</p>
        <blockquote>A blockquote citation</blockquote>
        <ul>
          <li>List item</li>
        </ul>
      </section>
      <footer class="tags">
        <a>CSS</a>
        <a>HTML</a>
      </footer>
    </article>

    <aside class="sidebar">
      <div class="widget">
        <h3>Recent Posts</h3>
        <ul>
          <li><a>Post 1</a></li>
          <li><a>Post 2</a></li>
        </ul>
      </div>
    </aside>
  </main>

  <footer>
    <p>Copyright information</p>
  </footer>
</body>
```

### Styling Requirements (Combinators Only)

1. **Navigation** (use child combinators)
   - Top-level nav items: bold, uppercase
   - Submenu items: normal weight, indented
   - Active nav item (class="active"): highlighted
   - Submenu visibility on hover: hover > ul

2. **Article Content** (use descendant + sibling combinators)
   - All paragraphs in article: readable line-height
   - Paragraph after h2: larger font (first paragraph of section)
   - All paragraphs after h2: indented with left border
   - Links in article: styled differently from sidebar links
   - Blockquote: styled with left border, italic
   - First paragraph in article: drop cap

3. **Sidebar** (use child combinators)
   - Widget titles: smaller, uppercase
   - Widget list items: compact spacing
   - Widget links: different color from article links

4. **Footer** (use sibling combinators)
   - Body > footer: centered, small text
   - Footer p + p: add left border separator

### Limit on Classes
- Maximum 5 classes in the entire HTML
- Use element selectors and combinators for everything else

## Deliverables
- `index.html` - Semantic blog page
- `style.css` - Combinator-based styles (document which combinators you used)

## Bonus Challenges
1. Add a comments section that uses combinators for alternating styles
2. Use the `:has()` selector (modern) to style parent elements based on their children
3. Create a table of contents that uses sibling combinators for styling
4. Add print styles that use combinators to hide navigation and sidebar
5. Use combinators to create a responsive sidebar that moves below content on mobile

## Evaluation Criteria
- Maximum 5 classes used (excluding state classes like .active)
- All four combinators used at least once
- Selectors are not overly deep (max 3-4 levels)
- No JavaScript for interactivity
- Clean, semantic HTML
- Styling correctly targets only intended elements
