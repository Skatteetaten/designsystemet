import {
  type JSX,
  type MouseEvent,
  useActionState,
  useCallback,
  useRef,
  useState,
} from 'react';

import {
  Button,
  InlineButton,
  Link,
  LinkGroup,
} from '@skatteetaten/ds-buttons';
import { Card, DescriptionList, Panel } from '@skatteetaten/ds-content';
import {
  dsI18n,
  formatOrganisationNumber,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import {
  AddSVGpath,
  ArrowBackSVGpath,
  DeleteSVGpath,
  EditSVGpath,
  Icon,
  KronerSVGpath,
  PrintSVGpath,
} from '@skatteetaten/ds-icons';
import {
  TopBannerExternal,
  type User,
  type TopBannerExternalHandle,
  Footer,
} from '@skatteetaten/ds-layout';
import {
  type Business,
  Modal,
  type Paginated,
  type Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './RepeterendeFelter.module.css';
import stylesAsString from './RepeterendeFelter.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';

export default {
  title: 'Sidetyper/Ekstern/Repeterende felter',
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

export function RepeterendeFelter(): JSX.Element {
  const rolePickerModalRef = useRef<HTMLDialogElement>(null);
  const editModalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);

  const firstInputInEditModalRef = useRef<HTMLInputElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const [editCard, setEditCard] = useState<RepeatingCardContent | null>(null);
  const [nextId, setNextId] = useState(3);

  const isMobile = !useMediaQuery('(min-width: 480px)');

  const hoppOgSprettBarnehage: Business = {
    name: 'Hopp Og Sprett Barnehage',
    organizationNumber: '123456789',
    unitType: 'Barnehage',
    type: 'Organization',
  };

  const [user, setUser] = useState<User | undefined>({
    name: hoppOgSprettBarnehage.name,
    role: 'virksomhet',
  });

  type RepeatingCardContent = {
    id: number;
    navn: string;
    adresse: string;
    postnummer: string;
    poststed: string;
    rolle: string;
  };

  const defaultCards: Array<RepeatingCardContent> = [
    {
      id: 1,
      navn: 'McRonald Hansen',
      adresse: 'Adresseveien 1',
      postnummer: '1314',
      poststed: 'Kolbotn',
      rolle: 'Styreleder',
    },
    {
      id: 2,
      navn: 'Hans McRonald',
      adresse: 'Adresseveien 2',
      postnummer: '1314',
      poststed: 'Kolbotn',
      rolle: 'Styremedlem',
    },
  ];

  const [cards, setCards] = useState<RepeatingCardContent[]>(
    () => defaultCards
  );

  type EditActionState = {
    success: boolean;
    error?: string;
  };

  const [, editAction, isEditPending] = useActionState(
    async (
      _prevState: EditActionState,
      formData: FormData
    ): Promise<EditActionState> => {
      if (!editCard) {
        return { success: false, error: 'Ingen kort å redigere' };
      }

      const updatedCard = {
        id: editCard.id,
        navn: formData.get('navn') as string,
        adresse: formData.get('adresse') as string,
        postnummer: formData.get('postnummer') as string,
        poststed: editCard.poststed,
        rolle: formData.get('rolle') as string,
      };

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === updatedCard.id ? updatedCard : card
        )
      );

      editModalRef.current?.close();
      setEditCard(null);

      requestAnimationFrame(() => {
        const cardElement = cardRefs.current.get(updatedCard.id);
        if (cardElement) {
          cardElement.focus();
        }
      });

      return { success: true };
    },
    { success: false }
  );

  const setCardRef = useCallback(
    (id: number) =>
      (element: HTMLDivElement | null): void => {
        if (element) {
          cardRefs.current.set(id, element);
        } else {
          cardRefs.current.delete(id);
        }
      },
    []
  );

  const handleEdit = (card: RepeatingCardContent): void => {
    setEditCard({ ...card });
    editModalRef.current?.showModal();

    requestAnimationFrame(() => {
      firstInputInEditModalRef.current?.focus();
    });
  };

  const addCardAction = (): void => {
    const newCard: RepeatingCardContent = {
      id: nextId,
      navn: `Ny person ${nextId}`,
      adresse: `Adresseveien ${nextId}`,
      postnummer: '0000',
      poststed: 'Sted',
      rolle: 'Rolle',
    };

    setCards((prevCards) => [...prevCards, newCard]);

    requestAnimationFrame(() => {
      const cardElement = cardRefs.current.get(nextId);
      if (cardElement) {
        cardElement.focus();
      }
    });
    setNextId(nextId + 1);
  };

  const handleCancelEdit = (): void => {
    const cardId = editCard?.id;
    editModalRef.current?.close();
    setEditCard(null);

    if (cardId) {
      requestAnimationFrame(() => {
        const cardElement = cardRefs.current.get(cardId);
        if (cardElement) {
          cardElement.focus();
        }
      });
    }
  };

  const deleteCardAction = (cardId: number): void => {
    const cardIndex = cards.findIndex((card) => card.id === cardId);
    const remainingCards = cards.filter((card) => card.id !== cardId);

    setCards(remainingCards);

    requestAnimationFrame(() => {
      if (remainingCards.length === 0) {
        headingRef.current?.focus();
      } else {
        let targetCardId: number;

        if (cardIndex > 0) {
          targetCardId = remainingCards[cardIndex - 1].id;
        } else {
          targetCardId = remainingCards[0].id;
        }

        const targetCardElement = cardRefs.current.get(targetCardId);
        if (targetCardElement) {
          targetCardElement.focus();
        }
      }
    });
  };

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        firstColumn={
          <LinkGroup>
            <LinkGroup.Link
              href={'#storybook-root'}
              onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}
            >
              {'Skatt'}
            </LinkGroup.Link>
            <LinkGroup.Link
              href={'#storybook-root'}
              onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}
            >
              {'Avgift'}
            </LinkGroup.Link>
          </LinkGroup>
        }
        user={user}
        onLanguageClick={(e: MouseEvent<HTMLButtonElement>): void => {
          void dsI18n.changeLanguage(langToLocale[e.currentTarget.lang]);
        }}
        onLogInClick={(): void => rolePickerModalRef.current?.showModal()}
        onLogOutClick={(): void => setUser(undefined)}
        onUserClick={(): void => rolePickerModalRef.current?.showModal()}
      />
      <RolePicker
        ref={rolePickerModalRef}
        me={
          {
            name: 'Knuslete Foxtrot',
            personId: '12345678910',
            type: 'Person',
          } satisfies Person
        }
        businesses={
          {
            list: [hoppOgSprettBarnehage],
            total: 1,
          } satisfies Paginated<Business>
        }
        onEntitySelect={async () => {
          setUser({
            name: hoppOgSprettBarnehage.name,
            role: 'virksomhet',
          });
          rolePickerModalRef.current?.close();
        }}
      />
      <main className={styles.mainExternal} tabIndex={-1}>
        <div className={styles.miniNav}>
          <Link href={'#'} svgPath={ArrowBackSVGpath}>
            {'Til Min side'}
          </Link>
          <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
        </div>
        <div className={styles.article}>
          <Heading as={'h1'} level={1} hasSpacing>
            {'Skjema eller oppgave'}
          </Heading>
          <DescriptionList className={styles.desciptionList} hasSpacing>
            <DescriptionList.Element term={'Virksomhetens navn'}>
              {hoppOgSprettBarnehage.name}
            </DescriptionList.Element>
            <DescriptionList.Element
              term={isMobile ? 'Organisasjons-nummer' : 'Organisasjonsnummer'}
            >
              {formatOrganisationNumber(
                hoppOgSprettBarnehage.organizationNumber
              )}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Inntektsår'}>
              {'2023'}
            </DescriptionList.Element>
          </DescriptionList>
        </div>
        <div className={styles.article}>
          <div
            ref={headingRef}
            className={styles.tabIndexNoOutline}
            tabIndex={-1}
          >
            <Heading as={'h2'} level={2} hasSpacing>
              {'Overskift/kategori'}
            </Heading>
          </div>
          <ul className={styles.repeatingFields}>
            {cards.length === 0 ? (
              <li>
                <Paragraph>{'Ingen personer i listen.'}</Paragraph>
              </li>
            ) : (
              cards.map((card) => (
                <li key={card.id}>
                  <Card key={card.id} spacing={'m'} color={'graphite'}>
                    <Card.Header>
                      <div
                        ref={setCardRef(card.id)}
                        className={styles.tabIndexNoOutline}
                        tabIndex={-1}
                      >
                        <Heading as={'h3'} level={3} hasSpacing>
                          {card.navn}
                        </Heading>
                      </div>
                    </Card.Header>
                    <Card.Content className={styles.cardContent}>
                      <DescriptionList
                        descriptionDirection={
                          isMobile ? 'vertical' : 'horizontal'
                        }
                        className={styles.desciptionList}
                      >
                        <DescriptionList.Element term={'Adresse'}>
                          {card.adresse}
                        </DescriptionList.Element>
                        <DescriptionList.Element term={'Postnummer'}>
                          {card.postnummer}
                        </DescriptionList.Element>
                        <DescriptionList.Element term={'Poststed'}>
                          {card.poststed}
                        </DescriptionList.Element>
                        <DescriptionList.Element term={'Rolle'}>
                          {card.rolle}
                        </DescriptionList.Element>
                      </DescriptionList>
                    </Card.Content>
                    <Card.Actions>
                      <InlineButton
                        svgPath={EditSVGpath}
                        onClick={() => handleEdit(card)}
                      >
                        {'Rediger'}
                      </InlineButton>
                      <InlineButton
                        svgPath={DeleteSVGpath}
                        onClick={() => deleteCardAction(card.id)}
                      >
                        {'Slett'}
                      </InlineButton>
                    </Card.Actions>
                  </Card>
                </li>
              ))
            )}
          </ul>
          <Button
            svgPath={AddSVGpath}
            className={styles.addNewButton}
            onClick={addCardAction}
          >
            {'Legg til ny person'}
          </Button>
          <Modal
            ref={editModalRef}
            title={'Rediger person'}
            className={styles.editModal}
          >
            {editCard && (
              <form action={editAction} className={styles.editModalContent}>
                <div>
                  <TextField
                    ref={firstInputInEditModalRef}
                    label={'Navn'}
                    name={'navn'}
                    defaultValue={editCard.navn}
                    hasSpacing
                    required
                  />

                  <TextField
                    label={'Adresse'}
                    name={'adresse'}
                    defaultValue={editCard.adresse}
                    hasSpacing
                    required
                  />
                  <div className={styles.editModalAdressFields}>
                    <TextField
                      label={'Postnummer'}
                      name={'postnummer'}
                      defaultValue={editCard.postnummer}
                      hasSpacing
                      required
                    />
                    <DescriptionList descriptionDirection={'vertical'}>
                      <DescriptionList.Element term={'Poststed'}>
                        {editCard.poststed}
                      </DescriptionList.Element>
                    </DescriptionList>
                  </div>
                  <TextField
                    label={'Rolle'}
                    name={'rolle'}
                    defaultValue={editCard.rolle}
                    hasSpacing
                    required
                  />
                </div>
                <div className={styles.flexStartRow}>
                  <Button type={'submit'} hasSpinner={isEditPending}>
                    {isEditPending ? 'Lagrer...' : 'Lagre'}
                  </Button>
                  <Button variant={'secondary'} onClick={handleCancelEdit}>
                    {'Avbryt'}
                  </Button>
                </div>
              </form>
            )}
          </Modal>
        </div>
        <Panel color={'forest'} className={styles.panel}>
          <div className={styles.panelContent}>
            <Icon svgPath={KronerSVGpath} size={'extraLarge'} />
            <div className={styles.panelContentRigth}>
              <Heading as={'h3'} level={3} hasSpacing>
                {'Foreløpig oppsummering'}
              </Heading>
              <DescriptionList className={styles.desciptionList}>
                <DescriptionList.Element term={'Antall personer'}>
                  {cards.length}
                </DescriptionList.Element>
              </DescriptionList>
            </div>
          </div>
        </Panel>
        <div className={`${styles.flexStartRow} ${styles.article}`}>
          <Button>{'Send inn'}</Button>
          <Button variant={'secondary'}>{'Avbryt'}</Button>
        </div>
        <div className={styles.saveDeleteOrEditLater}>
          <div className={`${styles.flexStartRow} ${styles.article}`}>
            <InlineButton>{'Lagre og fortsett senere'}</InlineButton>
            <InlineButton>{'Avbryt og slett'}</InlineButton>
          </div>
        </div>
      </main>
      <Footer
        titleFirstColumn={'Skatteetaten'}
        titleSecondColumn={'Følg oss'}
        secondColumn={
          <LinkGroup color={'white'}>
            <LinkGroup.Link href={'#'}>
              {'Se våre kontoer i sosiale medier'}
            </LinkGroup.Link>
          </LinkGroup>
        }
        titleThirdColumn={'Presse'}
        thirdColumn={
          <>
            <Paragraph hasSpacing>
              {
                'Pressemeldinger, pressekontaker og annen informasjon for journalister.'
              }
            </Paragraph>
            <LinkGroup color={'white'} hasSpacing>
              <LinkGroup.Link href={'#'}>{'Se vårt presserom'}</LinkGroup.Link>
            </LinkGroup>
            <Heading
              as={'h2'}
              level={3}
              className={styles.marginTopL}
              hasSpacing
            >
              {'Bruke data fra Skatteetaten'}
            </Heading>
            <Paragraph hasSpacing>
              {
                'Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester.'
              }
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Hvordan få tilgang til data'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
      >
        <Footer.LinkFirstColumn href={'#'}>
          {'Jobb i Skatteetaten'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Analyse og rapporter'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Forskning'}
        </Footer.LinkFirstColumn>
        <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
        <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
        <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
        <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
        <Footer.Link href={'#'} isExternal>
          {'Koronatiltak'}
        </Footer.Link>
      </Footer>
    </>
  );
}
