import{j as r,e,c as S,r as y}from"./iframe-DRo7xN6O.js";import{B as C}from"./index-C6akGUuV.js";import{a as t}from"./index-CJxdEpCy.js";import{S as p}from"./icon.systems-YNVHmwDx.js";import{e as v}from"./stories.utils-CZ5hej_8.js";t.Checkbox.displayName="CheckboxGroup.Checkbox";const j={component:t,title:"Komponenter/CheckboxGroup",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(p),mapping:p,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLegend:{table:{category:e.props}},legend:{control:"text",table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk gruppe skal markeres med stjerne. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:S()}}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},onHelpToggle:{control:!1,table:{category:e.event}}},args:{children:[r.jsx(t.Checkbox,{children:"Har barn over 16 år"},"checkbox1"),r.jsx(t.Checkbox,{children:"Har barn under 12 år"},"checkbox2"),r.jsx(t.Checkbox,{children:"Har ingen barn"},"checkbox3")],legend:"Velg det som passer deg"}},s={},o={render:G=>{const l=[{label:"Har barn over 16 år"},{label:"Har barn under 12 år"},{label:"Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"},{label:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},{label:"Er enslig forsørger"}],[c,u]=y.useState(new Array(l.length).fill(!1)),x=n=>{const a=c.map((i,f)=>f===n?!i:i);u(a)};return r.jsxs(r.Fragment,{children:[r.jsx(t,{legend:"Velg det som gjelder deg",children:l.map((n,a)=>r.jsx(t.Checkbox,{checked:c[a],onChange:()=>x(a),children:n.label},a))}),r.jsx(C,{children:"Neste side"})]})}};o.parameters=v;var d,g,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,m,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const H=["Preview","Examples"],V=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:s,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{V as C,o as E};
//# sourceMappingURL=CheckboxGroup.stories-Ca0wDfW1.js.map
