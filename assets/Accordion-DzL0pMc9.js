import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-DecWcg07.js";import{M as s,P as a,C as m,a as r}from"./index-GCw0b2DM.js";import{A as d,L as c,W as p}from"./Accordion.stories-BjYD-_Ro.js";import{V as l}from"./VersionBadge-C4SEVtjM.js";import{D as h}from"./DocIntro-CDL2Kqri.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-s6XqFuJs.js";import"./index-tLsore8Q.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B77p9Xne.js";import"./index-EsEcB_zD.js";import"./index-vpaAjjI_.js";import"./index-_-BAtSXr.js";import"./index-6OhsTO86.js";import"./index-ukAKs0SN.js";import"./index-SYCMKRjb.js";import"./index-Byc3xEr-.js";import"./DatePickerCalendar-DfBQ8U9V.js";import"./LabelWithHelp-B7cXZmxy.js";import"./Help-fmzU6O8S.js";import"./index-CnP6odjp.js";import"./index-CeMaJgB_.js";import"./helpers-BRYKCfPN.js";import"./stories.utils-Ys3NG0dr.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"i-arbeidsoppgave",children:"I arbeidsoppgave"}),`
`,e.jsx(r,{of:p})]})}function F(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{F as default};
//# sourceMappingURL=Accordion-DzL0pMc9.js.map
