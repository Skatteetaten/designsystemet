import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{w as o,e as t,u as c}from"./index-DIxTUSTt.js";import{b as ie}from"./index-eDVrZHQi.js";import{d as u}from"./index-ChzTQA-a.js";import"./index-DzkGBFys.js";import{T as D,F as O}from"./index-DyriRbJa.js";import{c as ce}from"./custom-logo-BLbAWs8x.js";import{r as W}from"./index-D_ouKaeX.js";import{s as me}from"./ske-logo-BSCI4sWT.js";import{T as ue}from"./DatePickerCalendar-j9g8dyRt.js";import"./index-CdwPxLML.js";import"./index-CPecIRii.js";import"./Help-DpeK2zjo.js";import"./LabelWithHelp-IJvVpsNu.js";import"./index-DsfABT8I.js";import"./index-UoIuQY3B.js";import"./index-Bm-dj5jB.js";import"./TopBannerButton-0jIvVBn9.js";import"./TopBannerLangPicker-Dx4oc0U9.js";import"./TopBannerLangPickerButton-B5uH1qxT.js";import"./TopBannerLogo-BXuDjKJZ.js";import"./TopBannerSkipLink-CqJlQyOT.js";import"./TopBannerUserButton-C9FIE6r6.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";import"./_commonjsHelpers-BosuxZz1.js";var X,z;function I(){return I=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},I.apply(null,arguments)}var de=function(a){return W.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 11"},a),X||(X=W.createElement("path",{fill:"#fff",d:"M0 0h18v11H0z"})),z||(z=W.createElement("path",{stroke:"#002F6C",strokeWidth:3,d:"M0 5.5h18M6.5 0v11"})))};function H(){return H=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},H.apply(null,arguments)}var r=function(a){return W.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",id:"Flag_placeholder_svg__placeholder",width:24,height:16},a))};const Ve={component:D,title:"Tester/TopBanner/TopBannerExternal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},showSami:{table:{disable:!0}},defaultLocale:{table:{disable:!0}},children:{control:"text",table:{disable:!0}},skipLink:{table:{disable:!0}},logo:{table:{disable:!0},control:"select",options:["",ce,me]},user:{table:{disable:!0}},firstColumn:{control:"text",table:{disable:!0}},secondColumn:{control:"text",table:{disable:!0}},thirdColumn:{control:"text",table:{disable:!0}},additionalLanguages:{table:{disable:!0}},searchContent:{control:"text",table:{disable:!0}},onSearchClick:{table:{disable:!0}},onSearch:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}},onLogInClick:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onUserClick:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},pe=u.t("ds_layout:topbannerbutton.Login"),ge=u.t("ds_layout:topbannerbutton.Logout"),U=u.t("ds_layout:topbanner.NavAriaLabel"),re=u.t("ds_layout:topbannerbutton.Menu"),le=u.t("ds_layout:topbanner.Search"),d=u.t("ds_layout:topbanner.SkipLinkText"),l={onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},p={name:"With Ref (FA1)",args:{ref:n=>{n!=null&&n.current&&(n.current.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},g={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id","htmlId"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},k={name:"With Defaults (A3 delvis, B1, B2, Search B3 delvis)",args:{...l},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("banner");t(e.tagName).toBe("HEADER");const i=a.getByRole("link",{name:d});t(i).toBeInTheDocument(),await t(a.getByText(re)).toBeInTheDocument(),await t(a.queryByText(pe)).not.toBeInTheDocument(),await t(a.queryByText(ge)).not.toBeInTheDocument();const m=a.queryByRole("button",{name:le});await t(m).not.toBeInTheDocument()}},h={name:"With Children (A2)",args:{...l,children:s.jsx(ue,{label:"Søk",placeholder:"Søk",hideLabel:!0})},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{const e=o(n).getByText("Søk");t(e).toBeInTheDocument()}},v={name:"SkipLink Focused On Mobile Screen (A3)",args:{...l},parameters:{viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},y={name:"SkipLink Focused On Breakpoint-xs (A3)",args:{...l},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},b={name:"SkipLink Focused On Breakpoint-s (A3)",args:{...l},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},B={name:"SkipLink Focused On Breakpoint-m (A3)",args:{...l},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},w={name:"SkipLink Focused On Breakpoint-l (A3)",args:{...l},parameters:{viewport:{defaultViewport:"--breakpoint-l"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:d}).focus()}},f={name:"Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)",args:{...l,firstColumn:s.jsx(ie,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:re});await t(e).toHaveAttribute("aria-expanded","false");const i=o(e).getByRole("img",{hidden:!0});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("aria-hidden","true"),await c.click(e),await t(e).toHaveAttribute("aria-expanded","true");const m=a.getByRole("navigation",{name:U});await t(m).toBeInTheDocument(),await t(m.tagName).toBe("NAV"),await t(m).toHaveAttribute("aria-label",U),await c.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await t(m).not.toBeInTheDocument()}},j=n=>s.jsxs(s.Fragment,{children:[s.jsx(D,{...n}),s.jsx(O,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"})})]}),C={render:j,name:"With One Column (A5, MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},x={render:j,name:"With One Column Breakpoint-s (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},S={render:j,name:"With One Column Breakpoint-xs (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},V=n=>s.jsxs(s.Fragment,{children:[s.jsx(D,{...n}),s.jsx(O,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"})})]}),T={render:V,name:"With Two Columns (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},N={render:V,name:"With Two Columns Breakpoint-s (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},A={render:V,name:"With Two Columns Breakpoint-xs (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},_=n=>s.jsxs(s.Fragment,{children:[s.jsx(D,{...n}),s.jsx(O,{titleFirstColumn:"Om Skatteetaten",firstColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Third column with pink background"})})]}),F={render:_,name:"With Three Columns (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},L={render:_,name:"With Three Columns Breakpoint-s (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},P={render:_,name:"With Three Columns Breakpoint-xs (MainMenu A1)",args:{...l,firstColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:s.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await c.click(e)}},M={name:"Click LanguagePicker Open And Close (LanguagePicker C2)",parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Bokmål Meny"});await t(e).toHaveAttribute("aria-expanded","false"),await c.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await t(a.getByText("Sámegiella")).toBeInTheDocument(),await c.keyboard("[Escape]"),await t(e).toHaveAttribute("aria-expanded","false"),await t(a.queryByText("Sámegiella")).not.toBeInTheDocument()}},E={name:"Extra Languages in LanguagePicker and custom defaultLocale ",args:{defaultLocale:"de",additionalLanguages:[{displayName:"Suomi",lang:"fi",flag:de},{displayName:"Dansk",lang:"da",flag:r},{displayName:"Svenska",lang:"sv",flag:r},{displayName:"íslenska",lang:"is",flag:r},{displayName:"Deutsch",lang:"de",flag:r},{displayName:"Español",lang:"es",flag:r},{displayName:"Français",lang:"fr",flag:r},{displayName:"Italiano",lang:"it",flag:r},{displayName:"Português",lang:"pt",flag:r},{displayName:"Nederlands",lang:"nl",flag:r},{displayName:"Ελληνικά",lang:"el",flag:r},{displayName:"中文",lang:"zh",flag:r},{displayName:"日本語",lang:"ja",flag:r},{displayName:"한국어",lang:"ko",flag:r},{displayName:"العربية",lang:"ar",flag:r},{displayName:"हिन्दी",lang:"hi",flag:r},{displayName:"Türkçe",lang:"tr",flag:r},{displayName:"Polski",lang:"pl",flag:r},{displayName:"עברית",lang:"he",flag:r}]},argTypes:{additionalLanguages:{table:{disable:!1}},defaultLocale:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:"Deutsch Meny"});await c.click(e);const i=a.getByRole("button",{name:"Suomi"});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("lang","fi");const m=a.getByRole("button",{name:"Italiano"});await t(m).toBeInTheDocument(),await t(m).toHaveAttribute("lang","it");const q=a.getByRole("button",{name:"Svenska"});await t(q).toBeInTheDocument(),await t(q).toHaveAttribute("lang","sv"),await c.click(i),await t(a.getByRole("button",{name:"Suomi Meny"})).toBeInTheDocument()}},R={name:"Click Search Open And Close (Search B2, B1, B3, A2, A1)",args:{...l,searchContent:"hei hei",firstColumn:s.jsx(ie,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{click:["xpath=//span[text()='Søk']"]}},play:async({canvasElement:n})=>{const a=o(n),e=a.getByRole("button",{name:le});await t(e).toHaveAttribute("aria-expanded","false");const i=o(e).getByRole("img",{hidden:!0});await t(i).toBeInTheDocument(),await t(i).toHaveAttribute("aria-hidden","true"),await c.click(e),await t(e).toHaveAttribute("aria-expanded","true");const m=a.getByRole("searchbox");await t(m).toHaveFocus(),await t(a.getByText("hei hei")).toBeInTheDocument(),await c.click(e),await t(e).toHaveAttribute("aria-expanded","false")}};var $,G,J;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,nn,en;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(en=(nn=k.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,tn,sn;h.parameters={...h.parameters,docs:{...(an=h.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
} satisfies Story`,...(sn=(tn=h.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var on,rn,ln;v.parameters={...v.parameters,docs:{...(on=v.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
} satisfies Story`,...(ln=(rn=v.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var cn,mn,un;y.parameters={...y.parameters,docs:{...(cn=y.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
} satisfies Story`,...(un=(mn=y.parameters)==null?void 0:mn.docs)==null?void 0:un.source}}};var dn,pn,gn;b.parameters={...b.parameters,docs:{...(dn=b.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
} satisfies Story`,...(gn=(pn=b.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var kn,hn,vn;B.parameters={...B.parameters,docs:{...(kn=B.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
} satisfies Story`,...(vn=(hn=B.parameters)==null?void 0:hn.docs)==null?void 0:vn.source}}};var yn,bn,Bn;w.parameters={...w.parameters,docs:{...(yn=w.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Bn=(bn=w.parameters)==null?void 0:bn.docs)==null?void 0:Bn.source}}};var wn,fn,Cn;f.parameters={...f.parameters,docs:{...(wn=f.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Cn=(fn=f.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var xn,Sn,Tn;C.parameters={...C.parameters,docs:{...(xn=C.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Tn=(Sn=C.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};var Nn,An,Fn;x.parameters={...x.parameters,docs:{...(Nn=x.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fn=(An=x.parameters)==null?void 0:An.docs)==null?void 0:Fn.source}}};var Ln,Pn,Mn;S.parameters={...S.parameters,docs:{...(Ln=S.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
} satisfies Story`,...(Mn=(Pn=S.parameters)==null?void 0:Pn.docs)==null?void 0:Mn.source}}};var En,Rn,Wn;T.parameters={...T.parameters,docs:{...(En=T.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
} satisfies Story`,...(Wn=(Rn=T.parameters)==null?void 0:Rn.docs)==null?void 0:Wn.source}}};var Dn,In,Hn;N.parameters={...N.parameters,docs:{...(Dn=N.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Hn=(In=N.parameters)==null?void 0:In.docs)==null?void 0:Hn.source}}};var On,jn,Vn;A.parameters={...A.parameters,docs:{...(On=A.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
} satisfies Story`,...(Vn=(jn=A.parameters)==null?void 0:jn.docs)==null?void 0:Vn.source}}};var _n,qn,Xn;F.parameters={...F.parameters,docs:{...(_n=F.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xn=(qn=F.parameters)==null?void 0:qn.docs)==null?void 0:Xn.source}}};var zn,Un,$n;L.parameters={...L.parameters,docs:{...(zn=L.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
} satisfies Story`,...($n=(Un=L.parameters)==null?void 0:Un.docs)==null?void 0:$n.source}}};var Gn,Jn,Kn;P.parameters={...P.parameters,docs:{...(Gn=P.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Kn=(Jn=P.parameters)==null?void 0:Jn.docs)==null?void 0:Kn.source}}};var Qn,Yn,Zn;M.parameters={...M.parameters,docs:{...(Qn=M.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Zn=(Yn=M.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var ne,ee,ae;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,oe;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=R.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const _e=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointXS","SkipLinkFocusedBreakpointS","SkipLinkFocusedBreakpointM","SkipLinkFocusedBreakpointL","ClickMainMenuOpenAndClose","WithOneColumn","WithOneColumnBreakpointS","WithOneColumnBreakpointXS","WithTwoColumns","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointXS","WithThreeColumns","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointXS","ClickLangPickerOpenAndClose","WithExtraLangs","ClickSearchOpenAndClose"];export{M as ClickLangPickerOpenAndClose,f as ClickMainMenuOpenAndClose,R as ClickSearchOpenAndClose,w as SkipLinkFocusedBreakpointL,B as SkipLinkFocusedBreakpointM,b as SkipLinkFocusedBreakpointS,y as SkipLinkFocusedBreakpointXS,v as SkipLinkFocusedMobileScreen,g as WithAttributes,h as WithChildren,k as WithDefaults,E as WithExtraLangs,C as WithOneColumn,x as WithOneColumnBreakpointS,S as WithOneColumnBreakpointXS,p as WithRef,F as WithThreeColumns,L as WithThreeColumnsBreakpointS,P as WithThreeColumnsBreakpointXS,T as WithTwoColumns,N as WithTwoColumnsBreakpointS,A as WithTwoColumnsBreakpointXS,_e as __namedExportsOrder,Ve as default};
//# sourceMappingURL=TopBannerExternal.test.stories-D6HkGU3n.js.map
