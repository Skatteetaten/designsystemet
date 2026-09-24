import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{m as o}from"./router-link-Bw__wKpt.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"IconButton",description:"IconButton brukes til mindre fremtredende handlinger, særlig der det er lite plass, eller der funksjonen er så innlysende at den ikke trenger tekstlig forklaring. Den gir en effektiv og kompakt måte å utføre handlinger på.",icon:"/illustrations/iconbutton.svg"},h={contents:[{heading:"bruk-iconbutton-når",content:"du vil hjelpe brukeren å huske tilgjengelige handlinger, f.eks. en print‑knapp"},{heading:"bruk-iconbutton-når",content:"plass er begrenset"},{heading:"bruk-iconbutton-når",content:"en ikon‑basert handling er tydelig nok uten tekst"},{heading:"unngå-iconbutton-når",content:"handlingen er viktig eller sentral — bruk da vanlig Button"},{heading:"unngå-iconbutton-når",content:"ikonet alene ikke tydelig kommuniserer funksjonen — bruk InlineButton"},{heading:"hvorfor-vi-anbefaler-dette",content:"`disabled`-tilstand anbefales ikke fordi lav kontrast gjør den vanskelig å se, og skjermlesere kan ignorere deaktiverte elementer. En aktiv knapp med forklaring er mer tilgjengelig."},{heading:"hvorfor-vi-anbefaler-dette",content:"Ikonet alene er ikke alltid selvforklarende, og riktig `aria-label` eller `title` sikrer at alle brukere forstår funksjonen — inklusivt sansehemmede og brukere som når ikoner med tastatur."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi skiller mellom IconButton (kompakt isolert handling) og Button (sentral handling) for å bevare et konsistent knapphierarki på tvers av løsninger."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"IconButton finnes i to hovedvarianter:"},{heading:"med-sirkel",content:"Tar mer oppmerksomhet."},{heading:"med-sirkel",content:"Passer når handlingen skal være mer synlig."},{heading:"uten-sirkel",content:"Mindre fremtredende."},{heading:"uten-sirkel",content:"Passer når du vil minimere visuell støy."},{heading:"uten-sirkel",content:"Varianter finnes også i flere størrelser; størrelse og sirkel påvirker synligheten."},{heading:"plassering-og-justering",content:"Bruk IconButton der handlinger skal være lett tilgjengelige uten å ta mye plass."},{heading:"plassering-og-justering",content:"Plasser knappen tett på innholdet den hører til, f.eks. i kort, tabeller eller små seksjoner."},{heading:"interaksjon-og-tilstander",content:"Ikonet fungerer som klikkflate."},{heading:"interaksjon-og-tilstander",content:"Bruk `title` for å vise forklarende tekst som tooltip."},{heading:"interaksjon-og-tilstander",content:"Skal ikke brukes som lenke til andre sider — kun punkt‑handlinger."},{heading:"tekst",content:"Gi alltid meningsbærende IconButtons et forklarende `title` eller `aria-label`."},{heading:"tekst",content:"Unngå tvetydige ikoner som brukerne ikke umiddelbart forstår."},{heading:"tilgjengelighet-uu-og-wcag",content:"Bruk `title` eller `aria-label` for å beskrive knappens funksjon for skjermlesere."},{heading:"tilgjengelighet-uu-og-wcag",content:"Ikke bruk inaktiv (disabled) IconButton:"},{heading:"tilgjengelighet-uu-og-wcag",content:"Lav kontrast kan gjøre den vanskelig å se."},{heading:"tilgjengelighet-uu-og-wcag",content:"Endring fra inaktiv til aktiv kan overses."},{heading:"tilgjengelighet-uu-og-wcag",content:"Noen skjermlesere ignorerer inaktive elementer."},{heading:"props",content:'<TypeTable of="IconButton" />'}],headings:[{id:"bruk-iconbutton-når",content:"Bruk IconButton når"},{id:"unngå-iconbutton-når",content:"Unngå IconButton når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"med-sirkel",content:"Med sirkel"},{id:"uten-sirkel",content:"Uten sirkel"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"}]},c=[{depth:2,url:"#bruk-iconbutton-når",title:e.jsx(e.Fragment,{children:"Bruk IconButton når"})},{depth:2,url:"#unngå-iconbutton-når",title:e.jsx(e.Fragment,{children:"Unngå IconButton når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#med-sirkel",title:e.jsx(e.Fragment,{children:"Med sirkel"})},{depth:3,url:"#uten-sirkel",title:e.jsx(e.Fragment,{children:"Uten sirkel"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})}];function l(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r.components},{Canvas:t,TypeTable:i}=n;return t||s("Canvas"),i||s("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(t,{examplesPath:"components/iconbutton"}),`
`,e.jsx(n.h2,{id:"bruk-iconbutton-når",children:"Bruk IconButton når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du vil hjelpe brukeren å huske tilgjengelige handlinger, f.eks. en print‑knapp"}),`
`,e.jsx(n.li,{children:"plass er begrenset"}),`
`,e.jsx(n.li,{children:"en ikon‑basert handling er tydelig nok uten tekst"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-iconbutton-når",children:"Unngå IconButton når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"handlingen er viktig eller sentral — bruk da vanlig Button"}),`
`,e.jsx(n.li,{children:"ikonet alene ikke tydelig kommuniserer funksjonen — bruk InlineButton"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"}),"-tilstand anbefales ikke fordi lav kontrast gjør den vanskelig å se, og skjermlesere kan ignorere deaktiverte elementer. En aktiv knapp med forklaring er mer tilgjengelig."]}),`
`,e.jsxs(n.li,{children:["Ikonet alene er ikke alltid selvforklarende, og riktig ",e.jsx(n.code,{children:"aria-label"})," eller ",e.jsx(n.code,{children:"title"})," sikrer at alle brukere forstår funksjonen — inklusivt sansehemmede og brukere som når ikoner med tastatur."]}),`
`,e.jsxs(n.li,{children:["Vi skiller mellom IconButton (kompakt isolert handling) og ",e.jsx(n.a,{href:"/byggeklosser/komponenter/button",children:"Button"})," (sentral handling) for å bevare et konsistent knapphierarki på tvers av løsninger."]}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"IconButton finnes i to hovedvarianter:"}),`
`,e.jsx(n.h3,{id:"med-sirkel",children:"Med sirkel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tar mer oppmerksomhet."}),`
`,e.jsx(n.li,{children:"Passer når handlingen skal være mer synlig."}),`
`]}),`
`,e.jsx(n.h3,{id:"uten-sirkel",children:"Uten sirkel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mindre fremtredende."}),`
`,e.jsx(n.li,{children:"Passer når du vil minimere visuell støy."}),`
`]}),`
`,e.jsx(n.p,{children:"Varianter finnes også i flere størrelser; størrelse og sirkel påvirker synligheten."}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bruk IconButton der handlinger skal være lett tilgjengelige uten å ta mye plass."}),`
`,e.jsx(n.li,{children:"Plasser knappen tett på innholdet den hører til, f.eks. i kort, tabeller eller små seksjoner."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ikonet fungerer som klikkflate."}),`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"title"})," for å vise forklarende tekst som tooltip."]}),`
`,e.jsx(n.li,{children:"Skal ikke brukes som lenke til andre sider — kun punkt‑handlinger."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gi alltid meningsbærende IconButtons et forklarende ",e.jsx(n.code,{children:"title"})," eller ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsx(n.li,{children:"Unngå tvetydige ikoner som brukerne ikke umiddelbart forstår."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"title"})," eller ",e.jsx(n.code,{children:"aria-label"})," for å beskrive knappens funksjon for skjermlesere."]}),`
`,e.jsxs(n.li,{children:["Ikke bruk inaktiv (disabled) IconButton:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lav kontrast kan gjøre den vanskelig å se."}),`
`,e.jsx(n.li,{children:"Endring fra inaktiv til aktiv kan overses."}),`
`,e.jsx(n.li,{children:"Noen skjermlesere ignorerer inaktive elementer."}),`
`]}),`
`]}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:o})]})}function j(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}function s(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default,u as frontmatter,h as structuredData,c as toc};
