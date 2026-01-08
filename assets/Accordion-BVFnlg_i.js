import{j as e}from"./iframe-Br1Xu9zr.js";import{useMDXComponents as i}from"./index-B4XfgkYk.js";import{M as s,P as m,C as a}from"./WithTooltip-SK46ZJ2J-B5WCggR4.js";import{P as r}from"./utils-QWnqfD8L.js";import{A as p,L as d,W as c}from"./Accordion.stories-CwLvVQxL.js";import{V as l}from"./VersionBadge-EKUOYGQk.js";import{D as h}from"./DocIntro-PjvoSGk5.js";import{D as x}from"./DocHeaderWrapper-xOaIqehg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqK9uf9C.js";import"./index-DdZpjVXD.js";import"./index-DgG-l9xe.js";import"./lz-string-m9jzapWX.js";import"./index-Mga-TJ2K.js";import"./index-Xbc0duXx.js";import"./index-CjBS1QGy.js";import"./index-D26qgz4H.js";import"./index-BVXicwjt.js";import"./index-DCwxX22m.js";import"./index-B55DkYFu.js";import"./DatePickerCalendar-DwBW5N7C.js";import"./LabelWithHelp-ChfJsnaj.js";import"./Help-DqUYp3Aw.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-BxlP8MsT.js";import"./ComboboxSelectedOptions-lTpsloIV.js";import"./index-8xSWa2YY.js";import"./index-Dw0yNRIm.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
//# sourceMappingURL=Accordion-BVFnlg_i.js.map
