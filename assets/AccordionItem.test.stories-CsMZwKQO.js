import{j as x}from"./jsx-runtime-Nms4Y4qS.js";import{A as T}from"./index-DrpnSDyL.js";import"./index-e2J6NVvS.js";import{P as de}from"./index-nyVGXzax.js";import{w as o,e as a,f as ue,b as C,c as B,u as me}from"./index-hUG6DWTw.js";import{w as A}from"./storybook.testing.utils-CMs160i9.js";import{h as E}from"./base-props.types-BkCKQDF7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C4S6bjjo.js";import"./index-DnZXMkM7.js";import"./index-C5i69K7H.js";import"./index-BpsKvWdW.js";const S="htmlId",k="Meg selv",I="Beskrivelse",l="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",ke={component:T.Item,title:"Tester/Accordion/Item",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},svgPath:{table:{disable:!0}},titleAs:{options:[...E],control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},subtitle:{table:{disable:!0}},onClick:{table:{disable:!0}}}},ce=e=>x.jsx(T.Item,{...e,onClick:n=>{var t;(t=e.onClick)==null||t.call(e,n)},children:e.children}),pe=e=>x.jsx(x.Fragment,{children:E.map((n,t)=>x.jsx(T.Item,{...e,titleAs:n,title:`Heading ${n}`,children:e.children},`level_${t}`))}),i={title:k,children:l},d={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e);await a(n.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes(FA2-5)",args:{...i,id:S,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button");await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id",S),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (A2, B1)",args:{...i},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${A} button`,hover:`${A} button`,click:`${A} button`}},play:async({canvasElement:e})=>{const n=o(e),t=n.getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("type","button"),await a(t).toHaveAttribute("aria-expanded","false");const s=n.getByText(k);await a(s).toBeInTheDocument();const r=n.queryByText(l);await a(r).not.toBeInTheDocument();const c=t.querySelector("svg");await a(c).toBeInTheDocument(),await a(c).toHaveAttribute("aria-hidden","true")}},p={name:"With Custom ClassNames (FA3, A10)",args:{...i,subtitle:I,isExpanded:!0,classNames:{container:"dummyClassname",title:"dummyClassname",subtitle:"dummyClassname",content:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e),t=n.getByRole("button"),s=n.getByText(k),r=n.getByText(I),c=n.getByText(l);await a(t).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(r).toHaveClass("dummyClassname"),await a(c).toHaveClass("dummyClassname")}},b={name:"With Custom Icon (A8)",args:{...i,svgPath:de},parameters:{imageSnapshot:{disable:!1}}},g={name:"With IsExpanded (A6 delvis)",args:{...i,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e),t=await n.findByText(l);await a(t).toBeInTheDocument();const s=n.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},y={name:"With IsDefaultExpanded (A6 delvis)",args:{...i,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e),t=await n.findByText(l);await a(t).toBeInTheDocument();const s=n.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},v={render:ce,name:"With OnClick (A5, B1,B2)",args:{...i,onClick:ue()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const t=o(n),s=t.getByRole("button");await a(s).toHaveAttribute("aria-expanded","false"),await C.click(s);const r=t.getByText(l);await a(s).toHaveAttribute("aria-expanded","true"),await a(r).toBeInTheDocument(),await C.click(s),await a(r).not.toBeInTheDocument(),await B(()=>a(e.onClick).toHaveBeenCalledTimes(2))}},f={render:ce,name:"With Persist Focus On Click (C1))",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button");await C.focus(t);const s=me.setup();await s.tab(),await s.keyboard("{Space}"),await B(()=>{a(t.matches(":focus")).toBe(!0)}),await s.keyboard("{Enter}"),await B(()=>{a(t).toHaveFocus()})}},h={name:"With Title Line Break (A3)",args:{...i,title:`Tittel som
brekker over flere
linjer`},parameters:{imageSnapshot:{disable:!0}}},w={render:pe,name:"With TitleAs (B3)",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=o(e).getAllByRole("heading");for(const[s,r]of t.entries())await a(r.tagName).toBe(E[s].toLocaleUpperCase())}};var H,W,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var F,R,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('id', elementId);
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(P=(R=u.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var N,O,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var $,L,q;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3, A10)',
  args: {
    ...defaultArgs,
    subtitle: defaultSubtitle,
    isExpanded: true,
    classNames: {
      container: 'dummyClassname',
      title: 'dummyClassname',
      subtitle: 'dummyClassname',
      content: 'dummyClassname'
    }
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvas.getByRole('button');
    const title = canvas.getByText(defaultTitle);
    const subtitle = canvas.getByText(defaultSubtitle);
    const content = canvas.getByText(defaultContent);
    await expect(container).toHaveClass('dummyClassname');
    await expect(title).toHaveClass('dummyClassname');
    await expect(subtitle).toHaveClass('dummyClassname');
    await expect(content).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var _,G,M;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With Custom Icon (A8)',
  args: {
    ...defaultArgs,
    svgPath: PersonSVGpath
  },
  parameters: {
    imageSnapshot: {
      disable: false
    }
  }
} satisfies Story`,...(M=(G=b.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,V,z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With IsExpanded (A6 delvis)',
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
} satisfies Story`,...(z=(V=g.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With IsDefaultExpanded (A6 delvis)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const content = await canvas.findByText(defaultContent);
    await expect(content).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: TemplateWithOnClick,
  name: 'With OnClick (A5, B1,B2)',
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
} satisfies Story`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: TemplateWithOnClick,
  name: 'With Persist Focus On Click (C1))',
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
    await fireEvent.focus(button);
    const user = userEvent.setup();
    await user.tab();
    await user.keyboard('{Space}');
    await waitFor(() => {
      expect(button.matches(':focus')).toBe(true);
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
  }
} satisfies Story`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Title Line Break (A3)',
  args: {
    ...defaultArgs,
    title: 'Tittel som\\nbrekker over flere\\nlinjer'
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,re,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B3)',
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
} satisfies Story`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const Se=["WithRef","WithAttributes","Defaults","WithCustomClassNames","WithCustomIcon","IsExpanded","IsDefaultExpanded","WithOnClick","PersistFocusOnClick","WithLineBreak","WithTitleAs"];export{m as Defaults,y as IsDefaultExpanded,g as IsExpanded,f as PersistFocusOnClick,u as WithAttributes,p as WithCustomClassNames,b as WithCustomIcon,h as WithLineBreak,v as WithOnClick,d as WithRef,w as WithTitleAs,Se as __namedExportsOrder,ke as default};
//# sourceMappingURL=AccordionItem.test.stories-CsMZwKQO.js.map
