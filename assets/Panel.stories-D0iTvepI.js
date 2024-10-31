import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as h}from"./index-BwDkhjyp.js";import{b as p,M as P,B as y}from"./index-PT2LozU0.js";import{P as s,c as b,d as x,e as S,f as v,h as j,i as T}from"./index-Cons3ews.js";import"./index-BSjcMZTJ.js";import{k as V}from"./index-BU2UjPj9.js";import{P as a}from"./index-BFUMlpsH.js";import{c as e}from"./helpers-Dccz2jQ-.js";import{f as k,w as A}from"./wait-alert-illustration-BZ1f2OL4.js";import{l as L}from"./storybook.testing.utils-CMs160i9.js";import{e as M}from"./stories.utils-Ys3NG0dr.js";import{b as E,h as I,c as n}from"./base-props.types-sXyoNogd.js";const R=[n[0],n[1],n[2],n[3],n[5]],D={component:s,title:"Komponenter/Panel",argTypes:{canManuallySetTitleFocus:{table:{category:e.props}},children:{control:"text",table:{category:e.props}},color:{options:R,control:"inline-radio",table:{category:e.props,defaultValue:{summary:b()}}},headingRef:{table:{category:e.props},control:{disable:!0}},hideGraphicMobile:{table:{category:e.props}},hideSubtitle:{table:{category:e.props}},hideTitle:{table:{category:e.props}},imageSource:{control:"select",options:["",k,A],table:{category:e.props}},imageSourceAltText:{table:{category:e.props}},padding:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:x()}}},renderIcon:{control:{disable:!0},table:{category:e.props}},spacing:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:S()}}},subtitle:{table:{category:e.props}},subtitleAs:{options:[...E],control:"inline-radio",table:{category:e.props,defaultValue:{summary:v()}}},title:{table:{category:e.props}},titleAs:{options:[...I],control:"inline-radio",table:{category:e.props,defaultValue:{summary:j()}}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:T()}}}},args:{children:L}},o={},t={render:B=>{const l=h.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(s,{title:"Når kommer skattepengene",imageSource:k,padding:"mega",spacing:"xxl",children:[r.jsx(a,{hasSpacing:!0,children:r.jsx(p,{href:"#",children:"Vi varsler deg når skatteoppgjøret ditt er klart."})}),r.jsx(a,{hasSpacing:!0,children:"Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat."}),r.jsx(a,{hasSpacing:!0,children:"Logg inn:"}),r.jsx(P,{children:"Sjekk skatten"}),r.jsxs(a,{className:"dummySpacingTop",children:["Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt ",r.jsx(p,{href:"#",children:"se, endre og levere skattemeldingen"}),"."]})]}),r.jsx(s,{title:"Virksomheten skal registreres som særavgiftspliktig",variant:"filled",color:"forest",spacing:"xxl",renderIcon:()=>r.jsx(V,{size:"extraLarge"}),children:r.jsx(a,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."})}),r.jsx(s,{title:"Panel med tittel som skal få fokus",variant:"outline",color:"denim",headingRef:l,canManuallySetTitleFocus:!0,children:r.jsx(a,{children:`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.`})}),r.jsx(y,{onClick:()=>{var i;(i=l.current)==null||i.focus()},children:"Sett fokus på Panel Header"})]})}};t.parameters=M;var d,g,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(c=(g=o.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return <>
        <Panel title={'Når kommer skattepengene'} imageSource={farmerIllustration} padding={'mega'} spacing={'xxl'}>
          <Paragraph hasSpacing>
            <Link href={'#'}>
              {'Vi varsler deg når skatteoppgjøret ditt er klart.'}
            </Link>
          </Paragraph>
          <Paragraph hasSpacing>
            {'Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat.'}
          </Paragraph>
          <Paragraph hasSpacing>{'Logg inn:'}</Paragraph>
          <MegaButton>{'Sjekk skatten'}</MegaButton>
          <Paragraph className={'dummySpacingTop'}>
            {'Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt '}
            <Link href={'#'}>{'se, endre og levere skattemeldingen'}</Link>
            {'.'}
          </Paragraph>
        </Panel>

        <Panel title={'Virksomheten skal registreres som særavgiftspliktig'} variant={'filled'} color={'forest'} spacing={'xxl'} renderIcon={(): JSX.Element => <CheckIcon size={'extraLarge'} />}>
          <Paragraph>
            {'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'}
          </Paragraph>
        </Panel>

        <Panel title={'Panel med tittel som skal få fokus'} variant={'outline'} color={'denim'} headingRef={headingRef} canManuallySetTitleFocus>
          <Paragraph>{\`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.\`}</Paragraph>
        </Panel>
        <Button onClick={(): void => {
        headingRef.current?.focus();
      }}>
          {'Sett fokus på Panel Header'}
        </Button>
      </>;
  }
} satisfies Story`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const _=["Preview","Examples"],Q=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:_,default:D},Symbol.toStringTag,{value:"Module"}));export{t as E,Q as P};
//# sourceMappingURL=Panel.stories-D0iTvepI.js.map
