import{d as y}from"./iframe-_BeEUj9n.js";import{c as A}from"./index-jV6wSCam.js";import{d as r}from"./combobox.test.utils-D8P4siTz.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-BqUDbnkt.js";import"./index-BcVMbygC.js";import"./index-Bva6C3l7.js";import"./index-BcQKZFop.js";import"./LabelWithHelp-DoQOgNY7.js";import"./Help-B4yN8Cyl.js";import"./Combobox.module-DRLQKUr5.js";import"./ComboboxButton-CagPt9i1.js";import"./index-DBdQKE3D.js";import"./index-CUk3vgdJ.js";import"./ComboboxSelectedOptions-uUjCvU7o.js";import"./index-CBVTTW59.js";import"./index-BUfGp1h_.js";const{expect:e,userEvent:o,waitFor:S,within:l}=__STORYBOOK_MODULE_TEST__,_={component:A,title:"Tester/Combobox/Multiple",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},u={name:"Defaults (A1, A10)",args:{...r,multiple:!0},play:async({canvasElement:i})=>{const s=l(i).getByRole("combobox");await o.click(s);const n=i.querySelector('div[class*="chevronButton"]');await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("aria-hidden","true")}},p={name:"With Long Text (A1)",args:{className:"width200",multiple:!0,label:"Combobox with long option values",options:[{label:"Averylongoptionvaluethatexceedsnormallength",value:"1"},{label:"Another extremely lengthy option value for testing",value:"2"},{label:"Short",value:"3"}]},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s);const n=a.getAllByRole("option");await o.click(n[0]),await o.click(n[1])}},d={name:"With Selected Values (A11)",args:{...r,multiple:!0},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s);const n=a.getAllByRole("option");await o.click(n[0]),await o.click(n[1]),await e(n[0]).toHaveAttribute("aria-selected","true"),await e(n[1]).toHaveAttribute("aria-selected","true");const t=i.querySelectorAll('input[type="hidden"]');await e(t).toHaveLength(2),await e(s).toBeEnabled();const c=a.getByRole("list");await e(c).toBeInTheDocument(),await e(a.queryByRole("button",{name:y.t("ds_forms:combobox.ResetSuggestion")})).not.toBeInTheDocument()}},m={name:"With MaxSelected (A12)",args:{...r,multiple:!0,maxSelected:3},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s);const n=a.getAllByRole("option");await o.click(n[0]),await e(n[1]).not.toHaveAttribute("aria-disabled"),await e(n[2]).not.toHaveAttribute("aria-disabled");const t=i.querySelector('[role="status"]');await e(t).toHaveAttribute("aria-live","polite"),await e(t).toHaveAttribute("aria-atomic","true"),await e(t).toHaveTextContent(y.t("ds_forms:combobox.SelectedOfTotalSingular",{selected:1,total:3}))}},v={name:"With MaxSelected Values (A12)",args:{...r,multiple:!0,maxSelected:2},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s);const n=a.getAllByRole("option");await o.click(n[0]),await o.click(n[1]),await e(n[2]).toHaveAttribute("aria-disabled","true");const t=i.querySelector('[role="status"]');await e(t).toHaveAttribute("aria-live","polite"),await e(t).toHaveAttribute("aria-atomic","true"),await e(t).toHaveTextContent(y.t("ds_forms:combobox.SelectedOfTotalSingular",{selected:2,total:2}))}},b={name:"Flervalg med mus (A11)",args:{...r,multiple:!0},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s);const n=a.getAllByRole("option");await e(n).toHaveLength(3),await o.click(n[0]);let t=a.getAllByRole("button",{name:/fjern/i});await e(t).toHaveLength(1),await e(t[0]).toHaveTextContent("Norge"),await o.click(n[1]),t=a.getAllByRole("button",{name:/fjern/i}),await e(t).toHaveLength(2),await e(t[0]).toHaveTextContent("Norge"),await e(t[1]).toHaveTextContent("Sverige"),await o.click(t[0]),t=a.getAllByRole("button",{name:/fjern/i}),await e(t).toHaveLength(1),await e(t[0]).toHaveTextContent("Sverige")}},g={name:"Flervalg med tastatur (A11)",args:{...r,multiple:!0},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s),await o.keyboard("{Alt>}{ArrowDown}{/Alt}");const n=a.getAllByRole("option");await e(n).toHaveLength(3),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}");let t=a.getAllByRole("button",{name:/fjern/i});await e(t).toHaveLength(1),await e(t[0]).toHaveTextContent("Norge"),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}"),t=a.getAllByRole("button",{name:/fjern/i}),await e(t).toHaveLength(2),await e(t[0]).toHaveTextContent("Norge"),await e(t[1]).toHaveTextContent("Sverige"),await o.keyboard("{Escape}"),await e(s).toHaveValue(""),await o.keyboard("{Backspace}"),t=a.getAllByRole("button",{name:/fjern/i}),await e(t).toHaveLength(1),await e(t[0]).toHaveTextContent("Norge")}},w={name:"Tastaturvalg etter filtrering bruker original indeks",args:{...r,multiple:!0},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await o.click(s),await o.type(s,"Da");let n=a.getAllByRole("option");await e(n).toHaveLength(1),await e(n[0]).toHaveTextContent("Danmark"),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}");const c=`${s.getAttribute("id")}-option-2`;await S(async()=>{n=a.getAllByRole("option"),await e(n).toHaveLength(3),await e(s).toHaveAttribute("aria-activedescendant",c),await e(n[2]).toHaveAttribute("id",c),await e(n[2]).toHaveTextContent("Danmark")})}},h={name:"With Name",args:{...r,multiple:!0,name:"categories"},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),s=a.getByRole("combobox");await e(s).not.toHaveAttribute("name"),await o.click(s);const n=a.getAllByRole("option");await o.click(n[0]),await o.click(n[1]);const t=i.querySelectorAll('input[type="hidden"]');await e(t).toHaveLength(2),await e(t[0]).toHaveAttribute("name","categories"),await e(t[0]).toHaveAttribute("value","no"),await e(t[1]).toHaveAttribute("name","categories"),await e(t[1]).toHaveAttribute("value","se");const c=a.getAllByRole("button",{name:/fjern/i});await o.click(c[0]);const x=i.querySelectorAll('input[type="hidden"]');await e(x).toHaveLength(1),await e(x[0]).toHaveAttribute("value","se")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, A10)',
  args: {
    ...defaultArgs,
    multiple: true
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const chevron = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevron).toBeInTheDocument();
    await expect(chevron).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text (A1)',
  args: {
    className: 'width200',
    multiple: true,
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
    await userEvent.click(options[1]);
  }
} satisfies Story`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Selected Values (A11)',
  args: {
    ...defaultArgs,
    multiple: true
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await userEvent.click(options[1]);
    await expect(options[0]).toHaveAttribute('aria-selected', 'true');
    await expect(options[1]).toHaveAttribute('aria-selected', 'true');
    const hiddenInputs = canvasElement.querySelectorAll('input[type="hidden"]');
    await expect(hiddenInputs).toHaveLength(2);
    await expect(inputElement).toBeEnabled();
    const chipsList = canvas.getByRole('list');
    await expect(chipsList).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: dsI18n.t('ds_forms:combobox.ResetSuggestion')
    })).not.toBeInTheDocument();
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With MaxSelected (A12)',
  args: {
    ...defaultArgs,
    multiple: true,
    maxSelected: 3
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await expect(options[1]).not.toHaveAttribute('aria-disabled');
    await expect(options[2]).not.toHaveAttribute('aria-disabled');
    const maxSelectedMessage = canvasElement.querySelector('[role="status"]');
    await expect(maxSelectedMessage).toHaveAttribute('aria-live', 'polite');
    await expect(maxSelectedMessage).toHaveAttribute('aria-atomic', 'true');
    await expect(maxSelectedMessage).toHaveTextContent(dsI18n.t('ds_forms:combobox.SelectedOfTotalSingular', {
      selected: 1,
      total: 3
    }));
  }
} satisfies Story`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With MaxSelected Values (A12)',
  args: {
    ...defaultArgs,
    multiple: true,
    maxSelected: 2
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await userEvent.click(options[1]);
    await expect(options[2]).toHaveAttribute('aria-disabled', 'true');
    // TODO skal det være mulig å søke/skrive mer?
    const maxSelectedMessage = canvasElement.querySelector('[role="status"]');
    await expect(maxSelectedMessage).toHaveAttribute('aria-live', 'polite');
    await expect(maxSelectedMessage).toHaveAttribute('aria-atomic', 'true');
    await expect(maxSelectedMessage).toHaveTextContent(dsI18n.t('ds_forms:combobox.SelectedOfTotalSingular', {
      selected: 2,
      total: 2
    }));
  }
} satisfies Story`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Flervalg med mus (A11)',
  args: {
    ...defaultArgs,
    multiple: true
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
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);
    await userEvent.click(options[0]);

    // Verifiser at første alternativ er valgt og dropdown forblir åpen
    let selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Norge');

    // Velg andre alternativ med mus
    await userEvent.click(options[1]);

    // Verifiser at begge alternativer er valgt
    selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await expect(selectedChips).toHaveLength(2);
    await expect(selectedChips[0]).toHaveTextContent('Norge');
    await expect(selectedChips[1]).toHaveTextContent('Sverige');

    // Fjern første valg ved å klikke på chip
    await userEvent.click(selectedChips[0]);

    // Verifiser at kun andre alternativ er valgt
    selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Sverige');
  }
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Flervalg med tastatur (A11)',
  args: {
    ...defaultArgs,
    multiple: true
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

    // Fokuser på input og åpne dropdown med Alt+Down
    await userEvent.click(inputElement);
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Verifiser at dropdown er åpen
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Naviger til første alternativ og velg med Enter
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');

    // Verifiser at første alternativ er valgt
    let selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Norge');

    // Naviger til andre alternativ og velg
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');

    // Verifiser at begge alternativer er valgt
    selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await expect(selectedChips).toHaveLength(2);
    await expect(selectedChips[0]).toHaveTextContent('Norge');
    await expect(selectedChips[1]).toHaveTextContent('Sverige');

    // Lukk dropdown med Escape
    await userEvent.keyboard('{Escape}');

    // Test fjern med Backspace når input er tom
    await expect(inputElement).toHaveValue('');
    await userEvent.keyboard('{Backspace}');

    // Verifiser at siste valg fjernes
    selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Norge');
  }
} satisfies Story`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Tastaturvalg etter filtrering bruker original indeks',
  args: {
    ...defaultArgs,
    multiple: true
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
    await userEvent.click(inputElement);
    await userEvent.type(inputElement, 'Da');
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Danmark');
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');
    const comboboxId = inputElement.getAttribute('id');
    const expectedActiveDescendant = \`\${comboboxId}-option-2\`;
    await waitFor(async () => {
      options = canvas.getAllByRole('option');
      await expect(options).toHaveLength(3);
      await expect(inputElement).toHaveAttribute('aria-activedescendant', expectedActiveDescendant);
      await expect(options[2]).toHaveAttribute('id', expectedActiveDescendant);
      await expect(options[2]).toHaveTextContent('Danmark');
    });
  }
} satisfies Story`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Name',
  args: {
    ...defaultArgs,
    multiple: true,
    name: 'categories'
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

    // Verifiser at hovedinput ikke har name-attributt i flervalgs-modus
    await expect(inputElement).not.toHaveAttribute('name');

    // Åpne dropdown og velg to alternativer
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]); // Norge
    await userEvent.click(options[1]); // Sverige

    // Verifiser at skjulte input-felt er opprettet
    const hiddenInputs = canvasElement.querySelectorAll('input[type="hidden"]');
    await expect(hiddenInputs).toHaveLength(2);

    // Verifiser at skjulte input-felt har korrekte verdier
    await expect(hiddenInputs[0]).toHaveAttribute('name', 'categories');
    await expect(hiddenInputs[0]).toHaveAttribute('value', 'no');
    await expect(hiddenInputs[1]).toHaveAttribute('name', 'categories');
    await expect(hiddenInputs[1]).toHaveAttribute('value', 'se');

    // Fjern ett valg og verifiser at skjult input også fjernes
    const selectedChips = canvas.getAllByRole('button', {
      name: /fjern/i
    });
    await userEvent.click(selectedChips[0]); // Fjern Norge

    const updatedHiddenInputs = canvasElement.querySelectorAll('input[type="hidden"]');
    await expect(updatedHiddenInputs).toHaveLength(1);
    await expect(updatedHiddenInputs[0]).toHaveAttribute('value', 'se');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const F=["Defaults","WithLongText","WithSelectedValues","WithMaxSelected","WithMaxSelectedValues","MultipleSelectionMouse","MultipleSelectionKeyboard","KeyboardSelectionRestoresOriginalFocusIndex","WithName"];export{u as Defaults,w as KeyboardSelectionRestoresOriginalFocusIndex,g as MultipleSelectionKeyboard,b as MultipleSelectionMouse,p as WithLongText,m as WithMaxSelected,v as WithMaxSelectedValues,h as WithName,d as WithSelectedValues,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=Combobox.multiple.test.stories-g51b-Kr1.js.map
