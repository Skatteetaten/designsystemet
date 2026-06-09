import{j as n}from"./iframe-DyzX2HZk.js";import{useMDXComponents as i}from"./index-DjqcMLIB.js";import{M as s,P as a,a as d}from"./blocks-YuUOU6b-.js";import{P as r}from"./utils-K09rUntF.js";import{A as m,S as c,a as p,B as l,L as h,W as x}from"./Accordion.stories-DXWAKj2M.js";import{V as f}from"./VersionBadge-DArr1FyB.js";import{D as j}from"./DocIntro-KWpIb7Fx.js";import{D as k}from"./DocHeaderWrapper-CB8F20Uv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXiF3hqq.js";import"./index-BSBVJDZU.js";import"./lz-string-CuPZokM5.js";import"./index-tiKhdOIe.js";import"./index-Cocas2j2.js";import"./index-CkEqEoBc.js";import"./index-GCI7kVAR.js";import"./index-C34PYbPl.js";import"./index-CMkU_MzX.js";import"./index-BsMkEDp2.js";import"./DatePickerCalendar-CpbLitON.js";import"./LabelWithHelp-M0pRksmn.js";import"./Help-DybFLe9H.js";import"./Combobox.module-CNeM_wTV.js";import"./ComboboxButton-Vs88nVYr.js";import"./ComboboxSelectedOptions-CjGG25UN.js";import"./index-BVZq6FY6.js";import"./index-BXhdWvOz.js";import"./stories.utils-B6fefIv6.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m}),`
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
//# sourceMappingURL=Accordion-D0VOAEH-.js.map
