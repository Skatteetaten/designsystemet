import{e as r,r as $,j as l}from"./iframe-DRo7xN6O.js";import{B as Tt}from"./index-C6akGUuV.js";import{T as P}from"./index-CJxdEpCy.js";import{M as St}from"./index-B5WJrEEq.js";import{l as z,w as Bt}from"./storybook.testing.utils-CMs160i9.js";import{S as K}from"./icon.systems-YNVHmwDx.js";const{useArgs:Ct}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:a,fn:X,userEvent:m,waitFor:N,within:i}=__STORYBOOK_MODULE_TEST__,Et=(t,n)=>async({canvasElement:e})=>{const c=i(e).getByRole("textbox");await a(c).toBeInTheDocument(),await a(c).toHaveAttribute(t,n)},Ht={component:P,title:"Tester/TextArea",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},autosize:{table:{disable:!0,category:r.props}},classNames:{table:{disable:!0,category:r.props}},characterLimit:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},hasSpacing:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(K),mapping:K},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},autoCorrect:{table:{disable:!0,category:r.htmlAttribute}},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},rows:{table:{disable:!0,category:r.htmlAttribute}},spellCheck:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},d="Kari Nordmann",O="Opplysninger er obligatorisk",_="Andre opplysninger",o={label:_},u={name:"With Ref (FA1)",args:{...o,ref:t=>{t&&(t.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:Et("name","dummyNameForwardedFromRef")},b={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await a(e).toHaveAttribute("id","htmlid"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await a(e).toHaveAttribute("form","formid123"),await a(e).toHaveAttribute("autocomplete","off")}},p={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:O},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=t.querySelector(`${Bt} > div`),s=n.getByText(_),c=t.querySelector("[id^=textAreaErrorId]>div");await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(c).toHaveClass("dummyClassname"),await a(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await a(n.getByRole("textbox")).toHaveClass("dummyClassname")}},g={name:"Defaults (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus"]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox",{name:_});await a(e).toBeInTheDocument(),await a(e).toBeEnabled(),await a(e).toHaveAttribute("id"),await a(e.tagName).toBe("TEXTAREA"),await a(e).not.toBeRequired(),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-describedby");const s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument()}},x={name:"With Disabled (B5)",args:{...o,disabled:!0,value:d},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus"]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toBeDisabled()}},h={name:"With Value",args:{...o,value:d},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(d)}},v={name:"With DefaultValue",args:{...o,defaultValue:d},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(d)}},y={name:"With DefaultValue and Autosize",args:{...o,defaultValue:z,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(z),await a(e.tagName).toBe("TEXTAREA");const{scrollHeight:s}=e,c=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${s+c}px`})}},f={name:"With AutoComplete Name Form AutoCorrect Spellcheck And Placeholder (A2, B1)",args:{...o,autoComplete:"given-name",name:"test_name",form:"form_name",placeholder:d,spellCheck:!0,autoCorrect:"on"},argTypes:{autoComplete:{table:{disable:!1}},autoCorrect:{table:{disable:!1}},name:{table:{disable:!1}},form:{table:{disable:!1}},placeholder:{table:{disable:!1}},spellCheck:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("autocomplete","given-name"),await a(e).toHaveAttribute("name","test_name"),await a(e).toHaveAttribute("form","form_name"),await a(e).toHaveAttribute("placeholder",d),await a(e).toHaveAttribute("spellCheck","true"),await a(e).toHaveAttribute("autoCorrect","on")}},A={name:"With ReadOnly (B4)",args:{...o,value:d,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus"]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("readonly")}},T={name:"With Required (B3)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toBeRequired()}},w={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},S={name:"With MinLength And MaxLength (A4)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("maxlength"),await a(e).toHaveAttribute("minlength")}},B={name:"With Rows (A5)",args:{...o,rows:4},argTypes:{rows:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("rows","4"),await a(e.tagName).toBe("TEXTAREA")}},C={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument(),await a(n.queryByText(O)).not.toBeInTheDocument(),await a(e).not.toHaveAttribute("aria-invalid","true"),await a(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disableSnapshot:!0}}},E={name:"With ErrorMessage(B5)",args:{...o,errorMessage:O},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{pseudoStates:["hover","focus"]},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox",{description:O}),s=n.getAllByRole("generic")[3];await a(s).toBeInTheDocument(),await a(e).toHaveAttribute("aria-invalid","true"),await a(e).toHaveAttribute("aria-describedby")}},H={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByText("En liten beskrivelse tekst");await a(e).toBeInTheDocument()}},W={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox",{name:_});await a(e).toBeInTheDocument()}},R={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("button",{description:_});await a(e).toBeInTheDocument()}},k={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}}},Wt=t=>{const[n,e]=$.useState("Tester events");return l.jsx(P,{...t,label:n,onFocus:s=>{e("TextArea har fått fokus"),t.onFocus&&t.onFocus(s)},onBlur:s=>{e("TextArea har blitt blurret"),t.onBlur&&t.onBlur(s)},onChange:s=>{e("TextArea har blitt klikket på"),t.onChange&&t.onChange(s)}})},M={render:Wt,name:"With EventHandlers (A3)",args:{...o,onFocus:X(),onBlur:X(),onChange:X()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const s=i(n).getByRole("textbox");s.focus(),await N(()=>a(t.onFocus).toHaveBeenCalled()),await m.type(s,"Olav Nordmann"),await N(()=>a(t.onChange).toHaveBeenCalled()),await m.tab(),await N(()=>a(t.onBlur).toHaveBeenCalled())}},L={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:t=>{alert(t?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},Rt=t=>{const n=$.useRef(null);return l.jsxs(l.Fragment,{children:[l.jsx(Tt,{onClick:()=>{var e;(e=n.current)==null||e.show()},children:"Vis modal"}),l.jsx(St,{ref:n,title:"Modal med textarea",children:l.jsx(P,{...t})})]})},D={name:"With AutoSize in Modal",render:Rt,args:{...o,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("button");await m.click(e);const s=n.getByRole("textbox");await a(s.tagName).toBe("TEXTAREA"),await N(()=>a(s).toHaveStyle({height:"64px"}))}},V={name:"With Controlled Value and Autosize",render:function(n){const[,e]=Ct();return l.jsxs(l.Fragment,{children:[l.jsx(P,{onChange:s=>e({value:s.target.value}),...n}),l.jsx(Tt,{onClick:()=>e({value:""}),children:"Nullstill"})]})},args:{...o,autosize:!0,value:z},argTypes:{value:{table:{disable:!1}},autosize:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox");await N(()=>a(e).toHaveValue(z)),n.getByRole("button").click();const{scrollHeight:c}=e,j=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${c+j}px`})}},J=t=>{const[n,e]=$.useState("");return l.jsx(P,{...t,value:n,characterLimit:50,onChange:s=>{e(s.target.value)}})},F={name:"With CharacterLimit (A10)",render:J,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},I={name:"With CharacterLimit Exceeded (A10)",render:J,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s="Dette er en kort tekst.",c="Dette er en veldig lang tekst som bør være mer enn 50 tegn";await m.type(e,s);const j=await n.findByText("27 tegn igjen");a(j).toBeInTheDocument(),await m.clear(e),await m.type(e,c);const wt=await n.findByText("8 tegn for mye");a(wt).toBeInTheDocument()}},q={name:"With CharacterLimit And Error (A10)",render:J,args:{...o,errorMessage:"Feilmelding",characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}};var U,Y,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('name', 'dummyNameForwardedFromRef')
} satisfies Story`,...(G=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus']
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
} satisfies Story`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ce;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeDisabled();
  }
} satisfies Story`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,ue;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveValue(valueText);
  }
} satisfies Story`,...(ue=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var be,pe,ge;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveValue(valueText);
  }
} satisfies Story`,...(ge=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var xe,he,ve;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
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
} satisfies Story`,...(ve=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,fe,Ae;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var Te,we,Se;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('readonly');
  }
} satisfies Story`,...(Se=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Be,Ce,Ee;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var He,We,Re;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(We=w.parameters)==null?void 0:We.docs)==null?void 0:Re.source}}};var ke,Me,Le;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var De,Ve,Fe;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var Ie,qe,Ne;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...(Ne=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Pe,_e,ze;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
    pseudoStates: ['hover', 'focus']
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
} satisfies Story`,...(ze=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var Oe,je,Xe;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Xe.source}}};var $e,Je,Ke;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Ue,Ye,Ge;R.parameters={...R.parameters,docs:{...(Ue=R.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Qe,Ze,et;k.parameters={...k.parameters,docs:{...(Qe=k.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(et=(Ze=k.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;M.parameters={...M.parameters,docs:{...(tt=M.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
} satisfies Story`,...(nt=(at=M.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,rt,ot;L.parameters={...L.parameters,docs:{...(st=L.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
} satisfies Story`,...(ot=(rt=L.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,lt,ct;D.parameters={...D.parameters,docs:{...(it=D.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
} satisfies Story`,...(ct=(lt=D.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,mt,ut;V.parameters={...V.parameters,docs:{...(dt=V.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
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
} satisfies Story`,...(ut=(mt=V.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var bt,pt,gt;F.parameters={...F.parameters,docs:{...(bt=F.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
} satisfies Story`,...(gt=(pt=F.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var xt,ht,vt;I.parameters={...I.parameters,docs:{...(xt=I.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
} satisfies Story`,...(vt=(ht=I.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var yt,ft,At;q.parameters={...q.parameters,docs:{...(yt=q.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
} satisfies Story`,...(At=(ft=q.parameters)==null?void 0:ft.docs)==null?void 0:At.source}}};const kt=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndAutoSize","WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithRows","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithAutoSizeInModal","WithControlledValueAndAutoSize","WithCharacterLimit","WithCharacterLimitExceeded","WithCharacterLimitAndError"],qt=Object.freeze(Object.defineProperty({__proto__:null,Defaults:g,WithAttributes:b,WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder:f,WithAutoSizeInModal:D,WithCharacterLimit:F,WithCharacterLimitAndError:q,WithCharacterLimitExceeded:I,WithControlledValueAndAutoSize:V,WithCustomClassNames:p,WithDefaultValue:v,WithDefaultValueAndAutoSize:y,WithDescription:H,WithDisabled:x,WithErrorMessage:E,WithEventHandlers:M,WithHelpText:R,WithHelpTextAndDescription:k,WithHelpToggleEvent:L,WithHideLabel:W,WithMinAndMaxLength:S,WithReadOnly:A,WithRef:u,WithRequired:T,WithRequiredAndMark:w,WithRows:B,WithValue:h,WithoutError:C,__namedExportsOrder:kt,default:Ht},Symbol.toStringTag,{value:"Module"}));export{qt as T};
//# sourceMappingURL=TextArea.test.stories-QJme2z6H.js.map
