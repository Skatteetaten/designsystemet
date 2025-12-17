import{j as e,d}from"./iframe-VHQh6taY.js";import{L as r}from"./index-C8wxqHpZ.js";import{b as E,G as N}from"./index-Di_7ammq.js";import{F as o}from"./index-B_yqNyPt.js";import{P as F,H as P}from"./index-Don9wpRQ.js";import{l as q}from"./ske-logo-horizontal-white-4s-xHxit.js";const{expect:a,within:u}=__STORYBOOK_MODULE_TEST__,M={component:o,title:"Tester/Footer",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},contactUsURL:{table:{disable:!0}},securityURL:{table:{disable:!0}},accessibilityURL:{table:{disable:!0}},hideLogo:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},titleFirstColumn:{table:{disable:!0}},titleSecondColumn:{table:{disable:!0}},titleThirdColumn:{table:{disable:!0}},firstColumn:{table:{disable:!0}},secondColumn:{table:{disable:!0}},thirdColumn:{table:{disable:!0}},openDefaultLinksInNewTab:{table:{disable:!0}}},tags:["test"],parameters:{layout:"fullscreen",imageSnapshot:{disableSnapshot:!1}}},X="Om Skatteetaten",i=e.jsxs(e.Fragment,{children:[e.jsxs(r,{color:"white",hasSpacing:!0,children:[e.jsx(r.Link,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(r.Link,{href:"#",children:"Om oss"}),e.jsx(r.Link,{href:"#",children:"Analyse og rapporter"}),e.jsx(r.Link,{href:"#",children:"Forskning"})]}),e.jsx(F,{children:"Legg inn en lang setning for å sjekke om kolonnebredden stemmer"})]}),c="Følg oss",f=e.jsxs(e.Fragment,{children:[e.jsx(F,{hasSpacing:!0,children:"Du kan kontakte oss i sosiale medier."}),e.jsx(r,{color:"white",children:e.jsx(r.Link,{href:"#",children:"Se alle Skatteetatens kontoer"})})]}),j="Presse",U=e.jsxs(e.Fragment,{children:[e.jsx(F,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),e.jsx(r,{color:"white",hasSpacing:!0,children:e.jsx(r.Link,{href:"#",children:"Se vårt presserom"})}),e.jsx(P,{as:"h2",level:3,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsx(F,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),e.jsx(r,{color:"white",children:e.jsx(r.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),t={titleFirstColumn:X},b={name:"With Ref (FA1)",args:{...t,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const s=u(n).getByRole("contentinfo");await a(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={name:"With Attributes (FA2-5)",args:{...t,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const s=u(n).getByRole("contentinfo");await a(s).toHaveAttribute("id","htmlId"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(s).toHaveAttribute("data-testid","123ID")}},p={name:"Default (A1, A4, A7, A11, B1)",args:{...t},argTypes:{titleFirstColumn:{table:{disable:!1}}},play:async({canvasElement:n})=>{const l=u(n),s=l.getByRole("contentinfo");await a(s).toBeInTheDocument(),await a(s.tagName).toBe("FOOTER");const m=s.querySelector("ul");await a(m).toBeInTheDocument();const O=s.querySelector("img");await a(O).toBeInTheDocument(),await a(O).toHaveAttribute("alt",d.t("Shared:shared.SkeLogoImageText"));const H=l.getAllByRole("link");await a(H[0]).toHaveAttribute("href",d.t("Shared:shared.ContactUsURL")),await a(H[1]).toHaveAttribute("href",d.t("Shared:shared.SecurityAndPrivacyURL")),await a(H[2]).toHaveAttribute("href",d.t("Shared:shared.AccessibilityStatementURL"))}},C={name:"With Custom URL (A4)",args:{...t,accessibilityURL:"#root",contactUsURL:"#root",securityURL:"#root"},argTypes:{accessibilityURL:{table:{disable:!1}},contactUsURL:{table:{disable:!1}},securityURL:{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=u(n).getAllByRole("link");for(const m of s)await a(m).toHaveAttribute("href","#root")}},g={name:"With HideDefaultLinks (A4)",args:{...t,hideDefaultLinks:!0,children:e.jsx(o.LinkFirstColumn,{href:"#",children:"skattekart"})},argTypes:{hideDefaultLinks:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const l=u(n);await a(l.queryByRole("link",{name:d.t("Shared:shared.ContactUs")})).not.toBeInTheDocument(),await a(l.queryByRole("link",{name:d.t("Shared:shared.SecurityAndPrivacy")})).not.toBeInTheDocument(),await a(l.queryByRole("link",{name:d.t("Shared:shared.AccessibilityStatementURL")})).not.toBeInTheDocument(),await a(l.getByRole("link",{name:"skattekart"})).toBeInTheDocument()}},k={name:"With HideLogo (A5)",args:{...t,hideLogo:!0},argTypes:{hideLogo:{table:{disable:!1}}},play:async({canvasElement:n})=>{const m=u(n).getByRole("contentinfo").querySelector("img");await a(m).not.toBeInTheDocument()}},_=n=>e.jsxs(o,{...n,children:[e.jsx(o.Logo,{children:e.jsx("img",{className:"logoHeight",src:q,alt:"Skatteetaten logo"})}),e.jsx(o.Logo,{children:e.jsx(E,{variant:"themeIcon",svgPath:N})})]}),y={render:_,name:"With Custom Logo (A5)",args:{...t},argTypes:{children:{table:{disable:!1}}}},G=n=>e.jsxs(o,{...n,children:[e.jsx(o.Link,{href:"#",className:"dummyClassname",children:"Satser"}),e.jsx(o.Link,{href:"#",isExternal:!0,children:"Skjema og tjenester"}),e.jsx(o.Link,{href:"#",children:"RSS"}),e.jsx(o.Link,{href:"#",children:"Tips oss"}),e.jsx(o.Link,{href:"#",children:"Koronatiltak"})]}),S={render:G,name:"With Links (A8)",args:{...t},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const s=u(n).getAllByRole("link");await a(s[3]).toHaveClass("dummyClassname");const m=s[4].querySelector("svg");await a(m).toBeInTheDocument()}},T={name:"With Three Columns Breakpoint Xs (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},v={name:"With Three Columns Breakpoint S (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},A={name:"With Three Columns Breakpoint M (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},w={name:"With Three Columns Breakpoint L (A3, A6, A8)",args:{...t,firstColumn:i,secondColumn:f,thirdColumn:U,titleSecondColumn:c,titleThirdColumn:j},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},thirdColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}},titleThirdColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-l"}}},L={name:"With Two Columns Breakpoint Xs (A3)",args:{...t,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},B={name:"With Two Columns Breakpoint S (A3)",args:{...t,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},W={name:"With Two Columns Breakpoint M (A3)",args:{...t,firstColumn:i,secondColumn:f,titleSecondColumn:c},argTypes:{firstColumn:{table:{disable:!1}},secondColumn:{table:{disable:!1}},titleSecondColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},x={name:"With One Column Breakpoint Xs (A3, A9)",args:{...t,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},R={name:"With One Column Breakpoint S (A3, A9)",args:{...t,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-s"}}},I={name:"With One Column Breakpoint M (A3, A9)",args:{...t,firstColumn:i},argTypes:{firstColumn:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}}},D={name:"With default links in new tab false (A4)",args:{...t,firstColumn:i,openDefaultLinksInNewTab:!1},argTypes:{openDefaultLinksInNewTab:{table:{disable:!1}}},play:async({canvasElement:n})=>{const l=u(n);console.log(d.t("Shared:shared.NewTab")),await a(l.queryByText(d.t("Shared:shared.NewTab"),{exact:!1})).not.toBeInTheDocument()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};const K=["WithRef","WithAttributes","Defaults","WithCustomURL","WithHideDefaultLinks","WithHideLogo","WithCustomLogo","WithLinks","WithThreeColumnsBreakpointXs","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointM","WithThreeColumnsBreakpointL","WithTwoColumnsBreakpointXs","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointM","WithOneColumnBreakpointXs","WithOneColumnBreakpointS","WithOneColumnBreakpointM","WithDefaultLinksInNewTab"],$=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,WithAttributes:h,WithCustomLogo:y,WithCustomURL:C,WithDefaultLinksInNewTab:D,WithHideDefaultLinks:g,WithHideLogo:k,WithLinks:S,WithOneColumnBreakpointM:I,WithOneColumnBreakpointS:R,WithOneColumnBreakpointXs:x,WithRef:b,WithThreeColumnsBreakpointL:w,WithThreeColumnsBreakpointM:A,WithThreeColumnsBreakpointS:v,WithThreeColumnsBreakpointXs:T,WithTwoColumnsBreakpointM:W,WithTwoColumnsBreakpointS:B,WithTwoColumnsBreakpointXs:L,__namedExportsOrder:K,default:M},Symbol.toStringTag,{value:"Module"}));export{$ as F};
//# sourceMappingURL=Footer.test.stories-De1tZXSE.js.map
