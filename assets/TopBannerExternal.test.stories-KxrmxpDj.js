import{r as O,j as s,d as m}from"./iframe-Cq9sN_Dz.js";import{b as D}from"./index-5qJDb17Q.js";import"./index-DRFs0UrV.js";import{T as j,F as q}from"./index-CppI7WyL.js";import{c as ve}from"./custom-logo-C0y9DkJi.js";import{s as ye}from"./ske-logo-D-hFR7Y7.js";import{T as be}from"./DatePickerCalendar-DQrt2Pnq.js";var $,G;function H(){return H=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},H.apply(null,arguments)}var Be=function(a){return O.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 11"},a),$||($=O.createElement("path",{fill:"#fff",d:"M0 0h18v11H0z"})),G||(G=O.createElement("path",{stroke:"#002F6C",strokeWidth:3,d:"M0 5.5h18M6.5 0v11"})))};function _(){return _=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},_.apply(null,arguments)}var c=function(a){return O.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",id:"Flag_placeholder_svg__placeholder",width:24,height:16},a))};const{expect:t,userEvent:l,within:o}=__STORYBOOK_MODULE_TEST__,we={component:j,title:"Tester/TopBanner/TopBannerExternal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},showSami:{table:{disable:!0}},defaultLocale:{table:{disable:!0}},children:{control:"text",table:{disable:!0}},skipLink:{table:{disable:!0}},logo:{table:{disable:!0},control:"select",options:["",ve,ye]},user:{table:{disable:!0}},firstColumn:{control:"text",table:{disable:!0}},secondColumn:{control:"text",table:{disable:!0}},thirdColumn:{control:"text",table:{disable:!0}},additionalLanguages:{table:{disable:!0}},searchContent:{control:"text",table:{disable:!0}},onSearchClick:{table:{disable:!0}},onSearch:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}},onLogInClick:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onUserClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},layout:"fullscreen"}},fe=m.t("ds_layout:topbannerbutton.Login"),Ce=m.t("ds_layout:topbannerbutton.Logout"),J=m.t("ds_layout:topbanner.NavAriaLabel"),X=m.t("ds_layout:topbannerbutton.Menu"),z=m.t("ds_layout:topbanner.Search"),d=m.t("ds_layout:topbanner.SkipLinkText"),r={onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},p={name:"With Ref (FA1)",args:{ref:n=>{n!=null&&n.current&&(n.current.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},g={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id","htmlId"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},k={name:"With Defaults (A3 delvis, B1, B2, Search B3 delvis)",args:{...r},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("banner");t(e.tagName).toBe("HEADER");const i=a.getByRole("link",{name:d});t(i).toBeInTheDocument(),await t(a.getByText(X)).toBeInTheDocument(),await t(a.queryByText(fe)).not.toBeInTheDocument(),await t(a.queryByText(Ce)).not.toBeInTheDocument();const u=a.queryByRole("button",{name:z});await t(u).not.toBeInTheDocument()}},h={name:"With Children (A2)",args:{...r,children:s.jsx(be,{label:"Søk",placeholder:"Søk",hideLabel:!0})},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-m"}},play:async({canvasElement:n})=>{const e=o(n).getByText("Søk");t(e).toBeInTheDocument()}},v={name:"SkipLink Focused On Mobile Screen (A3)",args:{...r},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},y={name:"SkipLink Focused On Breakpoint-xs (A3)",args:{...r},globals:{viewport:{value:"--breakpoint-xs"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},b={name:"SkipLink Focused On Breakpoint-s (A3)",args:{...r},globals:{viewport:{value:"--breakpoint-s"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},B={name:"SkipLink Focused On Breakpoint-m (A3)",args:{...r},globals:{viewport:{value:"--breakpoint-m"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},w={name:"SkipLink Focused On Breakpoint-l (A3)",args:{...r},globals:{viewport:{value:"--breakpoint-l"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},f={name:"Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)",args:{...r,firstColumn:s.jsx(D,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:X});await t(e).toHaveAttribute("aria-expanded","false");const i=o(e).getByRole("img",{hidden:!0});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("aria-hidden","true"),await l.click(e),await t(e).toHaveAttribute("aria-expanded","true");const u=a.getByRole("navigation",{name:J});await t(u).toBeInTheDocument(),await t(u.tagName).toBe("NAV"),await t(u).toHaveAttribute("aria-label",J),await l.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await t(u).not.toBeInTheDocument()}},U=n=>s.jsxs(s.Fragment,{children:[s.jsx(j,{...n}),s.jsx(q,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"})})]}),C={render:U,name:"With One Column (A5, MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},S={render:U,name:"With One Column Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},globals:{viewport:{value:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},x={render:U,name:"With One Column Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},globals:{viewport:{value:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},V=n=>s.jsxs(s.Fragment,{children:[s.jsx(j,{...n}),s.jsx(q,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"})})]}),T={render:V,name:"With Two Columns (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},N={render:V,name:"With Two Columns Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},globals:{viewport:{value:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},A={render:V,name:"With Two Columns Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},globals:{viewport:{value:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},K=n=>s.jsxs(s.Fragment,{children:[s.jsx(j,{...n}),s.jsx(q,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Third column with pink background"})})]}),F={render:K,name:"With Three Columns (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},L={render:K,name:"With Three Columns Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},globals:{viewport:{value:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},P={render:K,name:"With Three Columns Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},globals:{viewport:{value:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await l.click(e)}},M={name:"Click LanguagePicker Open And Close (LanguagePicker C2)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Bokmål Meny"});await t(e).toHaveAttribute("aria-expanded","false"),await l.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await t(a.getByText("Sámegiella")).toBeInTheDocument(),await l.keyboard("[Escape]"),await t(e).toHaveAttribute("aria-expanded","false"),await t(a.queryByText("Sámegiella")).not.toBeInTheDocument()}},E={name:"Extra Languages in LanguagePicker and custom defaultLocale ",args:{defaultLocale:"de",additionalLanguages:[{displayName:"Suomi",lang:"fi",flag:Be},{displayName:"Dansk",lang:"da",flag:c},{displayName:"Svenska",lang:"sv",flag:c},{displayName:"íslenska",lang:"is",flag:c},{displayName:"Deutsch",lang:"de",flag:c},{displayName:"Español",lang:"es",flag:c},{displayName:"Français",lang:"fr",flag:c},{displayName:"Italiano",lang:"it",flag:c},{displayName:"Português",lang:"pt",flag:c},{displayName:"Nederlands",lang:"nl",flag:c},{displayName:"Ελληνικά",lang:"el",flag:c},{displayName:"中文",lang:"zh",flag:c},{displayName:"日本語",lang:"ja",flag:c},{displayName:"한국어",lang:"ko",flag:c},{displayName:"العربية",lang:"ar",flag:c},{displayName:"हिन्दी",lang:"hi",flag:c},{displayName:"Türkçe",lang:"tr",flag:c},{displayName:"Polski",lang:"pl",flag:c},{displayName:"עברית",lang:"he",flag:c}]},argTypes:{additionalLanguages:{table:{disable:!1}},defaultLocale:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Deutsch Meny"});await l.click(e);const i=a.getByRole("button",{name:"Suomi"});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("lang","fi");const u=a.getByRole("button",{name:"Italiano"});await t(u).toBeInTheDocument(),await t(u).toHaveAttribute("lang","it");const Y=a.getByRole("button",{name:"Svenska"});await t(Y).toBeInTheDocument(),await t(Y).toHaveAttribute("lang","sv"),await l.click(i),await t(a.getByRole("button",{name:"Suomi Meny"})).toBeInTheDocument()}},R={name:"Click Search Open",args:{...r,searchContent:"hei hei",firstColumn:s.jsx(D,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:z});await l.click(e)}},W={name:"Click Search Open And Close (Search B2, B1, B3, A2, A1)",args:{...r,searchContent:"hei hei",firstColumn:s.jsx(D,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:z});await t(e).toHaveAttribute("aria-expanded","false");const i=o(e).getByRole("img",{hidden:!0});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("aria-hidden","true"),await l.click(e),await t(e).toHaveAttribute("aria-expanded","true");const u=a.getByRole("searchbox");await t(u).toHaveFocus(),await t(a.getByText("hei hei")).toBeInTheDocument(),await l.click(e),await t(e).toHaveAttribute("aria-expanded","false")}},I={name:"LangPicker In Menu When Logged In OnMobile ",args:{...r,searchContent:"hei hei",firstColumn:s.jsx(D,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"}),user:{role:"meg"}},parameters:{imageSnapshot:{disableSnapshot:!0}},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:n})=>{const a=o(n),e=a.queryByRole("button",{name:"Bokmål Meny"});await t(e).not.toBeInTheDocument();const i=a.getByRole("button",{name:X});await l.click(i),await t(a.getByRole("button",{name:"Bokmål Meny"})).toBeInTheDocument()}};var Q,Z,nn;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(nn=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var en,an,tn;g.parameters={...g.parameters,docs:{...(en=g.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
} satisfies Story`,...(tn=(an=g.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var sn,on,rn;k.parameters={...k.parameters,docs:{...(sn=k.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
} satisfies Story`,...(rn=(on=k.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var ln,cn,un;h.parameters={...h.parameters,docs:{...(ln=h.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Søk');
    expect(label).toBeInTheDocument();
  }
} satisfies Story`,...(un=(cn=h.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var mn,dn,pn;v.parameters={...v.parameters,docs:{...(mn=v.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Mobile Screen (A3)',
  args: {
    ...defaultArgs
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
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(pn=(dn=v.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var gn,kn,hn;y.parameters={...y.parameters,docs:{...(gn=y.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-xs (A3)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
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
} satisfies Story`,...(hn=(kn=y.parameters)==null?void 0:kn.docs)==null?void 0:hn.source}}};var vn,yn,bn;b.parameters={...b.parameters,docs:{...(vn=b.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-s (A3)',
  args: {
    ...defaultArgs
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
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(bn=(yn=b.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var Bn,wn,fn;B.parameters={...B.parameters,docs:{...(Bn=B.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-m (A3)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-m'
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
} satisfies Story`,...(fn=(wn=B.parameters)==null?void 0:wn.docs)==null?void 0:fn.source}}};var Cn,Sn,xn;w.parameters={...w.parameters,docs:{...(Cn=w.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  name: 'SkipLink Focused On Breakpoint-l (A3)',
  args: {
    ...defaultArgs
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
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText
    });
    skipLink.focus();
  }
} satisfies Story`,...(xn=(Sn=w.parameters)==null?void 0:Sn.docs)==null?void 0:xn.source}}};var Tn,Nn,An;f.parameters={...f.parameters,docs:{...(Tn=f.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
  name: 'Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)',
  args: {
    ...defaultArgs,
    firstColumn: <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
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
} satisfies Story`,...(An=(Nn=f.parameters)==null?void 0:Nn.docs)==null?void 0:An.source}}};var Fn,Ln,Pn;C.parameters={...C.parameters,docs:{...(Fn=C.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pn=(Ln=C.parameters)==null?void 0:Ln.docs)==null?void 0:Pn.source}}};var Mn,En,Rn;S.parameters={...S.parameters,docs:{...(Mn=S.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  render: TemplateWithFooterOneColumn,
  name: 'With One Column Breakpoint-s (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
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
    const menuButton = canvas.getByRole('button', {
      name: 'Meny'
    });
    await userEvent.click(menuButton);
  }
} satisfies Story`,...(Rn=(En=S.parameters)==null?void 0:En.docs)==null?void 0:Rn.source}}};var Wn,In,On;x.parameters={...x.parameters,docs:{...(Wn=x.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
  render: TemplateWithFooterOneColumn,
  name: 'With One Column Breakpoint-xs (MainMenu A1)',
  args: {
    ...defaultArgs,
    firstColumn: <div className={'dummyClassNamePinkBackground'}>
        {'First column with pink background'}
      </div>
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
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
} satisfies Story`,...(On=(In=x.parameters)==null?void 0:In.docs)==null?void 0:On.source}}};var Dn,jn,Hn;T.parameters={...T.parameters,docs:{...(Dn=T.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Hn=(jn=T.parameters)==null?void 0:jn.docs)==null?void 0:Hn.source}}};var _n,qn,Xn;N.parameters={...N.parameters,docs:{...(_n=N.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-s'
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
} satisfies Story`,...(Xn=(qn=N.parameters)==null?void 0:qn.docs)==null?void 0:Xn.source}}};var zn,Un,Vn;A.parameters={...A.parameters,docs:{...(zn=A.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
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
} satisfies Story`,...(Vn=(Un=A.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Kn,Yn,$n;F.parameters={...F.parameters,docs:{...(Kn=F.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
} satisfies Story`,...($n=(Yn=F.parameters)==null?void 0:Yn.docs)==null?void 0:$n.source}}};var Gn,Jn,Qn;L.parameters={...L.parameters,docs:{...(Gn=L.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-s'
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
} satisfies Story`,...(Qn=(Jn=L.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,ne,ee;P.parameters={...P.parameters,docs:{...(Zn=P.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
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
} satisfies Story`,...(ee=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ee.source}}};var ae,te,se;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Click LanguagePicker Open And Close (LanguagePicker C2)',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...(se=(te=M.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ie,re;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(re=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,ce,ue;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Click Search Open',
  args: {
    ...defaultArgs,
    searchContent: 'hei hei',
    firstColumn: <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchButton = canvas.getByRole('button', {
      name: searchText
    });
    await userEvent.click(searchButton);
  }
} satisfies Story`,...(ue=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,de,pe;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Click Search Open And Close (Search B2, B1, B3, A2, A1)',
  args: {
    ...defaultArgs,
    searchContent: 'hei hei',
    firstColumn: <Link href={'#storybook-root'}>
        {'Meny-knapp blir synlig når den har innhold'}
      </Link>
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
} satisfies Story`,...(pe=(de=W.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,ke,he;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
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
} satisfies Story`,...(he=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};const Se=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointXS","SkipLinkFocusedBreakpointS","SkipLinkFocusedBreakpointM","SkipLinkFocusedBreakpointL","ClickMainMenuOpenAndClose","WithOneColumn","WithOneColumnBreakpointS","WithOneColumnBreakpointXS","WithTwoColumns","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointXS","WithThreeColumns","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointXS","ClickLangPickerOpenAndClose","WithExtraLangs","ClickSearchOpen","ClickSearchOpenAndClose","LangPickerInMenuWhenLoggedInOnMobile"],Me=Object.freeze(Object.defineProperty({__proto__:null,ClickLangPickerOpenAndClose:M,ClickMainMenuOpenAndClose:f,ClickSearchOpen:R,ClickSearchOpenAndClose:W,LangPickerInMenuWhenLoggedInOnMobile:I,SkipLinkFocusedBreakpointL:w,SkipLinkFocusedBreakpointM:B,SkipLinkFocusedBreakpointS:b,SkipLinkFocusedBreakpointXS:y,SkipLinkFocusedMobileScreen:v,WithAttributes:g,WithChildren:h,WithDefaults:k,WithExtraLangs:E,WithOneColumn:C,WithOneColumnBreakpointS:S,WithOneColumnBreakpointXS:x,WithRef:p,WithThreeColumns:F,WithThreeColumnsBreakpointS:L,WithThreeColumnsBreakpointXS:P,WithTwoColumns:T,WithTwoColumnsBreakpointS:N,WithTwoColumnsBreakpointXS:A,__namedExportsOrder:Se,default:we},Symbol.toStringTag,{value:"Module"}));export{R as C,Me as T,we as m};
//# sourceMappingURL=TopBannerExternal.test.stories-KxrmxpDj.js.map
