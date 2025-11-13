import{x as k,r as i,j as e}from"./iframe-CdXtTKZQ.js";import{l as f}from"./index-D3GjUKSb.js";import{b as y,I as E,B as m}from"./index-CDWtp_lT.js";import{C as c,D as n}from"./index-BEPTjI1-.js";import{C as x}from"./index-CLKUz3Po.js";import{a8 as D,U as L}from"./index-D0xxaDHU.js";import{H as p,P as b}from"./index-DUrzBgqO.js";import{w as j}from"./pagelayout-decorator-BD2IxFI_.js";import"./index-CVW4skVE.js";import"./DatePickerCalendar-ByRci1Oe.js";import"./LabelWithHelp-Bcy4lovc.js";import"./Help-BJCAuNeo.js";import"./Combobox.module-DGtBY5ID.js";import"./ComboboxButton-xo5xtxE5.js";import"./ComboboxSelectedOptions-BdSatC4Q.js";import"./index-C6J3KzFu.js";import"./index-D-15xU56.js";import"./index-BLYtAcfF.js";import"./TopBannerButton-DSftRgCM.js";import"./floating-ui.react-DyQ3q89_.js";import"./index-GtA9f0CN.js";import"./index-DIHq9ZfV.js";import"./TopBannerLangPicker-BA4zyFFj.js";import"./TopBannerLangPickerButton-DGQp7MlF.js";import"./TopBannerLogo-Bk2rV1UJ.js";import"./TopBannerSkipLink-DfnwD-uV.js";import"./TopBannerUserButton-B44bBFs8.js";import"./index-6vEA_ZXZ.js";import"./index-DgjBZIlJ.js";import"./TopBannerExternalExample.module-J_szXmUm.js";const S="_mainExternal_idzyw_1",N="_miniNav_idzyw_8",C="_article_idzyw_15",M="_marginTopM_idzyw_20",B="_marginBottomXl_idzyw_24",R="_marginRightM_idzyw_28",t={mainExternal:S,miniNav:N,article:C,marginTopM:M,marginBottomXl:B,marginRightM:R},_=`.mainExternal {
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

.marginTopM {
  margin-top: var(--spacing-m);
}

.marginBottomXl {
  margin-bottom: var(--spacing-xl);
}

.marginRightM {
  margin-right: var(--spacing-m);
}
`,me={title:"Sidetyper/Ekstern/Oppgaveliste (beta)",decorators:[j],parameters:{layout:"fullscreen",controls:{disable:!0},tags:["!autodocs"],docs:{autodocs:!1,source:{transform:k(_)}}}},s=()=>{const[v,a]=i.useState(""),[r,u]=i.useState(!1),o=i.useRef(null);return e.jsxs("main",{className:t.mainExternal,children:[e.jsxs("div",{className:t.miniNav,children:[e.jsx(y,{href:"#",svgPath:D,children:"Til Innrapportering for rytmisk musikkutdanning"}),e.jsx(E,{svgPath:L,children:"Skriv ut"})]}),e.jsxs("div",{className:t.article,children:[e.jsx(p,{as:"h1",level:1,hasSpacing:!0,children:"Bekreft opplysninger om virksomheten."}),e.jsx(b,{className:t.marginBottomXl,hasSpacing:!0,children:"Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. "})]}),e.jsx(c,{color:"forest",className:t.article,children:e.jsxs(c.Content,{children:[e.jsx(p,{as:"h2",level:3,hasSpacing:!0,children:"Opplysninger om virksomheten"}),e.jsxs(n,{children:[e.jsx(n.Element,{term:"Navn",children:"McRonald Hansen"}),e.jsx(n.Element,{term:"Adresse",children:"Adresseveien 1"}),e.jsx(n.Element,{term:"Postnummer",children:"1314"}),e.jsx(n.Element,{term:"Poststed",children:"Kolbotn"}),e.jsx(n.Element,{term:"Rolle",children:"Styreeier"}),e.jsx(n.Element,{term:"Navn",children:"McRonald Hansen"}),e.jsx(n.Element,{term:"Adresse",children:"Adresseveien 1"}),e.jsx(n.Element,{term:"Postnummer",children:"1314"}),e.jsx(n.Element,{term:"Poststed",children:"Kolbotn"}),e.jsx(n.Element,{term:"Rolle",children:"Styreeier"})]})]})}),e.jsxs("div",{className:t.article,children:[e.jsx(x,{ref:o,checked:r,errorMessage:v,className:`${t.marginTopM} ${t.marginBottomXl}`,onChange:()=>{u(!r),a("")},children:"Jeg bekrefter at opplysningene stemmer"}),e.jsx(m,{className:t.marginRightM,onClick:()=>{var l;r?f("Sidetyper/Ekstern/Oppgaveliste (beta)","Oppgaveliste")():(a("Du må bekrefte at opplysningene stemmer."),(l=o.current)==null||l.focus())},children:"Lagre og gå til oppgaveliste"}),e.jsx(m,{variant:"secondary",children:"Avbryt"})]})]})};var d,g,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
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
        <Heading as={'h1'} level={1} hasSpacing>
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
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const ce=["Deloppgave"];export{s as Deloppgave,ce as __namedExportsOrder,me as default};
//# sourceMappingURL=Deloppgave.stories-_D3xKxfH.js.map
