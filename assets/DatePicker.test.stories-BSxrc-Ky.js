import{j as b}from"./jsx-runtime-Nms4Y4qS.js";import{r as Ea}from"./index-BwDkhjyp.js";import{g as Ra,d as u}from"./index-CI44Z2h3.js";import{D as U}from"./index-FK3RsA-s.js";import{w as o,e as t,b as i,c as m,u as g,f as v}from"./index-hUG6DWTw.js";import{w as d}from"./storybook.testing.utils-CMs160i9.js";import{w as Wa}from"./webcomponent-decorator-DlmhHjRY.js";import{S as G}from"./icon.systems-Cj7Nt_Zb.js";import{f as Ma}from"./base-props.types-BkCKQDF7.js";import{T as Ia}from"./DatePickerCalendar-CuGySpz0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Help-CLr4Mr4j.js";import"./index-DMYlLpXe.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./LabelWithHelp-BmjIbcxG.js";import"./index-CCUfsLXI.js";import"./index-BdP0pRE8.js";import"./client-BCxScYCN.js";import"./index-B8XB3FuZ.js";import"./icon.utils-Djpt9B5F.js";const Da=(a,n)=>async({canvasElement:e})=>{const l=o(e).getByRole("textbox");await t(l).toBeInTheDocument(),await m(()=>t(l).toHaveAttribute(a,n))},Fa=new Date("2024.01.15"),ot={component:U,title:"Tester/DatePicker/DatePicker",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},value:{table:{disable:!0},control:"date"},dateFormat:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(G),mapping:G},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},initialPickerDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...Ma],control:"inline-radio"},autoComplete:{table:{disable:!0,defaultValue:{summary:Ra()},type:{summary:"string"}},type:"string",control:"text"},disabled:{table:{disable:!0}},name:{table:{disable:!0}},placeholder:{table:{disable:!0}},required:{table:{disable:!0}},readOnly:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectDate:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},parameters:{mockDate:Fa}},c=new Date(2024,1,1),K="Fødselsdato er obligatorisk",p="Fødselsdato",r={label:p},y={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Da("name","dummyNameForwardedFromRef")},h={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await t(e).toHaveAttribute("id","htmlid"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("autocomplete","off")}},w={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",dateContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:K},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=a.querySelector(`${d} > div`),s=n.getByText(p),l=a.querySelector(`${d} > div > div`),Sa=a.querySelector("[id^=datepickerErrorId]>div");await t(e).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(l).toHaveClass("dummyClassnameFormContainer"),await t(Sa).toHaveClass("dummyClassname")}},x={name:"Defaults Variant Medium (A1, A2, B2, B5)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${d} input`,`${d} button`],focus:[`${d} input`,`${d} button`]}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox",{name:p});await t(e).toBeInTheDocument(),await t(e).toBeEnabled(),await t(e).toHaveAttribute("id"),await t(e).toHaveAttribute("placeholder",u.t("ds_forms:datepicker.TypeOrSelect")),await t(e.tagName).toBe("INPUT"),await t(e).not.toBeRequired(),await t(e).not.toHaveAttribute("aria-invalid"),await t(e).not.toHaveAttribute("aria-describedby");const s=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await t(s).toBeInTheDocument(),await t(s).toBeEnabled(),await t(s.tagName).toBe("BUTTON"),await t(s).toHaveAttribute("aria-expanded","false");const l=a.querySelector("[id^=datepickerErrorId]");await t(l).toBeInTheDocument()}},B={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},f={name:"With Disabled (B7)",args:{...r,disabled:!0,value:c},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getByRole("button");await t(e).toBeDisabled(),await t(s).toBeDisabled()}},T={name:"With Value (B1)",args:{...r,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Da("value","01.02.2024")},A={name:"With Required (B3)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).toBeRequired()}},C={name:"With Required And Mark (A1)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},H={name:"Without ErrorMessage (A1, A4, A7, B4)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=a.querySelector("[id^=datepickerErrorId]");await t(s).toBeInTheDocument(),await t(n.queryByText(K)).not.toBeInTheDocument(),await t(e).not.toHaveAttribute("aria-invalid","true"),await t(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},k={name:"With ErrorMessage (A1, A4, A7, B4)",args:{...r,errorMessage:K},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${d} input`,`${d} button`],focus:[`${d} input`,`${d} button`]}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getByText(K),l=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(l).toBeInTheDocument(),await t(e).toHaveAttribute("aria-invalid","true"),await t(e).toHaveAttribute("aria-describedby")}},D={name:"With Description (A1)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByText("En liten beskrivelse tekst");await t(e).toBeInTheDocument()}},S={name:"With HelpText (A1)",args:{...r,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{description:p});await t(e).toBeInTheDocument(),await i.click(e);const s=n.getByText("Hjelpetekst");await t(s).toBeInTheDocument()}},E={name:"With HideLabel (A1)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox",{name:p});await t(e).toBeInTheDocument()}},R={name:"With AutoComplete Name And Placeholder (A2, B1)",args:{...r,autoComplete:"given-name",name:"test_name",placeholder:"placeholdertekst"},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).toHaveAttribute("autocomplete","given-name"),await t(e).toHaveAttribute("name","test_name"),await t(e).toHaveAttribute("placeholder","placeholdertekst")}},W={name:"With Placeholder Empty (A2)",args:{...r,placeholder:""},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).not.toHaveAttribute("placeholder")}},M={name:"With ReadOnly (B6)",args:{...r,value:c,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await t(e).toHaveAttribute("readonly"),await t(n.queryByRole("button")).not.toBeInTheDocument()}},I={name:"With DateFormat (A8)",args:{...r,value:c,dateFormat:"yyyy/MM/dd"},argTypes:{dateFormat:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await m(()=>t(e).toHaveValue("2024/02/01"));const s=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(s);const l=n.getByText("5");await i.click(l),await t(e).toHaveValue("2024/02/05")}},Pa=a=>(a.initialPickerDate=new Date(a.initialPickerDate),b.jsx(U,{...a,initialPickerDate:a.initialPickerDate})),F={render:Pa,name:"With InitialPickerDate (Kalender B2)",args:{...r,initialPickerDate:new Date("2024.01.31")},argTypes:{initialPickerDate:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e);const s=n.getByText("31");await t(s).toHaveAttribute("aria-current","true")}},P={name:"Generously With Format From User (A3)",args:{...r,value:c},argTypes:{},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");e.focus();const s=g.setup();await i.change(e,{target:{value:"0103"}}),await s.tab(),await m(()=>t(e).toHaveValue("01.03.2024")),e.focus(),await i.change(e,{target:{value:"0104"}}),await s.tab(),await m(()=>t(e).toHaveValue("01.04.2024"))}},La=a=>{const[n,e]=Ea.useState("Tester events");return b.jsx(U,{...a,label:n,onFocus:s=>{e("Form-element har fått fokus"),a.onFocus&&a.onFocus(s)},onBlur:s=>{e("Form-element har blitt blurret"),a.onBlur&&a.onBlur(s)},onChange:s=>{e("Form-element har blitt klikket på"),a.onChange&&a.onChange(s)}})},L={render:La,name:"With EventHandlers (A6)",args:{...r,onFocus:v(),onBlur:v(),onChange:v()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({args:a,canvasElement:n})=>{const s=o(n).getByRole("textbox");await s.focus(),await m(()=>t(a.onFocus).toHaveBeenCalled()),await g.type(s,"01.02.2002"),await m(()=>t(a.onChange).toHaveBeenCalled()),await g.tab(),await m(()=>t(a.onBlur).toHaveBeenCalled())}},O={name:"Click CalendarButton On And Off (A1, A5, B5)",args:{...r,value:c,onBlur:v(),onChange:v(),onFocus:v()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button");await i.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await i.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await i.click(e)}},q={name:"Click CalendarDateButton (Kalender A2, A6)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await g.click(e);const s=n.getByText("5");await g.click(s),await t(e).toHaveAttribute("aria-expanded","false");const l=n.getByRole("textbox");await t(l).toHaveValue("05.02.2024")}},N={name:"Click Outside Calendar (Kalender A7)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await t(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await t(s).toBeInTheDocument(),await i.click(n.getByLabelText(p)),await t(s).not.toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false")}},_={name:"Open Calender Escape ",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await t(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await t(s).toBeInTheDocument(),await g.keyboard("[Escape]"),await t(s).not.toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false")}},Oa=a=>b.jsxs(b.Fragment,{children:[b.jsx(U,{...a}),b.jsx(Ia,{label:"Organisasjonsnummer"})]}),V={render:Oa,name:"Open Calendar Moves Over (Kalender A1 delvis)",args:{...r,value:c},parameters:{HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button");await i.click(e)}},j={name:"With ShadowDom",args:{...r,value:c},argTypes:{ref:{table:{disable:!1}}},decorators:[Wa],parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0},customElementName:"calendar-customelement"},play:async({canvasElement:a})=>{const n=a.querySelector("calendar-customelement"),e=o(n.shadowRoot.firstElementChild),s=e.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(s),await t(s).toHaveAttribute("aria-expanded","true");const l=e.getByRole("table");await t(l).toBeInTheDocument(),await i.click(e.getByLabelText(p)),await t(l).not.toBeInTheDocument(),await t(s).toHaveAttribute("aria-expanded","false")}},$={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},z={name:"Hide Calendar On Window Resize (Kalender A4)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button");await i.click(e);const s=n.getByRole("table");await t(s).toBeInTheDocument(),window.innerWidth=window.innerWidth+100,await i.resize(window),await t(s).toBeInTheDocument(),window.innerHeight=window.innerHeight-100,await i.resize(window),await t(s).toBeInTheDocument(),window.innerWidth=window.innerWidth-100,await i.resize(window),await t(s).not.toBeInTheDocument()}};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID'
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
    await expect(textbox).toHaveAttribute('autocomplete', 'off');
  }
} satisfies Story`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      dateContainer: 'dummyClassnameFormContainer',
      errorMessage: 'dummyClassname'
    },
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
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const label = canvas.getByText(defaultLabelText);
    // eslint-disable-next-line testing-library/no-node-access
    const dateContainer = canvasElement.querySelector(\`\${wrapper} > div > div\`);
    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector('[id^=datepickerErrorId]>div');
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(dateContainer).toHaveClass('dummyClassnameFormContainer');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,oe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Defaults Variant Medium (A1, A2, B2, B5)',
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
      hover: [\`\${wrapper} input\`, \`\${wrapper} button\`],
      focus: [\`\${wrapper} input\`, \`\${wrapper} button\`]
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: defaultLabelText
    });
    await expect(input).toBeInTheDocument();
    await expect(input).toBeEnabled();
    await expect(input).toHaveAttribute('id');
    await expect(input).toHaveAttribute('placeholder', dsI18n.t('ds_forms:datepicker.TypeOrSelect'));
    await expect(input.tagName).toBe('INPUT');
    await expect(input).not.toBeRequired();
    await expect(input).not.toHaveAttribute('aria-invalid');
    await expect(input).not.toHaveAttribute('aria-describedby');
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await expect(calendarButton).toBeInTheDocument();
    await expect(calendarButton).toBeEnabled();
    await expect(calendarButton.tagName).toBe('BUTTON');
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');

    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector('[id^=datepickerErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ce;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'With Disabled (B7)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueDate
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
    const calendarButton = canvas.getByRole('button');
    await expect(textbox).toBeDisabled();
    await expect(calendarButton).toBeDisabled();
  }
} satisfies Story`,...(me=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,ve;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'With Value (B1)',
  args: {
    ...defaultArgs,
    value: valueDate
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
  play: verifyAttribute('value', '01.02.2024')
} satisfies Story`,...(ve=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ge,ye,he;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var we,xe,Be;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'With Required And Mark (A1)',
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
} satisfies Story`,...(Be=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var fe,Te,Ae;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Without ErrorMessage (A1, A4, A7, B4)',
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
    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector('[id^=datepickerErrorId]');
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
} satisfies Story`,...(Ae=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ce,He,ke;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'With ErrorMessage (A1, A4, A7, B4)',
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
      hover: [\`\${wrapper} input\`, \`\${wrapper} button\`],
      focus: [\`\${wrapper} input\`, \`\${wrapper} button\`]
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    const errorMessage = canvas.getByText(errorMessageText);
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessage).toBeInTheDocument();
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(textbox).toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).toHaveAttribute('aria-describedby');
  }
} satisfies Story`,...(ke=(He=k.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var De,Se,Ee;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'With Description (A1)',
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
} satisfies Story`,...(Ee=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Re,We,Me;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst'
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
    const helpText = canvas.getByText('Hjelpetekst');
    await expect(helpText).toBeInTheDocument();
  }
} satisfies Story`,...(Me=(We=S.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};var Ie,Fe,Pe;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'With HideLabel (A1)',
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
} satisfies Story`,...(Pe=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Le,Oe,qe;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'With AutoComplete Name And Placeholder (A2, B1)',
  args: {
    ...defaultArgs,
    autoComplete: 'given-name',
    name: 'test_name',
    placeholder: 'placeholdertekst'
  },
  argTypes: {
    autoComplete: {
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
    await expect(textbox).toHaveAttribute('name', 'test_name');
    await expect(textbox).toHaveAttribute('placeholder', 'placeholdertekst');
  }
} satisfies Story`,...(qe=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ne,_e,Ve;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'With Placeholder Empty (A2)',
  args: {
    ...defaultArgs,
    placeholder: ''
  },
  argTypes: {
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
    await expect(textbox).not.toHaveAttribute('placeholder');
  }
} satisfies Story`,...(Ve=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var je,$e,ze;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'With ReadOnly (B6)',
  args: {
    ...defaultArgs,
    value: valueDate,
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
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  }
} satisfies Story`,...(ze=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Ke,Ue,Ge;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'With DateFormat (A8)',
  args: {
    ...defaultArgs,
    value: valueDate,
    dateFormat: 'yyyy/MM/dd'
  },
  argTypes: {
    dateFormat: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await waitFor(() => expect(input).toHaveValue('2024/02/01'));
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await fireEvent.click(calendarButton);
    const dateButton = canvas.getByText('5');
    await fireEvent.click(dateButton);
    await expect(input).toHaveValue('2024/02/05');
  }
} satisfies Story`,...(Ge=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Je,Qe,Xe;F.parameters={...F.parameters,docs:{...(Je=F.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: DatesTemplate,
  name: 'With InitialPickerDate (Kalender B2)',
  args: {
    ...defaultArgs,
    initialPickerDate: new Date('2024.01.31')
  },
  argTypes: {
    initialPickerDate: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await fireEvent.click(calendarButton);
    const ariaCurrentButton = canvas.getByText('31');
    await expect(ariaCurrentButton).toHaveAttribute('aria-current', 'true');
  }
} satisfies Story`,...(Xe=(Qe=F.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Generously With Format From User (A3)',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    input.focus();
    const user = userEvent.setup();
    await fireEvent.change(input, {
      target: {
        value: '0103'
      }
    });
    await user.tab();
    await waitFor(() => expect(input).toHaveValue('01.03.2024'));
    input.focus();
    await fireEvent.change(input, {
      target: {
        value: '0104'
      }
    });
    await user.tab();
    await waitFor(() => expect(input).toHaveValue('01.04.2024'));
  }
} satisfies Story`,...(ea=(Ze=P.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,na;L.parameters={...L.parameters,docs:{...(aa=L.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A6)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await textbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(textbox, '01.02.2002');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  }
} satisfies Story`,...(na=(ta=L.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ra,oa;O.parameters={...O.parameters,docs:{...(sa=O.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: 'Click CalendarButton On And Off (A1, A5, B5)',
  args: {
    ...defaultArgs,
    value: valueDate,
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(calendarButton);
  }
} satisfies Story`,...(oa=(ra=O.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var ia,la,ca;q.parameters={...q.parameters,docs:{...(ia=q.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: 'Click CalendarDateButton (Kalender A2, A6)',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await userEvent.click(calendarButton);
    const dateButton = canvas.getByText('5');
    await userEvent.click(dateButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('05.02.2024');
  }
} satisfies Story`,...(ca=(la=q.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var da,ua,ma;N.parameters={...N.parameters,docs:{...(da=N.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: 'Click Outside Calendar (Kalender A7)',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();
    await fireEvent.click(canvas.getByLabelText(defaultLabelText));
    await expect(calendarTable).not.toBeInTheDocument();
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...(ma=(ua=N.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,ba,va;_.parameters={..._.parameters,docs:{...(pa=_.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: 'Open Calender Escape ',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();
    await userEvent.keyboard('[Escape]');
    await expect(calendarTable).not.toBeInTheDocument();
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...(va=(ba=_.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var ga,ya,ha;V.parameters={...V.parameters,docs:{...(ga=V.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  render: MovesOverTemplate,
  name: 'Open Calendar Moves Over (Kalender A1 delvis)',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  parameters: {
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
  }
} satisfies Story`,...(ha=(ya=V.parameters)==null?void 0:ya.docs)==null?void 0:ha.source}}};var wa,xa,Ba;j.parameters={...j.parameters,docs:{...(wa=j.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: 'With ShadowDom',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  argTypes: {
    ref: {
      table: {
        disable: false
      }
    }
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    },
    customElementName: 'calendar-customelement'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const customElement = canvasElement.querySelector(\`calendar-customelement\`);
    const shadowCanvas = within(customElement!.shadowRoot!.firstElementChild as HTMLElement);
    const calendarButton = shadowCanvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    const calendarTable = shadowCanvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();
    await fireEvent.click(shadowCanvas.getByLabelText(defaultLabelText));
    await expect(calendarTable).not.toBeInTheDocument();
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...(Ba=(xa=j.parameters)==null?void 0:xa.docs)==null?void 0:Ba.source}}};var fa,Ta,Aa;$.parameters={...$.parameters,docs:{...(fa=$.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Aa=(Ta=$.parameters)==null?void 0:Ta.docs)==null?void 0:Aa.source}}};var Ca,Ha,ka;z.parameters={...z.parameters,docs:{...(Ca=z.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  name: 'Hide Calendar On Window Resize (Kalender A4)',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();

    // kalender lukkes _ikke_ dersom vinduet blir bredere
    window.innerWidth = window.innerWidth + 100;
    await fireEvent.resize(window);
    await expect(calendarTable).toBeInTheDocument();

    // kalender lukkes _ikke_ dersom vinduet blir lavere
    window.innerHeight = window.innerHeight - 100;
    await fireEvent.resize(window);
    await expect(calendarTable).toBeInTheDocument();

    // kalender lukkes dersom vinduet blir smalere
    window.innerWidth = window.innerWidth - 100;
    await fireEvent.resize(window);
    await expect(calendarTable).not.toBeInTheDocument();
  }
} satisfies Story`,...(ka=(Ha=z.parameters)==null?void 0:Ha.docs)==null?void 0:ka.source}}};const it=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithRequired","WithRequiredAndMark","WithoutErrorMessage","WithErrorMessage","WithDescription","WithHelpText","WithHideLabel","WithAutoCompleteNameAndPlaceholder","WithPlaceholderEmpty","WithReadOnly","WithDateFormat","WithInitialPickerDate","GenerouslyWithFormatFromUser","WithEventHandlers","ClickCalendarButton","ClickCalendarDateButton","ClickOutsideCalendar","OpenCalendarEscape","OpenCalendarMovesOver","WithShadowDom","WithHelpToggleEvent","HideCalendarOnResizeWidth"];export{O as ClickCalendarButton,q as ClickCalendarDateButton,N as ClickOutsideCalendar,x as Defaults,P as GenerouslyWithFormatFromUser,z as HideCalendarOnResizeWidth,_ as OpenCalendarEscape,V as OpenCalendarMovesOver,h as WithAttributes,R as WithAutoCompleteNameAndPlaceholder,w as WithCustomClassNames,I as WithDateFormat,D as WithDescription,f as WithDisabled,k as WithErrorMessage,L as WithEventHandlers,S as WithHelpText,$ as WithHelpToggleEvent,E as WithHideLabel,F as WithInitialPickerDate,W as WithPlaceholderEmpty,M as WithReadOnly,y as WithRef,A as WithRequired,C as WithRequiredAndMark,j as WithShadowDom,T as WithValue,B as WithVariantLarge,H as WithoutErrorMessage,it as __namedExportsOrder,ot as default};
//# sourceMappingURL=DatePicker.test.stories-BSxrc-Ky.js.map
