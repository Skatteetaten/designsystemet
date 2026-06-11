import { useState } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Tag } from '@skatteetaten/ds-status';
import { Blockquote, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function BlockquoteLegalTextStateExample(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <OpenClose
      title={isExpanded ? 'Skjul regelverk' : 'Vis regelverk'}
      iconPosition={'right'}
      size={'medium'}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded((currentValue) => !currentValue)}
    >
      <Blockquote borderColor={'graphite'}>
        <div className={styles.blockquoteTagWrapper}>
          <Tag color={'graphite'} size={'small'}>
            {'§ Regelverk'}
          </Tag>
        </div>

        <Paragraph hasSpacing>
          {'(1) Denne loven får anvendelse i merverdiavgiftsområdet.'}
        </Paragraph>
        <Paragraph hasSpacing>
          {
            '(2) Med merverdiavgiftsområdet menes det norske fastlandet og alt område innenfor territorialgrensen, men ikke Svalbard, Jan Mayen eller de norske bilandene.'
          }
        </Paragraph>
      </Blockquote>
    </OpenClose>
  );
}
