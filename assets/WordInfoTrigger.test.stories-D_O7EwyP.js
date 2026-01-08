import{j as b,h,e as p,d as v}from"./iframe-Br1Xu9zr.js";import{W as u}from"./index--7Yk7F8k.js";const{expect:e,fn:y,userEvent:f,waitFor:w,within:d}=__STORYBOOK_MODULE_TEST__,S={component:u.Trigger,title:"Tester/WordInfo/Trigger",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{category:p.htmlAttribute,disable:!0}},hasIcon:{table:{category:p.props,disable:!0}},onClick:{...h,table:{disable:!0}}},args:{children:"arkskrift"},render:t=>b.jsx(u,{children:b.jsx(u.Trigger,{...t})}),tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o={name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=d(t).getByRole("button");await e(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=d(t).getByRole("button");await e(a).toHaveAttribute("id","htmlId"),await e(a).toHaveClass("dummyClassname"),await e(a).toHaveAttribute("lang","en"),await e(a).toHaveAttribute("data-testid","123ID")}},r={name:"Defaults (A1, A5, B2)",args:{},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:t})=>{const s=d(t),a=s.getByRole("button");await e(a).toBeInTheDocument(),await e(a).toHaveAttribute("aria-expanded","false");const n=s.getByRole("img",{hidden:!0});await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("aria-hidden","true");const g=n.querySelector("title");e(g).toBeNull();const m=s.getByText(v.t("ds_overlays:wordinfo.WordExplanation"));await e(m).toBeInTheDocument(),await e(m.className).toContain("srOnly")}},l={name:"Without Icon (A5)",args:{hasIcon:!1},argTypes:{hasIcon:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},c={name:"With OnClick (B1)",args:{onClick:y()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:t,canvasElement:s})=>{const n=d(s).getByRole("button");await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","false"),await f.click(n),await w(()=>e(t.onClick).toHaveBeenCalled()),await e(n).toHaveAttribute("aria-expanded","true")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlId');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'en');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, A5, B2)',
  args: {},
  argTypes: {
    children: {
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
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
    const title = icon.querySelector('title');
    expect(title).toBeNull();
    const srOnlyText = canvas.getByText(dsI18n.t('ds_overlays:wordinfo.WordExplanation'));
    await expect(srOnlyText).toBeInTheDocument();
    await expect(srOnlyText.className).toContain('srOnly');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Without Icon (A5)',
  args: {
    hasIcon: false
  },
  argTypes: {
    hasIcon: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With OnClick (B1)',
  args: {
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};const x=["WithRef","WithAttributes","Defaults","WithoutIcon","WithOnClick"],A=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,WithAttributes:i,WithOnClick:c,WithRef:o,WithoutIcon:l,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{A as W};
//# sourceMappingURL=WordInfoTrigger.test.stories-D_O7EwyP.js.map
