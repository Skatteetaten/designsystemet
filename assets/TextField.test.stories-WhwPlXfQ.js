import{e as o,j as l,r as Y}from"./iframe-VHQh6taY.js";import"./index-lB78RBB2.js";import{w as re}from"./storybook.testing.utils-BgHZnMzD.js";import{S as ee}from"./icon.systems-pjRjKMCZ.js";import{T as $}from"./DatePickerCalendar-fvOeZNLZ.js";const{expect:a,fn:u,userEvent:c,waitFor:m,within:i}=__STORYBOOK_MODULE_TEST__,Z=(e,s)=>async({canvasElement:t})=>{const d=i(t).getByRole("textbox");await a(d).toBeInTheDocument(),await a(d).toHaveAttribute(e,s)},oe={component:$,title:"Tester/TextField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},variant:{table:{disable:!0,category:o.props},control:"inline-radio"},classNames:{table:{disable:!0,category:o.props}},characterLimit:{table:{disable:!0,category:o.props}},defaultValue:{control:"text",table:{disable:!0,category:o.props}},description:{table:{disable:!0,category:o.props}},errorMessage:{table:{disable:!0,category:o.props}},hasSpacing:{table:{disable:!0,category:o.props}},helpSvgPath:{table:{disable:!0,category:o.props},options:Object.keys(ee),mapping:ee},helpText:{table:{disable:!0,category:o.props}},hideLabel:{table:{disable:!0,category:o.props}},label:{table:{disable:!0,category:o.props}},list:{table:{disable:!0,category:o.props}},showRequiredMark:{table:{disable:!0,category:o.props}},thousandSeparator:{table:{disable:!0,category:o.props}},titleHelpSvg:{table:{disable:!0,category:o.props}},autoComplete:{table:{disable:!0,category:o.htmlAttribute},type:"string"},disabled:{table:{disable:!0,category:o.htmlAttribute}},form:{table:{disable:!0,category:o.htmlAttribute}},inputMode:{table:{disable:!0,category:o.htmlAttribute}},name:{table:{disable:!0,category:o.htmlAttribute}},maxLength:{table:{disable:!0,category:o.htmlAttribute}},minLength:{table:{disable:!0,category:o.htmlAttribute}},pattern:{table:{disable:!0,category:o.htmlAttribute}},placeholder:{table:{disable:!0,category:o.htmlAttribute}},readOnly:{table:{disable:!0,category:o.htmlAttribute}},required:{table:{disable:!0,category:o.htmlAttribute}},value:{table:{disable:!0,category:o.htmlAttribute}},onBlur:{table:{disable:!0,category:o.event}},onChange:{table:{disable:!0,category:o.event}},onFocus:{table:{disable:!0,category:o.event}},onHelpToggle:{table:{disable:!0,category:o.event}},onKeyDown:{table:{disable:!0,category:o.event}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},p="Kari Nordmann",X="Navn er obligatorisk",G="Navn",r={label:G},b={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:Z("name","dummyNameForwardedFromRef")},g={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=i(e),t=s.getByRole("textbox"),n=s.getAllByRole("generic")[1];await a(t).toHaveAttribute("id","htmlid"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID"),await a(t).toHaveAttribute("form","formid123"),await a(t).toHaveAttribute("autocomplete","off")}},h={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:X},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),t=e.querySelector(`${re} > div`),n=s.getByText(G),d=e.querySelector("[id^=textFieldErrorId]>div");await a(t).toHaveClass("dummyClassname"),await a(n).toHaveClass("dummyClassname"),await a(d).toHaveClass("dummyClassname"),await a(s.getByText("beskrivelse")).toHaveClass("dummyClassname"),await a(s.getByRole("textbox")).toHaveClass("dummyClassname")}},x={name:"Defaults Variant Medium (A1, A2, B2, FS-A2)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox",{name:G});await a(t).toBeInTheDocument(),await a(t).toBeEnabled(),await a(t).toHaveAttribute("id"),await a(t.tagName).toBe("INPUT"),await a(t).not.toBeRequired(),await a(t).not.toHaveAttribute("aria-invalid"),await a(t).not.toHaveAttribute("aria-describedby");const n=e.querySelector("[id^=textFieldErrorId]");await a(n).toBeInTheDocument()}},v={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},y={name:"With Disabled (B1, B8)",args:{...r,disabled:!0,value:p},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox");await a(t).toBeDisabled()}},f={name:"With Value",args:{...r,value:p},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:Z("value",p)},w={name:"With DefaultValue",args:{...r,defaultValue:p},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:Z("value",p)},S={name:"With DefaultValue and ThousandSeparator",args:{...r,defaultValue:1e4,thousandSeparator:!0},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:Z("value","10 000")},A={name:"With Value and ThousandSeparator",args:{...r,value:1e4,thousandSeparator:!0},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:Z("value","10 000")},T={name:"With AutoComplete InputMode Name And Placeholder (A3, A6, B1)",args:{...r,autoComplete:"given-name",inputMode:"text",name:"test_name",placeholder:p},argTypes:{autoComplete:{table:{disable:!1}},inputMode:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox");await a(t).toHaveAttribute("autocomplete","given-name"),await a(t).toHaveAttribute("inputmode","text"),await a(t).toHaveAttribute("name","test_name"),await a(t).toHaveAttribute("placeholder",p)}},C={name:"With ReadOnly (B1, B6)",args:{...r,value:p,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox");await a(t).toHaveAttribute("readonly")}},B={name:"With Required (B4)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox");await a(t).toBeRequired()}},W={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},H={name:"With MinLength And MaxLength (A5, B1)",args:{...r,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox");await a(t).toHaveAttribute("maxlength"),await a(t).toHaveAttribute("minlength")}},E={name:"With Pattern As Input (A5, B1)",args:{...r,pattern:"[a-z]"},argTypes:{pattern:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox");await a(t).toHaveAttribute("pattern"),await a(t.tagName).toBe("INPUT")}},k={name:"Without ErrorMessage (B5)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),t=s.getByRole("textbox"),n=e.querySelector("[id^=textFieldErrorId]");await a(n).toBeInTheDocument(),await a(s.queryByText(X)).not.toBeInTheDocument(),await a(t).not.toHaveAttribute("aria-invalid","true"),await a(t).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disableSnapshot:!0}}},L={name:"With ErrorMessage(B5)",args:{...r,errorMessage:X},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{pseudoStates:["hover","focus-visible"]},play:async({canvasElement:e})=>{const s=i(e),t=s.getByRole("textbox",{description:X}),n=s.getAllByRole("generic")[3];await a(n).toBeInTheDocument(),await a(t).toHaveAttribute("aria-invalid","true"),await a(t).toHaveAttribute("aria-describedby")}},R={name:"With Description (FS-A3)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),t=s.getByText("En liten beskrivelse tekst");await a(t).toBeInTheDocument();const n=s.getByRole("textbox");await a(n).toHaveAttribute("aria-describedby");const d=n.getAttribute("aria-describedby");await a(d).toMatch(/descId-/)}},M={name:"With HideLabel (B2)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getByRole("textbox",{name:G});await a(t).toBeInTheDocument()}},D={name:"With ThousandSeparator As Input (A8 delvis)",args:{...r,thousandSeparator:!0,onChange:u()},argTypes:{thousandSeparator:{table:{disable:!1}}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await a(n.tagName).toBe("INPUT"),n.focus(),await c.type(n,"A10000"),await m(()=>a(e.onChange).toHaveBeenCalled()),await a(n).toHaveValue("10 000")}},V={name:"With ThousandSeparator and negative number value",args:{...r,thousandSeparator:!0,onChange:u()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await a(n.tagName).toBe("INPUT"),n.focus(),await c.type(n,"-A10-000-"),await m(()=>a(e.onChange).toHaveBeenCalled()),await a(n).toHaveValue("-10 000")}},F={name:"With HelpText (A1)",args:{...r,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getByRole("button",{description:G});await a(t).toBeInTheDocument()}},I={name:"With HelpText And Description (A1)",args:{...r,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}}},ae=e=>{const[s,t]=Y.useState("Tester events");return l.jsx($,{...e,label:s,onFocus:n=>{t("TextField har fått fokus"),e.onFocus&&e.onFocus(n)},onBlur:n=>{t("TextField har blitt blurret"),e.onBlur&&e.onBlur(n)},onChange:n=>{t("TextField har blitt klikket på"),e.onChange&&e.onChange(n)}})},N={render:ae,name:"With EventHandlers (A4)",args:{...r,onFocus:u(),onBlur:u(),onChange:u()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");n.focus(),await m(()=>a(e.onFocus).toHaveBeenCalled()),await c.type(n,"Olav Nordmann"),await m(()=>a(e.onChange).toHaveBeenCalled()),await c.tab(),await m(()=>a(e.onBlur).toHaveBeenCalled())}},P={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},q={name:"With  Datalist (A13, A14)",render:()=>l.jsxs(l.Fragment,{children:[l.jsx($,{label:"nettlesere",list:"browsers"}),l.jsxs("datalist",{id:"browsers",children:[l.jsx("option",{value:"Edge"}),l.jsx("option",{value:"Firefox"}),l.jsx("option",{value:"Chrome"}),l.jsx("option",{value:"Opera"}),l.jsx("option",{value:"Safari"})]})]}),args:{...r},argTypes:{defaultValue:{table:{disable:!1}},list:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getByRole("combobox");await a(t).toHaveAttribute("list","browsers")}},j={args:{label:"Ledetekst",className:"textField150",defaultValue:"Dette er en lang tekst som skal vises i tekstfeltet"},argTypes:{defaultValue:{table:{disable:!1}}}},Q=e=>{const[s,t]=Y.useState("");return l.jsx($,{...e,value:s,characterLimit:50,onChange:n=>{t(n.target.value)}})},O={name:"With CharacterLimit (A10)",render:Q,args:{...r,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},_={name:"With CharacterLimit Exceeded (A10)",render:Q,args:{...r,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),t=s.getByRole("textbox"),n="Dette er en kort tekst.",d="Dette er en veldig lang tekst som bør være mer enn 50 tegn";await c.type(t,n);const ne=await s.findByText("27 tegn igjen");a(ne).toBeInTheDocument(),await c.clear(t),await c.type(t,d);const se=await s.findByText("8 tegn for mye");a(se).toBeInTheDocument()}},U={name:"With CharacterLimit And Error (A10)",render:Q,args:{...r,errorMessage:"Feilmelding",characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},z={name:"With ThousandSeparator and undo redo",render:ae,args:{...r,thousandSeparator:!0,onChange:u()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await a(n.tagName).toBe("INPUT"),n.focus(),await c.type(n,"-A111-222333-"),await m(()=>a(e.onChange).toHaveBeenCalled()),await a(n).toHaveValue("-111 222 333"),await c.type(n,"111"),await c.keyboard("{Meta>}z{/Meta}"),await a(n).toHaveValue("-11 122 233 311"),await c.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a(n).toHaveValue("-111 222 333 111")}},te=e=>{const[s,t]=Y.useState("10 000"),n=d=>{t(d.target.value),e.onChange?.(d)};return l.jsxs(l.Fragment,{children:[l.jsx($,{...e,value:s,thousandSeparator:!0,onChange:n}),l.jsx("pre",{children:`value: ${s}`})]})},J={name:"With Fires onChange when Backspace at separator",render:te,args:{...r,onChange:u()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await a(n).toHaveValue("10 000"),await a(e.onChange).not.toHaveBeenCalled(),n.focus(),await c.keyboard("{ArrowLeft}{ArrowLeft}{ArrowLeft}"),await a(e.onChange).not.toHaveBeenCalled(),await c.keyboard("{Backspace}"),await a(n).toHaveValue("1 000"),await a(e.onChange).toHaveBeenCalledTimes(1)}},K={name:"With Fires onChange when Delete at separator",render:te,args:{...r,onChange:u()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await a(n).toHaveValue("10 000"),await a(e.onChange).not.toHaveBeenCalled(),n.focus(),await c.keyboard("{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}"),await a(e.onChange).not.toHaveBeenCalled(),await c.keyboard("{Delete}"),await a(n).toHaveValue("1 000"),await a(e.onChange).toHaveBeenCalledTimes(1)}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: 'formid123'
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
    const textbox = canvas.getByRole('textbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(textbox).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(textbox).toHaveAttribute('data-testid', '123ID');
    await expect(textbox).toHaveAttribute('form', 'formid123');
    await expect(textbox).toHaveAttribute('autocomplete', 'off');
  }
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      errorMessage: 'dummyClassname',
      textbox: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname'
    },
    description: 'beskrivelse',
    helpText: 'HJEEEEEEELP',
    errorMessage: errorMessageText
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
    const label = canvas.getByText(defaultLabelText);
    const errorMessageContainer = canvasElement.querySelector('[id^=textFieldErrorId]>div');
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
    await expect(canvas.getByRole('textbox')).toHaveClass('dummyClassname');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Defaults Variant Medium (A1, A2, B2, FS-A2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    label: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox', {
      name: defaultLabelText
    });
    await expect(textbox).toBeInTheDocument();
    await expect(textbox).toBeEnabled();
    await expect(textbox).toHaveAttribute('id');
    await expect(textbox.tagName).toBe('INPUT');
    await expect(textbox).not.toBeRequired();
    await expect(textbox).not.toHaveAttribute('aria-invalid');
    await expect(textbox).not.toHaveAttribute('aria-describedby');
    const errorMessageContainer = canvasElement.querySelector('[id^=textFieldErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Large (A1)',
  args: {
    ...defaultArgs,
    variant: 'large'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (B1, B8)',
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
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeDisabled();
  }
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With DefaultValue and ThousandSeparator',
  args: {
    ...defaultArgs,
    defaultValue: 10000,
    thousandSeparator: true
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
  play: verifyAttribute('value', '10 000')
} satisfies Story`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Value and ThousandSeparator',
  args: {
    ...defaultArgs,
    value: 10000,
    thousandSeparator: true
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
  play: verifyAttribute('value', '10 000')
} satisfies Story`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With AutoComplete InputMode Name And Placeholder (A3, A6, B1)',
  args: {
    ...defaultArgs,
    autoComplete: 'given-name',
    inputMode: 'text',
    name: 'test_name',
    placeholder: valueText
  },
  argTypes: {
    autoComplete: {
      table: {
        disable: false
      }
    },
    inputMode: {
      table: {
        disable: false
      }
    },
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('autocomplete', 'given-name');
    await expect(textbox).toHaveAttribute('inputmode', 'text');
    await expect(textbox).toHaveAttribute('name', 'test_name');
    await expect(textbox).toHaveAttribute('placeholder', valueText);
  }
} satisfies Story`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With ReadOnly (B1, B6)',
  args: {
    ...defaultArgs,
    value: valueText,
    readOnly: true
  },
  argTypes: {
    readOnly: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('readonly');
  }
} satisfies Story`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Required (B4)',
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeRequired();
  }
} satisfies Story`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With Required And Mark (B4, FS-A4 delvis)',
  args: {
    ...defaultArgs,
    required: true,
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
} satisfies Story`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With MinLength And MaxLength (A5, B1)',
  args: {
    ...defaultArgs,
    maxLength: 50,
    minLength: 10
  },
  argTypes: {
    maxLength: {
      table: {
        disable: false
      }
    },
    minLength: {
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('maxlength');
    await expect(textbox).toHaveAttribute('minlength');
  }
} satisfies Story`,...H.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Pattern As Input (A5, B1)',
  args: {
    ...defaultArgs,
    pattern: '[a-z]'
  },
  argTypes: {
    pattern: {
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('pattern');
    await expect(textbox.tagName).toBe('INPUT');
  }
} satisfies Story`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Without ErrorMessage (B5)',
  args: {
    ...defaultArgs
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
    const textbox = canvas.getByRole('textbox');
    const errorMessageContainer = canvasElement.querySelector('[id^=textFieldErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(canvas.queryByText(errorMessageText)).not.toBeInTheDocument();
    await expect(textbox).not.toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).not.toHaveAttribute('aria-describedby');
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With ErrorMessage(B5)',
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
  parameters: {
    pseudoStates: ['hover', 'focus-visible']
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox', {
      description: errorMessageText
    });
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(textbox).toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).toHaveAttribute('aria-describedby');
  }
} satisfies Story`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With Description (FS-A3)',
  args: {
    ...defaultArgs,
    description: 'En liten beskrivelse tekst'
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('aria-describedby');
    const describedbyValue = textbox.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'With HideLabel (B2)',
  args: {
    ...defaultArgs,
    hideLabel: true
  },
  argTypes: {
    hideLabel: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox', {
      name: defaultLabelText
    });
    await expect(textbox).toBeInTheDocument();
  }
} satisfies Story`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With ThousandSeparator As Input (A8 delvis)',
  args: {
    ...defaultArgs,
    thousandSeparator: true,
    onChange: fn()
  },
  argTypes: {
    thousandSeparator: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('INPUT');
    textbox.focus();
    await userEvent.type(textbox, 'A10000');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(textbox).toHaveValue('10 000');
  }
} satisfies Story`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'With ThousandSeparator and negative number value',
  args: {
    ...defaultArgs,
    thousandSeparator: true,
    onChange: fn()
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    },
    thousandSeparator: {
      table: {
        disable: true
      }
    }
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('INPUT');
    textbox.focus();
    await userEvent.type(textbox, '-A10-000-');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(textbox).toHaveValue('-10 000');
  }
} satisfies Story`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.'
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
  }
} satisfies Story`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'With HelpText And Description (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.',
    description: 'En liten beskrivelse tekst'
  },
  argTypes: {
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
  }
} satisfies Story`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A4)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn()
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
    const textbox = canvas.getByRole('textbox');
    textbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(textbox, 'Olav Nordmann');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  }
} satisfies Story`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'With  Datalist (A13, A14)',
  render: (): JSX.Element => <>
      <TextField label={'nettlesere'} list={'browsers'} />
      <datalist id={'browsers'}>
        <option value={'Edge'} />
        <option value={'Firefox'} />
        <option value={'Chrome'} />
        <option value={'Opera'} />
        <option value={'Safari'} />
      </datalist>
    </>,
  args: {
    ...defaultArgs
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    },
    list: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('combobox');
    await expect(textbox).toHaveAttribute('list', 'browsers');
  }
} satisfies Story`,...q.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ledetekst',
    className: 'textField150',
    defaultValue: 'Dette er en lang tekst som skal vises i tekstfeltet'
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'With CharacterLimit (A10)',
  render: TemplateWithCharacterCounter,
  args: {
    ...defaultArgs,
    characterLimit: 50
  },
  argTypes: {
    characterLimit: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With CharacterLimit Exceeded (A10)',
  render: TemplateWithCharacterCounter,
  args: {
    ...defaultArgs,
    characterLimit: 50
  },
  argTypes: {
    characterLimit: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const shortText = 'Dette er en kort tekst.';
    const longText = 'Dette er en veldig lang tekst som bør være mer enn 50 tegn';
    await userEvent.type(textArea, shortText);
    const remainingCount = await canvas.findByText('27 tegn igjen');
    expect(remainingCount).toBeInTheDocument();
    await userEvent.clear(textArea);
    await userEvent.type(textArea, longText);
    const exceededCount = await canvas.findByText('8 tegn for mye');
    expect(exceededCount).toBeInTheDocument();
  }
} satisfies Story`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With CharacterLimit And Error (A10)',
  render: TemplateWithCharacterCounter,
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    characterLimit: 50
  },
  argTypes: {
    characterLimit: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...U.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'With ThousandSeparator and undo redo',
  render: EventHandlersTemplate,
  args: {
    ...defaultArgs,
    thousandSeparator: true,
    onChange: fn()
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    },
    thousandSeparator: {
      table: {
        disable: true
      }
    }
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('INPUT');
    textbox.focus();
    await userEvent.type(textbox, '-A111-222333-');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(textbox).toHaveValue('-111 222 333');
    await userEvent.type(textbox, '111');

    // Undo last input step (Cmd+Z)
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('-11 122 233 311');

    // Redo (Cmd+Shift+Z)
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue('-111 222 333 111');
  }
} satisfies Story`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'With Fires onChange when Backspace at separator',
  render: ControlledTemplate,
  args: {
    ...defaultArgs,
    onChange: fn()
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
    const textbox = canvas.getByRole('textbox');

    // Initial formatted value
    await expect(textbox).toHaveValue('10 000');
    await expect(args.onChange).not.toHaveBeenCalled();

    // Move cursor to just after the space separator: from end (index 6) to index 3
    textbox.focus();
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}{ArrowLeft}');
    await expect(args.onChange).not.toHaveBeenCalled(); // Arrow keys should not trigger change

    // Press Backspace (custom logic should fire synthetic onChange)
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue('1 000');
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  }
} satisfies Story`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'With Fires onChange when Delete at separator',
  render: ControlledTemplate,
  args: {
    ...defaultArgs,
    onChange: fn()
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
    const textbox = canvas.getByRole('textbox');

    // Initial formatted value
    await expect(textbox).toHaveValue('10 000');
    await expect(args.onChange).not.toHaveBeenCalled();

    // Move cursor to just after the before separator: from end (index 6) to index 2
    textbox.focus();
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}');
    await expect(args.onChange).not.toHaveBeenCalled(); // Arrow keys should not trigger change

    // Press Delete (custom logic should fire synthetic onChange)
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue('1 000');
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  }
} satisfies Story`,...K.parameters?.docs?.source}}};const ie=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndThousandSeparator","WithValueAndThousandSeparator","WithAutoCompleteInputModeNameAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithPattern","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithThousandSeparator","WithThousandSeparatorAndNegativeValue","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithDataList","WithLongInput","WithCharacterLimit","WithCharacterLimitExceeded","WithCharacterLimitAndError","WithThousandSeparatorAndUndoRedo","FiresOnChangeWhenBackspaceAtSeparator","FiresOnChangeWhenDeleteAtSeparator"],me=Object.freeze(Object.defineProperty({__proto__:null,Defaults:x,FiresOnChangeWhenBackspaceAtSeparator:J,FiresOnChangeWhenDeleteAtSeparator:K,WithAttributes:g,WithAutoCompleteInputModeNameAndPlaceholder:T,WithCharacterLimit:O,WithCharacterLimitAndError:U,WithCharacterLimitExceeded:_,WithCustomClassNames:h,WithDataList:q,WithDefaultValue:w,WithDefaultValueAndThousandSeparator:S,WithDescription:R,WithDisabled:y,WithErrorMessage:L,WithEventHandlers:N,WithHelpText:F,WithHelpTextAndDescription:I,WithHelpToggleEvent:P,WithHideLabel:M,WithLongInput:j,WithMinAndMaxLength:H,WithPattern:E,WithReadOnly:C,WithRef:b,WithRequired:B,WithRequiredAndMark:W,WithThousandSeparator:D,WithThousandSeparatorAndNegativeValue:V,WithThousandSeparatorAndUndoRedo:z,WithValue:f,WithValueAndThousandSeparator:A,WithVariantLarge:v,WithoutError:k,__namedExportsOrder:ie,default:oe},Symbol.toStringTag,{value:"Module"}));export{me as T};
//# sourceMappingURL=TextField.test.stories-WhwPlXfQ.js.map
