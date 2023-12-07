import { useRef } from 'react';

import { Button, Link } from '@skatteetaten/ds-buttons';
import { CheckboxGroup, RadioGroup } from '@skatteetaten/ds-forms';
import { InfoOutlineSVGpath } from '@skatteetaten/ds-icons';
import {
  Modal,
  getModalDismissOnEscDefault,
  getModalDismissOnOutsideClickDefault,
  getModalPaddingDefault,
  getModalVariantDefault,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import farmerIllustration from '../../assets/farmer-illustration.svg';
import waitIllustration from '../../assets/wait-alert-illustration.png';
import { getVersion } from '../utils/version.utils';

export default {
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
        <div className={'modalLink'}>
          <Link href={'#'} onClick={(): void => ref.current?.close()}>
            {'Les mer på skatteetaten.no'}
          </Link>
        </div>
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
        // husk å importere illustrasjonen
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
          onClick={(): void => ref.current?.close()}
        >
          {'Ja'}
        </Button>
      </Modal>
    </>
  );
};

export const ExampleWithRadioGroup: StoryFn<typeof Modal> = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Velg rolle'}
      </Button>
      <Modal ref={ref} title={'Dette er dine roller'}>
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
      </Modal>
    </>
  );
};

export const ExampleWithCheckboxGroup: StoryFn<typeof Modal> = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button onClick={(): void => ref.current?.showModal()}>
        {'Velg rolle'}
      </Button>
      <Modal ref={ref} title={'Dette er dine roller'}>
        <CheckboxGroup legend={'Velge en rolle'}>
          <CheckboxGroup.Checkbox value={'meg'}>
            {'Innlogget som meg selv'}
          </CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox value={'andre'}>
            {'Innlogget som annen person'}
          </CheckboxGroup.Checkbox>
          <CheckboxGroup.Checkbox value={'virksomhet'}>
            {'Innlogget som virksomhet'}
          </CheckboxGroup.Checkbox>
        </CheckboxGroup>
      </Modal>
    </>
  );
};
