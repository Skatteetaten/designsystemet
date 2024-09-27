import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as S}from"./index-BwDkhjyp.js";import{B as y}from"./index-DMYlLpXe.js";import{d as f}from"./index-CI44Z2h3.js";import{a as r}from"./index-FK3RsA-s.js";import{c as e}from"./helpers-CDRJ97Ot.js";import{S as i}from"./icon.systems-Cj7Nt_Zb.js";import{e as v}from"./stories.utils-DTsHYhvm.js";r.Checkbox={...r.Checkbox};r.Checkbox.displayName="CheckboxGroup.Checkbox";const j={component:r,title:"Komponenter/CheckboxGroup",argTypes:{children:{table:{category:e.props}},classNames:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(i),mapping:i,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:f.t("Shared:shared.Help")}}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},onHelpToggle:{table:{category:e.event}}},args:{children:[o.jsx(r.Checkbox,{children:"Har barn over 16 år"},"checkbox1"),o.jsx(r.Checkbox,{children:"Har barn under 12 år"},"checkbox2"),o.jsx(r.Checkbox,{children:"Har ingen barn"},"checkbox3")],legend:"Velg det som passer deg"}},n={},t={render:H=>{const l=[{label:"Har barn over 16 år"},{label:"Har barn under 12 år"},{label:"Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"},{label:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},{label:"Er enslig forsørger"}],[c,u]=S.useState(new Array(l.length).fill(!1)),k=s=>{const a=c.map((p,C)=>C===s?!p:p);u(a)};return o.jsxs(o.Fragment,{children:[o.jsx(r,{legend:"Velg det som gjelder deg",children:l.map((s,a)=>o.jsx(r.Checkbox,{checked:c[a],onChange:()=>k(a),children:s.label},a))}),o.jsx(y,{children:"Neste side"})]})}};t.parameters=v;var d,b,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,m,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const E=["Preview","Examples"],F=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:n,__namedExportsOrder:E,default:j},Symbol.toStringTag,{value:"Module"}));export{F as C,t as E};
//# sourceMappingURL=CheckboxGroup.stories-S_gs5p1r.js.map
