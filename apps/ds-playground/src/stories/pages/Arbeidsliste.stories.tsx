import { useState, useMemo, type JSX } from 'react';

import { linkTo } from '@storybook/addon-links';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { OpenClose, Tabs } from '@skatteetaten/ds-collections';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';
import { DatePicker, SearchField, Select } from '@skatteetaten/ds-forms';
import {
  AddSVGpath,
  ArrowForwardSVGpath,
  BellIcon,
  CancelSVGpath,
  HelpFilledSVGpath,
  HistorySVGpath,
  PauseOutlineIcon,
} from '@skatteetaten/ds-icons';
import { TopBannerInternal } from '@skatteetaten/ds-layout';
import { Breadcrumbs, Pagination } from '@skatteetaten/ds-navigation';
import { SortState, Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import stylesAsString from './Arbeidsliste.module.scss?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';

import styles from './Arbeidsliste.module.scss';

export default {
  title: 'Sidetyper/Intern/Arbeidsliste',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      source: {
        transform: includeStylesTransform(stylesAsString),
      },
    },
  },
};

const sakstypeOptions = [
  { value: 'utlegg', label: 'Utlegg' },
  { value: 'klage', label: 'Klage' },
];

const arbeidsoppgaveOptions = [
  { value: 'vurderutlegg', label: 'Vurder utlegg' },
  { value: 'besluttutlegg', label: 'Beslutt utlegg' },
  { value: 'vurderunnlattvarsling', label: 'Vurder unnlatt varsling' },
  { value: 'vurderklage', label: 'Vurder klage' },
  { value: 'behandleklage', label: 'Behandle klage' },
];

const kategoriOptions = [
  'Mva-melding',
  'Meldingskontroll',
  'Annen meldingskontroll',
];
const oppgaveOptions = [
  'Vurdere levert mva-melding',
  'Vurdere meldingskontroll',
  'Tilfeldig meldingskontroll',
  'Beslutte meldingskontroll',
];

const saksbehandlere = [
  'Siri Saksbehandler',
  'Ole Samhandlings Arena',
  'Krystall Pepsi Johnsen',
];

const dataTilgjengeligeOppgaver = Array.from({ length: 10 }, (_, i) => {
  const fristPassertOptions = ['Ja', 'Nei'];
  const fristPassert =
    fristPassertOptions[Math.floor(Math.random() * fristPassertOptions.length)];
  const getIcon = (): JSX.Element | null => {
    if (fristPassert === 'Ja') return <BellIcon />;
    return Math.random() > 0.5 ? <PauseOutlineIcon /> : null;
  };
  return {
    icon: getIcon(),
    antall: Math.floor(Math.random() * 20) + 1,
    fristPassert: fristPassert,
    kategori:
      kategoriOptions[Math.floor(Math.random() * kategoriOptions.length)],
    arbeidsoppgave:
      oppgaveOptions[Math.floor(Math.random() * oppgaveOptions.length)],
  };
});

const data = Array.from({ length: 120 }, (_, i) => {
  const saldoer = ['NOK 30 000', 'NOK 1 500', 'NOK 500 000'];
  const fnr = ['010101 12345', '151375 98765', '231590 12345'];
  const navn = [
    'WINNIFRED ARCHIPAELAGO JENSEN',
    'ANNA HØST UTSTILLINGSEN',
    'HEINRICH VON SCHELLFAHRER',
  ];

  const dag = Math.floor(Math.random() * 28) + 1;
  const mnd = Math.floor(Math.random() * 12) + 1;
  const dato = new Date(2023, mnd - 1, dag);

  return {
    frist: dato,
    opprettet: dato,
    sakstype:
      sakstypeOptions[Math.floor(Math.random() * sakstypeOptions.length)].label,
    arbeidsoppgave:
      arbeidsoppgaveOptions[
        Math.floor(Math.random() * arbeidsoppgaveOptions.length)
      ].label,
    saldo: saldoer[Math.floor(Math.random() * saldoer.length)],
    fnr: fnr[Math.floor(Math.random() * fnr.length)],
    navn: navn[Math.floor(Math.random() * navn.length)],
    saksbehandlere:
      saksbehandlere[Math.floor(Math.random() * saksbehandlere.length)],
  };
});

