import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';
import { UpdateSVGpath, WarningOutlineIcon } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';
import { List, Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

/* breakpoint-s: 640px (fra @skatteetaten/ds-core-designtokens) */
const breakpointS = '640px';

export default function ModalErrorExample(): ReactElement {
  const refModalFeil = useRef<HTMLDialogElement>(null);
  const isBigScreen = useMediaQuery(`(min-width: ${breakpointS})`);

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={(): void => refModalFeil.current?.showModal()}
      >
        {'Åpne feilmelding'}
      </Button>

      <Modal
        ref={refModalFeil}
        title={'Beklager, noe gikk galt'}
        padding={isBigScreen ? 'mega' : 'm'}
        renderIcon={() => <WarningOutlineIcon size={'extraLarge'} />}
      >
        <Paragraph hasSpacing>
          {'Vi klarte ikke å hente skjemet akkurat nå.'}
        </Paragraph>

        <Paragraph className={styles.bold}>{'Du kan prøve å'}</Paragraph>

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
          className={styles.exampleSpacing}
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
}
