import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{G as i,J as o,f as d}from"./router-link-BGTgsLNT.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let u={title:"Select",description:"Select brukes når brukeren skal velge ett alternativ fra en liste med mange valg. Den er spesielt nyttig når tilgjengelig plass er begrenset, og når radioknapper ville blitt for omfattende.",icon:"/illustrations/select.svg"},f={contents:[{heading:"bruk-select-når",content:"det er omtrent 5–15 alternativer å velge mellom"},{heading:"bruk-select-når",content:"du trenger å vise flere valg på liten plass"},{heading:"bruk-select-når",content:"valget skal presenteres kompakt og brukeren kun kan velge ett alternativ"},{heading:"unngå-select-når",content:"du skal navigere mellom sider eller seksjoner"},{heading:"unngå-select-når",content:"brukeren skal velge flere alternativer (velg da CheckboxGroup eller annen flervalgskomponent)"},{heading:"unngå-select-når",content:"brukeren trenger oversikt over alle alternativene samtidig — vis dem heller med RadioGroup eller CheckboxGroup"},{heading:"unngå-select-når",content:"listen er lang og brukeren har behov for å søke seg frem — bruk Combobox"},{heading:"hvorfor-vi-anbefaler-dette",content:"Native select brukes for å gi brukerne forutsigbar og tilgjengelig atferd — nettleserens innebygde select har god støtte for skjermlesere og tastatur på alle plattformer."},{heading:"hvorfor-vi-anbefaler-dette",content:"5–15 alternativer er en anbefaling fra NN Group, ikke en hard grense. Med få alternativer bør du heller vise dem alle slik at brukeren kan sammenligne, og med mange alternativer blir en lukket liste tung å navigere. Se Å velge blant flere for en samlet oversikt."},{heading:"hvorfor-vi-anbefaler-dette",content:"`disabled` anbefales ikke fordi skjermlesere kan ignorere deaktiverte felt. `readOnly` er et bedre alternativ når valget ikke skal kunne endres, men verdien fortsatt skal vises og sendes med."},{heading:"standard-atferd",content:`Select bruker nettleserens innebygde funksjonalitet.\\
Det gir:`},{heading:"standard-atferd",content:"Native visning som varierer mellom nettlesere"},{heading:"standard-atferd",content:"Forutsigbar og tilgjengelig atferd for brukeren"},{heading:"read-only",content:"Brukes når brukeren skal se et valg som allerede er gjort, men ikke kan endre det."},{heading:"read-only",content:"Brukeren kan fortsatt navigere til feltet, markere og kopiere innholdet."},{heading:"read-only",content:"Verdien til valgt alternativ sendes med skjemaet når `name` er satt — i motsetning til disabled‑felt."},{heading:"read-only",content:"Vær forsiktig med å bruke read-only som en midlertidig lås, for eksempel mens noe lastes. Brukeren får da ingen forklaring på hvorfor feltet ikke kan endres."},{heading:"plassering-og-justering",content:"Sorter alternativer i en logisk rekkefølge, f.eks. alfabetisk."},{heading:"plassering-og-justering",content:"Unngå lange setninger som alternativer — hold valgene korte og skannbare."},{heading:"interaksjon-og-tilstander",content:"Listen åpner seg i nettleserens egen stil og funksjonalitet."},{heading:"interaksjon-og-tilstander",content:"Select kan utvides med grupperte alternativer (optgroup) dersom listen er lang."},{heading:"interaksjon-og-tilstander",content:"Brukeren får kun velge ett valg — ingen multiple‑valgstøtte i designsystemets bruksmønster."},{heading:"tekst",content:"Ledetekst skal alltid brukes og plasseres over feltet."},{heading:"tekst",content:"Ledeteksten bør være kort (helst én linje)."},{heading:"tekst",content:"Hvis Select er plassert inne i en tabell, kan ledeteksten skjules (men skal fortsatt eksistere semantisk)."},{heading:"tilgjengelighet-uu-og-wcag",content:"Select‑komponenten følger systemets native tilgjengelighetsmønster."},{heading:"tilgjengelighet-uu-og-wcag",content:"Sørg for:"},{heading:"tilgjengelighet-uu-og-wcag",content:"tydelig og konsistent ledetekst"},{heading:"tilgjengelighet-uu-og-wcag",content:"logisk sortering"},{heading:"tilgjengelighet-uu-og-wcag",content:"korte og forståelige alternativer"},{heading:"tilgjengelighet-uu-og-wcag",content:"Unngå deaktivert tilstand — det kan være vanskelig for brukere å forstå hvorfor feltet ikke kan brukes. Bruk heller `readOnly` når valget ikke skal endres."},{heading:"tilgjengelighet-uu-og-wcag",content:"I read-only-modus leser skjermlesere feltet som et tekstfelt, ikke som en nedtrekksliste. Ledeteksten må derfor gi nok kontekst til at brukeren forstår hva verdien gjelder."},{heading:"props",content:`<TypeTable
  of="Select"
  defaultValues="{
  	titleHelpSvg: getDefaultHelpButtonTitle(),
  	placeholder: getDefaultSelectPlaceholder(),
  }"
