import { type MouseEvent, type ReactElement, useRef, useState } from 'react';

import { Button, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import {
  dsI18n,
  formatOrganisationNumber,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  FavoriteIcon,
  LockOutlineSVGpath,
  PersonIcon,
} from '@skatteetaten/ds-icons';
import {
  RoleBanner,
  TopBannerExternal,
  type TopBannerExternalHandle,
  type User,
} from '@skatteetaten/ds-layout';
import { RolePicker } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import {
  businesses,
  loggedInLinks,
  me,
  pageLinks,
  people,
  personLinks,
  searchSuggestions,
  virksomhetLinks,
} from './data';

import styles from './TopBannerExternalExample.module.scss';

export default function TopBannerExternalWithUserMenuExample(): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();

  const formatDateOfBirth = (dateOfBirth?: Date): string =>
    dateOfBirth
      ? dateOfBirth.toLocaleDateString('nb-NO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : '01.01.2001';

  const isDesktop = useMediaQuery('(min-width: 640px)');

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        classNames={{
          columns: styles.columns,
        }}
        firstColumn={
          user ? (
            <Card spacing={'s'}>
              <Card.Content>
                <Heading as={'h2'} level={3}>
                  {user.role === 'meg' && (
                    <FavoriteIcon className={styles.marginRightS} />
                  )}
                  {user.role === 'andre' && (
                    <AccountMultipleIcon className={styles.marginRightS} />
                  )}
                  {user.role === 'virksomhet' && (
                    <BriefcaseIcon className={styles.marginRightS} />
                  )}

                  {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                </Heading>
                <Paragraph variant={'ingress'}>
                  {'Se, endre og send inn'}
                </Paragraph>
                <ul className={styles.linkWrapper}>
                  {(user.role === 'virksomhet'
                    ? virksomhetLinks
                    : loggedInLinks
                  ).map((link, index) => (
                    <li key={index} className={styles.marginBottomS}>
                      <Link
                        href={link.href}
                        onClick={(e): void => {
                          e.preventDefault();
                          topBannerRef.current?.closeMenu?.();
                        }}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ) : (
            <>
              <Heading as={'h2'} level={3} className={styles.flex}>
                <PersonIcon
                  className={styles.marginRightS}
                  size={'largePlus'}
                />

                {'Min side'}
              </Heading>
              <Paragraph className={styles.marginBottomS}>
                {'Se dine oppgaver og oversikt. Les og svar på meldinger.'}
              </Paragraph>
              <Button
                svgPath={LockOutlineSVGpath}
                onClick={() => modalRef.current?.showModal()}
              >
                {'Logg inn'}
              </Button>
            </>
          )
        }
        secondColumn={
          <>
            <Heading as={'h2'} hasSpacing>
              {'Alle temaer'}
            </Heading>
            <div className={styles.secondColumn}>
              <div>
                <Heading as={'h3'} hasSpacing>
                  <a href={pageLinks.person}>{'For personer'}</a>
                </Heading>
                <LinkGroup className={styles.marginBottomXL}>
                  {personLinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
                <Heading as={'h3'} hasSpacing>
                  <a href={pageLinks.virksomhet}>
                    {'For bedrifter og organisasjoner'}
                  </a>
                </Heading>
                <LinkGroup className={styles.marginBottomXL}>
                  {virksomhetLinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
              </div>
              <div>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={pageLinks.rettskilder}>{'Rettskilder'}</a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={pageLinks.presse}>{'Presse'}</a>
                </Heading>
                <Heading as={'h3'} level={4} className={styles.marginBottomXL}>
                  <a href={pageLinks.samarbeidspartnere}>
                    {'Samarbeidspartner'}
                  </a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={pageLinks.kontakt}>{'Kontakt oss'}</a>
                </Heading>
              </div>
            </div>
          </>
        }
        searchContent={
          <>
            <Paragraph className={styles.marginBottomS}>
              {'Dette har andre søkt på:'}
            </Paragraph>
            <LinkGroup>
              {searchSuggestions.map((suggestion) => (
                <LinkGroup.Link key={suggestion} href={'#'}>
                  {suggestion}
                </LinkGroup.Link>
              ))}
            </LinkGroup>
          </>
        }
        user={user}
        onLogOutClick={isDesktop ? (): void => setUser(undefined) : undefined}
        onLanguageClick={handleLanguageClick}
        onLogInClick={
          !user ? (): void => modalRef.current?.showModal() : undefined
        }
        onSearch={(e, value) => {
          alert(`søker etter ${value}`);
        }}
        onSearchClick={(e, value) => {
          alert(`søker etter ${value}`);
        }}
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => modalRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      {user && user.role !== 'meg' && (
        <RoleBanner
          user={{
            name: user.name,
            role: user.role,
            identifier:
              user.role === 'virksomhet'
                ? formatOrganisationNumber(user.orgnr ?? '123456789')
                : formatDateOfBirth(user.person?.dateOfBirth),
          }}
        />
      )}
      <RolePicker
        ref={modalRef}
        me={me}
        people={people}
        businesses={businesses}
        onEntitySelect={async (entity) => {
          let role: User['role'];

          if (entity.name === me.name) {
            role = 'meg';
          } else if (entity.type === 'Organization') {
            role = 'virksomhet';
          } else {
            role = 'andre';
          }

          setUser({
            role: role,
            name: entity.name,
          });
          modalRef.current?.close();
        }}
      />
    </>
  );
}
