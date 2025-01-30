import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as s,af as a,ag as l,ah as t}from"./index-BmC7R1QH.js";import{P as m,C as p,U as d}from"./Pagination.stories-Dl9cRkL8.js";import{V as h}from"./VersionBadge-R8I3k1JK.js";import{D as g,L as c}from"./DocIntro-DwW3PmsN.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C6Exi07e.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-DbZa4S7y.js";import"./index--O6iZ70i.js";import"./index-U0B695k8.js";import"./index-BWc9jU-Q.js";import"./index-Dxnk4fMh.js";import"./index-BaCHQVlv.js";import"./helpers-Dccz2jQ-.js";import"./stories.utils-Ys3NG0dr.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx(h,{packageName:"navigation"}),`
`,e.jsx(g,{name:"Pagination",url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/pagination/"}),`
`,e.jsxs(n.p,{children:["Hvordan bruke ",e.jsx(c,{url:"#hvordan-bruke-props-i-kombinasjon-med-andre-props",target:"_self",children:"props"})," i komponenten"]}),`
`,e.jsx(a,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from '@skatteetaten/ds-navigation';
`})}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"hvordan-bruke-props-i-kombinasjon-med-andre-props",children:"Hvordan bruke props i kombinasjon med andre props"}),`
`,e.jsx(n.p,{children:"Komponenten vil vise summary og lenker i de tilfellene hvor det er mulig å regne ut. Vi har noen regler som må følges for at utregning skal være mulig. Denne listen med regler viser hva som forhindrer komponenten å rendres:"}),`
`,e.jsx(n.h3,{id:"totalitems--pagesize--currentpage",children:"totalItems / pageSize < currentPage"}),`
`,e.jsx(n.p,{children:"Dette betyr at gjeldende side må være større enn totalt antall elementer delt på sidestørrelse."}),`
`,e.jsx(n.h3,{id:"currentpage--1",children:"currentPage < 1"}),`
`,e.jsx(n.p,{children:"Aktiv side kan ikke være mindre enn side 1"}),`
`,e.jsx(n.h3,{id:"totalitems--1",children:"totalItems < 1"}),`
`,e.jsx(n.p,{children:"Komponenten skal ikke vises hvis det ikke eksisterer noen sider man kan navigere til. Vi har i tillegg en regel som bare skjuler pagineringslenkene hvis totalItems er større enn pageSize"}),`
`,e.jsx(n.h3,{id:"pagesize--1",children:"pageSize < 1"}),`
`,e.jsx(n.p,{children:"Paginering skal bare vises hvis man har spesifisert antall sider til å være én eller mer."}),`
`,e.jsx(n.h2,{id:"controlled-example",children:"Controlled Example"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"uncontrolled-example",children:"Uncontrolled Example"}),`
`,e.jsx(t,{of:d})]})}function _(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{_ as default};
//# sourceMappingURL=Pagination-CuRkp0ek.js.map
