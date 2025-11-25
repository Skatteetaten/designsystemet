import{j as z}from"./jsx-runtime-BYYWji4R.js";import{r as G}from"./index-ClcD9ViR.js";import{w as r,e as t,u as o}from"./index-DIxTUSTt.js";import{L as J,d as Q}from"./index-BYKicpQW.js";import{T as q}from"./TopBannerLangPicker-A5eTa0P2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C8q4C1To.js";import"./TopBannerButton-C_mTCJEu.js";import"./TopBannerLangPickerButton-DVjpbIe0.js";const V=n=>{const[e,a]=G.useState("None");return z.jsx(q,{...n,openMenu:e,setOpenMenu:a})},it={component:q,title:"Tester/TopBanner/TopBannerLangPicker (intern)",render:V,argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},defaultLocale:{table:{disable:!0}},showSami:{table:{disable:!0}},openMenu:{table:{disable:!0}},setOpenMenu:{table:{disable:!0}},menuButtonRef:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}}}},y=Q.t("ds_layout:topbannerbutton.Menu"),w="Bokmål",c="English",l={openMenu:"None",setOpenMenu:()=>{Function.prototype()}},u={name:"With Ref (FA1)",args:{...l,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=r(n).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{...l,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=r(n).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (LanguagePicker A1, A2 delvis, A4, A7, B1, B2, B3)",args:{...l},argTypes:{},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button",{name:`${w} ${y}`});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await t(a).toHaveAttribute("aria-expanded","true");const s=e.getByRole("list");await t(s).toBeInTheDocument(),await t(s.tagName).toBe("UL");const i=e.getAllByRole("listitem");await t(i).toHaveLength(4);const B=e.getByRole("button",{name:w});await t(B).toHaveAttribute("lang","nb"),await t(B).toHaveAttribute("aria-current","true");const U=e.getByRole("button",{name:"Nynorsk"});await t(U).toHaveAttribute("lang","nn");const j=e.getByRole("button",{name:c});await t(j).toHaveAttribute("lang","en");const _=e.getByRole("button",{name:"Sámegiella"});await t(_).toHaveAttribute("lang","se");const K=document.querySelector("html");await t(K).toHaveAttribute("lang","nb")}},g={name:"Without Sami (LanguagePicker A2 delvis)",args:{...l,showSami:!1},argTypes:{showSami:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await o.click(a);const s=e.getAllByRole("listitem");await t(s).toHaveLength(3);for(const i of s)await t(i).not.toHaveAttribute("lang","se")}},b={name:"With Locale (LanguagePicker A7, A4, B2)",args:{...l,defaultLocale:J.Engelsk},argTypes:{defaultLocale:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button",{name:`${c} ${y}`});await t(a).toBeInTheDocument(),await o.click(a);const s=e.getByRole("button",{name:c});await t(s).toHaveAttribute("aria-current","true");const i=document.querySelector("html");await t(i).toHaveAttribute("lang","en")}},p={name:"Close Menu When Click On LangButton (LanguagePicker A4)",args:{...l},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button",{name:`${w} ${y}`});await t(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await t(a).toHaveAttribute("aria-expanded","true");const s=e.getByRole("button",{name:c});await o.click(s),await t(s).not.toBeInTheDocument();const i=e.getByRole("button",{name:`${c} ${y}`});await t(i).toHaveAttribute("aria-expanded","false")}},v={name:"Change focus when pressing arrow keys or tab (LanguagePicker C1)",args:{...l,openMenu:"Lang"},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await o.click(a);const s=e.getAllByRole("listitem");await o.keyboard("[ArrowDown]"),await t(s[0].firstChild).toHaveFocus(),await o.keyboard("[ArrowDown]"),await t(s[1].firstChild).toHaveFocus(),await o.keyboard("[Tab]"),await t(s[2].firstChild).toHaveFocus(),await o.keyboard("[ArrowUp]"),await t(s[1].firstChild).toHaveFocus()},parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!0}}};var h,A,f;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(f=(A=u.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var k,x,H;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(x=m.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var R,T,L;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var S,E,I;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var C,W,D;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var F,P,M;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Close Menu When Click On LangButton (LanguagePicker A4)',
  args: {
    ...defaultArgs
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
} satisfies Story`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var $,N,O;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    HTMLSnapshot: {
      disable: true
    },
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(O=(N=v.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const rt=["WithRef","WithAttributes","Defaults","WithoutSami","WithLocale","CloseMenuWhenClickOnLangButton","WithKeyboardNavigation"];export{p as CloseMenuWhenClickOnLangButton,d as Defaults,m as WithAttributes,v as WithKeyboardNavigation,b as WithLocale,u as WithRef,g as WithoutSami,rt as __namedExportsOrder,it as default};
//# sourceMappingURL=TopBannerLangPicker.test.stories-BGQsK_EK.js.map
