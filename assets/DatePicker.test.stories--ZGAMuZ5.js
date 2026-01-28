import{a as ae,d as u,j as b,r as te}from"./iframe-CBOQuZmX.js";import{D as J,g as ne}from"./index-D76sDZza.js";import{w as X}from"./storybook.testing.utils-BgHZnMzD.js";import{w as se}from"./webcomponent-decorator-Dn6grDpq.js";import{S as Z}from"./icon.systems-DLlbXhEY.js";import{T as re}from"./DatePickerCalendar-DF1H3gtV.js";const{expect:a,fireEvent:i,fn:v,userEvent:m,waitFor:d,within:o}=__STORYBOOK_MODULE_TEST__,ee=(t,n)=>async({canvasElement:e})=>{const l=o(e).getByRole("textbox");await a(l).toBeInTheDocument(),await d(()=>a(l).toHaveAttribute(t,n))},oe=new Date("2024-01-15"),ie={component:J,title:"Tester/DatePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},value:{table:{disable:!0},control:"date"},dateFormat:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(Z),mapping:Z},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},initialPickerDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},autoComplete:{table:{disable:!0,defaultValue:{summary:ae()},type:{summary:"string"}},type:"string",control:"text"},disabled:{table:{disable:!0}},name:{table:{disable:!0}},placeholder:{table:{disable:!0}},required:{table:{disable:!0}},readOnly:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectDate:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{mockDate:oe,imageSnapshot:{disableSnapshot:!1}}},c=new Date(2024,1,1),G="Fødselsdato er obligatorisk",p="Fødselsdato",r={label:p},h={name:"With Ref (FA1)",args:{...r,ref:t=>{t&&(t.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:ee("name","dummyNameForwardedFromRef")},y={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await a(e).toHaveAttribute("id","htmlid"),await a(s).toHaveClass("dummyClassname"),await a(s).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await a(e).toHaveAttribute("autocomplete","off")}},w={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",dateContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:G},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=t.querySelector(`${X} > div`),s=n.getByText(p),l=t.querySelector(`${X} > div > div`),$=t.querySelector("[id^=datepickerErrorId]>div");await a(e).toHaveClass("dummyClassname"),await a(s).toHaveClass("dummyClassname"),await a(l).toHaveClass("dummyClassnameFormContainer"),await a($).toHaveClass("dummyClassname")}},x={name:"Defaults Variant Medium (A1, A2, B2, B5)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox",{name:p});await a(e).toBeInTheDocument(),await a(e).toBeEnabled(),await a(e).toHaveAttribute("id"),await a(e).toHaveAttribute("placeholder",ne()),await a(e.tagName).toBe("INPUT"),await a(e).not.toBeRequired(),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-describedby");const s=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await a(s).toBeInTheDocument(),await a(s).toBeEnabled(),await a(s.tagName).toBe("BUTTON"),await a(s).toHaveAttribute("aria-expanded","false");const l=t.querySelector("[id^=datepickerErrorId]");await a(l).toBeInTheDocument()}},B={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},f={name:"With Disabled (B7)",args:{...r,disabled:!0,value:c},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=n.getByRole("button");await a(e).toBeDisabled(),await a(s).toBeDisabled()}},T={name:"With Value (B1)",args:{...r,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:ee("value","01.02.2024")},A={name:"With Required (B3)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await a(e).toBeRequired(),await a(e).toHaveAttribute("aria-invalid","false")}},D={name:"With Required And Mark (A1)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},C={name:"Without ErrorMessage (A1, A4, A7, B4)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=t.querySelector("[id^=datepickerErrorId]");await a(s).toBeInTheDocument(),await a(n.queryByText(G)).not.toBeInTheDocument(),await a(e).not.toHaveAttribute("aria-invalid","true"),await a(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disableSnapshot:!0}}},k={name:"With ErrorMessage (A1, A4, A7, B4)",args:{...r,errorMessage:G},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox"),s=n.getByText(G),l=n.getAllByRole("generic")[3];await a(s).toBeInTheDocument(),await a(l).toBeInTheDocument(),await a(e).toHaveAttribute("aria-invalid","true"),await a(e).toHaveAttribute("aria-describedby")}},S={name:"With Description (A1)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByText("En liten beskrivelse tekst");await a(e).toBeInTheDocument();const s=n.getByRole("textbox");await a(s).toHaveAttribute("aria-describedby");const l=s.getAttribute("aria-describedby");await a(l).toMatch(/descId-/)}},E={name:"With HelpText (A1)",args:{...r,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{description:p});await a(e).toBeInTheDocument(),await i.click(e);const s=n.getByText("Hjelpetekst");await a(s).toBeInTheDocument()}},H={name:"With HideLabel (A1)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox",{name:p});await a(e).toBeInTheDocument()}},R={name:"With AutoComplete Name And Placeholder (A2, B1)",args:{...r,autoComplete:"given-name",name:"test_name",placeholder:"placeholdertekst"},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await a(e).toHaveAttribute("autocomplete","given-name"),await a(e).toHaveAttribute("name","test_name"),await a(e).toHaveAttribute("placeholder","placeholdertekst")}},W={name:"With Placeholder Empty (A2)",args:{...r,placeholder:""},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await a(e).not.toHaveAttribute("placeholder")}},I={name:"With ReadOnly (B6)",args:{...r,value:c,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox");await a(e).toHaveAttribute("readonly"),await a(n.queryByRole("button")).not.toBeInTheDocument()}},M={name:"With DateFormat (A8)",args:{...r,value:c,dateFormat:"yyyy/MM/dd"},argTypes:{dateFormat:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("textbox");await d(()=>a(e).toHaveValue("2024/02/01"));const s=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(s);const l=n.getByText("5");await i.click(l),await a(e).toHaveValue("2024/02/05")}},le=t=>b.jsx(J,{...t,initialPickerDate:new Date(t.initialPickerDate)}),F={render:le,name:"With InitialPickerDate (Kalender B2)",args:{...r,initialPickerDate:new Date("2024-01-31")},argTypes:{initialPickerDate:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e);const s=n.getByText("31");await a(s).toHaveAttribute("aria-current","true")}},P={name:"Generously With Format From User (A3)",args:{...r,value:c},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");e.focus();const s=m.setup();await i.change(e,{target:{value:"0103"}}),await s.tab(),await d(()=>a(e).toHaveValue("01.03.2024")),e.focus(),await i.change(e,{target:{value:"0104"}}),await s.tab(),await d(()=>a(e).toHaveValue("01.04.2024"))}},ce=t=>{const[n,e]=te.useState("Tester events");return b.jsx(J,{...t,label:n,onFocus:s=>{e("Form-element har fått fokus"),t.onFocus&&t.onFocus(s)},onBlur:s=>{e("Form-element har blitt blurret"),t.onBlur&&t.onBlur(s)},onChange:s=>{e("Form-element har blitt klikket på"),t.onChange&&t.onChange(s)}})},O={render:ce,name:"With EventHandlers (A6)",args:{...r,onFocus:v(),onBlur:v(),onChange:v()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const s=o(n).getByRole("textbox");s.focus(),await d(()=>a(t.onFocus).toHaveBeenCalled()),await m.type(s,"01.02.2002"),await d(()=>a(t.onChange).toHaveBeenCalled()),await m.tab(),await d(()=>a(t.onBlur).toHaveBeenCalled())}},q={name:"Click CalendarButton On And Off (A1, A5, B5)",args:{...r,value:c,onBlur:v(),onChange:v(),onFocus:v()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=o(t).getByRole("button");await i.click(e),await a(e).toHaveAttribute("aria-expanded","true"),await i.click(e),await a(e).toHaveAttribute("aria-expanded","false"),await i.click(e)}},_={name:"Click CalendarDateButton (Kalender A2, A6)",args:{...r,value:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await m.click(e);const s=n.getByText("5");await m.click(s),await a(e).toHaveAttribute("aria-expanded","false");const l=n.getByRole("textbox");await a(l).toHaveValue("05.02.2024")}},N={name:"Click Outside Calendar (Kalender A7)",args:{...r,value:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await a(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await a(s).toBeInTheDocument(),await i.click(n.getByLabelText(p)),await a(s).not.toBeInTheDocument(),await a(e).toHaveAttribute("aria-expanded","false")}},L={name:"Open Calender Escape ",args:{...r,value:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e),await a(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await a(s).toBeInTheDocument(),await m.keyboard("[Escape]"),await a(s).not.toBeInTheDocument(),await a(e).toHaveAttribute("aria-expanded","false")}},de=t=>b.jsxs(b.Fragment,{children:[b.jsx(J,{...t}),b.jsx(re,{label:"Organisasjonsnummer"})]}),V={render:de,name:"Open Calendar Moves Over (Kalender A1 delvis)",args:{...r,value:c,hasSpacing:!0},play:async({canvasElement:t})=>{const e=o(t).getByRole("button");await i.click(e)}},j={name:"With ShadowDom",args:{...r,value:c},argTypes:{ref:{table:{disable:!1}}},decorators:[se],parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"calendar-customelement"},play:async({canvasElement:t})=>{const n=t.querySelector("calendar-customelement"),e=o(n?.shadowRoot?.firstElementChild),s=e.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(s),await a(s).toHaveAttribute("aria-expanded","true");const l=e.getByRole("table");await a(l).toBeInTheDocument(),await i.click(e.getByLabelText(p)),await a(l).not.toBeInTheDocument(),await a(s).toHaveAttribute("aria-expanded","false")}},z={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:t=>{alert(t?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},K={name:"Hide Calendar On Window Resize (Kalender A4)",args:{...r,value:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button");await i.click(e);const s=n.getByRole("table");await a(s).toBeInTheDocument(),window.innerWidth=window.innerWidth+100,await i.resize(window),await a(s).toBeInTheDocument(),window.innerHeight=window.innerHeight-100,await i.resize(window),await a(s).toBeInTheDocument(),window.innerWidth=window.innerWidth-100,await i.resize(window),await a(s).not.toBeInTheDocument()}},U={name:"Tab Navigation With All Dates Disabled (Calendar Navigation)",args:{...r,disabledDates:[...Array.from({length:31},(t,n)=>new Date(2024,0,n+1)),...Array.from({length:5},(t,n)=>new Date(2024,1,n+1))],initialPickerDate:new Date("2024-01-15")},argTypes:{disabledDates:{table:{disable:!1}},initialPickerDate:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},mockDate:new Date("2024-01-15")},play:async({canvasElement:t})=>{const n=o(t),e=n.getByRole("button",{name:u.t("ds_forms:datepicker.ChooseDate")});await i.click(e);const s=n.getByRole("table");await a(s).toBeInTheDocument();const l=n.getByRole("button",{name:/forrige måned/i});await a(l).toBeInTheDocument(),await i.click(l);const $=n.getByText(/januar 2024/i);await a($).toBeInTheDocument();const Y=n.getAllByRole("button").filter(g=>g.textContent&&/^\d+$/.test(g.textContent.trim())&&g.closest("td"));await a(Y.length).toBeGreaterThan(0);for(const g of Y)await a(g).toBeDisabled();const Q=n.getByRole("button",{name:/neste måned/i});await a(Q).toBeInTheDocument(),Q.focus(),await m.keyboard("[Tab]"),await d(()=>{a(s).not.toBeInTheDocument()}),await a(e).toHaveAttribute("aria-expanded","false"),await d(()=>{a(e).toHaveFocus()})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('name', 'dummyNameForwardedFromRef')
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await expect(textbox).toHaveAttribute('autocomplete', 'off');
  }
} satisfies Story`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('value', '01.02.2024')
} satisfies Story`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('aria-describedby');
    const describedbyValue = textbox.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Generously With Format From User (A3)',
  args: {
    ...defaultArgs,
    value: valueDate
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    await userEvent.type(textbox, '01.02.2002');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  }
} satisfies Story`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Click CalendarDateButton (Kalender A2, A6)',
  args: {
    ...defaultArgs,
    value: valueDate
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
} satisfies Story`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Click Outside Calendar (Kalender A7)',
  args: {
    ...defaultArgs,
    value: valueDate
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
} satisfies Story`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Open Calender Escape ',
  args: {
    ...defaultArgs,
    value: valueDate
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
} satisfies Story`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: MovesOverTemplate,
  name: 'Open Calendar Moves Over (Kalender A1 delvis)',
  args: {
    ...defaultArgs,
    value: valueDate,
    hasSpacing: true
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
  }
} satisfies Story`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Hide Calendar On Window Resize (Kalender A4)',
  args: {
    ...defaultArgs,
    value: valueDate
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
} satisfies Story`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...U.parameters?.docs?.source}}};const ue=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithDisabled","WithValue","WithRequired","WithRequiredAndMark","WithoutErrorMessage","WithErrorMessage","WithDescription","WithHelpText","WithHideLabel","WithAutoCompleteNameAndPlaceholder","WithPlaceholderEmpty","WithReadOnly","WithDateFormat","WithInitialPickerDate","GenerouslyWithFormatFromUser","WithEventHandlers","ClickCalendarButton","ClickCalendarDateButton","ClickOutsideCalendar","OpenCalendarEscape","OpenCalendarMovesOver","WithShadowDom","WithHelpToggleEvent","HideCalendarOnResizeWidth","TabNavigationWithAllDatesDisabled"],ye=Object.freeze(Object.defineProperty({__proto__:null,ClickCalendarButton:q,ClickCalendarDateButton:_,ClickOutsideCalendar:N,Defaults:x,GenerouslyWithFormatFromUser:P,HideCalendarOnResizeWidth:K,OpenCalendarEscape:L,OpenCalendarMovesOver:V,TabNavigationWithAllDatesDisabled:U,WithAttributes:y,WithAutoCompleteNameAndPlaceholder:R,WithCustomClassNames:w,WithDateFormat:M,WithDescription:S,WithDisabled:f,WithErrorMessage:k,WithEventHandlers:O,WithHelpText:E,WithHelpToggleEvent:z,WithHideLabel:H,WithInitialPickerDate:F,WithPlaceholderEmpty:W,WithReadOnly:I,WithRef:h,WithRequired:A,WithRequiredAndMark:D,WithShadowDom:j,WithValue:T,WithVariantLarge:B,WithoutErrorMessage:C,__namedExportsOrder:ue,default:ie},Symbol.toStringTag,{value:"Module"}));export{ye as D};
//# sourceMappingURL=DatePicker.test.stories--ZGAMuZ5.js.map
