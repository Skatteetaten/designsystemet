import { useRef, JSX } from 'react';

import { Button, Link } from '@skatteetaten/ds-buttons';
import { RadioGroup } from '@skatteetaten/ds-forms';
import { InfoOutlineSVGpath } from '@skatteetaten/ds-icons';
import {
  Modal,
  getModalDismissOnEscDefault,
  getModalDismissOnOutsideClickDefault,
  getModalPaddingDefault,
  getModalVariantDefault,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Modal,
  title: 'Komponenter/Modal',
  argTypes: {
    // Props
    children: { control: { type: null }, table: { category: category.props } },
    classNames: {
      control: { type: null },
      table: { category: category.props },
    },
    dismissOnEsc: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalDismissOnEscDefault() },
      },
    },
    dismissOnOutsideClick: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalDismissOnOutsideClickDefault() },
      },
    },
    hideCloseButton: { table: { category: category.props } },
    hideTitle: { table: { category: category.props } },
    imageSource: {
      table: { category: category.props },
      control: 'select',
      options: ['', farmerIllustration, waitIllustration],
    },
    imageSourceAltText: { table: { category: category.props } },
    padding: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalPaddingDefault() },
      },
    },
    shadowRootNode: {
      control: false,
      table: { control: false, category: category.props },
    },
    title: { table: { category: category.props } },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalVariantDefault() },
      },
    },
    // Events
    onClose: { control: { type: null }, table: { category: category.event } },
  },
  args: {
    children: <Paragraph>{loremIpsum}</Paragraph>,
    title: 'Modal title',
  },
  parameters: {
    version: getVersion('ds-overlays'),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args): JSX.Element => {
    const ref = useRef<HTMLDialogElement>(null);
    return (
      <>
        <Button onClick={(): void => ref.current?.showModal()}>
          {'Åpne modal'}
        </Button>
        <Modal {...args} ref={ref}>
          {args.children}
        </Modal>
      </>
    );
  },
} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const refModal = useRef<HTMLDialogElement>(null);
    const refModalRadioGroup = useRef<HTMLDialogElement>(null);
    const refModalImportant = useRef<HTMLDialogElement>(null);
    const refModalWait = useRef<HTMLDialogElement>(null);

    return (
      <>
        <Button
          className={'exampleSpacing'}
          onClick={(): void => refModal.current?.showModal()}
        >
          {'Nye opplysninger'}
        </Button>
        <Modal
          ref={refModal}
          title={'Vil du erstatte nye opplysninger fra fil?'}
          onClose={() => {
            console.log('lukker mod1');
          }}
        >
          <Paragraph hasSpacing>
            {
              'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
            }
          </Paragraph>
          <div className={'flex'}>
            <Button className={'marginRightM'}>{'Erstatt opplysninger'}</Button>
            <Button
              variant={'tertiary'}
              onClick={(): void => refModal.current?.close()}
            >
              {'Avbryt'}
            </Button>
          </div>
        </Modal>

        <Button
          className={'exampleSpacing'}
          onClick={(): void => refModalRadioGroup.current?.showModal()}
        >
          {'Velg rolle'}
        </Button>
        <Modal
          ref={refModalRadioGroup}
          title={'Dette er dine roller'}
          onClose={() => {
            console.log('lukker mod2');
          }}
        >
          <RadioGroup legend={'Velge en rolle'}>
            <RadioGroup.Radio value={'meg'}>
              {'Innlogget som meg selv'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'andre'}>
              {'Innlogget som annen person'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'virksomhet'}>
              {'Innlogget som virksomhet'}
            </RadioGroup.Radio>
          </RadioGroup>
          <Button onClick={(): void => refModalRadioGroup.current?.close()}>
            {'Ok'}
          </Button>
        </Modal>

        <Button
          className={'exampleSpacing'}
          variant={'tertiary'}
          svgPath={InfoOutlineSVGpath}
          onClick={(): void => refModalImportant.current?.showModal()}
        >
          {'Viktig driftsmelding'}
        </Button>
        <Modal
          ref={refModalImportant}
          variant={'important'}
          title={'Viktig melding!'}
        >
          <Paragraph hasSpacing>
            {
              'Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold.'
            }
          </Paragraph>
          <div className={'modalLink'}>
            <Link
              href={'#'}
              onClick={(): void => refModalImportant.current?.close()}
            >
              {'Les mer på skatteetaten.no'}
            </Link>
          </div>
        </Modal>

        <Button
          className={'exampleSpacing'}
          variant={'tertiary'}
          svgPath={InfoOutlineSVGpath}
          onClick={(): void => refModalWait.current?.showModal()}
        >
          {'Vis ventevarsel'}
        </Button>
        <Modal
          ref={refModalWait}
          title={'Hei, er du fortsatt her?'}
          imageSource={waitIllustration}
          imageSourceAltText={
            'Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.'
          }
        >
          <Paragraph hasSpacing>
            {
              'Vi ser at du ikke har gjort noe på nettsiden på ei stund. Er du fortsatt her?'
            }
          </Paragraph>
          <Button
            className={'width100'}
            onClick={(): void => refModalWait.current?.close()}
          >
            {'Ja'}
          </Button>
        </Modal>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
