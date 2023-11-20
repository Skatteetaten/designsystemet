import { LinkGroup } from '@skatteetaten/ds-buttons';
import {
  List,
  listAsArr,
  ListProps,
  Paragraph,
} from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: List,
  title: 'Tester/List/List',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
    },
    hasSpacing: { table: { disable: true } },
    // Tags
    as: {
      table: { disable: true },
      options: [...listAsArr],
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof List>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ListProps = {
  children: [
    <List.Element key={'listElement_1'}>
      {'Kjenner du behovet til brukeren?'}
    </List.Element>,
    <List.Element key={'listElement_2'}>
      {'Er du sikker på at du kjenner behovet til brukeren?'}
    </List.Element>,
    <List.Element key={'listElement_3'}>{'Snakk med andre.'}</List.Element>,
  ],
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLUListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');
    await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const list = canvas.getByRole('list');
    await expect(list).toHaveAttribute('id', 'htmlid');
    await expect(list).toHaveClass('dummyClassname');
    await expect(list).toHaveAttribute('lang', 'nb');
    await expect(list).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Bullet (A1, B1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: {
      table: { disable: false },
      control: { type: null },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(list.tagName).toBe('UL');
  },
} satisfies Story;

export const VariantNumber = {
  name: 'Variant Number(A1, B1)',
  args: {
    ...defaultArgs,
    as: 'ol',
  },
  argTypes: {
    as: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(list.tagName).toBe('OL');
  },
} satisfies Story;

export const WithLongTextAndBreaking = {
  name: 'With Long Text And Breaking (A1)',
  args: {
    ...defaultArgs,
    children: [
      <List.Element key={'listElement_1'}>
        {'Denne listItem har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med ' +
          'tekst som alltid er venstrejustert, brekke over flere linjer og får et hengende innrykk.'}
      </List.Element>,
      <List.Element key={'listElement_2'}>
        {
          'DennelistItemharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertbrekkeoverflerelinjerogfårethengendeinntrykk.'
        }
      </List.Element>,
    ],
  },
  argTypes: {
    children: {
      table: { disable: false },
      control: { type: null },
    },
  },
} satisfies Story;

export const WithMarkup = {
  name: 'With Markup (A2, B2)',
  args: {
    ...defaultArgs,
    children: [
      <List.Element key={'listElement_1'}>
        {'Kjenner du behovet til '}
        <strong>{'brukeren?'}</strong>
      </List.Element>,
      <List.Element key={'listElement_2'}>
        {'Behovet til brukeren er veldig viktig. '}
        <a href={'#storybook-root'}>
          {'Er du sikker på at du kjenner behovet til brukeren?'}
        </a>
      </List.Element>,
      <List.Element key={'listElement_3'}>
        {'Snakk med andre om '}
        <em>{'italic, '}</em>
        <mark>{'mark og '}</mark>
        <code>{'code blokk'}</code>
        {' bare på gøy'}
      </List.Element>,
    ],
  },
  argTypes: {
    children: {
      table: { disable: false },
      control: { type: null },
    },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > ul > li a`,
      focus: `${wrapper} > ul > li a`,
    },
  },
} satisfies Story;

const TemplateWithTwoParagraph: StoryFn<typeof List> = (args) => (
  <>
    <Paragraph hasSpacing>
      {'Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. ' +
        'Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang.'}
    </Paragraph>
    <List {...args} />
    <Paragraph>
      {'Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. ' +
        'Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang.'}
    </Paragraph>
  </>
);

export const WithSpacing = {
  render: TemplateWithTwoParagraph,
  name: 'With Spacing (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: { table: { disable: false } },
  },
} satisfies Story;

// TODO Fjerne andre elementer når testprosjektet (FRONT-1008) er på plass
const TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents: StoryFn<
  typeof List
> = (args) => (
  <>
    <Paragraph>
      {
        'Her kan du se hvordan de forskjellige variantene til en list ser ut sammen med andre elementer med veksling av luft under listene.'
      }
    </Paragraph>
    <List {...args}>
      <List.Element key={'listElement_1'}>
        {'Kjenner du behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_2'}>
        {'Er du sikker på at du kjenner behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_3'}>{'Snakk med andre.'}</List.Element>
      <List.Element key={'listElement_4'}>{'Kjenner du behovet?'}</List.Element>
    </List>
    <Paragraph>
      {'Den første listen kan veksle mellom variantene en liste har.'}
    </Paragraph>
    <List {...args} as={'ol'}>
      <List.Element key={'listElement_1'}>
        {'Kjenner du behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_2'}>
        {'Er du sikker på at du kjenner behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_3'}>{'Snakk med andre'}</List.Element>
      <List.Element key={'listElement_4'}>{'Kjenner du behovet?'}</List.Element>
      <List.Element key={'listElement_5'}>
        {'Er du sikker på at du kjenner behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_6'}>
        {'Snakk med andre når som helst'}
      </List.Element>
      <List.Element key={'listElement_7'}>{'Kjenner du behovet?'}</List.Element>
      <List.Element key={'listElement_8'}>
        {'Er du sikker på at du kjenner behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_9'}>
        {'Snakk med andre ofte'}
      </List.Element>
      <List.Element key={'listElement_10'}>
        {'Snakk med andre aldri'}
      </List.Element>
    </List>
    <Paragraph>
      {
        'Videre så er en liste med lenker også tatt med for å se hvordan det hele ser ut sammen.'
      }
    </Paragraph>
    <LinkGroup>
      <LinkGroup.Link key={'linkGroupLink_1'} href={'#storybook-root'}>
        {'Er du pendler?'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#storybook-root'}>
        {'Pendler du mye?'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_3'} href={'#storybook-root'}>
        {'Pendler du dagen lang?'}
      </LinkGroup.Link>
    </LinkGroup>
  </>
);

export const WithBothVariantsAndAtLeast10NumberItems = {
  render: TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents,
  name: 'With Both Variants And At Least 10 Number Items',
  args: {
    ...defaultArgs,
  },
} satisfies Story;
