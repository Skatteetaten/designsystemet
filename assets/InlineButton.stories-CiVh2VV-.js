import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{e as g,f as d,I as o}from"./index-eDVrZHQi.js";import{a as y,d as h}from"./index-ChzTQA-a.js";import{e as b,x as f}from"./index-CdwPxLML.js";import{h as s,c as e}from"./helpers-B7KPg_So.js";import{S as n}from"./icon.systems-BnMBg8hx.js";import{e as S}from"./stories.utils-Ys3NG0dr.js";const x={component:o,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:h.t("ds_progress:spinner.LoadingLabel")}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:d()}}},brightness:{control:"radio",table:{category:e.props,defaultValue:{summary:g()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:y()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...s},onFocus:{...s},onBlur:{...s}},args:{children:"Legg til rapport"}},a={},t={render:v=>r.jsxs("div",{className:"flex",children:[r.jsx(o,{className:"exampleSpacing",svgPath:b,children:"Legg til"}),r.jsx(o,{className:"exampleSpacing",svgPath:f,iconPosition:"right",children:"Fjern"})]})};t.parameters=S;var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const P=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{t as E,N as I};
//# sourceMappingURL=InlineButton.stories-CiVh2VV-.js.map
