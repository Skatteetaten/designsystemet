import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{w as o,e as t,u as c}from"./index-DIxTUSTt.js";import{b as j}from"./index-DfnG5Ebn.js";import{d as u}from"./index-CGk5cNE3.js";import"./index-DkXzVmhj.js";import{T as D,F as V}from"./index-Bi6A9-ld.js";import{c as pe}from"./custom-logo-BLbAWs8x.js";import{r as I}from"./index-D_ouKaeX.js";import{s as ge}from"./ske-logo-BSCI4sWT.js";import{T as ke}from"./DatePickerCalendar-PuG5IodJ.js";import"./index-DAV9Xejq.js";import"./index-uxUkjR_c.js";import"./Help-ChcS7hng.js";import"./LabelWithHelp-B8AAT5XN.js";import"./index-B0Glj4sP.js";import"./index-Bid14VJj.js";import"./index-sjPb88pE.js";import"./TopBannerButton-gnYzOY4E.js";import"./floating-ui.react-ayiMHenP.js";import"./index-D9u29hOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TopBannerLangPicker-D9vesMnm.js";import"./TopBannerLangPickerButton-uUMcnrZP.js";import"./TopBannerLogo-CQvHH4Ba.js";import"./TopBannerSkipLink-D3ySv9rb.js";import"./TopBannerUserButton-CFB1INkH.js";var $,G;function O(){return O=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},O.apply(null,arguments)}var he=function(a){return I.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 11"},a),$||($=I.createElement("path",{fill:"#fff",d:"M0 0h18v11H0z"})),G||(G=I.createElement("path",{stroke:"#002F6C",strokeWidth:3,d:"M0 5.5h18M6.5 0v11"})))};function H(){return H=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},H.apply(null,arguments)}var l=function(a){return I.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",id:"Flag_placeholder_svg__placeholder",width:24,height:16},a))};const ze={component:D,title:"Tester/TopBanner/TopBannerExternal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},showSami:{table:{disable:!0}},defaultLocale:{table:{disable:!0}},children:{control:"text",table:{disable:!0}},skipLink:{table:{disable:!0}},logo:{table:{disable:!0},control:"select",options:["",pe,ge]},user:{table:{disable:!0}},firstColumn:{control:"text",table:{disable:!0}},secondColumn:{control:"text",table:{disable:!0}},thirdColumn:{control:"text",table:{disable:!0}},additionalLanguages:{table:{disable:!0}},searchContent:{control:"text",table:{disable:!0}},onSearchClick:{table:{disable:!0}},onSearch:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}},onLogInClick:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onUserClick:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},ve=u.t("ds_layout:topbannerbutton.Login"),ye=u.t("ds_layout:topbannerbutton.Logout"),J=u.t("ds_layout:topbanner.NavAriaLabel"),_=u.t("ds_layout:topbannerbutton.Menu"),de=u.t("ds_layout:topbanner.Search"),d=u.t("ds_layout:topbanner.SkipLinkText"),r={onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},p={name:"With Ref (FA1)",args:{ref:n=>{n!=null&&n.current&&(n.current.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},g={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id","htmlId"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},k={name:"With Defaults (A3 delvis, B1, B2, Search B3 delvis)",args:{...r},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("banner");t(e.tagName).toBe("HEADER");const i=a.getByRole("link",{name:d});t(i).toBeInTheDocument(),await t(a.getByText(_)).toBeInTheDocument(),await t(a.queryByText(ve)).not.toBeInTheDocument(),await t(a.queryByText(ye)).not.toBeInTheDocument();const m=a.queryByRole("button",{name:de});await t(m).not.toBeInTheDocument()}},h={name:"With Children (A2)",args:{...r,children:s.jsx(ke,{label:"Søk",placeholder:"Søk",hideLabel:!0})},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{const e=o(n).getByText("Søk");t(e).toBeInTheDocument()}},v={name:"SkipLink Focused On Mobile Screen (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},y={name:"SkipLink Focused On Breakpoint-xs (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},b={name:"SkipLink Focused On Breakpoint-s (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},B={name:"SkipLink Focused On Breakpoint-m (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},w={name:"SkipLink Focused On Breakpoint-l (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-l"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},f={name:"Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)",args:{...r,firstColumn:s.jsx(j,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:_});await t(e).toHaveAttribute("aria-expanded","false");const i=o(e).getByRole("img",{hidden:!0});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("aria-hidden","true"),await c.click(e),await t(e).toHaveAttribute("aria-expanded","true");const m=a.getByRole("navigation",{name:J});await t(m).toBeInTheDocument(),await t(m.tagName).toBe("NAV"),await t(m).toHaveAttribute("aria-label",J),await c.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await t(m).not.toBeInTheDocument()}},q=n=>s.jsxs(s.Fragment,{children:[s.jsx(D,{...n}),s.jsx(V,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"})})]}),C={render:q,name:"With One Column (A5, MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},x={render:q,name:"With One Column Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},S={render:q,name:"With One Column Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},X=n=>s.jsxs(s.Fragment,{children:[s.jsx(D,{...n}),s.jsx(V,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"})})]}),T={render:X,name:"With Two Columns (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},N={render:X,name:"With Two Columns Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},A={render:X,name:"With Two Columns Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},z=n=>s.jsxs(s.Fragment,{children:[s.jsx(D,{...n}),s.jsx(V,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Third column with pink background"})})]}),F={render:z,name:"With Three Columns (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},L={render:z,name:"With Three Columns Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},M={render:z,name:"With Three Columns Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},P={name:"Click LanguagePicker Open And Close (LanguagePicker C2)",parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Bokmål Meny"});await t(e).toHaveAttribute("aria-expanded","false"),await c.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await t(a.getByText("Sámegiella")).toBeInTheDocument(),await c.keyboard("[Escape]"),await t(e).toHaveAttribute("aria-expanded","false"),await t(a.queryByText("Sámegiella")).not.toBeInTheDocument()}},E={name:"Extra Languages in LanguagePicker and custom defaultLocale ",args:{defaultLocale:"de",additionalLanguages:[{displayName:"Suomi",lang:"fi",flag:he},{displayName:"Dansk",lang:"da",flag:l},{displayName:"Svenska",lang:"sv",flag:l},{displayName:"íslenska",lang:"is",flag:l},{displayName:"Deutsch",lang:"de",flag:l},{displayName:"Español",lang:"es",flag:l},{displayName:"Français",lang:"fr",flag:l},{displayName:"Italiano",lang:"it",flag:l},{displayName:"Português",lang:"pt",flag:l},{displayName:"Nederlands",lang:"nl",flag:l},{displayName:"Ελληνικά",lang:"el",flag:l},{displayName:"中文",lang:"zh",flag:l},{displayName:"日本語",lang:"ja",flag:l},{displayName:"한국어",lang:"ko",flag:l},{displayName:"العربية",lang:"ar",flag:l},{displayName:"हिन्दी",lang:"hi",flag:l},{displayName:"Türkçe",lang:"tr",flag:l},{displayName:"Polski",lang:"pl",flag:l},{displayName:"עברית",lang:"he",flag:l}]},argTypes:{additionalLanguages:{table:{disable:!1}},defaultLocale:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Deutsch Meny"});await c.click(e);const i=a.getByRole("button",{name:"Suomi"});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("lang","fi");const m=a.getByRole("button",{name:"Italiano"});await t(m).toBeInTheDocument(),await t(m).toHaveAttribute("lang","it");const U=a.getByRole("button",{name:"Svenska"});await t(U).toBeInTheDocument(),await t(U).toHaveAttribute("lang","sv"),await c.click(i),await t(a.getByRole("button",{name:"Suomi Meny"})).toBeInTheDocument()}},R={name:"Click Search Open And Close (Search B2, B1, B3, A2, A1)",args:{...r,searchContent:"hei hei",firstColumn:s.jsx(j,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{click:["xpath=//span[text()='Søk']"]}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:de});await t(e).toHaveAttribute("aria-expanded","false");const i=o(e).getByRole("img",{hidden:!0});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("aria-hidden","true"),await c.click(e),await t(e).toHaveAttribute("aria-expanded","true");const m=a.getByRole("searchbox");await t(m).toHaveFocus(),await t(a.getByText("hei hei")).toBeInTheDocument(),await c.click(e),await t(e).toHaveAttribute("aria-expanded","false")}},W={name:"LangPicker In Menu When Logged In OnMobile ",args:{...r,searchContent:"hei hei",firstColumn:s.jsx(j,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"}),user:{role:"meg"}},parameters:{imageSnapshot:{disable:!0},viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:n})=>{const a=o(n),e=a.queryByRole("button",{name:"Bokmål Meny"});await t(e).not.toBeInTheDocument();const i=a.getByRole("button",{name:_});await c.click(i),await t(a.getByRole("button",{name:"Bokmål Meny"})).toBeInTheDocument()}};var K,Q,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: TopBannerExternalHandle | null): void => {
      if (instance?.current) {
        instance.current.id = 'dummyIdForwardedFromRef';
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
} satisfies Story`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,nn,en;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(en=(nn=g.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,tn,sn;k.parameters={...k.parameters,docs:{...(an=k.parameters)==null?void 0:an.docs,source:{originalSource:`{
  name: 'With Defaults (A3 delvis, B1, B2, Search B3 delvis)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    expect(header.tagName).toBe('HEADER');
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    expect(skipLink).toBeInTheDocument();
    await expect(canvas.getByText(menuText)).toBeInTheDocument();
    await expect(canvas.queryByText(loginText)).not.toBeInTheDocument();
    await expect(canvas.queryByText(logoutText)).not.toBeInTheDocument();
    const searchButton = canvas.queryByRole('button', {
      name: searchText
    });
    await expect(searchButton).not.toBeInTheDocument();
  }
} satisfies Story`,...(sn=(tn=k.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var on,rn,ln;h.parameters={...h.parameters,docs:{...(on=h.parameters)==null?void 0:on.docs,source:{originalSource:`{
  name: 'With Children (A2)',
  args: {
    ...defaultArgs,
    children: <TextField label={'Søk'} placeholder={'Søk'} hideLabel />
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Søk');
    expect(label).toBeInTheDocument();
  }
} satisfies Story`,...(ln=(rn=h.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var cn,mn,un;v.parameters={...v.parameters,docs:{...(cn=v.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Mobile Screen (A3)',
  args: {
    ...defaultArgs
  },
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
} satisfies Story`,...(un=(mn=v.parameters)==null?void 0:mn.docs)==null?void 0:un.source}}};var dn,pn,gn;y.parameters={...y.parameters,docs:{...(dn=y.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-xs (A3)',
  args: {
    ...defaultArgs
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
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(gn=(pn=y.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var kn,hn,vn;b.parameters={...b.parameters,docs:{...(kn=b.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-s (A3)',
  args: {
    ...defaultArgs
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
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(vn=(hn=b.parameters)==null?void 0:hn.docs)==null?void 0:vn.source}}};var yn,bn,Bn;B.parameters={...B.parameters,docs:{...(yn=B.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-m (A3)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
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
} satisfies Story`,...(Bn=(bn=B.parameters)==null?void 0:bn.docs)==null?void 0:Bn.source}}};var wn,fn,Cn;w.parameters={...w.parameters,docs:{...(wn=w.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-l (A3)',
  args: {
    ...defaultArgs
  },
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
} satisfies Story`,...(Cn=(fn=w.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var xn,Sn,Tn;f.parameters={...f.parameters,docs:{...(xn=f.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  name: 'Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)',
  args: {
    ...defaultArgs,
    firstColumn: <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
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
    const menuButton = canvas.getByRole('button', {
      name: menuText
    });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    const menuSvg = within(menuButton).getByRole('img', {
      hidden: true
    });
    await expect(menuSvg).toBeInTheDocument();
    await expect(menuSvg).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContainer = canvas.getByRole('navigation', {
      name: themeText
    });
    await expect(menuContainer).toBeInTheDocument();
    await expect(menuContainer.tagName).toBe('NAV');
    await expect(menuContainer).toHaveAttribute('aria-label', themeText);
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuContainer).not.toBeInTheDocument();
  }
} satisfies Story`,...(Tn=(Sn=f.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};var Nn,An,Fn;C.parameters={...C.parameters,docs:{...(Nn=C.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  render: TemplateWithFooterOneColumn,
  name: 'With One Column (A5, MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Fn=(An=C.parameters)==null?void 0:An.docs)==null?void 0:Fn.source}}};var Ln,Mn,Pn;x.parameters={...x.parameters,docs:{...(Ln=x.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  render: TemplateWithFooterOneColumn,
  name: 'With One Column Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Pn=(Mn=x.parameters)==null?void 0:Mn.docs)==null?void 0:Pn.source}}};var En,Rn,Wn;S.parameters={...S.parameters,docs:{...(En=S.parameters)==null?void 0:En.docs,source:{originalSource:`{
  render: TemplateWithFooterOneColumn,
  name: 'With One Column Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Wn=(Rn=S.parameters)==null?void 0:Rn.docs)==null?void 0:Wn.source}}};var In,Dn,On;T.parameters={...T.parameters,docs:{...(In=T.parameters)==null?void 0:In.docs,source:{originalSource:`{
  render: TemplateWithFooterTwoColumns,
  name: 'With Two Columns (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>,
    secondColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(On=(Dn=T.parameters)==null?void 0:Dn.docs)==null?void 0:On.source}}};var Hn,jn,Vn;N.parameters={...N.parameters,docs:{...(Hn=N.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  render: TemplateWithFooterTwoColumns,
  name: 'With Two Columns Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>,
    secondColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Vn=(jn=N.parameters)==null?void 0:jn.docs)==null?void 0:Vn.source}}};var _n,qn,Xn;A.parameters={...A.parameters,docs:{...(_n=A.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  render: TemplateWithFooterTwoColumns,
  name: 'With Two Columns Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>,
    secondColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Xn=(qn=A.parameters)==null?void 0:qn.docs)==null?void 0:Xn.source}}};var zn,Un,$n;F.parameters={...F.parameters,docs:{...(zn=F.parameters)==null?void 0:zn.docs,source:{originalSource:`{
  render: TemplateWithFooterThreeColumns,
  name: 'With Three Columns (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>,
    secondColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>,
    thirdColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Third column with pink background'}
      </div>
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...($n=(Un=F.parameters)==null?void 0:Un.docs)==null?void 0:$n.source}}};var Gn,Jn,Kn;L.parameters={...L.parameters,docs:{...(Gn=L.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  render: TemplateWithFooterThreeColumns,
  name: 'With Three Columns Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>,
    secondColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>,
    thirdColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Third column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Kn=(Jn=L.parameters)==null?void 0:Jn.docs)==null?void 0:Kn.source}}};var Qn,Yn,Zn;M.parameters={...M.parameters,docs:{...(Qn=M.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
  render: TemplateWithFooterThreeColumns,
  name: 'With Three Columns Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>,
    secondColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Second column with pink background'}
      </div>,
    thirdColumn: <div className={'dummyClassNamePinkBackground'}>
        {'Third column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Zn=(Yn=M.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var ne,ee,ae;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Click LanguagePicker Open And Close (LanguagePicker C2)',
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const languageButton = canvas.getByRole('button', {
      name: 'Bokmål Meny'
    });
    await expect(languageButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(languageButton);
    await expect(languageButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('Sámegiella')).toBeInTheDocument();
    await userEvent.keyboard('[Escape]');
    await expect(languageButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('Sámegiella')).not.toBeInTheDocument();
  }
} satisfies Story`,...(ae=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Extra Languages in LanguagePicker and custom defaultLocale ',
  args: {
    defaultLocale: 'de',
    additionalLanguages: [{
      displayName: 'Suomi',
      lang: 'fi',
      flag: FlagFinland
    }, {
      displayName: 'Dansk',
      lang: 'da',
      flag: FlagPlaceholder
    }, {
      displayName: 'Svenska',
      lang: 'sv',
      flag: FlagPlaceholder
    }, {
      displayName: 'íslenska',
      lang: 'is',
      flag: FlagPlaceholder
    }, {
      displayName: 'Deutsch',
      lang: 'de',
      flag: FlagPlaceholder
    }, {
      displayName: 'Español',
      lang: 'es',
      flag: FlagPlaceholder
    }, {
      displayName: 'Français',
      lang: 'fr',
      flag: FlagPlaceholder
    }, {
      displayName: 'Italiano',
      lang: 'it',
      flag: FlagPlaceholder
    }, {
      displayName: 'Português',
      lang: 'pt',
      flag: FlagPlaceholder
    }, {
      displayName: 'Nederlands',
      lang: 'nl',
      flag: FlagPlaceholder
    }, {
      displayName: 'Ελληνικά',
      lang: 'el',
      flag: FlagPlaceholder
    }, {
      displayName: '中文',
      lang: 'zh',
      flag: FlagPlaceholder
    }, {
      displayName: '日本語',
      lang: 'ja',
      flag: FlagPlaceholder
    }, {
      displayName: '한국어',
      lang: 'ko',
      flag: FlagPlaceholder
    }, {
      displayName: 'العربية',
      lang: 'ar',
      flag: FlagPlaceholder
    }, {
      displayName: 'हिन्दी',
      lang: 'hi',
      flag: FlagPlaceholder
    }, {
      displayName: 'Türkçe',
      lang: 'tr',
      flag: FlagPlaceholder
    }, {
      displayName: 'Polski',
      lang: 'pl',
      flag: FlagPlaceholder
    }, {
      displayName: 'עברית',
      lang: 'he',
      flag: FlagPlaceholder
    }]
  },
  argTypes: {
    additionalLanguages: {
      table: {
        disable: false
      }
    },
    defaultLocale: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const languageButton = canvas.getByRole('button', {
      name: 'Deutsch Meny'
    });
    await userEvent.click(languageButton);
    const fin = canvas.getByRole('button', {
      name: 'Suomi'
    });
    await expect(fin).toBeInTheDocument();
    await expect(fin).toHaveAttribute('lang', 'fi');
    const it = canvas.getByRole('button', {
      name: 'Italiano'
    });
    await expect(it).toBeInTheDocument();
    await expect(it).toHaveAttribute('lang', 'it');
    const sv = canvas.getByRole('button', {
      name: 'Svenska'
    });
    await expect(sv).toBeInTheDocument();
    await expect(sv).toHaveAttribute('lang', 'sv');
    await userEvent.click(fin);
    await expect(canvas.getByRole('button', {
      name: 'Suomi Meny'
    })).toBeInTheDocument();
  }
} satisfies Story`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,re,le;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Click Search Open And Close (Search B2, B1, B3, A2, A1)',
  args: {
    ...defaultArgs,
    searchContent: 'hei hei',
    firstColumn: <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
  },
  parameters: {
    // imageSnapshot: { disable: true },
    imageSnapshot: {
      click: [\`xpath=//span[text()='Søk']\`]
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchButton = canvas.getByRole('button', {
      name: searchText
    });
    await expect(searchButton).toHaveAttribute('aria-expanded', 'false');
    const searchSvg = within(searchButton).getByRole('img', {
      hidden: true
    });
    await expect(searchSvg).toBeInTheDocument();
    await expect(searchSvg).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(searchButton);
    await expect(searchButton).toHaveAttribute('aria-expanded', 'true');
    const searchField = canvas.getByRole('searchbox');
    await expect(searchField).toHaveFocus();
    await expect(canvas.getByText('hei hei')).toBeInTheDocument();
    await userEvent.click(searchButton);
    await expect(searchButton).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...(le=(re=R.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,me,ue;W.parameters={...W.parameters,docs:{...(ce=W.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'LangPicker In Menu When Logged In OnMobile ',
  args: {
    ...defaultArgs,
    searchContent: 'hei hei',
    firstColumn: <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>,
    user: {
      role: 'meg'
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    viewport: {
      defaultViewport: '--mobile'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const languageButton = canvas.queryByRole('button', {
      name: 'Bokmål Meny'
    });
    await expect(languageButton).not.toBeInTheDocument();
    const menuButton = canvas.getByRole('button', {
      name: menuText
    });
    await userEvent.click(menuButton);
    await expect(canvas.getByRole('button', {
      name: 'Bokmål Meny'
    })).toBeInTheDocument();
  }
} satisfies Story`,...(ue=(me=W.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Ue=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointXS","SkipLinkFocusedBreakpointS","SkipLinkFocusedBreakpointM","SkipLinkFocusedBreakpointL","ClickMainMenuOpenAndClose","WithOneColumn","WithOneColumnBreakpointS","WithOneColumnBreakpointXS","WithTwoColumns","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointXS","WithThreeColumns","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointXS","ClickLangPickerOpenAndClose","WithExtraLangs","ClickSearchOpenAndClose","LangPickerInMenuWhenLoggedInOnMobile"];export{P as ClickLangPickerOpenAndClose,f as ClickMainMenuOpenAndClose,R as ClickSearchOpenAndClose,W as LangPickerInMenuWhenLoggedInOnMobile,w as SkipLinkFocusedBreakpointL,B as SkipLinkFocusedBreakpointM,b as SkipLinkFocusedBreakpointS,y as SkipLinkFocusedBreakpointXS,v as SkipLinkFocusedMobileScreen,g as WithAttributes,h as WithChildren,k as WithDefaults,E as WithExtraLangs,C as WithOneColumn,x as WithOneColumnBreakpointS,S as WithOneColumnBreakpointXS,p as WithRef,F as WithThreeColumns,L as WithThreeColumnsBreakpointS,M as WithThreeColumnsBreakpointXS,T as WithTwoColumns,N as WithTwoColumnsBreakpointS,A as WithTwoColumnsBreakpointXS,Ue as __namedExportsOrder,ze as default};
//# sourceMappingURL=TopBannerExternal.test.stories-CVsMTPx7.js.map
