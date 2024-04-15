import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Popover, popoverColorArr } from '@skatteetaten/ds-overlays';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, within } from '@storybook/test';

import { loremIpsum } from './testUtils/storybook.testing.utils';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';
const Template: StoryFn<typeof Popover> = (args) => (
  <Popover {...args}>
    <Popover.Trigger />
    <Popover.Content>{defaultText}</Popover.Content>
  </Popover>
);

const meta = {
  component: Popover,
  title: 'Tester/Popover/Popover',
  argTypes: {
    // Baseprops
    // @ts-expect-error disable baseprops gir error fordi denne komponenten ikke støtter baseprops, men de skal disables alikevel
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    color: {
      options: [...popoverColorArr],
      control: 'radio',
      table: { disable: true },
    },
    disableAutoDismiss: { table: { disable: true } },
    disableAutoDismissOnMobile: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    position: { table: { disable: true } },
    shouldRestoreFocus: {
      table: { disable: true },
    },
    // Event
    onClose: { table: { disable: true } },
  },
  render: Template,
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults = {
  name: 'Defaults',
  args: {},
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const triggerButton = canvas.getByRole('button');
    await expect(triggerButton).toBeInTheDocument();
  },
} satisfies Story;

const TemplateAllColors: StoryFn<typeof Popover> = (args) => (
  <div className={'flex gapS centerContent'}>
    <Popover color={'forest'} position={'topEnd'} isOpen {...args}>
      <Popover.Trigger size={'extraSmall'} />
      <Popover.Content>{args.children}</Popover.Content>
    </Popover>
    <Popover color={'white'} position={'bottomEnd'} isOpen {...args}>
      <Popover.Trigger size={'small'} />
      <Popover.Content>{args.children}</Popover.Content>
    </Popover>
    <Popover color={'ochre'} position={'topStart'} isOpen {...args}>
      <Popover.Trigger size={'medium'} />
      <Popover.Content>{args.children}</Popover.Content>
    </Popover>
    <Popover color={'forest'} position={'bottomStart'} isOpen {...args}>
      <Popover.Trigger size={'large'} />
      <Popover.Content>{args.children}</Popover.Content>
    </Popover>
  </div>
);

export const AllColors = {
  render: TemplateAllColors,
  name: 'All Colors Floating Position (A1, A2, A3, A4)',
  argTypes: {
    position: { table: { disable: false } },
    color: { table: { disable: false } },
  },
  args: {
    children: loremIpsum,
  },
} satisfies Story;

export const WithOnClickTriggerAndCloseButton = {
  name: 'With OnClick Trigger Close Button (A9)',
  args: {},

  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    const closeButton = canvas.getByTitle(dsI18n.t('Shared:shared.Close'));
    await fireEvent.click(closeButton);
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await expect(args.onClose).toHaveBeenCalled();
  },
} satisfies Story;

export const WithAutoClose = {
  name: 'With AutoClose (A8)',
  args: {},
  argTypes: {
    disableAutoDismiss: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await userEvent.click(document.body);
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithAutoCloseDisabled = {
  name: 'With AutoClose Disabled (A8)',
  argTypes: {
    disableAutoDismiss: { table: { disable: false } },
  },
  args: {
    disableAutoDismiss: true,
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await userEvent.click(document.body);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
  },
} satisfies Story;
