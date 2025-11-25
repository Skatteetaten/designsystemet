import{j as c}from"./jsx-runtime-BYYWji4R.js";import{r as ca}from"./index-ClcD9ViR.js";import{f as p,w as l,e as t,a as ma,b as d,u as i}from"./index-DIxTUSTt.js";import{g as ba,d as y}from"./index-BYKicpQW.js";import{S as h}from"./index-DEJUArlV.js";import{w as m}from"./storybook.testing.utils-CMs160i9.js";import{c as u}from"./helpers-Q4uYuiE4.js";import{S as K}from"./icon.systems-D4eM4wId.js";import{s as pa}from"./SearchField.types-C1TF2x8c.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DatePickerCalendar-HH4LMRzz.js";import"./index-CEFmy_Ic.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./LabelWithHelp-D9yud6GC.js";import"./Help-CJ8w0Npo.js";import"./index-7bHEsQL_.js";import"./index-Cs0ivlf6.js";import"./icon.utils-DDvPh5sV.js";import"./base-props.types-sXyoNogd.js";const P=(e,s)=>async({canvasElement:a})=>{const r=l(a).getByRole("searchbox");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute(e,s)},qa={component:h,title:"Tester/SearchField",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(K),mapping:K},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...pa],control:"inline-radio"},accessKey:{table:{disable:!0,category:u.htmlAttribute}},autoComplete:{table:{disable:!0,category:u.htmlAttribute,defaultValue:{summary:ba()}},type:"string"},disabled:{table:{disable:!0,category:u.htmlAttribute}},form:{table:{disable:!0,category:u.htmlAttribute}},name:{table:{disable:!0,category:u.htmlAttribute}},placeholder:{table:{disable:!0,category:u.htmlAttribute}},readOnly:{table:{disable:!0,category:u.htmlAttribute}},required:{table:{disable:!0,category:u.htmlAttribute}},value:{table:{disable:!0,category:u.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}}},b="skattekort",_="Hva leter du etter?",o={label:_},g={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("name","dummyNameForwardedFromRef")},v={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},$="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",f={name:"With Custom ClassNames and Long Label (FA3)",args:{...o,label:$,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=e.querySelector(`${m} > div`),n=s.getByText($),r=e.querySelector(`${m} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(n).toHaveClass("dummyClassname"),await t(r).toHaveClass("dummyClassnameFormContainer")}},A={name:"With Long Label",args:{...o,label:$,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},B={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...o},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${m} input`,`${m} button`],focus:[`${m} input`,`${m} button`],click:[`${m} input`,`${m} button`]}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox",{name:`${_}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const n=s.getByRole("button",{name:y.t("ds_forms:searchfield.ButtonTitle")});await t(n).toBeInTheDocument(),await t(n).toBeEnabled(),await t(n.tagName).toBe("BUTTON")}},ua=e=>c.jsxs(c.Fragment,{children:[c.jsx(h,{variant:"medium",...e}),c.jsx(h,{variant:"large",...e}),c.jsx(h,{variant:"extraLarge",...e})]}),w={name:"With Variants (A1b, A2)",args:{...o,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:ua},x={name:"With Variants Without Icon (A1b, A2)",render:ua,args:{...o,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},T={name:"With Variant Large And Long Text",args:{...o,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},k={name:"With Disabled",args:{...o,disabled:!0,value:b},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getByRole("button");await t(a).toBeDisabled(),await t(n).toBeDisabled()}},C={name:"With Value",args:{...o,value:b},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("value",b)},S={name:"With DefaultValue",args:{...o,defaultValue:b},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("value",b)},W={name:"With Description (0b, B2)",args:{...o,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},H={name:"With HelpText (0b, B2)",args:{...o,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{description:_});await t(a).toBeInTheDocument(),await ma.click(a)}},E={name:"With Name And Placeholder (A3, B3)",args:{...o,name:"test_name",placeholder:b},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",b)}},R={name:"With Custom Button Titles (A2, A5)",args:{...o,value:b,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=await s.findByText("clear test"),n=s.getByText("search test");await t(a).toBeInTheDocument(),await t(n).toBeInTheDocument()}},L={name:"With Custom Button Title Text (A2)",args:{...o,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("search test");await t(a).toBeInTheDocument()}},ha=e=>{const[s,a]=ca.useState("Tester events");return c.jsx(h,{...e,label:s,onFocus:n=>{var r;a("Form-element har fått fokus"),(r=e.onFocus)==null||r.call(e,n)},onBlur:n=>{var r;a("Form-element har blitt blurret"),(r=e.onBlur)==null||r.call(e,n)},onChange:n=>{var r;a("Form-element har blitt klikket på"),(r=e.onChange)==null||r.call(e,n)},onClear:n=>{var r;a("Reset har blitt klikket på"),(r=e.onClear)==null||r.call(e,n)},onSearchClick:n=>{var r;a("Søk har blitt klikket på"),(r=e.onSearchClick)==null||r.call(e,n)},onSearch:n=>{var r;a("Søk har blitt aktivert med enter"),(r=e.onSearch)==null||r.call(e,n)}})},D={render:ha,name:"With EventHandlers (A7)",args:{...o,onFocus:p(),onBlur:p(),onSearchClick:p(),onSearch:p(),onChange:p(),onClear:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:s})=>{const a=l(s),n=a.getByRole("searchbox");n.focus(),await d(()=>t(e.onFocus).toHaveBeenCalled()),await i.type(n,"02.02.2002"),await d(()=>t(e.onChange).toHaveBeenCalled()),await i.tab(),await d(()=>t(e.onBlur).toHaveBeenCalled());const r=a.getByText(y.t("ds_forms:searchfield.ClearButtonTitle"));await i.click(r),await d(()=>t(e.onClear).toHaveBeenCalled());const da=a.getByRole("button",{name:y.t("ds_forms:searchfield.ButtonTitle")});await i.click(da),await d(()=>t(e.onSearchClick).toHaveBeenCalled()),await i.type(n,"{enter}"),await d(()=>t(e.onSearch).toHaveBeenCalled())}},F={name:"With ArrowKeyNavgitaion (C2)",args:{...o,results:[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],onResultClick:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:s})=>{const a=l(s),n=a.getByRole("searchbox"),r=await a.findAllByRole("option");n.focus(),await i.keyboard("[ArrowDown]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowDown]"),await t(r[2]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[1]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[0]).toHaveFocus(),await i.keyboard("[ArrowUp]"),await t(r[4]).toHaveFocus(),await i.keyboard("[Enter]"),await d(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},I={name:"With Accesskey (B5)",args:{...o,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("accessKey","j")},N={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},ya=e=>{const[s,a]=ca.useState("søk");return c.jsxs(c.Fragment,{children:[c.jsx(h,{...e,value:s,onChange:n=>{var r;a(n.target.value),(r=e.onChange)==null||r.call(e,n)}}),c.jsx("button",{onClick:()=>a(""),children:"reset"})]})},V={args:{...o,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByText(y.t("ds_forms:searchfield.ClearButtonTitle"));await t(a).toBeInTheDocument();const n=s.getByText("reset");await i.click(n),await d(()=>{t(s.queryByText(y.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:ya},q={name:"With Required",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await t(a).toBeRequired()}},j={name:"With Required And Mark",args:{...o,required:!0,hideLabel:!1,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},ga="Søkefeltet er obligatorisk",M={name:"With ErrorMessage",args:{...o,errorMessage:ga},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e),a=s.getByRole("searchbox"),n=s.getAllByRole("generic")[3];await t(n).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}};var O,U,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(U=g.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var z,J,Q;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=B.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,be,pe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(be=T.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,ye,ge;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueText
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
} satisfies Story`,...(ge=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var ve,fe,Ae;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var Be,we,xe;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Te,ke,Ce;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Se,We,He;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(We=H.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ee,Re,Le;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var De,Fe,Ie;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var Ne,Ve,qe;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(qe=(Ve=L.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var je,Me,Pe;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var $e,_e,Ke;F.parameters={...F.parameters,docs:{...($e=F.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Oe,Ue,Ge;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var ze,Je,Qe;N.parameters={...N.parameters,docs:{...(ze=N.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(Qe=(Je=N.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;V.parameters={...V.parameters,docs:{...(Xe=V.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ze=(Ye=V.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ta;q.parameters={...q.parameters,docs:{...(ea=q.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(aa=q.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,ra;j.parameters={...j.parameters,docs:{...(na=j.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
} satisfies Story`,...(ra=(sa=j.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var oa,la,ia;M.parameters={...M.parameters,docs:{...(oa=M.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(la=M.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};const ja=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled","WithRequired","WithRequiredAndMark","WithErrorMessage"];export{B as Defaults,I as WithAccesskey,F as WithArrowKeyNavigation,v as WithAttributes,V as WithControlled,L as WithCustomButtonTitleText,R as WithCustomButtonTitles,f as WithCustomClassNames,S as WithDefaultValue,W as WithDescription,k as WithDisabled,M as WithErrorMessage,D as WithEventHandlers,H as WithHelpText,N as WithHelpToggleEvent,A as WithLongLabel,E as WithNameAndPlaceholder,g as WithRef,q as WithRequired,j as WithRequiredAndMark,C as WithValue,T as WithVariantLargeAndLongText,w as WithVariants,x as WithVariantsNoIcon,ja as __namedExportsOrder,qa as default};
//# sourceMappingURL=Searchfield.test.stories-CQKQ8EBs.js.map
