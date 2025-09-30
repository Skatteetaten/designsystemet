import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{r as pe}from"./index-D_ouKaeX.js";import{f as ve,w as o,e as n,a as S,b as B,u as d}from"./index-DIxTUSTt.js";import{A as k}from"./index-B6IstKQD.js";import"./index-CGk5cNE3.js";import{C as ye}from"./index-DkXzVmhj.js";import{P as fe}from"./index-DAV9Xejq.js";import{w as E}from"./storybook.testing.utils-CMs160i9.js";import{h as be}from"./base-props.types-B340BQPQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfnG5Ebn.js";import"./index-uxUkjR_c.js";import"./index-sjPb88pE.js";import"./index-B0Glj4sP.js";import"./DatePickerCalendar-PuG5IodJ.js";import"./LabelWithHelp-B8AAT5XN.js";import"./Help-ChcS7hng.js";import"./index-Bid14VJj.js";const I="htmlId",T="Meg selv",W="Beskrivelse",l="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",je={component:k.Item,title:"Tester/Accordion/Item",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},svgPath:{table:{disable:!0}},titleAs:{table:{disable:!0}},title:{table:{disable:!0}},subtitle:{table:{disable:!0}},onClick:{table:{disable:!0}}}},ge=t=>c.jsx(k.Item,{...t,onClick:a=>{var e;(e=t.onClick)==null||e.call(t,a)},children:t.children}),he=t=>c.jsx(c.Fragment,{children:be.map((a,e)=>c.jsx(k.Item,{...t,titleAs:a,title:`Heading ${a}`,children:t.children},`level_${e}`))}),i={title:T,children:l},m={name:"With Ref (FA1)",args:{...i,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=o(t);await n(a.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={name:"With Attributes(FA2-5)",args:{...i,id:I,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("button");await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("id",I),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID")}},b={name:"Defaults (A2, B1)",args:{...i},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${E} button`,hover:`${E} button`,click:`${E} button`}},play:async({canvasElement:t})=>{const a=o(t),e=a.getByRole("button");await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("type","button"),await n(e).toHaveAttribute("aria-expanded","false");const s=a.getByText(T);await n(s).toBeInTheDocument();const r=a.queryByText(l);await n(r).not.toBeVisible();const u=e.querySelector("svg");await n(u).toBeInTheDocument(),await n(u).toHaveAttribute("aria-hidden","true")}},g={name:"With Custom ClassNames (FA3, A10)",args:{...i,subtitle:W,isExpanded:!0,classNames:{container:"dummyClassname",title:"dummyClassname",subtitle:"dummyClassname",content:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=o(t),e=a.getByRole("button"),s=a.getByText(T),r=a.getByText(W),u=a.getByText(l);await n(e).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(r).toHaveClass("dummyClassname"),await n(u).toHaveClass("dummyClassname")}},v={name:"With Custom Icon (A8)",args:{...i,svgPath:fe},parameters:{imageSnapshot:{disable:!1}}},y={name:"With IsExpanded (A6 delvis)",args:{...i,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=o(t),e=await a.findByText(l);await n(e).toBeVisible();const s=a.getByRole("button");await n(s).toHaveAttribute("aria-expanded","true")}},f={name:"With IsDefaultExpanded (A6 delvis)",args:{...i,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=o(t),e=await a.findByText(l);await n(e).toBeVisible();const s=a.getByRole("button");await n(s).toHaveAttribute("aria-expanded","true")}},h={render:ge,name:"With OnClick (A5, B1,B2)",args:{...i,onClick:ve()},parameters:{imageSnapshot:{disable:!0}},play:async({args:t,canvasElement:a})=>{const e=o(a),s=e.getByRole("button");await n(s).toHaveAttribute("aria-expanded","false"),await S.click(s);const r=e.getByText(l);await n(s).toHaveAttribute("aria-expanded","true"),await n(r).toBeVisible(),await S.click(s),await n(r).not.toBeVisible(),await B(()=>n(t.onClick).toHaveBeenCalledTimes(2))}},x={render:ge,name:"With Persist Focus On Click (C1))",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("button");await S.focus(e);const s=d.setup();await s.tab(),await s.keyboard("{Space}"),await B(()=>{n(e.matches(":focus")).toBe(!0)}),await s.keyboard("{Enter}"),await B(()=>{n(e).toHaveFocus()})}},w={name:"With Title Line Break (A3)",args:{...i,title:`Tittel som
brekker over flere
linjer`},parameters:{imageSnapshot:{disable:!0}}},C={render:he,name:"With TitleAs (B3)",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getAllByRole("heading");for(const[s,r]of e.entries())await n(r.tagName).toBe(be[s].toLocaleUpperCase())}},xe=()=>{const[t,a]=pe.useState(!1);return c.jsx(ye,{checked:t,onChange:e=>{a(e.target.checked)},children:`${t?"Jeg er valgt":"Klikk meg"}`})},A={render:function(){const[a,e]=pe.useState(!1);return c.jsx(k.Item,{title:"Meg selv",isExpanded:a,onClick:()=>e(s=>!s),children:c.jsx(xe,{})})},name:"With Persisted State",args:{...i},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=o(t),e=a.getByRole("button");await d.click(e);let s=a.getByRole("checkbox");await d.click(s),await d.click(e),await d.click(e),s=a.getByRole("checkbox"),await B(()=>n(s).toBeChecked())}};var H,R,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var P,D,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var O,V,j;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    await expect(content).not.toBeVisible();
    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var $,L,q;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    const container = canvas.getByRole('button');
    const title = canvas.getByText(defaultTitle);
    const subtitle = canvas.getByText(defaultSubtitle);
    const content = canvas.getByText(defaultContent);
    await expect(container).toHaveClass('dummyClassname');
    await expect(title).toHaveClass('dummyClassname');
    await expect(subtitle).toHaveClass('dummyClassname');
    await expect(content).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var M,_,G;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(_=v.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,U,K;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    await expect(content).toBeVisible();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...(K=(U=y.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var X,z,Q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    await expect(content).toBeVisible();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...(Q=(z=f.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    await expect(content).toBeVisible();
    await fireEvent.click(button);
    await expect(content).not.toBeVisible();
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
  }
} satisfies Story`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,ie,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,ce,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: function Render(): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false);
    return <Accordion.Item title={'Meg selv'} isExpanded={isExpanded} onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
        <StatefulChild />
      </Accordion.Item>;
  },
  name: 'With Persisted State',
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
    await userEvent.click(button);
    let checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    await userEvent.click(button);
    await userEvent.click(button);
    checkbox = canvas.getByRole('checkbox');
    await waitFor(() => expect(checkbox).toBeChecked());
  }
} satisfies Story`,...(me=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const $e=["WithRef","WithAttributes","Defaults","WithCustomClassNames","WithCustomIcon","IsExpanded","IsDefaultExpanded","WithOnClick","PersistFocusOnClick","WithLineBreak","WithTitleAs","WithPersistedState"];export{b as Defaults,f as IsDefaultExpanded,y as IsExpanded,x as PersistFocusOnClick,p as WithAttributes,g as WithCustomClassNames,v as WithCustomIcon,w as WithLineBreak,h as WithOnClick,A as WithPersistedState,m as WithRef,C as WithTitleAs,$e as __namedExportsOrder,je as default};
//# sourceMappingURL=AccordionItem.test.stories-C2aJEbr4.js.map
