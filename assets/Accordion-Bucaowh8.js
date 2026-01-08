import{j as e}from"./iframe-s2_bNgHU.js";import{useMDXComponents as i}from"./index-Coc8XlEY.js";import{M as s,P as m,C as a}from"./WithTooltip-SK46ZJ2J-BgQ-UF5v.js";import{P as r}from"./utils-CiE3N6_4.js";import{A as p,L as d,W as c}from"./Accordion.stories-BouXXika.js";import{V as l}from"./VersionBadge-aMCyLfcW.js";import{D as h}from"./DocIntro-DIjLX9Xz.js";import{D as x}from"./DocHeaderWrapper-C_g6vmEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl0hHgc-.js";import"./index-CYEZhpn0.js";import"./index-DeRgnwbs.js";import"./lz-string-m9jzapWX.js";import"./index-Ck1G954W.js";import"./index-CUsfAC9p.js";import"./index-DcFKixUR.js";import"./index-DFs0_No2.js";import"./index-jj9Gfu02.js";import"./index-CJpzHRrE.js";import"./index-D9_nlc1h.js";import"./DatePickerCalendar-ePUd64Qm.js";import"./LabelWithHelp-rfkuXU1a.js";import"./Help-DC9TS-B6.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-COhLZqHg.js";import"./ComboboxSelectedOptions-DI0eIcsf.js";import"./index-DdQvxWAg.js";import"./index-ZHg7ycEM.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"i-arbeidsoppgave",children:"I arbeidsoppgave"}),`
`,e.jsx(r,{of:c})]})}function R(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{R as default};
//# sourceMappingURL=Accordion-Bucaowh8.js.map
