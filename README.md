## DanielSan – Portfolio Website

This is my personal frontend developer portfolio, built with **React**, **Vite**, and **GSAP**.  
The site showcases my Noroff Fagskole projects, with two different UI experiences:

- A **Terminal layout** (default) with commands such as `help`, `projects`, and `contact`.
- A **Classic layout** (the original website) that can be opened from the terminal with the `classic` command.

---

## Features

- **Interactive terminal UI**
  - `help` to see available commands.
  - `projects` to list featured projects with links.
  - `contact` for ways to reach me.
  - `classic` to switch to the old/classic layout.
  - `clear` (or `Ctrl + L`) to clear the terminal output.

- **Classic portfolio layout**
  - Hero section with aurora background banner.
  - Featured projects grid with `ProjectCard` components.
  - Detailed project pages with reflections and resources.
  - Projects overview page and a custom 404 page.
  - Responsive header with navigation, dark‑mode toggle, and footer with social links.

- **Animations and polish**
  - Scroll‑based and hover animations powered by **GSAP** and **ScrollTrigger**.
  - Lazy‑loaded images for performance.
  - Basic SEO meta handling via a reusable `SEO` component.

---

## Tech Stack

- **Frontend:** React 19, Vite
- **Routing:** React Router DOM
- **Animations:** GSAP, ScrollTrigger
- **Icons:** lucide-react
- **Styling:** Custom CSS

---

## Running the Project Locally

1. **Install dependencies**

```bash
npm install
```

2. **Start the dev server**

```bash
npm run dev
```

3. Open the printed local URL in your browser (for example `http://localhost:5173/portofolio-website/`).

---

## Usage Guide

### Terminal layout (default)

When the app loads, you see a terminal interface.

Available commands:

- `help` – Show all commands.
- `projects` – List projects with links to live sites and GitHub.
- `contact` – Show contact information.
- `clear` – Clear the terminal output (keep the welcome message).
- `classic` – Switch to the old/classic portfolio layout.

The terminal also supports:

- Command history with the Up/Down arrow keys.
- `Ctrl + L` shortcut to clear the screen.

### Classic layout

Type `classic` in the terminal and press Enter.

This swaps the app into the React Router–based layout:

- `/` – Hero + featured projects + about + tools.
- `/projects` – List of all projects with more detailed cards.
- `/project/:projectId` – Full project article with reflections, technologies, and links.
- Any other path – Custom 404 (`NotFound`) page.

The classic layout includes:

- `Header` with navigation and dark‑mode toggle.
- `SkipLink` for accessibility.
- `Footer` with social links.

To get back to the terminal layout you can refresh the page.

---

## Scripts

- `npm run dev` – Start the Vite dev server.
- `npm run build` – Build for production.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint.

---

## Project Structure (high level)

- `src/main.jsx` – App entry; wraps the app in `BrowserRouter`.
- `src/App.jsx` – Chooses between terminal and classic layouts.
- `src/components/Terminal.jsx` – Terminal implementation and commands.
- `src/pages/Home.jsx` – Classic home page.
- `src/pages/Projects.jsx` – All projects view.
- `src/pages/ProjectArticle.jsx` – Single project article page.
- `src/pages/NotFound.jsx` – 404 page.
- `src/data/projects.js` – Project data used across the site.

---

## Deployment

The app is configured for GitHub Pages via Vite’s `base` setting:

- `vite.config.js` uses `base: '/portofolio-website/'`.
- The service worker is registered from `/portofolio-website/sw.js`.

Build the project with:

```bash
npm run build
```

Then deploy the contents of the `dist` folder to your hosting (for example GitHub Pages).

---

## License

This portfolio is personal work. You’re welcome to read the code and learn from it, but please don’t copy it verbatim for your own public portfolio.
