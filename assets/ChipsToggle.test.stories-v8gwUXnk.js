import{C as u}from"./index-DFs0_No2.js";const{expect:t,within:d}=__STORYBOOK_MODULE_TEST__,b="htmlId",p={component:u.Toggle,title:"Tester/Chips/Toggle",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},isSelected:{table:{disable:!0}},showCheckmark:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={children:"Trondheim"},s={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes(FA2-5)",args:{...n,id:b,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",b),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (A2, A4,A5 delvis, A7, B1, B4)",args:{...n},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveAttribute("aria-pressed","false")}},l={name:"Without Checkmark (A4)",args:{showCheckmark:!1,...n},argTypes:{showCheckmark:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=d(e).queryByRole("img");await t(a).not.toBeInTheDocument()}},o={name:"With Selected (A6, B4)",args:{isSelected:!0,...n},argTypes:{showCheckmark:{table:{disable:!1}},isSelected:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveAttribute("aria-pressed","true")}},c={name:"With Size Small (A1)",args:{size:"small",...n},argTypes:{size:{table:{disable:!1}},showCheckmark:{table:{disable:!1}},isSelected:{table:{disable:!1}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A2, A4,A5 delvis, A7, B1, B4)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('aria-pressed', 'false');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Without Checkmark (A4)',
  args: {
    showCheckmark: false,
    ...defaultArgs
  },
  argTypes: {
    showCheckmark: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.queryByRole('img');
    await expect(icon).not.toBeInTheDocument();
  }
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Selected (A6, B4)',
  args: {
    isSelected: true,
    ...defaultArgs
  },
  argTypes: {
    showCheckmark: {
      table: {
        disable: false
      }
    },
    isSelected: {
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
    await expect(container).toHaveAttribute('aria-pressed', 'true');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Size Small (A1)',
  args: {
    size: 'small',
    ...defaultArgs
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    showCheckmark: {
      table: {
        disable: false
      }
    },
    isSelected: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...c.parameters?.docs?.source}}};const f=["WithRef","WithAttributes","Defaults","WithoutCheckmark","WithSelected","WithSizeSmall"],h=Object.freeze(Object.defineProperty({__proto__:null,Defaults:i,WithAttributes:r,WithRef:s,WithSelected:o,WithSizeSmall:c,WithoutCheckmark:l,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{h as C};
//# sourceMappingURL=ChipsToggle.test.stories-v8gwUXnk.js.map
