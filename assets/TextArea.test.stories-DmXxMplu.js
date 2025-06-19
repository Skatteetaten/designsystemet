import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as J}from"./index-D_ouKaeX.js";import{f as X,w as i,e as a,b as p,u}from"./index-DIxTUSTt.js";import{B as Tt}from"./index-CUnERQXD.js";import{T as b}from"./index-CReUDGGp.js";import{M as Ct}from"./index--pPtgbjO.js";import{w as m,l as $}from"./storybook.testing.utils-CMs160i9.js";import{c as r}from"./helpers-DjiZIot2.js";import{S as G}from"./icon.systems-NRpsphgm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CwaotbcG.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";import"./DatePickerCalendar-v_gY3V1L.js";import"./LabelWithHelp-JKcqOKZ0.js";import"./Help-BOwxnveE.js";import"./index-BAA7SjBM.js";import"./index-CPxI8T3e.js";import"./index-j9ELDiWk.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";import"./index-CK6_WcSP.js";import"./icon.utils-D_vdkWhZ.js";const{useArgs:Ht}=__STORYBOOK_MODULE_PREVIEW_API__,Et=(t,n)=>async({canvasElement:e})=>{const c=i(e).getByRole("textbox");await a(c).toBeInTheDocument(),await a(c).toHaveAttribute(t,n)},Zt={component:b,title:"Tester/TextArea",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},autosize:{table:{disable:!0,category:r.props}},classNames:{table:{disable:!0,category:r.props}},characterLimit:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(G),mapping:G},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},autoCorrect:{table:{disable:!0,category:r.htmlAttribute}},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},rows:{table:{disable:!0,category:r.htmlAttribute}},spellCheck:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0}}}},d="Kari Nordmann",O="Opplysninger er obligatorisk",g="Andre opplysninger",o={label:g},x={name:"With Ref (FA1)",args:{...o,ref:t=>{t&&(t.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Et("name","dummyNameForwardedFromRef")},h={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await a(e).toHaveAttribute("id","htmlid"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await a(e).toHaveAttribute("form","formid123"),await a(e).toHaveAttribute("autocomplete","off")}},v={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:O},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=t.querySelector(`${m} > div`),s=n.getByText(g),c=t.querySelector("[id^=textAreaErrorId]>div");await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(c).toHaveClass("dummyClassname"),await a(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await a(n.getByRole("textbox")).toHaveClass("dummyClassname")}},y={name:"Defaults (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${m} textarea`,focus:`${m} textarea`}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox",{name:g});await a(e).toBeInTheDocument(),await a(e).toBeEnabled(),await a(e).toHaveAttribute("id"),await a(e.tagName).toBe("TEXTAREA"),await a(e).not.toBeRequired(),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-describedby");const s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument()}},f={name:"With Disabled (B5)",args:{...o,disabled:!0,value:d},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toBeDisabled()}},A={name:"With Value",args:{...o,value:d},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(d)}},w={name:"With DefaultValue",args:{...o,defaultValue:d},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(d)}},T={name:"With DefaultValue and Autosize",args:{...o,defaultValue:$,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},parameters:{parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue($),await a(e.tagName).toBe("TEXTAREA");const{scrollHeight:s}=e,c=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${s+c}px`})}},B={name:"With AutoComplete Name Form AutoCorrect Spellcheck And Placeholder (A2, B1)",args:{...o,autoComplete:"given-name",name:"test_name",form:"form_name",placeholder:d,spellCheck:!0,autoCorrect:"on"},argTypes:{autoComplete:{table:{disable:!1}},autoCorrect:{table:{disable:!1}},name:{table:{disable:!1}},form:{table:{disable:!1}},placeholder:{table:{disable:!1}},spellCheck:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("autocomplete","given-name"),await a(e).toHaveAttribute("name","test_name"),await a(e).toHaveAttribute("form","form_name"),await a(e).toHaveAttribute("placeholder",d),await a(e).toHaveAttribute("spellCheck","true"),await a(e).toHaveAttribute("autoCorrect","on")}},C={name:"With ReadOnly (B4)",args:{...o,value:d,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("readonly")}},H={name:"With Required (B3)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toBeRequired()}},E={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},S={name:"With MinLength And MaxLength (A4)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("maxlength"),await a(e).toHaveAttribute("minlength")}},W={name:"With Rows (A5)",args:{...o,rows:4},argTypes:{rows:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("rows","4"),await a(e.tagName).toBe("TEXTAREA")}},R={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument(),await a(n.queryByText(O)).not.toBeInTheDocument(),await a(e).not.toHaveAttribute("aria-invalid","true"),await a(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},k={name:"With ErrorMessage(B5)",args:{...o,errorMessage:O},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${m} textarea`,focus:`${m} textarea`}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox",{description:O}),s=n.getAllByRole("generic")[3];await a(s).toBeInTheDocument(),await a(e).toHaveAttribute("aria-invalid","true"),await a(e).toHaveAttribute("aria-describedby")}},M={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByText("En liten beskrivelse tekst");await a(e).toBeInTheDocument()}},L={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox",{name:g});await a(e).toBeInTheDocument()}},D={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${m} > div > button`,click:`${m} > div > button`}},play:async({canvasElement:t})=>{const e=i(t).getByRole("button",{description:g});await a(e).toBeInTheDocument()}},V={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${m} > div > button`,click:`${m} > div > button`}}},St=t=>{const[n,e]=J.useState("Tester events");return l.jsx(b,{...t,label:n,onFocus:s=>{e("TextArea har fått fokus"),t.onFocus&&t.onFocus(s)},onBlur:s=>{e("TextArea har blitt blurret"),t.onBlur&&t.onBlur(s)},onChange:s=>{e("TextArea har blitt klikket på"),t.onChange&&t.onChange(s)}})},F={render:St,name:"With EventHandlers (A3)",args:{...o,onFocus:X(),onBlur:X(),onChange:X()},parameters:{imageSnapshot:{disable:!0}},play:async({args:t,canvasElement:n})=>{const s=i(n).getByRole("textbox");s.focus(),await p(()=>a(t.onFocus).toHaveBeenCalled()),await u.type(s,"Olav Nordmann"),await p(()=>a(t.onChange).toHaveBeenCalled()),await u.tab(),await p(()=>a(t.onBlur).toHaveBeenCalled())}},I={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:t=>{alert(t?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},Wt=t=>{const n=J.useRef(null);return l.jsxs(l.Fragment,{children:[l.jsx(Tt,{onClick:()=>{var e;(e=n.current)==null||e.show()},children:"Vis modal"}),l.jsx(Ct,{ref:n,title:"Modal med textarea",children:l.jsx(b,{...t})})]})},q={name:"With AutoSize in Modal",render:Wt,args:{...o,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("button");await u.click(e);const s=n.getByRole("textbox");await a(s.tagName).toBe("TEXTAREA"),await p(()=>a(s).toHaveStyle({height:"64px"}))}},N={name:"With Controlled Value and Autosize",render:function(n){const[,e]=Ht();return l.jsxs(l.Fragment,{children:[l.jsx(b,{onChange:s=>e({value:s.target.value}),...n}),l.jsx(Tt,{onClick:()=>e({value:""}),children:"Nullstill"})]})},args:{...o,autosize:!0,value:$},argTypes:{value:{table:{disable:!1}},autosize:{table:{disable:!1}}},parameters:{parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox");await p(()=>a(e).toHaveValue($)),n.getByRole("button").click();const{scrollHeight:c}=e,_=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${c+_}px`})}},K=t=>{const[n,e]=J.useState("");return l.jsx(b,{...t,value:n,characterLimit:50,onChange:s=>{e(s.target.value)}})},P={name:"With CharacterLimit (A10)",render:K,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},z={name:"With CharacterLimit Exceeded (A10)",render:K,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s="Dette er en kort tekst.",c="Dette er en veldig lang tekst som bør være mer enn 50 tegn";await u.type(e,s);const _=await n.findByText("27 tegn igjen");a(_).toBeInTheDocument(),await u.clear(e),await u.type(e,c);const Bt=await n.findByText("8 tegn for mye");a(Bt).toBeInTheDocument()}},j={name:"With CharacterLimit And Error (A10)",render:K,args:{...o,errorMessage:"Feilmelding",characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}};var U,Y,Q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLTextAreaElement | null): void => {
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
} satisfies Story`,...(Q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
    const errorMessageContainer = canvasElement.querySelector('[id^=textAreaErrorId]>div');
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
    await expect(canvas.getByRole('textbox')).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Defaults (A1, A2, B2, FS-A2)',
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
      hover: \`\${wrapper} textarea\`,
      focus: \`\${wrapper} textarea\`
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
    await expect(textbox.tagName).toBe('TEXTAREA');
    await expect(textbox).not.toBeRequired();
    await expect(textbox).not.toHaveAttribute('aria-invalid');
    await expect(textbox).not.toHaveAttribute('aria-describedby');
    const errorMessageContainer = canvasElement.querySelector('[id^=textAreaErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,me;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Disabled (B5)',
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
} satisfies Story`,...(me=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,ue,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveValue(valueText);
  }
} satisfies Story`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,ge,xe;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveValue(valueText);
  }
} satisfies Story`,...(xe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,ve,ye;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'With DefaultValue and Autosize',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(ye=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,Ae,we;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'With AutoComplete Name Form AutoCorrect Spellcheck And Placeholder (A2, B1)',
  args: {
    ...defaultArgs,
    autoComplete: 'given-name',
    name: 'test_name',
    form: 'form_name',
    placeholder: valueText,
    spellCheck: true,
    autoCorrect: 'on'
  },
  argTypes: {
    autoComplete: {
      table: {
        disable: false
      }
    },
    autoCorrect: {
      table: {
        disable: false
      }
    },
    name: {
      table: {
        disable: false
      }
    },
    form: {
      table: {
        disable: false
      }
    },
    placeholder: {
      table: {
        disable: false
      }
    },
    spellCheck: {
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
    await expect(textbox).toHaveAttribute('name', 'test_name');
    await expect(textbox).toHaveAttribute('form', 'form_name');
    await expect(textbox).toHaveAttribute('placeholder', valueText);
    await expect(textbox).toHaveAttribute('spellCheck', 'true');
    await expect(textbox).toHaveAttribute('autoCorrect', 'on');
  }
} satisfies Story`,...(we=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Te,Be,Ce;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'With ReadOnly (B4)',
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
} satisfies Story`,...(Ce=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var He,Ee,Se;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'With Required (B3)',
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
} satisfies Story`,...(Se=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var We,Re,ke;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Me,Le,De;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'With MinLength And MaxLength (A4)',
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
} satisfies Story`,...(De=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Ve,Fe,Ie;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'With Rows (A5)',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(Ie=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var qe,Ne,Pe;R.parameters={...R.parameters,docs:{...(qe=R.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
    const errorMessageContainer = canvasElement.querySelector('[id^=textAreaErrorId]');
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
} satisfies Story`,...(Pe=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var ze,je,$e;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} textarea\`,
      focus: \`\${wrapper} textarea\`
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
} satisfies Story`,...($e=(je=k.parameters)==null?void 0:je.docs)==null?void 0:$e.source}}};var Oe,_e,Xe;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Xe.source}}};var Je,Ke,Ge;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Ue,Ye,Qe;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Qe=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Ze,et,tt;V.parameters={...V.parameters,docs:{...(Ze=V.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(tt=(et=V.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,st;F.parameters={...F.parameters,docs:{...(at=F.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A3)',
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
} satisfies Story`,...(st=(nt=F.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var rt,ot,it;I.parameters={...I.parameters,docs:{...(rt=I.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
} satisfies Story`,...(it=(ot=I.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var lt,ct,mt;q.parameters={...q.parameters,docs:{...(lt=q.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'With AutoSize in Modal',
  render: InModalTemplate,
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(mt=(ct=q.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var dt,ut,pt;N.parameters={...N.parameters,docs:{...(dt=N.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  name: 'With Controlled Value and Autosize',
  render: function Render(args): JSX.Element {
    const [, setArgs] = useArgs();
    return <>
        <TextArea onChange={e => setArgs({
        value: e.target.value
      })} {...args} />
        <Button onClick={() => setArgs({
        value: ''
      })}>{'Nullstill'}</Button>
      </>;
  },
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(pt=(ut=N.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var bt,gt,xt;P.parameters={...P.parameters,docs:{...(bt=P.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
} satisfies Story`,...(xt=(gt=P.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var ht,vt,yt;z.parameters={...z.parameters,docs:{...(ht=z.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
} satisfies Story`,...(yt=(vt=z.parameters)==null?void 0:vt.docs)==null?void 0:yt.source}}};var ft,At,wt;j.parameters={...j.parameters,docs:{...(ft=j.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
} satisfies Story`,...(wt=(At=j.parameters)==null?void 0:At.docs)==null?void 0:wt.source}}};const ea=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndAutoSize","WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithRows","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithAutoSizeInModal","WithControlledValueAndAutoSize","WithCharacterLimit","WithCharacterLimitExceeded","WithCharacterLimitAndError"];export{y as Defaults,h as WithAttributes,B as WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder,q as WithAutoSizeInModal,P as WithCharacterLimit,j as WithCharacterLimitAndError,z as WithCharacterLimitExceeded,N as WithControlledValueAndAutoSize,v as WithCustomClassNames,w as WithDefaultValue,T as WithDefaultValueAndAutoSize,M as WithDescription,f as WithDisabled,k as WithErrorMessage,F as WithEventHandlers,D as WithHelpText,V as WithHelpTextAndDescription,I as WithHelpToggleEvent,L as WithHideLabel,S as WithMinAndMaxLength,C as WithReadOnly,x as WithRef,H as WithRequired,E as WithRequiredAndMark,W as WithRows,A as WithValue,R as WithoutError,ea as __namedExportsOrder,Zt as default};
//# sourceMappingURL=TextArea.test.stories-DmXxMplu.js.map
