import{T as m}from"./index-GCI7kVAR.js";import{y as b}from"./index-Cocas2j2.js";const{expect:r,within:c}=__STORYBOOK_MODULE_TEST__,p={component:m.Tab,title:"Tester/Tabs/Tab",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0}},value:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},a11y:{test:"off"}}},i={children:"Person",value:"TabValue"},e={name:"With Ref (FA1)",args:{...i,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const o=c(a).getByRole("tab");await r(o).toHaveAttribute("id","dummyIdForwardedFromRef")}},t={name:"With Attributes (FA2-5, B1)",args:{...i,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a,step:d})=>{const l=c(a).getByRole("tab");await r(l).toHaveClass("dummyClassname"),await r(l).toHaveAttribute("lang","nb"),await r(l).toHaveAttribute("data-testid","123ID")}},s={name:"Defaults (A2)",args:{...i},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:a})=>{const o=c(a).getByRole("tab");await r(o).toBeInTheDocument()}},n={name:"With Icon (A4)",args:{...i,svgPath:b},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    const tab = canvas.getByRole('tab');
    await expect(tab).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  args: {
    ...defaultArgs,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID'
  },
  argTypes: {
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
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab');
    await expect(tab).toHaveClass('dummyClassname');
    await expect(tab).toHaveAttribute('lang', 'nb');
    await expect(tab).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab');
    await expect(tab).toBeInTheDocument();
  }
} satisfies Story`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Icon (A4)',
  args: {
    ...defaultArgs,
    svgPath: PersonSVGpath
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const u=["WithRef","WithAttributes","Defaults","WithIcon"],h=Object.freeze(Object.defineProperty({__proto__:null,Defaults:s,WithAttributes:t,WithIcon:n,WithRef:e,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{h as T};
//# sourceMappingURL=TabsTab.test.stories-NxzuwNtr.js.map
