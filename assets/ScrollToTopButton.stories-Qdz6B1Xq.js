import{j as e}from"./jsx-runtime-CfatFE5O.js";import{S as p,f as d,h as u}from"./index-CT5qi75N.js";import{E as h}from"./index-qxaMszO_.js";import{c as o}from"./helpers-Dccz2jQ-.js";import{e as g}from"./stories.utils-Ys3NG0dr.js";const y={component:p,title:"Komponenter/ScrollToTopButton",argTypes:{classNames:{control:!1,table:{category:o.props}},visibilityThreshold:{table:{category:o.props,defaultValue:{summary:String(d())}}},scrollToMain:{table:{category:o.props,defaultValue:{summary:u().toString()}}},shadowRootNode:{control:!1,table:{category:o.props}},children:{table:{category:o.props}}},args:{},parameters:{backgrounds:{default:"grey"}}},a={decorators:[s=>e.jsx("div",{className:"height100vh",children:e.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[e.jsx(h,{}),e.jsx(s,{})]})})]},r={render:s=>e.jsx("div",{className:"height100vh",children:e.jsx(p,{visibilityThreshold:0})})};r.parameters=g;var t,l,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => <div className={'height100vh'}>
        <main className={'scrollToTopContainer'} tabIndex={-1}>
          <ExternalLayout />
          <Story />
        </main>
      </div>]
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: _args => <div className={'height100vh'}>
      <ScrollToTopButton visibilityThreshold={0} />
    </div>
} satisfies Story`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Preview","Examples"],j=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:a,__namedExportsOrder:T,default:y},Symbol.toStringTag,{value:"Module"}));export{r as E,j as S};
//# sourceMappingURL=ScrollToTopButton.stories-Qdz6B1Xq.js.map
