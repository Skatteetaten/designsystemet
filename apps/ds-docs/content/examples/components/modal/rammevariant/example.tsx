import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

export default function ModalVariantExample(): ReactElement {
  const outlineModalRef = useRef<HTMLDialogElement>(null);
  const plainModalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Paragraph hasSpacing>
        {
          'Vi har to varianter av modal: standard (med ramme) og enkel (uten ramme).'
        }
      </Paragraph>
      <div className={styles.buttonRow}>
        <Button onClick={(): void => outlineModalRef.current?.showModal()}>
          {'Åpne standard modal'}
        </Button>
        <Button
          variant={'secondary'}
          onClick={(): void => plainModalRef.current?.showModal()}
        >
          {'Åpne enkel modal'}
        </Button>
      </div>

      <Modal
        ref={outlineModalRef}
        title={'Standard modal (med ramme)'}
        variant={'outline'}
      >
        <Paragraph hasSpacing>
          {
            'Denne varianten brukes i de fleste tilfeller der du trenger en tydelig dialog.'
          }
        </Paragraph>
        <div className={styles.actionRow}>
          <Button
            variant={'secondary'}
            onClick={(): void => outlineModalRef.current?.close()}
          >
            {'Lukk meg'}
          </Button>
        </div>
      </Modal>

      <Modal
        ref={plainModalRef}
        title={'Enkel modal (uten ramme)'}
        variant={'plain'}
      >
        <Paragraph hasSpacing>
          {
            'Denne varianten brukes når rammen skal få mindre visuell oppmerksomhet.'
          }
        </Paragraph>
        <div className={styles.actionRow}>
          <Button
            variant={'secondary'}
            onClick={(): void => plainModalRef.current?.close()}
          >
            {'Lukk meg'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
