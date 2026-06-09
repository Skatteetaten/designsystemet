import{d as m,j as c,r as se}from"./iframe-DyzX2HZk.js";import{D as h,g as oe}from"./index-BsMkEDp2.js";import{A as ie}from"./index-BVZq6FY6.js";import{w as te,l as Z}from"./storybook.testing.utils-BgHZnMzD.js";import{w as le}from"./webcomponent-decorator-Bol-bNci.js";import{S as ne}from"./icon.systems-CftjSuGj.js";const{expect:t,fireEvent:l,fn:b,userEvent:u,waitFor:d,within:o}=__STORYBOOK_MODULE_TEST__,re=(a,n)=>async({canvasElement:e})=>{const i=o(e).getByRole("textbox");await t(i).toBeInTheDocument(),await d(()=>t(i).toHaveAttribute(a,n))},ce=new Date("2024-01-15"),de={component:h,title:"Tester/DatePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},value:{table:{disable:!0},control:"date"},dateFormat:{table:{disable:!0}},description:{table:{disable:!0}},label:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(ne),mapping:ne},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},initialPickerDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},autoComplete:{table:{disable:!0}},disabled:{table:{disable:!0}},name:{table:{disable:!0}},placeholder:{table:{disable:!0}},required:{table:{disable:!0}},readOnly:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onCalendarToggle:{table:{disable:!0}},onSelectDate:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{mockDate:ce,imageSnapshot:{disableSnapshot:!1}}},p=new Date(2024,1,1),Q="Fødselsdato er obligatorisk",g="Fødselsdato",r={label:g},w={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:re("name","dummyNameForwardedFromRef")},x={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},autoComplete:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getAllByRole("generic")[1];await t(e).toHaveAttribute("id","htmlid"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("autocomplete","off")}},B={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",dateContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:Q},argTypes:{classNames:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=a.querySelector(`${te} > div`),s=n.getByText(g),i=a.querySelector(`${te} > div > div`),v=a.querySelector("[id^=datepickerErrorId]>div");await t(e).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(i).toHaveClass("dummyClassnameFormContainer"),await t(v).toHaveClass("dummyClassname")}},f={name:"Defaults Variant Medium (A1, A2, B2, B5)",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox",{name:g});await t(e).toBeInTheDocument(),await t(e).toBeEnabled(),await t(e).toHaveAttribute("id"),await t(e).toHaveAttribute("placeholder",oe()),await t(e.tagName).toBe("INPUT"),await t(e).not.toBeRequired(),await t(e).not.toHaveAttribute("aria-invalid"),await t(e).not.toHaveAttribute("aria-describedby");const s=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await t(s).toBeInTheDocument(),await t(s).toBeEnabled(),await t(s.tagName).toBe("BUTTON"),await t(s).toHaveAttribute("aria-expanded","false");const i=a.querySelector("[id^=datepickerErrorId]");await t(i).toBeInTheDocument()}},T={name:"Defaults With Open Calendar",args:{...r},argTypes:{label:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!1},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button");await l.click(e)}},C={name:"With AriaDescribedBy",render:a=>{const n="datepicker-alert-description-id";return c.jsxs(c.Fragment,{children:[c.jsx(h,{...a,ariaDescribedBy:n,hasSpacing:!0}),c.jsx(ie,{id:n,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for datepicker"})]})},args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await t(e).toHaveAttribute("aria-describedby");const s=n.getByText("Dette er en varselmelding for datepicker");await t(s).toBeInTheDocument();const v=(e.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await t(v).toContain("datepicker-alert-description-id")}},D={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},S={name:"With Disabled (B7)",args:{...r,disabled:!0,value:p,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await t(e).toBeDisabled(),await t(s).toBeDisabled();const i=n.getByRole("button",{name:m.t("Shared:shared.Help")});await t(i).toBeDisabled()}},A={name:"With Value (B1)",args:{...r,value:p},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:re("value","01.02.2024")},k={name:"With Required (B3)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).toBeRequired(),await t(e).toHaveAttribute("aria-invalid","false")}},E={name:"With Required And Mark (A1)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},H={name:"Without ErrorMessage (A1, A4, A7, B4)",args:{...r},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=a.querySelector("[id^=datepickerErrorId]");await t(s).toBeInTheDocument(),await t(n.queryByText(Q)).not.toBeInTheDocument(),await t(e).not.toHaveAttribute("aria-invalid","true"),await t(e).not.toHaveAttribute("aria-describedby")},parameters:{imageSnapshot:{disableSnapshot:!0}}},W={name:"With ErrorMessage (A1, A4, A7, B4)",args:{...r,errorMessage:Q},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox"),s=n.getByText(Q),i=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(i).toBeInTheDocument(),await t(e).toHaveAttribute("aria-invalid","true"),await t(e).toHaveAttribute("aria-describedby")}},R={name:"With Description (A1)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByText("En liten beskrivelse tekst");await t(e).toBeInTheDocument();const s=n.getByRole("textbox");await t(s).toHaveAttribute("aria-describedby");const i=s.getAttribute("aria-describedby");await t(i).toMatch(/descId-/)}},I={name:"With HelpText (A1)",args:{...r,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{description:g});await t(e).toBeInTheDocument(),await l.click(e);const s=n.getByText("Hjelpetekst");await t(s).toBeInTheDocument()}},F={name:"With HideLabel (A1)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox",{name:g});await t(e).toBeInTheDocument()}},M={name:"With AutoComplete Name And Placeholder (A2, B1)",args:{...r,autoComplete:"given-name",name:"test_name",placeholder:"placeholdertekst"},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).toHaveAttribute("autocomplete","given-name"),await t(e).toHaveAttribute("name","test_name"),await t(e).toHaveAttribute("placeholder","placeholdertekst")}},P={name:"With Placeholder Empty (A2)",args:{...r,placeholder:""},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");await t(e).not.toHaveAttribute("placeholder")}},L={name:"With ReadOnly (B6)",args:{...r,value:p,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await t(e).toHaveAttribute("readonly"),await t(n.queryByRole("button")).not.toBeInTheDocument()}},_={name:"With DateFormat (A8)",args:{...r,value:p,dateFormat:"yyyy/MM/dd"},argTypes:{dateFormat:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("textbox");await d(()=>t(e).toHaveValue("2024/02/01"));const s=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(s);const i=n.getByText("5");await l.click(i),await t(e).toHaveValue("2024/02/05")}},ue=a=>c.jsx(h,{...a,initialPickerDate:new Date(a.initialPickerDate)}),q={render:ue,name:"With InitialPickerDate (Kalender B2)",args:{...r,initialPickerDate:new Date("2024-01-31")},argTypes:{initialPickerDate:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(e);const s=n.getByText("31");await t(s).toHaveAttribute("aria-current","true")}},O={name:"Generously With Format From User (A3)",args:{...r,value:p},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("textbox");e.focus();const s=u.setup();await l.change(e,{target:{value:"0103"}}),await s.tab(),await d(()=>t(e).toHaveValue("01.03.2024")),e.focus(),await l.change(e,{target:{value:"0104"}}),await s.tab(),await d(()=>t(e).toHaveValue("01.04.2024"))}},me=a=>{const[n,e]=se.useState("Tester events");return c.jsx(h,{...a,label:n,onFocus:s=>{e("Form-element har fått fokus"),a.onFocus&&a.onFocus(s)},onBlur:s=>{e("Form-element har blitt blurret"),a.onBlur&&a.onBlur(s)},onChange:s=>{e("Form-element har blitt klikket på"),a.onChange&&a.onChange(s)}})},N={render:me,name:"With EventHandlers (A6)",args:{...r,onFocus:b(),onBlur:b(),onChange:b()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:a,canvasElement:n})=>{const s=o(n).getByRole("textbox");s.focus(),await d(()=>t(a.onFocus).toHaveBeenCalled()),await u.type(s,"01.02.2002"),await d(()=>t(a.onChange).toHaveBeenCalled()),await u.tab(),await d(()=>t(a.onBlur).toHaveBeenCalled())}},j={name:"Click CalendarButton On And Off (A1, A5, B5)",args:{...r,value:p,onBlur:b(),onChange:b(),onFocus:b(),onCalendarToggle:b()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button");await l.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await l.click(e),await t(e).toHaveAttribute("aria-expanded","false"),await l.click(e)}},pe=a=>{const[n,e]=se.useState("Tester onCalendarToggle event");return c.jsxs("div",{children:[c.jsx("pre",{children:n}),c.jsx(h,{...a,onCalendarToggle:s=>{e(s?"Kalender er åpen, onCalendarToggle har blitt trigget":"Kalender er lukket, onCalendarToggle har blitt trigget"),a.onCalendarToggle&&a.onCalendarToggle(s)}})]})},V={name:"With onCalendarToggle Event",render:pe,args:{...r,onCalendarToggle:b()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:a,canvasElement:n})=>{const e=o(n),s=e.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await u.click(s),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!0));const i=e.getByText("5");await u.click(i),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!1)),await u.click(s),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!0)),await u.keyboard("[Escape]"),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!1)),await u.click(s),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!0)),await l.click(e.getByLabelText(g)),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!1)),await u.click(s),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!0)),await u.click(s),await d(()=>t(a.onCalendarToggle).toHaveBeenLastCalledWith(!1))}},z={name:"Click CalendarDateButton (Kalender A2, A6)",args:{...r,value:p},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await u.click(e);const s=n.getByText("5");await u.click(s),await t(e).toHaveAttribute("aria-expanded","false");const i=n.getByRole("textbox");await t(i).toHaveValue("05.02.2024")}},K={name:"Click Outside Calendar (Kalender A7)",args:{...r,value:p},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(e),await t(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await t(s).toBeInTheDocument(),await l.click(n.getByLabelText(g)),await t(s).not.toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false")}},U={name:"Open Calender Escape ",args:{...r,value:p},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(e),await t(e).toHaveAttribute("aria-expanded","true");const s=n.getByRole("table");await t(s).toBeInTheDocument(),await u.keyboard("[Escape]"),await t(s).not.toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false")}},G={name:"With ShadowDom",args:{...r,value:p},argTypes:{ref:{table:{disable:!1}}},decorators:[le],parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"calendar-customelement"},play:async({canvasElement:a})=>{const n=a.querySelector("calendar-customelement"),e=o(n?.shadowRoot?.firstElementChild),s=e.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(s),await t(s).toHaveAttribute("aria-expanded","true");const i=e.getByRole("table");await t(i).toBeInTheDocument(),await l.click(e.getByLabelText(g)),await t(i).not.toBeInTheDocument(),await t(s).toHaveAttribute("aria-expanded","false")}},J={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disableSnapshot:!0}}},$={name:"Hide Calendar On Window Resize (Kalender A4)",args:{...r,value:p},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button");await l.click(e);const s=n.getByRole("table");await t(s).toBeInTheDocument(),window.innerWidth=window.innerWidth+100,await l.resize(window),await t(s).toBeInTheDocument(),window.innerHeight=window.innerHeight-100,await l.resize(window),await t(s).toBeInTheDocument(),window.innerWidth=window.innerWidth-100,await l.resize(window),await t(s).not.toBeInTheDocument()}},X={name:"Tab Navigation With All Dates Disabled (Calendar Navigation)",args:{...r,disabledDates:[...Array.from({length:31},(a,n)=>new Date(2024,0,n+1)),...Array.from({length:5},(a,n)=>new Date(2024,1,n+1))],initialPickerDate:new Date("2024-01-15")},argTypes:{disabledDates:{table:{disable:!1}},initialPickerDate:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},mockDate:new Date("2024-01-15")},play:async({canvasElement:a})=>{const n=o(a),e=n.getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(e);const s=n.getByRole("table");await t(s).toBeInTheDocument();const i=n.getByRole("button",{name:/forrige måned/i});await t(i).toBeInTheDocument(),await l.click(i);const v=n.getByText(/januar 2024/i);await t(v).toBeInTheDocument();const ee=n.getAllByRole("button").filter(y=>y.textContent&&/^\d+$/.test(y.textContent.trim())&&y.closest("td"));await t(ee.length).toBeGreaterThan(0);for(const y of ee)await t(y).toBeDisabled();const ae=n.getByRole("button",{name:/neste måned/i});await t(ae).toBeInTheDocument(),ae.focus(),await u.keyboard("[Tab]"),await d(()=>{t(s).not.toBeInTheDocument()}),await t(e).toHaveAttribute("aria-expanded","false"),await d(()=>{t(e).toHaveFocus()})}},be=a=>c.jsxs("div",{className:"flex gapS",children:[c.jsxs("aside",{className:"container-aside",children:[c.jsx("p",{children:"Denne historien er laget for å teste rød ramme i kantlinjen når det er en feilmelding. I tillegg tester vi om kalenderen åpner seg direkte under inputfeltet. For å teste dette, åpne kalenderen og sjekk at den åpner seg under inputfeltet. Rull ned og opp for å se kalenderen forbli i riktig posisjon."}),Array.from({length:8},(n,e)=>c.jsx("p",{children:Z},e))]}),c.jsxs("main",{className:"container-main",children:[c.jsx("p",{children:Z}),c.jsx(h,{...a}),c.jsx("p",{children:Z})]})]}),Y={render:be,name:"Inside Scrollable Container",args:{...r,errorMessage:"Error"},parameters:{chromatic:{disableSnapshot:!1},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getByRole("button",{name:m.t("ds_forms:datepicker.ChooseDate")});await l.click(e)}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    imageSnapshot: {
      disableSnapshot: true
    },
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
} satisfies Story`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Defaults With Open Calendar',
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
    chromatic: {
      disableSnapshot: false
    },
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
  }
} satisfies Story`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'datepicker-alert-description-id';
    return <>
        <DatePicker {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for datepicker'}
        </Alert>
      </>;
  },
  args: {
    ...defaultArgs
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
    await expect(textbox).toHaveAttribute('aria-describedby');
    const alertText = canvas.getByText('Dette er en varselmelding for datepicker');
    await expect(alertText).toBeInTheDocument();
    const describedBy = textbox.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('datepicker-alert-description-id');
  }
} satisfies Story`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (B7)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueDate,
    helpText: 'Hjelpeknappen skal også være disabled'
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
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await expect(textbox).toBeDisabled();
    await expect(calendarButton).toBeDisabled();
    const helpButton = canvas.getByRole('button', {
      name: dsI18n.t('Shared:shared.Help')
    });
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    const ariaCurrentButton = canvas.getByText('31');
    await expect(ariaCurrentButton).toHaveAttribute('aria-current', 'true');
  }
} satisfies Story`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Click CalendarButton On And Off (A1, A5, B5)',
  args: {
    ...defaultArgs,
    value: valueDate,
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
    onCalendarToggle: fn()
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
} satisfies Story`,...j.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'With onCalendarToggle Event',
  render: WithCalendarToggleEventTemplate,
  args: {
    ...defaultArgs,
    onCalendarToggle: fn()
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
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate')
    });
    await userEvent.click(calendarButton);
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(true));
    const dateButton = canvas.getByText('5');
    await userEvent.click(dateButton);
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(false));
    await userEvent.click(calendarButton);
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(true));
    await userEvent.keyboard('[Escape]');
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(false));
    await userEvent.click(calendarButton);
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(true));
    await fireEvent.click(canvas.getByLabelText(defaultLabelText));
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(false));
    await userEvent.click(calendarButton);
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(true));
    await userEvent.click(calendarButton);
    await waitFor(() => expect(args.onCalendarToggle).toHaveBeenLastCalledWith(false));
  }
} satisfies Story`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...U.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...J.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...$.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: TemplateWithScrollableContainer,
  name: 'Inside Scrollable Container',
  args: {
    ...defaultArgs,
    errorMessage: 'Error'
  },
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
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
  }
} satisfies Story`,...Y.parameters?.docs?.source}}};const ge=["WithRef","WithAttributes","WithCustomClassNames","Defaults","DefaultsWithOpenCalendar","WithAriaDescribedBy","WithVariantLarge","WithDisabled","WithValue","WithRequired","WithRequiredAndMark","WithoutErrorMessage","WithErrorMessage","WithDescription","WithHelpText","WithHideLabel","WithAutoCompleteNameAndPlaceholder","WithPlaceholderEmpty","WithReadOnly","WithDateFormat","WithInitialPickerDate","GenerouslyWithFormatFromUser","WithEventHandlers","ClickCalendarButton","WithCalendarToggleEvent","ClickCalendarDateButton","ClickOutsideCalendar","OpenCalendarEscape","WithShadowDom","WithHelpToggleEvent","HideCalendarOnResizeWidth","TabNavigationWithAllDatesDisabled","WithScrollableContainer"],fe=Object.freeze(Object.defineProperty({__proto__:null,ClickCalendarButton:j,ClickCalendarDateButton:z,ClickOutsideCalendar:K,Defaults:f,DefaultsWithOpenCalendar:T,GenerouslyWithFormatFromUser:O,HideCalendarOnResizeWidth:$,OpenCalendarEscape:U,TabNavigationWithAllDatesDisabled:X,WithAriaDescribedBy:C,WithAttributes:x,WithAutoCompleteNameAndPlaceholder:M,WithCalendarToggleEvent:V,WithCustomClassNames:B,WithDateFormat:_,WithDescription:R,WithDisabled:S,WithErrorMessage:W,WithEventHandlers:N,WithHelpText:I,WithHelpToggleEvent:J,WithHideLabel:F,WithInitialPickerDate:q,WithPlaceholderEmpty:P,WithReadOnly:L,WithRef:w,WithRequired:k,WithRequiredAndMark:E,WithScrollableContainer:Y,WithShadowDom:G,WithValue:A,WithVariantLarge:D,WithoutErrorMessage:H,__namedExportsOrder:ge,default:de},Symbol.toStringTag,{value:"Module"}));export{fe as D};
//# sourceMappingURL=DatePicker.test.stories-CHcbMwaR.js.map
