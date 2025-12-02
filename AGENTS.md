# Designsystemet (Skatteetaten Design System)

Norwegian Tax Administration's official design system - an accessible React component library with TypeScript, SCSS modules, and comprehensive design tokens. **Accessibility-first development is mandatory for government compliance.**

## Tech Stack

**Version Information**: Always check `package.json` in the project root for current versions of all dependencies.

- **Framework**: React (ESM modules - `"type": "module"` in package.json)
- **Language**: TypeScript (ESM modules)
- **Build Tool**: Nx (monorepo with multiple packages)
- **Styling**: SCSS Modules (Sass)
- **Package Manager**: npm >=8.3.0
- **Testing**: Vitest with @testing-library/react
- **Documentation**: Storybook
- **Key Dependencies**:
  - @floating-ui/react (tooltips, popovers)
  - date-fns (date utilities)
  - i18next, react-i18next (internationalization)

## Core Commands

### File-Scoped (Use During Development)

```bash
# Type check single file
npx tsc --noEmit path/to/Component.tsx

# Lint single file (replace ds-buttons with actual package)
npx nx run ds-buttons:lint -- --fix path/to/Component.tsx

# Test single component
npx nx run ds-buttons:test -- Button.test.tsx

# Stylelint single file
npx stylelint path/to/Component.module.scss --fix

# Test specific component in Storybook (replace "Button" with component name)
npm run test:storybook -- -t "Button"

# Bundle size impact check
npx nx run ds-buttons:build -- --analyze
```

### Full Project (Use Before Commits)

```bash
# Build all packages
npm run build

# Run all tests
npm test

# Run all linters
npm run lint

# Type check all packages
npm run typecheck

# Format all files
npm run prettier:fix
```

### Development Workflow

```bash
# Start Storybook dev server
npm start

# Build Storybook
npm run build:playground

# Run Storybook tests
npm run test:storybook
```

## Project Structure

```
designsystemet/
├── libs/                    # Component packages (monorepo libraries)
│   ├── ds-buttons/         # Button, Link, LinkGroup, IconButton, etc.
│   ├── ds-forms/           # TextField, Select, Checkbox, RadioGroup, etc.
│   ├── ds-collections/     # List, Card, Accordion, etc.
│   ├── ds-layout/          # Panel, Grid, Container, etc.
│   ├── ds-navigation/      # Tabs, Breadcrumbs, Menu, etc.
│   ├── ds-status/          # Alert, Tag, Badge, etc.
│   ├── ds-overlays/        # Modal, Popover, Tooltip, etc.
│   ├── ds-progress/        # Spinner, ProgressBar, etc.
│   ├── ds-table/           # Table components
│   ├── ds-typography/      # Heading, Paragraph, Text, etc.
│   ├── ds-icons/           # Icon components
│   ├── ds-core-utils/      # Shared utilities and types
│   └── ds-core-designtokens/ # Design tokens (CSS/JS)
├── apps/
│   └── ds-playground/      # Storybook application
│       └── src/stories/    # Component stories
└── tsconfig.base.json      # TypeScript path aliases
```

### Component Structure (Standard Pattern)

```
/ComponentName
  __tests__
    defaults.test.ts            # Simple unit tests for defaults/utilities
  ComponentName.tsx             # Main component
  ComponentName.module.scss     # Styles
  ComponentName.types.ts        # TypeScript definitions
  defaults.ts                   # Default prop values
  ComponentName.Item.tsx        # Compound component (if needed)
```

**Reference Examples:**

- Component pattern: `libs/ds-buttons/src/Button/Button.tsx`
- Types pattern: `libs/ds-buttons/src/Button/Button.types.ts`
- Compound components: `libs/ds-collections/src/Accordion/` (Accordion + Accordion.Item)
- Storybook stories: `apps/ds-playground/src/stories/` (look for component name)

## LLM Quick Navigation

### Component Development Workflow

**File Path Templates (replace {package} and {Component}):**

