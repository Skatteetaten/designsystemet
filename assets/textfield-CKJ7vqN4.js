import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{z as a}from"./router-link-eakWayll.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let c={title:"TextField",description:"TextField brukes når brukeren skal skrive inn korte tekster eller tall. Det er et fleksibelt felt som fungerer godt i skjemaer der informasjonen ikke passer inn i forhåndsdefinerte valg, og hvor fritekst eller tall svarer best på behovet.",icon:"/illustrations/textfield.svg"},u={contents:[{heading:"bruk-textfield-når",content:"brukeren skal skrive korte fritekstsvar"},{heading:"bruk-textfield-når",content:"brukeren skal skrive tall, som beløp eller antall"},{heading:"bruk-textfield-når",content:"det er enklere for brukeren å skrive informasjon fremfor å velge fra liste"},{heading:"bruk-textfield-når",content:"svarene ikke følger strengt format, men likevel må kunne valideres"},{heading:"unngå-textfield-når",content:"teksten skal være formatert (for eksempel Markdown) — bruk da annen komponent"},{heading:"unngå-textfield-når",content:"valget er begrenset og forutsigbart — bruk RadioGroup, CheckboxGroup, Select eller Combobox"},{heading:"unngå-textfield-når",content:"svaret forventes å være lengre enn én linje — bruk TextArea"},{heading:"hvorfor-vi-anbefaler-dette",content:"Placeholder erstattes av label og beskrivelse fordi placeholderen forsvinner ved skriving — brukeren må da huske instruksjonen, noe som er krevende og dyrker feil."},{heading:"hvorfor-vi-anbefaler-dette",content:"`disabled` anbefales ikke fordi skjermlesere kan ignorere deaktiverte felt. `readOnly` er et bedre alternativ når feltet ikke skal redigeres, men verdien fortsatt skal sendes med."},{heading:"read-only",content:"Feltet er skrivebeskyttet og kan ikke endres."},{heading:"read-only",content:"Brukeren kan fortsatt navigere til feltet, markere og kopiere innhold."},{heading:"read-only",content:"Innholdet sendes inn med skjema — i motsetning til disabled‑felt."},{heading:"plassering-og-justering",content:"Ledetekst og beskrivelse skal alltid stå over feltet for god synlighet, også på små skjermer."},{heading:"plassering-og-justering",content:"Unngå at ledeteksten går over flere linjer — bruk beskrivelsesfeltet ved behov."},{heading:"plassering-og-justering",content:"Bruk hjelpetekst via spørsmålstegn‑ikon for mer detaljert veiledning."},{heading:"interaksjon-og-tilstander",content:"Autocomplete kan brukes:"},{heading:"interaksjon-og-tilstander",content:"På: for personlig informasjon (navn, adresse, søk)"},{heading:"interaksjon-og-tilstander",content:"Av: for ikke-personlig informasjon (virksomheter, beløp, datoer)"},{heading:"interaksjon-og-tilstander",content:"Ulike nettlesere har varierende støtte for autocomplete."},{heading:"interaksjon-og-tilstander",content:"Bruk passende `inputmode` som passer typen informasjon (`tel`, `search`, `email`, etc.)."},{heading:"tekst",content:"Ledetekst skal være konsis og meningsfull."},{heading:"tekst",content:"Bruk beskrivelse for å forklare detaljer."},{heading:"tekst",content:"Hjelpetekst kan brukes for lengre forklaringer."},{heading:"tekst",content:"Unngå spesialformuleringer som kan misforstås av brukeren."},{heading:"ikke-bruk-placeholder-tekst",content:"Placeholder‑tekst skal ikke brukes fordi:"},{heading:"ikke-bruk-placeholder-tekst",content:"Teksten forsvinner når brukeren begynner å skrive."},{heading:"ikke-bruk-placeholder-tekst",content:"Den er ofte usynlig for skjermlesere."},{heading:"ikke-bruk-placeholder-tekst",content:"Kontrastkravet (minst 4.5:1) gjør at placeholder ser fylt ut og kan forvirre brukeren. All nødvendig informasjon skal ligge i ledetekst og/eller beskrivelse."},{heading:"tilgjengelighet-uu-og-wcag",content:"Alle felter skal ha label eller aria‑label."},{heading:"tilgjengelighet-uu-og-wcag",content:"Ikke bruk placeholder som eneste informasjonsbærer."},{heading:"tilgjengelighet-uu-og-wcag",content:"Feilmelding vises under feltet og må ha tilstrekkelig kontrast (min. 4.5:1)."},{heading:"tilgjengelighet-uu-og-wcag",content:"Read‑only-felt skal være tilgjengelig for skjermlesere."},{heading:"tilgjengelighet-uu-og-wcag",content:"Bruk korrekt inputtype, men vær oppmerksom på klientsidevalidering i enkelte nettlesere."},{heading:"props",content:'<TypeTable of="TextField" />'}],headings:[{id:"bruk-textfield-når",content:"Bruk TextField når"},{id:"unngå-textfield-når",content:"Unngå TextField når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"read-only",content:"Read-only"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"ikke-bruk-placeholder-tekst",content:"Ikke bruk placeholder-tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},f=[{depth:2,url:"#bruk-textfield-når",title:e.jsx(e.Fragment,{children:"Bruk TextField når"})},{depth:2,url:"#unngå-textfield-når",title:e.jsx(e.Fragment,{children:"Unngå TextField når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#read-only",title:e.jsx(e.Fragment,{children:"Read-only"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#ikke-bruk-placeholder-tekst",title:e.jsx(e.Fragment,{children:"Ikke bruk placeholder-tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function o(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r.components},{Canvas:l,TypeTable:i,WordInfoTerm:s}=n;return l||t("Canvas"),i||t("TypeTable"),s||t("WordInfoTerm"),e.jsxs(e.Fragment,{children:[e.jsx(l,{examplesPath:"components/textfield"}),`
`,e.jsx(n.h2,{id:"bruk-textfield-når",children:"Bruk TextField når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"brukeren skal skrive korte fritekstsvar"}),`
`,e.jsx(n.li,{children:"brukeren skal skrive tall, som beløp eller antall"}),`
`,e.jsx(n.li,{children:"det er enklere for brukeren å skrive informasjon fremfor å velge fra liste"}),`
`,e.jsx(n.li,{children:"svarene ikke følger strengt format, men likevel må kunne valideres"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-textfield-når",children:"Unngå TextField når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"teksten skal være formatert (for eksempel Markdown) — bruk da annen komponent"}),`
`,e.jsxs(n.li,{children:["valget er begrenset og forutsigbart — bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/radiogroup",children:"RadioGroup"}),", ",e.jsx(n.a,{href:"/byggeklosser/komponenter/checkboxgroup",children:"CheckboxGroup"}),", ",e.jsx(n.a,{href:"/byggeklosser/komponenter/select",children:"Select"})," eller ",e.jsx(n.a,{href:"/byggeklosser/komponenter/combobox",children:"Combobox"})]}),`
`,e.jsxs(n.li,{children:["svaret forventes å være lengre enn én linje — bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/textarea",children:"TextArea"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Placeholder erstattes av label og beskrivelse fordi placeholderen forsvinner ved skriving — brukeren må da huske instruksjonen, noe som er krevende og dyrker feil."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," anbefales ikke fordi skjermlesere kan ignorere deaktiverte felt. ",e.jsx(n.code,{children:"readOnly"})," er et bedre alternativ når feltet ikke skal redigeres, men verdien fortsatt skal sendes med."]}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read-only"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Feltet er skrivebeskyttet og kan ikke endres."}),`
`,e.jsx(n.li,{children:"Brukeren kan fortsatt navigere til feltet, markere og kopiere innhold."}),`
`,e.jsx(n.li,{children:"Innholdet sendes inn med skjema — i motsetning til disabled‑felt."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(s,{wordInfoKey:"ledetekst",children:"Ledetekst"})," og beskrivelse skal alltid stå over feltet for god synlighet, også på små skjermer."]}),`
`,e.jsx(n.li,{children:"Unngå at ledeteksten går over flere linjer — bruk beskrivelsesfeltet ved behov."}),`
`,e.jsx(n.li,{children:"Bruk hjelpetekst via spørsmålstegn‑ikon for mer detaljert veiledning."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Autocomplete kan brukes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"På: for personlig informasjon (navn, adresse, søk)"}),`
`,e.jsx(n.li,{children:"Av: for ikke-personlig informasjon (virksomheter, beløp, datoer)"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Ulike nettlesere har varierende støtte for autocomplete."}),`
`,e.jsxs(n.li,{children:["Bruk passende ",e.jsx(n.code,{children:"inputmode"})," som passer typen informasjon (",e.jsx(n.code,{children:"tel"}),", ",e.jsx(n.code,{children:"search"}),", ",e.jsx(n.code,{children:"email"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ledetekst skal være konsis og meningsfull."}),`
`,e.jsx(n.li,{children:"Bruk beskrivelse for å forklare detaljer."}),`
`,e.jsx(n.li,{children:"Hjelpetekst kan brukes for lengre forklaringer."}),`
`,e.jsx(n.li,{children:"Unngå spesialformuleringer som kan misforstås av brukeren."}),`
`]}),`
`,e.jsx(n.h2,{id:"ikke-bruk-placeholder-tekst",children:"Ikke bruk placeholder-tekst"}),`
`,e.jsx(n.p,{children:"Placeholder‑tekst skal ikke brukes fordi:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Teksten forsvinner når brukeren begynner å skrive."}),`
`,e.jsx(n.li,{children:"Den er ofte usynlig for skjermlesere."}),`
`,e.jsx(n.li,{children:"Kontrastkravet (minst 4.5:1) gjør at placeholder ser fylt ut og kan forvirre brukeren. All nødvendig informasjon skal ligge i ledetekst og/eller beskrivelse."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Alle felter skal ha label eller aria‑label."}),`
`,e.jsx(n.li,{children:"Ikke bruk placeholder som eneste informasjonsbærer."}),`
`,e.jsx(n.li,{children:"Feilmelding vises under feltet og må ha tilstrekkelig kontrast (min. 4.5:1)."}),`
`,e.jsx(n.li,{children:"Read‑only-felt skal være tilgjengelig for skjermlesere."}),`
`,e.jsx(n.li,{children:"Bruk korrekt inputtype, men vær oppmerksom på klientsidevalidering i enkelte nettlesere."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:a})]})}function j(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function t(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,c as frontmatter,u as structuredData,f as toc};
