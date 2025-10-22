import{j as n}from"./iframe-BoxHncFg.js";import{useMDXComponents as o}from"./index-DtBYrEcS.js";import{M as s,P as i,C as a}from"./blocks-DKV7dMyv.js";import{P as m}from"./utils-B66TS2eR.js";import{L as p,E as c}from"./Link.stories-CKKkSnJ5.js";import{V as d}from"./VersionBadge-wytnVFot.js";import{D as l}from"./DocIntro-C4Nfx7x7.js";import{D as k}from"./DocHeaderWrapper-CoLMB1JM.js";import"./index-BWe3UoPQ.js";import"./index-BHwnoM9V.js";import"./lz-string-CuPZokM5.js";import"./index-DyY5joHW.js";import"./index-Mlou2Fgf.js";import"./index-CvbIYQ1J.js";import"./icon.systems-qsHVbejn.js";import"./icon.utils-BtWfleA6.js";import"./stories.utils-CZ5hej_8.js";import"./base-props.types-B340BQPQ.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:p}),`
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
`})})]})}function E(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{E as default};
//# sourceMappingURL=Link-CW46j0Ki.js.map
