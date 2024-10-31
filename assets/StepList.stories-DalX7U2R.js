import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{S as r,O as N}from"./index-DHVI6kQC.js";import{R as u,E as f}from"./index-CPXmgfFQ.js";import{P as p,L as g}from"./index-BFUMlpsH.js";import{c as R}from"./helpers-Dccz2jQ-.js";import{e as y}from"./stories.utils-Ys3NG0dr.js";const I={component:r,title:"Komponenter/StepList/StepList",argTypes:{children:{table:{category:R.props}}},args:{children:[e.jsx(r.Step,{stepNumber:1,title:"Overskrift",variant:"active",children:"Innhold"},"step2"),e.jsx(r.Step,{stepNumber:2,title:"Overskrift",children:"Innhold"},"step1")]}},i={},n={render:$=>{const s=d.useId(),[t,l]=d.useState(1),[a,L]=d.useState(void 0),[S,c]=d.useState(!1),v=()=>{const o=t+1;l(o),setTimeout(()=>{const m=document.getElementById(`${s}-${o}-focus-target`);m==null||m.focus()},0)};return e.jsxs(r,{children:[t>=1&&e.jsx(r.Step,{id:`${s}-1`,variant:t===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,onEdit:t>1&&t<4?()=>l(1):void 0,onNext:v,children:"Varer og tjenester"}),t>=2&&e.jsx(r.Step,{id:`${s}-2`,variant:t===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:t>2&&t<4?()=>l(2):void 0,onNext:v,children:"Selger"}),t>=3&&e.jsx(r.Step,{id:`${s}-3`,variant:t===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onNext:()=>{a?v():c(!0)},children:t===3?e.jsxs(e.Fragment,{children:[e.jsxs(N,{title:"Hva er egen regning og risiko?",children:[e.jsxs(p,{hasSpacing:!0,children:["At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader."," "]}),e.jsx(p,{children:"I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd."})]}),e.jsxs(u,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko? Selger du varer og tjenester for egen regning og risiko?",errorMessage:S?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:o=>{c(!1),L(o.target.value)},children:[e.jsx(u.Radio,{value:"ja",children:"Ja"}),e.jsx(u.Radio,{value:"nei",children:"Nei"})]}),e.jsx(f,{showErrorSummary:S,children:e.jsx(f.Error,{referenceId:"step3radio",children:"Selger du varer og tjenester for egen regning?"})})]}):e.jsx("div",{children:a})}),t>=4&&a==="ja"&&e.jsxs(r.Step,{id:`${s}-4`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:4,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:e.jsx(p,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."}),children:[e.jsx(p,{children:"Du må gjøre følgende:"}),e.jsxs(g,{as:"ol",children:[e.jsx(g.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),e.jsxs(g.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),e.jsxs(g.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t>=4&&a==="nei"&&e.jsx(r.Step,{id:`${s}-4`,title:"neutralt resultat",variant:"neutralResult",stepNumber:4,children:"more brødtekst"})]})}};n.parameters=y;var h,k,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{} satisfies Story",...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var x,E,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const stepId = useId();
    const [activeStep, setActiveStep] = useState(1);
    const [step3, setStep3] = useState<string | undefined>(undefined);
    const [hasStep3Error, setHasStep3Error] = useState(false);
    const onNext = (): void => {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      setTimeout((): void => {
        const el = document.getElementById(\`\${stepId}-\${nextStep}-focus-target\`);
        el?.focus();
      }, 0);
    };
    return <StepList>
        {activeStep >= 1 && <StepList.Step id={\`\${stepId}-1\`} variant={activeStep === 1 ? 'active' : 'passive'} title={'Hva holder du på med?'} stepNumber={1} onEdit={activeStep > 1 && activeStep < 4 ? (): void => setActiveStep(1) : undefined} onNext={onNext}>
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
} satisfies Story`,...(b=(E=n.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const P=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:n,Preview:i,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{n as E,G as S};
//# sourceMappingURL=StepList.stories-DalX7U2R.js.map
