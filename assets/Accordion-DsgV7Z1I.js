import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-Ugg2TbUJ.js";import{M as s,P as m,C as a}from"./index-DAFHjOKu.js";import{P as r}from"./utils-CpUWkXjk.js";import{A as p,L as d,W as c}from"./Accordion.stories-DDNiG3Pt.js";import{V as l}from"./VersionBadge-bx6yAMKu.js";import{D as h}from"./DocIntro-D_XXAKh-.js";import{D as x}from"./DocHeaderWrapper-BEEvztbP.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-kBaDV3LR.js";import"./index-D9u29hOa.js";import"./index-Cu4lwwaE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./lz-string-DoYuj_7g.js";import"./index-Dvbywa6-.js";import"./index-CwaotbcG.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";import"./index-DkiVdDhi.js";import"./index-CJxYRboy.js";import"./index-Dc9vnWYl.js";import"./index-BP9ucNdn.js";import"./DatePickerCalendar-CmyXWAFv.js";import"./LabelWithHelp-DECIiZLx.js";import"./Help-DnfPEwtQ.js";import"./index-DisSb1NM.js";import"./index-CPraUE2S.js";import"./helpers-DjiZIot2.js";import"./stories.utils-WEsnq5G6.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
//# sourceMappingURL=Accordion-DsgV7Z1I.js.map
