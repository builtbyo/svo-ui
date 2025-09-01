# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SVO-UI is a comprehensive UI library for Svelte applications, inspired by the React ecosystem's success with libraries like Radix-UI and Shadcn-UI. Our goal is to bring the same level of headless, accessible, and composable primitives to the Svelte ecosystem.

### Vision
- **Headless Primitives**: Unstyled, accessible components with complete control over styling
- **Composable Architecture**: Building blocks that can be combined to create complex UI patterns
- **Accessibility First**: WAI-ARIA compliant components out of the box
- **TypeScript Support**: Full type safety across all components
- **Theme System**: Flexible theming and design token management

## Project Structure

This is a monorepo for SVO UI components built with Svelte 5 and managed with pnpm workspaces. The repository is organized into:

**Apps:**
- `apps/www` - Documentation/marketing site that showcases the UI components
- `apps/demo` - Demo application for testing components

**Packages:**
- `@svo-ui/core` - Core foundational package
- `@svo-ui/components` - Reusable UI components
- `@svo-ui/primitives` - Low-level primitive components
- `@svo-ui/blocks` - Higher-level component blocks
- `@svo-ui/charts` - Chart components
- `@svo-ui/theme` - Theme and styling utilities
- `@svo-ui/tokens` - Design tokens
- `@svo-ui/utils` - Utility functions
- `@svo-ui/fonts` - Font assets
- `@svo-ui/icons` - Icon components
- `@svo-ui/presets` - Preset configurations
- `@svo-ui/cli` - Command line tools

## Development Commands

### Global Commands (run from root)
- `pnpm dev` - Start all development servers in parallel
- `pnpm build` - Build all packages and apps
- `pnpm build:packages` - Build only packages
- `pnpm build:package:package_name` - Build only specified package
- `pnpm build:apps` - Build only apps
- `pnpm build:app:app_name` - Build only specified app
- `pnpm test` - Run tests across all packages
- `pnpm check` - Run type checking across all packages
- `pnpm lint` - Check code formatting and linting
- `pnpm format` - Format code using Prettier

### Targeted Commands
- `pnpm dev:www` - Start only the www app development server
- `pnpm dev:demo` - Start only the demo app development server
- `pnpm --filter <package-name> <command>` - Run command in specific package

### Package-level Commands (in individual packages)
- `pnpm build` - Build the package using `svelte-package`
- `pnpm check` - Type check using `svelte-check`

## Architecture

### Monorepo Setup
- Uses pnpm workspaces for package management
- All packages use workspace dependencies (`workspace:*`) for internal references
- Built on Svelte 5 with TypeScript
- Uses TailwindCSS v4 for styling
- Testing with Vitest and Playwright

### Package Dependencies
- Apps depend on multiple `@svo-ui/*` packages through workspace references
- Packages have minimal external dependencies, mainly peer-depending on Svelte 5
- All packages build to `dist/` directory using `svelte-package`

### Build System
- Each package builds independently using `svelte-package`
- Apps use Vite + SvelteKit for development and building
- Packages export both TypeScript types and Svelte components
- Build outputs are excluded from version control

## Key Files
- Root `package.json` defines workspace scripts and shared dev dependencies
- `pnpm-workspace.yaml` defines workspace structure
- Each package has its own `package.json` with build and check scripts
- Apps use SvelteKit configuration for routing and SSR


## Development Roadmap

### Phase 1: Foundation & Primitives
**Priority: HIGH**

#### 1.1 Core Infrastructure
- [ ] Set up shared TypeScript configurations
- [ ] Implement core utilities in `@svo-ui/core`
- [ ] Create event handling system
- [ ] Implement accessibility utilities
- [ ] Set up testing framework with Vitest

#### 1.2 Design Tokens (`@svo-ui/tokens`)
- [ ] Define color system (semantic colors, theme colors)
- [ ] Typography scale and font definitions
- [ ] Spacing and sizing tokens
- [ ] Border radius and shadow tokens
- [ ] Animation and transition tokens
- [ ] Breakpoint definitions

#### 1.3 Theme System (`@svo-ui/theme`)
- [ ] CSS custom properties management
- [ ] Theme provider component
- [ ] Dark/light/system mode utilities
- [ ] Predefined tailwind based color schema, and custom color availability
- [ ] Theme switching mechanisms
- [ ] CSS-in-JS integration (if needed)

#### 1.4 Essential Primitives (`@svo-ui/primitives`)
**Start with these core primitives:**

##### Button Primitive
- [ ] `Button` - Basic button with variants
- [ ] `ButtonGroup` - Button grouping
- [ ] Keyboard navigation support
- [ ] Loading and disabled states
- [ ] Size variants (sm, md, lg)
- [ ] ARIA attributes and roles

##### Input Primitives
- [ ] `Input` - Text input with validation
- [ ] `Textarea` - Multi-line text input
- [ ] `Checkbox` - Checkbox with indeterminate state
- [ ] `Radio` - Radio button with group management
- [ ] `Switch` - Toggle switch component
- [ ] `Slider` - Range slider with multiple handles

##### Selection Primitives
- [ ] `Select` - Custom select dropdown
- [ ] `Combobox` - Searchable select
- [ ] `Listbox` - Multi-select list
- [ ] `Command` - Command palette base

##### Overlay Primitives
- [ ] `Dialog` - Modal dialogs
- [ ] `Popover` - Floating content
- [ ] `Tooltip` - Hover/focus tooltips
- [ ] `DropdownMenu` - Context menus
- [ ] `Sheet` - Side sheets/drawers

