import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{w as y,e as t}from"./index-DIxTUSTt.js";import{P as f}from"./index-DXWIZOJk.js";import{l as r,w as v}from"./storybook.testing.utils-CMs160i9.js";import"./index-CGk5cNE3.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";const ea={component:f,title:"Tester/Paragraph",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},variant:{table:{disable:!0}}}},s={children:r},o={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=y(a).getByText(r);await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=y(a).getByText(r);await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},p={name:"Is <p>-element (B1)",args:{...s},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const l=y(a);await t(l.getByText(r).nodeName).toBe("P")}},J=a=>e.jsx(f,{...a,children:e.jsxs("span",{children:["Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare litt ekstra tekst for å få litt ",e.jsx("strong",{children:"innhold "}),", men ",e.jsx("em",{children:"normalt "}),"vil en ønske å skrive så konsentret som mulig. Mange brukere leser bare de første ordene i en tekst, eller hopper ganske enkelt over den. Dette er en ",e.jsx("a",{href:"https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/2-460499/Latvia/Bauskas%20Rajons/Codes%20pagasts/Code",children:"lenke"})," for å sjekke været i ",e.jsx("code",{children:"Code "}),"som er en ",e.jsx("small",{children:"small "}),"landsby i et land med mange ",e.jsx("mark",{children:"mark "}),"og et språk uten ",e.jsx("b",{children:"b "}),"eller ",e.jsx("i",{children:"i"}),"."]})}),c={render:J,name:"With Markup (A2, B2)",args:{...s},argTypes:{children:{table:{disable:!1},control:{disable:!0}}},parameters:{imageSnapshot:{hover:`${v} > p a`,focus:`${v} > p a`}}},i=a=>e.jsxs(e.Fragment,{children:[e.jsx(f,{...a}),e.jsx(f,{...a})]}),m={render:i,name:"Defaults Variant Standard (A1, B2)",args:{...s},argTypes:{children:{table:{disable:!1}}}},g={render:i,name:"Variant Ingress (A1)",args:{...s,variant:"ingress"},argTypes:{variant:{table:{disable:!1}}}},u={render:i,name:"With Spacing Variant Standard (A3)",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},h={render:i,name:"With Spacing Variant Ingress (A3)",args:{...s,hasSpacing:!0,variant:"ingress"},argTypes:{hasSpacing:{table:{disable:!1}},variant:{table:{disable:!1}}}},b={render:i,args:{...s,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=y(a).getAllByText(r)[1];n.focus(),await t(n).toBeInTheDocument(),await t(n).toHaveAttribute("tabIndex","-1")}};var S,T,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var w,x,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    const paragraph = canvas.getByText(loremIpsum);
    await expect(paragraph).toHaveClass('dummyClassname');
    await expect(paragraph).toHaveAttribute('id', 'htmlId');
    await expect(paragraph).toHaveAttribute('lang', 'nb');
    await expect(paragraph).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var k,W,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Is <p>-element (B1)',
  args: {
    ...defaultArgs
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
    await expect(canvas.getByText(loremIpsum).nodeName).toBe('P');
  }
} satisfies Story`,...(B=(W=p.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,P,j;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > p a\`,
      focus: \`\${wrapper} > p a\`
    }
  }
} satisfies Story`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var M,H,E;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(H=m.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var C,V,D;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(V=g.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var R,N,$;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(N=u.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var L,_,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(_=h.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,z,G;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const na=["WithRef","WithAttributes","IsPElement","WithMarkup","Defaults","VariantIngress","WithSpacing","VariantIngressWithSpacing","WithCanBeManuallyFocused"];export{m as Defaults,p as IsPElement,g as VariantIngress,h as VariantIngressWithSpacing,d as WithAttributes,b as WithCanBeManuallyFocused,c as WithMarkup,o as WithRef,u as WithSpacing,na as __namedExportsOrder,ea as default};
//# sourceMappingURL=Paragraph.test.stories-ejLWf3aJ.js.map
