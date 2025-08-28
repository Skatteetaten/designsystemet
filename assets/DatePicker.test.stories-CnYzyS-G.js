import{j as g}from"./jsx-runtime-BjG_zV1W.js";import{r as La}from"./index-D_ouKaeX.js";import{f as h,w as o,e as a,b as u,a as i,u as p}from"./index-DIxTUSTt.js";import{a as Oa,d as m}from"./index-CGk5cNE3.js";import{D as Q,g as qa}from"./index-BuHbB7kV.js";import{w as d}from"./storybook.testing.utils-CMs160i9.js";import{w as Na}from"./webcomponent-decorator-CC8-LmJl.js";import{S as Z}from"./icon.systems-DzczaoTk.js";import{T as _a}from"./DatePickerCalendar-wzrlqniL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Help-YRS8Catz.js";import"./index-Du3yX_TW.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./LabelWithHelp-BzCMv1X3.js";import"./index-DXWIZOJk.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./client-DJ5fKs0O.js";import"./index-D9u29hOa.js";import"./icon.utils-XW2L0FSl.js";const Pa=(t,n)=>async({canvasElement:e})=>{const l=o(e).getByRole("textbox");await a(l).toBeInTheDocument(),await u(()=>a(l).toHaveAttribute(t,n))},Va=new Date("2024-01-15"),pt={component:Q,title:"Tester/DatePicker/DatePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},value:{table:{disable:!0},control:"date"},dateFormat:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(Z),mapping:Z},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},initialPickerDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},autoComplete:{table:{disable:!0,defaultValue:{summary:Oa()},type:{summary:"string"}},type:"string",control:"text"},disabled:{table:{disable:!0}},name:{table:{disable:!0}},placeholder:{table:{disable:!0}},required:{table:{disable:!0}},readOnly:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectDate:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},parameters:{mockDate:Va}},c=new Date(2024,1,1),J="Fødselsdato er obligatorisk",b="Fødselsdato",r={label:b},w={name:"With Ref (FA1)",args:{...r,ref:t=>{t&&(t.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Pa("name","dummyNameForwardedFromRef")},x={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},autoComplete:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await a(e).toHaveAttribute("id","htmlid"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await a(e).toHaveAttribute("autocomplete","off")}},B={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",dateContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:J},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=t.querySelector(`${d} > div`),s=n.getByText(b),l=t.querySelector(`${d} > div > div`),v=t.querySelector("[id^=datepickerErrorId]>div");await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(l).toHaveClass("dummyClassnameFormContainer"),await a(v).toHaveClass("dummyClassname")}},f={name:"Defaults Variant Medium (A1, A2, B2, B5)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${d} input`,`${d} button`],focus:[`${d} input`,`${d} button`]}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox",{name:b});await a(e).toBeInTheDocument(),await a(e).toBeEnabled(),await a(e).toHaveAttribute("id"),await a(e).toHaveAttribute("placeholder",qa()),await a(e.tagName).toBe("INPUT"),await a(e).not.toBeRequired(),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-describedby");const s=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await a(s).toBeInTheDocument(),await a(s).toBeEnabled(),await a(s.tagName).toBe("BUTTON"),await a(s).toHaveAttribute("aria-expanded","false");const l=t.querySelector("[id^=datepickerErrorId]");await a(l).toBeInTheDocument()}},T={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},A={name:"With Disabled (B7)",args:{...r,disabled:!0,value:c},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=n.getByRole("button");await a(e).toBeDisabled(),await a(s).toBeDisabled()}},D={name:"With Value (B1)",args:{...r,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Pa("value","01.02.2024")},C={name:"With Required (B3)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await a(e).toBeRequired()}},k={name:"With Required And Mark (A1)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},H={name:"Without ErrorMessage (A1, A4, A7, B4)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=t.querySelector("[id^=datepickerErrorId]");await a(s).toBeInTheDocument(),await a(n.queryByText(J)).not.toBeInTheDocument(),await a(e).not.toHaveAttribute("aria-invalid","true"),await a(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},S={name:"With ErrorMessage (A1, A4, A7, B4)",args:{...r,errorMessage:J},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:[`${d} input`,`${d} button`],focus:[`${d} input`,`${d} button`]}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=n.getByText(J),l=n.getAllByRole("generic")[3];await a(s).toBeInTheDocument(),await a(l).toBeInTheDocument(),await a(e).toHaveAttribute("aria-invalid","true"),await a(e).toHaveAttribute("aria-describedby")}},E={name:"With Description (A1)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByText("En liten beskrivelse tekst");await a(e).toBeInTheDocument()}},R={name:"With HelpText (A1)",args:{...r,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{description:b});await a(e).toBeInTheDocument(),await i.click(e);const s=n.getByText("Hjelpetekst");await a(s).toBeInTheDocument()}},W={name:"With HideLabel (A1)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox",{name:b});await a(e).toBeInTheDocument()}},M={name:"With AutoComplete Name And Placeholder (A2, B1)",args:{...r,autoComplete:"given-name",name:"test_name",placeholder:"placeholdertekst"},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await a(e).toHaveAttribute("autocomplete","given-name"),await a(e).toHaveAttribute("name","test_name"),await a(e).toHaveAttribute("placeholder","placeholdertekst")}},I={name:"With Placeholder Empty (A2)",args:{...r,placeholder:""},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await a(e).not.toHaveAttribute("placeholder")}},F={name:"With ReadOnly (B6)",args:{...r,value:c,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox");await a(e).toHaveAttribute("readonly"),await a(n.queryByRole("button")).not.toBeInTheDocument()}},P={name:"With DateFormat (A8)",args:{...r,value:c,dateFormat:"yyyy/MM/dd"},argTypes:{dateFormat:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox");await u(()=>a(e).toHaveValue("2024/02/01"));const s=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await i.click(s);const l=n.getByText("5");await i.click(l),await a(e).toHaveValue("2024/02/05")}},ja=t=>g.jsx(Q,{...t,initialPickerDate:new Date(t.initialPickerDate)}),L={render:ja,name:"With InitialPickerDate (Kalender B2)",args:{...r,initialPickerDate:new Date("2024-01-31")},argTypes:{initialPickerDate:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await i.click(e);const s=n.getByText("31");await a(s).toHaveAttribute("aria-current","true")}},O={name:"Generously With Format From User (A3)",args:{...r,value:c},argTypes:{},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");e.focus();const s=p.setup();await i.change(e,{target:{value:"0103"}}),await s.tab(),await u(()=>a(e).toHaveValue("01.03.2024")),e.focus(),await i.change(e,{target:{value:"0104"}}),await s.tab(),await u(()=>a(e).toHaveValue("01.04.2024"))}},$a=t=>{const[n,e]=La.useState("Tester events");return g.jsx(Q,{...t,label:n,onFocus:s=>{e("Form-element har fått fokus"),t.onFocus&&t.onFocus(s)},onBlur:s=>{e("Form-element har blitt blurret"),t.onBlur&&t.onBlur(s)},onChange:s=>{e("Form-element har blitt klikket på"),t.onChange&&t.onChange(s)}})},q={render:$a,name:"With EventHandlers (A6)",args:{...r,onFocus:h(),onBlur:h(),onChange:h()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({args:t,canvasElement:n})=>{const s=o(n).getByRole("textbox");s.focus(),await u(()=>a(t.onFocus).toHaveBeenCalled()),await p.type(s,"01.02.2002"),await u(()=>a(t.onChange).toHaveBeenCalled()),await p.tab(),await u(()=>a(t.onBlur).toHaveBeenCalled())}},N={name:"Click CalendarButton On And Off (A1, A5, B5)",args:{...r,value:c,onBlur:h(),onChange:h(),onFocus:h()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("button");await i.click(e),await a(e).toHaveAttribute("aria-expanded","true"),await i.click(e),await a(e).toHaveAttribute("aria-expanded","false"),await i.click(e)}},_={name:"Click CalendarDateButton (Kalender A2, A6)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await p.click(e);const s=n.getByText("5");await p.click(s),await a(e).toHaveAttribute("aria-expanded","false");const l=n.getByRole("textbox");await a(l).toHaveValue("05.02.2024")}},V={name:"Click Outside Calendar (Kalender A7)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await a(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await a(s).toBeInTheDocument(),await i.click(n.getByLabelText(b)),await a(s).not.toBeInTheDocument(),await a(e).toHaveAttribute("aria-expanded","false")}},j={name:"Open Calender Escape ",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await a(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await a(s).toBeInTheDocument(),await p.keyboard("[Escape]"),await a(s).not.toBeInTheDocument(),await a(e).toHaveAttribute("aria-expanded","false")}},za=t=>g.jsxs(g.Fragment,{children:[g.jsx(Q,{...t}),g.jsx(_a,{label:"Organisasjonsnummer"})]}),$={render:za,name:"Open Calendar Moves Over (Kalender A1 delvis)",args:{...r,value:c,hasSpacing:!0},parameters:{HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("button");await i.click(e)}},z={name:"With ShadowDom",args:{...r,value:c},argTypes:{ref:{table:{disable:!1}}},decorators:[Na],parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0},customElementName:"calendar-customelement"},play:async({canvasElement:t})=>{var v;const n=t.querySelector("calendar-customelement"),e=o((v=n==null?void 0:n.shadowRoot)==null?void 0:v.firstElementChild),s=e.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await i.click(s),await a(s).toHaveAttribute("aria-expanded","true");const l=e.getByRole("table");await a(l).toBeInTheDocument(),await i.click(e.getByLabelText(b)),await a(l).not.toBeInTheDocument(),await a(s).toHaveAttribute("aria-expanded","false")}},K={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:t=>{alert(t?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},U={name:"Hide Calendar On Window Resize (Kalender A4)",args:{...r,value:c},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button");await i.click(e);const s=n.getByRole("table");await a(s).toBeInTheDocument(),window.innerWidth=window.innerWidth+100,await i.resize(window),await a(s).toBeInTheDocument(),window.innerHeight=window.innerHeight-100,await i.resize(window),await a(s).toBeInTheDocument(),window.innerWidth=window.innerWidth-100,await i.resize(window),await a(s).not.toBeInTheDocument()}},G={name:"Tab Navigation With All Dates Disabled (Calendar Navigation)",args:{...r,disabledDates:[...Array.from({length:31},(t,n)=>new Date(2024,0,n+1)),...Array.from({length:5},(t,n)=>new Date(2024,1,n+1))],initialPickerDate:new Date("2024-01-15")},argTypes:{disabledDates:{table:{disable:!1}},initialPickerDate:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0},mockDate:new Date("2024-01-15")},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await i.click(e);const s=n.getByRole("table");await a(s).toBeInTheDocument();const l=n.getByRole("button",{name:/forrige måned/i});await a(l).toBeInTheDocument(),await i.click(l);const v=n.getByText(/januar 2024/i);await a(v).toBeInTheDocument();const X=n.getAllByRole("button").filter(y=>y.textContent&&/^\d+$/.test(y.textContent.trim())&&y.closest("td"));await a(X.length).toBeGreaterThan(0);for(const y of X)await a(y).toBeDisabled();const Y=n.getByRole("button",{name:/neste måned/i});await a(Y).toBeInTheDocument(),Y.focus(),await p.keyboard("[Tab]"),await u(()=>{a(s).not.toBeInTheDocument()}),await a(e).toHaveAttribute("aria-expanded","false"),await u(()=>{a(e).toHaveFocus()})}};var ee,ae,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,le;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute('placeholder', getDatePickerPlaceholderDefault());
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
} satisfies Story`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ve,ge,he;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,we,xe;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(we=D.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Be,fe,Te;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Ae,De,Ce;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ce.source}}};var ke,He,Se;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Se.source}}};var Ee,Re,We;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};var Me,Ie,Fe;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Pe,Le,Oe;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var qe,Ne,_e;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var Ve,je,$e;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...($e=(je=M.parameters)==null?void 0:je.docs)==null?void 0:$e.source}}};var ze,Ke,Ue;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(Ke=I.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Ge,Je,Qe;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(Qe=(Je=F.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;P.parameters={...P.parameters,docs:{...(Xe=P.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ze=(Ye=P.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ta;L.parameters={...L.parameters,docs:{...(ea=L.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(aa=L.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,ra;O.parameters={...O.parameters,docs:{...(na=O.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
} satisfies Story`,...(ra=(sa=O.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var oa,ia,la;q.parameters={...q.parameters,docs:{...(oa=q.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
} satisfies Story`,...(la=(ia=q.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,da,ua;N.parameters={...N.parameters,docs:{...(ca=N.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
} satisfies Story`,...(ua=(da=N.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,pa,ba;_.parameters={..._.parameters,docs:{...(ma=_.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
} satisfies Story`,...(ba=(pa=_.parameters)==null?void 0:pa.docs)==null?void 0:ba.source}}};var va,ga,ha;V.parameters={...V.parameters,docs:{...(va=V.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(ga=V.parameters)==null?void 0:ga.docs)==null?void 0:ha.source}}};var ya,wa,xa;j.parameters={...j.parameters,docs:{...(ya=j.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
} satisfies Story`,...(xa=(wa=j.parameters)==null?void 0:wa.docs)==null?void 0:xa.source}}};var Ba,fa,Ta;$.parameters={...$.parameters,docs:{...(Ba=$.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  render: MovesOverTemplate,
  name: 'Open Calendar Moves Over (Kalender A1 delvis)',
  args: {
    ...defaultArgs,
    value: valueDate,
    hasSpacing: true
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
} satisfies Story`,...(Ta=(fa=$.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var Aa,Da,Ca;z.parameters={...z.parameters,docs:{...(Aa=z.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ca=(Da=z.parameters)==null?void 0:Da.docs)==null?void 0:Ca.source}}};var ka,Ha,Sa;K.parameters={...K.parameters,docs:{...(ka=K.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
} satisfies Story`,...(Sa=(Ha=K.parameters)==null?void 0:Ha.docs)==null?void 0:Sa.source}}};var Ea,Ra,Wa;U.parameters={...U.parameters,docs:{...(Ea=U.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
} satisfies Story`,...(Wa=(Ra=U.parameters)==null?void 0:Ra.docs)==null?void 0:Wa.source}}};var Ma,Ia,Fa;G.parameters={...G.parameters,docs:{...(Ma=G.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  name: 'Tab Navigation With All Dates Disabled (Calendar Navigation)',
  args: {
    ...defaultArgs,
    disabledDates: [
    // Disable all dates in January 2024
    ...Array.from({
      length: 31
    }, (_, i) => new Date(2024, 0, i + 1)),
    // Disable first few days of February 2024 (visible in January view)
    ...Array.from({
      length: 5
    }, (_, i) => new Date(2024, 1, i + 1))],
    initialPickerDate: new Date('2024-01-15')
  },
  argTypes: {
    disabledDates: {
      table: {
        disable: false
      }
    },
    initialPickerDate: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    },
    mockDate: new Date('2024-01-15')
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });

    // Open the calendar
    await fireEvent.click(calendarButton);
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();

    // Calendar will automatically show next available month (February 2024)
    // We need to navigate back to January 2024 where all dates are disabled
    const prevMonthButton = canvas.getByRole('button', {
      name: /forrige måned/i
    });
    await expect(prevMonthButton).toBeInTheDocument();

    // Click previous month to go back to January 2024
    await fireEvent.click(prevMonthButton);

    // Verify we're now in January 2024 by checking the caption
    const caption = canvas.getByText(/januar 2024/i);
    await expect(caption).toBeInTheDocument();

    // Verify that all date buttons in the current month view are disabled
    // This includes January dates and visible February dates
    const dateButtons = canvas.getAllByRole('button').filter(button => button.textContent && /^\\d+$/.test(button.textContent.trim()) && button.closest('td') // Only actual date cells, not navigation
    );

    // Check that we have date buttons and they are all disabled
    await expect(dateButtons.length).toBeGreaterThan(0);
    for (const dateButton of dateButtons) {
      await expect(dateButton).toBeDisabled();
    }

    // Find the next month navigation button
    const nextMonthButton = canvas.getByRole('button', {
      name: /neste måned/i
    });
    await expect(nextMonthButton).toBeInTheDocument();

    // Focus the next month button and simulate tab key
    nextMonthButton.focus();
    await userEvent.keyboard('[Tab]');

    // Calendar should close when tabbing from next month button
    // because all dates in the current view are disabled
    await waitFor(() => {
      expect(calendarTable).not.toBeInTheDocument();
    });
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');

    // Focus should return to the calendar button that opened the calendar
    await waitFor(() => {
      expect(calendarButton).toHaveFocus();
    });
  }
} satisfies Story`,...(Fa=(Ia=G.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};const bt=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithRequired","WithRequiredAndMark","WithoutErrorMessage","WithErrorMessage","WithDescription","WithHelpText","WithHideLabel","WithAutoCompleteNameAndPlaceholder","WithPlaceholderEmpty","WithReadOnly","WithDateFormat","WithInitialPickerDate","GenerouslyWithFormatFromUser","WithEventHandlers","ClickCalendarButton","ClickCalendarDateButton","ClickOutsideCalendar","OpenCalendarEscape","OpenCalendarMovesOver","WithShadowDom","WithHelpToggleEvent","HideCalendarOnResizeWidth","TabNavigationWithAllDatesDisabled"];export{N as ClickCalendarButton,_ as ClickCalendarDateButton,V as ClickOutsideCalendar,f as Defaults,O as GenerouslyWithFormatFromUser,U as HideCalendarOnResizeWidth,j as OpenCalendarEscape,$ as OpenCalendarMovesOver,G as TabNavigationWithAllDatesDisabled,x as WithAttributes,M as WithAutoCompleteNameAndPlaceholder,B as WithCustomClassNames,P as WithDateFormat,E as WithDescription,A as WithDisabled,S as WithErrorMessage,q as WithEventHandlers,R as WithHelpText,K as WithHelpToggleEvent,W as WithHideLabel,L as WithInitialPickerDate,I as WithPlaceholderEmpty,F as WithReadOnly,w as WithRef,C as WithRequired,k as WithRequiredAndMark,z as WithShadowDom,D as WithValue,T as WithVariantLarge,H as WithoutErrorMessage,bt as __namedExportsOrder,pt as default};
//# sourceMappingURL=DatePicker.test.stories-CnYzyS-G.js.map
