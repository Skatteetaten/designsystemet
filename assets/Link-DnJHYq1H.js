import{j as n}from"./iframe-s2_bNgHU.js";import{useMDXComponents as o}from"./index-Coc8XlEY.js";import{M as s,P as i,C as a}from"./WithTooltip-SK46ZJ2J-BgQ-UF5v.js";import{P as m}from"./utils-CiE3N6_4.js";import{L as p,E as c}from"./Link.stories-9LN-dcIl.js";import{V as d}from"./VersionBadge-aMCyLfcW.js";import{D as l}from"./DocIntro-DIjLX9Xz.js";import{D as k}from"./DocHeaderWrapper-C_g6vmEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dl0hHgc-.js";import"./index-CYEZhpn0.js";import"./index-DeRgnwbs.js";import"./lz-string-m9jzapWX.js";import"./index-Ck1G954W.js";import"./index-CUsfAC9p.js";import"./index-DcFKixUR.js";import"./icon.systems-DJyjpAy9.js";import"./icon.utils-8Yzzup2C.js";import"./stories.utils-CZ5hej_8.js";import"./base-props.types-B340BQPQ.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:p}),`
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
`})})]})}function V(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{V as default};
//# sourceMappingURL=Link-DnJHYq1H.js.map
