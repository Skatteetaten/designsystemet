import{c as r,r as $,j as c}from"./iframe-BHAek7Q1.js";import{B as Y}from"./index-BkWKVRRR.js";import{T as u}from"./index-D1w89d87.js";import{M as Q}from"./index-DGBS-ULq.js";import{l as z,w as Z,c as ee}from"./storybook.testing.utils-BgHZnMzD.js";import{S as U}from"./icon.systems-MD0H-F_M.js";const{useArgs:te}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:a,fn:J,userEvent:d,waitFor:j,within:i}=__STORYBOOK_MODULE_TEST__,ae=(t,n)=>async({canvasElement:e})=>{const l=i(e).getByRole("textbox");await a(l).toBeInTheDocument(),await a(l).toHaveAttribute(t,n)},ne={component:u,title:"Tester/TextArea",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},autosize:{table:{disable:!0,category:r.props}},classNames:{table:{disable:!0,category:r.props}},characterLimit:{table:{disable:!0,category:r.props}},defaultValue:{control:"text",table:{disable:!0,category:r.props}},description:{table:{disable:!0,category:r.props}},errorMessage:{table:{disable:!0,category:r.props}},hasSpacing:{table:{disable:!0,category:r.props}},helpSvgPath:{table:{disable:!0,category:r.props},options:Object.keys(U),mapping:U},helpText:{table:{disable:!0,category:r.props}},hideLabel:{table:{disable:!0,category:r.props}},label:{table:{disable:!0,category:r.props}},showRequiredMark:{table:{disable:!0,category:r.props}},titleHelpSvg:{table:{disable:!0,category:r.props}},autoComplete:{table:{disable:!0,category:r.htmlAttribute},type:"string"},autoCorrect:{table:{disable:!0,category:r.htmlAttribute}},disabled:{table:{disable:!0,category:r.htmlAttribute}},form:{table:{disable:!0,category:r.htmlAttribute}},name:{table:{disable:!0,category:r.htmlAttribute}},maxLength:{table:{disable:!0,category:r.htmlAttribute}},minLength:{table:{disable:!0,category:r.htmlAttribute}},placeholder:{table:{disable:!0,category:r.htmlAttribute}},readOnly:{table:{disable:!0,category:r.htmlAttribute}},required:{table:{disable:!0,category:r.htmlAttribute}},rows:{table:{disable:!0,category:r.htmlAttribute}},spellCheck:{table:{disable:!0,category:r.htmlAttribute}},value:{table:{disable:!0,category:r.htmlAttribute}},onBlur:{table:{disable:!0,category:r.event}},onChange:{table:{disable:!0,category:r.event}},onFocus:{table:{disable:!0,category:r.event}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},m="Kari Nordmann",X="Opplysninger er obligatorisk",_="Andre opplysninger",o={label:_},p={name:"With Ref (FA1)",args:{...o,ref:t=>{t&&(t.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:ae("name","dummyNameForwardedFromRef")},g={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await a(e).toHaveAttribute("id","htmlid"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await a(e).toHaveAttribute("form","formid123"),await a(e).toHaveAttribute("autocomplete","off")}},x={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",errorMessage:"dummyClassname",textbox:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:X},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=t.querySelector(`${Z} > div`),s=n.getByText(_),l=t.querySelector("[id^=textAreaErrorId]>div");await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(l).toHaveClass("dummyClassname"),await a(n.getByText("beskrivelse")).toHaveClass("dummyClassname"),await a(n.getByRole("textbox")).toHaveClass("dummyClassname")}},h={name:"Defaults (A1, A2, B2, FS-A2)",args:{...o},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox",{name:_});await a(e).toBeInTheDocument(),await a(e).toBeEnabled(),await a(e).toHaveAttribute("id"),await a(e.tagName).toBe("TEXTAREA"),await a(e).not.toBeRequired(),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-describedby");const s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument()}},v={name:"With Disabled (B5)",args:{...o,disabled:!0,value:m,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox");await a(e).toBeDisabled();const s=n.getByRole("button");await a(s).toBeDisabled()}},y={name:"With Value",args:{...o,value:m},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(m)}},f={name:"With DefaultValue",args:{...o,defaultValue:m},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(m)}},A={name:"With DefaultValue and Autosize",args:{...o,defaultValue:z,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(z),await a(e.tagName).toBe("TEXTAREA");const{scrollHeight:s}=e,l=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${s+l}px`})}},w={name:"With AutoComplete Name Form AutoCorrect Spellcheck And Placeholder (A2, B1)",args:{...o,autoComplete:"given-name",name:"test_name",form:"form_name",placeholder:m,spellCheck:!0,autoCorrect:"on"},argTypes:{autoComplete:{table:{disable:!1}},autoCorrect:{table:{disable:!1}},name:{table:{disable:!1}},form:{table:{disable:!1}},placeholder:{table:{disable:!1}},spellCheck:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("autocomplete","given-name"),await a(e).toHaveAttribute("name","test_name"),await a(e).toHaveAttribute("form","form_name"),await a(e).toHaveAttribute("placeholder",m),await a(e).toHaveAttribute("spellCheck","true"),await a(e).toHaveAttribute("autoCorrect","on")}},T={name:"With ReadOnly (B4)",args:{...o,value:m,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("readonly")}},B={name:"With Required (B3)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toBeRequired(),await a(e).toHaveAttribute("aria-invalid","false")}},S={name:"With Required And Mark (B4, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},C={name:"With MinLength And MaxLength (A4)",args:{...o,maxLength:50,minLength:10},argTypes:{maxLength:{table:{disable:!1}},minLength:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("maxlength"),await a(e).toHaveAttribute("minlength")}},E={name:"With Rows (A5)",args:{...o,rows:4},argTypes:{rows:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveAttribute("rows","4"),await a(e.tagName).toBe("TEXTAREA")}},H={name:"Without ErrorMessage (B5)",args:{...o},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s=t.querySelector("[id^=textAreaErrorId]");await a(s).toBeInTheDocument(),await a(n.queryByText(X)).not.toBeInTheDocument(),await a(e).not.toHaveAttribute("aria-invalid","true"),await a(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disableSnapshot:!0}}},W={name:"With ErrorMessage(B5)",args:{...o,errorMessage:X},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{pseudoStates:["hover","focus-visible"]},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox",{description:X}),s=n.getAllByRole("generic")[3];await a(s).toBeInTheDocument(),await a(e).toHaveAttribute("aria-invalid","true"),await a(e).toHaveAttribute("aria-describedby")}},R={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByText("En liten beskrivelse tekst");await a(e).toBeInTheDocument();const s=n.getByRole("textbox");await a(s).toHaveAttribute("aria-describedby");const l=s.getAttribute("aria-describedby");await a(l).toMatch(/descId-/)}},k={name:"With HideLabel (B2)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox",{name:_});await a(e).toBeInTheDocument()}},M={name:"With HelpText (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("button",{description:_});await a(e).toBeInTheDocument()}},L={name:"With HelpText And Description (A1)",args:{...o,helpText:"Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",description:"En liten beskrivelse tekst"},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}}},se=t=>{const[n,e]=$.useState("Tester events");return c.jsx(u,{...t,label:n,onFocus:s=>{e("TextArea har fått fokus"),t.onFocus&&t.onFocus(s)},onBlur:s=>{e("TextArea har blitt blurret"),t.onBlur&&t.onBlur(s)},onChange:s=>{e("TextArea har blitt klikket på"),t.onChange&&t.onChange(s)}})},D={render:se,name:"With EventHandlers (A3)",args:{...o,onFocus:J(),onBlur:J(),onChange:J()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const s=i(n).getByRole("textbox");s.focus(),await j(()=>a(t.onFocus).toHaveBeenCalled()),await d.type(s,"Olav Nordmann"),await j(()=>a(t.onChange).toHaveBeenCalled()),await d.tab(),await j(()=>a(t.onBlur).toHaveBeenCalled())}},I={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:t=>{alert(t?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},re=t=>{const n=$.useRef(null);return c.jsxs(c.Fragment,{children:[c.jsx(Y,{onClick:()=>{n.current?.show()},children:"Vis modal"}),c.jsx(Q,{ref:n,title:"Modal med textarea",children:c.jsx(u,{...t})})]})},V={name:"With AutoSize in Modal",render:re,args:{...o,autosize:!0},argTypes:{defaultValue:{table:{disable:!1}},autosize:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("button");await d.click(e);const s=n.getByRole("textbox");await a(s.tagName).toBe("TEXTAREA"),await j(()=>a(s).toHaveStyle({height:"64px"}))}},F={name:"With Controlled Value and Autosize",render:function(n){const[,e]=te();return c.jsxs(c.Fragment,{children:[c.jsx(u,{onChange:s=>e({value:s.target.value}),...n}),c.jsx(Y,{onClick:()=>e({value:""}),children:"Nullstill"})]})},args:{...o,autosize:!0,value:z},argTypes:{value:{table:{disable:!1}},autosize:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox");await j(()=>a(e).toHaveValue(z)),n.getByRole("button").click();const{scrollHeight:l}=e,b=e.offsetHeight-e.clientHeight;await a(e).toHaveStyle({height:`${l+b}px`})}},K=t=>{const[n,e]=$.useState("");return n==="Eivind"&&console.log(ee),c.jsx(u,{...t,value:n,characterLimit:50,onChange:s=>{e(s.target.value)}})},q={name:"With CharacterLimit (A10)",render:K,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},N={name:"With CharacterLimit Exceeded (A10)",render:K,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox"),s="Dette er en kort tekst.",l="Dette er en veldig lang tekst som bør være mer enn 50 tegn";await d.type(e,s);const b=await n.findByText("27 tegn igjen");a(b).toBeInTheDocument(),await d.clear(e),await d.type(e,l);const G=await n.findByText("8 tegn for mye");a(G).toBeInTheDocument()}},P={name:"With CharacterLimit And Error (A10)",render:K,args:{...o,errorMessage:"Feilmelding",characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}}},oe=t=>{const[n,e]=$.useState("");return c.jsx(u,{...t,value:n,characterLimit:50,onChange:s=>{e(s.target.value)},onBlur:s=>e(s.target.value.replaceAll(" ",""))})},O={name:"With CharacterLimit And Reset On Empty String",render:oe,args:{...o,characterLimit:50},argTypes:{characterLimit:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("textbox");await d.type(e,"          ");const l=await n.findByText("40 tegn igjen");a(l).toBeInTheDocument(),await d.keyboard("{Tab}");const b=await n.findByText("50 tegn igjen");a(b).toBeInTheDocument()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await expect(textbox.tagName).toBe('TEXTAREA');
    await expect(textbox).not.toBeRequired();
    await expect(textbox).not.toHaveAttribute('aria-invalid');
    await expect(textbox).not.toHaveAttribute('aria-describedby');
    const errorMessageContainer = canvasElement.querySelector('[id^=textAreaErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (B5)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueText,
    helpText: 'Hjelpeknappen skal også være disabled'
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    await expect(textbox).toHaveAttribute('aria-invalid', 'false');
  }
} satisfies Story`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'With CharacterLimit And Reset On Empty String',
  render: TemplateWithCharacterCounterAndOnBlur,
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
    const textWith10Spaces = '          ';
    await userEvent.type(textArea, textWith10Spaces);
    const remainingCount = await canvas.findByText('40 tegn igjen');
    expect(remainingCount).toBeInTheDocument();
    await userEvent.keyboard('{Tab}');
    const newRemainingCount = await canvas.findByText('50 tegn igjen');
    expect(newRemainingCount).toBeInTheDocument();
  }
} satisfies Story`,...O.parameters?.docs?.source}}};const ie=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithDisabled","WithValue","WithDefaultValue","WithDefaultValueAndAutoSize","WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder","WithReadOnly","WithRequired","WithRequiredAndMark","WithMinAndMaxLength","WithRows","WithoutError","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithHelpTextAndDescription","WithEventHandlers","WithHelpToggleEvent","WithAutoSizeInModal","WithControlledValueAndAutoSize","WithCharacterLimit","WithCharacterLimitExceeded","WithCharacterLimitAndError","WithCharacterLimitAndResetOnEmptyAString"],pe=Object.freeze(Object.defineProperty({__proto__:null,Defaults:h,WithAttributes:g,WithAutoCompleteNameFormAutoCorrectSpellcheckAndPlaceholder:w,WithAutoSizeInModal:V,WithCharacterLimit:q,WithCharacterLimitAndError:P,WithCharacterLimitAndResetOnEmptyAString:O,WithCharacterLimitExceeded:N,WithControlledValueAndAutoSize:F,WithCustomClassNames:x,WithDefaultValue:f,WithDefaultValueAndAutoSize:A,WithDescription:R,WithDisabled:v,WithErrorMessage:W,WithEventHandlers:D,WithHelpText:M,WithHelpTextAndDescription:L,WithHelpToggleEvent:I,WithHideLabel:k,WithMinAndMaxLength:C,WithReadOnly:T,WithRef:p,WithRequired:B,WithRequiredAndMark:S,WithRows:E,WithValue:y,WithoutError:H,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{pe as T};
//# sourceMappingURL=TextArea.test.stories-DnqndSx_.js.map
