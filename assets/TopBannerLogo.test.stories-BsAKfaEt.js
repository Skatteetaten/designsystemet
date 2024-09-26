import{d as E}from"./index-e2J6NVvS.js";import{w as o,e as t}from"./index-hUG6DWTw.js";import{w as P}from"./storybook.testing.utils-CMs160i9.js";import{T as V}from"./TopBannerLogo-CODc1ZaV.js";import{c as M}from"./custom-logo-BtdQ4zfZ.js";import{c as C}from"./custom-mobile-logo-BE1gbecu.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const _=["a","div"],Y={component:V,title:"Tester/TopBanner/TopBannerLogo (intern)",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0},options:[..._],control:"inline-radio"},logo:{table:{disable:!0},control:"select",options:["",M]},mobileLogo:{table:{disable:!0},control:"select",options:["",C]},alt:{table:{disable:!0}},href:{table:{disable:!0}}}},q=E.t("ds_layout:topbanner.SkeLogoLinkText"),$=E.t("ds_layout:topbanner.SkeLogoImageText"),s={},r={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&e.logoRef&&e.logoRef.current&&(e.logoRef.current.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("link");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e).getByRole("link");await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A8, A9)",args:{...s},argTypes:{},parameters:{imageSnapshot:{focus:`${P} a`}},play:async({canvasElement:e})=>{const n=o(e),a=n.getByRole("link");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("href","https://www.skatteetaten.no/");const N=n.getByRole("img",{name:q});await t(N).toBeInTheDocument()}},c={name:"With As (A8)",args:{...s,as:"div"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e);await t(e.querySelector("a")).not.toBeInTheDocument();const a=n.getByRole("img",{name:$});await t(a).toBeInTheDocument()}},m={name:"With Logo, MobileLogo, Alt, And Href (A8, A10)",args:{...s,as:"a",logo:M,mobileLogo:C,alt:"custom alt text",href:"#"},argTypes:{logo:{table:{disable:!1}},mobileLogo:{table:{disable:!1}},alt:{table:{disable:!1}},href:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e).getByRole("link",{name:"custom alt text"});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("href","#")}},d={name:"With Small Screen",args:{...s},parameters:{viewport:{defaultViewport:"--mobile"}}},p={name:"With Breakpoint-m",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: LogoRefHandle | null): void => {
      if (instance && instance.logoRef && instance.logoRef.current) {
        instance.logoRef.current.id = 'dummyIdForwardedFromRef';
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
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,y,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('id', 'htmlId');
    await expect(link).toHaveClass('dummyClassname');
    await expect(link).toHaveAttribute('lang', 'en');
    await expect(link).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,w,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Defaults (A8, A9)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} a\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute('href', 'https://www.skatteetaten.no/');
    const logo = canvas.getByRole('img', {
      name: logoLinkText
    });
    await expect(logo).toBeInTheDocument();
  }
} satisfies Story`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,T,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With As (A8)',
  args: {
    ...defaultArgs,
    as: 'div'
  },
  argTypes: {
    as: {
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
    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvasElement.querySelector('a')).not.toBeInTheDocument();
    const logo = canvas.getByRole('img', {
      name: logoText
    });
    await expect(logo).toBeInTheDocument();
  }
} satisfies Story`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var B,R,x;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Logo, MobileLogo, Alt, And Href (A8, A10)',
  args: {
    ...defaultArgs,
    as: 'a',
    logo: customLogo,
    mobileLogo: customMobileLogo,
    alt: 'custom alt text',
    href: '#'
  },
  argTypes: {
    logo: {
      table: {
        disable: false
      }
    },
    mobileLogo: {
      table: {
        disable: false
      }
    },
    alt: {
      table: {
        disable: false
      }
    },
    href: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: 'custom alt text'
    });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute('href', '#');
  }
} satisfies Story`,...(x=(R=m.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var L,I,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Small Screen',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var H,D,F;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Breakpoint-m',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Z=["WithRef","WithAttributes","Defaults","WithAs","WithLogoMobileLogoAltAndHref","WithMobileScreen","WithBreakpointM"];export{l as Defaults,c as WithAs,i as WithAttributes,p as WithBreakpointM,m as WithLogoMobileLogoAltAndHref,d as WithMobileScreen,r as WithRef,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=TopBannerLogo.test.stories-BsAKfaEt.js.map
