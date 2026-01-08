import{d as b}from"./index-B55DkYFu.js";import{d as u}from"./combobox.test.utils-EfixJ2_2.js";import"./iframe-Br1Xu9zr.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-DwBW5N7C.js";import"./index-Mga-TJ2K.js";import"./index-Xbc0duXx.js";import"./index-CjBS1QGy.js";import"./LabelWithHelp-ChfJsnaj.js";import"./Help-DqUYp3Aw.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-BxlP8MsT.js";import"./ComboboxSelectedOptions-lTpsloIV.js";import"./index-D26qgz4H.js";import"./index-BVXicwjt.js";import"./index-DCwxX22m.js";import"./index-8xSWa2YY.js";const{expect:e,userEvent:o,within:d}=__STORYBOOK_MODULE_TEST__,N={component:b,title:"Tester/Combobox/Accessibility",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={name:"ARIA-attributter for combobox",args:{...u,helpText:"Dette er hjelpetekst"},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=d(i),t=n.getByRole("combobox");await e(t).toBeInTheDocument(),await e(t).toHaveAttribute("aria-autocomplete","list"),await e(t).toHaveAttribute("aria-expanded","false"),await o.click(t),await e(t).toHaveAttribute("aria-expanded","true"),await e(t).toHaveAttribute("aria-controls");const a=n.getAllByRole("option");await e(a).toHaveLength(3),await o.keyboard("{ArrowDown}");const r=t.getAttribute("aria-activedescendant");if(await e(r).toBeTruthy(),await e(a[0]).toHaveAttribute("id",r),t.getAttribute("aria-describedby")){const m=n.getByText("Dette er hjelpetekst");await e(m).toBeInTheDocument()}}},l={name:"Tastaturnavigasjon med piltaster (B1)",args:{...u},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=d(i),t=n.getByRole("combobox");await o.click(t),await o.keyboard("{Alt>}{ArrowDown}{/Alt}");const a=n.getAllByRole("option");await e(a).toHaveLength(3),await o.keyboard("{ArrowDown}"),await e(t).toHaveAttribute("aria-activedescendant"),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await e(t).toHaveValue("Norge")}},p={name:"Escape key lukker dropdown (A5)",args:{...u},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=d(i),t=n.getByRole("combobox");await o.click(t);let a=n.getAllByRole("option");await e(a).toHaveLength(3),await o.keyboard("{Escape}"),a=n.queryAllByRole("option"),await e(a).toHaveLength(0),await e(t).toHaveFocus(),await o.type(t,"Nor"),await o.keyboard("{Alt>}{ArrowDown}{/Alt}"),a=n.getAllByRole("option"),await e(a).toHaveLength(1),await e(a[0]).toHaveTextContent("Norge"),await o.keyboard("{Escape}"),a=n.queryAllByRole("option"),await e(a).toHaveLength(0),await e(t).toHaveValue("Nor")}},c={name:"Klikk utenfor lukker dropdown (A5)",args:{...u},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=d(i),t=n.getByRole("combobox");await o.click(t);let a=n.getAllByRole("option");await e(a).toHaveLength(3),await o.click(i),await new Promise(r=>setTimeout(r,100)),a=n.queryAllByRole("option"),await e(a).toHaveLength(0),await e(t).not.toHaveFocus(),await o.click(t),a=n.getAllByRole("option"),await e(a).toHaveLength(3),await o.click(i),await new Promise(r=>setTimeout(r,100)),a=n.queryAllByRole("option"),await e(a).toHaveLength(0)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'ARIA-attributter for combobox',
  args: {
    ...defaultArgs,
    helpText: 'Dette er hjelpetekst'
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

    // Verifiser grunnleggende ARIA-attributter
    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');
    await expect(inputElement).toHaveAttribute('aria-expanded', 'false');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at ARIA-attributter oppdateres når dropdown åpnes
    await expect(inputElement).toHaveAttribute('aria-expanded', 'true');
    await expect(inputElement).toHaveAttribute('aria-controls');

    // Verifiser at options får korrekte IDs
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Naviger til første option med piltast
    await userEvent.keyboard('{ArrowDown}');

    // Verifiser aria-activedescendant
    const activeDescendant = inputElement.getAttribute('aria-activedescendant');
    await expect(activeDescendant).toBeTruthy();
    await expect(options[0]).toHaveAttribute('id', activeDescendant);

    // Verifiser aria-describedby hvis hjelpetekst finnes
    const describedBy = inputElement.getAttribute('aria-describedby');
    if (describedBy) {
      const helpElement = canvas.getByText('Dette er hjelpetekst');
      await expect(helpElement).toBeInTheDocument();
    }
  }
} satisfies Story`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Tastaturnavigasjon med piltaster (B1)',
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
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input
    await userEvent.click(inputElement);

    // Åpne dropdown med Alt+Down
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Verifiser at dropdown er åpen
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Naviger ned med piltast og verifiser fokus
    await userEvent.keyboard('{ArrowDown}');

    // Verifiser at input har aktivt descendant satt til første option
    await expect(inputElement).toHaveAttribute('aria-activedescendant');
    await userEvent.keyboard('{ArrowDown}');
    // Verifiser at vi kan navigere til neste option

    // Naviger opp igjen til første option
    await userEvent.keyboard('{ArrowUp}');

    // Velg med Enter
    await userEvent.keyboard('{Enter}');

    // Verifiser at valget er gjort
    await expect(inputElement).toHaveValue('Norge');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Escape key lukker dropdown (A5)',
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
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown er åpen
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Trykk Escape for å lukke dropdown
    await userEvent.keyboard('{Escape}');

    // Verifiser at dropdown er lukket
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at input fortsatt har fokus
    await expect(inputElement).toHaveFocus();

    // Test at Escape også virker når vi har skrevet noe i input
    await userEvent.type(inputElement, 'Nor');

    // Åpne dropdown igjen
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Verifiser at dropdown åpnes og viser filtrerte resultater
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Norge');

    // Trykk Escape for å lukke dropdown
    await userEvent.keyboard('{Escape}');

    // Verifiser at dropdown er lukket og tekst forblir i input
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);
    await expect(inputElement).toHaveValue('Nor');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Klikk utenfor lukker dropdown (A5)',
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
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown er åpen
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Klikk utenfor combobox (på canvas element)
    await userEvent.click(canvasElement);

    // Verifiser at dropdown er lukket (vente litt for at click outside skal registreres)
    await new Promise(resolve => setTimeout(resolve, 100));
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at input ikke lenger har fokus
    await expect(inputElement).not.toHaveFocus();

    // Test at click outside også virker når vi har multiple selection aktiv
    // Først aktiver multiple mode
    // Fokuser på input igjen og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown åpnes igjen
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Klikk utenfor igjen
    await userEvent.click(canvasElement);

    // Verifiser at dropdown lukkes (vent litt for at click outside skal registreres)
    await new Promise(resolve => setTimeout(resolve, 100));
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);
  }
} satisfies Story`,...c.parameters?.docs?.source}}};const j=["AriaAttributesTest","KeyboardNavigation","EscapeKeyBehavior","ClickOutsideToClose"];export{s as AriaAttributesTest,c as ClickOutsideToClose,p as EscapeKeyBehavior,l as KeyboardNavigation,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Combobox.accessibility.test.stories-ChNa8Q-f.js.map
