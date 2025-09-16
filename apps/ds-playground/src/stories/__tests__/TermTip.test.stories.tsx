import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, fn, userEvent, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Popover, TermTip } from '@skatteetaten/ds-overlays';

import { loremIpsum } from './testUtils/storybook.testing.utils';

const defaultText = 'En arkskrift er en skrift som er skrevet på et ark.';
const Template: StoryFn<typeof TermTip> = (args) => (
  <TermTip {...args}>
    <TermTip.Term>{'arkskrift'}</TermTip.Term>
    <TermTip.Content>{defaultText}</TermTip.Content>
  </TermTip>
);

const meta = {
  component: TermTip,
  title: 'Tester/TermTip/TermTip',
  argTypes: {
    // Baseprops
    // @ts-expect-error disable baseprops gir error fordi denne komponenten ikke støtter baseprops, men de skal disables alikevel
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
    },
    color: { table: { disable: true } },
    disableAutoDismiss: { table: { disable: true } },
    disableAutoDismissOnMobile: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    position: { table: { disable: true } },
    shouldRestoreFocus: { table: { disable: true } },
    // Event
    onClose: { table: { disable: true } },
  },
  render: Template,
  tags: ['test'],
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults = {
  name: 'Defaults',
  args: {},
  parameters: {
    imageSnapshot: {
      disableSnapshot: false,
      pseudoStates: ['hover', 'focus', 'active'],
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const term = canvas.getByText('arkskrift');
    await expect(term).toBeInTheDocument();
  },
} satisfies Story;
