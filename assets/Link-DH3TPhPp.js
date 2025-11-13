import{j as n}from"./iframe-CdXtTKZQ.js";import{useMDXComponents as o}from"./index-Fodq6baY.js";import{M as s,P as i,C as a}from"./blocks-BsozQqO1.js";import{P as m}from"./utils-Ct-tsx4J.js";import{L as p,E as c}from"./Link.stories-qzMjiVeX.js";import{V as d}from"./VersionBadge-BT9Fb_Ir.js";import{D as l}from"./DocIntro-SDUDjmUj.js";import{D as k}from"./DocHeaderWrapper-Dl1QP3pC.js";import"./index-GtA9f0CN.js";import"./index-DIHq9ZfV.js";import"./lz-string-CuPZokM5.js";import"./index-CDWtp_lT.js";import"./index-D0xxaDHU.js";import"./index-CVW4skVE.js";import"./icon.systems-eQup-rxy.js";import"./icon.utils-DqHiEw0Y.js";import"./stories.utils-CZ5hej_8.js";import"./base-props.types-B340BQPQ.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:p}),`
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
//# sourceMappingURL=Link-DH3TPhPp.js.map
