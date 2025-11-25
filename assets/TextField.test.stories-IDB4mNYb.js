import{j as l}from"./jsx-runtime-BYYWji4R.js";import{r as Z}from"./index-ClcD9ViR.js";import{f as b,w as i,e as t,u as m,b as p}from"./index-DIxTUSTt.js";import{B as $a}from"./index-CEFmy_Ic.js";import"./index-BYKicpQW.js";import"./index-DEJUArlV.js";import{M as Oa}from"./index-C22RbeRZ.js";import{w as d,l as G}from"./storybook.testing.utils-CMs160i9.js";import{c as o}from"./helpers-Q4uYuiE4.js";import{S as ee}from"./icon.systems-D4eM4wId.js";import{f as _a}from"./base-props.types-sXyoNogd.js";import{T as x}from"./DatePickerCalendar-HH4LMRzz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./Help-CJ8w0Npo.js";import"./LabelWithHelp-D9yud6GC.js";import"./index-7bHEsQL_.js";import"./index-Cs0ivlf6.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";import"./index-DBMXQzRX.js";import"./icon.utils-DDvPh5sV.js";const Xa=["input","textarea"],{useArgs:Ua}=__STORYBOOK_MODULE_PREVIEW_API__,Q=(a,n)=>async({canvasElement:e})=>{const c=i(e).getByRole("textbox");await t(c).toBeInTheDocument(),await t(c).toHaveAttribute(a,n)},ft={component:x,title:"Tester/TextField",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0,category:o.props},options:[...Xa],control:"inline-radio"},variant:{table:{disable:!0,category:o.props},options:[..._a],control:"inline-radio"},autosize:{table:{disable:!0,category:o.props}},classNames:{table:{disable:!0,category:o.props}},defaultValue:{control:"text",table:{disable:!0,category:o.props}},description:{table:{disable:!0,category:o.props}},errorMessage:{table:{disable:!0,category:o.props}},helpSvgPath:{table:{disable:!0,category:o.props},options:Object.keys(ee),mapping:ee},helpText:{table:{disable:!0,category:o.props}},hideLabel:{table:{disable:!0,category:o.props}},label:{table:{disable:!0,category:o.props}},list:{table:{disable:!0,category:o.props}},showRequiredMark:{table:{disable:!0,category:o.props}},thousandSeparator:{table:{disable:!0,category:o.props}},titleHelpSvg:{table:{disable:!0,category:o.props}},autoComplete:{table:{disable:!0,category:o.htmlAttribute},type:"string"},disabled:{table:{disable:!0,category:o.htmlAttribute}},form:{table:{disable:!0,category:o.htmlAttribute}},inputMode:{table:{disable:!0,category:o.htmlAttribute}},name:{table:{disable:!0,category:o.htmlAttribute}},maxLength:{table:{disable:!0,category:o.htmlAttribute}},minLength:{table:{disable:!0,category:o.htmlAttribute}},pattern:{table:{disable:!0,category:o.htmlAttribute}},placeholder:{table:{disable:!0,category:o.htmlAttribute}},readOnly:{table:{disable:!0,category:o.htmlAttribute}},required:{table:{disable:!0,category:o.htmlAttribute}},rows:{table:{disable:!0,category:o.htmlAttribute}},value:{table:{disable:!0,category:o.htmlAttribute}},onBlur:{table:{disable:!0,category:o.event}},onChange:{table:{disable:!0,category:o.event}},onFocus:{table:{disable:!0,category:o.event}},onHelpToggle:{table:{disable:!0}}}},u="Kari Nordmann",Y="Navn er obligatorisk",g="Navn",r={label:g},h={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&a.textboxRef&&a.textboxRef.current&&(a.textboxRef.current.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Q("name","dummyNameForwardedFromRef")},y={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await t(e).toHaveAttribute("id","htmlid"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("form","formid123"),await t(e).toHaveAttribute("autocomplete","off")}},f={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:Y},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=a.querySelector(`${d} > div`),s=n.getByText(g),c=a.querySelector("[id^=textFieldErrorId]>div");await t(e).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(c).toHaveClass("dummyClassname"),await t(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await t(n.getByRole("textbox")).toHaveClass("dummyClassname")}},A={name:"Defaults Variant Medium (A1, A2, B2, FS-A2)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} input`,focus:`${d} input`}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox",{name:g});await t(e).toBeInTheDocument(),await t(e).toBeEnabled(),await t(e).toHaveAttribute("id"),await t(e.tagName).toBe("INPUT"),await t(e).not.toBeRequired(),await t(e).not.toHaveAttribute("aria-invalid"),await t(e).not.toHaveAttribute("aria-describedby");const s=a.querySelector("[id^=textFieldErrorId]");await t(s).toBeInTheDocument()}},w={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},T={name:"With As (A1, A2)",args:{...r,as:"textarea"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} textarea`,focus:`${d} textarea`}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e.tagName).toBe("TEXTAREA")}},B={name:"With Disabled (B1, B8)",args:{...r,disabled:!0,value:u},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toBeDisabled()}},S={name:"With Value",args:{...r,value:u},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Q("value",u)},H={name:"With DefaultValue",args:{...r,defaultValue:u},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Q("value",u)},C={name:"With DefaultValue and ThousandSeparator",args:{...r,defaultValue:1e4,thousandSeparator:!0},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Q("value","10 000")},E={name:"With DefaultValue and Autosize TextArea",args:{...r,as:"textarea",defaultValue:G,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},parameters:{parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toHaveValue(G),await t(e.tagName).toBe("TEXTAREA");const{scrollHeight:s}=e,c=e.offsetHeight-e.clientHeight;await t(e).toHaveStyle({height:`${s+c}px`})}},W={name:"With AutoComplete InputMode Name And Placeholder (A3, A6, B1)",args:{...r,autoComplete:"given-name",inputMode:"text",name:"test_name",placeholder:u},argTypes:{autoComplete:{table:{disable:!1}},inputMode:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toHaveAttribute("autocomplete","given-name"),await t(e).toHaveAttribute("inputmode","text"),await t(e).toHaveAttribute("name","test_name"),await t(e).toHaveAttribute("placeholder",u)}},R={name:"With ReadOnly (B1, B6)",args:{...r,value:u,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toHaveAttribute("readonly")}},M={name:"With Required (B4)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toBeRequired()}},k={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},V={name:"With MinLength And MaxLength (A5, B1)",args:{...r,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toHaveAttribute("maxlength"),await t(e).toHaveAttribute("minlength")}},F={name:"With Pattern As Input (A5, B1)",args:{...r,pattern:"[a-z]"},argTypes:{pattern:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toHaveAttribute("pattern"),await t(e.tagName).toBe("INPUT")}},D={name:"With Rows As Textarea (A5)",args:{...r,as:"textarea",rows:4},argTypes:{rows:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox");await t(e).toHaveAttribute("rows","4"),await t(e.tagName).toBe("TEXTAREA")}},I={name:"Without ErrorMessage (B5)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("textbox"),s=a.querySelector("[id^=textFieldErrorId]");await t(s).toBeInTheDocument(),await t(n.queryByText(Y)).not.toBeInTheDocument(),await t(e).not.toHaveAttribute("aria-invalid","true"),await t(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},N={name:"With ErrorMessage(B5)",args:{...r,errorMessage:Y},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} input`,focus:`${d} input`}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("textbox",{description:Y}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(e).toHaveAttribute("aria-invalid","true"),await t(e).toHaveAttribute("aria-describedby")}},L={name:"With Description (FS-A3)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByText("En liten beskrivelse tekst");await t(e).toBeInTheDocument()}},P={name:"With HideLabel (B2)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("textbox",{name:g});await t(e).toBeInTheDocument()}},q={name:"With ThousandSeparator As Input (A8 delvis)",args:{...r,thousandSeparator:!0,onChange:b()},argTypes:{thousandSeparator:{table:{disable:!1}}},play:async({args:a,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s.tagName).toBe("INPUT"),s.focus(),await m.type(s,"A10000"),await p(()=>t(a.onChange).toHaveBeenCalled()),await t(s).toHaveValue("10 000")}},j={name:"With ThousandSeparator and negative number value",args:{...r,thousandSeparator:!0,onChange:b()},argTypes:{defaultValue:{table:{disable:!1}},thousandSeparator:{table:{disable:!0}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s.tagName).toBe("INPUT"),s.focus(),await m.type(s,"-A10-000-"),await p(()=>t(a.onChange).toHaveBeenCalled()),await t(s).toHaveValue("-10 000")}},z={name:"With HelpText (A1)",args:{...r,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${d} > div > button`,click:`${d} > div > button`}},play:async({canvasElement:a})=>{const e=i(a).getByRole("button",{description:g});await t(e).toBeInTheDocument()}},$={name:"With HelpText And Description (A1)",args:{...r,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${d} > div > button`,click:`${d} > div > button`}}},Ja=a=>{const[n,e]=Z.useState("Tester events");return l.jsx(x,{...a,label:n,onFocus:s=>{e("TextField har fått fokus"),a.onFocus&&a.onFocus(s)},onBlur:s=>{e("TextField har blitt blurret"),a.onBlur&&a.onBlur(s)},onChange:s=>{e("TextField har blitt klikket på"),a.onChange&&a.onChange(s)}})},O={render:Ja,name:"With EventHandlers (A4)",args:{...r,onFocus:b(),onBlur:b(),onChange:b()},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:n})=>{const s=i(n).getByRole("textbox");s.focus(),await p(()=>t(a.onFocus).toHaveBeenCalled()),await m.type(s,"Olav Nordmann"),await p(()=>t(a.onChange).toHaveBeenCalled()),await m.tab(),await p(()=>t(a.onBlur).toHaveBeenCalled())}},_={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},Ka=a=>{const n=Z.useRef(null);return l.jsxs(l.Fragment,{children:[l.jsx($a,{onClick:()=>{var e;(e=n.current)==null||e.show()},children:"Vis modal"}),l.jsx(Oa,{ref:n,title:"Modal med textarea",children:l.jsx(x,{...a})})]})},X={name:"With textarea AutoSize in Modal",render:Ka,args:{...r,as:"textarea",autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("button");await m.click(e);const s=n.getByRole("textbox");await t(s.tagName).toBe("TEXTAREA"),await p(()=>t(s).toHaveStyle({height:"64px"}))}},U={name:"With  Datalist (A13, A14)",render:()=>l.jsxs(l.Fragment,{children:[l.jsx(x,{label:"nettlesere",list:"browsers"}),l.jsxs("datalist",{id:"browsers",children:[l.jsx("option",{value:"Edge"}),l.jsx("option",{value:"Firefox"}),l.jsx("option",{value:"Chrome"}),l.jsx("option",{value:"Opera"}),l.jsx("option",{value:"Safari"})]})]}),args:{...r},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}},list:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("combobox");await t(e).toHaveAttribute("list","browsers")}},J={name:"With Controlled Value and Autosize TextArea",render:function(n){const[,e]=Ua();return l.jsxs(l.Fragment,{children:[l.jsx(x,{onChange:s=>e({value:s.target.value}),...n}),l.jsx($a,{onClick:()=>e({value:""}),children:"Nullstill"})]})},args:{...r,as:"textarea",autosize:!0,value:G},argTypes:{value:{table:{disable:!1}},autosize:{table:{disable:!1}}},parameters:{parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("textbox");await p(()=>t(e).toHaveValue(G)),n.getByRole("button").click();const{scrollHeight:c}=e,v=e.offsetHeight-e.clientHeight;await t(e).toHaveStyle({height:`${c+v}px`})}},Ga=a=>{const[n,e]=Z.useState("10 000"),s=c=>{var v;e(c.target.value),(v=a.onChange)==null||v.call(a,c)};return l.jsxs(l.Fragment,{children:[l.jsx(x,{...a,value:n,onChange:s}),l.jsx("pre",{children:`value: ${n}`})]})},K={name:"With Fires onChange when Backspace at separator",render:Ga,args:{...r,thousandSeparator:!0,onChange:b()},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:n})=>{const s=i(n).getByRole("textbox");await t(s).toHaveValue("10 000"),await t(a.onChange).not.toHaveBeenCalled(),s.focus(),await m.keyboard("{ArrowLeft}{ArrowLeft}{ArrowLeft}"),await t(a.onChange).not.toHaveBeenCalled(),await m.keyboard("{Backspace}"),await t(s).toHaveValue("1 000"),await t(a.onChange).toHaveBeenCalledTimes(1)}};var ae,te,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: TextboxRefHandle | null): void => {
      if (instance && instance.textboxRef && instance.textboxRef.current) {
        instance.textboxRef.current.name = 'dummyNameForwardedFromRef';
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
} satisfies Story`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(re=y.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ce;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,xe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(be=w.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ge,ve,he;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'With As (A1, A2)',
  args: {
    ...defaultArgs,
    as: 'textarea'
  },
  argTypes: {
    as: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} textarea\`,
      focus: \`\${wrapper} textarea\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('TEXTAREA');
  }
} satisfies Story`,...(he=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ye,fe,Ae;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var we,Te,Be;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Se,He,Ce;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};var Ee,We,Re;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Re.source}}};var Me,ke,Ve;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'With DefaultValue and Autosize TextArea',
  args: {
    ...defaultArgs,
    as: 'textarea',
    defaultValue: loremIpsum,
    autosize: true
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    },
    autosize: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    parameters: {
      viewport: {
        defaultViewport: '--breakpoint-xs'
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveValue(loremIpsum);
    await expect(textbox.tagName).toBe('TEXTAREA');
    const {
      scrollHeight
    } = textbox;
    const includeBorderAndMore = textbox.offsetHeight - textbox.clientHeight;
    await expect(textbox).toHaveStyle({
      height: \`\${scrollHeight + includeBorderAndMore}px\`
    });
  }
} satisfies Story`,...(Ve=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var Fe,De,Ie;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ne,Le,Pe;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var qe,je,ze;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(je=M.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var $e,Oe,_e;k.parameters={...k.parameters,docs:{...($e=k.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Xe,Ue,Je;V.parameters={...V.parameters,docs:{...(Xe=V.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Je=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ke,Ge,Ye;F.parameters={...F.parameters,docs:{...(Ke=F.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ye=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Qe,Ze,ea;D.parameters={...D.parameters,docs:{...(Qe=D.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'With Rows As Textarea (A5)',
  args: {
    ...defaultArgs,
    as: 'textarea',
    rows: 4
  },
  argTypes: {
    rows: {
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
    await expect(textbox).toHaveAttribute('rows', '4');
    await expect(textbox.tagName).toBe('TEXTAREA');
  }
} satisfies Story`,...(ea=(Ze=D.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,na;I.parameters={...I.parameters,docs:{...(aa=I.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(na=(ta=I.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ra,oa;N.parameters={...N.parameters,docs:{...(sa=N.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
} satisfies Story`,...(oa=(ra=N.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var ia,la,ca;L.parameters={...L.parameters,docs:{...(ia=L.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
} satisfies Story`,...(ca=(la=L.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var da,ua,pa;P.parameters={...P.parameters,docs:{...(da=P.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
} satisfies Story`,...(pa=(ua=P.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var ma,ba,xa;q.parameters={...q.parameters,docs:{...(ma=q.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
} satisfies Story`,...(xa=(ba=q.parameters)==null?void 0:ba.docs)==null?void 0:xa.source}}};var ga,va,ha;j.parameters={...j.parameters,docs:{...(ga=j.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(va=j.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var ya,fa,Aa;z.parameters={...z.parameters,docs:{...(ya=z.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
} satisfies Story`,...(Aa=(fa=z.parameters)==null?void 0:fa.docs)==null?void 0:Aa.source}}};var wa,Ta,Ba;$.parameters={...$.parameters,docs:{...(wa=$.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ba=(Ta=$.parameters)==null?void 0:Ta.docs)==null?void 0:Ba.source}}};var Sa,Ha,Ca;O.parameters={...O.parameters,docs:{...(Sa=O.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ca=(Ha=O.parameters)==null?void 0:Ha.docs)==null?void 0:Ca.source}}};var Ea,Wa,Ra;_.parameters={..._.parameters,docs:{...(Ea=_.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ra=(Wa=_.parameters)==null?void 0:Wa.docs)==null?void 0:Ra.source}}};var Ma,ka,Va;X.parameters={...X.parameters,docs:{...(Ma=X.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  name: 'With textarea AutoSize in Modal',
  render: TextAreaInModalTemplate,
  args: {
    ...defaultArgs,
    as: 'textarea',
    autosize: true
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    },
    autosize: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('TEXTAREA');
    await waitFor(() => expect(textbox).toHaveStyle({
      height: '64px'
    }));
  }
} satisfies Story`,...(Va=(ka=X.parameters)==null?void 0:ka.docs)==null?void 0:Va.source}}};var Fa,Da,Ia;U.parameters={...U.parameters,docs:{...(Fa=U.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
    autosize: {
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
} satisfies Story`,...(Ia=(Da=U.parameters)==null?void 0:Da.docs)==null?void 0:Ia.source}}};var Na,La,Pa;J.parameters={...J.parameters,docs:{...(Na=J.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  name: 'With Controlled Value and Autosize TextArea',
  render: function Render(args): JSX.Element {
    const [, setArgs] = useArgs();
    return <>
        <TextField onChange={e => setArgs({
        value: e.target.value
      })} {...args} />
        <Button onClick={() => setArgs({
        value: ''
      })}>{'Nullstill'}</Button>
      </>;
  },
  args: {
    ...defaultArgs,
    as: 'textarea',
    autosize: true,
    value: loremIpsum
  },
  argTypes: {
    value: {
      table: {
        disable: false
      }
    },
    autosize: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    parameters: {
      viewport: {
        defaultViewport: '--breakpoint-xs'
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await waitFor(() => expect(textbox).toHaveValue(loremIpsum));
    const resetButton = canvas.getByRole('button');
    resetButton.click();
    const {
      scrollHeight
    } = textbox;
    const includeBorderAndMore = textbox.offsetHeight - textbox.clientHeight;
    await expect(textbox).toHaveStyle({
      height: \`\${scrollHeight + includeBorderAndMore}px\`
    });
  }
} satisfies Story`,...(Pa=(La=J.parameters)==null?void 0:La.docs)==null?void 0:Pa.source}}};var qa,ja,za;K.parameters={...K.parameters,docs:{...(qa=K.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  name: 'With Fires onChange when Backspace at separator',
  render: ControlledTemplate,
  args: {
    ...defaultArgs,
    thousandSeparator: true,
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
} satisfies Story`,...(za=(ja=K.parameters)==null?void 0:ja.docs)==null?void 0:za.source}}};const At=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithAs","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndThousandSeparator","WithDefaultValueAndAutoSizeTextArea","WithAutoCompleteInputModeNameAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithPattern","WithRows","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithThousandSeparator","WithThousandSeparatorAndNegativeValue","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithTextAreaAutoSizeInModal","WithDataList","WithControlledValueAndAutoSizeTextArea","FiresOnChangeWhenBackspaceAtSeparator"];export{A as Defaults,K as FiresOnChangeWhenBackspaceAtSeparator,T as WithAs,y as WithAttributes,W as WithAutoCompleteInputModeNameAndPlaceholder,J as WithControlledValueAndAutoSizeTextArea,f as WithCustomClassNames,U as WithDataList,H as WithDefaultValue,E as WithDefaultValueAndAutoSizeTextArea,C as WithDefaultValueAndThousandSeparator,L as WithDescription,B as WithDisabled,N as WithErrorMessage,O as WithEventHandlers,z as WithHelpText,$ as WithHelpTextAndDescription,_ as WithHelpToggleEvent,P as WithHideLabel,V as WithMinAndMaxLength,F as WithPattern,R as WithReadOnly,h as WithRef,M as WithRequired,k as WithRequiredAndMark,D as WithRows,X as WithTextAreaAutoSizeInModal,q as WithThousandSeparator,j as WithThousandSeparatorAndNegativeValue,S as WithValue,w as WithVariantLarge,I as WithoutError,At as __namedExportsOrder,ft as default};
//# sourceMappingURL=TextField.test.stories-IDB4mNYb.js.map
