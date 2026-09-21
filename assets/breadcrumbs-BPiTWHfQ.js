import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{b as i}from"./router-link-B-5WUmgP.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let c={title:"Breadcrumbs",description:"Breadcrumbs hjelper brukeren med å forstå hvor de er i nettstedets struktur og finne veien tilbake til høyere nivåer.",icon:"/illustrations/breadcrumbs.svg"},m={contents:[{heading:"bruk-breadcrumbs-når",content:"du vil vise brukeren hvor de er i nettstedets struktur"},{heading:"bruk-breadcrumbs-når",content:"brukeren skal kunne gå tilbake til et høyere nivå"},{heading:"unngå-breadcrumbs-når",content:"navigasjonen følger en lineær prosess med flere steg. Bruk i stedet StepList."},{heading:"unngå-breadcrumbs-når",content:"løsningen kun har ett eller to nivåer. Bruk i stedet en tilbakelenke."},{heading:"hvorfor-vi-anbefaler-dette",content:"Brødsmulestien hjelper brukeren å forstå hvor de er i sidestrukturen og å navigere til et høyere nivå. På sider med mange nivåer kan dette redusere forvirring og gjøre det enklere å finne frem."},{heading:"hvorfor-vi-anbefaler-dette",content:"Vi anbefaler ikke Breadcrumbs for korte stier med ett eller to nivåer. Da gir de liten navigasjonsverdi, samtidig som de tar plass og kan øke den kognitive belastningen."},{heading:"hvorfor-vi-anbefaler-dette",content:"Breadcrumbs er for navigasjon, ikke for å vise steg i en prosess. For steg-baserte flyter bruker du StepList, som viser fremdrift og har andre krav til universell utforming."},{heading:"plassering-og-justering",content:"Breadcrumbs skal alltid ligge øverst på siden: rett under toppbanneret og over sidetittelen."},{heading:"plassering-og-justering",content:"På innloggede sider skal stien starte med *Min side*, deretter domenet og eventuelle undersider."},{heading:"plassering-og-justering",content:"Tilbakelenker på innloggede sider skal peke til hovedsiden for tjenesten, eller *Min side* dersom hovedside ikke finnes."},{heading:"plassering-og-justering",content:"Lange stier forkortes automatisk, men kan vises i full lengde ved å sette `shouldCollapse` til `false`."},{heading:"interaksjon-og-tilstander",content:"Brukeren kan vise hele den forkortede stien ved å trykke på ekspander-ikonet."},{heading:"interaksjon-og-tilstander",content:"På mobil flyttes fokus til den første brødsmulen når hele stien vises."},{heading:"tekst",content:"Teksten bør samsvare med overskriftene eller navigasjonen på nettsiden, slik at det er lett å kjenne igjen nivåene."},{heading:"tilgjengelighet-uu-og-wcag",content:"Komponenten bruker `<nav>` og annonserer “Jeg er her” med riktig språk."},{heading:"tilgjengelighet-uu-og-wcag",content:'Siste element markeres som gjeldende side med `aria-current="page"`, med mulighet for å skru av mekanismen (`showLastItemAsCurrentPage`).'},{heading:"props",content:'<TypeTable of="Breadcrumbs" />'},{heading:"breadcrumbslist",content:'<TypeTable of="Breadcrumbs.List" />'},{heading:"breadcrumbsitem",content:'<TypeTable of="Breadcrumbs.Item" />'},{heading:"breadcrumbslink",content:'<TypeTable of="Breadcrumbs.Link" />'}],headings:[{id:"bruk-breadcrumbs-når",content:"Bruk Breadcrumbs når"},{id:"unngå-breadcrumbs-når",content:"Unngå Breadcrumbs når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"breadcrumbslist",content:"Breadcrumbs.List"},{id:"breadcrumbsitem",content:"Breadcrumbs.Item"},{id:"breadcrumbslink",content:"Breadcrumbs.Link"}]},h=[{depth:2,url:"#bruk-breadcrumbs-når",title:e.jsx(e.Fragment,{children:"Bruk Breadcrumbs når"})},{depth:2,url:"#unngå-breadcrumbs-når",title:e.jsx(e.Fragment,{children:"Unngå Breadcrumbs når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#breadcrumbslist",title:e.jsx(e.Fragment,{children:"Breadcrumbs.List"})},{depth:3,url:"#breadcrumbsitem",title:e.jsx(e.Fragment,{children:"Breadcrumbs.Item"})},{depth:3,url:"#breadcrumbslink",title:e.jsx(e.Fragment,{children:"Breadcrumbs.Link"})}];function d(n){const r={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...n.components},{Canvas:s,TypeTable:t}=r;return s||l("Canvas"),t||l("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(s,{examplesPath:"components/breadcrumbs"}),`
`,e.jsx(r.h2,{id:"bruk-breadcrumbs-når",children:"Bruk Breadcrumbs når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"du vil vise brukeren hvor de er i nettstedets struktur"}),`
`,e.jsx(r.li,{children:"brukeren skal kunne gå tilbake til et høyere nivå"}),`
`]}),`
`,e.jsx(r.h2,{id:"unngå-breadcrumbs-når",children:"Unngå Breadcrumbs når"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"navigasjonen følger en lineær prosess med flere steg. Bruk i stedet StepList."}),`
`,e.jsx(r.li,{children:"løsningen kun har ett eller to nivåer. Bruk i stedet en tilbakelenke."}),`
`]}),`
`,e.jsx(r.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Brødsmulestien hjelper brukeren å forstå hvor de er i sidestrukturen og å navigere til et høyere nivå. På sider med mange nivåer kan dette redusere forvirring og gjøre det enklere å finne frem."}),`
`,e.jsx(r.li,{children:"Vi anbefaler ikke Breadcrumbs for korte stier med ett eller to nivåer. Da gir de liten navigasjonsverdi, samtidig som de tar plass og kan øke den kognitive belastningen."}),`
`,e.jsx(r.li,{children:"Breadcrumbs er for navigasjon, ikke for å vise steg i en prosess. For steg-baserte flyter bruker du StepList, som viser fremdrift og har andre krav til universell utforming."}),`
`]}),`
`,e.jsx(r.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(r.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Breadcrumbs skal alltid ligge øverst på siden: rett under toppbanneret og over sidetittelen."}),`
`,e.jsxs(r.li,{children:["På innloggede sider skal stien starte med ",e.jsx(r.em,{children:"Min side"}),", deretter domenet og eventuelle undersider."]}),`
`,e.jsxs(r.li,{children:["Tilbakelenker på innloggede sider skal peke til hovedsiden for tjenesten, eller ",e.jsx(r.em,{children:"Min side"})," dersom hovedside ikke finnes."]}),`
`,e.jsxs(r.li,{children:["Lange stier forkortes automatisk, men kan vises i full lengde ved å sette ",e.jsx(r.code,{children:"shouldCollapse"})," til ",e.jsx(r.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(r.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Brukeren kan vise hele den forkortede stien ved å trykke på ekspander-ikonet."}),`
`,e.jsx(r.li,{children:"På mobil flyttes fokus til den første brødsmulen når hele stien vises."}),`
`]}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(r.p,{children:"Teksten bør samsvare med overskriftene eller navigasjonen på nettsiden, slik at det er lett å kjenne igjen nivåene."}),`
`,e.jsx(r.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Komponenten bruker ",e.jsx(r.code,{children:"<nav>"})," og annonserer “Jeg er her” med riktig språk."]}),`
`,e.jsxs(r.li,{children:["Siste element markeres som gjeldende side med ",e.jsx(r.code,{children:'aria-current="page"'}),", med mulighet for å skru av mekanismen (",e.jsx(r.code,{children:"showLastItemAsCurrentPage"}),")."]}),`
`]}),`
`,`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r.h3,{id:"breadcrumbslist",children:"Breadcrumbs.List"}),`
`,e.jsx(t,{of:i.List}),`
`,e.jsx(r.h3,{id:"breadcrumbsitem",children:"Breadcrumbs.Item"}),`
`,e.jsx(t,{of:i.Item}),`
`,e.jsx(r.h3,{id:"breadcrumbslink",children:"Breadcrumbs.Link"}),`
`,e.jsx(t,{of:i.Link})]})}function k(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}function l(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default,c as frontmatter,m as structuredData,h as toc};
