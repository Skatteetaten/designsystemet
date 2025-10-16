import{j as f,d as o}from"./iframe-DRo7xN6O.js";import{T as G}from"./TopBannerUserButton-BCzVJE_M.js";const X=["meg","andre","virksomhet"],{expect:t,within:h}=__STORYBOOK_MODULE_TEST__,z=(a,e)=>async({canvasElement:n})=>{const g=h(n).getByRole("button");await t(g).toBeInTheDocument(),await t(g).toHaveAttribute(a,e)},K={component:G,title:"Tester/TopBanner/TopBannerUserButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={user:{role:"meg"}},l={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:z("id","dummyIdForwardedFromRef")},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const n=h(a).getByRole("button");await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (Username A2)",args:{...s},argTypes:{user:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=h(a),n=e.getByText(o.t("ds_layout:topbannerbutton.Myself")),r=e.getByText(o.t("ds_layout:topbannerbutton.MyselfTitle"));await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument()}},y=a=>f.jsx("div",{className:"topbannerButtonContainer",children:X.map((e,n)=>{const r=e==="andre"?"SØRUMSAND-SCHOENBERG WILLIAM":"Navn på virksomhet";return f.jsx(G,{className:"bottomSpacingXL",...a,user:{role:e,name:r}},`user_${n}`)})}),m={render:y,name:"With All Roles (Username A2, A3, A6, A7)",args:{...s},argTypes:{user:{table:{disable:!1},control:{disable:!0}}},play:async({canvasElement:a})=>{const e=h(a),n=e.getByText(o.t("ds_layout:topbannerbutton.MyselfTitle")),r=e.getByText(o.t("ds_layout:topbannerbutton.CompanyTitle")),g=e.getByText(o.t("ds_layout:topbannerbutton.OtherTitle"));await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument(),await t(g).toBeInTheDocument(),await t(e.getByText(o.t("ds_layout:topbannerbutton.Myself"))).toBeInTheDocument(),await t(e.getByText("SØRUMSAND-SCHOENBERG WILLIAM")).toBeInTheDocument(),await t(e.getByText("Navn på virksomhet")).toBeInTheDocument()}},u={render:y,name:"With Small Screen (Username A2, A5)",args:{...s},globals:{viewport:{value:"--mobile"}}},d={render:y,name:"With Breakpoint-xs (Username A2, A5)",args:{...s},globals:{viewport:{value:"--breakpoint-xs"}}},p={render:y,name:"With Breakpoint-s (Username A2, A5)",args:{...s},globals:{viewport:{value:"--breakpoint-s"}}},b={render:y,name:"With Breakpoint-m (Username A2, A5)",args:{...s},globals:{viewport:{value:"--breakpoint-m"}}};var T,A,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(A=l.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var B,S,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,W,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var R,D,k;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(D=m.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var _,M,U;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var E,N,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var C,H,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(H=p.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var L,j,P;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(j=b.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const Y=["WithRef","WithAttributes","Defaults","WithAllRoles","WithMobileScreen","WithBreakpointXS","WithBreakpointS","WithBreakpointM"],J=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAllRoles:m,WithAttributes:i,WithBreakpointM:b,WithBreakpointS:p,WithBreakpointXS:d,WithMobileScreen:u,WithRef:l,__namedExportsOrder:Y,default:K},Symbol.toStringTag,{value:"Module"}));export{J as T};
//# sourceMappingURL=TopBannerUserButton.test.stories-BTLpEcjE.js.map
