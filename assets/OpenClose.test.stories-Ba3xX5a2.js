import{r as Q,j}from"./iframe-BQX7p2fO.js";import{O as N}from"./index-BWAuWBOL.js";import{h as V}from"./base-props.types-DHcpNXpn.js";const{expect:n,fireEvent:l,within:r,waitFor:K,fn:q}=__STORYBOOK_MODULE_TEST__,L="htmlId",$="Er jeg pendler?",d="En pendler er en lønnstaker som overnatter borte på grunn av jobb. Hvis du er pendler kan du ha krav på fradrag for dine merkostnader til kost, losji og reiser til og fra pendlerboligen.",Y="OpenClose har ikke blitt åpnet",G="OpenClose har blitt åpnet",X={component:N,title:"Tester/OpenClose",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},size:{table:{disable:!0},control:"inline-radio"},variant:{table:{disable:!0},control:"inline-radio"},iconPosition:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},isOnClickOnlyFiredOnOpen:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},keepMounted:{table:{disable:!0}},showUnderline:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},J=a=>j.jsx(N,{...a,onClick:e=>{a.onClick?.(e)},children:a.children}),Z=a=>{const[e,t]=Q.useState(Y);return j.jsx(N,{...a,title:e,onClick:i=>{t(G)},children:a.children})},ee=a=>j.jsx(j.Fragment,{children:V.map((e,t)=>j.jsx(N,{...a,titleAs:e,title:`Heading ${e}`,children:a.children},`level_${t}`))}),s={title:$,children:d},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a);await n(e.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={name:"With Attributes(FA2-5)",args:{...s,id:L,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=r(a),t=e.getByRole("button"),i=e.getAllByRole("generic")[1];await n(i).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("id",L),await n(t).toHaveAttribute("lang","nb"),await n(t).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (A2, B1)",args:{...s},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const e=r(a),t=e.getByRole("button");await n(t).toBeInTheDocument(),await n(t).toHaveAttribute("type","button"),await n(t).toHaveAttribute("aria-expanded","false");const i=e.getByText($);await n(i).toBeInTheDocument();const o=e.queryByText(d);await n(o).not.toBeInTheDocument();const _=t.querySelector("svg");await n(_).toBeInTheDocument(),await n(_).toHaveAttribute("aria-hidden","true")}},u={name:"With Icon Right (A2)",args:{...s,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},b={name:"Without Underline (A3)",args:{...s,showUnderline:!1},argTypes:{showUnderline:{table:{disable:!1}}}},g={name:"With Icon Right And No Underline (A2, A3)",args:{...s,iconPosition:"right",showUnderline:!1},argTypes:{iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},h={name:"Compact (A1 delvis)",args:{...s,variant:"compact"},argTypes:{variant:{table:{disable:!1}}}},f={name:"Small (A1 delvis)",args:{...s,size:"small"},argTypes:{size:{table:{disable:!1}}}},v={name:"Medium (A1 delvis)",args:{...s,size:"medium"},argTypes:{size:{table:{disable:!1}}}},y={name:"Compact With Icon Right (A1 delvis, A2)",args:{...s,variant:"compact",iconPosition:"right"},argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},A={name:"Small With Icon Right (A1 delvis, A2)",args:{...s,size:"small",iconPosition:"right"},argTypes:{size:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},w={name:"Medium With Icon Right (A1 delvis, A2)",args:{...s,size:"medium",iconPosition:"right"},argTypes:{size:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},T={name:"Compact Without Underline (A1 delvis, A3)",args:{...s,variant:"compact",showUnderline:!1},argTypes:{variant:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},x={name:"Small Without Underline (A1 delvis, A3)",args:{...s,size:"small",showUnderline:!1},argTypes:{size:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},S={name:"Medium Without Underline (A1 delvis, A3)",args:{...s,size:"medium",showUnderline:!1},argTypes:{size:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},I={name:"Compact With Icon Right And No Underline (A1 delvis, A2, A3)",args:{...s,variant:"compact",iconPosition:"right",showUnderline:!1},argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},W={name:"Small With Icon Right And No Underline (A1 delvis, A2, A3)",args:{...s,size:"small",iconPosition:"right",showUnderline:!1},argTypes:{size:{table:{disable:!1}},iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},E={name:"Medium With Icon Right And No Underline (A1 delvis, A2, A3)",args:{...s,size:"medium",iconPosition:"right",showUnderline:!1},argTypes:{size:{table:{disable:!1}},iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},C={name:"With IsExpanded (A4 delvis)",args:{...s,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),t=await e.findByText(d);await n(t).toBeInTheDocument();const i=e.getByRole("button");await n(i).toHaveAttribute("aria-expanded","true")}},k={name:"With Compact And IsExpanded (A4 delvis)",args:{...s,isExpanded:!0,variant:"compact"},argTypes:{isExpanded:{table:{disable:!1}},variant:{table:{disable:!1}}}},B={name:"With Small And IsExpanded (A4 delvis)",args:{...s,isExpanded:!0,size:"small"},argTypes:{isExpanded:{table:{disable:!1}},size:{table:{disable:!1}}}},R={name:"With Medium And IsExpanded (A4 delvis)",args:{...s,isExpanded:!0,size:"medium"},argTypes:{isExpanded:{table:{disable:!1}},size:{table:{disable:!1}}}},U={name:"With IsExpanded And Icon Right (A1 delvis)",args:{...s,isExpanded:!0,iconPosition:"right"},argTypes:{isExpanded:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},O={render:J,name:"With OnClick (A4 delvis, B1 delvis)",args:{...s,onClick:q()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:a,canvasElement:e})=>{const t=r(e),i=t.getByRole("button");await n(i).toHaveAttribute("aria-expanded","false"),await l.click(i);const o=t.getByText(d);await n(i).toHaveAttribute("aria-expanded","true"),await n(o).toBeInTheDocument(),await l.click(i),await n(o).not.toBeInTheDocument(),await K(()=>n(a.onClick).toHaveBeenCalledTimes(2))}},D={render:J,name:"With IsOnClickOnlyFiredOnOpen (A4 delvis)",args:{...s,isOnClickOnlyFiredOnOpen:!0,onClick:q()},argTypes:{isOnClickOnlyFiredOnOpen:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:a,canvasElement:e})=>{const i=r(e).getByRole("button");await l.click(i),await l.click(i),await K(()=>n(a.onClick).toHaveBeenCalledTimes(1))}},P={render:Z,name:"With Changing Title (A4 delvis)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),t=e.getByRole("button"),i=e.getByText(Y);await n(i).toBeInTheDocument(),await l.click(t);const o=e.getByText(G);await n(o).toBeInTheDocument()}},z={render:ee,name:"With TitleAs (B2)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=r(a).getAllByRole("heading");for(const[i,o]of t.entries())await n(o.tagName).toBe(V[i].toLocaleUpperCase())}},H={name:"With Long Title (A1 delvis)",args:{...s,title:"Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut."},argTypes:{title:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},M={name:"With IsDefaultExpanded",args:{...s,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),t=await e.findByText(d);await n(t).toBeInTheDocument();const i=e.getByRole("button");await n(i).toHaveAttribute("aria-expanded","true")}},F={name:"With KeepMounted True (A9)",args:{...s,keepMounted:!0},argTypes:{keepMounted:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),t=e.getByRole("button");await n(t).toHaveAttribute("aria-expanded","false");const i=e.getByText(d);await n(i).toBeInTheDocument(),await n(i).not.toBeVisible(),await l.click(t),await n(t).toHaveAttribute("aria-expanded","true"),await n(i).toBeVisible(),await l.click(t),await n(t).toHaveAttribute("aria-expanded","false"),await n(i).toBeInTheDocument(),await n(i).not.toBeVisible()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
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
    await expect(canvas.getByRole('button')).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
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
    const button = canvas.getByRole('button');
    const wrapper = canvas.getAllByRole('generic')[1];
    await expect(wrapper).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('id', elementId);
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A2, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    title: {
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
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', 'button');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    const title = canvas.getByText(defaultTitle);
    await expect(title).toBeInTheDocument();
    const content = canvas.queryByText(defaultContent);
    await expect(content).not.toBeInTheDocument();
    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Icon Right (A2)',
  args: {
    ...defaultArgs,
    iconPosition: 'right'
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Without Underline (A3)',
  args: {
    ...defaultArgs,
    showUnderline: false
  },
  argTypes: {
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Icon Right And No Underline (A2, A3)',
  args: {
    ...defaultArgs,
    iconPosition: 'right',
    showUnderline: false
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Compact (A1 delvis)',
  args: {
    ...defaultArgs,
    variant: 'compact'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Small (A1 delvis)',
  args: {
    ...defaultArgs,
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Medium (A1 delvis)',
  args: {
    ...defaultArgs,
    size: 'medium'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Compact With Icon Right (A1 delvis, A2)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    iconPosition: 'right'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Small With Icon Right (A1 delvis, A2)',
  args: {
    ...defaultArgs,
    size: 'small',
    iconPosition: 'right'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Medium With Icon Right (A1 delvis, A2)',
  args: {
    ...defaultArgs,
    size: 'medium',
    iconPosition: 'right'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Compact Without Underline (A1 delvis, A3)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    showUnderline: false
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Small Without Underline (A1 delvis, A3)',
  args: {
    ...defaultArgs,
    size: 'small',
    showUnderline: false
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Medium Without Underline (A1 delvis, A3)',
  args: {
    ...defaultArgs,
    size: 'medium',
    showUnderline: false
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Compact With Icon Right And No Underline (A1 delvis, A2, A3)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    iconPosition: 'right',
    showUnderline: false
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Small With Icon Right And No Underline (A1 delvis, A2, A3)',
  args: {
    ...defaultArgs,
    size: 'small',
    iconPosition: 'right',
    showUnderline: false
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Medium With Icon Right And No Underline (A1 delvis, A2, A3)',
  args: {
    ...defaultArgs,
    size: 'medium',
    iconPosition: 'right',
    showUnderline: false
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    },
    showUnderline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With IsExpanded (A4 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true
  },
  argTypes: {
    isExpanded: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const content = await canvas.findByText(defaultContent);
    await expect(content).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Compact And IsExpanded (A4 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
    variant: 'compact'
  },
  argTypes: {
    isExpanded: {
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
} satisfies Story`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Small And IsExpanded (A4 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
    size: 'small'
  },
  argTypes: {
    isExpanded: {
      table: {
        disable: false
      }
    },
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With Medium And IsExpanded (A4 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
    size: 'medium'
  },
  argTypes: {
    isExpanded: {
      table: {
        disable: false
      }
    },
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...R.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With IsExpanded And Icon Right (A1 delvis)',
  args: {
    ...defaultArgs,
    isExpanded: true,
    iconPosition: 'right'
  },
  argTypes: {
    isExpanded: {
      table: {
        disable: false
      }
    },
    iconPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: TemplateWithOnClick,
  name: 'With OnClick (A4 delvis, B1 delvis)',
  args: {
    ...defaultArgs,
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(button);
    const content = canvas.getByText(defaultContent);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(content).toBeInTheDocument();
    await fireEvent.click(button);
    await expect(content).not.toBeInTheDocument();
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
  }
} satisfies Story`,...O.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: TemplateWithOnClick,
  name: 'With IsOnClickOnlyFiredOnOpen (A4 delvis)',
  args: {
    ...defaultArgs,
    isOnClickOnlyFiredOnOpen: true,
    onClick: fn()
  },
  argTypes: {
    isOnClickOnlyFiredOnOpen: {
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
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await fireEvent.click(button);
    await fireEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));
  }
} satisfies Story`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: TemplateWithChangingTitle,
  name: 'With Changing Title (A4 delvis)',
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
    const button = canvas.getByRole('button');
    const oldTitle = canvas.getByText(unchangedTitle);
    await expect(oldTitle).toBeInTheDocument();
    await fireEvent.click(button);
    const newTitle = canvas.getByText(changedTitle);
    await expect(newTitle).toBeInTheDocument();
  }
} satisfies Story`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B2)',
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
    const headings = canvas.getAllByRole('heading');
    for (const [index, heading] of headings.entries()) {
      await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());
    }
  }
} satisfies Story`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With Long Title (A1 delvis)',
  args: {
    ...defaultArgs,
    title: 'Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.' + 'Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut.'
  },
  argTypes: {
    title: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...H.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'With IsDefaultExpanded',
  args: {
    ...defaultArgs,
    isDefaultExpanded: true
  },
  argTypes: {
    isDefaultExpanded: {
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
    const content = await canvas.findByText(defaultContent);
    await expect(content).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'With KeepMounted True (A9)',
  args: {
    ...defaultArgs,
    keepMounted: true
  },
  argTypes: {
    keepMounted: {
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
    const button = canvas.getByRole('button');

    // Initially content should be in DOM but hidden when keepMounted=true
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    const content = canvas.getByText(defaultContent);
    await expect(content).toBeInTheDocument();
    await expect(content).not.toBeVisible();

    // Expand OpenClose
    await fireEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(content).toBeVisible();

    // Collapse OpenClose
    await fireEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'false');

    // Content should still be in DOM but hidden when keepMounted=true
    await expect(content).toBeInTheDocument();
    await expect(content).not.toBeVisible();
  }
} satisfies Story`,...F.parameters?.docs?.source}}};const ne=["WithRef","WithAttributes","Defaults","WithIconRight","WithoutUnderline","WithIconRightAndNoUnderline","Compact","Small","Medium","CompactWithIconRight","SmallWithIconRight","MediumWithIconRight","CompactWithoutUnderline","SmallWithoutUnderline","MediumWithoutUnderline","CompactWithIconRightAndNoUnderline","SmallWithIconRightAndNoUnderline","MediumWithIconRightAndNoUnderline","IsExpanded","CompactAndIsExpanded","SmallAndIsExpanded","MediumAndIsExpanded","IconRightContent","WithOnClick","WithIsOnClickOnlyFiredOnOpen","WithChangingTitle","WithTitleAs","WithLongTitle","IsDefaultExpanded","WithKeepMountedTrue"],ie=Object.freeze(Object.defineProperty({__proto__:null,Compact:h,CompactAndIsExpanded:k,CompactWithIconRight:y,CompactWithIconRightAndNoUnderline:I,CompactWithoutUnderline:T,Defaults:m,IconRightContent:U,IsDefaultExpanded:M,IsExpanded:C,Medium:v,MediumAndIsExpanded:R,MediumWithIconRight:w,MediumWithIconRightAndNoUnderline:E,MediumWithoutUnderline:S,Small:f,SmallAndIsExpanded:B,SmallWithIconRight:A,SmallWithIconRightAndNoUnderline:W,SmallWithoutUnderline:x,WithAttributes:p,WithChangingTitle:P,WithIconRight:u,WithIconRightAndNoUnderline:g,WithIsOnClickOnlyFiredOnOpen:D,WithKeepMountedTrue:F,WithLongTitle:H,WithOnClick:O,WithRef:c,WithTitleAs:z,WithoutUnderline:b,__namedExportsOrder:ne,default:X},Symbol.toStringTag,{value:"Module"}));export{ie as O};
//# sourceMappingURL=OpenClose.test.stories-Ba3xX5a2.js.map
