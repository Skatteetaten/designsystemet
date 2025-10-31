import{j as e}from"./iframe-C2uFIQ6s.js";import{useMDXComponents as s}from"./index-zTX5IwKg.js";import{M as i}from"./blocks-Bxc_6jfx.js";import"./index-CsOww9wV.js";import"./index-CoMdBICQ.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Verktøy/Kommandolinjeverktøy"}),`
`,e.jsx(n.h1,{id:"kommandolinjeverktøy",children:"Kommandolinjeverktøy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@skatteetaten/ds-cli"})," er et kommandolinjeverktøy for å håndtere kode-transformasjoner og andre oppgaver relatert til designsystemet. Dette verktøyet hjelper utviklere med å oppdatere og vedlikeholde kodebasen ved å tilby automatiserte transformasjoner for breaking changes."]}),`
`,e.jsx(n.h2,{id:"kommandoer",children:"Kommandoer"}),`
`,e.jsx(n.h3,{id:"migrate",children:"Migrate"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"migrate"}),"-kommandoen for å utføre kode-transformasjoner."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli migrate <migration_name> <path>
`})}),`
`,e.jsx(n.h4,{id:"alternativer",children:"Alternativer:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--dry, -d"}),": Forhåndsvis endringer uten å utføre dem."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--exclude, -e <pattern>"}),": Ekskluder filer/mapper (kan brukes flere ganger)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--list, -l"}),": Vis tilgjengelige migreringer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--help, -h"}),": Vis hjelp for kommandoen."]}),`
`]}),`
`,e.jsx(n.h4,{id:"eksempler",children:"Eksempler:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Vis tilgjengelige migreringer
npx @skatteetaten/ds-cli migrate --list

# Utfør migrering
npx @skatteetaten/ds-cli migrate v2-alert src/

# Forhåndsvis endringer uten å utføre dem
npx @skatteetaten/ds-cli migrate v2-textarea src/ --dry

# Ekskluder spesifikke filer/mapper
npx @skatteetaten/ds-cli migrate v2-alert src/ --exclude "*.test.js" --exclude node_modules
`})}),`
`,e.jsx(n.h3,{id:"versjon",children:"Versjon"}),`
`,e.jsxs(n.p,{children:["For å sjekke hvilken versjon av ",e.jsx(n.code,{children:"ds-cli"})," du har installert, bruk ",e.jsx(n.code,{children:"version"}),"-kommandoen eller ",e.jsx(n.code,{children:"--version"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli version
npx @skatteetaten/ds-cli --version
`})}),`
`,e.jsx(n.h3,{id:"hjelp",children:"Hjelp"}),`
`,e.jsx(n.p,{children:"For å få en oversikt over tilgjengelige kommandoer og alternativer:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @skatteetaten/ds-cli --help
npx @skatteetaten/ds-cli migrate --help
`})})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default};
//# sourceMappingURL=Cli-DIgNvVnl.js.map
