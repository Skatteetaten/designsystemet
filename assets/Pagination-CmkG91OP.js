import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as o}from"./index-DlpNa54Y.js";import{M as s,P as a,C as l,d as t}from"./index-1eV6MvZQ.js";import{P as m,C as p,U as d}from"./Pagination.stories-BVJcjjoq.js";import{V as g}from"./VersionBadge-ZJxabhV9.js";import{D as h}from"./DocIntro-3mdelFjT.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C3eo0HyG.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index-500m86Tr.js";import"./index-CI44Z2h3.js";import"./index-DMYlLpXe.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./index-CCUfsLXI.js";import"./helpers-CDRJ97Ot.js";import"./stories.utils-DTsHYhvm.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx(g,{packageName:"navigation"}),`
`,e.jsx(h,{name:"Pagination",url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/pagination/"}),`
`,e.jsx(n.h2,{id:"regler-for-bruk-av-props-i-kombinasjon-med-andre-props",children:"Regler for bruk av props i kombinasjon med andre props"}),`
`,e.jsx(n.p,{children:"Komponenten vil vise summary og lenker i de tilfellene hvor det er mulig å regne ut. Vi har noen regler som må følges for at utregning skal være mulig. Denne listen med regler viser hva som forhindrer komponenten å rendres:"}),`
`,e.jsx(n.h3,{id:"totalitems--pagesize--currentpage",children:"totalItems / pageSize < currentPage"}),`
`,e.jsx(n.p,{children:"Dette betyr at gjeldende side må være større enn totalt antall elementer delt på sidestørrelse."}),`
`,e.jsx(n.h3,{id:"currentpage--1",children:"currentPage < 1"}),`
`,e.jsx(n.p,{children:"Aktiv side kan ikke være mindre enn side 1"}),`
`,e.jsx(n.h3,{id:"totalitems--1",children:"totalItems < 1"}),`
`,e.jsx(n.p,{children:"Komponenten skal ikke vises hvis det ikke eksisterer noen sider man kan navigere til. Vi har i tillegg en regel som bare skjuler pagineringslenkene hvis totalItems er større enn pageSize"}),`
`,e.jsx(n.h3,{id:"pagesize--1",children:"pageSize < 1"}),`
`,e.jsx(n.p,{children:"Paginering skal bare vises hvis man har spesifisert antall sider til å være én eller mer."}),`
`,e.jsx(a,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from '@skatteetaten/ds-navigation';
`})}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"controlled-example",children:"Controlled Example"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"uncontrolled-example",children:"Uncontrolled Example"}),`
`,e.jsx(t,{of:d})]})}function K(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{K as default};
//# sourceMappingURL=Pagination-CmkG91OP.js.map
