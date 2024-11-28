import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{a as o,d as u}from"./index-CKHxS2Ra.js";import{d,a as y}from"./index-C498nvnC.js";import{b as h,g as b}from"./index-C3Vp3Ydz.js";import{c as e,h as s}from"./helpers-Dccz2jQ-.js";import{S as n}from"./icon.systems-DsGmM1wX.js";import{e as f}from"./stories.utils-Ys3NG0dr.js";const S={component:o,title:"Komponenter/InlineButton",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:d.t("ds_status:spinner.LoadingLabel")}}},iconPosition:{control:"radio",table:{category:e.props,defaultValue:{summary:u()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:e.props}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:y()}}},ariaDescribedby:{table:{category:e.aria}},onClick:{...s},onFocus:{...s},onBlur:{...s}},args:{children:"Legg til rapport"}},a={},t={render:P=>r.jsxs("div",{className:"flex",children:[r.jsx(o,{className:"exampleSpacing",svgPath:h,children:"Legg til"}),r.jsx(o,{className:"exampleSpacing",svgPath:b,iconPosition:"right",children:"Fjern"})]})};t.parameters=f;var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: _args => <div className={'flex'}>
      <InlineButton className={'exampleSpacing'} svgPath={AddOutlineSVGpath}>
        {'Legg til'}
      </InlineButton>
      <InlineButton className={'exampleSpacing'} svgPath={CancelSVGpath} iconPosition={'right'}>
        {'Fjern'}
      </InlineButton>
    </div>
} satisfies Story`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const x=["Preview","Examples"],E=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{t as E,E as I};
//# sourceMappingURL=InlineButton.stories-CObd_MSI.js.map