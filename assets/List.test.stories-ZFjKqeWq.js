import{j as e}from"./iframe-Br1Xu9zr.js";import{L as t,P as p}from"./index-DCwxX22m.js";const{expect:s,within:b}=__STORYBOOK_MODULE_TEST__,f={component:t,title:"Tester/List",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0},control:"inline-radio"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement_3")]},l={name:"With Ref (FA1)",args:{...r,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toHaveAttribute("id","htmlid"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults Variant Bullet (A1, B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1},control:{disable:!0}}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("UL")}},d={name:"Variant Number(A1, B1)",args:{...r,as:"ol"},argTypes:{as:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("OL")}},m={name:"With Long Text And Breaking (A1)",args:{...r,children:[e.jsx(t.Element,{children:"Denne listItem har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert, brekke over flere linjer og får et hengende innrykk."},"listElement_1"),e.jsx(t.Element,{children:"DennelistItemharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertbrekkeoverflerelinjerogfårethengendeinntrykk."},"listElement_2")]},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},c={name:"With Markup (A2, B2)",args:{...r,children:[e.jsxs(t.Element,{children:["Kjenner du behovet til ",e.jsx("strong",{children:"brukeren?"})]},"listElement_1"),e.jsxs(t.Element,{children:["Behovet til brukeren er veldig viktig. ",e.jsx("a",{href:"#storybook-root",children:"Er du sikker på at du kjenner behovet til brukeren?"})]},"listElement_2"),e.jsxs(t.Element,{children:["Snakk med andre om ",e.jsx("em",{children:"italic, "}),e.jsx("mark",{children:"mark og "}),e.jsx("code",{children:"code blokk"})," bare på gøy"]},"listElement_3")]},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},v=n=>e.jsxs(e.Fragment,{children:[e.jsx(p,{hasSpacing:!0,children:"Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang."}),e.jsx(t,{...n}),e.jsx(p,{children:"Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang."})]}),u={render:v,name:"With Spacing (A3)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},y=n=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Her kan du se hvordan de forskjellige variantene til en list ser ut sammen med andre elementer med veksling av luft under listene."}),e.jsxs(t,{...n,children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement_3"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_4")]}),e.jsx(p,{children:"Den første listen kan veksle mellom variantene en liste har."}),e.jsxs(t,{...n,as:"ol",children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre"},"listElement_3"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_4"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_5"),e.jsx(t.Element,{children:"Snakk med andre når som helst"},"listElement_6"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_7"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_8"),e.jsx(t.Element,{children:"Snakk med andre ofte"},"listElement_9"),e.jsx(t.Element,{children:"Snakk med andre aldri"},"listElement_10")]})]}),g={render:y,name:"With Both Variants And At Least 10 Number Items",args:{...r}},h={name:"With Can Receive Focus",args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");a.focus(),await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("tabIndex","-1")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLUListElement | null): void => {
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
    const list = canvas.getByRole('list');
    await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const list = canvas.getByRole('list');
    await expect(list).toHaveAttribute('id', 'htmlid');
    await expect(list).toHaveClass('dummyClassname');
    await expect(list).toHaveAttribute('lang', 'nb');
    await expect(list).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Defaults Variant Bullet (A1, B1, B2)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(list.tagName).toBe('UL');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Variant Number(A1, B1)',
  args: {
    ...defaultArgs,
    as: 'ol'
  },
  argTypes: {
    as: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(list.tagName).toBe('OL');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text And Breaking (A1)',
  args: {
    ...defaultArgs,
    children: [<List.Element key={'listElement_1'}>
        {'Denne listItem har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med ' + 'tekst som alltid er venstrejustert, brekke over flere linjer og får et hengende innrykk.'}
      </List.Element>, <List.Element key={'listElement_2'}>
        {'DennelistItemharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertbrekkeoverflerelinjerogfårethengendeinntrykk.'}
      </List.Element>]
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
} satisfies Story`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Markup (A2, B2)',
  args: {
    ...defaultArgs,
    children: [<List.Element key={'listElement_1'}>
        {'Kjenner du behovet til '}
        <strong>{'brukeren?'}</strong>
      </List.Element>, <List.Element key={'listElement_2'}>
        {'Behovet til brukeren er veldig viktig. '}
        <a href={'#storybook-root'}>
          {'Er du sikker på at du kjenner behovet til brukeren?'}
        </a>
      </List.Element>, <List.Element key={'listElement_3'}>
        {'Snakk med andre om '}
        <em>{'italic, '}</em>
        <mark>{'mark og '}</mark>
        <code>{'code blokk'}</code>
        {' bare på gøy'}
      </List.Element>]
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
} satisfies Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: TemplateWithTwoParagraph,
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
} satisfies Story`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents,
  name: 'With Both Variants And At Least 10 Number Items',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Can Receive Focus',
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
    const list = canvas.getByRole('list');
    list.focus();
    await expect(list).toBeInTheDocument();
    await expect(list).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const E=["WithRef","WithAttributes","Defaults","VariantNumber","WithLongTextAndBreaking","WithMarkup","WithSpacing","WithBothVariantsAndAtLeast10NumberItems","WithCanBeManuallyFocused"],A=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,VariantNumber:d,WithAttributes:i,WithBothVariantsAndAtLeast10NumberItems:g,WithCanBeManuallyFocused:h,WithLongTextAndBreaking:m,WithMarkup:c,WithRef:l,WithSpacing:u,__namedExportsOrder:E,default:f},Symbol.toStringTag,{value:"Module"}));export{A as L};
//# sourceMappingURL=List.test.stories-ZFjKqeWq.js.map
