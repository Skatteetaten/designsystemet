import{j as e}from"./iframe-BoxHncFg.js";import{useMDXComponents as s}from"./index-DtBYrEcS.js";import{M as i,P as a,C as m}from"./blocks-DKV7dMyv.js";import{P as r}from"./utils-B66TS2eR.js";import{A as d,L as c,W as p}from"./Accordion.stories-DIgE4qyS.js";import{V as l}from"./VersionBadge-wytnVFot.js";import{D as h}from"./DocIntro-C4Nfx7x7.js";import{D as x}from"./DocHeaderWrapper-CoLMB1JM.js";import"./index-BWe3UoPQ.js";import"./index-BHwnoM9V.js";import"./lz-string-CuPZokM5.js";import"./index-DyY5joHW.js";import"./index-Mlou2Fgf.js";import"./index-CvbIYQ1J.js";import"./index-CfnY26Mx.js";import"./index-CxRKwedM.js";import"./index-COS0aIOi.js";import"./index-d7h_eiwz.js";import"./DatePickerCalendar-NBFB_hA6.js";import"./LabelWithHelp-CeoEDrnt.js";import"./Help-DtlVvBAO.js";import"./index-k61vOTBl.js";import"./index-ClyrOAuv.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsxs(x,{componentName:"Accordion",children:[e.jsx(n.h1,{id:"accordion",children:"Accordion"}),e.jsx(l,{packageName:"collections"}),e.jsx(h,{url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/"})]}),`
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
`,e.jsx(r,{of:p})]})}function V(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{V as default};
//# sourceMappingURL=Accordion-QIxiWkfG.js.map
