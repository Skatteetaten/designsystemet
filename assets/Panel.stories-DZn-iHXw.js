import{e as a,j as e,r as h}from"./iframe-s2_bNgHU.js";import{b as c,M as k,B as P}from"./index-Ck1G954W.js";import{n as f,o as v,p as b,q as y,r as S,s as x,P as l}from"./index-jj9Gfu02.js";import{X as m}from"./index-CUsfAC9p.js";import{P as r,H as j}from"./index-CJpzHRrE.js";import{f as u,w as N}from"./wait-alert-illustration-BXqktCEg.js";import{l as d}from"./storybook.testing.utils-BgHZnMzD.js";import{e as R}from"./stories.utils-CZ5hej_8.js";const I={component:l,title:"Komponenter/Panel",argTypes:{canManuallySetTitleFocus:{table:{category:a.props}},children:{control:"text",table:{category:a.props}},classNames:{control:!1,table:{category:a.props}},color:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:x()}}},hasResponsivePadding:{table:{category:a.props}},headingRef:{table:{category:a.props},control:{disable:!0}},hideGraphicMobile:{table:{category:a.props}},hideSubtitle:{table:{category:a.props}},hideTitle:{table:{category:a.props}},imageSource:{control:"select",options:["",u,N],table:{category:a.props}},imageSourceAltText:{table:{category:a.props}},padding:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:S()}}},renderIcon:{table:{category:a.props},control:"select",options:["","CheckIcon"],mapping:{"":"",CheckIcon:()=>e.jsx(m,{size:"extraLarge"})}},spacing:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:y()}}},subtitle:{table:{category:a.props}},subtitleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:b()}}},title:{table:{category:a.props}},titleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:v()}}},variant:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:f()}}}},args:{children:d}},s={},t={render:g=>{const p=h.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{title:"Når kommer skattepengene",imageSource:u,spacing:"xxl",children:[e.jsx(r,{hasSpacing:!0,children:e.jsx(c,{href:"#",children:"Vi varsler deg når skatteoppgjøret ditt er klart."})}),e.jsx(r,{hasSpacing:!0,children:"Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat."}),e.jsx(r,{hasSpacing:!0,children:"Logg inn:"}),e.jsx(k,{children:"Sjekk skatten"}),e.jsxs(r,{className:"dummySpacingTop",children:["Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede oppplysniger, kan du fortsatt ",e.jsx(c,{href:"#",children:"se, endre og levere skattemeldingen"}),"."]})]}),e.jsx(l,{title:"Virksomheten skal registreres som særavgiftspliktig",variant:"filled",color:"forest",spacing:"xxl",renderIcon:()=>e.jsx(m,{size:"extraLarge"}),children:e.jsx(r,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."})}),e.jsx(l,{title:"Panel med tittel som skal få fokus",variant:"outline",color:"denim",headingRef:p,canManuallySetTitleFocus:!0,children:e.jsx(r,{children:`Panel hvor man har en tittel/heading.
          Denne kan få programatisk fokus. Test ved å klikke på knappen med tastaturet.`})}),e.jsx(P,{onClick:()=>{p.current?.focus()},children:"Sett fokus på Panel Header"})]})}},n={name:"PanelPadding",args:{hasResponsivePadding:void 0,title:"Eksempel på padding satt via prop",padding:"m"},argTypes:{classNames:{control:"object"}},parameters:{controls:{include:["hasResponsivePadding","classNames","renderIcon"]}},globals:{viewport:{value:"--mobile"}},tags:["!dev"],render:g=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"semantic-article bottom-spacing",children:[e.jsx(j,{as:"h1",level:3,children:"Tekst utenfor Panel"}),d]}),e.jsx(l,{...g,children:d})]})},o={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Eksempel på padding med CSS variabler",classNames:{padding:"dummyPanelPaddingResponsiveFullWidth"}},tags:["!dev"]},i={...n,args:{...n.args,hasResponsivePadding:!0,padding:void 0,title:"Innholdsbredde 100%",classNames:{padding:"dummyPanelPaddingNoMargin"}},tags:["!dev"]};t.parameters=R;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const T=["Preview","Examples","PanelPadding","PanelPaddingFullWidth","PanelPaddingNoMargin"],_=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,PanelPadding:n,PanelPaddingFullWidth:o,PanelPaddingNoMargin:i,Preview:s,__namedExportsOrder:T,default:I},Symbol.toStringTag,{value:"Module"}));export{t as E,_ as P,n as a,o as b,i as c};
//# sourceMappingURL=Panel.stories-DZn-iHXw.js.map