##### Navigation Primitives
- [ ] `Tabs` - Tab navigation
- [ ] `Accordion` - Collapsible sections
- [ ] `Breadcrumb` - Navigation breadcrumbs
- [ ] `Pagination` - Page navigation

##### Layout Primitives
- [ ] `Separator` - Visual dividers
- [ ] `ScrollArea` - Custom scrollbars
- [ ] `Collapsible` - Show/hide content
- [ ] `Resizable` - Resizable panels

### Phase 2: Styled Components
**Priority: MEDIUM**

#### 2.1 Component Library (`@svo-ui/components`)
Build styled versions of primitives with:
- [ ] Default theme implementation
- [ ] Variant system (outline, solid, ghost, etc.)
- [ ] Size system (xs, sm, md, lg, xl)
- [ ] Color scheme integration
- [ ] Responsive design patterns

#### 2.2 Form Components
- [ ] Form wrapper with validation
- [ ] Field components with labels and errors
- [ ] Form validation utilities
- [ ] Multi-step forms

#### 2.3 Data Display
- [ ] Table with sorting and filtering
- [ ] Card layouts
- [ ] Badge and status indicators
- [ ] Progress indicators
- [ ] Loading skeletons

#### 2.4 Feedback Components
- [ ] Alert and notification systems
- [ ] Toast notifications
- [ ] Progress bars and spinners
- [ ] Empty states

### Phase 3: Advanced Features
**Priority: LOW**

#### 3.1 Data Visualization (`@svo-ui/charts`)
- [ ] Chart primitives using D3 or similar
- [ ] Line, bar, pie charts
- [ ] Interactive data visualizations
- [ ] Responsive chart layouts

#### 3.2 Complex Components (`@svo-ui/blocks`)
- [ ] Data tables with advanced features
- [ ] File upload components
- [ ] Rich text editors
- [ ] Date/time pickers
- [ ] Color pickers

#### 3.3 Layout Systems
- [ ] Grid system
- [ ] Flexbox utilities
- [ ] Container components
- [ ] Responsive utilities

#### 3.4 Icons & Assets (`@svo-ui/icons`, `@svo-ui/fonts`)
- [ ] Icon component system
- [ ] SVG icon library
- [ ] Font loading utilities
- [ ] Asset optimization

### Phase 4: Tooling & Developer Experience

#### 4.1 CLI Tool (`@svo-ui/cli`)
- [ ] Component scaffolding
- [ ] Theme generation
- [ ] Build optimization
- [ ] Migration utilities

#### 4.2 Documentation (`apps/www`)
- [ ] Interactive component playground
- [ ] API documentation
- [ ] Design guidelines
- [ ] Migration guides

#### 4.3 Development Tools
- [ ] Storybook integration
- [ ] Visual regression testing
- [ ] Performance monitoring
- [ ] Bundle analysis

## Technical Guidelines

### Component Development Principles

1. **Accessibility First**
   - Follow WAI-ARIA guidelines
   - Support keyboard navigation
   - Provide screen reader support
   - Include focus management

2. **Composition over Configuration**
   - Small, focused components
   - Clear component boundaries
   - Flexible prop APIs
   - Minimal required props

3. **Type Safety**
   - Full TypeScript support
   - Generic components where appropriate
   - Strict type checking
   - Comprehensive type exports

4. **Performance**
   - Tree-shakeable exports
   - Minimal runtime overhead
   - Efficient re-rendering
   - Bundle size optimization

### File Structure Convention

```
packages/[package-name]/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ComponentName/
│   │   │   │   ├── ComponentName.svelte
│   │   │   │   ├── ComponentName.types.ts
│   │   │   │   ├── ComponentName.test.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   └── index.ts
├── package.json
└── README.md
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `DropdownMenu`)
- **Props**: camelCase (e.g., `isDisabled`, `ariaLabel`)
- **Events**: camelCase with "on" prefix (e.g., `onClick`, `onValueChange`)
- **Slots**: kebab-case (e.g., `trigger`, `content`)

### Testing Strategy

- **Unit Tests**: Component logic and utilities
- **Integration Tests**: Component interactions
- **Accessibility Tests**: Screen reader and keyboard navigation
- **Visual Tests**: Component appearance and responsive design

## Implementation Priority

**Immediate Next Steps:**

1. Start with `@svo-ui/core` - Set up shared utilities and types
2. Implement `@svo-ui/tokens` - Define the design system foundation
3. Create `@svo-ui/theme` - Theme provider and CSS custom properties
4. Build `Button` primitive in `@svo-ui/primitives`
5. Create basic documentation in `apps/demo`

**Week 1-2 Focus:**
- Button, Input, Checkbox primitives
- Core utilities and theme system
- Basic demo application setup

**Month 1 Goal:**
- All essential primitives completed
- Theme system fully functional
- Demo app showcasing all primitives
- Basic documentation structure

## Getting Started for Contributors

1. **Setup Development Environment**
   ```bash
   pnpm install
   pnpm dev:demo  # Start demo application
   ```

2. **Create a New Primitive**
   - Choose from the roadmap above
   - Create component directory in `packages/primitives/src/lib/components/`
   - Implement accessibility features first
   - Add TypeScript definitions
   - Write comprehensive tests
   - Document in demo app

3. **Testing**
   ```bash
   pnpm test           # Run all tests
   pnpm test:watch     # Watch mode
   pnpm check          # Type checking
   ```

4. **Building**
   ```bash
   pnpm build:packages # Build all packages
   pnpm build:apps     # Build applications
   ```

Remember: This is a foundation for a comprehensive UI library. Each component should be built with the mindset of being used by thousands of developers, so quality, accessibility, and developer experience are paramount.
