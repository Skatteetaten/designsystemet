import{j as e}from"./iframe-CdXtTKZQ.js";import{B as n}from"./index-DUrzBgqO.js";import{l as m}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:s,within:b}=__STORYBOOK_MODULE_TEST__,I={component:n,title:"Tester/Blockquote",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={children:m},o={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=b(a).getByText(m);await s(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const t=b(a).getByText(m);await s(t).toHaveClass("dummyClassname"),await s(t).toHaveAttribute("id","htmlId"),await s(t).toHaveAttribute("lang","nb"),await s(t).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (A1, B1)",args:{...r},argTypes:{children:{table:{disable:!1}}}},H=a=>e.jsxs(n,{...a,children:[e.jsxs("div",{children:["Manowar Manowar living on the road ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Manowar",children:"lenke"})]}),e.jsxs("div",{children:["When we're on ",e.jsx("strong",{children:"strong "}),"explode ",e.jsx("em",{children:"italic em "})]}),e.jsxs("div",{children:["We don't attract ",e.jsx("code",{children:"code wimps "}),"'cause we're too ",e.jsx("mark",{children:"mark"})]}),e.jsxs("div",{children:["Just ",e.jsx("i",{children:"italic i "}),"true ",e.jsx("small",{children:"small "}),"people that's Manowar's ",e.jsx("b",{children:"b"})]})]}),c={render:H,name:"With Markup (A2, B1)",argTypes:{children:{table:{disable:!1},control:{disable:!0}}},args:{...r}},d={name:"With Can Receive Focus",render:a=>e.jsx(n,{...a,children:"Litt fylltekst"}),args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=b(a).getByText("Litt fylltekst");t.focus(),await s(t).toBeInTheDocument(),await s(t).toHaveFocus(),await s(t).toHaveAttribute("tabIndex","-1")}},R=a=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...a,borderColor:"forest",hasSpacing:!0}),e.jsx(n,{...a,borderColor:"ochre",hasSpacing:!0}),e.jsx(n,{...a,borderColor:"graphite",hasSpacing:!0}),e.jsx(n,{...a,borderColor:"denim",hasSpacing:!0})]}),u={render:R,name:"With All Colors (A3, A4)",args:{...r}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByText(loremIpsum);
    await expect(blockquote).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,k,w;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,S,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var F,W,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    await expect(blockquote).toHaveFocus();
    await expect(blockquote).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,C,M;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'With All Colors (A3, A4)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(M=(C=u.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const _=["WithRef","WithAttributes","Defaults","WithMarkup","WithCanBeManuallyFocused","WithColors"],L=Object.freeze(Object.defineProperty({__proto__:null,Defaults:i,WithAttributes:l,WithCanBeManuallyFocused:d,WithColors:u,WithMarkup:c,WithRef:o,__namedExportsOrder:_,default:I},Symbol.toStringTag,{value:"Module"}));export{L as B};
//# sourceMappingURL=Blockquote.test.stories-BVoBj8SV.js.map
