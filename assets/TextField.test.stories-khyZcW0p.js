import{f as r,j as l,r as qa}from"./iframe-CdXtTKZQ.js";import"./index-CLKUz3Po.js";import{w as Ua}from"./storybook.testing.utils-BgHZnMzD.js";import{S as X}from"./icon.systems-eQup-rxy.js";import{T as $}from"./DatePickerCalendar-ByRci1Oe.js";const{expect:t,fn:p,userEvent:c,waitFor:m,within:i}=__STORYBOOK_MODULE_TEST__,J=(e,s)=>async({canvasElement:a})=>{const d=i(a).getByRole("textbox");await t(d).toBeInTheDocument(),await t(d).toHaveAttribute(e,s)},za={component:$,title:"Tester/TextField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},variant:{table:{disable:!0,category:r.props},control:"inline-radio"},classNames:{table:{disable:!0,category:r.props}},characterLimit:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},hasSpacing:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(X),mapping:X},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},list:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},thousandSeparator:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},inputMode:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},pattern:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0,category:r.event}},onKeyDown:{table:{disable:!0,category:r.event}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u="Kari Nordmann",Z="Navn er obligatorisk",K="Navn",o={label:K},b={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:J("name","dummyNameForwardedFromRef")},g={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=i(e),a=s.getByRole("textbox"),n=s.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123"),await t(a).toHaveAttribute("autocomplete","off")}},x={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:Z},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),a=e.querySelector(`${Ua} > div`),n=s.getByText(K),d=e.querySelector("[id^=textFieldErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(n).toHaveClass("dummyClassname"),await t(d).toHaveClass("dummyClassname"),await t(s.getByText("beskrivelse")).toHaveClass("dummyClassname"),await t(s.getByRole("textbox")).toHaveClass("dummyClassname")}},h={name:"Defaults Variant Medium (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox",{name:K});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const n=e.querySelector("[id^=textFieldErrorId]");await t(n).toBeInTheDocument()}},v={name:"With Variant Large (A1)",args:{...o,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},y={name:"With Disabled (B1, B8)",args:{...o,disabled:!0,value:u},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toBeDisabled()}},f={name:"With Value",args:{...o,value:u},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:J("value",u)},T={name:"With DefaultValue",args:{...o,defaultValue:u},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:J("value",u)},S={name:"With DefaultValue and ThousandSeparator",args:{...o,defaultValue:1e4,thousandSeparator:!0},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:J("value","10 000")},A={name:"With Value and ThousandSeparator",args:{...o,value:1e4,thousandSeparator:!0},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:J("value","10 000")},w={name:"With AutoComplete InputMode Name And Placeholder (A3, A6, B1)",args:{...o,autoComplete:"given-name",inputMode:"text",name:"test_name",placeholder:u},argTypes:{autoComplete:{table:{disable:!1}},inputMode:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("inputmode","text"),await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",u)}},B={name:"With ReadOnly (B1, B6)",args:{...o,value:u,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("readonly")}},C={name:"With Required (B4)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toBeRequired()}},W={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},E={name:"With MinLength And MaxLength (A5, B1)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("maxlength"),await t(a).toHaveAttribute("minlength")}},H={name:"With Pattern As Input (A5, B1)",args:{...o,pattern:"[a-z]"},argTypes:{pattern:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("pattern"),await t(a.tagName).toBe("INPUT")}},R={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),a=s.getByRole("textbox"),n=e.querySelector("[id^=textFieldErrorId]");await t(n).toBeInTheDocument(),await t(s.queryByText(Z)).not.toBeInTheDocument(),await t(a).not.toHaveAttribute("aria-invalid","true"),await t(a).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disableSnapshot:!0}}},M={name:"With ErrorMessage(B5)",args:{...o,errorMessage:Z},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{pseudoStates:["hover","focus-visible"]},play:async({canvasElement:e})=>{const s=i(e),a=s.getByRole("textbox",{description:Z}),n=s.getAllByRole("generic")[3];await t(n).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},L={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),a=s.getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument();const n=s.getByRole("textbox");await t(n).toHaveAttribute("aria-describedby");const d=n.getAttribute("aria-describedby");await t(d).toMatch(/descId-/)}},k={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox",{name:K});await t(a).toBeInTheDocument()}},D={name:"With ThousandSeparator As Input (A8 delvis)",args:{...o,thousandSeparator:!0,onChange:p()},argTypes:{thousandSeparator:{table:{disable:!1}}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await t(n.tagName).toBe("INPUT"),n.focus(),await c.type(n,"A10000"),await m(()=>t(e.onChange).toHaveBeenCalled()),await t(n).toHaveValue("10 000")}},V={name:"With ThousandSeparator and negative number value",args:{...o,thousandSeparator:!0,onChange:p()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await t(n.tagName).toBe("INPUT"),n.focus(),await c.type(n,"-A10-000-"),await m(()=>t(e.onChange).toHaveBeenCalled()),await t(n).toHaveValue("-10 000")}},F={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:K});await t(a).toBeInTheDocument()}},I={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}}},ja=e=>{const[s,a]=qa.useState("Tester events");return l.jsx($,{...e,label:s,onFocus:n=>{a("TextField har fått fokus"),e.onFocus&&e.onFocus(n)},onBlur:n=>{a("TextField har blitt blurret"),e.onBlur&&e.onBlur(n)},onChange:n=>{a("TextField har blitt klikket på"),e.onChange&&e.onChange(n)}})},N={render:ja,name:"With EventHandlers (A4)",args:{...o,onFocus:p(),onBlur:p(),onChange:p()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");n.focus(),await m(()=>t(e.onFocus).toHaveBeenCalled()),await c.type(n,"Olav Nordmann"),await m(()=>t(e.onChange).toHaveBeenCalled()),await c.tab(),await m(()=>t(e.onBlur).toHaveBeenCalled())}},P={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},q={name:"With  Datalist (A13, A14)",render:()=>l.jsxs(l.Fragment,{children:[l.jsx($,{label:"nettlesere",list:"browsers"}),l.jsxs("datalist",{id:"browsers",children:[l.jsx("option",{value:"Edge"}),l.jsx("option",{value:"Firefox"}),l.jsx("option",{value:"Chrome"}),l.jsx("option",{value:"Opera"}),l.jsx("option",{value:"Safari"})]})]}),args:{...o},argTypes:{defaultValue:{table:{disable:!1}},list:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveAttribute("list","browsers")}},j={args:{label:"Ledetekst",className:"textField150",defaultValue:"Dette er en lang tekst som skal vises i tekstfeltet"},argTypes:{defaultValue:{table:{disable:!1}}}},G=e=>{const[s,a]=qa.useState("");return l.jsx($,{...e,value:s,characterLimit:50,onChange:n=>{a(n.target.value)}})},O={name:"With CharacterLimit (A10)",render:G,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},_={name:"With CharacterLimit Exceeded (A10)",render:G,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),a=s.getByRole("textbox"),n="Dette er en kort tekst.",d="Dette er en veldig lang tekst som bør være mer enn 50 tegn";await c.type(a,n);const Oa=await s.findByText("27 tegn igjen");t(Oa).toBeInTheDocument(),await c.clear(a),await c.type(a,d);const _a=await s.findByText("8 tegn for mye");t(_a).toBeInTheDocument()}},U={name:"With CharacterLimit And Error (A10)",render:G,args:{...o,errorMessage:"Feilmelding",characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},z={name:"With ThousandSeparator and undo redo",render:ja,args:{...o,thousandSeparator:!0,onChange:p()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=i(s).getByRole("textbox");await t(n.tagName).toBe("INPUT"),n.focus(),await c.type(n,"-A111-222333-"),await m(()=>t(e.onChange).toHaveBeenCalled()),await t(n).toHaveValue("-111 222 333"),await c.type(n,"111"),await c.keyboard("{Meta>}z{/Meta}"),await t(n).toHaveValue("-11 122 233 311"),await c.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(n).toHaveValue("-111 222 333 111")}};var Y,Q,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,ne;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,oe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ge;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var xe,he,ve;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,fe,Te;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Se,Ae,we;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Be,Ce,We;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};var Ee,He,Re;w.parameters={...w.parameters,docs:{...(Ee=w.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Me,Le,ke;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var De,Ve,Fe;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var Ie,Ne,Pe;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var qe,je,Oe;E.parameters={...E.parameters,docs:{...(qe=E.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var _e,Ue,ze;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Ue=H.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Je,Ke,Ze;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ze=(Ke=R.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var $e,Ge,Xe;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var Ye,Qe,ea;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(ea=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:ea.source}}};var aa,ta,na;k.parameters={...k.parameters,docs:{...(aa=k.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(na=(ta=k.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ra,oa;D.parameters={...D.parameters,docs:{...(sa=D.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
} satisfies Story`,...(oa=(ra=D.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var ia,la,ca;V.parameters={...V.parameters,docs:{...(ia=V.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
} satisfies Story`,...(ca=(la=V.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var da,ua,pa;F.parameters={...F.parameters,docs:{...(da=F.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
} satisfies Story`,...(pa=(ua=F.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var ma,ba,ga;I.parameters={...I.parameters,docs:{...(ma=I.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
} satisfies Story`,...(ga=(ba=I.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var xa,ha,va;N.parameters={...N.parameters,docs:{...(xa=N.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
} satisfies Story`,...(va=(ha=N.parameters)==null?void 0:ha.docs)==null?void 0:va.source}}};var ya,fa,Ta;P.parameters={...P.parameters,docs:{...(ya=P.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ta=(fa=P.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var Sa,Aa,wa;q.parameters={...q.parameters,docs:{...(Sa=q.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
} satisfies Story`,...(wa=(Aa=q.parameters)==null?void 0:Aa.docs)==null?void 0:wa.source}}};var Ba,Ca,Wa;j.parameters={...j.parameters,docs:{...(Ba=j.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
} satisfies Story`,...(Wa=(Ca=j.parameters)==null?void 0:Ca.docs)==null?void 0:Wa.source}}};var Ea,Ha,Ra;O.parameters={...O.parameters,docs:{...(Ea=O.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ra=(Ha=O.parameters)==null?void 0:Ha.docs)==null?void 0:Ra.source}}};var Ma,La,ka;_.parameters={..._.parameters,docs:{...(Ma=_.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
} satisfies Story`,...(ka=(La=_.parameters)==null?void 0:La.docs)==null?void 0:ka.source}}};var Da,Va,Fa;U.parameters={...U.parameters,docs:{...(Da=U.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fa=(Va=U.parameters)==null?void 0:Va.docs)==null?void 0:Fa.source}}};var Ia,Na,Pa;z.parameters={...z.parameters,docs:{...(Ia=z.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pa=(Na=z.parameters)==null?void 0:Na.docs)==null?void 0:Pa.source}}};const Ja=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndThousandSeparator","WithValueAndThousandSeparator","WithAutoCompleteInputModeNameAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithPattern","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithThousandSeparator","WithThousandSeparatorAndNegativeValue","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithDataList","WithLongInput","WithCharacterLimit","WithCharacterLimitExceeded","WithCharacterLimitAndError","WithThousandSeparatorAndUndoRedo"],Ya=Object.freeze(Object.defineProperty({__proto__:null,Defaults:h,WithAttributes:g,WithAutoCompleteInputModeNameAndPlaceholder:w,WithCharacterLimit:O,WithCharacterLimitAndError:U,WithCharacterLimitExceeded:_,WithCustomClassNames:x,WithDataList:q,WithDefaultValue:T,WithDefaultValueAndThousandSeparator:S,WithDescription:L,WithDisabled:y,WithErrorMessage:M,WithEventHandlers:N,WithHelpText:F,WithHelpTextAndDescription:I,WithHelpToggleEvent:P,WithHideLabel:k,WithLongInput:j,WithMinAndMaxLength:E,WithPattern:H,WithReadOnly:B,WithRef:b,WithRequired:C,WithRequiredAndMark:W,WithThousandSeparator:D,WithThousandSeparatorAndNegativeValue:V,WithThousandSeparatorAndUndoRedo:z,WithValue:f,WithValueAndThousandSeparator:A,WithVariantLarge:v,WithoutError:R,__namedExportsOrder:Ja,default:za},Symbol.toStringTag,{value:"Module"}));export{Ya as T};
//# sourceMappingURL=TextField.test.stories-khyZcW0p.js.map
