import { useState } from 'react';

import { IconButton, IconButtonProps } from '@skatteetaten/ds-buttons';
import { sizeArr } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const defaultSVGPath = Object.values(SystemSVGPaths)[14];
const alternativeSVGPathFocus = Object.values(SystemSVGPaths)[40];
const alternativeSVGPathBlur = Object.values(SystemSVGPaths)[15];
const alternativeSVGPathClick = Object.values(SystemSVGPaths)[52];

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    await expect(iconButton).toHaveAttribute(attribute, expectedValue);
  };

const availableSizes = [...sizeArr].slice(0, 4);
export default {
  component: IconButton,
  title: 'Tester/IconButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    isOutlined: { table: { disable: true } },
    size: {
      table: { disable: true },
      options: availableSizes,
      control: 'radio',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    // HTML
    accessKey: { table: { disable: true } },
    disabled: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof IconButton>;

const accessibleName = 'dummy tekst accessible name';

const defaultArgs: IconButtonProps = {
  svgPath: defaultSVGPath,
  title: accessibleName,
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div data-test-block>
    <IconButton {...args} title={args.title} />
  </div>
);

// Når IconButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når IconButton har en id, så har a-element id
// Når IconButton har en custom CSS, så vises custom stil
// Når IconButton har en lang, så har a-element lang
// Når IconButton har dataTestid, så har a-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const iconButton = canvas.getByRole('button');
  await expect(iconButton).toHaveClass('dummyClassname');
  await expect(iconButton).toHaveAttribute('id', 'htmlId');
  await expect(iconButton).toHaveAttribute('lang', 'nb');
  await expect(iconButton).toHaveAttribute('data-testid', '123ID');
};

// Når IconButton instansieres, får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1, B2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  svgPath: { table: { disable: false } },
  title: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > button`,
    focus: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const iconButton = canvas.getByRole('button');
  expect(iconButton).toHaveAttribute('type', 'button');
  // eslint-disable-next-line testing-library/no-node-access
  const svg = iconButton.querySelector('svg');
  await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  await expect(svg).toHaveAttribute('aria-hidden', 'false');

  await expect(canvas.getByTitle(accessibleName)).toBeInTheDocument();
};

// Når IconButton er outlined, så vises knappen med ramme og rendrer riktig i ulike tilstander
export const WithOutline = Template.bind({});
WithOutline.storyName = 'With Outline (A1)';
WithOutline.args = {
  ...defaultArgs,
  isOutlined: true,
};
WithOutline.argTypes = {
  isOutlined: { table: { disable: false } },
};
WithOutline.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > button`,
    focus: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};

// Når IconButton har et custom ikon, så vises dette ikonet
export const WithCustomSVGPath = Template.bind({});
WithCustomSVGPath.storyName = 'With Custom SVGPath (A1)';
WithCustomSVGPath.args = {
  ...defaultArgs,
  svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'} />,
};
WithCustomSVGPath.argTypes = {
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};

// Når IconButton har size extraSmall, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const WithSizeExtraSmall = Template.bind({});
WithSizeExtraSmall.storyName = 'With Size Extra Small (A1)';
WithSizeExtraSmall.args = {
  ...defaultArgs,
  size: 'extraSmall',
};
WithSizeExtraSmall.argTypes = {
  size: { table: { disable: false } },
};

// Når IconButton har size small, så vises en liten knapp uten ramme som rendrer riktig i ulike tilstander
export const WithSizeSmall = Template.bind({});
WithSizeSmall.storyName = 'With Size Small (A1)';
WithSizeSmall.args = {
  ...defaultArgs,
  size: 'small',
};
WithSizeSmall.argTypes = {
  size: { table: { disable: false } },
};

// Når IconButton har size large, så vises en stor knapp uten ramme som rendrer riktig i ulike tilstander
export const WithSizeLarge = Template.bind({});
WithSizeLarge.storyName = 'With Size Large (A1)';
WithSizeLarge.args = {
  ...defaultArgs,
  size: 'large',
};
WithSizeLarge.argTypes = {
  size: { table: { disable: false } },
};

// Når IconButton har size extraSmall og er outlined, så vises en liten knapp med ramme som rendrer riktig i ulike tilstander
export const WithSizeExtraSmallAndOutline = Template.bind({});
WithSizeExtraSmallAndOutline.storyName =
  'With Size Extra Small and Outline (A1)';
