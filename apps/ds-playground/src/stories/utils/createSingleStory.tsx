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

import breakpoints from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
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
>(
  rawStories: S,
  meta: M,
  options?: {
    viewport?: keyof typeof breakpoints | '--mobile';
    runPlayFunctions?: boolean;
    delay?: number;
  }
): StoryAnnotationsOrFn<ReactRenderer> {
  const stories = composeStories(rawStories) as StoryExports;

  const { viewport, runPlayFunctions = false, delay } = options || {};

  // filter stories object by viewPort
  Object.keys(stories).forEach((storyName) => {
    const story = stories[storyName];
    if (story.globals?.viewport?.value !== viewport) {
      delete stories[storyName];
    }
  });
  const hasPseudo = Object.entries(stories).some(
    ([_storyName, story]) => story.parameters?.imageSnapshot?.pseudoStates
  );

  return {
    globals: {
      ...meta.globals,
      viewport: viewport
        ? {
            value: viewport,
          }
        : undefined,
    },
    render: (_, context): JSX.Element => {
      return (
        <div
          // eslint-disable-next-line react/forbid-dom-props
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-m)',
            padding: 'var(--spacing-m)',
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
              }: PropsWithChildren): JSX.Element => {
                const backgroundColor =
                  story.globals?.backgrounds?.value ?? undefined;

                const refCallBack = (node: HTMLDivElement): void => {
                  if (!node) return;
                  runPlayFunctions &&
                    story.play?.({
                      ...context,
                      canvasElement: node,
                    });
                };

                return (
                  <div
                    ref={refCallBack}
                    className={backgroundColor}
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{
                      ...style,
                      ...storyStyles,
                    }}
                  >
                    {children}
                  </div>
                );
              };

              const StoryPseudoStates = ({
                children,
              }: PropsWithChildren): JSX.Element => {
                const pseudoStates =
                  story.parameters?.imageSnapshot?.pseudoStates || [];
                return (
                  <>
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
                  </>
                );
              };

              const args = { ...story.args };
              if (typeof story === 'function') {
                return (
                  <StoryStyles key={storyName}>
                    <Paragraph className={'bold'} hasSpacing>
                      {storyName}
                    </Paragraph>
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
                    <Paragraph className={'bold'} hasSpacing>
                      {storyName}
                    </Paragraph>
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
                    <Paragraph className={'bold'} hasSpacing>
                      {storyName}
                    </Paragraph>
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
        delay: delay ?? (hasPseudo ? 100 : undefined),
      },
      pseudo: {
        hover: Array.isArray(meta.parameters?.pseudoSelector)
          ? meta.parameters.pseudoSelector.map(
              (sel: string) => `[data-pseudo-state="hover"] ${sel}`
            )
          : [
              `[data-pseudo-state="hover"] ${meta.parameters?.pseudoSelector || '> *'}`,
            ],
        active: Array.isArray(meta.parameters?.pseudoSelector)
          ? meta.parameters.pseudoSelector.map(
              (sel: string) => `[data-pseudo-state="active"] ${sel}`
            )
          : [
              `[data-pseudo-state="active"] ${meta.parameters?.pseudoSelector || '> *'}`,
            ],
        focus: Array.isArray(meta.parameters?.pseudoSelector)
          ? meta.parameters.pseudoSelector.map(
              (sel: string) => `[data-pseudo-state="focus"] ${sel}`
            )
          : [
              `[data-pseudo-state="focus"] ${meta.parameters?.pseudoSelector || '> *'}`,
            ],
        focusVisible: Array.isArray(meta.parameters?.pseudoSelector)
          ? meta.parameters.pseudoSelector.map(
              (sel: string) => `[data-pseudo-state="focus-visible"] ${sel}`
            )
          : [
              `[data-pseudo-state="focus-visible"] ${meta.parameters?.pseudoSelector || '> *'}`,
            ],
      },
    },
  };
}
