import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as M}from"./index-BwDkhjyp.js";import{b as u,M as A,B as F}from"./index-CKHxS2Ra.js";import{P as d,g as H,a as L,b as D,c as w,d as C,e as _}from"./index-BjzvYn6A.js";import"./index-C498nvnC.js";import{i as B}from"./index-C3Vp3Ydz.js";import{P as r,H as W}from"./index-DWqb7jS3.js";import{c as a}from"./helpers-Dccz2jQ-.js";import{f as E,w as z}from"./wait-alert-illustration-BZ1f2OL4.js";import{l as p}from"./storybook.testing.utils-CMs160i9.js";import{e as J}from"./stories.utils-Ys3NG0dr.js";import{b as O,h as X,c as s}from"./base-props.types-sXyoNogd.js";const G=[s[0],s[1],s[2],s[3],s[5]],K={component:d,title:"Komponenter/Panel",argTypes:{canManuallySetTitleFocus:{table:{category:a.props}},children:{control:"text",table:{category:a.props}},classNames:{table:{category:a.props}},color:{options:G,control:"inline-radio",table:{category:a.props,defaultValue:{summary:H()}}},hasResponsivePadding:{table:{category:a.props}},headingRef:{table:{category:a.props},control:{disable:!0}},hideGraphicMobile:{table:{category:a.props}},hideSubtitle:{table:{category:a.props}},hideTitle:{table:{category:a.props}},imageSource:{control:"select",options:["",E,z],table:{category:a.props}},imageSourceAltText:{table:{category:a.props}},padding:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:L()}}},renderIcon:{control:{disable:!0},table:{category:a.props}},spacing:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:D()}}},subtitle:{table:{category:a.props}},subtitleAs:{options:[...O],control:"inline-radio",table:{category:a.props,defaultValue:{summary:w()}}},title:{table:{category:a.props}},titleAs:{options:[...X],control:"inline-radio",table:{category:a.props,defaultValue:{summary:C()}}},variant:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:_()}}}},args:{children:p}},o={},t={render:g=>{const c=M.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(d,{title:"Når kommer skattepengene",imageSource:E,spacing:"xxl",children:[e.jsx(r,{hasSpacing:!0,children:e.jsx(u,{href:"#",children:"Vi varsler deg når skatteoppgjøret ditt er klart."})}),e.jsx(r,{hasSpacing:!0,children:"Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat."}),e.jsx(r,{hasSpacing:!0,children:"Logg inn:"}),e.jsx(A,{children:"Sjekk skatten"}),e.jsxs(r,{className:"dummySpacingTop",children:["Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt ",e.jsx(u,{href:"#",children:"se, endre og levere skattemeldingen"}),"."]})]}),e.jsx(d,{title:"Virksomheten skal registreres som særavgiftspliktig",variant:"filled",color:"forest",spacing:"xxl",renderIcon:()=>e.jsx(B,{size:"extraLarge"}),children:e.jsx(r,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."})}),e.jsx(d,{title:"Panel med tittel som skal få fokus",variant:"outline",color:"denim",headingRef:c,canManuallySetTitleFocus:!0,children:e.jsx(r,{children:`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.`})}),e.jsx(F,{onClick:()=>{var m;(m=c.current)==null||m.focus()},children:"Sett fokus på Panel Header"})]})}},n={name:"PanelPadding",args:{hasResponsivePadding:void 0,title:"Eksempel på padding satt via prop",padding:"m"},argTypes:{classNames:{control:"object"}},parameters:{controls:{include:["hasResponsivePadding","classNames","renderIcon"]},viewport:{defaultViewport:"--mobile"}},tags:["!dev"],render:g=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"semantic-article bottom-spacing",children:[e.jsx(W,{as:"h1",level:3,children:"Tekst utenfor Panel"}),p]}),e.jsx(d,{...g,children:p})]})},i={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Eksempel på padding med CSS variabler",classNames:{padding:"dummyPanelPaddingResponsiveFullWidth"}},tags:["!dev"]},l={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Innholdsbredde 100%",classNames:{padding:"dummyPanelPaddingNoMargin"}},tags:["!dev"]};t.parameters=J;var h,f,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{} satisfies Story",...(P=(f=o.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var k,v,b;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return <>
        <Panel title={'Når kommer skattepengene'} imageSource={farmerIllustration} spacing={'xxl'}>
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
} satisfies Story`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,S,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'PanelPadding',
  args: {
    hasResponsivePadding: undefined,
    title: 'Eksempel på padding satt via prop',
    padding: 'm'
  },
  argTypes: {
    classNames: {
      control: 'object'
    }
  },
  parameters: {
    controls: {
      include: ['hasResponsivePadding', 'classNames', 'renderIcon']
    },
    viewport: {
      defaultViewport: '--mobile'
    }
  },
  tags: ['!dev'],
  render: (args): JSX.Element => {
    return <>
        <div className={'semantic-article bottom-spacing'}>
          <Heading as={'h1'} level={3}>
            {'Tekst utenfor Panel'}
          </Heading>
          {loremIpsum}
        </div>
        <Panel {...args}>{loremIpsum}</Panel>
      </>;
  }
} satisfies Story`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var j,N,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...PanelPadding,
  args: {
    ...PanelPadding.args,
    hasResponsivePadding: true,
    padding: undefined,
    title: 'Eksempel på padding med CSS variabler',
    classNames: {
      padding: 'dummyPanelPaddingResponsiveFullWidth'
    }
  },
  tags: ['!dev']
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var T,I,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...PanelPadding,
  args: {
    ...PanelPadding.args,
    hasResponsivePadding: true,
    padding: undefined,
    title: 'Innholdsbredde 100%',
    classNames: {
      padding: 'dummyPanelPaddingNoMargin'
    }
  },
  tags: ['!dev']
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const q=["Preview","Examples","PanelPadding","PanelPaddingFullWidth","PanelPaddingNoMargin"],ie=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,PanelPadding:n,PanelPaddingFullWidth:i,PanelPaddingNoMargin:l,Preview:o,__namedExportsOrder:q,default:K},Symbol.toStringTag,{value:"Module"}));export{t as E,ie as P,n as a,i as b,l as c};
//# sourceMappingURL=Panel.stories-C5IUhFnS.js.map
