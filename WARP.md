# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro and TypeScript, showcasing projects, work experience, and skills. The site is fully responsive with dark/light theme support and optimized for performance.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server on localhost:4321
- `npm run build` - Build for production (includes TypeScript check)
- `npm run preview` - Preview production build locally
- `npm run check` - Run Astro TypeScript checker only
- `astro check` - Direct TypeScript check without build

### Development Server
The dev server runs on `http://localhost:4321` with hot reload enabled.

## Architecture Overview

### File Structure Pattern
```
src/
├── components/     # Reusable Astro components
├── content/        # Content collections (projects, work experience)  
├── config/         # Configuration files (navigation links, etc.)
├── icons/          # SVG icon components
├── landing/        # Main page sections (Home, Projects, Work, Contact)
├── layouts/        # Page layout templates
├── pages/          # Astro pages (routing)
├── scripts/        # Client-side JavaScript utilities
└── styles/         # Global CSS styles
```

### Key Architectural Patterns

**Single Page Application Structure**: The main page (`pages/index.astro`) imports section components from `landing/` directory to create a cohesive single-page experience.

**Content Collections**: Projects and work experience are managed through Astro's content collections:
- `content/project/` - JSON files with project metadata
- `content/work/` - Markdown files with work experience details
- Schema validation defined in `content/config.ts`

**Component-Based Architecture**: 
- Atomic components in `components/` (Card, Link, Pill, etc.)
- Composed into larger sections in `landing/`
- Icon system with individual Astro components in `icons/`

**Theme System**: 
- CSS custom properties for consistent theming
- Light/dark mode with system preference detection
- Theme toggle functionality with localStorage persistence
- Responsive design using CSS clamp() functions

### Styling Approach
- Global styles in `layouts/Layout.astro` 
- CSS custom properties for design tokens
- Responsive design with mobile-first approach
- Scoped component styles using Astro's built-in CSS scoping

### Content Management
Projects and work experience use Astro's content collections:
- Type-safe with Zod schemas
- JSON format for projects, Markdown for detailed work descriptions
- Image handling through Astro's built-in image optimization

### Key Components
- `Layout.astro` - Main layout with SEO meta tags, theme system
- `Header.astro` - Navigation with mobile menu and theme toggle  
- Landing sections (`Home.astro`, `Projects.astro`, `Work.astro`, `Contact.astro`)
- `ProjectCard.astro` and `WorkCard.astro` - Display content collection items

## Development Notes

### Adding New Projects
1. Create JSON file in `src/content/project/` following the schema in `content/config.ts`
2. Add project image to `src/assets/`
3. Projects automatically appear in the Projects section

### Adding Work Experience
1. Create Markdown file in `src/content/work/` with frontmatter following the work schema
2. Content automatically appears in the Work section

### Icon System
Each technology/social platform has its own Astro component in `src/icons/`. Icons are used in skills sections and project tags.

### Responsive Breakpoints
Defined as CSS custom properties in Layout.astro:
- `--d-small: 480px`
- `--d-medium: 900px` 
- `--d-large: 1024px`
- `--d-xlarge: 1440px`

### Configuration
- Navigation links centralized in `src/config/links.ts`
- TypeScript config extends Astro's strict configuration
- No additional linting or formatting tools configured
