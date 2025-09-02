# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Rubén Hernández Acevedo, a full-stack developer specializing in mobile apps, web development, and AI solutions. The project uses the App Router with internationalization support for Spanish and English.

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

- **Routing**: Configured in `src/i18n/routing.ts` with Spanish (`es`) as default locale and English (`en`) as alternative
- **Messages**: Translation files located in `messages/es.json` and `messages/en.json`
- **Middleware**: `src/middleware.ts` handles automatic locale detection and URL routing
- **Request Config**: `src/i18n/request.ts` manages message loading and locale validation
- **URL Structure**: Routes follow pattern `/{locale}/path` (e.g., `/es/`, `/en/`)

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
1. Add keys to both `messages/es.json` and `messages/en.json`
2. Use `useTranslations('SectionName')` hook in components
3. Access translations with `t('key')` function

### Language Switching
- **Component**: `LanguageSwitcher` provides dropdown interface with flags
- **Navigation**: Uses `useRouter` and `usePathname` from `@/i18n/routing` for locale-aware navigation
- **URL Handling**: Automatic redirects maintain current path when switching locales

## Development Notes

- **Build**: Uses Turbopack for faster builds
- **Strict Mode**: TypeScript strict mode enabled
- **Module Resolution**: Bundler resolution with path mapping
- **Dependencies**: Motion library requires React 19 override for compatibility