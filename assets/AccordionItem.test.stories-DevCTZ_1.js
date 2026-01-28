import{j as d,r as H}from"./iframe-CBOQuZmX.js";import{A as S}from"./index-BYntwts4.js";import{C as F}from"./index-D76sDZza.js";import{P}from"./index-tEZUkoN5.js";import{h as R}from"./base-props.types-B340BQPQ.js";const{expect:a,fireEvent:E,fn:O,userEvent:l,waitFor:k,within:i}=__STORYBOOK_MODULE_TEST__,I="htmlId",T="Meg selv",W="Beskrivelse",r="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",M={component:S.Item,title:"Tester/Accordion/Item",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},isExpanded:{table:{disable:!0}},isDefaultExpanded:{table:{disable:!0}},keepMounted:{table:{disable:!0}},svgPath:{table:{disable:!0}},titleAs:{table:{disable:!0}},title:{table:{disable:!0}},subtitle:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},D=n=>d.jsx(S.Item,{...n,onClick:t=>{n.onClick?.(t)},children:n.children}),N=n=>d.jsx(d.Fragment,{children:R.map((t,e)=>d.jsx(S.Item,{...n,titleAs:t,title:`Heading ${t}`,children:n.children},`level_${e}`))}),o={title:T,children:r},u={name:"With Ref (FA1)",args:{...o,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const t=i(n);await a(t.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes(FA2-5)",args:{...o,id:I,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const e=i(n).getByRole("button");await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("id",I),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A2, B1)",args:{...o},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:n})=>{const t=i(n),e=t.getByRole("button");await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("type","button"),await a(e).toHaveAttribute("aria-expanded","false");const s=t.getByText(T);await a(s).toBeInTheDocument();const c=t.queryByText(r);await a(c).not.toBeVisible();const C=e.querySelector("svg");await a(C).toBeInTheDocument(),await a(C).toHaveAttribute("aria-hidden","true")}},b={name:"With Custom ClassNames (FA3, A10)",args:{...o,subtitle:W,isExpanded:!0,classNames:{container:"dummyClassname",title:"dummyClassname",subtitle:"dummyClassname",content:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=i(n),e=t.getByRole("button"),s=t.getByText(T),c=t.getByText(W),C=t.getByText(r);await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(c).toHaveClass("dummyClassname"),await a(C).toHaveClass("dummyClassname")}},v={name:"With Custom Icon (A8)",args:{...o,svgPath:P},parameters:{imageSnapshot:{disable:!1}}},g={name:"With IsExpanded (A6 delvis)",args:{...o,isExpanded:!0},argTypes:{isExpanded:{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=i(n),e=await t.findByText(r);await a(e).toBeVisible();const s=t.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},y={name:"With IsDefaultExpanded (A6 delvis)",args:{...o,isDefaultExpanded:!0},argTypes:{isDefaultExpanded:{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=i(n),e=await t.findByText(r);await a(e).toBeVisible();const s=t.getByRole("button");await a(s).toHaveAttribute("aria-expanded","true")}},h={render:D,name:"With OnClick (A5, B1,B2)",args:{...o,onClick:O()},parameters:{imageSnapshot:{disable:!0}},play:async({args:n,canvasElement:t})=>{const e=i(t),s=e.getByRole("button");await a(s).toHaveAttribute("aria-expanded","false"),await E.click(s);const c=e.getByText(r);await a(s).toHaveAttribute("aria-expanded","true"),await a(c).toBeVisible(),await E.click(s),await a(c).not.toBeVisible(),await k(()=>a(n.onClick).toHaveBeenCalledTimes(2))}},f={render:D,name:"With Persist Focus On Click (C1))",args:{...o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=i(n).getByRole("button");await E.focus(e);const s=l.setup();await s.tab(),await s.keyboard("{Space}"),await k(()=>{a(e.matches(":focus")).toBe(!0)}),await s.keyboard("{Enter}"),await k(()=>{a(e).toHaveFocus()})}},x={name:"With Title Line Break (A3)",args:{...o,title:`Tittel som
brekker over flere
linjer`},parameters:{imageSnapshot:{disable:!0}}},w={render:N,name:"With TitleAs (B3)",args:{...o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=i(n).getAllByRole("heading");for(const[s,c]of e.entries())await a(c.tagName).toBe(R[s].toLocaleUpperCase())}},V=()=>{const[n,t]=H.useState(!1);return d.jsx(F,{checked:n,onChange:e=>{t(e.target.checked)},children:`${n?"Jeg er valgt":"Klikk meg"}`})},B={render:function(){const[t,e]=H.useState(!1);return d.jsx(S.Item,{title:"Meg selv",isExpanded:t,onClick:()=>e(s=>!s),children:d.jsx(V,{})})},name:"With Persisted State",args:{...o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=i(n),e=t.getByRole("button");await l.click(e);let s=t.getByRole("checkbox");await l.click(s),await l.click(e),await l.click(e),s=t.getByRole("checkbox"),await k(()=>a(s).toBeChecked())}},A={name:"With KeepMounted False (A11)",args:{...o,keepMounted:!1},argTypes:{keepMounted:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const t=i(n),e=t.getByRole("button");await a(e).toHaveAttribute("aria-expanded","false");let s=t.queryByText(r);await a(s).not.toBeInTheDocument(),await l.click(e),await a(e).toHaveAttribute("aria-expanded","true"),s=t.getByText(r),await a(s).toBeInTheDocument(),await a(s).toBeVisible(),await l.click(e),await a(e).toHaveAttribute("aria-expanded","false"),s=t.queryByText(r),await a(s).not.toBeInTheDocument()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};const j=["WithRef","WithAttributes","Defaults","WithCustomClassNames","WithCustomIcon","IsExpanded","IsDefaultExpanded","WithOnClick","PersistFocusOnClick","WithLineBreak","WithTitleAs","WithPersistedState","WithKeepMountedFalse"],$=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,IsDefaultExpanded:y,IsExpanded:g,PersistFocusOnClick:f,WithAttributes:m,WithCustomClassNames:b,WithCustomIcon:v,WithKeepMountedFalse:A,WithLineBreak:x,WithOnClick:h,WithPersistedState:B,WithRef:u,WithTitleAs:w,__namedExportsOrder:j,default:M},Symbol.toStringTag,{value:"Module"}));export{$ as A};
//# sourceMappingURL=AccordionItem.test.stories-DevCTZ_1.js.map
