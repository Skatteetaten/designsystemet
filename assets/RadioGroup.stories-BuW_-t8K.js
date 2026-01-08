import{j as r,e,h as d,c as v,r as n}from"./iframe-Br1Xu9zr.js";import{k as R,c as a}from"./index-B55DkYFu.js";import{S as p}from"./icon.systems-BmhPSTgm.js";import{e as h}from"./stories.utils-CZ5hej_8.js";a.Radio.displayName="RadioGroup.Radio";const y={component:a,title:"Komponenter/RadioGroup",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(p),mapping:p,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},shadowRootNode:{control:!1,table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:v()}}},variant:{table:{category:e.props,defaultValue:{summary:R()}}},defaultValue:{control:"text",table:{category:e.props}},selectedValue:{control:"text",table:{category:e.props}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...d},onChange:{...d},onHelpToggle:{control:!1,table:{category:e.event}}},args:{legend:"Type virksomhet",children:[r.jsx(a.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radio1"),r.jsx(a.Radio,{value:"selskap",children:"Aksjeselskap"},"radio2"),r.jsx(a.Radio,{value:"annet",children:"Annet"},"radio3")]}},o={},t={render:f=>{const[u,c]=n.useState("foretak"),[l,g]=n.useState(""),[m,i]=n.useState("");return r.jsxs(r.Fragment,{children:[r.jsxs(a,{legend:"Type virksomhet",selectedValue:u,required:!0,onChange:s=>c(s.target.value),children:[r.jsx(a.Radio,{value:"foretak",children:"Enkeltpersonsforetak"}),r.jsx(a.Radio,{value:"selskap",children:"Aksjeselskap"}),r.jsx(a.Radio,{value:"annet",children:"Annet"})]}),r.jsxs(a,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",selectedValue:l,errorMessage:m,required:!0,onBlur:l?void 0:()=>i("Svar på om du har sendt inn skattemeldingen."),onChange:s=>{g(s.target.value),i("")},children:[r.jsx(a.Radio,{value:"ja",children:"Ja"}),r.jsx(a.Radio,{value:"nei",children:"Nei"})]})]})}};t.parameters=h;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{} satisfies Story",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};const k=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:k,default:y},Symbol.toStringTag,{value:"Module"}));export{t as E,G as R};
//# sourceMappingURL=RadioGroup.stories-BuW_-t8K.js.map
