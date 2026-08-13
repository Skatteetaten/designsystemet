# Repository guidance for coding agents

This file is the source of truth for AI-assisted changes in Designsystemet. Keep
changes consistent with the repository as it exists today: inspect nearby code,
tests, documentation, and project configuration before deciding on a pattern.

Designsystemet is Skatteetaten's React and TypeScript component library.
Accessibility, stable public APIs, and consistent use of design tokens are core
requirements.

## Start here

Before changing code:

1. Identify the affected app or library and read its `project.json`,
   `package.json`, and public exports when relevant.
2. Find the closest existing component, utility, story, or documentation example
   and follow its structure.
3. Check related tests and documentation to understand intended behavior.
4. Verify component APIs, prop names, tokens, and translations from source. Do
   not invent them.

Use npm and the existing Nx targets. Do not add dependencies or tools unless the
task requires them.

## Repository map

- `libs/ds-*`: published component, icon, token, utility, and CLI libraries.
- `libs/ds-dev-config`: shared build and TypeScript tooling.
- `apps/ds-docs`: product documentation and runnable examples.
- `apps/ds-playground`: Storybook documentation, component tests, visual tests,
  and page examples.
- `apps/ds-playground/src/stories/components`: component stories.
- `apps/ds-playground/src/stories/__tests__`: Storybook interaction and visual
  test stories.
- `apps/ds-playground/src/stories/pages`: composed page examples.

Library code normally follows this shape:

```text
libs/ds-<package>/src/<Component>/
  <Component>.tsx
  <Component>.types.ts
  <Component>.module.scss
  defaults.ts                 # when defaults are shared or exported
```

Compound components may use nested component directories. Follow the package's
existing structure rather than forcing every component into the same layout.

## Working principles

- Make focused changes and preserve existing behavior unless the task explicitly
  changes it.
- Reuse existing helpers, types, components, and tokens before adding new ones.
- Keep public exports, documentation, tests, and translations in sync with API
  changes.
- Do not edit generated output in `dist/`.
- Fix errors at their source. Do not add broad catches, silent fallbacks, or
  unsafe type assertions to hide failures.
- Keep comments rare and explain only non-obvious constraints. Existing public
  API documentation and code comments are normally written in Norwegian.

## React and TypeScript

- Use functional components and named exports. Storybook metadata is the normal
  exception and uses a default export.
- Use named React imports instead of the `React` namespace.
- Name and export public component prop types as `<Component>Props`.
- Extend `BaseProps` for `id`, `className`, `lang`, and `data-testid`. Define
  `ref` separately with the correct element type when the component supports it.
- Preserve native HTML attribute names, including `type` when it represents the
  HTML attribute.
- Prefer `children` for rendered content, but remain consistent with the
  established component API.
- Use default parameters instead of `defaultProps`.
- Use discriminated unions when props depend on the rendered element or mode.
- Destructure component-only props before forwarding DOM props.
- Use established boolean names such as `is*`, `has*`, `show*`, or `hide*`.
  Local event callbacks normally use `handle*`; public callback props normally
  retain native `on*` names.
- Add polymorphic `as`, `classNames`, compound components, context, or memoization
  only when the requirement and nearby patterns justify them.

For public component APIs, follow the repository's established prop order:

1. `ref`, `id`, `className`, `lang`, `data-testid`
2. component props
3. HTML attributes
4. ARIA attributes
5. booleans
6. callbacks
7. `children`

Within a group, follow the order used by the nearest component and its Storybook
controls.

## Styling and design tokens

- Use SCSS Modules for component styles.
- Reuse tokens from `ds-core-designtokens`; do not invent token names.
- Prefer semantic tokens over palette tokens when a semantic token exists.
- Avoid hard-coded colors, spacing, and typography values when the design system
  provides a token.
- Avoid inline styles in components and stories. Use them only when a value must
  be calculated at runtime and no existing pattern fits.
- Preserve existing class naming, state selectors, responsive behavior, and
  browser support conventions.

## Accessibility

All user-facing components must meet WCAG 2.2 AA expectations. Consider
accessibility before implementation, not as a final patch.

- Prefer semantic HTML and native browser behavior.
- Provide accessible names, descriptions, error messages, and status
  announcements where needed.
- Support the expected keyboard interactions and visible focus.
- Manage focus deliberately in overlays and composite widgets.
- Do not communicate meaning through color or icons alone.
- Translate user-facing assistive text and ARIA labels.
- Test behavior with role- and name-based queries. Add relevant keyboard and
  focus assertions.
- Run the related Storybook tests and perform manual keyboard or screen-reader
  checks when automated tests cannot cover the interaction.

Do not add ARIA to compensate for incorrect semantics when a native element or
existing component solves the problem.

## Localization

Components with user-facing built-in text use `react-i18next` with `dsI18n`.
Follow the namespace and key patterns in the affected package.

- Maintain Norwegian Bokmål and English translations.
- Include screen-reader-only text, labels, and status messages.
- Do not hard-code a translated string when the component already has an i18n
  pattern.

## Documentation and examples

Consumer-facing documentation, usage guidance, and runnable examples belong in
`apps/ds-docs/content`. Do not add consumer documentation only to Storybook.
Storybook remains the source for API stories, component behavior tests, visual
tests, and composed page examples.

When behavior or a public API changes:

- update the relevant MDX page and example when user guidance is affected;
- update the component story and controls;
- add or update Storybook test stories for user-visible behavior;
- add or update Chromatic stories when visual states change.

Use documented examples as templates. Prefer an existing design-system component
or composition over a local one-off implementation.

## Testing

- Test behavior rather than implementation details.
- Add component behavior and interaction tests to Storybook, not `ds-docs`.
- Component behavior belongs primarily in
  `apps/ds-playground/src/stories/__tests__/*.test.stories.tsx`.
- Visual states belong in `*.chromatic.stories.tsx`.
- Utilities, hooks, formatters, CLI behavior, and other non-visual logic may use
  colocated Vitest tests under `__tests__`.
- Do not add unit tests for parameterless default functions that only return a
  constant. Test defaults through the component story instead.
- Include regression coverage when fixing a bug.

Not every library defines a `test` target. Check its `project.json` before
running or documenting package-level tests.

## Commands

Prefer the smallest command that covers the change.

```bash
# Package validation
npx nx run <project>:tsc
npx nx run <project>:lint
npx nx run <project>:stylelint
npx nx run <project>:build

# Only for projects that define a test target
npx nx run <project>:test -- <test-file>

# Storybook component tests
npm run test:storybook -- -t "<Component>"

# Documentation and Storybook development
npm run start:docs
npm start

# Workspace-wide checks when the scope requires them
npm run typecheck
npm run lint
npm run stylelint
npm test
npm run build
npm run build:playground

# Formatting
npm run prettier
npm run prettier:fix
```

Run type checking, linting, style linting, tests, and builds only where relevant
to the changed files. Escalate to workspace-wide checks for cross-package
changes or when targeted validation exposes broader issues.

Before finishing:

1. Review the diff for accidental API or generated-file changes.
2. Confirm the exact requested behavior, including edge cases.
3. Run the narrowest relevant checks and report any checks that could not be
   completed.
