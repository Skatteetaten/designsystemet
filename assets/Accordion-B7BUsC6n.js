import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{M as s,P as a,C as m,a as r}from"./index-CQtZ9ELC.js";import{A as d,L as c,W as p}from"./Accordion.stories-Br2aCQGG.js";import{V as l}from"./VersionBadge-DfxsmlSA.js";import{D as h}from"./DocIntro-Bznj1CMw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CWiYu3kJ.js";import"./index-C-O_Pr5g.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-CEFmy_Ic.js";import"./index-BYKicpQW.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./index-BCjGDH3F.js";import"./index-Dpx64Uiu.js";import"./index-7bHEsQL_.js";import"./index-DEJUArlV.js";import"./DatePickerCalendar-HH4LMRzz.js";import"./LabelWithHelp-D9yud6GC.js";import"./Help-CJ8w0Npo.js";import"./index-Cs0ivlf6.js";import"./index-DUEJWUfC.js";import"./helpers-Q4uYuiE4.js";import"./stories.utils-BbHpJfAb.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(l,{packageName:"collections"}),`
`,e.jsx(h,{name:"Accordion",url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from '@skatteetaten/ds-collections';
`})}),`
`,e.jsx(m,{}),`
`,e.jsx(n.h2,{id:"lazy-loading-av-innhold",children:"Lazy loading av innhold"}),`
`,e.jsx(n.p,{children:"Standard oppførsel er at alt innhold i Accordion.Item-komponenten rendres i dom, men skjules med display: none dersom den er lukket. Hvis man ønsker at innholdet ikke rendres før elementet har blitt åpnet, kan man for eksempel bruke følgende wrapper:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const LazyAccordionItem = ({
  children,
  ...rest
}: AccordionItemProps): JSX.Element => {
  const [opened, setOpened] = useState(false);
  return (
    <Accordion.Item {...rest} onClick={() => !opened && setOpened(true)}>
      {opened ? children : null}
    </Accordion.Item>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"i-venstremeny",children:"I venstremeny"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"i-arbeidsoppgave",children:"I arbeidsoppgave"}),`
`,e.jsx(r,{of:p})]})}function F(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{F as default};
//# sourceMappingURL=Accordion-B7BUsC6n.js.map