```
# Core component files
libs/ds-{package}/src/{Component}/{Component}.tsx
libs/ds-{package}/src/{Component}/{Component}.types.ts
libs/ds-{package}/src/{Component}/{Component}.module.scss
libs/ds-{package}/src/{Component}/defaults.ts

# Testing files
apps/ds-playground/src/stories/__tests__/{Component}.test.stories.tsx
apps/ds-playground/src/stories/{Component}.stories.tsx
libs/ds-{package}/src/{Component}/__tests__/defaults.test.ts

# Package configuration
libs/ds-{package}/package.json
libs/ds-{package}/project.json
```

**Common File Patterns:**

- **Package imports**: `@skatteetaten/ds-{package}` (all packages scoped)
- **TypeScript paths**: `tsconfig.base.json` → lines 15-35 (path mappings)
- **Design tokens**: `libs/ds-core-designtokens/lib/*.css|js`
- **Shared utilities**: `libs/ds-core-utils/src/` (BaseProps, dsI18n, etc.)
- **Icon library**: `libs/ds-icons/src/` (Icon component + SVG paths)

### Context Loading Strategy

**For new components, read in this order:**

1. **Existing similar component** in same package (understand patterns)
2. **Component files**: `.tsx` → `.types.ts` → `defaults.ts`
3. **Test examples**: `*.test.stories.tsx` (for behavior patterns)
4. **Package config**: `package.json` dependencies

**For bug fixes/modifications:**

1. **Target component files** (main + types + styles)
2. **Related test stories** (understand expected behavior)
3. **Run validation commands** (type-check → lint → test)

## Development Debugging

### Quick Validation Pipeline

**Single File Validation** (use during development):

```bash
# Type check specific file
npx tsc --noEmit libs/ds-buttons/src/Button/Button.tsx

# Lint and fix specific file
npx nx run ds-buttons:lint -- --fix libs/ds-buttons/src/Button/Button.tsx

# Style lint specific SCSS file
npx stylelint libs/ds-buttons/src/Button/Button.module.scss --fix

# Test specific component in Storybook
npm run test:storybook -- -t "Button"

# Check bundle impact
npx nx run ds-buttons:build -- --analyze
```

**Pre-Commit Validation** (run before any commits):

```bash
# Full validation pipeline
npm run typecheck && npm run lint && npm test && npm run build
```

**Common Debugging Commands:**

```bash
# Find component usage across codebase
rg "Button" --type ts --type tsx

# Check design token usage (find all files using a specific token)
# Simple list view:
grep -rl --include='*.scss' --include='*.css' --exclude-dir=dist --exclude-dir=node_modules --exclude-dir=.nx -e '--spacing-mega' .

# Tree view (requires tree command, shows file structure):
grep -rl --include='*.scss' --include='*.css' --exclude-dir=dist --exclude-dir=node_modules --exclude-dir=.nx -e '--spacing-mega' . | tree --fromfile .

# Replace '--spacing-mega' with any token pattern to search:
# Examples: '--palette-', '--spacing-', '--font-size-', '--semantic-'

# Verify Storybook is working
npm start

# Test specific component (includes accessibility checks)
npm run test:storybook -- -t "Button"
```

## Accessibility Requirements

**🔒 MANDATORY: All components MUST meet WCAG 2.2 AA standards**

### Accessibility Checklist (Every Component)

**✅ REQUIRED:**

- Semantic HTML (button, nav, main) + ARIA labels
- Keyboard navigation (Tab, Enter, Escape, Arrows) + focus indicators
- Color contrast ≥4.5:1 (≥3:1 large text) + text alternatives
- Error messages and validation feedback

**Testing:** `npm run test:storybook` (includes automated accessibility checks) + manual keyboard/screen reader testing

## Code Style

- Keep comments to a minimum.
- Code comments should preferably be in Norwegian.

### React Patterns

**ALWAYS use:**

- Functional components with hooks
- Named exports (NEVER default exports for components)
- Named imports from React: `import { useState, useEffect } from 'react'`
- ES6 default parameters (NEVER `Component.defaultProps`)

