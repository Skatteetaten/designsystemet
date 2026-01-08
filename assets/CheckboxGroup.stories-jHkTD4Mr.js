import{j as r,e,c as h,r as m}from"./iframe-s2_bNgHU.js";import{B as k}from"./index-Ck1G954W.js";import{a as t}from"./index-D9_nlc1h.js";import{S as p}from"./icon.systems-DJyjpAy9.js";import{e as u}from"./stories.utils-CZ5hej_8.js";t.Checkbox.displayName="CheckboxGroup.Checkbox";const x={component:t,title:"Komponenter/CheckboxGroup",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(p),mapping:p,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk gruppe skal markeres med stjerne. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:h()}}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},onHelpToggle:{control:!1,table:{category:e.event}}},args:{children:[r.jsx(t.Checkbox,{children:"Har barn over 16 år"},"checkbox1"),r.jsx(t.Checkbox,{children:"Har barn under 12 år"},"checkbox2"),r.jsx(t.Checkbox,{children:"Har ingen barn"},"checkbox3")],legend:"Velg det som passer deg"}},s={},o={render:S=>{const l=[{label:"Har barn over 16 år"},{label:"Har barn under 12 år"},{label:"Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"},{label:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},{label:"Er enslig forsørger"}],[c,d]=m.useState(new Array(l.length).fill(!1)),g=n=>{const a=c.map((i,b)=>b===n?!i:i);d(a)};return r.jsxs(r.Fragment,{children:[r.jsx(t,{legend:"Velg det som gjelder deg",children:l.map((n,a)=>r.jsx(t.Checkbox,{checked:c[a],onChange:()=>g(a),children:n.label},a))}),r.jsx(k,{children:"Neste side"})]})}};o.parameters=u;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};const f=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:s,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{G as C,o as E};
//# sourceMappingURL=CheckboxGroup.stories-jHkTD4Mr.js.map
