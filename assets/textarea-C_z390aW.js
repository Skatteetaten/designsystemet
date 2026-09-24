import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{y as a}from"./router-link-Bw__wKpt.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let h={title:"TextArea",description:"TextArea brukes når brukeren skal fylle inn fritekst som går over flere linjer. Det er et fleksibelt tekstfelt som egner seg for åpne svar, beskrivelser, forklaringer og informasjon som ikke lar seg begrense til én linje.",icon:"/illustrations/textarea.svg"},c={contents:[{heading:"bruk-textarea-når",content:"brukeren skal skrive inn lengre tekster"},{heading:"bruk-textarea-når",content:"innholdet er åpent, ustrukturert eller beskrivende"},{heading:"bruk-textarea-når",content:"svarlengden er ukjent eller kan variere betydelig"},{heading:"unngå-textarea-når",content:"dataene er korte eller strukturerte (navn, dato, fødselsnummer) — bruk TextField i stedet"},{heading:"unngå-textarea-når",content:"formatert tekst (f.eks. Markdown) er nødvendig"},{heading:"unngå-textarea-når",content:"brukeren skal velge et forhåndsdefinert alternativ"},{heading:"hvorfor-vi-anbefaler-dette",content:"Placeholder forsvinner når brukeren begynner å skrive, og all nødvendig informasjon må derfor uansett stille i label og beskrivelse. Å bruke placeholder i tillegg er dermed redundant og kan være forvirrende."},{heading:"hvorfor-vi-anbefaler-dette",content:"`readOnly` skilles fra `disabled` fordi `readOnly`-innhold fortsatt sendes med skjemaet og er tilgjengelig for skjermlesere — viktig for korrekt datainnsamling."},{heading:"hvorfor-vi-anbefaler-dette",content:"Fritekst-svar er krevende å validere og behandle. Vi styrer brukeren mot kortere, strukturerte felt når det er mulig, og bruker TextArea bare når åpent svar er nødvendig."},{heading:"standard-skrivefelt",content:"Brukes som vanlig i skjema der fritekst ønskes."},{heading:"read-only",content:"Når brukeren skal lese, men ikke redigere, innholdet."},{heading:"read-only",content:"Feltet kan fortsatt fokuseres, markeres og kopieres."},{heading:"read-only",content:"Innhold i read‑only felt sendes inn med skjema, i motsetning til disabled‑felter."},{heading:"plassering-og-justering",content:"Ledetekst og beskrivelse skal alltid plasseres over feltet."},{heading:"plassering-og-justering",content:"Unngå ledetekster som går over flere linjer — bruk beskrivelsesfeltet til utvidet forklaring."},{heading:"plassering-og-justering",content:"Legg lengre veiledning i en hjelpetekst bak spørsmålstegn‑ikonet (hjelpetekst-mønster)."},{heading:"interaksjon-og-tilstander",content:"Feltet vokser etter innhold dersom komponenten tillater det."},{heading:"interaksjon-og-tilstander",content:"Feilmelding skal vises rett under feltet."},{heading:"interaksjon-og-tilstander",content:"Read-only felt inngår i innsending; disabled gjør det ikke."},{heading:"tekst",content:"Ledetekst skal være kort og presis."},{heading:"tekst",content:"Beskrivelse skal brukes til å forklare hva brukeren skal gjøre."},{heading:"tekst",content:"Unngå placeholder‑tekst — se eget avsnitt under."},{heading:"ikke-bruk-placeholder-tekst",content:"Komponenten fraråder bruk av placeholder‑tekst fordi:"},{heading:"ikke-bruk-placeholder-tekst",content:"placeholder forsvinner når brukeren begynner å skrive, og må derfor uansett gjentas i label/beskrivelse."},{heading:"ikke-bruk-placeholder-tekst",content:"kontrastkravet (minst 4.5:1) gjør at placeholder må være mørkere — brukere kan tro feltet allerede er utfylt."},{heading:"ikke-bruk-placeholder-tekst",content:"placeholder‑tekst er ofte utilgjengelig for skjermlesere."},{heading:"ikke-bruk-placeholder-tekst",content:"All nødvendig informasjon skal ligge i ledetekst og beskrivelse, ikke placeholder."},{heading:"tilgjengelighet-uu-og-wcag",content:"TextArea må alltid ha ledetekst (label eller aria‑label)."},{heading:"tilgjengelighet-uu-og-wcag",content:"Label skal ikke være identisk med placeholder hvis placeholder brukes unntaksvis."},{heading:"tilgjengelighet-uu-og-wcag",content:`Feilmeldinger vises tett ved feltet og må ha tilstrekkelig kontrast (min. 4.5:1).\\
Dette er oppfylt som standard.`},{heading:"tilgjengelighet-uu-og-wcag",content:"Read-only felt må fortsatt være semantisk korrekte og kunne leses av skjermleser."},{heading:"props",content:'<TypeTable of="TextArea" />'}],headings:[{id:"bruk-textarea-når",content:"Bruk TextArea når"},{id:"unngå-textarea-når",content:"Unngå TextArea når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"standard-skrivefelt",content:"Standard (skrivefelt)"},{id:"read-only",content:"Read-only"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"ikke-bruk-placeholder-tekst",content:"Ikke bruk placeholder-tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},u=[{depth:2,url:"#bruk-textarea-når",title:e.jsx(e.Fragment,{children:"Bruk TextArea når"})},{depth:2,url:"#unngå-textarea-når",title:e.jsx(e.Fragment,{children:"Unngå TextArea når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#standard-skrivefelt",title:e.jsx(e.Fragment,{children:"Standard (skrivefelt)"})},{depth:3,url:"#read-only",title:e.jsx(e.Fragment,{children:"Read-only"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#ikke-bruk-placeholder-tekst",title:e.jsx(e.Fragment,{children:"Ikke bruk placeholder-tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function i(n){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...n.components},{Canvas:t,TypeTable:l}=r;return t||s("Canvas"),l||s("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(t,{examplesPath:"components/textarea"}),`
`,e.jsx(r.h2,{id:"bruk-textarea-når",children:"Bruk TextArea når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"brukeren skal skrive inn lengre tekster"}),`
`,e.jsx(r.li,{children:"innholdet er åpent, ustrukturert eller beskrivende"}),`
`,e.jsx(r.li,{children:"svarlengden er ukjent eller kan variere betydelig"}),`
`]}),`
`,e.jsx(r.h2,{id:"unngå-textarea-når",children:"Unngå TextArea når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["dataene er korte eller strukturerte (navn, dato, fødselsnummer) — bruk ",e.jsx(r.a,{href:"/byggeklosser/komponenter/textfield",children:"TextField"})," i stedet"]}),`
`,e.jsx(r.li,{children:"formatert tekst (f.eks. Markdown) er nødvendig"}),`
`,e.jsx(r.li,{children:"brukeren skal velge et forhåndsdefinert alternativ"}),`
`]}),`
`,e.jsx(r.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Placeholder forsvinner når brukeren begynner å skrive, og all nødvendig informasjon må derfor uansett stille i label og beskrivelse. Å bruke placeholder i tillegg er dermed redundant og kan være forvirrende."}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"readOnly"})," skilles fra ",e.jsx(r.code,{children:"disabled"})," fordi ",e.jsx(r.code,{children:"readOnly"}),"-innhold fortsatt sendes med skjemaet og er tilgjengelig for skjermlesere — viktig for korrekt datainnsamling."]}),`
`,e.jsx(r.li,{children:"Fritekst-svar er krevende å validere og behandle. Vi styrer brukeren mot kortere, strukturerte felt når det er mulig, og bruker TextArea bare når åpent svar er nødvendig."}),`
`]}),`
`,e.jsx(r.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(r.h3,{id:"standard-skrivefelt",children:"Standard (skrivefelt)"}),`
`,e.jsx(r.p,{children:"Brukes som vanlig i skjema der fritekst ønskes."}),`
`,e.jsx(r.h3,{id:"read-only",children:"Read-only"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Når brukeren skal lese, men ikke redigere, innholdet."}),`
`,e.jsx(r.li,{children:"Feltet kan fortsatt fokuseres, markeres og kopieres."}),`
`,e.jsx(r.li,{children:"Innhold i read‑only felt sendes inn med skjema, i motsetning til disabled‑felter."}),`
`]}),`
`,e.jsx(r.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Ledetekst og beskrivelse skal alltid plasseres over feltet."}),`
`,e.jsx(r.li,{children:"Unngå ledetekster som går over flere linjer — bruk beskrivelsesfeltet til utvidet forklaring."}),`
`,e.jsx(r.li,{children:"Legg lengre veiledning i en hjelpetekst bak spørsmålstegn‑ikonet (hjelpetekst-mønster)."}),`
`]}),`
`,e.jsx(r.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Feltet vokser etter innhold dersom komponenten tillater det."}),`
`,e.jsx(r.li,{children:"Feilmelding skal vises rett under feltet."}),`
`,e.jsx(r.li,{children:"Read-only felt inngår i innsending; disabled gjør det ikke."}),`
`]}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Ledetekst skal være kort og presis."}),`
`,e.jsx(r.li,{children:"Beskrivelse skal brukes til å forklare hva brukeren skal gjøre."}),`
`,e.jsx(r.li,{children:"Unngå placeholder‑tekst — se eget avsnitt under."}),`
`]}),`
`,e.jsx(r.h2,{id:"ikke-bruk-placeholder-tekst",children:"Ikke bruk placeholder-tekst"}),`
`,e.jsx(r.p,{children:"Komponenten fraråder bruk av placeholder‑tekst fordi:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"placeholder forsvinner når brukeren begynner å skrive, og må derfor uansett gjentas i label/beskrivelse."}),`
`,e.jsx(r.li,{children:"kontrastkravet (minst 4.5:1) gjør at placeholder må være mørkere — brukere kan tro feltet allerede er utfylt."}),`
`,e.jsx(r.li,{children:"placeholder‑tekst er ofte utilgjengelig for skjermlesere."}),`
`]}),`
`,e.jsx(r.p,{children:"All nødvendig informasjon skal ligge i ledetekst og beskrivelse, ikke placeholder."}),`
`,e.jsx(r.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"TextArea må alltid ha ledetekst (label eller aria‑label)."}),`
`,e.jsx(r.li,{children:"Label skal ikke være identisk med placeholder hvis placeholder brukes unntaksvis."}),`
`,e.jsxs(r.li,{children:["Feilmeldinger vises tett ved feltet og må ha tilstrekkelig kontrast (min. 4.5:1).",e.jsx(r.br,{}),`
`,"Dette er oppfylt som standard."]}),`
`,e.jsx(r.li,{children:"Read-only felt må fortsatt være semantisk korrekte og kunne leses av skjermleser."}),`
`]}),`
`,`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:a})]})}function j(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}function s(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,h as frontmatter,c as structuredData,u as toc};
