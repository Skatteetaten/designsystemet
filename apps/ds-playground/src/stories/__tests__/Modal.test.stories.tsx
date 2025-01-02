import { useEffect, useRef, JSX, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, fireEvent, within, waitFor } from '@storybook/test';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import { webComponent } from '../../../.storybook/webcomponent-decorator';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';

const defaultTitle = 'Vil du erstatte nye opplysninger fra fil?';

const meta = {
  component: Modal,
  title: 'Tester/Modal',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    classNames: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: 'text',
    },
    dismissOnEsc: { table: { disable: true } },
    dismissOnOutsideClick: { table: { disable: true } },
    hideCloseButton: { table: { disable: true } },
    hideTitle: { table: { disable: true } },
    imageSource: {
      table: { disable: true },
      control: 'select',
      options: ['', farmerIllustration, waitIllustration],
    },
    imageSourceAltText: { table: { disable: true } },
    padding: { table: { disable: true } },
    shadowRootNode: { table: { disable: true } },
    title: { table: { disable: true } },
    variant: {
      table: {
        disable: true,
      },
    },
    // Events
    onClose: { table: { disable: true } },
  },
  args: {
    children: 'Modal innhold',
    title: defaultTitle,
  },
} satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

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
          <Button className={'marginRightM'}>{'Erstatt opplysninger'}</Button>
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

