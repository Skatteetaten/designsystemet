import{e as d,a as X,d as p,j as c,r as K}from"./iframe-VHQh6taY.js";import{S as u,s as Z}from"./index-lB78RBB2.js";import{w as Y}from"./storybook.testing.utils-BgHZnMzD.js";import{S as J}from"./icon.systems-pjRjKMCZ.js";const{fireEvent:ee,userEvent:i,waitFor:b,within:l,expect:t,fn:m}=__STORYBOOK_MODULE_TEST__,U=(e,s)=>async({canvasElement:a})=>{const o=l(a).getByRole("searchbox");await t(o).toBeInTheDocument(),await t(o).toHaveAttribute(e,s)},ae={component:u,title:"Tester/SearchField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(J),mapping:J},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},enableSRNavigationHint:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},accessKey:{table:{disable:!0,category:d.htmlAttribute}},autoComplete:{table:{disable:!0,category:d.htmlAttribute,defaultValue:{summary:X()}},type:"string"},disabled:{table:{disable:!0,category:d.htmlAttribute}},form:{table:{disable:!0,category:d.htmlAttribute}},name:{table:{disable:!0,category:d.htmlAttribute}},placeholder:{table:{disable:!0,category:d.htmlAttribute}},readOnly:{table:{disable:!0,category:d.htmlAttribute}},required:{table:{disable:!0,category:d.htmlAttribute}},value:{table:{disable:!0,category:d.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},h="skattekort",z="Hva leter du etter?",r={label:z},g={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("name","dummyNameForwardedFromRef")},y={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},G="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",v={name:"With Custom ClassNames and Long Label (FA3)",args:{...r,label:G,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=e.querySelector(`${Y} > div`),n=s.getByText(G),o=e.querySelector(`${Y} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(n).toHaveClass("dummyClassname"),await t(o).toHaveClass("dummyClassnameFormContainer")}},f={name:"With Long Label",args:{...r,label:G,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},A={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...r},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox",{name:`${z}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const n=s.getByRole("button",{name:p.t("ds_forms:searchfield.ButtonTitle")});await t(n).toBeInTheDocument(),await t(n).toBeEnabled(),await t(n.tagName).toBe("BUTTON");const o=p.t("ds_forms:searchfield.Focus");await t(await s.findByText(o)).toBeInTheDocument()}},Q=e=>c.jsxs(c.Fragment,{children:[c.jsx(u,{variant:"medium",...e}),c.jsx(u,{variant:"large",...e}),c.jsx(u,{variant:"extraLarge",...e})]}),x={name:"With Variants (A1b, A2)",args:{...r,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:Q},w={name:"With Variants Without Icon (A1b, A2)",render:Q,args:{...r,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},B={name:"With Variant Large And Long Text",args:{...r,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},T={name:"With Disabled",args:{...r,disabled:!0,value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getByRole("button");await t(a).toBeDisabled(),await t(n).toBeDisabled()}},S={name:"With Value",args:{...r,value:h},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("value",h)},k={name:"With DefaultValue",args:{...r,defaultValue:h},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("value",h)},C={name:"With Description (0b, B2)",args:{...r,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument();const n=s.getByRole("searchbox");await t(n).toHaveAttribute("aria-describedby");const o=n.getAttribute("aria-describedby");await t(o).toMatch(/descId-/)}},W={name:"With HelpText (0b, B2)",args:{...r,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{description:z});await t(a).toBeInTheDocument(),await ee.click(a)}},H={name:"With Name And Placeholder (A3, B3)",args:{...r,name:"test_name",placeholder:h},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",h)}},E={name:"With Custom Button Titles (A2, A5)",args:{...r,value:h,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=await s.findByText("clear test"),n=s.getByText("search test");await t(a).toBeInTheDocument(),await t(n).toBeInTheDocument()}},R={name:"With Custom Button Title Text (A2)",args:{...r,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("search test");await t(a).toBeInTheDocument()}},te=e=>{const[s,a]=K.useState("Tester events");return c.jsx(u,{...e,label:s,onFocus:n=>{a("Form-element har fått fokus"),e.onFocus?.(n)},onBlur:n=>{a("Form-element har blitt blurret"),e.onBlur?.(n)},onChange:n=>{a("Form-element har blitt klikket på"),e.onChange?.(n)},onClear:n=>{a("Reset har blitt klikket på"),e.onClear?.(n)},onSearchClick:n=>{a("Søk har blitt klikket på"),e.onSearchClick?.(n)},onSearch:n=>{a("Søk har blitt aktivert med enter"),e.onSearch?.(n)}})},L={render:te,name:"With EventHandlers (A7)",args:{...r,onFocus:m(),onBlur:m(),onSearchClick:m(),onSearch:m(),onChange:m(),onClear:m()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const a=l(s),n=a.getByRole("searchbox");n.focus(),await b(()=>t(e.onFocus).toHaveBeenCalled()),await i.type(n,"02.02.2002"),await b(()=>t(e.onChange).toHaveBeenCalled()),await i.tab(),await b(()=>t(e.onBlur).toHaveBeenCalled());const o=a.getByText(p.t("ds_forms:searchfield.ClearButtonTitle"));await i.click(o),await b(()=>t(e.onClear).toHaveBeenCalled());const $=a.getByRole("button",{name:p.t("ds_forms:searchfield.ButtonTitle")});await i.click($),await b(()=>t(e.onSearchClick).toHaveBeenCalled()),await i.type(n,"{enter}"),await b(()=>t(e.onSearch).toHaveBeenCalled())}},ne=e=>{const[s,a]=K.useState(""),n=K.useMemo(()=>[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],[]),o=K.useMemo(()=>Z(n,s),[s,n]);return c.jsx(u,{...e,results:o,onChange:$=>{a($.target.value)}})},F={name:"With ArrowKeyNavgitaion (C2)",render:ne,args:{...r,onResultClick:m()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const a=l(s);a.getByRole("searchbox").focus(),await i.keyboard("h"),await i.keyboard("[backspace]");const o=await a.findAllByRole("option");await i.keyboard("[ArrowDown]"),await t(o[0]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(o[1]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(o[2]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(o[1]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(o[0]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(o[4]).toHaveFocus(),await i.keyboard("[Enter]"),await b(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},D={name:"With Accesskey (B5)",args:{...r,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("accessKey","j")},I={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},se=e=>{const[s,a]=K.useState("søk");return c.jsxs(c.Fragment,{children:[c.jsx(u,{...e,value:s,onChange:n=>{a(n.target.value),e.onChange?.(n)}}),c.jsx("button",{onClick:()=>a(""),children:"reset"})]})},N={args:{...r,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByText(p.t("ds_forms:searchfield.ClearButtonTitle"));await t(a).toBeInTheDocument();const n=s.getByText("reset");await i.click(n),await b(()=>{t(s.queryByText(p.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:se},V={name:"With Required",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toBeRequired()}},j={name:"With Required And Mark",args:{...r,required:!0,hideLabel:!1,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},re="Søkefeltet er obligatorisk",q={name:"With ErrorMessage",args:{...r,errorMessage:re},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getAllByRole("generic")[3];await t(n).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},M={args:{...r,placeholder:"En lang placeholder som ikke skal synes bak reset-ikonet"},argTypes:{placeholder:{table:{disable:!1}}}},_={args:{...r,defaultValue:"En lang value som ikke skal synes bak reset-ikonet"},argTypes:{defaultValue:{table:{disable:!1}}}},oe=()=>c.jsxs("div",{className:"flex gapS",children:[c.jsx(u,{label:"Søk etter grønnsaker",hideLabel:!1}),c.jsx(u,{label:"Søk etter grønnsaker",helpText:"Hjelpetekst",hideLabel:!1})]}),P={render:oe},O={argTypes:{enableSRNavigationHint:{table:{disable:!1},control:"boolean"}},args:{...r,enableSRNavigationHint:!1},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const s=l(e),a=p.t("ds_forms:searchfield.Focus");await t(s.queryByText(a)).not.toBeInTheDocument()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyNameForwardedFromRef';
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
  play: verifyAttribute('name', 'dummyNameForwardedFromRef')
} satisfies Story`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    hideLabel: false,
    form: '123form'
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
    },
    form: {
      table: {
        disable: false
      }
    },
    autoComplete: {
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
    const searchbox = canvas.getByRole('searchbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(searchbox).toHaveAttribute('id', 'htmlid-input');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(searchbox).toHaveAttribute('data-testid', '123ID');
    await expect(searchbox).toHaveAttribute('form', '123form');
    await expect(searchbox).toHaveAttribute('autocomplete', 'off');
  }
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames and Long Label (FA3)',
  args: {
    ...defaultArgs,
    label: longLabelText,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      searchContainer: 'dummyClassnameFormContainer'
    },
    hideLabel: false
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const label = canvas.getByText(longLabelText);
    const searchContainer = canvasElement.querySelector(\`\${wrapper} > div > div\`);
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(searchContainer).toHaveClass('dummyClassnameFormContainer');
  }
} satisfies Story`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Long Label',
  args: {
    ...defaultArgs,
    label: longLabelText,
    description: 'Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?',
    helpText: 'hjelpetekst',
    hideLabel: false
  },
  argTypes: {
    label: {
      table: {
        disable: false
      }
    },
    hideLabel: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Defaults Variant Medium (A1a, A2, A3, B1, B4)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    label: {
      table: {
        disable: false
      }
    },
    helpText: {
      table: {
        disable: false
      }
    },
    description: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox', {
      name: \`\${defaultLabelText}\`
    });
    await expect(searchbox).toBeInTheDocument();
    await expect(searchbox).toBeEnabled();
    await expect(searchbox).toHaveAttribute('id');
    await expect(searchbox.tagName).toBe('INPUT');
    await expect(searchbox).not.toBeRequired();
    const searchButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:searchfield.ButtonTitle')
    });
    await expect(searchButton).toBeInTheDocument();
    await expect(searchButton).toBeEnabled();
    await expect(searchButton.tagName).toBe('BUTTON');
    const sRtexst = dsI18n.t('ds_forms:searchfield.Focus');
    await expect(await canvas.findByText(sRtexst)).toBeInTheDocument();
  }
} satisfies Story`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Variants (A1b, A2)',
  args: {
    ...defaultArgs,
    hideLabel: false
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  render: AllVariantsTemplate
} satisfies Story`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Variants Without Icon (A1b, A2)',
  render: AllVariantsTemplate,
  args: {
    ...defaultArgs,
    hasSearchButtonIcon: false
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Large And Long Text',
  args: {
    ...defaultArgs,
    variant: 'large',
    value: 'En lang tekst som ikke skal synes bak reset-ikonet'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    value: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'En lang tekst som ikke skal synes bak reset-ikonet'
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('searchbox');
    const searchButton = canvas.getByRole('button');
    await expect(textbox).toBeDisabled();
    await expect(searchButton).toBeDisabled();
  }
} satisfies Story`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    ...defaultArgs,
    value: valueText
  },
  argTypes: {
    value: {
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
  play: verifyAttribute('value', valueText)
} satisfies Story`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With DefaultValue',
  args: {
    ...defaultArgs,
    defaultValue: valueText
  },
  argTypes: {
    defaultValue: {
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
  play: verifyAttribute('value', valueText)
} satisfies Story`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With Description (0b, B2)',
  args: {
    ...defaultArgs,
    description: 'En liten beskrivelse tekst',
    hideLabel: false
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
    const searchbox = canvas.getByRole('searchbox');
    await expect(searchbox).toHaveAttribute('aria-describedby');
    const describedbyValue = searchbox.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With HelpText (0b, B2)',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false
  },
  argTypes: {
    helpText: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLabelText
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  }
} satisfies Story`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With Name And Placeholder (A3, B3)',
  args: {
    ...defaultArgs,
    name: 'test_name',
    placeholder: valueText
  },
  argTypes: {
    name: {
      table: {
        disable: false
      }
    },
    placeholder: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    await expect(searchbox).toHaveAttribute('name', 'test_name');
    await expect(searchbox).toHaveAttribute('placeholder', valueText);
  }
} satisfies Story`,...H.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Button Titles (A2, A5)',
  args: {
    ...defaultArgs,
    value: valueText,
    clearButtonTitle: 'clear test',
    searchButtonTitle: 'search test'
  },
  argTypes: {
    readOnly: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const clearButton = await canvas.findByText('clear test');
    const searchButton = canvas.getByText('search test');
    await expect(clearButton).toBeInTheDocument();
    await expect(searchButton).toBeInTheDocument();
  }
} satisfies Story`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Button Title Text (A2)',
  args: {
    ...defaultArgs,
    searchButtonTitle: 'search test',
    hasSearchButtonIcon: false
  },
  argTypes: {
    readOnly: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchButton = canvas.getByText('search test');
    await expect(searchButton).toBeInTheDocument();
  }
} satisfies Story`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A7)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onSearchClick: fn(),
    onSearch: fn(),
    onChange: fn(),
    onClear: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    searchbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(searchbox, '02.02.2002');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    const clearButton = canvas.getByText(dsI18n.t('ds_forms:searchfield.ClearButtonTitle'));
    await userEvent.click(clearButton);
    await waitFor(() => expect(args.onClear).toHaveBeenCalled());
    const searchButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:searchfield.ButtonTitle')
    });
    await userEvent.click(searchButton);
    await waitFor(() => expect(args.onSearchClick).toHaveBeenCalled());
    await userEvent.type(searchbox, '{enter}');
    await waitFor(() => expect(args.onSearch).toHaveBeenCalled());
  }
} satisfies Story`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'With ArrowKeyNavgitaion (C2)',
  render: KeyboardNavigationTemplate,
  args: {
    ...defaultArgs,
    onResultClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    searchbox.focus();
    await userEvent.keyboard('h');
    await userEvent.keyboard('[backspace]');
    const results = await canvas.findAllByRole('option');
    await userEvent.keyboard('[ArrowDown]');
    await expect(results[0]).toHaveFocus();
    await userEvent.keyboard('[ArrowDown]');
    await expect(results[1]).toHaveFocus();
    await userEvent.keyboard('[ArrowDown]');
    await expect(results[2]).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(results[1]).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(results[0]).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(results[4]).toHaveFocus();
    await userEvent.keyboard('[Enter]');
    await waitFor(() => expect(args.onResultClick).toHaveBeenCalledWith({
      description: 'Bor',
      key: 'B'
    }));
  }
} satisfies Story`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Accesskey (B5)',
  args: {
    ...defaultArgs,
    accessKey: 'j'
  },
  argTypes: {
    accessKey: {
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
  play: verifyAttribute('accessKey', 'j')
} satisfies Story`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false,
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false
  },
  name: 'With Controlled',
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const clearButton = canvas.getByText(dsI18n.t('ds_forms:searchfield.ClearButtonTitle'));
    await expect(clearButton).toBeInTheDocument();
    const resetButton = canvas.getByText('reset');
    await userEvent.click(resetButton);
    await waitFor(() => {
      expect(canvas.queryByText(dsI18n.t('ds_forms:searchfield.ClearButtonTitle'))).not.toBeInTheDocument();
    });
  },
  render: ResetButtonTemplate
} satisfies Story`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'With Required',
  args: {
    ...defaultArgs,
    required: true
  },
  argTypes: {
    required: {
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
    const textbox = canvas.getByRole('searchbox');
    await expect(textbox).toBeRequired();
  }
} satisfies Story`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Required And Mark',
  args: {
    ...defaultArgs,
    required: true,
    hideLabel: false,
    showRequiredMark: true
  },
  argTypes: {
    required: {
      table: {
        disable: false
      }
    },
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'With ErrorMessage',
  args: {
    ...defaultArgs,
    errorMessage: errorMessageText
  },
  argTypes: {
    errorMessage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('searchbox');
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(textbox).toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).toHaveAttribute('aria-describedby');
  }
} satisfies Story`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    placeholder: 'En lang placeholder som ikke skal synes bak reset-ikonet'
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    defaultValue: 'En lang value som ikke skal synes bak reset-ikonet'
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: TwoSearchFields
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  argTypes: {
    enableSRNavigationHint: {
      table: {
        disable: false
      },
      control: 'boolean'
    }
  },
  args: {
    ...defaultArgs,
    enableSRNavigationHint: false
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
    const sRtexst = dsI18n.t('ds_forms:searchfield.Focus');
    await expect(canvas.queryByText(sRtexst)).not.toBeInTheDocument();
  }
} satisfies Story`,...O.parameters?.docs?.source}}};const le=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled","WithRequired","WithRequiredAndMark","WithErrorMessage","WithLongPlaceholder","WithLongInput","TwoSearchFieldsOneWithHelpText","WithEnableSRNavigationHintsFalse"],be=Object.freeze(Object.defineProperty({__proto__:null,Defaults:A,TwoSearchFieldsOneWithHelpText:P,WithAccesskey:D,WithArrowKeyNavigation:F,WithAttributes:y,WithControlled:N,WithCustomButtonTitleText:R,WithCustomButtonTitles:E,WithCustomClassNames:v,WithDefaultValue:k,WithDescription:C,WithDisabled:T,WithEnableSRNavigationHintsFalse:O,WithErrorMessage:q,WithEventHandlers:L,WithHelpText:W,WithHelpToggleEvent:I,WithLongInput:_,WithLongLabel:f,WithLongPlaceholder:M,WithNameAndPlaceholder:H,WithRef:g,WithRequired:V,WithRequiredAndMark:j,WithValue:S,WithVariantLargeAndLongText:B,WithVariants:x,WithVariantsNoIcon:w,__namedExportsOrder:le,default:ae},Symbol.toStringTag,{value:"Module"}));export{be as S};
//# sourceMappingURL=SearchField.test.stories-Vk38OqvJ.js.map
