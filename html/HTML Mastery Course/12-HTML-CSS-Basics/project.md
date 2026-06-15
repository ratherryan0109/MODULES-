# Mini Project: Build a Personal Portfolio Page

## Overview

In this project, you will build a single-page personal portfolio website using HTML and CSS. The goal is to apply all the CSS concepts you have learned: selectors, box model, typography, colors, layout with flexbox, and responsive design.

## Requirements

### HTML Structure
- A header with your name and navigation links (Home, About, Projects, Contact)
- An "About Me" section with a profile image and a short bio
- A "Projects" section with at least three project cards (image, title, description)
- A "Contact" section with placeholder contact information
- A footer with copyright notice

### CSS Requirements
- Use an external stylesheet (`style.css`)
- Apply a consistent color scheme (pick 2-3 primary colors)
- Style navigation links with hover effects
- Use flexbox for layout (nav, project cards)
- Add rounded corners and shadows to project cards
- Make the page responsive with at least one media query
- Use proper spacing with margin and padding
- Set a `max-width` container to keep content centered
- Use a CSS reset at the top of your stylesheet

## Steps

1. **Setup**: Create `index.html` and `style.css` in a new folder
2. **HTML Structure**: Write the semantic HTML with sections
3. **CSS Reset**: Add the universal reset at the top of `style.css`
4. **Typography**: Set font family, sizes, and colors
5. **Layout**: Use flexbox for the navigation and projects grid
6. **Cards**: Style project cards with borders, shadows, and hover effects
7. **Responsive**: Add a media query for screens smaller than 768px
8. **Polish**: Add transitions, adjust spacing, refine colors

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Your Name</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <div class="about-content">
        <img src="https://via.placeholder.com/200" alt="Profile photo">
        <p>Write a short bio about yourself here.</p>
      </div>
    </section>

    <section id="projects">
      <h2>My Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 1">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 2">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 3">
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email: your.email@example.com</p>
      <p>Location: City, Country</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Your Name. All rights reserved.</p>
  </footer>
</body>
</html>
```

## Solution Guide (style.css)

```css
/* === RESET === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* === BASE === */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8f9fa;
}

/* === CONTAINER === */
header,
main,
footer {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

/* === HEADER === */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background: white;
  border-bottom: 3px solid #2563eb;
  margin-bottom: 30px;
}

header h1 {
  color: #2563eb;
}

nav a {
  text-decoration: none;
  color: #555;
  margin-left: 20px;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #2563eb;
}

/* === ABOUT === */
#about {
  margin-bottom: 50px;
}

#about h2 {
  margin-bottom: 20px;
  color: #1e293b;
}

.about-content {
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
}

.about-content img {
  border-radius: 50%;
  border: 4px solid #2563eb;
}

/* === PROJECTS === */
#projects {
  margin-bottom: 50px;
}

#projects h2 {
  margin-bottom: 20px;
  color: #1e293b;
}

.project-grid {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  flex: 1;
  min-width: 280px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-card h3 {
  padding: 15px 15px 5px;
  color: #1e293b;
}

.project-card p {
  padding: 0 15px 20px;
  color: #64748b;
}

/* === CONTACT === */
#contact {
  margin-bottom: 50px;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

#contact h2 {
  margin-bottom: 15px;
  color: #1e293b;
}

/* === FOOTER === */
footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #e2e8f0;
  color: #94a3b8;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  nav a {
    margin: 0 10px;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .project-grid {
    flex-direction: column;
  }
}
```

## Submission

Open `index.html` in your browser to view your portfolio. Customize the colors, fonts, images, and content to make it your own. Add more sections or projects as you like.
