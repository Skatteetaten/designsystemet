import{j as c}from"./jsx-runtime-Nms4Y4qS.js";import{r as Xe}from"./index-BwDkhjyp.js";import{g as ea,d as y}from"./index-C498nvnC.js";import{S as h}from"./index-Be268C4q.js";import{w as i,e as t,a as aa,f as p,b as d,u as l}from"./index-B8otpkpo.js";import{w as m}from"./storybook.testing.utils-CMs160i9.js";import{c as u}from"./helpers-Dccz2jQ-.js";import{S as _}from"./icon.systems-DsGmM1wX.js";import{s as ta}from"./SearchField.types-CpBnYA23.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DatePickerCalendar-CBp1RHw1.js";import"./index-CKHxS2Ra.js";import"./index-C3Vp3Ydz.js";import"./index-jWwGX2yX.js";import"./LabelWithHelp-Cd6nOtjt.js";import"./Help-et05bSay.js";import"./index-DWqb7jS3.js";import"./index-BQwW25uL.js";import"./icon.utils-Ceokxv4B.js";import"./base-props.types-sXyoNogd.js";const j=(e,r)=>async({canvasElement:a})=>{const s=i(a).getByRole("searchbox");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute(e,r)},Ca={component:h,title:"Tester/SearchField",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(_),mapping:_},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...ta],control:"inline-radio"},accessKey:{table:{disable:!0,category:u.htmlAttribute}},autoComplete:{table:{disable:!0,category:u.htmlAttribute,defaultValue:{summary:ea()}},type:"string"},disabled:{table:{disable:!0,category:u.htmlAttribute}},form:{table:{disable:!0,category:u.htmlAttribute}},name:{table:{disable:!0,category:u.htmlAttribute}},placeholder:{table:{disable:!0,category:u.htmlAttribute}},readOnly:{table:{disable:!0,category:u.htmlAttribute}},value:{table:{disable:!0,category:u.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}}},b="skattekort",$="Hva leter du etter?",o={label:$},v={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:j("name","dummyNameForwardedFromRef")},g={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByRole("searchbox"),n=r.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},P="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",A={name:"With Custom ClassNames and Long Label (FA3)",args:{...o,label:P,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=e.querySelector(`${m} > div`),n=r.getByText(P),s=e.querySelector(`${m} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(n).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassnameFormContainer")}},f={name:"With Long Label",args:{...o,label:P,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},B={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...o},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${m} input`,`${m} button`],focus:[`${m} input`,`${m} button`],click:[`${m} input`,`${m} button`]}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByRole("searchbox",{name:`${$}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const n=r.getByRole("button",{name:y.t("ds_forms:searchfield.ButtonTitle")});await t(n).toBeInTheDocument(),await t(n).toBeEnabled(),await t(n.tagName).toBe("BUTTON")}},Ye=e=>c.jsxs(c.Fragment,{children:[c.jsx(h,{variant:"medium",...e}),c.jsx(h,{variant:"large",...e}),c.jsx(h,{variant:"extraLarge",...e})]}),w={name:"With Variants (A1b, A2)",args:{...o,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:Ye},T={name:"With Variants Without Icon (A1b, A2)",render:Ye,args:{...o,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},x={name:"With Variant Large And Long Text",args:{...o,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},C={name:"With Disabled",args:{...o,disabled:!0,value:b},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByRole("searchbox"),n=r.getByRole("button");await t(a).toBeDisabled(),await t(n).toBeDisabled()}},k={name:"With Value",args:{...o,value:b},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:j("value",b)},S={name:"With DefaultValue",args:{...o,defaultValue:b},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:j("value",b)},H={name:"With Description (0b, B2)",args:{...o,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},W={name:"With HelpText (0b, B2)",args:{...o,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:$});await t(a).toBeInTheDocument(),await aa.click(a)}},E={name:"With Name And Placeholder (A3, B3)",args:{...o,name:"test_name",placeholder:b},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",b)}},L={name:"With Custom Button Titles (A2, A5)",args:{...o,value:b,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=await r.findByText("clear test"),n=r.getByText("search test");await t(a).toBeInTheDocument(),await t(n).toBeInTheDocument()}},D={name:"With Custom Button Title Text (A2)",args:{...o,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("search test");await t(a).toBeInTheDocument()}},na=e=>{const[r,a]=Xe.useState("Tester events");return c.jsx(h,{...e,label:r,onFocus:n=>{var s;a("Form-element har fått fokus"),(s=e.onFocus)==null||s.call(e,n)},onBlur:n=>{var s;a("Form-element har blitt blurret"),(s=e.onBlur)==null||s.call(e,n)},onChange:n=>{var s;a("Form-element har blitt klikket på"),(s=e.onChange)==null||s.call(e,n)},onClear:n=>{var s;a("Reset har blitt klikket på"),(s=e.onClear)==null||s.call(e,n)},onSearchClick:n=>{var s;a("Søk har blitt klikket på"),(s=e.onSearchClick)==null||s.call(e,n)},onSearch:n=>{var s;a("Søk har blitt aktivert med enter"),(s=e.onSearch)==null||s.call(e,n)}})},F={render:na,name:"With EventHandlers (A7)",args:{...o,onFocus:p(),onBlur:p(),onSearchClick:p(),onSearch:p(),onChange:p(),onClear:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:r})=>{const a=i(r),n=a.getByRole("searchbox");n.focus(),await d(()=>t(e.onFocus).toHaveBeenCalled()),await l.type(n,"02.02.2002"),await d(()=>t(e.onChange).toHaveBeenCalled()),await l.tab(),await d(()=>t(e.onBlur).toHaveBeenCalled());const s=a.getByText(y.t("ds_forms:searchfield.ClearButtonTitle"));await l.click(s),await d(()=>t(e.onClear).toHaveBeenCalled());const Ze=a.getByRole("button",{name:y.t("ds_forms:searchfield.ButtonTitle")});await l.click(Ze),await d(()=>t(e.onSearchClick).toHaveBeenCalled()),await l.type(n,"{enter}"),await d(()=>t(e.onSearch).toHaveBeenCalled())}},R={name:"With ArrowKeyNavgitaion (C2)",args:{...o,results:[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],onResultClick:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:r})=>{const a=i(r),n=a.getByRole("searchbox"),s=await a.findAllByRole("option");n.focus(),await l.keyboard("[ArrowDown]"),await t(s[0]).toHaveFocus(),await l.keyboard("[ArrowDown]"),await t(s[1]).toHaveFocus(),await l.keyboard("[ArrowDown]"),await t(s[2]).toHaveFocus(),await l.keyboard("[ArrowUp]"),await t(s[1]).toHaveFocus(),await l.keyboard("[ArrowUp]"),await t(s[0]).toHaveFocus(),await l.keyboard("[ArrowUp]"),await t(s[4]).toHaveFocus(),await l.keyboard("[Enter]"),await d(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},I={name:"With Accesskey (B5)",args:{...o,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:j("accessKey","j")},N={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},sa=e=>{const[r,a]=Xe.useState("søk");return c.jsxs(c.Fragment,{children:[c.jsx(h,{...e,value:r,onChange:n=>{var s;a(n.target.value),(s=e.onChange)==null||s.call(e,n)}}),c.jsx("button",{onClick:()=>a(""),children:"reset"})]})},V={args:{...o,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByText(y.t("ds_forms:searchfield.ClearButtonTitle"));await t(a).toBeInTheDocument();const n=r.getByText("reset");await l.click(n),await d(()=>{t(r.queryByText(y.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:sa};var K,O,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(O=v.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var q,M,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var z,J,Q;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const label = canvas.getByText(longLabelText);
    // eslint-disable-next-line testing-library/no-node-access
    const searchContainer = canvasElement.querySelector(\`\${wrapper} > div > div\`);
    // eslint-disable-next-line testing-library/no-node-access
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(searchContainer).toHaveClass('dummyClassnameFormContainer');
  }
} satisfies Story`,...(Q=(J=A.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ie;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,ue,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,be,pe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(be=C.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,ye,ve;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var ge,Ae,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:fe.source}}};var Be,we,Te;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var xe,Ce,ke;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Se,He,We;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(He=E.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Ee,Le,De;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Fe,Re,Ie;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Ne,Ve,je;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Pe,$e,_e;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=($e=R.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Ke,Oe,Ue;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var qe,Me,Ge;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var ze,Je,Qe;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(Qe=(Je=V.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};const ka=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled"];export{B as Defaults,I as WithAccesskey,R as WithArrowKeyNavigation,g as WithAttributes,V as WithControlled,D as WithCustomButtonTitleText,L as WithCustomButtonTitles,A as WithCustomClassNames,S as WithDefaultValue,H as WithDescription,C as WithDisabled,F as WithEventHandlers,W as WithHelpText,N as WithHelpToggleEvent,f as WithLongLabel,E as WithNameAndPlaceholder,v as WithRef,k as WithValue,x as WithVariantLargeAndLongText,w as WithVariants,T as WithVariantsNoIcon,ka as __namedExportsOrder,Ca as default};
//# sourceMappingURL=Searchfield.test.stories-BYLMt2l8.js.map
