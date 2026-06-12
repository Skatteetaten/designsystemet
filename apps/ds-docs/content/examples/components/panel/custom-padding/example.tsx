import { Panel } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function PanelCustomPaddingStateExample(): JSX.Element {
  return (
    <>
      <div className={`${styles.semanticArticle} ${styles.bottomSpacing}`}>
        <Heading as={'h1'} level={3}>
          {'Tekst utenfor Panel'}
        </Heading>
        <Paragraph>
          {'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt'}
          {
            'litt fylltekst eller bare surfet rundt pa nettet har antageligvis sett'
          }
          {
            'disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med'
          }
          {'latinske liksomsetninger.'}
        </Paragraph>
      </div>

      <Panel
        classNames={{
          padding: styles.dummyPanelPaddingNoMargin,
        }}
        title={'Innholdsbredde 100%'}
        hasResponsivePadding
      >
        {
          'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt'
        }
        {
          'fylltekst eller bare surfet rundt pa nettet har antageligvis sett disse'
        }
        {
          'ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske'
        }
        {'liksomsetninger.'}
      </Panel>
    </>
  );
}
