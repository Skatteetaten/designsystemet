import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

export default function ModalConsentExample(): ReactElement {
  const refModal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={(): void => refModal.current?.showModal()}>
        {'Vis modal med bekreftelse'}
      </Button>
      <Modal ref={refModal} title={'Vil du erstatte nye opplysninger fra fil?'}>
        <Paragraph hasSpacing>
          {
            'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
          }
        </Paragraph>
        <div className={'flex'}>
          <Button className={styles.replaceButton}>
            {'Erstatt opplysninger'}
          </Button>
          <Button
            variant={'secondary'}
            onClick={(): void => refModal.current?.close()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
