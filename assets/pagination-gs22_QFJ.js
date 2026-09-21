import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{P as s}from"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let h={title:"Pagination",description:"Pagination brukes til å dele opp store mengder innhold i flere sider slik at brukeren ikke blir overveldet. Den gjør det enklere å navigere frem og tilbake i informasjon som tabeller, søkeresultater eller lister.",icon:"/illustrations/pagination.svg"},u={contents:[{heading:"bruk-pagination-når",content:"store mengder relatert innhold må fordeles over flere sider"},{heading:"bruk-pagination-når",content:"brukeren skal kunne navigere mellom sider i en seksjon"},{heading:"bruk-pagination-når",content:"søkeresultater deles opp på flere sider"},{heading:"unngå-pagination-når",content:"innholdet er uendelig eller kontinuerlig"},{heading:"unngå-pagination-når",content:"det kun finnes én side med innhold"},{heading:"hvorfor-vi-anbefaler-dette",content:"Paginering fordeler innhold i håndterbare mengder for å redusere kognitiv belastning og lastetid. Å vise for mye innhold på én side gjør det vanskelig å orientere seg."},{heading:"hvorfor-vi-anbefaler-dette",content:"Pagination er like bred som innholdet fordi det gir brukeren et intuitivt når-gjelder-dette-kontekst — plassert løsrevet fra innholdet er det uklart hva som pagineres."},{heading:"hvorfor-vi-anbefaler-dette",content:"Uendelig scroll er et fundamentalt annerledes mønster som krever andre UU-hensyn (f.eks. fokusstyring ved innlasting) og passer ikke inn i Pagination-komponenten."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Komponenten har ingen visuelle varianter, men er fleksibel og kan justeres med props:"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Antall treff per side (standard er 10)."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Antall klikkbare sidetall rundt aktiv side (“siblings”)."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Om tekst på forrige/neste-knapper vises eller skjules."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Om sideoppsummeringen vises eller skjules."},{heading:"plassering-og-justering",content:"Pagination skal plasseres rett under og være like bred som innholdet den styrer (tabell, søkeresultat)."},{heading:"plassering-og-justering",content:"Tilpass antall synlige sidetall etter mengden data og forventet blabruk."},{heading:"plassering-og-justering",content:"På mobil anbefales maks tre synlige sidetall for å spare plass."},{heading:"plassering-og-justering",content:"Skjul komponenten når det ikke finnes flere sider."},{heading:"plassering-og-justering",content:"For tydelighet kan du vise en kort tekst øverst i innholdet der pagination ellers ville vært."},{heading:"interaksjon-og-tilstander",content:"Første og siste side vises alltid."},{heading:"interaksjon-og-tilstander",content:"Det skal alltid være minst ett klikkbart sidetall ved siden av aktiv side."},{heading:"interaksjon-og-tilstander",content:"Fokus skal forbli på valgt element ved tastaturnavigasjon."},{heading:"interaksjon-og-tilstander",content:"Skjermleser skal lese opp hva som vises når sidetall endres."},{heading:"tekst",content:"Hvis du skjuler tekst på forrige/neste-knapper, sjekk at pilikonene alene er tilstrekkelige."},{heading:"tilgjengelighet-uu-og-wcag",content:"Tastaturfokus skal forbli innenfor komponenten."},{heading:"tilgjengelighet-uu-og-wcag",content:"Endring av sidetall skal annonseres av skjermleser."},{heading:"tilgjengelighet-uu-og-wcag",content:"Piler og sidetall må ha god kontrast mot bakgrunnen."},{heading:"props",content:'<TypeTable of="Pagination" />'},{heading:"paginationlist",content:'<TypeTable of="Pagination.List" />'}],headings:[{id:"bruk-pagination-når",content:"Bruk Pagination når"},{id:"unngå-pagination-når",content:"Unngå Pagination når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"paginationlist",content:"Pagination.List"}]},p=[{depth:2,url:"#bruk-pagination-når",title:e.jsx(e.Fragment,{children:"Bruk Pagination når"})},{depth:2,url:"#unngå-pagination-når",title:e.jsx(e.Fragment,{children:"Unngå Pagination når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#paginationlist",title:e.jsx(e.Fragment,{children:"Pagination.List"})}];function l(i){const n={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i.components},{Canvas:r,TypeTable:t}=n;return r||a("Canvas"),t||a("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(r,{examplesPath:"components/pagination"}),`
`,e.jsx(n.h2,{id:"bruk-pagination-når",children:"Bruk Pagination når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"store mengder relatert innhold må fordeles over flere sider"}),`
`,e.jsx(n.li,{children:"brukeren skal kunne navigere mellom sider i en seksjon"}),`
`,e.jsx(n.li,{children:"søkeresultater deles opp på flere sider"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-pagination-når",children:"Unngå Pagination når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"innholdet er uendelig eller kontinuerlig"}),`
`,e.jsx(n.li,{children:"det kun finnes én side med innhold"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Paginering fordeler innhold i håndterbare mengder for å redusere kognitiv belastning og lastetid. Å vise for mye innhold på én side gjør det vanskelig å orientere seg."}),`
`,e.jsx(n.li,{children:"Pagination er like bred som innholdet fordi det gir brukeren et intuitivt når-gjelder-dette-kontekst — plassert løsrevet fra innholdet er det uklart hva som pagineres."}),`
`,e.jsx(n.li,{children:"Uendelig scroll er et fundamentalt annerledes mønster som krever andre UU-hensyn (f.eks. fokusstyring ved innlasting) og passer ikke inn i Pagination-komponenten."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"Komponenten har ingen visuelle varianter, men er fleksibel og kan justeres med props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Antall treff per side (standard er 10)."}),`
`,e.jsx(n.li,{children:"Antall klikkbare sidetall rundt aktiv side (“siblings”)."}),`
`,e.jsx(n.li,{children:"Om tekst på forrige/neste-knapper vises eller skjules."}),`
`,e.jsx(n.li,{children:"Om sideoppsummeringen vises eller skjules."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pagination skal plasseres rett under og være like bred som innholdet den styrer (tabell, søkeresultat)."}),`
`,e.jsx(n.li,{children:"Tilpass antall synlige sidetall etter mengden data og forventet blabruk."}),`
`,e.jsx(n.li,{children:"På mobil anbefales maks tre synlige sidetall for å spare plass."}),`
`,e.jsx(n.li,{children:"Skjul komponenten når det ikke finnes flere sider."}),`
`,e.jsx(n.li,{children:"For tydelighet kan du vise en kort tekst øverst i innholdet der pagination ellers ville vært."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Første og siste side vises alltid."}),`
`,e.jsx(n.li,{children:"Det skal alltid være minst ett klikkbart sidetall ved siden av aktiv side."}),`
`,e.jsx(n.li,{children:"Fokus skal forbli på valgt element ved tastaturnavigasjon."}),`
`,e.jsx(n.li,{children:"Skjermleser skal lese opp hva som vises når sidetall endres."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hvis du skjuler tekst på forrige/neste-knapper, sjekk at pilikonene alene er tilstrekkelige."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tastaturfokus skal forbli innenfor komponenten."}),`
`,e.jsx(n.li,{children:"Endring av sidetall skal annonseres av skjermleser."}),`
`,e.jsx(n.li,{children:"Piler og sidetall må ha god kontrast mot bakgrunnen."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h3,{id:"paginationlist",children:"Pagination.List"}),`
`,e.jsx(t,{of:s.List})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}function a(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default,h as frontmatter,u as structuredData,p as toc};
