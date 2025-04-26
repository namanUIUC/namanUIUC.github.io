# Naman Shukla - Personal Website

A clean, elegant personal portfolio website built with Astro v5.6.1 and styled with Tailwind CSS v3.4.4.

## 🎨 Branding 

The website uses a carefully selected color palette defined in `tailwind.config.mjs`:

### Light Mode
- **Paper**: `#FFFFFF` - White background color
- **Primary**: `#FD4B22` - Vibrant orange/red used for primary elements and important links
- **Secondary**: `#1676D8` - Bright blue used for secondary elements and alternative actions
- **Tertiary**: `#009262` - Rich green for supporting elements
- **Text**: `#10121A` - Dark gray/black for main text content
- **MutedText**: `#6B7280` - Medium gray for secondary text

### Dark Mode
- **DarkPaper**: `#10121A` - Dark gray/black background color
- **DarkPrimary**: `#7ECBD9` - Light blue used for primary elements in dark mode
- **DarkSecondary**: `#FEB300` - Yellow/gold used for secondary elements in dark mode
- **DarkTertiary**: `#FD4B22` - Orange/red for supporting elements in dark mode
- **DarkText**: `#FFFFFF` - White for main text content in dark mode
- **DarkMutedText**: `#8F9097` - Light gray for secondary text in dark mode

The typography uses two elegant Google fonts:
- **EB Garamond** - Used for headings and titles
- **Spectral** - Used for body text and general content

## 📚 Website Sections

The website is organized into the following sections:

1. **About Me** - A brief introduction and professional summary
2. **Work Experience** - Timeline of professional roles and positions
3. **Education** - Academic background and qualifications
4. **Publications** - Academic and professional publications with links
5. **Talks** - Presentations and speaking engagements
6. **Projects** - Highlighted professional and research projects
7. **Software** - Software projects and tools developed

Each section is built as a separate Astro component for easy maintenance and updates.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── AboutMe.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Education.astro
│   │   │   ├── Publications.astro
│   │   │   ├── Software.astro
│   │   │   ├── Talks.astro
│   │   │   └── WorkExperience.astro
│   │   └── shared/
│   │       ├── Footer.astro
│   │       ├── Sidebar.astro
│   │       └── ThemeToggle.astro
│   ├── content/
│   │   └── projects/
│   │       ├── midterm-cargo.md
│   │       ├── ancillary-pricing.md
│   │       └── shortterm-cargo.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/content/` directory contains markdown files for project content that can be managed separately from the components.

Any static assets, like images, can be placed in the `public/` directory.

## 📝 Adding a New Project Card

To add a new project to the portfolio section, follow these steps:

1. Create a new Markdown file in the `src/content/projects/` directory (e.g., `my-new-project.md`)

2. Add the required frontmatter at the top of the file with the following structure:

```md
---
title: "Your Project Title"
pubDate: 2023-07-15  # Use YYYY-MM-DD format
tags: ["Tag1", "Tag2", "Tag3"]  # Add relevant tags (optional)
image: "/portfolio/your-image.png"  # Add an image from the public directory (optional)
demoUrl: "https://example.com"  # Link to live demo (optional)
repoUrl: "https://github.com/username/repo"  # Link to source code (optional)
featured: true  # Set to true to highlight this project (optional)
---

# Project Title

## Overview

Brief description of your project here...

## Challenges Addressed

- Challenge 1
- Challenge 2

## Technical Approach

Details about your solution...

## Technologies Used

- Technology 1
- Technology 2
```

3. Add your project image to the `public/portfolio/` directory if referenced in the frontmatter

4. The project will automatically appear in the portfolio section, sorted by the `pubDate` (newest first)

The `Projects.astro` component automatically imports all Markdown files from the `projects` collection and displays them in the portfolio section. Projects are displayed in a horizontal scrollable format on small screens and as a marquee animation on larger screens.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or join the [Discord server](https://astro.build/chat).

