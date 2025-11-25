import{j as s,d as Ve}from"./iframe-Cq9sN_Dz.js";import{b as je,I as r}from"./index-5qJDb17Q.js";import{H as Ue,p as I,q as Re,F as Ne,E as Ge}from"./index-B4tfeJ0Q.js";import{b as _e}from"./index-CppI7WyL.js";import{l as qe}from"./storybook.testing.utils-BgHZnMzD.js";import{d as Ke}from"./demo-logo-white-KPQfmWug.js";const{expect:a,fireEvent:Je,fn:ze,waitFor:Pe,within:i}=__STORYBOOK_MODULE_TEST__,Ye={component:_e,title:"Tester/TopBanner/TopBannerInternal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:"text",table:{disable:!0}},title:{table:{disable:!0}},description:{table:{disable:!0}},skipLink:{table:{disable:!0}},user:{table:{disable:!0}},isUnderConstruction:{table:{disable:!0}},constructionBandTitle:{table:{disable:!0}},logo:{table:{disable:!0}},hideLogoOnMobile:{table:{disable:!0}},logoHref:{table:{disable:!0}},onLogoClick:{table:{disable:!0}}},args:{title:"MVA",logoHref:"#"},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},layout:"fullscreen"}},D=Ve.t("ds_layout:topbanner.SkipLinkText"),C=s.jsxs(s.Fragment,{children:[s.jsx(r,{svgPath:Re,brightness:"light",children:"Hjelp"}),s.jsx(r,{svgPath:Ne,brightness:"light",children:"Dokumentasjon"}),s.jsx(r,{svgPath:Ge,brightness:"light",children:"Opprett RF-Ørtiatten"})]}),l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=i(e).getByRole("banner");await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=i(e).getByRole("banner");await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("id","htmlId"),await a(n).toHaveAttribute("lang","nb"),await a(n).toHaveAttribute("data-testid","123ID")}},d={name:"With Defaults (B1)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByRole("banner");await a(n.tagName).toBe("HEADER");const o=t.getByRole("link",{name:D});await a(o).toBeInTheDocument()}},p={name:"With Children (A1, A4)",args:{children:s.jsxs(s.Fragment,{children:[s.jsx(je,{svgPath:Ue,href:"/hjelp",color:"white",children:"Hjelp"}),s.jsx(r,{svgPath:I,brightness:"light",children:"Tilpass løsningen"}),s.jsx(r,{svgPath:I,brightness:"light",children:"Meld feil"})]}),user:"Johansen, Krystall Pepsi",title:"Saksbehandlingsløsning med en overskrift som er lang",description:"En sekundær overskrift som også er lang"},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e).getByText("Hjelp");a(n).toBeInTheDocument()}},m={name:"SkipLink Focused On Mobile Screen (B2)",globals:{viewport:{value:"--mobile"}},play:async({canvasElement:e})=>{i(e).getByRole("link",{name:D}).focus()}},b={name:"SkipLink Focused On Breakpoint-l (B2)",globals:{viewport:{value:"--breakpoint-l"}},play:async({canvasElement:e})=>{i(e).getByRole("link",{name:D}).focus()}},g={name:"With Title And Description And User (A4)",args:{title:"kakeportalen",description:"kaka er en løgn",user:"Sandra Saksbehandler"},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["focus-visible"]}},globals:{viewport:{value:"--breakpoint-l"}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByText("kakeportalen"),o=t.getByText("kaka er en løgn");await a(n).toBeInTheDocument(),await a(o).toBeInTheDocument()}},u={name:"With Long Title And Long Description Mobile (A2, A4, A7)",argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},args:{title:"kakeportalen ".repeat(4),description:"kaka er en løgn".repeat(4),user:"Sandra Saksbehandler"},globals:{viewport:{value:"--mobile"}}},h={name:"With Police Logo (A5)",args:{logo:Ke,className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO"}},v={name:"With Demo Mode (A8)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:"demo"},play:async({canvasElement:e})=>{const n=i(e).getByText("demo");await a(n).toBeInTheDocument()}},f={name:"With Long Construction Text",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:qe}},k={name:"With onLogoClick (A6)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{onLogoClick:ze(e=>{e.preventDefault()})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e,args:t})=>{const o=i(e).getByText("MVA");await Je.click(o),await a(o).toBeInTheDocument(),await a(t.onLogoClick).toHaveBeenCalledOnce()}},y={name:"With Custom Theme (A3)",argTypes:{className:{table:{disable:!1},options:["","dummyCustomTheme"]}},args:{className:"dummyCustomTheme"}},T={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:s.jsx(r,{svgPath:Re,brightness:"light",children:"Hjelp"})},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},S={args:{title:"MVA",description:"FOLK OG TRUBADURSERVICE WOODIE GUTHRIE 999 999 999",user:"Etternavnesen Fornavn",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},B={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},L={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},w={args:{title:"Oppdragsregister saksbehandling",description:"Arbeidsliste for ulike scenarier som er lange",user:"Winnifred-Jonathan Hastings",children:C},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},A={name:"With Hide Logo on Mobile",argTypes:{hideLogoOnMobile:{table:{disable:!1}}},args:{hideLogoOnMobile:!0},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:e})=>{const n=await i(e).findByRole("link",{name:"MVA"});await a(n).toBeInTheDocument(),await Pe(()=>{const o=n.querySelector("img");a(o).not.toBeInTheDocument()})}},W={name:"With Hide Logo on Desktop",argTypes:{hideLogoOnMobile:{table:{disable:!1}}},args:{hideLogoOnMobile:!0},globals:{viewport:{value:"--breakpoint-s"}},play:async({canvasElement:e})=>{const n=await i(e).findByRole("link",{name:"MVA"});await a(n).toBeInTheDocument(),await Pe(()=>{const o=n.querySelector("img");a(o).toBeInTheDocument()})}};var E,M,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(M=l.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var O,H,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(H=c.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var R,P,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var j,U,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(U=p.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var G,_,q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var K,J,z;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(J=b.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var Y,Q,X;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ae,te;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Police Logo (A5)',
  args: {
    logo: demoLogo,
    className: 'blueBackground',
    classNames: {
      logo: 'demoLogo'
    },
    title: 'SIRO'
  }
} satisfies Story`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ie,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,le,ce;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,me;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ge,ue;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var he,ve,fe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ke,ye,Te;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var Se,Be,Le;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var we,Ae,We;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var Ce,De,Ie;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ee,Me,xe;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var Oe,He,Fe;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(He=W.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};const Qe=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointL","WithTitleDescriptionUser","WithLongTitleDescriptionMobile","WithPoliceLogo","WithDemoMode","WithLongConstructionText","WithLogoClick","WithCustomTheme","WithOneChildMobile","WithLongDescriptionAndThreeChildrenMobile","WithThreeChildrenBreakpointS","WithThreeChildrenBreakpointM","WithLongTitleAndLongDescriptionAndThreeChildrenBreakpointM","WithHideLogoOnMobile","WithHideLogoOnDesktop"],tn=Object.freeze(Object.defineProperty({__proto__:null,SkipLinkFocusedBreakpointL:b,SkipLinkFocusedMobileScreen:m,WithAttributes:c,WithChildren:p,WithCustomTheme:y,WithDefaults:d,WithDemoMode:v,WithHideLogoOnDesktop:W,WithHideLogoOnMobile:A,WithLogoClick:k,WithLongConstructionText:f,WithLongDescriptionAndThreeChildrenMobile:S,WithLongTitleAndLongDescriptionAndThreeChildrenBreakpointM:w,WithLongTitleDescriptionMobile:u,WithOneChildMobile:T,WithPoliceLogo:h,WithRef:l,WithThreeChildrenBreakpointM:L,WithThreeChildrenBreakpointS:B,WithTitleDescriptionUser:g,__namedExportsOrder:Qe,default:Ye},Symbol.toStringTag,{value:"Module"}));export{tn as T};
//# sourceMappingURL=TopBannerInternal.test.stories-CBx1nBlS.js.map
