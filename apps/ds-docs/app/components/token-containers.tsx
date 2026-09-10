import { JSX } from 'react';

import { Card, DescriptionList } from '@skatteetaten/ds-content';
import breakpointsJson from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { CopyButton } from './copy-button';
import { PublicImage } from './public-image';

import styles from './token-containers.module.scss';

type TokenValues = Record<string, string>;

const rootQuery = ':root,\n:host';
const mediaRootQuery = ':root,\n  :host';

const breakpointXS = Number.parseInt(breakpointsJson['--breakpoint-xs'], 10);
const breakpointS = Number.parseInt(breakpointsJson['--breakpoint-s'], 10);
const breakpointM = Number.parseInt(breakpointsJson['--breakpoint-m'], 10);
const breakpointL = Number.parseInt(breakpointsJson['--breakpoint-l'], 10);
const rootContainerTokens = containersJson[rootQuery];

const tokensByBreakpoint = containersJson as unknown as Record<
  string,
  Record<string, TokenValues>
>;

const baseContainerTokens = Object.fromEntries(
  Object.entries(rootContainerTokens).slice(0, 8)
);

const semanticContainerTokens = Object.fromEntries(
  Object.entries(rootContainerTokens).filter(([key]) =>
    key.startsWith('--semantic-responsive')
  )
);

const semanticTokenBreakpoints = [
  { label: 'Mobile', query: rootQuery, minWidth: 320 },
  {
    label: 'Breakpoint XS',
    query: `@media (width >= ${breakpointXS}px)`,
    minWidth: breakpointXS,
  },
  {
    label: 'Breakpoint S',
    query: `@media (width >= ${breakpointS}px)`,
    minWidth: breakpointS,
  },
  {
    label: 'Breakpoint M',
    query: `@media (width >= ${breakpointM}px)`,
    minWidth: breakpointM,
  },
  {
    label: 'Breakpoint L',
    query: `@media (width >= ${breakpointL}px)`,
    minWidth: breakpointL,
  },
];

const getBreakpointLabel = (
  label: string,
  index: number,
  nextIndex?: number
): string => {
  const breakpoint = semanticTokenBreakpoints[index];
  const nextBreakpoint =
    nextIndex === undefined ? undefined : semanticTokenBreakpoints[nextIndex];
  const range =
    nextBreakpoint === undefined
      ? `${breakpoint.minWidth}px +`
      : `${breakpoint.minWidth} - ${nextBreakpoint.minWidth - 1}px`;
  const breakpointLabel =
    nextBreakpoint === undefined
      ? `${label} og opp`
      : nextIndex === index + 2
        ? label === 'Mobile'
          ? 'Mobil / Breakpoint XS'
          : `${label} - ${semanticTokenBreakpoints[index + 1].label}`
        : label;

  return `${breakpointLabel} (${range})`;
};

export const ContainerTokensOverview = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Paragraph variant={'ingress'} hasSpacing>
        {
          'Containere brukes til å styre bredden til layout-elementer som tekst, komponenter og innholdskort. Noen containere er faste verdier, andre er dynamiske og justeres basert på skjermstørrelse.'
        }
      </Paragraph>

      <Card color={'graphite'} spacing={'m'} className={styles.card}>
        <Card.Header>
          <Heading as={'h3'}>{'Baseverdier'}</Heading>
        </Card.Header>
        <Card.Content classNames={{ children: styles.cardContent }}>
          <ul className={styles.list}>
            {Object.entries(baseContainerTokens).map(([key, value]) => (
              <li key={key} className={styles.listItem}>
                <span className={styles.listItemKey}>{key}</span>
                <span className={styles.listItemValue}>{value}</span>
                <CopyButton
                  copyText={key}
                  title={`Kopier ${key}`}
                  copiedTitle={`${key} er kopiert`}
                  errorTitle={`Kunne ikke kopiere ${key}`}
                  size={'small'}
                />
              </li>
            ))}
          </ul>
        </Card.Content>
      </Card>

      {Object.entries(semanticContainerTokens).map(([key, value]) => {
        const imagePath = `/images/${key.replace('--semantic-', '')}.svg`;
        const breakpointEntries = semanticTokenBreakpoints
          .map(({ label, query }, index) => ({
            index,
            label,
            breakpointValue:
              query === rootQuery
                ? value
                : tokensByBreakpoint[query]?.[mediaRootQuery]?.[key],
          }))
          .filter(({ breakpointValue }) => breakpointValue !== undefined);

        return (
          <Card key={key} spacing={'m'} className={styles.card}>
            <Card.Header
              rightContent={
                imagePath ? (
                  <PublicImage
                    src={imagePath}
                    alt={''}
                    className={styles.icon}
                  />
                ) : undefined
              }
            >
              <div>
                <Heading as={'h3'}>{key}</Heading>
                <div className={styles.tokenGroupLabel}>
                  {key.includes('internal') ? 'Internt' : 'Publikum, internt'}
                  <CopyButton
                    copyText={key}
                    title={`Kopier ${key}`}
                    copiedTitle={`${key} er kopiert`}
                    errorTitle={`Kunne ikke kopiere ${key}`}
                  />
                </div>
              </div>
            </Card.Header>
            <Card.Content classNames={{ children: styles.cardContent }}>
              <DescriptionList
                className={styles.descriptionList}
                isDescriptionVerticalOnMobile
              >
                {breakpointEntries.map(
                  ({ index, label, breakpointValue }, entryIndex) => (
                    <DescriptionList.Element
                      key={`${key}-${label}`}
                      term={getBreakpointLabel(
                        label,
                        index,
                        breakpointEntries[entryIndex + 1]?.index
                      )}
                    >
                      <span>{breakpointValue}</span>
                    </DescriptionList.Element>
                  )
                )}
              </DescriptionList>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};
