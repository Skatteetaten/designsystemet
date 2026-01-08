import{j as s,d as x}from"./iframe-s2_bNgHU.js";import{b as O,I as r}from"./index-Ck1G954W.js";import{H,p as I,q as E,F,E as R}from"./index-CUsfAC9p.js";import{a as P}from"./index-7wWg-Emv.js";import{l as V}from"./storybook.testing.utils-BgHZnMzD.js";import{d as j}from"./demo-logo-white-llganhAb.js";const{expect:a,fireEvent:U,fn:N,waitFor:M,within:i}=__STORYBOOK_MODULE_TEST__,G={component:P,title:"Tester/TopBannerInternal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:"text",table:{disable:!0}},title:{table:{disable:!0}},description:{table:{disable:!0}},skipLink:{table:{disable:!0}},user:{table:{disable:!0}},isUnderConstruction:{table:{disable:!0}},constructionBandTitle:{table:{disable:!0}},logo:{table:{disable:!0}},hideLogoOnMobile:{table:{disable:!0}},logoHref:{table:{disable:!0}},onLogoClick:{table:{disable:!0}}},args:{title:"MVA",logoHref:"#"},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},layout:"fullscreen"}},D=x.t("ds_layout:topbanner.SkipLinkText"),C=s.jsxs(s.Fragment,{children:[s.jsx(r,{svgPath:E,brightness:"light",children:"Hjelp"}),s.jsx(r,{svgPath:F,brightness:"light",children:"Dokumentasjon"}),s.jsx(r,{svgPath:R,brightness:"light",children:"Opprett RF-Ørtiatten"})]}),l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=i(e).getByRole("banner");await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=i(e).getByRole("banner");await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("id","htmlId"),await a(n).toHaveAttribute("lang","nb"),await a(n).toHaveAttribute("data-testid","123ID")}},d={name:"With Defaults (B1)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByRole("banner");await a(n.tagName).toBe("HEADER");const o=t.getByRole("link",{name:D});await a(o).toBeInTheDocument()}},p={name:"With Children (A1, A4)",args:{children:s.jsxs(s.Fragment,{children:[s.jsx(O,{svgPath:H,href:"/hjelp",color:"white",children:"Hjelp"}),s.jsx(r,{svgPath:I,brightness:"light",children:"Tilpass løsningen"}),s.jsx(r,{svgPath:I,brightness:"light",children:"Meld feil"})]}),user:"Johansen, Krystall Pepsi",title:"Saksbehandlingsløsning med en overskrift som er lang",description:"En sekundær overskrift som også er lang"},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e).getByText("Hjelp");a(n).toBeInTheDocument()}},m={name:"SkipLink Focused On Mobile Screen (B2)",globals:{viewport:{value:"--mobile"}},play:async({canvasElement:e})=>{i(e).getByRole("link",{name:D}).focus()}},b={name:"SkipLink Focused On Breakpoint-l (B2)",globals:{viewport:{value:"--breakpoint-l"}},play:async({canvasElement:e})=>{i(e).getByRole("link",{name:D}).focus()}},g={name:"With Title And Description And User (A4)",args:{title:"kakeportalen",description:"kaka er en løgn",user:"Sandra Saksbehandler"},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["focus-visible"]}},globals:{viewport:{value:"--breakpoint-l"}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByText("kakeportalen"),o=t.getByText("kaka er en løgn");await a(n).toBeInTheDocument(),await a(o).toBeInTheDocument()}},u={name:"With Long Title And Long Description Mobile (A2, A4, A7)",argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},args:{title:"kakeportalen ".repeat(4),description:"kaka er en løgn".repeat(4),user:"Sandra Saksbehandler"},globals:{viewport:{value:"--mobile"}}},h={name:"With Police Logo (A5)",args:{logo:j,className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO"}},v={name:"With Demo Mode (A8)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:"demo"},play:async({canvasElement:e})=>{const n=i(e).getByText("demo");await a(n).toBeInTheDocument()}},f={name:"With Long Construction Text",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:V}},k={name:"With onLogoClick (A6)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{onLogoClick:N(e=>{e.preventDefault()})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e,args:t})=>{const o=i(e).getByText("MVA");await U.click(o),await a(o).toBeInTheDocument(),await a(t.onLogoClick).toHaveBeenCalledOnce()}},y={name:"With Custom Theme (A3)",argTypes:{className:{table:{disable:!1},options:["","dummyCustomTheme"]}},args:{className:"dummyCustomTheme"}},T={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:s.jsx(r,{svgPath:E,brightness:"light",children:"Hjelp"})},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},S={args:{title:"MVA",description:"FOLK OG TRUBADURSERVICE WOODIE GUTHRIE 999 999 999",user:"Etternavnesen Fornavn",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},B={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},L={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},w={args:{title:"Oppdragsregister saksbehandling",description:"Arbeidsliste for ulike scenarier som er lange",user:"Winnifred-Jonathan Hastings",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},A={name:"With Hide Logo on Mobile",argTypes:{hideLogoOnMobile:{table:{disable:!1}}},args:{hideLogoOnMobile:!0},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:e})=>{const n=await i(e).findByRole("link",{name:"MVA"});await a(n).toBeInTheDocument(),await M(()=>{const o=n.querySelector("img");a(o).not.toBeInTheDocument()})}},W={name:"With Hide Logo on Desktop",argTypes:{hideLogoOnMobile:{table:{disable:!1}}},args:{hideLogoOnMobile:!0},globals:{viewport:{value:"--breakpoint-s"}},play:async({canvasElement:e})=>{const n=await i(e).findByRole("link",{name:"MVA"});await a(n).toBeInTheDocument(),await M(()=>{const o=n.querySelector("img");a(o).toBeInTheDocument()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Defaults (B1)',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header.tagName).toBe('HEADER');
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    await expect(skipLink).toBeInTheDocument();
  }
} satisfies Story`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Children (A1, A4)',
  args: {
    children: <>
        <Link svgPath={HelpOutlineSVGpath} href={'/hjelp'} color={'white'}>
          {'Hjelp'}
        </Link>
        <InlineButton svgPath={SettingsSVGpath} brightness={'light'}>
          {'Tilpass løsningen'}
        </InlineButton>
        <InlineButton svgPath={SettingsSVGpath} brightness={'light'}>
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Hjelp');
    expect(label).toBeInTheDocument();
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Mobile Screen (B2)',
  globals: {
    viewport: {
      value: '--mobile'
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
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-l (B2)',
  globals: {
    viewport: {
      value: '--breakpoint-l'
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
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Title And Description And User (A4)',
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
    imageSnapshot: {
      pseudoStates: ['focus-visible']
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-l'
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
} satisfies Story`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Long Title And Long Description Mobile (A2, A4, A7)',
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
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Police Logo (A5)',
  args: {
    logo: demoLogo,
    className: 'blueBackground',
    classNames: {
      logo: 'demoLogo'
    },
    title: 'SIRO'
  }
} satisfies Story`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Long Construction Text',
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
    constructionBandTitle: loremIpsum
  }
} satisfies Story`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With onLogoClick (A6)',
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
    onLogoClick: fn((event): void => {
      event.preventDefault();
    })
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByText('MVA');
    await fireEvent.click(link);
    await expect(link).toBeInTheDocument();
    await expect(args.onLogoClick).toHaveBeenCalledOnce();
  }
} satisfies Story`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'MVA',
    description: 'Arbeidsliste',
    user: 'Etternavnesen Fornavn',
    children: <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
        {'Hjelp'}
      </InlineButton>
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
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'MVA',
    description: 'FOLK OG TRUBADURSERVICE WOODIE GUTHRIE 999 999 999',
    user: 'Etternavnesen Fornavn',
    children: defaultChildren
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
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'MVA',
    description: 'Arbeidsliste',
    user: 'Etternavnesen Fornavn',
    children: defaultChildren
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
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'MVA',
    description: 'Arbeidsliste',
    user: 'Etternavnesen Fornavn',
    children: defaultChildren
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
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Oppdragsregister saksbehandling',
    description: 'Arbeidsliste for ulike scenarier som er lange',
    user: 'Winnifred-Jonathan Hastings',
    children: defaultChildren
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
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Hide Logo on Mobile',
  argTypes: {
    hideLogoOnMobile: {
      table: {
        disable: false
      }
    }
  },
  args: {
    hideLogoOnMobile: true
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = await canvas.findByRole('link', {
      name: 'MVA'
    });
    await expect(link).toBeInTheDocument();
    await waitFor(() => {
      const logo = link.querySelector('img');
      expect(logo).not.toBeInTheDocument();
    });
  }
} satisfies Story`,...A.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With Hide Logo on Desktop',
  argTypes: {
    hideLogoOnMobile: {
      table: {
        disable: false
      }
    }
  },
  args: {
    hideLogoOnMobile: true
  },
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = await canvas.findByRole('link', {
      name: 'MVA'
    });
    await expect(link).toBeInTheDocument();
    await waitFor(() => {
      const logo = link.querySelector('img');
      expect(logo).toBeInTheDocument();
    });
  }
} satisfies Story`,...W.parameters?.docs?.source}}};const _=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointL","WithTitleDescriptionUser","WithLongTitleDescriptionMobile","WithPoliceLogo","WithDemoMode","WithLongConstructionText","WithLogoClick","WithCustomTheme","WithOneChildMobile","WithLongDescriptionAndThreeChildrenMobile","WithThreeChildrenBreakpointS","WithThreeChildrenBreakpointM","WithLongTitleAndLongDescriptionAndThreeChildrenBreakpointM","WithHideLogoOnMobile","WithHideLogoOnDesktop"],X=Object.freeze(Object.defineProperty({__proto__:null,SkipLinkFocusedBreakpointL:b,SkipLinkFocusedMobileScreen:m,WithAttributes:c,WithChildren:p,WithCustomTheme:y,WithDefaults:d,WithDemoMode:v,WithHideLogoOnDesktop:W,WithHideLogoOnMobile:A,WithLogoClick:k,WithLongConstructionText:f,WithLongDescriptionAndThreeChildrenMobile:S,WithLongTitleAndLongDescriptionAndThreeChildrenBreakpointM:w,WithLongTitleDescriptionMobile:u,WithOneChildMobile:T,WithPoliceLogo:h,WithRef:l,WithThreeChildrenBreakpointM:L,WithThreeChildrenBreakpointS:B,WithTitleDescriptionUser:g,__namedExportsOrder:_,default:G},Symbol.toStringTag,{value:"Module"}));export{X as T};
//# sourceMappingURL=TopBannerInternal.test.stories-Dv65ma9H.js.map
