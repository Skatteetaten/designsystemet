import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{W as i}from"./example-url-Sb4ZRO5r.js";import"./router-link-Bw__wKpt.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"WordInfo",description:"WordInfo brukes til å forklare ord og uttrykk direkte i løpende tekst. Komponenten gjør det mulig å gi forklaringer uten at brukeren trenger å navigere bort fra konteksten. Den senker terskelen for å forstå fagbegreper og øker leseflyt og tilgjengelighet.",icon:"/illustrations/wordinfo.svg"},m={contents:[{heading:"bruk-wordinfo-når",content:"du vil forklare fremmedord, faguttrykk eller begreper som kan være ukjente"},{heading:"bruk-wordinfo-når",content:"begrepet ikke er kritisk for å løse oppgaven, men hvor tilleggsinformasjon kan gi bedre forståelse"},{heading:"bruk-wordinfo-når",content:"du ønsker å forbedre lesbarheten uten å bryte flyten"},{heading:"unngå-wordinfo-når",content:"du skal forklare overskrifter — bruk heller hjelpetekstikon eller PopOver"},{heading:"unngå-wordinfo-når",content:"du skal forklare ledetekster i skjemafelt — bruk gode feltnavn, beskrivelsestekst eller hjelpetekster"},{heading:"unngå-wordinfo-når",content:"begrepet er så viktig at forklaringen bør vises direkte i teksten"},{heading:"hvorfor-vi-anbefaler-dette",content:"WordInfo skiller seg fra Popover fordi den er ment spesifikt for forklaring av ord i løpende tekst. Riktig komponentvalg gir riktig forventning og riktig semantikk for skjermlesere."},{heading:"hvorfor-vi-anbefaler-dette",content:"Komponenten er ikke ment for bruk i overskrifter. Overskrifter skal hjelpe brukeren med å finne fram i innholdet, mens komponenten tilfører en klikkbar handling som kan forstyrre navigasjonen og gjøre innholdet vanskeligere å skanne – spesielt for de som bruker hjelpemiddelteknologi."},{heading:"hvorfor-vi-anbefaler-dette",content:"Ikke for mange WordInfo-elementer i ett avsnitt fordi det fragmenterer leseopplevelsen og gjør det uklart hvilke begreper som faktisk er viktigst å forstå."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"WordInfo har ingen visuelle stilvarianter, men to hovedbruksmodi:"},{heading:"med-ikon-anbefalt",content:"Viser et informasjonsikon ved siden av ordet."},{heading:"med-ikon-anbefalt",content:"Klart signal om at ordet er klikkbart og skiller det fra vanlige lenker."},{heading:"med-ikon-anbefalt",content:"Anbefales i de fleste situasjoner."},{heading:"uten-ikon",content:"Kan brukes når mange ordforklaringer står tett i samme avsnitt, og ikonene tar for mye oppmerksomhet."},{heading:"uten-ikon",content:"Må brukes med varsomhet — interaktivitet må fortsatt være tydelig."},{heading:"plassering-og-justering",content:"WordInfo plasseres direkte i løpende tekst."},{heading:"plassering-og-justering",content:"Sørg for at komponenten står på et ord eller uttrykk der det er naturlig å klikke for mer informasjon."},{heading:"plassering-og-justering",content:"Unngå å bruke WordInfo på svært korte eller trivielle ord."},{heading:"interaksjon-og-tilstander",content:"Begrepet er klikkbart og åpner et forklaringspanel (via PopOver)."},{heading:"interaksjon-og-tilstander",content:"Ikonet er rent dekorativt og skjult for skjermleser — funksjonen kommuniseres semantisk i knappen."},{heading:"interaksjon-og-tilstander",content:"Panelet kan lukkes med klikk utenfor eller via ESC avhengig av PopOver‑logikken."},{heading:"tekst",content:"Bruk korte og presise forklaringer."},{heading:"tekst",content:"Ordene som merkes med WordInfo bør være begreper:"},{heading:"tekst",content:"som ikke kan omskrives naturlig i teksten"},{heading:"tekst",content:"som brukeren sannsynligvis ikke kjenner"},{heading:"tekst",content:"Unngå å bruke WordInfo på begreper som allerede er forklart i konteksten."},{heading:"tilgjengelighet-uu-og-wcag",content:"Knappen inneholder skjult beskrivende tekst for skjermlesere."},{heading:"tilgjengelighet-uu-og-wcag",content:"WordInfo med ikon anbefales for å tydeliggjøre interaktivitet visuelt."},{heading:"tilgjengelighet-uu-og-wcag",content:"Komponentens PopOver støtter `asSpan` slik at WordInfo kan brukes korrekt i blokkelementer som `<p>`."},{heading:"tilgjengelighet-uu-og-wcag",content:"Riktig HTML‑struktur må ivaretas:"},{heading:"tilgjengelighet-uu-og-wcag",content:"Ikke legg block‑elementer som `<h1>`–`<h6>`, `<div>`, `<section>` inne i inline‑elementer."},{heading:"props",content:'<TypeTable of="WordInfo" />'},{heading:"wordinfocontent",content:'<TypeTable of="WordInfo.Content" />'},{heading:"wordinfotrigger",content:'<TypeTable of="WordInfo.Trigger" />'}],headings:[{id:"bruk-wordinfo-når",content:"Bruk WordInfo når"},{id:"unngå-wordinfo-når",content:"Unngå WordInfo når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"med-ikon-anbefalt",content:"Med ikon (anbefalt)"},{id:"uten-ikon",content:"Uten ikon"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"wordinfocontent",content:"WordInfo.Content"},{id:"wordinfotrigger",content:"WordInfo.Trigger"}]},c=[{depth:2,url:"#bruk-wordinfo-når",title:e.jsx(e.Fragment,{children:"Bruk WordInfo når"})},{depth:2,url:"#unngå-wordinfo-når",title:e.jsx(e.Fragment,{children:"Unngå WordInfo når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#med-ikon-anbefalt",title:e.jsx(e.Fragment,{children:"Med ikon (anbefalt)"})},{depth:3,url:"#uten-ikon",title:e.jsx(e.Fragment,{children:"Uten ikon"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#wordinfocontent",title:e.jsx(e.Fragment,{children:"WordInfo.Content"})},{depth:3,url:"#wordinfotrigger",title:e.jsx(e.Fragment,{children:"WordInfo.Trigger"})}];function d(r){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r.components},{Canvas:l,TypeTable:t,WordInfoTerm:s}=n;return l||o("Canvas"),t||o("TypeTable"),s||o("WordInfoTerm"),e.jsxs(e.Fragment,{children:[e.jsx(l,{examplesPath:"components/wordinfo"}),`
`,e.jsx(n.h2,{id:"bruk-wordinfo-når",children:"Bruk WordInfo når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du vil forklare fremmedord, faguttrykk eller begreper som kan være ukjente"}),`
`,e.jsx(n.li,{children:"begrepet ikke er kritisk for å løse oppgaven, men hvor tilleggsinformasjon kan gi bedre forståelse"}),`
`,e.jsx(n.li,{children:"du ønsker å forbedre lesbarheten uten å bryte flyten"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-wordinfo-når",children:"Unngå WordInfo når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du skal forklare overskrifter — bruk heller hjelpetekstikon eller PopOver"}),`
`,e.jsxs(n.li,{children:["du skal forklare ",e.jsx(s,{wordInfoKey:"ledetekst",children:"ledetekster"})," i skjemafelt — bruk gode feltnavn, beskrivelsestekst eller hjelpetekster"]}),`
`,e.jsx(n.li,{children:"begrepet er så viktig at forklaringen bør vises direkte i teksten"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"WordInfo skiller seg fra Popover fordi den er ment spesifikt for forklaring av ord i løpende tekst. Riktig komponentvalg gir riktig forventning og riktig semantikk for skjermlesere."}),`
`,e.jsx(n.li,{children:"Komponenten er ikke ment for bruk i overskrifter. Overskrifter skal hjelpe brukeren med å finne fram i innholdet, mens komponenten tilfører en klikkbar handling som kan forstyrre navigasjonen og gjøre innholdet vanskeligere å skanne – spesielt for de som bruker hjelpemiddelteknologi."}),`
`,e.jsx(n.li,{children:"Ikke for mange WordInfo-elementer i ett avsnitt fordi det fragmenterer leseopplevelsen og gjør det uklart hvilke begreper som faktisk er viktigst å forstå."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"WordInfo har ingen visuelle stilvarianter, men to hovedbruksmodi:"}),`
`,e.jsx(n.h3,{id:"med-ikon-anbefalt",children:"Med ikon (anbefalt)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Viser et informasjonsikon ved siden av ordet."}),`
`,e.jsx(n.li,{children:"Klart signal om at ordet er klikkbart og skiller det fra vanlige lenker."}),`
`,e.jsx(n.li,{children:"Anbefales i de fleste situasjoner."}),`
`]}),`
`,e.jsx(n.h3,{id:"uten-ikon",children:"Uten ikon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Kan brukes når mange ordforklaringer står tett i samme avsnitt, og ikonene tar for mye oppmerksomhet."}),`
`,e.jsx(n.li,{children:"Må brukes med varsomhet — interaktivitet må fortsatt være tydelig."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"WordInfo plasseres direkte i løpende tekst."}),`
`,e.jsx(n.li,{children:"Sørg for at komponenten står på et ord eller uttrykk der det er naturlig å klikke for mer informasjon."}),`
`,e.jsx(n.li,{children:"Unngå å bruke WordInfo på svært korte eller trivielle ord."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Begrepet er klikkbart og åpner et forklaringspanel (via PopOver)."}),`
`,e.jsx(n.li,{children:"Ikonet er rent dekorativt og skjult for skjermleser — funksjonen kommuniseres semantisk i knappen."}),`
`,e.jsx(n.li,{children:"Panelet kan lukkes med klikk utenfor eller via ESC avhengig av PopOver‑logikken."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bruk korte og presise forklaringer."}),`
`,e.jsxs(n.li,{children:["Ordene som merkes med WordInfo bør være begreper:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"som ikke kan omskrives naturlig i teksten"}),`
`,e.jsx(n.li,{children:"som brukeren sannsynligvis ikke kjenner"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Unngå å bruke WordInfo på begreper som allerede er forklart i konteksten."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Knappen inneholder skjult beskrivende tekst for skjermlesere."}),`
`,e.jsx(n.li,{children:"WordInfo med ikon anbefales for å tydeliggjøre interaktivitet visuelt."}),`
`,e.jsxs(n.li,{children:["Komponentens PopOver støtter ",e.jsx(n.code,{children:"asSpan"})," slik at WordInfo kan brukes korrekt i blokkelementer som ",e.jsx(n.code,{children:"<p>"}),"."]}),`
`,e.jsxs(n.li,{children:["Riktig HTML‑struktur må ivaretas:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ikke legg block‑elementer som ",e.jsx(n.code,{children:"<h1>"}),"–",e.jsx(n.code,{children:"<h6>"}),", ",e.jsx(n.code,{children:"<div>"}),", ",e.jsx(n.code,{children:"<section>"})," inne i inline‑elementer."]}),`
`]}),`
`]}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h3,{id:"wordinfocontent",children:"WordInfo.Content"}),`
`,e.jsx(t,{of:i.Content}),`
`,e.jsx(n.h3,{id:"wordinfotrigger",children:"WordInfo.Trigger"}),`
`,e.jsx(t,{of:i.Trigger})]})}function j(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}function o(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,u as frontmatter,m as structuredData,c as toc};
