import{j as a,c as e,h as d,b as v,r as n}from"./iframe-LV2IHoVd.js";import{j as y,R as r}from"./index-V6snDp7t.js";import{S as p}from"./icon.systems-BccAeqUG.js";import{e as R}from"./stories.utils-DxY1qhhU.js";r.Radio.displayName="RadioGroup.Radio";const h={component:r,title:"Komponenter/RadioGroup",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(p),mapping:p,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},readOnly:{table:{category:e.props}},shadowRootNode:{control:!1,table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:v()}}},variant:{table:{category:e.props,defaultValue:{summary:y()}}},defaultValue:{control:"text",table:{category:e.props}},selectedValue:{control:"text",table:{category:e.props}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},ariaDescribedBy:{table:{category:e.aria}},onBlur:{...d},onChange:{...d},onHelpToggle:{control:!1,table:{category:e.event}}},args:{legend:"Type virksomhet",children:[a.jsx(r.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radio1"),a.jsx(r.Radio,{value:"selskap",children:"Aksjeselskap"},"radio2"),a.jsx(r.Radio,{value:"annet",children:"Annet"},"radio3")]}},o={},t={render:b=>{const[u,c]=n.useState("foretak"),[l,g]=n.useState(""),[m,i]=n.useState("");return a.jsxs(a.Fragment,{children:[a.jsxs(r,{legend:"Type virksomhet",selectedValue:u,required:!0,onChange:s=>c(s.target.value),children:[a.jsx(r.Radio,{value:"foretak",children:"Enkeltpersonsforetak"}),a.jsx(r.Radio,{value:"selskap",children:"Aksjeselskap"}),a.jsx(r.Radio,{value:"annet",children:"Annet"})]}),a.jsxs(r,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",selectedValue:l,errorMessage:m,required:!0,onBlur:l?void 0:()=>i("Svar på om du har sendt inn skattemeldingen."),onChange:s=>{g(s.target.value),i("")},children:[a.jsx(r.Radio,{value:"ja",children:"Ja"}),a.jsx(r.Radio,{value:"nei",children:"Nei"})]})]})}};t.parameters=R;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{} satisfies Story",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [type, setType] = useState<string>('foretak');
    const [svar, setSvar] = useState<string>('');
    const [svarError, setSvarError] = useState<string>('');
    return <>
        <RadioGroup legend={'Type virksomhet'} selectedValue={type} required onChange={(e): void => setType(e.target.value)}>
          <RadioGroup.Radio value={'foretak'}>
            {'Enkeltpersonsforetak'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'selskap'}>
            {'Aksjeselskap'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
        </RadioGroup>

        <RadioGroup variant={'horizontal'} legend={'Har du sendt inn skattemeldingen?'} selectedValue={svar} errorMessage={svarError} required onBlur={svar ? undefined : (): void => setSvarError('Svar på om du har sendt inn skattemeldingen.')} onChange={(e): void => {
        setSvar(e.target.value);
        setSvarError('');
      }}>
          <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
          <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
        </RadioGroup>
      </>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const k=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{t as E,G as R};
//# sourceMappingURL=RadioGroup.stories-nfAoI_ya.js.map
