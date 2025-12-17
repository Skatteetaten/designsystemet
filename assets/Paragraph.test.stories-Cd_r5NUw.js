import{j as e}from"./iframe-VHQh6taY.js";import{P as f}from"./index-Don9wpRQ.js";import{l as u}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:t,within:y}=__STORYBOOK_MODULE_TEST__,v={component:f,title:"Tester/Paragraph",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},variant:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={children:u},r={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=y(a).getByText(u);await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const n=y(a).getByText(u);await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},l={name:"Is <p>-element (B1)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const h=y(a);await t(h.getByText(u).nodeName).toBe("P")}},S=a=>e.jsx(f,{...a,children:e.jsxs("span",{children:["Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare litt ekstra tekst for å få litt ",e.jsx("strong",{children:"innhold "}),", men ",e.jsx("em",{children:"normalt "}),"vil en ønske å skrive så konsentret som mulig. Mange brukere leser bare de første ordene i en tekst, eller hopper ganske enkelt over den. Dette er en ",e.jsx("a",{href:"https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/2-460499/Latvia/Bauskas%20Rajons/Codes%20pagasts/Code",children:"lenke"})," for å sjekke været i ",e.jsx("code",{children:"Code "}),"som er en ",e.jsx("small",{children:"small "}),"landsby i et land med mange ",e.jsx("mark",{children:"mark "}),"og et språk uten ",e.jsx("b",{children:"b "}),"eller ",e.jsx("i",{children:"i"}),"."]})}),o={render:S,name:"With Markup (A2, B2)",args:{...s},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},b=a=>e.jsxs(e.Fragment,{children:[e.jsx(f,{...a}),e.jsx(f,{...a})]}),d={render:b,name:"Defaults Variant Standard (A1, B2)",args:{...s},argTypes:{children:{table:{disable:!1}}}},c={render:b,name:"Variant Ingress (A1)",args:{...s,variant:"ingress"},argTypes:{variant:{table:{disable:!1}}}},p={render:b,name:"With Spacing Variant Standard (A3)",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},m={render:b,name:"With Spacing Variant Ingress (A3)",args:{...s,hasSpacing:!0,variant:"ingress"},argTypes:{hasSpacing:{table:{disable:!1}},variant:{table:{disable:!1}}}},g={render:b,args:{...s,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=y(a).getAllByText(u)[1];n.focus(),await t(n).toBeInTheDocument(),await t(n).toHaveAttribute("tabIndex","-1")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};const T=["WithRef","WithAttributes","IsPElement","WithMarkup","Defaults","VariantIngress","WithSpacing","VariantIngressWithSpacing","WithCanBeManuallyFocused"],I=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,IsPElement:l,VariantIngress:c,VariantIngressWithSpacing:m,WithAttributes:i,WithCanBeManuallyFocused:g,WithMarkup:o,WithRef:r,WithSpacing:p,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{I as P};
//# sourceMappingURL=Paragraph.test.stories-Cd_r5NUw.js.map
