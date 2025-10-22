import{e as d,a as Wa,d as p,j as c,r as K}from"./iframe-BoxHncFg.js";import{S as u,s as Ha}from"./index-d7h_eiwz.js";import{w as Y}from"./storybook.testing.utils-CMs160i9.js";import{S as J}from"./icon.systems-qsHVbejn.js";const{fireEvent:Ea,userEvent:i,waitFor:m,within:l,expect:t,fn:b}=__STORYBOOK_MODULE_TEST__,U=(e,n)=>async({canvasElement:a})=>{const r=l(a).getByRole("searchbox");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute(e,n)},Ra={component:u,title:"Tester/SearchField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(J),mapping:J},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},enableSRNavigationHint:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},accessKey:{table:{disable:!0,category:d.htmlAttribute}},autoComplete:{table:{disable:!0,category:d.htmlAttribute,defaultValue:{summary:Wa()}},type:"string"},disabled:{table:{disable:!0,category:d.htmlAttribute}},form:{table:{disable:!0,category:d.htmlAttribute}},name:{table:{disable:!0,category:d.htmlAttribute}},placeholder:{table:{disable:!0,category:d.htmlAttribute}},readOnly:{table:{disable:!0,category:d.htmlAttribute}},required:{table:{disable:!0,category:d.htmlAttribute}},value:{table:{disable:!0,category:d.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},h="skattekort",z="Hva leter du etter?",o={label:z},g={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("name","dummyNameForwardedFromRef")},y={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("id","htmlid"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},G="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",v={name:"With Custom ClassNames and Long Label (FA3)",args:{...o,label:G,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=e.querySelector(`${Y} > div`),s=n.getByText(G),r=e.querySelector(`${Y} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(r).toHaveClass("dummyClassnameFormContainer")}},f={name:"With Long Label",args:{...o,label:G,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},A={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...o},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox",{name:`${z}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const s=n.getByRole("button",{name:p.t("ds_forms:searchfield.ButtonTitle")});await t(s).toBeInTheDocument(),await t(s).toBeEnabled(),await t(s.tagName).toBe("BUTTON");const r=p.t("ds_forms:searchfield.Focus");await t(await n.findByText(r)).toBeInTheDocument()}},Ca=e=>c.jsxs(c.Fragment,{children:[c.jsx(u,{variant:"medium",...e}),c.jsx(u,{variant:"large",...e}),c.jsx(u,{variant:"extraLarge",...e})]}),x={name:"With Variants (A1b, A2)",args:{...o,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:Ca},B={name:"With Variants Without Icon (A1b, A2)",render:Ca,args:{...o,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},w={name:"With Variant Large And Long Text",args:{...o,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},T={name:"With Disabled",args:{...o,disabled:!0,value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox"),s=n.getByRole("button");await t(a).toBeDisabled(),await t(s).toBeDisabled()}},S={name:"With Value",args:{...o,value:h},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("value",h)},k={name:"With DefaultValue",args:{...o,defaultValue:h},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("value",h)},C={name:"With Description (0b, B2)",args:{...o,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},W={name:"With HelpText (0b, B2)",args:{...o,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{description:z});await t(a).toBeInTheDocument(),await Ea.click(a)}},H={name:"With Name And Placeholder (A3, B3)",args:{...o,name:"test_name",placeholder:h},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",h)}},E={name:"With Custom Button Titles (A2, A5)",args:{...o,value:h,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=await n.findByText("clear test"),s=n.getByText("search test");await t(a).toBeInTheDocument(),await t(s).toBeInTheDocument()}},R={name:"With Custom Button Title Text (A2)",args:{...o,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("search test");await t(a).toBeInTheDocument()}},La=e=>{const[n,a]=K.useState("Tester events");return c.jsx(u,{...e,label:n,onFocus:s=>{var r;a("Form-element har fått fokus"),(r=e.onFocus)==null||r.call(e,s)},onBlur:s=>{var r;a("Form-element har blitt blurret"),(r=e.onBlur)==null||r.call(e,s)},onChange:s=>{var r;a("Form-element har blitt klikket på"),(r=e.onChange)==null||r.call(e,s)},onClear:s=>{var r;a("Reset har blitt klikket på"),(r=e.onClear)==null||r.call(e,s)},onSearchClick:s=>{var r;a("Søk har blitt klikket på"),(r=e.onSearchClick)==null||r.call(e,s)},onSearch:s=>{var r;a("Søk har blitt aktivert med enter"),(r=e.onSearch)==null||r.call(e,s)}})},L={render:La,name:"With EventHandlers (A7)",args:{...o,onFocus:b(),onBlur:b(),onSearchClick:b(),onSearch:b(),onChange:b(),onClear:b()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const a=l(n),s=a.getByRole("searchbox");s.focus(),await m(()=>t(e.onFocus).toHaveBeenCalled()),await i.type(s,"02.02.2002"),await m(()=>t(e.onChange).toHaveBeenCalled()),await i.tab(),await m(()=>t(e.onBlur).toHaveBeenCalled());const r=a.getByText(p.t("ds_forms:searchfield.ClearButtonTitle"));await i.click(r),await m(()=>t(e.onClear).toHaveBeenCalled());const $=a.getByRole("button",{name:p.t("ds_forms:searchfield.ButtonTitle")});await i.click($),await m(()=>t(e.onSearchClick).toHaveBeenCalled()),await i.type(s,"{enter}"),await m(()=>t(e.onSearch).toHaveBeenCalled())}},Fa=e=>{const[n,a]=K.useState(""),s=K.useMemo(()=>[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],[]),r=K.useMemo(()=>Ha(s,n),[n,s]);return c.jsx(u,{...e,results:r,onChange:$=>{a($.target.value)}})},F={name:"With ArrowKeyNavgitaion (C2)",render:Fa,args:{...o,onResultClick:b()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const a=l(n);a.getByRole("searchbox").focus(),await i.keyboard("h"),await i.keyboard("[backspace]");const r=await a.findAllByRole("option");await i.keyboard("[ArrowDown]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[2]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[4]).toHaveFocus(),await i.keyboard("[Enter]"),await m(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},D={name:"With Accesskey (B5)",args:{...o,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:U("accessKey","j")},I={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},Da=e=>{const[n,a]=K.useState("søk");return c.jsxs(c.Fragment,{children:[c.jsx(u,{...e,value:n,onChange:s=>{var r;a(s.target.value),(r=e.onChange)==null||r.call(e,s)}}),c.jsx("button",{onClick:()=>a(""),children:"reset"})]})},N={args:{...o,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByText(p.t("ds_forms:searchfield.ClearButtonTitle"));await t(a).toBeInTheDocument();const s=n.getByText("reset");await i.click(s),await m(()=>{t(n.queryByText(p.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:Da},V={name:"With Required",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toBeRequired()}},j={name:"With Required And Mark",args:{...o,required:!0,hideLabel:!1,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},Ia="Søkefeltet er obligatorisk",q={name:"With ErrorMessage",args:{...o,errorMessage:Ia},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByRole("searchbox"),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},M={args:{...o,placeholder:"En lang placeholder som ikke skal synes bak reset-ikonet"},argTypes:{placeholder:{table:{disable:!1}}}},_={args:{...o,defaultValue:"En lang value som ikke skal synes bak reset-ikonet"},argTypes:{defaultValue:{table:{disable:!1}}}},Na=()=>c.jsxs("div",{className:"flex gapS",children:[c.jsx(u,{label:"Søk etter grønnsaker",hideLabel:!1}),c.jsx(u,{label:"Søk etter grønnsaker",helpText:"Hjelpetekst",hideLabel:!1})]}),P={render:Na},O={argTypes:{enableSRNavigationHint:{table:{disable:!1},control:"boolean"}},args:{...o,enableSRNavigationHint:!1},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=l(e),a=p.t("ds_forms:searchfield.Focus");await t(n.queryByText(a)).not.toBeInTheDocument()}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=v.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,be,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,ge,ye;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,fe,Ae;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var xe,Be,we;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Te,Se,ke;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Ce,We,He;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(We=k.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ee,Re,Le;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var Fe,De,Ie;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ne,Ve,je;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var qe,Me,_e;E.parameters={...E.parameters,docs:{...(qe=E.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Pe,Oe,Ke;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:Ke.source}}};var Ue,$e,Ge;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var ze,Ye,Je;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(Je=(Ye=F.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;D.parameters={...D.parameters,docs:{...(Qe=D.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ze=(Xe=D.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;I.parameters={...I.parameters,docs:{...(ea=I.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(aa=I.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,ra;N.parameters={...N.parameters,docs:{...(na=N.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
} satisfies Story`,...(ra=(sa=N.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var oa,la,ia;V.parameters={...V.parameters,docs:{...(oa=V.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(la=V.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var ca,da,ua;j.parameters={...j.parameters,docs:{...(ca=j.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
} satisfies Story`,...(ua=(da=j.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,ba,pa;q.parameters={...q.parameters,docs:{...(ma=q.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
} satisfies Story`,...(pa=(ba=q.parameters)==null?void 0:ba.docs)==null?void 0:pa.source}}};var ha,ga,ya;M.parameters={...M.parameters,docs:{...(ha=M.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
} satisfies Story`,...(ya=(ga=M.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var va,fa,Aa;_.parameters={..._.parameters,docs:{...(va=_.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
} satisfies Story`,...(Aa=(fa=_.parameters)==null?void 0:fa.docs)==null?void 0:Aa.source}}};var xa,Ba,wa;P.parameters={...P.parameters,docs:{...(xa=P.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: TwoSearchFields
}`,...(wa=(Ba=P.parameters)==null?void 0:Ba.docs)==null?void 0:wa.source}}};var Ta,Sa,ka;O.parameters={...O.parameters,docs:{...(Ta=O.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
} satisfies Story`,...(ka=(Sa=O.parameters)==null?void 0:Sa.docs)==null?void 0:ka.source}}};const Va=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled","WithRequired","WithRequiredAndMark","WithErrorMessage","WithLongPlaceholder","WithLongInput","TwoSearchFieldsOneWithHelpText","WithEnableSRNavigationHintsFalse"],Pa=Object.freeze(Object.defineProperty({__proto__:null,Defaults:A,TwoSearchFieldsOneWithHelpText:P,WithAccesskey:D,WithArrowKeyNavigation:F,WithAttributes:y,WithControlled:N,WithCustomButtonTitleText:R,WithCustomButtonTitles:E,WithCustomClassNames:v,WithDefaultValue:k,WithDescription:C,WithDisabled:T,WithEnableSRNavigationHintsFalse:O,WithErrorMessage:q,WithEventHandlers:L,WithHelpText:W,WithHelpToggleEvent:I,WithLongInput:_,WithLongLabel:f,WithLongPlaceholder:M,WithNameAndPlaceholder:H,WithRef:g,WithRequired:V,WithRequiredAndMark:j,WithValue:S,WithVariantLargeAndLongText:w,WithVariants:x,WithVariantsNoIcon:B,__namedExportsOrder:Va,default:Ra},Symbol.toStringTag,{value:"Module"}));export{Pa as S};
//# sourceMappingURL=SearchField.test.stories-FJ6OvVcG.js.map
