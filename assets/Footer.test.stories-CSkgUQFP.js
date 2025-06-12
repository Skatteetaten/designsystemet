import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{w as u,e as n}from"./index-DIxTUSTt.js";import{L as l}from"./index-eDVrZHQi.js";import{d as m}from"./index-ChzTQA-a.js";import{b as Ve,G as Ee}from"./index-CdwPxLML.js";import{F as r}from"./index-DyriRbJa.js";import{P as I,H as Oe}from"./index-DsfABT8I.js";import{l as Pe}from"./ske-logo-horizontal-white-4s-xHxit.js";import"./index-CPecIRii.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DzkGBFys.js";import"./DatePickerCalendar-j9g8dyRt.js";import"./LabelWithHelp-IJvVpsNu.js";import"./Help-DpeK2zjo.js";import"./index-UoIuQY3B.js";import"./index-Bm-dj5jB.js";import"./TopBannerButton-0jIvVBn9.js";import"./TopBannerLangPicker-Dx4oc0U9.js";import"./TopBannerLangPickerButton-B5uH1qxT.js";import"./TopBannerLogo-BXuDjKJZ.js";import"./TopBannerSkipLink-CqJlQyOT.js";import"./TopBannerUserButton-C9FIE6r6.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";const hn={component:r,title:"Tester/Footer",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},contactUsURL:{table:{disable:!0}},securityURL:{table:{disable:!0}},accessibilityURL:{table:{disable:!0}},hideLogo:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},titleFirstColumn:{table:{disable:!0}},titleSecondColumn:{table:{disable:!0}},titleThirdColumn:{table:{disable:!0}},firstColumn:{table:{disable:!0}},secondColumn:{table:{disable:!0}},thirdColumn:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},qe="Om Skatteetaten",i=e.jsxs(e.Fragment,{children:[e.jsxs(l,{color:"white",hasSpacing:!0,children:[e.jsx(l.Link,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(l.Link,{href:"#",children:"Om oss"}),e.jsx(l.Link,{href:"#",children:"Analyse og rapporter"}),e.jsx(l.Link,{href:"#",children:"Forskning"})]}),e.jsx(I,{children:"Legg inn en lang setning for å sjekke om kolonnebredden stemmer"})]}),c="Følg oss",f=e.jsxs(e.Fragment,{children:[e.jsx(I,{hasSpacing:!0,children:"Du kan kontakte oss i sosiale medier."}),e.jsx(l,{color:"white",children:e.jsx(l.Link,{href:"#",children:"Se alle Skatteetatens kontoer"})})]}),j="Presse",D=e.jsxs(e.Fragment,{children:[e.jsx(I,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),e.jsx(l,{color:"white",hasSpacing:!0,children:e.jsx(l.Link,{href:"#",children:"Se vårt presserom"})}),e.jsx(Oe,{as:"h2",level:3,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsx(I,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),e.jsx(l,{color:"white",children:e.jsx(l.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),a={titleFirstColumn:qe},p={name:"With Ref (FA1)",args:{...a,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const s=u(t).getByRole("contentinfo");await n(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...a,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=u(t).getByRole("contentinfo");await n(s).toHaveAttribute("id","htmlId"),await n(s).toHaveClass("dummyClassname"),await n(s).toHaveAttribute("lang","nb"),await n(s).toHaveAttribute("data-testid","123ID")}},h={name:"Default (A1, A4, A7, A11, B1)",args:{...a},argTypes:{titleFirstColumn:{table:{disable:!1}}},play:async({canvasElement:t})=>{const o=u(t),s=o.getByRole("contentinfo");await n(s).toBeInTheDocument(),await n(s.tagName).toBe("FOOTER");const d=s.querySelector("ul");await n(d).toBeInTheDocument();const H=s.querySelector("img");await n(H).toBeInTheDocument(),await n(H).toHaveAttribute("alt",m.t("Shared:shared.SkeLogoImageText"));const U=o.getAllByRole("link");await n(U[0]).toHaveAttribute("href",m.t("Shared:shared.ContactUsURL")),await n(U[1]).toHaveAttribute("href",m.t("Shared:shared.SecurityAndPrivacyURL")),await n(U[2]).toHaveAttribute("href",m.t("Shared:shared.AccessibilityStatementURL"))}},C={name:"With Custom URL (A4)",args:{...a,accessibilityURL:"#root",contactUsURL:"#root",securityURL:"#root"},argTypes:{accessibilityURL:{table:{disable:!1}},contactUsURL:{table:{disable:!1}},securityURL:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=u(t).getAllByRole("link");for(const d of s)await n(d).toHaveAttribute("href","#root")}},g={name:"With HideDefaultLinks (A4)",args:{...a,hideDefaultLinks:!0,children:e.jsx(r.LinkFirstColumn,{href:"#",children:"skattekart"})},argTypes:{hideDefaultLinks:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const o=u(t);await n(o.queryByRole("link",{name:m.t("Shared:shared.ContactUs")})).not.toBeInTheDocument(),await n(o.queryByRole("link",{name:m.t("Shared:shared.SecurityAndPrivacy")})).not.toBeInTheDocument(),await n(o.queryByRole("link",{name:m.t("Shared:shared.AccessibilityStatementURL")})).not.toBeInTheDocument(),await n(o.getByRole("link",{name:"skattekart"})).toBeInTheDocument()}},k={name:"With HideLogo (A5)",args:{...a,hideLogo:!0},argTypes:{hideLogo:{table:{disable:!1}}},play:async({canvasElement:t})=>{const d=u(t).getByRole("contentinfo").querySelector("img");await n(d).not.toBeInTheDocument()}},Me=t=>e.jsxs(r,{...t,children:[e.jsx(r.Logo,{children:e.jsx("img",{className:"logoHeight",src:Pe,alt:"Skatteetaten logo"})}),e.jsx(r.Logo,{children:e.jsx(Ve,{variant:"themeIcon",svgPath:Ee})})]}),y={render:Me,name:"With Custom Logo (A5)",args:{...a},argTypes:{children:{table:{disable:!1}}}},Xe=t=>e.jsxs(r,{...t,children:[e.jsx(r.Link,{href:"#",className:"dummyClassname",children:"Satser"}),e.jsx(r.Link,{href:"#",isExternal:!0,children:"Skjema og tjenester"}),e.jsx(r.Link,{href:"#",children:"RSS"}),e.jsx(r.Link,{href:"#",children:"Tips oss"}),e.jsx(r.Link,{href:"#",children:"Koronatiltak"})]}),S={render:Xe,name:"With Links (A8)",args:{...a},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=u(t).getAllByRole("link");await n(s[3]).toHaveClass("dummyClassname");const d=s[4].querySelector("svg");await n(d).toBeInTheDocument()}},T={name:"With Three Columns Breakpoint Xs (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:D,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},A={name:"With Three Columns Breakpoint S (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:D,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},w={name:"With Three Columns Breakpoint M (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:D,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},v={name:"With Three Columns Breakpoint L (A3, A6, A8)",args:{...a,firstColumn:i,secondColumn:f,thirdColumn:D,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-l"}}},L={name:"With Two Columns Breakpoint Xs (A3)",args:{...a,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},B={name:"With Two Columns Breakpoint S (A3)",args:{...a,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},W={name:"With Two Columns Breakpoint M (A3)",args:{...a,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},x={name:"With One Column Breakpoint Xs (A3, A9)",args:{...a,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},R={name:"With One Column Breakpoint S (A3, A9)",args:{...a,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},F={name:"With One Column Breakpoint M (A3, A9)",args:{...a,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}};var V,E,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var P,q,M;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(q=b.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var X,N,G;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(N=h.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var _,J,K;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var z,Q,Y;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=k.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,ae;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,re;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,ie,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,ce;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var fe,pe,be;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,Ce,ge;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var ke,ye,Se;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Te,Ae,we;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var ve,Le,Be;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var We,xe,Re;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Re.source}}};var Fe,Ie,je;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var De,Ue,He;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};const Cn=["WithRef","WithAttributes","Defaults","WithCustomURL","WithHideDefaultLinks","WithHideLogo","WithCustomLogo","WithLinks","WithThreeColumnsBreakpointXs","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointM","WithThreeColumnsBreakpointL","WithTwoColumnsBreakpointXs","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointM","WithOneColumnBreakpointXs","WithOneColumnBreakpointS","WithOneColumnBreakpointM"];export{h as Defaults,b as WithAttributes,y as WithCustomLogo,C as WithCustomURL,g as WithHideDefaultLinks,k as WithHideLogo,S as WithLinks,F as WithOneColumnBreakpointM,R as WithOneColumnBreakpointS,x as WithOneColumnBreakpointXs,p as WithRef,v as WithThreeColumnsBreakpointL,w as WithThreeColumnsBreakpointM,A as WithThreeColumnsBreakpointS,T as WithThreeColumnsBreakpointXs,W as WithTwoColumnsBreakpointM,B as WithTwoColumnsBreakpointS,L as WithTwoColumnsBreakpointXs,Cn as __namedExportsOrder,hn as default};
//# sourceMappingURL=Footer.test.stories-CSkgUQFP.js.map
