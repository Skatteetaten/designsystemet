import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-Ugg2TbUJ.js";import{M as s,P as m,C as a}from"./index-JcuiyNme.js";import{P as r}from"./utils-DG9khuH1.js";import{A as p,L as d,W as c}from"./Accordion.stories-t3omFlnb.js";import{V as l}from"./VersionBadge-DTFIcy1b.js";import{D as h}from"./DocIntro-CxLiUrx-.js";import{D as x}from"./DocHeaderWrapper-CB3j5pAP.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-_MdcpPlK.js";import"./index-D9u29hOa.js";import"./index-Cu4lwwaE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./lz-string-DoYuj_7g.js";import"./index-DfnG5Ebn.js";import"./index-CGk5cNE3.js";import"./index-DAV9Xejq.js";import"./index-uxUkjR_c.js";import"./index-B6IstKQD.js";import"./index-sjPb88pE.js";import"./index-B0Glj4sP.js";import"./index-DkXzVmhj.js";import"./DatePickerCalendar-PuG5IodJ.js";import"./LabelWithHelp-B8AAT5XN.js";import"./Help-ChcS7hng.js";import"./index-Bid14VJj.js";import"./index-IazW8HN4.js";import"./helpers-B90wjoUE.js";import"./stories.utils-Ys3NG0dr.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
`,e.jsx(r,{of:c})]})}function q(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{q as default};
//# sourceMappingURL=Accordion-D_PdL1Dt.js.map
