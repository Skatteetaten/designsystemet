import{j as n}from"./iframe-LV2IHoVd.js";import{useMDXComponents as i}from"./index-CHTFZd6T.js";import{M as s,P as a,a as d}from"./blocks-CV0ueSQE.js";import{P as r}from"./utils-CxTaqGgG.js";import{A as m,S as c,a as p,B as l,L as h,W as x}from"./Accordion.stories-CaB8z7Dx.js";import{V as f}from"./VersionBadge-CyRTrWy5.js";import{D as j}from"./DocIntro-B1LlSslu.js";import{D as k}from"./DocHeaderWrapper-Cu9kYFB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46l346O.js";import"./index-B4DVwQjS.js";import"./lz-string-m9jzapWX.js";import"./index-Csn33An5.js";import"./index-DuhhME3h.js";import"./index-iiAegyHz.js";import"./index-CoFUi8Ca.js";import"./index-C1YCcPDo.js";import"./index-Bg4cHPXU.js";import"./index-V6snDp7t.js";import"./DatePickerCalendar-osWe9R9e.js";import"./LabelWithHelp-DmRXJy03.js";import"./Help-CeQ0QOkd.js";import"./Combobox.module-DRLQKUr5.js";import"./ComboboxButton-D0KnevBK.js";import"./ComboboxSelectedOptions-D44T4Gmb.js";import"./index-B7dLDHE3.js";import"./index-BrmZVm0N.js";import"./stories.utils-DxY1qhhU.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m}),`
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
//# sourceMappingURL=Accordion-BixbWKi3.js.map
