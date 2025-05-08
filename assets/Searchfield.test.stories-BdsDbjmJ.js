import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{r as ga}from"./index-7h80QhK_.js";import{f as b,w as l,e as t,a as Aa,b as d,u as i}from"./index-DIxTUSTt.js";import{g as Ba,d as y}from"./index-EsEcB_zD.js";import{S as h}from"./index-DmQJLmMR.js";import{w as m}from"./storybook.testing.utils-CMs160i9.js";import{c as u}from"./helpers-BRYKCfPN.js";import{S as U}from"./icon.systems-DnY32ltf.js";import{s as wa}from"./SearchField.types-BggW0wMV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DatePickerCalendar-uhBuvt5I.js";import"./index-TStLVSlm.js";import"./index-MCo35TjR.js";import"./index-_-BAtSXr.js";import"./LabelWithHelp-Bp_nNVMq.js";import"./Help-DBM5pSGx.js";import"./index-SYCMKRjb.js";import"./index-Begbw_Sq.js";import"./index-B4uH14t0.js";import"./icon.utils-XW2L0FSl.js";import"./base-props.types-B2QwU1g4.js";const _=(e,s)=>async({canvasElement:a})=>{const r=l(a).getByRole("searchbox");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute(e,s)},Ga={component:h,title:"Tester/SearchField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(U),mapping:U},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...wa],control:"inline-radio"},accessKey:{table:{disable:!0,category:u.htmlAttribute}},autoComplete:{table:{disable:!0,category:u.htmlAttribute,defaultValue:{summary:Ba()}},type:"string"},disabled:{table:{disable:!0,category:u.htmlAttribute}},form:{table:{disable:!0,category:u.htmlAttribute}},name:{table:{disable:!0,category:u.htmlAttribute}},placeholder:{table:{disable:!0,category:u.htmlAttribute}},readOnly:{table:{disable:!0,category:u.htmlAttribute}},required:{table:{disable:!0,category:u.htmlAttribute}},value:{table:{disable:!0,category:u.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}}},p="skattekort",O="Hva leter du etter?",o={label:O},g={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:_("name","dummyNameForwardedFromRef")},v={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},K="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",f={name:"With Custom ClassNames and Long Label (FA3)",args:{...o,label:K,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=e.querySelector(`${m} > div`),n=s.getByText(K),r=e.querySelector(`${m} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(n).toHaveClass("dummyClassname"),await t(r).toHaveClass("dummyClassnameFormContainer")}},A={name:"With Long Label",args:{...o,label:K,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},B={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...o},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${m} input`,`${m} button`],focus:[`${m} input`,`${m} button`],click:[`${m} input`,`${m} button`]}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox",{name:`${O}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const n=s.getByRole("button",{name:y.t("ds_forms:searchfield.ButtonTitle")});await t(n).toBeInTheDocument(),await t(n).toBeEnabled(),await t(n.tagName).toBe("BUTTON")}},va=e=>c.jsxs(c.Fragment,{children:[c.jsx(h,{variant:"medium",...e}),c.jsx(h,{variant:"large",...e}),c.jsx(h,{variant:"extraLarge",...e})]}),w={name:"With Variants (A1b, A2)",args:{...o,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:va},x={name:"With Variants Without Icon (A1b, A2)",render:va,args:{...o,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},T={name:"With Variant Large And Long Text",args:{...o,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},k={name:"With Disabled",args:{...o,disabled:!0,value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getByRole("button");await t(a).toBeDisabled(),await t(n).toBeDisabled()}},C={name:"With Value",args:{...o,value:p},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:_("value",p)},S={name:"With DefaultValue",args:{...o,defaultValue:p},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:_("value",p)},W={name:"With Description (0b, B2)",args:{...o,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},H={name:"With HelpText (0b, B2)",args:{...o,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{description:O});await t(a).toBeInTheDocument(),await Aa.click(a)}},E={name:"With Name And Placeholder (A3, B3)",args:{...o,name:"test_name",placeholder:p},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",p)}},L={name:"With Custom Button Titles (A2, A5)",args:{...o,value:p,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=await s.findByText("clear test"),n=s.getByText("search test");await t(a).toBeInTheDocument(),await t(n).toBeInTheDocument()}},R={name:"With Custom Button Title Text (A2)",args:{...o,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("search test");await t(a).toBeInTheDocument()}},xa=e=>{const[s,a]=ga.useState("Tester events");return c.jsx(h,{...e,label:s,onFocus:n=>{var r;a("Form-element har fått fokus"),(r=e.onFocus)==null||r.call(e,n)},onBlur:n=>{var r;a("Form-element har blitt blurret"),(r=e.onBlur)==null||r.call(e,n)},onChange:n=>{var r;a("Form-element har blitt klikket på"),(r=e.onChange)==null||r.call(e,n)},onClear:n=>{var r;a("Reset har blitt klikket på"),(r=e.onClear)==null||r.call(e,n)},onSearchClick:n=>{var r;a("Søk har blitt klikket på"),(r=e.onSearchClick)==null||r.call(e,n)},onSearch:n=>{var r;a("Søk har blitt aktivert med enter"),(r=e.onSearch)==null||r.call(e,n)}})},D={render:xa,name:"With EventHandlers (A7)",args:{...o,onFocus:b(),onBlur:b(),onSearchClick:b(),onSearch:b(),onChange:b(),onClear:b()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:s})=>{const a=l(s),n=a.getByRole("searchbox");n.focus(),await d(()=>t(e.onFocus).toHaveBeenCalled()),await i.type(n,"02.02.2002"),await d(()=>t(e.onChange).toHaveBeenCalled()),await i.tab(),await d(()=>t(e.onBlur).toHaveBeenCalled());const r=a.getByText(y.t("ds_forms:searchfield.ClearButtonTitle"));await i.click(r),await d(()=>t(e.onClear).toHaveBeenCalled());const fa=a.getByRole("button",{name:y.t("ds_forms:searchfield.ButtonTitle")});await i.click(fa),await d(()=>t(e.onSearchClick).toHaveBeenCalled()),await i.type(n,"{enter}"),await d(()=>t(e.onSearch).toHaveBeenCalled())}},F={name:"With ArrowKeyNavgitaion (C2)",args:{...o,results:[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],onResultClick:b()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:s})=>{const a=l(s),n=a.getByRole("searchbox"),r=await a.findAllByRole("option");n.focus(),await i.keyboard("[ArrowDown]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[2]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[4]).toHaveFocus(),await i.keyboard("[Enter]"),await d(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},I={name:"With Accesskey (B5)",args:{...o,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:_("accessKey","j")},N={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},Ta=e=>{const[s,a]=ga.useState("søk");return c.jsxs(c.Fragment,{children:[c.jsx(h,{...e,value:s,onChange:n=>{var r;a(n.target.value),(r=e.onChange)==null||r.call(e,n)}}),c.jsx("button",{onClick:()=>a(""),children:"reset"})]})},V={args:{...o,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByText(y.t("ds_forms:searchfield.ClearButtonTitle"));await t(a).toBeInTheDocument();const n=s.getByText("reset");await i.click(n),await d(()=>{t(s.queryByText(y.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:Ta},q={name:"With Required",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toBeRequired()}},j={name:"With Required And Mark",args:{...o,required:!0,hideLabel:!1,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},ka="Søkefeltet er obligatorisk",M={name:"With ErrorMessage",args:{...o,errorMessage:ka},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getAllByRole("generic")[3];await t(n).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},P={args:{...o,placeholder:"En lang placeholder som ikke skal synes bak reset-ikonet"},argTypes:{placeholder:{table:{disable:!1}}}},$={args:{...o,defaultValue:"En lang value som ikke skal synes bak reset-ikonet"},argTypes:{defaultValue:{table:{disable:!1}}}};var G,z,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('name', 'dummyNameForwardedFromRef')
} satisfies Story`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
      hover: [\`\${wrapper} input\`, \`\${wrapper} button\`],
      focus: [\`\${wrapper} input\`, \`\${wrapper} button\`],
      click: [\`\${wrapper} input\`, \`\${wrapper} button\`]
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
  }
} satisfies Story`,...(le=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,ue;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,be;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(me=x.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var pe,he,ye;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(ye=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ge,ve,fe;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ae,Be,we;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('value', valueText)
} satisfies Story`,...(we=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var xe,Te,ke;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('value', valueText)
} satisfies Story`,...(ke=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ce,Se,We;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...(We=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:We.source}}};var He,Ee,Le;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Re,De,Fe;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ie,Ne,Ve;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var qe,je,Me;R.parameters={...R.parameters,docs:{...(qe=R.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Me=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};var Pe,$e,_e;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(_e=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Ke,Oe,Ue;F.parameters={...F.parameters,docs:{...(Ke=F.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'With ArrowKeyNavgitaion (C2)',
  args: {
    ...defaultArgs,
    results: [{
      description: 'Hydrogen',
      key: 'H'
    }, {
      description: 'Helium',
      key: 'He'
    }, {
      description: 'Litium',
      key: 'Li'
    }, {
      description: 'Beryllium',
      key: 'Be'
    }, {
      description: 'Bor',
      key: 'B'
    }],
    onResultClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    const results = await canvas.findAllByRole('option');
    searchbox.focus();
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
} satisfies Story`,...(Ue=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var Ge,ze,Je;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('accessKey', 'j')
} satisfies Story`,...(Je=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Qe,Xe,Ye;N.parameters={...N.parameters,docs:{...(Qe=N.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ye=(Xe=N.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;V.parameters={...V.parameters,docs:{...(Ze=V.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false
  },
  name: 'With Controlled',
  parameters: {
    HTMLSnapshot: {
      disable: true
    },
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
} satisfies Story`,...(aa=(ea=V.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,sa;q.parameters={...q.parameters,docs:{...(ta=q.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('searchbox');
    await expect(textbox).toBeRequired();
  }
} satisfies Story`,...(sa=(na=q.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ra,oa,la;j.parameters={...j.parameters,docs:{...(ra=j.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
} satisfies Story`,...(la=(oa=j.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var ia,ca,ua;M.parameters={...M.parameters,docs:{...(ia=M.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
} satisfies Story`,...(ua=(ca=M.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var da,ma,ba;P.parameters={...P.parameters,docs:{...(da=P.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
} satisfies Story`,...(ba=(ma=P.parameters)==null?void 0:ma.docs)==null?void 0:ba.source}}};var pa,ha,ya;$.parameters={...$.parameters,docs:{...(pa=$.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ya=(ha=$.parameters)==null?void 0:ha.docs)==null?void 0:ya.source}}};const za=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled","WithRequired","WithRequiredAndMark","WithErrorMessage","WithLongPlaceholder","WithLongInput"];export{B as Defaults,I as WithAccesskey,F as WithArrowKeyNavigation,v as WithAttributes,V as WithControlled,R as WithCustomButtonTitleText,L as WithCustomButtonTitles,f as WithCustomClassNames,S as WithDefaultValue,W as WithDescription,k as WithDisabled,M as WithErrorMessage,D as WithEventHandlers,H as WithHelpText,N as WithHelpToggleEvent,$ as WithLongInput,A as WithLongLabel,P as WithLongPlaceholder,E as WithNameAndPlaceholder,g as WithRef,q as WithRequired,j as WithRequiredAndMark,C as WithValue,T as WithVariantLargeAndLongText,w as WithVariants,x as WithVariantsNoIcon,za as __namedExportsOrder,Ga as default};
//# sourceMappingURL=Searchfield.test.stories-BdsDbjmJ.js.map
