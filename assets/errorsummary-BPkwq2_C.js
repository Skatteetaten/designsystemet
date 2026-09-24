import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{j as i}from"./router-link-Bw__wKpt.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"ErrorSummary",description:"ErrorSummary brukes til å vise en samlet oversikt over to eller flere feil i et skjema eller en stegliste. Den hjelper brukeren å forstå hva som må rettes før hen kan gå videre, og gir mulighet til å hoppe direkte til feltene med feil.",icon:"/illustrations/errorsummary.svg"},k={contents:[{heading:"bruk-errorsummary-når",content:"brukeren skal få oversikt over flere feil før innsending"},{heading:"bruk-errorsummary-når",content:"brukeren må kunne navigere direkte til feltene med feil"},{heading:"bruk-errorsummary-når",content:"det er hensiktsmessig å samle flere feilmeldinger på ett sted"},{heading:"unngå-errorsummary-når",content:"det bare er én feil og brukeren lett kan oppdage den — da brukes ErrorMessage"},{heading:"unngå-errorsummary-når",content:"feilen er teknisk og ikke forståelig for brukeren"},{heading:"unngå-errorsummary-når",content:"feilmeldingene er lange og komplekse"},{heading:"hvorfor-vi-anbefaler-dette",content:"En samlet oppsummering med lenker til feltene hjelper alle brukere, men er særlig viktig for skjermleserbrukere som ellers må søke gjennom hele skjemaet for å finne feilene."},{heading:"hvorfor-vi-anbefaler-dette",content:"Fokus flyttes automatisk til ErrorSummary slik at brukeren ikke overser den — uten dette er det lett å klikke «Send inn» gjentatte ganger uten å oppdage hva som må rettes."},{heading:"hvorfor-vi-anbefaler-dette",content:"Feilmeldingene i oppsummeringen skal være identiske med feilmeldingene ved feltene — dette gir en gjenkjennbar kobling som hjelper brukeren å navigere."},{heading:"plassering-og-justering",content:"Plasseres over knappen som utløser innsending eller navigering, typisk «Neste» eller «Send inn»."},{heading:"plassering-og-justering",content:"Skal ikke vises før brukeren har utført en handling som fører til valideringsfeil."},{heading:"plassering-og-justering",content:"I steglister bør hvert feilpunkt starte med feltets tittel eller en gjenkjennelig kortform."},{heading:"interaksjon-og-tilstander",content:"Når ErrorSummary vises, skal fokus automatisk flyttes til toppen av oppsummeringen."},{heading:"interaksjon-og-tilstander",content:"Lenker i listen skal hoppe til feltene som har feil — disse må ha unike id‑er."},{heading:"interaksjon-og-tilstander",content:"Visning og skjuling skal håndteres via komponentens innebygde mekanisme (`showErrorSummary`)."},{heading:"tekst",content:"Feilmeldingene skal være likt formulert som ved feltet, og gjenfortelle hvilket felt som har feil."},{heading:"tekst",content:"Korte feilmeldinger er nok ved enkle feil."},{heading:"tekst",content:"Bruk «du‑språk» ved mer komplekse feil som krever forklaring."},{heading:"tilgjengelighet-uu-og-wcag",content:"Fokus flyttes til komponenten slik at skjermlesere leser hele oppsummeringen."},{heading:"tilgjengelighet-uu-og-wcag",content:"Lenker må være korrekte slik at skjermleser og tastaturnavigasjon fungerer som forventet."},{heading:"tilgjengelighet-uu-og-wcag",content:"Komponentens struktur skal gjøre det tydelig hva som må rettes."},{heading:"props",content:'<TypeTable of="ErrorSummary" />'},{heading:"errorsummaryerror",content:'<TypeTable of="ErrorSummary.Error" />'},{heading:"errorsummarygroup",content:'<TypeTable of="ErrorSummary.Group" />'}],headings:[{id:"bruk-errorsummary-når",content:"Bruk ErrorSummary når"},{id:"unngå-errorsummary-når",content:"Unngå ErrorSummary når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"errorsummaryerror",content:"ErrorSummary.Error"},{id:"errorsummarygroup",content:"ErrorSummary.Group"}]},h=[{depth:2,url:"#bruk-errorsummary-når",title:e.jsx(e.Fragment,{children:"Bruk ErrorSummary når"})},{depth:2,url:"#unngå-errorsummary-når",title:e.jsx(e.Fragment,{children:"Unngå ErrorSummary når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#errorsummaryerror",title:e.jsx(e.Fragment,{children:"ErrorSummary.Error"})},{depth:3,url:"#errorsummarygroup",title:e.jsx(e.Fragment,{children:"ErrorSummary.Group"})}];function s(n){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ul:"ul",...n.components},{Canvas:l,TypeTable:t}=r;return l||o("Canvas"),t||o("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(l,{examplesPath:"components/errorsummary"}),`
`,e.jsx(r.h2,{id:"bruk-errorsummary-når",children:"Bruk ErrorSummary når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"brukeren skal få oversikt over flere feil før innsending"}),`
`,e.jsx(r.li,{children:"brukeren må kunne navigere direkte til feltene med feil"}),`
`,e.jsx(r.li,{children:"det er hensiktsmessig å samle flere feilmeldinger på ett sted"}),`
`]}),`
`,e.jsx(r.h2,{id:"unngå-errorsummary-når",children:"Unngå ErrorSummary når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["det bare er én feil og brukeren lett kan oppdage den — da brukes ",e.jsx(r.a,{href:"/byggeklosser/komponenter/errormessage",children:"ErrorMessage"})]}),`
`,e.jsx(r.li,{children:"feilen er teknisk og ikke forståelig for brukeren"}),`
`,e.jsx(r.li,{children:"feilmeldingene er lange og komplekse"}),`
`]}),`
`,e.jsx(r.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"En samlet oppsummering med lenker til feltene hjelper alle brukere, men er særlig viktig for skjermleserbrukere som ellers må søke gjennom hele skjemaet for å finne feilene."}),`
`,e.jsx(r.li,{children:"Fokus flyttes automatisk til ErrorSummary slik at brukeren ikke overser den — uten dette er det lett å klikke «Send inn» gjentatte ganger uten å oppdage hva som må rettes."}),`
`,e.jsx(r.li,{children:"Feilmeldingene i oppsummeringen skal være identiske med feilmeldingene ved feltene — dette gir en gjenkjennbar kobling som hjelper brukeren å navigere."}),`
`]}),`
`,e.jsx(r.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(r.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Plasseres over knappen som utløser innsending eller navigering, typisk «Neste» eller «Send inn»."}),`
`,e.jsx(r.li,{children:"Skal ikke vises før brukeren har utført en handling som fører til valideringsfeil."}),`
`,e.jsx(r.li,{children:"I steglister bør hvert feilpunkt starte med feltets tittel eller en gjenkjennelig kortform."}),`
`]}),`
`,e.jsx(r.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Når ErrorSummary vises, skal fokus automatisk flyttes til toppen av oppsummeringen."}),`
`,e.jsx(r.li,{children:"Lenker i listen skal hoppe til feltene som har feil — disse må ha unike id‑er."}),`
`,e.jsxs(r.li,{children:["Visning og skjuling skal håndteres via komponentens innebygde mekanisme (",e.jsx(r.code,{children:"showErrorSummary"}),")."]}),`
`]}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Feilmeldingene skal være likt formulert som ved feltet, og gjenfortelle hvilket felt som har feil."}),`
`,e.jsx(r.li,{children:"Korte feilmeldinger er nok ved enkle feil."}),`
`,e.jsx(r.li,{children:"Bruk «du‑språk» ved mer komplekse feil som krever forklaring."}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Fokus flyttes til komponenten slik at skjermlesere leser hele oppsummeringen."}),`
`,e.jsx(r.li,{children:"Lenker må være korrekte slik at skjermleser og tastaturnavigasjon fungerer som forventet."}),`
`,e.jsx(r.li,{children:"Komponentens struktur skal gjøre det tydelig hva som må rettes."}),`
`]}),`
`,`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r.h3,{id:"errorsummaryerror",children:"ErrorSummary.Error"}),`
`,e.jsx(t,{of:i.Error}),`
`,e.jsx(r.h3,{id:"errorsummarygroup",children:"ErrorSummary.Group"}),`
`,e.jsx(t,{of:i.Group})]})}function f(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}function o(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default,u as frontmatter,k as structuredData,h as toc};
