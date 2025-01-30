import{j as r}from"./jsx-runtime-CfatFE5O.js";import{w as s,e as n,f as ie,a as re}from"./index-XVqkR3zt.js";import{b as oe,I as v}from"./index-U0B695k8.js";import{d as le}from"./index--O6iZ70i.js";import{H as ce,j as T}from"./index-BWc9jU-Q.js";import{T as se}from"./index-3rMk6jj3.js";import{w as de}from"./storybook.testing.utils-CMs160i9.js";import{c as me}from"./custom-mobile-logo-BxxQuNfx.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxnk4fMh.js";import"./index-BaCHQVlv.js";import"./TopBannerButton-CFG_wE33.js";import"./TopBannerLangPicker-CeLXy4tc.js";import"./TopBannerLangPickerButton-BDoOb6Bj.js";import"./TopBannerLogo-CMn0QDYG.js";import"./TopBannerSkipLink-ZAFVAJfo.js";import"./TopBannerUserButton-4UM-Z5pJ.js";const Ie={component:se,title:"Tester/TopBanner/TopBannerInternal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:"text",table:{disable:!0}},title:{table:{disable:!0}},description:{table:{disable:!0}},skipLink:{table:{disable:!0}},user:{table:{disable:!0}},isUnderConstruction:{table:{disable:!0}},constructionBandTitle:{table:{disable:!0}},logo:{table:{disable:!0}},logoHref:{table:{disable:!0}},logoAltText:{table:{disable:!0}},onLogoClick:{table:{disable:!0}}},args:{logoHref:"#",logoAltText:"til startsiden kakeportalen"},parameters:{layout:"fullscreen"}},y=le.t("ds_layout:topbanner.SkipLinkText"),o={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=s(e).getByRole("banner");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).getByRole("banner");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},c={name:"With Defaults (B1)",parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=s(e),a=t.getByRole("banner");await n(a.tagName).toBe("HEADER"),await n(a.firstChild).toHaveAttribute("href");const i=t.getByText(y);await n(i).toBeInTheDocument()}},d={name:"With Children (A1, A4)",args:{children:r.jsxs(r.Fragment,{children:[r.jsx(oe,{className:"marginL",svgPath:ce,href:"/hjelp",color:"white",children:"Hjelp"}),r.jsx(v,{className:"marginL",svgPath:T,children:"Tilpass løsningen"}),r.jsx(v,{className:"marginL",svgPath:T,children:"Meld feil"})]}),user:"Johansen, Krystall Pepsi",title:"Saksbehandlingsløsning med en overskrift som er lang",description:"En sekundær overskrift som også er lang"},argTypes:{children:{table:{disable:!1}}},parameters:{a11y:{disable:!0}},play:async({canvasElement:e})=>{const a=s(e).getByText("Hjelp");n(a).toBeInTheDocument()}},m={name:"SkipLink Focused On Mobile Screen (B2)",parameters:{viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:e})=>{s(e).getByRole("link",{name:y}).focus()}},p={name:"SkipLink Focused On Breakpoint-l (B2)",parameters:{viewport:{defaultViewport:"--breakpoint-l"}},play:async({canvasElement:e})=>{s(e).getByRole("link",{name:y}).focus()}},u={name:"With Title description (A4)",args:{title:"kakeportalen",description:"kaka er en løgn",user:"Sandra Saksbehandler"},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-l"},imageSnapshot:{focus:`${de} > header > div > div > a`}},play:async({canvasElement:e})=>{const t=s(e),a=t.getByText("kakeportalen"),i=t.getByText("kaka er en løgn");await n(a).toBeInTheDocument(),await n(i).toBeInTheDocument()}},b={name:"With Long Title description Username (A2, A4, A7)",argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},args:{title:"kakeportalen ".repeat(4),description:"kaka er en løgn".repeat(4),user:"Sandra Saksbehandler"},parameters:{viewport:{defaultViewport:"--mobile"}}},g={name:"With Custom Logo (A5)",argTypes:{logo:{table:{disable:!1},control:{disable:!0}}},args:{logo:me}},h={name:"With Demo Mode (A8)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:"demo"},play:async({canvasElement:e})=>{const a=s(e).getByText("demo");await n(a).toBeInTheDocument()}},k={name:"With onClickLogo LogoAltText LogoHref (A6)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{onLogoClick:ie()},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e,args:t})=>{const i=s(e).getByAltText("til startsiden kakeportalen");await re.click(i),await n(i).toBeInTheDocument(),await n(t.onLogoClick).toHaveBeenCalledOnce()}},f={name:"With Custom Theme (A3)",argTypes:{className:{table:{disable:!1},options:["","dummyCustomTheme"]}},args:{className:"dummyCustomTheme"},render:e=>r.jsx(se,{...e})};var w,B,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLElement | null): void => {
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
    const header = canvas.getByRole('banner');
    await expect(header).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var L,x,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
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
    const header = canvas.getByRole('banner');
    await expect(header).toHaveClass('dummyClassname');
    await expect(header).toHaveAttribute('id', 'htmlId');
    await expect(header).toHaveAttribute('lang', 'nb');
    await expect(header).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var C,W,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Defaults (B1)',
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header.tagName).toBe('HEADER');
    await expect(header.firstChild).toHaveAttribute('href');
    const skipLink = canvas.getByText(skipLinkText);
    await expect(skipLink).toBeInTheDocument();
  }
} satisfies Story`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var D,E,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With Children (A1, A4)',
  args: {
    children: <>
        <Link className={'marginL'} svgPath={HelpOutlineSVGpath} href={'/hjelp'} color={'white'}>
          {'Hjelp'}
        </Link>
        <InlineButton className={'marginL'} svgPath={SettingsSVGpath}>
          {'Tilpass løsningen'}
        </InlineButton>
        <InlineButton className={'marginL'} svgPath={SettingsSVGpath}>
          {'Meld feil'}
        </InlineButton>
      </>,
    user: 'Johansen, Krystall Pepsi',
    title: 'Saksbehandlingsløsning med en overskrift som er lang',
    description: 'En sekundær overskrift som også er lang'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    a11y: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Hjelp');
    expect(label).toBeInTheDocument();
  }
} satisfies Story`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var F,R,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Mobile Screen (B2)',
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var P,j,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-l (B2)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var V,U,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Title description (A4)',
  args: {
    title: 'kakeportalen',
    description: 'kaka er en løgn',
    user: 'Sandra Saksbehandler'
  },
  argTypes: {
    title: {
      table: {
        disable: false
      }
    },
    description: {
      table: {
        disable: false
      }
    },
    user: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l'
    },
    imageSnapshot: {
      focus: \`\${wrapper} > header > div > div > a\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('kakeportalen');
    const description = canvas.getByText('kaka er en løgn');
    await expect(title).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...(O=(U=u.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var G,J,_;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Long Title description Username (A2, A4, A7)',
  argTypes: {
    title: {
      table: {
        disable: false
      }
    },
    description: {
      table: {
        disable: false
      }
    },
    user: {
      table: {
        disable: false
      }
    }
  },
  args: {
    title: 'kakeportalen '.repeat(4),
    description: 'kaka er en løgn'.repeat(4),
    user: 'Sandra Saksbehandler'
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(_=(J=b.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var K,$,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Custom Logo (A5)',
  argTypes: {
    logo: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  },
  args: {
    logo: customLogo
  }
} satisfies Story`,...(X=($=g.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var q,z,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Demo Mode (A8)',
  argTypes: {
    isUnderConstruction: {
      table: {
        disable: false
      }
    },
    constructionBandTitle: {
      table: {
        disable: false
      }
    }
  },
  args: {
    isUnderConstruction: true,
    constructionBandTitle: 'demo'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('demo');
    await expect(title).toBeInTheDocument();
  }
} satisfies Story`,...(Q=(z=h.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With onClickLogo LogoAltText LogoHref (A6)',
  argTypes: {
    isUnderConstruction: {
      table: {
        disable: false
      }
    },
    constructionBandTitle: {
      table: {
        disable: false
      }
    }
  },
  args: {
    onLogoClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const logo = canvas.getByAltText('til startsiden kakeportalen');
    await fireEvent.click(logo);
    await expect(logo).toBeInTheDocument();
    await expect(args.onLogoClick).toHaveBeenCalledOnce();
  }
} satisfies Story`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Custom Theme (A3)',
  argTypes: {
    className: {
      table: {
        disable: false
      },
      options: ['', 'dummyCustomTheme']
    }
  },
  args: {
    className: 'dummyCustomTheme'
  },
  render: (args): JSX.Element => <TopBannerInternal {...args} />
} satisfies Story`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const De=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointL","WithTitleDescriptionUser","WithLongTitleDescriptionMobile","WithCustomLogo","WithDemoMode","WithLogoClick","WithCustomTheme"];export{p as SkipLinkFocusedBreakpointL,m as SkipLinkFocusedMobileScreen,l as WithAttributes,d as WithChildren,g as WithCustomLogo,f as WithCustomTheme,c as WithDefaults,h as WithDemoMode,k as WithLogoClick,b as WithLongTitleDescriptionMobile,o as WithRef,u as WithTitleDescriptionUser,De as __namedExportsOrder,Ie as default};
//# sourceMappingURL=TopBannerInternal.test.stories-_2H7qBs3.js.map
