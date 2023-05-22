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
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import illustrationSource from './testUtils/test_bonde.svg';

const inlineRadio = 'inline-radio';

export default {
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
      control: inlineRadio,
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
      control: inlineRadio,
    },
    renderIcon: {
      table: { disable: true },
      control: { type: null },
    },
    spacing: {
      table: { disable: true },
      options: [...panelSpacingArr],
      control: inlineRadio,
    },
    subtitle: {
      table: { disable: true },
    },
    subtitleAs: {
      options: [...subheadingAsArr],
      control: inlineRadio,
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    titleAs: {
      options: [...headingAsArr],
      control: inlineRadio,
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
      options: [...panelVariantArr],
      control: inlineRadio,
    },
  },
} as ComponentMeta<typeof Panel>;

const defaultArgs = {
  children: (
    <>
      <Paragraph hasSpacing>{loremIpsum}</Paragraph>
      <Button>{'Trykk på meg'}</Button>
    </>
  ),
};

const Template: ComponentStory<typeof Panel> = (args) => (
  <div data-test-block>
    {/* eslint-disable-next-line testing-library/no-node-access */}
    <Panel {...args}>{args.children}</Panel>
  </div>
);

// Når Panel har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLParagraphElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = { imageSnapshot: { disable: true } };
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Panel har en id, så har element id
// Når Panel har en custom CSS, så vises custom stil
// Når Panel har en lang, så har element lang
// Når Panel har dataTestid, så har elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
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
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('id', 'htmlId');
  await expect(container).toHaveAttribute('lang', 'nb');
  await expect(container).toHaveAttribute('data-testid', '123ID');
};

// Når Panel har en className, så kan maks bredden og padding for panelet overskrives
export const WithClassNameOverridesPanelWidthAndPadding = Template.bind({});
WithClassNameOverridesPanelWidthAndPadding.storyName =
  'With ClassName Overrides Panel Width And Padding none (A2, A10)';
WithClassNameOverridesPanelWidthAndPadding.args = {
  ...defaultArgs,
  className: 'dummyPanelOverridesWidthAndPadding',
};
WithClassNameOverridesPanelWidthAndPadding.argTypes = {
  className: {
    table: { disable: false },
  },
};

// Når Panel instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName =
  'Defaults Variant Outline (A1 delvis, A2 delvis, A3 delvis)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  children: { table: { disable: false } },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textNode = canvas.getByText(loremIpsum);
  await expect(textNode).toBeInTheDocument();
};

// Når Panel har en variant, så vises stilsett for varianten
export const VariantFilled = Template.bind({});
VariantFilled.storyName = 'Variant Filled (A1 delvis)';
VariantFilled.args = {
  ...defaultArgs,
  variant: 'filled',
};
VariantFilled.argTypes = {
  variant: { table: { disable: false } },
};

// Når Panel har en tittel, så vises tittel tekst i default heading element og før children
export const WithTitle = Template.bind({});
WithTitle.storyName = 'With Title (A5 delvis, A3 delvis)';
WithTitle.args = {
  ...defaultArgs,
  title: 'Det er en tittel',
  children: <Paragraph>{loremIpsum}</Paragraph>,
};
WithTitle.argTypes = {
  title: { table: { disable: false } },
};
WithTitle.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading).toBeInTheDocument();
  await expect(heading).toHaveTextContent('Det er en tittel');
  await expect(heading.tagName).toBe('H3');
};

// Når Panel har en titleAs, så vises tittel tekst i valgte heading element med riktig stilset
export const WithTitleAs = Template.bind({});
WithTitleAs.storyName = 'With TitleAs (A5 delvis)';
WithTitleAs.args = {
  ...defaultArgs,
  title: 'Det er en tittel',
  titleAs: 'h1',
};
WithTitleAs.argTypes = {
  titleAs: { table: { disable: false } },
};
WithTitleAs.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading.tagName).toBe('H1');
};

// Når Panel har en tittel som er skjult, så vises tittel fortsatt for en skjermleser
export const WithHideTitle = Template.bind({});
WithHideTitle.storyName = 'With HideTitle (A6)';
WithHideTitle.args = {
  ...defaultArgs,
  title: 'Det er en tittel',
  hideTitle: true,
};
WithHideTitle.argTypes = {
  hideTitle: { table: { disable: false } },
};
WithHideTitle.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading).toBeInTheDocument();
};

