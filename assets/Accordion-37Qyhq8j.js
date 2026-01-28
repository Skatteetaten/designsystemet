import{j as e}from"./iframe-CBOQuZmX.js";import{useMDXComponents as i}from"./index-CuunzyVf.js";import{M as s,P as m,C as a}from"./blocks-BAFJMB4n.js";import{P as r}from"./utils-BCStObqa.js";import{A as d,L as p,W as c}from"./Accordion.stories-CvLFCO-5.js";import{V as l}from"./VersionBadge-BustOrna.js";import{D as h}from"./DocIntro-CdHYMErl.js";import{D as x}from"./DocHeaderWrapper-CSKFtW7s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT7HSXc_.js";import"./index-BcO1AqEL.js";import"./lz-string-m9jzapWX.js";import"./index-BxmwhRWV.js";import"./index-tEZUkoN5.js";import"./index-CSgUqAK2.js";import"./index-BYntwts4.js";import"./index-haEYng38.js";import"./index-B4-BoLKC.js";import"./index-D76sDZza.js";import"./DatePickerCalendar-DF1H3gtV.js";import"./LabelWithHelp-vli_xocL.js";import"./Help-4dQh7YC4.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./index-Zmgbh9ba.js";import"./index-B9FmAAUs.js";import"./stories.utils-CZ5hej_8.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"i-arbeidsoppgave",children:"I arbeidsoppgave"}),`
`,e.jsx(r,{of:c})]})}function J(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{J as default};
//# sourceMappingURL=Accordion-37Qyhq8j.js.map
