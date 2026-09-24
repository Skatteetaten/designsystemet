import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{M as o}from"./router-link-Bw__wKpt.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"MegaButton",description:"MegaButton brukes til tydelige hovedhandlinger som enten står alene på en side eller tar brukeren videre til et nytt område. Den skal skape sterk visuell oppmerksomhet og indikere ett klart primært valg.",icon:"/illustrations/megabutton.svg"},h={contents:[{heading:"bruk-megabutton-når",content:"du har én hovedhandling som står alene på siden"},{heading:"bruk-megabutton-når",content:"hovedhandlingen skal lede brukeren videre til et nytt område eller en ny tjeneste"},{heading:"bruk-megabutton-når",content:"du vil løfte frem én bestemt handling brukeren skal ta"},{heading:"unngå-megabutton-når",content:"handlingen er innsending av skjema — bruk Button"},{heading:"unngå-megabutton-når",content:"målet kun er å oppnå mer visuell oppmerksomhet enn en vanlig knapp"},{heading:"hvorfor-vi-anbefaler-dette",content:"MegaButton skiller seg fra vanlig Button fordi den er ment for én tydelig primærhandling som trekker ekstra oppmerksomhet («Call to action»). Brukes den til sekundære handlinger, mister den sin signaleffekt."},{heading:"hvorfor-vi-anbefaler-dette",content:'Når MegaButton er en lenke (`<a>`) men rendres som knapp, brukes `role="button"` for å sikre at skjermlesere leser opp riktig interaksjonstype.'},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi anbefaler ikke MegaButton til skjemainnsending fordi vanlig Button gir bedre kontroll over knappevariant og hierarki i en skjemakontekst."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"MegaButton har to varianter:"},{heading:"som-lenke-a",content:"Brukes når handlingen skal ta brukeren videre til et nytt område."},{heading:"som-lenke-a",content:'Skjermlesere vil fortsatt identifisere den som knapp via `role="button"`.'},{heading:"som-knapp-button",content:"Brukes når hovedhandlingen ligger på samme side."},{heading:"plassering-og-justering",content:"Skal brukes når handlingen er tydelig hovedmål for siden."},{heading:"plassering-og-justering",content:"Kan brukes alene eller sammen med et ikon (for eksempel ved eksterne lenker)."},{heading:"plassering-og-justering",content:"Fremheves best når den ikke konkurrerer med andre knapper i nærheten."},{heading:"interaksjon-og-tilstander",content:"MegaButton endrer HTML‑tag automatisk basert på om du gir den `href`."},{heading:"interaksjon-og-tilstander",content:"Når MegaButton peker til en ekstern side og bruker eksternt ikon, leses teksten «Til et annet nettsted» opp av skjermleser automatisk."},{heading:"interaksjon-og-tilstander",content:"Klikk skal oppleves som navigasjon eller primærhandling, ikke sekundær støttefunksjon."},{heading:"tekst",content:"Teksten skal tydelig beskrive hovedhandlingen, for eksempel «Start søknad», «Gå til tjenesten» eller «Bestill time»."},{heading:"tekst",content:"Unngå abstrakte eller uklare formuleringer."},{heading:"tilgjengelighet-uu-og-wcag",content:'Når MegaButton er en lenke (`<a>`) brukes `role="button"` for å sikre riktig opplesning.'},{heading:"tilgjengelighet-uu-og-wcag",content:"Ved eksterne lenker med ikon vil skjermlesere lese opp «Til et annet nettsted»."},{heading:"tilgjengelighet-uu-og-wcag",content:"Ikoner må ha tilstrekkelig kontrast, og tekst må være tydelig og informativ."},{heading:"props",content:'<TypeTable of="MegaButton" />'}],headings:[{id:"bruk-megabutton-når",content:"Bruk MegaButton når"},{id:"unngå-megabutton-når",content:"Unngå MegaButton når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"som-lenke-a",content:"Som lenke (`<a>`)"},{id:"som-knapp-button",content:"Som knapp (`<button>`)"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},m=[{depth:2,url:"#bruk-megabutton-når",title:e.jsx(e.Fragment,{children:"Bruk MegaButton når"})},{depth:2,url:"#unngå-megabutton-når",title:e.jsx(e.Fragment,{children:"Unngå MegaButton når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#som-lenke-a",title:e.jsxs(e.Fragment,{children:["Som lenke (",e.jsx("code",{children:"<a>"}),")"]})},{depth:3,url:"#som-knapp-button",title:e.jsxs(e.Fragment,{children:["Som knapp (",e.jsx("code",{children:"<button>"}),")"]})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function l(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components},{Canvas:r,TypeTable:i}=n;return r||s("Canvas"),i||s("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(r,{examplesPath:"components/megabutton"}),`
`,e.jsx(n.h2,{id:"bruk-megabutton-når",children:"Bruk MegaButton når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du har én hovedhandling som står alene på siden"}),`
`,e.jsx(n.li,{children:"hovedhandlingen skal lede brukeren videre til et nytt område eller en ny tjeneste"}),`
`,e.jsx(n.li,{children:"du vil løfte frem én bestemt handling brukeren skal ta"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-megabutton-når",children:"Unngå MegaButton når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["handlingen er innsending av skjema — bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/button",children:"Button"})]}),`
`,e.jsx(n.li,{children:"målet kun er å oppnå mer visuell oppmerksomhet enn en vanlig knapp"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["MegaButton skiller seg fra vanlig ",e.jsx(n.a,{href:"/byggeklosser/komponenter/button",children:"Button"})," fordi den er ment for én tydelig primærhandling som trekker ekstra oppmerksomhet («Call to action»). Brukes den til sekundære handlinger, mister den sin signaleffekt."]}),`
`,e.jsxs(n.li,{children:["Når MegaButton er en lenke (",e.jsx(n.code,{children:"<a>"}),") men rendres som knapp, brukes ",e.jsx(n.code,{children:'role="button"'})," for å sikre at skjermlesere leser opp riktig interaksjonstype."]}),`
`,e.jsxs(n.li,{children:["Vi anbefaler ikke MegaButton til skjemainnsending fordi vanlig ",e.jsx(n.a,{href:"/byggeklosser/komponenter/button",children:"Button"})," gir bedre kontroll over knappevariant og hierarki i en skjemakontekst."]}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"MegaButton har to varianter:"}),`
`,e.jsxs(n.h3,{id:"som-lenke-a",children:["Som lenke (",e.jsx(n.code,{children:"<a>"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes når handlingen skal ta brukeren videre til et nytt område."}),`
`,e.jsxs(n.li,{children:["Skjermlesere vil fortsatt identifisere den som knapp via ",e.jsx(n.code,{children:'role="button"'}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"som-knapp-button",children:["Som knapp (",e.jsx(n.code,{children:"<button>"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes når hovedhandlingen ligger på samme side."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Skal brukes når handlingen er tydelig hovedmål for siden."}),`
`,e.jsx(n.li,{children:"Kan brukes alene eller sammen med et ikon (for eksempel ved eksterne lenker)."}),`
`,e.jsx(n.li,{children:"Fremheves best når den ikke konkurrerer med andre knapper i nærheten."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["MegaButton endrer HTML‑tag automatisk basert på om du gir den ",e.jsx(n.code,{children:"href"}),"."]}),`
`,e.jsx(n.li,{children:"Når MegaButton peker til en ekstern side og bruker eksternt ikon, leses teksten «Til et annet nettsted» opp av skjermleser automatisk."}),`
`,e.jsx(n.li,{children:"Klikk skal oppleves som navigasjon eller primærhandling, ikke sekundær støttefunksjon."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Teksten skal tydelig beskrive hovedhandlingen, for eksempel «Start søknad», «Gå til tjenesten» eller «Bestill time»."}),`
`,e.jsx(n.li,{children:"Unngå abstrakte eller uklare formuleringer."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Når MegaButton er en lenke (",e.jsx(n.code,{children:"<a>"}),") brukes ",e.jsx(n.code,{children:'role="button"'})," for å sikre riktig opplesning."]}),`
`,e.jsx(n.li,{children:"Ved eksterne lenker med ikon vil skjermlesere lese opp «Til et annet nettsted»."}),`
`,e.jsx(n.li,{children:"Ikoner må ha tilstrekkelig kontrast, og tekst må være tydelig og informativ."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:o})]})}function c(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}function s(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default,u as frontmatter,h as structuredData,m as toc};
