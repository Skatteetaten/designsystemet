import{j as s}from"./jsx-runtime-BYYWji4R.js";import{f as Ne,w as i,e as a,a as Ge}from"./index-DIxTUSTt.js";import{b as qe,I as o}from"./index-DYo2YWtE.js";import{d as Je}from"./index-D9wdQ6Rv.js";import{H as Ke,j as I,k as Ue,F as _e,E as $e}from"./index-BomPkCop.js";import{a as ze}from"./index-Cu8VyHvx.js";import{w as Qe,l as Xe}from"./storybook.testing.utils-CMs160i9.js";import{c as Ye}from"./custom-mobile-logo-BxxQuNfx.js";import{d as Ze}from"./demo-logo-white-Dd-h1hzi.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C176R4Vg.js";import"./index--gfV2u6P.js";import"./TopBannerButton-CBPTQFjc.js";import"./TopBannerLangPicker-Bd2R10s_.js";import"./TopBannerLangPickerButton-DG6nj_pk.js";import"./TopBannerLogo-Bvp0m3uf.js";import"./TopBannerSkipLink-94qw7mEL.js";import"./TopBannerUserButton-Dy1Qn93E.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";const wn={component:ze,title:"Tester/TopBanner/TopBannerInternal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:"text",table:{disable:!0}},title:{table:{disable:!0}},description:{table:{disable:!0}},skipLink:{table:{disable:!0}},user:{table:{disable:!0}},isUnderConstruction:{table:{disable:!0}},constructionBandTitle:{table:{disable:!0}},logo:{table:{disable:!0}},hideLogoOnMobile:{table:{disable:!0}},logoHref:{table:{disable:!0}},logoAltText:{table:{disable:!0}},onLogoClick:{table:{disable:!0}}},args:{title:"MVA",logoHref:"#",logoAltText:"til startsiden kakeportalen"},parameters:{layout:"fullscreen"}},D=Je.t("ds_layout:topbanner.SkipLinkText"),x=s.jsxs(s.Fragment,{children:[s.jsx(o,{svgPath:Ue,brightness:"light",children:"Hjelp"}),s.jsx(o,{svgPath:_e,brightness:"light",children:"Dokumentasjon"}),s.jsx(o,{svgPath:$e,brightness:"light",children:"Opprett RF-Ørtiatten"})]}),l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=i(e).getByRole("banner");await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e).getByRole("banner");await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("id","htmlId"),await a(n).toHaveAttribute("lang","nb"),await a(n).toHaveAttribute("data-testid","123ID")}},d={name:"With Defaults (B1)",parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByRole("banner");await a(n.tagName).toBe("HEADER"),await a(n.firstChild).toHaveAttribute("href");const r=t.getByText(D);await a(r).toBeInTheDocument()}},p={name:"With Children (A1, A4)",args:{children:s.jsxs(s.Fragment,{children:[s.jsx(qe,{svgPath:Ke,href:"/hjelp",color:"white",children:"Hjelp"}),s.jsx(o,{svgPath:I,brightness:"light",children:"Tilpass løsningen"}),s.jsx(o,{svgPath:I,brightness:"light",children:"Meld feil"})]}),user:"Johansen, Krystall Pepsi",title:"Saksbehandlingsløsning med en overskrift som er lang",description:"En sekundær overskrift som også er lang"},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e).getByText("Hjelp");a(n).toBeInTheDocument()}},m={name:"SkipLink Focused On Mobile Screen (B2)",parameters:{viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:e})=>{i(e).getByRole("link",{name:D}).focus()}},b={name:"SkipLink Focused On Breakpoint-l (B2)",parameters:{viewport:{defaultViewport:"--breakpoint-l"}},play:async({canvasElement:e})=>{i(e).getByRole("link",{name:D}).focus()}},u={name:"With Title And Description And User (A4)",args:{title:"kakeportalen",description:"kaka er en løgn",user:"Sandra Saksbehandler"},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-l"},imageSnapshot:{focus:`${Qe} > header > div > div > a`}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByText("kakeportalen"),r=t.getByText("kaka er en løgn");await a(n).toBeInTheDocument(),await a(r).toBeInTheDocument()}},g={name:"With Long Title And Long Description Mobile (A2, A4, A7)",argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},args:{title:"kakeportalen ".repeat(4),description:"kaka er en løgn".repeat(4),user:"Sandra Saksbehandler"},parameters:{viewport:{defaultViewport:"--mobile"}}},h={name:"With Custom Logo (A5)",argTypes:{logo:{table:{disable:!1},control:{disable:!0}}},args:{logo:Ye}},f={name:"With Police Logo (A5)",args:{logo:Ze,className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO"}},k={name:"With Demo Mode (A8)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:"demo"},play:async({canvasElement:e})=>{const n=i(e).getByText("demo");await a(n).toBeInTheDocument()}},v={name:"With Long Construction Text",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{isUnderConstruction:!0,constructionBandTitle:Xe}},y={name:"With onLogoClick (A6)",argTypes:{isUnderConstruction:{table:{disable:!1}},constructionBandTitle:{table:{disable:!1}}},args:{onLogoClick:Ne()},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e,args:t})=>{const r=i(e).getByText("MVA");await Ge.click(r),await a(r).toBeInTheDocument(),await a(t.onLogoClick).toHaveBeenCalledOnce()}},T={name:"With Custom Theme (A3)",argTypes:{className:{table:{disable:!1},options:["","dummyCustomTheme"]}},args:{className:"dummyCustomTheme"}},w={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:s.jsx(o,{svgPath:Ue,brightness:"light",children:"Hjelp"})},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},S={args:{title:"MVA",description:"FOLK OG TRUBADURSERVICE WOODIE GUTHRIE 999 999 999",user:"Etternavnesen Fornavn",children:x},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},B={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:x},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},L={args:{title:"MVA",description:"Arbeidsliste",user:"Etternavnesen Fornavn",children:x},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},A={args:{title:"Oppdragsregister saksbehandling",description:"Arbeidsliste for ulike scenarier som er lange",user:"Winnifred-Jonathan Hastings",children:x},argTypes:{title:{table:{disable:!1}},description:{table:{disable:!1}},user:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},W={name:"With Hide Logo on Mobile",argTypes:{hideLogoOnMobile:{table:{disable:!1}}},args:{hideLogoOnMobile:!0},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:e})=>{const n=await i(e).findByRole("link",{name:"MVA"});await a(n).toBeInTheDocument();const r=n.querySelector("img");await a(r).not.toBeInTheDocument()}},C={name:"With Hide Logo on Desktop",argTypes:{hideLogoOnMobile:{table:{disable:!1}}},args:{hideLogoOnMobile:!0},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:e})=>{const n=await i(e).findByRole("link",{name:"MVA"});await a(n).toBeInTheDocument();const r=n.querySelector("img");await a(r).toBeInTheDocument()}};var M,E,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var H,F,O;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,P,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var U,N,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(N=p.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var q,J,K;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var _,$,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=($=b.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,re,oe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'With Police Logo (A5)',
  args: {
    logo: demoLogo,
    className: 'blueBackground',
    classNames: {
      logo: 'demoLogo'
    },
    title: 'SIRO'
  }
} satisfies Story`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ce,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,be;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(me=v.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ue,ge,he;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    const link = canvas.getByText('MVA');
    await fireEvent.click(link);
    await expect(link).toBeInTheDocument();
    await expect(args.onLogoClick).toHaveBeenCalledOnce();
  }
} satisfies Story`,...(he=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,ke,ve;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var ye,Te,we;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(we=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Se,Be,Le;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(Le=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var Ae,We,Ce;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s'
    }
  }
} satisfies Story`,...(Ce=(We=B.parameters)==null?void 0:We.docs)==null?void 0:Ce.source}}};var xe,De,Ie;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(Ie=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Me,Ee,Ve;A.parameters={...A.parameters,docs:{...(Me=A.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(Ve=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var He,Fe,Oe;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
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
    const logo = link.querySelector('img');
    await expect(logo).not.toBeInTheDocument();
  }
} satisfies Story`,...(Oe=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var Re,Pe,je;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s'
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
    const logo = link.querySelector('img');
    await expect(logo).toBeInTheDocument();
  }
} satisfies Story`,...(je=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};const Sn=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointL","WithTitleDescriptionUser","WithLongTitleDescriptionMobile","WithCustomLogo","WithPoliceLogo","WithDemoMode","WithLongConstructionText","WithLogoClick","WithCustomTheme","WithOneChildMobile","WithLongDescriptionAndThreeChildrenMobile","WithThreeChildrenBreakpointS","WithThreeChildrenBreakpointM","WithLongTitleAndLongDescriptionAndThreeChildrenBreakpointM","WithHideLogoOnMobile","WithHideLogoOnDesktop"];export{b as SkipLinkFocusedBreakpointL,m as SkipLinkFocusedMobileScreen,c as WithAttributes,p as WithChildren,h as WithCustomLogo,T as WithCustomTheme,d as WithDefaults,k as WithDemoMode,C as WithHideLogoOnDesktop,W as WithHideLogoOnMobile,y as WithLogoClick,v as WithLongConstructionText,S as WithLongDescriptionAndThreeChildrenMobile,A as WithLongTitleAndLongDescriptionAndThreeChildrenBreakpointM,g as WithLongTitleDescriptionMobile,w as WithOneChildMobile,f as WithPoliceLogo,l as WithRef,L as WithThreeChildrenBreakpointM,B as WithThreeChildrenBreakpointS,u as WithTitleDescriptionUser,Sn as __namedExportsOrder,wn as default};
//# sourceMappingURL=TopBannerInternal.test.stories-Bhd3CyDt.js.map