// Når Panel har en subtittel, så vises subtittel tekst i default heading element og før children
export const WithSubtitle = Template.bind({});
WithSubtitle.storyName = 'With Subtitle (A7 delvis, A3 delvis)';
WithSubtitle.args = {
  ...defaultArgs,
  subtitle: 'Det er en undertittel',
  children: <Paragraph>{loremIpsum}</Paragraph>,
};
WithSubtitle.argTypes = {
  subtitle: { table: { disable: false } },
};
WithSubtitle.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading).toBeInTheDocument();
  await expect(heading).toHaveTextContent('Det er en undertittel');
  await expect(heading.tagName).toBe('H4');
};

// Når Panel har en subtitleAs, så vises subtittel tekst i valgte heading element med riktig stilset
export const WithSubtitleAs = Template.bind({});
WithSubtitleAs.storyName = 'With SubtitleAs (A7 delvis)';
WithSubtitleAs.args = {
  ...defaultArgs,
  subtitle: 'Det er en undertittel med valgt heading nivå',
  subtitleAs: 'h2',
};
WithSubtitleAs.argTypes = {
  subtitleAs: { table: { disable: false } },
};
WithSubtitleAs.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading.tagName).toBe('H2');
};

// Når Panel har en undertittel som er skjult, så vises undertittel fortsatt for en skjermleser
export const WithHideSubtitle = Template.bind({});
WithHideSubtitle.storyName = 'With HideSubtitle (A8)';
WithHideSubtitle.args = {
  ...defaultArgs,
  subtitle: 'Det er en undertittel',
  hideSubtitle: true,
};
WithHideSubtitle.argTypes = {
  hideSubtitle: { table: { disable: false } },
};
WithHideSubtitle.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading');
  await expect(heading).toBeInTheDocument();
};

const TemplateWithGraphics: ComponentStory<typeof Panel> = (args) => (
  <div data-test-block>
    <Panel {...args} variant={'outline'}>
      <Paragraph>{loremIpsum}</Paragraph>
    </Panel>
    <Panel {...args} variant={'filled'}>
      <Paragraph>{loremIpsum}</Paragraph>
    </Panel>
  </div>
);

// Når Panel har en illustrasjon, så vises illustrasjone med riktig stilset og som pynt (dvs alt='')
export const WithImage = TemplateWithGraphics.bind({});
WithImage.storyName = 'With Image (A9 delvis)';
WithImage.args = {
  ...defaultArgs,
  imageSource: illustrationSource,
};
WithImage.argTypes = {
  imageSource: { table: { disable: false } },
};
WithImage.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const images = canvas.getAllByRole('img', { hidden: true });
  images.forEach((img) => {
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', '');
  });
};

// Når Panel har en illustrasjon i mobilvisning, så blir illustrasjon plassert riktig
export const WithImageMobile = TemplateWithGraphics.bind({});
WithImageMobile.storyName = 'With Image On Small Screen (A9 delvis)';
WithImageMobile.args = {
  ...defaultArgs,
  imageSource: illustrationSource,
};
WithImageMobile.argTypes = {
  imageSource: { table: { disable: false } },
};
WithImageMobile.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Panel har en ikon, så vises ikonet med riktig stilset
export const WithIcon = TemplateWithGraphics.bind({});
WithIcon.storyName = 'With Icon (A11 delvis)';
WithIcon.args = {
  ...defaultArgs,
  renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
};
WithIcon.argTypes = {
  renderIcon: { table: { disable: false } },
};
WithIcon.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icons = canvas.getAllByRole('img', { hidden: true });
  icons.forEach((icon) => {
    expect(icon).toBeInTheDocument();
  });
};

// Når Panel har en ikon i mobilvisning, så blir ikonet plassert riktig
export const WithIconMobile = TemplateWithGraphics.bind({});
WithIconMobile.storyName = 'With Icon On Small Screen (A12 delvis)';
WithIconMobile.args = {
  ...defaultArgs,
  renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
};
WithIconMobile.argTypes = {
  renderIcon: { table: { disable: false } },
};
WithIconMobile.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Panel har skjult ikon for mobilvisning, så vises det ikke noe ikon når det er mobilvisning
export const WithHideGraphicMobileAndIcon = TemplateWithGraphics.bind({});
WithHideGraphicMobileAndIcon.storyName =
  'With HideGraphicMobile And Icon On Small Screen (A12 delvis, A9 delvis)';
