import{j as n}from"./iframe-BHAek7Q1.js";import{useMDXComponents as i}from"./index-DSz98NdT.js";import{M as s,P as a,a as d}from"./blocks-BpBa1eEB.js";import{P as r}from"./utils-BgcVCBuX.js";import{A as m,S as c,a as p,B as l,L as h,W as x}from"./Accordion.stories-BJlLl1Lw.js";import{V as f}from"./VersionBadge-CDyea5_5.js";import{D as j}from"./DocIntro-u8EjgXgd.js";import{D as k}from"./DocHeaderWrapper-DhLsIChr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHxcGkSl.js";import"./index-Ceylv9ay.js";import"./lz-string-m9jzapWX.js";import"./index-BkWKVRRR.js";import"./index-k4H7HdQu.js";import"./index-MVsVTAOX.js";import"./index-B6YsjIh8.js";import"./index-DNPWp4Lv.js";import"./index-BVEcgXLv.js";import"./index-D1w89d87.js";import"./DatePickerCalendar-BX9HtFSH.js";import"./LabelWithHelp-ZJcs-Zvg.js";import"./Help-CgNeZLkX.js";import"./Combobox.module-DmWNkYt7.js";import"./ComboboxButton-DO8yVEaz.js";import"./ComboboxSelectedOptions-CCttgKi_.js";import"./index-DVawnBNL.js";import"./index-4siuvGdV.js";import"./stories.utils-DvYM6q3N.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m}),`
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
//# sourceMappingURL=Accordion-CGxa_7EU.js.map
