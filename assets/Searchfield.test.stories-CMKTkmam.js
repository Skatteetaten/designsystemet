import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{r as Je}from"./index-BwDkhjyp.js";import{g as Qe,d as V}from"./index-CI44Z2h3.js";import{S as h}from"./index-FK3RsA-s.js";import{w as i,e as t,b as Xe,f as m,c as b,u as l}from"./index-hUG6DWTw.js";import{w as u}from"./storybook.testing.utils-CMs160i9.js";import{c}from"./helpers-CDRJ97Ot.js";import{S as $}from"./icon.systems-Cj7Nt_Zb.js";import{s as Ye}from"./SearchField.types-BhUs9PjU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DatePickerCalendar-CuGySpz0.js";import"./index-DMYlLpXe.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./LabelWithHelp-BmjIbcxG.js";import"./Help-CLr4Mr4j.js";import"./index-CCUfsLXI.js";import"./index-BdP0pRE8.js";import"./icon.utils-Djpt9B5F.js";import"./base-props.types-BkCKQDF7.js";const I=(e,r)=>async({canvasElement:a})=>{const s=i(a).getByRole("searchbox");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute(e,r)},fa={component:h,title:"Tester/SearchField",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys($),mapping:$},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...Ye],control:"inline-radio"},accessKey:{table:{disable:!0,category:c.htmlAttribute}},autoComplete:{table:{disable:!0,category:c.htmlAttribute,defaultValue:{summary:Qe()}},type:"string"},disabled:{table:{disable:!0,category:c.htmlAttribute}},form:{table:{disable:!0,category:c.htmlAttribute}},name:{table:{disable:!0,category:c.htmlAttribute}},placeholder:{table:{disable:!0,category:c.htmlAttribute}},readOnly:{table:{disable:!0,category:c.htmlAttribute}},value:{table:{disable:!0,category:c.htmlAttribute}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}}},d="skattekort",P="Hva leter du etter?",o={label:P},y={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:I("name","dummyNameForwardedFromRef")},v={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByRole("searchbox"),n=r.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid-input"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","123form"),await t(a).toHaveAttribute("autocomplete","off")}},j="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",A={name:"With Custom ClassNames and Long Label (FA3)",args:{...o,label:j,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=e.querySelector(`${u} > div`),n=r.getByText(j),s=e.querySelector(`${u} > div > div`);await t(a).toHaveClass("dummyClassname"),await t(n).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassnameFormContainer")}},g={name:"With Long Label",args:{...o,label:j,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},f={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...o},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${u} input`,`${u} button`],focus:[`${u} input`,`${u} button`],click:[`${u} input`,`${u} button`]}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByRole("searchbox",{name:`${P}`});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired();const n=r.getByRole("button",{name:V.t("ds_forms:searchfield.ButtonTitle")});await t(n).toBeInTheDocument(),await t(n).toBeEnabled(),await t(n.tagName).toBe("BUTTON")}},Ge=e=>p.jsxs(p.Fragment,{children:[p.jsx(h,{variant:"medium",...e}),p.jsx(h,{variant:"large",...e}),p.jsx(h,{variant:"extraLarge",...e})]}),w={name:"With Variants (A1b, A2)",args:{...o,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:Ge},B={name:"With Variants Without Icon (A1b, A2)",render:Ge,args:{...o,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},x={name:"With Variant Large And Long Text",args:{...o,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},T={name:"With Disabled",args:{...o,disabled:!0,value:d},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=r.getByRole("searchbox"),n=r.getByRole("button");await t(a).toBeDisabled(),await t(n).toBeDisabled()}},k={name:"With Value",args:{...o,value:d},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:I("value",d)},C={name:"With DefaultValue",args:{...o,defaultValue:d},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:I("value",d)},S={name:"With Description (0b, B2)",args:{...o,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},H={name:"With HelpText (0b, B2)",args:{...o,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:P});await t(a).toBeInTheDocument(),await Xe.click(a)}},W={name:"With Name And Placeholder (A3, B3)",args:{...o,name:"test_name",placeholder:d},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("searchbox");await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",d)}},E={name:"With Custom Button Titles (A2, A5)",args:{...o,value:d,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=i(e),a=await r.findByText("clear test"),n=r.getByText("search test");await t(a).toBeInTheDocument(),await t(n).toBeInTheDocument()}},L={name:"With Custom Button Title Text (A2)",args:{...o,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("search test");await t(a).toBeInTheDocument()}},Ze=e=>{const[r,a]=Je.useState("Tester events");return p.jsx(h,{...e,label:r,onFocus:n=>{var s;a("Form-element har fått fokus"),(s=e.onFocus)==null||s.call(e,n)},onBlur:n=>{var s;a("Form-element har blitt blurret"),(s=e.onBlur)==null||s.call(e,n)},onChange:n=>{var s;a("Form-element har blitt klikket på"),(s=e.onChange)==null||s.call(e,n)},onClear:n=>{var s;a("Reset har blitt klikket på"),(s=e.onClear)==null||s.call(e,n)},onSearchClick:n=>{var s;a("Søk har blitt klikket på"),(s=e.onSearchClick)==null||s.call(e,n)},onSearch:n=>{var s;a("Søk har blitt aktivert med enter"),(s=e.onSearch)==null||s.call(e,n)}})},F={render:Ze,name:"With EventHandlers (A7)",args:{...o,onFocus:m(),onBlur:m(),onSearchClick:m(),onSearch:m(),onChange:m(),onClear:m()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:r})=>{const a=i(r),n=a.getByRole("searchbox");n.focus(),await b(()=>t(e.onFocus).toHaveBeenCalled()),await l.type(n,"02.02.2002"),await b(()=>t(e.onChange).toHaveBeenCalled()),await l.tab(),await b(()=>t(e.onBlur).toHaveBeenCalled());const s=a.getByText(V.t("ds_forms:searchfield.ClearButtonTitle"));await l.click(s),await b(()=>t(e.onClear).toHaveBeenCalled());const ze=a.getByRole("button",{name:V.t("ds_forms:searchfield.ButtonTitle")});await l.click(ze),await b(()=>t(e.onSearchClick).toHaveBeenCalled()),await l.type(n,"{enter}"),await b(()=>t(e.onSearch).toHaveBeenCalled())}},D={name:"With ArrowKeyNavgitaion (C2)",args:{...o,results:[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],onResultClick:m()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:r})=>{const a=i(r),n=a.getByRole("searchbox"),s=await a.findAllByRole("option");n.focus(),await l.keyboard("[ArrowDown]"),await t(s[0]).toHaveFocus(),await l.keyboard("[ArrowDown]"),await t(s[1]).toHaveFocus(),await l.keyboard("[ArrowDown]"),await t(s[2]).toHaveFocus(),await l.keyboard("[ArrowUp]"),await t(s[1]).toHaveFocus(),await l.keyboard("[ArrowUp]"),await t(s[0]).toHaveFocus(),await l.keyboard("[ArrowUp]"),await t(s[4]).toHaveFocus(),await l.keyboard("[Enter]"),await b(()=>t(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},R={name:"With Accesskey (B5)",args:{...o,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:I("accessKey","j")},N={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}};var _,K,O;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(K=y.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var U,q,M;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(q=v.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var G,z,J;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(z=A.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,ue;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,be;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(me=T.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var pe,he,ye;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ve,Ae,ge;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:ge.source}}};var fe,we,Be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var xe,Te,ke;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ce,Se,He;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:He.source}}};var We,Ee,Le;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Fe,De,Re;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ne,Ie,Ve;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var je,Pe,$e;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...($e=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};var _e,Ke,Oe;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Ke=R.parameters)==null?void 0:Ke.docs)==null?void 0:Oe.source}}};var Ue,qe,Me;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Me=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};const wa=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent"];export{f as Defaults,R as WithAccesskey,D as WithArrowKeyNavigation,v as WithAttributes,L as WithCustomButtonTitleText,E as WithCustomButtonTitles,A as WithCustomClassNames,C as WithDefaultValue,S as WithDescription,T as WithDisabled,F as WithEventHandlers,H as WithHelpText,N as WithHelpToggleEvent,g as WithLongLabel,W as WithNameAndPlaceholder,y as WithRef,k as WithValue,x as WithVariantLargeAndLongText,w as WithVariants,B as WithVariantsNoIcon,wa as __namedExportsOrder,fa as default};
//# sourceMappingURL=Searchfield.test.stories-CMKTkmam.js.map
