import { Button } from '@skatteetaten/ds-buttons';
import {
  Panel,
  panelColorArr,
  panelVariantArr,
  panelSpacingArr,
  panelPaddingArr,
} from '@skatteetaten/ds-content';
import { headingAsArr, subheadingAsArr } from '@skatteetaten/ds-core-utils';
import { InfoIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import illustrationSource from './testUtils/test_bonde.svg';

const tittelText = 'Det er en tittel';
const subtittelText = 'Det er en undertittel';

const meta = {
  component: Panel,
  title: 'Tester/Panel',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: {
      table: { disable: true },
      options: ['dummyPanelOverridesWidthAndPadding'],
    },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    color: {
      table: { disable: true },
      options: [...panelColorArr],
      control: 'inline-radio',
    },
    hideGraphicMobile: { table: { disable: true } },
    hideSubtitle: {
      table: { disable: true },
    },
    hideTitle: {
      table: { disable: true },
    },
    imageSource: {
      table: { disable: true },
      control: 'select',
      options: [
        '',
        'test_bonde.7eebe78d220ecf48b97e4811ac2c5210.svg',
        'd52134bda41b5aa041ef.png',
      ],
    },
    padding: {
      table: { disable: true },
      options: [...panelPaddingArr],
      control: 'inline-radio',
    },
    renderIcon: {
      table: { disable: true },
      control: { type: null },
    },
    spacing: {
      table: { disable: true },
      options: [...panelSpacingArr],
      control: 'inline-radio',
    },
    subtitle: {
      table: { disable: true },
    },
    subtitleAs: {
      options: [...subheadingAsArr],
      control: 'inline-radio',
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
      options: [...panelVariantArr],
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof Panel>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: (
    <>
      <Paragraph hasSpacing>{loremIpsum}</Paragraph>
      <Button>{'Trykk på meg'}</Button>
    </>
  ),
};

export const WithRef = {
  name: 'With Ref (FA1)',

  args: {
    ...defaultArgs,
    ref: (instance: HTMLParagraphElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },

  argTypes: {
    ref: { table: { disable: false } },
  },

  parameters: { imageSnapshot: { disable: true } },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',

  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },

  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithClassNameOverridesPanelWidthAndPadding = {
  name: 'With ClassName Overrides Panel Width And Padding none (A2, A10)',

  args: {
    ...defaultArgs,
    className: 'dummyPanelOverridesWidthAndPadding',
  },

  argTypes: {
    className: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Outline (A1 delvis, A2 delvis, A3 delvis)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    children: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textNode = canvas.getByText(loremIpsum);
    await expect(textNode).toBeInTheDocument();
  },
} satisfies Story;

export const VariantFilled = {
  name: 'Variant Filled (A1 delvis)',

  args: {
    ...defaultArgs,
    variant: 'filled',
  },

  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithTitle = {
  name: 'With Title (A5 delvis, A3 delvis)',

  args: {
    ...defaultArgs,
    title: tittelText,
    children: <Paragraph>{loremIpsum}</Paragraph>,
  },

  argTypes: {
    title: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent(tittelText);
    await expect(heading.tagName).toBe('H3');
  },
} satisfies Story;

export const WithTitleAs = {
  name: 'With TitleAs (A5 delvis)',

  args: {
    ...defaultArgs,
    title: tittelText,
    titleAs: 'h1',
  },

  argTypes: {
    titleAs: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading.tagName).toBe('H1');
  },
} satisfies Story;

export const WithHideTitle = {
  name: 'With HideTitle (A6)',

  args: {
    ...defaultArgs,
    title: tittelText,
    hideTitle: true,
  },

  argTypes: {
    hideTitle: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
  },
} satisfies Story;

export const WithSubtitle = {
  name: 'With Subtitle (A7 delvis, A3 delvis)',

  args: {
    ...defaultArgs,
    subtitle: subtittelText,
    children: <Paragraph>{loremIpsum}</Paragraph>,
  },

  argTypes: {
    subtitle: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent(subtittelText);
    await expect(heading.tagName).toBe('H4');
  },
} satisfies Story;

export const WithSubtitleAs = {
  name: 'With SubtitleAs (A7 delvis)',

  args: {
    ...defaultArgs,
    subtitle: 'Det er en undertittel med valgt heading nivå',
    subtitleAs: 'h2',
  },

  argTypes: {
    subtitleAs: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading.tagName).toBe('H2');
  },
} satisfies Story;

export const WithHideSubtitle = {
  name: 'With HideSubtitle (A8)',

  args: {
    ...defaultArgs,
    subtitle: subtittelText,
    hideSubtitle: true,
  },

  argTypes: {
    hideSubtitle: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithGraphics: StoryFn<typeof Panel> = (args) => (
  <>
    <Panel {...args} variant={'outline'}>
      <Paragraph>{loremIpsum}</Paragraph>
    </Panel>
    <Panel {...args} variant={'filled'}>
      <Paragraph>{loremIpsum}</Paragraph>
    </Panel>
  </>
);

export const WithImage = {
  render: TemplateWithGraphics,
  name: 'With Image (A9 delvis)',

  args: {
    ...defaultArgs,
    imageSource: illustrationSource,
  },

  argTypes: {
    imageSource: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByRole('img', { hidden: true });
    images.forEach((img) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', '');
    });
  },
} satisfies Story;

export const WithImageMobile = {
  render: TemplateWithGraphics,
  name: 'With Image On Small Screen (A9 delvis)',

  args: {
    ...defaultArgs,
    imageSource: illustrationSource,
  },

  argTypes: {
    imageSource: { table: { disable: false } },
  },

  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithIcon = {
  render: TemplateWithGraphics,
  name: 'With Icon (A11 delvis)',

  args: {
    ...defaultArgs,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
  },

  argTypes: {
    renderIcon: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icons = canvas.getAllByRole('img', { hidden: true });
    icons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });
  },
} satisfies Story;

export const WithIconMobile = {
  render: TemplateWithGraphics,
  name: 'With Icon On Small Screen (A12 delvis)',

  args: {
    ...defaultArgs,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
  },

  argTypes: {
    renderIcon: { table: { disable: false } },
  },

  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithHideGraphicMobileAndIcon = {
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Icon On Small Screen (A12 delvis, A9 delvis)',

  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
  },

  argTypes: {
    hideGraphicMobile: { table: { disable: false } },
  },

  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithHideGraphicMobileAndImage = {
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Image On Small Screen (A12 delvis, A9 delvis)',

  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    imageSource: illustrationSource,
  },

  argTypes: {
    hideGraphicMobile: { table: { disable: false } },
  },

  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithHideGraphicMobileAndIconDesktop = {
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Icon On Big Screen (A12 delvis, A9 delvis)',

  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
  },

  argTypes: {
    hideGraphicMobile: { table: { disable: false } },
  },
} satisfies Story;

export const WithHideGraphicMobileAndImageDesktop = {
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Image On Big Screen (A12 delvis, A9 delvis)',

  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    imageSource: illustrationSource,
  },

  argTypes: {
    hideGraphicMobile: { table: { disable: false } },
  },
} satisfies Story;

const TemplateWithAllColors: StoryFn<typeof Panel> = (args) => (
  <>
    {panelColorArr.map((color, index) => {
      return (
        <Panel
          key={`panel_${index}`}
          {...args}
          color={color}
          variant={'outline'}
        >
          {`color: ${color}`}
        </Panel>
      );
    })}
    {panelColorArr.map((color, index) => {
      return (
        <Panel
          key={`panel_${index}`}
          {...args}
          color={color}
          variant={'filled'}
        >
          {`color: ${color}`}
        </Panel>
      );
    })}
  </>
);

export const WithColorAndVariant = {
  render: TemplateWithAllColors,
  name: 'With Color And Variant (A1 delvis)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    color: {
      table: { disable: false },
      control: { type: null },
    },
  },
} satisfies Story;

