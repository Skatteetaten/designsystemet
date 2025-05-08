import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as fa}from"./index-7h80QhK_.js";import{f as u,w as i,e as t,u as $,b as p}from"./index-DIxTUSTt.js";import"./index-EsEcB_zD.js";import"./index-DmQJLmMR.js";import{w as c}from"./storybook.testing.utils-CMs160i9.js";import{c as r}from"./helpers-BRYKCfPN.js";import{S as z}from"./icon.systems-DnY32ltf.js";import{f as Aa}from"./base-props.types-B2QwU1g4.js";import{T as _}from"./DatePickerCalendar-uhBuvt5I.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Help-DBM5pSGx.js";import"./index-TStLVSlm.js";import"./index-MCo35TjR.js";import"./index-_-BAtSXr.js";import"./LabelWithHelp-Bp_nNVMq.js";import"./index-SYCMKRjb.js";import"./index-Begbw_Sq.js";import"./index-B4uH14t0.js";import"./icon.utils-XW2L0FSl.js";const U=(e,n)=>async({canvasElement:a})=>{const b=i(a).getByRole("textbox");await t(b).toBeInTheDocument(),await t(b).toHaveAttribute(e,n)},Oa={component:_,title:"Tester/TextField",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},variant:{table:{disable:!0,category:r.props},options:[...Aa],control:"inline-radio"},classNames:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(z),mapping:z},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},list:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},thousandSeparator:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},inputMode:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},pattern:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0}}}},d="Kari Nordmann",O="Navn er obligatorisk",m="Navn",o={label:m},g={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("name","dummyNameForwardedFromRef")},x={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123"),await t(a).toHaveAttribute("autocomplete","off")}},v={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:O},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=e.querySelector(`${c} > div`),s=n.getByText(m),b=e.querySelector("[id^=textFieldErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(b).toHaveClass("dummyClassname"),await t(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await t(n.getByRole("textbox")).toHaveClass("dummyClassname")}},y={name:"Defaults Variant Medium (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} input`,focus:`${c} input`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox",{name:m});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("INPUT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const s=e.querySelector("[id^=textFieldErrorId]");await t(s).toBeInTheDocument()}},h={name:"With Variant Large (A1)",args:{...o,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},f={name:"With Disabled (B1, B8)",args:{...o,disabled:!0,value:d},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toBeDisabled()}},A={name:"With Value",args:{...o,value:d},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("value",d)},w={name:"With DefaultValue",args:{...o,defaultValue:d},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("value",d)},T={name:"With DefaultValue and ThousandSeparator",args:{...o,defaultValue:1e4,thousandSeparator:!0},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:U("value","10 000")},S={name:"With AutoComplete InputMode Name And Placeholder (A3, A6, B1)",args:{...o,autoComplete:"given-name",inputMode:"text",name:"test_name",placeholder:d},argTypes:{autoComplete:{table:{disable:!1}},inputMode:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("inputmode","text"),await t(a).toHaveAttribute("name","test_name"),await t(a).toHaveAttribute("placeholder",d)}},B={name:"With ReadOnly (B1, B6)",args:{...o,value:d,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("readonly")}},H={name:"With Required (B4)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toBeRequired()}},W={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},C={name:"With MinLength And MaxLength (A5, B1)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("maxlength"),await t(a).toHaveAttribute("minlength")}},E={name:"With Pattern As Input (A5, B1)",args:{...o,pattern:"[a-z]"},argTypes:{pattern:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox");await t(a).toHaveAttribute("pattern"),await t(a.tagName).toBe("INPUT")}},R={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox"),s=e.querySelector("[id^=textFieldErrorId]");await t(s).toBeInTheDocument(),await t(n.queryByText(O)).not.toBeInTheDocument(),await t(a).not.toHaveAttribute("aria-invalid","true"),await t(a).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},M={name:"With ErrorMessage(B5)",args:{...o,errorMessage:O},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} input`,focus:`${c} input`}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("textbox",{description:O}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},k={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},D={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("textbox",{name:m});await t(a).toBeInTheDocument()}},F={name:"With ThousandSeparator As Input (A8 delvis)",args:{...o,thousandSeparator:!0,onChange:u()},argTypes:{thousandSeparator:{table:{disable:!1}}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s.tagName).toBe("INPUT"),s.focus(),await $.type(s,"A10000"),await p(()=>t(e.onChange).toHaveBeenCalled()),await t(s).toHaveValue("10 000")}},N={name:"With ThousandSeparator and negative number value",args:{...o,thousandSeparator:!0,onChange:u()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s.tagName).toBe("INPUT"),s.focus(),await $.type(s,"-A10-000-"),await p(()=>t(e.onChange).toHaveBeenCalled()),await t(s).toHaveValue("-10 000")}},I={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${c} > div > button`,click:`${c} > div > button`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:m});await t(a).toBeInTheDocument()}},L={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${c} > div > button`,click:`${c} > div > button`}}},wa=e=>{const[n,a]=fa.useState("Tester events");return l.jsx(_,{...e,label:n,onFocus:s=>{a("TextField har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("TextField har blitt blurret"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("TextField har blitt klikket på"),e.onChange&&e.onChange(s)}})},V={render:wa,name:"With EventHandlers (A4)",args:{...o,onFocus:u(),onBlur:u(),onChange:u()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("textbox");s.focus(),await p(()=>t(e.onFocus).toHaveBeenCalled()),await $.type(s,"Olav Nordmann"),await p(()=>t(e.onChange).toHaveBeenCalled()),await $.tab(),await p(()=>t(e.onBlur).toHaveBeenCalled())}},P={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},q={name:"With  Datalist (A13, A14)",render:()=>l.jsxs(l.Fragment,{children:[l.jsx(_,{label:"nettlesere",list:"browsers"}),l.jsxs("datalist",{id:"browsers",children:[l.jsx("option",{value:"Edge"}),l.jsx("option",{value:"Firefox"}),l.jsx("option",{value:"Chrome"}),l.jsx("option",{value:"Opera"}),l.jsx("option",{value:"Safari"})]})]}),args:{...o},argTypes:{defaultValue:{table:{disable:!1}},list:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveAttribute("list","browsers")}},j={args:{label:"Ledetekst",className:"textField150",defaultValue:"Dette er en lang tekst som skal vises i tekstfeltet"},argTypes:{defaultValue:{table:{disable:!1}}}};var J,G,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Q,Y;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ie;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ge,xe;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ve,ye,he;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var fe,Ae,we;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Te,Se,Be;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var He,We,Ce;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Ce.source}}};var Ee,Re,Me;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Me=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};var ke,De,Fe;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ne,Ie,Le;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Ve,Pe,qe;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(qe=(Pe=R.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var je,$e,Oe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:Oe.source}}};var Ue,_e,ze;k.parameters={...k.parameters,docs:{...(Ue=k.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var Je,Ge,Ke;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var Xe,Qe,Ye;F.parameters={...F.parameters,docs:{...(Xe=F.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ye=(Qe=F.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;N.parameters={...N.parameters,docs:{...(Ze=N.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(aa=(ea=N.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,sa;I.parameters={...I.parameters,docs:{...(ta=I.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
} satisfies Story`,...(sa=(na=I.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ra,oa,ia;L.parameters={...L.parameters,docs:{...(ra=L.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(oa=L.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var la,ca,da;V.parameters={...V.parameters,docs:{...(la=V.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
} satisfies Story`,...(da=(ca=V.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;P.parameters={...P.parameters,docs:{...(ua=P.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
} satisfies Story`,...(ma=(pa=P.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ba,ga,xa;q.parameters={...q.parameters,docs:{...(ba=q.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
} satisfies Story`,...(xa=(ga=q.parameters)==null?void 0:ga.docs)==null?void 0:xa.source}}};var va,ya,ha;j.parameters={...j.parameters,docs:{...(va=j.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(ya=j.parameters)==null?void 0:ya.docs)==null?void 0:ha.source}}};const Ua=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndThousandSeparator","WithAutoCompleteInputModeNameAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithPattern","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithThousandSeparator","WithThousandSeparatorAndNegativeValue","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithDataList","WithLongInput"];export{y as Defaults,x as WithAttributes,S as WithAutoCompleteInputModeNameAndPlaceholder,v as WithCustomClassNames,q as WithDataList,w as WithDefaultValue,T as WithDefaultValueAndThousandSeparator,k as WithDescription,f as WithDisabled,M as WithErrorMessage,V as WithEventHandlers,I as WithHelpText,L as WithHelpTextAndDescription,P as WithHelpToggleEvent,D as WithHideLabel,j as WithLongInput,C as WithMinAndMaxLength,E as WithPattern,B as WithReadOnly,g as WithRef,H as WithRequired,W as WithRequiredAndMark,F as WithThousandSeparator,N as WithThousandSeparatorAndNegativeValue,A as WithValue,h as WithVariantLarge,R as WithoutError,Ua as __namedExportsOrder,Oa as default};
//# sourceMappingURL=TextField.test.stories-ByeG3hUv.js.map
