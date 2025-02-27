import{j as r}from"./jsx-runtime-BYYWji4R.js";import{e as u,f as d,I as o}from"./index-DYo2YWtE.js";import{a as y,d as h}from"./index-D9wdQ6Rv.js";import{e as b,w as f}from"./index-BomPkCop.js";import{h as s,c as e}from"./helpers-BRYKCfPN.js";import{S as n}from"./icon.systems-Slcjg63N.js";import{e as S}from"./stories.utils-Ys3NG0dr.js";const x={component:o,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:h.t("ds_progress:spinner.LoadingLabel")}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:d()}}},brightness:{control:"radio",table:{category:e.props,defaultValue:{summary:u()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:y()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...s},onFocus:{...s},onBlur:{...s}},args:{children:"Legg til rapport"}},a={},t={render:v=>r.jsxs("div",{className:"flex",children:[r.jsx(o,{className:"exampleSpacing",svgPath:b,children:"Legg til"}),r.jsx(o,{className:"exampleSpacing",svgPath:f,iconPosition:"right",children:"Fjern"})]})};t.parameters=S;var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: _args => <div className={'flex'}>
      <InlineButton className={'exampleSpacing'} svgPath={AddOutlineSVGpath}>
        {'Legg til'}
      </InlineButton>
      <InlineButton className={'exampleSpacing'} svgPath={CancelSVGpath} iconPosition={'right'}>
        {'Fjern'}
      </InlineButton>
    </div>
} satisfies Story`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const P=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{t as E,N as I};
//# sourceMappingURL=InlineButton.stories-DU9ZMmI-.js.map
