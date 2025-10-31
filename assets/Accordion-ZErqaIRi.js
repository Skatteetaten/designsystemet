import{j as e}from"./iframe-C2uFIQ6s.js";import{useMDXComponents as s}from"./index-zTX5IwKg.js";import{M as i,P as a,C as m}from"./blocks-Bxc_6jfx.js";import{P as r}from"./utils-BANpcJ2o.js";import{A as d,L as c,W as p}from"./Accordion.stories-CTkJyGIM.js";import{V as l}from"./VersionBadge-a04CmUkW.js";import{D as h}from"./DocIntro-D1rE2eN5.js";import{D as x}from"./DocHeaderWrapper--WHhAQIA.js";import"./index-CsOww9wV.js";import"./index-CoMdBICQ.js";import"./lz-string-CuPZokM5.js";import"./index-C2_9aJjw.js";import"./index-Bs2jIcy5.js";import"./index-wTBO3won.js";import"./index-EzFuruR4.js";import"./index-BIr7-knc.js";import"./index-BEXGZWqo.js";import"./index-k3V7IYJD.js";import"./DatePickerCalendar-8_aO5TLp.js";import"./LabelWithHelp-dgWfzcXf.js";import"./Help-D5uDa-qt.js";import"./index-CsoVP06h.js";import"./index-BuJMEA-1.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
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
//# sourceMappingURL=Accordion-ZErqaIRi.js.map
