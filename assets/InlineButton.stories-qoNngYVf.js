import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{f as g,h as d,I as s}from"./index-Du3yX_TW.js";import{g as h}from"./index-CGk5cNE3.js";import{f as y,J as f}from"./index-CgEl4Pzg.js";import{g as b}from"./index-uxUkjR_c.js";import{h as o,c as e}from"./helpers-B90wjoUE.js";import{S as n}from"./icon.systems-DzczaoTk.js";import{e as S}from"./stories.utils-Ys3NG0dr.js";const x={component:s,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:b()}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:d()}}},brightness:{control:"radio",table:{category:e.props,defaultValue:{summary:g()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:h()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...o},onFocus:{...o},onBlur:{...o}},args:{children:"Legg til rapport"}},a={},t={render:v=>r.jsxs("div",{className:"flex",children:[r.jsx(s,{className:"exampleSpacing",svgPath:y,children:"Legg til"}),r.jsx(s,{className:"exampleSpacing",svgPath:f,iconPosition:"right",children:"Fjern"})]})};t.parameters=S;var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const P=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{t as E,N as I};
//# sourceMappingURL=InlineButton.stories-qoNngYVf.js.map
