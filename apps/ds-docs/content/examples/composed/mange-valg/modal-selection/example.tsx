import { type JSX, useRef, useState } from 'react';

import { Button, IconButton, InlineButton } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { AddOutlineSVGpath, CancelSVGpath } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';

import styles from './ModalSelection.module.scss';

export default function ModalSelectionExample(): JSX.Element {
  const modalRef = useRef<HTMLDialogElement>(null);
  const allRegions = [
    'Nord-Norge',
    'Midt-Norge',
    'Østlandet',
    'Vestlandet',
    'Sørlandet',
  ];
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    'Østlandet',
    'Nord-Norge',
  ]);

  const handleAddRegion = (): void => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const handleRegionChange = (region: string, isChecked: boolean): void => {
    setSelectedRegions(
      isChecked
        ? [...selectedRegions, region]
        : selectedRegions.filter((r) => r !== region)
    );
  };

  const handleRemoveRegion = (region: string): void => {
    setSelectedRegions(selectedRegions.filter((r) => r !== region));
  };

  return (
    <>
      <div className={styles.regionsContainer}>
        {selectedRegions.map((region) => (
          <Card key={region} color={'denim'}>
            <div className={styles.regionCard}>
              <div>{region}</div>
              <IconButton
                svgPath={CancelSVGpath}
                title={`Fjern ${region}`}
                onClick={(): void => handleRemoveRegion(region)}
              />
            </div>
          </Card>
        ))}
      </div>

      <InlineButton svgPath={AddOutlineSVGpath} onClick={handleAddRegion}>
        {'Legg til region'}
      </InlineButton>

      <Modal ref={modalRef} title={'Velg region'} onClose={handleCloseModal}>
        <CheckboxGroup legend={'Region'}>
          {allRegions.map((region) => (
            <CheckboxGroup.Checkbox
              key={region}
              checked={selectedRegions.includes(region)}
              onChange={(e): void =>
                handleRegionChange(region, e.target.checked)
              }
            >
              {region}
            </CheckboxGroup.Checkbox>
          ))}
        </CheckboxGroup>

        <div className={styles.modalActions}>
          <Button onClick={(): void => handleCloseModal()}>{'Bekreft'}</Button>
          <Button
            variant={'secondary'}
            onClick={(): void => handleCloseModal()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
