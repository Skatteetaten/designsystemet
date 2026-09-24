import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{G as s}from"./router-link-Bw__wKpt.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let k={title:"TopBannerExternal",description:"TopBannerExternal brukes som toppbanner i alle publikumsløsninger. Den gir brukeren tilgang til sentrale funksjoner som innlogging, meny, søk, språkvalg, representasjonsbytte og varsler. Formålet er å sikre en gjenkjennbar, effektiv og konsistent navigasjonsopplevelse på tvers av tjenester.",icon:"/illustrations/topbannerexternal.svg"},h={contents:[{heading:"bruk-topbannerexternal-når",content:"løsningen er rettet mot publikum (innbyggere, profesjonelle eller virksomheter)"},{heading:"bruk-topbannerexternal-når",content:"du trenger en standardisert toppnavigasjon med støtte for innlogging og representasjon"},{heading:"bruk-topbannerexternal-når",content:"du vil at navigasjon, søk og brukerfunksjoner skal være likt på tvers av løsninger"},{heading:"unngå-topbannerexternal-når",content:"løsningen er intern — bruk TopBannerInternal i stedet"},{heading:"unngå-topbannerexternal-når",content:"siden ikke trenger kompleksiteten i toppfunksjonaliteten (se spesialsider under)"},{heading:"hvorfor-vi-anbefaler-dette",content:"Et konsistent toppbanner på tvers av alle publikumsløsninger gir brukerne én gjenkjennelig struktur for navigasjon, innlogging og representasjon — dette øker tillit og reduserer forvirring mellom tjenester."},{heading:"hvorfor-vi-anbefaler-dette",content:"Funksjoner skjules i oppgavemodus for å redusere distraksjoner og hjelpe brukeren fokusere på oppgaven — dette er spesielt viktig i skjema- og prosessflyter."},{heading:"hvorfor-vi-anbefaler-dette",content:"«Hopp til hovedinnhold»-snarvei er et UU-krav for at skjermleserbrukere ikke må navigere gjennom hele banneret på hver sidevisning."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Komponenten har ingen egne stilvarianter, men funksjonaliteten blir tilpasset basert på:"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"innlogget/ikke innlogget bruker"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"om bruker representerer seg selv, virksomhet eller andre personer"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"type side (vanlig visning, oppgave, spesialside)"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"skjermstørrelse"},{heading:"plassering-og-justering",content:"Plasseres alltid i toppen av siden."},{heading:"plassering-og-justering",content:"Skal være det første interaktive elementet, med snarvei for å hoppe til hovedinnhold."},{heading:"plassering-og-justering",content:"Kan forenkles på sider der hele toppbannerets funksjonalitet ikke er nødvendig (se under «Spesialsider»)."},{heading:"snarvei-til-hovedinnhold",content:"For skjermleserbrukere vises en snarvei som hopper direkte til hovedinnholdet."},{heading:"snarvei-til-hovedinnhold",content:"Når brukeren går til en ny side, blir ikke toppbanneren lest opp på nytt."},{heading:"innlogging",content:"**Ikke innlogget:** Knapp for «Logg inn»."},{heading:"innlogging",content:"**Innlogget:** Visningen tilpasses basert på representasjonsmuligheter:"},{heading:"innlogging",content:"Bruker representerer kun seg selv: går direkte til Min side."},{heading:"innlogging",content:"Bruker representerer personer/virksomheter: viser RolePicker."},{heading:"innlogging",content:"Profesjonelle brukere (regnskapsførere, m.fl.) kan få spesialvisning."},{heading:"normalvisning-innlogget",content:"Standardinnhold:"},{heading:"normalvisning-innlogget",content:"språkvelger"},{heading:"normalvisning-innlogget",content:"logg ut-knapp"},{heading:"normalvisning-innlogget",content:"søkefunksjon"},{heading:"normalvisning-innlogget",content:"brukermeny (inkl. representasjonsvelger og innboks)"},{heading:"normalvisning-innlogget",content:"meny (tre innholdsblokker for elementer)"},{heading:"varsling-om-uleste-meldinger",content:"Antall uleste meldinger styres av `notificationCount` på brukermenyen. Så lenge verdien er over 0, vises et rødt varselmerke."},{heading:"varsling-om-uleste-meldinger",content:"I brukermenyen vises varselmerket ved innboks-lenken med antall uleste (99+ ved høyere antall)."},{heading:"varsling-om-uleste-meldinger",content:"Knappen som åpner brukermenyen viser samtidig en tilsvarende rød varselprikk, slik at brukeren ser at det finnes uleste meldinger uten å måtte åpne menyen først."},{heading:"i-en-oppgave",content:"Når brukeren utfører en aktivitet (f.eks. skjema eller prosess):"},{heading:"i-en-oppgave",content:"meny, søk og brukermeny skjules for å redusere distraksjoner"},{heading:"i-en-oppgave",content:"et grått felt vises for å vise hvem brukeren representerer"},{heading:"spesialsider",content:"På sider der toppfunksjonalitet er unødvendig eller forstyrrende:"},{heading:"spesialsider",content:"toppbanneret kan forenkles ved å skjule funksjoner som innlogging, søk eller representasjon"},{heading:"spesialsider",content:"eksempler: «Jobb i Skatteetaten», «Deling av data»"},{heading:"tekst",content:"Språkvelger støtter bokmål, nynorsk og engelsk."},{heading:"tekst",content:"Samisk kan brukes i løsninger hvor det er relevant."},{heading:"tekst",content:"Tekst for menyer og knapper må være konsis, tydelig og selvforklarende."},{heading:"tekst",content:"Hvis innholdet på siden mangler oversettelse til valgt språk, må det vises en tydelig melding om dette, f.eks. «Dette innholdet er ikke tilgjengelig på nynorsk»."},{heading:"tilgjengelighet-uu-og-wcag",content:"Første tabstopp må være «Hopp til hovedinnhold»."},{heading:"tilgjengelighet-uu-og-wcag",content:"Banneret leses ikke automatisk på nytt når bruker navigerer – gir mindre støy for skjermleserbrukere."},{heading:"tilgjengelighet-uu-og-wcag",content:"Alle interaksjonselementer må ha tydelige fokustilstander."},{heading:"tilgjengelighet-uu-og-wcag",content:"Språkvelger og representasjonsvalg skal være tilgjengelig og semantisk korrekt."},{heading:"props",content:'<TypeTable of="TopBannerExternal" />'},{heading:"topbannerexternalusermenu",content:'<TypeTable of="TopBannerExternal.UserMenu" />'}],headings:[{id:"bruk-topbannerexternal-når",content:"Bruk TopBannerExternal når"},{id:"unngå-topbannerexternal-når",content:"Unngå TopBannerExternal når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"snarvei-til-hovedinnhold",content:"Snarvei til hovedinnhold"},{id:"innlogging",content:"Innlogging"},{id:"normalvisning-innlogget",content:"Normalvisning (innlogget)"},{id:"varsling-om-uleste-meldinger",content:"Varsling om uleste meldinger"},{id:"i-en-oppgave",content:"I en oppgave"},{id:"spesialsider",content:"Spesialsider"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"topbannerexternalusermenu",content:"TopBannerExternal.UserMenu"}]},u=[{depth:2,url:"#bruk-topbannerexternal-når",title:e.jsx(e.Fragment,{children:"Bruk TopBannerExternal når"})},{depth:2,url:"#unngå-topbannerexternal-når",title:e.jsx(e.Fragment,{children:"Unngå TopBannerExternal når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:3,url:"#snarvei-til-hovedinnhold",title:e.jsx(e.Fragment,{children:"Snarvei til hovedinnhold"})},{depth:3,url:"#innlogging",title:e.jsx(e.Fragment,{children:"Innlogging"})},{depth:3,url:"#normalvisning-innlogget",title:e.jsx(e.Fragment,{children:"Normalvisning (innlogget)"})},{depth:3,url:"#varsling-om-uleste-meldinger",title:e.jsx(e.Fragment,{children:"Varsling om uleste meldinger"})},{depth:3,url:"#i-en-oppgave",title:e.jsx(e.Fragment,{children:"I en oppgave"})},{depth:3,url:"#spesialsider",title:e.jsx(e.Fragment,{children:"Spesialsider"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#topbannerexternalusermenu",title:e.jsx(e.Fragment,{children:"TopBannerExternal.UserMenu"})}];function l(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r.components},{Canvas:i,TypeTable:t}=n;return i||o("Canvas"),t||o("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(i,{examplesPath:"components/topbannerexternal"}),`
`,e.jsx(n.h2,{id:"bruk-topbannerexternal-når",children:"Bruk TopBannerExternal når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"løsningen er rettet mot publikum (innbyggere, profesjonelle eller virksomheter)"}),`
`,e.jsx(n.li,{children:"du trenger en standardisert toppnavigasjon med støtte for innlogging og representasjon"}),`
`,e.jsx(n.li,{children:"du vil at navigasjon, søk og brukerfunksjoner skal være likt på tvers av løsninger"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-topbannerexternal-når",children:"Unngå TopBannerExternal når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["løsningen er intern — bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/topbannerinternal",children:"TopBannerInternal"})," i stedet"]}),`
`,e.jsx(n.li,{children:"siden ikke trenger kompleksiteten i toppfunksjonaliteten (se spesialsider under)"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Et konsistent toppbanner på tvers av alle publikumsløsninger gir brukerne én gjenkjennelig struktur for navigasjon, innlogging og representasjon — dette øker tillit og reduserer forvirring mellom tjenester."}),`
`,e.jsx(n.li,{children:"Funksjoner skjules i oppgavemodus for å redusere distraksjoner og hjelpe brukeren fokusere på oppgaven — dette er spesielt viktig i skjema- og prosessflyter."}),`
`,e.jsx(n.li,{children:"«Hopp til hovedinnhold»-snarvei er et UU-krav for at skjermleserbrukere ikke må navigere gjennom hele banneret på hver sidevisning."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"Komponenten har ingen egne stilvarianter, men funksjonaliteten blir tilpasset basert på:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"innlogget/ikke innlogget bruker"}),`
`,e.jsx(n.li,{children:"om bruker representerer seg selv, virksomhet eller andre personer"}),`
`,e.jsx(n.li,{children:"type side (vanlig visning, oppgave, spesialside)"}),`
`,e.jsx(n.li,{children:"skjermstørrelse"}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Plasseres alltid i toppen av siden."}),`
`,e.jsx(n.li,{children:"Skal være det første interaktive elementet, med snarvei for å hoppe til hovedinnhold."}),`
`,e.jsx(n.li,{children:"Kan forenkles på sider der hele toppbannerets funksjonalitet ikke er nødvendig (se under «Spesialsider»)."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsx(n.h3,{id:"snarvei-til-hovedinnhold",children:"Snarvei til hovedinnhold"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For skjermleserbrukere vises en snarvei som hopper direkte til hovedinnholdet."}),`
`,e.jsx(n.li,{children:"Når brukeren går til en ny side, blir ikke toppbanneren lest opp på nytt."}),`
`]}),`
`,e.jsx(n.h3,{id:"innlogging",children:"Innlogging"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke innlogget:"})," Knapp for «Logg inn»."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Innlogget:"})," Visningen tilpasses basert på representasjonsmuligheter:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bruker representerer kun seg selv: går direkte til Min side."}),`
`,e.jsxs(n.li,{children:["Bruker representerer personer/virksomheter: viser ",e.jsx(n.a,{href:"/byggeklosser/komponenter/rolepicker",children:"RolePicker"}),"."]}),`
`,e.jsx(n.li,{children:"Profesjonelle brukere (regnskapsførere, m.fl.) kan få spesialvisning."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"normalvisning-innlogget",children:"Normalvisning (innlogget)"}),`
`,e.jsx(n.p,{children:"Standardinnhold:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"språkvelger"}),`
`,e.jsx(n.li,{children:"logg ut-knapp"}),`
`,e.jsx(n.li,{children:"søkefunksjon"}),`
`,e.jsx(n.li,{children:"brukermeny (inkl. representasjonsvelger og innboks)"}),`
`,e.jsx(n.li,{children:"meny (tre innholdsblokker for elementer)"}),`
`]}),`
`,e.jsx(n.h3,{id:"varsling-om-uleste-meldinger",children:"Varsling om uleste meldinger"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Antall uleste meldinger styres av ",e.jsx(n.code,{children:"notificationCount"})," på brukermenyen. Så lenge verdien er over 0, vises et rødt varselmerke."]}),`
`,e.jsx(n.li,{children:"I brukermenyen vises varselmerket ved innboks-lenken med antall uleste (99+ ved høyere antall)."}),`
`,e.jsx(n.li,{children:"Knappen som åpner brukermenyen viser samtidig en tilsvarende rød varselprikk, slik at brukeren ser at det finnes uleste meldinger uten å måtte åpne menyen først."}),`
`]}),`
`,e.jsx(n.h3,{id:"i-en-oppgave",children:"I en oppgave"}),`
`,e.jsx(n.p,{children:"Når brukeren utfører en aktivitet (f.eks. skjema eller prosess):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"meny, søk og brukermeny skjules for å redusere distraksjoner"}),`
`,e.jsx(n.li,{children:"et grått felt vises for å vise hvem brukeren representerer"}),`
`]}),`
`,e.jsx(n.h3,{id:"spesialsider",children:"Spesialsider"}),`
`,e.jsx(n.p,{children:"På sider der toppfunksjonalitet er unødvendig eller forstyrrende:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"toppbanneret kan forenkles ved å skjule funksjoner som innlogging, søk eller representasjon"}),`
`,e.jsx(n.li,{children:"eksempler: «Jobb i Skatteetaten», «Deling av data»"}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Språkvelger støtter bokmål, nynorsk og engelsk."}),`
`,e.jsx(n.li,{children:"Samisk kan brukes i løsninger hvor det er relevant."}),`
`,e.jsx(n.li,{children:"Tekst for menyer og knapper må være konsis, tydelig og selvforklarende."}),`
`,e.jsx(n.li,{children:"Hvis innholdet på siden mangler oversettelse til valgt språk, må det vises en tydelig melding om dette, f.eks. «Dette innholdet er ikke tilgjengelig på nynorsk»."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Første tabstopp må være «Hopp til hovedinnhold»."}),`
`,e.jsx(n.li,{children:"Banneret leses ikke automatisk på nytt når bruker navigerer – gir mindre støy for skjermleserbrukere."}),`
`,e.jsx(n.li,{children:"Alle interaksjonselementer må ha tydelige fokustilstander."}),`
`,e.jsx(n.li,{children:"Språkvelger og representasjonsvalg skal være tilgjengelig og semantisk korrekt."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h3,{id:"topbannerexternalusermenu",children:"TopBannerExternal.UserMenu"}),`
`,e.jsx(t,{of:s.UserMenu})]})}function v(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}function o(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default,k as frontmatter,h as structuredData,u as toc};
