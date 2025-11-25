import{j as e}from"./iframe-Cq9sN_Dz.js";import{useMDXComponents as i}from"./index-Ddvf4E3M.js";import{M as s,P as m,C as a}from"./blocks-BB6W4uiL.js";import{P as r}from"./utils-Bi8cX5Ta.js";import{A as d,L as c,W as p}from"./Accordion.stories-CTCkyFrj.js";import{V as l}from"./VersionBadge-Bmt16M75.js";import{D as h}from"./DocIntro-D2PBk_H-.js";import{D as x}from"./DocHeaderWrapper-BfMvrpKf.js";import"./index-uf18E4Pi.js";import"./index-DQMWIbzV.js";import"./lz-string-CuPZokM5.js";import"./index-5qJDb17Q.js";import"./index-B4tfeJ0Q.js";import"./index-CGzeyL7S.js";import"./index-DEEEsonz.js";import"./index-9jg8RjbV.js";import"./index-DskRqDMQ.js";import"./index-DRFs0UrV.js";import"./DatePickerCalendar-DQrt2Pnq.js";import"./LabelWithHelp-DsxvJyLL.js";import"./Help-CWz_ChTP.js";import"./Combobox.module-DGtBY5ID.js";import"./ComboboxButton-Xxl-Mf-n.js";import"./ComboboxSelectedOptions-CLxGYH0S.js";import"./index-D6Uh_XyP.js";import"./index-OiepPjMI.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
//# sourceMappingURL=Accordion-Bv1BglCo.js.map
