import{d as x}from"./index-D76sDZza.js";import{d as l}from"./combobox.test.utils-BXM2lJVw.js";import"./iframe-CBOQuZmX.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-DF1H3gtV.js";import"./index-BxmwhRWV.js";import"./index-tEZUkoN5.js";import"./index-CSgUqAK2.js";import"./LabelWithHelp-vli_xocL.js";import"./Help-4dQh7YC4.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./index-haEYng38.js";import"./index-B4-BoLKC.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./index-BYntwts4.js";import"./index-Zmgbh9ba.js";const{expect:t,userEvent:r,within:p}=__STORYBOOK_MODULE_TEST__,c=[{label:"Trondheim",value:"trondheim",group:"Trøndelag"},{label:"Steinkjer",value:"steinkjer",group:"Trøndelag"},{label:"Bergen",value:"bergen",group:"Vestland"},{label:"Voss",value:"voss",group:"Vestland"},{label:"Stavanger",value:"stavanger",group:"Rogaland"},{label:"Sandnes",value:"sandnes",group:"Rogaland"}],S=[{label:"Alle kommuner",value:"alle"},{label:"Trondheim",value:"trondheim",group:"Trøndelag"},{label:"Steinkjer",value:"steinkjer",group:"Trøndelag"},{label:"Annen kommune",value:"annen"},{label:"Bergen",value:"bergen",group:"Vestland"},{label:"Voss",value:"voss",group:"Vestland"}],P={component:x,title:"Tester/Combobox/Grouped",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},g={name:"Grupperte alternativer rendres korrekt",args:{...l,options:c},play:async({canvasElement:n})=>{const e=p(n),a=e.getByRole("combobox");await r.click(a);const o=n.querySelectorAll('[role="group"]');await t(o.length).toBe(3);const s=e.getByText("Trøndelag"),i=e.getByText("Vestland"),u=e.getByText("Rogaland");await t(s).toBeInTheDocument(),await t(i).toBeInTheDocument(),await t(u).toBeInTheDocument();const E=e.getAllByRole("option");await t(E.length).toBe(6)}},m={name:"Grupper har aria-labelledby",args:{...l,id:"test-grouped",options:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=p(n).getByRole("combobox");await r.click(a);const o=n.querySelectorAll('[role="group"]');for(const s of o){const i=s.getAttribute("aria-labelledby");await t(i).toBeTruthy();const u=n.querySelector(`#${i}`);await t(u).toBeInTheDocument()}}},d={name:"Tastaturnavigasjon gjennom grupper",args:{...l,options:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const a=p(n).getByRole("combobox");await r.click(a),await r.keyboard("{Alt>}{ArrowDown}{/Alt}"),await r.keyboard("{ArrowDown}");const o=a.getAttribute("aria-activedescendant");await t(o).toBeTruthy(),await r.keyboard("{ArrowDown}");const s=a.getAttribute("aria-activedescendant");await t(s).toBeTruthy(),await t(s).not.toBe(o),await r.keyboard("{ArrowDown}"),await r.keyboard("{ArrowDown}"),await r.keyboard("{Enter}");const i=a.getAttribute("value");await t(["Bergen","Voss"]).toContain(i)}},b={name:"Filtrering skjuler tomme grupper",args:{...l,options:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=p(n),a=e.getByRole("combobox");await r.click(a);let o=n.querySelectorAll('[role="group"]');await t(o.length).toBe(3),await r.type(a,"Trondheim");const s=e.getAllByRole("option");await t(s.length).toBe(1),await t(s[0]).toHaveTextContent("Trondheim"),o=n.querySelectorAll('[role="group"]'),await t(o.length).toBe(1),await r.clear(a),o=n.querySelectorAll('[role="group"]'),await t(o.length).toBe(3)}},v={name:"Blandet grupperte og ugrupperte alternativer",args:{...l,options:S},play:async({canvasElement:n})=>{const e=p(n),a=e.getByRole("combobox");await r.click(a);const o=e.getByRole("option",{name:"Alle kommuner"});await t(o).toBeInTheDocument();const s=e.getByRole("option",{name:"Annen kommune"});await t(s).toBeInTheDocument();const i=n.querySelectorAll('[role="group"]');await t(i.length).toBe(2);const u=e.getAllByRole("option");await t(u.length).toBe(6)}},y={name:"Flervalg med grupperte alternativer",args:{...l,options:c,multiple:!0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=p(n),a=e.getByRole("combobox");await r.click(a);const o=e.getAllByRole("option");await r.click(o[0]);const s=e.getByRole("listbox");await t(s).toBeInTheDocument();const i=e.getByRole("option",{name:"Bergen"});await r.click(i);const u=e.getByRole("button",{name:/Trondheim/i}),E=e.getByRole("button",{name:/Bergen/i});await t(u).toBeInTheDocument(),await t(E).toBeInTheDocument()}},w={name:"Velg alternativ fra gruppe",args:{...l,options:c},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=p(n),a=e.getByRole("combobox");await r.click(a);const o=e.getByText("Vestland");await t(o).toBeInTheDocument();const s=e.getByRole("option",{name:"Bergen"});await r.click(s),await t(a).toHaveValue("Bergen")}},B={name:"Visuelt snapshot - grupperte alternativer",args:{...l,options:c,classNames:{options:"maxHeight300"}},play:async({canvasElement:n})=>{const e=p(n),a=e.getByRole("combobox");await r.click(a);const o=e.getByRole("listbox");await t(o).toBeInTheDocument()}},h={name:"Large variant med grupperte alternativer",args:{...l,options:c,variant:"large"},play:async({canvasElement:n})=>{const a=p(n).getByRole("combobox");await r.click(a);const o=n.querySelectorAll('[role="group"]');await t(o.length).toBe(3)}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Grupperte alternativer rendres korrekt',
  args: {
    ...defaultArgs,
    options: groupedOptions
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at grupper er synlige
    const groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);

    // Verifiser gruppe-labels
    const trondelagLabel = canvas.getByText('Trøndelag');
    const vestlandLabel = canvas.getByText('Vestland');
    const rogalandLabel = canvas.getByText('Rogaland');
    await expect(trondelagLabel).toBeInTheDocument();
    await expect(vestlandLabel).toBeInTheDocument();
    await expect(rogalandLabel).toBeInTheDocument();

    // Verifiser at options er innenfor grupper
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBe(6);
  }
} satisfies Story`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Grupper har aria-labelledby',
  args: {
    ...defaultArgs,
    id: 'test-grouped',
    options: groupedOptions
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
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);

    // Verifiser at grupper har aria-labelledby som peker til gruppeoverskriften
    const groups = canvasElement.querySelectorAll('[role="group"]');
    for (const group of groups) {
      const labelledBy = group.getAttribute('aria-labelledby');
      await expect(labelledBy).toBeTruthy();

      // Verifiser at elementet som refereres eksisterer
      const labelElement = canvasElement.querySelector(\`#\${labelledBy}\`);
      await expect(labelElement).toBeInTheDocument();
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Tastaturnavigasjon gjennom grupper',
  args: {
    ...defaultArgs,
    options: groupedOptions
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
    const inputElement = canvas.getByRole('combobox');

    // Fokuser og åpne dropdown
    await userEvent.click(inputElement);
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Naviger gjennom alle options med piltaster
    await userEvent.keyboard('{ArrowDown}');
    const activeDescendant = inputElement.getAttribute('aria-activedescendant');
    await expect(activeDescendant).toBeTruthy();

    // Naviger videre til neste option
    await userEvent.keyboard('{ArrowDown}');
    const newActiveDescendant = inputElement.getAttribute('aria-activedescendant');
    await expect(newActiveDescendant).toBeTruthy();
    await expect(newActiveDescendant).not.toBe(activeDescendant);

    // Naviger til første option i neste gruppe
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');

    // Velg med Enter
    await userEvent.keyboard('{Enter}');

    // Verifiser at valget ble gjort (en av kommunene i Vestland)
    const value = inputElement.getAttribute('value');
    await expect(['Bergen', 'Voss']).toContain(value);
  }
} satisfies Story`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Filtrering skjuler tomme grupper',
  args: {
    ...defaultArgs,
    options: groupedOptions
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
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at alle grupper er synlige
    let groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);

    // Filtrer på "Trondheim" - kun Trøndelag-gruppen skal vises
    await userEvent.type(inputElement, 'Trondheim');

    // Verifiser at kun én option vises
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBe(1);
    await expect(options[0]).toHaveTextContent('Trondheim');

    // Verifiser at kun Trøndelag-gruppen er synlig
    groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(1);

    // Slett filtrering
    await userEvent.clear(inputElement);

    // Alle grupper skal være synlige igjen
    groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);
  }
} satisfies Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Blandet grupperte og ugrupperte alternativer',
  args: {
    ...defaultArgs,
    options: mixedOptions
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at ugrupperte options vises direkte i listen
    const alleKommuner = canvas.getByRole('option', {
      name: 'Alle kommuner'
    });
    await expect(alleKommuner).toBeInTheDocument();
    const annenKommune = canvas.getByRole('option', {
      name: 'Annen kommune'
    });
    await expect(annenKommune).toBeInTheDocument();

    // Verifiser at grupperte options er i grupper
    const groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(2); // Trøndelag og Vestland

    // Alle options skal være tilgjengelige
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBe(6);
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Flervalg med grupperte alternativer',
  args: {
    ...defaultArgs,
    options: groupedOptions,
    multiple: true
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
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Velg første option (Trondheim)
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);

    // Dropdown skal fortsatt være åpen
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();

    // Velg en option fra en annen gruppe (Bergen)
    const bergenOption = canvas.getByRole('option', {
      name: 'Bergen'
    });
    await userEvent.click(bergenOption);

    // Verifiser at chips vises for valgte alternativer
    const trondheimChip = canvas.getByRole('button', {
      name: /Trondheim/i
    });
    const bergenChip = canvas.getByRole('button', {
      name: /Bergen/i
    });
    await expect(trondheimChip).toBeInTheDocument();
    await expect(bergenChip).toBeInTheDocument();
  }
} satisfies Story`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Velg alternativ fra gruppe',
  args: {
    ...defaultArgs,
    options: groupedOptions
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
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at grupper er synlige
    const vestlandLabel = canvas.getByText('Vestland');
    await expect(vestlandLabel).toBeInTheDocument();

    // Velg Bergen fra Vestland-gruppen
    const bergenOption = canvas.getByRole('option', {
      name: 'Bergen'
    });
    await userEvent.click(bergenOption);

    // Verifiser at valget er gjort
    await expect(inputElement).toHaveValue('Bergen');
  }
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Visuelt snapshot - grupperte alternativer',
  args: {
    ...defaultArgs,
    options: groupedOptions,
    classNames: {
      options: 'maxHeight300'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown for visual snapshot
    await userEvent.click(inputElement);

    // Vent på at listen rendres
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
  }
} satisfies Story`,...B.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Large variant med grupperte alternativer',
  args: {
    ...defaultArgs,
    options: groupedOptions,
    variant: 'large'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at grupper er synlige
    const groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const _=["GroupedOptionsRendering","GroupedOptionsAriaLabelledby","GroupedOptionsKeyboardNavigation","GroupedOptionsFiltering","MixedGroupedAndUngrouped","GroupedOptionsMultipleSelection","GroupedOptionsSelectFromGroup","GroupedOptionsVisualSnapshot","GroupedOptionsLargeVariant"];export{m as GroupedOptionsAriaLabelledby,b as GroupedOptionsFiltering,d as GroupedOptionsKeyboardNavigation,h as GroupedOptionsLargeVariant,y as GroupedOptionsMultipleSelection,g as GroupedOptionsRendering,w as GroupedOptionsSelectFromGroup,B as GroupedOptionsVisualSnapshot,v as MixedGroupedAndUngrouped,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=Combobox.grouped.test.stories-DEDsstsL.js.map
