import { JSX } from 'react';

import { Divider } from '@skatteetaten/ds-content';
import { DescriptionList } from '@skatteetaten/ds-content';
import { Card } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function DividerSubtleStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Delestrek (nedtonet) som er meningsbærende og dermed ikke skjult for skjermleser.'
        }
      </Paragraph>
      <Card className={styles.dividerCard}>
        <Card.Header>
          <Heading as={'h3'}>{'Utregning'}</Heading>
        </Card.Header>
        <Card.Content classNames={{ children: styles.flexGrow }}>
          <DescriptionList
            className={styles.descriptionList}
            descriptionWeight={'regular'}
            termWeight={'regular'}
          >
            <DescriptionList.Element term={'Tall nummer 1'}>
              {'99 000'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Tall nummer 2'}>
              {'100 000'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Tall nummer 3'}>
              {'110 000'}
            </DescriptionList.Element>
          </DescriptionList>
          <Divider />
          <DescriptionList
            className={styles.descriptionList}
            descriptionWeight={'bold'}
            termWeight={'bold'}
          >
            <DescriptionList.Element term={'Sum'}>
              {'200 000'}
            </DescriptionList.Element>
          </DescriptionList>
        </Card.Content>
      </Card>
    </>
  );
}
