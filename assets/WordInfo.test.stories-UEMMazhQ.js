import{j as e}from"./iframe-Br1Xu9zr.js";import{b as v}from"./index-Mga-TJ2K.js";import{W as a}from"./index--7Yk7F8k.js";import{P as c,H as p}from"./index-DCwxX22m.js";const{expect:s,within:u}=__STORYBOOK_MODULE_TEST__,g="arkskrift",f="En arkskrift er en skrift som er skrevet på et ark.",b=t=>e.jsxs(a,{...t,children:[e.jsx(a.Trigger,{children:g}),e.jsx(a.Content,{children:f})]}),x={component:a,title:"Tester/WordInfo",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:!1,table:{disable:!0}},disableAutoDismiss:{table:{disable:!0}},isOpen:{table:{disable:!0}},position:{table:{disable:!0}},shouldRestoreFocus:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:b,tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={name:"Defaults (A1)",args:{},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:t})=>{const d=u(t).getByText(g);await s(d).toBeInTheDocument()}},n={name:"IsOpen (A2)",args:{isOpen:!0},argTypes:{isOpen:{table:{disable:!1}}},play:async({canvasElement:t})=>{const m=u(t),d=m.getByText(g);await s(d).toBeInTheDocument(),await s(d).toHaveAttribute("aria-expanded","true");const h=m.getByText(f);await s(h).toBeInTheDocument(),await s(h.tagName.toLowerCase()).toBe("span")}},T=()=>e.jsxs(c,{children:["Det er legen som melder dødsfall i Norge til ",e.jsxs(a,{children:[e.jsx(a.Trigger,{children:"Folkeregisteret"}),e.jsxs(a.Content,{children:[e.jsx(p,{as:"h3",level:4,children:"Folkeregisteret"}),e.jsx(c,{children:"Forklaring på Folkeregisteret"})]})]}),". Du trenger ikke å melde noe selv."]}),i={name:"Within Paragraph (A4)",render:T,args:{},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},k=()=>e.jsxs(p,{as:"h2",level:2,children:["Det er legen som melder dødsfall i Norge til ",e.jsxs(a,{children:[e.jsx(a.Trigger,{children:"Folkeregisteret"}),e.jsxs(a.Content,{children:[e.jsx(p,{as:"h3",level:4,children:"Folkeregisteret"}),e.jsx(c,{children:"Forklaring på Folkeregisteret"})]})]}),". Du trenger ikke å melde noe selv."]}),o={name:"Within Heading (A4)",render:k,args:{},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},S=()=>e.jsxs(c,{children:["Det er legen som melder dødsfall i Norge til ",e.jsxs(a,{children:[e.jsx(a.Trigger,{children:"Folkeregisteret"}),e.jsxs(a.Content,{children:[e.jsx(p,{as:"h3",level:4,children:"Folkeregisteret"}),e.jsx(c,{children:"Forklaring på Folkeregisteret"})]})]}),". Du trenger ikke å melde noe selv til ",e.jsx(v,{href:"#",children:"Folkeregisteret"}),"."]}),l={name:"Paragraph with Link and WordInfo",render:S,args:{},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Within Paragraph (A4)',
  render: TemplateWithParagraph,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Within Heading (A4)',
  render: TemplateWithHeading,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Paragraph with Link and WordInfo',
  render: TemplateWithLink,
  args: {},
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...l.parameters?.docs?.source}}};const j=["Defaults","IsOpen","WithinParagraph","WithinHeading","ParagraphWithLinkAndWordInfo"],I=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,IsOpen:n,ParagraphWithLinkAndWordInfo:l,WithinHeading:o,WithinParagraph:i,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{I as W};
//# sourceMappingURL=WordInfo.test.stories-UEMMazhQ.js.map
