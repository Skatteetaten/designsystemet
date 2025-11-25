import{j as t}from"./jsx-runtime-BYYWji4R.js";import{w as o,e as s,u as c}from"./index-DIxTUSTt.js";import{b as te}from"./index-CEFmy_Ic.js";import{d}from"./index-BYKicpQW.js";import"./index-DEJUArlV.js";import{T as R,F as O}from"./index-VZVp1ZWa.js";import{c as se}from"./custom-logo-BrHcv9Ci.js";import{r as W}from"./index-ClcD9ViR.js";import{s as oe}from"./ske-logo-BWJ74hw_.js";import{T as ie}from"./DatePickerCalendar-HH4LMRzz.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./Help-CJ8w0Npo.js";import"./LabelWithHelp-D9yud6GC.js";import"./index-7bHEsQL_.js";import"./index-Cs0ivlf6.js";import"./TopBannerButton-C_mTCJEu.js";import"./TopBannerLangPicker-A5eTa0P2.js";import"./TopBannerLangPickerButton-DVjpbIe0.js";import"./TopBannerLogo-CVMRMD-e.js";import"./TopBannerSkipLink-Drm7zQs5.js";import"./TopBannerUserButton-BYwrn7_j.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";import"./_commonjsHelpers-Cpj98o6Y.js";var X,q;function D(){return D=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var l in e)({}).hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},D.apply(null,arguments)}var re=function(a){return W.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 11"},a),X||(X=W.createElement("path",{fill:"#fff",d:"M0 0h18v11H0z"})),q||(q=W.createElement("path",{stroke:"#002F6C",strokeWidth:3,d:"M0 5.5h18M6.5 0v11"})))};function I(){return I=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var l in e)({}).hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},I.apply(null,arguments)}var i=function(a){return W.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",id:"Flag_placeholder_svg__placeholder",width:24,height:16},a))};const Re={component:R,title:"Tester/TopBanner/TopBannerExternal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},showSami:{table:{disable:!0}},defaultLocale:{table:{disable:!0}},children:{control:"text",table:{disable:!0}},skipLink:{table:{disable:!0}},logo:{table:{disable:!0},control:"select",options:["",se,oe]},user:{table:{disable:!0}},firstColumn:{control:"text",table:{disable:!0}},secondColumn:{control:"text",table:{disable:!0}},thirdColumn:{control:"text",table:{disable:!0}},additionalLanguages:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}},onLogInClick:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onUserClick:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},le=d.t("ds_layout:topbannerbutton.Login"),ce=d.t("ds_layout:topbannerbutton.Logout"),z=d.t("ds_layout:topbanner.NavAriaLabel"),ae=d.t("ds_layout:topbannerbutton.Menu"),u=d.t("ds_layout:topbanner.SkipLinkText"),r={onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},p={name:"With Ref (FA1)",args:{ref:n=>{n!=null&&n.current&&(n.current.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await s(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},g={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await s(e).toHaveClass("dummyClassname"),await s(e).toHaveAttribute("id","htmlId"),await s(e).toHaveAttribute("lang","nb"),await s(e).toHaveAttribute("data-testid","123ID")}},k={name:"With Defaults (A3 delvis, B1, B2)",args:{...r},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("banner");s(e.tagName).toBe("HEADER");const l=a.getByRole("link",{name:u});s(l).toBeInTheDocument(),await s(a.getByText(ae)).toBeInTheDocument(),await s(a.queryByText(le)).not.toBeInTheDocument(),await s(a.queryByText(ce)).not.toBeInTheDocument()}},v={name:"With Children (A2)",args:{...r,children:t.jsx(ie,{label:"Søk",placeholder:"Søk",hideLabel:!0})},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{const e=o(n).getByText("Søk");s(e).toBeInTheDocument()}},h={name:"SkipLink Focused On Mobile Screen (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:u}).focus()}},y={name:"SkipLink Focused On Breakpoint-xs (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:u}).focus()}},b={name:"SkipLink Focused On Breakpoint-s (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:u}).focus()}},B={name:"SkipLink Focused On Breakpoint-m (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:u}).focus()}},w={name:"SkipLink Focused On Breakpoint-l (A3)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-l"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:u}).focus()}},f={name:"Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)",args:{...r,firstColumn:t.jsx(te,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:ae});await s(e).toHaveAttribute("aria-expanded","false");const l=a.getAllByRole("img",{hidden:!0});s(l[3]).toBeInTheDocument(),s(l[3]).toHaveAttribute("aria-hidden","true"),await c.click(e),await s(e).toHaveAttribute("aria-expanded","true");const m=a.getByRole("navigation",{name:z});await s(m).toBeInTheDocument(),s(m.tagName).toBe("NAV"),s(m).toHaveAttribute("aria-label",z),await c.click(e),await s(e).toHaveAttribute("aria-expanded","false"),await s(m).not.toBeInTheDocument()}},j=n=>t.jsxs(t.Fragment,{children:[t.jsx(R,{...n}),t.jsx(O,{titleFirstColumn:"Om Skatteetaten",firstColumn:t.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"})})]}),C={render:j,name:"With One Column (A5, MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},x={render:j,name:"With One Column Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},S={render:j,name:"With One Column Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},H=n=>t.jsxs(t.Fragment,{children:[t.jsx(R,{...n}),t.jsx(O,{titleFirstColumn:"Om Skatteetaten",firstColumn:t.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"})})]}),N={render:H,name:"With Two Columns (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},T={render:H,name:"With Two Columns Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},A={render:H,name:"With Two Columns Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},V=n=>t.jsxs(t.Fragment,{children:[t.jsx(R,{...n}),t.jsx(O,{titleFirstColumn:"Om Skatteetaten",firstColumn:t.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"}),thirdColumn:t.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Third column with pink background"})})]}),F={render:V,name:"With Three Columns (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},L={render:V,name:"With Three Columns Breakpoint-s (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},P={render:V,name:"With Three Columns Breakpoint-xs (MainMenu A1)",args:{...r,firstColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:t.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},M={name:"Click LanguagePicker Open And Close (LanguagePicker C2)",parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Bokmål Meny"});await s(e).toHaveAttribute("aria-expanded","false"),await c.click(e),await s(e).toHaveAttribute("aria-expanded","true"),await s(a.getByText("Sámegiella")).toBeInTheDocument(),await c.keyboard("[Escape]"),await s(e).toHaveAttribute("aria-expanded","false"),await s(a.queryByText("Sámegiella")).not.toBeInTheDocument()}},E={name:"Extra Languages in LanguagePicker and custom defaultLocale ",args:{defaultLocale:"de",additionalLanguages:[{displayName:"Suomi",lang:"fi",flag:re},{displayName:"Dansk",lang:"da",flag:i},{displayName:"Svenska",lang:"sv",flag:i},{displayName:"íslenska",lang:"is",flag:i},{displayName:"Deutsch",lang:"de",flag:i},{displayName:"Español",lang:"es",flag:i},{displayName:"Français",lang:"fr",flag:i},{displayName:"Italiano",lang:"it",flag:i},{displayName:"Português",lang:"pt",flag:i},{displayName:"Nederlands",lang:"nl",flag:i},{displayName:"Ελληνικά",lang:"el",flag:i},{displayName:"中文",lang:"zh",flag:i},{displayName:"日本語",lang:"ja",flag:i},{displayName:"한국어",lang:"ko",flag:i},{displayName:"العربية",lang:"ar",flag:i},{displayName:"हिन्दी",lang:"hi",flag:i},{displayName:"Türkçe",lang:"tr",flag:i},{displayName:"Polski",lang:"pl",flag:i},{displayName:"עברית",lang:"he",flag:i}]},argTypes:{additionalLanguages:{table:{disable:!1}},defaultLocale:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Deutsch Meny"});await c.click(e);const l=a.getByRole("button",{name:"Suomi"});await s(l).toBeInTheDocument(),await s(l).toHaveAttribute("lang","fi");const m=a.getByRole("button",{name:"Italiano"});await s(m).toBeInTheDocument(),await s(m).toHaveAttribute("lang","it");const _=a.getByRole("button",{name:"Svenska"});await s(_).toBeInTheDocument(),await s(_).toHaveAttribute("lang","sv"),await c.click(l),await s(a.getByRole("button",{name:"Suomi Meny"})).toBeInTheDocument()}};var U,$,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,nn;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With Defaults (A3 delvis, B1, B2)',
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
  }
} satisfies Story`,...(nn=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var en,an,tn;v.parameters={...v.parameters,docs:{...(en=v.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
} satisfies Story`,...(tn=(an=v.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var sn,on,rn;h.parameters={...h.parameters,docs:{...(sn=h.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
} satisfies Story`,...(rn=(on=h.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var ln,cn,mn;y.parameters={...y.parameters,docs:{...(ln=y.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
} satisfies Story`,...(mn=(cn=y.parameters)==null?void 0:cn.docs)==null?void 0:mn.source}}};var un,dn,pn;b.parameters={...b.parameters,docs:{...(un=b.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
} satisfies Story`,...(pn=(dn=b.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var gn,kn,vn;B.parameters={...B.parameters,docs:{...(gn=B.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
} satisfies Story`,...(vn=(kn=B.parameters)==null?void 0:kn.docs)==null?void 0:vn.source}}};var hn,yn,bn;w.parameters={...w.parameters,docs:{...(hn=w.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
} satisfies Story`,...(bn=(yn=w.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var Bn,wn,fn;f.parameters={...f.parameters,docs:{...(Bn=f.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
    const menuSvg = canvas.getAllByRole('img', {
      hidden: true
    });
    expect(menuSvg[3]).toBeInTheDocument();
    expect(menuSvg[3]).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContainer = canvas.getByRole('navigation', {
      name: themeText
    });
    await expect(menuContainer).toBeInTheDocument();
    expect(menuContainer.tagName).toBe('NAV');
    expect(menuContainer).toHaveAttribute('aria-label', themeText);
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuContainer).not.toBeInTheDocument();
  }
} satisfies Story`,...(fn=(wn=f.parameters)==null?void 0:wn.docs)==null?void 0:fn.source}}};var Cn,xn,Sn;C.parameters={...C.parameters,docs:{...(Cn=C.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Sn=(xn=C.parameters)==null?void 0:xn.docs)==null?void 0:Sn.source}}};var Nn,Tn,An;x.parameters={...x.parameters,docs:{...(Nn=x.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
} satisfies Story`,...(An=(Tn=x.parameters)==null?void 0:Tn.docs)==null?void 0:An.source}}};var Fn,Ln,Pn;S.parameters={...S.parameters,docs:{...(Fn=S.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pn=(Ln=S.parameters)==null?void 0:Ln.docs)==null?void 0:Pn.source}}};var Mn,En,Wn;N.parameters={...N.parameters,docs:{...(Mn=N.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Wn=(En=N.parameters)==null?void 0:En.docs)==null?void 0:Wn.source}}};var Rn,Dn,In;T.parameters={...T.parameters,docs:{...(Rn=T.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
} satisfies Story`,...(In=(Dn=T.parameters)==null?void 0:Dn.docs)==null?void 0:In.source}}};var On,jn,Hn;A.parameters={...A.parameters,docs:{...(On=A.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
} satisfies Story`,...(Hn=(jn=A.parameters)==null?void 0:jn.docs)==null?void 0:Hn.source}}};var Vn,_n,Xn;F.parameters={...F.parameters,docs:{...(Vn=F.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xn=(_n=F.parameters)==null?void 0:_n.docs)==null?void 0:Xn.source}}};var qn,zn,Un;L.parameters={...L.parameters,docs:{...(qn=L.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Un=(zn=L.parameters)==null?void 0:zn.docs)==null?void 0:Un.source}}};var $n,Gn,Jn;P.parameters={...P.parameters,docs:{...($n=P.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
} satisfies Story`,...(Jn=(Gn=P.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Kn,Qn,Yn;M.parameters={...M.parameters,docs:{...(Kn=M.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Yn=(Qn=M.parameters)==null?void 0:Qn.docs)==null?void 0:Yn.source}}};var Zn,ne,ee;E.parameters={...E.parameters,docs:{...(Zn=E.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ee.source}}};const De=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointXS","SkipLinkFocusedBreakpointS","SkipLinkFocusedBreakpointM","SkipLinkFocusedBreakpointL","ClickMainMenuOpenAndClose","WithOneColumn","WithOneColumnBreakpointS","WithOneColumnBreakpointXS","WithTwoColumns","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointXS","WithThreeColumns","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointXS","ClickLangPickerOpenAndClose","WithExtraLangs"];export{M as ClickLangPickerOpenAndClose,f as ClickMainMenuOpenAndClose,w as SkipLinkFocusedBreakpointL,B as SkipLinkFocusedBreakpointM,b as SkipLinkFocusedBreakpointS,y as SkipLinkFocusedBreakpointXS,h as SkipLinkFocusedMobileScreen,g as WithAttributes,v as WithChildren,k as WithDefaults,E as WithExtraLangs,C as WithOneColumn,x as WithOneColumnBreakpointS,S as WithOneColumnBreakpointXS,p as WithRef,F as WithThreeColumns,L as WithThreeColumnsBreakpointS,P as WithThreeColumnsBreakpointXS,N as WithTwoColumns,T as WithTwoColumnsBreakpointS,A as WithTwoColumnsBreakpointXS,De as __namedExportsOrder,Re as default};
//# sourceMappingURL=TopBannerExternal.test.stories-DAahj91W.js.map
