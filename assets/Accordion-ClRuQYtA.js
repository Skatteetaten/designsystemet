import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{ae as s,af as a,ag as m,ah as r}from"./index-BmC7R1QH.js";import{A as d,L as p,W as c}from"./Accordion.stories-Bt-QFXXE.js";import{V as l}from"./VersionBadge-R8I3k1JK.js";import{D as h}from"./DocIntro-DwW3PmsN.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C6Exi07e.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-U0B695k8.js";import"./index--O6iZ70i.js";import"./index-BWc9jU-Q.js";import"./index-Dxnk4fMh.js";import"./index-C3uJ_lpJ.js";import"./index-aMjpNqYB.js";import"./index-BaCHQVlv.js";import"./index-GOkwpqhH.js";import"./DatePickerCalendar-BtRIsojo.js";import"./LabelWithHelp-b-VgeEnv.js";import"./Help-CS2lfMec.js";import"./index-8cXy7PJr.js";import"./index-CHrQ5N2W.js";import"./helpers-Dccz2jQ-.js";import"./stories.utils-Ys3NG0dr.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"i-arbeidsoppgave",children:"I arbeidsoppgave"}),`
`,e.jsx(r,{of:c})]})}function H(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{H as default};
//# sourceMappingURL=Accordion-ClRuQYtA.js.map
