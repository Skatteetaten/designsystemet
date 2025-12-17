import{F as L,r as m,j as e,G as u}from"./iframe-VHQh6taY.js";import{b as x,L as a,S as y}from"./index-C8wxqHpZ.js";import{S as o}from"./index-DgU9os4N.js";import{P as C,C as f}from"./index-CEjXTNb1.js";import{c as v,E as b,C as N}from"./index-lB78RBB2.js";import{a7 as E}from"./index-Di_7ammq.js";import{B as t}from"./index-9yOjvRwa.js";import{H as B,P as s,L as g}from"./index-Don9wpRQ.js";import{w as I}from"./pagelayout-decorator-DI3RWUkk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DALzD4Pw.js";import"./DatePickerCalendar-fvOeZNLZ.js";import"./LabelWithHelp-By58SB7B.js";import"./Help-DcN2X4V-.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-DM_xyLsF.js";import"./ComboboxSelectedOptions-BxHsyaCT.js";import"./index-BJkQPiPu.js";import"./index-B_yqNyPt.js";import"./TopBannerButton-CyO2leJr.js";import"./floating-ui.react-CubAuxUS.js";import"./index-C1tDoD4z.js";import"./index-CPemCIdg.js";import"./TopBannerLangPicker-ByIsuxlN.js";import"./TopBannerLangPickerButton-CSOQUeNc.js";import"./TopBannerLogo-DBta5hf-.js";import"./TopBannerSkipLink-Br1ef_2-.js";import"./TopBannerUserButton-CpmZJ9Rk.js";import"./index-CqsuB6cf.js";import"./TopBannerExternalExample.module-D-cyqUXs.js";const P=`@use '@skatteetaten/ds-core-designtokens/designtokens/breakpoints' as *;

.mainContent {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  flex: 1;
  padding: var(--semantic-responsive-container-spacing);
  margin: var(--spacing-m) auto;
}

.article {
  width: var(--semantic-responsive-article);
  box-sizing: border-box;
  margin: 0 auto;
}

.wideContent {
  width: var(--semantic-responsive-wide-content);
  box-sizing: border-box;
  margin: 0 auto;
}

.responsiveContainer {
  display: flex;
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  justify-content: center;
  padding: var(--spacing-m);
  margin: 0 auto;
  background-color: var(--palette-burgundy-5);
}

.responsiveWideContent {
  display: flex;
  width: var(--semantic-responsive-wide-content);
  box-sizing: border-box;
  justify-content: center;
  padding: var(--spacing-m);
  margin: 0 auto;
  background-color: var(--palette-burgundy-10);
}

.responsiveArticle {
  display: flex;
  width: var(--semantic-responsive-article);
  box-sizing: border-box;
  justify-content: center;
  padding: var(--spacing-m);
  margin: 0 auto;
  background-color: var(--palette-burgundy-30);
}

.marginBottomXL {
  margin-bottom: var(--spacing-xl);
}

.marginTopS {
  margin-top: var(--spacing-s);
}
`,w="_mainContent_ezkue_1",_="_article_ezkue_9",R="_wideContent_ezkue_15",D="_responsiveContainer_ezkue_21",T="_responsiveWideContent_ezkue_31",A="_responsiveArticle_ezkue_41",G="_marginBottomXL_ezkue_51",z="_marginTopS_ezkue_55",r={mainContent:w,article:_,wideContent:R,responsiveContainer:D,responsiveWideContent:T,responsiveArticle:A,marginBottomXL:G,marginTopS:z},ge={title:"Sidetyper/Ekstern/Layout",decorators:[I],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:L(P)}}}},p=()=>{const d=m.useId(),[n,h]=m.useState(1),[l,j]=m.useState(void 0),[k,S]=m.useState(!1),c=()=>{const i=n+1;h(i)};return e.jsxs("main",{className:r.mainContent,children:[e.jsx(t,{className:r.marginBottomXL,children:e.jsxs(t.List,{shouldCollapse:!0,children:[e.jsx(t.Item,{children:e.jsx(t.Link,{href:"#",children:"Breadcrumb 1"})}),e.jsx(t.Item,{children:e.jsx(t.Link,{href:"#",children:"Breadcrumb 2"})}),e.jsx(t.Item,{children:e.jsx(t.Link,{href:"#",children:"Breadcrumb 3"})}),e.jsx(t.Item,{children:e.jsx(t.Link,{href:"#",children:"Breadcrumb 4"})})]})}),e.jsxs("div",{className:r.article,children:[e.jsx(B,{as:"h1",level:2,hasSpacing:!0,children:"Eksempel på layout i publikumsløsninger"}),e.jsxs(s,{hasSpacing:!0,children:["Layouten er sentret. På større skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare én. Denne teksten ligger i en container med bredden --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: ",e.jsx(x,{href:"#",onClick:i=>{i.preventDefault(),u("Designtokens/Containers")()},children:"Containers"}),"."]})]}),e.jsx("div",{className:r.wideContent,children:e.jsx(C,{className:r.marginBottomXL,variant:"filled",titleAs:"h2",title:"Størrelser er en del av komponentene",renderIcon:()=>e.jsx(E,{size:"largePlus"}),children:"Denne Panelen ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden."})}),e.jsxs(o,{className:r.marginBottomXL,children:[n>=1&&e.jsx(o.Step,{id:`${d}-1`,variant:n===1?"active":"passive",title:"StepList har også en innebygd containerbredde",stepNumber:1,shouldAutoFocusWhenActive:!1,onNext:c,children:"Stegene i StepList har fått en bredde på --semantic-responsive-article. Dette gjør at innholdet i stegene er venstre- og høyrejustert med resten av siden."}),n>=2&&e.jsx(o.Step,{id:`${d}-2`,variant:n===2?"active":"passive",title:"Vil du gå videre?",stepNumber:2,onEdit:n>3&&n<5?()=>h(2):void 0,onNext:()=>{l?c():S(!0)},children:n===2?e.jsxs(e.Fragment,{children:[e.jsxs(v,{legend:"Vil du gå videre?",errorMessage:k?"Kryss av om du vil gå videre":void 0,hideLegend:!0,onChange:i=>{S(!1),j(i.target.value)},children:[e.jsx(v.Radio,{id:"step2radio",value:"ja",description:"Velger du ja, vil du få et positivt resultat",children:"Ja"}),e.jsx(v.Radio,{value:"nei",description:"Velger du nei, vil du få et nøytralt resultat",children:"Nei"})]}),e.jsx(s,{hasSpacing:!0,children:"Velger du ingenting og klikker på Neste-knappen, vil du få en feilmelding."}),e.jsx(b,{showErrorSummary:k,children:e.jsx(b.Error,{referenceId:"step2radio",children:"Vil du gå videre?"})})]}):e.jsx("div",{children:l})}),n>=3&&e.jsx(o.Step,{id:`${d}-3`,variant:n===3?"active":"passive",title:"Oppsummering før resultat",stepNumber:3,onNext:c,children:n===3?e.jsx(f,{color:"ochre",className:r.marginTopS,children:e.jsxs(f.Content,{children:[e.jsx(s,{hasSpacing:!0,children:"Oppsummering av valget ditt:"}),e.jsxs(g,{hasSpacing:!0,children:[e.jsx(g.Element,{children:"Du har forstått innholdet"}),e.jsx(g.Element,{children:`Du vil se et ${l==="ja"?"positivt":"nøytralt"} resultat`})]}),e.jsx(N,{children:"Jeg bekrefter at opplysningene ovenfor stemmer"})]})}):e.jsx("div",{children:"Oppsummering"})}),n>=4&&l==="ja"&&e.jsxs(o.Step,{id:`${d}-4`,title:"Positivt resultat",variant:"positiveResult",stepNumber:4,introTitle:"Dette er en overskrift.",introTitleAs:"h4",introContent:e.jsx(s,{children:"Husk å sette riktig overskrifts-tag til overskriften."}),children:[e.jsx(s,{hasSpacing:!0,children:"Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside."}),e.jsxs(a,{children:[e.jsx(a.Link,{href:"#",onClick:i=>{i.preventDefault(),u("Sidetyper/Ekstern/Kvittering","Kvittering")()},children:"Eksempel på kvittering"}),e.jsx(a.Link,{href:"https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/",target:"_blank",children:"Skjema med StepList"})]}),e.jsx(s,{children:"Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden."})]}),n>=4&&l==="nei"&&e.jsxs(o.Step,{id:`${d}-4`,title:"Nøytralt resultat",variant:"neutralResult",stepNumber:4,introTitle:"Dette er en overskrift.",introTitleAs:"h4",introContent:e.jsx(s,{children:"Husk å sette riktig overskrifts-tag til overskriften."}),children:[e.jsx(s,{hasSpacing:!0,children:"Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside."}),e.jsxs(a,{hasSpacing:!0,children:[e.jsx(a.Link,{href:"#",onClick:i=>{i.preventDefault(),u("Sidetyper/Ekstern/Kvittering","Kvittering")()},children:"Eksempel på kvittering"}),e.jsx(a.Link,{href:"https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/",target:"_blank",children:"Skjema med StepList"})]}),e.jsx(s,{children:"Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden."})]})]}),e.jsx("section",{className:r.responsiveContainer,children:"--semantic-responsive-container"}),e.jsx("section",{className:r.responsiveWideContent,children:"--semantic-responsive-wide-content"}),e.jsx("section",{className:r.responsiveArticle,children:"--semantic-responsive-article"}),e.jsx(y,{})]})};p.storyName="Standard sentrert";p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step2, setStep2] = useState<string | undefined>(undefined);
  const [hasStep2Error, setHasStep2Error] = useState(false);
  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };
  return <main className={styles.mainContent}>
      <Breadcrumbs className={styles.marginBottomXL}>
        <Breadcrumbs.List shouldCollapse>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 1'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 2'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 3'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 4'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
      <div className={styles.article}>
        <Heading as={'h1'} level={2} hasSpacing>
          {'Eksempel på layout i publikumsløsninger'}
        </Heading>
        <Paragraph hasSpacing>
          {'Layouten er sentret. På større skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare én. Denne teksten ligger i en container med bredden --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: '}
          <Link href={'#'} onClick={e => {
          e.preventDefault();
          linkTo('Designtokens/Containers')();
        }}>
            {'Containers'}
          </Link>
          {'.'}
        </Paragraph>
      </div>
      <div className={styles.wideContent}>
        <Panel className={styles.marginBottomXL} variant={'filled'} titleAs={'h2'} title={'Størrelser er en del av komponentene'} renderIcon={(): JSX.Element => <InfoIcon size={'largePlus'} />}>
          {'Denne Panelen ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden.'}
        </Panel>
      </div>
      <StepList className={styles.marginBottomXL}>
        {activeStep >= 1 && <StepList.Step id={\`\${stepId}-1\`} variant={activeStep === 1 ? 'active' : 'passive'} title={'StepList har også en innebygd containerbredde'} stepNumber={1}
      //slik at ikke første steg stjeler fokus ved initiell lasting av siden
      shouldAutoFocusWhenActive={false} onNext={onNext}>
            {'Stegene i StepList har fått en bredde på --semantic-responsive-article. Dette gjør at innholdet i stegene er venstre- og høyrejustert med resten av siden.'}
          </StepList.Step>}

        {activeStep >= 2 && <StepList.Step id={\`\${stepId}-2\`} variant={activeStep === 2 ? 'active' : 'passive'} title={'Vil du gå videre?'} stepNumber={2} onEdit={activeStep > 3 && activeStep < 5 ? (): void => setActiveStep(2) : undefined} onNext={(): void => {
        if (step2) {
          onNext();
        } else {
          setHasStep2Error(true);
        }
      }}>
            {activeStep === 2 ? <>
                <RadioGroup legend={'Vil du gå videre?'} errorMessage={hasStep2Error ? 'Kryss av om du vil gå videre' : undefined} hideLegend onChange={(e): void => {
            setHasStep2Error(false);
            setStep2(e.target.value);
          }}>
                  <RadioGroup.Radio id={'step2radio'} value={'ja'} description={'Velger du ja, vil du få et positivt resultat'}>
                    {'Ja'}
                  </RadioGroup.Radio>
                  <RadioGroup.Radio value={'nei'} description={'Velger du nei, vil du få et nøytralt resultat'}>
                    {'Nei'}
                  </RadioGroup.Radio>
                </RadioGroup>
                <Paragraph hasSpacing>
                  {'Velger du ingenting og klikker på Neste-knappen, vil du få en feilmelding.'}
                </Paragraph>
                <ErrorSummary showErrorSummary={hasStep2Error}>
                  <ErrorSummary.Error referenceId={'step2radio'}>
                    {'Vil du gå videre?'}
                  </ErrorSummary.Error>
                </ErrorSummary>
              </> : <div>{step2}</div>}
          </StepList.Step>}

        {activeStep >= 3 && <StepList.Step id={\`\${stepId}-3\`} variant={activeStep === 3 ? 'active' : 'passive'} title={'Oppsummering før resultat'} stepNumber={3} onNext={onNext}>
            {activeStep === 3 ? <Card color={'ochre'} className={styles.marginTopS}>
                <Card.Content>
                  <Paragraph hasSpacing>
                    {'Oppsummering av valget ditt:'}
                  </Paragraph>
                  <List hasSpacing>
                    <List.Element>{'Du har forstått innholdet'}</List.Element>
                    <List.Element>{\`Du vil se et \${step2 === 'ja' ? 'positivt' : 'nøytralt'} resultat\`}</List.Element>
                  </List>
                  <Checkbox>
                    {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                  </Checkbox>
                </Card.Content>
              </Card> : <div>{'Oppsummering'}</div>}
          </StepList.Step>}

        {activeStep >= 4 && step2 === 'ja' && <StepList.Step id={\`\${stepId}-4\`} title={'Positivt resultat'} variant={'positiveResult'} stepNumber={4} introTitle={'Dette er en overskrift.'} introTitleAs={'h4'} introContent={<Paragraph>
                {'Husk å sette riktig overskrifts-tag til overskriften.'}
              </Paragraph>}>
            <Paragraph hasSpacing>
              {'Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside.'}
            </Paragraph>
            <LinkGroup>
              <LinkGroup.Link href={'#'} onClick={e => {
            e.preventDefault();
            linkTo('Sidetyper/Ekstern/Kvittering', 'Kvittering')();
          }}>
                {'Eksempel på kvittering'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/'} target={'_blank'}>
                {'Skjema med StepList'}
              </LinkGroup.Link>
            </LinkGroup>
            <Paragraph>
              {'Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden.'}
            </Paragraph>
          </StepList.Step>}

        {activeStep >= 4 && step2 === 'nei' && <StepList.Step id={\`\${stepId}-4\`} title={'Nøytralt resultat'} variant={'neutralResult'} stepNumber={4} introTitle={'Dette er en overskrift.'} introTitleAs={'h4'} introContent={<Paragraph>
                {'Husk å sette riktig overskrifts-tag til overskriften.'}
              </Paragraph>}>
            <Paragraph hasSpacing>
              {'Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside.'}
            </Paragraph>
            <LinkGroup hasSpacing>
              <LinkGroup.Link href={'#'} onClick={e => {
            e.preventDefault();
            linkTo('Sidetyper/Ekstern/Kvittering', 'Kvittering')();
          }}>
                {'Eksempel på kvittering'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/'} target={'_blank'}>
                {'Skjema med StepList'}
              </LinkGroup.Link>
            </LinkGroup>
            <Paragraph>
              {'Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden.'}
            </Paragraph>
          </StepList.Step>}
      </StepList>
      <section className={styles.responsiveContainer}>
        {'--semantic-responsive-container'}
      </section>
      <section className={styles.responsiveWideContent}>
        {'--semantic-responsive-wide-content'}
      </section>
      <section className={styles.responsiveArticle}>
        {'--semantic-responsive-article'}
      </section>
      <ScrollToTopButton />
    </main>;
}`,...p.parameters?.docs?.source}}};const he=["StandardLayout"];export{p as StandardLayout,he as __namedExportsOrder,ge as default};
//# sourceMappingURL=ExternalLayout.stories-DqYSAyp6.js.map