```typescript
// ✅ CORRECT
export const Button = ({ variant = 'primary', size = 'medium', children }) => {
  return <button className={styles.button}>{children}</button>;
};

// ❌ WRONG
export default function Button(props) {
  return <button>{props.text}</button>;
};
Button.defaultProps = { variant: 'primary' };
```

### TypeScript

**ALWAYS follow these rules:**

- Name component props types as `ComponentNameProps`
- Export all prop types for reuse
- Use discriminated unions for conditional props
- Extend `BaseProps` from `@skatteetaten/ds-core-utils` for all components

```typescript
// ✅ CORRECT - Discriminated props
type ButtonAsLink = {
  href: string;
  disabled?: never;
  isExternal?: boolean;
};

type ButtonAsButton = {
  href?: never;
  disabled?: boolean;
  isExternal?: never;
};

export interface ButtonCommonProps extends BaseProps {
  children: string;
  variant?: ButtonVariant;
}

export type ButtonProps = ButtonCommonProps & (ButtonAsLink | ButtonAsButton);
```

### Props Handling

**Required base props (all components MUST accept):**

- `ref`, `id`, `className`, `lang`, `data-testid`

**ALWAYS follow:**

- Use `children` prop for content (NOT `text` or `content` props)
- Provide `className` for style overrides
- Use `classNames` object for complex components with multiple elements
- Provide `as` prop for polymorphic components

```typescript
// ✅ CORRECT
<Button className="custom-class">Click me</Button>
<Text as="h2">Heading</Text>

// ✅ CORRECT - Complex component
<Modal
  className="main-class"
  classNames={{
    header: 'header-class',
    content: 'content-class'
  }}
/>

// ❌ WRONG
<Button text="Click me" />
```

### Naming Conventions

**Props naming (ALWAYS use these patterns):**

- Booleans: `is*`, `has*`, `show*`, `hide*`, `can*`, `did*`, `will*`, `should*`
- Event handlers: `handle*` (e.g., `handleChange`, `handleClick`)
- Use HTML attribute names when they exist (`disabled`, `value`, `onChange`)

**Standard prop names (use consistently):**

- `variant`: Style variations (`primary`, `secondary`, `tertiary`, `danger`)
- `color`: Color tokens (`denim`, `burgundy`, `forest`, `ochre`, `azure`, `graphite`)
- `size`: Size variations (`extraSmall`, `small`, `medium`, `large`, `extraLarge`)
- `weight`: Font weights (`regular`, `medium`, `bold`)
- `iconProps`: Props to pass to `<Icon>` component
- `position`: Positioning (`left`, `right`)

**NEVER:**

- Use `type` prop (reserved word) - use `variant` instead
- Use double negatives (`isNotDisabled`)
- Use non-DOM props without filtering them out before spreading to HTML elements

### Styling

**ALWAYS:**

- Use SCSS modules (`.module.scss` files)
- Import styles: `import styles from './Component.module.scss'`
- Apply styles: `className={styles.componentName}`
- NEVER use inline styles in component code or Storybook
- NEVER hardcode colors, spacing, or font sizes
- ALWAYS use design tokens from `@skatteetaten/ds-core-designtokens`

```typescript
// ✅ CORRECT
import styles from './Button.module.scss';

export const Button = ({ className, variant = 'primary' }) => {
  const concatenatedClassName = `${styles.button} ${styles[`button_${variant}`]} ${className}`.trim();
  return <button className={concatenatedClassName}>Click</button>;
};

// ❌ WRONG
<button style={{ backgroundColor: '#0062BA' }}>Click</button>
```

### Performance & Bundle Size

```typescript
// ✅ CORRECT - Named imports + lazy loading
import { Button } from '@skatteetaten/ds-buttons';
const HeavyChart = lazy(() => import('./HeavyChart'));

// ❌ WRONG - Barrel imports hurt bundle size
import * as DSButtons from '@skatteetaten/ds-buttons';
```

**Guidelines:** <50KB bundles, `React.memo()` for re-renders, virtualization >100 items, WebP images
**Check impact:** `npx nx run ds-buttons:build -- --analyze`

### Conditional Rendering

