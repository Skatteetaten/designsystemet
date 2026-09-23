import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{E as o}from"./router-link-eakWayll.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let m={title:"ErrorMessage",description:"ErrorMessage brukes til å vise feil som brukeren må rette for å komme videre, for eksempel i utfyllingen av et skjema. Den gir tydelig og kontekstuell feilmelding knyttet til et spesifikt felt eller område.",icon:"/illustrations/errormessage.svg"},h={contents:[{heading:"bruk-errormessage-når",content:"et felt eller en komponent ikke har innebygd mekanisme for å vise feilmeldinger"},{heading:"bruk-errormessage-når",content:"brukeren må rettes på en konkret feil for å kunne gå videre"},{heading:"bruk-errormessage-når",content:"feilsituasjonen gjelder et bestemt felt eller en bestemt handling"},{heading:"unngå-errormessage-når",content:"du skal vise flere varsler eller feil som gjelder hele siden — bruk ErrorSummary"},{heading:"unngå-errormessage-når",content:"du skal vise systemfeil eller feil ved innlasting — bruk Alert"},{heading:"hvorfor-vi-anbefaler-dette",content:"Feilmeldinger plassert rett under det aktuelle feltet minimerer kognitiv belastning — brukeren trenger ikke lete for å forstå hva som er feil og hva som må rettes."},{heading:"hvorfor-vi-anbefaler-dette",content:"Innebygd `showError` brukes fremfor egne visningsregler for å sikre at skjermlesere fanger opp endringen automatisk."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi skiller mellom ErrorMessage (enkeltfelt), Alert (hel side) og ErrorSummary (oppsummering) for å gi brukeren riktig kontekst og navigasjonsstøtte."},{heading:"plassering-og-justering",content:"Feilmeldingen skal vises under feltet eller komponenten som feilen gjelder."},{heading:"plassering-og-justering",content:"Ved generelle feilmeldinger kan den plasseres frittstående, men fortsatt i nær kontekst til det feilen angår."},{heading:"interaksjon-og-tilstander",content:"Komponenten skal vises når brukeren har gjort en feil."},{heading:"interaksjon-og-tilstander",content:"Når komponenten vises eller skjules må du bruke innebygd egenskap (`showError`) slik at skjermlesere oppfatter endringen."},{heading:"interaksjon-og-tilstander",content:"Feilmeldingen skal være tydelig koblet til feltet den hører til."},{heading:"tekst",content:"Teksten skal tydelig beskrive hva som er feil og hva brukeren må gjøre for å rette det."},{heading:"tekst",content:"Teksten skal være kort og presis."},{heading:"tekst",content:"Den skal inkludere referanse til feltet, f.eks. «Type virksomhet må fylles ut»."},{heading:"tilgjengelighet-uu-og-wcag",content:"Feilmeldingen skal ha tilstrekkelig kontrast (minst 4.5:1) mot bakgrunnen."},{heading:"tilgjengelighet-uu-og-wcag",content:"Feilmeldingen må være knyttet semantisk til feltet den gjelder."},{heading:"tilgjengelighet-uu-og-wcag",content:"Feilmeldingen skal annonseres av skjermleser når den dukker opp."},{heading:"props",content:'<TypeTable of="ErrorMessage" />'}],headings:[{id:"bruk-errormessage-når",content:"Bruk ErrorMessage når"},{id:"unngå-errormessage-når",content:"Unngå ErrorMessage når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},u=[{depth:2,url:"#bruk-errormessage-når",title:e.jsx(e.Fragment,{children:"Bruk ErrorMessage når"})},{depth:2,url:"#unngå-errormessage-når",title:e.jsx(e.Fragment,{children:"Unngå ErrorMessage når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function i(n){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ul:"ul",...n.components},{Canvas:t,TypeTable:s}=r;return t||l("Canvas"),s||l("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(t,{examplesPath:"components/errormessage"}),`
`,e.jsx(r.h2,{id:"bruk-errormessage-når",children:"Bruk ErrorMessage når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"et felt eller en komponent ikke har innebygd mekanisme for å vise feilmeldinger"}),`
`,e.jsx(r.li,{children:"brukeren må rettes på en konkret feil for å kunne gå videre"}),`
`,e.jsx(r.li,{children:"feilsituasjonen gjelder et bestemt felt eller en bestemt handling"}),`
`]}),`
`,e.jsx(r.h2,{id:"unngå-errormessage-når",children:"Unngå ErrorMessage når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["du skal vise flere varsler eller feil som gjelder hele siden — bruk ",e.jsx(r.a,{href:"/byggeklosser/komponenter/errorsummary",children:"ErrorSummary"})]}),`
`,e.jsxs(r.li,{children:["du skal vise systemfeil eller feil ved innlasting — bruk ",e.jsx(r.a,{href:"/byggeklosser/komponenter/alert",children:"Alert"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Feilmeldinger plassert rett under det aktuelle feltet minimerer kognitiv belastning — brukeren trenger ikke lete for å forstå hva som er feil og hva som må rettes."}),`
`,e.jsxs(r.li,{children:["Innebygd ",e.jsx(r.code,{children:"showError"})," brukes fremfor egne visningsregler for å sikre at skjermlesere fanger opp endringen automatisk."]}),`
`,e.jsx(r.li,{children:"Vi skiller mellom ErrorMessage (enkeltfelt), Alert (hel side) og ErrorSummary (oppsummering) for å gi brukeren riktig kontekst og navigasjonsstøtte."}),`
`]}),`
`,e.jsx(r.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(r.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Feilmeldingen skal vises under feltet eller komponenten som feilen gjelder."}),`
`,e.jsx(r.li,{children:"Ved generelle feilmeldinger kan den plasseres frittstående, men fortsatt i nær kontekst til det feilen angår."}),`
`]}),`
`,e.jsx(r.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Komponenten skal vises når brukeren har gjort en feil."}),`
`,e.jsxs(r.li,{children:["Når komponenten vises eller skjules må du bruke innebygd egenskap (",e.jsx(r.code,{children:"showError"}),") slik at skjermlesere oppfatter endringen."]}),`
`,e.jsx(r.li,{children:"Feilmeldingen skal være tydelig koblet til feltet den hører til."}),`
`]}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Teksten skal tydelig beskrive hva som er feil og hva brukeren må gjøre for å rette det."}),`
`,e.jsx(r.li,{children:"Teksten skal være kort og presis."}),`
`,e.jsx(r.li,{children:"Den skal inkludere referanse til feltet, f.eks. «Type virksomhet må fylles ut»."}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Feilmeldingen skal ha tilstrekkelig kontrast (minst 4.5:1) mot bakgrunnen."}),`
`,e.jsx(r.li,{children:"Feilmeldingen må være knyttet semantisk til feltet den gjelder."}),`
`,e.jsx(r.li,{children:"Feilmeldingen skal annonseres av skjermleser når den dukker opp."}),`
`]}),`
`,`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(s,{of:o})]})}function f(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}function l(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default,m as frontmatter,h as structuredData,u as toc};
