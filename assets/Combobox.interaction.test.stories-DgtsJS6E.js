import{j as T,d as D}from"./iframe-B8GUhlLl.js";import{c as V}from"./index-C8bgUDlY.js";import{e as O,d as I}from"./index-ee2RFhIf.js";import{d as r}from"./combobox.test.utils-BVyp2Nw5.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePickerCalendar-PLUA6iCa.js";import"./index-I1QRqNj0.js";import"./index-BaKABx5v.js";import"./LabelWithHelp-Dpi57Wto.js";import"./Help-BlguQcoq.js";import"./Combobox.module-DRLQKUr5.js";import"./ComboboxButton-_x3P7a4_.js";import"./index-BMJe4OzN.js";import"./index-BQLODoD0.js";import"./ComboboxSelectedOptions-Ses0U7oF.js";import"./index-DTGjjx-m.js";import"./index-CQLLboVf.js";const{expect:t,userEvent:o,waitFor:u,within:l}=__STORYBOOK_MODULE_TEST__,ee={component:V,title:"Tester/Combobox/Interaction",tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},m={name:"Åpne dropdown og velg alternativ (A4)",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await t(e).toBeInTheDocument(),await t(e).toBeEnabled(),await o.click(e);const n=a.getAllByRole("option");await t(n).toHaveLength(3),await t(n[0]).toHaveTextContent("Norge"),await t(n[1]).toHaveTextContent("Sverige"),await t(n[2]).toHaveTextContent("Danmark"),await o.click(n[0]),await t(e).toHaveValue("Norge")}},v={name:"Tastaturnavigasjon med piltaster (B1)",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e),await o.keyboard("{Alt>}{ArrowDown}{/Alt}");const n=a.getAllByRole("option");await t(n).toHaveLength(3),await o.keyboard("{ArrowDown}"),await t(e).toHaveAttribute("aria-activedescendant"),await t(n[0]).toHaveAttribute("id",e.getAttribute("aria-activedescendant")),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await t(e).toHaveValue("Norge")}},g={name:"Søk og filtrering av alternativer (A5)",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);let n=a.getAllByRole("option");await t(n).toHaveLength(3),await o.type(e,"No"),n=a.getAllByRole("option"),await t(n).toHaveLength(1),await t(n[0]).toHaveTextContent("Norge"),await o.clear(e),await o.type(e,"Da"),n=a.getAllByRole("option"),await t(n).toHaveLength(1),await t(n[0]).toHaveTextContent("Danmark"),await o.clear(e),await o.type(e,"xyz");const s=a.queryAllByText(/ingen treff/i);s.length>0?await t(s[0]).toBeInTheDocument():(n=a.queryAllByRole("option"),await t(n).toHaveLength(0))}},d={name:"Escape key lukker dropdown (A5)",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);let n=a.getAllByRole("option");await t(n).toHaveLength(3),await o.keyboard("{Escape}"),n=a.queryAllByRole("option"),await t(n).toHaveLength(0),await t(e).toHaveFocus(),await o.type(e,"Nor"),await o.keyboard("{Alt>}{ArrowDown}{/Alt}"),n=a.getAllByRole("option"),await t(n).toHaveLength(1),await t(n[0]).toHaveTextContent("Norge"),await o.keyboard("{Escape}"),n=a.queryAllByRole("option"),await t(n).toHaveLength(0),await t(e).toHaveValue("Nor")}},w={name:"Klikk utenfor lukker dropdown (A5)",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);let n=a.getAllByRole("option");await t(n).toHaveLength(3),await o.click(i),await new Promise(s=>setTimeout(s,100)),n=a.queryAllByRole("option"),await t(n).toHaveLength(0),await t(e).not.toHaveFocus(),await o.click(e),n=a.getAllByRole("option"),await t(n).toHaveLength(3),await o.click(i),await new Promise(s=>setTimeout(s,100)),n=a.queryAllByRole("option"),await t(n).toHaveLength(0)}},h={name:"Tastaturfokus åpner ikke dropdown automatisk",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.tab(),await t(e).toHaveFocus(),await t(e).toHaveAttribute("aria-expanded","false"),await t(a.queryByRole("listbox")).not.toBeInTheDocument()}},y={name:"Musklikk åpner dropdown",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e),await t(e).toHaveFocus(),await t(e).toHaveAttribute("aria-expanded","true"),await t(a.getByRole("listbox")).toBeInTheDocument()}},k={name:'Min søkelengde viser "skriv minst x tegn" ved chevron-klikk',args:{...r,minSearchLength:3},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=i.querySelector('div[class*="chevronButton"]');await t(e).toBeInTheDocument(),await o.click(e),await t(a.queryByRole("listbox")).toBeInTheDocument(),await t(a.getByText(D.t("ds_forms:combobox.minSearchLengthText",{ant:3}))).toBeInTheDocument()}},b={name:'Min søkelengde viser "skriv minst x tegn" ved musklikk',args:{...r,minSearchLength:3},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);const n=()=>i.querySelector("div[data-chevron-button] svg path"),s=n();await t(s).toBeInTheDocument();const c=s?.getAttribute("d"),p=O.props.d;await t(c).toEqual(p),await u(()=>{t(a.getByText(D.t("ds_forms:combobox.minSearchLengthText",{ant:3}))).toBeInTheDocument()},{timeout:2e3});const L=n();await t(L).toBeInTheDocument();const C=L?.getAttribute("d"),P=I.props.d;await t(C).toEqual(P)}},x={name:'Min søkelengde viser "skriv minst x tegn" før terskel',args:{...r,minSearchLength:3},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e),await o.type(e,"ab"),await t(e).toHaveValue("ab"),await u(()=>{t(a.getByText(D.t("ds_forms:combobox.minSearchLengthText",{ant:3}))).toBeInTheDocument()},{timeout:2e3})}},E={name:"Gjenåpning viser alle alternativer med valgt markering",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);let n=a.getAllByRole("option");await o.click(n[1]),await t(e).toHaveValue("Sverige"),await o.click(e),n=a.getAllByRole("option"),await t(n).toHaveLength(3);const s=n.find(p=>p.textContent?.trim()==="Sverige");await t(s).toHaveAttribute("aria-selected","true");const c=s?.querySelector('svg[aria-hidden="true"]');await t(c).toBeInTheDocument()}},S={name:"Blur gjenoppretter sist valgte verdi i single-select",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);const n=a.getAllByRole("option");await o.click(n[1]),await t(e).toHaveValue("Sverige"),await o.type(e,"x"),await t(e).toHaveValue("Sverigex"),await o.click(i),await u(()=>{t(e).toHaveValue("Sverige")})}},B={name:"Blur etter delvis sletting gjenoppretter siste valg",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);const n=a.getAllByRole("option");await o.click(n[1]),await t(e).toHaveValue("Sverige"),await o.type(e,"{backspace}{backspace}"),await t(e).toHaveValue("Sveri"),await o.click(i),await u(()=>{t(e).toHaveValue("Sverige")})}},f={name:"Blur etter sletting av all tekst nullstiller valg",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);let n=a.getAllByRole("option");await o.click(n[1]),await t(e).toHaveValue("Sverige"),await o.clear(e),await t(e).toHaveValue(""),await o.click(i),await u(()=>{t(e).toHaveValue("")}),await o.click(e),n=a.getAllByRole("option");const s=n.filter(c=>c.getAttribute("aria-selected")==="true");await t(s).toHaveLength(0)}},A={name:"Blur tømmer fritekst uten valgt verdi",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const e=l(i).getByRole("combobox");await o.click(e),await o.type(e,"abc"),await t(e).toHaveValue("abc"),await o.click(i),await u(()=>{t(e).toHaveValue("")})}},H={name:"Valg i overlappende liste fokuserer ikke combobox under",args:{...r},render:()=>T.jsxs("div",{className:"width200",children:[T.jsx(V,{label:"Oveste combobox",options:r.options}),T.jsx(V,{label:"Nederste combobox",options:r.options})]}),parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox",{name:"Oveste combobox"}),n=a.getByRole("combobox",{name:"Nederste combobox"});await o.click(e);const s=a.getByRole("option",{name:"Sverige"});await o.click(s),await u(async()=>{await t(e).toHaveValue("Sverige")}),await t(n).not.toHaveFocus(),await t(n).toHaveAttribute("aria-expanded","false")}},R={name:"Nullstilling fjerner valgt markering",args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:i})=>{const a=l(i),e=a.getByRole("combobox");await o.click(e);let n=a.getAllByRole("option");await o.click(n[1]),await t(e).toHaveValue("Sverige"),await o.click(e),n=a.getAllByRole("option");let s=n.filter(p=>p.getAttribute("aria-selected")==="true");await t(s).toHaveLength(1);const c=i.querySelector("button[data-chevron-button]");await t(c).toBeInTheDocument(),await o.click(c),await t(e).toHaveValue(""),await o.click(e),n=a.getAllByRole("option"),s=n.filter(p=>p.getAttribute("aria-selected")==="true"),await t(s).toHaveLength(0)}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    await expect(options[0]).toHaveAttribute('id', inputElement.getAttribute('aria-activedescendant'));

    // Verifiser at vi kan navigere til neste option
    await userEvent.keyboard('{ArrowDown}');

    // Naviger opp igjen til første option
    await userEvent.keyboard('{ArrowUp}');

    // Velg med Enter
    await userEvent.keyboard('{Enter}');

    // Verifiser at valget er gjort
    await expect(inputElement).toHaveValue('Norge');
  }
} satisfies Story`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Tastaturfokus åpner ikke dropdown automatisk',
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

    // Fokus via tastatur skal ikke åpne dropdown automatisk
    await userEvent.tab();
    await expect(inputElement).toHaveFocus();
    await expect(inputElement).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
  }
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Musklikk åpner dropdown',
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

    // Klikk på input skal åpne dropdown automatisk
    await userEvent.click(inputElement);
    await expect(inputElement).toHaveFocus();
    await expect(inputElement).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('listbox')).toBeInTheDocument();
  }
} satisfies Story`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Min søkelengde viser "skriv minst x tegn" ved chevron-klikk',
  args: {
    ...defaultArgs,
    minSearchLength: 3
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
    const chevronButton = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevronButton).toBeInTheDocument();
    await userEvent.click(chevronButton as Element);
    await expect(canvas.queryByRole('listbox')).toBeInTheDocument();
    await expect(canvas.getByText(dsI18n.t('ds_forms:combobox.minSearchLengthText', {
      ant: 3
    }))).toBeInTheDocument();
  }
} satisfies Story`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Min søkelengde viser "skriv minst x tegn" ved musklikk',
  args: {
    ...defaultArgs,
    minSearchLength: 3
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
    const getChevronPath = (): SVGPathElement | null => canvasElement.querySelector('div[data-chevron-button] svg path');
    const chevronPathBeforeDelay = getChevronPath();
    await expect(chevronPathBeforeDelay).toBeInTheDocument();
    const chevronPathValueBeforeDelay = chevronPathBeforeDelay?.getAttribute('d');
    const chevronDownPath = ChevronDownSVGpath.props.d;
    await expect(chevronPathValueBeforeDelay).toEqual(chevronDownPath);
    await waitFor(() => {
      expect(canvas.getByText(dsI18n.t('ds_forms:combobox.minSearchLengthText', {
        ant: 3
      }))).toBeInTheDocument();
    }, {
      timeout: 2000
    });
    const chevronPathAfterDelay = getChevronPath();
    await expect(chevronPathAfterDelay).toBeInTheDocument();
    const chevronPathValueAfterDelay = chevronPathAfterDelay?.getAttribute('d');
    const chevronUpPath = ChevronUpSVGpath.props.d;
    await expect(chevronPathValueAfterDelay).toEqual(chevronUpPath);
  }
} satisfies Story`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Min søkelengde viser "skriv minst x tegn" før terskel',
  args: {
    ...defaultArgs,
    minSearchLength: 3
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
    await userEvent.type(inputElement, 'ab');
    await expect(inputElement).toHaveValue('ab');
    await waitFor(() => {
      expect(canvas.getByText(dsI18n.t('ds_forms:combobox.minSearchLengthText', {
        ant: 3
      }))).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  }
} satisfies Story`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Gjenåpning viser alle alternativer med valgt markering',
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

    // Åpne og velg alternativ
    await userEvent.click(inputElement);
    let options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');

    // Åpne igjen - hele listen skal vises
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Valgt alternativ skal være markert
    const selectedOption = options.find(option => option.textContent?.trim() === 'Sverige');
    await expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    const selectedIcon = selectedOption?.querySelector('svg[aria-hidden="true"]');
    await expect(selectedIcon).toBeInTheDocument();
  }
} satisfies Story`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Blur gjenoppretter sist valgte verdi i single-select',
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
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');
    await userEvent.type(inputElement, 'x');
    await expect(inputElement).toHaveValue('Sverigex');
    await userEvent.click(canvasElement);
    await waitFor(() => {
      expect(inputElement).toHaveValue('Sverige');
    });
  }
} satisfies Story`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Blur etter delvis sletting gjenoppretter siste valg',
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
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');
    await userEvent.type(inputElement, '{backspace}{backspace}');
    await expect(inputElement).toHaveValue('Sveri');
    await userEvent.click(canvasElement);
    await waitFor(() => {
      expect(inputElement).toHaveValue('Sverige');
    });
  }
} satisfies Story`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Blur etter sletting av all tekst nullstiller valg',
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
    await userEvent.click(inputElement);
    let options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');
    await userEvent.clear(inputElement);
    await expect(inputElement).toHaveValue('');
    await userEvent.click(canvasElement);
    await waitFor(() => {
      expect(inputElement).toHaveValue('');
    });
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    const selectedOptions = options.filter(option => option.getAttribute('aria-selected') === 'true');
    await expect(selectedOptions).toHaveLength(0);
  }
} satisfies Story`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Blur tømmer fritekst uten valgt verdi',
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
    await userEvent.click(inputElement);
    await userEvent.type(inputElement, 'abc');
    await expect(inputElement).toHaveValue('abc');
    await userEvent.click(canvasElement);
    await waitFor(() => {
      expect(inputElement).toHaveValue('');
    });
  }
} satisfies Story`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Valg i overlappende liste fokuserer ikke combobox under',
  args: {
    ...defaultArgs
  },
  render: (): JSX.Element => <div className={'width200'}>
      <Combobox label={'Oveste combobox'} options={defaultArgs.options} />
      <Combobox label={'Nederste combobox'} options={defaultArgs.options} />
    </div>,
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const topCombobox = canvas.getByRole('combobox', {
      name: 'Oveste combobox'
    });
    const bottomCombobox = canvas.getByRole('combobox', {
      name: 'Nederste combobox'
    });
    await userEvent.click(topCombobox);
    const topOption = canvas.getByRole('option', {
      name: 'Sverige'
    });
    await userEvent.click(topOption);
    await waitFor(async () => {
      await expect(topCombobox).toHaveValue('Sverige');
    });
    await expect(bottomCombobox).not.toHaveFocus();
    await expect(bottomCombobox).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Nullstilling fjerner valgt markering',
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

    // Velg ett alternativ først
    await userEvent.click(inputElement);
    let options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');

    // Sørg for at valgt markering vises
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    let selectedOptions = options.filter(option => option.getAttribute('aria-selected') === 'true');
    await expect(selectedOptions).toHaveLength(1);

    // Nullstill fra knapp i input
    const clearButton = canvasElement.querySelector('button[data-chevron-button]');
    await expect(clearButton).toBeInTheDocument();
    await userEvent.click(clearButton as Element);
    await expect(inputElement).toHaveValue('');

    // Åpne og verifiser at valgt markering er borte
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    selectedOptions = options.filter(option => option.getAttribute('aria-selected') === 'true');
    await expect(selectedOptions).toHaveLength(0);
  }
} satisfies Story`,...R.parameters?.docs?.source}}};const te=["SelectOptionInteraction","KeyboardNavigation","SearchFiltering","EscapeKeyBehavior","ClickOutsideToClose","KeyBoardFocusDoesNotOpen","MouseClickOpens","MinSearchLengthTextOnChevronClick","MinSearchLengthTextOnMouseClick","MinSearchLengthTextBeforeThreshold","ReopenShowsAllWithSelectedMark","BlurRevertsToLastSelectedValue","BlurAfterPartialDeleteRevertsToLastSelectedValue","BlurAfterDeletingAllTextClearsSelection","BlurClearsTypedTextWithoutSelection","SelectingOverlappingOptionDoesNotFocusUnderlyingCombobox","ClearRemovesSelectedMark"];export{f as BlurAfterDeletingAllTextClearsSelection,B as BlurAfterPartialDeleteRevertsToLastSelectedValue,A as BlurClearsTypedTextWithoutSelection,S as BlurRevertsToLastSelectedValue,R as ClearRemovesSelectedMark,w as ClickOutsideToClose,d as EscapeKeyBehavior,h as KeyBoardFocusDoesNotOpen,v as KeyboardNavigation,x as MinSearchLengthTextBeforeThreshold,k as MinSearchLengthTextOnChevronClick,b as MinSearchLengthTextOnMouseClick,y as MouseClickOpens,E as ReopenShowsAllWithSelectedMark,g as SearchFiltering,m as SelectOptionInteraction,H as SelectingOverlappingOptionDoesNotFocusUnderlyingCombobox,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Combobox.interaction.test.stories-DgtsJS6E.js.map
