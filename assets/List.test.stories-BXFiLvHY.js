import{j as e}from"./iframe-BoxHncFg.js";import{L as t,P as p}from"./index-COS0aIOi.js";const{expect:s,within:b}=__STORYBOOK_MODULE_TEST__,J={component:t,title:"Tester/List/List",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0},control:"inline-radio"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement_3")]},l={name:"With Ref (FA1)",args:{...r,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toHaveAttribute("id","htmlid"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults Variant Bullet (A1, B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1},control:{disable:!0}}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("UL")}},d={name:"Variant Number(A1, B1)",args:{...r,as:"ol"},argTypes:{as:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("OL")}},m={name:"With Long Text And Breaking (A1)",args:{...r,children:[e.jsx(t.Element,{children:"Denne listItem har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert, brekke over flere linjer og får et hengende innrykk."},"listElement_1"),e.jsx(t.Element,{children:"DennelistItemharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertbrekkeoverflerelinjerogfårethengendeinntrykk."},"listElement_2")]},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},c={name:"With Markup (A2, B2)",args:{...r,children:[e.jsxs(t.Element,{children:["Kjenner du behovet til ",e.jsx("strong",{children:"brukeren?"})]},"listElement_1"),e.jsxs(t.Element,{children:["Behovet til brukeren er veldig viktig. ",e.jsx("a",{href:"#storybook-root",children:"Er du sikker på at du kjenner behovet til brukeren?"})]},"listElement_2"),e.jsxs(t.Element,{children:["Snakk med andre om ",e.jsx("em",{children:"italic, "}),e.jsx("mark",{children:"mark og "}),e.jsx("code",{children:"code blokk"})," bare på gøy"]},"listElement_3")]},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},z=n=>e.jsxs(e.Fragment,{children:[e.jsx(p,{hasSpacing:!0,children:"Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang."}),e.jsx(t,{...n}),e.jsx(p,{children:"Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang."})]}),u={render:z,name:"With Spacing (A3)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},Y=n=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Her kan du se hvordan de forskjellige variantene til en list ser ut sammen med andre elementer med veksling av luft under listene."}),e.jsxs(t,{...n,children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement_3"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_4")]}),e.jsx(p,{children:"Den første listen kan veksle mellom variantene en liste har."}),e.jsxs(t,{...n,as:"ol",children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre"},"listElement_3"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_4"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_5"),e.jsx(t.Element,{children:"Snakk med andre når som helst"},"listElement_6"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_7"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_8"),e.jsx(t.Element,{children:"Snakk med andre ofte"},"listElement_9"),e.jsx(t.Element,{children:"Snakk med andre aldri"},"listElement_10")]})]}),g={render:Y,name:"With Both Variants And At Least 10 Number Items",args:{...r}},h={name:"With Can Receive Focus",args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=b(n).getByRole("list");a.focus(),await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("tabIndex","-1")}};var f,v,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var E,j,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var A,S,B;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,_,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var L,W,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var D,F,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var N,H,M;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var C,V,O;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents,
  name: 'With Both Variants And At Least 10 Number Items',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(O=(V=g.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var P,K,U;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(K=h.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const q=["WithRef","WithAttributes","Defaults","VariantNumber","WithLongTextAndBreaking","WithMarkup","WithSpacing","WithBothVariantsAndAtLeast10NumberItems","WithCanBeManuallyFocused"],X=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,VariantNumber:d,WithAttributes:i,WithBothVariantsAndAtLeast10NumberItems:g,WithCanBeManuallyFocused:h,WithLongTextAndBreaking:m,WithMarkup:c,WithRef:l,WithSpacing:u,__namedExportsOrder:q,default:J},Symbol.toStringTag,{value:"Module"}));export{X as L};
//# sourceMappingURL=List.test.stories-BXFiLvHY.js.map
