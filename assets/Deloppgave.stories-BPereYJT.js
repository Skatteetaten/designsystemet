import{A as g,r as i,j as e,B as h}from"./iframe-CBOQuZmX.js";import{b as v,I as u,B as l}from"./index-BxmwhRWV.js";import{C as m,D as n}from"./index-haEYng38.js";import{C as k}from"./index-D76sDZza.js";import{ad as f,U as y}from"./index-tEZUkoN5.js";import{H as c,P as E}from"./index-B4-BoLKC.js";import{w as x}from"./pagelayout-decorator-BNDkzn4v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgUqAK2.js";import"./DatePickerCalendar-DF1H3gtV.js";import"./LabelWithHelp-vli_xocL.js";import"./Help-4dQh7YC4.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./index-BYntwts4.js";import"./index-Zmgbh9ba.js";import"./index-CHesE-0v.js";import"./TopBannerButton-DyppBcwQ.js";import"./floating-ui.react-D2pFwR57.js";import"./index-CT7HSXc_.js";import"./index-BcO1AqEL.js";import"./TopBannerLangPicker-SaEGrlJh.js";import"./TopBannerLangPickerButton-CTBwZLn0.js";import"./TopBannerLogo-BPliLnu3.js";import"./TopBannerSkipLink-BOHWWP6f.js";import"./TopBannerUserButton-etZa22Zn.js";import"./index-B2Uv0TYg.js";import"./index-Dv_ndgGc.js";import"./TopBannerExternalExample.module-D-cyqUXs.js";const D="_mainExternal_udty6_1",L="_miniNav_udty6_9",b="_article_udty6_16",j="_marginTopM_udty6_21",S="_marginBottomXl_udty6_25",N="_marginRightM_udty6_29",t={mainExternal:D,miniNav:L,article:b,marginTopM:j,marginBottomXl:S,marginRightM:N},C=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  flex: 1;
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

.marginTopM {
  margin-top: var(--spacing-m);
}

.marginBottomXl {
  margin-bottom: var(--spacing-xl);
}

.marginRightM {
  margin-right: var(--spacing-m);
}
`,ie={title:"Sidetyper/Ekstern/Oppgaveliste (beta)",decorators:[x],parameters:{layout:"fullscreen",controls:{disable:!0},tags:["!autodocs"],docs:{autodocs:!1,source:{transform:g(C)}}}},s=()=>{const[p,a]=i.useState(""),[r,d]=i.useState(!1),o=i.useRef(null);return e.jsxs("main",{className:t.mainExternal,children:[e.jsxs("div",{className:t.miniNav,children:[e.jsx(v,{href:"#",svgPath:f,children:"Til Innrapportering for rytmisk musikkutdanning"}),e.jsx(u,{svgPath:y,children:"Skriv ut"})]}),e.jsxs("div",{className:t.article,children:[e.jsx(c,{as:"h1",hasSpacing:!0,children:"Bekreft opplysninger om virksomheten."}),e.jsx(E,{className:t.marginBottomXl,hasSpacing:!0,children:"Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. "})]}),e.jsx(m,{color:"forest",className:t.article,children:e.jsxs(m.Content,{children:[e.jsx(c,{as:"h2",level:3,hasSpacing:!0,children:"Opplysninger om virksomheten"}),e.jsxs(n,{children:[e.jsx(n.Element,{term:"Navn",children:"McRonald Hansen"}),e.jsx(n.Element,{term:"Adresse",children:"Adresseveien 1"}),e.jsx(n.Element,{term:"Postnummer",children:"1314"}),e.jsx(n.Element,{term:"Poststed",children:"Kolbotn"}),e.jsx(n.Element,{term:"Rolle",children:"Styreeier"}),e.jsx(n.Element,{term:"Navn",children:"McRonald Hansen"}),e.jsx(n.Element,{term:"Adresse",children:"Adresseveien 1"}),e.jsx(n.Element,{term:"Postnummer",children:"1314"}),e.jsx(n.Element,{term:"Poststed",children:"Kolbotn"}),e.jsx(n.Element,{term:"Rolle",children:"Styreeier"})]})]})}),e.jsxs("div",{className:t.article,children:[e.jsx(k,{ref:o,checked:r,errorMessage:p,className:`${t.marginTopM} ${t.marginBottomXl}`,onChange:()=>{d(!r),a("")},children:"Jeg bekrefter at opplysningene stemmer"}),e.jsx(l,{className:t.marginRightM,onClick:()=>{r?h("Sidetyper/Ekstern/Oppgaveliste (beta)","Oppgaveliste")():(a("Du må bekrefte at opplysningene stemmer."),o.current?.focus())},children:"Lagre og gå til oppgaveliste"}),e.jsx(l,{variant:"secondary",children:"Avbryt"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const checkRef = useRef<HTMLInputElement>(null);
  return <main className={styles.mainExternal}>
      <div className={styles.miniNav}>
        <Link href={'#'} svgPath={ArrowBackSVGpath}>
          {'Til Innrapportering for rytmisk musikkutdanning'}
        </Link>
        <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
      </div>
      <div className={styles.article}>
        <Heading as={'h1'} hasSpacing>
          {'Bekreft opplysninger om virksomheten.'}
        </Heading>
        <Paragraph className={styles.marginBottomXl} hasSpacing>
          {'Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. '}
        </Paragraph>
      </div>
      <Card color={'forest'} className={styles.article}>
        <Card.Content>
          <Heading as={'h2'} level={3} hasSpacing>
            {'Opplysninger om virksomheten'}
          </Heading>
          <DescriptionList>
            <DescriptionList.Element term={'Navn'}>
              {'McRonald Hansen'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Adresse'}>
              {'Adresseveien 1'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Postnummer'}>
              {'1314'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Poststed'}>
              {'Kolbotn'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Rolle'}>
              {'Styreeier'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Navn'}>
              {'McRonald Hansen'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Adresse'}>
              {'Adresseveien 1'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Postnummer'}>
              {'1314'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Poststed'}>
              {'Kolbotn'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Rolle'}>
              {'Styreeier'}
            </DescriptionList.Element>
          </DescriptionList>
        </Card.Content>
      </Card>
      <div className={styles.article}>
        <Checkbox ref={checkRef} checked={isChecked} errorMessage={errorMessage} className={\`\${styles.marginTopM} \${styles.marginBottomXl}\`} onChange={() => {
        setIsChecked(!isChecked);
        setErrorMessage('');
      }}>
          {'Jeg bekrefter at opplysningene stemmer'}
        </Checkbox>
        <Button className={styles.marginRightM} onClick={() => {
        if (isChecked) {
          linkTo('Sidetyper/Ekstern/Oppgaveliste (beta)', 'Oppgaveliste')();
        } else {
          setErrorMessage('Du må bekrefte at opplysningene stemmer.');
          checkRef.current?.focus();
        }
      }}>
          {'Lagre og gå til oppgaveliste'}
        </Button>
        <Button variant={'secondary'}>{'Avbryt'}</Button>
      </div>
    </main>;
}`,...s.parameters?.docs?.source}}};const ae=["Deloppgave"];export{s as Deloppgave,ae as __namedExportsOrder,ie as default};
//# sourceMappingURL=Deloppgave.stories-BPereYJT.js.map
