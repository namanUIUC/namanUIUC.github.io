# Naman Shukla - Personal Website

A clean, elegant personal portfolio website built with Astro v5.6.1 and styled with Tailwind CSS v3.4.4.

## 🎨 Branding 

The website uses a carefully selected color palette defined in `tailwind.config.mjs`:

- **Primary**: `#9C8564` - A warm, earthy brown used for primary elements and important links
- **Secondary**: `#5E7C5D` - A soft green used for secondary elements and alternative actions
- **Tertiary**: `#7F95A3` - A muted blue-gray for supporting elements
- **Text**: `#2D2B26` - Dark gray for main text content
- **MutedText**: `#726E67` - Lighter gray for secondary text
- **Paper**: `#FAF6F0` - Soft cream background color

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
6. **Software** - Software projects and tools developed
7. **Academic Projects** - Research and academic project work

Each section is built as a separate Astro component for easy maintenance and updates.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── AboutMe.astro
│   │   │   ├── AcademicProjects.astro
│   │   │   ├── Education.astro
│   │   │   ├── Publications.astro
│   │   │   ├── Software.astro
│   │   │   ├── Talks.astro
│   │   │   └── WorkExperience.astro
│   │   └── shared/
│   │       ├── Footer.astro
│   │       └── Sidebar.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

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

