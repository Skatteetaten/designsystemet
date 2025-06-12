import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-D_ouKaeX.js";import{S as r,O as N}from"./index-BKQUjYcP.js";import{C as S}from"./index-Bm-dj5jB.js";import{R as m,E as h,C as R}from"./index-DzkGBFys.js";import{P as g,L as n}from"./index-DsfABT8I.js";import{c as y}from"./helpers-B7KPg_So.js";import{e as C}from"./stories.utils-Ys3NG0dr.js";const I={component:r,title:"Komponenter/StepList/StepList",argTypes:{children:{control:!1,table:{category:y.props}}},args:{children:[e.jsx(r.Step,{stepNumber:1,title:"Overskrift",variant:"active",children:"Innhold"},"step2"),e.jsx(r.Step,{stepNumber:2,title:"Overskrift",children:"Innhold"},"step1")]}},a={},i={render:D=>{const s=l.useId(),[t,o]=l.useState(1),[d,L]=l.useState(void 0),[u,c]=l.useState(!1),p=()=>{const v=t+1;o(v)};return e.jsxs(r,{children:[t>=1&&e.jsx(r.Step,{id:`${s}-1`,variant:t===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,shouldAutoFocusWhenActive:!1,onEdit:t>1&&t<5?()=>o(1):void 0,onNext:p,children:"Varer og tjenester"}),t>=2&&e.jsx(r.Step,{id:`${s}-2`,variant:t===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:t>2&&t<5?()=>o(2):void 0,onNext:p,children:"Selger"}),t>=3&&e.jsx(r.Step,{id:`${s}-3`,variant:t===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onEdit:t>3&&t<5?()=>o(2):void 0,onNext:()=>{d?p():c(!0)},children:t===3?e.jsxs(e.Fragment,{children:[e.jsxs(N,{title:"Hva er egen regning og risiko?",children:[e.jsxs(g,{hasSpacing:!0,children:["At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader."," "]}),e.jsx(g,{children:"I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd."})]}),e.jsxs(m,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko?",errorMessage:u?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:v=>{c(!1),L(v.target.value)},children:[e.jsx(m.Radio,{value:"ja",children:"Ja"}),e.jsx(m.Radio,{value:"nei",children:"Nei"})]}),e.jsx(h,{showErrorSummary:u,children:e.jsx(h.Error,{referenceId:"step3radio",children:"Selger du varer og tjenester for egen regning?"})})]}):e.jsx("div",{children:d})}),t>=4&&e.jsx(r.Step,{id:`${s}-4`,variant:t===4?"active":"passive",title:"Oppsummering før innsending",stepNumber:4,onNext:p,children:t===4?e.jsx(S,{color:"ochre",className:"topSpacingS",children:e.jsxs(S.Content,{children:[e.jsxs(n,{children:[e.jsx(n.Element,{children:"Du jobber med varer og tjenester"}),e.jsx(n.Element,{children:"Du selger"}),e.jsx(n.Element,{children:"Du selger for egen regning og risiko"})]}),e.jsx(R,{children:"Jeg bekrefter at opplysningene ovenfor stemmer"})]})}):e.jsx("div",{children:"Oppsummering"})}),t>=5&&d==="ja"&&e.jsxs(r.Step,{id:`${s}-5`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:5,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:e.jsx(g,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."}),children:[e.jsx(g,{children:"Du må gjøre følgende:"}),e.jsxs(n,{as:"ol",children:[e.jsx(n.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),e.jsxs(n.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),e.jsxs(n.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t>=5&&d==="nei"&&e.jsx(r.Step,{id:`${s}-5`,title:"neutralt resultat",variant:"neutralResult",stepNumber:5,children:"more brødtekst"})]})}};i.parameters=C;var f,k,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{} satisfies Story",...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var x,E,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const stepId = useId();
    const [activeStep, setActiveStep] = useState(1);
    const [step3, setStep3] = useState<string | undefined>(undefined);
    const [hasStep3Error, setHasStep3Error] = useState(false);
    const onNext = (): void => {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
    };
    return <StepList>
        {activeStep >= 1 && <StepList.Step id={\`\${stepId}-1\`} variant={activeStep === 1 ? 'active' : 'passive'} title={'Hva holder du på med?'} stepNumber={1}
      //slik at ikke første steg stjeler fokus ved initiell lasting av siden
      shouldAutoFocusWhenActive={false} onEdit={activeStep > 1 && activeStep < 5 ? (): void => setActiveStep(1) : undefined} onNext={onNext}>
            {'Varer og tjenester'}
          </StepList.Step>}

        {activeStep >= 2 && <StepList.Step id={\`\${stepId}-2\`} variant={activeStep === 2 ? 'active' : 'passive'} title={'Hva gjør du?'} stepNumber={2} onEdit={activeStep > 2 && activeStep < 5 ? (): void => setActiveStep(2) : undefined} onNext={onNext}>
            {'Selger'}
          </StepList.Step>}

        {activeStep >= 3 && <StepList.Step id={\`\${stepId}-3\`} variant={activeStep === 3 ? 'active' : 'passive'} title={'Salg av varer og tjenester'} stepNumber={3} onEdit={activeStep > 3 && activeStep < 5 ? (): void => setActiveStep(2) : undefined} onNext={(): void => {
        if (step3) {
          onNext();
        } else {
          setHasStep3Error(true);
        }
      }}>
            {activeStep === 3 ? <>
                <OpenClose title={'Hva er egen regning og risiko?'}>
                  <Paragraph hasSpacing>
                    {'At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader.'}{' '}
                  </Paragraph>
                  <Paragraph>
                    {'I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd.'}
                  </Paragraph>
                </OpenClose>
                <RadioGroup id={'step3radio'} legend={'Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko?'} errorMessage={hasStep3Error ? 'Kryss av hvorvidt du selger varer  og tjenester' : undefined} hideLegend onChange={(e): void => {
            setHasStep3Error(false);
            setStep3(e.target.value);
          }}>
                  <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
                  <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
                </RadioGroup>
                <ErrorSummary showErrorSummary={hasStep3Error}>
                  <ErrorSummary.Error referenceId={'step3radio'}>
                    {'Selger du varer og tjenester for egen regning?'}
                  </ErrorSummary.Error>
                </ErrorSummary>
              </> : <div>{step3}</div>}
          </StepList.Step>}

        {activeStep >= 4 && <StepList.Step id={\`\${stepId}-4\`} variant={activeStep === 4 ? 'active' : 'passive'} title={'Oppsummering før innsending'} stepNumber={4} onNext={onNext}>
            {activeStep === 4 ? <Card color={'ochre'} className={'topSpacingS'}>
                <Card.Content>
                  <List>
                    <List.Element>
                      {'Du jobber med varer og tjenester'}
                    </List.Element>
                    <List.Element>{'Du selger'}</List.Element>
                    <List.Element>
                      {'Du selger for egen regning og risiko'}
                    </List.Element>
                  </List>
                  <Checkbox>
                    {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                  </Checkbox>
                </Card.Content>
              </Card> : <div>{'Oppsummering'}</div>}
          </StepList.Step>}

        {activeStep >= 5 && step3 === 'ja' && <StepList.Step id={\`\${stepId}-5\`} title={'Vårt veiledende svar'} variant={'positiveResult'} stepNumber={5} introTitle={'Virksomheten skal registreres som særavgiftspliktig.'} introTitleAs={'h4'} introContent={<Paragraph>
                {'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'}
              </Paragraph>}>
            <Paragraph>{'Du må gjøre følgende:'}</Paragraph>
            <List as={'ol'}>
              <List.Element>
                {'Du må bestemme hvilken organisasjonsform som passer best.'}
              </List.Element>
              <List.Element>
                {'Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet'}
                {'registermelding'}
              </List.Element>
              <List.Element>
                {'Dersom bedriften din har avgiftspliktig omsetning og/eller uttak'}
                {'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'}
                {'registrere virksomheten i Merverdiavgiftsregisteret.'}
              </List.Element>
            </List>
          </StepList.Step>}

        {activeStep >= 5 && step3 === 'nei' && <StepList.Step id={\`\${stepId}-5\`} title={'neutralt resultat'} variant={'neutralResult'} stepNumber={5}>
            {'more brødtekst'}
          </StepList.Step>}
      </StepList>;
  }
} satisfies Story`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const A=["Preview","Examples"],F=Object.freeze(Object.defineProperty({__proto__:null,Examples:i,Preview:a,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{i as E,F as S};
//# sourceMappingURL=StepList.stories-u6cwQldV.js.map
