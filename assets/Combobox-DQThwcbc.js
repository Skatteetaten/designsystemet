import{j as e}from"./iframe-VHQh6taY.js";import{useMDXComponents as l}from"./index-CQqiVeBm.js";import{M as s,P as a,C as i}from"./WithTooltip-SK46ZJ2J-Bg2alfyC.js";import{P as r}from"./utils-CYxPs9RB.js";import{C as m,S as c,M as d,W as h,a as u,b as p}from"./Combobox.stories-CDFo9RR6.js";import{V as g}from"./VersionBadge-Gts-sC0t.js";import{D as x}from"./DocIntro-Bbe2zWe5.js";import{D as k}from"./DocHeaderWrapper-DydI0LU6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1tDoD4z.js";import"./index-CPemCIdg.js";import"./index-C6ntdsyl.js";import"./lz-string-m9jzapWX.js";import"./index-lB78RBB2.js";import"./DatePickerCalendar-fvOeZNLZ.js";import"./index-C8wxqHpZ.js";import"./index-Di_7ammq.js";import"./index-DALzD4Pw.js";import"./LabelWithHelp-By58SB7B.js";import"./Help-DcN2X4V-.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-DM_xyLsF.js";import"./ComboboxSelectedOptions-BxHsyaCT.js";import"./index-DgU9os4N.js";import"./index-CEjXTNb1.js";import"./index-Don9wpRQ.js";import"./index-BJkQPiPu.js";import"./icon.systems-pjRjKMCZ.js";import"./icon.utils-BES2EtCM.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsxs(k,{componentName:"Combobox",children:[e.jsx(n.h1,{id:"combobox",children:"Combobox"}),e.jsx(g,{packageName:"forms"}),e.jsx(x,{url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/Combobox/"})]}),`
`,e.jsx(n.p,{children:"Combobox er en interaktiv komponent som kombinerer funksjonaliteten til en dropdown og et tekstfelt. Brukere kan enten velge fra en liste med forhåndsdefinerte alternativer eller skrive inn egen tekst for å filtrere og søke gjennom alternativene."}),`
`,e.jsx(n.p,{children:"Komponenten støtter både enkelt- og flervalg, og kan brukes i både kontrollert og ukontrollert modus."}),`
`,e.jsx(a,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Combobox } from '@skatteetaten/ds-forms';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"event-handlers",children:"Event Handlers"}),`
`,e.jsx(n.p,{children:"Combobox tilbyr flere event handlers for å håndtere brukerinteraksjon:"}),`
`,e.jsx(n.h3,{id:"onselectionchange",children:"onSelectionChange"}),`
`,e.jsx(n.p,{children:"Kalles når brukeren endrer valget sitt. Parameteren varierer basert på modus:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Enkeltvalg - mottar ComboboxOption | null
<Combobox
  onSelectionChange={(option) => {
    console.log('Valgt:', option?.label); // "Valgt: Norge" eller null
  }}
/>

// Flervalg - mottar ComboboxOption[]
<Combobox
  multiple
  onSelectionChange={(options) => {
    console.log('Antall valgte:', options.length);
    console.log('Valgte verdier:', options.map(o => o.value));
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"oninputchange",children:"onInputChange"}),`
`,e.jsx(n.p,{children:"Kalles når input-teksten endres (kun i ukontrollert modus). Nyttig for asynkron søk:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Combobox
  onInputChange={(inputValue) => {
    console.log('Søketekst:', inputValue);
    // Utfør asynkron søk basert på inputValue
    searchAsync(inputValue).then(setFilteredOptions);
  }}
/>
`})}),`
`,e.jsx(n.h4,{id:"asynkron-søk-i-kontrollert-modus",children:"Asynkron søk i kontrollert modus"}),`
`,e.jsxs(n.p,{children:["I kontrollert modus har du ikke tilgang til ",e.jsx(n.code,{children:"onInputChange"}),", men kan fortsatt implementere asynkron søk ved å bruke TanStack Query (anbefalt):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const SearchCombobox = () => {
  const [searchValue, setSearchValue] = useState('');

  // TanStack Query håndterer caching, deduplication og error states
  const { data: options = [], isLoading } = useQuery({
    queryKey: ['combobox-search', searchValue],
    queryFn: () => searchAPI(searchValue),
    enabled: !!searchValue,
    staleTime: 5 * 60 * 1000, // Cache i 5 minutter
  });

  return (
    <Combobox
      label="Søk i database"
      value={searchValue}
      options={options}
      isLoading={isLoading}
      onSelectionChange={(option) => {
        if (option) {
          setSearchValue(option.value);
          handleSelection(option);
        }
      }}
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"onhelptoggle",children:"onHelpToggle"}),`
`,e.jsx(n.p,{children:"Kalles når hjelpeteksten åpnes eller lukkes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Combobox
  helpText="Dette er hjelpetekst"
  onHelpToggle={(isOpen) => {
    console.log('Hjelpetekst er', isOpen ? 'åpen' : 'lukket');
    // Spor bruk av hjelpefunksjonalitet
    analytics.track('help_toggled', { component: 'combobox', isOpen });
  }}
/>
`})}),`
`,e.jsx(n.h2,{id:"bruksmønstre",children:"Bruksmønstre"}),`
`,e.jsx(n.h3,{id:"enkeltvalg-single-select",children:"Enkeltvalg (Single Select)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Kontrollert modus - du styrer verdien selv
<Combobox
  label="Velg land"
  options={countryOptions}
  value={selectedCountry}
  onSelectionChange={(option) => {
    // option er ComboboxOption | null
    setSelectedCountry(option?.value || '');
    console.log('Nytt valg:', option?.label);
  }}
/>

// Ukontrollert modus - komponenten styrer sin egen tilstand
<Combobox
  label="Velg land"
  options={countryOptions}
  onSelectionChange={(option) => {
    // Kun for overvåking/logging av valg
    console.log('Bruker valgte:', option?.label);
    analytics.track('country_selected', { country: option?.value });
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"flervalg-multi-select",children:"Flervalg (Multi Select)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Combobox
  multiple
  label="Velg kommuner"
  options={municipalityOptions}
  value={selectedMunicipalities}
  onSelectionChange={(options) => {
    // options er ComboboxOption[] array
    const values = options.map((o) => o.value);
    setSelectedMunicipalities(values);

    // Vis bruker feedback
    console.log(\`\${options.length} kommuner valgt\`);
    if (options.length >= 5) {
      showMessage('Maksimalt antall kommuner valgt');
    }
  }}
  maxSelected={5}
/>
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"enkeltvalg",children:"Enkeltvalg"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"flervalg",children:"Flervalg"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h3,{id:"med-skjemavalidering",children:"Med skjemavalidering"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"begrenset-antall-valg",children:"Begrenset antall valg"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"skjemaeksempel",children:"Skjemaeksempel"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"react-hook-form-integrasjon",children:"React Hook Form integrasjon"}),`
`,e.jsxs(n.p,{children:["Combobox kan enkelt integreres med react-hook-form ved å bruke ",e.jsx(n.code,{children:"Controller"})," komponenten. Dette er nødvendig fordi Combobox bruker ikke-standard prop-navn (",e.jsx(n.code,{children:"onSelectionChange"})," i stedet for ",e.jsx(n.code,{children:"onChange"}),")."]}),`
`,e.jsx(n.h3,{id:"hvorfor-controller-er-nødvendig",children:"Hvorfor Controller er nødvendig"}),`
`,e.jsx(n.p,{children:"React Hook Form forventer standard HTML form-konvensjoner, men Combobox har :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onSelectionChange"})," (i stedet for ",e.jsx(n.code,{children:"onChange"}),")"]}),`
`,e.jsxs(n.li,{children:["Sender ",e.jsx(n.code,{children:"ComboboxOption"})," objekter (i stedet for primitive verdier)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Det har vi gjort for å unngå navneforvirring gjennom å gjøre API-et mer beskrivende."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Controller"})," gjør det mulig å mappe mellom react-hook-form sitt API og Combobox sitt API."]}),`
`,e.jsx(n.h3,{id:"enkeltvalg-med-react-hook-form",children:"Enkeltvalg med react-hook-form"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Controller, useForm } from 'react-hook-form';
import { Combobox } from '@skatteetaten/ds-forms';

const MyForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      vegetable: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Valgt grønnsak:', data.vegetable);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="vegetable"
        control={control}
        rules={{ required: 'Du må velge en grønnsak' }}
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <Combobox
            name={name}
            label="Velg grønnsak"
            value={value}
            options={vegetableOptions}
            errorMessage={error?.message}
            onSelectionChange={(option) => onChange(option?.value || '')}
          />
        )}
      />
    </form>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"flervalg-med-react-hook-form",children:"Flervalg med react-hook-form"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Controller, useForm } from 'react-hook-form';
import { Combobox } from '@skatteetaten/ds-forms';

const MyForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fruits: [],
    },
  });

  const onSubmit = (data) => {
    console.log('Valgte frukter:', data.fruits);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fruits"
        control={control}
        rules={{
          validate: (value) => value.length > 0 || 'Du må velge minst én frukt',
        }}
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <Combobox
            name={name}
            label="Velg frukter"
            value={value}
            options={fruitOptions}
            errorMessage={error?.message}
            multiple
            onSelectionChange={(options) =>
              onChange(options.map((opt) => opt.value))
            }
          />
        )}
      />
    </form>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"api-søk-med-debouncing-i-react-hook-form",children:"API-søk med debouncing i react-hook-form"}),`
`,e.jsxs(n.p,{children:["For API-søk kan du kombinere ",e.jsx(n.code,{children:"onInputChange"})," med ",e.jsx(n.code,{children:"minSearchLength"})," for å unngå for mange kall. Her er et eksempel med debouncing:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Controller, useForm } from 'react-hook-form';
import { Combobox } from '@skatteetaten/ds-forms';
import { useState } from 'react';

const MyForm = () => {
  const { control } = useForm({
    defaultValues: { user: '' },
  });

  const [searchResults, setSearchResults] = useState([]);

  // Mock API-funksjon
  const searchUsers = async (searchTerm) => {
    const response = await fetch(\`/api/users?search=\${searchTerm}\`);
    return response.json();
  };

  return (
    <Controller
      name="user"
      control={control}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => {
        let debounceTimer;

        return (
          <Combobox
            name={name}
            label="Søk etter bruker"
            value={value}
            options={[...userOptions, ...searchResults]}
            errorMessage={error?.message}
            minSearchLength={2}
            onSelectionChange={(option) => onChange(option?.value || '')}
            onInputChange={(searchTerm) => {
              clearTimeout(debounceTimer);
              debounceTimer = setTimeout(() => {
                if (searchTerm.length >= 2) {
                  searchUsers(searchTerm).then(setSearchResults);
                }
              }, 300);
            }}
          />
        );
      }}
    />
  );
};
`})})]})}function X(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{X as default};
//# sourceMappingURL=Combobox-DQThwcbc.js.map
