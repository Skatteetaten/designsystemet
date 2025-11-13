import{h as r,f as e,g,j as s}from"./iframe-CdXtTKZQ.js";import{f as d,h,I as o}from"./index-CDWtp_lT.js";import{i as y,O as b}from"./index-D0xxaDHU.js";import{g as f}from"./index-CVW4skVE.js";import{S as n}from"./icon.systems-eQup-rxy.js";import{e as S}from"./stories.utils-CZ5hej_8.js";const x={component:o,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:f()}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:h()}}},brightness:{control:"radio",table:{category:e.props,defaultValue:{summary:d()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:g()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...r},onFocus:{...r},onBlur:{...r}},args:{children:"Legg til rapport"}},a={},t={render:v=>s.jsxs("div",{className:"flex",children:[s.jsx(o,{className:"exampleSpacing",svgPath:y,children:"Legg til"}),s.jsx(o,{className:"exampleSpacing",svgPath:b,iconPosition:"right",children:"Fjern"})]})};t.parameters=S;var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const P=["Preview","Examples"],O=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{t as E,O as I};
//# sourceMappingURL=InlineButton.stories-DyHt1GVJ.js.map
