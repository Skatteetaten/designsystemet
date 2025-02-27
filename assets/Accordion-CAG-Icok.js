import{j as e}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{M as s,P as a,C as m,a as r}from"./index-DkZ19Udd.js";import{A as d,L as c,W as p}from"./Accordion.stories-DVMcd82-.js";import{V as l}from"./VersionBadge-CYv-xZ-Y.js";import{D as h}from"./DocIntro-CLNUaK-s.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BwjVMyHa.js";import"./index-C-O_Pr5g.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-DYo2YWtE.js";import"./index-D9wdQ6Rv.js";import"./index-BomPkCop.js";import"./index-C176R4Vg.js";import"./index-r2B9v0Ec.js";import"./index-xt3MBfhK.js";import"./index--gfV2u6P.js";import"./index-Sqvq7mYU.js";import"./DatePickerCalendar-CdhpCad8.js";import"./LabelWithHelp-Ck3epTxf.js";import"./Help-qKV-_woo.js";import"./index-DeA6s3pl.js";import"./index-m1pPjkGf.js";import"./helpers-BRYKCfPN.js";import"./stories.utils-Ys3NG0dr.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
//# sourceMappingURL=Accordion-CAG-Icok.js.map
