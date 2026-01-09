import { useState, useEffect, useMemo, type JSX } from 'react';

import { linkTo } from '@storybook/addon-links';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { OpenClose, Tabs } from '@skatteetaten/ds-collections';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';
import { DatePicker, SearchField, Select } from '@skatteetaten/ds-forms';
import {
  AddSVGpath,
  CancelSVGpath,
  HelpFilledSVGpath,
  HistorySVGpath,
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

export const Arbeidsliste = (): JSX.Element => {
  const isMobile = !useMediaQuery('(min-width: 480px)');
  const [visFilter, setVisFilter] = useState<boolean>(false);
  const [antallAktiveFilter, setAntallAktiveFilter] = useState<number>(0);
  const [fristFra, setFristFra] = useState<Date | null>(null);
  const [fristTil, setFristTil] = useState<Date | null>(null);
  const [sakstype, setSakstype] = useState<string>('');
  const [arbeidsoppgave, setArbeidsoppgave] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const minDate = new Date(2023, 0, 1);
  const maxDate = new Date(2023, 11, 31);

  const data = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => {
        const oppgaver = [
          'Vurder utlegg',
          'Beslutt utlegg',
          'Vurder unnlatt varsling',
        ];
        const saldoer = ['NOK 30 000', 'NOK 1 500', 'NOK 500 000'];
        const fnr = ['010101 12345', '151375 98765', '231590 12345'];
        const navn = [
          'WINNIFRED ARCHIPAELAGO JENSEN',
          'ANNA HOST UTSTILLINGSEN',
          'HEINRICH VON SCHELLFAHRER',
        ];

        // Generate random date in 2023
        const dag = Math.floor(Math.random() * 28) + 1;
        const mnd = Math.floor(Math.random() * 12) + 1;
        const dato = new Date(2023, mnd - 1, dag);

        // Randomize selections
        const oppgaveIndex = Math.floor(Math.random() * oppgaver.length);
        const personIndex = Math.floor(Math.random() * navn.length);
        const saldoIndex = Math.floor(Math.random() * saldoer.length);

        return {
          frist: dato,
          opprettet: dato,
          sakstype: 'Utlegg',
          arbeidsoppgave: oppgaver[oppgaveIndex],
          saldo: saldoer[saldoIndex],
          fnr: fnr[personIndex],
          navn: navn[personIndex],
        };
      }),
    []
  );

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

  const filteredData = sortedData.filter((item) => {
    // Filter by date range
    if (fristFra && item.frist < fristFra) {
      return false;
    }
    if (fristTil && item.frist > fristTil) {
      return false;
    }

    // Filter by arbeidsoppgave
    if (arbeidsoppgave) {
      const arbeidsoppgaveMap: Record<string, string> = {
        vurderutlegg: 'Vurder utlegg',
        besluttutlegg: 'Beslutt utlegg',
        vurderunnlattvarsling: 'Vurder unnlatt varsling',
      };
      return item.arbeidsoppgave === arbeidsoppgaveMap[arbeidsoppgave];
    }

    return true;
  });

  useEffect(() => {
    let count = 0;
    if (fristFra) count++;
    if (fristTil) count++;
    if (sakstype) count++;
    if (arbeidsoppgave) count++;
    setAntallAktiveFilter(count);
  }, [fristFra, fristTil, sakstype, arbeidsoppgave]);

  const handleClearFilters = (): void => {
    setFristFra(null);
    setFristTil(null);
    setSakstype('');
    setArbeidsoppgave('');
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
              {'Tilgjengelige oppgaver'}
            </Tabs.Tab>
            <Tabs.Tab value={'andresoppgaver'}>{'Andres oppgaver'}</Tabs.Tab>
            <Tabs.Tab value={'minefullfoerteoppgaver'}>
              {'Mine fullførte oppgaver'}
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
                  value={fristFra}
                  onSelectDate={(date) => setFristFra(date)}
                />
                <DatePicker
                  classNames={{ dateContainer: styles.datePicker }}
                  label={'Frist til (dd.mm.åååå)'}
                  minDate={minDate}
                  maxDate={maxDate}
                  value={fristTil}
                  onSelectDate={(date) => setFristTil(date)}
                />
                <Select
                  className={styles.select}
                  label={'Sakstype'}
                  value={sakstype}
                  onChange={(e) => {
                    setSakstype(e.target.value);
                  }}
                >
                  <Select.Option value={'utlegg'}>{'Utlegg'}</Select.Option>
                </Select>
                <Select
                  className={styles.select}
                  label={'Arbeidsoppgave'}
                  value={arbeidsoppgave}
                  onChange={(e) => {
                    setArbeidsoppgave(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <Select.Option value={'vurderutlegg'}>
                    {'Vurder utlegg'}
                  </Select.Option>
                  <Select.Option value={'besluttutlegg'}>
                    {'Beslutt utlegg'}
                  </Select.Option>
                  <Select.Option value={'vurderunnlattvarsling'}>
                    {'Vurder unnlatt varsling'}
                  </Select.Option>
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
                      const formatDate = (date: Date): string => {
                        const day = date.getDate().toString().padStart(2, '0');
                        const month = (date.getMonth() + 1)
                          .toString()
                          .padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}.${month}.${year}`;
                      };
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
            {'Innhold for Tilgjengelige oppgaver'}
          </Tabs.Panel>
          <Tabs.Panel value={'andresoppgaver'}>
            {'Innhold for Andres oppgaver'}
          </Tabs.Panel>
          <Tabs.Panel value={'minefullfoerteoppgaver'}>
            {'Innhold for Mine fullførte oppgaver'}
          </Tabs.Panel>
        </Tabs>
      </main>
    </>
  );
};