const TemplateWithAllSpacings: StoryFn<typeof Panel> = (args) => (
  <>
    {panelSpacingArr.map((spacing, index) => {
      return (
        <Panel key={`panel_${index}`} {...args} spacing={spacing}>
          {`spacing: ${spacing}`}
        </Panel>
      );
    })}
  </>
);

export const WithSpacing = {
  render: TemplateWithAllSpacings,
  name: 'With Spacing (A4)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    spacing: {
      table: { disable: false },
      control: { type: null },
    },
  },
} satisfies Story;

const TemplateWithAllPaddings: StoryFn<typeof Panel> = (args) => (
  <>
    {panelPaddingArr.map((padding, index) => {
      return (
        <>
          <Panel key={`panel1_${index}`} {...args} padding={padding}>
            <div>{`padding: ${padding}`}</div>
            <Paragraph>{loremIpsum}</Paragraph>
          </Panel>
          <Panel
            key={`panel2_${index}`}
            {...args}
            padding={padding}
            variant={'filled'}
          >
            <div>{`padding: ${padding}`}</div>
            <Paragraph>{loremIpsum}</Paragraph>
          </Panel>
        </>
      );
    })}
  </>
);

export const WithPadding = {
  render: TemplateWithAllPaddings,
  name: 'With Padding (A10)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    padding: {
      table: { disable: false },
      control: { type: null },
    },
  },

  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

const TemplateTwoPanelWithTextAndOneWithIcon: StoryFn<typeof Panel> = (
  args
) => (
  <>
    {panelVariantArr.map((variant, index) => {
      return (
        <>
          <Panel
            key={`panel1_${index}`}
            variant={variant}
            renderIcon={args.renderIcon}
            title={'En overskrift'}
          >
            {loremIpsum}
          </Panel>
          <Panel key={`panel2_${index}`} variant={variant}>
            {loremIpsum}
          </Panel>
        </>
      );
    })}
  </>
);

export const TextAlginedVertical = {
  render: TemplateTwoPanelWithTextAndOneWithIcon,
  name: 'Text Aligned Vertical (A13)',

  args: {
    ...defaultArgs,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
  },

  argTypes: {
    renderIcon: {
      table: { disable: false },
    },
  },
} satisfies Story;
