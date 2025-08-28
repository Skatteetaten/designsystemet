import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-D_ouKaeX.js";import{f as p,w as l,e as t,a as Wa,b as m,u as i}from"./index-DIxTUSTt.js";import{a as Ha,d as h}from"./index-CGk5cNE3.js";import{S as u,s as Ea}from"./index-BuHbB7kV.js";import{w as b}from"./storybook.testing.utils-CMs160i9.js";import{c as d}from"./helpers-B90wjoUE.js";import{S as Q}from"./icon.systems-DzczaoTk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DatePickerCalendar-wzrlqniL.js";import"./index-Du3yX_TW.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./index-DXWIZOJk.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./icon.utils-XW2L0FSl.js";const U=(e,n)=>async({canvasElement:a})=>{const r=l(a).getByRole("searchbox");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute(e,n)},at={component:u,title:"Tester/SearchField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(Q),mapping:Q},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},enableSRNavigationHint:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},accessKey:{table:{disable:!0,category:d.htmlAttribute}},autoComplete:{table:{disable:!0,category:d.htmlAttribute,defaultValue:{summary:Ha()}},type:"string"},disabled:{table:{disable:!0,category:d.htmlAttribute}},form:{table:{disable:!0,category:d.htmlAttribute}},name:{table:{disable:!0,category:d.htmlAttribute}},placeholder:{table:{disable:!0,category:d.htmlAttribute}},readOnly:{table:{disable:!0,category:d.htmlAttribute}},required:{table:{disable:!0,category:d.htmlAttribute}},value:{table:{disable:!0,category:d.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}}},g="skattekort",J="Hva leter du etter?",o={label:J},v={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("name","dummyNameForwardedFromRef")},f={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("id","htmlid"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},z="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",A={name:"With Custom ClassNames and Long Label (FA3)",args:{...o,label:z,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=e.querySelector(`${b} > div`),s=n.getByText(z),r=e.querySelector(`${b} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(r).toHaveClass("dummyClassnameFormContainer")}},w={name:"With Long Label",args:{...o,label:z,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},x={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...o},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${b} input`,`${b} button`],focus:[`${b} input`,`${b} button`],click:[`${b} input`,`${b} button`]}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox",{name:`${J}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const s=n.getByRole("button",{name:h.t("ds_forms:searchfield.ButtonTitle")});await t(s).toBeInTheDocument(),await t(s).toBeEnabled(),await t(s.tagName).toBe("BUTTON");const r=h.t("ds_forms:searchfield.Focus");await t(await n.findByText(r)).toBeInTheDocument()}},Ca=e=>c.jsxs(c.Fragment,{children:[c.jsx(u,{variant:"medium",...e}),c.jsx(u,{variant:"large",...e}),c.jsx(u,{variant:"extraLarge",...e})]}),B={name:"With Variants (A1b, A2)",args:{...o,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:Ca},T={name:"With Variants Without Icon (A1b, A2)",render:Ca,args:{...o,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},k={name:"With Variant Large And Long Text",args:{...o,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},S={name:"With Disabled",args:{...o,disabled:!0,value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox"),s=n.getByRole("button");await t(a).toBeDisabled(),await t(s).toBeDisabled()}},C={name:"With Value",args:{...o,value:g},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("value",g)},W={name:"With DefaultValue",args:{...o,defaultValue:g},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("value",g)},H={name:"With Description (0b, B2)",args:{...o,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},E={name:"With HelpText (0b, B2)",args:{...o,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{description:J});await t(a).toBeInTheDocument(),await Wa.click(a)}},R={name:"With Name And Placeholder (A3, B3)",args:{...o,name:"test_name",placeholder:g},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",g)}},L={name:"With Custom Button Titles (A2, A5)",args:{...o,value:g,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=await n.findByText("clear test"),s=n.getByText("search test");await t(a).toBeInTheDocument(),await t(s).toBeInTheDocument()}},F={name:"With Custom Button Title Text (A2)",args:{...o,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("search test");await t(a).toBeInTheDocument()}},Ra=e=>{const[n,a]=y.useState("Tester events");return c.jsx(u,{...e,label:n,onFocus:s=>{var r;a("Form-element har fått fokus"),(r=e.onFocus)==null||r.call(e,s)},onBlur:s=>{var r;a("Form-element har blitt blurret"),(r=e.onBlur)==null||r.call(e,s)},onChange:s=>{var r;a("Form-element har blitt klikket på"),(r=e.onChange)==null||r.call(e,s)},onClear:s=>{var r;a("Reset har blitt klikket på"),(r=e.onClear)==null||r.call(e,s)},onSearchClick:s=>{var r;a("Søk har blitt klikket på"),(r=e.onSearchClick)==null||r.call(e,s)},onSearch:s=>{var r;a("Søk har blitt aktivert med enter"),(r=e.onSearch)==null||r.call(e,s)}})},D={render:Ra,name:"With EventHandlers (A7)",args:{...o,onFocus:p(),onBlur:p(),onSearchClick:p(),onSearch:p(),onChange:p(),onClear:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const a=l(n),s=a.getByRole("searchbox");s.focus(),await m(()=>t(e.onFocus).toHaveBeenCalled()),await i.type(s,"02.02.2002"),await m(()=>t(e.onChange).toHaveBeenCalled()),await i.tab(),await m(()=>t(e.onBlur).toHaveBeenCalled());const r=a.getByText(h.t("ds_forms:searchfield.ClearButtonTitle"));await i.click(r),await m(()=>t(e.onClear).toHaveBeenCalled());const G=a.getByRole("button",{name:h.t("ds_forms:searchfield.ButtonTitle")});await i.click(G),await m(()=>t(e.onSearchClick).toHaveBeenCalled()),await i.type(s,"{enter}"),await m(()=>t(e.onSearch).toHaveBeenCalled())}},La=e=>{const[n,a]=y.useState(""),s=y.useMemo(()=>[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],[]),r=y.useMemo(()=>Ea(s,n),[n,s]);return c.jsx(u,{...e,results:r,onChange:G=>{a(G.target.value)}})},I={name:"With ArrowKeyNavgitaion (C2)",render:La,args:{...o,onResultClick:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const a=l(n);a.getByRole("searchbox").focus(),await i.keyboard("h"),await i.keyboard("[backspace]");const r=await a.findAllByRole("option");await i.keyboard("[ArrowDown]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[2]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[4]).toHaveFocus(),await i.keyboard("[Enter]"),await m(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},N={name:"With Accesskey (B5)",args:{...o,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("accessKey","j")},V={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},Fa=e=>{const[n,a]=y.useState("søk");return c.jsxs(c.Fragment,{children:[c.jsx(u,{...e,value:n,onChange:s=>{var r;a(s.target.value),(r=e.onChange)==null||r.call(e,s)}}),c.jsx("button",{onClick:()=>a(""),children:"reset"})]})},j={args:{...o,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByText(h.t("ds_forms:searchfield.ClearButtonTitle"));await t(a).toBeInTheDocument();const s=n.getByText("reset");await i.click(s),await m(()=>{t(n.queryByText(h.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:Fa},q={name:"With Required",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toBeRequired()}},M={name:"With Required And Mark",args:{...o,required:!0,hideLabel:!1,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},Da="Søkefeltet er obligatorisk",P={name:"With ErrorMessage",args:{...o,errorMessage:Da},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox"),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},_={args:{...o,placeholder:"En lang placeholder som ikke skal synes bak reset-ikonet"},argTypes:{placeholder:{table:{disable:!1}}}},$={args:{...o,defaultValue:"En lang value som ikke skal synes bak reset-ikonet"},argTypes:{defaultValue:{table:{disable:!1}}}},Ia=()=>c.jsxs("div",{className:"flex gapS",children:[c.jsx(u,{label:"Søk etter grønnsaker",hideLabel:!1}),c.jsx(u,{label:"Søk etter grønnsaker",helpText:"Hjelpetekst",hideLabel:!1})]}),K={render:Ia},O={argTypes:{enableSRNavigationHint:{table:{disable:!1},control:"boolean"}},args:{...o,enableSRNavigationHint:!1},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e),a=h.t("ds_forms:searchfield.Focus");await t(n.queryByText(a)).not.toBeInTheDocument()}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=A.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    const sRtexst = dsI18n.t('ds_forms:searchfield.Focus');
    await expect(await canvas.findByText(sRtexst)).toBeInTheDocument();
  }
} satisfies Story`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,be,pe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(be=B.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,ge,ye;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,fe,Ae;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var we,xe,Be;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Te,ke,Se;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Ce,We,He;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(We=W.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ee,Re,Le;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var Fe,De,Ie;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ne,Ve,je;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var qe,Me,Pe;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var _e,$e,Ke;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Oe,Ue,Ge;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var ze,Je,Qe;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'With ArrowKeyNavgitaion (C2)',
  render: KeyboardNavigationTemplate,
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(Qe=(Je=I.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ze=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ta;V.parameters={...V.parameters,docs:{...(ea=V.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(aa=V.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,ra;j.parameters={...j.parameters,docs:{...(na=j.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
} satisfies Story`,...(ra=(sa=j.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var oa,la,ia;q.parameters={...q.parameters,docs:{...(oa=q.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(la=q.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var ca,da,ua;M.parameters={...M.parameters,docs:{...(ca=M.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
} satisfies Story`,...(ua=(da=M.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,ba,pa;P.parameters={...P.parameters,docs:{...(ma=P.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
} satisfies Story`,...(pa=(ba=P.parameters)==null?void 0:ba.docs)==null?void 0:pa.source}}};var ha,ga,ya;_.parameters={..._.parameters,docs:{...(ha=_.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
} satisfies Story`,...(ya=(ga=_.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var va,fa,Aa;$.parameters={...$.parameters,docs:{...(va=$.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
} satisfies Story`,...(Aa=(fa=$.parameters)==null?void 0:fa.docs)==null?void 0:Aa.source}}};var wa,xa,Ba;K.parameters={...K.parameters,docs:{...(wa=K.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  render: TwoSearchFields
}`,...(Ba=(xa=K.parameters)==null?void 0:xa.docs)==null?void 0:Ba.source}}};var Ta,ka,Sa;O.parameters={...O.parameters,docs:{...(Ta=O.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const sRtexst = dsI18n.t('ds_forms:searchfield.Focus');
    await expect(canvas.queryByText(sRtexst)).not.toBeInTheDocument();
  }
} satisfies Story`,...(Sa=(ka=O.parameters)==null?void 0:ka.docs)==null?void 0:Sa.source}}};const tt=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled","WithRequired","WithRequiredAndMark","WithErrorMessage","WithLongPlaceholder","WithLongInput","TwoSearchFieldsOneWithHelpText","WithEnableSRNavigationHintsFalse"];export{x as Defaults,K as TwoSearchFieldsOneWithHelpText,N as WithAccesskey,I as WithArrowKeyNavigation,f as WithAttributes,j as WithControlled,F as WithCustomButtonTitleText,L as WithCustomButtonTitles,A as WithCustomClassNames,W as WithDefaultValue,H as WithDescription,S as WithDisabled,O as WithEnableSRNavigationHintsFalse,P as WithErrorMessage,D as WithEventHandlers,E as WithHelpText,V as WithHelpToggleEvent,$ as WithLongInput,w as WithLongLabel,_ as WithLongPlaceholder,R as WithNameAndPlaceholder,v as WithRef,q as WithRequired,M as WithRequiredAndMark,C as WithValue,k as WithVariantLargeAndLongText,B as WithVariants,T as WithVariantsNoIcon,tt as __namedExportsOrder,at as default};
//# sourceMappingURL=Searchfield.test.stories-BN2Sd6Q5.js.map
