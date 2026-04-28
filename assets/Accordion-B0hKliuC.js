import{j as n}from"./iframe-B8GUhlLl.js";import{useMDXComponents as i}from"./index-B1QFP_Jr.js";import{M as s,P as a,a as d}from"./blocks-CYiXWkKb.js";import{P as r}from"./utils-DtoFmNuv.js";import{A as m,S as c,a as p,B as l,L as h,W as x}from"./Accordion.stories-DVwbMvE1.js";import{V as f}from"./VersionBadge-CwaAEZz3.js";import{D as j}from"./DocIntro-rS_Hg1WD.js";import{D as k}from"./DocHeaderWrapper-DN7xFaRJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDTI-MIw.js";import"./index-BnXejHSu.js";import"./lz-string-m9jzapWX.js";import"./index-I1QRqNj0.js";import"./index-ee2RFhIf.js";import"./index-BaKABx5v.js";import"./index-DTGjjx-m.js";import"./index-BMJe4OzN.js";import"./index-BQLODoD0.js";import"./index-C8bgUDlY.js";import"./DatePickerCalendar-PLUA6iCa.js";import"./LabelWithHelp-Dpi57Wto.js";import"./Help-BlguQcoq.js";import"./Combobox.module-DRLQKUr5.js";import"./ComboboxButton-_x3P7a4_.js";import"./ComboboxSelectedOptions-Ses0U7oF.js";import"./index-CQLLboVf.js";import"./index-CU8F76KD.js";import"./stories.utils-BCId827v.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m}),`
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
//# sourceMappingURL=Accordion-B0hKliuC.js.map
