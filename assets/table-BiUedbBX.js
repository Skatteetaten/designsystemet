import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{T as l}from"./example-url-BKrDq6Gr.js";import"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let k={title:"Table",description:"Table brukes for å organisere og presentere data på en strukturert måte i rekker og kolonner. Tabellen gjør det enkelt å sammenligne data og gir brukeren oversikt når informasjonen naturlig hører sammen i et tabellformat.",icon:"/illustrations/table.svg"},b={contents:[{heading:"bruk-table-når",content:"du skal vise data som egner seg for sammenligning i rader og kolonner"},{heading:"bruk-table-når",content:"informasjonen kan struktureres som en datasamling med tydelige attributter"},{heading:"bruk-table-når",content:"tabellariske data er mest effektiv måte å formidle innholdet på"},{heading:"unngå-table-når",content:"du skal strukturere generelt innhold på en side — bruk riktig sidelayout-komponent"},{heading:"unngå-table-når",content:"du har store mengder data på mobil, der tabeller kan bli vanskelige å lese og krever horisontal scrolling"},{heading:"hvorfor-vi-anbefaler-dette",content:"Tabeller er sterke for sammenligning av strukturerte data, men svake for lange fritekster. Å styre bruk mot korte celler gir bedre lesbarhet og bedre UU."},{heading:"hvorfor-vi-anbefaler-dette",content:"`<caption>` er påkrevd fordi skjermlesere trenger et navn på tabellen for å gi brukeren kontekst. En tabell uten caption er vanskelig å identifisere i et dokument."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi prioriterer forutsigbar tabellatferd (sortering, tastatur, caption) fremfor maksimal frihet, for å sikre konsistente og tilgjengelige tabeller på tvers av løsninger."},{heading:"størrelser",content:"Table finnes i fire størrelser:"},{heading:"størrelser",content:"ExtraSmall: Mindre skriftstørrelse og lite luft per rad. Egnet i interne løsninger når det er begrenset plass."},{heading:"størrelser",content:"Small: Mindre luft per rad. Egnet når det er begrenset plass, eller når mye data må vises samtidig."},{heading:"størrelser",content:"Medium: Normal avstand per rad. Egnet for de fleste visninger."},{heading:"størrelser",content:"Large: Mer luft per rad. I publikumsløsninger hvor en har god plass."},{heading:"plassering-og-justering",content:"Tabellen skal vises i den bredden innholdet krever."},{heading:"plassering-og-justering",content:"På små skjermer vil:"},{heading:"plassering-og-justering",content:"endre‑ikon flyttes til venstre"},{heading:"plassering-og-justering",content:"tabellen få horisontal scrolling"},{heading:"plassering-og-justering",content:"Ekspanderbare rader kan brukes for å vise mer informasjon uten å overlesse tabellen."},{heading:"interaksjon-og-tilstander",content:"Alle tabeller kan:"},{heading:"interaksjon-og-tilstander",content:"vise kolonneoverskrifter (`th`)"},{heading:"interaksjon-og-tilstander",content:"sortere kolonner"},{heading:"interaksjon-og-tilstander",content:"tilpasse seg nødvendig bredde basert på innhold"},{heading:"ekspanderbare-rader",content:"Rader kan åpnes og lukkes for å vise relatert innhold."},{heading:"ekspanderbare-rader",content:"Bruk de innebygde knappene til åpne/lukke — ikke bruk radklikk eller egne knapper."},{heading:"ekspanderbare-rader",content:"Gir brukeren mulighet til å se detaljer uten å forlate tabellen."},{heading:"redigering-i-tabell",content:"Rader kan gjøres redigerbare."},{heading:"redigering-i-tabell",content:"Brukeren må fullføre redigering av én rad før en annen kan redigeres."},{heading:"redigering-i-tabell",content:"Bruk `isNew` for nye rader — dette skjuler hjelpetekst som kun er relevant ved redigering."},{heading:"sortering",content:"Kolonner skal kunne sorteres med tastatur."},{heading:"sortering",content:"Sorteringsstatus (stigende, synkende) skal kunne oppfattes med skjermleser."},{heading:"tekst",content:"Kolonneoverskrifter skal være korte, presise og beskrivende."},{heading:"tekst",content:"Unngå unødvendige forkortelser."},{heading:"tekst",content:"Vurder om radoverskrifter er nødvendig for å gjøre tabellen mer forståelig."},{heading:"tilgjengelighet-uu-og-wcag",content:"Bruk `<th>` for kolonneoverskrifter og eventuelt radoverskrifter."},{heading:"tilgjengelighet-uu-og-wcag",content:'Bruk `scope="col"` og `scope="row"` for å tydeliggjøre struktur.'},{heading:"tilgjengelighet-uu-og-wcag",content:"Tomme celler skal bruke `<td>`, ikke `<th>`."},{heading:"tilgjengelighet-uu-og-wcag",content:"Tabeller skal alltid ha et `<caption>` som beskriver tabellen:"},{heading:"tilgjengelighet-uu-og-wcag",content:"som standard er dette visuelt skjult, men tilgjengelig for skjermlesere"},{heading:"tilgjengelighet-uu-og-wcag",content:"kan vises visuelt ved behov"},{heading:"tilgjengelighet-uu-og-wcag",content:"Test at skjermlesere:"},{heading:"tilgjengelighet-uu-og-wcag",content:"leser hvilke kolonner som er sorterbare"},{heading:"tilgjengelighet-uu-og-wcag",content:"formidler sorteringsstatus"},{heading:"tilgjengelighet-uu-og-wcag",content:"beholder fokus ved sortering"},{heading:"tilgjengelighet-uu-og-wcag",content:"Sjekk tastaturnavigasjon for interaksjonselementer i tabellen."},{heading:"props",content:'<TypeTable of="Table" />'},{heading:"tableheader",content:'<TypeTable of="Table.Header" />'},{heading:"tableheadercell",content:'<TypeTable of="Table.HeaderCell" />'},{heading:"tablerow",content:'<TypeTable of="Table.Row" />'},{heading:"tableeditablerow",content:'<TypeTable of="Table.EditableRow" />'},{heading:"tabledatacell",content:'<TypeTable of="Table.DataCell" />'},{heading:"tablebody",content:'<TypeTable of="Table.Body" />'},{heading:"tablesum",content:'<TypeTable of="Table.Sum" />'}],headings:[{id:"bruk-table-når",content:"Bruk Table når"},{id:"unngå-table-når",content:"Unngå Table når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"størrelser",content:"Størrelser"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"ekspanderbare-rader",content:"Ekspanderbare rader"},{id:"redigering-i-tabell",content:"Redigering i tabell"},{id:"sortering",content:"Sortering"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"tableheader",content:"Table.Header"},{id:"tableheadercell",content:"Table.HeaderCell"},{id:"tablerow",content:"Table.Row"},{id:"tableeditablerow",content:"Table.EditableRow"},{id:"tabledatacell",content:"Table.DataCell"},{id:"tablebody",content:"Table.Body"},{id:"tablesum",content:"Table.Sum"}]},u=[{depth:2,url:"#bruk-table-når",title:e.jsx(e.Fragment,{children:"Bruk Table når"})},{depth:2,url:"#unngå-table-når",title:e.jsx(e.Fragment,{children:"Unngå Table når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#størrelser",title:e.jsx(e.Fragment,{children:"Størrelser"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:3,url:"#ekspanderbare-rader",title:e.jsx(e.Fragment,{children:"Ekspanderbare rader"})},{depth:3,url:"#redigering-i-tabell",title:e.jsx(e.Fragment,{children:"Redigering i tabell"})},{depth:3,url:"#sortering",title:e.jsx(e.Fragment,{children:"Sortering"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#tableheader",title:e.jsx(e.Fragment,{children:"Table.Header"})},{depth:3,url:"#tableheadercell",title:e.jsx(e.Fragment,{children:"Table.HeaderCell"})},{depth:3,url:"#tablerow",title:e.jsx(e.Fragment,{children:"Table.Row"})},{depth:3,url:"#tableeditablerow",title:e.jsx(e.Fragment,{children:"Table.EditableRow"})},{depth:3,url:"#tabledatacell",title:e.jsx(e.Fragment,{children:"Table.DataCell"})},{depth:3,url:"#tablebody",title:e.jsx(e.Fragment,{children:"Table.Body"})},{depth:3,url:"#tablesum",title:e.jsx(e.Fragment,{children:"Table.Sum"})}];function a(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components},{Canvas:i,TypeTable:r}=n;return i||s("Canvas"),r||s("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(i,{examplesPath:"components/table"}),`
`,e.jsx(n.h2,{id:"bruk-table-når",children:"Bruk Table når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du skal vise data som egner seg for sammenligning i rader og kolonner"}),`
`,e.jsx(n.li,{children:"informasjonen kan struktureres som en datasamling med tydelige attributter"}),`
`,e.jsx(n.li,{children:"tabellariske data er mest effektiv måte å formidle innholdet på"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-table-når",children:"Unngå Table når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du skal strukturere generelt innhold på en side — bruk riktig sidelayout-komponent"}),`
`,e.jsx(n.li,{children:"du har store mengder data på mobil, der tabeller kan bli vanskelige å lese og krever horisontal scrolling"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tabeller er sterke for sammenligning av strukturerte data, men svake for lange fritekster. Å styre bruk mot korte celler gir bedre lesbarhet og bedre UU."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<caption>"})," er påkrevd fordi skjermlesere trenger et navn på tabellen for å gi brukeren kontekst. En tabell uten caption er vanskelig å identifisere i et dokument."]}),`
`,e.jsx(n.li,{children:"Vi prioriterer forutsigbar tabellatferd (sortering, tastatur, caption) fremfor maksimal frihet, for å sikre konsistente og tilgjengelige tabeller på tvers av løsninger."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"størrelser",children:"Størrelser"}),`
`,e.jsx(n.p,{children:"Table finnes i fire størrelser:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ExtraSmall: Mindre skriftstørrelse og lite luft per rad. Egnet i interne løsninger når det er begrenset plass."}),`
`,e.jsx(n.li,{children:"Small: Mindre luft per rad. Egnet når det er begrenset plass, eller når mye data må vises samtidig."}),`
`,e.jsx(n.li,{children:"Medium: Normal avstand per rad. Egnet for de fleste visninger."}),`
`,e.jsx(n.li,{children:"Large: Mer luft per rad. I publikumsløsninger hvor en har god plass."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tabellen skal vises i den bredden innholdet krever."}),`
`,e.jsxs(n.li,{children:["På små skjermer vil:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"endre‑ikon flyttes til venstre"}),`
`,e.jsx(n.li,{children:"tabellen få horisontal scrolling"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Ekspanderbare rader kan brukes for å vise mer informasjon uten å overlesse tabellen."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsx(n.p,{children:"Alle tabeller kan:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["vise kolonneoverskrifter (",e.jsx(n.code,{children:"th"}),")"]}),`
`,e.jsx(n.li,{children:"sortere kolonner"}),`
`,e.jsx(n.li,{children:"tilpasse seg nødvendig bredde basert på innhold"}),`
`]}),`
`,e.jsx(n.h3,{id:"ekspanderbare-rader",children:"Ekspanderbare rader"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rader kan åpnes og lukkes for å vise relatert innhold."}),`
`,e.jsx(n.li,{children:"Bruk de innebygde knappene til åpne/lukke — ikke bruk radklikk eller egne knapper."}),`
`,e.jsx(n.li,{children:"Gir brukeren mulighet til å se detaljer uten å forlate tabellen."}),`
`]}),`
`,e.jsx(n.h3,{id:"redigering-i-tabell",children:"Redigering i tabell"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rader kan gjøres redigerbare."}),`
`,e.jsx(n.li,{children:"Brukeren må fullføre redigering av én rad før en annen kan redigeres."}),`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"isNew"})," for nye rader — dette skjuler hjelpetekst som kun er relevant ved redigering."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sortering",children:"Sortering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Kolonner skal kunne sorteres med tastatur."}),`
`,e.jsx(n.li,{children:"Sorteringsstatus (stigende, synkende) skal kunne oppfattes med skjermleser."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Kolonneoverskrifter skal være korte, presise og beskrivende."}),`
`,e.jsx(n.li,{children:"Unngå unødvendige forkortelser."}),`
`,e.jsx(n.li,{children:"Vurder om radoverskrifter er nødvendig for å gjøre tabellen mer forståelig."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"<th>"})," for kolonneoverskrifter og eventuelt radoverskrifter."]}),`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:'scope="col"'})," og ",e.jsx(n.code,{children:'scope="row"'})," for å tydeliggjøre struktur."]}),`
`,e.jsxs(n.li,{children:["Tomme celler skal bruke ",e.jsx(n.code,{children:"<td>"}),", ikke ",e.jsx(n.code,{children:"<th>"}),"."]}),`
`,e.jsxs(n.li,{children:["Tabeller skal alltid ha et ",e.jsx(n.code,{children:"<caption>"})," som beskriver tabellen:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"som standard er dette visuelt skjult, men tilgjengelig for skjermlesere"}),`
`,e.jsx(n.li,{children:"kan vises visuelt ved behov"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Test at skjermlesere:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"leser hvilke kolonner som er sorterbare"}),`
`,e.jsx(n.li,{children:"formidler sorteringsstatus"}),`
`,e.jsx(n.li,{children:"beholder fokus ved sortering"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Sjekk tastaturnavigasjon for interaksjonselementer i tabellen."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h3,{id:"tableheader",children:"Table.Header"}),`
`,e.jsx(r,{of:l.Header}),`
`,e.jsx(n.h3,{id:"tableheadercell",children:"Table.HeaderCell"}),`
`,e.jsx(r,{of:l.HeaderCell}),`
`,e.jsx(n.h3,{id:"tablerow",children:"Table.Row"}),`
`,e.jsx(r,{of:l.Row}),`
`,e.jsx(n.h3,{id:"tableeditablerow",children:"Table.EditableRow"}),`
`,e.jsx(r,{of:l.EditableRow}),`
`,e.jsx(n.h3,{id:"tabledatacell",children:"Table.DataCell"}),`
`,e.jsx(r,{of:l.DataCell}),`
`,e.jsx(n.h3,{id:"tablebody",children:"Table.Body"}),`
`,e.jsx(r,{of:l.Body}),`
`,e.jsx(n.h3,{id:"tablesum",children:"Table.Sum"}),`
`,e.jsx(r,{of:l.Sum})]})}function j(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}function s(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,k as frontmatter,b as structuredData,u as toc};
