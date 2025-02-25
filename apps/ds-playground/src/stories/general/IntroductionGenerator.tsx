import type { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import illustration from '../../assets/designsystem_illustrasjon.png';

export const IntroductionGenerator = (): JSX.Element => {
  return (
    <>
      <Heading as={'h1'} level={1}>
        {'Skatteetatens designsystem'}
      </Heading>
      <Paragraph hasSpacing>
        <strong>
          {
            'Et system som gjør det effektivt å lage digitale produkter med god kvalitet.'
          }
        </strong>
      </Paragraph>

      <div className={'introImageContainer'}>
        <img alt={''} src={illustration} />
      </div>

      <Paragraph hasSpacing>
        <b>{`version: ${import.meta.env.STORYBOOK_BUILD_VERSION ?? 'develop'}`}</b>
      </Paragraph>

      <Paragraph hasSpacing>{'På disse sidene finner du'}</Paragraph>
      <List hasSpacing>
        <List.Element>
          {'demo av komponenter i Skatteetatens designsystem'}
        </List.Element>
        <List.Element>{'oversikt over ikoner og designtokens'}</List.Element>
        <List.Element>
          {'teknisk grensesnitt (API) til komponentene'}
        </List.Element>
        <List.Element>
          {'testscenarioer, inkludert testområde for språk og responsivitet'}
        </List.Element>
      </List>
      <Paragraph>
        {
          'Denne siden er av teknisk karakter. Designmønster, språk og universell utforming er dokumentert på Skatteetatens Stil og Tone-underside: '
        }
        <Link
          href={'https://www.skatteetaten.no/stilogtone/designsystemet/'}
          target={'_blank'}
        >
          {'Stil og tone: Designe og utvikle'}
        </Link>
        {'.'}
      </Paragraph>
    </>
  );
};
