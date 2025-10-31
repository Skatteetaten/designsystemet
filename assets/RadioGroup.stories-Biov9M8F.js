import{j as r,e,h as d,c as b,r as n}from"./iframe-C2uFIQ6s.js";import{h as S,c as a}from"./index-k3V7IYJD.js";import{S as p}from"./icon.systems-CMWPGVc8.js";import{e as j}from"./stories.utils-CZ5hej_8.js";a.Radio.displayName="RadioGroup.Radio";const x={component:a,title:"Komponenter/RadioGroup/RadioGroup",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(p),mapping:p,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},shadowRootNode:{control:!1,table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:b()}}},variant:{table:{category:e.props,defaultValue:{summary:S()}}},defaultValue:{control:"text",table:{category:e.props}},selectedValue:{control:"text",table:{category:e.props}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...d},onChange:{...d},onHelpToggle:{control:!1,table:{category:e.event}}},args:{legend:"Type virksomhet",children:[r.jsx(a.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radio1"),r.jsx(a.Radio,{value:"selskap",children:"Aksjeselskap"},"radio2"),r.jsx(a.Radio,{value:"annet",children:"Annet"},"radio3")]}},o={},t={render:E=>{const[h,y]=n.useState("foretak"),[l,k]=n.useState(""),[f,i]=n.useState("");return r.jsxs(r.Fragment,{children:[r.jsxs(a,{legend:"Type virksomhet",selectedValue:h,required:!0,onChange:s=>y(s.target.value),children:[r.jsx(a.Radio,{value:"foretak",children:"Enkeltpersonsforetak"}),r.jsx(a.Radio,{value:"selskap",children:"Aksjeselskap"}),r.jsx(a.Radio,{value:"annet",children:"Annet"})]}),r.jsxs(a,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",selectedValue:l,errorMessage:f,required:!0,onBlur:l?void 0:()=>i("Svar på om du har sendt inn skattemeldingen."),onChange:s=>{k(s.target.value),i("")},children:[r.jsx(a.Radio,{value:"ja",children:"Ja"}),r.jsx(a.Radio,{value:"nei",children:"Nei"})]})]})}};t.parameters=j;var u,c,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{} satisfies Story",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,v,R;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(v=t.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const G=["Preview","Examples"],q=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:G,default:x},Symbol.toStringTag,{value:"Module"}));export{t as E,q as R};
//# sourceMappingURL=RadioGroup.stories-Biov9M8F.js.map
