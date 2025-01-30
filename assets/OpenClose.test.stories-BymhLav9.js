import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as Je}from"./index-ClcD9ViR.js";import{w as o,e as a,f as qe,a as c,b as _e}from"./index-XVqkR3zt.js";import{O as d}from"./index-C3uJ_lpJ.js";import"./index--O6iZ70i.js";import{w as R}from"./storybook.testing.utils-CMs160i9.js";import{d as Ke,h as D}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BWc9jU-Q.js";import"./index-U0B695k8.js";import"./index-Dxnk4fMh.js";import"./index-aMjpNqYB.js";import"./index-BaCHQVlv.js";const U="htmlId",Me="Er jeg pendler?",p="En pendler er en lønnstaker som overnatter borte på grunn av jobb. Hvis du er pendler kan du ha krav på fradrag for dine merkostnader til kost, losji og reiser til og fra pendlerboligen.",Ve="OpenClose har ikke blitt åpnet",ze="OpenClose har blitt åpnet",un={component:d,title:"Tester/OpenClose",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},variant:{table:{disable:!0},options:[...Ke],control:"inline-radio"},iconPosition:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},isOnClickOnlyFiredOnOpen:{table:{disable:!0}},titleAs:{options:[...D],control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},showUnderline:{table:{disable:!0}},onClick:{table:{disable:!0}}}},Ge=e=>r.jsx(d,{...e,onClick:n=>{var t;(t=e.onClick)==null||t.call(e,n)},children:e.children}),Qe=e=>{const[n,t]=Je.useState(Ve);return r.jsx(d,{...e,title:n,onClick:s=>{t(ze)},children:e.children})},Xe=e=>r.jsx(r.Fragment,{children:D.map((n,t)=>r.jsx(d,{...e,titleAs:n,title:`Heading ${n}`,children:e.children},`level_${t}`))}),i={title:Me,children:p},m={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e);await a(n.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes(FA2-5)",args:{...i,id:U,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e),t=n.getByRole("button"),s=n.getAllByRole("generic")[1];await a(s).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id",U),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}},g={name:"Defaults (A2, B1)",args:{...i},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${R} button`,hover:`${R} button`,click:`${R} button`}},play:async({canvasElement:e})=>{const n=o(e),t=n.getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("type","button"),await a(t).toHaveAttribute("aria-expanded","false");const s=n.getByText(Me);await a(s).toBeInTheDocument();const l=n.queryByText(p);await a(l).not.toBeInTheDocument();const H=t.querySelector("svg");await a(H).toBeInTheDocument(),await a(H).toHaveAttribute("aria-hidden","true")}},b={name:"With Icon Right (A2)",args:{...i,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},Ye=e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"I Skatteetaten definerer vi om du er pendler ut fra at en rekke vilkår må være oppfylt. For å få fradragene må du blant annet være lønnstaker og overnatte borte på grunn av jobb. Pendlerfradrag gis kun for reiseutgifter som du selv (pendleren) har for å besøke hjemmet ditt, ikke for familie som kommer på besøk til din pendlerbolig."}),r.jsx(d,{...e,children:e.children})]}),h={render:Ye,name:"In Context (A1 delvis)",args:{...i},parameters:{imageSnapshot:{disable:!0}}},f={name:"Without Underline (A3)",args:{...i,showUnderline:!1},argTypes:{showUnderline:{table:{disable:!1}}}},v={name:"With Icon Right And No Underline (A2, A3)",args:{...i,iconPosition:"right",showUnderline:!1},argTypes:{iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},y={name:"Compact (A1 delvis)",args:{...i,variant:"compact"},argTypes:{variant:{table:{disable:!1}}}},A={name:"Compact With Icon Right (A1 delvis, A2)",args:{...i,variant:"compact",iconPosition:"right"},argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},w={name:"Compact With Underline (A1 delvis, A3)",args:{...i,variant:"compact",showUnderline:!0},argTypes:{variant:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},T={name:"Compact With Icon Right And Underline (A1 delvis, A2, A3)",args:{...i,variant:"compact",iconPosition:"right",showUnderline:!0},argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},x={name:"With IsExpanded (A4 delvis)",args:{...i,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e),t=await n.findByText(p);await a(t).toBeInTheDocument();const s=n.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},k={name:"With Compact And IsExpanded (A4 delvis)",args:{...i,isExpanded:!0,variant:"compact"},argTypes:{isExpanded:{table:{disable:!1}},variant:{table:{disable:!1}}}},C={name:"With IsExpanded And Icon Right (A1 delvis)",args:{...i,isExpanded:!0,iconPosition:"right"},argTypes:{isExpanded:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},I={render:Ge,name:"With OnClick (A4 delvis, B1 delvis)",args:{...i,onClick:qe()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const t=o(n),s=t.getByRole("button");await a(s).toHaveAttribute("aria-expanded","false"),await c.click(s);const l=t.getByText(p);await a(s).toHaveAttribute("aria-expanded","true"),await a(l).toBeInTheDocument(),await c.click(s),await a(l).not.toBeInTheDocument(),await _e(()=>a(e.onClick).toHaveBeenCalledTimes(2))}},W={render:Ge,name:"With IsOnClickOnlyFiredOnOpen (A4 delvis)",args:{...i,isOnClickOnlyFiredOnOpen:!0,onClick:qe()},argTypes:{isOnClickOnlyFiredOnOpen:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=o(n).getByRole("button");await c.click(s),await c.click(s),await _e(()=>a(e.onClick).toHaveBeenCalledTimes(1))}},B={render:Qe,name:"With Changing Title (A4 delvis)",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e),t=n.getByRole("button"),s=n.getByText(Ve);await a(s).toBeInTheDocument(),await c.click(t);const l=n.getByText(ze);await a(l).toBeInTheDocument()}},S={render:Xe,name:"With TitleAs (B2)",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=o(e).getAllByRole("heading");for(const[s,l]of t.entries())await a(l.tagName).toBe(D[s].toLocaleUpperCase())}},E={name:"With Long Title (A1 delvis)",args:{...i,title:"Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut."},argTypes:{title:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},O={name:"With IsDefaultExpanded",args:{...i,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e),t=await n.findByText(p);await a(t).toBeInTheDocument();const s=n.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}};var P,F,j;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button')).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var N,L,$;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(L=u.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var q,_,M;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
      focus: \`\${wrapper} button\`,
      hover: \`\${wrapper} button\`,
      click: \`\${wrapper} button\`
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
} satisfies Story`,...(M=(_=g.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var V,z,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,oe,le;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(de=w.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,ge;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,he,fe;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(he=x.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,ye,Ae;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};var we,Te,xe;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var ke,Ce,Ie;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var We,Be,Se;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var Ee,Oe,Re;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Oe=B.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var De,He,Ue;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(He=S.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var Pe,Fe,je;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(je=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ne,Le,$e;O.parameters={...O.parameters,docs:{...(Ne=O.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...($e=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};const gn=["WithRef","WithAttributes","Defaults","WithIconRight","InContext","WithoutUnderline","WithIconRightAndNoUnderline","Compact","CompactWithIconRight","CompactWithUnderline","CompactWithIconRightAndUnderline","IsExpanded","CompactAndIsExpanded","IconRightContent","WithOnClick","WithIsOnClickOnlyFiredOnOpen","WithChangingTitle","WithTitleAs","WithLongTitle","IsDefaultExpanded"];export{y as Compact,k as CompactAndIsExpanded,A as CompactWithIconRight,T as CompactWithIconRightAndUnderline,w as CompactWithUnderline,g as Defaults,C as IconRightContent,h as InContext,O as IsDefaultExpanded,x as IsExpanded,u as WithAttributes,B as WithChangingTitle,b as WithIconRight,v as WithIconRightAndNoUnderline,W as WithIsOnClickOnlyFiredOnOpen,E as WithLongTitle,I as WithOnClick,m as WithRef,S as WithTitleAs,f as WithoutUnderline,gn as __namedExportsOrder,un as default};
//# sourceMappingURL=OpenClose.test.stories-BymhLav9.js.map
