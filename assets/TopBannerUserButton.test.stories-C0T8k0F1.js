import{j as f,d as o}from"./iframe-Br1Xu9zr.js";import{T}from"./TopBannerUserButton-DzAIsf-d.js";const A=["meg","andre","virksomhet"],{expect:t,within:h}=__STORYBOOK_MODULE_TEST__,v=(a,e)=>async({canvasElement:n})=>{const g=h(n).getByRole("button");await t(g).toBeInTheDocument(),await t(g).toHaveAttribute(a,e)},B={component:T,title:"Tester/TopBannerExternal/UserButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={user:{role:"meg"}},l={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:v("id","dummyIdForwardedFromRef")},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const n=h(a).getByRole("button");await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (Username A2)",args:{...s},argTypes:{user:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=h(a),n=e.getByText(o.t("ds_layout:topbannerbutton.Myself")),r=e.getByText(o.t("ds_layout:topbannerbutton.MyselfTitle"));await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument()}},y=a=>f.jsx("div",{className:"topbannerButtonContainer",children:A.map((e,n)=>{const r=e==="andre"?"SØRUMSAND-SCHOENBERG WILLIAM":"Navn på virksomhet";return f.jsx(T,{className:"bottomSpacingXL",...a,user:{role:e,name:r}},`user_${n}`)})}),m={render:y,name:"With All Roles (Username A2, A3, A6, A7)",args:{...s},argTypes:{user:{table:{disable:!1},control:{disable:!0}}},play:async({canvasElement:a})=>{const e=h(a),n=e.getByText(o.t("ds_layout:topbannerbutton.MyselfTitle")),r=e.getByText(o.t("ds_layout:topbannerbutton.CompanyTitle")),g=e.getByText(o.t("ds_layout:topbannerbutton.OtherTitle"));await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument(),await t(g).toBeInTheDocument(),await t(e.getByText(o.t("ds_layout:topbannerbutton.Myself"))).toBeInTheDocument(),await t(e.getByText("SØRUMSAND-SCHOENBERG WILLIAM")).toBeInTheDocument(),await t(e.getByText("Navn på virksomhet")).toBeInTheDocument()}},u={render:y,name:"With Small Screen (Username A2, A5)",args:{...s},globals:{viewport:{value:"--mobile"}}},d={render:y,name:"With Breakpoint-xs (Username A2, A5)",args:{...s},globals:{viewport:{value:"--breakpoint-xs"}}},p={render:y,name:"With Breakpoint-s (Username A2, A5)",args:{...s},globals:{viewport:{value:"--breakpoint-s"}}},b={render:y,name:"With Breakpoint-m (Username A2, A5)",args:{...s},globals:{viewport:{value:"--breakpoint-m"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (Username A2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    user: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const usernameButtonText = canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.Myself'));
    const title = canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.MyselfTitle'));
    await expect(usernameButtonText).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
  }
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With All Roles (Username A2, A3, A6, A7)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    user: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const titleSelf = canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.MyselfTitle'));
    const titleWork = canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.CompanyTitle'));
    const titleOther = canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.OtherTitle'));
    await expect(titleSelf).toBeInTheDocument();
    await expect(titleWork).toBeInTheDocument();
    await expect(titleOther).toBeInTheDocument();
    await expect(canvas.getByText(dsI18n.t('ds_layout:topbannerbutton.Myself'))).toBeInTheDocument();
    await expect(canvas.getByText('SØRUMSAND-SCHOENBERG WILLIAM')).toBeInTheDocument();
    await expect(canvas.getByText('Navn på virksomhet')).toBeInTheDocument();
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Small Screen (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-xs (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-s (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-m (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};const S=["WithRef","WithAttributes","Defaults","WithAllRoles","WithMobileScreen","WithBreakpointXS","WithBreakpointS","WithBreakpointM"],W=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAllRoles:m,WithAttributes:i,WithBreakpointM:b,WithBreakpointS:p,WithBreakpointXS:d,WithMobileScreen:u,WithRef:l,__namedExportsOrder:S,default:B},Symbol.toStringTag,{value:"Module"}));export{W as T};
//# sourceMappingURL=TopBannerUserButton.test.stories-C0T8k0F1.js.map
