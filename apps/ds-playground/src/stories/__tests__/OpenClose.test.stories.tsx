import { useState } from 'react';

import { OpenClose, OpenCloseProps } from '@skatteetaten/ds-collections';
import {
  densityArr,
  headingAsArr,
  positionArr,
} from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { fireEvent, within, waitFor } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

const elementId = 'htmlId';
const defaultTitle = 'Er jeg pendler?';
const defaultContent =
  'En pendler er en lønnstaker som overnatter borte på grunn av jobb. Hvis du er pendler kan du ha krav på fradrag for ' +
  'dine merkostnader til kost, losji og reiser til og fra pendlerboligen.';
const unchangedTitle = 'OpenClose har ikke blitt åpnet';
const changedTitle = 'OpenClose har blitt åpnet';

export default {
  component: OpenClose,
  title: 'Tester/OpenClose',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...densityArr],
      control: 'radio',
    },
    iconPosition: {
      table: { disable: true },
      options: [...positionArr],
      control: 'radio',
    },
    isExpanded: { table: { disable: true } },
    isOnClickOnlyFiredOnOpen: { table: { disable: true } },
    titleAs: { table: { disable: true } },
    title: { table: { disable: true } },
    showUnderline: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} as ComponentMeta<typeof OpenClose>;

const Template: ComponentStory<typeof OpenClose> = (args) => (
  <div data-test-block>
    <OpenClose {...args}>
      {/* eslint-disable-next-line testing-library/no-node-access */}
      {args.children}
    </OpenClose>
  </div>
);

const TemplateWithOnClick: ComponentStory<typeof OpenClose> = (args) => {
  return (
    <div data-test-block>
      <OpenClose
        {...args}
        onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
          args.onClick?.(e);
        }}
      >
        {/* eslint-disable-next-line testing-library/no-node-access */}
        {args.children}
      </OpenClose>
    </div>
  );
};

const TemplateWithChangingTitle: ComponentStory<typeof OpenClose> = (args) => {
  const [title, setTitle] = useState(unchangedTitle);
  return (
    <div data-test-block>
      <OpenClose
        {...args}
        title={title}
        onClick={(_e: React.MouseEvent<HTMLButtonElement>): void => {
          setTitle(changedTitle);
        }}
      >
        {/* eslint-disable-next-line testing-library/no-node-access */}
        {args.children}
      </OpenClose>
    </div>
  );
};

const TemplateWithAllHeadings: ComponentStory<typeof OpenClose> = (args) => (
  <div data-test-block>
    {headingAsArr.map((headingLevel, item) => {
      return (
        <OpenClose
          key={`level_${item}`}
          {...args}
          titleAs={headingLevel}
          title={`Heading ${headingLevel}`}
        >
          {/* eslint-disable-next-line testing-library/no-node-access */}
          {args.children}
        </OpenClose>
      );
    })}
  </div>
);

const defaultArgs: OpenCloseProps = {
  title: defaultTitle,
  children: defaultContent,
};

// Når OpenClose har en ref, så får dom button-elementet ref forwarded
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
  imageSnapshot: { disable: true },
};

WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('button')).toHaveAttribute(
    'id',
    'dummyIdForwardedFromRef'
  );
};

// Når OpenClose har en id, så har button-element id
// Når OpenClose har en custom CSS, så vises custom stil
// Når OpenClose har en lang, så har button-element lang
// Når OpenClose har dataTestid, så har button-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: elementId,
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
  const button = canvas.getByRole('button');
  await expect(button).toHaveClass('dummyClassname');
  await expect(button).toHaveAttribute('id', elementId);
  await expect(button).toHaveAttribute('lang', 'nb');
  await expect(button).toHaveAttribute('data-testid', '123ID');
};

// Når OpenClose initieres, har den default ikon til venstre og er lukket
// Når headingnivå ikke sendes med, rendres det som en div
// Ikon er der, men skjules med aria-hidden=true
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A2, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  title: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    focus: `${wrapper} button`,
    hover: `${wrapper} button`,
    click: `${wrapper} button`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await expect(button).toBeInTheDocument();
  await expect(button).toHaveAttribute('type', 'button');
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  const title = canvas.getByText(defaultTitle);
  await expect(title).toBeInTheDocument();
  const content = canvas.queryByText(defaultContent);
  await expect(content).not.toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  const svg = button.querySelector('svg');
  await expect(svg).toBeInTheDocument();
  await expect(svg).toHaveAttribute('aria-hidden', 'true');
};

