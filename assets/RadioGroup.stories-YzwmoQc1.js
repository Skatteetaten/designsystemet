import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-D_ouKaeX.js";import{d as b}from"./index-ChzTQA-a.js";import{d as k,R as a}from"./index-DzkGBFys.js";import{c as e,h as d}from"./helpers-B7KPg_So.js";import{S as p}from"./icon.systems-BnMBg8hx.js";import{e as x}from"./stories.utils-Ys3NG0dr.js";a.Radio.displayName="RadioGroup.Radio";const G={component:a,title:"Komponenter/RadioGroup/RadioGroup",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(p),mapping:p,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},shadowRootNode:{control:!1,table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:b.t("Shared:shared.Help")}}},variant:{table:{category:e.props,defaultValue:{summary:k()}}},defaultValue:{control:"text",table:{category:e.props}},selectedValue:{control:"text",table:{category:e.props}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...d},onChange:{...d},onHelpToggle:{control:!1,table:{category:e.event}}},args:{legend:"Type virksomhet",children:[r.jsx(a.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radio1"),r.jsx(a.Radio,{value:"selskap",children:"Aksjeselskap"},"radio2"),r.jsx(a.Radio,{value:"annet",children:"Annet"},"radio3")]}},o={},t={render:E=>{const[h,y]=n.useState("foretak"),[l,f]=n.useState(""),[S,i]=n.useState("");return r.jsxs(r.Fragment,{children:[r.jsxs(a,{legend:"Type virksomhet",selectedValue:h,required:!0,onChange:s=>y(s.target.value),children:[r.jsx(a.Radio,{value:"foretak",children:"Enkeltpersonsforetak"}),r.jsx(a.Radio,{value:"selskap",children:"Aksjeselskap"}),r.jsx(a.Radio,{value:"annet",children:"Annet"})]}),r.jsxs(a,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",selectedValue:l,errorMessage:S,required:!0,onBlur:l?void 0:()=>i("Svar på om du har sendt inn skattemeldingen."),onChange:s=>{f(s.target.value),i("")},children:[r.jsx(a.Radio,{value:"ja",children:"Ja"}),r.jsx(a.Radio,{value:"nei",children:"Nei"})]})]})}};t.parameters=x;var u,c,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{} satisfies Story",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,v,R;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(v=t.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const j=["Preview","Examples"],C=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:j,default:G},Symbol.toStringTag,{value:"Module"}));export{t as E,C as R};
//# sourceMappingURL=RadioGroup.stories-YzwmoQc1.js.map
