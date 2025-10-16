import{x as p,l as d,j as n,n as h,y as g}from"./iframe-DRo7xN6O.js";import{b as v,I as u,B as r}from"./index-C6akGUuV.js";import{O as x}from"./index-CcgjbLA7.js";import{D as i,P as k}from"./index-CHHc706Z.js";import{a5 as f,O as j,Q as N}from"./index-CIGiQTsv.js";import{H as _,P as t}from"./index-K3PRhlds.js";import{w as I}from"./pagelayout-decorator-Dqn3z8PA.js";import"./index-AjPAYYXA.js";import"./index-D7FhWP7R.js";import"./index-CJxdEpCy.js";import"./DatePickerCalendar-CUYwtYgr.js";import"./LabelWithHelp-BVIbSHOi.js";import"./Help-Ifm0iuuA.js";import"./index-hkRDeZHX.js";import"./TopBannerButton-C2ELRsfh.js";import"./floating-ui.react-IcOuk_wg.js";import"./index-DA0HsgN3.js";import"./index-DOQ9qhsR.js";import"./TopBannerLangPicker-BW74ufXQ.js";import"./TopBannerLangPickerButton-CIMt-Om0.js";import"./TopBannerLogo-D0_DV1Pw.js";import"./TopBannerSkipLink-b18V5XQT.js";import"./TopBannerUserButton-BCzVJE_M.js";import"./index-B5WJrEEq.js";import"./index-Ck9Bd1tT.js";import"./TopBannerExternalExample.module-J_szXmUm.js";const b="_mainExternal_14dip_1",y="_miniNav_14dip_8",L="_article_14dip_15",P="_checkIconContainer_14dip_20",S="_checkIcon_14dip_20",E="_noFocusVisible_14dip_38",D="_panel_14dip_42",M="_marginTopM_14dip_52",w="_preLine_14dip_56",T="_marginRightM_14dip_60",e={mainExternal:b,miniNav:y,article:L,checkIconContainer:P,checkIcon:S,noFocusVisible:E,panel:D,marginTopM:M,preLine:w,marginRightM:T},F=`.mainExternal {
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

.marginRightM {
  margin-right: var(--spacing-m);
}
`,ln={title:"Sidetyper/Ekstern/Kvittering",decorators:[I],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:p(F)}}}},s=()=>{const c=!d("(min-width: 480px)"),m={personId:"12345678910"};return n.jsxs("main",{className:e.mainExternal,children:[n.jsxs("div",{className:e.miniNav,children:[n.jsx(v,{href:"#",svgPath:f,children:"Til Min side"}),n.jsx(u,{svgPath:j,children:"Skriv ut"})]}),n.jsxs("div",{className:e.article,children:[n.jsx(_,{as:"h1",level:1,hasSpacing:!0,children:"Skjematittel"}),n.jsxs(i,{hasSpacing:!0,children:[n.jsx(i.Element,{term:"Navn",children:"Knuslete Foxtrot"}),n.jsx(i.Element,{term:"Fødselsnummer",children:h(m.personId)})]})]}),n.jsx("div",{tabIndex:-1,className:e.noFocusVisible,children:n.jsxs(k,{className:e.panel,variant:"outline",color:"forest",title:"[Skjematittel] er sendt inn",titleAs:"h2",renderIcon:()=>n.jsx("div",{className:e.checkIconContainer,children:n.jsx(N,{size:"large",className:e.checkIcon})}),children:[n.jsx(t,{className:e.marginTopM,children:"Det kan ta inntil 4 uker før du får svar."}),n.jsx(t,{hasSpacing:!0,children:"Du finner en kopi av skjemaet i innboksen din på Min side."}),n.jsx(t,{children:"Sendt inn: 03.07.2023 11:03"}),n.jsxs(t,{hasSpacing:!0,children:["Referansenummer: ",n.jsx("strong",{children:"IN-PG-1234567"})]}),n.jsx(x,{title:"Se hva du har sendt inn",children:n.jsxs(i,{descriptionDirection:c?"vertical":"horizontal",children:[n.jsx(i.Element,{term:"Innsender",children:"Knuslete Foxtrot"}),n.jsx(i.Element,{term:"Adresse",children:n.jsx("span",{className:e.preLine,children:`Adresseveien 1
1234 Lillevik`})}),n.jsx(i.Element,{term:"Telefon",children:g("98765432")})]})})]})}),n.jsxs("div",{className:e.article,children:[n.jsx(r,{className:e.marginRightM,children:"Til Min side"}),n.jsx(r,{variant:"secondary",children:"Logg ut"})]})]})};var a,o,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`(): JSX.Element => {
  const isMobile = !useMediaQuery('(min-width: 480px)');
  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person'
  };
  return <main className={styles.mainExternal}>
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
      {/* Ved navigering fra skjema til kvittering er Panel eneste endring på siden.
       Derfor skal fokus settes hit. */}
      <div tabIndex={-1} className={styles.noFocusVisible}>
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
    </main>;
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const cn=["Kvittering"];export{s as Kvittering,cn as __namedExportsOrder,ln as default};
//# sourceMappingURL=Kvittering.stories-Bg7TBcJQ.js.map
