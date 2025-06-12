import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as u,h as x,i as k,O as n}from"./index-BKQUjYcP.js";import"./index-ChzTQA-a.js";import{H as h,P as f}from"./index-DsfABT8I.js";import{h as C,c as t}from"./helpers-B7KPg_So.js";import{l as O}from"./storybook.testing.utils-CMs160i9.js";import{e as j}from"./stories.utils-Ys3NG0dr.js";import{d as y,h as l}from"./base-props.types-DUvlOF9f.js";const r="Hva er aksjesparekonto",o="En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ",v={component:n,title:"Komponenter/OpenClose",argTypes:{children:{control:"text",table:{category:t.props}},iconPosition:{control:"inline-radio",table:{category:t.props,defaultValue:{summary:k()}}},isOnClickOnlyFiredOnOpen:{table:{category:t.props}},isExpanded:{table:{category:t.props}},isDefaultExpanded:{table:{category:t.props}},showUnderline:{table:{category:t.props,defaultValue:{summary:x().toString()}}},title:{table:{category:t.props}},titleAs:{options:["div",...l],control:"inline-radio",table:{category:t.props,defaultValue:{summary:"div"},type:{summary:["div",...l].toString()}}},variant:{options:[...y],control:"inline-radio",table:{category:t.props,defaultValue:{summary:u()}}},onClick:{...C}},args:{children:O,title:"OpenClose title"}},s={},a={render:P=>e.jsxs(e.Fragment,{children:[e.jsx(h,{level:4,as:"h2",children:"Aksjesparekonto (ASK)"}),e.jsx(f,{children:"Du som er personlig skattyter, kan etablere en aksjesparekonto (ASK) for børsnoterte aksjer og aksjefondsandeler."}),e.jsx(n,{title:r,isExpanded:!0,children:o}),e.jsx(n,{title:r,children:o}),e.jsx(n,{title:r,showUnderline:!0,children:o}),e.jsx(n,{title:r,iconPosition:"right",children:o}),e.jsx(n,{title:r,variant:"compact",children:o}),e.jsx(n,{title:r,iconPosition:"right",variant:"compact",showUnderline:!0,children:o})]})};a.parameters=j;var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
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
} satisfies Story`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const b=["Preview","Examples"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:s,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{a as E,H as O};
//# sourceMappingURL=OpenClose.stories-DRUGKfyy.js.map
