import{L as H,r as T,j as S,d as E}from"./iframe-BQX7p2fO.js";import{T as A}from"./TopBannerLangPicker-hruyQxec.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-CisY89qL.js";import"./index-7aPZXNzx.js";import"./index-BX4RXkVG.js";import"./index-ZQJoFOIZ.js";import"./index-CR6dT-y4.js";import"./index-CsBqoXCA.js";import"./TopBannerButton-BuehTd8d.js";import"./TopBannerLangPickerButton-CsEDpxAj.js";const{expect:t,userEvent:o,within:i}=__STORYBOOK_MODULE_TEST__,I=n=>{const[e,a]=T.useState("None");return S.jsx(A,{...n,openMenu:e,setOpenMenu:a})},q={component:A,title:"Tester/TopBannerExternal/LangPicker (intern)",render:I,argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},defaultLocale:{table:{disable:!0}},showSami:{table:{disable:!0}},openMenu:{table:{disable:!0}},setOpenMenu:{table:{disable:!0}},menuButtonRef:{table:{disable:!0}},additionalLanguages:{table:{disable:!0}},otherLanguagesURL:{table:{disable:!0}},isInMobileMenu:{table:{disable:!0}},selectedLang:{table:{disable:!0}},onLanguageClick:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},y=E.t("ds_layout:topbannerbutton.Menu"),w="Bokmål",c="English",r={openMenu:"None",setOpenMenu:()=>{Function.prototype()}},u={name:"With Ref (FA1)",args:{...r,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},g={name:"Defaults (LanguagePicker A1, A2 delvis, A4, A7, B1, B2, B3)",args:{...r},argTypes:{},play:async({canvasElement:n})=>{const e=i(n),a=e.getByRole("button",{name:`${w} ${y}`});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await t(a).toHaveAttribute("aria-expanded","true");const s=e.getByRole("list");await t(s).toBeInTheDocument(),await t(s.tagName).toBe("UL");const l=e.getAllByRole("listitem");await t(l).toHaveLength(4);const B=e.getByRole("button",{name:w});await t(B).toHaveAttribute("lang","nb"),await t(B).toHaveAttribute("aria-current","true");const k=e.getByRole("button",{name:"Nynorsk"});await t(k).toHaveAttribute("lang","nn");const L=e.getByRole("button",{name:c});await t(L).toHaveAttribute("lang","en");const x=e.getByRole("button",{name:"Sámegiella"});await t(x).toHaveAttribute("lang","se");const R=document.querySelector("html");await t(R).toHaveAttribute("lang","nb")}},d={name:"Without Sami (LanguagePicker A2 delvis)",args:{...r,showSami:!1},argTypes:{showSami:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=i(n),a=e.getByRole("button");await o.click(a);const s=e.getAllByRole("listitem");await t(s).toHaveLength(3);for(const l of s)await t(l).not.toHaveAttribute("lang","se")}},b={name:"With Locale (LanguagePicker A7, A4, B2)",args:{...r,defaultLocale:H.Engelsk},argTypes:{defaultLocale:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=i(n),a=e.getByRole("button",{name:`${c} ${y}`});await t(a).toBeInTheDocument(),await o.click(a);const s=e.getByRole("button",{name:c});await t(s).toHaveAttribute("aria-current","true");const l=document.querySelector("html");await t(l).toHaveAttribute("lang","en")}},p={name:"Close Menu When Click On LangButton (LanguagePicker A4)",args:{...r},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=i(n),a=e.getByRole("button",{name:`${w} ${y}`});await t(a).toHaveAttribute("aria-expanded","false"),await o.click(a),await t(a).toHaveAttribute("aria-expanded","true");const s=e.getByRole("button",{name:c});await o.click(s),await t(s).not.toBeInTheDocument();const l=e.getByRole("button",{name:`${c} ${y}`});await t(l).toHaveAttribute("aria-expanded","false")}},v={name:"Change focus when pressing arrow keys or tab (LanguagePicker C1)",args:{...r,openMenu:"Lang"},play:async({canvasElement:n})=>{const e=i(n),a=e.getByRole("button");await o.click(a);const s=e.getAllByRole("listitem");await o.keyboard("[ArrowDown]"),await t(s[0].firstChild).toHaveFocus(),await o.keyboard("[ArrowDown]"),await t(s[1].firstChild).toHaveFocus(),await o.keyboard("[Tab]"),await t(s[2].firstChild).toHaveFocus(),await o.keyboard("[ArrowUp]"),await t(s[1].firstChild).toHaveFocus()},parameters:{chromatic:{disableSnapshot:!0}}},f="https://www.skatteetaten.no/person/utenlandsk/skal-du-arbeide-i-norge/film_no/",h={args:{...r,otherLanguagesURL:f},argTypes:{otherLanguagesURL:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=i(n),a=e.getByRole("button");await o.click(a);const s=e.getByRole("link");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("href",f)}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
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
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
    },
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
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Close Menu When Click On LangButton (LanguagePicker A4)',
  args: {
    ...defaultArgs
  },
  parameters: {
    chromatic: {
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
} satisfies Story`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    otherLanguagesURL
  },
  argTypes: {
    otherLanguagesURL: {
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
    const otherLanguagesLink = canvas.getByRole('link');
    await expect(otherLanguagesLink).toBeInTheDocument();
    await expect(otherLanguagesLink).toHaveAttribute('href', otherLanguagesURL);
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const j=["WithRef","WithAttributes","Defaults","WithoutSami","WithLocale","CloseMenuWhenClickOnLangButton","WithKeyboardNavigation","WithOtherLanguagesLink"];export{p as CloseMenuWhenClickOnLangButton,g as Defaults,m as WithAttributes,v as WithKeyboardNavigation,b as WithLocale,h as WithOtherLanguagesLink,u as WithRef,d as WithoutSami,j as __namedExportsOrder,q as default};
//# sourceMappingURL=TopBannerLangPicker.test.stories-BpY-x7D6.js.map