WithHideGraphicMobileAndIcon.args = {
  ...defaultArgs,
  hideGraphicMobile: true,
  renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
};
WithHideGraphicMobileAndIcon.argTypes = {
  hideGraphicMobile: { table: { disable: false } },
};
WithHideGraphicMobileAndIcon.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Panel har skjult image for mobilvisning, så vises det ikke noe image når det er mobilvisning
export const WithHideGraphicMobileAndImage = TemplateWithGraphics.bind({});
WithHideGraphicMobileAndImage.storyName =
  'With HideGraphicMobile And Image On Small Screen (A12 delvis, A9 delvis)';
WithHideGraphicMobileAndImage.args = {
  ...defaultArgs,
  hideGraphicMobile: true,
  imageSource: illustrationSource,
};
WithHideGraphicMobileAndImage.argTypes = {
  hideGraphicMobile: { table: { disable: false } },
};
WithHideGraphicMobileAndImage.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når Panel har skjult ikon for mobilvisning, så vises det ikn når det er desktopvisning
export const WithHideGraphicMobileAndIconDesktop = TemplateWithGraphics.bind(
  {}
);
WithHideGraphicMobileAndIconDesktop.storyName =
  'With HideGraphicMobile And Icon On Big Screen (A12 delvis, A9 delvis)';
WithHideGraphicMobileAndIconDesktop.args = {
  ...defaultArgs,
  hideGraphicMobile: true,
  renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
};
WithHideGraphicMobileAndIconDesktop.argTypes = {
  hideGraphicMobile: { table: { disable: false } },
};

// Når Panel har skjult image for mobilvisning, så vises det ikke noe image når det er mobilvisning
export const WithHideGraphicMobileAndImageDesktop = TemplateWithGraphics.bind(
  {}
);
WithHideGraphicMobileAndImageDesktop.storyName =
  'With HideGraphicMobile And Image On Big Screen (A12 delvis, A9 delvis)';
WithHideGraphicMobileAndImageDesktop.args = {
  ...defaultArgs,
  hideGraphicMobile: true,
  imageSource: illustrationSource,
};
WithHideGraphicMobileAndImageDesktop.argTypes = {
  hideGraphicMobile: { table: { disable: false } },
};

const TemplateWithAllColors: ComponentStory<typeof Panel> = (args) => (
  <div data-test-block>
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
  </div>
);

// Når Panel har color så vises riktig stil og farge for varianten
export const WithColorAndVariant = TemplateWithAllColors.bind({});
WithColorAndVariant.storyName = 'With Color And Variant (A1 delvis)';
WithColorAndVariant.args = {
  ...defaultArgs,
};
WithColorAndVariant.argTypes = {
  color: {
    table: { disable: false },
    control: { type: null },
  },
};

const TemplateWithAllSpacings: ComponentStory<typeof Panel> = (args) => (
  <div data-test-block>
    {panelSpacingArr.map((spacing, index) => {
      return (
        <Panel key={`panel_${index}`} {...args} spacing={spacing}>
          {`spacing: ${spacing}`}
        </Panel>
      );
    })}
  </div>
);
// Når Panel har spacing, så får den riktig marg under seg
export const WithSpacing = TemplateWithAllSpacings.bind({});
WithSpacing.storyName = 'With Spacing (A4)';
WithSpacing.args = {
  ...defaultArgs,
};
WithSpacing.argTypes = {
  spacing: {
    table: { disable: false },
    control: { type: null },
  },
};

const TemplateWithAllPaddings: ComponentStory<typeof Panel> = (args) => (
  <div data-test-block>
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
  </div>
);

// Når Panel har padding, så får den riktig padding
export const WithPadding = TemplateWithAllPaddings.bind({});
WithPadding.storyName = 'With Padding (A10)';
WithPadding.args = {
  ...defaultArgs,
};
WithPadding.argTypes = {
  padding: {
    table: { disable: false },
    control: { type: null },
  },
};
WithPadding.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

const TemplateTwoPanelWithTextAndOneWithIcon: ComponentStory<typeof Panel> = (
  args
) => (
  <div data-test-block>
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
  </div>
);

// Når to panel med tekst og et med ikon, så skal tekstene være aligned vertikalt i forhold til hverandre
export const TextAlginedVertical = TemplateTwoPanelWithTextAndOneWithIcon.bind(
  {}
);
TextAlginedVertical.storyName = 'Text Aligned Vertical (A13)';
TextAlginedVertical.args = {
  ...defaultArgs,
  renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />,
};
TextAlginedVertical.argTypes = {
  renderIcon: {
    table: { disable: false },
  },
};
