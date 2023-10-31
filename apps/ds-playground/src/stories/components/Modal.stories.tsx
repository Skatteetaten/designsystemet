import { useRef, useState } from 'react';

import { Button, Link } from '@skatteetaten/ds-buttons';
import { InfoOutlineSVGpath } from '@skatteetaten/ds-icons';
import {
  Modal,
  getModalPaddingDefault,
  getModalVariantDefault,
  modalVariantArr,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import waitAlert from '../../assets/wait-alert-illustration.svg';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Modal,
  title: 'Komponenter/Modal',
  argTypes: {
    // Props
    children: { control: { type: null }, table: { category: category.props } },
    hideAutoClose: { table: { category: category.props } },
    hideCloseButton: { table: { category: category.props } },
    hideOutline: { table: { category: category.props } },
    hideTitle: { table: { category: category.props } },
    padding: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalPaddingDefault() },
      },
    },
    title: { table: { category: category.props } },
    variant: {
      options: [...modalVariantArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getModalVariantDefault() },
      },
    },
    // HTML
    open: { table: { category: category.htmlAttribute } },
    // Events
    onClose: { control: { type: null }, table: { category: category.event } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-overlays'),
  },
} satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

const Preview: StoryFn<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <Paragraph hasSpacing>
        {
          'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
        }
      </Paragraph>
      <div className={'flex'}>
        <Button>{'Erstatt opplysninger'}</Button>
        <Button variant={'tertiary'}>{'Avbryt'}</Button>
      </div>
    </Modal>
  );
};

const ExampleWithRef: StoryFn<typeof Modal> = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Åpne modal'}
      </Button>
      <Modal
        ref={ref}
        title={'Vil du erstatte nye opplysninger fra fil?'}
        onClose={(): void => console.log('onClose activated')}
      >
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

const ExampleWithState: StoryFn<typeof Modal> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={(): void => setOpen(true)}>{'Åpne modal'}</Button>
      <Modal
        open={open}
        title={'Vil du erstatte nye opplysninger fra fil?'}
        hideCloseButton
      >
        <Paragraph hasSpacing>
          {
            'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
          }
        </Paragraph>
        <div className={'flex'}>
          <Button>{'Erstatt opplysninger'}</Button>
          <Button variant={'tertiary'} onClick={(): void => setOpen(false)}>
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
};

const ExampleImportant: StoryFn<typeof Modal> = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        variant={'tertiary'}
        svgPath={InfoOutlineSVGpath}
        onClick={(): void => ref.current?.showModal()}
      >
        {'Viktig driftsmelding'}
      </Button>
      <Modal
        ref={ref}
        variant={'important'}
        title={'Viktig melding!'}
        hideOutline
      >
        <Paragraph hasSpacing>
          {
            'Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold.'
          }
        </Paragraph>
        <Link
          className={'modalLink'}
          href={'#'}
          onClick={(): void => ref.current?.close()}
        >
          {'Les mer på skatteetaten.no'}
        </Link>
      </Modal>
    </>
  );
};

const ExampleWait: StoryFn<typeof Modal> = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        variant={'tertiary'}
        svgPath={InfoOutlineSVGpath}
        onClick={(): void => ref.current?.showModal()}
      >
        {'Vis ventevarsel'}
      </Button>
      {/* modalWaitAlert fungerer ikke i Storybook, sjekk testprosjektet */}
      <Modal ref={ref} className={'modalWaitAlert'} title={'Hei!'}>
        <img
          className={'modalWaitAlertIllustration'}
          src={waitAlert}
          alt={
            'Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.'
          }
        />
        <Paragraph hasSpacing>
          {
            'Vi ser at du ikke har gjort noe på nettsiden på ei stund. Er du fortsatt her?'
          }
        </Paragraph>
        <Button
          className={'width100'}
          onClick={(): void => ref.current?.close()}
        >
          {'Ja'}
        </Button>
      </Modal>
    </>
  );
};

export const ModalDefault = {
  render: Preview,
  name: 'Default',
  args: {
    children: '',
    title: 'Vil du erstatte nye opplysninger fra fil?',
    open: true,
    padding: getModalPaddingDefault(),
  },
} satisfies Story;

export const ExampleModalWithRef = {
  render: ExampleWithRef,
  name: 'Example With Ref',
  args: {
    children: '',
    title: 'Vil du erstatte nye opplysninger fra fil?',
  },
} satisfies Story;

export const ExampleModalWithState = {
  render: ExampleWithState,
  name: 'Example With State',
  args: {
    children: '',
    title: 'Vil du erstatte nye opplysninger fra fil?',
  },
} satisfies Story;

export const ExampleImportantModal = {
  render: ExampleImportant,
  name: 'Example Viktig Dialog',
  args: {
    children: '',
    title: 'Viktig melding!',
  },
} satisfies Story;

export const ExampleWaitModal = {
  render: ExampleWait,
  name: 'Example Ventevarsel',
  args: {
    children: '',
    title: 'Hei!',
  },
} satisfies Story;
