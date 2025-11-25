import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as o}from"./index-ClcD9ViR.js";import{S as r,O as L}from"./index-BCjGDH3F.js";import{R as u,E as c}from"./index-DEJUArlV.js";import{P as d,L as p}from"./index-7bHEsQL_.js";import{c as N}from"./helpers-Q4uYuiE4.js";import{e as R}from"./stories.utils-BbHpJfAb.js";const y={component:r,title:"Komponenter/StepList/StepList",argTypes:{children:{table:{category:N.props}}},args:{children:[e.jsx(r.Step,{stepNumber:1,title:"Overskrift",variant:"active",children:"Innhold"},"step2"),e.jsx(r.Step,{stepNumber:2,title:"Overskrift",children:"Innhold"},"step1")]}},i={},s={render:P=>{const n=o.useId(),[t,l]=o.useState(1),[a,b]=o.useState(void 0),[m,S]=o.useState(!1),g=()=>{const v=t+1;l(v)};return e.jsxs(r,{children:[t>=1&&e.jsx(r.Step,{id:`${n}-1`,variant:t===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,shouldAutoFocusWhenActive:!1,onEdit:t>1&&t<4?()=>l(1):void 0,onNext:g,children:"Varer og tjenester"}),t>=2&&e.jsx(r.Step,{id:`${n}-2`,variant:t===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:t>2&&t<4?()=>l(2):void 0,onNext:g,children:"Selger"}),t>=3&&e.jsx(r.Step,{id:`${n}-3`,variant:t===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onNext:()=>{a?g():S(!0)},children:t===3?e.jsxs(e.Fragment,{children:[e.jsxs(L,{title:"Hva er egen regning og risiko?",children:[e.jsxs(d,{hasSpacing:!0,children:["At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader."," "]}),e.jsx(d,{children:"I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd."})]}),e.jsxs(u,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko?",errorMessage:m?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:v=>{S(!1),b(v.target.value)},children:[e.jsx(u.Radio,{value:"ja",children:"Ja"}),e.jsx(u.Radio,{value:"nei",children:"Nei"})]}),e.jsx(c,{showErrorSummary:m,children:e.jsx(c.Error,{referenceId:"step3radio",children:"Selger du varer og tjenester for egen regning?"})})]}):e.jsx("div",{children:a})}),t>=4&&a==="ja"&&e.jsxs(r.Step,{id:`${n}-4`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:4,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:e.jsx(d,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."}),children:[e.jsx(d,{children:"Du må gjøre følgende:"}),e.jsxs(p,{as:"ol",children:[e.jsx(p.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),e.jsxs(p.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),e.jsxs(p.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t>=4&&a==="nei"&&e.jsx(r.Step,{id:`${n}-4`,title:"neutralt resultat",variant:"neutralResult",stepNumber:4,children:"more brødtekst"})]})}};s.parameters=R;var h,f,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{} satisfies Story",...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,x,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      shouldAutoFocusWhenActive={false} onEdit={activeStep > 1 && activeStep < 4 ? (): void => setActiveStep(1) : undefined} onNext={onNext}>
            {'Varer og tjenester'}
          </StepList.Step>}

        {activeStep >= 2 && <StepList.Step id={\`\${stepId}-2\`} variant={activeStep === 2 ? 'active' : 'passive'} title={'Hva gjør du?'} stepNumber={2} onEdit={activeStep > 2 && activeStep < 4 ? (): void => setActiveStep(2) : undefined} onNext={onNext}>
            {'Selger'}
          </StepList.Step>}

        {activeStep >= 3 && <StepList.Step id={\`\${stepId}-3\`} variant={activeStep === 3 ? 'active' : 'passive'} title={'Salg av varer og tjenester'} stepNumber={3} onNext={(): void => {
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

        {activeStep >= 4 && step3 === 'ja' && <StepList.Step id={\`\${stepId}-4\`} title={'Vårt veiledende svar'} variant={'positiveResult'} stepNumber={4} introTitle={'Virksomheten skal registreres som særavgiftspliktig.'} introTitleAs={'h4'} introContent={<Paragraph>
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

        {activeStep >= 4 && step3 === 'nei' && <StepList.Step id={\`\${stepId}-4\`} title={'neutralt resultat'} variant={'neutralResult'} stepNumber={4}>
            {'more brødtekst'}
          </StepList.Step>}
      </StepList>;
  }
} satisfies Story`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const I=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:i,__namedExportsOrder:I,default:y},Symbol.toStringTag,{value:"Module"}));export{s as E,G as S};
//# sourceMappingURL=StepList.stories-Cq5aWw3l.js.map
