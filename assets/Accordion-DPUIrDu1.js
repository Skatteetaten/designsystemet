import{j as e}from"./iframe-CdXtTKZQ.js";import{useMDXComponents as i}from"./index-Fodq6baY.js";import{M as s,P as m,C as a}from"./blocks-BsozQqO1.js";import{P as r}from"./utils-Ct-tsx4J.js";import{A as d,L as c,W as p}from"./Accordion.stories-DEru0-Rl.js";import{V as l}from"./VersionBadge-BT9Fb_Ir.js";import{D as h}from"./DocIntro-SDUDjmUj.js";import{D as x}from"./DocHeaderWrapper-Dl1QP3pC.js";import"./index-GtA9f0CN.js";import"./index-DIHq9ZfV.js";import"./lz-string-CuPZokM5.js";import"./index-CDWtp_lT.js";import"./index-D0xxaDHU.js";import"./index-CVW4skVE.js";import"./index-C6J3KzFu.js";import"./index-BEPTjI1-.js";import"./index-DUrzBgqO.js";import"./index-CLKUz3Po.js";import"./DatePickerCalendar-ByRci1Oe.js";import"./LabelWithHelp-Bcy4lovc.js";import"./Help-BJCAuNeo.js";import"./Combobox.module-DGtBY5ID.js";import"./ComboboxButton-xo5xtxE5.js";import"./ComboboxSelectedOptions-BdSatC4Q.js";import"./index-D-15xU56.js";import"./index-D_51gR3W.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsxs(x,{componentName:"Accordion",children:[e.jsx(n.h1,{id:"accordion",children:"Accordion"}),e.jsx(l,{packageName:"collections"}),e.jsx(h,{url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/"})]}),`
`,e.jsx(m,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from '@skatteetaten/ds-collections';
`})}),`
`,e.jsx(a,{}),`
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
//# sourceMappingURL=Accordion-DPUIrDu1.js.map