/>`},{heading:"selectoption",content:'<TypeTable of="Select.Option" />'}],headings:[{id:"bruk-select-når",content:"Bruk Select når"},{id:"unngå-select-når",content:"Unngå Select når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"standard-atferd",content:"Standard atferd"},{id:"read-only",content:"Read-only"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"selectoption",content:"Select.Option"}]},m=[{depth:2,url:"#bruk-select-når",title:e.jsx(e.Fragment,{children:"Bruk Select når"})},{depth:2,url:"#unngå-select-når",title:e.jsx(e.Fragment,{children:"Unngå Select når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#standard-atferd",title:e.jsx(e.Fragment,{children:"Standard atferd"})},{depth:3,url:"#read-only",title:e.jsx(e.Fragment,{children:"Read-only"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#selectoption",title:e.jsx(e.Fragment,{children:"Select.Option"})}];function s(t){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components},{Canvas:l,TypeTable:r}=n;return l||a("Canvas"),r||a("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(l,{examplesPath:"components/select"}),`
`,e.jsx(n.h2,{id:"bruk-select-når",children:"Bruk Select når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"det er omtrent 5–15 alternativer å velge mellom"}),`
`,e.jsx(n.li,{children:"du trenger å vise flere valg på liten plass"}),`
`,e.jsx(n.li,{children:"valget skal presenteres kompakt og brukeren kun kan velge ett alternativ"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-select-når",children:"Unngå Select når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"du skal navigere mellom sider eller seksjoner"}),`
`,e.jsxs(n.li,{children:["brukeren skal velge flere alternativer (velg da ",e.jsx(n.a,{href:"/byggeklosser/komponenter/checkboxgroup",children:"CheckboxGroup"})," eller annen flervalgskomponent)"]}),`
`,e.jsxs(n.li,{children:["brukeren trenger oversikt over alle alternativene samtidig — vis dem heller med ",e.jsx(n.a,{href:"/byggeklosser/komponenter/radiogroup",children:"RadioGroup"})," eller ",e.jsx(n.a,{href:"/byggeklosser/komponenter/checkboxgroup",children:"CheckboxGroup"})]}),`
`,e.jsxs(n.li,{children:["listen er lang og brukeren har behov for å søke seg frem — bruk ",e.jsx(n.a,{href:"/byggeklosser/komponenter/combobox",children:"Combobox"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Native select brukes for å gi brukerne forutsigbar og tilgjengelig atferd — nettleserens innebygde select har god støtte for skjermlesere og tastatur på alle plattformer."}),`
`,e.jsxs(n.li,{children:["5–15 alternativer er en ",e.jsx(n.a,{href:"https://www.nngroup.com/articles/listbox-dropdown/",children:"anbefaling fra NN Group"}),", ikke en hard grense. Med få alternativer bør du heller vise dem alle slik at brukeren kan sammenligne, og med mange alternativer blir en lukket liste tung å navigere. Se ",e.jsx(n.a,{href:"/eksempler/sp%C3%B8rre-bruker-om/mange-valg",children:"Å velge blant flere"})," for en samlet oversikt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," anbefales ikke fordi skjermlesere kan ignorere deaktiverte felt. ",e.jsx(n.code,{children:"readOnly"})," er et bedre alternativ når valget ikke skal kunne endres, men verdien fortsatt skal vises og sendes med."]}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.h3,{id:"standard-atferd",children:"Standard atferd"}),`
`,e.jsxs(n.p,{children:["Select bruker nettleserens innebygde funksjonalitet.",e.jsx(n.br,{}),`
`,"Det gir:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Native visning som varierer mellom nettlesere"}),`
`,e.jsx(n.li,{children:"Forutsigbar og tilgjengelig atferd for brukeren"}),`
`]}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read-only"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukes når brukeren skal se et valg som allerede er gjort, men ikke kan endre det."}),`
`,e.jsx(n.li,{children:"Brukeren kan fortsatt navigere til feltet, markere og kopiere innholdet."}),`
`,e.jsxs(n.li,{children:["Verdien til valgt alternativ sendes med skjemaet når ",e.jsx(n.code,{children:"name"})," er satt — i motsetning til disabled‑felt."]}),`
`,e.jsx(n.li,{children:"Vær forsiktig med å bruke read-only som en midlertidig lås, for eksempel mens noe lastes. Brukeren får da ingen forklaring på hvorfor feltet ikke kan endres."}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sorter alternativer i en logisk rekkefølge, f.eks. alfabetisk."}),`
`,e.jsx(n.li,{children:"Unngå lange setninger som alternativer — hold valgene korte og skannbare."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Listen åpner seg i nettleserens egen stil og funksjonalitet."}),`
`,e.jsx(n.li,{children:"Select kan utvides med grupperte alternativer (optgroup) dersom listen er lang."}),`
`,e.jsx(n.li,{children:"Brukeren får kun velge ett valg — ingen multiple‑valgstøtte i designsystemets bruksmønster."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ledetekst skal alltid brukes og plasseres over feltet."}),`
`,e.jsx(n.li,{children:"Ledeteksten bør være kort (helst én linje)."}),`
`,e.jsx(n.li,{children:"Hvis Select er plassert inne i en tabell, kan ledeteksten skjules (men skal fortsatt eksistere semantisk)."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Select‑komponenten følger systemets native tilgjengelighetsmønster."}),`
`,e.jsxs(n.li,{children:["Sørg for:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"tydelig og konsistent ledetekst"}),`
`,e.jsx(n.li,{children:"logisk sortering"}),`
`,e.jsx(n.li,{children:"korte og forståelige alternativer"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Unngå deaktivert tilstand — det kan være vanskelig for brukere å forstå hvorfor feltet ikke kan brukes. Bruk heller ",e.jsx(n.code,{children:"readOnly"})," når valget ikke skal endres."]}),`
`,e.jsx(n.li,{children:"I read-only-modus leser skjermlesere feltet som et tekstfelt, ikke som en nedtrekksliste. Ledeteksten må derfor gi nok kontekst til at brukeren forstår hva verdien gjelder."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{of:i,defaultValues:{titleHelpSvg:d(),placeholder:o()}}),`
`,e.jsx(n.h3,{id:"selectoption",children:"Select.Option"}),`
`,e.jsx(r,{of:i.Option})]})}function v(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}function a(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default,u as frontmatter,f as structuredData,m as toc};
