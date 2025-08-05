# RevaZille - Fully Managed Elasticsearch Cloud Service

## Overview

RevaZille is a premium cloud service that provides fully managed Elasticsearch clusters across multiple cloud providers (AWS, Azure, GCP, and RevaLogix Private Cloud). Built by RevaLogix, it offers businesses the ability to deploy powerful, scalable search and analytics infrastructure with consistent high-performance experience regardless of the chosen cloud provider. The application features a modern landing page built with React and TypeScript, showcasing the service's capabilities including secure configurations, optional Kibana dashboards, flexible setup options, automated backups, and SLA-backed support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Components**: Radix UI primitives with custom styling through shadcn/ui components
- **Build System**: Vite with hot module replacement and development optimizations

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