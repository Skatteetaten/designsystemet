import { useRef, JSX, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, Link } from '@skatteetaten/ds-buttons';
import { dsI18n, useMediaQuery } from '@skatteetaten/ds-core-utils';
import { RadioGroup } from '@skatteetaten/ds-forms';
import {
  InfoOutlineSVGpath,
  UpdateSVGpath,
  WarningOutlineIcon,
} from '@skatteetaten/ds-icons';
import {
  Modal,
  getModalDismissOnEscDefault,
  getModalDismissOnOutsideClickDefault,
  getModalPaddingDefault,
  getModalVariantDefault,
} from '@skatteetaten/ds-overlays';
import { List, Paragraph } from '@skatteetaten/ds-typography';

// eslint-disable-next-line @nx/enforce-module-boundaries
import skeLogo from '../../../../../libs/ds-core-utils/src/SkatteetatenLogo/SKESquare40.svg';
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
    renderIcon: {
      table: { category: category.props },
      control: 'select',
      options: ['', 'Icon', 'Logo'],
      mapping: {
        '': '',
        Icon: (): JSX.Element => <WarningOutlineIcon size={'extraLarge'} />,
        Logo: (): JSX.Element => (
          <img src={skeLogo} alt={'Skatteetaten logo'} className={'logo'} />
        ),
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

export const Samtykkemodal: Story = {
  render: (_args): JSX.Element => {
    const refModal = useRef<HTMLDialogElement>(null);

    return (
      <>
        <Button onClick={(): void => refModal.current?.showModal()}>
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
      </>
    );
  },
} satisfies Story;
Samtykkemodal.parameters = exampleParameters;

export const Ventevarsel: Story = {
  render: function Render(_args): JSX.Element {
    const refModalWait = useRef<HTMLDialogElement>(null);
    const [time, setTime] = useState<number>(1200000);
    const lastActivity = useRef(new Date().getTime());

    const resetTimer = (): void => {
      lastActivity.current = new Date().getTime();
    };

    const closeDialog = (): void => {
      refModalWait.current?.close();
      resetTimer();
    };

    useEffect(() => {
      const checkExpiredTime = (): void => {
        const timePassed = new Date().getTime() - lastActivity.current;

        if (timePassed >= time) {
          refModalWait.current?.showModal();
        }
      };
      const intervalId = setInterval(checkExpiredTime, 1000);
      return (): void => clearInterval(intervalId);
    }, [time]);

    useEffect(() => {
      const abortController = new AbortController();
      const { signal } = abortController;

      window.addEventListener('keydown', resetTimer, { signal });
      window.addEventListener('mousemove', resetTimer, { signal });
      window.addEventListener('scroll', resetTimer, { signal });
      window.addEventListener('resize', resetTimer, { signal });

      return (): void => {
        abortController.abort();
      };
    }, []);

    return (
      <>
        <Button
          variant={'secondary'}
          className={'bottomSpacingXL'}
          onClick={(): void => refModalWait.current?.showModal()}
        >
          {'Vis ventevarsel'}
        </Button>
        <RadioGroup
          legend={'Ventevarseleksempel åpnes automatisk etter'}
          helpText={
            'Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.'
          }
          selectedValue={time}
          onChange={(e): void => setTime(Number(e.target.value))}
        >
          <RadioGroup.Radio value={1200000}>
            {'20 minutter (anbefalt i løsninger)'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={5000}>{'5 sekunder'}</RadioGroup.Radio>
        </RadioGroup>
        <Modal
          ref={refModalWait}
          title={dsI18n.t('ds_overlays:modal.WaitNoticeTitle')}
          imageSource={waitIllustration}
          imageSourceAltText={dsI18n.t(
            'ds_overlays:modal.WaitNoticeImageAltText'
          )}
          onClose={closeDialog}
        >
          <Paragraph hasSpacing>
            {dsI18n.t('ds_overlays:modal.WaitNoticeParagraph')}
          </Paragraph>
          <Button
            onClick={(): void => {
              closeDialog();
            }}
          >
            {dsI18n.t('ds_overlays:modal.StayLoggedIn')}
          </Button>
        </Modal>
      </>
    );
  },
} satisfies Story;
Ventevarsel.parameters = exampleParameters;

export const Feilmeldingsmodal: Story = {
  render: function Render(_args): JSX.Element {
    const refModalFeil = useRef<HTMLDialogElement>(null);
    const isBigScreen = useMediaQuery('(min-width: 640px)');

    return (
      <>
        <Button
          variant={'danger'}
          onClick={(): void => refModalFeil.current?.showModal()}
        >
          {'Åpne feilmeldingsmodal'}
        </Button>
        <Modal
          ref={refModalFeil}
          title={'Beklager, noe gikk galt'}
          padding={isBigScreen ? 'mega' : 'm'}
          renderIcon={(): JSX.Element => (
            <WarningOutlineIcon size={'extraLarge'} />
          )}
        >
          <Paragraph hasSpacing>
            {'Vi klarte ikke å hente skjemet akkurat nå.'}
          </Paragraph>
          <Paragraph className={'bold'}>{'Du kan prøve å'}</Paragraph>
          <List hasSpacing>
            <List.Element>
              {'vente noen minutter og '}
              <a href={'#link'}>{'laste inn siden på nytt'}</a>
            </List.Element>
            <List.Element>
              <a href={'#link'}>{'gå tilbake til forrige side'}</a>
            </List.Element>
          </List>
          <Paragraph hasSpacing>
            {'Hvis du fortsatt har problemer kan du '}
            <a href={'#link'}>{'kontakte oss'}</a>
          </Paragraph>
          <Button
            className={'exampleSpacing'}
            svgPath={UpdateSVGpath}
            onClick={(): void => refModalFeil.current?.close()}
          >
            {'Last inn siden på nytt'}
          </Button>
          <Button variant={'secondary'} href={'#'}>
            {'Gå til forsiden'}
          </Button>
        </Modal>
      </>
    );
  },
} satisfies Story;
Feilmeldingsmodal.parameters = exampleParameters;