```typescript
// ✅ IF/ELSE
{condition ? <>{trueContent}</> : <>{falseContent}</>}

// ✅ IF
{condition && <>{content}</>}

// ✅ UNLESS
{condition || <>{fallbackContent}</>}

// ✅ Early return for complex conditions
if (!data) return null;
```

**NEVER:**

- Use nested ternaries
- Put complex business logic in JSX (externalize to utils)

### Error Handling & Boundaries

```typescript
// ✅ CORRECT - Error boundaries + graceful degradation
import { ErrorBoundary } from '@skatteetaten/ds-core-utils';

export const Component = ({ data, isLoading, error }) => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    {isLoading ? <Spinner /> :
     error ? <Alert variant="danger">{error.message}</Alert> :
     !data ? <EmptyState /> : <DataDisplay data={data} />}
  </ErrorBoundary>
);
```

## Compound Components

**Use compound components for complex UI patterns:**

```typescript
// ✅ CORRECT
<Accordion>
  <Accordion.Item>
    <Accordion.Heading>Title</Accordion.Heading>
    <Accordion.Content>Content</Accordion.Content>
  </Accordion.Item>
</Accordion>

// Benefits: no prop drilling, implicit state sharing, clear hierarchy
```

**Reference:** `libs/ds-collections/src/Accordion/`

## Design Token Advanced Usage

```scss
// ✅ CORRECT - Use design tokens
.component {
  color: var(--semantic-page-foreground);
  padding: var(--spacing-m);
  font-size: var(--font-size-l);
}

// ✅ CORRECT - Custom extensions
.custom {
  --custom-primary: var(--palette-denim-50);
}

// ❌ WRONG - Hardcoded values
.component {
  color: #0062ba;
  padding: 16px;
}
```

**Categories:** `--palette-*`, `--spacing-*`, `--font-size-*`, `--font-weight-*`, `--semantic-*`

## Internationalization

```typescript
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { useTranslation } from 'react-i18next';

export const Button = ({ isExternal }) => {
  const { t } = useTranslation('ds_buttons', { i18n: dsI18n });
  return <button>{isExternal && <Icon ariaLabel={t('shared.ExternalIcon')} />}</button>;
};
```

**Requirements:** Support Norwegian Bokmål (nb) + English (en), translate ARIA labels

## Patterns to Follow

### ✅ DO

- Follow component structure in `libs/ds-buttons/src/Button/`
- Use design tokens from `libs/ds-core-designtokens/`
- Write tests following Vitest + Testing Library patterns
- Use compound components for complex hierarchies
- Destructure and spread props: `const { className, ...rest } = props`
- Use `Omit` to filter non-DOM props before spreading
- Add JSDoc comments in `.types.ts` files for component props
- Mark deprecated props with `@deprecated` JSDoc tag

### ❌ DON'T

- NEVER use default exports for components
- NEVER use `React.` namespace (import hooks directly)
- NEVER use `defaultProps` (deprecated for functional components)
- NEVER hardcode colors, spacing, or typography values
- NEVER use class components (deprecated in this codebase)
- NEVER pass non-DOM props to HTML elements
- NEVER use prop names like `type` (reserved word) - use `variant`
- NEVER add heavy dependencies without approval
- NEVER skip required base props (`ref`, `id`, `className`, `lang`, `data-testid`)
- NEVER ship components without accessibility testing
- NEVER ignore bundle size impact (check with `--analyze` flag)
- NEVER commit without running visual regression tests
- NEVER use non-semantic HTML elements when semantic ones exist

## Props Order (Strict Convention)

**ALWAYS order props in this sequence:**

1. `key` (React enforced)
2. `ref`
3. `id`
4. `className`
5. `lang`
6. `data-testid`
7. Component-specific props (alphabetical)
8. HTML attributes (alphabetical)
9. ARIA attributes (alphabetical)
10. Boolean props
11. Function props
12. `children`

**Follow this order in:**

- Component JSX usage
- Prop destructuring
- TypeScript type definitions

## Testing

**ALWAYS:**

