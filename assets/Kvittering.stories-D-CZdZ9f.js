import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-D_ouKaeX.js";import{L as s,b as F,I as C,B as k}from"./index-eDVrZHQi.js";import{O as y}from"./index-BKQUjYcP.js";import{D as a,P as E}from"./index-Bm-dj5jB.js";import{u as N,d as b,l as P,i as I,j as _}from"./index-ChzTQA-a.js";import{a7 as M,z as R,J as T}from"./index-CdwPxLML.js";import{T as D,F as i}from"./index-DyriRbJa.js";import{R as G}from"./index-DoReeGMy.js";import{H as f,P as o}from"./index-DsfABT8I.js";import{i as w}from"./helpers-B7KPg_So.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CPecIRii.js";import"./index-DzkGBFys.js";import"./DatePickerCalendar-j9g8dyRt.js";import"./LabelWithHelp-IJvVpsNu.js";import"./Help-DpeK2zjo.js";import"./index-UoIuQY3B.js";import"./TopBannerButton-0jIvVBn9.js";import"./TopBannerLangPicker-Dx4oc0U9.js";import"./TopBannerLangPickerButton-B5uH1qxT.js";import"./TopBannerLogo-BXuDjKJZ.js";import"./TopBannerSkipLink-CqJlQyOT.js";import"./TopBannerUserButton-C9FIE6r6.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";import"./index-DE1tsBZG.js";const B="_mainExternal_1cii7_1",A="_miniNav_1cii7_8",H="_article_1cii7_15",K="_checkIconContainer_1cii7_20",V="_checkIcon_1cii7_20",O="_noFocusVisible_1cii7_38",z="_panel_1cii7_42",U="_marginTopM_1cii7_52",J="_preLine_1cii7_56",Q="_marginTopL_1cii7_60",X="_marginRightM_1cii7_64",r={mainExternal:B,miniNav:A,article:H,checkIconContainer:K,checkIcon:V,noFocusVisible:O,panel:z,marginTopM:U,preLine:J,marginTopL:Q,marginRightM:X},q=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  padding: var(--semantic-responsive-container-spacing);
  margin: auto;
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

.checkIconContainer {
  display: flex;
  width: var(--size-extra-large);
  height: var(--size-extra-large);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: var(--spacing-l);
  background-color: var(--palette-forest-100);
  box-shadow: 0 0 0 4px var(--palette-graphite-0);
  outline: 2px solid var(--palette-forest-100);
  outline-offset: 2px;
}

.checkIcon {
  fill: var(--palette-graphite-0);
}

.noFocusVisible:focus-visible {
  outline: none;
}

.panel {
  padding: var(--spacing-xxl);
  margin: 0 auto var(--spacing-l);
  background-color: var(--palette-forest-10);
  box-shadow:
    inset 0 var(--spacing-xl) 0 0 var(--palette-graphite-0),
    /* Top shadow */ inset 0 calc(-1 * var(--spacing-xl)) 0 0
      var(--palette-graphite-0); /* Bottom shadow */
}

.marginTopM {
  margin-top: var(--spacing-m);
}

.preLine {
  white-space: pre-line;
}

.marginTopL {
  margin-top: var(--spacing-l);
}

