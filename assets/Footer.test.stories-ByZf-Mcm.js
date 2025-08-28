import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{w as m,e as t}from"./index-DIxTUSTt.js";import{L as l}from"./index-Du3yX_TW.js";import{d}from"./index-CGk5cNE3.js";import{c as Pe,G as qe}from"./index-CgEl4Pzg.js";import{F as r}from"./index-palH82_U.js";import{P as F,H as Me}from"./index-DXWIZOJk.js";import{l as Xe}from"./ske-logo-horizontal-white-4s-xHxit.js";import"./index-uxUkjR_c.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BuHbB7kV.js";import"./DatePickerCalendar-wzrlqniL.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./TopBannerButton-nMBjyS0d.js";import"./floating-ui.react-ayiMHenP.js";import"./index-D9u29hOa.js";import"./TopBannerLangPicker-CgqTpUMW.js";import"./TopBannerLangPickerButton-B4IymQya.js";import"./TopBannerLogo-CQvHH4Ba.js";import"./TopBannerSkipLink-DV7Ysy1E.js";import"./TopBannerUserButton-CmmWVGv5.js";const yn={component:r,title:"Tester/Footer",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},contactUsURL:{table:{disable:!0}},securityURL:{table:{disable:!0}},accessibilityURL:{table:{disable:!0}},hideLogo:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},titleFirstColumn:{table:{disable:!0}},titleSecondColumn:{table:{disable:!0}},titleThirdColumn:{table:{disable:!0}},firstColumn:{table:{disable:!0}},secondColumn:{table:{disable:!0}},thirdColumn:{table:{disable:!0}},openDefaultLinksInNewTab:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},Ge="Om Skatteetaten",i=e.jsxs(e.Fragment,{children:[e.jsxs(l,{color:"white",hasSpacing:!0,children:[e.jsx(l.Link,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(l.Link,{href:"#",children:"Om oss"}),e.jsx(l.Link,{href:"#",children:"Analyse og rapporter"}),e.jsx(l.Link,{href:"#",children:"Forskning"})]}),e.jsx(F,{children:"Legg inn en lang setning for å sjekke om kolonnebredden stemmer"})]}),c="Følg oss",f=e.jsxs(e.Fragment,{children:[e.jsx(F,{hasSpacing:!0,children:"Du kan kontakte oss i sosiale medier."}),e.jsx(l,{color:"white",children:e.jsx(l.Link,{href:"#",children:"Se alle Skatteetatens kontoer"})})]}),j="Presse",U=e.jsxs(e.Fragment,{children:[e.jsx(F,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),e.jsx(l,{color:"white",hasSpacing:!0,children:e.jsx(l.Link,{href:"#",children:"Se vårt presserom"})}),e.jsx(Me,{as:"h2",level:3,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsx(F,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),e.jsx(l,{color:"white",children:e.jsx(l.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),a={titleFirstColumn:Ge},p={name:"With Ref (FA1)",args:{...a,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const s=m(n).getByRole("contentinfo");await t(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...a,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=m(n).getByRole("contentinfo");await t(s).toHaveAttribute("id","htmlId"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(s).toHaveAttribute("data-testid","123ID")}},h={name:"Default (A1, A4, A7, A11, B1)",args:{...a},argTypes:{titleFirstColumn:{table:{disable:!1}}},play:async({canvasElement:n})=>{const o=m(n),s=o.getByRole("contentinfo");await t(s).toBeInTheDocument(),await t(s.tagName).toBe("FOOTER");const u=s.querySelector("ul");await t(u).toBeInTheDocument();const E=s.querySelector("img");await t(E).toBeInTheDocument(),await t(E).toHaveAttribute("alt",d.t("Shared:shared.SkeLogoImageText"));const H=o.getAllByRole("link");await t(H[0]).toHaveAttribute("href",d.t("Shared:shared.ContactUsURL")),await t(H[1]).toHaveAttribute("href",d.t("Shared:shared.SecurityAndPrivacyURL")),await t(H[2]).toHaveAttribute("href",d.t("Shared:shared.AccessibilityStatementURL"))}},C={name:"With Custom URL (A4)",args:{...a,accessibilityURL:"#root",contactUsURL:"#root",securityURL:"#root"},argTypes:{accessibilityURL:{table:{disable:!1}},contactUsURL:{table:{disable:!1}},securityURL:{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=m(n).getAllByRole("link");for(const u of s)await t(u).toHaveAttribute("href","#root")}},g={name:"With HideDefaultLinks (A4)",args:{...a,hideDefaultLinks:!0,children:e.jsx(r.LinkFirstColumn,{href:"#",children:"skattekart"})},argTypes:{hideDefaultLinks:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const o=m(n);await t(o.queryByRole("link",{name:d.t("Shared:shared.ContactUs")})).not.toBeInTheDocument(),await t(o.queryByRole("link",{name:d.t("Shared:shared.SecurityAndPrivacy")})).not.toBeInTheDocument(),await t(o.queryByRole("link",{name:d.t("Shared:shared.AccessibilityStatementURL")})).not.toBeInTheDocument(),await t(o.getByRole("link",{name:"skattekart"})).toBeInTheDocument()}},k={name:"With HideLogo (A5)",args:{...a,hideLogo:!0},argTypes:{hideLogo:{table:{disable:!1}}},play:async({canvasElement:n})=>{const u=m(n).getByRole("contentinfo").querySelector("img");await t(u).not.toBeInTheDocument()}},_e=n=>e.jsxs(r,{...n,children:[e.jsx(r.Logo,{children:e.jsx("img",{className:"logoHeight",src:Xe,alt:"Skatteetaten logo"})}),e.jsx(r.Logo,{children:e.jsx(Pe,{variant:"themeIcon",svgPath:qe})})]}),y={render:_e,name:"With Custom Logo (A5)",args:{...a},argTypes:{children:{table:{disable:!1}}}},Je=n=>e.jsxs(r,{...n,children:[e.jsx(r.Link,{href:"#",className:"dummyClassname",children:"Satser"}),e.jsx(r.Link,{href:"#",isExternal:!0,children:"Skjema og tjenester"}),e.jsx(r.Link,{href:"#",children:"RSS"}),e.jsx(r.Link,{href:"#",children:"Tips oss"}),e.jsx(r.Link,{href:"#",children:"Koronatiltak"})]}),S={render:Je,name:"With Links (A8)",args:{...a},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=m(n).getAllByRole("link");await t(s[3]).toHaveClass("dummyClassname");const u=s[4].querySelector("svg");await t(u).toBeInTheDocument()}},T={name:"With Three Columns Breakpoint Xs (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},w={name:"With Three Columns Breakpoint S (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},A={name:"With Three Columns Breakpoint M (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},v={name:"With Three Columns Breakpoint L (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-l"}}},L={name:"With Two Columns Breakpoint Xs (A3)",args:{...a,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},B={name:"With Two Columns Breakpoint S (A3)",args:{...a,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},W={name:"With Two Columns Breakpoint M (A3)",args:{...a,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},x={name:"With One Column Breakpoint Xs (A3, A9)",args:{...a,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},R={name:"With One Column Breakpoint S (A3, A9)",args:{...a,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},I={name:"With One Column Breakpoint M (A3, A9)",args:{...a,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},D={name:"With default links in new tab false (A4)",args:{...a,firstColumn:i,openDefaultLinksInNewTab:!1},argTypes:{openDefaultLinksInNewTab:{table:{disable:!1}}},play:async({canvasElement:n})=>{const o=m(n);console.log(d.t("Shared:shared.NewTab")),await t(o.queryByText(d.t("Shared:shared.NewTab"),{exact:!1})).not.toBeInTheDocument()}};var V,N,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,q,M;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(q=b.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var X,G,_;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(G=h.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var J,K,z;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(K=C.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var Q,Y,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,re,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,de,me;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=T.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ce,fe;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};var pe,be,he;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(be=A.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Ce,ge,ke;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var ye,Se,Te;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var we,Ae,ve;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var Le,Be,We;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s'
    }
  }
} satisfies Story`,...(je=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ue,He,Ee;I.parameters={...I.parameters,docs:{...(Ue=I.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(He=I.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Ve,Ne,Oe;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};const Sn=["WithRef","WithAttributes","Defaults","WithCustomURL","WithHideDefaultLinks","WithHideLogo","WithCustomLogo","WithLinks","WithThreeColumnsBreakpointXs","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointM","WithThreeColumnsBreakpointL","WithTwoColumnsBreakpointXs","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointM","WithOneColumnBreakpointXs","WithOneColumnBreakpointS","WithOneColumnBreakpointM","WithDefaultLinksInNewTab"];export{h as Defaults,b as WithAttributes,y as WithCustomLogo,C as WithCustomURL,D as WithDefaultLinksInNewTab,g as WithHideDefaultLinks,k as WithHideLogo,S as WithLinks,I as WithOneColumnBreakpointM,R as WithOneColumnBreakpointS,x as WithOneColumnBreakpointXs,p as WithRef,v as WithThreeColumnsBreakpointL,A as WithThreeColumnsBreakpointM,w as WithThreeColumnsBreakpointS,T as WithThreeColumnsBreakpointXs,W as WithTwoColumnsBreakpointM,B as WithTwoColumnsBreakpointS,L as WithTwoColumnsBreakpointXs,Sn as __namedExportsOrder,yn as default};
//# sourceMappingURL=Footer.test.stories-ByZf-Mcm.js.map
