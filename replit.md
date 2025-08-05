# RevaZille - Fully Managed Elasticsearch Cloud Service

## Overview

RevaZille is a premium cloud service that provides fully managed Elasticsearch clusters across multiple cloud providers (AWS, Azure, GCP, and RevaLogix Private Cloud). Built by RevaLogix, it offers businesses the ability to deploy powerful, scalable search and analytics infrastructure with consistent high-performance experience regardless of the chosen cloud provider. The application features a comprehensive landing page built with React and TypeScript, showcasing enterprise-grade technical architecture, professional services, migration capabilities, and detailed performance specifications designed to compete with Elastic Cloud, SquareShift, and other enterprise Elasticsearch providers.

## Recent Changes (January 2025)

✓ Enhanced technical depth and professional clarity based on competitor analysis
✓ Added comprehensive technical architecture specifications section
✓ Implemented professional services section with certified expert positioning  
✓ Created migration and integration section for competitive positioning
✓ Enhanced pricing tiers with detailed technical specifications
✓ Improved dashboard preview with advanced monitoring capabilities
✓ Updated navigation structure to include Architecture and Services sections
✓ Built comprehensive navigation menu system like Elastic.co with dropdown menus
✓ Created detailed inside pages: Elasticsearch, Kibana, Security, Machine Learning, Pricing
✓ Implemented mobile-responsive navigation with organized product/solution categories
✓ Added router support for multi-page application with proper page routing

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing with smooth scrolling navigation
- **State Management**: TanStack Query for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui components including Badge, Card, Button components
- **Build System**: Vite with hot module replacement and development optimizations
- **Component Architecture**: Modular sections including TechnicalSpecs, ProfessionalServices, MigrationIntegration components
- **Multi-page Structure**: Dedicated pages for Elasticsearch, Kibana, Security, Machine Learning, and Pricing with comprehensive navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **Development Setup**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling and compilation
- **Middleware**: Custom logging middleware for API request tracking

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Zod schemas integrated with Drizzle for runtime type checking
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Project Structure
- **Monorepo Layout**: Shared code in `/shared`, client code in `/client`, server code in `/server`
- **Type Safety**: Shared schema definitions between frontend and backend
- **Asset Management**: Static assets in `/attached_assets` with Vite alias configuration
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)

### Development Experience
- **Hot Reloading**: Full-stack development with Vite HMR and server auto-restart
- **Type Checking**: Comprehensive TypeScript configuration across all packages
- **Error Handling**: Runtime error overlay integration for development
- **Code Organization**: Modular component structure with separation of concerns

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Comprehensive set of accessible UI primitives
- **shadcn/ui**: Pre-built component library built on top of Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Database and Backend
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL hosting
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### State Management and Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition

### Utilities and Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: URL-safe unique ID generator
- **wouter**: Lightweight routing library for React