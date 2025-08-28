import{f as F,w as s,e as n,a as M,b as O}from"./index-DIxTUSTt.js";import{d as D}from"./index-CGk5cNE3.js";import{w as P}from"./storybook.testing.utils-CMs160i9.js";import{T as N}from"./TopBannerLogo-CQvHH4Ba.js";import{c as W}from"./custom-logo-BLbAWs8x.js";import{c as C}from"./custom-mobile-logo-BIWhy2R-.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";const V={component:N,title:"Tester/TopBanner/TopBannerLogo (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0},control:"inline-radio"},logo:{table:{disable:!0},control:"select",options:["",W]},mobileLogo:{table:{disable:!0},control:"select",options:["",C]},alt:{table:{disable:!0}},href:{table:{disable:!0}}}},E=D.t("ds_layout:topbanner.SkeLogoLinkText"),_=D.t("ds_layout:topbanner.SkeLogoImageText"),o={},l={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=s(e).getByRole("link");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).getByRole("link");await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","en"),await n(a).toHaveAttribute("data-testid","123ID")}},r={name:"Defaults (A8, A9)",args:{...o},argTypes:{},parameters:{imageSnapshot:{focus:`${P} a`}},play:async({canvasElement:e})=>{const t=s(e),a=t.getByRole("link");await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("href","https://www.skatteetaten.no/");const g=t.getByRole("img",{name:E});await n(g).toBeInTheDocument()}},c={name:"With As (A8)",args:{...o,as:"div"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=s(e);await n(e.querySelector("a")).not.toBeInTheDocument();const a=t.getByRole("img",{name:_});await n(a).toBeInTheDocument()}},m={name:"With Logo, MobileLogo, Alt, And Href (A8, A10)",args:{...o,as:"a",logo:W,mobileLogo:C,alt:"custom alt text",href:"#"},argTypes:{logo:{table:{disable:!1}},mobileLogo:{table:{disable:!1}},alt:{table:{disable:!1}},href:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).getByRole("link",{name:"custom alt text"});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("href","#")}},d={name:"With OnClick",args:{...o,onClick:F(e=>{e.preventDefault()})},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({args:e,canvasElement:t})=>{const g=s(t).getByRole("img",{name:E});await M.click(g),await O(()=>n(e.onClick).toHaveBeenCalledOnce())}};var p,u,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,y,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,w,A;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,T,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,x,S;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(x=m.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,H,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const X=["WithRef","WithAttributes","Defaults","WithAs","WithLogoMobileLogoAltAndHref","WithOnClick"];export{r as Defaults,c as WithAs,i as WithAttributes,m as WithLogoMobileLogoAltAndHref,d as WithOnClick,l as WithRef,X as __namedExportsOrder,V as default};
//# sourceMappingURL=TopBannerLogo.test.stories-9TnbVQY8.js.map
