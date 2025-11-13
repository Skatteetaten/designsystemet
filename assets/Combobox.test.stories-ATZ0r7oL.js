import{d as m}from"./iframe-CdXtTKZQ.js";import{d as oa}from"./index-CLKUz3Po.js";import{d as s}from"./combobox.test.utils-DQnx9EeR.js";import"./DatePickerCalendar-ByRci1Oe.js";import"./index-CDWtp_lT.js";import"./index-D0xxaDHU.js";import"./index-CVW4skVE.js";import"./LabelWithHelp-Bcy4lovc.js";import"./Help-BJCAuNeo.js";import"./Combobox.module-DGtBY5ID.js";import"./ComboboxButton-xo5xtxE5.js";import"./ComboboxSelectedOptions-BdSatC4Q.js";import"./index-C6J3KzFu.js";import"./index-BEPTjI1-.js";import"./index-DUrzBgqO.js";import"./index-D-15xU56.js";const{expect:e,fn:b,userEvent:r,waitFor:p,within:i}=__STORYBOOK_MODULE_TEST__,Ba={component:oa,title:"Tester/Combobox",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},u={name:"With Ref (FA1)",args:{...s,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...s,id:"combobox-id",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),a=n.getAllByRole("generic")[1];await e(a).toHaveClass("dummyClassname"),await e(a).toHaveAttribute("lang","nb");const o=n.getByRole("combobox");await e(o).toHaveAttribute("id","combobox-id"),await e(o).toHaveAttribute("data-testid","123ID")}},v={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{options:"dummyClassname",errorMessage:"dummyClassname",label:"dummyClassname",helpText:"dummyClassname",description:"dummyClassname"},description:"Beskrivelse",helpText:"Hjelp!",errorMessage:"Error melding"},argTypes:{classNames:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=n.getAllByRole("button")[0];await r.click(o);const c=t.querySelector('div[class*="optionsListContainer"]'),l=t.querySelector("[id^=comboboxErrorId]>div"),aa=n.getByText(s.label),ta=t.querySelector('div[class*="helpBox"]'),na=n.getByText("Beskrivelse");await e(c).toHaveClass("dummyClassname"),await e(l).toHaveClass("dummyClassname"),await e(aa).toHaveClass("dummyClassname"),await e(ta).toHaveClass("dummyClassname"),await e(na).toHaveClass("dummyClassname")}},g={name:"Defaults (A1, B3, B6)",args:{...s},argTypes:{label:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByLabelText(s.label);await e(a).toBeInTheDocument(),await e(a).not.toBeRequired(),await e(a).not.toBeDisabled(),await e(a).toHaveAttribute("type","text"),await e(a).toHaveAttribute("role","combobox"),await e(a).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-autocomplete","list"),await e(a).toHaveAttribute("autoComplete","off"),await e(a).not.toHaveAttribute("aria-invalid"),await e(a).not.toHaveAttribute("aria-busy"),await e(a).toHaveAttribute("placeholder",m.t("ds_forms:combobox.TypeOrSelect"));const o=t.querySelector('div[class*="chevronButton"]');await e(o).toBeInTheDocument(),await e(o).toHaveAttribute("aria-hidden","true");const c=t.querySelector("[id^=comboboxErrorId]");await e(c).toBeInTheDocument();const l=t.querySelector('div[class*="srOnly"]');await e(l).toHaveAttribute("aria-live","polite"),await e(l).toHaveAttribute("aria-atomic","true"),await e(l).toHaveTextContent("")}},y={name:"With Long Option (A1)",args:{className:"width200",label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await r.click(a)}},h={name:"With Long Value (A1)",args:{className:"width200",label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=n.getAllByRole("option");await r.click(o[0])}},x={name:"IsOpen (A1, B1)",args:{...s,id:"test-combobox"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a),await e(a).toHaveAttribute("aria-expanded","true");const o=n.getByRole("listbox");await e(o).toBeInTheDocument(),await e(o).toHaveAttribute("id","test-combobox-list"),await e(o).toHaveAttribute("aria-multiselectable","false");const c=n.getAllByRole("option");await e(c[0]).toHaveAttribute("id","test-combobox-option-0"),await e(c[0]).toHaveAttribute("aria-selected","false");const l=t.querySelector('div[class*="srOnly"]');await e(l).toHaveTextContent(m.t("ds_forms:combobox.OptionsAvailable",{count:3}))}},w={name:"With ErrorMessage (A2)",args:{...s,errorMessage:"Error melding"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),a=t.querySelector("[id^=comboboxErrorId]");await e(a).toHaveAttribute("id");const o=n.getByRole("combobox",{description:"Error melding"});await e(o).toHaveAttribute("aria-invalid","true")}},B={name:"No Results (A6)",args:{...s},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.type(a,"xyz"),await e(a).toHaveValue("xyz");const o=n.getByRole("listbox");await e(o).toBeInTheDocument(),await e(o).toHaveTextContent(m.t("ds_forms:combobox.NoResults",{searchTerm:"xyz"}));const c=t.querySelector('div[class*="srOnly"]');await e(c).toHaveTextContent(m.t("ds_forms:combobox.NoResults",{searchTerm:"xyz"}))}},A={name:"Variant Large (A7)",args:{...s,variant:"large"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await r.click(a)}},f={name:"With Value And Clear Value (A8, B2)",args:{...s},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=n.getByRole("listbox");await e(o).toBeInTheDocument();const c=n.getAllByRole("option");await r.click(c[1]),await e(a).toHaveValue("Sverige"),await e(o).not.toBeInTheDocument();const l=n.getByRole("button",{name:m.t("ds_forms:combobox.ResetSuggestion")});await e(l).toBeInTheDocument(),await e(l).toHaveAttribute("type","button"),await r.click(l),await e(a).toHaveValue("")}},S={name:"Single Option Announcement (B1)",args:{...s,options:[{label:"Single Option",value:"1"}]},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await r.click(a);const o=t.querySelector('div[class*="srOnly"]');await e(o).toHaveTextContent(m.t("ds_forms:combobox.OneOptionAvailable"))}},E={name:"With Required (B4)",args:{...s,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toBeRequired()}},H={name:"With HideLabel (B5)",args:{...s,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByText(s.label);await e(a).toBeInTheDocument()}},C={name:"With Placeholder (B6)",args:{...s,placeholder:"Søk etter land..."},argTypes:{placeholder:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("placeholder","Søk etter land...")}},T={name:"With AccessKey (B7)",args:{...s,accessKey:"c"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("accesskey","c")}},R={name:"With Spacing",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},W={name:"With Disabled",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toBeDisabled(),await e(a).toHaveStyle("cursor: not-allowed")}},I={name:"With Loading (A13)",args:{...s,isLoading:!0},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=await n.findByText(m.t("ds_progress:spinner.LoadingLabel"));await e(o).toBeInTheDocument(),await e(n.queryByRole("listbox")).not.toBeInTheDocument()}},L={name:"With SpinnerLabel",args:{...s,isLoading:!0,spinnerLabel:"Laster alternativer..."},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=await n.findByText("Laster alternativer...");await e(o).toBeInTheDocument(),await e(a).toBeEnabled(),await r.type(a,"test"),await e(a).toHaveValue("test")}},k={name:"With Name",args:{...s,name:"category"},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("name","category")}},D={name:"With EventHandlers (A3)",args:{...s,onFocus:b(),onBlur:b(),onInputChange:b()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const o=i(n).getByRole("combobox");o.focus(),await p(()=>e(t.onFocus).toHaveBeenCalled()),await r.tab(),await p(()=>e(t.onBlur).toHaveBeenCalled()),await r.type(o,"X"),await e(o).toHaveValue("X"),await p(()=>e(t.onInputChange).toHaveBeenCalled())}},O={name:"OnSelectionChange (A3)",args:{...s,onSelectionChange:b()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const a=i(n),o=a.getByRole("combobox");await r.click(o);const c=a.getAllByRole("option");await r.click(c[0]),await e(o).toHaveValue("Norge"),await p(()=>e(t.onSelectionChange).toHaveBeenCalled())}},q={name:"OnHelpToggle",args:{...s,onHelpToggle:b(),helpText:"Dette er hjelpeteksten for comboboxen."},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const o=i(n).getByRole("button");await r.click(o),await p(()=>e(t.onHelpToggle).toHaveBeenCalled())}};var N,P,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
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
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var F,M,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'combobox-id',
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
    }
  },
  parameters: {
    a11y: {
      test: 'off'
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toHaveAttribute('id', 'combobox-id');
    await expect(combobox).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var K,z,j;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      options: 'dummyClassname',
      errorMessage: 'dummyClassname',
      label: 'dummyClassname',
      helpText: 'dummyClassname',
      description: 'dummyClassname'
    },
    description: 'Beskrivelse',
    helpText: 'Hjelp!',
    errorMessage: 'Error melding'
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    const helpButton = canvas.getAllByRole('button')[0];
    await userEvent.click(helpButton);
    const optionsContainer = canvasElement.querySelector('div[class*="optionsListContainer"]');
    const errorMessageContainer = canvasElement.querySelector('[id^=comboboxErrorId]>div');
    const label = canvas.getByText(defaultArgs.label as string);
    const helpTextContainer = canvasElement.querySelector('div[class*="helpBox"]');
    const description = canvas.getByText('Beskrivelse');
    await expect(optionsContainer).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(helpTextContainer).toHaveClass('dummyClassname');
    await expect(description).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(j=(z=v.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var X,U,Y;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Defaults (A1, B3, B6)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByLabelText(defaultArgs.label as string);
    await expect(combobox).toBeInTheDocument();
    await expect(combobox).not.toBeRequired();
    await expect(combobox).not.toBeDisabled();
    await expect(combobox).toHaveAttribute('type', 'text');
    await expect(combobox).toHaveAttribute('role', 'combobox');
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');
    await expect(combobox).toHaveAttribute('aria-autocomplete', 'list');
    await expect(combobox).toHaveAttribute('autoComplete', 'off');
    await expect(combobox).not.toHaveAttribute('aria-invalid');
    await expect(combobox).not.toHaveAttribute('aria-busy');
    await expect(combobox).toHaveAttribute('placeholder', dsI18n.t('ds_forms:combobox.TypeOrSelect'));
    const chevron = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevron).toBeInTheDocument();
    await expect(chevron).toHaveAttribute('aria-hidden', 'true');
    const errorMessageContainer = canvasElement.querySelector('[id^=comboboxErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
    const accessibilityAnnouncer = canvasElement.querySelector('div[class*="srOnly"]');
    await expect(accessibilityAnnouncer).toHaveAttribute('aria-live', 'polite');
    await expect(accessibilityAnnouncer).toHaveAttribute('aria-atomic', 'true');
    await expect(accessibilityAnnouncer).toHaveTextContent('');
  }
} satisfies Story`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,J,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Long Option (A1)',
  args: {
    className: 'width200',
    label: 'Combobox with long option values',
    options: [{
      label: 'Averylongoptionvaluethatexceedsnormallength',
      value: '1'
    }, {
      label: 'Another extremely lengthy option value for testing',
      value: '2'
    }, {
      label: 'Short',
      value: '3'
    }]
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
  }
} satisfies Story`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Long Value (A1)',
  args: {
    className: 'width200',
    label: 'Combobox with long option values',
    options: [{
      label: 'Averylongoptionvaluethatexceedsnormallength',
      value: '1'
    }, {
      label: 'Another extremely lengthy option value for testing',
      value: '2'
    }, {
      label: 'Short',
      value: '3'
    }]
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
  }
} satisfies Story`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'IsOpen (A1, B1)',
  args: {
    ...defaultArgs,
    id: 'test-combobox'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'true');
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
    await expect(listbox).toHaveAttribute('id', 'test-combobox-list');
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'false');
    const options = canvas.getAllByRole('option');
    await expect(options[0]).toHaveAttribute('id', 'test-combobox-option-0');
    await expect(options[0]).toHaveAttribute('aria-selected', 'false');
    const accessibilityAnnouncer = canvasElement.querySelector('div[class*="srOnly"]');
    await expect(accessibilityAnnouncer).toHaveTextContent(dsI18n.t('ds_forms:combobox.OptionsAvailable', {
      count: 3
    }));
  }
} satisfies Story`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,se,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With ErrorMessage (A2)',
  args: {
    ...defaultArgs,
    errorMessage: 'Error melding'
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
    const errorMessageContainer = canvasElement.querySelector('[id^=comboboxErrorId]');
    await expect(errorMessageContainer).toHaveAttribute('id');
    const inputElement = canvas.getByRole('combobox', {
      description: 'Error melding'
    });
    await expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  }
} satisfies Story`,...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,ce,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'No Results (A6)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.type(inputElement, 'xyz');
    await expect(inputElement).toHaveValue('xyz');
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
    await expect(listbox).toHaveTextContent(dsI18n.t('ds_forms:combobox.NoResults', {
      searchTerm: 'xyz'
    }));
    const accessibilityAnnouncer = canvasElement.querySelector('div[class*="srOnly"]');
    await expect(accessibilityAnnouncer).toHaveTextContent(dsI18n.t('ds_forms:combobox.NoResults', {
      searchTerm: 'xyz'
    }));
  }
} satisfies Story`,...(le=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,be,pe;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Variant Large (A7)',
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
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
  }
} satisfies Story`,...(pe=(be=A.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ue,de,ve;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Value And Clear Value (A8, B2)',
  args: {
    ...defaultArgs
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(combobox).toHaveValue('Sverige');
    await expect(listbox).not.toBeInTheDocument();
    const clearButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:combobox.ResetSuggestion')
    });
    await expect(clearButton).toBeInTheDocument();
    await expect(clearButton).toHaveAttribute('type', 'button');
    await userEvent.click(clearButton);
    await expect(combobox).toHaveValue('');
  }
} satisfies Story`,...(ve=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var ge,ye,he;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Single Option Announcement (B1)',
  args: {
    ...defaultArgs,
    options: [{
      label: 'Single Option',
      value: '1'
    }]
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
    const accessibilityAnnouncer = canvasElement.querySelector('div[class*="srOnly"]');
    await expect(accessibilityAnnouncer).toHaveTextContent(dsI18n.t('ds_forms:combobox.OneOptionAvailable'));
  }
} satisfies Story`,...(he=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,we,Be;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toBeRequired();
  }
} satisfies Story`,...(Be=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var Ae,fe,Se;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'With HideLabel (B5)',
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
    const labelElement = canvas.getByText(defaultArgs.label as string);
    await expect(labelElement).toBeInTheDocument();
  }
} satisfies Story`,...(Se=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ee,He,Ce;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'With Placeholder (B6)',
  args: {
    ...defaultArgs,
    placeholder: 'Søk etter land...'
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute('placeholder', 'Søk etter land...');
  }
} satisfies Story`,...(Ce=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};var Te,Re,We;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'With AccessKey (B7)',
  args: {
    ...defaultArgs,
    accessKey: 'c'
  },
  argTypes: {
    accessKey: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute('accesskey', 'c');
  }
} satisfies Story`,...(We=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};var Ie,Le,ke;R.parameters={...R.parameters,docs:{...(Ie=R.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'With Spacing',
  args: {
    ...defaultArgs,
    hasSpacing: true
  },
  argTypes: {
    hasSpacing: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ke=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var De,Oe,qe;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true
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
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toBeDisabled();
    await expect(inputElement).toHaveStyle('cursor: not-allowed');
  }
} satisfies Story`,...(qe=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ne,Pe,Ve;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'With Loading (A13)',
  args: {
    ...defaultArgs,
    isLoading: true
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const spinner = await canvas.findByText(dsI18n.t('ds_progress:spinner.LoadingLabel'));
    await expect(spinner).toBeInTheDocument();
    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
  }
} satisfies Story`,...(Ve=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Fe,Me,_e;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'With SpinnerLabel',
  args: {
    ...defaultArgs,
    isLoading: true,
    spinnerLabel: 'Laster alternativer...'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const spinner = await canvas.findByText('Laster alternativer...');
    await expect(spinner).toBeInTheDocument();

    // Verifiser at input fortsatt er tilgjengelig for skriving
    await expect(inputElement).toBeEnabled();
    await userEvent.type(inputElement, 'test');
    await expect(inputElement).toHaveValue('test');
  }
} satisfies Story`,...(_e=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Ke,ze,je;k.parameters={...k.parameters,docs:{...(Ke=k.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'With Name',
  args: {
    ...defaultArgs,
    name: 'category'
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute('name', 'category');
  }
} satisfies Story`,...(je=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var Xe,Ue,Ye;D.parameters={...D.parameters,docs:{...(Xe=D.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'With EventHandlers (A3)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onInputChange: fn()
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    inputElement.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.type(inputElement, 'X');
    await expect(inputElement).toHaveValue('X');
    await waitFor(() => expect(args.onInputChange).toHaveBeenCalled());
  }
} satisfies Story`,...(Ye=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Ge,Je,Qe;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'OnSelectionChange (A3)',
  args: {
    ...defaultArgs,
    onSelectionChange: fn()
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await expect(inputElement).toHaveValue('Norge');
    await waitFor(() => expect(args.onSelectionChange).toHaveBeenCalled());
  }
} satisfies Story`,...(Qe=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,$e,ea;q.parameters={...q.parameters,docs:{...(Ze=q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'OnHelpToggle',
  args: {
    ...defaultArgs,
    onHelpToggle: fn(),
    helpText: 'Dette er hjelpeteksten for comboboxen.'
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button');
    await userEvent.click(helpButton);
    await waitFor(() => expect(args.onHelpToggle).toHaveBeenCalled());
  }
} satisfies Story`,...(ea=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};const Aa=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithLongOption","WithLongValue","IsOpen","WithErrorMessage","NoResults","VariantLarge","WithValue","SingleOptionAnnouncement","WithRequired","WithHideLabel","WithPlaceholder","WithAccessKey","WithSpacing","WithDisabled","WithLoading","WithSpinnerLabel","WithName","WithEventHandlers","OnSelectionChange","OnHelpToggle"];export{g as Defaults,x as IsOpen,B as NoResults,q as OnHelpToggle,O as OnSelectionChange,S as SingleOptionAnnouncement,A as VariantLarge,T as WithAccessKey,d as WithAttributes,v as WithCustomClassNames,W as WithDisabled,w as WithErrorMessage,D as WithEventHandlers,H as WithHideLabel,I as WithLoading,y as WithLongOption,h as WithLongValue,k as WithName,C as WithPlaceholder,u as WithRef,E as WithRequired,R as WithSpacing,L as WithSpinnerLabel,f as WithValue,Aa as __namedExportsOrder,Ba as default};
//# sourceMappingURL=Combobox.test.stories-ATZ0r7oL.js.map
