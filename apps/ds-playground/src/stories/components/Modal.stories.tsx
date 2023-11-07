import { useRef } from 'react';

import { Button, Link } from '@skatteetaten/ds-buttons';
import { InfoOutlineSVGpath } from '@skatteetaten/ds-icons';
import {
  Modal,
  getModalPaddingDefault,
  getModalVariantDefault,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import waitAlert from '../../assets/wait-alert-illustration.png';
import { getVersion } from '../utils/version.utils';

export default {
  component: Modal,
  title: 'Komponenter/Modal',
  argTypes: {
    // Props
    children: { control: { type: null }, table: { category: category.props } },
    classNames: { table: { category: category.props } },
    disableAutoClose: { table: { category: category.props } },
    hideCloseButton: { table: { category: category.props } },
    hideTitle: { table: { category: category.props } },
    imageSource: {
      control: { type: null },
      table: { category: category.props },
    },
    imageSourceAltText: { table: { category: category.props } },
    padding: {
      table: {
        category: category.props,
        defaultValue: { summary: getModalPaddingDefault() },
      },
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
  parameters: {
    version: getVersion('ds-overlays'),
  },
} satisfies Meta<typeof Modal>;

export const Preview: StoryFn<typeof Modal> = (args) => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
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

Preview.args = {
  children: (
    <>
      <Paragraph hasSpacing>
        {
          'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
        }
      </Paragraph>
      <div className={'flex'}>
        <Button className={'marginRightM'}>{'Erstatt opplysninger'}</Button>
        <Button variant={'tertiary'}>{'Avbryt'}</Button>
      </div>
    </>
  ),
  title: 'Vil du erstatte nye opplysninger fra fil?',
  padding: getModalPaddingDefault(),
  variant: getModalVariantDefault(),
  onClose: (): void => console.log('onClose activated'),
};

export const ExampleImportant: StoryFn<typeof Modal> = () => {
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
      <Modal ref={ref} variant={'important'} title={'Viktig melding!'}>
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

export const ExampleWait: StoryFn<typeof Modal> = () => {
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
      <Modal
        ref={ref}
        title={'Hei, er du fortsatt her?'}
        imageSource={waitAlert}
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
          onClick={(): void => ref.current?.close()}
        >
          {'Ja'}
        </Button>
      </Modal>
    </>
  );
};
