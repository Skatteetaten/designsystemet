import{j as e}from"./iframe-DRo7xN6O.js";import{useMDXComponents as s}from"./index-DWZhkpwM.js";import{M as o}from"./blocks-DuOnUUGO.js";import"./index-DA0HsgN3.js";import"./index-DOQ9qhsR.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Verktøy/Kommandolinjeverktøy"}),`
`,e.jsx(n.h1,{id:"kommandolinjeverktøy",children:"Kommandolinjeverktøy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@skatteetaten/ds-cli"})," er et kommandolinjeverktøy for å håndtere kode-transformasjoner og andre oppgaver relatert til designsystemet. Dette verktøyet hjelper utviklere med å oppdatere og vedlikeholde kodebasen ved å tilby automatiserte transformasjoner for breaking changes."]}),`
`,e.jsx(n.h2,{id:"kommandoer",children:"Kommandoer"}),`
`,e.jsx(n.h3,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"codemod"}),"-kommandoen for å utføre kode-transformasjoner."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli codemod <migration_name> <path>
`})}),`
`,e.jsx(n.h4,{id:"alternativer",children:"Alternativer:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--dry, -d"}),": Kjør uten å gjøre noen endringer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--exclude, -e"}),": Ekskluder filer eller mapper."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--list, -l"}),": Vis tilgjengelige codemods."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--help"}),": Vis hjelp for ",e.jsx(n.code,{children:"codemod"}),"-kommandoen."]}),`
`]}),`
`,e.jsx(n.h4,{id:"eksempel",children:"Eksempel:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli codemod v2-textarea ./src/web
`})}),`
`,e.jsx(n.h3,{id:"hjelp",children:"Hjelp"}),`
`,e.jsxs(n.p,{children:["For å få en oversikt over tilgjengelige kommandoer og alternativer, bruk ",e.jsx(n.code,{children:"help"}),"-kommandoen:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli help
`})}),`
`,e.jsx(n.h3,{id:"versjon",children:"Versjon"}),`
`,e.jsxs(n.p,{children:["For å sjekke hvilken versjon av ",e.jsx(n.code,{children:"ds-cli"})," du har installert, bruk ",e.jsx(n.code,{children:"-v"})," eller ",e.jsx(n.code,{children:"--version"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli -v

`})})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{h as default};
//# sourceMappingURL=Cli-B5WJDh-4.js.map
