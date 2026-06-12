import { useRef } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { Card, DescriptionList, Divider } from '@skatteetaten/ds-content';
import { ArbeidTrygdPensjonIcon, EditSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function DividerThemeExample(): JSX.Element {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <Paragraph hasSpacing>
        {'Delestrek brukt som dekorelement og skjult for skjermleser'}
      </Paragraph>
      <div className={`${styles.flex} ${styles.gapM}`}>
        <ArbeidTrygdPensjonIcon size={'extraLarge'} />
        <Heading as={'h1'} level={2}>
          {'Arbeid, trygd og pensjon'}
        </Heading>
      </div>
      <Divider spacingTop={'xs'} spacingBottom={'l'} ariaHidden />
      <Card className={styles.cardWidth}>
        <Card.Header>
          <Heading ref={headingRef} as={'h3'} canBeManuallyFocused>
            {'Andre inntekter'}
          </Heading>
        </Card.Header>
        <Card.Content>
          <DescriptionList>
            <DescriptionList.Element term={'Beløp'}>
              {'654 321'}
            </DescriptionList.Element>
          </DescriptionList>
        </Card.Content>
        <Card.Actions>
          <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
        </Card.Actions>
      </Card>
    </>
  );
}
