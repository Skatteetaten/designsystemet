import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{R as a}from"./example-url-DyvRJhlD.js";import"./router-link-eakWayll.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let v={title:"RolePicker",description:"RolePicker brukes i innloggede publikumstjenester når brukeren skal velge hvem de representerer — privatperson, virksomhet eller verge for andre. Komponenten sikrer at brukeren starter tjenesten i riktig rolle og skaper trygghet rundt hvilket ansvar og hvilke data som tilhører valgt representasjon.",icon:"/illustrations/rolepicker.svg"},u={contents:[{heading:"bruk-rolepicker-når",content:"brukeren har flere mulige representasjoner (privatperson, virksomheter, vergeroller)"},{heading:"bruk-rolepicker-når",content:"brukeren må velge rolle før tjenesten kan starte"},{heading:"bruk-rolepicker-når",content:"representasjonsvalg påvirker tilgjengelige data, oppgaver eller tillatelser"},{heading:"bruk-rolepicker-når",content:"brukeren skal kunne bytte representasjon i etterkant via toppbanneret"},{heading:"unngå-rolepicker-når",content:"løsningen er intern"},{heading:"unngå-rolepicker-når",content:"brukeren kun har én representasjon (privatperson) og ingen valg trengs"},{heading:"unngå-rolepicker-når",content:"valget allerede er tatt tidligere i tjenesteflyten og ikke skal endres"},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi tvinger brukeren til å velge representasjon før de starter tjenesten for å unngå at handlinger utføres på vegne av feil aktør. Det er enklere å velge riktig ved start enn å rette feil i etterkant."},{heading:"hvorfor-vi-anbefaler-dette",content:"Søkevariant vises ved ti eller flere representasjoner for å holde listen navigerbar. En lang liste uten søk er krevende for alle brukere, men særlig for de med hjelpemiddelteknologi."},{heading:"hvorfor-vi-anbefaler-dette",content:"Lukkekrysset skjules ved førstegangsvalg fordi brukeren må ta stilling til representasjonen før de går videre — å la dem avslutte uten valg skaper en udefinert tilstand i tjenesten."},{heading:"direkte-visning",content:"Brukes når brukeren har færre enn ti representasjoner."},{heading:"direkte-visning",content:"Viser alle valgene direkte i en liste uten søk."},{heading:"direkte-visning",content:"Egnet når oversikten skal være enkel og rask å forstå."},{heading:"søkevariant",content:"Brukes når brukeren har ti eller flere representasjoner."},{heading:"søkevariant",content:"Viser liste med mulighet for søk og filtrering."},{heading:"søkevariant",content:"Egnet for profesjonelle brukere, f.eks. regnskapsførere med mange virksomheter."},{heading:"plassering-og-justering",content:"Vises automatisk etter innlogging via ID-porten når et representasjonsvalg må tas."},{heading:"plassering-og-justering",content:"Når den vises ved innlogging:"},{heading:"plassering-og-justering",content:"Lukkekryss og avbrytknapp skjules for å sikre at brukeren fullfører valget før de går videre."},{heading:"plassering-og-justering",content:"Kan også åpnes fra toppbanneret når brukeren er inne i løsningen og ønsker å bytte rolle."},{heading:"interaksjon-og-tilstander",content:"Listen kan inneholde tre typer virksomheter:"},{heading:"interaksjon-og-tilstander",content:"**Aktive virksomheter**"},{heading:"interaksjon-og-tilstander",content:"**Avviklede virksomheter**, merket med ikon og tekst"},{heading:"interaksjon-og-tilstander",content:"**Underenheter**, merket med innrykk"},{heading:"interaksjon-og-tilstander",content:"Ved potensielt ugyldige valg (uklar tilgang) vises varselmelding."},{heading:"interaksjon-og-tilstander",content:"Hvis sjekk mot tilgang tar mer enn ett sekund:"},{heading:"interaksjon-og-tilstander",content:"Spinner vises for å signalisere at systemet jobber."},{heading:"interaksjon-og-tilstander",content:"Dersom tilganger ikke kan hentes:"},{heading:"interaksjon-og-tilstander",content:"En Alert vises over logg ut/avbryt-knapp."},{heading:"interaksjon-og-tilstander",content:"Dersom tjenesten kun er tilgjengelig for virksomheter:"},{heading:"interaksjon-og-tilstander",content:"En innebygd feilmelding vises dersom ingen virksomheter finnes."},{heading:"tekst",content:"Rollene skal presenteres med navn og forståelige betegnelser."},{heading:"tekst",content:"Avviklede virksomheter og underenheter skal merkes tydelig."},{heading:"tekst",content:"Språket skal være konsist og forklare valg uten juridiske eller tekniske uttrykk."},{heading:"tilgjengelighet-uu-og-wcag",content:"Opp til fire nivåer med overskrifter kan forekomme, avhengig av om underenheter/avviklede virksomheter listes."},{heading:"tilgjengelighet-uu-og-wcag",content:"Søkefunksjonen varsler skjermleser når resultatlisten oppdateres — både under skriving og ved ferdig søk."},{heading:"tilgjengelighet-uu-og-wcag",content:"Ved visning av utvidet liste settes fokus til siste tilgjengelige valg, slik at brukeren enkelt kan navigere videre med tastatur."},{heading:"tilgjengelighet-uu-og-wcag",content:"Alle valg må være tydelige og ha korrekt semantikk."},{heading:"props",content:'<TypeTable of="RolePicker" />'}],headings:[{id:"bruk-rolepicker-når",content:"Bruk RolePicker når"},{id:"unngå-rolepicker-når",content:"Unngå RolePicker når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"direkte-visning",content:"Direkte visning"},{id:"søkevariant",content:"Søkevariant"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},c=[{depth:2,url:"#bruk-rolepicker-når",title:e.jsx(e.Fragment,{children:"Bruk RolePicker når"})},{depth:2,url:"#unngå-rolepicker-når",title:e.jsx(e.Fragment,{children:"Unngå RolePicker når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#direkte-visning",title:e.jsx(e.Fragment,{children:"Direkte visning"})},{depth:3,url:"#søkevariant",title:e.jsx(e.Fragment,{children:"Søkevariant"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function s(r){const n={h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...r.components},{Canvas:t,TypeTable:i}=n;return t||l("Canvas"),i||l("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(t,{examplesPath:"components/rolepicker"}),`
`,e.jsx(n.h2,{id:"bruk-rolepicker-når",children:"Bruk RolePicker når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"brukeren har flere mulige representasjoner (privatperson, virksomheter, vergeroller)"}),`
`,e.jsx(n.li,{children:"brukeren må velge rolle før tjenesten kan starte"}),`
`,e.jsx(n.li,{children:"representasjonsvalg påvirker tilgjengelige data, oppgaver eller tillatelser"}),`
`,e.jsx(n.li,{children:"brukeren skal kunne bytte representasjon i etterkant via toppbanneret"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-rolepicker-når",children:"Unngå RolePicker når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"løsningen er intern"}),`
`,e.jsx(n.li,{children:"brukeren kun har én representasjon (privatperson) og ingen valg trengs"}),`
`,e.jsx(n.li,{children:"valget allerede er tatt tidligere i tjenesteflyten og ikke skal endres"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vi tvinger brukeren til å velge representasjon før de starter tjenesten for å unngå at handlinger utføres på vegne av feil aktør. Det er enklere å velge riktig ved start enn å rette feil i etterkant."}),`
`,e.jsx(n.li,{children:"Søkevariant vises ved ti eller flere representasjoner for å holde listen navigerbar. En lang liste uten søk er krevende for alle brukere, men særlig for de med hjelpemiddelteknologi."}),`
`,e.jsx(n.li,{children:"Lukkekrysset skjules ved førstegangsvalg fordi brukeren må ta stilling til representasjonen før de går videre — å la dem avslutte uten valg skaper en udefinert tilstand i tjenesten."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"direkte-visning",children:"Direkte visning"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes når brukeren har færre enn ti representasjoner."}),`
`,e.jsx(n.li,{children:"Viser alle valgene direkte i en liste uten søk."}),`
`,e.jsx(n.li,{children:"Egnet når oversikten skal være enkel og rask å forstå."}),`
`]}),`
`,e.jsx(n.h3,{id:"søkevariant",children:"Søkevariant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes når brukeren har ti eller flere representasjoner."}),`
`,e.jsx(n.li,{children:"Viser liste med mulighet for søk og filtrering."}),`
`,e.jsx(n.li,{children:"Egnet for profesjonelle brukere, f.eks. regnskapsførere med mange virksomheter."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vises automatisk etter innlogging via ID-porten når et representasjonsvalg må tas."}),`
`,e.jsxs(n.li,{children:["Når den vises ved innlogging:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lukkekryss og avbrytknapp skjules for å sikre at brukeren fullfører valget før de går videre."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Kan også åpnes fra toppbanneret når brukeren er inne i løsningen og ønsker å bytte rolle."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Listen kan inneholde tre typer virksomheter:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Aktive virksomheter"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avviklede virksomheter"}),", merket med ikon og tekst"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Underenheter"}),", merket med innrykk"]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Ved potensielt ugyldige valg (uklar tilgang) vises varselmelding."}),`
`,e.jsxs(n.li,{children:["Hvis sjekk mot tilgang tar mer enn ett sekund:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Spinner vises for å signalisere at systemet jobber."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Dersom tilganger ikke kan hentes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"En Alert vises over logg ut/avbryt-knapp."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Dersom tjenesten kun er tilgjengelig for virksomheter:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"En innebygd feilmelding vises dersom ingen virksomheter finnes."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rollene skal presenteres med navn og forståelige betegnelser."}),`
`,e.jsx(n.li,{children:"Avviklede virksomheter og underenheter skal merkes tydelig."}),`
`,e.jsx(n.li,{children:"Språket skal være konsist og forklare valg uten juridiske eller tekniske uttrykk."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Opp til fire nivåer med overskrifter kan forekomme, avhengig av om underenheter/avviklede virksomheter listes."}),`
`,e.jsx(n.li,{children:"Søkefunksjonen varsler skjermleser når resultatlisten oppdateres — både under skriving og ved ferdig søk."}),`
`,e.jsx(n.li,{children:"Ved visning av utvidet liste settes fokus til siste tilgjengelige valg, slik at brukeren enkelt kan navigere videre med tastatur."}),`
`,e.jsx(n.li,{children:"Alle valg må være tydelige og ha korrekt semantikk."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:a})]})}function j(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}function l(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,v as frontmatter,u as structuredData,c as toc};
