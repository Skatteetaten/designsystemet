import{e as o,j as e,E as d}from"./iframe-C2uFIQ6s.js";import{g as u,j as g,S as p,k as h}from"./index-C2_9aJjw.js";import{e as T}from"./stories.utils-CZ5hej_8.js";const y={component:p,title:"Komponenter/ScrollToTopButton",argTypes:{classNames:{control:!1,table:{category:o.props}},visibilityThreshold:{table:{category:o.props,defaultValue:{summary:String(h())}}},scrollToMain:{table:{category:o.props,defaultValue:{summary:g().toString()}}},shadowRootNode:{control:!1,table:{category:o.props}},children:{table:{category:o.props,defaultValue:{summary:u()}}}},args:{},globals:{backgrounds:{value:"grey"}}},a={decorators:[t=>e.jsx("div",{className:"height100vh",children:e.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[e.jsx(d,{}),e.jsx(t,{})]})})]},r={render:t=>e.jsx("div",{className:"height100vh",children:e.jsx(p,{visibilityThreshold:0})})};r.parameters=T;var s,l,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => <div className={'height100vh'}>
        <main className={'scrollToTopContainer'} tabIndex={-1}>
          <ExternalLayout />
          <Story />
        </main>
      </div>]
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <div className={'height100vh'}>
        <ScrollToTopButton visibilityThreshold={0} />
      </div>;
  }
} satisfies Story`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["Preview","Examples"],f=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:a,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{r as E,f as S};
//# sourceMappingURL=ScrollToTopButton.stories-C_h9wVqS.js.map