- Write behavioral tests as **Storybook test stories** in `apps/ds-playground/src/stories/__tests__/*.test.stories.tsx`
- Write unit tests for defaults/utilities in component `__tests__/` subdirectories (simple tests only)
- Use Storybook testing framework with Vitest + browser testing
- Test component behavior, NOT implementation details
- Include accessibility testing in every component test story

```typescript
// ✅ CORRECT - Storybook test story with accessibility + interactions
import { expect, fn, userEvent, within } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@skatteetaten/ds-buttons';

const meta = {
  component: Button,
  title: 'Tester/Button',
  tags: ['test'],
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithAccessibility = {
  name: 'Accessibility Test',
  args: { children: 'Click me' },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Click me' });
    await expect(button).toBeInTheDocument();

    // Test keyboard navigation
    button.focus();
    await expect(button).toHaveFocus();

    // Test click interaction
    await userEvent.click(button);
  },
} satisfies Story;

// ✅ CORRECT - Simple unit test for defaults (component __tests__ directory)
// libs/ds-buttons/src/Button/__tests__/defaults.test.ts
describe('Button defaults', () => {
  it('returns correct default variant', () => {
    expect(getButtonVariantDefault()).toBe('primary');
  });
});
```

**Visual Testing:** Storybook + Chromatic (`npm run chromatic`), responsive breakpoints
**Run Tests:** `npm run test:storybook` for Storybook tests, `npm test` for all tests

## Storybook Documentation

**Props categories (used in Storybook):**

1. `baseProps` - Configured globally, not repeated per story
2. `props` - Component-specific props
3. `html` - Standard HTML attributes
4. `aria` - ARIA attributes
5. `events` - Event handlers

**ALWAYS:**

- Document component props with JSDoc in `.types.ts` files
- Create stories in `apps/ds-playground/src/stories/`
- Export component description as default export
- Export stories as named exports

## Component Lifecycle & Versioning

### Deprecation & Migration

**When deprecating props:**

```typescript
export interface ButtonProps {
  /** @deprecated Use 'variant' prop instead. Will be removed in v3.0.0 */
  type?: string;
  variant?: ButtonVariant;
}

// ✅ CORRECT - Provide migration path
export const Button = ({ type, variant, ...rest }) => {
  // Support legacy prop with warning
  if (type && !variant) {
    console.warn('Button: "type" prop is deprecated. Use "variant" instead.');
    variant = type as ButtonVariant;
  }

  return <button data-variant={variant} {...rest} />;
};
```

### Version Management

**SemVer:** Patch (bug fixes), Minor (new features), Major (breaking changes)

**Breaking Change Process:**

1. Deprecation warnings (minor) → 2. CHANGELOG.md migration → 3. Remove (major)

**Categories:** 🐛 Bug (patch), ✨ Feature (minor), 💥 Breaking (major), 🔒 Security (patch)

## Security & Permissions

### ✅ Allowed Without Approval

- Read any file in the codebase
- Run linters/formatters on single files
- Run tests on specific files
- Type check individual files
- Analyze code and suggest improvements

### ⚠️ Requires Approval First

- Install packages or modify `package.json`
- Git operations (commit, push, pull)
- Delete files or directories
- Run full builds (unless testing changes)
- Modify CI/CD configs (`.github/workflows/`)
- Change Nx configuration (`nx.json`, `workspace.json`)

## AI Assistant Workflow

### Efficient Component Development

**Step 1: Understand the request**

- Identify target component/package (Button → `ds-buttons`, TextField → `ds-forms`)
- Determine if it's new component, modification, or bug fix
- Check if accessibility/testing is required (always assume yes for government compliance)

**Step 2: Context gathering**

```bash
# Find similar components for patterns
rg "export.*Button" libs/ --type tsx
# Check existing stories/tests
ls apps/ds-playground/src/stories/*Button*
# Understand current structure
ls libs/ds-buttons/src/Button/
```

**Step 3: Development**

