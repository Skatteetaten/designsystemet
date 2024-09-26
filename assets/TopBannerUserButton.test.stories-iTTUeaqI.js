import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{d as o}from"./index-e2J6NVvS.js";import{w as g,e as t}from"./index-hUG6DWTw.js";import{T as G}from"./TopBannerUserButton-BMaKrglU.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-nyVGXzax.js";import"./TopBannerButton-H36USrsN.js";const P=["meg","andre","virksomhet"],X=(a,e)=>async({canvasElement:n})=>{const l=g(n).getByRole("button");await t(l).toBeInTheDocument(),await t(l).toHaveAttribute(a,e)},ee={component:G,title:"Tester/TopBanner/TopBannerUserButton (intern)",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},onClick:{table:{disable:!0}}}},s={user:{role:"meg"}},m={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:X("id","dummyIdForwardedFromRef")},c={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=g(a).getByRole("button");await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (Username A2)",args:{...s},argTypes:{user:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=g(a),n=e.getByText(o.t("ds_layout:topbannerbutton.Myself")),r=e.getByText(o.t("ds_layout:topbannerbutton.MyselfTitle"));await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument()}},i=a=>h.jsx("div",{className:"topbannerButtonContainer",children:P.map((e,n)=>{const r=e==="andre"?"SØRUMSAND-SCHOENBERG WILLIAM":"Navn på virksomhet";return h.jsx(G,{className:"bottomSpacingXL",...a,user:{role:e,name:r}},`user_${n}`)})}),u={render:i,name:"With All Roles (Username A2, A3, A6, A7)",args:{...s},argTypes:{user:{table:{disable:!1},control:{disable:!0}}},play:async({canvasElement:a})=>{const e=g(a),n=e.getByText(o.t("ds_layout:topbannerbutton.MyselfTitle")),r=e.getByText(o.t("ds_layout:topbannerbutton.CompanyTitle")),l=e.getByText(o.t("ds_layout:topbannerbutton.OtherTitle"));await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument(),await t(l).toBeInTheDocument(),await t(e.getByText(o.t("ds_layout:topbannerbutton.Myself"))).toBeInTheDocument(),await t(e.getByText("SØRUMSAND-SCHOENBERG WILLIAM")).toBeInTheDocument(),await t(e.getByText("Navn på virksomhet")).toBeInTheDocument()}},p={render:i,name:"With Small Screen (Username A2, A5)",args:{...s},parameters:{viewport:{defaultViewport:"--mobile"}}},b={render:i,name:"With Breakpoint-xs (Username A2, A5)",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},y={render:i,name:"With Breakpoint-s (Username A2, A5)",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},f={render:i,name:"With Breakpoint-m (Username A2, A5)",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}};var A,T,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var v,w,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,W,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var D,R,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var M,U,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Small Screen (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(E=(U=p.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var N,_,C;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-xs (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(C=(_=b.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var H,F,O;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-s (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s'
    }
  }
} satisfies Story`,...(O=(F=y.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var L,V,j;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: TemplateWithAllRoles,
  name: 'With Breakpoint-m (Username A2, A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const te=["WithRef","WithAttributes","Defaults","WithAllRoles","WithMobileScreen","WithBreakpointXS","WithBreakpointS","WithBreakpointM"];export{d as Defaults,u as WithAllRoles,c as WithAttributes,f as WithBreakpointM,y as WithBreakpointS,b as WithBreakpointXS,p as WithMobileScreen,m as WithRef,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=TopBannerUserButton.test.stories-iTTUeaqI.js.map
