import{j as e}from"./jsx-runtime-BYYWji4R.js";import{w as m,e as s}from"./index-DIxTUSTt.js";import{B as r}from"./index-7bHEsQL_.js";import{l as p,w as h}from"./storybook.testing.utils-CMs160i9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BYKicpQW.js";const J={component:r,title:"Tester/Blockquote",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}}}},n={children:p},l={name:"With Ref (FA1)",args:{...n,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=m(a).getByText(p);await s(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=m(a).getByText(p);await s(t).toHaveClass("dummyClassname"),await s(t).toHaveAttribute("id","htmlId"),await s(t).toHaveAttribute("lang","nb"),await s(t).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (A1, B1)",args:{...n},argTypes:{children:{table:{disable:!1}}}},R=a=>e.jsxs(r,{...a,children:[e.jsxs("div",{children:["Manowar Manowar living on the road ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Manowar",children:"lenke"})]}),e.jsxs("div",{children:["When we're on ",e.jsx("strong",{children:"strong "}),"explode ",e.jsx("em",{children:"italic em "})]}),e.jsxs("div",{children:["We don't attract ",e.jsx("code",{children:"code wimps "}),"'cause we're too ",e.jsx("mark",{children:"mark"})]}),e.jsxs("div",{children:["Just ",e.jsx("i",{children:"italic i "}),"true ",e.jsx("small",{children:"small "}),"people that's Manowar's ",e.jsx("b",{children:"b"})]})]}),c={render:R,name:"With Markup (A2, B1)",argTypes:{children:{table:{disable:!1},control:{disable:!0}}},args:{...n},parameters:{imageSnapshot:{hover:`${h} > blockquote a`,focus:`${h} > blockquote a`}}},C=a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...a}),e.jsx(r,{...a})]}),d={render:C,name:"With Spacing (A3)",args:{...n,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},u={name:"With Can Receive Focus",render:a=>e.jsx(r,{...a,children:"Litt fylltekst"}),args:{...n,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=m(a).getByText("Litt fylltekst");t.focus(),await s(t).toBeInTheDocument(),await s(t).toHaveAttribute("tabIndex","-1")}};var g,f,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLQuoteElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
  },
  argTypes: {
    ref: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText(loremIpsum);
    await expect(blockquote).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,k,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID'
  },
  argTypes: {
    id: {
      table: {
        disable: false
      }
    },
    className: {
      table: {
        disable: false
      }
    },
    lang: {
      table: {
        disable: false
      }
    },
    'data-testid': {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText(loremIpsum);
    await expect(blockquote).toHaveClass('dummyClassname');
    await expect(blockquote).toHaveAttribute('id', 'htmlId');
    await expect(blockquote).toHaveAttribute('lang', 'nb');
    await expect(blockquote).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,A,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var B,W,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: TemplateWithMarkup,
  name: 'With Markup (A2, B1)',
  argTypes: {
    children: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  },
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > blockquote a\`,
      focus: \`\${wrapper} > blockquote a\`
    }
  }
} satisfies Story`,...(S=(W=c.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var q,F,j;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: TemplateWithTwoBlockquotes,
  name: 'With Spacing (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true
  },
  argTypes: {
    hasSpacing: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var I,M,H;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Can Receive Focus',
  render: args => <Blockquote {...args}>{'Litt fylltekst'}</Blockquote>,
  args: {
    ...defaultArgs,
    canBeManuallyFocused: true
  },
  argTypes: {
    canBeManuallyFocused: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText('Litt fylltekst');
    blockquote.focus();
    await expect(blockquote).toBeInTheDocument();
    await expect(blockquote).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...(H=(M=u.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const O=["WithRef","WithAttributes","Defaults","WithMarkup","WithSpacing","WithCanBeManuallyFocused"];export{i as Defaults,o as WithAttributes,u as WithCanBeManuallyFocused,c as WithMarkup,l as WithRef,d as WithSpacing,O as __namedExportsOrder,J as default};
//# sourceMappingURL=Blockquote.test.stories-Dsja5vHH.js.map
