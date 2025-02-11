import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as Ea}from"./index-ClcD9ViR.js";import{w as o,e as t,a as i,b as m,u as g,f as v}from"./index-XVqkR3zt.js";import{g as Ra,d as u}from"./index-qxaMszO_.js";import{D as G}from"./index-DOHHf95q.js";import{w as d}from"./storybook.testing.utils-CMs160i9.js";import{w as Wa}from"./webcomponent-decorator-CLpLjz2m.js";import{S as J}from"./icon.systems-C3YHcMhe.js";import{f as Ma}from"./base-props.types-sXyoNogd.js";import{T as Ia}from"./DatePickerCalendar-DkH0XVvE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Help-DD2Qmlbx.js";import"./index-CT5qi75N.js";import"./index-BYj_oXFq.js";import"./index-DVxy_Kbo.js";import"./LabelWithHelp-CBkTgz7a.js";import"./index-DdP4wgFW.js";import"./index-DDpvzByM.js";import"./client-CmY5Wfjt.js";import"./index-ZuzByk-F.js";import"./icon.utils-BQ79h5X2.js";const Sa=(a,n)=>async({canvasElement:e})=>{const l=o(e).getByRole("textbox");await t(l).toBeInTheDocument(),await m(()=>t(l).toHaveAttribute(a,n))},Fa=new Date("2024-01-15"),ot={component:G,title:"Tester/DatePicker/DatePicker",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},value:{table:{disable:!0},control:"date"},dateFormat:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(J),mapping:J},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},initialPickerDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...Ma],control:"inline-radio"},autoComplete:{table:{disable:!0,defaultValue:{summary:Ra()},type:{summary:"string"}},type:"string",control:"text"},disabled:{table:{disable:!0}},name:{table:{disable:!0}},placeholder:{table:{disable:!0}},required:{table:{disable:!0}},readOnly:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectDate:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},parameters:{mockDate:Fa}},c=new Date(2024,1,1),U="Fødselsdato er obligatorisk",p="Fødselsdato",r={label:p},h={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Sa("name","dummyNameForwardedFromRef")},w={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await t(e).toHaveAttribute("id","htmlid"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("autocomplete","off")}},x={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",dateContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:U},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=a.querySelector(`${d} > div`),s=n.getByText(p),l=a.querySelector(`${d} > div > div`),y=a.querySelector("[id^=datepickerErrorId]>div");await t(e).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(l).toHaveClass("dummyClassnameFormContainer"),await t(y).toHaveClass("dummyClassname")}},B={name:"Defaults Variant Medium (A1, A2, B2, B5)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${d} input`,`${d} button`],focus:[`${d} input`,`${d} button`]}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox",{name:p});await t(e).toBeInTheDocument(),await t(e).toBeEnabled(),await t(e).toHaveAttribute("id"),await t(e).toHaveAttribute("placeholder",u.t("ds_forms:datepicker.TypeOrSelect")),await t(e.tagName).toBe("INPUT"),await t(e).not.toBeRequired(),await t(e).not.toHaveAttribute("aria-invalid"),await t(e).not.toHaveAttribute("aria-describedby");const s=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await t(s).toBeInTheDocument(),await t(s).toBeEnabled(),await t(s.tagName).toBe("BUTTON"),await t(s).toHaveAttribute("aria-expanded","false");const l=a.querySelector("[id^=datepickerErrorId]");await t(l).toBeInTheDocument()}},f={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},T={name:"With Disabled (B7)",args:{...r,disabled:!0,value:c},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getByRole("button");await t(e).toBeDisabled(),await t(s).toBeDisabled()}},A={name:"With Value (B1)",args:{...r,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Sa("value","01.02.2024")},C={name:"With Required (B3)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).toBeRequired()}},H={name:"With Required And Mark (A1)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},k={name:"Without ErrorMessage (A1, A4, A7, B4)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=a.querySelector("[id^=datepickerErrorId]");await t(s).toBeInTheDocument(),await t(n.queryByText(U)).not.toBeInTheDocument(),await t(e).not.toHaveAttribute("aria-invalid","true"),await t(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},D={name:"With ErrorMessage (A1, A4, A7, B4)",args:{...r,errorMessage:U},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${d} input`,`${d} button`],focus:[`${d} input`,`${d} button`]}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getByText(U),l=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(l).toBeInTheDocument(),await t(e).toHaveAttribute("aria-invalid","true"),await t(e).toHaveAttribute("aria-describedby")}},S={name:"With Description (A1)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByText("En liten beskrivelse tekst");await t(e).toBeInTheDocument()}},E={name:"With HelpText (A1)",args:{...r,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{description:p});await t(e).toBeInTheDocument(),await i.click(e);const s=n.getByText("Hjelpetekst");await t(s).toBeInTheDocument()}},R={name:"With HideLabel (A1)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox",{name:p});await t(e).toBeInTheDocument()}},W={name:"With AutoComplete Name And Placeholder (A2, B1)",args:{...r,autoComplete:"given-name",name:"test_name",placeholder:"placeholdertekst"},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).toHaveAttribute("autocomplete","given-name"),await t(e).toHaveAttribute("name","test_name"),await t(e).toHaveAttribute("placeholder","placeholdertekst")}},M={name:"With Placeholder Empty (A2)",args:{...r,placeholder:""},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).not.toHaveAttribute("placeholder")}},I={name:"With ReadOnly (B6)",args:{...r,value:c,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await t(e).toHaveAttribute("readonly"),await t(n.queryByRole("button")).not.toBeInTheDocument()}},F={name:"With DateFormat (A8)",args:{...r,value:c,dateFormat:"yyyy/MM/dd"},argTypes:{dateFormat:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await m(()=>t(e).toHaveValue("2024/02/01"));const s=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(s);const l=n.getByText("5");await i.click(l),await t(e).toHaveValue("2024/02/05")}},Pa=a=>(a.initialPickerDate=new Date(a.initialPickerDate),b.jsx(G,{...a,initialPickerDate:a.initialPickerDate})),P={render:Pa,name:"With InitialPickerDate (Kalender B2)",args:{...r,initialPickerDate:new Date("2024-01-31")},argTypes:{initialPickerDate:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e);const s=n.getByText("31");await t(s).toHaveAttribute("aria-current","true")}},L={name:"Generously With Format From User (A3)",args:{...r,value:c},argTypes:{},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");e.focus();const s=g.setup();await i.change(e,{target:{value:"0103"}}),await s.tab(),await m(()=>t(e).toHaveValue("01.03.2024")),e.focus(),await i.change(e,{target:{value:"0104"}}),await s.tab(),await m(()=>t(e).toHaveValue("01.04.2024"))}},La=a=>{const[n,e]=Ea.useState("Tester events");return b.jsx(G,{...a,label:n,onFocus:s=>{e("Form-element har fått fokus"),a.onFocus&&a.onFocus(s)},onBlur:s=>{e("Form-element har blitt blurret"),a.onBlur&&a.onBlur(s)},onChange:s=>{e("Form-element har blitt klikket på"),a.onChange&&a.onChange(s)}})},O={render:La,name:"With EventHandlers (A6)",args:{...r,onFocus:v(),onBlur:v(),onChange:v()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({args:a,canvasElement:n})=>{const s=o(n).getByRole("textbox");s.focus(),await m(()=>t(a.onFocus).toHaveBeenCalled()),await g.type(s,"01.02.2002"),await m(()=>t(a.onChange).toHaveBeenCalled()),await g.tab(),await m(()=>t(a.onBlur).toHaveBeenCalled())}},q={name:"Click CalendarButton On And Off (A1, A5, B5)",args:{...r,value:c,onBlur:v(),onChange:v(),onFocus:v()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button");await i.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await i.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await i.click(e)}},N={name:"Click CalendarDateButton (Kalender A2, A6)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await g.click(e);const s=n.getByText("5");await g.click(s),await t(e).toHaveAttribute("aria-expanded","false");const l=n.getByRole("textbox");await t(l).toHaveValue("05.02.2024")}},_={name:"Click Outside Calendar (Kalender A7)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await t(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await t(s).toBeInTheDocument(),await i.click(n.getByLabelText(p)),await t(s).not.toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false")}},V={name:"Open Calender Escape ",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await t(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await t(s).toBeInTheDocument(),await g.keyboard("[Escape]"),await t(s).not.toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false")}},Oa=a=>b.jsxs(b.Fragment,{children:[b.jsx(G,{...a}),b.jsx(Ia,{label:"Organisasjonsnummer"})]}),j={render:Oa,name:"Open Calendar Moves Over (Kalender A1 delvis)",args:{...r,value:c},parameters:{HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button");await i.click(e)}},$={name:"With ShadowDom",args:{...r,value:c},argTypes:{ref:{table:{disable:!1}}},decorators:[Wa],parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0},customElementName:"calendar-customelement"},play:async({canvasElement:a})=>{var y;const n=a.querySelector("calendar-customelement"),e=o((y=n==null?void 0:n.shadowRoot)==null?void 0:y.firstElementChild),s=e.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(s),await t(s).toHaveAttribute("aria-expanded","true");const l=e.getByRole("table");await t(l).toBeInTheDocument(),await i.click(e.getByLabelText(p)),await t(l).not.toBeInTheDocument(),await t(s).toHaveAttribute("aria-expanded","false")}},z={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},K={name:"Hide Calendar On Window Resize (Kalender A4)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button");await i.click(e);const s=n.getByRole("table");await t(s).toBeInTheDocument(),window.innerWidth=window.innerWidth+100,await i.resize(window),await t(s).toBeInTheDocument(),window.innerHeight=window.innerHeight-100,await i.resize(window),await t(s).toBeInTheDocument(),window.innerWidth=window.innerWidth-100,await i.resize(window),await t(s).not.toBeInTheDocument()}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const label = canvas.getByText(defaultLabelText);
    const dateContainer = canvasElement.querySelector(\`\${wrapper} > div > div\`);
    const errorMessageContainer = canvasElement.querySelector('[id^=datepickerErrorId]>div');
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(dateContainer).toHaveClass('dummyClassnameFormContainer');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ie;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
    const errorMessageContainer = canvasElement.querySelector('[id^=datepickerErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...(ie=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,ve,ge;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var ye,he,we;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(he=C.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var xe,Be,fe;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:fe.source}}};var Te,Ae,Ce;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var He,ke,De;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Se,Ee,Re;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var We,Me,Ie;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var Fe,Pe,Le;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Pe=R.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Oe,qe,Ne;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ne=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var _e,Ve,je;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var $e,ze,Ke;I.parameters={...I.parameters,docs:{...($e=I.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Ue,Ge,Je;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Je=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Xe,Ye;P.parameters={...P.parameters,docs:{...(Qe=P.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: DatesTemplate,
  name: 'With InitialPickerDate (Kalender B2)',
  args: {
    ...defaultArgs,
    initialPickerDate: new Date('2024-01-31')
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
} satisfies Story`,...(Ye=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;L.parameters={...L.parameters,docs:{...(Ze=L.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(aa=(ea=L.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,sa;O.parameters={...O.parameters,docs:{...(ta=O.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
    textbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(textbox, '01.02.2002');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  }
} satisfies Story`,...(sa=(na=O.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ra,oa,ia;q.parameters={...q.parameters,docs:{...(ra=q.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(oa=q.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var la,ca,da;N.parameters={...N.parameters,docs:{...(la=N.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
} satisfies Story`,...(da=(ca=N.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,ma,pa;_.parameters={..._.parameters,docs:{...(ua=_.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
} satisfies Story`,...(pa=(ma=_.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var ba,va,ga;V.parameters={...V.parameters,docs:{...(ba=V.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
} satisfies Story`,...(ga=(va=V.parameters)==null?void 0:va.docs)==null?void 0:ga.source}}};var ya,ha,wa;j.parameters={...j.parameters,docs:{...(ya=j.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
} satisfies Story`,...(wa=(ha=j.parameters)==null?void 0:ha.docs)==null?void 0:wa.source}}};var xa,Ba,fa;$.parameters={...$.parameters,docs:{...(xa=$.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
    const shadowCanvas = within(customElement?.shadowRoot?.firstElementChild as HTMLElement);
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
} satisfies Story`,...(fa=(Ba=$.parameters)==null?void 0:Ba.docs)==null?void 0:fa.source}}};var Ta,Aa,Ca;z.parameters={...z.parameters,docs:{...(Ta=z.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ca=(Aa=z.parameters)==null?void 0:Aa.docs)==null?void 0:Ca.source}}};var Ha,ka,Da;K.parameters={...K.parameters,docs:{...(Ha=K.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
} satisfies Story`,...(Da=(ka=K.parameters)==null?void 0:ka.docs)==null?void 0:Da.source}}};const it=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithRequired","WithRequiredAndMark","WithoutErrorMessage","WithErrorMessage","WithDescription","WithHelpText","WithHideLabel","WithAutoCompleteNameAndPlaceholder","WithPlaceholderEmpty","WithReadOnly","WithDateFormat","WithInitialPickerDate","GenerouslyWithFormatFromUser","WithEventHandlers","ClickCalendarButton","ClickCalendarDateButton","ClickOutsideCalendar","OpenCalendarEscape","OpenCalendarMovesOver","WithShadowDom","WithHelpToggleEvent","HideCalendarOnResizeWidth"];export{q as ClickCalendarButton,N as ClickCalendarDateButton,_ as ClickOutsideCalendar,B as Defaults,L as GenerouslyWithFormatFromUser,K as HideCalendarOnResizeWidth,V as OpenCalendarEscape,j as OpenCalendarMovesOver,w as WithAttributes,W as WithAutoCompleteNameAndPlaceholder,x as WithCustomClassNames,F as WithDateFormat,S as WithDescription,T as WithDisabled,D as WithErrorMessage,O as WithEventHandlers,E as WithHelpText,z as WithHelpToggleEvent,R as WithHideLabel,P as WithInitialPickerDate,M as WithPlaceholderEmpty,I as WithReadOnly,h as WithRef,C as WithRequired,H as WithRequiredAndMark,$ as WithShadowDom,A as WithValue,f as WithVariantLarge,k as WithoutErrorMessage,it as __namedExportsOrder,ot as default};
//# sourceMappingURL=DatePicker.test.stories-CWCDOxXT.js.map
