import{f as a,j as e,r as V}from"./iframe-Cq9sN_Dz.js";import{b as m,M as F,B as L}from"./index-5qJDb17Q.js";import{n as H,o as C,p as D,q as _,r as B,s as w,P as l}from"./index-9jg8RjbV.js";import{X as E}from"./index-B4tfeJ0Q.js";import{P as r,H as A}from"./index-DskRqDMQ.js";import{f as M,w as z}from"./wait-alert-illustration-DTNbQ6cI.js";import{l as d}from"./storybook.testing.utils-BgHZnMzD.js";import{e as W}from"./stories.utils-CZ5hej_8.js";const X={component:l,title:"Komponenter/Panel",argTypes:{canManuallySetTitleFocus:{table:{category:a.props}},children:{control:"text",table:{category:a.props}},classNames:{control:!1,table:{category:a.props}},color:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:w()}}},hasResponsivePadding:{table:{category:a.props}},headingRef:{table:{category:a.props},control:{disable:!0}},hideGraphicMobile:{table:{category:a.props}},hideSubtitle:{table:{category:a.props}},hideTitle:{table:{category:a.props}},imageSource:{control:"select",options:["",M,z],table:{category:a.props}},imageSourceAltText:{table:{category:a.props}},padding:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:B()}}},renderIcon:{table:{category:a.props},control:"select",options:["","CheckIcon"],mapping:{"":"",CheckIcon:()=>e.jsx(E,{size:"extraLarge"})}},spacing:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:_()}}},subtitle:{table:{category:a.props}},subtitleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:D()}}},title:{table:{category:a.props}},titleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:C()}}},variant:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:H()}}}},args:{children:d}},s={},t={render:g=>{const p=V.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{title:"Når kommer skattepengene",imageSource:M,spacing:"xxl",children:[e.jsx(r,{hasSpacing:!0,children:e.jsx(m,{href:"#",children:"Vi varsler deg når skatteoppgjøret ditt er klart."})}),e.jsx(r,{hasSpacing:!0,children:"Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat."}),e.jsx(r,{hasSpacing:!0,children:"Logg inn:"}),e.jsx(F,{children:"Sjekk skatten"}),e.jsxs(r,{className:"dummySpacingTop",children:["Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt ",e.jsx(m,{href:"#",children:"se, endre og levere skattemeldingen"}),"."]})]}),e.jsx(l,{title:"Virksomheten skal registreres som særavgiftspliktig",variant:"filled",color:"forest",spacing:"xxl",renderIcon:()=>e.jsx(E,{size:"extraLarge"}),children:e.jsx(r,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."})}),e.jsx(l,{title:"Panel med tittel som skal få fokus",variant:"outline",color:"denim",headingRef:p,canManuallySetTitleFocus:!0,children:e.jsx(r,{children:`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.`})}),e.jsx(L,{onClick:()=>{var c;(c=p.current)==null||c.focus()},children:"Sett fokus på Panel Header"})]})}},n={name:"PanelPadding",args:{hasResponsivePadding:void 0,title:"Eksempel på padding satt via prop",padding:"m"},argTypes:{classNames:{control:"object"}},parameters:{controls:{include:["hasResponsivePadding","classNames","renderIcon"]}},globals:{viewport:{value:"--mobile"}},tags:["!dev"],render:g=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"semantic-article bottom-spacing",children:[e.jsx(A,{as:"h1",level:3,children:"Tekst utenfor Panel"}),d]}),e.jsx(l,{...g,children:d})]})},o={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Eksempel på padding med CSS variabler",classNames:{padding:"dummyPanelPaddingResponsiveFullWidth"}},tags:["!dev"]},i={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Innholdsbredde 100%",classNames:{padding:"dummyPanelPaddingNoMargin"}},tags:["!dev"]};t.parameters=W;var u,h,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{} satisfies Story",...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var P,f,v;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,y,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
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
} satisfies Story`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,j,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var R,I,T;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const J=["Preview","Examples","PanelPadding","PanelPaddingFullWidth","PanelPaddingNoMargin"],$=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,PanelPadding:n,PanelPaddingFullWidth:o,PanelPaddingNoMargin:i,Preview:s,__namedExportsOrder:J,default:X},Symbol.toStringTag,{value:"Module"}));export{t as E,$ as P,n as a,o as b,i as c};
//# sourceMappingURL=Panel.stories-Ci0OzC6Y.js.map