// Når OpenClose har høyrestilt ikon, vises riktig stilsett
export const WithIconRight = Template.bind({});
WithIconRight.storyName = 'With Icon Right (A2)';
WithIconRight.args = {
  ...defaultArgs,
  iconPosition: 'right',
};
WithIconRight.argTypes = {
  iconPosition: { table: { disable: false } },
};

const TemplateWithContext: ComponentStory<typeof OpenClose> = (args) => (
  <div data-test-block>
    <div>
      {'I Skatteetaten definerer vi om du er pendler ut fra at en rekke vilkår må være oppfylt. For å få fradragene må du ' +
        'blant annet være lønnstaker og overnatte borte på grunn av jobb. Pendlerfradrag gis kun for reiseutgifter som du selv (pendleren) ' +
        'har for å besøke hjemmet ditt, ikke for familie som kommer på besøk til din pendlerbolig.'}
    </div>
    <OpenClose {...args}>
      {/* eslint-disable-next-line testing-library/no-node-access */}
      {args.children}
    </OpenClose>
  </div>
);

// Når OpenClose vises i kontekst, vises riktig stilsett
export const InContext = TemplateWithContext.bind({});
InContext.storyName = 'In Context (A1 delvis)';
InContext.args = {
  ...defaultArgs,
};
InContext.parameters = {
  imageSnapshot: {
    disable: true,
  },
};

// Når OpenClose har underline, vises riktig stilsett
export const WithUnderline = Template.bind({});
WithUnderline.storyName = 'With Underline (A3)';
WithUnderline.args = {
  ...defaultArgs,
  showUnderline: true,
};
WithUnderline.argTypes = {
  showUnderline: { table: { disable: false } },
};

// Når OpenClose har høyrestilt ikon og underline, vises riktig stilsett
export const WithIconRightAndUnderline = Template.bind({});
WithIconRightAndUnderline.storyName = 'With Icon Right And Underline (A2, A3)';
WithIconRightAndUnderline.args = {
  ...defaultArgs,
  iconPosition: 'right',
  showUnderline: true,
};
WithIconRightAndUnderline.argTypes = {
  iconPosition: { table: { disable: false } },
  showUnderline: { table: { disable: false } },
};

// Når OpenClose er kompakt, vises riktig stilsett
export const Compact = Template.bind({});
Compact.storyName = 'Compact (A1 delvis)';
Compact.args = {
  ...defaultArgs,
  variant: 'compact',
};
Compact.argTypes = {
  variant: { table: { disable: false } },
};

// Når OpenClose er kompakt med høyrestilt ikon, vises riktig stilsett
export const CompactWithIconRight = Template.bind({});
CompactWithIconRight.storyName = 'Compact With Icon Right (A1 delvis, A2)';
CompactWithIconRight.args = {
  ...defaultArgs,
  variant: 'compact',
  iconPosition: 'right',
};
CompactWithIconRight.argTypes = {
  variant: { table: { disable: false } },
  iconPosition: { table: { disable: false } },
};

// Når OpenClose er kompakt og har underline, vises riktig stilsett
export const CompactWithUnderline = Template.bind({});
CompactWithUnderline.storyName = 'Compact With Underline (A1 delvis, A3)';
CompactWithUnderline.args = {
  ...defaultArgs,
  variant: 'compact',
  showUnderline: true,
};
CompactWithUnderline.argTypes = {
  variant: { table: { disable: false } },
  showUnderline: { table: { disable: false } },
};

// Når OpenClose er compact, har høyrestilt ikon og underline, vises riktig stilsett
export const CompactWithIconRightAndUnderline = Template.bind({});
CompactWithIconRightAndUnderline.storyName =
  'Compact With Icon Right And Underline (A1 delvis, A2, A3)';
CompactWithIconRightAndUnderline.args = {
  ...defaultArgs,
  variant: 'compact',
  iconPosition: 'right',
  showUnderline: true,
};
CompactWithIconRightAndUnderline.argTypes = {
  variant: { table: { disable: false } },
  iconPosition: { table: { disable: false } },
  showUnderline: { table: { disable: false } },
};

