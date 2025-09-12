import { createElement, JSX, type PropsWithChildren } from 'react';

import {
  composeStories,
  type Meta,
  type ReactRenderer,
  type StoryFn,
  type StoryObj,
} from '@storybook/react-vite';
import type {
  Store_CSFExports,
  StoryAnnotationsOrFn,
} from 'storybook/internal/types';

type Story<T> = StoryObj<T> | StoryFn<T>;

// "any" type is used to align with Storybook's usage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StoryExports = Record<string, Story<any>>;

export function createSingleStory<
  // "any" type is used to align with Storybook's usage
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  S extends Store_CSFExports<ReactRenderer, any>,
  M extends Meta,
>(rawStories: S, meta: M): StoryAnnotationsOrFn<ReactRenderer> {
  const stories = composeStories(rawStories) as StoryExports;
  return {
    render: (_, context): JSX.Element => {
      return (
        <div
          // eslint-disable-next-line react/forbid-dom-props
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-m)',
          }}
        >
          {Object.entries(stories)
            .filter(
              ([_storyName, story]) =>
                !story.parameters?.imageSnapshot?.disableSnapshot
            )
            .map(([storyName, story]) => {
              const { story: storyStyles, ...style } =
                story.parameters?.customStyles ?? {};
              const StoryStyles = ({
                children,
              }: PropsWithChildren): JSX.Element => (
                <div
                  // eslint-disable-next-line react/forbid-dom-props
                  style={{
                    ...style,
                    ...storyStyles,
                  }}
                  data-pseudo-state={
                    story.parameters?.pseudo?.hover
                      ? 'hover'
                      : story.parameters?.pseudo?.active
                        ? 'active'
                        : story.parameters?.pseudo?.focus
                          ? 'focus'
                          : undefined
                  }
                >
                  {children}
                </div>
              );
              const args = { ...story.args };
              if (typeof story === 'function') {
                return (
                  <StoryStyles key={storyName}>
                    {story(args, context)}
                  </StoryStyles>
                );
              }
              if (story.render) {
                return (
                  <StoryStyles key={storyName}>
                    {story.render(args, context)}
                  </StoryStyles>
                );
              }
              if (meta.component) {
                return (
                  <StoryStyles key={storyName}>
                    {createElement(meta.component, args)}
                  </StoryStyles>
                );
              }
              return null;
            })}
        </div>
      );
    },
    parameters: {
      chromatic: {
        disableSnapshot: false,
      },
      customStyles: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-m)',
      },
    },
  };
}
