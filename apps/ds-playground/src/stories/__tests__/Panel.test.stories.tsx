import { Fragment, JSX, useEffect, useRef } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '@skatteetaten/ds-buttons';
import {
  Panel,
  panelVariantArr,
  panelSpacingArr,
  panelPaddingArr,
  panelColorArr,
} from '@skatteetaten/ds-content';
import { InfoIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';

const tittelText = 'Det er en tittel';
const subtittelText = 'Det er en undertittel';

const meta = {
  component: Panel,
  title: 'Tester/Panel',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: {
      table: { disable: true },
      options: ['dummyPanelOverridesWidthAndPadding'],
    },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    canManuallySetTitleFocus: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: 'text',
    },
    classNames: { table: { disable: true } },
    color: {
      table: { disable: true },
      control: 'inline-radio',
    },
    hasResponsivePadding: { table: { disable: true } },
    headingRef: { table: { disable: true }, control: { disable: true } },
    hideGraphicMobile: { table: { disable: true } },
    hideSubtitle: { table: { disable: true } },
    hideTitle: { table: { disable: true } },
    imageSource: {
      table: { disable: true },
      control: 'select',
      options: ['', farmerIllustration, waitIllustration],
    },
    imageSourceAltText: { table: { disable: true } },
    padding: {
      table: { disable: true },
      control: 'inline-radio',
    },
    renderIcon: {
      table: { disable: true },
      control: { disable: true },
    },
    spacing: {
      table: { disable: true },
      control: 'inline-radio',
    },
    subtitle: { table: { disable: true } },
    subtitleAs: {
      control: 'inline-radio',
      table: { disable: true },
    },
    title: { table: { disable: true } },
    titleAs: {
      control: 'inline-radio',
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
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
    ref: (instance: HTMLHeadingElement | null): void => {
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
  name: 'Defaults Variant Outline (A1, A2 delvis, A3)',
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
  name: 'Variant Filled (A1)',
  args: {
    ...defaultArgs,
    variant: 'filled',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithTitle = {
  name: 'With Title (A5, A3)',
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
  name: 'With TitleAs (A5)',
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
  name: 'With Subtitle (A7, A3)',
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
  name: 'With SubtitleAs (A7)',
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
  name: 'With Image (A9)',
  args: {
    ...defaultArgs,
    imageSource: farmerIllustration,
  },
  argTypes: {
    imageSource: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByRole('presentation', { hidden: true });
    images.forEach((img) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', '');
    });
  },
} satisfies Story;

export const WithImageSourceAltText = {
  render: TemplateWithGraphics,
  name: 'With Image With Alt Text (A9)',
  args: {
    ...defaultArgs,
    imageSource: farmerIllustration,
    imageSourceAltText: 'Bonde med ku',
  },
  argTypes: {
    imageSource: { table: { disable: false } },
    imageSourceAltText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByRole('img', { hidden: true });
    images.forEach((img) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', 'Bonde med ku');
    });
  },
} satisfies Story;

export const WithImageMobile = {
  render: TemplateWithGraphics,
  name: 'With Image On Small Screen (A9)',
  args: {
    ...defaultArgs,
    imageSource: farmerIllustration,
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
  name: 'With Icon On Small Screen (A12)',
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
  name: 'With HideGraphicMobile And Icon On Small Screen (A12, A9)',
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
  name: 'With HideGraphicMobile And Image On Small Screen (A12, A9)',
  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    imageSource: farmerIllustration,
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
  name: 'With HideGraphicMobile And Icon On Big Screen (A12, A9)',
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
  name: 'With HideGraphicMobile And Image On Big Screen (A12, A9)',
  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    imageSource: farmerIllustration,
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
  name: 'With Color And Variant (A1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    color: {
      table: { disable: false },
      control: { disable: true },
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
      control: { disable: true },
    },
  },
} satisfies Story;

const TemplateWithAllPaddings: StoryFn<typeof Panel> = (_args) => (
  <>
    {panelPaddingArr.map((padding, index) => {
      return (
        <Fragment key={index}>
          <Panel padding={padding}>
            <div>{`padding: ${padding}`}</div>
            <Paragraph>{loremIpsum}</Paragraph>
          </Panel>
          <Panel padding={padding} variant={'filled'}>
            <div>{`padding: ${padding}`}</div>
            <Paragraph>{loremIpsum}</Paragraph>
          </Panel>
        </Fragment>
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
      control: { disable: true },
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
        <div key={index}>
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
        </div>
      );
    })}
  </>
);

export const TextAlignedVertical = {
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

export const TextShortAndIcon = {
  name: 'Text Short And Icon (A11)',

  args: {
    title: 'Kort tittel',
    children: <Paragraph>{'Kort test ...'}</Paragraph>,
    renderIcon: (): JSX.Element => <InfoIcon size={'large'} />,
  },

  argTypes: {
    renderIcon: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithCanManuallySetTitleFocus = {
  args: {
    ...defaultArgs,
    title: 'Tittel i Panel',
    canManuallySetTitleFocus: true,
  },
  argTypes: {
    canManuallySetTitleFocus: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const panelHeading = canvas.getByRole('heading', { level: 3 });
    panelHeading.focus();
    await expect(panelHeading).toBeInTheDocument();
    await expect(panelHeading).toHaveAttribute('tabIndex', '-1');
  },
} satisfies Story;

export const WithPanelHeadingRef: Story = {
  name: 'With Panel Heading Ref',
  render: (args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
      if (headingRef.current !== null) {
        headingRef.current.id = 'dummyIdForwardedFromRef';
      }
    }, []);
    return (
      <>
        <Panel {...args} headingRef={headingRef}>
          <Paragraph>{loremIpsum}</Paragraph>
        </Panel>
        <Button
          onClick={(): void => {
            headingRef.current?.focus();
          }}
        >
          {'Sett fokus på Panel Header'}
        </Button>
      </>
    );
  },
  args: {
    ...defaultArgs,
    title: 'Panel Header skal kunne få fokus',
    canManuallySetTitleFocus: true,
    variant: 'outline',
  },
  argTypes: {
    canManuallySetTitleFocus: { table: { disable: false } },
    headingRef: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const panelHeading = canvas.getByRole('heading', { level: 3 });
    await expect(panelHeading).toHaveAttribute('id', 'dummyIdForwardedFromRef');
    await expect(panelHeading).toHaveFocus();
  },
} satisfies Story;

const TemplateResponsivePadding: StoryFn<typeof Panel> = (args) => (
  <>
    <Panel {...args} title={`Med responsive padding `}>
      <Paragraph>{`
      Her har vi satt hasResponsivePadding:true og endret følgende tokens for responsive visning. 
      --pandel-padding-xs, --pandel-padding-m og --pandel-padding-l
      `}</Paragraph>
    </Panel>
    <Panel title={`Med default padding`} padding={args.padding}>
      <Paragraph>{`Denne Panel bruker standard 'padding'-prop for å kontrollere padding.`}</Paragraph>
    </Panel>
  </>
);

export const WithResponsivePadding = {
  render: TemplateResponsivePadding,
  name: 'With Responsive Padding',
  args: {
    children: '',
    hasResponsivePadding: true,
    classNames: { padding: 'dummyPanelPaddingResponsive' },
  },
  argTypes: {
    hasResponsivePadding: {
      description: 'lskjf',
    },
    padding: {
      table: { disable: false, readonly: false },
      control: { disable: false },
    },
    classNames: {
      table: { readonly: true },
      disable: false,
      control: { disable: false },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;
