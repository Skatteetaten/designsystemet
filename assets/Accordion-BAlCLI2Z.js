import{j as n}from"./iframe-BQX7p2fO.js";import{useMDXComponents as i}from"./index-B-1r-e4r.js";import{M as s,P as a,a as d}from"./blocks-Cuqi8N1K.js";import{P as r}from"./utils-BPqsNQaN.js";import{A as m,S as c,a as p,B as l,L as h,W as x}from"./Accordion.stories-oMQn8ZG3.js";import{V as f}from"./VersionBadge-nxpO8NQb.js";import{D as j}from"./DocIntro-Dqb5-ImU.js";import{D as k}from"./DocHeaderWrapper-B9gsE2PP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7aPZXNzx.js";import"./index-BX4RXkVG.js";import"./lz-string-CuPZokM5.js";import"./index-ZQJoFOIZ.js";import"./index-CR6dT-y4.js";import"./index-CsBqoXCA.js";import"./index-BWAuWBOL.js";import"./index-DE3ap_ny.js";import"./index-BLTwn-id.js";import"./index-Dz9Mp0Gs.js";import"./DatePickerCalendar-CGOdmsOV.js";import"./LabelWithHelp-B6OnnC-V.js";import"./Help-W6evCF1m.js";import"./Combobox.module-DVbz7xnh.js";import"./ComboboxButton-CrcXJ2sV.js";import"./ComboboxSelectedOptions-C80x9hC4.js";import"./index-Bnbf9Jsy.js";import"./index-5XWpQbpe.js";import"./stories.utils-B3vRc2tk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m}),`
`,n.jsxs(k,{componentName:"Accordion",children:[n.jsx(e.h1,{id:"accordion",children:"Accordion"}),n.jsx(f,{packageName:"collections"}),n.jsx(j,{url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/"})]}),`
`,n.jsx(a,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Accordion } from '@skatteetaten/ds-collections';
`})}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"standard-med-høyreikon",children:"Standard med høyreikon"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h2,{id:"liten-med-venstreikon",children:"Liten med venstreikon"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h2,{id:"bakgrunnsfarge",children:"Bakgrunnsfarge"}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h2,{id:"lazy-loading-av-innhold",children:"Lazy loading av innhold"}),`
`,n.jsx(e.p,{children:"Standard oppførsel er at alt innhold i Accordion.Item-komponenten rendres i dom, men skjules med display: none dersom den er lukket. Hvis man ønsker at innholdet ikke rendres før elementet har blitt åpnet, kan man for eksempel bruke følgende wrapper:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const LazyAccordionItem = ({
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
`,n.jsx(e.h2,{id:"med-virksomhetsinfo",children:"Med virksomhetsinfo"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"i-arbeidsoppgave",children:"I arbeidsoppgave"}),`
`,n.jsx(r,{of:x})]})}function q(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{q as default};
//# sourceMappingURL=Accordion-BAlCLI2Z.js.map
