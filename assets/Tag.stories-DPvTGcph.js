import{e as r,j as a}from"./iframe-Br1Xu9zr.js";import{y as n,W as c}from"./index-Xbc0duXx.js";import{g,a as l,T as t}from"./index-8xSWa2YY.js";import{S as o}from"./icon.systems-BmhPSTgm.js";import{e as p}from"./stories.utils-CZ5hej_8.js";const i={component:t,title:"Komponenter/Tag",argTypes:{canBeManuallyFocused:{table:{category:r.props}},children:{control:"text",table:{category:r.props}},color:{table:{category:r.props,defaultValue:{summary:l()}}},size:{table:{category:r.props,defaultValue:{summary:g()}}},svgPath:{options:Object.keys(o),mapping:o,table:{category:r.props}}},args:{children:"Endret"}},s={},e={render:d=>a.jsxs("div",{className:"flex gapXs",children:[a.jsx(t,{children:"Endret"}),a.jsx(t,{color:"forest",svgPath:n,children:"Godkjent"}),a.jsx(t,{color:"burgundy",svgPath:c,children:"Særavgift"}),a.jsx(t,{color:"graphite",children:"Info"})]})};e.parameters=p;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <div className={'flex gapXs'}>
        <Tag>{'Endret'}</Tag>
        <Tag color={'forest'} svgPath={CheckSVGpath}>
          {'Godkjent'}
        </Tag>
        <Tag color={'burgundy'} svgPath={WarningSVGpath}>
          {'Særavgift'}
        </Tag>
        <Tag color={'graphite'}>{'Info'}</Tag>
      </div>;
  }
} satisfies Story`,...e.parameters?.docs?.source}}};const m=["Preview","Examples"],T=Object.freeze(Object.defineProperty({__proto__:null,Examples:e,Preview:s,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{e as E,T};
//# sourceMappingURL=Tag.stories-DPvTGcph.js.map
