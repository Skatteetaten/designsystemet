import{a as m}from"./index-CEjXTNb1.js";const{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,p={component:m,title:"Tester/Divider",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},spacingTop:{table:{disable:!0}},spacingBottom:{table:{disable:!0}},variant:{table:{disable:!0}},ariaHidden:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=c(a).getByRole("separator");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=c(a).getByRole("separator");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id","htmlId"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},r={name:"Defaults (A1)"},i={name:"With Strong (A3)",args:{variant:"strong"},argTypes:{variant:{table:{disable:!1}}}},d={name:"Is <hr>-element (B1)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const l=c(a);await t(l.getByRole("separator").nodeName).toBe("HR")}},o={name:"With ariaHidden (B2)",args:{ariaHidden:"true"},argTypes:{ariaHidden:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=c(a).getByRole("separator",{hidden:!0});await t(e).toHaveAttribute("aria-hidden","true")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLHRElement | null): void => {
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
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
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
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveClass('dummyClassname');
    await expect(divider).toHaveAttribute('id', 'htmlId');
    await expect(divider).toHaveAttribute('lang', 'nb');
    await expect(divider).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1)'
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Strong (A3)',
  args: {
    variant: 'strong'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Is <hr>-element (B1)',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('separator').nodeName).toBe('HR');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With ariaHidden (B2)',
  args: {
    ariaHidden: 'true'
  },
  argTypes: {
    ariaHidden: {
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
    const divider = canvas.getByRole('separator', {
      hidden: true
    });
    await expect(divider).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const b=["WithRef","WithAttributes","Defaults","WithStrong","IsHRElement","WithAriaHidden"],v=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,IsHRElement:d,WithAriaHidden:o,WithAttributes:s,WithRef:n,WithStrong:i,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{v as D};
//# sourceMappingURL=Divider.test.stories-B5ZHWqEJ.js.map
