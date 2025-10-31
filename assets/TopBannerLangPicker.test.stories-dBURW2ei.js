import{L as z,r as Y,j as G,d as J}from"./iframe-C2uFIQ6s.js";import{T as _}from"./TopBannerLangPicker-Dn6hwOPN.js";const{expect:t,userEvent:o,within:r}=__STORYBOOK_MODULE_TEST__,Q=n=>{const[e,a]=Y.useState("None");return G.jsx(_,{...n,openMenu:e,setOpenMenu:a})},V={component:_,title:"Tester/TopBanner/TopBannerLangPicker (intern)",render:Q,argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},defaultLocale:{table:{disable:!0}},showSami:{table:{disable:!0}},openMenu:{table:{disable:!0}},setOpenMenu:{table:{disable:!0}},menuButtonRef:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},y=J.t("ds_layout:topbannerbutton.Menu"),B="Bokmål",v="English",l={openMenu:"None",setOpenMenu:()=>{Function.prototype()}},c={name:"With Ref (FA1)",args:{...l,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=r(n).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes (FA2-5)",args:{...l,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const a=r(n).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (LanguagePicker A1, A2 delvis, A4, A7, B1, B2, B3)",args:{...l},argTypes:{},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button",{name:`${B} ${y}`});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await t(a).toHaveAttribute("aria-expanded","true");const s=e.getByRole("list");await t(s).toBeInTheDocument(),await t(s.tagName).toBe("UL");const i=e.getAllByRole("listitem");await t(i).toHaveLength(4);const w=e.getByRole("button",{name:B});await t(w).toHaveAttribute("lang","nb"),await t(w).toHaveAttribute("aria-current","true");const j=e.getByRole("button",{name:"Nynorsk"});await t(j).toHaveAttribute("lang","nn");const U=e.getByRole("button",{name:v});await t(U).toHaveAttribute("lang","en");const q=e.getByRole("button",{name:"Sámegiella"});await t(q).toHaveAttribute("lang","se");const K=document.querySelector("html");await t(K).toHaveAttribute("lang","nb")}},g={name:"Without Sami (LanguagePicker A2 delvis)",args:{...l,showSami:!1},argTypes:{showSami:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await o.click(a);const s=e.getAllByRole("listitem");await t(s).toHaveLength(3);for(const i of s)await t(i).not.toHaveAttribute("lang","se")}},d={name:"With Locale (LanguagePicker A7, A4, B2)",args:{...l,defaultLocale:z.Engelsk},argTypes:{defaultLocale:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button",{name:`${v} ${y}`});await t(a).toBeInTheDocument(),await o.click(a);const s=e.getByRole("button",{name:v});await t(s).toHaveAttribute("aria-current","true");const i=document.querySelector("html");await t(i).toHaveAttribute("lang","en")}},b={name:"Close Menu When Click On LangButton (LanguagePicker A4)",args:{...l},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button",{name:`${B} ${y}`});await t(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await t(a).toHaveAttribute("aria-expanded","true");const s=e.getByRole("button",{name:v});await o.click(s),await t(s).not.toBeInTheDocument();const i=e.getByRole("button",{name:`${v} ${y}`});await t(i).toHaveAttribute("aria-expanded","false")}},p={name:"Change focus when pressing arrow keys or tab (LanguagePicker C1)",args:{...l,openMenu:"Lang"},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await o.click(a);const s=e.getAllByRole("listitem");await o.keyboard("[ArrowDown]"),await t(s[0].firstChild).toHaveFocus(),await o.keyboard("[ArrowDown]"),await t(s[1].firstChild).toHaveFocus(),await o.keyboard("[Tab]"),await t(s[2].firstChild).toHaveFocus(),await o.keyboard("[ArrowUp]"),await t(s[1].firstChild).toHaveFocus()},parameters:{imageSnapshot:{disableSnapshot:!0}}};var h,f,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var k,x,H;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(H=(x=u.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var S,T,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Defaults (LanguagePicker A1, A2 delvis, A4, A7, B1, B2, B3)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${bokmalText} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(list.tagName).toBe('UL');
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(4);
    const bokmalButton = canvas.getByRole('button', {
      name: bokmalText
    });
    await expect(bokmalButton).toHaveAttribute('lang', 'nb');
    await expect(bokmalButton).toHaveAttribute('aria-current', 'true');
    const nynorskButton = canvas.getByRole('button', {
      name: 'Nynorsk'
    });
    await expect(nynorskButton).toHaveAttribute('lang', 'nn');
    const englishButton = canvas.getByRole('button', {
      name: englishText
    });
    await expect(englishButton).toHaveAttribute('lang', 'en');
    const samiskButton = canvas.getByRole('button', {
      name: 'Sámegiella'
    });
    await expect(samiskButton).toHaveAttribute('lang', 'se');
    const html = document.querySelector('html');
    await expect(html).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,E,I;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Without Sami (LanguagePicker A2 delvis)',
  args: {
    ...defaultArgs,
    showSami: false
  },
  argTypes: {
    showSami: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button');
    await userEvent.click(menuButton);
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(3);
    for (const item of listItems) {
      await expect(item).not.toHaveAttribute('lang', 'se');
    }
  }
} satisfies Story`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var C,D,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Locale (LanguagePicker A7, A4, B2)',
  args: {
    ...defaultArgs,
    defaultLocale: Languages.Engelsk
  },
  argTypes: {
    defaultLocale: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${englishText} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const englishButton = canvas.getByRole('button', {
      name: englishText
    });
    await expect(englishButton).toHaveAttribute('aria-current', 'true');
    const html = document.querySelector('html');
    await expect(html).toHaveAttribute('lang', 'en');
  }
} satisfies Story`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var W,F,M;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Close Menu When Click On LangButton (LanguagePicker A4)',
  args: {
    ...defaultArgs
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
    const menuButtonBokmal = canvas.getByRole('button', {
      name: \`\${bokmalText} \${menuText}\`
    });
    await expect(menuButtonBokmal).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menuButtonBokmal);
    await expect(menuButtonBokmal).toHaveAttribute('aria-expanded', 'true');
    const englishButton = canvas.getByRole('button', {
      name: englishText
    });
    await userEvent.click(englishButton);
    await expect(englishButton).not.toBeInTheDocument();
    const menuButtonEnglish = canvas.getByRole('button', {
      name: \`\${englishText} \${menuText}\`
    });
    await expect(menuButtonEnglish).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var $,N,O;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Change focus when pressing arrow keys or tab (LanguagePicker C1)',
  args: {
    ...defaultArgs,
    openMenu: 'Lang'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button');
    await userEvent.click(menuButton);
    const listItems = canvas.getAllByRole('listitem');
    await userEvent.keyboard('[ArrowDown]');
    await expect(listItems[0].firstChild).toHaveFocus();
    await userEvent.keyboard('[ArrowDown]');
    await expect(listItems[1].firstChild).toHaveFocus();
    await userEvent.keyboard('[Tab]');
    await expect(listItems[2].firstChild).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(listItems[1].firstChild).toHaveFocus();
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const X=["WithRef","WithAttributes","Defaults","WithoutSami","WithLocale","CloseMenuWhenClickOnLangButton","WithKeyboardNavigation"],et=Object.freeze(Object.defineProperty({__proto__:null,CloseMenuWhenClickOnLangButton:b,Defaults:m,WithAttributes:u,WithKeyboardNavigation:p,WithLocale:d,WithRef:c,WithoutSami:g,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{et as T};
//# sourceMappingURL=TopBannerLangPicker.test.stories-dBURW2ei.js.map
