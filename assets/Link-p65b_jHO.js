import{j as n}from"./iframe-LV2IHoVd.js";import{useMDXComponents as o}from"./index-CHTFZd6T.js";import{M as s,P as i,a}from"./blocks-CV0ueSQE.js";import{P as m}from"./utils-CxTaqGgG.js";import{L as p,E as c}from"./Link.stories-FxXJ27qz.js";import{V as d}from"./VersionBadge-CyRTrWy5.js";import{D as l}from"./DocIntro-B1LlSslu.js";import{D as k}from"./DocHeaderWrapper-Cu9kYFB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46l346O.js";import"./index-B4DVwQjS.js";import"./lz-string-m9jzapWX.js";import"./index-Csn33An5.js";import"./index-DuhhME3h.js";import"./index-iiAegyHz.js";import"./icon.systems-BccAeqUG.js";import"./icon.utils-BF-03arj.js";import"./stories.utils-DxY1qhhU.js";import"./base-props.types-DHcpNXpn.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:p}),`
`,n.jsxs(k,{componentName:"Link",children:[n.jsx(e.h1,{id:"link",children:"Link"}),n.jsx(d,{packageName:"buttons"}),n.jsx(l,{url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/link/"})]}),`
`,n.jsx(i,{}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Link } from '@skatteetaten/ds-buttons';
`})}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(m,{of:c}),`
`,n.jsx(e.h2,{id:"bruk-sammen-med-link-komponenten-i-react-router",children:"Bruk sammen med Link-komponenten i react-router"}),`
`,n.jsxs(e.p,{children:["Koden under viser hvordan man kan kombinere ",n.jsx(e.code,{children:"Link"}),"-komponenten fra ",n.jsx(e.code,{children:"react-router"})," med ",n.jsx(e.code,{children:"Link"}),"-komponenten fra ",n.jsx(e.code,{children:"@skatteetaten/ds-buttons"}),". Ved å kombinere disse kan man oppnå både korrekt navigasjonslogikk og ønsket design. Les mer i dokumentasjonen til ",n.jsx(e.code,{children:"react-router"}),": ",n.jsx(e.a,{href:"https://reactrouter.com/6.28.0/upgrading/v5#remove-link-component-prop",rel:"nofollow",children:"https://reactrouter.com/6.28.0/upgrading/v5#remove-link-component-prop"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import {
  useHref,
  useLinkClickHandler,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom';
import {
  Link as DSLink,
  type LinkProps as DSLinkProps,
} from '@skatteetaten/ds-buttons';

type CombinedLinkProps = RouterLinkProps & Omit<DSLinkProps, 'href'>;

export const Link = ({
  children,
  onClick,
  replace = false,
  state,
  target,
  to,
  ...rest
}: CombinedLinkProps) => {
  let href = useHref(to);
  let handleClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
  });

  return (
    <DSLink
      {...rest}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          handleClick(event);
        }
      }}
      target={target}
    >
      {children}
    </DSLink>
  );
};
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Link } from './CustomLink';

<Link to="/" color="white">
  Hjem
</Link>;
`})})]})}function R(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{R as default};
//# sourceMappingURL=Link-p65b_jHO.js.map
