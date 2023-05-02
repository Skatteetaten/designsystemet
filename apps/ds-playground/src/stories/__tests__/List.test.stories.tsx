import { LinkGroup } from '@skatteetaten/ds-buttons';
import {
  List,
  listAsArr,
  ListProps,
  Paragraph,
} from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

export default {
  component: List,
  title: 'Tester/List',
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
} as ComponentMeta<typeof List>;

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
const Template: ComponentStory<typeof List> = (args) => (
  <div data-test-block>
    <List {...args} />
  </div>
);

// Når List har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLUListElement | null): void => {
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
  const list = canvas.getByRole('list');
  await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når List har en id, custom className, lang og dataTestid, så får elementet attributene id, class, lang og data-testid satt og custom stil vises
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlid',
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
  const list = canvas.getByRole('list');
  await expect(list).toHaveAttribute('id', 'htmlid');
  await expect(list).toHaveClass('dummyClassname');
  await expect(list).toHaveAttribute('lang', 'nb');
  await expect(list).toHaveAttribute('data-testid', '123ID');
};

// Når List instansieres, får den riktige default-verdier
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Variant Bullet (A1, B1, B2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const list = canvas.getByRole('list');
  await expect(list).toBeInTheDocument();
  await expect(list.tagName).toBe('UL');
};

// Når List har en as, får elementet riktig tag og ser riktig ut
export const VariantNumber = Template.bind({});
VariantNumber.storyName = 'Variant Number(A1, B1)';
VariantNumber.args = {
  ...defaultArgs,
  as: 'ol',
};
VariantNumber.argTypes = {
  as: {
    table: { disable: false },
  },
};
VariantNumber.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const list = canvas.getByRole('list');
  await expect(list).toBeInTheDocument();
  await expect(list.tagName).toBe('OL');
};

// Når ListItem har en veldig lang tekst, så skal teksten ha hengende innrykk og brekke over flere linjer
export const WithLongTextAndBreaking = Template.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking (A1)';
WithLongTextAndBreaking.args = {
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
};
WithLongTextAndBreaking.argTypes = {
  children: {
    table: { disable: false },
    control: { type: null },
  },
};

// Når List instansieres med markup, får markup riktig styling
export const WithMarkup = Template.bind({});
WithMarkup.storyName = 'With Markup (A2, B2)';
WithMarkup.args = {
  ...defaultArgs,
  children: [
    <List.Element key={'listElement_1'}>
      {'Kjenner du behovet til '}
      <strong>{'brukeren?'}</strong>
    </List.Element>,
    <List.Element key={'listElement_2'}>
      {'Behovet til brukeren er veldig viktig. '}
      <a href={'#root'}>
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
};
WithMarkup.argTypes = {
  children: {
    table: { disable: false },
    control: { type: null },
  },
};
WithMarkup.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > ul > li a`,
    focus: `${wrapper} > ul > li a`,
  },
};

const TemplateWithTwoParagraph: ComponentStory<typeof List> = (args) => (
  <div data-test-block>
    <Paragraph hasSpacing>
      {'Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. ' +
        'Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang.'}
    </Paragraph>
    <List {...args} />
    <Paragraph>
      {'Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. ' +
        'Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang.'}
    </Paragraph>
  </div>
);

// Når List har spacing, så får elementet en margin under listen
export const WithSpacing = TemplateWithTwoParagraph.bind({});
WithSpacing.storyName = 'With Spacing (A3)';
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.argTypes = {
  hasSpacing: { table: { disable: false } },
};

// TODO Fjerne andre elementer når testprosjektet (FRONT-1008) er på plass
const TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents: ComponentStory<
  typeof List
> = (args) => (
  <div data-test-block>
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
      <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'}>
        {'Er du pendler?'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#root'}>
        {'Pendler du mye?'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_3'} href={'#root'}>
        {'Pendler du dagen lang?'}
      </LinkGroup.Link>
    </LinkGroup>
  </div>
);

// Når List har minst ti number items (fordi ønsker to siffer som listepunkt), så blir listeelementene plassert korrekt i forhold til inntrykk og teksten
export const WithBothVariantsAndAtLeast10NumberItems =
  TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents.bind({});
WithBothVariantsAndAtLeast10NumberItems.storyName =
  'With Both Variants And At Least 10 Number Items';
WithBothVariantsAndAtLeast10NumberItems.args = {
  ...defaultArgs,
};
