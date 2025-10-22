import{x as O,r as o,l as H,j as e,z as V}from"./iframe-BoxHncFg.js";import{b as T,I as p,B as u}from"./index-DyY5joHW.js";import{D as a,C as h,P as L}from"./index-CxRKwedM.js";import"./index-d7h_eiwz.js";import{a5 as q,O as G,E as $,D as K,a1 as Q,a8 as J}from"./index-Mlou2Fgf.js";import{M as X}from"./index-DK27EPS2.js";import{H as v,P as U}from"./index-COS0aIOi.js";import{w as W}from"./pagelayout-decorator-BIAl_tad.js";import{T as x}from"./DatePickerCalendar-NBFB_hA6.js";import"./index-CvbIYQ1J.js";import"./Help-DtlVvBAO.js";import"./LabelWithHelp-CeoEDrnt.js";import"./index-k61vOTBl.js";import"./floating-ui.react-Cx2bJYit.js";import"./index-BWe3UoPQ.js";import"./index-BHwnoM9V.js";import"./index-CIMmj5uo.js";import"./index-z4c3QXb-.js";import"./TopBannerButton-C3rtnis-.js";import"./TopBannerLangPicker-uoLEUZhA.js";import"./TopBannerLangPickerButton-ELq5E0QT.js";import"./TopBannerLogo-BeX8MPXd.js";import"./TopBannerSkipLink-DAAkcUni.js";import"./TopBannerUserButton-D_jNR-zE.js";import"./TopBannerExternalExample.module-J_szXmUm.js";const Y="_mainExternal_1c3z4_1",Z="_tabIndexNoOutline_1c3z4_12",ee="_miniNav_1c3z4_16",ne="_article_1c3z4_23",te="_desciptionList_1c3z4_32",se="_repeatingFields_1c3z4_38",ae="_addNewButton_1c3z4_46",ie="_editModal_1c3z4_50",re="_editModalContent_1c3z4_54",de="_flexStartRow_1c3z4_60",le="_editModalAdressFields_1c3z4_66",oe="_cardContent_1c3z4_75",ce="_panel_1c3z4_79",me="_panelContent_1c3z4_83",t={mainExternal:Y,tabIndexNoOutline:Z,miniNav:ee,article:ne,desciptionList:te,repeatingFields:se,addNewButton:ae,editModal:ie,editModalContent:re,flexStartRow:de,editModalAdressFields:le,cardContent:oe,panel:ce,panelContent:me},pe=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
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
`,ze={title:"Sidetyper/Ekstern/Repeterende felter",decorators:[W],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:O(pe)}}}};function f(){const g=o.useRef(null),_=o.useRef(null),N=o.useRef(null),[i,C]=o.useState(null),[c,D]=o.useState(3),y=!H("(min-width: 480px)"),I={name:"Hopp Og Sprett Barnehage",organizationNumber:"123456789"},B=[{id:1,navn:"McRonald Hansen",adresse:"Adresseveien 1",postnummer:"1314",poststed:"Kolbotn",rolle:"Styreleder"},{id:2,navn:"Hans McRonald",adresse:"Adresseveien 2",postnummer:"1314",poststed:"Kolbotn",rolle:"Styremedlem"}],[m,S]=o.useState(()=>B),E=n=>{requestAnimationFrame(()=>{const s=document.querySelector(`[data-card-id="${n}"]`);s==null||s.focus()})},[,P,j]=o.useActionState(async(n,s)=>{var r;if(!i)return{success:!1,error:"Ingen kort å redigere"};const d={id:i.id,navn:s.get("navn"),adresse:s.get("adresse"),postnummer:s.get("postnummer"),poststed:i.poststed,rolle:s.get("rolle")};return await new Promise(l=>setTimeout(l,1e3)),S(l=>l.map(b=>b.id===d.id?d:b)),(r=g.current)==null||r.close(),C(null),{success:!0}},{success:!1}),w=n=>{var s;C({...n}),(s=g.current)==null||s.showModal()},k=()=>{const n={id:c,navn:`Ny person ${c}`,adresse:`Adresseveien ${c}`,postnummer:"0000",poststed:"Sted",rolle:"Rolle"};S(s=>[...s,n]),E(c),D(c+1)},F=()=>{var n;(n=g.current)==null||n.close(),C(null)},z=n=>{const s=m.findIndex(r=>r.id===n),d=m.filter(r=>r.id!==n);S(d),requestAnimationFrame(()=>{var r;if(d.length===0)(r=N.current)==null||r.focus();else{let l;s>0?l=d[s-1].id:l=d[0].id,E(l)}})};return e.jsxs("main",{className:t.mainExternal,tabIndex:-1,children:[e.jsxs("div",{className:t.miniNav,children:[e.jsx(T,{href:"#",svgPath:q,children:"Til Min side"}),e.jsx(p,{svgPath:G,children:"Skriv ut"})]}),e.jsxs("div",{className:t.article,children:[e.jsx(v,{as:"h1",level:1,hasSpacing:!0,children:"Skjema eller oppgave"}),e.jsxs(a,{className:t.desciptionList,hasSpacing:!0,children:[e.jsx(a.Element,{term:"Virksomhetens navn",children:I.name}),e.jsx(a.Element,{term:y?"Organisasjons-nummer":"Organisasjonsnummer",children:V(I.organizationNumber)}),e.jsx(a.Element,{term:"Inntektsår",children:"2023"})]})]}),e.jsxs("div",{className:t.article,children:[e.jsx("div",{ref:N,className:t.tabIndexNoOutline,tabIndex:-1,children:e.jsx(v,{as:"h2",level:2,hasSpacing:!0,children:"Overskift/kategori"})}),e.jsx("ul",{className:t.repeatingFields,children:m.length===0?e.jsx("li",{children:e.jsx(U,{children:"Ingen personer i listen."})}):m.map(n=>e.jsx("li",{children:e.jsxs(h,{spacing:"m",color:"graphite",children:[e.jsx(h.Header,{children:e.jsx("div",{"data-card-id":n.id,className:t.tabIndexNoOutline,tabIndex:-1,children:e.jsx(v,{as:"h3",level:3,hasSpacing:!0,children:n.navn})})}),e.jsx(h.Content,{className:t.cardContent,children:e.jsxs(a,{descriptionDirection:y?"vertical":"horizontal",className:t.desciptionList,children:[e.jsx(a.Element,{term:"Adresse",children:n.adresse}),e.jsx(a.Element,{term:"Postnummer",children:n.postnummer}),e.jsx(a.Element,{term:"Poststed",children:n.poststed}),e.jsx(a.Element,{term:"Rolle",children:n.rolle})]})}),e.jsxs(h.Actions,{children:[e.jsx(p,{svgPath:$,onClick:()=>w(n),children:"Rediger"}),e.jsx(p,{svgPath:K,onClick:()=>z(n.id),children:"Slett"})]})]},n.id)},n.id))}),e.jsx(u,{svgPath:Q,className:t.addNewButton,onClick:k,children:"Legg til ny person"}),e.jsx(X,{ref:g,title:"Rediger person",className:t.editModal,children:i&&e.jsxs("form",{action:P,className:t.editModalContent,children:[e.jsxs("div",{children:[e.jsx(x,{ref:_,label:"Navn",name:"navn",defaultValue:i.navn,hasSpacing:!0,required:!0}),e.jsx(x,{label:"Adresse",name:"adresse",defaultValue:i.adresse,hasSpacing:!0,required:!0}),e.jsxs("div",{className:t.editModalAdressFields,children:[e.jsx(x,{label:"Postnummer",name:"postnummer",defaultValue:i.postnummer,hasSpacing:!0,required:!0}),e.jsx(a,{descriptionDirection:"vertical",children:e.jsx(a.Element,{term:"Poststed",children:i.poststed})})]}),e.jsx(x,{label:"Rolle",name:"rolle",defaultValue:i.rolle,hasSpacing:!0,required:!0})]}),e.jsxs("div",{className:t.flexStartRow,children:[e.jsx(u,{type:"submit",hasSpinner:j,children:j?"Lagrer...":"Lagre"}),e.jsx(u,{variant:"secondary",onClick:F,children:"Avbryt"})]})]})})]}),e.jsxs(L,{color:"forest",renderIcon:()=>e.jsx(J,{size:"extraLarge"}),className:t.panel,hideGraphicMobile:!0,children:[e.jsx(v,{as:"h3",level:3,hasSpacing:!0,children:"Foreløpig oppsummering"}),e.jsx(a,{children:e.jsx(a.Element,{term:"Antall personer",children:m.length})})]}),e.jsxs("div",{className:`${t.flexStartRow} ${t.article}`,children:[e.jsx(u,{children:"Send inn"}),e.jsx(u,{variant:"secondary",children:"Avbryt"})]}),e.jsx(L,{color:"graphite",variant:"filled",padding:"s",className:t.panel,children:e.jsxs("div",{className:t.panelContent,children:[e.jsx(p,{children:"Lagre og fortsett senere"}),e.jsx(p,{children:"Avbryt og slett"})]})})]})}var R,A,M;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`function RepeterendeFelter(): JSX.Element {
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
        <Heading as={'h1'} level={1} hasSpacing>
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
          <Heading as={'h2'} level={2} hasSpacing>
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
                      <Heading as={'h3'} level={3} hasSpacing>
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
        <Heading as={'h3'} level={3} hasSpacing>
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
}`,...(M=(A=f.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const Oe=["RepeterendeFelter"];export{f as RepeterendeFelter,Oe as __namedExportsOrder,ze as default};
//# sourceMappingURL=RepeterendeFelter.stories-BWsc-961.js.map
