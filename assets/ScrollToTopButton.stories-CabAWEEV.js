import{j as e}from"./jsx-runtime-BYYWji4R.js";import{i as d,S as p,j as u}from"./index-CEFmy_Ic.js";import{E as h}from"./index-BYKicpQW.js";import{c as o}from"./helpers-Q4uYuiE4.js";import{e as g}from"./stories.utils-BbHpJfAb.js";const y={component:p,title:"Komponenter/ScrollToTopButton",argTypes:{classNames:{control:!1,table:{category:o.props}},visibilityThreshold:{table:{category:o.props,defaultValue:{summary:String(u())}}},scrollToMain:{table:{category:o.props,defaultValue:{summary:d().toString()}}},shadowRootNode:{control:!1,table:{category:o.props}},children:{table:{category:o.props}}},args:{},parameters:{backgrounds:{default:"grey"}}},a={decorators:[s=>e.jsx("div",{className:"height100vh",children:e.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[e.jsx(h,{}),e.jsx(s,{})]})})]},r={render:s=>e.jsx("div",{className:"height100vh",children:e.jsx(p,{visibilityThreshold:0})})};r.parameters=g;var t,l,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ScrollToTopButton.stories-CabAWEEV.js.map
