import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-7h80QhK_.js";import{B as f}from"./index-TStLVSlm.js";import{d as y}from"./index-EsEcB_zD.js";import{a as o}from"./index-DmQJLmMR.js";import{c as e}from"./helpers-BRYKCfPN.js";import{S as i}from"./icon.systems-DnY32ltf.js";import{e as v}from"./stories.utils-Ys3NG0dr.js";o.Checkbox.displayName="CheckboxGroup.Checkbox";const j={component:o,title:"Komponenter/CheckboxGroup",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(i),mapping:i,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:y.t("Shared:shared.Help")}}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},onHelpToggle:{control:!1,table:{category:e.event}}},args:{children:[r.jsx(o.Checkbox,{children:"Har barn over 16 år"},"checkbox1"),r.jsx(o.Checkbox,{children:"Har barn under 12 år"},"checkbox2"),r.jsx(o.Checkbox,{children:"Har ingen barn"},"checkbox3")],legend:"Velg det som passer deg"}},n={},t={render:G=>{const l=[{label:"Har barn over 16 år"},{label:"Har barn under 12 år"},{label:"Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"},{label:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},{label:"Er enslig forsørger"}],[c,k]=S.useState(new Array(l.length).fill(!1)),x=s=>{const a=c.map((p,C)=>C===s?!p:p);k(a)};return r.jsxs(r.Fragment,{children:[r.jsx(o,{legend:"Velg det som gjelder deg",children:l.map((s,a)=>r.jsx(o.Checkbox,{checked:c[a],onChange:()=>x(a),children:s.label},a))}),r.jsx(f,{children:"Neste side"})]})}};t.parameters=v;var d,b,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,m,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const options = [{
      label: 'Har barn over 16 år'
    }, {
      label: 'Har barn under 12 år'
    }, {
      label: 'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning'
    }, {
      label: 'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'
    }, {
      label: 'Er enslig forsørger'
    }];
    const [checkedState, setCheckedState] = useState(new Array(options.length).fill(false));
    const handleOnChange = (position: number): void => {
      const updatedCheckedState = checkedState.map((option, index) => index === position ? !option : option);
      setCheckedState(updatedCheckedState);
    };
    return <>
        <CheckboxGroup legend={'Velg det som gjelder deg'}>
          {options.map((option, index) => {
          return <CheckboxGroup.Checkbox key={index} checked={checkedState[index]} onChange={(): void => handleOnChange(index)}>
                {option.label}
              </CheckboxGroup.Checkbox>;
        })}
        </CheckboxGroup>
        <Button>{'Neste side'}</Button>
      </>;
  }
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const H=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:n,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{N as C,t as E};
//# sourceMappingURL=CheckboxGroup.stories-CBH8-r4Z.js.map
