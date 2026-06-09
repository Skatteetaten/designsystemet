import{d as b,j as u}from"./iframe-DyzX2HZk.js";import{b as _}from"./index-BsMkEDp2.js";import{A as X}from"./index-BVZq6FY6.js";import{d as s}from"./combobox.test.utils-B5LDMm1G.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-CpbLitON.js";import"./index-tiKhdOIe.js";import"./index-Cocas2j2.js";import"./index-CkEqEoBc.js";import"./LabelWithHelp-M0pRksmn.js";import"./Help-DybFLe9H.js";import"./Combobox.module-CNeM_wTV.js";import"./ComboboxButton-Vs88nVYr.js";import"./index-C34PYbPl.js";import"./index-CMkU_MzX.js";import"./ComboboxSelectedOptions-CjGG25UN.js";import"./index-GCI7kVAR.js";const{expect:a,fn:m,userEvent:i,waitFor:p,within:r}=__STORYBOOK_MODULE_TEST__,pe={component:_,title:"Tester/Combobox",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},d={name:"With Ref (FA1)",args:{...s,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},g={name:"With Attributes (FA2-5)",args:{...s,id:"combobox-id",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=r(t),e=n.getAllByRole("generic")[1];await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb");const o=n.getByRole("combobox");await a(o).toHaveAttribute("id","combobox-id"),await a(o).toHaveAttribute("data-testid","123ID")}},v={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{container:"dummyClassname",options:"dummyClassname",errorMessage:"dummyClassname",label:"dummyClassname",helpText:"dummyClassname",description:"dummyClassname"},description:"Beskrivelse",helpText:"Hjelp!",errorMessage:"Error melding"},argTypes:{classNames:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.click(e);const o=n.getAllByRole("generic")[1],l=t.querySelector('div[class*="optionsListContainer"]'),c=t.querySelector("[id^=comboboxErrorId]>div"),j=n.getByText(s.label);await a(o).toHaveClass("dummyClassname"),await a(l).toHaveClass("dummyClassname"),await a(c).toHaveClass("dummyClassname"),await a(j).toHaveClass("dummyClassname");const z=n.getAllByRole("button")[0];await i.click(z);const G=t.querySelector('div[class*="helpBox"]'),U=n.getByText("Beskrivelse");await a(G).toHaveClass("dummyClassname"),await a(U).toHaveClass("dummyClassname")}},y={name:"Defaults (A1, B3, B6)",args:{...s},argTypes:{label:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t).getByLabelText(s.label);await a(e).toBeInTheDocument(),await a(e).not.toBeRequired(),await a(e).not.toBeDisabled(),await a(e).toHaveAttribute("type","text"),await a(e).toHaveAttribute("role","combobox"),await a(e).toHaveAttribute("aria-expanded","false"),await a(e).toHaveAttribute("aria-autocomplete","list"),await a(e).toHaveAttribute("autoComplete","off"),await a(e).not.toHaveAttribute("aria-invalid"),await a(e).not.toHaveAttribute("aria-busy"),await a(e).toHaveAttribute("placeholder",b.t("ds_forms:combobox.TypeOrSelect"));const o=t.querySelector('div[class*="chevronButton"]');await a(o).toBeInTheDocument(),await a(o).toHaveAttribute("aria-hidden","true");const l=t.querySelector("[id^=comboboxErrorId]");await a(l).toBeInTheDocument();const c=t.querySelector('div[class*="srOnly"]');await a(c).toHaveAttribute("aria-live","polite"),await a(c).toHaveAttribute("aria-atomic","true"),await a(c).toHaveTextContent("")}},h={name:"With AriaDescribedBy",render:t=>{const n="combobox-alert-description-id";return u.jsxs(u.Fragment,{children:[u.jsx(_,{...t,ariaDescribedBy:n,hasSpacing:!0}),u.jsx(X,{id:n,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for combobox"})]})},args:{...s},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await a(e).toHaveAttribute("aria-describedby");const o=n.getByText("Dette er en varselmelding for combobox");await a(o).toBeInTheDocument();const c=(e.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await a(c).toContain("combobox-alert-description-id")}},x={name:"With Long Option (A1)",args:{className:"width200",label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await i.click(e)}},w={name:"With Long Value (A1)",args:{className:"width200",label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.click(e);const o=n.getAllByRole("option");await i.click(o[0])}},B={name:"IsOpen (A1, B1)",args:{...s,id:"test-combobox"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.click(e),await a(e).toHaveAttribute("aria-expanded","true"),await a(e).toHaveAttribute("aria-controls","test-combobox-list");const o=n.getByRole("listbox");await a(o).toBeInTheDocument(),await a(o).toHaveAttribute("id","test-combobox-list"),await a(o).toHaveAttribute("aria-multiselectable","false");const l=n.getAllByRole("option");await a(l[0]).toHaveAttribute("id","test-combobox-option-0"),await a(l[0]).toHaveAttribute("aria-selected","false");const c=t.querySelector('div[class*="srOnly"]');await a(c).toHaveTextContent(b.t("ds_forms:combobox.OptionsAvailable",{count:3}))}},S={name:"Grouped Keyboard Selection",args:{label:"Velg element",options:[{label:"Ugruppert 1",value:"u1"},{label:"Eple",value:"apple",group:"Frukt"},{label:"Gulrot",value:"carrot",group:"Gront"},{label:"Banan",value:"banana",group:"Frukt"},{label:"Ugruppert 2",value:"u2"}]},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await i.click(e),await i.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}{Enter}"),await a(e).toHaveValue("Banan")}},A={name:"With ErrorMessage (A2)",args:{...s,errorMessage:"Error melding"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t),e=t.querySelector("[id^=comboboxErrorId]");await a(e).toHaveAttribute("id");const o=n.getByRole("combobox",{description:"Error melding"});await a(o).toHaveAttribute("aria-invalid","true")}},f={name:"No Results (A6)",args:{...s},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.type(e,"xyz"),await a(e).toHaveValue("xyz");const o=n.getByRole("listbox");await a(o).toBeInTheDocument(),await a(o).toHaveTextContent(b.t("ds_forms:combobox.NoResults",{searchTerm:"xyz"}));const l=t.querySelector('div[class*="srOnly"]');await a(l).toHaveTextContent(b.t("ds_forms:combobox.NoResults",{searchTerm:"xyz"}))}},E={name:"Variant Large (A7)",args:{...s,variant:"large"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await i.click(e)}},H={name:"With Value And Clear Value (A8, B2)",args:{...s},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.click(e);const o=n.getByRole("listbox");await a(o).toBeInTheDocument();const l=n.getAllByRole("option");await i.click(l[1]),await a(e).toHaveValue("Sverige"),await a(o).not.toBeInTheDocument()}},C={name:"Single-Select Keyboard Keeps Selection",args:{...s,onSelectionChange:m()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const e=r(n),o=e.getByRole("combobox");await i.click(o),await i.click(e.getAllByRole("option")[0]),await a(o).toHaveValue("Norge"),await i.click(o),await i.keyboard("{Enter}"),await a(o).toHaveValue("Norge")}},T={name:"Single Option Announcement (B1)",args:{...s,options:[{label:"Single Option",value:"1"}]},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await i.click(e);const o=t.querySelector('div[class*="srOnly"]');await a(o).toHaveTextContent(b.t("ds_forms:combobox.OneOptionAvailable"))}},R={name:"With Required (B4)",args:{...s,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).toBeRequired(),await a(e).toHaveAttribute("aria-invalid","false")}},k={name:"With HideLabel (B5)",args:{...s,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t).getByText(s.label);await a(e).toBeInTheDocument()}},W={name:"With Placeholder (B6)",args:{...s,placeholder:"Søk etter kommune, fylke eller land"},argTypes:{placeholder:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).toHaveAttribute("placeholder","Søk etter kommune, fylke eller land")}},L={name:"With MinSearchLength",args:{...s,minSearchLength:1},argTypes:{minSearchLength:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).not.toHaveAttribute("placeholder")}},D={name:"With MinSearchLength And Placeholder",args:{...s,placeholder:"Søk etter kommune, fylke eller land",minSearchLength:1},argTypes:{placeholder:{table:{disable:!1}},minSearchLength:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).toHaveAttribute("placeholder","Søk etter kommune, fylke eller land")}},I={name:"With AccessKey (B7)",args:{...s,accessKey:"c"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).toHaveAttribute("accesskey","c")}},O={name:"With Spacing",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},P={name:"With Disabled",args:{...s,disabled:!0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await a(e).toBeDisabled(),await a(e).toHaveStyle("cursor: not-allowed");const o=n.getByRole("button");await a(o).toBeDisabled()}},N={name:"With Loading (A13)",args:{...s,isLoading:!0},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.click(e);const o=await n.findByText(b.t("ds_progress:spinner.LoadingLabel"));await a(o).toBeInTheDocument(),await a(n.queryByRole("listbox")).not.toBeInTheDocument()}},q={name:"With SpinnerLabel",args:{...s,isLoading:!0,spinnerLabel:"Laster alternativer..."},play:async({canvasElement:t})=>{const n=r(t),e=n.getByRole("combobox");await i.click(e);const o=await n.findByText("Laster alternativer...");await a(o).toBeInTheDocument(),await a(e).toBeEnabled(),await i.type(e,"test"),await a(e).toHaveValue("test")}},V={name:"With Name",args:{...s,name:"category"},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await a(e).toHaveAttribute("name","category")}},M={name:"With EventHandlers (A3)",args:{...s,onFocus:m(),onBlur:m(),onInputChange:m()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const o=r(n).getByRole("combobox");o.focus(),await p(()=>a(t.onFocus).toHaveBeenCalled()),await i.tab(),await p(()=>a(t.onBlur).toHaveBeenCalled()),await i.type(o,"X"),await a(o).toHaveValue("X"),await p(()=>a(t.onInputChange).toHaveBeenCalled())}},F={name:"OnSelectionChange (A3)",args:{...s,onSelectionChange:m()},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const e=r(n),o=e.getByRole("combobox");await i.click(o);const l=e.getAllByRole("option");await i.click(l[0]),await a(o).toHaveValue("Norge"),await p(()=>a(t.onSelectionChange).toHaveBeenCalled())}},K={name:"OnHelpToggle",args:{...s,onHelpToggle:m(),helpText:"Dette er hjelpeteksten for comboboxen."},parameters:{chromatic:{disableSnapshot:!0}},play:async({args:t,canvasElement:n})=>{const o=r(n).getByRole("button");await i.click(o),await p(()=>a(t.onHelpToggle).toHaveBeenCalled())}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    const container = canvas.getAllByRole('generic')[1];
    const optionsContainer = canvasElement.querySelector('div[class*="optionsListContainer"]');
    const errorMessageContainer = canvasElement.querySelector('[id^=comboboxErrorId]>div');
    const label = canvas.getByText(defaultArgs.label as string);
    await expect(container).toHaveClass('dummyClassname');
    await expect(optionsContainer).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    const helpButton = canvas.getAllByRole('button')[0];
    await userEvent.click(helpButton);
    const helpTextContainer = canvasElement.querySelector('div[class*="helpBox"]');
    const description = canvas.getByText('Beskrivelse');
    await expect(helpTextContainer).toHaveClass('dummyClassname');
    await expect(description).toHaveClass('dummyClassname');
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'combobox-alert-description-id';
    return <>
        <Combobox {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for combobox'}
        </Alert>
      </>;
  },
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
    await expect(combobox).toHaveAttribute('aria-describedby');
    const alertText = canvas.getByText('Dette er en varselmelding for combobox');
    await expect(alertText).toBeInTheDocument();
    const describedBy = combobox.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('combobox-alert-description-id');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    await expect(combobox).toHaveAttribute('aria-controls', 'test-combobox-list');
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
} satisfies Story`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Grouped Keyboard Selection',
  args: {
    label: 'Velg element',
    options: [{
      label: 'Ugruppert 1',
      value: 'u1'
    }, {
      label: 'Eple',
      value: 'apple',
      group: 'Frukt'
    }, {
      label: 'Gulrot',
      value: 'carrot',
      group: 'Gront'
    }, {
      label: 'Banan',
      value: 'banana',
      group: 'Frukt'
    }, {
      label: 'Ugruppert 2',
      value: 'u2'
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
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{Enter}');
    await expect(combobox).toHaveValue('Banan');
  }
} satisfies Story`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Single-Select Keyboard Keeps Selection',
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
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
    await userEvent.click(canvas.getAllByRole('option')[0]);
    await expect(combobox).toHaveValue('Norge');
    await userEvent.click(combobox);
    await userEvent.keyboard('{Enter}');
    await expect(combobox).toHaveValue('Norge');
  }
} satisfies Story`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
    await expect(inputElement).toHaveAttribute('aria-invalid', 'false');
  }
} satisfies Story`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With MinSearchLength',
  args: {
    ...defaultArgs,
    minSearchLength: 1
  },
  argTypes: {
    minSearchLength: {
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
    await expect(inputElement).not.toHaveAttribute('placeholder');
  }
} satisfies Story`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With MinSearchLength And Placeholder',
  args: {
    ...defaultArgs,
    placeholder: 'Søk etter kommune, fylke eller land',
    minSearchLength: 1
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false
      }
    },
    minSearchLength: {
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
    await expect(inputElement).toHaveAttribute('placeholder', 'Søk etter kommune, fylke eller land');
  }
} satisfies Story`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
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
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toBeDisabled();
    await expect(inputElement).toHaveStyle('cursor: not-allowed');
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...K.parameters?.docs?.source}}};const ue=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithAriaDescribedBy","WithLongOption","WithLongValue","IsOpen","GroupedKeyboardSelection","WithErrorMessage","NoResults","VariantLarge","WithValue","SingleSelectKeyboardDeselect","SingleOptionAnnouncement","WithRequired","WithHideLabel","WithPlaceholder","WithMinSearchLength","WithMinSearchLengthAndPlaceholder","WithAccessKey","WithSpacing","WithDisabled","WithLoading","WithSpinnerLabel","WithName","WithEventHandlers","OnSelectionChange","OnHelpToggle"];export{y as Defaults,S as GroupedKeyboardSelection,B as IsOpen,f as NoResults,K as OnHelpToggle,F as OnSelectionChange,T as SingleOptionAnnouncement,C as SingleSelectKeyboardDeselect,E as VariantLarge,I as WithAccessKey,h as WithAriaDescribedBy,g as WithAttributes,v as WithCustomClassNames,P as WithDisabled,A as WithErrorMessage,M as WithEventHandlers,k as WithHideLabel,N as WithLoading,x as WithLongOption,w as WithLongValue,L as WithMinSearchLength,D as WithMinSearchLengthAndPlaceholder,V as WithName,W as WithPlaceholder,d as WithRef,R as WithRequired,O as WithSpacing,q as WithSpinnerLabel,H as WithValue,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=Combobox.test.stories-DZhfnJAm.js.map
