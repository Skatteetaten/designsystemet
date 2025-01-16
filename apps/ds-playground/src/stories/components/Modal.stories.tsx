import { useRef, JSX, useState, useEffect } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, Link } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
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

import { category } from '../../../.storybook/helpers';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Modal,
  title: 'Komponenter/Modal',
  argTypes: {
    // Props
    children: {
      control: { disable: true },
      table: { category: category.props },
    },
    classNames: {
      control: { disable: true },
      table: { category: category.props },
    },
    dismissOnEsc: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalDismissOnEscDefault().toString() },
      },
    },
    dismissOnOutsideClick: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getModalDismissOnOutsideClickDefault().toString(),
        },
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
    onClose: {
      control: { disable: true },
      table: { category: category.event },
    },
  },
  args: {
    children: <Paragraph>{loremIpsum}</Paragraph>,
    title: 'Modal title',
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

    const numberOfSecondsToWait = 60;
    const [time, setTime] = useState(numberOfSecondsToWait);

    useEffect(() => {
      if (time > 0) {
        document.onmousemove = (): void => setTime(numberOfSecondsToWait);
        document.onkeydown = (): void => setTime(numberOfSecondsToWait);
      }

      if (time === 0) {
        refModalWait.current?.showModal();
      }
      const intervalId = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      return (): void => clearInterval(intervalId);
    }, [time]);

    const closeDialog = (): void => {
      refModalWait.current?.close();
      setTime(numberOfSecondsToWait);
      document.querySelector('main')?.focus();
    };

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

        <main>
          <Button
            variant={'tertiary'}
            svgPath={InfoOutlineSVGpath}
            onClick={(): void => refModalWait.current?.showModal()}
          >
            {'Vis ventevarsel'}
          </Button>
          <Paragraph>{`Vent i ${time} sekunder eller trykk på knappen for å se ventevarselet.`}</Paragraph>
          <Paragraph>
            {
              'Hver gang du beveger musepekeren eller gjør et tastetrykk, resettes timeren.'
            }
          </Paragraph>
        </main>
        <Modal
          ref={refModalWait}
          title={dsI18n.t('ds_overlays:modal.VentevarselTitle')}
          imageSource={waitIllustration}
          imageSourceAltText={dsI18n.t(
            'ds_overlays:modal.VentevarselImageAltText'
          )}
          onClose={closeDialog}
        >
          <Paragraph hasSpacing>
            {dsI18n.t('ds_overlays:modal.VentevarselParagraph')}
          </Paragraph>
          <Button
            className={'width100'}
            onClick={(): void => {
              closeDialog();
            }}
          >
            {dsI18n.t('Shared:shared.Ja')}
          </Button>
        </Modal>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
