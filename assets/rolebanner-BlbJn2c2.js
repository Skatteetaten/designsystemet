import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{s as o}from"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"RoleBanner",description:"RoleBanner brukes i innloggede løsninger for å vise brukeren hvem de representerer (seg selv eller andre) og gi kontekst for handlinger de utfører på vegne av denne rollen."},h={contents:[{heading:"bruk-rolebanner-når",content:"brukeren er logget inn i en publikumsløsning"},{heading:"bruk-rolebanner-når",content:"brukeren representerer andre enn seg selv (person eller virksomhet)"},{heading:"bruk-rolebanner-når",content:"innlogget bruker skal vises i skjema eller prosesser, og toppbanneret ikke viser denne informasjonen"},{heading:"bruk-rolebanner-når",content:"brukerens representasjon må være synlig uansett hvor langt ned på siden de scroller"},{heading:"unngå-rolebanner-når",content:"løsningen er et internt system — disse har andre mekanismer for rollevisning"},{heading:"unngå-rolebanner-når",content:"du skal vise feilmeldinger eller varselmeldinger — bruk mønster for systemvarsler"},{heading:"unngå-rolebanner-når",content:"identiteten/rollen til brukeren ennå ikke er kjent"},{heading:"hvorfor-vi-anbefaler-dette",content:"Gul sticky banner er valgt for representasjonsvisning fordi det er kritisk at brukeren alltid vet hvem de handler på vegne av. Feil representasjon kan ha juridiske og økonomiske konsekvenser."},{heading:"hvorfor-vi-anbefaler-dette",content:"Grå variant brukes når brukeren representerer seg selv fordi det er informativt, men ikke like kritisk — vi bruker visuell vekting bevisst for å formidle viktighet."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi anbefaler ikke RoleBanner før identiteten er kjent for å unngå at en tom eller feil representasjon vises — det kan skape forvirring og feil handling."},{heading:"bakgrunnsfarger",content:`**Gul:** Brukes når brukeren representerer noen andre (virksomhet eller annen person).\\
Gir sterkere visuell oppmerksomhet.`},{heading:"bakgrunnsfarger",content:"**Grå:** Brukes når brukeren representerer seg selv, særlig i isolerte prosesser der toppbanneret er redusert."},{heading:"sticky-standard-og-ikke-sticky",content:"**Sticky:** Anbefalt som standard. Banneret følger med når brukeren scroller, slik at representasjonen alltid er synlig."},{heading:"sticky-standard-og-ikke-sticky",content:"**Ikke-sticky:** Kan brukes i tilfeller der persistent visning ikke er ønskelig eller nødvendig."},{heading:"plassering-og-justering",content:"Plasseres øverst under toppbanneret i innloggede løsninger."},{heading:"plassering-og-justering",content:"Bruk sticky‑modus når bruker representerer andre, for å gi kontinuerlig kontekst."},{heading:"plassering-og-justering",content:"I spesielle prosesser uten toppbanner: vis kun språkvelger og «Logg ut», og bruk grå variant for å vise innlogget bruker."},{heading:"interaksjon-og-tilstander",content:"Rollen vises kun når brukeren er innlogget."},{heading:"interaksjon-og-tilstander",content:"Banneret endres avhengig av om brukeren representerer seg selv eller andre."},{heading:"interaksjon-og-tilstander",content:"Ved representasjon av andre:"},{heading:"interaksjon-og-tilstander",content:"Bruk gul variant"},{heading:"interaksjon-og-tilstander",content:"Bruk sticky‑modus"},{heading:"interaksjon-og-tilstander",content:"Behold full topplinje (meny, brukerknapp, søk)"},{heading:"interaksjon-og-tilstander",content:"Ved isolerte prosesser:"},{heading:"interaksjon-og-tilstander",content:"Skjul meny og brukerknapp"},{heading:"interaksjon-og-tilstander",content:"Vis språkvelger og «Logg ut»"},{heading:"interaksjon-og-tilstander",content:"Bruk grå variant av RoleBanner"},{heading:"tekst",content:"Teksten skal være tydelig og direkte: «Du representerer …»."},{heading:"tekst",content:"Rolleangivelsen skal være kort, korrekt og lett å skanne."},{heading:"tekst",content:"Unngå tekniske betegnelser eller intern terminologi brukeren ikke kjenner."},{heading:"tilgjengelighet-uu-og-wcag",content:"Banneret skal vises på et konsistent og forutsigbart sted."},{heading:"tilgjengelighet-uu-og-wcag",content:"Representasjonen må formidles både visuelt og semantisk."},{heading:"tilgjengelighet-uu-og-wcag",content:"Fargebruk skal være tydelig, men teksten må fortsatt ha høy kontrast."},{heading:"tilgjengelighet-uu-og-wcag",content:"Sticky‑modus må ikke skjule viktig innhold eller forstyrre navigasjon."},{heading:"props",content:'<TypeTable of="RoleBanner" />'}],headings:[{id:"bruk-rolebanner-når",content:"Bruk RoleBanner når"},{id:"unngå-rolebanner-når",content:"Unngå RoleBanner når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"bakgrunnsfarger",content:"Bakgrunnsfarger"},{id:"sticky-standard-og-ikke-sticky",content:"Sticky (standard) og ikke-sticky"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},c=[{depth:2,url:"#bruk-rolebanner-når",title:e.jsx(e.Fragment,{children:"Bruk RoleBanner når"})},{depth:2,url:"#unngå-rolebanner-når",title:e.jsx(e.Fragment,{children:"Unngå RoleBanner når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#bakgrunnsfarger",title:e.jsx(e.Fragment,{children:"Bakgrunnsfarger"})},{depth:3,url:"#sticky-standard-og-ikke-sticky",title:e.jsx(e.Fragment,{children:"Sticky (standard) og ikke-sticky"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function s(r){const n={br:"br",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...r.components},{Canvas:t,TypeTable:i}=n;return t||l("Canvas"),i||l("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(t,{examplesPath:"components/rolebanner"}),`
`,e.jsx(n.h2,{id:"bruk-rolebanner-når",children:"Bruk RoleBanner når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"brukeren er logget inn i en publikumsløsning"}),`
`,e.jsx(n.li,{children:"brukeren representerer andre enn seg selv (person eller virksomhet)"}),`
`,e.jsx(n.li,{children:"innlogget bruker skal vises i skjema eller prosesser, og toppbanneret ikke viser denne informasjonen"}),`
`,e.jsx(n.li,{children:"brukerens representasjon må være synlig uansett hvor langt ned på siden de scroller"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-rolebanner-når",children:"Unngå RoleBanner når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"løsningen er et internt system — disse har andre mekanismer for rollevisning"}),`
`,e.jsx(n.li,{children:"du skal vise feilmeldinger eller varselmeldinger — bruk mønster for systemvarsler"}),`
`,e.jsx(n.li,{children:"identiteten/rollen til brukeren ennå ikke er kjent"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gul sticky banner er valgt for representasjonsvisning fordi det er kritisk at brukeren alltid vet hvem de handler på vegne av. Feil representasjon kan ha juridiske og økonomiske konsekvenser."}),`
`,e.jsx(n.li,{children:"Grå variant brukes når brukeren representerer seg selv fordi det er informativt, men ikke like kritisk — vi bruker visuell vekting bevisst for å formidle viktighet."}),`
`,e.jsx(n.li,{children:"Vi anbefaler ikke RoleBanner før identiteten er kjent for å unngå at en tom eller feil representasjon vises — det kan skape forvirring og feil handling."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"bakgrunnsfarger",children:"Bakgrunnsfarger"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gul:"})," Brukes når brukeren representerer noen andre (virksomhet eller annen person).",e.jsx(n.br,{}),`
`,"Gir sterkere visuell oppmerksomhet."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grå:"})," Brukes når brukeren representerer seg selv, særlig i isolerte prosesser der toppbanneret er redusert."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sticky-standard-og-ikke-sticky",children:"Sticky (standard) og ikke-sticky"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sticky:"})," Anbefalt som standard. Banneret følger med når brukeren scroller, slik at representasjonen alltid er synlig."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke-sticky:"})," Kan brukes i tilfeller der persistent visning ikke er ønskelig eller nødvendig."]}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Plasseres øverst under toppbanneret i innloggede løsninger."}),`
`,e.jsx(n.li,{children:"Bruk sticky‑modus når bruker representerer andre, for å gi kontinuerlig kontekst."}),`
`,e.jsx(n.li,{children:"I spesielle prosesser uten toppbanner: vis kun språkvelger og «Logg ut», og bruk grå variant for å vise innlogget bruker."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rollen vises kun når brukeren er innlogget."}),`
`,e.jsx(n.li,{children:"Banneret endres avhengig av om brukeren representerer seg selv eller andre."}),`
`,e.jsxs(n.li,{children:["Ved representasjon av andre:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bruk gul variant"}),`
`,e.jsx(n.li,{children:"Bruk sticky‑modus"}),`
`,e.jsx(n.li,{children:"Behold full topplinje (meny, brukerknapp, søk)"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Ved isolerte prosesser:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Skjul meny og brukerknapp"}),`
`,e.jsx(n.li,{children:"Vis språkvelger og «Logg ut»"}),`
`,e.jsx(n.li,{children:"Bruk grå variant av RoleBanner"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Teksten skal være tydelig og direkte: «Du representerer …»."}),`
`,e.jsx(n.li,{children:"Rolleangivelsen skal være kort, korrekt og lett å skanne."}),`
`,e.jsx(n.li,{children:"Unngå tekniske betegnelser eller intern terminologi brukeren ikke kjenner."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Banneret skal vises på et konsistent og forutsigbart sted."}),`
`,e.jsx(n.li,{children:"Representasjonen må formidles både visuelt og semantisk."}),`
`,e.jsx(n.li,{children:"Fargebruk skal være tydelig, men teksten må fortsatt ha høy kontrast."}),`
`,e.jsx(n.li,{children:"Sticky‑modus må ikke skjule viktig innhold eller forstyrre navigasjon."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:o})]})}function j(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}function l(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,u as frontmatter,h as structuredData,c as toc};
