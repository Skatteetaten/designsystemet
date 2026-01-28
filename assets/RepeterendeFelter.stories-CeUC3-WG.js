import{A as w,r as o,m as k,j as e,D as F}from"./iframe-CBOQuZmX.js";import{b as O,I as m,B as p}from"./index-BxmwhRWV.js";import{D as s,C as g,P as b}from"./index-haEYng38.js";import"./index-D76sDZza.js";import{ad as H,U as V,E as T,D as q,a5 as G,ag as z}from"./index-tEZUkoN5.js";import{M as $}from"./index-B2Uv0TYg.js";import{H as h,P as K}from"./index-B4-BoLKC.js";import{w as Q}from"./pagelayout-decorator-BNDkzn4v.js";import{T as v}from"./DatePickerCalendar-DF1H3gtV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgUqAK2.js";import"./Help-4dQh7YC4.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./index-BYntwts4.js";import"./LabelWithHelp-vli_xocL.js";import"./index-Zmgbh9ba.js";import"./floating-ui.react-D2pFwR57.js";import"./index-CT7HSXc_.js";import"./index-BcO1AqEL.js";import"./index-Dv_ndgGc.js";import"./index-CHesE-0v.js";import"./TopBannerButton-DyppBcwQ.js";import"./TopBannerLangPicker-SaEGrlJh.js";import"./TopBannerLangPickerButton-CTBwZLn0.js";import"./TopBannerLogo-BPliLnu3.js";import"./TopBannerSkipLink-BOHWWP6f.js";import"./TopBannerUserButton-etZa22Zn.js";import"./TopBannerExternalExample.module-D-cyqUXs.js";const J="_mainExternal_1e5vg_1",U="_tabIndexNoOutline_1e5vg_13",X="_miniNav_1e5vg_17",W="_article_1e5vg_24",Y="_desciptionList_1e5vg_33",Z="_repeatingFields_1e5vg_39",ee="_addNewButton_1e5vg_47",ne="_editModal_1e5vg_51",te="_editModalContent_1e5vg_55",se="_flexStartRow_1e5vg_61",ae="_editModalAdressFields_1e5vg_67",re="_cardContent_1e5vg_76",ie="_panel_1e5vg_80",de="_panelContent_1e5vg_84",t={mainExternal:J,tabIndexNoOutline:U,miniNav:X,article:W,desciptionList:Y,repeatingFields:Z,addNewButton:ee,editModal:ne,editModalContent:te,flexStartRow:se,editModalAdressFields:ae,cardContent:re,panel:ie,panelContent:de},oe=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  flex: 1;
  padding: var(--semantic-responsive-container-spacing);
  margin: auto;

  &:focus-visible {
    outline: none;
  }
}

.tabIndexNoOutline:focus {
  outline: none;
}

.miniNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-m) 0;
}

.article {
  width: var(--semantic-responsive-article);
  margin: auto;
}

.marginTopL {
  margin-top: var(--spacing-l);
}

.desciptionList {
  display: grid;
  gap: var(--spacing-xs);
  grid-template-columns: 1fr 1fr;
}

.repeatingFields {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  gap: var(--spacing-m);
  list-style: none;
}

.addNewButton {
  max-width: max-content;
}

.editModal {
  width: 100%;
}

