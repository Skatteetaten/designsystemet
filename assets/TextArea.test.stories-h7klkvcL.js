import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as it}from"./index-7h80QhK_.js";import{f as z,w as l,e as a,b as u,u as $}from"./index-DIxTUSTt.js";import{B as ct}from"./index-B77p9Xne.js";import{T as P}from"./index-Byc3xEr-.js";import{M as mt}from"./index-BjHq0w7B.js";import{w as c,l as q}from"./storybook.testing.utils-CMs160i9.js";import{c as r}from"./helpers-BRYKCfPN.js";import{S as O}from"./icon.systems-DPAJIO4Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EsEcB_zD.js";import"./index-vpaAjjI_.js";import"./index-_-BAtSXr.js";import"./DatePickerCalendar-DfBQ8U9V.js";import"./LabelWithHelp-B7cXZmxy.js";import"./Help-fmzU6O8S.js";import"./index-SYCMKRjb.js";import"./index-CnP6odjp.js";import"./index-ukAKs0SN.js";import"./floating-ui.react-Bjj2VaAd.js";import"./index-tLsore8Q.js";import"./index-BHu9F8Kl.js";import"./icon.utils-XW2L0FSl.js";const{useArgs:ut}=__STORYBOOK_MODULE_PREVIEW_API__,bt=(t,n)=>async({canvasElement:e})=>{const d=l(e).getByRole("textbox");await a(d).toBeInTheDocument(),await a(d).toHaveAttribute(t,n)},Nt={component:P,title:"Tester/TextArea",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},autosize:{table:{disable:!0,category:r.props}},classNames:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(O),mapping:O},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},autoCorrect:{table:{disable:!0,category:r.htmlAttribute}},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},rows:{table:{disable:!0,category:r.htmlAttribute}},spellCheck:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0}}}},m="Kari Nordmann",N="Opplysninger er obligatorisk",b="Andre opplysninger",o={label:b},p={name:"With Ref (FA1)",args:{...o,ref:t=>{t&&(t.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:bt("name","dummyNameForwardedFromRef")},x={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await a(e).toHaveAttribute("id","htmlid"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await a(e).toHaveAttribute("form","formid123"),await a(e).toHaveAttribute("autocomplete","off")}},g={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:N},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t),e=t.querySelector(`${c} > div`),s=n.getByText(b),d=t.querySelector("[id^=textAreaErrorId]>div");await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(d).toHaveClass("dummyClassname"),await a(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await a(n.getByRole("textbox")).toHaveClass("dummyClassname")}},v={name:"Defaults (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} textarea`,focus:`${c} textarea`}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox",{name:b});await a(e).toBeInTheDocument(),await a(e).toBeEnabled(),await a(e).toHaveAttribute("id"),await a(e.tagName).toBe("TEXTAREA"),await a(e).not.toBeRequired(),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-describedby");const s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument()}},y={name:"With Disabled (B5)",args:{...o,disabled:!0,value:m},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toBeDisabled()}},h={name:"With Value",args:{...o,value:m},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveValue(m)}},f={name:"With DefaultValue",args:{...o,defaultValue:m},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveValue(m)}},A={name:"With DefaultValue and Autosize",args:{...o,defaultValue:q,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},parameters:{parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveValue(q),await a(e.tagName).toBe("TEXTAREA");const{scrollHeight:s}=e,d=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${s+d}px`})}},w={name:"With AutoComplete Name Form AutoCorrect Spellcheck And Placeholder (A2, B1)",args:{...o,autoComplete:"given-name",name:"test_name",form:"form_name",placeholder:m,spellCheck:!0,autoCorrect:"on"},argTypes:{autoComplete:{table:{disable:!1}},autoCorrect:{table:{disable:!1}},name:{table:{disable:!1}},form:{table:{disable:!1}},placeholder:{table:{disable:!1}},spellCheck:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveAttribute("autocomplete","given-name"),await a(e).toHaveAttribute("name","test_name"),await a(e).toHaveAttribute("form","form_name"),await a(e).toHaveAttribute("placeholder",m),await a(e).toHaveAttribute("spellCheck","true"),await a(e).toHaveAttribute("autoCorrect","on")}},T={name:"With ReadOnly (B4)",args:{...o,value:m,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveAttribute("readonly")}},B={name:"With Required (B3)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toBeRequired()}},H={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},E={name:"With MinLength And MaxLength (A4)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveAttribute("maxlength"),await a(e).toHaveAttribute("minlength")}},S={name:"With Rows (A5)",args:{...o,rows:4},argTypes:{rows:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await a(e).toHaveAttribute("rows","4"),await a(e.tagName).toBe("TEXTAREA")}},C={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t),e=n.getByRole("textbox"),s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument(),await a(n.queryByText(N)).not.toBeInTheDocument(),await a(e).not.toHaveAttribute("aria-invalid","true"),await a(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},W={name:"With ErrorMessage(B5)",args:{...o,errorMessage:N},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} textarea`,focus:`${c} textarea`}},play:async({canvasElement:t})=>{const n=l(t),e=n.getByRole("textbox",{description:N}),s=n.getAllByRole("generic")[3];await a(s).toBeInTheDocument(),await a(e).toHaveAttribute("aria-invalid","true"),await a(e).toHaveAttribute("aria-describedby")}},R={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByText("En liten beskrivelse tekst");await a(e).toBeInTheDocument()}},k={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox",{name:b});await a(e).toBeInTheDocument()}},M={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${c} > div > button`,click:`${c} > div > button`}},play:async({canvasElement:t})=>{const e=l(t).getByRole("button",{description:b});await a(e).toBeInTheDocument()}},D={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${c} > div > button`,click:`${c} > div > button`}}},pt=t=>{const[n,e]=it.useState("Tester events");return i.jsx(P,{...t,label:n,onFocus:s=>{e("TextArea har fått fokus"),t.onFocus&&t.onFocus(s)},onBlur:s=>{e("TextArea har blitt blurret"),t.onBlur&&t.onBlur(s)},onChange:s=>{e("TextArea har blitt klikket på"),t.onChange&&t.onChange(s)}})},V={render:pt,name:"With EventHandlers (A3)",args:{...o,onFocus:z(),onBlur:z(),onChange:z()},parameters:{imageSnapshot:{disable:!0}},play:async({args:t,canvasElement:n})=>{const s=l(n).getByRole("textbox");s.focus(),await u(()=>a(t.onFocus).toHaveBeenCalled()),await $.type(s,"Olav Nordmann"),await u(()=>a(t.onChange).toHaveBeenCalled()),await $.tab(),await u(()=>a(t.onBlur).toHaveBeenCalled())}},F={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:t=>{alert(t?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},xt=t=>{const n=it.useRef(null);return i.jsxs(i.Fragment,{children:[i.jsx(ct,{onClick:()=>{var e;(e=n.current)==null||e.show()},children:"Vis modal"}),i.jsx(mt,{ref:n,title:"Modal med textarea",children:i.jsx(P,{...t})})]})},I={name:"With AutoSize in Modal",render:xt,args:{...o,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t),e=n.getByRole("button");await $.click(e);const s=n.getByRole("textbox");await a(s.tagName).toBe("TEXTAREA"),await u(()=>a(s).toHaveStyle({height:"64px"}))}},L={name:"With Controlled Value and Autosize",render:function(n){const[,e]=ut();return i.jsxs(i.Fragment,{children:[i.jsx(P,{onChange:s=>e({value:s.target.value}),...n}),i.jsx(ct,{onClick:()=>e({value:""}),children:"Nullstill"})]})},args:{...o,autosize:!0,value:q},argTypes:{value:{table:{disable:!1}},autosize:{table:{disable:!1}}},parameters:{parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},play:async({canvasElement:t})=>{const n=l(t),e=n.getByRole("textbox");await u(()=>a(e).toHaveValue(q)),n.getByRole("button").click();const{scrollHeight:d}=e,dt=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${d+dt}px`})}};var j,_,X;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(_=p.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var J,K,G;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(K=x.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var U,Y,Q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,de;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,be;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var pe,xe,ge;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var ve,ye,he;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var fe,Ae,we;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Te,Be,He;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Ee,Se,Ce;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var We,Re,ke;S.parameters={...S.parameters,docs:{...(We=S.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Me,De,Ve;C.parameters={...C.parameters,docs:{...(Me=C.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var Fe,Ie,Le;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var qe,Ne,Pe;R.parameters={...R.parameters,docs:{...(qe=R.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var ze,$e,Oe;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:Oe.source}}};var je,_e,Xe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Xe.source}}};var Je,Ke,Ge;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Ue,Ye,Qe;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Qe=(Ye=V.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Ze,et,tt;F.parameters={...F.parameters,docs:{...(Ze=F.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(tt=(et=F.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,st;I.parameters={...I.parameters,docs:{...(at=I.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
} satisfies Story`,...(st=(nt=I.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var rt,ot,lt;L.parameters={...L.parameters,docs:{...(rt=L.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
} satisfies Story`,...(lt=(ot=L.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};const Pt=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndAutoSize","WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithRows","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithAutoSizeInModal","WithControlledValueAndAutoSize"];export{v as Defaults,x as WithAttributes,w as WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder,I as WithAutoSizeInModal,L as WithControlledValueAndAutoSize,g as WithCustomClassNames,f as WithDefaultValue,A as WithDefaultValueAndAutoSize,R as WithDescription,y as WithDisabled,W as WithErrorMessage,V as WithEventHandlers,M as WithHelpText,D as WithHelpTextAndDescription,F as WithHelpToggleEvent,k as WithHideLabel,E as WithMinAndMaxLength,T as WithReadOnly,p as WithRef,B as WithRequired,H as WithRequiredAndMark,S as WithRows,h as WithValue,C as WithoutError,Pt as __namedExportsOrder,Nt as default};
//# sourceMappingURL=TextArea.test.stories-h7klkvcL.js.map
