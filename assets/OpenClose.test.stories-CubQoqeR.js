import{j as o,r as Qe}from"./iframe-Cq9sN_Dz.js";import{O as R}from"./index-DEEEsonz.js";import{h as Ke}from"./base-props.types-B340BQPQ.js";const{expect:a,fireEvent:c,within:r,waitFor:qe,fn:$e}=__STORYBOOK_MODULE_TEST__,H="htmlId",ze="Er jeg pendler?",d="En pendler er en lønnstaker som overnatter borte på grunn av jobb. Hvis du er pendler kan du ha krav på fradrag for dine merkostnader til kost, losji og reiser til og fra pendlerboligen.",Ye="OpenClose har ikke blitt åpnet",Ge="OpenClose har blitt åpnet",Xe={component:R,title:"Tester/OpenClose",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},iconPosition:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},isOnClickOnlyFiredOnOpen:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},keepMounted:{table:{disable:!0}},showUnderline:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},Je=e=>o.jsx(R,{...e,onClick:n=>{var t;(t=e.onClick)==null||t.call(e,n)},children:e.children}),Ze=e=>{const[n,t]=Qe.useState(Ye);return o.jsx(R,{...e,title:n,onClick:s=>{t(Ge)},children:e.children})},en=e=>o.jsx(o.Fragment,{children:Ke.map((n,t)=>o.jsx(R,{...e,titleAs:n,title:`Heading ${n}`,children:e.children},`level_${t}`))}),i={title:ze,children:d},p={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e);await a(n.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes(FA2-5)",args:{...i,id:H,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=r(e),t=n.getByRole("button"),s=n.getAllByRole("generic")[1];await a(s).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id",H),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (A2, B1)",args:{...i},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const n=r(e),t=n.getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("type","button"),await a(t).toHaveAttribute("aria-expanded","false");const s=n.getByText(ze);await a(s).toBeInTheDocument();const l=n.queryByText(d);await a(l).not.toBeInTheDocument();const D=t.querySelector("svg");await a(D).toBeInTheDocument(),await a(D).toHaveAttribute("aria-hidden","true")}},b={name:"With Icon Right (A2)",args:{...i,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},nn=e=>o.jsxs(o.Fragment,{children:[o.jsx("div",{children:"I Skatteetaten definerer vi om du er pendler ut fra at en rekke vilkår må være oppfylt. For å få fradragene må du blant annet være lønnstaker og overnatte borte på grunn av jobb. Pendlerfradrag gis kun for reiseutgifter som du selv (pendleren) har for å besøke hjemmet ditt, ikke for familie som kommer på besøk til din pendlerbolig."}),o.jsx(R,{...e,children:e.children})]}),g={render:nn,name:"In Context (A1 delvis)",args:{...i},parameters:{imageSnapshot:{disable:!0}}},h={name:"Without Underline (A3)",args:{...i,showUnderline:!1},argTypes:{showUnderline:{table:{disable:!1}}}},v={name:"With Icon Right And No Underline (A2, A3)",args:{...i,iconPosition:"right",showUnderline:!1},argTypes:{iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},f={name:"Compact (A1 delvis)",args:{...i,variant:"compact"},argTypes:{variant:{table:{disable:!1}}}},y={name:"Compact With Icon Right (A1 delvis, A2)",args:{...i,variant:"compact",iconPosition:"right"},argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},A={name:"Compact With Underline (A1 delvis, A3)",args:{...i,variant:"compact",showUnderline:!0},argTypes:{variant:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},w={name:"Compact With Icon Right And Underline (A1 delvis, A2, A3)",args:{...i,variant:"compact",iconPosition:"right",showUnderline:!0},argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},T={name:"With IsExpanded (A4 delvis)",args:{...i,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),t=await n.findByText(d);await a(t).toBeInTheDocument();const s=n.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},x={name:"With Compact And IsExpanded (A4 delvis)",args:{...i,isExpanded:!0,variant:"compact"},argTypes:{isExpanded:{table:{disable:!1}},variant:{table:{disable:!1}}}},k={name:"With IsExpanded And Icon Right (A1 delvis)",args:{...i,isExpanded:!0,iconPosition:"right"},argTypes:{isExpanded:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},C={render:Je,name:"With OnClick (A4 delvis, B1 delvis)",args:{...i,onClick:$e()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const t=r(n),s=t.getByRole("button");await a(s).toHaveAttribute("aria-expanded","false"),await c.click(s);const l=t.getByText(d);await a(s).toHaveAttribute("aria-expanded","true"),await a(l).toBeInTheDocument(),await c.click(s),await a(l).not.toBeInTheDocument(),await qe(()=>a(e.onClick).toHaveBeenCalledTimes(2))}},B={render:Je,name:"With IsOnClickOnlyFiredOnOpen (A4 delvis)",args:{...i,isOnClickOnlyFiredOnOpen:!0,onClick:$e()},argTypes:{isOnClickOnlyFiredOnOpen:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=r(n).getByRole("button");await c.click(s),await c.click(s),await qe(()=>a(e.onClick).toHaveBeenCalledTimes(1))}},S={render:Ze,name:"With Changing Title (A4 delvis)",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=r(e),t=n.getByRole("button"),s=n.getByText(Ye);await a(s).toBeInTheDocument(),await c.click(t);const l=n.getByText(Ge);await a(l).toBeInTheDocument()}},I={render:en,name:"With TitleAs (B2)",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=r(e).getAllByRole("heading");for(const[s,l]of t.entries())await a(l.tagName).toBe(Ke[s].toLocaleUpperCase())}},W={name:"With Long Title (A1 delvis)",args:{...i,title:"Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut."},argTypes:{title:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},E={name:"With IsDefaultExpanded",args:{...i,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e),t=await n.findByText(d);await a(t).toBeInTheDocument();const s=n.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},O={name:"With KeepMounted True (A9)",args:{...i,keepMounted:!0},argTypes:{keepMounted:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e),t=n.getByRole("button");await a(t).toHaveAttribute("aria-expanded","false");const s=n.getByText(d);await a(s).toBeInTheDocument(),await a(s).not.toBeVisible(),await c.click(t),await a(t).toHaveAttribute("aria-expanded","true"),await a(s).toBeVisible(),await c.click(t),await a(t).toHaveAttribute("aria-expanded","false"),await a(s).toBeInTheDocument(),await a(s).not.toBeVisible()}};var U,P,F;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,M,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(M=u.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var N,L,V;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var K,q,$;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(q=b.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var z,Y,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: TemplateWithContext,
  name: 'In Context (A1 delvis)',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(G=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,re,oe;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(re=y.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ce,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Compact With Underline (A1 delvis, A3)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    showUnderline: true
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
} satisfies Story`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,me;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Compact With Icon Right And Underline (A1 delvis, A2, A3)',
  args: {
    ...defaultArgs,
    variant: 'compact',
    iconPosition: 'right',
    showUnderline: true
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
} satisfies Story`,...(me=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,ge,he;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,fe,ye;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Ae,we,Te;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var xe,ke,Ce;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: TemplateWithOnClick,
  name: 'With OnClick (A4 delvis, B1 delvis)',
  args: {
    ...defaultArgs,
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
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
} satisfies Story`,...(Ce=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Be,Se,Ie;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(Ie=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var We,Ee,Oe;S.parameters={...S.parameters,docs:{...(We=S.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: TemplateWithChangingTitle,
  name: 'With Changing Title (A4 delvis)',
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
    const button = canvas.getByRole('button');
    const oldTitle = canvas.getByText(unchangedTitle);
    await expect(oldTitle).toBeInTheDocument();
    await fireEvent.click(button);
    const newTitle = canvas.getByText(changedTitle);
    await expect(newTitle).toBeInTheDocument();
  }
} satisfies Story`,...(Oe=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Re,De,He;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B2)',
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
    const headings = canvas.getAllByRole('heading');
    for (const [index, heading] of headings.entries()) {
      await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());
    }
  }
} satisfies Story`,...(He=(De=I.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Ue,Pe,Fe;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var je,Me,_e;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Ne,Le,Ve;O.parameters={...O.parameters,docs:{...(Ne=O.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};const tn=["WithRef","WithAttributes","Defaults","WithIconRight","InContext","WithoutUnderline","WithIconRightAndNoUnderline","Compact","CompactWithIconRight","CompactWithUnderline","CompactWithIconRightAndUnderline","IsExpanded","CompactAndIsExpanded","IconRightContent","WithOnClick","WithIsOnClickOnlyFiredOnOpen","WithChangingTitle","WithTitleAs","WithLongTitle","IsDefaultExpanded","WithKeepMountedTrue"],on=Object.freeze(Object.defineProperty({__proto__:null,Compact:f,CompactAndIsExpanded:x,CompactWithIconRight:y,CompactWithIconRightAndUnderline:w,CompactWithUnderline:A,Defaults:m,IconRightContent:k,InContext:g,IsDefaultExpanded:E,IsExpanded:T,WithAttributes:u,WithChangingTitle:S,WithIconRight:b,WithIconRightAndNoUnderline:v,WithIsOnClickOnlyFiredOnOpen:B,WithKeepMountedTrue:O,WithLongTitle:W,WithOnClick:C,WithRef:p,WithTitleAs:I,WithoutUnderline:h,__namedExportsOrder:tn,default:Xe},Symbol.toStringTag,{value:"Module"}));export{on as O};
//# sourceMappingURL=OpenClose.test.stories-CubQoqeR.js.map