- Read existing component files first (understand patterns)
- Follow naming conventions (`variant`, `size`, `color` not `type`)
- Use design tokens (`var(--palette-*)`, `var(--spacing-*)`, `var(--semantic-*)`) never hardcode values
- Write Storybook test stories for new behavior

**Step 4: Validation**

```bash
# Always run these before saying "done"
npx tsc --noEmit [changed-file].tsx
npm run test:storybook -- -t "ComponentName"
```

### Multi-Package Projects

**When changes span multiple packages:**

1. **Create todo list** with specific files/packages to modify
2. **Work package by package** (complete one before starting next)
3. **Validate each package** before moving to next
4. **Run full build** at the end to catch cross-package issues

### Troubleshooting Common Issues

**"Module not found" errors:**

- Check `tsconfig.base.json` path mappings (lines 15-35)
- Verify package exports in `package.json`
- Ensure proper `@skatteetaten/ds-*` import syntax

**Design token not found:**

- Import tokens: `import '@skatteetaten/ds-core-designtokens';`
- Check available tokens in `libs/ds-core-designtokens/lib/`
- Use CSS custom properties: `var(--palette-denim-50)`, `var(--spacing-m)`, `var(--semantic-*)`

**Test failures:**

- Check Storybook test story matches actual component behavior
- Verify accessibility requirements (axe-core tests)
- Ensure proper ARIA labels and keyboard navigation

## Common Mistakes to Avoid

1. **Using default exports** - This codebase uses named exports exclusively
2. **Hardcoding design values** - Always use design tokens
3. **Inline styles** - Use SCSS modules
4. **Non-DOM props on HTML elements** - Filter with `Omit` or destructuring
5. **Missing base props** - All components need `ref`, `id`, `className`, `lang`, `data-testid`
6. **Wrong module system** - This is ESM (`type: "module"`), not CommonJS
7. **Inconsistent prop naming** - Follow `variant`, `size`, `color` conventions
8. **Missing translations** - Use `react-i18next` for user-facing text
9. **Skipping accessibility testing** - Every component MUST pass axe-core tests
10. **Ignoring keyboard navigation** - All interactive elements need keyboard support
11. **Missing focus management** - Handle focus properly in modals, dropdowns
12. **Color-only information** - Always provide text alternatives
13. **Poor error boundaries** - Complex components need graceful error handling
14. **Bundle size bloat** - Check impact with analyzer before shipping

## Quick Reference

**Import design tokens:**

```typescript
import '@skatteetaten/ds-core-designtokens';
```

**Import base utilities:**

```typescript
import { BaseProps, dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
```

**Import icons:**

```typescript
// Option 1: Import pre-built icon components (convenience wrappers)
import { AccountBoxIcon, ExternalIcon } from '@skatteetaten/ds-icons';

// Option 2: Import SVG paths for use with Icon component (more flexible)
import { Icon, AccountBoxSVGpath, ExternalSVGpath } from '@skatteetaten/ds-icons';

// Usage with pre-built component
<AccountBoxIcon ariaLabel="Account" size="medium" />

// Usage with SVG path (allows custom Icon props and variant control)
<Icon svgPath={AccountBoxSVGpath} ariaLabel="Account" size="medium" variant="systemIcon" />
```

**Check component package location:**

- See `tsconfig.base.json` paths section for all package imports
- All packages are scoped: `@skatteetaten/ds-*`

## LLM Performance Notes

**File size optimization**: 750 lines (optimal for AI context windows)
**Validation**: All commands and file paths verified against codebase
**Testing approach**: Storybook-first behavioral testing + simple unit tests
**Architecture**: Nx monorepo with 12 component packages + shared utilities

**Priority workflow for AI assistants:**

1. **Accessibility first** - Government compliance mandatory
2. **Design tokens only** - Never hardcode colors/spacing
3. **Named exports** - No default exports for components
4. **Storybook testing** - Behavioral tests in `*.test.stories.tsx`
5. **TypeScript strict** - ESM modules, proper prop types

---

**This configuration follows industry standards (AGENTS.md format) and is compatible with Claude Code, GitHub Copilot, Cursor, Cline, and 15+ other AI coding tools.**