// Når OpenClose har isExpanded satt til true, vises innhold by default
export const IsExpanded = Template.bind({});
IsExpanded.storyName = 'With IsExpanded (A4 delvis)';
IsExpanded.args = {
  ...defaultArgs,
  isExpanded: true,
};
IsExpanded.argTypes = {
  isExpanded: { table: { disable: false } },
};
IsExpanded.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const content = await canvas.findByText(defaultContent);
  await expect(content).toBeInTheDocument();
  const button = canvas.getByRole('button');
  await expect(button).toHaveAttribute('aria-expanded', 'true');
};

// Når OpenClose har isExpanded satt til true og variant er 'compact', vises innrykk med riktig margin
export const CompactAndIsExpanded = Template.bind({});
CompactAndIsExpanded.storyName = 'With Compact And IsExpanded (A4 delvis)';
CompactAndIsExpanded.args = {
  ...defaultArgs,
  isExpanded: true,
  variant: 'compact',
};
CompactAndIsExpanded.argTypes = {
  isExpanded: { table: { disable: false } },
  variant: { table: { disable: false } },
};

// Når OpenClose har isExpanded satt til true og iconPosition er 'right', vises innhold uten innrykk
export const IconRightContent = Template.bind({});
IconRightContent.storyName = 'With IsExpanded And Icon Right (A1 delvis)';
IconRightContent.args = {
  ...defaultArgs,
  isExpanded: true,
  iconPosition: 'right',
};
IconRightContent.argTypes = {
  isExpanded: { table: { disable: false } },
  iconPosition: { table: { disable: false } },
};

// Når OpenClose trykkes på, vises innhold og onClick kalles
export const WithOnClick = TemplateWithOnClick.bind({});
WithOnClick.storyName = 'With OnClick (A4 delvis, B1 delvis)';
WithOnClick.args = {
  ...defaultArgs,
};
WithOnClick.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithOnClick.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await fireEvent.click(button);
  const content = canvas.getByText(defaultContent);
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await expect(content).toBeInTheDocument();
  await fireEvent.click(button);
  await expect(content).not.toBeInTheDocument();
  await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
};

// Når OpenClose trykkes på to ganger, og "isOnClickOnlyFiredOnOpen" er true, kalles onClick bare én gang
export const WithIsOnClickOnlyFiredOnOpen = TemplateWithOnClick.bind({});
WithIsOnClickOnlyFiredOnOpen.storyName =
  'With IsOnClickOnlyFiredOnOpen (A4 delvis)';
WithIsOnClickOnlyFiredOnOpen.args = {
  ...defaultArgs,
  isOnClickOnlyFiredOnOpen: true,
};
WithIsOnClickOnlyFiredOnOpen.argTypes = {
  isOnClickOnlyFiredOnOpen: { table: { disable: false } },
};
WithIsOnClickOnlyFiredOnOpen.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithIsOnClickOnlyFiredOnOpen.play = async ({
  args,
  canvasElement,
}): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await fireEvent.click(button);
  await fireEvent.click(button);
  await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));
};

export const WithChangingTitle = TemplateWithChangingTitle.bind({});
WithChangingTitle.storyName = 'With Changing Title (A4 delvis)';
WithChangingTitle.args = {
  ...defaultArgs,
};
WithChangingTitle.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithChangingTitle.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  const oldTitle = canvas.getByText(unchangedTitle);
  await expect(oldTitle).toBeInTheDocument();
  await fireEvent.click(button);
  const newTitle = canvas.getByText(changedTitle);
  await expect(newTitle).toBeInTheDocument();
};

// Når OpenClose har titleAs satt til et headingnivå, rendres knappen som en riktig heading
export const WithTitleAs = TemplateWithAllHeadings.bind({});
WithTitleAs.storyName = 'With TitleAs (B2)';
WithTitleAs.args = {
  ...defaultArgs,
};
WithTitleAs.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithTitleAs.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const headings = canvas.getAllByRole('heading');
  for (const [index, heading] of headings.entries()) {
    await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());
  }
};

//Når OpenClose har lang tekst, brekker den riktig over flere linjer
export const WithLongTitle = Template.bind({});
WithLongTitle.storyName = 'With Long Title (A1 delvis)';
WithLongTitle.args = {
  ...defaultArgs,
  title:
    'Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.' +
    'Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut.',
};
WithLongTitle.argTypes = {
  title: { table: { disable: false } },
};
WithLongTitle.parameters = {
  imageSnapshot: {
    disable: true,
  },
};
WithLongTitle.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};
