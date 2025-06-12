import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as Ma}from"./index-D_ouKaeX.js";import{f as p,w as i,e as t,u as m,b}from"./index-DIxTUSTt.js";import"./index-ChzTQA-a.js";import"./index-DzkGBFys.js";import{w as c}from"./storybook.testing.utils-CMs160i9.js";import{c as r}from"./helpers-B7KPg_So.js";import{S as X}from"./icon.systems-BnMBg8hx.js";import{f as Ia}from"./base-props.types-DUvlOF9f.js";import{T as J}from"./DatePickerCalendar-j9g8dyRt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Help-DpeK2zjo.js";import"./index-eDVrZHQi.js";import"./index-CdwPxLML.js";import"./index-CPecIRii.js";import"./LabelWithHelp-IJvVpsNu.js";import"./index-DsfABT8I.js";import"./index-UoIuQY3B.js";import"./index-Bm-dj5jB.js";import"./icon.utils-XW2L0FSl.js";const G=(e,n)=>async({canvasElement:a})=>{const u=i(a).getByRole("textbox");await t(u).toBeInTheDocument(),await t(u).toHaveAttribute(e,n)},st={component:J,title:"Tester/TextField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},variant:{table:{disable:!0,category:r.props},options:[...Ia],control:"inline-radio"},classNames:{table:{disable:!0,category:r.props}},characterLimit:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(X),mapping:X},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},list:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},thousandSeparator:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},inputMode:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},pattern:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0}}}},d="Kari Nordmann",z="Navn er obligatorisk",g="Navn",o={label:g},x={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:G("name","dummyNameForwardedFromRef")},h={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123"),await t(a).toHaveAttribute("autocomplete","off")}},v={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:z},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=e.querySelector(`${c} > div`),s=n.getByText(g),u=e.querySelector("[id^=textFieldErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(u).toHaveClass("dummyClassname"),await t(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await t(n.getByRole("textbox")).toHaveClass("dummyClassname")}},y={name:"Defaults Variant Medium (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} input`,focus:`${c} input`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox",{name:g});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const s=e.querySelector("[id^=textFieldErrorId]");await t(s).toBeInTheDocument()}},f={name:"With Variant Large (A1)",args:{...o,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},T={name:"With Disabled (B1, B8)",args:{...o,disabled:!0,value:d},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toBeDisabled()}},A={name:"With Value",args:{...o,value:d},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:G("value",d)},w={name:"With DefaultValue",args:{...o,defaultValue:d},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:G("value",d)},S={name:"With DefaultValue and ThousandSeparator",args:{...o,defaultValue:1e4,thousandSeparator:!0},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:G("value","10 000")},B={name:"With AutoComplete InputMode Name And Placeholder (A3, A6, B1)",args:{...o,autoComplete:"given-name",inputMode:"text",name:"test_name",placeholder:d},argTypes:{autoComplete:{table:{disable:!1}},inputMode:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("inputmode","text"),await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",d)}},C={name:"With ReadOnly (B1, B6)",args:{...o,value:d,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("readonly")}},W={name:"With Required (B4)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toBeRequired()}},E={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},H={name:"With MinLength And MaxLength (A5, B1)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("maxlength"),await t(a).toHaveAttribute("minlength")}},L={name:"With Pattern As Input (A5, B1)",args:{...o,pattern:"[a-z]"},argTypes:{pattern:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("pattern"),await t(a.tagName).toBe("INPUT")}},R={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox"),s=e.querySelector("[id^=textFieldErrorId]");await t(s).toBeInTheDocument(),await t(n.queryByText(z)).not.toBeInTheDocument(),await t(a).not.toHaveAttribute("aria-invalid","true"),await t(a).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},k={name:"With ErrorMessage(B5)",args:{...o,errorMessage:z},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} input`,focus:`${c} input`}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox",{description:z}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},M={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},D={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox",{name:g});await t(a).toBeInTheDocument()}},F={name:"With ThousandSeparator As Input (A8 delvis)",args:{...o,thousandSeparator:!0,onChange:p()},argTypes:{thousandSeparator:{table:{disable:!1}}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s.tagName).toBe("INPUT"),s.focus(),await m.type(s,"A10000"),await b(()=>t(e.onChange).toHaveBeenCalled()),await t(s).toHaveValue("10 000")}},I={name:"With ThousandSeparator and negative number value",args:{...o,thousandSeparator:!0,onChange:p()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s.tagName).toBe("INPUT"),s.focus(),await m.type(s,"-A10-000-"),await b(()=>t(e.onChange).toHaveBeenCalled()),await t(s).toHaveValue("-10 000")}},N={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${c} > div > button`,click:`${c} > div > button`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:g});await t(a).toBeInTheDocument()}},V={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${c} > div > button`,click:`${c} > div > button`}}},Na=e=>{const[n,a]=Ma.useState("Tester events");return l.jsx(J,{...e,label:n,onFocus:s=>{a("TextField har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("TextField har blitt blurret"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("TextField har blitt klikket på"),e.onChange&&e.onChange(s)}})},P={render:Na,name:"With EventHandlers (A4)",args:{...o,onFocus:p(),onBlur:p(),onChange:p()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("textbox");s.focus(),await b(()=>t(e.onFocus).toHaveBeenCalled()),await m.type(s,"Olav Nordmann"),await b(()=>t(e.onChange).toHaveBeenCalled()),await m.tab(),await b(()=>t(e.onBlur).toHaveBeenCalled())}},q={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},j={name:"With  Datalist (A13, A14)",render:()=>l.jsxs(l.Fragment,{children:[l.jsx(J,{label:"nettlesere",list:"browsers"}),l.jsxs("datalist",{id:"browsers",children:[l.jsx("option",{value:"Edge"}),l.jsx("option",{value:"Firefox"}),l.jsx("option",{value:"Chrome"}),l.jsx("option",{value:"Opera"}),l.jsx("option",{value:"Safari"})]})]}),args:{...o},argTypes:{defaultValue:{table:{disable:!1}},list:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveAttribute("list","browsers")}},$={args:{label:"Ledetekst",className:"textField150",defaultValue:"Dette er en lang tekst som skal vises i tekstfeltet"},argTypes:{defaultValue:{table:{disable:!1}}}},K=e=>{const[n,a]=Ma.useState("");return l.jsx(J,{...e,value:n,characterLimit:50,onChange:s=>{a(s.target.value)}})},O={name:"With CharacterLimit (A10)",render:K,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},U={name:"With CharacterLimit Exceeded (A10)",render:K,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox"),s="Dette er en kort tekst.",u="Dette er en veldig lang tekst som bør være mer enn 50 tegn";await m.type(a,s);const Da=await n.findByText("27 tegn igjen");t(Da).toBeInTheDocument(),await m.clear(a),await m.type(a,u);const Fa=await n.findByText("8 tegn for mye");t(Fa).toBeInTheDocument()}},_={name:"With CharacterLimit And Error (A10)",render:K,args:{...o,errorMessage:"Feilmelding",characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=v.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} input\`,
      focus: \`\${wrapper} input\`
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
} satisfies Story`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,be;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeDisabled();
  }
} satisfies Story`,...(be=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,xe,he;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ve,ye,fe;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Te,Ae,we;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('value', '10 000')
} satisfies Story`,...(we=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Se,Be,Ce;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var We,Ee,He;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('readonly');
  }
} satisfies Story`,...(He=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Le,Re,ke;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeRequired();
  }
} satisfies Story`,...(ke=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Me,De,Fe;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ie,Ne,Ve;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(Ve=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Pe,qe,je;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(je=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};var $e,Oe,Ue;R.parameters={...R.parameters,docs:{...($e=R.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(Ue=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var _e,ze,Je;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
    imageSnapshot: {
      hover: \`\${wrapper} input\`,
      focus: \`\${wrapper} input\`
    }
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
} satisfies Story`,...(Je=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Ge,Ke,Xe;M.parameters={...M.parameters,docs:{...(Ge=M.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...(Xe=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Qe,Ye,Ze;D.parameters={...D.parameters,docs:{...(Qe=D.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ze=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ta;F.parameters={...F.parameters,docs:{...(ea=F.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(aa=F.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,ra;I.parameters={...I.parameters,docs:{...(na=I.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(ra=(sa=I.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var oa,ia,la;N.parameters={...N.parameters,docs:{...(oa=N.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > div > button\`,
      click: \`\${wrapper} > div > button\`
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
} satisfies Story`,...(la=(ia=N.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,da,ma;V.parameters={...V.parameters,docs:{...(ca=V.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > div > button\`,
      click: \`\${wrapper} > div > button\`
    }
  }
} satisfies Story`,...(ma=(da=V.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ua,pa,ba;P.parameters={...P.parameters,docs:{...(ua=P.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(ba=(pa=P.parameters)==null?void 0:pa.docs)==null?void 0:ba.source}}};var ga,xa,ha;q.parameters={...q.parameters,docs:{...(ga=q.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(xa=q.parameters)==null?void 0:xa.docs)==null?void 0:ha.source}}};var va,ya,fa;j.parameters={...j.parameters,docs:{...(va=j.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
} satisfies Story`,...(fa=(ya=j.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var Ta,Aa,wa;$.parameters={...$.parameters,docs:{...(Ta=$.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
} satisfies Story`,...(wa=(Aa=$.parameters)==null?void 0:Aa.docs)==null?void 0:wa.source}}};var Sa,Ba,Ca;O.parameters={...O.parameters,docs:{...(Sa=O.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ca=(Ba=O.parameters)==null?void 0:Ba.docs)==null?void 0:Ca.source}}};var Wa,Ea,Ha;U.parameters={...U.parameters,docs:{...(Wa=U.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ha=(Ea=U.parameters)==null?void 0:Ea.docs)==null?void 0:Ha.source}}};var La,Ra,ka;_.parameters={..._.parameters,docs:{...(La=_.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
} satisfies Story`,...(ka=(Ra=_.parameters)==null?void 0:Ra.docs)==null?void 0:ka.source}}};const rt=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndThousandSeparator","WithAutoCompleteInputModeNameAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithPattern","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithThousandSeparator","WithThousandSeparatorAndNegativeValue","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithDataList","WithLongInput","WithCharacterLimit","WithCharacterLimitExceeded","WithCharacterLimitAndError"];export{y as Defaults,h as WithAttributes,B as WithAutoCompleteInputModeNameAndPlaceholder,O as WithCharacterLimit,_ as WithCharacterLimitAndError,U as WithCharacterLimitExceeded,v as WithCustomClassNames,j as WithDataList,w as WithDefaultValue,S as WithDefaultValueAndThousandSeparator,M as WithDescription,T as WithDisabled,k as WithErrorMessage,P as WithEventHandlers,N as WithHelpText,V as WithHelpTextAndDescription,q as WithHelpToggleEvent,D as WithHideLabel,$ as WithLongInput,H as WithMinAndMaxLength,L as WithPattern,C as WithReadOnly,x as WithRef,W as WithRequired,E as WithRequiredAndMark,F as WithThousandSeparator,I as WithThousandSeparatorAndNegativeValue,A as WithValue,f as WithVariantLarge,R as WithoutError,rt as __namedExportsOrder,st as default};
//# sourceMappingURL=TextField.test.stories-D1h48rCH.js.map
