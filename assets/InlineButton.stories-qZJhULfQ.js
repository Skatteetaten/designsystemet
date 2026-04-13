import{h as r,c as e,a as i,j as s}from"./iframe-_BeEUj9n.js";import{e as l,f as c,a as o}from"./index-BcVMbygC.js";import{s as p,k as m}from"./index-Bva6C3l7.js";import{g as u}from"./index-BcQKZFop.js";import{S as n}from"./icon.systems-C7aKoqez.js";import{e as g}from"./stories.utils-D-WWwTx3.js";const d={component:o,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:u()}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:c()}}},brightness:{control:"radio",table:{category:e.props,defaultValue:{summary:l()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:i()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...r},onFocus:{...r},onBlur:{...r}},args:{children:"Legg til rapport"}},a={},t={render:h=>s.jsxs("div",{className:"flex",children:[s.jsx(o,{className:"exampleSpacing",svgPath:p,children:"Legg til"}),s.jsx(o,{className:"exampleSpacing",svgPath:m,iconPosition:"right",children:"Fjern"})]})};t.parameters=g;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{} satisfies Story",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <div className={'flex'}>
        <InlineButton className={'exampleSpacing'} svgPath={AddOutlineSVGpath}>
          {'Legg til'}
        </InlineButton>
        <InlineButton className={'exampleSpacing'} svgPath={CancelSVGpath} iconPosition={'right'}>
          {'Fjern'}
        </InlineButton>
      </div>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const y=["Preview","Examples"],B=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:y,default:d},Symbol.toStringTag,{value:"Module"}));export{t as E,B as I};
//# sourceMappingURL=InlineButton.stories-qZJhULfQ.js.map
