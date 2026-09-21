import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{k as a}from"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let p={title:"FileUploader",description:"FileUploader brukes når brukeren skal laste opp ett eller flere vedlegg fra egen enhet. Den støtter både filvelger og dra‑og‑slipp, og kan håndtere bilder og andre filtyper.",icon:"/illustrations/fileuploader.svg"},f={contents:[{heading:"bruk-fileuploader-når",content:"brukeren skal legge ved dokumentasjon eller filer som del av et skjema"},{heading:"bruk-fileuploader-når",content:"filer brukes som datakilde i tjenesten"},{heading:"bruk-fileuploader-når",content:"det er behov for å kunne laste opp flere filer i én operasjon"},{heading:"unngå-fileuploader-når",content:"tjenesten stiller sammensatte krav til antall eller type filer (for eksempel nøyaktig to filer i ulike formater) — bruk da to separate FileUploadere"},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi viser opplastingsstatus fil for fil (spinner, hake, feil) fordi brukeren ellers ikke vet om opplastingen lykkes. Tydelig tilbakemelding per fil reduserer usikkerhet og antall støtteanrop."},{heading:"hvorfor-vi-anbefaler-dette",content:"Nye økter nullstiller Alert fra forrige for å forhindre at gammel feilstatus misoppfattes som pågående problem."},{heading:"hvorfor-vi-anbefaler-dette",content:"Separate FileUploadere anbefales for sammensatte krav fordi kombinert validering (f.eks. Nøyaktig én fil av type A og én av type B) er vanskelig for brukeren å forstå som ett felt."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"FileUploader har ingen spesielle varianter, men har flere innebygde funksjonelle tilstander."},{heading:"plassering-og-justering",content:"Plasser FileUploader der brukeren naturlig forventer å laste opp dokumentasjon."},{heading:"plassering-og-justering",content:"Behandle opplasting i form av økter: én økt = alle filer brukeren legger til i én handling."},{heading:"plassering-og-justering",content:"Etter hver økt skal komponenten gi visuell støtte for resultatet (spinner, hake, feilmelding)."},{heading:"interaksjon-og-tilstander",content:"**Start av økt:** Bruker legger til én eller flere filer via dra‑og‑slipp eller filvelger."},{heading:"interaksjon-og-tilstander",content:"**Feil ved oppstart:** Vises hvis filtype er feil, ingen fil er valgt, eller antallet er for høyt."},{heading:"interaksjon-og-tilstander",content:"**Spinner:** Vises mens opplasting pågår."},{heading:"interaksjon-og-tilstander",content:"**Vellykket opplasting:** Hver fil markeres med grønn hake; til slutt vises en oppsummerende Alert."},{heading:"interaksjon-og-tilstander",content:"**Feil underveis:** Hvis én eller flere filer feiler, vises en Alert med feilen og hvilke filer det gjelder."},{heading:"interaksjon-og-tilstander",content:"**Ny økt:** Ved opplasting i ny økt fjernes Alert fra forrige."},{heading:"tekst",content:"Bruk tydelig og enkel tekst som forklarer hva brukeren kan gjøre."},{heading:"tekst",content:"Gi klare feilmeldinger ved ugyldige filvalg eller tekniske feil."},{heading:"tekst",content:"Oppsummeringsmeldinger bør være korte og informere om antall filer som ble lastet opp."},{heading:"tilgjengelighet-uu-og-wcag",content:"Skjermleser skal kunne lese når en økt feiler eller lykkes."},{heading:"tilgjengelighet-uu-og-wcag",content:"Når en fil slettes, skal skjermleser informere om dette."},{heading:"tilgjengelighet-uu-og-wcag",content:"Sørg for at eventuelle Alerts er tydelige og semantisk korrekte."},{heading:"props",content:'<TypeTable of="FileUploader" />'}],headings:[{id:"bruk-fileuploader-når",content:"Bruk FileUploader når"},{id:"unngå-fileuploader-når",content:"Unngå FileUploader når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},h=[{depth:2,url:"#bruk-fileuploader-når",title:e.jsx(e.Fragment,{children:"Bruk FileUploader når"})},{depth:2,url:"#unngå-fileuploader-når",title:e.jsx(e.Fragment,{children:"Unngå FileUploader når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function i(n){const r={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...n.components},{Canvas:l,TypeTable:t}=r;return l||s("Canvas"),t||s("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(l,{examplesPath:"components/fileuploader"}),`
`,e.jsx(r.h2,{id:"bruk-fileuploader-når",children:"Bruk FileUploader når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"brukeren skal legge ved dokumentasjon eller filer som del av et skjema"}),`
`,e.jsx(r.li,{children:"filer brukes som datakilde i tjenesten"}),`
`,e.jsx(r.li,{children:"det er behov for å kunne laste opp flere filer i én operasjon"}),`
`]}),`
`,e.jsx(r.h2,{id:"unngå-fileuploader-når",children:"Unngå FileUploader når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"tjenesten stiller sammensatte krav til antall eller type filer (for eksempel nøyaktig to filer i ulike formater) — bruk da to separate FileUploadere"}),`
`]}),`
`,e.jsx(r.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Vi viser opplastingsstatus fil for fil (spinner, hake, feil) fordi brukeren ellers ikke vet om opplastingen lykkes. Tydelig tilbakemelding per fil reduserer usikkerhet og antall støtteanrop."}),`
`,e.jsx(r.li,{children:"Nye økter nullstiller Alert fra forrige for å forhindre at gammel feilstatus misoppfattes som pågående problem."}),`
`,e.jsx(r.li,{children:"Separate FileUploadere anbefales for sammensatte krav fordi kombinert validering (f.eks. Nøyaktig én fil av type A og én av type B) er vanskelig for brukeren å forstå som ett felt."}),`
`]}),`
`,e.jsx(r.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(r.p,{children:"FileUploader har ingen spesielle varianter, men har flere innebygde funksjonelle tilstander."}),`
`,e.jsx(r.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Plasser FileUploader der brukeren naturlig forventer å laste opp dokumentasjon."}),`
`,e.jsx(r.li,{children:"Behandle opplasting i form av økter: én økt = alle filer brukeren legger til i én handling."}),`
`,e.jsx(r.li,{children:"Etter hver økt skal komponenten gi visuell støtte for resultatet (spinner, hake, feilmelding)."}),`
`]}),`
`,e.jsx(r.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Start av økt:"})," Bruker legger til én eller flere filer via dra‑og‑slipp eller filvelger."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Feil ved oppstart:"})," Vises hvis filtype er feil, ingen fil er valgt, eller antallet er for høyt."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Spinner:"})," Vises mens opplasting pågår."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Vellykket opplasting:"})," Hver fil markeres med grønn hake; til slutt vises en oppsummerende Alert."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Feil underveis:"})," Hvis én eller flere filer feiler, vises en Alert med feilen og hvilke filer det gjelder."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ny økt:"})," Ved opplasting i ny økt fjernes Alert fra forrige."]}),`
`]}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Bruk tydelig og enkel tekst som forklarer hva brukeren kan gjøre."}),`
`,e.jsx(r.li,{children:"Gi klare feilmeldinger ved ugyldige filvalg eller tekniske feil."}),`
`,e.jsx(r.li,{children:"Oppsummeringsmeldinger bør være korte og informere om antall filer som ble lastet opp."}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Skjermleser skal kunne lese når en økt feiler eller lykkes."}),`
`,e.jsx(r.li,{children:"Når en fil slettes, skal skjermleser informere om dette."}),`
`,e.jsx(r.li,{children:"Sørg for at eventuelle Alerts er tydelige og semantisk korrekte."}),`
`]}),`
`,`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:a})]})}function u(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}function s(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default,p as frontmatter,f as structuredData,h as toc};
