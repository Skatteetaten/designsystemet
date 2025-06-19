import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as C}from"./index-D_ouKaeX.js";import{B as S}from"./index-Dvbywa6-.js";import{b as y}from"./index-CwaotbcG.js";import{a as o}from"./index-BP9ucNdn.js";import{c as e}from"./helpers-DjiZIot2.js";import{S as i}from"./icon.systems-NRpsphgm.js";import{e as v}from"./stories.utils-WEsnq5G6.js";o.Checkbox.displayName="CheckboxGroup.Checkbox";const j={component:o,title:"Komponenter/CheckboxGroup",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(i),mapping:i,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:y()}}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},onHelpToggle:{control:!1,table:{category:e.event}}},args:{children:[r.jsx(o.Checkbox,{children:"Har barn over 16 år"},"checkbox1"),r.jsx(o.Checkbox,{children:"Har barn under 12 år"},"checkbox2"),r.jsx(o.Checkbox,{children:"Har ingen barn"},"checkbox3")],legend:"Velg det som passer deg"}},n={},t={render:G=>{const l=[{label:"Har barn over 16 år"},{label:"Har barn under 12 år"},{label:"Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"},{label:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},{label:"Er enslig forsørger"}],[c,k]=C.useState(new Array(l.length).fill(!1)),x=s=>{const a=c.map((p,f)=>f===s?!p:p);k(a)};return r.jsxs(r.Fragment,{children:[r.jsx(o,{legend:"Velg det som gjelder deg",children:l.map((s,a)=>r.jsx(o.Checkbox,{checked:c[a],onChange:()=>x(a),children:s.label},a))}),r.jsx(S,{children:"Neste side"})]})}};t.parameters=v;var d,b,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,m,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const H=["Preview","Examples"],B=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:n,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{B as C,t as E};
//# sourceMappingURL=CheckboxGroup.stories-BlPz-KyP.js.map
