import { useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal, modalVariantArr } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import illustration from '../../assets/wait-alert-illustration.png';

const meta = {
  component: Modal,
  title: 'Tester/Modal',
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
      control: 'text',
    },
    hideAutoClose: { table: { disable: true } },
    hideCloseButton: { table: { disable: true } },
    hideOutline: { table: { disable: true } },
    hideTitle: { table: { disable: true } },
    padding: { table: { disable: true } },
    title: { table: { disable: true } },
    variant: {
      table: {
        disable: true,
      },
      options: [...modalVariantArr],
      control: 'inline-radio',
    },
    // HTML
    open: { table: { disable: true } },
    // Events
    onClose: { table: { disable: true } },
  },
} satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultTitle = 'Vil du erstatte nye opplysninger fra fil?';

const defaultArgs = {
  children: 'Modal innhold',
  title: defaultTitle,
  open: true,
};

const TemplateModal: StoryFn<typeof Modal> = (args) => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Paragraph hasSpacing>{loremIpsum}</Paragraph>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Åpne modal'}
      </Button>
      <Modal {...args} ref={ref}>
        <Paragraph hasSpacing>
          {
            'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
          }
        </Paragraph>
        <div className={'flex'}>
          <Button>{'Erstatt opplysninger'}</Button>
          <Button
            variant={'tertiary'}
            onClick={(): void => ref.current?.close()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDialogElement | null): void => {
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
    await expect(canvas.getByRole('dialog')).toHaveAttribute(
      'id',
      'dummyIdForwardedFromRef'
    );
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
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
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByRole('dialog');
    await expect(modal).toHaveAttribute('id', 'htmlId');
    await expect(modal).toHaveClass('dummyClassname');
    await expect(modal).toHaveAttribute('lang', 'nb');
    await expect(modal).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
    title: { table: { disable: false } },
    open: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByLabelText(defaultTitle);
    await expect(modal).toBeInTheDocument();
    await expect(modal).toHaveAttribute('open');
    const closeButton = canvas.getAllByRole('button')[0];
    await expect(closeButton).toBeInTheDocument();
    await expect(canvas.getByTitle('Lukk')).toBeInTheDocument();
    await expect(modal.tagName).toBe('DIALOG');
    const heading = canvas.getByText(defaultTitle);
    await expect(heading.tagName).toBe('H1');
  },
} satisfies Story;

export const VariantImportant = {
  name: 'Variant Important (A1)',
  args: {
    ...defaultArgs,
    variant: 'important',
    open: true,
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithImage = {
  name: 'With Image (A1)',
  args: {
    ...defaultArgs,
    imageSource: illustration,
    imageSourceAltText: 'Image alt tekst',
  },
  argTypes: {
    imageSource: { table: { disable: false } },
    imageSourceAltText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByRole('dialog');
    // eslint-disable-next-line testing-library/no-node-access
    const image = modal.querySelector('img');
    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute('alt', 'Image alt tekst');
  },
} satisfies Story;

export const WithTransparentBackground = {
  render: TemplateModal,
  name: 'With Transparent Background (A4, A10)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByRole('button')[0];
    await userEvent.click(button);
  },
} satisfies Story;

export const WithoutCloseButton = {
  name: 'Without CloseButton (A7)',
  args: {
    ...defaultArgs,
    hideCloseButton: true,
  },
  argTypes: {
    hideCloseButton: { table: { disable: false } },
  },
} satisfies Story;

export const WithoutOutline = {
  name: 'Without Outline (A8)',
  args: {
    ...defaultArgs,
    hideOutline: true,
  },
  argTypes: {
    hideOutline: { table: { disable: false } },
  },
} satisfies Story;

export const WithPadding = {
  name: 'With Padding (A9)',
  args: {
    ...defaultArgs,
    padding: 'none',
  },
  argTypes: {
    padding: { table: { disable: false } },
  },
} satisfies Story;

export const WithVerticalScrolling = {
  name: 'With Vertical Scrolling (A12)',
  args: {
    ...defaultArgs,
    children: loremIpsum + loremIpsum + loremIpsum + loremIpsum + loremIpsum,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByRole('dialog');
    fireEvent.scroll(modal, { target: { scrollTop: 200 } });
  },
} satisfies Story;

export const ClickCloseButton = {
  render: TemplateModal,
  name: 'Click Close Button (A13)',
  args: {
    ...defaultArgs,
    onClose: (): void => {
      console.log('Click CloseButton: onClose har blitt kalt');
    },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByRole('dialog');
    const closeButton = canvas.getAllByRole('button')[1];
    await userEvent.click(closeButton);
    await waitFor(() => expect(modal).not.toHaveAttribute('open'));
  },
} satisfies Story;

export const WithAutoClose = {
  render: TemplateModal,
  name: 'With AutoClose (A14, A15)',
  args: {
    ...defaultArgs,
    onClose: (): void => {
      console.log('AutoClose: onClose har blitt kalt');
    },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByRole('dialog');
    await userEvent.click(modal);
    await waitFor(() => expect(modal).not.toHaveAttribute('open'));
  },
} satisfies Story;

export const WithHideAutoClose = {
  render: TemplateModal,
  name: 'With HideAutoClose (A14)',
  args: {
    ...defaultArgs,
    hideAutoClose: true,
  },
  argTypes: {
    hideAutoClose: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const modal = canvas.getByRole('dialog');
    await userEvent.click(modal);
    await waitFor(() => expect(modal).toHaveAttribute('open'));
  },
} satisfies Story;

export const WithHideTitle = {
  name: 'With HideTitle (B4)',
  args: {
    ...defaultArgs,
    hideTitle: true,
  },
  argTypes: {
    hideTitle: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', { level: 1 });
    await expect(heading).toBeInTheDocument();
  },
} satisfies Story;
