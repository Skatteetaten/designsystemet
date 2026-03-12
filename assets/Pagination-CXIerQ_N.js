import{j as e}from"./iframe-BHAek7Q1.js";import{useMDXComponents as o}from"./index-DSz98NdT.js";import{M as s,P as a,a as l}from"./blocks-BpBa1eEB.js";import{P as t}from"./utils-BgcVCBuX.js";import{P as m,C as p,U as d}from"./Pagination.stories-D2Mh4Val.js";import{V as h}from"./VersionBadge-CDyea5_5.js";import{D as c,L as g}from"./DocIntro-u8EjgXgd.js";import{D as x}from"./DocHeaderWrapper-DhLsIChr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHxcGkSl.js";import"./index-Ceylv9ay.js";import"./lz-string-m9jzapWX.js";import"./index-DO3ddEaQ.js";import"./index-BkWKVRRR.js";import"./index-k4H7HdQu.js";import"./index-MVsVTAOX.js";import"./index-BVEcgXLv.js";import"./stories.utils-DvYM6q3N.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
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
`,e.jsx(t,{of:d})]})}function L(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{L as default};
//# sourceMappingURL=Pagination-CXIerQ_N.js.map
