import{j as e,d}from"./iframe-C2uFIQ6s.js";import{L as r}from"./index-C2_9aJjw.js";import{c as qe,G as Me}from"./index-Bs2jIcy5.js";import{F as o}from"./index-BqCnNRLQ.js";import{P as F,H as Xe}from"./index-BEXGZWqo.js";import{l as _e}from"./ske-logo-horizontal-white-4s-xHxit.js";const{expect:a,within:u}=__STORYBOOK_MODULE_TEST__,Ge={component:o,title:"Tester/Footer",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},contactUsURL:{table:{disable:!0}},securityURL:{table:{disable:!0}},accessibilityURL:{table:{disable:!0}},hideLogo:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},titleFirstColumn:{table:{disable:!0}},titleSecondColumn:{table:{disable:!0}},titleThirdColumn:{table:{disable:!0}},firstColumn:{table:{disable:!0}},secondColumn:{table:{disable:!0}},thirdColumn:{table:{disable:!0}},openDefaultLinksInNewTab:{table:{disable:!0}}},tags:["test"],parameters:{layout:"fullscreen",imageSnapshot:{disableSnapshot:!1}}},Ke="Om Skatteetaten",i=e.jsxs(e.Fragment,{children:[e.jsxs(r,{color:"white",hasSpacing:!0,children:[e.jsx(r.Link,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(r.Link,{href:"#",children:"Om oss"}),e.jsx(r.Link,{href:"#",children:"Analyse og rapporter"}),e.jsx(r.Link,{href:"#",children:"Forskning"})]}),e.jsx(F,{children:"Legg inn en lang setning for å sjekke om kolonnebredden stemmer"})]}),c="Følg oss",f=e.jsxs(e.Fragment,{children:[e.jsx(F,{hasSpacing:!0,children:"Du kan kontakte oss i sosiale medier."}),e.jsx(r,{color:"white",children:e.jsx(r.Link,{href:"#",children:"Se alle Skatteetatens kontoer"})})]}),j="Presse",U=e.jsxs(e.Fragment,{children:[e.jsx(F,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),e.jsx(r,{color:"white",hasSpacing:!0,children:e.jsx(r.Link,{href:"#",children:"Se vårt presserom"})}),e.jsx(Xe,{as:"h2",level:3,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsx(F,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),e.jsx(r,{color:"white",children:e.jsx(r.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),t={titleFirstColumn:Ke},b={name:"With Ref (FA1)",args:{...t,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const s=u(n).getByRole("contentinfo");await a(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={name:"With Attributes (FA2-5)",args:{...t,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const s=u(n).getByRole("contentinfo");await a(s).toHaveAttribute("id","htmlId"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(s).toHaveAttribute("data-testid","123ID")}},p={name:"Default (A1, A4, A7, A11, B1)",args:{...t},argTypes:{titleFirstColumn:{table:{disable:!1}}},play:async({canvasElement:n})=>{const l=u(n),s=l.getByRole("contentinfo");await a(s).toBeInTheDocument(),await a(s.tagName).toBe("FOOTER");const m=s.querySelector("ul");await a(m).toBeInTheDocument();const O=s.querySelector("img");await a(O).toBeInTheDocument(),await a(O).toHaveAttribute("alt",d.t("Shared:shared.SkeLogoImageText"));const H=l.getAllByRole("link");await a(H[0]).toHaveAttribute("href",d.t("Shared:shared.ContactUsURL")),await a(H[1]).toHaveAttribute("href",d.t("Shared:shared.SecurityAndPrivacyURL")),await a(H[2]).toHaveAttribute("href",d.t("Shared:shared.AccessibilityStatementURL"))}},C={name:"With Custom URL (A4)",args:{...t,accessibilityURL:"#root",contactUsURL:"#root",securityURL:"#root"},argTypes:{accessibilityURL:{table:{disable:!1}},contactUsURL:{table:{disable:!1}},securityURL:{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=u(n).getAllByRole("link");for(const m of s)await a(m).toHaveAttribute("href","#root")}},g={name:"With HideDefaultLinks (A4)",args:{...t,hideDefaultLinks:!0,children:e.jsx(o.LinkFirstColumn,{href:"#",children:"skattekart"})},argTypes:{hideDefaultLinks:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const l=u(n);await a(l.queryByRole("link",{name:d.t("Shared:shared.ContactUs")})).not.toBeInTheDocument(),await a(l.queryByRole("link",{name:d.t("Shared:shared.SecurityAndPrivacy")})).not.toBeInTheDocument(),await a(l.queryByRole("link",{name:d.t("Shared:shared.AccessibilityStatementURL")})).not.toBeInTheDocument(),await a(l.getByRole("link",{name:"skattekart"})).toBeInTheDocument()}},k={name:"With HideLogo (A5)",args:{...t,hideLogo:!0},argTypes:{hideLogo:{table:{disable:!1}}},play:async({canvasElement:n})=>{const m=u(n).getByRole("contentinfo").querySelector("img");await a(m).not.toBeInTheDocument()}},ze=n=>e.jsxs(o,{...n,children:[e.jsx(o.Logo,{children:e.jsx("img",{className:"logoHeight",src:_e,alt:"Skatteetaten logo"})}),e.jsx(o.Logo,{children:e.jsx(qe,{variant:"themeIcon",svgPath:Me})})]}),y={render:ze,name:"With Custom Logo (A5)",args:{...t},argTypes:{children:{table:{disable:!1}}}},Je=n=>e.jsxs(o,{...n,children:[e.jsx(o.Link,{href:"#",className:"dummyClassname",children:"Satser"}),e.jsx(o.Link,{href:"#",isExternal:!0,children:"Skjema og tjenester"}),e.jsx(o.Link,{href:"#",children:"RSS"}),e.jsx(o.Link,{href:"#",children:"Tips oss"}),e.jsx(o.Link,{href:"#",children:"Koronatiltak"})]}),S={render:Je,name:"With Links (A8)",args:{...t},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=u(n).getAllByRole("link");await a(s[3]).toHaveClass("dummyClassname");const m=s[4].querySelector("svg");await a(m).toBeInTheDocument()}},T={name:"With Three Columns Breakpoint Xs (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},v={name:"With Three Columns Breakpoint S (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},A={name:"With Three Columns Breakpoint M (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},w={name:"With Three Columns Breakpoint L (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-l"}}},L={name:"With Two Columns Breakpoint Xs (A3)",args:{...t,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},B={name:"With Two Columns Breakpoint S (A3)",args:{...t,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},W={name:"With Two Columns Breakpoint M (A3)",args:{...t,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},x={name:"With One Column Breakpoint Xs (A3, A9)",args:{...t,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},R={name:"With One Column Breakpoint S (A3, A9)",args:{...t,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},I={name:"With One Column Breakpoint M (A3, A9)",args:{...t,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},D={name:"With default links in new tab false (A4)",args:{...t,firstColumn:i,openDefaultLinksInNewTab:!1},argTypes:{openDefaultLinksInNewTab:{table:{disable:!1}}},play:async({canvasElement:n})=>{const l=u(n);console.log(d.t("Shared:shared.NewTab")),await a(l.queryByText(d.t("Shared:shared.NewTab"),{exact:!1})).not.toBeInTheDocument()}};var E,N,P;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var q,M,X;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(X=(M=h.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var _,G,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var z,J,V;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(J=C.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var Y,Q,Z;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With HideDefaultLinks (A4)',
  args: {
    ...defaultArgs,
    hideDefaultLinks: true,
    children: <Footer.LinkFirstColumn href={'#'}>{'skattekart'}</Footer.LinkFirstColumn>
  },
  argTypes: {
    hideDefaultLinks: {
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
    await expect(canvas.queryByRole('link', {
      name: dsI18n.t('Shared:shared.ContactUs')
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('link', {
      name: dsI18n.t('Shared:shared.SecurityAndPrivacy')
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('link', {
      name: dsI18n.t('Shared:shared.AccessibilityStatementURL')
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('link', {
      name: 'skattekart'
    })).toBeInTheDocument();
  }
} satisfies Story`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,ne;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,re;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,de,ue;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(ue=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ce,fe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...(fe=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};var be,he,pe;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...(pe=(he=A.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var Ce,ge,ke;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-l'
    }
  }
} satisfies Story`,...(ke=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var ye,Se,Te;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Te=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var ve,Ae,we;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...(we=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Le,Be,We;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...(We=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var xe,Re,Ie;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Ie=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var De,Fe,je;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...(je=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ue,He,Oe;I.parameters={...I.parameters,docs:{...(Ue=I.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...(Oe=(He=I.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Ee,Ne,Pe;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'With default links in new tab false (A4)',
  args: {
    ...defaultArgs,
    firstColumn: defaultFirstColumn,
    openDefaultLinksInNewTab: false
  },
  argTypes: {
    openDefaultLinksInNewTab: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    console.log(dsI18n.t('Shared:shared.NewTab'));
    await expect(canvas.queryByText(dsI18n.t('Shared:shared.NewTab'), {
      exact: false
    })).not.toBeInTheDocument();
  }
} satisfies Story`,...(Pe=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};const Ve=["WithRef","WithAttributes","Defaults","WithCustomURL","WithHideDefaultLinks","WithHideLogo","WithCustomLogo","WithLinks","WithThreeColumnsBreakpointXs","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointM","WithThreeColumnsBreakpointL","WithTwoColumnsBreakpointXs","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointM","WithOneColumnBreakpointXs","WithOneColumnBreakpointS","WithOneColumnBreakpointM","WithDefaultLinksInNewTab"],an=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,WithAttributes:h,WithCustomLogo:y,WithCustomURL:C,WithDefaultLinksInNewTab:D,WithHideDefaultLinks:g,WithHideLogo:k,WithLinks:S,WithOneColumnBreakpointM:I,WithOneColumnBreakpointS:R,WithOneColumnBreakpointXs:x,WithRef:b,WithThreeColumnsBreakpointL:w,WithThreeColumnsBreakpointM:A,WithThreeColumnsBreakpointS:v,WithThreeColumnsBreakpointXs:T,WithTwoColumnsBreakpointM:W,WithTwoColumnsBreakpointS:B,WithTwoColumnsBreakpointXs:L,__namedExportsOrder:Ve,default:Ge},Symbol.toStringTag,{value:"Module"}));export{an as F};
//# sourceMappingURL=Footer.test.stories-C9ybEa6H.js.map
