# Project Overview

## Overview

This is a full-stack web application built with React and Express that serves as a developer portfolio website. The application features a modern, responsive design showcasing projects, skills, and contact information. It uses a monorepo structure with separate client and server directories, along with shared schemas for type safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Development**: Hot reload with Vite integration in development mode
- **Error Handling**: Centralized error middleware
- **Logging**: Custom request logging with timing and response capture

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Storage**: In-memory storage implementation for development
- **Type Safety**: Drizzle-Zod integration for runtime validation

### Styling and Design System
- **CSS Framework**: Tailwind CSS with custom configuration
- **Design Tokens**: CSS custom properties for theming
- **Component System**: Consistent design system with reusable components
- **Dark Theme**: Pre-configured dark theme with professional color palette
- **Typography**: Inter font family with multiple weight variants

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Path Aliases**: Configured aliases for cleaner imports (`@/`, `@shared/`)
- **Code Quality**: ESM modules with consistent import/export patterns

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Express**: Web framework with middleware support
- **TypeScript**: Type safety across the entire stack

### Database and ORM
- **Drizzle ORM**: Type-safe database queries and schema management
- **Neon Database**: Serverless PostgreSQL database provider
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant styling
- **clsx**: Conditional className utility

### Development and Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for backend
- **PostCSS**: CSS processing with Autoprefixer
- **tsx**: TypeScript execution for development

### Data Fetching and Validation
- **TanStack Query**: Server state management and caching
- **Zod**: TypeScript-first schema validation
- **date-fns**: Date manipulation library

### Additional Libraries
- **wouter**: Minimalist routing for React
- **embla-carousel-react**: Carousel component for project showcases
- **cmdk**: Command palette component
- **nanoid**: Unique ID generation