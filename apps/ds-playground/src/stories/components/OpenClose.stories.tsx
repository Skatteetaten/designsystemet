import { Meta, StoryObj } from '@storybook/react-vite';

import { OpenClose } from '@skatteetaten/ds-collections';

import { category, htmlEventDescription } from '../../../.storybook/helpers';

const meta = {
  component: OpenClose,
  title: 'Komponenter/OpenClose',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    iconPosition: {
      control: 'inline-radio',
      table: { category: category.props },
    },
    isOnClickOnlyFiredOnOpen: { table: { category: category.props } },
    isExpanded: { table: { category: category.props } },
    isDefaultExpanded: { table: { category: category.props } },
    keepMounted: { table: { category: category.props } },
    showUnderline: { table: { category: category.props } },
    size: { control: 'inline-radio', table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: { control: 'inline-radio', table: { category: category.props } },
    // Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children:
      'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ',
    title: 'Hva er aksjesparekonto',
  },
} satisfies Meta<typeof OpenClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
