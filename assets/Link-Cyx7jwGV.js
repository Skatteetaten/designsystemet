import{j as n}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{M as i,P as s,C as a,a as m}from"./index-CQtZ9ELC.js";import{L as p,E as c}from"./Link.stories-D5NQpoy0.js";import{V as d}from"./VersionBadge-DfxsmlSA.js";import{D as l}from"./DocIntro-Bznj1CMw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CWiYu3kJ.js";import"./index-C-O_Pr5g.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-CEFmy_Ic.js";import"./index-BYKicpQW.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./helpers-Q4uYuiE4.js";import"./icon.systems-D4eM4wId.js";import"./icon.utils-DDvPh5sV.js";import"./stories.utils-BbHpJfAb.js";import"./base-props.types-sXyoNogd.js";import"./index-7bHEsQL_.js";function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:p}),`
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
//# sourceMappingURL=Link-Cyx7jwGV.js.map
