import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-DecWcg07.js";import{M as i,P as s,C as a,a as m}from"./index-GCw0b2DM.js";import{L as p,E as c}from"./Link.stories-CO0Iu7Af.js";import{V as d}from"./VersionBadge-C4SEVtjM.js";import{D as l}from"./DocIntro-CDL2Kqri.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-s6XqFuJs.js";import"./index-tLsore8Q.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B77p9Xne.js";import"./index-EsEcB_zD.js";import"./index-vpaAjjI_.js";import"./index-_-BAtSXr.js";import"./helpers-BRYKCfPN.js";import"./icon.systems-DPAJIO4Y.js";import"./icon.utils-XW2L0FSl.js";import"./stories.utils-Ys3NG0dr.js";import"./base-props.types-B2QwU1g4.js";import"./index-SYCMKRjb.js";function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:p}),`
`,n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsx(d,{packageName:"buttons"}),`
`,n.jsx(l,{name:"Link",url:"https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/link/"}),`
`,n.jsx(s,{}),`
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
} from 'react-router';
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
`})})]})}function X(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{X as default};
//# sourceMappingURL=Link-CrK4E-Xo.js.map
