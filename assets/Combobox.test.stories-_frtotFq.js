import{d as m}from"./iframe-Br1Xu9zr.js";import{d as M}from"./index-B55DkYFu.js";import{d as s}from"./combobox.test.utils-EfixJ2_2.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-DwBW5N7C.js";import"./index-Mga-TJ2K.js";import"./index-Xbc0duXx.js";import"./index-CjBS1QGy.js";import"./LabelWithHelp-ChfJsnaj.js";import"./Help-DqUYp3Aw.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-BxlP8MsT.js";import"./ComboboxSelectedOptions-lTpsloIV.js";import"./index-D26qgz4H.js";import"./index-BVXicwjt.js";import"./index-DCwxX22m.js";import"./index-8xSWa2YY.js";const{expect:e,fn:b,userEvent:r,waitFor:u,within:i}=__STORYBOOK_MODULE_TEST__,se={component:M,title:"Tester/Combobox",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},p={name:"With Ref (FA1)",args:{...s,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...s,id:"combobox-id",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),a=n.getAllByRole("generic")[1];await e(a).toHaveClass("dummyClassname"),await e(a).toHaveAttribute("lang","nb");const o=n.getByRole("combobox");await e(o).toHaveAttribute("id","combobox-id"),await e(o).toHaveAttribute("data-testid","123ID")}},v={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{container:"dummyClassname",options:"dummyClassname",errorMessage:"dummyClassname",label:"dummyClassname",helpText:"dummyClassname",description:"dummyClassname"},description:"Beskrivelse",helpText:"Hjelp!",errorMessage:"Error melding"},argTypes:{classNames:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=n.getAllByRole("button")[0];await r.click(o);const l=n.getAllByRole("generic")[1],c=t.querySelector('div[class*="optionsListContainer"]'),N=t.querySelector("[id^=comboboxErrorId]>div"),P=n.getByText(s.label),V=t.querySelector('div[class*="helpBox"]'),F=n.getByText("Beskrivelse");await e(l).toHaveClass("dummyClassname"),await e(c).toHaveClass("dummyClassname"),await e(N).toHaveClass("dummyClassname"),await e(P).toHaveClass("dummyClassname"),await e(V).toHaveClass("dummyClassname"),await e(F).toHaveClass("dummyClassname")}},g={name:"Defaults (A1, B3, B6)",args:{...s},argTypes:{label:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByLabelText(s.label);await e(a).toBeInTheDocument(),await e(a).not.toBeRequired(),await e(a).not.toBeDisabled(),await e(a).toHaveAttribute("type","text"),await e(a).toHaveAttribute("role","combobox"),await e(a).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-autocomplete","list"),await e(a).toHaveAttribute("autoComplete","off"),await e(a).not.toHaveAttribute("aria-invalid"),await e(a).not.toHaveAttribute("aria-busy"),await e(a).toHaveAttribute("placeholder",m.t("ds_forms:combobox.TypeOrSelect"));const o=t.querySelector('div[class*="chevronButton"]');await e(o).toBeInTheDocument(),await e(o).toHaveAttribute("aria-hidden","true");const l=t.querySelector("[id^=comboboxErrorId]");await e(l).toBeInTheDocument();const c=t.querySelector('div[class*="srOnly"]');await e(c).toHaveAttribute("aria-live","polite"),await e(c).toHaveAttribute("aria-atomic","true"),await e(c).toHaveTextContent("")}},y={name:"With Long Option (A1)",args:{className:"width200",label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await r.click(a)}},x={name:"With Long Value (A1)",args:{className:"width200",label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=n.getAllByRole("option");await r.click(o[0])}},h={name:"IsOpen (A1, B1)",args:{...s,id:"test-combobox"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a),await e(a).toHaveAttribute("aria-expanded","true");const o=n.getByRole("listbox");await e(o).toBeInTheDocument(),await e(o).toHaveAttribute("id","test-combobox-list"),await e(o).toHaveAttribute("aria-multiselectable","false");const l=n.getAllByRole("option");await e(l[0]).toHaveAttribute("id","test-combobox-option-0"),await e(l[0]).toHaveAttribute("aria-selected","false");const c=t.querySelector('div[class*="srOnly"]');await e(c).toHaveTextContent(m.t("ds_forms:combobox.OptionsAvailable",{count:3}))}},w={name:"With ErrorMessage (A2)",args:{...s,errorMessage:"Error melding"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=i(t),a=t.querySelector("[id^=comboboxErrorId]");await e(a).toHaveAttribute("id");const o=n.getByRole("combobox",{description:"Error melding"});await e(o).toHaveAttribute("aria-invalid","true")}},B={name:"No Results (A6)",args:{...s},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.type(a,"xyz"),await e(a).toHaveValue("xyz");const o=n.getByRole("listbox");await e(o).toBeInTheDocument(),await e(o).toHaveTextContent(m.t("ds_forms:combobox.NoResults",{searchTerm:"xyz"}));const l=t.querySelector('div[class*="srOnly"]');await e(l).toHaveTextContent(m.t("ds_forms:combobox.NoResults",{searchTerm:"xyz"}))}},A={name:"Variant Large (A7)",args:{...s,variant:"large"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await r.click(a)}},f={name:"With Value And Clear Value (A8, B2)",args:{...s},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=n.getByRole("listbox");await e(o).toBeInTheDocument();const l=n.getAllByRole("option");await r.click(l[1]),await e(a).toHaveValue("Sverige"),await e(o).not.toBeInTheDocument();const c=n.getByRole("button",{name:m.t("ds_forms:combobox.ResetSuggestion")});await e(c).toBeInTheDocument(),await e(c).toHaveAttribute("type","button"),await r.click(c),await e(a).toHaveValue("")}},S={name:"Single Option Announcement (B1)",args:{...s,options:[{label:"Single Option",value:"1"}]},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await r.click(a);const o=t.querySelector('div[class*="srOnly"]');await e(o).toHaveTextContent(m.t("ds_forms:combobox.OneOptionAvailable"))}},E={name:"With Required (B4)",args:{...s,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toBeRequired()}},H={name:"With HideLabel (B5)",args:{...s,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByText(s.label);await e(a).toBeInTheDocument()}},C={name:"With Placeholder (B6)",args:{...s,placeholder:"Søk etter kommune, fylke eller land"},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("placeholder","Søk etter kommune, fylke eller land")}},T={name:"With AccessKey (B7)",args:{...s,accessKey:"c"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("accesskey","c")}},R={name:"With Spacing",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},W={name:"With Disabled",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toBeDisabled(),await e(a).toHaveStyle("cursor: not-allowed")}},I={name:"With Loading (A13)",args:{...s,isLoading:!0},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=await n.findByText(m.t("ds_progress:spinner.LoadingLabel"));await e(o).toBeInTheDocument(),await e(n.queryByRole("listbox")).not.toBeInTheDocument()}},k={name:"With SpinnerLabel",args:{...s,isLoading:!0,spinnerLabel:"Laster alternativer..."},play:async({canvasElement:t})=>{const n=i(t),a=n.getByRole("combobox");await r.click(a);const o=await n.findByText("Laster alternativer...");await e(o).toBeInTheDocument(),await e(a).toBeEnabled(),await r.type(a,"test"),await e(a).toHaveValue("test")}},L={name:"With Name",args:{...s,name:"category"},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=i(t).getByRole("combobox");await e(a).toHaveAttribute("name","category")}},D={name:"With EventHandlers (A3)",args:{...s,onFocus:b(),onBlur:b(),onInputChange:b()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const o=i(n).getByRole("combobox");o.focus(),await u(()=>e(t.onFocus).toHaveBeenCalled()),await r.tab(),await u(()=>e(t.onBlur).toHaveBeenCalled()),await r.type(o,"X"),await e(o).toHaveValue("X"),await u(()=>e(t.onInputChange).toHaveBeenCalled())}},O={name:"OnSelectionChange (A3)",args:{...s,onSelectionChange:b()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const a=i(n),o=a.getByRole("combobox");await r.click(o);const l=a.getAllByRole("option");await r.click(l[0]),await e(o).toHaveValue("Norge"),await u(()=>e(t.onSelectionChange).toHaveBeenCalled())}},q={name:"OnHelpToggle",args:{...s,onHelpToggle:b(),helpText:"Dette er hjelpeteksten for comboboxen."},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const o=i(n).getByRole("button");await r.click(o),await u(()=>e(t.onHelpToggle).toHaveBeenCalled())}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
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
    const container = canvas.getAllByRole('generic')[1];
    const optionsContainer = canvasElement.querySelector('div[class*="optionsListContainer"]');
    const errorMessageContainer = canvasElement.querySelector('[id^=comboboxErrorId]>div');
    const label = canvas.getByText(defaultArgs.label as string);
    const helpTextContainer = canvasElement.querySelector('div[class*="helpBox"]');
    const description = canvas.getByText('Beskrivelse');
    await expect(container).toHaveClass('dummyClassname');
    await expect(optionsContainer).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(helpTextContainer).toHaveClass('dummyClassname');
    await expect(description).toHaveClass('dummyClassname');
  }
} satisfies Story`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With Placeholder (B6)',
  args: {
    ...defaultArgs,
    placeholder: 'Søk etter kommune, fylke eller land'
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
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute('placeholder', 'Søk etter kommune, fylke eller land');
  }
} satisfies Story`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...q.parameters?.docs?.source}}};const ie=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithLongOption","WithLongValue","IsOpen","WithErrorMessage","NoResults","VariantLarge","WithValue","SingleOptionAnnouncement","WithRequired","WithHideLabel","WithPlaceholder","WithAccessKey","WithSpacing","WithDisabled","WithLoading","WithSpinnerLabel","WithName","WithEventHandlers","OnSelectionChange","OnHelpToggle"];export{g as Defaults,h as IsOpen,B as NoResults,q as OnHelpToggle,O as OnSelectionChange,S as SingleOptionAnnouncement,A as VariantLarge,T as WithAccessKey,d as WithAttributes,v as WithCustomClassNames,W as WithDisabled,w as WithErrorMessage,D as WithEventHandlers,H as WithHideLabel,I as WithLoading,y as WithLongOption,x as WithLongValue,L as WithName,C as WithPlaceholder,p as WithRef,E as WithRequired,R as WithSpacing,k as WithSpinnerLabel,f as WithValue,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=Combobox.test.stories-_frtotFq.js.map
