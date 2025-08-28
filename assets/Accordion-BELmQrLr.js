import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-Ugg2TbUJ.js";import{M as s,P as m,C as a}from"./index-Iwr_fTA7.js";import{P as r}from"./utils-_cAdEKyH.js";import{A as p,L as d,W as c}from"./Accordion.stories-BEM9juV4.js";import{V as l}from"./VersionBadge-DA5NWhz_.js";import{D as h}from"./DocIntro-D_UnTr65.js";import{D as x}from"./DocHeaderWrapper-CB3j5pAP.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bj9Tme-v.js";import"./index-D9u29hOa.js";import"./index-Cu4lwwaE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./lz-string-DoYuj_7g.js";import"./index-Du3yX_TW.js";import"./index-CGk5cNE3.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./index-dPA2yXmo.js";import"./index-DtTKNpP0.js";import"./index-DXWIZOJk.js";import"./index-BuHbB7kV.js";import"./DatePickerCalendar-wzrlqniL.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./index-krISk8b9.js";import"./index-QDa3CmGl.js";import"./helpers-B90wjoUE.js";import"./stories.utils-Ys3NG0dr.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
//# sourceMappingURL=Accordion-BELmQrLr.js.map
