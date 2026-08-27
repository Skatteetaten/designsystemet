import { JSX } from 'react';

import { IconButton, Link } from '@skatteetaten/ds-buttons';
import { Accordion } from '@skatteetaten/ds-collections';
import { DescriptionList } from '@skatteetaten/ds-content';
import {
  AccountMultipleSVGpath,
  ChatBubbleOutlineSVGpath,
  CompanySVGpath,
  CopySVGpath,
  DescriptionSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';

export default function AccordionThemeIconExample(): JSX.Element {
  return (
    <Accordion id={'virksomhet'} size={'small'}>
      <Accordion.Item
        title={'987 654 321\nStødig Sjappe 1'}
        svgPath={CompanySVGpath}
      >
        <DescriptionList>
          <DescriptionList.Element term={'Virksomhetsnavn'}>
            {'Stødig Sjappe 1'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Organisasjons-\nnummer'}>
            {'999 999 999'}
            <IconButton
              svgPath={CopySVGpath}
              title={'Kopier organisasjonsnummeret'}
              size={'small'}
              onClick={() => {
                navigator.clipboard.writeText('999999999');
              }}
            />
          </DescriptionList.Element>
          <DescriptionList.Element term={'Telefonnummer'}>
            {'+47 99 99 99 99'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Forretningsadresse'}>
            <div>{'Norges vei 1'}</div>
            <div>{'4878 Grimstad'}</div>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Status'}>
            <Tag color={'burgundy'}>{'Konkurs 27.11.24'}</Tag>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Org.form'}>
            {'Aksjeselskap'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Næringskode'}>
            {'65.102'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Virksomhetsnavn'}>
            {'Stødig Sjappe 1'}
          </DescriptionList.Element>
          <Link href={'#'}>{'Gå til partssoversikt'}</Link>
        </DescriptionList>
      </Accordion.Item>
      <Accordion.Item title={'Roller'} svgPath={AccountMultipleSVGpath}>
        <DescriptionList>
          <DescriptionList.Element term={'Eier'}>
            <Link href={'#eier'}>{'Chad-Henning Krøger'}</Link>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Styreleder'}>
            <Link href={'#'}>{'Fredrik Durst'}</Link>
          </DescriptionList.Element>
        </DescriptionList>
      </Accordion.Item>
      <Accordion.Item
        title={'Alle dokumenter på part'}
        svgPath={DescriptionSVGpath}
      >
        <em>{'Dokumentasjon og historikk her'}</em>
      </Accordion.Item>
      <Accordion.Item
        title={'Alle notater på part'}
        svgPath={ChatBubbleOutlineSVGpath}
      >
        <em>{'Notater fra saksbehandler her'}</em>
      </Accordion.Item>
    </Accordion>
  );
}
