# Coding Guidelines for Design System Components

> **⚠️ Note:** This project now uses **AGENTS.md** as the primary configuration file for all AI coding assistants (Claude Code, GitHub Copilot, Cursor, Cline, etc.). See [AGENTS.md](../AGENTS.md) in the repository root for the complete, up-to-date configuration.

This document describes the coding standards and patterns to be used when developing components for the design system. These guidelines ensure consistency, maintainability, and adherence to React best practices across the codebase.

## Table of Contents

- [Component Structure](#component-structure)
- [Exports and Imports](#exports-and-imports)
- [Component Patterns](#component-patterns)
- [Props Handling](#props-handling)
- [TypeScript Guidelines](#typescript-guidelines)
- [Coding Style](#coding-style)
- [Naming Conventions](#naming-conventions)
- [API Documentation](#api-documentation)

## Component Structure

### Directory Structure

Each component should follow this folder structure:

```
/MyComponent
  __tests__
    defaults.tests.[ts|tsx]
  MyComponent.tsx
  MyComponent.module.scss
  defaults.ts
  MyComponent.types.ts
  MyComponent.Item.tsx          # For compound components
  MyComponent.Item.module.scss  # For compound components
```

Storybook stories should be located at:

```
(root) /apps/ds-playground/src/stories/MyComponent.stories.tsx
```

## Exports and Imports

### Named Exports

Components developed for the Design System must always use named exports:

```typescript
// Good
export const MyComponent = () => {
  /* ... */
};

// Bad - Don't use default exports for components
export default function MyComponent() {
  /* ... */
}
```

### React Imports

Use named imports from React. The "React" namespace is not needed:

```typescript
// Good
import { useState, useEffect } from 'react';

// Bad
import React from 'react';
const [state, setState] = React.useState();
```

### Storybook Exports

For Storybook stories:

- Export the component description as default export
- Export the stories as named exports

## Component Patterns

### Compound Components

Use "compound components" to break down complex components:

```typescript
// Example usage
<Menu>
  <Menu.Title>Menu Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
</Menu>
```

Benefits:

- Avoids prop drilling
- Implicit state sharing
- Reinforces separation of concerns

### Complex Component Patterns

Use Hooks, Context providers and Container-Component patterns for high-complexity components:

- For adding functionality to base components
- For handling edge cases without polluting existing components
- Consider case-by-case (e.g., TrapFocus, Form validation, etc.)

## Props Handling

### Destructuring and Spread

Use destructuring assignment and spread attributes to isolate, manipulate, and forward props:

```typescript
const MyComponent = ({ className, disabled, ...rest }) => {
  // Ensure non-DOM props don't get passed to HTML elements
  return <div className={className} {...rest} />;
};
```

Be careful with the number of props:

- Use `Omit` to manage `...rest` when prop drilling
- Don't pass non-DOM props to HTML elements

### Children Slot

Prefer using `children` prop for custom content instead of `content` or `text` props:

```typescript
// Good
<Button>Click me</Button>

// Avoid when possible
<Button text="Click me" />
```

Consider using more precise typing when needed, and allow JSX for components that accept varied content (Accordion, StepList, etc.).

### className and Style Overrides

Provide a `className` prop at the top level for overriding:

```typescript
<MyComponent className="custom-class" />
```

For complex components, support both simple and advanced className patterns:

```typescript
<ComplexComponent
  className="main-class"  // For the main element
  classNames={{
    header: 'header-class',
    button: 'button-class',
    icon: 'icon-class'
  }}
/>
```

Avoid inline styling in component code and Storybook.

### Element Control

Provide an `as` property to control the rendered HTML element:

```typescript
<Text as="h2">Heading</Text>
```

### Default Props

Use ES6 default parameters instead of `defaultProps` (which is deprecated for functional components):

```typescript
// Good
const Button = ({ variant = 'primary', size = 'medium' }) => {
  // ...
};

// Bad - Don't use defaultProps
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};
```

## TypeScript Guidelines

### Discriminated Props

Use discriminated props to allow certain props only when their dependent prop has a specific value:

```typescript
type ButtonProps = { variant: 'text'; icon: IconProps } | { variant: 'contained'; icon?: never };
```

### Props Types Naming

- Types that define component props should be named as `ComponentNameProps`
- Export these types for reuse

## Coding Style

### Conditional Rendering

Use ternaries and short-circuit evaluation to reduce lines in return statements:

```typescript
// IF/ELSE
{condition ? <>{trueContent}</> : <>{falseContent}</>}

// IF
{condition && <>{content}</>}

// UNLESS
{condition || <>{fallbackContent}</>}
```

Best practices:

- Return `null` early in a component to short-circuit rendering when needed
- Avoid nested ternaries when possible
- Externalize business logic in utils with dedicated tests

### Base Component Props

All components must provide these props by default:

- `ref`
- `id`
- `className`
- `lang`
- `data-testid`

These are inherited from the Base Component interface in ds-core-utils.

For complex components with multiple elements, provide object-based props:

```typescript
<ComplexComponent
  data-testid="main-test-id"  // Simple case
  data-testIds={{             // Advanced case
    wrapper: 'wrapper-test-id',
    button: 'button-test-id'
  }}
/>
```

## Naming Conventions

### Props Naming

- Use original HTML attribute names when they exist (e.g., `disabled`, `value`, `onChange`)
- Use `handle*` for event handlers (e.g., `onChange={handleChange}`)
- Use `is*`/`has*`/`show*`/`hide*`/`can`/`did`/`will`/`should` conventions for booleans
- Avoid double negatives in boolean props (e.g., don't use `isNotDisabled`)
- Use established props consistently across components:
  - Be consistent with naming like `title` vs. `name` vs. `label` vs. `text`
  - Be consistent with `value` vs. `defaultValue` vs. `selectedValue`

### Standard Prop Values

Use consistent values for standard props across components:

- **variant**: For stylistic variations (`standard`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `success`)
- **color**: For color token variations (`denim`, `burgundy`, `forest`, `ochre`, `azure`, `graphite`, `light`, `dark`)
- **size**: For size variations (`extraSmall`, `small`, `medium`, `large`, `extraLarge`)
- **weight**: For font-weight variations (`regular`, `medium`, `bold`)
- **iconProps**: For passing props to an `<Icon>` component
- **position**: Often used as suffix for positioning elements (`left`, `right`)

Use subsets of existing types to ensure consistency.

### Avoid Reserved Words

Don't use blacklisted props, reserved words, or future reserved words:

- Avoid prop `type` unless it refers to the HTML attribute
- Use `variant` instead for predefined variations

### Deprecation

Use JSDoc `@deprecated` flag for prop migration:

```typescript
/** @deprecated Use 'variant' prop instead */
type: string;
```

### Code Comments

Be sparing with code comments:

- No references to internal tools
- Code should be self-explanatory
- Only comment library-specific details when necessary

## API Documentation

### Props Categories

In stories, props are sorted into 5 categories:

1. `baseProps`
2. `props`
3. `html`
4. `aria`
5. `events`

### Documentation

- `BaseProps` are configured globally and don't need to be repeated per story
- Document component props with JSDoc in the component's types file
- Props in `html`, `aria`, and `events` categories don't need JSDoc unless they have special behavior

### Props Order

Follow this order when defining props:

1. `key` (enforced by React)
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

Use this order consistently in components, when destructuring props, and in types.

---

These guidelines aim to create a consistent development experience and maintain a high-quality design system. All team members should follow these standards when contributing to the component library.
