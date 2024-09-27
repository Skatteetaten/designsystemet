import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{b as zn}from"./index-yuNN44a_.js";import{d as l}from"./index-CI44Z2h3.js";import"./index-iIx-nC6Z.js";import{T as E,F as P}from"./index-DWDUoFhM.js";import{w as o,e as s,u as r}from"./index-hUG6DWTw.js";import{c as Gn}from"./custom-logo-BtdQ4zfZ.js";import{s as Jn}from"./ske-logo-DSQNLHUx.js";import{T as Kn}from"./DatePickerCalendar-DqZObTTf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./Help-BRrFw0Oq.js";import"./LabelWithHelp-ExQ5PDhB.js";import"./index-Cj6RUT7V.js";import"./index-Bl8CsqCQ.js";import"./TopBannerButton-Dm_n4ZEq.js";import"./TopBannerLangPicker-RXzljUs-.js";import"./TopBannerLangPickerButton-BGGnf2nn.js";import"./TopBannerLogo-SeQx6Evt.js";import"./TopBannerSkipLink-C9H3pXbq.js";import"./TopBannerUserButton-SwxIvqpi.js";const we={component:E,title:"Tester/TopBanner/TopBannerExternal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},showSami:{table:{disable:!0}},defaultLocale:{table:{disable:!0}},children:{control:"text",table:{disable:!0}},skipLink:{table:{disable:!0}},logo:{table:{disable:!0},control:"select",options:["",Gn,Jn]},user:{table:{disable:!0}},firstColumn:{control:"text",table:{disable:!0}},secondColumn:{control:"text",table:{disable:!0}},thirdColumn:{control:"text",table:{disable:!0}},onLanguageClick:{table:{disable:!0}},onLogInClick:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onUserClick:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},Qn=l.t("ds_layout:topbannerbutton.Login"),Yn=l.t("ds_layout:topbannerbutton.Logout"),j=l.t("ds_layout:topbanner.NavAriaLabel"),Un=l.t("ds_layout:topbannerbutton.Menu"),c=l.t("ds_layout:topbanner.SkipLinkText"),i={onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},d={name:"With Ref (FA1)",args:{ref:n=>{n!=null&&n.current&&(n.current.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await s(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=o(n).getByRole("banner");await s(e).toHaveClass("dummyClassname"),await s(e).toHaveAttribute("id","htmlId"),await s(e).toHaveAttribute("lang","nb"),await s(e).toHaveAttribute("data-testid","123ID")}},k={name:"With Defaults (A3 delvis, B1, B2)",args:{...i},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("banner");s(e.tagName).toBe("HEADER"),s(e.firstChild).toHaveAttribute("href");const m=t.getByText(c);s(m).toBeInTheDocument(),await s(t.getByText(Un)).toBeInTheDocument(),await s(t.queryByText(Qn)).not.toBeInTheDocument(),await s(t.queryByText(Yn)).not.toBeInTheDocument()}},g={name:"With Children (A2)",args:{...i,children:a.jsx(Kn,{label:"Søk",placeholder:"Søk",hideLabel:!0})},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{const e=o(n).getByText("Søk");s(e).toBeInTheDocument()}},v={name:"SkipLink Focused On Mobile Screen (A3)",args:{...i},parameters:{viewport:{defaultViewport:"--mobile"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:c}).focus()}},h={name:"SkipLink Focused On Breakpoint-xs (A3)",args:{...i},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:c}).focus()}},y={name:"SkipLink Focused On Breakpoint-s (A3)",args:{...i},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:c}).focus()}},b={name:"SkipLink Focused On Breakpoint-m (A3)",args:{...i},parameters:{viewport:{defaultViewport:"--breakpoint-m"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:c}).focus()}},B={name:"SkipLink Focused On Breakpoint-l (A3)",args:{...i},parameters:{viewport:{defaultViewport:"--breakpoint-l"}},play:async({canvasElement:n})=>{o(n).getByRole("link",{name:c}).focus()}},w={name:"Click MainMenu Open And Close (MainMenu A1, A2 delvis, B1, B2, B3)",args:{...i,firstColumn:a.jsx(zn,{href:"#storybook-root",children:"Meny-knapp blir synlig når den har innhold"})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("button",{name:Un});await s(e).toHaveAttribute("aria-expanded","false");const m=t.getAllByRole("img",{hidden:!0});s(m[3]).toBeInTheDocument(),s(m[3]).toHaveAttribute("aria-hidden","true"),await r.click(e),await s(e).toHaveAttribute("aria-expanded","true");const u=t.getByRole("navigation",{name:j});await s(u).toBeInTheDocument(),s(u.tagName).toBe("NAV"),s(u).toHaveAttribute("aria-label",j),await r.click(e),await s(e).toHaveAttribute("aria-expanded","false"),await s(u).not.toBeInTheDocument()}},W=n=>a.jsxs(a.Fragment,{children:[a.jsx(E,{...n}),a.jsx(P,{titleFirstColumn:"Om Skatteetaten",firstColumn:a.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"})})]}),C={render:W,name:"With One Column (A5, MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},f={render:W,name:"With One Column Breakpoint-s (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},x={render:W,name:"With One Column Breakpoint-xs (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},R=n=>a.jsxs(a.Fragment,{children:[a.jsx(E,{...n}),a.jsx(P,{titleFirstColumn:"Om Skatteetaten",firstColumn:a.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"})})]}),S={render:R,name:"With Two Columns (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},T={render:R,name:"With Two Columns Breakpoint-s (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},A={render:R,name:"With Two Columns Breakpoint-xs (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},O=n=>a.jsxs(a.Fragment,{children:[a.jsx(E,{...n}),a.jsx(P,{titleFirstColumn:"Om Skatteetaten",firstColumn:a.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Second column with pink background"}),thirdColumn:a.jsx("div",{className:"dummyClassNameDarkPinkBackground",children:"Third column with pink background"})})]}),N={render:O,name:"With Three Columns (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},M={render:O,name:"With Three Columns Breakpoint-s (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-s"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},F={render:O,name:"With Three Columns Breakpoint-xs (MainMenu A1)",args:{...i,firstColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"First column with pink background"}),secondColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Second column with pink background"}),thirdColumn:a.jsx("div",{className:"dummyClassNamePinkBackground",children:"Third column with pink background"})},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("button",{name:"Meny"});await r.click(e)}},L={name:"Click LanguagePicker Open And Close (LanguagePicker C2)",parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("button",{name:"Bokmål Meny"});await s(e).toHaveAttribute("aria-expanded","false"),await r.click(e),await s(e).toHaveAttribute("aria-expanded","true"),await s(t.getByText("Sámegiella")).toBeInTheDocument(),await r.keyboard("[Escape]"),await s(e).toHaveAttribute("aria-expanded","false"),await s(t.queryByText("Sámegiella")).not.toBeInTheDocument()}};var D,I,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(I=d.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var V,X,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(X=p.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var q,U,z;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    expect(header.firstChild).toHaveAttribute('href');
    const skipLink = canvas.getByText(skipLinkText);
    expect(skipLink).toBeInTheDocument();
    await expect(canvas.getByText(menuText)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvas.queryByText(loginText)).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    await expect(canvas.queryByText(logoutText)).not.toBeInTheDocument();
  }
} satisfies Story`,...(z=(U=k.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,nn,en;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(en=(nn=h.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,tn,sn;y.parameters={...y.parameters,docs:{...(an=y.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
} satisfies Story`,...(sn=(tn=y.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var on,rn,cn;b.parameters={...b.parameters,docs:{...(on=b.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
} satisfies Story`,...(cn=(rn=b.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var ln,mn,un;B.parameters={...B.parameters,docs:{...(ln=B.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
} satisfies Story`,...(un=(mn=B.parameters)==null?void 0:mn.docs)==null?void 0:un.source}}};var dn,pn,kn;w.parameters={...w.parameters,docs:{...(dn=w.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
} satisfies Story`,...(kn=(pn=w.parameters)==null?void 0:pn.docs)==null?void 0:kn.source}}};var gn,vn,hn;C.parameters={...C.parameters,docs:{...(gn=C.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
} satisfies Story`,...(hn=(vn=C.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var yn,bn,Bn;f.parameters={...f.parameters,docs:{...(yn=f.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Bn=(bn=f.parameters)==null?void 0:bn.docs)==null?void 0:Bn.source}}};var wn,Cn,fn;x.parameters={...x.parameters,docs:{...(wn=x.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
} satisfies Story`,...(fn=(Cn=x.parameters)==null?void 0:Cn.docs)==null?void 0:fn.source}}};var xn,Sn,Tn;S.parameters={...S.parameters,docs:{...(xn=S.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Tn=(Sn=S.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};var An,Nn,Mn;T.parameters={...T.parameters,docs:{...(An=T.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
} satisfies Story`,...(Mn=(Nn=T.parameters)==null?void 0:Nn.docs)==null?void 0:Mn.source}}};var Fn,Ln,En;A.parameters={...A.parameters,docs:{...(Fn=A.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
} satisfies Story`,...(En=(Ln=A.parameters)==null?void 0:Ln.docs)==null?void 0:En.source}}};var Pn,Wn,Rn;N.parameters={...N.parameters,docs:{...(Pn=N.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
} satisfies Story`,...(Rn=(Wn=N.parameters)==null?void 0:Wn.docs)==null?void 0:Rn.source}}};var On,jn,Dn;M.parameters={...M.parameters,docs:{...(On=M.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
} satisfies Story`,...(Dn=(jn=M.parameters)==null?void 0:jn.docs)==null?void 0:Dn.source}}};var In,Hn,Vn;F.parameters={...F.parameters,docs:{...(In=F.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
} satisfies Story`,...(Vn=(Hn=F.parameters)==null?void 0:Hn.docs)==null?void 0:Vn.source}}};var Xn,_n,qn;L.parameters={...L.parameters,docs:{...(Xn=L.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
} satisfies Story`,...(qn=(_n=L.parameters)==null?void 0:_n.docs)==null?void 0:qn.source}}};const Ce=["WithRef","WithAttributes","WithDefaults","WithChildren","SkipLinkFocusedMobileScreen","SkipLinkFocusedBreakpointXS","SkipLinkFocusedBreakpointS","SkipLinkFocusedBreakpointM","SkipLinkFocusedBreakpointL","ClickMainMenuOpenAndClose","WithOneColumn","WithOneColumnBreakpointS","WithOneColumnBreakpointXS","WithTwoColumns","WithTwoColumnsBreakpointS","WithTwoColumnsBreakpointXS","WithThreeColumns","WithThreeColumnsBreakpointS","WithThreeColumnsBreakpointXS","ClickLangPickerOpenAndClose"];export{L as ClickLangPickerOpenAndClose,w as ClickMainMenuOpenAndClose,B as SkipLinkFocusedBreakpointL,b as SkipLinkFocusedBreakpointM,y as SkipLinkFocusedBreakpointS,h as SkipLinkFocusedBreakpointXS,v as SkipLinkFocusedMobileScreen,p as WithAttributes,g as WithChildren,k as WithDefaults,C as WithOneColumn,f as WithOneColumnBreakpointS,x as WithOneColumnBreakpointXS,d as WithRef,N as WithThreeColumns,M as WithThreeColumnsBreakpointS,F as WithThreeColumnsBreakpointXS,S as WithTwoColumns,T as WithTwoColumnsBreakpointS,A as WithTwoColumnsBreakpointXS,Ce as __namedExportsOrder,we as default};
//# sourceMappingURL=TopBannerExternal.test.stories-DE5W4jce.js.map