.editModalContent {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.flexStartRow {
  display: flex;
  justify-content: flex-start;
  gap: var(--spacing-m);
}

.editModalAdressFields {
  display: flex;
  gap: var(--spacing-m);

  dt {
    color: var(--palette-graphite-70);
  }
}

.cardContent div:first-child {
  width: 100%;
}

.panel {
  margin: var(--spacing-l) auto;
}

.panelContent {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l);

  @media (width <= 640px) {
    flex-direction: column;
    gap: var(--spacing-s);
  }
}
`,He={title:"Sidetyper/Ekstern/Repeterende felter",decorators:[Q],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:w(oe)}}}};function x(){const u=o.useRef(null),L=o.useRef(null),S=o.useRef(null),[i,f]=o.useState(null),[l,R]=o.useState(3),N=!k("(min-width: 480px)"),E={name:"Hopp Og Sprett Barnehage",organizationNumber:"123456789"},A=[{id:1,navn:"McRonald Hansen",adresse:"Adresseveien 1",postnummer:"1314",poststed:"Kolbotn",rolle:"Styreleder"},{id:2,navn:"Hans McRonald",adresse:"Adresseveien 2",postnummer:"1314",poststed:"Kolbotn",rolle:"Styremedlem"}],[c,C]=o.useState(()=>A),y=n=>{requestAnimationFrame(()=>{document.querySelector(`[data-card-id="${n}"]`)?.focus()})},[,M,I]=o.useActionState(async(n,r)=>{if(!i)return{success:!1,error:"Ingen kort å redigere"};const d={id:i.id,navn:r.get("navn"),adresse:r.get("adresse"),postnummer:r.get("postnummer"),poststed:i.poststed,rolle:r.get("rolle")};return await new Promise(a=>setTimeout(a,1e3)),C(a=>a.map(j=>j.id===d.id?d:j)),u.current?.close(),f(null),{success:!0}},{success:!1}),_=n=>{f({...n}),u.current?.showModal()},D=()=>{const n={id:l,navn:`Ny person ${l}`,adresse:`Adresseveien ${l}`,postnummer:"0000",poststed:"Sted",rolle:"Rolle"};C(r=>[...r,n]),y(l),R(l+1)},B=()=>{u.current?.close(),f(null)},P=n=>{const r=c.findIndex(a=>a.id===n),d=c.filter(a=>a.id!==n);C(d),requestAnimationFrame(()=>{if(d.length===0)S.current?.focus();else{let a;r>0?a=d[r-1].id:a=d[0].id,y(a)}})};return e.jsxs("main",{className:t.mainExternal,tabIndex:-1,children:[e.jsxs("div",{className:t.miniNav,children:[e.jsx(O,{href:"#",svgPath:H,children:"Til Min side"}),e.jsx(m,{svgPath:V,children:"Skriv ut"})]}),e.jsxs("div",{className:t.article,children:[e.jsx(h,{as:"h1",hasSpacing:!0,children:"Skjema eller oppgave"}),e.jsxs(s,{className:t.desciptionList,hasSpacing:!0,children:[e.jsx(s.Element,{term:"Virksomhetens navn",children:E.name}),e.jsx(s.Element,{term:N?"Organisasjons-nummer":"Organisasjonsnummer",children:F(E.organizationNumber)}),e.jsx(s.Element,{term:"Inntektsår",children:"2023"})]})]}),e.jsxs("div",{className:t.article,children:[e.jsx("div",{ref:S,className:t.tabIndexNoOutline,tabIndex:-1,children:e.jsx(h,{as:"h2",hasSpacing:!0,children:"Overskift/kategori"})}),e.jsx("ul",{className:t.repeatingFields,children:c.length===0?e.jsx("li",{children:e.jsx(K,{children:"Ingen personer i listen."})}):c.map(n=>e.jsx("li",{children:e.jsxs(g,{spacing:"m",color:"graphite",children:[e.jsx(g.Header,{children:e.jsx("div",{"data-card-id":n.id,className:t.tabIndexNoOutline,tabIndex:-1,children:e.jsx(h,{as:"h3",hasSpacing:!0,children:n.navn})})}),e.jsx(g.Content,{className:t.cardContent,children:e.jsxs(s,{descriptionDirection:N?"vertical":"horizontal",className:t.desciptionList,children:[e.jsx(s.Element,{term:"Adresse",children:n.adresse}),e.jsx(s.Element,{term:"Postnummer",children:n.postnummer}),e.jsx(s.Element,{term:"Poststed",children:n.poststed}),e.jsx(s.Element,{term:"Rolle",children:n.rolle})]})}),e.jsxs(g.Actions,{children:[e.jsx(m,{svgPath:T,onClick:()=>_(n),children:"Rediger"}),e.jsx(m,{svgPath:q,onClick:()=>P(n.id),children:"Slett"})]})]},n.id)},n.id))}),e.jsx(p,{svgPath:G,className:t.addNewButton,onClick:D,children:"Legg til ny person"}),e.jsx($,{ref:u,title:"Rediger person",className:t.editModal,children:i&&e.jsxs("form",{action:M,className:t.editModalContent,children:[e.jsxs("div",{children:[e.jsx(v,{ref:L,label:"Navn",name:"navn",defaultValue:i.navn,hasSpacing:!0,required:!0}),e.jsx(v,{label:"Adresse",name:"adresse",defaultValue:i.adresse,hasSpacing:!0,required:!0}),e.jsxs("div",{className:t.editModalAdressFields,children:[e.jsx(v,{label:"Postnummer",name:"postnummer",defaultValue:i.postnummer,hasSpacing:!0,required:!0}),e.jsx(s,{descriptionDirection:"vertical",children:e.jsx(s.Element,{term:"Poststed",children:i.poststed})})]}),e.jsx(v,{label:"Rolle",name:"rolle",defaultValue:i.rolle,hasSpacing:!0,required:!0})]}),e.jsxs("div",{className:t.flexStartRow,children:[e.jsx(p,{type:"submit",hasSpinner:I,children:I?"Lagrer...":"Lagre"}),e.jsx(p,{variant:"secondary",onClick:B,children:"Avbryt"})]})]})})]}),e.jsxs(b,{color:"forest",renderIcon:()=>e.jsx(z,{size:"extraLarge"}),className:t.panel,hideGraphicMobile:!0,children:[e.jsx(h,{as:"h3",hasSpacing:!0,children:"Foreløpig oppsummering"}),e.jsx(s,{children:e.jsx(s.Element,{term:"Antall personer",children:c.length})})]}),e.jsxs("div",{className:`${t.flexStartRow} ${t.article}`,children:[e.jsx(p,{children:"Send inn"}),e.jsx(p,{variant:"secondary",children:"Avbryt"})]}),e.jsx(b,{color:"graphite",variant:"filled",padding:"s",className:t.panel,children:e.jsxs("div",{className:t.panelContent,children:[e.jsx(m,{children:"Lagre og fortsett senere"}),e.jsx(m,{children:"Avbryt og slett"})]})})]})}x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`function RepeterendeFelter(): JSX.Element {
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
    type: 'Organization'
  };
  type RepeatingCardContent = {
    id: number;
    navn: string;
    adresse: string;
    postnummer: string;
    poststed: string;
    rolle: string;
  };
  const defaultCards: Array<RepeatingCardContent> = [{
    id: 1,
    navn: 'McRonald Hansen',
    adresse: 'Adresseveien 1',
    postnummer: '1314',
    poststed: 'Kolbotn',
    rolle: 'Styreleder'
  }, {
    id: 2,
    navn: 'Hans McRonald',
    adresse: 'Adresseveien 2',
    postnummer: '1314',
    poststed: 'Kolbotn',
    rolle: 'Styremedlem'
  }];
  const [cards, setCards] = useState<RepeatingCardContent[]>(() => defaultCards);
  type EditActionState = {
    success: boolean;
    error?: string;
  };
  const focusCard = (cardId: number): void => {
    requestAnimationFrame(() => {
      const cardElement = document.querySelector(\`[data-card-id="\${cardId}"]\`) as HTMLElement;
      cardElement?.focus();
    });
  };
  const [, editAction, isEditPending] = useActionState(async (_prevState: EditActionState, formData: FormData): Promise<EditActionState> => {
    if (!editCard) {
      return {
        success: false,
        error: 'Ingen kort å redigere'
      };
    }
    const updatedCard = {
      id: editCard.id,
      navn: formData.get('navn') as string,
      adresse: formData.get('adresse') as string,
      postnummer: formData.get('postnummer') as string,
      poststed: editCard.poststed,
      rolle: formData.get('rolle') as string
    };
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCards(prevCards => prevCards.map(card => card.id === updatedCard.id ? updatedCard : card));
    editModalRef.current?.close();
    setEditCard(null);
    return {
      success: true
    };
  }, {
    success: false
  });
  const handleEdit = (card: RepeatingCardContent): void => {
    setEditCard({
      ...card
    });
    editModalRef.current?.showModal();
  };
  const addCardAction = (): void => {
    const newCard: RepeatingCardContent = {
      id: nextId,
      navn: \`Ny person \${nextId}\`,
      adresse: \`Adresseveien \${nextId}\`,
      postnummer: '0000',
      poststed: 'Sted',
      rolle: 'Rolle'
    };
    setCards(prevCards => [...prevCards, newCard]);
    focusCard(nextId);
    setNextId(nextId + 1);
  };
  const handleCancelEdit = (): void => {
    editModalRef.current?.close();
    setEditCard(null);
  };
  const deleteCardAction = (cardId: number): void => {
    const cardIndex = cards.findIndex(card => card.id === cardId);
    const remainingCards = cards.filter(card => card.id !== cardId);
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
  return <main className={styles.mainExternal} tabIndex={-1}>
      <div className={styles.miniNav}>
        <Link href={'#'} svgPath={ArrowBackSVGpath}>
          {'Til Min side'}
        </Link>
        <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
      </div>
      <div className={styles.article}>
        <Heading as={'h1'} hasSpacing>
          {'Skjema eller oppgave'}
        </Heading>
        <DescriptionList className={styles.desciptionList} hasSpacing>
          <DescriptionList.Element term={'Virksomhetens navn'}>
            {hoppOgSprettBarnehage.name}
          </DescriptionList.Element>
          <DescriptionList.Element term={isMobile ? 'Organisasjons-nummer' : 'Organisasjonsnummer'}>
            {formatOrganisationNumber(hoppOgSprettBarnehage.organizationNumber)}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Inntektsår'}>
            {'2023'}
          </DescriptionList.Element>
        </DescriptionList>
      </div>
      <div className={styles.article}>
        <div ref={headingRef} className={styles.tabIndexNoOutline} tabIndex={-1}>
          <Heading as={'h2'} hasSpacing>
            {'Overskift/kategori'}
          </Heading>
        </div>
        <ul className={styles.repeatingFields}>
          {cards.length === 0 ? <li>
              <Paragraph>{'Ingen personer i listen.'}</Paragraph>
            </li> : cards.map(card => <li key={card.id}>
                <Card key={card.id} spacing={'m'} color={'graphite'}>
                  <Card.Header>
                    <div data-card-id={card.id} className={styles.tabIndexNoOutline} tabIndex={-1}>
                      <Heading as={'h3'} hasSpacing>
                        {card.navn}
                      </Heading>
                    </div>
                  </Card.Header>
                  <Card.Content className={styles.cardContent}>
                    <DescriptionList descriptionDirection={isMobile ? 'vertical' : 'horizontal'} className={styles.desciptionList}>
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
                    <InlineButton svgPath={EditSVGpath} onClick={() => handleEdit(card)}>
                      {'Rediger'}
                    </InlineButton>
                    <InlineButton svgPath={DeleteSVGpath} onClick={() => deleteCardAction(card.id)}>
                      {'Slett'}
                    </InlineButton>
                  </Card.Actions>
                </Card>
              </li>)}
        </ul>
        <Button svgPath={AddSVGpath} className={styles.addNewButton} onClick={addCardAction}>
          {'Legg til ny person'}
        </Button>
        <Modal ref={editModalRef} title={'Rediger person'} className={styles.editModal}>
          {editCard && <form action={editAction} className={styles.editModalContent}>
              <div>
                <TextField ref={firstInputInEditModalRef} label={'Navn'} name={'navn'} defaultValue={editCard.navn} hasSpacing required />

                <TextField label={'Adresse'} name={'adresse'} defaultValue={editCard.adresse} hasSpacing required />
                <div className={styles.editModalAdressFields}>
                  <TextField label={'Postnummer'} name={'postnummer'} defaultValue={editCard.postnummer} hasSpacing required />
                  <DescriptionList descriptionDirection={'vertical'}>
                    <DescriptionList.Element term={'Poststed'}>
                      {editCard.poststed}
                    </DescriptionList.Element>
                  </DescriptionList>
                </div>
                <TextField label={'Rolle'} name={'rolle'} defaultValue={editCard.rolle} hasSpacing required />
              </div>
              <div className={styles.flexStartRow}>
                <Button type={'submit'} hasSpinner={isEditPending}>
                  {isEditPending ? 'Lagrer...' : 'Lagre'}
                </Button>
                <Button variant={'secondary'} onClick={handleCancelEdit}>
                  {'Avbryt'}
                </Button>
              </div>
            </form>}
        </Modal>
      </div>
      <Panel color={'forest'} renderIcon={() => <KronerIcon size={'extraLarge'} />} className={styles.panel} hideGraphicMobile>
        <Heading as={'h3'} hasSpacing>
          {'Foreløpig oppsummering'}
        </Heading>
        <DescriptionList>
          <DescriptionList.Element term={'Antall personer'}>
            {cards.length}
          </DescriptionList.Element>
        </DescriptionList>
      </Panel>

      <div className={\`\${styles.flexStartRow} \${styles.article}\`}>
        <Button>{'Send inn'}</Button>
        <Button variant={'secondary'}>{'Avbryt'}</Button>
      </div>
      <Panel color={'graphite'} variant={'filled'} padding={'s'} className={styles.panel}>
        <div className={styles.panelContent}>
          <InlineButton>{'Lagre og fortsett senere'}</InlineButton>
          <InlineButton>{'Avbryt og slett'}</InlineButton>
        </div>
      </Panel>
    </main>;
}`,...x.parameters?.docs?.source}}};const Ve=["RepeterendeFelter"];export{x as RepeterendeFelter,Ve as __namedExportsOrder,He as default};
//# sourceMappingURL=RepeterendeFelter.stories-CeUC3-WG.js.map
