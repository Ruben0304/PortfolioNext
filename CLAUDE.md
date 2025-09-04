# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Rubén Hernández Acevedo, a full-stack developer specializing in mobile apps, web development, and AI solutions. The project uses the App Router with full internationalization support for 6 languages.

## Key Technologies

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict configuration
- **Tailwind CSS v4** for styling with PostCSS
- **next-intl** for internationalization
- **Motion** (Framer Motion alpha) for animations
- **ESLint** with Next.js and TypeScript rules

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (uses Turbopack)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture & Structure

### Internationalization Setup
The project uses `next-intl` with a file-based routing approach:

- **Routing**: Configured in `src/i18n/routing.ts` with Spanish (`es`) as default locale
- **Supported Languages**: 6 languages fully supported:
  - **Spanish (`es`)** - Default locale
  - **English (`en`)** - Complete translations
  - **French (`fr`)** - Complete translations
  - **Italian (`it`)** - Complete translations
  - **Portuguese (`pt`)** - Complete translations  
  - **Chinese (`zh`)** - Complete translations
- **Messages**: Translation files located in `messages/` directory with format `{locale}.json`
- **Middleware**: `src/middleware.ts` handles automatic locale detection and URL routing
- **Request Config**: `src/i18n/request.ts` manages message loading and locale validation
- **URL Structure**: Routes follow pattern `/{locale}/path` (e.g., `/es/`, `/en/`, `/fr/`, `/it/`, `/pt/`, `/zh/`)

### App Router Structure
- **Layout**: `src/app/[locale]/layout.tsx` - Root layout with locale parameter support
- **Pages**: Located within `src/app/[locale]/` directory
- **Components**: Reusable components in `src/components/`
- **Utilities**: Helper functions in `src/lib/utils.ts` (includes `cn` utility for class merging)

### Styling System
- **Tailwind CSS v4** with PostCSS configuration
- **Class Merging**: Uses `cn()` utility (clsx + tailwind-merge) for conditional classes
- **Fonts**: Geist Sans and Geist Mono with CSS variables for font family
- **Design**: Clean, minimalist design with white background and professional typography

### Dark/Light Mode Color System
The project uses a consistent CSS custom property-based color system for dark/light mode support:

**Main Color Classes:**
- `bg-background` / `text-foreground` - Primary background and text colors
- `bg-card` / `text-card-foreground` - Card backgrounds and text
- `bg-muted` / `text-muted-foreground` - Muted/secondary backgrounds and text
- `bg-primary` / `text-primary-foreground` - Primary accent colors
- `bg-secondary` / `text-secondary-foreground` - Secondary accent colors
- `border-border` - Consistent border colors

**Usage Guidelines:**
- ALWAYS use semantic color classes instead of hardcoded colors (avoid `text-gray-600`, use `text-muted-foreground`)
- Colors automatically adapt to light/dark themes via CSS custom properties
- Color definitions are in `src/app/globals.css` with `:root` (light) and `.dark` (dark) variants
- Use `@custom-variant dark (&:is(.dark *));` for dark mode detection

## Key Configuration Files

- **next.config.ts**: Configured with next-intl plugin wrapper
- **tsconfig.json**: Path mapping with `@/*` pointing to `./src/*`
- **eslint.config.mjs**: Next.js core-web-vitals and TypeScript rules
- **package.json**: Uses React 19 with overrides for Motion library compatibility

## Working with Internationalization

### Adding New Translations
1. Add keys to ALL supported language files: `messages/es.json`, `messages/en.json`, `messages/fr.json`, `messages/it.json`, `messages/pt.json`, and `messages/zh.json`
2. Use `useTranslations('SectionName')` hook in components
3. Access translations with `t('key')` function
4. Ensure consistent translation structure across all language files

### Language Switching
- **Component**: `LanguageSwitcher` provides dropdown interface with flags
- **Navigation**: Uses `useRouter` and `usePathname` from `@/i18n/routing` for locale-aware navigation
- **URL Handling**: Automatic redirects maintain current path when switching locales

### Internationalized Sections
All sections are fully translated in all 6 languages:

- **HomePage**: Hero section with title, subtitle and description
- **Navigation**: Menu items and navigation elements
- **Projects**: Project cards with titles and descriptions
- **TerminalSection**: Developer environment setup section
- **ResponsiveSection**: Responsive design showcase
- **TabsSection**: Technology stack preferences
- **Technologies**: Technical skills and competencies
- **ContactSection**: Contact information and availability
- **BestPractices**: Development best practices with examples
  - SOLID principles (Single Responsibility, Open/Closed, Dependency Inversion)
  - Clean Code practices (Meaningful Names, Small Functions, Self-Documenting Code)
  - Security practices (Input Validation, Secure Secrets Management)
  - Performance practices (Avoid N+1 Queries, Efficient Caching)
  - File names and example descriptions translated
  - Code examples remain in English (TypeScript) as requested
- **Certificates**: Professional certifications and courses
  - Certificate titles, providers, and descriptions fully translated
  - Dynamic content loading based on locale
  - PDF links and verification URLs remain static
- **Actions**: Call-to-action buttons (Download CV, View GitHub)
- **CVDialog**: CV availability dialog
- **Language**: Language switching interface
- **Loader**: Loading states

### Component Organization
- **UI Components**: Basic reusable components in `src/components/ui/`
- **Magic UI Components**: Advanced animated components in `src/components/magicui/`
- **Page Sections**: Main content sections in `src/components/sections/`
- **SEO Components**: SEO-related components in `src/components/seo/`

### Key Libraries & Utilities
- **AOS**: Animate On Scroll library for scroll-triggered animations
- **Lottie**: Dotlottie React for lightweight animations
- **Rough Notation**: Hand-drawn style annotations
- **Radix UI**: Accessible component primitives (tabs, etc.)
- **Next Themes**: Dark/light theme switching
- **Tabler Icons**: Icon library for UI elements

## Important Configuration Notes

- **Build Errors**: TypeScript and ESLint errors are ignored during builds (`ignoreBuildErrors: true`)
- **i18n Request**: next-intl plugin configured to use `./src/i18n/request.ts` for message loading
- **Animation Library**: Uses Motion (Framer Motion alpha) with React 19 compatibility override
- **Turbopack**: Build process uses Turbopack for faster compilation

## Development Notes

- **Build**: Uses Turbopack for faster builds
- **Strict Mode**: TypeScript strict mode enabled
- **Module Resolution**: Bundler resolution with path mapping
- **Dependencies**: Motion library requires React 19 override for compatibility