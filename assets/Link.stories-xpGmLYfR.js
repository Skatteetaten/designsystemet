import{h as s,e,j as r}from"./iframe-VHQh6taY.js";import{b as n}from"./index-C8wxqHpZ.js";import{S as i}from"./icon.systems-pjRjKMCZ.js";import{e as o}from"./stories.utils-BTGWRhRm.js";import{l}from"./base-props.types-B340BQPQ.js";const c={component:n,title:"Komponenter/Link",argTypes:{children:{table:{category:e.props}},color:{options:[void 0,...l],control:"inline-radio",table:{category:e.props}},isExternal:{table:{category:e.props}},svgPath:{options:Object.keys(i),mapping:i,table:{category:e.props}},download:{control:"boolean",table:{category:e.htmlAttribute}},href:{table:{category:e.htmlAttribute}},target:{table:{category:e.htmlAttribute}},ariaCurrent:{control:"text",table:{category:e.aria}},ariaDescribedby:{table:{category:e.aria}},onClick:{...s}},args:{children:"Er du pendler?",href:"#"}},t={},a={render:m=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"exampleSpacing",children:r.jsx(n,{href:"#link",children:"Rettledning til RF-1167 Næringsoppgave 2 for 2020 (pdf)"})}),r.jsx("div",{className:"exampleSpacing",children:r.jsx(n,{href:"#link",isExternal:!0,children:"Kontakte Statens Vegvesen"})}),r.jsx("div",{className:"exampleSpacing",children:r.jsx(n,{href:"#link",isExternal:!0,children:"Brukerveiledning for bilforhandlere"})})]})};a.parameters=o;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{} satisfies Story",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <div className={'exampleSpacing'}>
          <Link href={'#link'}>
            {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (pdf)'}
          </Link>
        </div>
        <div className={'exampleSpacing'}>
          <Link href={'#link'} isExternal>
            {'Kontakte Statens Vegvesen'}
          </Link>
        </div>
        <div className={'exampleSpacing'}>
          <Link href={'#link'} isExternal>
            {'Brukerveiledning for bilforhandlere'}
          </Link>
        </div>
      </>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const p=["Preview","Examples"],b=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:t,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{a as E,b as L,c as m};
//# sourceMappingURL=Link.stories-xpGmLYfR.js.map
