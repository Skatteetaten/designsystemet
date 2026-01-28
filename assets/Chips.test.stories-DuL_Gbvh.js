import{j as u,r as S,d as x}from"./iframe-CBOQuZmX.js";import{C as i}from"./index-BYntwts4.js";const{expect:t,userEvent:y,within:l}=__STORYBOOK_MODULE_TEST__,g="htmlId",E={component:i,title:"Tester/Chips",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},ariaLabelledBy:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},h={children:[u.jsx(i.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),u.jsx(i.Toggle,{children:"Bergen"},"bgo"),u.jsx(i.Removable,{children:"Oslo"},"osl")]},L=["Trondheim","Bergen","Oslo"],w=()=>{const[e,n]=S.useState(L),a=s=>{n(A=>A.filter(B=>B!==s))};return u.jsx(i,{children:e.map(s=>u.jsx(i.Removable,{onClose:()=>a(s),children:s},s))})},r={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")},...h},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("list");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID",...h},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getByRole("list");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",g),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (B2 delvis)",args:h},v="Kontorsted",d={name:"With AriaLabel (B2 delvis)",args:{ariaLabel:v,...h},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("list");await t(a).toHaveAttribute("aria-label",v)}},f="chipsLabelId",m={name:"With AriaLabelledBy",args:{ariaLabelledBy:f,...h},argTypes:{ariaLabelledBy:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("list");await t(a).toHaveAttribute("aria-labelledby",f)}},p={name:"With Close and Focus Next (B3)",render:w,play:async({canvasElement:e})=>{const n=l(e);let a=n.getAllByRole("button");await t(a.length).toEqual(3),await y.click(a[1]),a=n.getAllByRole("button"),await t(a.length).toEqual(2),await t(a[1]).toHaveFocus()}},b={name:"With Close Last Chip (B3)",render:w,play:async({canvasElement:e})=>{const n=l(e),a=n.getAllByRole("button");await t(a.length).toEqual(3),await y.click(a[2]),await y.click(a[1]),await y.click(a[0]);const s=n.getByText(x.t("ds_collections:chips.NoFilters"));await t(s).toHaveFocus()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLUListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
    ...defaultArgs
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    id: elementId,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    ...defaultArgs
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (B2 delvis)',
  args: defaultArgs
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With AriaLabel (B2 delvis)',
  args: {
    ariaLabel: label,
    ...defaultArgs
  },
  argTypes: {
    ariaLabel: {
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('aria-label', label);
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With AriaLabelledBy',
  args: {
    ariaLabelledBy: labelId,
    ...defaultArgs
  },
  argTypes: {
    ariaLabelledBy: {
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('aria-labelledby', labelId);
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Close and Focus Next (B3)',
  render: TemplateWithOnClose,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    let chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(3);
    await userEvent.click(chips[1]);
    chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(2);
    await expect(chips[1]).toHaveFocus();
  }
} satisfies Story`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Close Last Chip (B3)',
  render: TemplateWithOnClose,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(3);
    await userEvent.click(chips[2]);
    await userEvent.click(chips[1]);
    await userEvent.click(chips[0]);
    const span = canvas.getByText(dsI18n.t('ds_collections:chips.NoFilters'));
    await expect(span).toHaveFocus();
  }
} satisfies Story`,...b.parameters?.docs?.source}}};const C=["WithRef","WithAttributes","Defaults","WithAriaLabel","WithAriaLabelledBy","WithCloseAndFocusNext","WithCloseLastChip"],T=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAriaLabel:d,WithAriaLabelledBy:m,WithAttributes:o,WithCloseAndFocusNext:p,WithCloseLastChip:b,WithRef:r,__namedExportsOrder:C,default:E},Symbol.toStringTag,{value:"Module"}));export{T as C};
//# sourceMappingURL=Chips.test.stories-DuL_Gbvh.js.map
