import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{w as l,e as s}from"./index-DIxTUSTt.js";import{L as t,P as k}from"./index-DsfABT8I.js";import{w as v}from"./storybook.testing.utils-CMs160i9.js";import"./index-ChzTQA-a.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";const J=["ul","ol"],ne={component:t,title:"Tester/List/List",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0},options:[...J],control:"inline-radio"}}},r={children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement_3")]},o={name:"With Ref (FA1)",args:{...r,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n).getByRole("list");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=l(n).getByRole("list");await s(a).toHaveAttribute("id","htmlid"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults Variant Bullet (A1, B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1},control:{disable:!0}}},play:async({canvasElement:n})=>{const a=l(n).getByRole("list");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("UL")}},c={name:"Variant Number(A1, B1)",args:{...r,as:"ol"},argTypes:{as:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=l(n).getByRole("list");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("OL")}},u={name:"With Long Text And Breaking (A1)",args:{...r,children:[e.jsx(t.Element,{children:"Denne listItem har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert, brekke over flere linjer og får et hengende innrykk."},"listElement_1"),e.jsx(t.Element,{children:"DennelistItemharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertbrekkeoverflerelinjerogfårethengendeinntrykk."},"listElement_2")]},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},g={name:"With Markup (A2, B2)",args:{...r,children:[e.jsxs(t.Element,{children:["Kjenner du behovet til ",e.jsx("strong",{children:"brukeren?"})]},"listElement_1"),e.jsxs(t.Element,{children:["Behovet til brukeren er veldig viktig. ",e.jsx("a",{href:"#storybook-root",children:"Er du sikker på at du kjenner behovet til brukeren?"})]},"listElement_2"),e.jsxs(t.Element,{children:["Snakk med andre om ",e.jsx("em",{children:"italic, "}),e.jsx("mark",{children:"mark og "}),e.jsx("code",{children:"code blokk"})," bare på gøy"]},"listElement_3")]},argTypes:{children:{table:{disable:!1},control:{disable:!0}}},parameters:{imageSnapshot:{hover:`${v} > ul > li a`,focus:`${v} > ul > li a`}}},q=n=>e.jsxs(e.Fragment,{children:[e.jsx(k,{hasSpacing:!0,children:"Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang."}),e.jsx(t,{...n}),e.jsx(k,{children:"Jeg er et tekstavsnitt uten innrykk. Denne teksten skulle bli ca. to linjer lang, men jeg trenger litt mer innhold for å bli to linjer lang. Derfor fortsetter jeg å skrive på dette tekstavsnittet uten innrykk og etter en stund blir denne teksten ca to linjer lang."})]}),h={render:q,name:"With Spacing (A3)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},z=n=>e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"Her kan du se hvordan de forskjellige variantene til en list ser ut sammen med andre elementer med veksling av luft under listene."}),e.jsxs(t,{...n,children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement_3"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_4")]}),e.jsx(k,{children:"Den første listen kan veksle mellom variantene en liste har."}),e.jsxs(t,{...n,as:"ol",children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement_1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_2"),e.jsx(t.Element,{children:"Snakk med andre"},"listElement_3"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_4"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_5"),e.jsx(t.Element,{children:"Snakk med andre når som helst"},"listElement_6"),e.jsx(t.Element,{children:"Kjenner du behovet?"},"listElement_7"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement_8"),e.jsx(t.Element,{children:"Snakk med andre ofte"},"listElement_9"),e.jsx(t.Element,{children:"Snakk med andre aldri"},"listElement_10")]})]}),b={render:z,name:"With Both Variants And At Least 10 Number Items",args:{...r}},p={name:"With Can Receive Focus",args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=l(n).getByRole("list");a.focus(),await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("tabIndex","-1")}};var f,y,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('list');
    await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var j,x,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(x=d.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var B,S,w;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,W,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(W=c.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var _,I,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var F,R,N;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > ul > li a\`,
      focus: \`\${wrapper} > ul > li a\`
    }
  }
} satisfies Story`,...(N=(R=g.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var H,C,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(C=h.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var V,P,K;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: TemplateWithVariantsAndAtLeast10ItemsAndOtherComponents,
  name: 'With Both Variants And At Least 10 Number Items',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(K=(P=b.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var O,$,U;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=($=p.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const ae=["WithRef","WithAttributes","Defaults","VariantNumber","WithLongTextAndBreaking","WithMarkup","WithSpacing","WithBothVariantsAndAtLeast10NumberItems","WithCanBeManuallyFocused"];export{m as Defaults,c as VariantNumber,d as WithAttributes,b as WithBothVariantsAndAtLeast10NumberItems,p as WithCanBeManuallyFocused,u as WithLongTextAndBreaking,g as WithMarkup,o as WithRef,h as WithSpacing,ae as __namedExportsOrder,ne as default};
//# sourceMappingURL=List.test.stories-Df_QoRQE.js.map
