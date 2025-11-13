import{j as d,r as ge}from"./iframe-CdXtTKZQ.js";import{A as S}from"./index-C6J3KzFu.js";import{C as fe}from"./index-CLKUz3Po.js";import{P as xe}from"./index-D0xxaDHU.js";import{h as ye}from"./base-props.types-B340BQPQ.js";const{expect:n,fireEvent:E,fn:we,userEvent:l,waitFor:k,within:i}=__STORYBOOK_MODULE_TEST__,I="htmlId",T="Meg selv",W="Beskrivelse",r="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",Be={component:S.Item,title:"Tester/Accordion/Item",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},keepMounted:{table:{disable:!0}},svgPath:{table:{disable:!0}},titleAs:{table:{disable:!0}},title:{table:{disable:!0}},subtitle:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},he=a=>d.jsx(S.Item,{...a,onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t)},children:a.children}),Ae=a=>d.jsx(d.Fragment,{children:ye.map((t,e)=>d.jsx(S.Item,{...a,titleAs:t,title:`Heading ${t}`,children:a.children},`level_${e}`))}),o={title:T,children:r},u={name:"With Ref (FA1)",args:{...o,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=i(a);await n(t.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes(FA2-5)",args:{...o,id:I,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=i(a).getByRole("button");await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("id",I),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A2, B1)",args:{...o},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("button");await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("type","button"),await n(e).toHaveAttribute("aria-expanded","false");const s=t.getByText(T);await n(s).toBeInTheDocument();const c=t.queryByText(r);await n(c).not.toBeVisible();const C=e.querySelector("svg");await n(C).toBeInTheDocument(),await n(C).toHaveAttribute("aria-hidden","true")}},b={name:"With Custom ClassNames (FA3, A10)",args:{...o,subtitle:W,isExpanded:!0,classNames:{container:"dummyClassname",title:"dummyClassname",subtitle:"dummyClassname",content:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("button"),s=t.getByText(T),c=t.getByText(W),C=t.getByText(r);await n(e).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(c).toHaveClass("dummyClassname"),await n(C).toHaveClass("dummyClassname")}},v={name:"With Custom Icon (A8)",args:{...o,svgPath:xe},parameters:{imageSnapshot:{disable:!1}}},g={name:"With IsExpanded (A6 delvis)",args:{...o,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=i(a),e=await t.findByText(r);await n(e).toBeVisible();const s=t.getByRole("button");await n(s).toHaveAttribute("aria-expanded","true")}},y={name:"With IsDefaultExpanded (A6 delvis)",args:{...o,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=i(a),e=await t.findByText(r);await n(e).toBeVisible();const s=t.getByRole("button");await n(s).toHaveAttribute("aria-expanded","true")}},h={render:he,name:"With OnClick (A5, B1,B2)",args:{...o,onClick:we()},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:t})=>{const e=i(t),s=e.getByRole("button");await n(s).toHaveAttribute("aria-expanded","false"),await E.click(s);const c=e.getByText(r);await n(s).toHaveAttribute("aria-expanded","true"),await n(c).toBeVisible(),await E.click(s),await n(c).not.toBeVisible(),await k(()=>n(a.onClick).toHaveBeenCalledTimes(2))}},f={render:he,name:"With Persist Focus On Click (C1))",args:{...o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("button");await E.focus(e);const s=l.setup();await s.tab(),await s.keyboard("{Space}"),await k(()=>{n(e.matches(":focus")).toBe(!0)}),await s.keyboard("{Enter}"),await k(()=>{n(e).toHaveFocus()})}},x={name:"With Title Line Break (A3)",args:{...o,title:`Tittel som
brekker over flere
linjer`},parameters:{imageSnapshot:{disable:!0}}},w={render:Ae,name:"With TitleAs (B3)",args:{...o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getAllByRole("heading");for(const[s,c]of e.entries())await n(c.tagName).toBe(ye[s].toLocaleUpperCase())}},Ce=()=>{const[a,t]=ge.useState(!1);return d.jsx(fe,{checked:a,onChange:e=>{t(e.target.checked)},children:`${a?"Jeg er valgt":"Klikk meg"}`})},B={render:function(){const[t,e]=ge.useState(!1);return d.jsx(S.Item,{title:"Meg selv",isExpanded:t,onClick:()=>e(s=>!s),children:d.jsx(Ce,{})})},name:"With Persisted State",args:{...o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("button");await l.click(e);let s=t.getByRole("checkbox");await l.click(s),await l.click(e),await l.click(e),s=t.getByRole("checkbox"),await k(()=>n(s).toBeChecked())}},A={name:"With KeepMounted False (A11)",args:{...o,keepMounted:!1},argTypes:{keepMounted:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("button");await n(e).toHaveAttribute("aria-expanded","false");let s=t.queryByText(r);await n(s).not.toBeInTheDocument(),await l.click(e),await n(e).toHaveAttribute("aria-expanded","true"),s=t.getByText(r),await n(s).toBeInTheDocument(),await n(s).toBeVisible(),await l.click(e),await n(e).toHaveAttribute("aria-expanded","false"),s=t.queryByText(r),await n(s).not.toBeInTheDocument()}};var H,R,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var F,P,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('id', elementId);
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var M,N,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    await expect(content).not.toBeVisible();
    const svg = button.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var j,_,q;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var L,K,U;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var $,G,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var z,X,Y;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,oe,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ce,le;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,ve;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'With KeepMounted False (A11)',
  args: {
    ...defaultArgs,
    keepMounted: false
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

    // Initially content should not be in DOM when keepMounted=false and collapsed
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    let content = canvas.queryByText(defaultContent);
    await expect(content).not.toBeInTheDocument();

    // Expand accordion
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');

    // Content should now be in DOM
    content = canvas.getByText(defaultContent);
    await expect(content).toBeInTheDocument();
    await expect(content).toBeVisible();

    // Collapse accordion
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'false');

    // Content should be removed from DOM when keepMounted=false
    content = canvas.queryByText(defaultContent);
    await expect(content).not.toBeInTheDocument();
  }
} satisfies Story`,...(ve=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};const ke=["WithRef","WithAttributes","Defaults","WithCustomClassNames","WithCustomIcon","IsExpanded","IsDefaultExpanded","WithOnClick","PersistFocusOnClick","WithLineBreak","WithTitleAs","WithPersistedState","WithKeepMountedFalse"],He=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,IsDefaultExpanded:y,IsExpanded:g,PersistFocusOnClick:f,WithAttributes:m,WithCustomClassNames:b,WithCustomIcon:v,WithKeepMountedFalse:A,WithLineBreak:x,WithOnClick:h,WithPersistedState:B,WithRef:u,WithTitleAs:w,__namedExportsOrder:ke,default:Be},Symbol.toStringTag,{value:"Module"}));export{He as A};
//# sourceMappingURL=AccordionItem.test.stories-D1TTh6ww.js.map
