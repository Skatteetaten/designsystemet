import{j as n}from"./iframe-_BeEUj9n.js";import{useMDXComponents as i}from"./index-oZCBnvjR.js";import{M as s,P as a,a as d}from"./blocks-XGrLiue1.js";import{P as r}from"./utils-BIWzCL7U.js";import{A as m,S as c,a as p,B as l,L as h,W as x}from"./Accordion.stories-DI5Y2Jzn.js";import{V as f}from"./VersionBadge-BpAVPwUs.js";import{D as j}from"./DocIntro-CWVTcdvc.js";import{D as k}from"./DocHeaderWrapper-BuNQWpzs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BH-qiUPO.js";import"./index-CcnecOVV.js";import"./lz-string-m9jzapWX.js";import"./index-BcVMbygC.js";import"./index-Bva6C3l7.js";import"./index-BcQKZFop.js";import"./index-CBVTTW59.js";import"./index-DBdQKE3D.js";import"./index-CUk3vgdJ.js";import"./index-jV6wSCam.js";import"./DatePickerCalendar-BqUDbnkt.js";import"./LabelWithHelp-DoQOgNY7.js";import"./Help-B4yN8Cyl.js";import"./Combobox.module-DRLQKUr5.js";import"./ComboboxButton-CagPt9i1.js";import"./ComboboxSelectedOptions-uUjCvU7o.js";import"./index-BUfGp1h_.js";import"./index-1LIl87kO.js";import"./stories.utils-D-WWwTx3.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m}),`
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
//# sourceMappingURL=Accordion-DghwV5Fe.js.map
