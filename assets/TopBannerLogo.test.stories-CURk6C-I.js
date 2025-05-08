import{f as $,w as o,e as t,a as j,b as z}from"./index-DIxTUSTt.js";import{d as N}from"./index-EsEcB_zD.js";import{w as G}from"./storybook.testing.utils-CMs160i9.js";import{T as J}from"./TopBannerLogo-akaq_Dao.js";import{c as V}from"./custom-logo-Bf6pzwMZ.js";import{c as _}from"./custom-mobile-logo-D_hRC5wI.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K=["a","div"],oe={component:J,title:"Tester/TopBanner/TopBannerLogo (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0},options:[...K],control:"inline-radio"},logo:{table:{disable:!0},control:"select",options:["",V]},mobileLogo:{table:{disable:!0},control:"select",options:["",_]},alt:{table:{disable:!0}},href:{table:{disable:!0}}}},q=N.t("ds_layout:topbanner.SkeLogoLinkText"),Q=N.t("ds_layout:topbanner.SkeLogoImageText"),s={},r={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("link");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e).getByRole("link");await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A8, A9)",args:{...s},argTypes:{},parameters:{imageSnapshot:{focus:`${G} a`}},play:async({canvasElement:e})=>{const n=o(e),a=n.getByRole("link");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("href","https://www.skatteetaten.no/");const u=n.getByRole("img",{name:q});await t(u).toBeInTheDocument()}},c={name:"With As (A8)",args:{...s,as:"div"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e);await t(e.querySelector("a")).not.toBeInTheDocument();const a=n.getByRole("img",{name:Q});await t(a).toBeInTheDocument()}},m={name:"With Logo, MobileLogo, Alt, And Href (A8, A10)",args:{...s,as:"a",logo:V,mobileLogo:_,alt:"custom alt text",href:"#"},argTypes:{logo:{table:{disable:!1}},mobileLogo:{table:{disable:!1}},alt:{table:{disable:!1}},href:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e).getByRole("link",{name:"custom alt text"});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("href","#")}},d={name:"With Small Screen",args:{...s},parameters:{viewport:{defaultViewport:"--mobile"}}},p={name:"With Breakpoint-m",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},g={name:"With OnClick",args:{...s,onClick:$(e=>{e.preventDefault()})},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const u=o(n).getByRole("img",{name:q});await j.click(u),await z(()=>t(e.onClick).toHaveBeenCalledOnce())}};var b,f,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var A,k,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,B,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    await expect(canvasElement.querySelector('a')).not.toBeInTheDocument();
    const logo = canvas.getByRole('img', {
      name: logoText
    });
    await expect(logo).toBeInTheDocument();
  }
} satisfies Story`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var W,x,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(x=m.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var H,R,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Small Screen',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var C,E,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Breakpoint-m',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var M,O,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With OnClick',
  args: {
    ...defaultArgs,
    onClick: fn(e => {
      e.preventDefault();
    })
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const logo = canvas.getByRole('img', {
      name: logoLinkText
    });
    await fireEvent.click(logo);
    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  }
} satisfies Story`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const re=["WithRef","WithAttributes","Defaults","WithAs","WithLogoMobileLogoAltAndHref","WithMobileScreen","WithBreakpointM","WithOnClick"];export{l as Defaults,c as WithAs,i as WithAttributes,p as WithBreakpointM,m as WithLogoMobileLogoAltAndHref,d as WithMobileScreen,g as WithOnClick,r as WithRef,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=TopBannerLogo.test.stories-CURk6C-I.js.map
