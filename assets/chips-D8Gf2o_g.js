import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{f as i}from"./router-link-eakWayll.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let k={title:"Chips",description:"Chips er små interaktive komponenter som brukes til å styre visning av innhold, ofte i forbindelse med filtrering, valg eller visning av status i en gruppe.",icon:"/illustrations/chips.svg"},u={contents:[{heading:"bruk-chips-når",content:"brukeren skal filtrere data, for eksempel i lister eller tabeller"},{heading:"bruk-chips-når",content:"du skal vise valgte elementer i en gruppe"},{heading:"bruk-chips-når",content:"brukeren skal veksle mellom ulike visninger eller valg"},{heading:"unngå-chips-når",content:"du lager menyer, for eksempel sidemeny eller hovedmeny"},{heading:"unngå-chips-når",content:"innholdet er statisk metadata. Bruk Tag i stedet."},{heading:"unngå-chips-når",content:"du trenger et element for handling eller innsending i et skjema. Bruk heller Button."},{heading:"unngå-chips-når",content:"du bare har én enkelt chip — Chips er ment som en samlet gruppe"},{heading:"hvorfor-vi-anbefaler-dette",content:"Chips er ment for kompakte, raske valg i grupper. En enkelt chip gir ikke nok kontekst for at brukeren forstår at de kan velge — da er en knapp eller et annet element mer intuitivt."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi skiller mellom lukkbare Chips og Chips med checkmarks for å gi tydelig forventning om hva som skjer når brukeren klikker."},{heading:"hvorfor-vi-anbefaler-dette",content:"For lukkbare chips er det å styre fokus et kjent tilgjengelighetsproblem: tastaturbrukere risikerer å miste fokus når et valgt element fjernes, og de må da orientere seg på nytt. Derfor må fokus flyttes til et logisk sted etter at chipen er fjernet."},{heading:"lukkbar-variant",content:"Brukes til dynamiske filtre og visninger."},{heading:"lukkbar-variant",content:"Egnet når brukeren skal kunne fjerne enkeltvalg."},{heading:"valgbar-variant",content:"Brukes til statiske filtre og visninger."},{heading:"valgbar-variant",content:"Krever minst tre chips når de brukes uten ikon, for at valgt tilstand skal være tydelig."},{heading:"størrelser",content:"Medium (standard)"},{heading:"størrelser",content:"Small"},{heading:"plassering-og-justering",content:"Chips skal brukes i grupper, ikke alene. De skal fremstå som små knapper samlet i en enhetlig visuell rekke eller blokk."},{heading:"plassering-og-justering",content:"Valgbare chips kan brukes som et alternativ til avkrysningsbokser når valgene kan plasseres horisontalt. Valgene bør være korte og raske å skanne — for lange eller komplekse valg skal du heller bruke CheckboxGroup."},{heading:"interaksjon-og-tilstander",content:"Når en chip fjernes via tastatur, skal fokus automatisk flyttes til neste chip."},{heading:"interaksjon-og-tilstander",content:"Når alle chips er fjernet, settes fokus til en skjult tekst: «Ingen flere filtre»."},{heading:"tekst",content:"Valgene skal være korte og lettleste."},{heading:"tekst",content:"Bruk ord og begreper som er enkle å skanne og sortere."},{heading:"tilgjengelighet-uu-og-wcag",content:"Fokusflyt må være tydelig og forutsigbar ved fjerning av chips."},{heading:"tilgjengelighet-uu-og-wcag",content:"Skjult tekst brukes for å formidle tilstand når alle chips fjernes."},{heading:"tilgjengelighet-uu-og-wcag",content:"Gi tydelig aria‑navn når siden inneholder flere chip‑grupper."},{heading:"props",content:'<TypeTable of="Chips" />'},{heading:"chipsremovable",content:'<TypeTable of="Chips.Removable" />'},{heading:"chipstoggle",content:'<TypeTable of="Chips.Toggle" />'}],headings:[{id:"bruk-chips-når",content:"Bruk Chips når"},{id:"unngå-chips-når",content:"Unngå Chips når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"lukkbar-variant",content:"Lukkbar variant"},{id:"valgbar-variant",content:"Valgbar variant"},{id:"størrelser",content:"Størrelser"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"chipsremovable",content:"Chips.Removable"},{id:"chipstoggle",content:"Chips.Toggle"}]},c=[{depth:2,url:"#bruk-chips-når",title:e.jsx(e.Fragment,{children:"Bruk Chips når"})},{depth:2,url:"#unngå-chips-når",title:e.jsx(e.Fragment,{children:"Unngå Chips når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#lukkbar-variant",title:e.jsx(e.Fragment,{children:"Lukkbar variant"})},{depth:3,url:"#valgbar-variant",title:e.jsx(e.Fragment,{children:"Valgbar variant"})},{depth:3,url:"#størrelser",title:e.jsx(e.Fragment,{children:"Størrelser"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#chipsremovable",title:e.jsx(e.Fragment,{children:"Chips.Removable"})},{depth:3,url:"#chipstoggle",title:e.jsx(e.Fragment,{children:"Chips.Toggle"})}];function s(r){const n={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...r.components},{Canvas:l,TypeTable:t}=n;return l||a("Canvas"),t||a("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(l,{examplesPath:"components/chips"}),`
`,e.jsx(n.h2,{id:"bruk-chips-når",children:"Bruk Chips når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"brukeren skal filtrere data, for eksempel i lister eller tabeller"}),`
`,e.jsx(n.li,{children:"du skal vise valgte elementer i en gruppe"}),`
`,e.jsx(n.li,{children:"brukeren skal veksle mellom ulike visninger eller valg"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-chips-når",children:"Unngå Chips når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du lager menyer, for eksempel sidemeny eller hovedmeny"}),`
`,e.jsxs(n.li,{children:["innholdet er statisk metadata. Bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/tag",children:"Tag"})," i stedet."]}),`
`,e.jsxs(n.li,{children:["du trenger et element for handling eller innsending i et skjema. Bruk heller ",e.jsx(n.a,{href:"/byggeklosser/komponenter/button",children:"Button"}),"."]}),`
`,e.jsx(n.li,{children:"du bare har én enkelt chip — Chips er ment som en samlet gruppe"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chips er ment for kompakte, raske valg i grupper. En enkelt chip gir ikke nok kontekst for at brukeren forstår at de kan velge — da er en knapp eller et annet element mer intuitivt."}),`
`,e.jsx(n.li,{children:"Vi skiller mellom lukkbare Chips og Chips med checkmarks for å gi tydelig forventning om hva som skjer når brukeren klikker."}),`
`,e.jsx(n.li,{children:"For lukkbare chips er det å styre fokus et kjent tilgjengelighetsproblem: tastaturbrukere risikerer å miste fokus når et valgt element fjernes, og de må da orientere seg på nytt. Derfor må fokus flyttes til et logisk sted etter at chipen er fjernet."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"lukkbar-variant",children:"Lukkbar variant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes til dynamiske filtre og visninger."}),`
`,e.jsx(n.li,{children:"Egnet når brukeren skal kunne fjerne enkeltvalg."}),`
`]}),`
`,e.jsx(n.h3,{id:"valgbar-variant",children:"Valgbar variant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes til statiske filtre og visninger."}),`
`,e.jsx(n.li,{children:"Krever minst tre chips når de brukes uten ikon, for at valgt tilstand skal være tydelig."}),`
`]}),`
`,e.jsx(n.h3,{id:"størrelser",children:"Størrelser"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Medium (standard)"}),`
`,e.jsx(n.li,{children:"Small"}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chips skal brukes i grupper, ikke alene. De skal fremstå som små knapper samlet i en enhetlig visuell rekke eller blokk."}),`
`,e.jsxs(n.li,{children:["Valgbare chips kan brukes som et alternativ til avkrysningsbokser når valgene kan plasseres horisontalt. Valgene bør være korte og raske å skanne — for lange eller komplekse valg skal du heller bruke ",e.jsx(n.a,{href:"/byggeklosser/komponenter/checkboxgroup",children:"CheckboxGroup"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Når en chip fjernes via tastatur, skal fokus automatisk flyttes til neste chip."}),`
`,e.jsx(n.li,{children:"Når alle chips er fjernet, settes fokus til en skjult tekst: «Ingen flere filtre»."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Valgene skal være korte og lettleste."}),`
`,e.jsx(n.li,{children:"Bruk ord og begreper som er enkle å skanne og sortere."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fokusflyt må være tydelig og forutsigbar ved fjerning av chips."}),`
`,e.jsx(n.li,{children:"Skjult tekst brukes for å formidle tilstand når alle chips fjernes."}),`
`,e.jsx(n.li,{children:"Gi tydelig aria‑navn når siden inneholder flere chip‑grupper."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h3,{id:"chipsremovable",children:"Chips.Removable"}),`
`,e.jsx(t,{of:i.Removable}),`
`,e.jsx(n.h3,{id:"chipstoggle",children:"Chips.Toggle"}),`
`,e.jsx(t,{of:i.Toggle})]})}function p(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}function a(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default,k as frontmatter,u as structuredData,c as toc};
