import{j as e}from"./iframe-DRo7xN6O.js";import{P as f}from"./index-K3PRhlds.js";import{l as u}from"./storybook.testing.utils-CMs160i9.js";const{expect:t,within:y}=__STORYBOOK_MODULE_TEST__,Y={component:f,title:"Tester/Paragraph",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},variant:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={children:u},r={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=y(a).getByText(u);await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const n=y(a).getByText(u);await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},l={name:"Is <p>-element (B1)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const h=y(a);await t(h.getByText(u).nodeName).toBe("P")}},q=a=>e.jsx(f,{...a,children:e.jsxs("span",{children:["Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare litt ekstra tekst for å få litt ",e.jsx("strong",{children:"innhold "}),", men ",e.jsx("em",{children:"normalt "}),"vil en ønske å skrive så konsentret som mulig. Mange brukere leser bare de første ordene i en tekst, eller hopper ganske enkelt over den. Dette er en ",e.jsx("a",{href:"https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/2-460499/Latvia/Bauskas%20Rajons/Codes%20pagasts/Code",children:"lenke"})," for å sjekke været i ",e.jsx("code",{children:"Code "}),"som er en ",e.jsx("small",{children:"small "}),"landsby i et land med mange ",e.jsx("mark",{children:"mark "}),"og et språk uten ",e.jsx("b",{children:"b "}),"eller ",e.jsx("i",{children:"i"}),"."]})}),o={render:q,name:"With Markup (A2, B2)",args:{...s},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},b=a=>e.jsxs(e.Fragment,{children:[e.jsx(f,{...a}),e.jsx(f,{...a})]}),d={render:b,name:"Defaults Variant Standard (A1, B2)",args:{...s},argTypes:{children:{table:{disable:!1}}}},c={render:b,name:"Variant Ingress (A1)",args:{...s,variant:"ingress"},argTypes:{variant:{table:{disable:!1}}}},p={render:b,name:"With Spacing Variant Standard (A3)",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},m={render:b,name:"With Spacing Variant Ingress (A3)",args:{...s,hasSpacing:!0,variant:"ingress"},argTypes:{hasSpacing:{table:{disable:!1}},variant:{table:{disable:!1}}}},g={render:b,args:{...s,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=y(a).getAllByText(u)[1];n.focus(),await t(n).toBeInTheDocument(),await t(n).toHaveAttribute("tabIndex","-1")}};var v,S,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLParagraphElement | null): void => {
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
    const paragraph = canvas.getByText(loremIpsum);
    await expect(paragraph).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,x,w;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    const paragraph = canvas.getByText(loremIpsum);
    await expect(paragraph).toHaveClass('dummyClassname');
    await expect(paragraph).toHaveAttribute('id', 'htmlId');
    await expect(paragraph).toHaveAttribute('lang', 'nb');
    await expect(paragraph).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var I,k,W;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Is <p>-element (B1)',
  args: {
    ...defaultArgs
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
    await expect(canvas.getByText(loremIpsum).nodeName).toBe('P');
  }
} satisfies Story`,...(W=(k=l.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var B,P,F;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: TemplateWithMarkup,
  name: 'With Markup (A2, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...(F=(P=o.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,M,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: TemplateWithTwoParagraphs,
  name: 'Defaults Variant Standard (A1, B2)',
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
} satisfies Story`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var H,C,D;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: TemplateWithTwoParagraphs,
  name: 'Variant Ingress (A1)',
  args: {
    ...defaultArgs,
    variant: 'ingress'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var V,_,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: TemplateWithTwoParagraphs,
  name: 'With Spacing Variant Standard (A3)',
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
} satisfies Story`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var N,O,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: TemplateWithTwoParagraphs,
  name: 'With Spacing Variant Ingress (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
    variant: 'ingress'
  },
  argTypes: {
    hasSpacing: {
      table: {
        disable: false
      }
    },
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var z,K,U;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: TemplateWithTwoParagraphs,
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
    const paragraph = canvas.getAllByText(loremIpsum)[1];
    paragraph.focus();
    await expect(paragraph).toBeInTheDocument();
    await expect(paragraph).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const G=["WithRef","WithAttributes","IsPElement","WithMarkup","Defaults","VariantIngress","WithSpacing","VariantIngressWithSpacing","WithCanBeManuallyFocused"],Z=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,IsPElement:l,VariantIngress:c,VariantIngressWithSpacing:m,WithAttributes:i,WithCanBeManuallyFocused:g,WithMarkup:o,WithRef:r,WithSpacing:p,__namedExportsOrder:G,default:Y},Symbol.toStringTag,{value:"Module"}));export{Z as P};
//# sourceMappingURL=Paragraph.test.stories-BS4K3dw-.js.map
