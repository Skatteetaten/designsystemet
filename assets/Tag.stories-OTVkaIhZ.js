import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-BSjcMZTJ.js";import{r as u,W as f}from"./index-BU2UjPj9.js";import{T as o,g as h,a as S}from"./index-i_3--Rbb.js";import{c as a}from"./helpers-Dccz2jQ-.js";import{S as n}from"./icon.systems-5y-2wu5T.js";import{e as y}from"./stories.utils-Ys3NG0dr.js";import{c as s,a as c}from"./base-props.types-sXyoNogd.js";const T=[s[0],s[1],s[2],s[5]],x=[c[1],c[2]],v={component:o,title:"Komponenter/Tag",argTypes:{canBeManuallyFocused:{table:{category:a.props}},children:{control:"text",table:{category:a.props}},color:{table:{category:a.props,defaultValue:{summary:h()}},control:"radio",options:T},size:{options:x,control:"radio",table:{category:a.props,defaultValue:{summary:S()}}},svgPath:{options:Object.keys(n),mapping:n,table:{category:a.props}}},args:{children:"Endret"}},t={},r={render:b=>e.jsxs("div",{className:"flex gapXs",children:[e.jsx(o,{children:"Endret"}),e.jsx(o,{color:"forest",svgPath:u,children:"Godkjent"}),e.jsx(o,{color:"burgundy",svgPath:f,children:"Særavgift"}),e.jsx(o,{color:"graphite",children:"Info"})]})};r.parameters=y;var p,l,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{} satisfies Story",...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var g,m,d;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Preview","Examples"],O=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:t,__namedExportsOrder:j,default:v},Symbol.toStringTag,{value:"Module"}));export{r as E,O as T};
//# sourceMappingURL=Tag.stories-OTVkaIhZ.js.map
