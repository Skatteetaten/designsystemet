import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

export default function ModalForcedActionExample(): ReactElement {
  const refModal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={(): void => refModal.current?.showModal()}>
        {'Vis modal med tvungen handling'}
      </Button>

      <Modal
        ref={refModal}
        title={'Tvungen handling'}
        dismissOnEsc={false}
        dismissOnOutsideClick={false}
        hideCloseButton
      >
        <Paragraph hasSpacing>
          {
            'I denne modalen finnes det ikke noe lukkekryss, og den blir stående åpen også når brukeren klikker utenfor.'
          }
        </Paragraph>
        <div className={styles.actionRow}>
          <Button onClick={(): void => refModal.current?.close()}>
            {'Bekreft handling'}
          </Button>
          <Button
            variant={'secondary'}
            href={'#'}
            onClick={(): void => refModal.current?.close()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
