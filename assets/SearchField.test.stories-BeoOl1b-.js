import{d as u,j as i,r as p}from"./iframe-DyzX2HZk.js";import{S as d,s as ae}from"./index-BsMkEDp2.js";import{A as ne}from"./index-BVZq6FY6.js";import{w as Z}from"./storybook.testing.utils-BgHZnMzD.js";import{S as ee}from"./icon.systems-CftjSuGj.js";const{fireEvent:se,userEvent:c,waitFor:b,within:l,expect:n,fn:m}=__STORYBOOK_MODULE_TEST__,X=(e,t)=>async({canvasElement:a})=>{const o=l(a).getByRole("searchbox");await n(o).toBeInTheDocument(),await n(o).toHaveAttribute(e,t)},re={component:d,title:"Tester/SearchField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},label:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(ee),mapping:ee},hasSearchButtonIcon:{table:{disable:!0}},clearButtonTitle:{table:{disable:!0}},searchButtonTitle:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},results:{table:{disable:!0}},helpText:{table:{disable:!0}},enableSRNavigationHint:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},accessKey:{table:{disable:!0}},autoComplete:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},placeholder:{table:{disable:!0}},readOnly:{table:{disable:!0}},required:{table:{disable:!0}},value:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSearch:{table:{disable:!0}},onClear:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}},onSearchClick:{table:{disable:!0}},onResultClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},h="skattekort",Q="Hva leter du etter?",r={label:Q},y={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:X("name","dummyNameForwardedFromRef")},v={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",hideLabel:!1,form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox"),s=t.getAllByRole("generic")[1];await n(a).toHaveAttribute("id","htmlid-input"),await n(s).toHaveClass("dummyClassname"),await n(s).toHaveAttribute("id","htmlid"),await n(s).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID"),await n(a).toHaveAttribute("form","123form"),await n(a).toHaveAttribute("autocomplete","off")}},Y="Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?",f={name:"With Custom ClassNames and Long Label (FA3)",args:{...r,label:Y,classNames:{container:"dummyClassname",label:"dummyClassname",searchContainer:"dummyClassnameFormContainer"},hideLabel:!1},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=e.querySelector(`${Z} > div`),s=t.getByText(Y),o=e.querySelector(`${Z} > div > div`);await n(a).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(o).toHaveClass("dummyClassnameFormContainer")}},x={name:"With Long Label",args:{...r,label:Y,description:"Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?",helpText:"hjelpetekst",hideLabel:!1},argTypes:{label:{table:{disable:!1}},hideLabel:{table:{disable:!1}}}},A={name:"Defaults Variant Medium (A1a, A2, A3, B1, B4)",args:{...r},argTypes:{label:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox",{name:`${Q}`});await n(a).toBeInTheDocument(),await n(a).toBeEnabled(),await n(a).toHaveAttribute("id"),await n(a.tagName).toBe("INPUT"),await n(a).not.toHaveAttribute("aria-invalid"),await n(a).not.toBeRequired();const s=t.getByRole("button",{name:u.t("ds_forms:searchfield.ButtonTitle")});await n(s).toBeInTheDocument(),await n(s).toBeEnabled(),await n(s.tagName).toBe("BUTTON");const o=u.t("ds_forms:searchfield.Focus");await n(await t.findByText(o)).toBeInTheDocument()}},B={name:"With AriaDescribedBy",render:e=>{const t="searchfield-alert-description-id";return i.jsxs(i.Fragment,{children:[i.jsx(d,{...e,ariaDescribedBy:t,hasSpacing:!0}),i.jsx(ne,{id:t,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for searchfield"})]})},args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox");await n(a).toHaveAttribute("aria-describedby");const s=t.getByText("Dette er en varselmelding for searchfield");await n(s).toBeInTheDocument();const g=(a.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await n(g).toContain("searchfield-alert-description-id")}},te=e=>i.jsxs(i.Fragment,{children:[i.jsx(d,{variant:"medium",...e}),i.jsx(d,{variant:"large",...e}),i.jsx(d,{variant:"extraLarge",...e})]}),w={name:"With Variants (A1b, A2)",args:{...r,hideLabel:!1},argTypes:{variant:{table:{disable:!1}}},render:te},T={name:"With Variants Without Icon (A1b, A2)",render:te,args:{...r,hasSearchButtonIcon:!1},argTypes:{variant:{table:{disable:!1}}}},S={name:"With Variant Large And Long Text",args:{...r,variant:"large",value:"En lang tekst som ikke skal synes bak reset-ikonet"},argTypes:{variant:{table:{disable:!1}},value:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},k={name:"With Disabled",args:{...r,disabled:!0,value:"En lang tekst som ikke skal synes bak reset-ikonet",hideLabel:!1,helpText:"hjelpetekst"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox"),s=t.getByRole("button",{name:u.t("ds_forms:searchfield.ButtonTitle")});await n(a).toBeDisabled(),await n(s).toBeDisabled();const o=t.getByRole("button",{name:u.t("Shared:shared.Help")});await n(o).toBeDisabled()}},W={name:"With Value",args:{...r,value:h},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:X("value",h)},C={name:"With DefaultValue",args:{...r,defaultValue:h},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:X("value",h)},H={name:"With Description (0b, B2)",args:{...r,description:"En liten beskrivelse tekst",hideLabel:!1},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByText("En liten beskrivelse tekst");await n(a).toBeInTheDocument();const s=t.getByRole("searchbox");await n(s).toHaveAttribute("aria-describedby");const o=s.getAttribute("aria-describedby");await n(o).toMatch(/descId-/)}},E={name:"With HelpText (0b, B2)",args:{...r,helpText:"Hjelpetekst",hideLabel:!1},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{description:Q});await n(a).toBeInTheDocument(),await se.click(a)}},L={name:"With Name And Placeholder (A3, B3)",args:{...r,name:"test_name",placeholder:h},argTypes:{name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await n(a).toHaveAttribute("name","test_name"),await n(a).toHaveAttribute("placeholder",h)}},R={name:"With Custom Button Titles (A2, A5)",args:{...r,value:h,clearButtonTitle:"clear test",searchButtonTitle:"search test"},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=await t.findByText("clear test"),s=t.getByText("search test");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},D={name:"With Custom Button Title Text (A2)",args:{...r,searchButtonTitle:"search test",hasSearchButtonIcon:!1},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByText("search test");await n(a).toBeInTheDocument()}},oe=e=>{const[t,a]=p.useState("Tester events");return i.jsx(d,{...e,label:t,onFocus:s=>{a("Form-element har fått fokus"),e.onFocus?.(s)},onBlur:s=>{a("Form-element har blitt blurret"),e.onBlur?.(s)},onChange:s=>{a("Form-element har blitt klikket på"),e.onChange?.(s)},onClear:s=>{a("Reset har blitt klikket på"),e.onClear?.(s)},onSearchClick:s=>{a("Søk har blitt klikket på"),e.onSearchClick?.(s)},onSearch:s=>{a("Søk har blitt aktivert med enter"),e.onSearch?.(s)}})},I={render:oe,name:"With EventHandlers (A7)",args:{...r,onFocus:m(),onBlur:m(),onSearchClick:m(),onSearch:m(),onChange:m(),onClear:m()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const a=l(t),s=a.getByRole("searchbox");s.focus(),await b(()=>n(e.onFocus).toHaveBeenCalled()),await c.type(s,"02.02.2002"),await b(()=>n(e.onChange).toHaveBeenCalled()),await c.tab(),await b(()=>n(e.onBlur).toHaveBeenCalled());const o=a.getByText(u.t("ds_forms:searchfield.ClearButtonTitle"));await c.click(o),await b(()=>n(e.onClear).toHaveBeenCalled());const g=a.getByRole("button",{name:u.t("ds_forms:searchfield.ButtonTitle")});await c.click(g),await b(()=>n(e.onSearchClick).toHaveBeenCalled()),await c.type(s,"{enter}"),await b(()=>n(e.onSearch).toHaveBeenCalled())}},ie=e=>{const[t,a]=p.useState(""),s=p.useMemo(()=>[{description:"Hydrogen",key:"H"},{description:"Helium",key:"He"},{description:"Litium",key:"Li"},{description:"Beryllium",key:"Be"},{description:"Bor",key:"B"}],[]),o=p.useMemo(()=>ae(s,t),[t,s]);return i.jsx(d,{...e,results:o,onChange:g=>{a(g.target.value)}})},F={name:"With ArrowKeyNavgitaion (C2)",render:ie,args:{...r,onResultClick:m()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const a=l(t);a.getByRole("searchbox").focus(),await c.keyboard("h"),await c.keyboard("[backspace]");const o=await a.findAllByRole("option");await c.keyboard("[ArrowDown]"),await n(o[0]).toHaveFocus(),await c.keyboard("[ArrowDown]"),await n(o[1]).toHaveFocus(),await c.keyboard("[ArrowDown]"),await n(o[2]).toHaveFocus(),await c.keyboard("[ArrowUp]"),await n(o[1]).toHaveFocus(),await c.keyboard("[ArrowUp]"),await n(o[0]).toHaveFocus(),await c.keyboard("[ArrowUp]"),await n(o[4]).toHaveFocus(),await c.keyboard("[Enter]"),await b(()=>n(e.onResultClick).toHaveBeenCalledWith({description:"Bor",key:"B"}))}},N={name:"With Accesskey (B5)",args:{...r,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:X("accessKey","j")},j={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",hideLabel:!1,onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disableSnapshot:!0}}},le=e=>{const[t,a]=p.useState("søk");return i.jsxs(i.Fragment,{children:[i.jsx(d,{...e,value:t,onChange:s=>{a(s.target.value),e.onChange?.(s)}}),i.jsx("button",{type:"button",onClick:()=>a(""),children:"reset"})]})},V={args:{...r,helpText:"Hjelpetekst",hideLabel:!1},name:"With Controlled",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByText(u.t("ds_forms:searchfield.ClearButtonTitle"));await n(a).toBeInTheDocument();const s=t.getByText("reset");await c.click(s),await b(()=>{n(t.queryByText(u.t("ds_forms:searchfield.ClearButtonTitle"))).not.toBeInTheDocument()})},render:le},P={name:"With Required",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("searchbox");await n(a).toBeRequired(),await n(a).toHaveAttribute("aria-invalid","false")}},q={name:"With Required And Mark",args:{...r,required:!0,hideLabel:!1,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},ce="Søkefeltet er obligatorisk",M={name:"With ErrorMessage",args:{...r,errorMessage:ce},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox"),s=t.getAllByRole("generic")[3];await n(s).toBeInTheDocument(),await n(a).toHaveAttribute("aria-invalid","true"),await n(a).toHaveAttribute("aria-describedby")}},_={args:{...r,placeholder:"En lang placeholder som ikke skal synes bak reset-ikonet"},argTypes:{placeholder:{table:{disable:!1}}}},O={args:{...r,defaultValue:"En lang value som ikke skal synes bak reset-ikonet"},argTypes:{defaultValue:{table:{disable:!1}}}},K={name:"With Loading",args:{...r,isLoading:!0},argTypes:{isLoading:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox");await c.click(a);const s=await t.findByText(u.t("ds_progress:spinner.LoadingLabel"));await n(s).toBeInTheDocument(),await n(t.queryByRole("listbox")).not.toBeInTheDocument()}},U={name:"With Custom Spinner Label",args:{...r,isLoading:!0,spinnerLabel:"Laster søk..."},argTypes:{spinnerLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox");await c.click(a);const s=await t.findByText("Laster søk...");await n(s).toBeInTheDocument()}},$={name:"With Spinner Props",args:{...r,isLoading:!0,spinnerProps:{size:"small",color:"black"}},argTypes:{spinnerProps:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("searchbox");await c.click(a);const s=await t.findByText(u.t("ds_progress:spinner.LoadingLabel"));await n(s.parentElement).toHaveAttribute("data-size","small"),await n(s.parentElement).toHaveAttribute("data-color","black")}},de=()=>i.jsxs("div",{className:"flex gapS",children:[i.jsx(d,{label:"Søk etter grønnsaker",hideLabel:!1}),i.jsx(d,{label:"Søk etter grønnsaker",helpText:"Hjelpetekst",hideLabel:!1})]}),z={render:de},G={argTypes:{enableSRNavigationHint:{table:{disable:!1},control:"boolean"}},args:{...r,enableSRNavigationHint:!1},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e),a=u.t("ds_forms:searchfield.Focus");await n(t.queryByText(a)).not.toBeInTheDocument()}},ue=()=>{const[e,t]=p.useState(""),a=p.useMemo(()=>[{title:"Ert",description:"Sukkererter er en deilig grønnsak som kan spises rå eller lett kokt."},{title:"Sellerirot",description:"En rotgrønnsak med en karakteristisk smak, ofte brukt i supper og gryteretter."},{title:"Sukkermais",description:"Søte maiskolber som kan grilles, kokes eller spises rå."},{title:"Østerssopp",description:"En deilig soppvariant som kan brukes i ulike retter."},{title:"Aubergine",description:"Også kjent som eggplante, flott for grilling eller steking."},{title:"Cherrytomat",description:"Små, søte tomater som er perfekte for salater eller snacks."}],[]),s=p.useMemo(()=>e.length>=2?ae(a,e):void 0,[e,a]);return i.jsx("div",{tabIndex:-1,children:i.jsx(d,{classNames:{searchResultsList:"searchResultsList"},label:"Søk etter grønnsaker",results:s,hideLabel:!1,value:e,onChange:o=>{t(o.target.value)},onClear:()=>t("")})})},J={name:"With TabIndex Scope",render:ue,args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    await expect(searchbox).not.toHaveAttribute('aria-invalid');
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
} satisfies Story`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'searchfield-alert-description-id';
    return <>
        <SearchField {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for searchfield'}
        </Alert>
      </>;
  },
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
    const searchbox = canvas.getByRole('searchbox');
    await expect(searchbox).toHaveAttribute('aria-describedby');
    const alertText = canvas.getByText('Dette er en varselmelding for searchfield');
    await expect(alertText).toBeInTheDocument();
    const describedBy = searchbox.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('searchfield-alert-description-id');
  }
} satisfies Story`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'En lang tekst som ikke skal synes bak reset-ikonet',
    hideLabel: false,
    helpText: 'hjelpetekst'
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
    const searchButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:searchfield.ButtonTitle')
    });
    await expect(textbox).toBeDisabled();
    await expect(searchButton).toBeDisabled();
    const helpButton = canvas.getByRole('button', {
      name: dsI18n.t('Shared:shared.Help')
    });
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...j.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false
  },
  name: 'With Controlled',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    await expect(textbox).toHaveAttribute('aria-invalid', 'false');
  }
} satisfies Story`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'With Loading',
  args: {
    ...defaultArgs,
    isLoading: true
  },
  argTypes: {
    isLoading: {
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
    const searchbox = canvas.getByRole('searchbox');
    await userEvent.click(searchbox);
    const spinner = await canvas.findByText(dsI18n.t('ds_progress:spinner.LoadingLabel'));
    await expect(spinner).toBeInTheDocument();
    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
  }
} satisfies Story`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Spinner Label',
  args: {
    ...defaultArgs,
    isLoading: true,
    spinnerLabel: 'Laster søk...'
  },
  argTypes: {
    spinnerLabel: {
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
    const searchbox = canvas.getByRole('searchbox');
    await userEvent.click(searchbox);
    const spinner = await canvas.findByText('Laster søk...');
    await expect(spinner).toBeInTheDocument();
  }
} satisfies Story`,...U.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With Spinner Props',
  args: {
    ...defaultArgs,
    isLoading: true,
    spinnerProps: {
      size: 'small',
      color: 'black'
    }
  },
  argTypes: {
    spinnerProps: {
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
    const searchbox = canvas.getByRole('searchbox');
    await userEvent.click(searchbox);
    const spinner = await canvas.findByText(dsI18n.t('ds_progress:spinner.LoadingLabel'));
    await expect(spinner.parentElement).toHaveAttribute('data-size', 'small');
    await expect(spinner.parentElement).toHaveAttribute('data-color', 'black');
  }
} satisfies Story`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: TwoSearchFields
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'With TabIndex Scope',
  render: TemplateWithTabIndex,
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...J.parameters?.docs?.source}}};const be=["WithRef","WithAttributes","WithCustomClassNames","WithLongLabel","Defaults","WithAriaDescribedBy","WithVariants","WithVariantsNoIcon","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithDescription","WithHelpText","WithNameAndPlaceholder","WithCustomButtonTitles","WithCustomButtonTitleText","WithEventHandlers","WithArrowKeyNavigation","WithAccesskey","WithHelpToggleEvent","WithControlled","WithRequired","WithRequiredAndMark","WithErrorMessage","WithLongPlaceholder","WithLongInput","WithLoading","WithCustomSpinnerLabel","WithSpinnerProps","TwoSearchFieldsOneWithHelpText","WithEnableSRNavigationHintsFalse","WithTabIndexScope"],ve=Object.freeze(Object.defineProperty({__proto__:null,Defaults:A,TwoSearchFieldsOneWithHelpText:z,WithAccesskey:N,WithAriaDescribedBy:B,WithArrowKeyNavigation:F,WithAttributes:v,WithControlled:V,WithCustomButtonTitleText:D,WithCustomButtonTitles:R,WithCustomClassNames:f,WithCustomSpinnerLabel:U,WithDefaultValue:C,WithDescription:H,WithDisabled:k,WithEnableSRNavigationHintsFalse:G,WithErrorMessage:M,WithEventHandlers:I,WithHelpText:E,WithHelpToggleEvent:j,WithLoading:K,WithLongInput:O,WithLongLabel:x,WithLongPlaceholder:_,WithNameAndPlaceholder:L,WithRef:y,WithRequired:P,WithRequiredAndMark:q,WithSpinnerProps:$,WithTabIndexScope:J,WithValue:W,WithVariantLargeAndLongText:S,WithVariants:w,WithVariantsNoIcon:T,__namedExportsOrder:be,default:re},Symbol.toStringTag,{value:"Module"}));export{ve as S};
//# sourceMappingURL=SearchField.test.stories-BeoOl1b-.js.map
