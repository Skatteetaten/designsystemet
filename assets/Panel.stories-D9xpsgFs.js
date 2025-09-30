import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as M}from"./index-D_ouKaeX.js";import{b as m,M as F,B as L}from"./index-DfnG5Ebn.js";import{m as H,n as C,o as D,p as w,q as _,r as B,P as l}from"./index-CWrHDE5u.js";import{Q as V}from"./index-DAV9Xejq.js";import{P as r,H as A}from"./index-DXWIZOJk.js";import{c as a}from"./helpers-B90wjoUE.js";import{f as E,w as z}from"./wait-alert-illustration-BYTJWND6.js";import{l as d}from"./storybook.testing.utils-CMs160i9.js";import{e as W}from"./stories.utils-Ys3NG0dr.js";const J={component:l,title:"Komponenter/Panel",argTypes:{canManuallySetTitleFocus:{table:{category:a.props}},children:{control:"text",table:{category:a.props}},classNames:{control:!1,table:{category:a.props}},color:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:B()}}},hasResponsivePadding:{table:{category:a.props}},headingRef:{table:{category:a.props},control:{disable:!0}},hideGraphicMobile:{table:{category:a.props}},hideSubtitle:{table:{category:a.props}},hideTitle:{table:{category:a.props}},imageSource:{control:"select",options:["",E,z],table:{category:a.props}},imageSourceAltText:{table:{category:a.props}},padding:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:_()}}},renderIcon:{table:{category:a.props},control:"select",options:["","CheckIcon"],mapping:{"":"",CheckIcon:()=>e.jsx(V,{size:"extraLarge"})}},spacing:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:w()}}},subtitle:{table:{category:a.props}},subtitleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:D()}}},title:{table:{category:a.props}},titleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:C()}}},variant:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:H()}}}},args:{children:d}},s={},t={render:p=>{const g=M.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{title:"Når kommer skattepengene",imageSource:E,spacing:"xxl",children:[e.jsx(r,{hasSpacing:!0,children:e.jsx(m,{href:"#",children:"Vi varsler deg når skatteoppgjøret ditt er klart."})}),e.jsx(r,{hasSpacing:!0,children:"Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat."}),e.jsx(r,{hasSpacing:!0,children:"Logg inn:"}),e.jsx(F,{children:"Sjekk skatten"}),e.jsxs(r,{className:"dummySpacingTop",children:["Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt ",e.jsx(m,{href:"#",children:"se, endre og levere skattemeldingen"}),"."]})]}),e.jsx(l,{title:"Virksomheten skal registreres som særavgiftspliktig",variant:"filled",color:"forest",spacing:"xxl",renderIcon:()=>e.jsx(V,{size:"extraLarge"}),children:e.jsx(r,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."})}),e.jsx(l,{title:"Panel med tittel som skal få fokus",variant:"outline",color:"denim",headingRef:g,canManuallySetTitleFocus:!0,children:e.jsx(r,{children:`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.`})}),e.jsx(L,{onClick:()=>{var c;(c=g.current)==null||c.focus()},children:"Sett fokus på Panel Header"})]})}},n={name:"PanelPadding",args:{hasResponsivePadding:void 0,title:"Eksempel på padding satt via prop",padding:"m"},argTypes:{classNames:{control:"object"}},parameters:{controls:{include:["hasResponsivePadding","classNames","renderIcon"]},viewport:{defaultViewport:"--mobile"}},tags:["!dev"],render:p=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"semantic-article bottom-spacing",children:[e.jsx(A,{as:"h1",level:3,children:"Tekst utenfor Panel"}),d]}),e.jsx(l,{...p,children:d})]})},o={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Eksempel på padding med CSS variabler",classNames:{padding:"dummyPanelPaddingResponsiveFullWidth"}},tags:["!dev"]},i={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Innholdsbredde 100%",classNames:{padding:"dummyPanelPaddingNoMargin"}},tags:["!dev"]};t.parameters=W;var u,h,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{} satisfies Story",...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,P,v;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var y,b,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,j,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const O=["Preview","Examples","PanelPadding","PanelPaddingFullWidth","PanelPaddingNoMargin"],ae=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,PanelPadding:n,PanelPaddingFullWidth:o,PanelPaddingNoMargin:i,Preview:s,__namedExportsOrder:O,default:J},Symbol.toStringTag,{value:"Module"}));export{t as E,ae as P,n as a,o as b,i as c};
//# sourceMappingURL=Panel.stories-D9xpsgFs.js.map
