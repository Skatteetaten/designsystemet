import { JSX, useState } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { ChevronDownSVGpath, ChevronUpSVGpath } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { CopyButton } from './copy-button';

import styles from './token-card-list.module.scss';

interface TokenCardListProps {
  title: string;
  id?: string;
  tokens: Record<string, string>;
  showPreview?: boolean;
}

export const TokenCardList = ({
  title,
  id,
  tokens,
  showPreview = true,
}: TokenCardListProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card spacing={'s'} className={styles.card}>
      <Card.Header className={styles.headerWrapper}>
        <Heading as={'h3'} id={id}>
          {title}
        </Heading>
        <IconButton
          ariaExpanded={isOpen}
          title={
            isOpen
              ? `Skjul ${title.toLocaleLowerCase()}`
              : `Vis ${title.toLocaleLowerCase()}`
          }
          svgPath={isOpen ? ChevronUpSVGpath : ChevronDownSVGpath}
          onClick={(): void => setIsOpen((previous) => !previous)}
        />
      </Card.Header>
      {isOpen && (
        <Card.Content classNames={{ children: styles.cardContent }}>
          <ul className={styles.list}>
            {Object.entries(tokens).map(([name, value]) => {
              return (
                <li
                  key={name}
                  className={`${styles.item} ${
                    showPreview ? '' : styles.itemWithoutPreview
                  }`.trim()}
                >
                  {showPreview && (
                    <div
                      className={styles.preview}
                      data-token={name}
                      aria-hidden
                    >
                      {'Aa'}
                    </div>
                  )}
                  <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.value}>{value}</div>
                  </div>
                  <CopyButton
                    copyText={name}
                    title={`Kopier ${name}`}
                    copiedTitle={`${name} er kopiert`}
                    errorTitle={`Kunne ikke kopiere ${name}`}
                  />
                </li>
              );
            })}
          </ul>
        </Card.Content>
      )}
    </Card>
  );
};
