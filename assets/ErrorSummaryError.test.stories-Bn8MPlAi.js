import{E as d}from"./index-B55DkYFu.js";const{expect:t,within:l}=__STORYBOOK_MODULE_TEST__,c={component:d.Error,title:"Tester/ErrorSummary/Error",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},referenceId:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},i={children:"Husk å fylle ut type varer",referenceId:"referenceId_1"},n={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...i,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},s={name:"Defaults",args:{...i},argTypes:{referenceId:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).toHaveAttribute("href","#referenceId_1")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLAnchorElement | null): void => {
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
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('id', 'htmlid');
    await expect(error).toHaveClass('dummyClassname');
    await expect(error).toHaveAttribute('lang', 'nb');
    await expect(error).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {
    ...defaultArgs
  },
  argTypes: {
    referenceId: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('href', '#referenceId_1');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const m=["WithRef","WithAttributes","Defaults"],u=Object.freeze(Object.defineProperty({__proto__:null,Defaults:s,WithAttributes:r,WithRef:n,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{u as E};
//# sourceMappingURL=ErrorSummaryError.test.stories-Bn8MPlAi.js.map
