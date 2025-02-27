import{j as e}from"./jsx-runtime-BYYWji4R.js";import{w as c,e as a}from"./index-DIxTUSTt.js";import{L as o}from"./index-DYo2YWtE.js";import{d as f}from"./index-D9wdQ6Rv.js";import{b as Ue,G as He}from"./index-BomPkCop.js";import{F as l}from"./index-Cu8VyHvx.js";import{P as j,H as Ie}from"./index--gfV2u6P.js";import{l as Ve}from"./ske-logo-horizontal-white-4s-xHxit.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C176R4Vg.js";import"./TopBannerButton-CBPTQFjc.js";import"./TopBannerLangPicker-Bd2R10s_.js";import"./TopBannerLangPickerButton-DG6nj_pk.js";import"./TopBannerLogo-Bvp0m3uf.js";import"./TopBannerSkipLink-94qw7mEL.js";import"./TopBannerUserButton-Dy1Qn93E.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";const on={component:l,title:"Tester/Footer",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},contactUsURL:{table:{disable:!0}},securityURL:{table:{disable:!0}},accessibilityURL:{table:{disable:!0}},hideLogo:{table:{disable:!0}},titleFirstColumn:{table:{disable:!0}},titleSecondColumn:{table:{disable:!0}},titleThirdColumn:{table:{disable:!0}},firstColumn:{table:{disable:!0}},secondColumn:{table:{disable:!0}},thirdColumn:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},De="Om Skatteetaten",r=e.jsxs(e.Fragment,{children:[e.jsxs(o,{color:"white",hasSpacing:!0,children:[e.jsx(o.Link,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(o.Link,{href:"#",children:"Om oss"}),e.jsx(o.Link,{href:"#",children:"Analyse og rapporter"}),e.jsx(o.Link,{href:"#",children:"Forskning"})]}),e.jsx(j,{children:"Legg inn en lang setning for å sjekke om kolonnebredden stemmer"})]}),m="Følg oss",u=e.jsxs(e.Fragment,{children:[e.jsx(j,{hasSpacing:!0,children:"Du kan kontakte oss i sosiale medier."}),e.jsx(o,{color:"white",children:e.jsx(o.Link,{href:"#",children:"Se alle Skatteetatens kontoer"})})]}),F="Presse",U=e.jsxs(e.Fragment,{children:[e.jsx(j,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),e.jsx(o,{color:"white",hasSpacing:!0,children:e.jsx(o.Link,{href:"#",children:"Se vårt presserom"})}),e.jsx(Ie,{as:"h2",level:3,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsx(j,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),e.jsx(o,{color:"white",children:e.jsx(o.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),s={titleFirstColumn:De},p={name:"With Ref (FA1)",args:{...s,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=c(n).getByRole("contentinfo");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=c(n).getByRole("contentinfo");await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}},h={name:"Default (A1, A4, A7, A11, B1)",args:{...s},argTypes:{titleFirstColumn:{table:{disable:!1}}},play:async({canvasElement:n})=>{const i=c(n),t=i.getByRole("contentinfo");await a(t).toBeInTheDocument(),await a(t.tagName).toBe("FOOTER");const d=t.querySelector("ul");await a(d).toBeInTheDocument();const I=t.querySelector("img");await a(I).toBeInTheDocument(),await a(I).toHaveAttribute("alt",f.t("Shared:shared.SkeLogoImageText"));const H=i.getAllByRole("link");await a(H[0]).toHaveAttribute("href",f.t("Shared:shared.ContactUsURL")),await a(H[1]).toHaveAttribute("href",f.t("Shared:shared.SecurityAndPrivacyURL")),await a(H[2]).toHaveAttribute("href",f.t("Shared:shared.AccessibilityStatementURL"))}},C={name:"With Custom URL (A4)",args:{...s,accessibilityURL:"#root",contactUsURL:"#root",securityURL:"#root"},argTypes:{accessibilityURL:{table:{disable:!1}},contactUsURL:{table:{disable:!1}},securityURL:{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=c(n).getAllByRole("link");for(const d of t)await a(d).toHaveAttribute("href","#root")}},g={name:"With HideLogo (A5)",args:{...s,hideLogo:!0},argTypes:{hideLogo:{table:{disable:!1}}},play:async({canvasElement:n})=>{const d=c(n).getByRole("contentinfo").querySelector("img");await a(d).not.toBeInTheDocument()}},Oe=n=>e.jsxs(l,{...n,children:[e.jsx(l.Logo,{children:e.jsx("img",{className:"logoHeight",src:Ve,alt:"Skatteetaten logo"})}),e.jsx(l.Logo,{children:e.jsx(Ue,{variant:"themeIcon",svgPath:He})})]}),k={render:Oe,name:"With Custom Logo (A5)",args:{...s},argTypes:{children:{table:{disable:!1}}}},Ee=n=>e.jsxs(l,{...n,children:[e.jsx(l.Link,{href:"#",className:"dummyClassname",children:"Satser"}),e.jsx(l.Link,{href:"#",isExternal:!0,children:"Skjema og tjenester"}),e.jsx(l.Link,{href:"#",children:"RSS"}),e.jsx(l.Link,{href:"#",children:"Tips oss"}),e.jsx(l.Link,{href:"#",children:"Koronatiltak"})]}),S={render:Ee,name:"With Links (A8)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=c(n).getAllByRole("link");await a(t[3]).toHaveClass("dummyClassname");const d=t[4].querySelector("svg");await a(d).toBeInTheDocument()}},y={name:"With Three Columns Breakpoint Xs (A3, A6, A8)",args:{...s,firstColumn:r,secondColumn:u,thirdColumn:U,titleSecondColumn:m,titleThirdColumn:F},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},T={name:"With Three Columns Breakpoint S (A3, A6, A8)",args:{...s,firstColumn:r,secondColumn:u,thirdColumn:U,titleSecondColumn:m,titleThirdColumn:F},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},A={name:"With Three Columns Breakpoint M (A3, A6, A8)",args:{...s,firstColumn:r,secondColumn:u,thirdColumn:U,titleSecondColumn:m,titleThirdColumn:F},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},w={name:"With Three Columns Breakpoint L (A3, A6, A8)",args:{...s,firstColumn:r,secondColumn:u,thirdColumn:U,titleSecondColumn:m,titleThirdColumn:F},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-l"}}},v={name:"With Two Columns Breakpoint Xs (A3)",args:{...s,firstColumn:r,secondColumn:u,titleSecondColumn:m},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},L={name:"With Two Columns Breakpoint S (A3)",args:{...s,firstColumn:r,secondColumn:u,titleSecondColumn:m},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},B={name:"With Two Columns Breakpoint M (A3)",args:{...s,firstColumn:r,secondColumn:u,titleSecondColumn:m},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},W={name:"With One Column Breakpoint Xs (A3, A9)",args:{...s,firstColumn:r},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},x={name:"With One Column Breakpoint S (A3, A9)",args:{...s,firstColumn:r},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},R={name:"With One Column Breakpoint M (A3, A9)",args:{...s,firstColumn:r},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}};var V,D,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
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
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var E,M,P;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toHaveAttribute('id', 'htmlId');
    await expect(footer).toHaveClass('dummyClassname');
    await expect(footer).toHaveAttribute('lang', 'nb');
    await expect(footer).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(P=(M=b.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var X,N,q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Default (A1, A4, A7, A11, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    titleFirstColumn: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toBeInTheDocument();
    await expect(footer.tagName).toBe('FOOTER');
    const linkGroup = footer.querySelector('ul');
    await expect(linkGroup).toBeInTheDocument();
    const logo = footer.querySelector('img');
    await expect(logo).toBeInTheDocument();
    await expect(logo).toHaveAttribute('alt', dsI18n.t('Shared:shared.SkeLogoImageText'));
    const links = canvas.getAllByRole('link');
    await expect(links[0]).toHaveAttribute('href', dsI18n.t('Shared:shared.ContactUsURL'));
    await expect(links[1]).toHaveAttribute('href', dsI18n.t('Shared:shared.SecurityAndPrivacyURL'));
    await expect(links[2]).toHaveAttribute('href', dsI18n.t('Shared:shared.AccessibilityStatementURL'));
  }
} satisfies Story`,...(q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var G,_,J;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Custom URL (A4)',
  args: {
    ...defaultArgs,
    accessibilityURL: '#root',
    contactUsURL: '#root',
    securityURL: '#root'
  },
  argTypes: {
    accessibilityURL: {
      table: {
        disable: false
      }
    },
    contactUsURL: {
      table: {
        disable: false
      }
    },
    securityURL: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');
    for (const link of links) {
      await expect(link).toHaveAttribute('href', '#root');
    }
  }
} satisfies Story`,...(J=(_=C.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,z,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With HideLogo (A5)',
  args: {
    ...defaultArgs,
    hideLogo: true
  },
  argTypes: {
    hideLogo: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');
    const logo = footer.querySelector('img');
    await expect(logo).not.toBeInTheDocument();
  }
} satisfies Story`,...(Q=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: TemplateWithLogo,
  name: 'With Custom Logo (A5)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: TemplateWithLink,
  name: 'With Links (A8)',
  args: {
    ...defaultArgs
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
    const links = canvas.getAllByRole('link');
    await expect(links[3]).toHaveClass('dummyClassname');
    const externalLink = links[4].querySelector('svg');
    await expect(externalLink).toBeInTheDocument();
  }
} satisfies Story`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Three Columns Breakpoint Xs (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    thirdColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
      table: {
        disable: false
      }
    },
    titleThirdColumn: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(oe=(se=y.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,re,ie;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Three Columns Breakpoint S (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    thirdColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
      table: {
        disable: false
      }
    },
    titleThirdColumn: {
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
} satisfies Story`,...(ie=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,me,ue;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'With Three Columns Breakpoint M (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    thirdColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
      table: {
        disable: false
      }
    },
    titleThirdColumn: {
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
} satisfies Story`,...(ue=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ce,fe,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'With Three Columns Breakpoint L (A3, A6, A8)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    thirdColumn: defaultThirdColumn,
    titleSecondColumn: defaultTitleSecondColumn,
    titleThirdColumn: defaultTitleThirdColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    thirdColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
      table: {
        disable: false
      }
    },
    titleThirdColumn: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l'
    }
  }
} satisfies Story`,...(pe=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var be,he,Ce;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'With Two Columns Breakpoint Xs (A3)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    titleSecondColumn: defaultTitleSecondColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Ce=(he=v.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var ge,ke,Se;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'With Two Columns Breakpoint S (A3)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    titleSecondColumn: defaultTitleSecondColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
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
} satisfies Story`,...(Se=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var ye,Te,Ae;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'With Two Columns Breakpoint M (A3)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    secondColumn: defaultSecondColumn,
    titleSecondColumn: defaultTitleSecondColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    },
    secondColumn: {
      table: {
        disable: false
      }
    },
    titleSecondColumn: {
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
} satisfies Story`,...(Ae=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var we,ve,Le;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'With One Column Breakpoint Xs (A3, A9)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn
  },
  argTypes: {
    firstColumn: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Le=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:Le.source}}};var Be,We,xe;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'With One Column Breakpoint S (A3, A9)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn
  },
  argTypes: {
    firstColumn: {
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
} satisfies Story`,...(xe=(We=x.parameters)==null?void 0:We.docs)==null?void 0:xe.source}}};var Re,je,Fe;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'With One Column Breakpoint M (A3, A9)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn
  },
  argTypes: {
    firstColumn: {
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
} satisfies Story`,...(Fe=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};const ln=["WithRef","WithAttributes","Defaults","WithCustomURL","WithHideLogo","WithCustomLogo","WithLinks","WithThreeColumnsBreakpointXs","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointM","WithThreeColumnsBreakpointL","WithTwoColumnsBreakpointXs","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointM","WithOneColumnBreakpointXs","WithOneColumnBreakpointS","WithOneColumnBreakpointM"];export{h as Defaults,b as WithAttributes,k as WithCustomLogo,C as WithCustomURL,g as WithHideLogo,S as WithLinks,R as WithOneColumnBreakpointM,x as WithOneColumnBreakpointS,W as WithOneColumnBreakpointXs,p as WithRef,w as WithThreeColumnsBreakpointL,A as WithThreeColumnsBreakpointM,T as WithThreeColumnsBreakpointS,y as WithThreeColumnsBreakpointXs,B as WithTwoColumnsBreakpointM,L as WithTwoColumnsBreakpointS,v as WithTwoColumnsBreakpointXs,ln as __namedExportsOrder,on as default};
//# sourceMappingURL=Footer.test.stories-7Htc9CDE.js.map
