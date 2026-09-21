import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{D as s}from"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let c={title:"DatePicker",description:"DatePicker gjør det enklere for brukeren å oppgi riktig dato, særlig når datoen ligger nær i tid eller når det er nyttig å kunne se ukedager i valgprosessen.",icon:"/illustrations/datepicker.svg"},f={contents:[{heading:"bruk-datepicker-når",content:"brukeren skal velge en spesifikk dato, spesielt datoer nært i tid"},{heading:"bruk-datepicker-når",content:"det finnes begrensninger for hvilke datoer som kan velges"},{heading:"bruk-datepicker-når",content:"brukeren ikke kan forventes å huske datoer nøyaktig"},{heading:"bruk-datepicker-når",content:"det er nyttig at bruker kan se kalenderen og ukedager"},{heading:"unngå-datepicker-når",content:"brukeren skal velge datoer langt tilbake eller langt frem i tid"},{heading:"unngå-datepicker-når",content:"datoen er kjent, som fødselsdato – disse er ofte raskere å bare taste rett inn"},{heading:"unngå-datepicker-når",content:"brukeren kun skal velge årstall uten måned og dag"},{heading:"hvorfor-vi-anbefaler-dette",content:"DatePicker reduserer feil ved datoinnlegging fordi brukeren kan se kalender og unngår feil format. Det er spesielt nyttig for datoer nær i tid med komplekse begrensninger, eller når det er viktig å se ukedager."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi anbefaler TextField for datoer langt tilbake i tid (f.eks. fødselsdato) fordi en kalender krever mange klikk og er ineffektiv for slike tilfeller."},{heading:"plassering-og-justering",content:"Brukeren kan enten skrive inn dato direkte eller velge fra kalender."},{heading:"plassering-og-justering",content:"Feltet bør plasseres på områder der brukerens fokus naturlig ligger på tidsnære eller avgrensede valg."},{heading:"plassering-og-justering",content:"Ved bruk i oppsett med begrenset plass bør man sikre at kalenderen ikke kolliderer med øvrige elementer, og at den vises på en god måte. Å plassere DatePicker inni Modal kan føre til at brukeren må scrolle nedover i modalen for å se kalenderen."},{heading:"interaksjon-og-tilstander",content:'Brukeren kan skrive dato i flere vanlige skrivemåter, og komponenten vil automatisk forsøke å formatere til rett format. For eksempel vil "170526" formateres til "17.05.2026".'},{heading:"interaksjon-og-tilstander",content:"Kalenderen kan åpnes via kalenderknappen, ikke ved klikk i feltet."},{heading:"interaksjon-og-tilstander",content:"Datoer utenfor gyldig periode skal være utilgjengelige og grået ut."},{heading:"interaksjon-og-tilstander",content:"DatePicker har ikke en innebygd feilmelding for ugyldige datoer eller datoer utenfor grensene. Du må derfor selv vise en passende feilmelding når brukeren skriver inn en slik dato."},{heading:"tekst",content:"Ledetekst bør forklare eventuelle begrensninger, som periode eller start-/sluttdato."},{heading:"tekst",content:"Følg Skatteetatens skriveregler for datoformat."},{heading:"tilgjengelighet-uu-og-wcag",content:"Skjermleser annonserer datoer, antall treff og posisjon i kalenderen."},{heading:"tilgjengelighet-uu-og-wcag",content:"Begrensninger i valg av dager må kommuniseres i ledeteksten."},{heading:"tilgjengelighet-uu-og-wcag",content:"I tilfeller der datointervallet er stort kan DatePicker være lite effektiv — vurder TextField som alternativ."},{heading:"props",content:'<TypeTable of="DatePicker" />'}],headings:[{id:"bruk-datepicker-når",content:"Bruk DatePicker når"},{id:"unngå-datepicker-når",content:"Unngå DatePicker når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},h=[{depth:2,url:"#bruk-datepicker-når",title:e.jsx(e.Fragment,{children:"Bruk DatePicker når"})},{depth:2,url:"#unngå-datepicker-når",title:e.jsx(e.Fragment,{children:"Unngå DatePicker når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function d(r){const n={h2:"h2",h3:"h3",li:"li",ul:"ul",...r.components},{Canvas:i,TypeTable:l,WordInfoTerm:a}=n;return i||t("Canvas"),l||t("TypeTable"),a||t("WordInfoTerm"),e.jsxs(e.Fragment,{children:[e.jsx(i,{examplesPath:"components/datepicker"}),`
`,e.jsx(n.h2,{id:"bruk-datepicker-når",children:"Bruk DatePicker når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"brukeren skal velge en spesifikk dato, spesielt datoer nært i tid"}),`
`,e.jsx(n.li,{children:"det finnes begrensninger for hvilke datoer som kan velges"}),`
`,e.jsx(n.li,{children:"brukeren ikke kan forventes å huske datoer nøyaktig"}),`
`,e.jsx(n.li,{children:"det er nyttig at bruker kan se kalenderen og ukedager"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-datepicker-når",children:"Unngå DatePicker når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"brukeren skal velge datoer langt tilbake eller langt frem i tid"}),`
`,e.jsx(n.li,{children:"datoen er kjent, som fødselsdato – disse er ofte raskere å bare taste rett inn"}),`
`,e.jsx(n.li,{children:"brukeren kun skal velge årstall uten måned og dag"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"DatePicker reduserer feil ved datoinnlegging fordi brukeren kan se kalender og unngår feil format. Det er spesielt nyttig for datoer nær i tid med komplekse begrensninger, eller når det er viktig å se ukedager."}),`
`,e.jsx(n.li,{children:"Vi anbefaler TextField for datoer langt tilbake i tid (f.eks. fødselsdato) fordi en kalender krever mange klikk og er ineffektiv for slike tilfeller."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukeren kan enten skrive inn dato direkte eller velge fra kalender."}),`
`,e.jsx(n.li,{children:"Feltet bør plasseres på områder der brukerens fokus naturlig ligger på tidsnære eller avgrensede valg."}),`
`,e.jsx(n.li,{children:"Ved bruk i oppsett med begrenset plass bør man sikre at kalenderen ikke kolliderer med øvrige elementer, og at den vises på en god måte. Å plassere DatePicker inni Modal kan føre til at brukeren må scrolle nedover i modalen for å se kalenderen."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Brukeren kan skrive dato i flere vanlige skrivemåter, og komponenten vil automatisk forsøke å formatere til rett format. For eksempel vil "170526" formateres til "17.05.2026".'}),`
`,e.jsx(n.li,{children:"Kalenderen kan åpnes via kalenderknappen, ikke ved klikk i feltet."}),`
`,e.jsx(n.li,{children:"Datoer utenfor gyldig periode skal være utilgjengelige og grået ut."}),`
`,e.jsx(n.li,{children:"DatePicker har ikke en innebygd feilmelding for ugyldige datoer eller datoer utenfor grensene. Du må derfor selv vise en passende feilmelding når brukeren skriver inn en slik dato."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(a,{wordInfoKey:"ledetekst",children:"Ledetekst"})," bør forklare eventuelle begrensninger, som periode eller start-/sluttdato."]}),`
`,e.jsx(n.li,{children:"Følg Skatteetatens skriveregler for datoformat."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Skjermleser annonserer datoer, antall treff og posisjon i kalenderen."}),`
`,e.jsx(n.li,{children:"Begrensninger i valg av dager må kommuniseres i ledeteksten."}),`
`,e.jsx(n.li,{children:"I tilfeller der datointervallet er stort kan DatePicker være lite effektiv — vurder TextField som alternativ."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:s})]})}function p(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}function t(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default,c as frontmatter,f as structuredData,h as toc};
