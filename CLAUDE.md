# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 application showcasing a "三下乡" (Three Rural Activities) volunteer program website. Built with TypeScript, Tailwind CSS, and shadcn/ui components, it features a red-themed design for displaying activities, photos, videos, and reflections.

## Quick Commands
```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Component Development
# All components are in src/components/ and follow a modular structure
# Each page section is a separate component: navigation, hero, about, gallery, videos, timeline, reflections, contact, footer
```

## Architecture
- **App Router**: Uses Next.js 15 App Router with TypeScript
- **Styling**: Tailwind CSS with custom red color scheme configured in globals.css
- **Components**: Modular component structure in `src/components/` with each section as a separate file
- **Layouts**: Single-page scroll design with anchor navigation
- **Responsive**: Mobile-first responsive design throughout

## Key Files Structure
- `src/app/page.tsx` - Main page orchestrating all components
- `src/components/` - Individual UI components for each section
- `src/app/globals.css` - Global styles with red color theme variables
- All components are client-side for smooth scrolling functionality

## Component Details
- Navigation: Fixed header with anchor links and mobile menu
- Hero: Full-screen banner with gradient background and call-to-action
- Gallery: Photo grid with lightbox modal functionality
- Timeline: Vertical timeline with alternating content layout
- Reflections: Text and audio testimonials display
- Contact: Form with validation and submission feedback
- Footer: Social links and contact information

## Color Scheme
Primary red theme defined in CSS variables:
- Primary: `oklch(0.621 0.214 33.28)` (vibrant red)
- Used consistently across navigation, buttons, timeline, and accents

## Development Notes
- All placeholder images use background colors and text labels
- Smooth scrolling implemented via JavaScript
- Responsive breakpoints use Tailwind's default scale
- Form validation implemented with React state management