WithSizeExtraSmallAndOutline.args = {
  ...defaultArgs,
  size: 'extraSmall',
  isOutlined: true,
};
WithSizeExtraSmallAndOutline.argTypes = {
  size: { table: { disable: false } },
  isOutlined: { table: { disable: false } },
};

// Når IconButton har size small og er outlined, så vises en liten knapp med ramme som rendrer riktig i ulike tilstander
export const WithSizeSmallAndOutline = Template.bind({});
WithSizeSmallAndOutline.storyName = 'With Size Small and Outline (A1)';
WithSizeSmallAndOutline.args = {
  ...defaultArgs,
  size: 'small',
  isOutlined: true,
};
WithSizeSmallAndOutline.argTypes = {
  size: { table: { disable: false } },
  isOutlined: { table: { disable: false } },
};

// Når IconButton har size large og er outlined, så vises en stor knapp med ramme som rendrer riktig i ulike tilstander
export const WithSizeLargeAndOutline = Template.bind({});
WithSizeLargeAndOutline.storyName = 'With Size Large and Outline (A1)';
WithSizeLargeAndOutline.args = {
  ...defaultArgs,
  size: 'large',
  isOutlined: true,
};
WithSizeLargeAndOutline.argTypes = {
  size: { table: { disable: false } },
  isOutlined: { table: { disable: false } },
};

// Når IconButton er disabled, så vises knappen uten ramme i disabled stil
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (B5)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
};
WithDisabled.argTypes = {
  disabled: { table: { disable: false } },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  expect(canvas.getByRole('button')).toBeDisabled();
};

// Når IconButton er disabled og outlined, så vises knappen med ramme i disabled stil
export const WithDisabledAndOutline = Template.bind({});
WithDisabledAndOutline.storyName = 'With Disabled And Outline (B5)';
WithDisabledAndOutline.args = {
  ...defaultArgs,
  isOutlined: true,
  disabled: true,
};
WithDisabledAndOutline.argTypes = {
  isOutlined: { table: { disable: false } },
  disabled: { table: { disable: false } },
};

// Når IconButton har prop type, så har button-elementet type satt
export const WithType = Template.bind({});
WithType.storyName = 'With Type (B1)';
WithType.args = {
  ...defaultArgs,
  type: 'submit',
};
WithType.argTypes = {
  type: { table: { disable: false } },
};
WithType.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithType.play = verifyAttribute('type', 'submit');

// Når IconButton har aria-describedby, så har button-elementet aria-describedby satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B3)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'araiDescId',
};
WithAriaDescribedby.argTypes = {
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithAriaDescribedby.play = verifyAttribute('aria-describedby', 'araiDescId');

// Når IconButton har en accessKey, så har button-elementet accessKey satt
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With AccessKey (B4)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 'a',
};
WithAccesskey.argTypes = {
  accessKey: { table: { disable: false } },
};
WithAccesskey.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithAccesskey.play = verifyAttribute('accessKey', 'a');

// Når brukeren setter focus, blurrer, eller klikker på knappen, så kalles riktig eventHandler
// Eventhandlere endrer tesksten på knappen
const EventHandlersTemplate: ComponentStory<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <div data-test-block>
      <IconButton
        {...args}
        svgPath={svgPath}
        onFocus={(event: React.FocusEvent<HTMLButtonElement>): void => {
          setSvgPath(alternativeSVGPathFocus);
          args.onFocus && args.onFocus(event);
        }}
        onBlur={(event: React.FocusEvent<HTMLButtonElement>): void => {
          setSvgPath(alternativeSVGPathBlur);
          args.onBlur && args.onBlur(event);
        }}
        onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
          setSvgPath(alternativeSVGPathClick);
          args.onClick && args.onClick(event);
        }}
      />
    </div>
  );
};
export const WithEventHandlers = EventHandlersTemplate.bind({});
WithEventHandlers.storyName = 'With EventHandlers (A2 delvis)';
WithEventHandlers.args = {
  ...defaultArgs,
};
WithEventHandlers.parameters = {
  imageSnapshot: { disable: true },
};
WithEventHandlers.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const iconButton = canvas.getByRole('button');
  await expect(iconButton).toBeInTheDocument();
  await iconButton.focus();
  await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
  await userEvent.tab();
  await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  await userEvent.click(iconButton);
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
