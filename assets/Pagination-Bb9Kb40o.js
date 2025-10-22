import{j as e}from"./iframe-BoxHncFg.js";import{useMDXComponents as o}from"./index-DtBYrEcS.js";import{M as s,P as a,C as l}from"./blocks-DKV7dMyv.js";import{P as t}from"./utils-B66TS2eR.js";import{P as m,C as p,U as d}from"./Pagination.stories-CJ-517kJ.js";import{V as h}from"./VersionBadge-wytnVFot.js";import{D as c,L as g}from"./DocIntro-C4Nfx7x7.js";import{D as x}from"./DocHeaderWrapper-CoLMB1JM.js";import"./index-BWe3UoPQ.js";import"./index-BHwnoM9V.js";import"./lz-string-CuPZokM5.js";import"./index-CIMmj5uo.js";import"./index-DyY5joHW.js";import"./index-Mlou2Fgf.js";import"./index-CvbIYQ1J.js";import"./index-COS0aIOi.js";import"./stories.utils-CZ5hej_8.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsxs(x,{componentName:"Pagination",children:[e.jsx(n.h1,{id:"pagination",children:"Pagination"}),e.jsx(h,{packageName:"navigation"}),e.jsx(c,{url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/pagination/"})]}),`
`,e.jsxs(n.p,{children:["Hvordan bruke ",e.jsx(g,{url:"#hvordan-bruke-props-i-kombinasjon-med-andre-props",target:"_self",children:"props"})," i komponenten"]}),`
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
`,e.jsx(t,{of:d})]})}function H(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{H as default};
//# sourceMappingURL=Pagination-Bb9Kb40o.js.map
