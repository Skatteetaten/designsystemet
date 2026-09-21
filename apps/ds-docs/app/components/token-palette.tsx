import { JSX, useState } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { ChevronDownSVGpath, ChevronUpSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { CopyButton } from './copy-button';
import { PublicImage } from './public-image';

import styles from './token-palette.module.scss';

interface TokenCardListProps {
  title: string;
  description?: string;
  id?: string;
  tokens: Record<string, string>;
  showValue?: boolean;
  icon?: string;
}

export const TokenCardList = ({
  title,
  description,
  id,
  tokens,
  showValue = true,
  icon,
}: TokenCardListProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.headerWrapper}>
        <div>
          <Heading as={'h3'} id={id}>
            {title}
          </Heading>
          {description && <Paragraph>{description}</Paragraph>}
        </div>
        {icon ? (
          <PublicImage src={`/images/${icon}.svg`} className={styles.icon} />
        ) : (
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
        )}
      </Card.Header>
      {isOpen && (
        <Card.Content classNames={{ children: styles.cardContent }}>
          <ul className={styles.list}>
            {Object.entries(tokens).map(([name, value]) => {
              return (
                <li key={name} className={styles.item}>
                  <svg
                    className={`${styles.preview} ${showValue ? styles.previewWithValue : ''}`.trim()}
                    viewBox={'0 0 24 24'}
                    aria-hidden
                  >
                    <circle cx={'12'} cy={'12'} r={'12'} fill={value} />
                  </svg>
                  <div>
                    <div className={styles.name}>{name}</div>
                    {showValue && (
                      <div className={styles.value}>
                        {value.toLocaleUpperCase()}
                      </div>
                    )}
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
