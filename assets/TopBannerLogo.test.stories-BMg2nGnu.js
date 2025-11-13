import{d as D}from"./iframe-CdXtTKZQ.js";import{T as F}from"./TopBannerLogo-Bk2rV1UJ.js";import{c as W}from"./custom-logo-iVAsO5yi.js";const E="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='uuid-f322c5d9-df43-406c-9279-e9d4b350e7d9'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3e%3crect%20x='-.15'%20width='40'%20height='40'%20style='fill:%20%236f2c3f;%20stroke-width:%200px;'/%3e%3cg%3e%3cpath%20d='m5.14,4.1h3.61v11.52h6.54v3.06H5.14V4.1Z'%20style='fill:%20%23fff;%20stroke-width:%200px;'/%3e%3cpath%20d='m15.55,11.42c0-4.36,2.79-7.6,7.2-7.6s7.22,3.24,7.22,7.6-2.79,7.6-7.22,7.6-7.2-3.24-7.2-7.6Zm10.74,0c0-2.65-1.16-4.69-3.53-4.69s-3.55,2.04-3.55,4.69,1.2,4.67,3.55,4.67,3.53-2.02,3.53-4.67Z'%20style='fill:%20%23fff;%20stroke-width:%200px;'/%3e%3c/g%3e%3cg%3e%3cpath%20d='m7.09,34.09c-1.26-1.39-1.96-3.3-1.96-5.52s.77-4.3,2.16-5.69c1.2-1.22,2.89-1.94,4.99-1.94,3.75,0,5.99,2,6.46,5.06h-3.51c-.27-1.18-1.24-2.08-2.83-2.08-2.41,0-3.61,2-3.61,4.65s1.39,4.65,3.67,4.65c1.9,0,3.02-1.26,3.16-2.55v-.04h-2.73v-2.65h6.07v7.83h-2.53l-.2-1.75h-.04c-.96,1.49-2.39,2.08-4.14,2.08-2.08,0-3.77-.73-4.97-2.04Z'%20style='fill:%20%23fff;%20stroke-width:%200px;'/%3e%3cpath%20d='m20.14,28.54c0-4.36,2.79-7.6,7.2-7.6s7.22,3.24,7.22,7.6-2.79,7.6-7.22,7.6-7.2-3.24-7.2-7.6Zm10.74,0c0-2.65-1.16-4.69-3.53-4.69s-3.55,2.04-3.55,4.69,1.2,4.67,3.55,4.67,3.53-2.02,3.53-4.67Z'%20style='fill:%20%23fff;%20stroke-width:%200px;'/%3e%3c/g%3e%3c/svg%3e",{expect:t,fireEvent:_,fn:O,waitFor:M,within:s}=__STORYBOOK_MODULE_TEST__,P={component:F,title:"Tester/TopBanner/TopBannerLogo (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0},control:"inline-radio"},logo:{table:{disable:!0},control:"select",options:["",W]},mobileLogo:{table:{disable:!0},control:"select",options:["",E]},alt:{table:{disable:!0}},href:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},C=D.t("ds_layout:topbanner.SkeLogoLinkText"),Z=D.t("ds_layout:topbanner.SkeLogoImageText"),o={},l={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=s(e).getByRole("link");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=s(e).getByRole("link");await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"Defaults (A8, A9)",args:{...o},argTypes:{},parameters:{pseudoStates:["focus-visible"]},play:async({canvasElement:e})=>{const n=s(e),a=n.getByRole("link");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("href","https://www.skatteetaten.no/");const g=n.getByRole("img",{name:C});await t(g).toBeInTheDocument()}},c={name:"With As (A8)",args:{...o,as:"div"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=s(e);await t(e.querySelector("a")).not.toBeInTheDocument();const a=n.getByRole("img",{name:Z});await t(a).toBeInTheDocument()}},m={name:"With Logo, MobileLogo, Alt, And Href (A8, A10)",args:{...o,as:"a",logo:W,mobileLogo:E,alt:"custom alt text",href:"#"},argTypes:{logo:{table:{disable:!1}},mobileLogo:{table:{disable:!1}},alt:{table:{disable:!1}},href:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).getByRole("link",{name:"custom alt text"});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("href","#")}},d={name:"With OnClick",args:{...o,onClick:O(e=>{e.preventDefault()})},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const g=s(n).getByRole("img",{name:C});await _.click(g),await M(()=>t(e.onClick).toHaveBeenCalledOnce())}};var p,f,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(u=(f=l.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,w,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Defaults (A8, A9)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    pseudoStates: ['focus-visible']
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
} satisfies Story`,...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,T,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,B,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var I,R,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const N=["WithRef","WithAttributes","Defaults","WithAs","WithLogoMobileLogoAltAndHref","WithOnClick"],z=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,WithAs:c,WithAttributes:i,WithLogoMobileLogoAltAndHref:m,WithOnClick:d,WithRef:l,__namedExportsOrder:N,default:P},Symbol.toStringTag,{value:"Module"}));export{z as T};
//# sourceMappingURL=TopBannerLogo.test.stories-BMg2nGnu.js.map
