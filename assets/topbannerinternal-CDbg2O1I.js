import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{J as s}from"./router-link-DdwMTWnL.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"TopBannerInternal",description:"TopBannerInternal brukes som toppbanner i interne løsninger for Skatteetatens ansatte, eksempelvis saksbehandling eller administrasjonssystemer. Den gir et tydelig og konsistent utgangspunkt for intern navigasjon, identifikasjon av bruker og løsning, og plassering av overordnede funksjoner.",icon:"/illustrations/topbannerinternal.svg"},h={contents:[{heading:"bruk-topbannerinternal-når",content:"løsningen er interne systemer for ansatte i Skatteetaten"},{heading:"bruk-topbannerinternal-når",content:"du trenger en konsistent toppseksjon med logo, tittel og eventuelt innlogget bruker"},{heading:"bruk-topbannerinternal-når",content:"løsningen krever plassering av overordnede handlinger, systemnavigasjon eller snarveier"},{heading:"unngå-topbannerinternal-når",content:"løsningen er en publikumsløsning – bruk TopBannerExternal i stedet"},{heading:"unngå-topbannerinternal-når",content:"løsningen ikke skal ha toppbanner (spesialsider uten intern navigasjon)"},{heading:"unngå-topbannerinternal-når",content:"etatens interne identitet ikke skal være framtredende, f.eks. i tverretatlige samarbeidsløsninger med egen profil (se variant for fargebytte)"},{heading:"hvorfor-vi-anbefaler-dette",content:"Burgundrød standardfarge på interne løsninger skaper visuell distinksjon fra publikumsflater og fra testmiljøer (svart/gul stripe). Dette reduserer risikoen for at ansatte blander produksjon og test."},{heading:"hvorfor-vi-anbefaler-dette",content:"Testtstripe og alternativ farge er dokumentert som unntak fordi de skal være sjeldne — overbruk undergraver signaleffekten."},{heading:"hvorfor-vi-anbefaler-dette",content:"«Hopp til hovedinnhold» er inkludert for at skjermleserbrukere ikke må navigere gjennom banneret på hver sidevisning — dette er et UU-krav som gjelder både interne og eksterne løsninger."},{heading:"bakgrunnsfarge",content:"**Burgunder (standard):** brukes i alle interne løsninger som utgangspunkt."},{heading:"bakgrunnsfarge",content:"**Alternativ farge (denim‑100):** kan brukes i tverretatlige samarbeid eller spesialtilfeller."},{heading:"testmodus",content:`En sort/gul teststripe kan vises øverst for å markere testmiljø.\\
Dette brukes kun for å skille test fra produksjon.`},{heading:"plassering-og-justering",content:"Logo vises til venstre og fungerer som snarvei til startsiden."},{heading:"plassering-og-justering",content:"Tittelområde ligger til høyre for logoen og viser:"},{heading:"plassering-og-justering",content:"Løsningsnavn"},{heading:"plassering-og-justering",content:"Valgfri undertittel"},{heading:"plassering-og-justering",content:"Innlogget bruker vises på høyre side når relevant."},{heading:"plassering-og-justering",content:"Aksjonsmeny (valg/lenker) ligger under eller inne i banneret, avhengig av behov."},{heading:"logo-og-tittel",content:`Logo og tittel fungerer som lenke tilbake til løsningens startside.\\
Alternativ logo er mulig i tverretatlige samarbeidsløsninger.`},{heading:"logo-og-tittel",content:"Logo kan skjules på mobil for å spare plass."},{heading:"aksjonsmeny-underkomponent",content:"Gir plass til:"},{heading:"aksjonsmeny-underkomponent",content:"lenker til løsninger eller separate sider"},{heading:"aksjonsmeny-underkomponent",content:"systemaksjoner eller navigasjonspunkt"},{heading:"aksjonsmeny-underkomponent",content:"Åpnes via en knapp plassert i toppbanneret."},{heading:"søk-og-knapper",content:"Plasseres normalt i raden under toppbanneret."},{heading:"søk-og-knapper",content:"Kan unntaksvis legges *i* toppbanneret for å spare vertikal plass."},{heading:"søk-og-knapper",content:"Bruk standard søkefelt og InlineButton til mørk bakgrunn når funksjonen ligger i banneret."},{heading:"snarvei-til-hovedinnhold",content:"En tilgjengelighetsfunksjon som lar brukeren hoppe direkte til hovedinnholdet."},{heading:"snarvei-til-hovedinnhold",content:"Hindrer at skjermleser leser opp toppbanneret ved hver sidevisning."},{heading:"tekst",content:"Løsningsnavn skal være kort, entydig og lett å identifisere."},{heading:"tekst",content:"Undertittel brukes for å gi ekstra kontekst når nødvendig."},{heading:"tekst",content:"Aksjonsmenyens titler skal bruke konsise, handlingsorienterte ord eller klare kategorier."},{heading:"tilgjengelighet-uu-og-wcag",content:"Første tabstopp skal være snarvei til hovedinnhold."},{heading:"tilgjengelighet-uu-og-wcag",content:"Alle interaksjoner i toppbanneret skal ha tydelig fokusmarkering."},{heading:"tilgjengelighet-uu-og-wcag",content:"Navigasjonselementer og menyer skal være tilgjengelige via tastatur."},{heading:"tilgjengelighet-uu-og-wcag",content:"Logo kan skjules visuelt på mobil, men må fortsatt ha semantisk alt‑tekst dersom den er synlig."},{heading:"props",content:'<TypeTable of="TopBannerInternal" />'},{heading:"topbannerinternalactionmenu",content:'<TypeTable of="TopBannerInternal.ActionMenu" />'}],headings:[{id:"bruk-topbannerinternal-når",content:"Bruk TopBannerInternal når"},{id:"unngå-topbannerinternal-når",content:"Unngå TopBannerInternal når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"bakgrunnsfarge",content:"Bakgrunnsfarge"},{id:"testmodus",content:"Testmodus"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"logo-og-tittel",content:"Logo og tittel"},{id:"aksjonsmeny-underkomponent",content:"Aksjonsmeny (underkomponent)"},{id:"søk-og-knapper",content:"Søk og knapper"},{id:"snarvei-til-hovedinnhold",content:"Snarvei til hovedinnhold"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"topbannerinternalactionmenu",content:"TopBannerInternal.ActionMenu"}]},p=[{depth:2,url:"#bruk-topbannerinternal-når",title:e.jsx(e.Fragment,{children:"Bruk TopBannerInternal når"})},{depth:2,url:"#unngå-topbannerinternal-når",title:e.jsx(e.Fragment,{children:"Unngå TopBannerInternal når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#bakgrunnsfarge",title:e.jsx(e.Fragment,{children:"Bakgrunnsfarge"})},{depth:3,url:"#testmodus",title:e.jsx(e.Fragment,{children:"Testmodus"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:3,url:"#logo-og-tittel",title:e.jsx(e.Fragment,{children:"Logo og tittel"})},{depth:3,url:"#aksjonsmeny-underkomponent",title:e.jsx(e.Fragment,{children:"Aksjonsmeny (underkomponent)"})},{depth:3,url:"#søk-og-knapper",title:e.jsx(e.Fragment,{children:"Søk og knapper"})},{depth:3,url:"#snarvei-til-hovedinnhold",title:e.jsx(e.Fragment,{children:"Snarvei til hovedinnhold"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#topbannerinternalactionmenu",title:e.jsx(e.Fragment,{children:"TopBannerInternal.ActionMenu"})}];function l(r){const n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...r.components},{Canvas:i,TypeTable:t}=n;return i||a("Canvas"),t||a("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(i,{examplesPath:"components/topbannerinternal"}),`
`,e.jsx(n.h2,{id:"bruk-topbannerinternal-når",children:"Bruk TopBannerInternal når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"løsningen er interne systemer for ansatte i Skatteetaten"}),`
`,e.jsx(n.li,{children:"du trenger en konsistent toppseksjon med logo, tittel og eventuelt innlogget bruker"}),`
`,e.jsx(n.li,{children:"løsningen krever plassering av overordnede handlinger, systemnavigasjon eller snarveier"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-topbannerinternal-når",children:"Unngå TopBannerInternal når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["løsningen er en publikumsløsning – bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/topbannerexternal",children:"TopBannerExternal"})," i stedet"]}),`
`,e.jsx(n.li,{children:"løsningen ikke skal ha toppbanner (spesialsider uten intern navigasjon)"}),`
`,e.jsx(n.li,{children:"etatens interne identitet ikke skal være framtredende, f.eks. i tverretatlige samarbeidsløsninger med egen profil (se variant for fargebytte)"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Burgundrød standardfarge på interne løsninger skaper visuell distinksjon fra publikumsflater og fra testmiljøer (svart/gul stripe). Dette reduserer risikoen for at ansatte blander produksjon og test."}),`
`,e.jsx(n.li,{children:"Testtstripe og alternativ farge er dokumentert som unntak fordi de skal være sjeldne — overbruk undergraver signaleffekten."}),`
`,e.jsx(n.li,{children:"«Hopp til hovedinnhold» er inkludert for at skjermleserbrukere ikke må navigere gjennom banneret på hver sidevisning — dette er et UU-krav som gjelder både interne og eksterne løsninger."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"bakgrunnsfarge",children:"Bakgrunnsfarge"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Burgunder (standard):"})," brukes i alle interne løsninger som utgangspunkt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alternativ farge (denim‑100):"})," kan brukes i tverretatlige samarbeid eller spesialtilfeller."]}),`
`]}),`
`,e.jsx(n.h3,{id:"testmodus",children:"Testmodus"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["En sort/gul teststripe kan vises øverst for å markere testmiljø.",e.jsx(n.br,{}),`
`,"Dette brukes kun for å skille test fra produksjon."]}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Logo vises til venstre og fungerer som snarvei til startsiden."}),`
`,e.jsxs(n.li,{children:["Tittelområde ligger til høyre for logoen og viser:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Løsningsnavn"}),`
`,e.jsx(n.li,{children:"Valgfri undertittel"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Innlogget bruker vises på høyre side når relevant."}),`
`,e.jsx(n.li,{children:"Aksjonsmeny (valg/lenker) ligger under eller inne i banneret, avhengig av behov."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsx(n.h3,{id:"logo-og-tittel",children:"Logo og tittel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Logo og tittel fungerer som lenke tilbake til løsningens startside.",e.jsx(n.br,{}),`
`,"Alternativ logo er mulig i tverretatlige samarbeidsløsninger."]}),`
`,e.jsx(n.li,{children:"Logo kan skjules på mobil for å spare plass."}),`
`]}),`
`,e.jsx(n.h3,{id:"aksjonsmeny-underkomponent",children:"Aksjonsmeny (underkomponent)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gir plass til:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"lenker til løsninger eller separate sider"}),`
`,e.jsx(n.li,{children:"systemaksjoner eller navigasjonspunkt"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Åpnes via en knapp plassert i toppbanneret."}),`
`]}),`
`,e.jsx(n.h3,{id:"søk-og-knapper",children:"Søk og knapper"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Plasseres normalt i raden under toppbanneret."}),`
`,e.jsxs(n.li,{children:["Kan unntaksvis legges ",e.jsx(n.em,{children:"i"})," toppbanneret for å spare vertikal plass."]}),`
`,e.jsx(n.li,{children:"Bruk standard søkefelt og InlineButton til mørk bakgrunn når funksjonen ligger i banneret."}),`
`]}),`
`,e.jsx(n.h3,{id:"snarvei-til-hovedinnhold",children:"Snarvei til hovedinnhold"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"En tilgjengelighetsfunksjon som lar brukeren hoppe direkte til hovedinnholdet."}),`
`,e.jsx(n.li,{children:"Hindrer at skjermleser leser opp toppbanneret ved hver sidevisning."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Løsningsnavn skal være kort, entydig og lett å identifisere."}),`
`,e.jsx(n.li,{children:"Undertittel brukes for å gi ekstra kontekst når nødvendig."}),`
`,e.jsx(n.li,{children:"Aksjonsmenyens titler skal bruke konsise, handlingsorienterte ord eller klare kategorier."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Første tabstopp skal være snarvei til hovedinnhold."}),`
`,e.jsx(n.li,{children:"Alle interaksjoner i toppbanneret skal ha tydelig fokusmarkering."}),`
`,e.jsx(n.li,{children:"Navigasjonselementer og menyer skal være tilgjengelige via tastatur."}),`
`,e.jsx(n.li,{children:"Logo kan skjules visuelt på mobil, men må fortsatt ha semantisk alt‑tekst dersom den er synlig."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h3,{id:"topbannerinternalactionmenu",children:"TopBannerInternal.ActionMenu"}),`
`,e.jsx(t,{of:s.ActionMenu})]})}function j(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}function a(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,u as frontmatter,h as structuredData,p as toc};
