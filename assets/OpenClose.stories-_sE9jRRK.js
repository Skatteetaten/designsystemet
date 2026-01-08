import{h as l,e,j as t}from"./iframe-s2_bNgHU.js";import{j as i,k as p,l as c,m as d,O as n}from"./index-DFs0_No2.js";import{H as m,P as g}from"./index-CJpzHRrE.js";import{l as k}from"./storybook.testing.utils-BgHZnMzD.js";import{e as u}from"./stories.utils-CZ5hej_8.js";const x={component:n,title:"Komponenter/OpenClose",argTypes:{children:{control:"text",table:{category:e.props}},iconPosition:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:d()}}},isOnClickOnlyFiredOnOpen:{table:{category:e.props}},isExpanded:{table:{category:e.props}},isDefaultExpanded:{table:{category:e.props}},keepMounted:{table:{category:e.props,defaultValue:{summary:c().toString()}}},showUnderline:{table:{category:e.props,defaultValue:{summary:p().toString()}}},title:{table:{category:e.props}},titleAs:{control:"inline-radio",table:{category:e.props}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:i()}}},onClick:{...l}},args:{children:k,title:"OpenClose title"}},s={},r={render:f=>{const o="Hva er aksjesparekonto",a="En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ";return t.jsxs(t.Fragment,{children:[t.jsx(m,{level:4,as:"h2",children:"Aksjesparekonto (ASK)"}),t.jsx(g,{children:"Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler."}),t.jsx(n,{title:o,isExpanded:!0,children:a}),t.jsx(n,{title:o,children:a}),t.jsx(n,{title:o,showUnderline:!0,children:a}),t.jsx(n,{title:o,iconPosition:"right",children:a}),t.jsx(n,{title:o,variant:"compact",children:a}),t.jsx(n,{title:o,iconPosition:"right",variant:"compact",showUnderline:!0,children:a})]})}};r.parameters=u;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const exampleTitle = 'Hva er aksjesparekonto';
    const exampleContent = 'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. ' + 'Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ';
    return <>
        <Heading level={4} as={'h2'}>
          {'Aksjesparekonto (ASK)'}
        </Heading>
        <Paragraph>
          {'Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler.'}
        </Paragraph>
        <OpenClose title={exampleTitle} isExpanded>
          {exampleContent}
        </OpenClose>
        <OpenClose title={exampleTitle}>{exampleContent}</OpenClose>
        <OpenClose title={exampleTitle} showUnderline>
          {exampleContent}
        </OpenClose>
        <OpenClose title={exampleTitle} iconPosition={'right'}>
          {exampleContent}
        </OpenClose>
        <OpenClose title={exampleTitle} variant={'compact'}>
          {exampleContent}
        </OpenClose>
        <OpenClose title={exampleTitle} iconPosition={'right'} variant={'compact'} showUnderline>
          {exampleContent}
        </OpenClose>
      </>;
  }
} satisfies Story`,...r.parameters?.docs?.source}}};const j=["Preview","Examples"],v=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:s,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{r as E,v as O};
//# sourceMappingURL=OpenClose.stories-_sE9jRRK.js.map
