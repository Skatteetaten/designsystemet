import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{S as o}from"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let k={title:"ScrollToTopButton",description:"ScrollToTopButton brukes for å gjøre det raskere og enklere for brukeren å navigere tilbake til toppen av siden etter å ha scrollet langt ned. Den forbedrer brukeropplevelsen på sider med mye innhold og reduserer behovet for omfattende manuell scrolling.",icon:"/illustrations/scrolltotopbutton.svg"},h={contents:[{heading:"bruk-scrolltotopbutton-når",content:"siden inneholder mye innhold som gjør scroll-strekningen lang"},{heading:"bruk-scrolltotopbutton-når",content:"brukeren typisk beveger seg langt ned i lister, tabeller, søkeresultater eller dokumentasjon"},{heading:"bruk-scrolltotopbutton-når",content:"det er viktig å gjøre navigasjon tilbake til toppen effektiv og tilgjengelig"},{heading:"unngå-scrolltotopbutton-når",content:"siden er kort og ikke krever scrolling"},{heading:"unngå-scrolltotopbutton-når",content:"andre navigasjonsmønstre (f.eks. feste av toppnavigasjon) allerede løser behovet"},{heading:"unngå-scrolltotopbutton-når",content:"siden har et lineært fokus og ikke krever hyppige hopp"},{heading:"hvorfor-vi-anbefaler-dette",content:"Knappen vises kun etter scrolling for å unngå unødvendig visuell støy på sider med lite innhold. Den er en effektivitetshjelp, ikke et fast navigasjonselement."},{heading:"hvorfor-vi-anbefaler-dette",content:"Scroll-animasjon skal være moderat for å unngå å forårsake ubehag for brukere med bevegelsessensitivitet (jf. WCAG 2.3.3 Animation from Interactions)."},{heading:"hvorfor-vi-anbefaler-dette",content:"`aria-label` er obligatorisk fordi knappen kun har et ikon — uten tekstalternativ er funksjonen usynlig for skjermleserbrukere."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Komponenten har ingen egne visuelle varianter, men kan tilpasses med props og plasseres etter behov."},{heading:"standard-oppførsel",content:"Vises først når brukeren har scrollet et stykke ned på siden."},{heading:"standard-oppførsel",content:"Plasseres flytende nederst i høyre hjørne som standard, på bred skjerm og midt på siden på mobil."},{heading:"tilpasset-plassering",content:"Kan justeres ved behov (med CSS) for å unngå kollisjon med andre faste elementer, som chat-knapper eller cookie-banner."},{heading:"plassering-og-justering",content:"Skal ikke dekke viktig innhold eller interaksjonselementer."},{heading:"plassering-og-justering",content:"Plasseres fast i en skjermkant, vanligvis nederst til høyre."},{heading:"plassering-og-justering",content:"Juster avstand til kant ved overlapp med annet fast UI."},{heading:"interaksjon-og-tilstander",content:"Knappen vises når siden scroller forbi et definert punkt."},{heading:"interaksjon-og-tilstander",content:"Ved klikk scroller siden rolig tilbake til toppen."},{heading:"interaksjon-og-tilstander",content:"Skal være synlig nok til å bli oppdaget, men ikke forstyrrende."},{heading:"tekst",content:"Komponenten bruker ikon (pil opp), og trenger som regel ikke tekst."},{heading:"tekst",content:"Dersom tekst brukes, skal den være kort, som «Til toppen»."},{heading:"tilgjengelighet-uu-og-wcag",content:"Knappen skal være fokusérbar med tastatur."},{heading:"tilgjengelighet-uu-og-wcag",content:'Tekstalternativ (`aria-label="Gå til toppen"`) må settes for skjermlesere.'},{heading:"tilgjengelighet-uu-og-wcag",content:"Kontrastkrav må oppfylles."},{heading:"tilgjengelighet-uu-og-wcag",content:"Scroll-animasjon skal ikke skape bevegelse som oppleves ubehagelig — bruk moderat hastighet."},{heading:"props",content:'<TypeTable of="ScrollToTopButton" />'}],headings:[{id:"bruk-scrolltotopbutton-når",content:"Bruk ScrollToTopButton når"},{id:"unngå-scrolltotopbutton-når",content:"Unngå ScrollToTopButton når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"standard-oppførsel",content:"Standard oppførsel"},{id:"tilpasset-plassering",content:"Tilpasset plassering"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},c=[{depth:2,url:"#bruk-scrolltotopbutton-når",title:e.jsx(e.Fragment,{children:"Bruk ScrollToTopButton når"})},{depth:2,url:"#unngå-scrolltotopbutton-når",title:e.jsx(e.Fragment,{children:"Unngå ScrollToTopButton når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#standard-oppførsel",title:e.jsx(e.Fragment,{children:"Standard oppførsel"})},{depth:3,url:"#tilpasset-plassering",title:e.jsx(e.Fragment,{children:"Tilpasset plassering"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function l(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components},{Canvas:r,TypeTable:s}=n;return r||i("Canvas"),s||i("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(r,{examplesPath:"components/scrolltotopbutton"}),`
`,e.jsx(n.h2,{id:"bruk-scrolltotopbutton-når",children:"Bruk ScrollToTopButton når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"siden inneholder mye innhold som gjør scroll-strekningen lang"}),`
`,e.jsx(n.li,{children:"brukeren typisk beveger seg langt ned i lister, tabeller, søkeresultater eller dokumentasjon"}),`
`,e.jsx(n.li,{children:"det er viktig å gjøre navigasjon tilbake til toppen effektiv og tilgjengelig"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-scrolltotopbutton-når",children:"Unngå ScrollToTopButton når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"siden er kort og ikke krever scrolling"}),`
`,e.jsx(n.li,{children:"andre navigasjonsmønstre (f.eks. feste av toppnavigasjon) allerede løser behovet"}),`
`,e.jsx(n.li,{children:"siden har et lineært fokus og ikke krever hyppige hopp"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Knappen vises kun etter scrolling for å unngå unødvendig visuell støy på sider med lite innhold. Den er en effektivitetshjelp, ikke et fast navigasjonselement."}),`
`,e.jsx(n.li,{children:"Scroll-animasjon skal være moderat for å unngå å forårsake ubehag for brukere med bevegelsessensitivitet (jf. WCAG 2.3.3 Animation from Interactions)."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," er obligatorisk fordi knappen kun har et ikon — uten tekstalternativ er funksjonen usynlig for skjermleserbrukere."]}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"Komponenten har ingen egne visuelle varianter, men kan tilpasses med props og plasseres etter behov."}),`
`,e.jsx(n.h3,{id:"standard-oppførsel",children:"Standard oppførsel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vises først når brukeren har scrollet et stykke ned på siden."}),`
`,e.jsx(n.li,{children:"Plasseres flytende nederst i høyre hjørne som standard, på bred skjerm og midt på siden på mobil."}),`
`]}),`
`,e.jsx(n.h3,{id:"tilpasset-plassering",children:"Tilpasset plassering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Kan justeres ved behov (med CSS) for å unngå kollisjon med andre faste elementer, som chat-knapper eller cookie-banner."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Skal ikke dekke viktig innhold eller interaksjonselementer."}),`
`,e.jsx(n.li,{children:"Plasseres fast i en skjermkant, vanligvis nederst til høyre."}),`
`,e.jsx(n.li,{children:"Juster avstand til kant ved overlapp med annet fast UI."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Knappen vises når siden scroller forbi et definert punkt."}),`
`,e.jsx(n.li,{children:"Ved klikk scroller siden rolig tilbake til toppen."}),`
`,e.jsx(n.li,{children:"Skal være synlig nok til å bli oppdaget, men ikke forstyrrende."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Komponenten bruker ikon (pil opp), og trenger som regel ikke tekst."}),`
`,e.jsx(n.li,{children:"Dersom tekst brukes, skal den være kort, som «Til toppen»."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Knappen skal være fokusérbar med tastatur."}),`
`,e.jsxs(n.li,{children:["Tekstalternativ (",e.jsx(n.code,{children:'aria-label="Gå til toppen"'}),") må settes for skjermlesere."]}),`
`,e.jsx(n.li,{children:"Kontrastkrav må oppfylles."}),`
`,e.jsx(n.li,{children:"Scroll-animasjon skal ikke skape bevegelse som oppleves ubehagelig — bruk moderat hastighet."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(s,{of:o})]})}function u(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}function i(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default,k as frontmatter,h as structuredData,c as toc};
