import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as g,h as k,i as x,O as n}from"./index-CblMkQX-.js";import{H as u,P as h}from"./index-DXWIZOJk.js";import{h as f,c as t}from"./helpers-B90wjoUE.js";import{l as j}from"./storybook.testing.utils-CMs160i9.js";import{e as C}from"./stories.utils-Ys3NG0dr.js";const O={component:n,title:"Komponenter/OpenClose",argTypes:{children:{control:"text",table:{category:t.props}},iconPosition:{control:"inline-radio",table:{category:t.props,defaultValue:{summary:x()}}},isOnClickOnlyFiredOnOpen:{table:{category:t.props}},isExpanded:{table:{category:t.props}},isDefaultExpanded:{table:{category:t.props}},showUnderline:{table:{category:t.props,defaultValue:{summary:k().toString()}}},title:{table:{category:t.props}},titleAs:{control:"inline-radio",table:{category:t.props}},variant:{control:"inline-radio",table:{category:t.props,defaultValue:{summary:g()}}},onClick:{...f}},args:{children:j,title:"OpenClose title"}},s={},a={render:v=>{const o="Hva er aksjesparekonto",r="En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ";return e.jsxs(e.Fragment,{children:[e.jsx(u,{level:4,as:"h2",children:"Aksjesparekonto (ASK)"}),e.jsx(h,{children:"Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler."}),e.jsx(n,{title:o,isExpanded:!0,children:r}),e.jsx(n,{title:o,children:r}),e.jsx(n,{title:o,showUnderline:!0,children:r}),e.jsx(n,{title:o,iconPosition:"right",children:r}),e.jsx(n,{title:o,variant:"compact",children:r}),e.jsx(n,{title:o,iconPosition:"right",variant:"compact",showUnderline:!0,children:r})]})}};a.parameters=C;var l,i,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{} satisfies Story",...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["Preview","Examples"],w=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:s,__namedExportsOrder:y,default:O},Symbol.toStringTag,{value:"Module"}));export{a as E,w as O};
//# sourceMappingURL=OpenClose.stories-BfSutccT.js.map
