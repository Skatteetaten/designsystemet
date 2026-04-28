import{c as r,j as a}from"./iframe-B8GUhlLl.js";import{j as n,H as c}from"./index-ee2RFhIf.js";import{a as l,b as p,T as t}from"./index-CQLLboVf.js";import{S as o}from"./icon.systems-B1LFOHPk.js";import{e as g}from"./stories.utils-BCId827v.js";const i={component:t,title:"Komponenter/Tag",argTypes:{canBeManuallyFocused:{table:{category:r.props}},children:{control:"text",table:{category:r.props}},color:{table:{category:r.props,defaultValue:{summary:p()}}},size:{table:{category:r.props,defaultValue:{summary:l()}}},svgPath:{options:Object.keys(o),mapping:o,table:{category:r.props}}},args:{children:"Endret"}},s={},e={render:d=>a.jsxs("div",{className:"flex gapXs",children:[a.jsx(t,{children:"Endret"}),a.jsx(t,{color:"forest",svgPath:n,children:"Godkjent"}),a.jsx(t,{color:"burgundy",svgPath:c,children:"Særavgift"}),a.jsx(t,{color:"graphite",children:"Info"})]})};e.parameters=g;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=Tag.stories-PYBWp2iD.js.map
