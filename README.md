<<<<<<< HEAD
# Front-End Web Developer Notes

A responsive single-page website that explains the units of the course **FrontEnd Web Developer: Modern HTML JavaScript**. It is built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**Author:** Pavan Subramanya B.M
**College:** K.S Polytechnic, Department of CS&E

---

## Features

- All 15 course topics on one page, each with a short explanation and a code example
- Four live demos you can run in the browser (operators, if/else, functions, objects)
- Sidebar topic index that highlights the section you are reading
- Search box that filters topics as you type
- Light and dark theme, which follows your system setting and remembers your choice
- Responsive layout, with the topic list turning into a slide-in menu on phones

## Topics covered

| # | Topic | Demo |
|---|-------|------|
| 1 | HTML | |
| 2 | CSS | |
| 3 | JavaScript fundamentals | |
| 4 | JavaScript statements | |
| 5 | JavaScript comments | |
| 6 | JavaScript variables | |
| 7 | JavaScript data types | |
| 8 | JavaScript operators | Arithmetic calculator |
| 9 | Control flow | Marks to grade (if / else) |
| 10 | JavaScript functions | Greeting function |
| 11 | JavaScript objects | Object builder |
| 12 | Introduction to ES6 | |
| 13 | Introduction to TypeScript | |
| 14 | Why TypeScript | |
| 15 | Modern UI technologies | |

## Project structure

```
.
├── index.html   # Page structure and all the topic content
├── style.css    # Colours, layout, dark theme and responsive rules
├── script.js    # Theme toggle, menu, search and the four demos
└── README.md    # This file
```

## How to run

1. Download or clone this repository.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).

No installation is needed. Keep the three files in the same folder, because `index.html` loads `style.css` and `script.js` by name. The fonts load from Google Fonts, so an internet connection is needed to see them. Without one, the page falls back to your system fonts.

## How the code works

### index.html

- Uses semantic tags: `header`, `nav`, `main`, `section` and `footer`.
- Each topic is a `<section class="topic">` with an `id` such as `operators`. The sidebar links point to these ids, for example `href="#operators"`.
- Code samples are written inside `<pre><code>` blocks.
- Loads `script.js` with `defer`, so the page is parsed before the script runs.

### style.css

- **Design tokens:** colours, fonts and sizes are CSS variables declared on `:root`, for example `--bg`, `--ink` and `--accent`.
- **Dark theme:** the same variables are redefined under `prefers-color-scheme: dark` and under `[data-theme="dark"]`, so the toggle button can override the system setting.
- **Layout:** CSS Grid splits the page into the sidebar and the content. Flexbox is used for rows such as the topic headings and the demo inputs.
- **Responsive:** below 800px the sidebar becomes a fixed panel that slides in from the left.
- **Accessibility:** visible focus outlines, and smooth scrolling is switched off for people who prefer reduced motion.

### script.js

| Section | What it does |
|---------|--------------|
| Theme | Reads the saved theme from `localStorage`, switches `data-theme` on the page, and updates the button label |
| Topic list | Opens and closes the slide-in menu on small screens |
| Highlight | Uses `IntersectionObserver` to mark the topic currently in view |
| Filter | Hides topics whose text does not contain the search term |
| Operators demo | Uses a `switch` statement to apply `+ - * / % **` to two numbers |
| If / else demo | Turns marks into Distinction, First class, Pass or Fail |
| Functions demo | Calls `greet(name)`, which has a default parameter and returns a template literal |
| Objects demo | Builds an object from the inputs and shows it with `JSON.stringify` |

## JavaScript and ES6 features used in the code

- `const` and `let`
- Arrow functions
- Template literals
- Default parameters
- `switch` and `if / else if / else`
- Objects and `JSON.stringify`
- DOM methods: `querySelector`, `addEventListener`, `classList`
- `IntersectionObserver` and `localStorage`

## Customising

- **Change the colours:** edit the variables at the top of `style.css`.
- **Add a topic:** copy one `<section class="topic">` block in `index.html`, give it a new `id`, and add a matching link in the `<nav>`.
- **Change the fonts:** replace the Google Fonts link in `index.html` and update `--font-display`, `--font-body` and `--font-mono` in `style.css`.

## Deploy with GitHub Pages

1. Upload `index.html`, `style.css`, `script.js` and `README.md` to the top level of a GitHub repository.
2. Open **Settings**, then **Pages**.
3. Set **Source** to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, then click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Built with

- HTML5
- CSS3 (Grid, Flexbox, custom properties, media queries)
- JavaScript (ES6+)
- Google Fonts: Bricolage Grotesque, Instrument Sans, JetBrains Mono

## Browser support

Works in the current versions of Chrome, Edge, Firefox and Safari.

## Licence

Made for learning as part of a college course. Feel free to reuse and modify it.
=======

>>>>>>> 775cd2697e13bc751b61ccc1f1f97f9a7b65e972
