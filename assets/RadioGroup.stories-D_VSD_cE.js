import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-7h80QhK_.js";import{d as f}from"./index-EsEcB_zD.js";import{d as b,R as r}from"./index-DmQJLmMR.js";import{c as e,h as l}from"./helpers-BRYKCfPN.js";import{S as i}from"./icon.systems-DnY32ltf.js";import{e as k}from"./stories.utils-Ys3NG0dr.js";r.Radio.displayName="RadioGroup.Radio";const x={component:r,title:"Komponenter/RadioGroup/RadioGroup",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(i),mapping:i,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},shadowRootNode:{control:!1,table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:f.t("Shared:shared.Help")}}},variant:{table:{category:e.props,defaultValue:{summary:b()}}},defaultValue:{control:"text",table:{category:e.props}},selectedValue:{control:"text",table:{category:e.props}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...l},onChange:{...l},onHelpToggle:{control:!1,table:{category:e.event}}},args:{legend:"Type virksomhet",children:[a.jsx(r.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radio1"),a.jsx(r.Radio,{value:"selskap",children:"Aksjeselskap"},"radio2"),a.jsx(r.Radio,{value:"annet",children:"Annet"},"radio3")]}},o={},t={render:G=>{const[R,y]=n.useState("foretak"),[h,v]=n.useState("");return a.jsxs(a.Fragment,{children:[a.jsxs(r,{legend:"Type virksomhet",selectedValue:R,required:!0,onChange:s=>y(s.target.value),children:[a.jsx(r.Radio,{value:"foretak",children:"Enkeltpersonsforetak"}),a.jsx(r.Radio,{value:"selskap",children:"Aksjeselskap"}),a.jsx(r.Radio,{value:"annet",children:"Annet"})]}),a.jsxs(r,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",selectedValue:h,required:!0,onChange:s=>v(s.target.value),children:[a.jsx(r.Radio,{value:"ja",children:"Ja"}),a.jsx(r.Radio,{value:"nei",children:"Nei"})]})]})}};t.parameters=k;var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [type, setType] = useState<string>('foretak');
    const [svar, setSvar] = useState<string>('');
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

        <RadioGroup variant={'horizontal'} legend={'Har du sendt inn skattemeldingen?'} selectedValue={svar} required onChange={(e): void => setSvar(e.target.value)}>
          <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
          <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
        </RadioGroup>
      </>;
  }
} satisfies Story`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const S=["Preview","Examples"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{t as E,H as R};
//# sourceMappingURL=RadioGroup.stories-D_VSD_cE.js.map
