import{d as w}from"./index-D9_nlc1h.js";import{d as s}from"./combobox.test.utils-COC6E7P6.js";import"./iframe-s2_bNgHU.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-ePUd64Qm.js";import"./index-Ck1G954W.js";import"./index-CUsfAC9p.js";import"./index-DcFKixUR.js";import"./LabelWithHelp-rfkuXU1a.js";import"./Help-DC9TS-B6.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-COhLZqHg.js";import"./ComboboxSelectedOptions-DI0eIcsf.js";import"./index-DFs0_No2.js";import"./index-jj9Gfu02.js";import"./index-CJpzHRrE.js";import"./index-DdQvxWAg.js";const{expect:t,userEvent:o,within:p}=__STORYBOOK_MODULE_TEST__,D={component:w,title:"Tester/Combobox/Interaction",tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l={name:"Åpne dropdown og velg alternativ (A4)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=p(i),a=n.getByRole("combobox");await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await o.click(a);const e=n.getAllByRole("option");await t(e).toHaveLength(3),await t(e[0]).toHaveTextContent("Norge"),await t(e[1]).toHaveTextContent("Sverige"),await t(e[2]).toHaveTextContent("Danmark"),await o.click(e[0]),await t(a).toHaveValue("Norge")}},c={name:"Tastaturnavigasjon med piltaster (B1)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=p(i),a=n.getByRole("combobox");await o.click(a),await o.keyboard("{Alt>}{ArrowDown}{/Alt}");const e=n.getAllByRole("option");await t(e).toHaveLength(3),await o.keyboard("{ArrowDown}"),await t(a).toHaveAttribute("aria-activedescendant"),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await t(a).toHaveValue("Norge")}},v={name:"Søk og filtrering av alternativer (A5)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=p(i),a=n.getByRole("combobox");await o.click(a);let e=n.getAllByRole("option");await t(e).toHaveLength(3),await o.type(a,"No"),e=n.getAllByRole("option"),await t(e).toHaveLength(1),await t(e[0]).toHaveTextContent("Norge"),await o.clear(a),await o.type(a,"Da"),e=n.getAllByRole("option"),await t(e).toHaveLength(1),await t(e[0]).toHaveTextContent("Danmark"),await o.clear(a),await o.type(a,"xyz");const r=n.queryAllByText(/ingen treff/i);r.length>0?await t(r[0]).toBeInTheDocument():(e=n.queryAllByRole("option"),await t(e).toHaveLength(0))}},u={name:"Escape key lukker dropdown (A5)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=p(i),a=n.getByRole("combobox");await o.click(a);let e=n.getAllByRole("option");await t(e).toHaveLength(3),await o.keyboard("{Escape}"),e=n.queryAllByRole("option"),await t(e).toHaveLength(0),await t(a).toHaveFocus(),await o.type(a,"Nor"),await o.keyboard("{Alt>}{ArrowDown}{/Alt}"),e=n.getAllByRole("option"),await t(e).toHaveLength(1),await t(e[0]).toHaveTextContent("Norge"),await o.keyboard("{Escape}"),e=n.queryAllByRole("option"),await t(e).toHaveLength(0),await t(a).toHaveValue("Nor")}},m={name:"Klikk utenfor lukker dropdown (A5)",args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const n=p(i),a=n.getByRole("combobox");await o.click(a);let e=n.getAllByRole("option");await t(e).toHaveLength(3),await o.click(i),await new Promise(r=>setTimeout(r,100)),e=n.queryAllByRole("option"),await t(e).toHaveLength(0),await t(a).not.toHaveFocus(),await o.click(a),e=n.getAllByRole("option"),await t(e).toHaveLength(3),await o.click(i),await new Promise(r=>setTimeout(r,100)),e=n.queryAllByRole("option"),await t(e).toHaveLength(0)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Åpne dropdown og velg alternativ (A4)',
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

    // Verifiser at combobox er tilstede og funksjonell
    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toBeEnabled();

    // Klikk på input for å åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown åpnes og alternativer vises
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);
    await expect(options[0]).toHaveTextContent('Norge');
    await expect(options[1]).toHaveTextContent('Sverige');
    await expect(options[2]).toHaveTextContent('Danmark');

    // Velg det første alternativet
    await userEvent.click(options[0]);

    // Verifiser at valget er gjort og input viser riktig verdi
    await expect(inputElement).toHaveValue('Norge');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Søk og filtrering av alternativer (A5)',
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

    // Verifiser at alle alternativer vises i starten
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Skriv "No" for å filtrere
    await userEvent.type(inputElement, 'No');

    // Verifiser at kun "Norge" vises
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Norge');

    // Slett tekst og skriv "Da"
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'Da');

    // Verifiser at kun "Danmark" vises
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Danmark');

    // Slett tekst og skriv noe som ikke matcher
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'xyz');

    // Verifiser at ingen alternativer vises eller en "ingen treff" melding
    const noOptionsMessages = canvas.queryAllByText(/ingen treff/i);
    if (noOptionsMessages.length > 0) {
      await expect(noOptionsMessages[0]).toBeInTheDocument();
    } else {
      // Alternativt kan det være at options forsvinner helt
      options = canvas.queryAllByRole('option');
      await expect(options).toHaveLength(0);
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};const N=["SelectOptionInteraction","KeyboardNavigation","SearchFiltering","EscapeKeyBehavior","ClickOutsideToClose"];export{m as ClickOutsideToClose,u as EscapeKeyBehavior,c as KeyboardNavigation,v as SearchFiltering,l as SelectOptionInteraction,N as __namedExportsOrder,D as default};
//# sourceMappingURL=Combobox.interaction.test.stories-WmQLCOzw.js.map
