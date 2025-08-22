import { type JSX, useActionState, useRef, useState } from 'react';

import { Button, InlineButton, Link } from '@skatteetaten/ds-buttons';
import { Card, DescriptionList, Panel } from '@skatteetaten/ds-content';
import {
  formatOrganisationNumber,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import {
  AddSVGpath,
  ArrowBackSVGpath,
  DeleteSVGpath,
  EditSVGpath,
  KronerIcon,
  PrintSVGpath,
} from '@skatteetaten/ds-icons';
import { type Business, Modal } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './RepeterendeFelter.module.css';
import stylesAsString from './RepeterendeFelter.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

export default {
  title: 'Sidetyper/Ekstern/Repeterende felter',
  decorators: [withPageLayout],
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
  const editModalRef = useRef<HTMLDialogElement>(null);
  const firstInputInEditModalRef = useRef<HTMLInputElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const [editCard, setEditCard] = useState<RepeatingCardContent | null>(null);
  const [nextId, setNextId] = useState(3);

  const isMobile = !useMediaQuery('(min-width: 480px)');

  const hoppOgSprettBarnehage: Business = {
    name: 'Hopp Og Sprett Barnehage',
    organizationNumber: '123456789',
    unitType: 'Barnehage',
    type: 'Organization',
  };

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

  const focusCard = (cardId: number): void => {
    requestAnimationFrame(() => {
      const cardElement = document.querySelector(
        `[data-card-id="${cardId}"]`
      ) as HTMLElement;
      cardElement?.focus();
    });
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

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === updatedCard.id ? updatedCard : card
        )
      );

      editModalRef.current?.close();
      setEditCard(null);

      return { success: true };
    },
    { success: false }
  );

  const handleEdit = (card: RepeatingCardContent): void => {
    setEditCard({ ...card });
    editModalRef.current?.showModal();
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
    focusCard(nextId);
    setNextId(nextId + 1);
  };

  const handleCancelEdit = (): void => {
    editModalRef.current?.close();
    setEditCard(null);
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

        focusCard(targetCardId);
      }
    });
  };

  return (
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
            {formatOrganisationNumber(hoppOgSprettBarnehage.organizationNumber)}
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
                      data-card-id={card.id}
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
      <Panel
        color={'forest'}
        renderIcon={() => <KronerIcon size={'extraLarge'} />}
        className={styles.panel}
        hideGraphicMobile
      >
        <Heading as={'h3'} level={3} hasSpacing>
          {'Foreløpig oppsummering'}
        </Heading>
        <DescriptionList>
          <DescriptionList.Element term={'Antall personer'}>
            {cards.length}
          </DescriptionList.Element>
        </DescriptionList>
      </Panel>

      <div className={`${styles.flexStartRow} ${styles.article}`}>
        <Button>{'Send inn'}</Button>
        <Button variant={'secondary'}>{'Avbryt'}</Button>
      </div>
      <Panel
        color={'graphite'}
        variant={'filled'}
        padding={'s'}
        className={styles.panel}
      >
        <div className={styles.panelContent}>
          <InlineButton>{'Lagre og fortsett senere'}</InlineButton>
          <InlineButton>{'Avbryt og slett'}</InlineButton>
        </div>
      </Panel>
    </main>
  );
}
