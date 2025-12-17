import{j as e}from"./iframe-VHQh6taY.js";import{useMDXComponents as i}from"./index-CQqiVeBm.js";import{M as s,P as m,C as a}from"./WithTooltip-SK46ZJ2J-Bg2alfyC.js";import{P as r}from"./utils-CYxPs9RB.js";import{A as p,L as d,W as c}from"./Accordion.stories-BZYcX98j.js";import{V as l}from"./VersionBadge-Gts-sC0t.js";import{D as h}from"./DocIntro-Bbe2zWe5.js";import{D as x}from"./DocHeaderWrapper-DydI0LU6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1tDoD4z.js";import"./index-CPemCIdg.js";import"./index-C6ntdsyl.js";import"./lz-string-m9jzapWX.js";import"./index-C8wxqHpZ.js";import"./index-Di_7ammq.js";import"./index-DALzD4Pw.js";import"./index-DgU9os4N.js";import"./index-CEjXTNb1.js";import"./index-Don9wpRQ.js";import"./index-lB78RBB2.js";import"./DatePickerCalendar-fvOeZNLZ.js";import"./LabelWithHelp-By58SB7B.js";import"./Help-DcN2X4V-.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-DM_xyLsF.js";import"./ComboboxSelectedOptions-BxHsyaCT.js";import"./index-BJkQPiPu.js";import"./index-tZ1LD8cb.js";import"./stories.utils-BTGWRhRm.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
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
`,e.jsx(r,{of:c})]})}function R(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{R as default};
//# sourceMappingURL=Accordion-3xQ0UhT2.js.map