.marginRightM {
  margin-right: var(--spacing-m);
}
`,Cn={title:"Sidetyper/Ekstern/Kvittering",parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:w(q)}}}},p=()=>{const m=c.useRef(null),d=c.useRef(null),[j,h]=c.useState(),S=!N("(min-width: 480px)"),u={name:"Knuslete Foxtrot",personId:"12345678910",type:"Person"},g=c.useRef(null);return c.useEffect(()=>{var e;(e=g.current)==null||e.focus()},[]),n.jsxs(n.Fragment,{children:[n.jsx(D,{ref:d,firstColumn:n.jsxs(s,{children:[n.jsx(s.Link,{href:"#storybook-root",onClick:e=>{var t,l;e.preventDefault(),(l=(t=d.current)==null?void 0:t.closeMenu)==null||l.call(t)},children:"Skatt"}),n.jsx(s.Link,{href:"#storybook-root",onClick:e=>{var t,l;e.preventDefault(),(l=(t=d.current)==null?void 0:t.closeMenu)==null||l.call(t)},children:"Avgift"})]}),user:j,onLanguageClick:e=>{b.changeLanguage(P[e.currentTarget.lang])},onLogInClick:()=>{var e;return(e=m.current)==null?void 0:e.showModal()},onLogOutClick:()=>h(void 0),onUserClick:()=>{var e;return(e=m.current)==null?void 0:e.showModal()}}),n.jsx(G,{ref:m,me:u,onEntitySelect:async()=>{var e;h({role:"meg"}),(e=m.current)==null||e.close()}}),n.jsxs("main",{className:r.mainExternal,children:[n.jsxs("div",{className:r.miniNav,children:[n.jsx(F,{href:"#",svgPath:M,children:"Til Min side"}),n.jsx(C,{svgPath:R,children:"Skriv ut"})]}),n.jsxs("div",{className:r.article,children:[n.jsx(f,{as:"h1",level:1,hasSpacing:!0,children:"Skjematittel"}),n.jsxs(a,{hasSpacing:!0,children:[n.jsx(a.Element,{term:"Navn",children:"Knuslete Foxtrot"}),n.jsx(a.Element,{term:"Fødselsnummer",children:I(u.personId)})]})]}),n.jsx("div",{ref:g,tabIndex:-1,className:r.noFocusVisible,children:n.jsxs(E,{className:r.panel,variant:"outline",color:"forest",title:"[Skjematittel] er sendt inn",titleAs:"h2",renderIcon:()=>n.jsx("div",{className:r.checkIconContainer,children:n.jsx(T,{size:"large",className:r.checkIcon})}),children:[n.jsx(o,{className:r.marginTopM,children:"Det kan ta inntil 4 uker før du får svar."}),n.jsx(o,{hasSpacing:!0,children:"Du finner en kopi av skjemaet i innboksen din på Min side."}),n.jsx(o,{children:"Sendt inn: 03.07.2023 11:03"}),n.jsxs(o,{hasSpacing:!0,children:["Referansenummer: ",n.jsx("strong",{children:"IN-PG-1234567"})]}),n.jsx(y,{title:"Se hva du har sendt inn",children:n.jsxs(a,{descriptionDirection:S?"vertical":"horizontal",children:[n.jsx(a.Element,{term:"Innsender",children:"Knuslete Foxtrot"}),n.jsx(a.Element,{term:"Adresse",children:n.jsx("span",{className:r.preLine,children:`Adresseveien 1
1234 Lillevik`})}),n.jsx(a.Element,{term:"Telefon",children:_("98765432")})]})})]})}),n.jsxs("div",{className:r.article,children:[n.jsx(k,{className:r.marginRightM,children:"Til Min side"}),n.jsx(k,{variant:"secondary",children:"Logg ut"})]})]}),n.jsxs(i,{titleFirstColumn:"Skatteetaten",titleSecondColumn:"Følg oss",secondColumn:n.jsxs(n.Fragment,{children:[n.jsx(o,{hasSpacing:!0,children:"Du kan kontakte oss i sosiale medier."}),n.jsx(s,{color:"white",children:n.jsx(s.Link,{href:"#",children:"Se alle Skatteetatens kontoer"})})]}),titleThirdColumn:"Presse",thirdColumn:n.jsxs(n.Fragment,{children:[n.jsx(o,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),n.jsx(s,{color:"white",hasSpacing:!0,children:n.jsx(s.Link,{href:"#",children:"Se vårt presserom"})}),n.jsx(f,{as:"h2",level:3,className:r.marginTopL,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),n.jsx(o,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),n.jsx(s,{color:"white",children:n.jsx(s.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),children:[n.jsx(i.LinkFirstColumn,{href:"#",children:"Jobb i Skatteetaten"}),n.jsx(i.LinkFirstColumn,{href:"#",children:"Om oss"}),n.jsx(i.LinkFirstColumn,{href:"#",children:"Analyse og rapporter"}),n.jsx(i.LinkFirstColumn,{href:"#",children:"Forskning"}),n.jsx(i.Link,{href:"#",children:"Satser"}),n.jsx(i.Link,{href:"#",children:"Skjema og tjenester"}),n.jsx(i.Link,{href:"#",children:"RSS"}),n.jsx(i.Link,{href:"#",children:"Tips oss"}),n.jsx(i.Link,{href:"#",isExternal:!0,children:"Koronatiltak"})]})]})};var L,v,x;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`(): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const isMobile = !useMediaQuery('(min-width: 480px)');
  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person'
  };
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    panelRef.current?.focus();
  }, []);
  return <>
      <TopBannerExternal ref={topBannerRef} firstColumn={<LinkGroup>
            <LinkGroup.Link href={'#storybook-root'} onClick={(e): void => {
        e.preventDefault();
        topBannerRef.current?.closeMenu?.();
      }}>
              {'Skatt'}
            </LinkGroup.Link>
            <LinkGroup.Link href={'#storybook-root'} onClick={(e): void => {
        e.preventDefault();
        topBannerRef.current?.closeMenu?.();
      }}>
              {'Avgift'}
            </LinkGroup.Link>
          </LinkGroup>} user={user} onLanguageClick={(e: MouseEvent<HTMLButtonElement>): void => {
      void dsI18n.changeLanguage(langToLocale[e.currentTarget.lang]);
    }} onLogInClick={(): void => modalRef.current?.showModal()} onLogOutClick={(): void => setUser(undefined)} onUserClick={(): void => modalRef.current?.showModal()} />
      <RolePicker ref={modalRef} me={me} onEntitySelect={async () => {
      setUser({
        role: 'meg'
      });
      modalRef.current?.close();
    }} />
      <main className={styles.mainExternal}>
        <div className={styles.miniNav}>
          <Link href={'#'} svgPath={ArrowBackSVGpath}>
            {'Til Min side'}
          </Link>
          <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
        </div>
        <div className={styles.article}>
          <Heading as={'h1'} level={1} hasSpacing>
            {'Skjematittel'}
          </Heading>
          <DescriptionList hasSpacing>
            <DescriptionList.Element term={'Navn'}>
              {'Knuslete Foxtrot'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Fødselsnummer'}>
              {formatNationalIdentityNumber(me.personId)}
            </DescriptionList.Element>
          </DescriptionList>
        </div>
        <div ref={panelRef} tabIndex={-1} className={styles.noFocusVisible}>
          <Panel className={styles.panel} variant={'outline'} color={'forest'} title={'[Skjematittel] er sendt inn'} titleAs={'h2'} renderIcon={(): JSX.Element => <div className={styles.checkIconContainer}>
                <CheckIcon size={'large'} className={styles.checkIcon} />
              </div>}>
            <Paragraph className={styles.marginTopM}>
              {'Det kan ta inntil 4 uker før du får svar.'}
            </Paragraph>
            <Paragraph hasSpacing>
              {'Du finner en kopi av skjemaet i innboksen din på Min side.'}
            </Paragraph>
            <Paragraph>{'Sendt inn: 03.07.2023 11:03'}</Paragraph>
            <Paragraph hasSpacing>
              {'Referansenummer: '}
              <strong>{'IN-PG-1234567'}</strong>
            </Paragraph>
            <OpenClose title={'Se hva du har sendt inn'}>
              <DescriptionList descriptionDirection={isMobile ? 'vertical' : 'horizontal'}>
                <DescriptionList.Element term={'Innsender'}>
                  {'Knuslete Foxtrot'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Adresse'}>
                  <span className={styles.preLine}>
                    {'Adresseveien 1\\n1234 Lillevik'}
                  </span>
                </DescriptionList.Element>
                <DescriptionList.Element term={'Telefon'}>
                  {formatPhoneNumber('98765432')}
                </DescriptionList.Element>
              </DescriptionList>
            </OpenClose>
          </Panel>
        </div>
        <div className={styles.article}>
          <Button className={styles.marginRightM}>{'Til Min side'}</Button>
          <Button variant={'secondary'}>{'Logg ut'}</Button>
        </div>
      </main>
      <Footer titleFirstColumn={'Skatteetaten'} titleSecondColumn={'Følg oss'} secondColumn={<>
            <Paragraph hasSpacing>
              {'Du kan kontakte oss i sosiale medier.'}
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Se alle Skatteetatens kontoer'}
              </LinkGroup.Link>
            </LinkGroup>
          </>} titleThirdColumn={'Presse'} thirdColumn={<>
            <Paragraph hasSpacing>
              {'Pressemeldinger, pressekontaker og annen informasjon for journalister.'}
            </Paragraph>
            <LinkGroup color={'white'} hasSpacing>
              <LinkGroup.Link href={'#'}>{'Se vårt presserom'}</LinkGroup.Link>
            </LinkGroup>
            <Heading as={'h2'} level={3} className={styles.marginTopL} hasSpacing>
              {'Bruke data fra Skatteetaten'}
            </Heading>
            <Paragraph hasSpacing>
              {'Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester.'}
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Hvordan få tilgang til data'}
              </LinkGroup.Link>
            </LinkGroup>
          </>}>
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
    </>;
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const yn=["Kvittering"];export{p as Kvittering,yn as __namedExportsOrder,Cn as default};
//# sourceMappingURL=Kvittering.stories-D-CZdZ9f.js.map
