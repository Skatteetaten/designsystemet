import { JSX, useState } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { OpenClose } from '@skatteetaten/ds-collections';
import { ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { Footer, TopBannerExternal, type User } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './feilside.module.scss';

const loggedInUser: User = {
  role: 'meg',
  name: 'Ola Nordmann',
};

export default function InnloggetTemplate(): JSX.Element {
  const [user, setUser] = useState<User | undefined>(loggedInUser);

  return (
    <>
      <TopBannerExternal
        user={user}
        onLogInClick={() => setUser(loggedInUser)}
        onLogOutClick={() => setUser(undefined)}
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            onLogOutClick={() => setUser(undefined)}
          />
        )}
      </TopBannerExternal>
      <main className={styles.mainContent}>
        <section className={styles.article}>
          <div>
            <Heading as={'h1'} className={styles.heading}>
              {'Siden finnes ikke'}
            </Heading>
          </div>
          <Paragraph variant={'ingress'} hasSpacing>
            {
              'Beklager, denne siden kan være flyttet eller slettet, eller det er en feil i lenken.'
            }
          </Paragraph>

          <Link
            svgPath={ArrowForwardSVGpath}
            href={'https://skatt.skatteetaten.no/web/minside/'}
          >
            {'Gå til Min Side'}
          </Link>

          <OpenClose
            size={'small'}
            title={'Teknisk feilmelding'}
            className={styles.openClose}
          >
            {
              'Her kan man skrive en tekst av mer teknisk art, dersom noen i publikum skulle trenge å lese den. «Noen har trukket ut kontakten til en server, så vi har hatt litt trøbbel med å starte alt på nytt. Ekspertene er på saken.'
            }
          </OpenClose>
        </section>
      </main>
      <Footer />
    </>
  );
}
