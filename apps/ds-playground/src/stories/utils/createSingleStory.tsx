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

import { Paragraph } from '@skatteetaten/ds-typography';

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
                >
                  {children}
                </div>
              );

              const StoryPseudoStates = ({
                children,
              }: PropsWithChildren): JSX.Element => {
                const pseudoStates =
                  story.parameters?.imageSnapshot?.pseudoStates || [];
                return (
                  <div className={'paddingM'}>
                    {pseudoStates.map((state: string) => (
                      <div key={state}>
                        <Paragraph
                          className={'topSpacingM bottomSpacingS bold'}
                        >
                          {state.charAt(0).toUpperCase() + state.slice(1)}
                        </Paragraph>
                        <div data-pseudo-state={state}>{children}</div>
                      </div>
                    ))}
                  </div>
                );
              };

              const args = { ...story.args };
              if (typeof story === 'function') {
                return (
                  <StoryStyles key={storyName}>
                    {story(args, context)}
                    {story.parameters?.imageSnapshot?.pseudoStates && (
                      <StoryPseudoStates>
                        {story(args, context)}
                      </StoryPseudoStates>
                    )}
                  </StoryStyles>
                );
              }
              if (story.render) {
                return (
                  <StoryStyles key={storyName}>
                    {story.render(args, context)}
                    {story.parameters?.imageSnapshot?.pseudoStates && (
                      <StoryPseudoStates>
                        {story.render(args, context)}
                      </StoryPseudoStates>
                    )}
                  </StoryStyles>
                );
              }
              if (meta.component) {
                return (
                  <StoryStyles key={storyName}>
                    {createElement(meta.component, args)}
                    {story.parameters?.imageSnapshot?.pseudoStates && (
                      <StoryPseudoStates>
                        {createElement(meta.component, args)}
                      </StoryPseudoStates>
                    )}
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
      pseudo: {
        hover: [
          `[data-pseudo-state="hover"] ${meta.parameters?.pseudoSelector || '> *'}`,
        ],
        active: [
          `[data-pseudo-state="active"] ${meta.parameters?.pseudoSelector || '> *'}`,
        ],
        focus: [
          `[data-pseudo-state="focus"] ${meta.parameters?.pseudoSelector || '> *'}`,
        ],
      },
    },
  };
}
