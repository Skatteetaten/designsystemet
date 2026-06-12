import { useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { DeleteSVGpath } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function ButtonModalActionsStateExample(): JSX.Element {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (): void => {
    modalRef.current?.showModal();
  };

  const closeModal = (): void => {
    modalRef.current?.close();
  };

  return (
    <>
      <Button variant={'primary'} onClick={openModal}>
        {'Åpne modal'}
      </Button>

      <Modal ref={modalRef} title={'Bekreft handling'}>
        <Paragraph hasSpacing>
          {'Du er i ferd med å slette en melding. Velg handling under.'}
        </Paragraph>

        <div className={styles.buttonModalActions}>
          <div className={styles.buttonModalActionsGroup}>
            <Button variant={'primary'} onClick={closeModal}>
              {'Bekreft'}
            </Button>
            <Button variant={'secondary'} onClick={closeModal}>
              {'Avbryt'}
            </Button>
          </div>

          <Button
            variant={'danger'}
            svgPath={DeleteSVGpath}
            onClick={closeModal}
          >
            {'Slett melding'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