export const Arbeidsliste = (): JSX.Element => {
  const isMobile = !useMediaQuery('(min-width: 480px)');
  const [visFilter, setVisFilter] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    fristFra: null as Date | null,
    fristTil: null as Date | null,
    sakstype: '',
    arbeidsoppgave: '',
  });
  const antallAktiveFilter = Object.values(filters).filter(Boolean).length;

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const minDate = new Date(2023, 0, 1);
  const maxDate = new Date(2023, 11, 31);

  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];
    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  const sakstypeMap = useMemo(
    () =>
      sakstypeOptions.reduce(
        (acc, option) => {
          acc[option.value] = option.label;
          return acc;
        },
        {} as Record<string, string>
      ),
    []
  );

  const arbeidsoppgaveMap = useMemo(
    () =>
      arbeidsoppgaveOptions.reduce(
        (acc, option) => {
          acc[option.value] = option.label;
          return acc;
        },
        {} as Record<string, string>
      ),
    []
  );

  const filteredData = sortedData.filter((item) => {
    if (filters.fristFra && item.frist < filters.fristFra) {
      return false;
    }
    if (filters.fristTil && item.frist > filters.fristTil) {
      return false;
    }

    if (filters.sakstype) {
      return item.sakstype === sakstypeMap[filters.sakstype];
    }

    if (filters.arbeidsoppgave) {
      return item.arbeidsoppgave === arbeidsoppgaveMap[filters.arbeidsoppgave];
    }

    return true;
  });

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleClearFilters = (): void => {
    setFilters({
      fristFra: null,
      fristTil: null,
      sakstype: '',
      arbeidsoppgave: '',
    });
  };

  return (
    <>
      <TopBannerInternal title={'Navn på løsning'} logoHref={'/'}>
        <SearchField
          placeholder={'Søk etter saksnr, fnr eller orgnr'}
          label={
            'Søk etter saksnummer, fødselsnummer eller organisasjonsnummer'
          }
          className={styles.searchField}
        />
        <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
          {'Hjelp'}
        </InlineButton>
      </TopBannerInternal>
      <div className={styles.commandBar}>
        <Breadcrumbs>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Arbeidsliste'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
        <div className={styles.buttonGroup}>
          <InlineButton svgPath={AddSVGpath}>{'Opprett sak'}</InlineButton>
          <InlineButton svgPath={HistorySVGpath}>
            {'Mine siste oppslag'}
          </InlineButton>
        </div>
      </div>
      <main className={styles.main}>
        <Tabs defaultValue={'mineoppgaver'} isMultiline hasBorder>
          <Tabs.List>
            <Tabs.Tab
              value={'mineoppgaver'}
            >{`Mine oppgaver (${data.length})`}</Tabs.Tab>
            <Tabs.Tab value={'tilgjengeligeoppgaver'}>
              {'Tilgjengelige oppgaver (10)'}
            </Tabs.Tab>
            <Tabs.Tab value={'andresoppgaver'}>
              {'Andres oppgaver (10)'}
            </Tabs.Tab>
            <Tabs.Tab value={'minefullfoerteoppgaver'}>
              {'Mine fullførte oppgaver (10)'}
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value={'mineoppgaver'}>
            <OpenClose
              className={styles.openClose}
              title={
                visFilter
                  ? `Skjul filter ${antallAktiveFilter > 0 ? `(${antallAktiveFilter} aktive)` : ''}`
                  : `Vis filter ${antallAktiveFilter > 0 ? `(${antallAktiveFilter} aktive)` : ''}`
              }
              isExpanded={visFilter}
              onClick={() => setVisFilter(!visFilter)}
            >
              {!isMobile && antallAktiveFilter > 0 && (
                <InlineButton
                  className={styles.clearFilterButton}
                  svgPath={CancelSVGpath}
                  onClick={handleClearFilters}
                >
                  {'Tilbakestill filter'}
                </InlineButton>
              )}
              <div className={styles.filterGroup}>
                <DatePicker
                  classNames={{ dateContainer: styles.datePicker }}
                  label={'Frist fra (dd.mm.åååå)'}
                  minDate={minDate}
                  maxDate={maxDate}
                  value={filters.fristFra}
                  onSelectDate={(date) =>
                    setFilters({ ...filters, fristFra: date })
                  }
                />
                <DatePicker
                  classNames={{ dateContainer: styles.datePicker }}
                  label={'Frist til (dd.mm.åååå)'}
                  minDate={minDate}
                  maxDate={maxDate}
                  value={filters.fristTil}
                  onSelectDate={(date) =>
                    setFilters({ ...filters, fristTil: date })
                  }
                />
                <Select
                  className={styles.select}
                  label={'Sakstype'}
                  value={filters.sakstype}
                  onChange={(e) => {
                    setFilters({ ...filters, sakstype: e.target.value });
                  }}
                >
                  {sakstypeOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
                <Select
                  className={styles.select}
                  label={'Arbeidsoppgave'}
                  value={filters.arbeidsoppgave}
                  onChange={(e) => {
                    setFilters({ ...filters, arbeidsoppgave: e.target.value });
                    setCurrentPage(1);
                  }}
                >
                  {arbeidsoppgaveOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              {isMobile && antallAktiveFilter > 0 && (
                <InlineButton
                  className={styles.clearFilterButtonMobile}
                  svgPath={CancelSVGpath}
                  onClick={handleClearFilters}
                >
                  {'Tilbakestill filter'}
                </InlineButton>
              )}
            </OpenClose>
            <Table
              caption={'Dette er en tabell med arbeidsoppgaver'}
              sortState={sortState}
              setSortState={setSortState}
              hasFullWidth
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    className={styles.noWrap}
                    scope={'col'}
                    sortKey={'frist'}
                    isSortable
                  >
                    {'Frist'}
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    className={styles.noWrap}
                    scope={'col'}
                    sortKey={'opprettet'}
                    isSortable
                  >
                    {'Opprettet'}
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    className={styles.noWrap}
                    sortKey={'sakstype'}
                    isSortable
                  >
                    {'Sakstype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    className={styles.noWrap}
                    scope={'col'}
                    sortKey={'arbeidsoppgave'}
                    isSortable
                  >
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} alignment={'right'}>
                    {'Saldo'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} colSpan={2}>
                    {'Gjelder'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredData.length > 0 ? (
                  filteredData
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map((item, i) => {
                      return (
                        <Table.Row key={i}>
                          <Table.DataCell>
                            {formatDate(item.frist)}
                          </Table.DataCell>
                          <Table.DataCell>
                            {formatDate(item.opprettet)}
                          </Table.DataCell>
                          <Table.DataCell>{item.sakstype}</Table.DataCell>
                          <Table.DataCell>
                            <Link
                              href={'#'}
                              onClick={(e) => {
                                e.preventDefault();
                                linkTo(
                                  'Sidetyper/Intern/Saksvisning',
                                  'Saksvisning'
                                )();
                              }}
                            >
                              {item.arbeidsoppgave}
                            </Link>
                          </Table.DataCell>
                          <Table.DataCell
                            className={styles.noWrap}
                            alignment={'right'}
                          >
                            {item.saldo}
                          </Table.DataCell>
                          <Table.DataCell>
                            <Link className={styles.noWrap} href={'#'}>
                              {item.fnr}
                            </Link>
                          </Table.DataCell>
                          <Table.DataCell>
                            <Link href={'#'}>{item.navn}</Link>
                          </Table.DataCell>
                        </Table.Row>
                      );
                    })
                ) : (
                  <Table.Row>
                    <Table.DataCell colSpan={6}>
                      <Paragraph>
                        {
                          'Vi fant dessverre ingen treff med dette filteret. Prøv å filtrere med en større til/fra-dato eller annen sakstype.'
                        }
                      </Paragraph>
                    </Table.DataCell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
            <Pagination
              pageSize={pageSize}
              totalItems={filteredData.length}
              onChange={(page) => setCurrentPage(page)}
            />
          </Tabs.Panel>
          <Tabs.Panel value={'tilgjengeligeoppgaver'}>
            <OpenClose className={styles.openClose} title={'Vis filter'}>
              <Paragraph>
                {'Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver'}
              </Paragraph>
            </OpenClose>
            <Table
              caption={'Dette er en tabell med tilgjengelige oppgaver'}
              hasFullWidth
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}></Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>{'Antall'}</Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Frist passert'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Kategori'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {dataTilgjengeligeOppgaver.map((item, i) => {
                  return (
                    <Table.Row key={i}>
                      <Table.DataCell>{item.icon}</Table.DataCell>
                      <Table.DataCell>{item.antall}</Table.DataCell>
                      <Table.DataCell>{item.fristPassert}</Table.DataCell>
                      <Table.DataCell>{item.kategori}</Table.DataCell>
                      <Table.DataCell>{item.arbeidsoppgave}</Table.DataCell>
                      <Table.DataCell alignment={'right'}>
                        <InlineButton
                          svgPath={ArrowForwardSVGpath}
                          iconPosition={'right'}
                        >
                          {'Ta oppgave'}
                        </InlineButton>
                      </Table.DataCell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel value={'andresoppgaver'}>
            <OpenClose className={styles.openClose} title={'Vis filter'}>
              <Paragraph>
                {'Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver'}
              </Paragraph>
            </OpenClose>
            <Table
              caption={'Dette er en tabell med andres oppgaver'}
              hasFullWidth
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}>
                    {'Opprettet'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Sakstype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} colSpan={2}>
                    {'Gjelder'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Saksbehandler'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredData.slice(1, 11).map((item, i) => {
                  return (
                    <Table.Row key={i}>
                      <Table.DataCell>
                        {formatDate(item.opprettet)}
                      </Table.DataCell>
                      <Table.DataCell>{item.sakstype}</Table.DataCell>
                      <Table.DataCell>
                        <Link
                          href={'#'}
                          onClick={(e) => {
                            e.preventDefault();
                            linkTo(
                              'Sidetyper/Intern/Saksvisning',
                              'Saksvisning'
                            )();
                          }}
                        >
                          {item.arbeidsoppgave}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link className={styles.noWrap} href={'#'}>
                          {item.fnr}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link href={'#'}>{item.navn}</Link>
                      </Table.DataCell>
                      <Table.DataCell>{item.saksbehandlere}</Table.DataCell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel value={'minefullfoerteoppgaver'}>
            <OpenClose className={styles.openClose} title={'Vis filter'}>
              <Paragraph>
                {'Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver'}
              </Paragraph>
            </OpenClose>
            <Table
              caption={'Dette er en tabell med andres oppgaver'}
              hasFullWidth
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}>
                    {'Opprettet'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Fullført'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Sakstype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} colSpan={2}>
                    {'Gjelder'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredData.slice(1, 11).map((item, i) => {
                  return (
                    <Table.Row key={i}>
                      <Table.DataCell>
                        {formatDate(item.opprettet)}
                      </Table.DataCell>
                      <Table.DataCell>{formatDate(item.frist)}</Table.DataCell>
                      <Table.DataCell>{item.sakstype}</Table.DataCell>
                      <Table.DataCell>
                        <Link
                          href={'#'}
                          onClick={(e) => {
                            e.preventDefault();
                            linkTo(
                              'Sidetyper/Intern/Saksvisning',
                              'Saksvisning'
                            )();
                          }}
                        >
                          {item.arbeidsoppgave}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link className={styles.noWrap} href={'#'}>
                          {item.fnr}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link href={'#'}>{item.navn}</Link>
                      </Table.DataCell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Tabs.Panel>
        </Tabs>
      </main>
    </>
  );
};
