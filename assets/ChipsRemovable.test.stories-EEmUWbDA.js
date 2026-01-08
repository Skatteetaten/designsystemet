import{C as b}from"./index-D26qgz4H.js";import{d as u}from"./iframe-Br1Xu9zr.js";const{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,m="htmlId",p={component:b.Removable,title:"Tester/Chips/Removable",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onClose:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o={children:"Trondheim"},s={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={name:"With Attributes(FA2-5)",args:{...o,id:m,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",m),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (A2, A3, B3 delvis)",args:{...o}},r={name:"With Size Small (A1)",args:{size:"small",...o},argTypes:{size:{table:{disable:!1}}}},l={name:"With Close Icon Alternative Text (B3 delvis)",args:{...o},play:async({canvasElement:e})=>{const a=c(e).getByTitle(u.t("ds_collections:chips.RemoveFilter"));await t(a).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A2, A3, B3 delvis)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    }
  }
} satisfies Story`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Close Icon Alternative Text (B3 delvis)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByTitle(dsI18n.t('ds_collections:chips.RemoveFilter'));
    await expect(icon).toBeInTheDocument();
  }
} satisfies Story`,...l.parameters?.docs?.source}}};const f=["WithRef","WithAttributes","Defaults","WithSizeSmall","WithCloseIconAltText"],y=Object.freeze(Object.defineProperty({__proto__:null,Defaults:i,WithAttributes:n,WithCloseIconAltText:l,WithRef:s,WithSizeSmall:r,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{y as C};
//# sourceMappingURL=ChipsRemovable.test.stories-EEmUWbDA.js.map