export const WithAttributes = {
  render: TemplateModal,
  name: 'With Attributes (FA2-5, B1)',
  args: {
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    await expect(modal).toHaveAttribute('id', 'htmlId');
    await expect(modal).toHaveClass('dummyClassname');
    await expect(modal).toHaveAttribute('lang', 'nb');
    await expect(modal).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  render: TemplateModal,
  name: 'Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)',
  args: {},
  argTypes: {
    children: { table: { disable: false } },
    title: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByLabelText(defaultTitle);
    await expect(modal).toBeInTheDocument();
    const closeButton = canvas.getAllByRole('button')[0];
    await expect(closeButton).toBeInTheDocument();
    await expect(
      canvas.getByTitle(dsI18n.t('ds_overlays:modal.CloseModal'))
    ).toBeInTheDocument();
    await expect(modal.tagName).toBe('DIALOG');
    const heading = canvas.getByText(defaultTitle);
    await expect(heading.tagName).toBe('H1');
  },
} satisfies Story;

export const VariantPlain = {
  render: TemplateModal,
  name: 'Variant Plain (A8)',
  args: {
    variant: 'plain',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
} satisfies Story;

export const VariantImportant = {
  render: TemplateModal,
  name: 'Variant Important (A1)',
  args: {
    variant: 'important',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
} satisfies Story;

export const WithImage = {
  render: TemplateModal,
  name: 'With Image (A1)',
  args: {
    imageSource: waitIllustration,
    imageSourceAltText: 'Image alt tekst',
  },
  argTypes: {
    imageSource: { table: { disable: false } },
    imageSourceAltText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');

    const image = modal.querySelector('img');
    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute('alt', 'Image alt tekst');
  },
} satisfies Story;

export const WithTransparentBackground = {
  render: TemplateModal,
  name: 'With Transparent Background (A4, A10)',
  args: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
} satisfies Story;

export const WithoutCloseButton = {
  render: TemplateModal,
  name: 'Without CloseButton (A7)',
  args: {
    hideCloseButton: true,
  },
  argTypes: {
    hideCloseButton: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
} satisfies Story;

export const WithPadding = {
  render: TemplateModal,
  name: 'With Padding (A9)',
  args: {
    padding: 'none',
  },
  argTypes: {
    padding: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
} satisfies Story;

const TemplateWithScroll: StoryFn<typeof Modal> = (args) => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Paragraph hasSpacing>{loremIpsum}</Paragraph>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Åpne modal'}
      </Button>
      <Modal {...args} ref={ref} />
    </>
  );
};

export const WithVerticalScrolling = {
  render: TemplateWithScroll,
  name: 'With Vertical Scrolling (A12)',
  args: {
    children: loremIpsum.repeat(5),
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    fireEvent.scroll(modal, { target: { scrollTop: 200 } });
  },
} satisfies Story;

export const ClickCloseButton = {
  render: TemplateModal,
  name: 'Click Close Button (A13)',
  args: {
    onClose: (): void => {
      console.log('Click CloseButton: onClose har blitt kalt');
    },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const closeButton = canvas.getByTitle(
      dsI18n.t('ds_overlays:modal.CloseModal')
    );
    await userEvent.click(closeButton);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithAutoClose = {
  render: TemplateModal,
  name: 'With AutoClose (A14, A15)',
  args: {
    onClose: (): void => {
      console.log('AutoClose: onClose har blitt kalt');
    },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    await userEvent.click(modal);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithAutoCloseDisabled = {
  render: TemplateModal,
  name: 'With AutoClose Disabled (A14)',
  args: {
    dismissOnOutsideClick: false,
  },
  argTypes: {
    dismissOnOutsideClick: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    await userEvent.click(modal);
    await expect(modal).toBeInTheDocument();
  },
} satisfies Story;

export const WithHideTitle = {
  render: TemplateModal,
  name: 'With HideTitle (B4)',
  args: {
    hideTitle: true,
  },
  argTypes: {
    hideTitle: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const heading = canvas.getByRole('heading', { level: 1 });
    await expect(heading).toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithShadowDom: StoryFn<typeof Modal> = (args) => {
  const element = document.querySelector('modal-customelement');
  const shadowRoot = element?.shadowRoot;
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Åpne modal'}
      </Button>
      <Modal ref={ref} {...args} shadowRootNode={shadowRoot ?? undefined}>
        <Paragraph hasSpacing>{loremIpsum}</Paragraph>
        <div className={'flex'}>
          <Button
            variant={'primary'}
            onClick={(): void => ref.current?.close()}
          >
            {'Lukk'}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const WithShadowDom = {
  render: TemplateWithShadowDom,
  name: 'With ShadowDom Click Outside',
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true,
    },
    a11y: { disable: true },
    customElementName: 'modal-customelement',
  },
  args: {
    dismissOnOutsideClick: true,
  },
  argTypes: {
    dismissOnOutsideClick: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();

    const customElement = canvasElement.querySelector(
      'modal-customelement'
    ) as HTMLElement;
    await expect(customElement).toBeInTheDocument();
  },
} satisfies Story;

const TemplateModalWithStateChangeAndFocusedInput: StoryFn<typeof Modal> = (
  args
) => {
  const ref = useRef<HTMLDialogElement>(null);
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Åpne modal'}
      </Button>
      <Modal {...args} ref={ref}>
        {showInput ? (
          <TextField
            ref={(node) => {
              node?.textboxRef.current?.focus();
            }}
            label={'Navn'}
          />
        ) : (
          <Button className={'marginRightM'} onClick={() => setShowInput(true)}>
            {'Vis og fokuser inputfelt'}
          </Button>
        )}
      </Modal>
    </>
  );
};

const TemplateModalWithStateChange: StoryFn<typeof Modal> = (args) => {
  const ref = useRef<HTMLDialogElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Åpne modal'}
      </Button>
      <Modal {...args} ref={ref}>
        {showMessage ? (
          <Paragraph hasSpacing>
            {
              'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
            }
          </Paragraph>
        ) : (
          <Button
            className={'marginRightM'}
            onClick={() => setShowMessage(true)}
          >
            {'Erstatt opplysninger'}
          </Button>
        )}
      </Modal>
    </>
  );
};

export const WithStateChangeAndFocus = {
  render: TemplateModalWithStateChange,
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  name: 'With State Change and Focus Modal',
  args: {
    dismissOnEsc: false,
    dismissOnOutsideClick: false,
  },

  argTypes: {
    dismissOnOutsideClick: { table: { disable: false } },
    dismissOnEsc: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    const innerButton = canvas.getByText('Erstatt opplysninger');
    await userEvent.click(innerButton);
    await expect(innerButton).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(modal).toBeInTheDocument();
  },
} satisfies Story;

export const WithStateChangeAndTextFieldFocus = {
  render: TemplateModalWithStateChangeAndFocusedInput,
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  name: 'With State Change and Focus TextField',
  args: {
    dismissOnEsc: false,
    dismissOnOutsideClick: false,
  },

  argTypes: {
    dismissOnOutsideClick: { table: { disable: false } },
    dismissOnEsc: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    const innerButton = within(modal).getByText('Vis og fokuser inputfelt');
    await userEvent.click(innerButton);
    await expect(innerButton).not.toBeInTheDocument();
    const textField = canvas.getByRole('textbox');
    await expect(textField).toHaveFocus();
  },
} satisfies Story;

export const AutoOpen = {
  decorators: [
    (Story): JSX.Element => {
      const body = document.body;
      body.classList.add('bodyFocus');
      return <Story />;
    },
  ],
  render: (args): JSX.Element => {
    const ref = useRef<HTMLDialogElement>(null);
    useEffect(() => {
      ref.current?.showModal();
    }, []);
    const onCloseOnClickHandler = (): void => {
      ref.current?.close();
    };
    return (
      <>
        <Paragraph
          hasSpacing
        >{`Denne testen skal sjekke om fokus blir satt på BODY-elementet når modalen lukkes. 
        Testes ved å reloade siden. Det er ved programatisk åpning av modalen at fokus tidligere ikke har blitt satt korrekt.`}</Paragraph>
        <Modal {...args} ref={ref}>
          <Paragraph hasSpacing>
            {
              'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
            }
          </Paragraph>
          <div className={'flex'}>
            <Button className={'marginRightM'}>{'Erstatt opplysninger'}</Button>
            <Button variant={'tertiary'} onClick={onCloseOnClickHandler}>
              {'Avbryt'}
            </Button>
          </div>
        </Modal>
        <Button
          className={'marginRightM'}
          onClick={() => ref.current?.showModal()}
        >
          {'Åpne modal ref.current.showModal'}
        </Button>
      </>
    );
  },
  name: 'With AutoOpen',
  args: {
    variant: 'plain',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const openmodal = await canvas.findByRole('dialog', { hidden: false });

    await expect(openmodal).toBeVisible();
    const button = within(canvasElement).getByRole('button', {
      name: 'Avbryt',
    });
    const user = userEvent.setup();
    await user.click(button);
    const body = document.body;
    await waitFor(() => {
      expect(body).toHaveFocus();
    });
    const closedmodal = await canvas.findByRole('dialog', { hidden: true });
    await expect(closedmodal).not.toBeVisible();
  },
} satisfies Story;
