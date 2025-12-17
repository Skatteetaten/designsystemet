import{j as p,r as A,d as x}from"./iframe-VHQh6taY.js";import{C as i}from"./index-DgU9os4N.js";const{expect:t,userEvent:b,within:u}=__STORYBOOK_MODULE_TEST__,g="htmlId",C={component:i,title:"Tester/Chips",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},h={children:[p.jsx(i.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),p.jsx(i.Toggle,{children:"Bergen"},"bgo"),p.jsx(i.Removable,{children:"Oslo"},"osl")]},S=["Trondheim","Bergen","Oslo"],y=()=>{const[a,s]=A.useState(S),e=n=>{s(f=>f.filter(w=>w!==n))};return p.jsx(i,{children:a.map(n=>p.jsx(i.Removable,{onClose:()=>e(n),children:n},n))})},l={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")},...h},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=u(a).getByRole("list");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID",...h},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=u(a).getByRole("list");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id",g),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults (B2 delvis)",args:h},v="Kontorsted",c={name:"With AriaLabel (B2 delvis)",args:{ariaLabel:v,...h},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=u(a).getByRole("list");await t(e).toHaveAttribute("aria-label",v)}},d={name:"With Close and Focus Next (B3)",render:y,play:async({canvasElement:a})=>{const s=u(a);let e=s.getAllByRole("button");await t(e.length).toEqual(3),await b.click(e[1]),e=s.getAllByRole("button"),await t(e.length).toEqual(2),await t(e[1]).toHaveFocus()}},m={name:"With Close Last Chip (B3)",render:y,play:async({canvasElement:a})=>{const s=u(a),e=s.getAllByRole("button");await t(e.length).toEqual(3),await b.click(e[2]),await b.click(e[1]),await b.click(e[0]);const n=s.getByText(x.t("ds_collections:chips.NoFilters"));await t(n).toHaveFocus()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (B2 delvis)',
  args: defaultArgs
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};const E=["WithRef","WithAttributes","Defaults","WithAriaLabel","WithCloseAndFocusNext","WithCloseLastChip"],W=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,WithAriaLabel:c,WithAttributes:r,WithCloseAndFocusNext:d,WithCloseLastChip:m,WithRef:l,__namedExportsOrder:E,default:C},Symbol.toStringTag,{value:"Module"}));export{W as C};
//# sourceMappingURL=Chips.test.stories-CqFtrKNX.js.map
