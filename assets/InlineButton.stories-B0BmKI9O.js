import{h as r,e,g as i,j as s}from"./iframe-CBOQuZmX.js";import{f as l,h as c,I as o}from"./index-BxmwhRWV.js";import{i as p,O as m}from"./index-tEZUkoN5.js";import{g as u}from"./index-CSgUqAK2.js";import{S as n}from"./icon.systems-DLlbXhEY.js";import{e as g}from"./stories.utils-CZ5hej_8.js";const d={component:o,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:u()}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:c()}}},brightness:{control:"radio",table:{category:e.props,defaultValue:{summary:l()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:i()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...r},onFocus:{...r},onBlur:{...r}},args:{children:"Legg til rapport"}},a={},t={render:y=>s.jsxs("div",{className:"flex",children:[s.jsx(o,{className:"exampleSpacing",svgPath:p,children:"Legg til"}),s.jsx(o,{className:"exampleSpacing",svgPath:m,iconPosition:"right",children:"Fjern"})]})};t.parameters=g;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{} satisfies Story",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};const h=["Preview","Examples"],B=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:h,default:d},Symbol.toStringTag,{value:"Module"}));export{t as E,B as I};
//# sourceMappingURL=InlineButton.stories-B0BmKI9O.js.map
