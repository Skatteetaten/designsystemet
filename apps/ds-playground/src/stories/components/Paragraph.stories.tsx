import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { AttachFileSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Paragraph,
  title: 'Komponenter/Paragraph',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    variant: { table: { category: category.props } },
  },
  args: {
    children: loremIpsum,
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const ParagraphWithLink: Story = {
  render: (_args): JSX.Element => {
    return (
      <Paragraph>
        {'Dette er et eksempel på et avsnitt med en '}
        <a
          href={'https://www.skatteetaten.no/stilogtone/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'lenke til stil og tone'}
        </a>
        {' og som får  designsystemets typografi.'}
      </Paragraph>
    );
  },
} satisfies Story;
ParagraphWithLink.storyName = 'Paragraf med lenke';
ParagraphWithLink.parameters = exampleParameters;

export const ParagraphWithInlineStyling: Story = {
  render: (_args): JSX.Element => {
    return (
      <Paragraph>
        {'Noen ganger ønsker vi å fremheve tekst med '}
        <strong>{'tydelig utheving'}</strong>
        {', mens andre ganger holder det med '}
        <em>{'lett betoning'}</em>
        {'. Begge deler støttes automatisk i Paragraph.'}
      </Paragraph>
    );
  },
} satisfies Story;
ParagraphWithInlineStyling.storyName = 'Paragraf med utheving';
ParagraphWithInlineStyling.parameters = exampleParameters;

export const ParagraphWithIcon: Story = {
  render: (_args): JSX.Element => {
    return (
      <Paragraph>
        <Icon svgPath={AttachFileSVGpath} />
        {' Siden inneholder et filvedlegg.'}
      </Paragraph>
    );
  },
} satisfies Story;
ParagraphWithIcon.storyName = 'Paragraf med ikon';
ParagraphWithIcon.parameters = exampleParameters;
