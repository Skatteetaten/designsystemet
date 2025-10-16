import{j as e}from"./iframe-DRo7xN6O.js";import{b as F}from"./index-C6akGUuV.js";import{W as a}from"./index-B5WJrEEq.js";import{P as c,H as p}from"./index-K3PRhlds.js";const{expect:s,within:B}=__STORYBOOK_MODULE_TEST__,g="arkskrift",P="En arkskrift er en skrift som er skrevet på et ark.",A=t=>e.jsxs(a,{...t,children:[e.jsx(a.Trigger,{children:g}),e.jsx(a.Content,{children:P})]}),_={component:a,title:"Tester/WordInfo",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:!1,table:{disable:!0}},disableAutoDismiss:{table:{disable:!0}},isOpen:{table:{disable:!0}},position:{table:{disable:!0}},shouldRestoreFocus:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:A,tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={name:"Defaults (A1)",args:{},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:t})=>{const d=B(t).getByText(g);await s(d).toBeInTheDocument()}},n={name:"IsOpen (A2)",args:{isOpen:!0},argTypes:{isOpen:{table:{disable:!1}}},play:async({canvasElement:t})=>{const m=B(t),d=m.getByText(g);await s(d).toBeInTheDocument(),await s(d).toHaveAttribute("aria-expanded","true");const h=m.getByText(P);await s(h).toBeInTheDocument(),await s(h.tagName.toLowerCase()).toBe("span")}},H=()=>e.jsxs(c,{children:["Det er legen som melder dødsfall i Norge til ",e.jsxs(a,{children:[e.jsx(a.Trigger,{children:"Folkeregisteret"}),e.jsxs(a.Content,{children:[e.jsx(p,{as:"h3",level:4,children:"Folkeregisteret"}),e.jsx(c,{children:"Forklaring på Folkeregisteret"})]})]}),". Du trenger ikke å melde noe selv."]}),i={name:"Within Paragraph (A4)",render:H,args:{},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},L=()=>e.jsxs(p,{as:"h2",level:2,children:["Det er legen som melder dødsfall i Norge til ",e.jsxs(a,{children:[e.jsx(a.Trigger,{children:"Folkeregisteret"}),e.jsxs(a.Content,{children:[e.jsx(p,{as:"h3",level:4,children:"Folkeregisteret"}),e.jsx(c,{children:"Forklaring på Folkeregisteret"})]})]}),". Du trenger ikke å melde noe selv."]}),o={name:"Within Heading (A4)",render:L,args:{},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},C=()=>e.jsxs(c,{children:["Det er legen som melder dødsfall i Norge til ",e.jsxs(a,{children:[e.jsx(a.Trigger,{children:"Folkeregisteret"}),e.jsxs(a.Content,{children:[e.jsx(p,{as:"h3",level:4,children:"Folkeregisteret"}),e.jsx(c,{children:"Forklaring på Folkeregisteret"})]})]}),". Du trenger ikke å melde noe selv til ",e.jsx(F,{href:"#",children:"Folkeregisteret"}),"."]}),l={name:"Paragraph with Link and WordInfo",render:C,args:{},parameters:{imageSnapshot:{pseudoStates:["hover","focus","focus-visible","active"]}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Defaults (A1)',
  args: {},
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const text = canvas.getByText(defaultText);
    await expect(text).toBeInTheDocument();
  }
} satisfies Story`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,x,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'IsOpen (A2)',
  args: {
    isOpen: true
  },
  argTypes: {
    isOpen: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const term = canvas.getByText(defaultText);
    await expect(term).toBeInTheDocument();
    await expect(term).toHaveAttribute('aria-expanded', 'true');
    const content = canvas.getByText(defaultContent);
    await expect(content).toBeInTheDocument();
    await expect(content.tagName.toLowerCase()).toBe('span');
  }
} satisfies Story`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var k,S,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Within Paragraph (A4)',
  render: TemplateWithParagraph,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var y,W,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Within Heading (A4)',
  render: TemplateWithHeading,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(D=(W=o.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var w,I,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Paragraph with Link and WordInfo',
  render: TemplateWithLink,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const E=["Defaults","IsOpen","WithinParagraph","WithinHeading","ParagraphWithLinkAndWordInfo"],K=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,IsOpen:n,ParagraphWithLinkAndWordInfo:l,WithinHeading:o,WithinParagraph:i,__namedExportsOrder:E,default:_},Symbol.toStringTag,{value:"Module"}));export{K as W};
//# sourceMappingURL=WordInfo.test.stories-DnbAhS77.js.map
