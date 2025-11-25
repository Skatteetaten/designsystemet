import{h as g,f as e,j as t}from"./iframe-Cq9sN_Dz.js";import{j as k,k as u,l as x,m as f,O as n}from"./index-DEEEsonz.js";import{H as j,P as h}from"./index-DskRqDMQ.js";import{l as C}from"./storybook.testing.utils-BgHZnMzD.js";import{e as O}from"./stories.utils-CZ5hej_8.js";const y={component:n,title:"Komponenter/OpenClose",argTypes:{children:{control:"text",table:{category:e.props}},iconPosition:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:f()}}},isOnClickOnlyFiredOnOpen:{table:{category:e.props}},isExpanded:{table:{category:e.props}},isDefaultExpanded:{table:{category:e.props}},keepMounted:{table:{category:e.props,defaultValue:{summary:x().toString()}}},showUnderline:{table:{category:e.props,defaultValue:{summary:u().toString()}}},title:{table:{category:e.props}},titleAs:{control:"inline-radio",table:{category:e.props}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:k()}}},onClick:{...g}},args:{children:C,title:"OpenClose title"}},s={},r={render:v=>{const o="Hva er aksjesparekonto",a="En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ";return t.jsxs(t.Fragment,{children:[t.jsx(j,{level:4,as:"h2",children:"Aksjesparekonto (ASK)"}),t.jsx(h,{children:"Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler."}),t.jsx(n,{title:o,isExpanded:!0,children:a}),t.jsx(n,{title:o,children:a}),t.jsx(n,{title:o,showUnderline:!0,children:a}),t.jsx(n,{title:o,iconPosition:"right",children:a}),t.jsx(n,{title:o,variant:"compact",children:a}),t.jsx(n,{title:o,iconPosition:"right",variant:"compact",showUnderline:!0,children:a})]})}};r.parameters=O;var l,i,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{} satisfies Story",...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["Preview","Examples"],_=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:s,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{r as E,_ as O};
//# sourceMappingURL=OpenClose.stories-8y3HrFbD.js.map
