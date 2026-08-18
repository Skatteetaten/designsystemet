import { type ReactElement } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { RadioGroup } from '@skatteetaten/ds-forms';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import {
  useWaitNotice,
  waitNoticeDefaultTime,
  waitNoticeDemoTime,
} from './waitNotice';

import styles from './modal.module.scss';

const waitIllustration = new URL(
  './wait-alert-illustration.png',
  import.meta.url
).href;

export default function ModalWaitNoticeExample(): ReactElement {
  const { refModalWait, time, setTime, closeDialog, openDialog } =
    useWaitNotice();

  return (
    <>
      <Button
        variant={'secondary'}
        className={styles.triggerButton}
        onClick={openDialog}
      >
        {'Vis ventevarsel'}
      </Button>

      <RadioGroup
        legend={'Ventevarseleksempel åpnes automatisk etter'}
        helpText={
          'Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.'
        }
        value={time}
        onChange={(e): void => setTime(Number(e.target.value))}
      >
        <RadioGroup.Radio value={waitNoticeDefaultTime}>
          {'20 minutter (anbefalt i løsninger)'}
        </RadioGroup.Radio>
        <RadioGroup.Radio value={waitNoticeDemoTime}>
          {'5 sekunder'}
        </RadioGroup.Radio>
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
        <Button onClick={closeDialog}>
          {dsI18n.t('ds_overlays:modal.StayLoggedIn')}
        </Button>
      </Modal>
    </>
  );
}
