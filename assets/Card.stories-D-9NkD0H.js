import{f as p,j as e,r as b}from"./iframe-Cq9sN_Dz.js";import{I as i,a as x,b as g}from"./index-5qJDb17Q.js";import{g as V,b as F,C as n,D as r}from"./index-9jg8RjbV.js";import{I as G,E as o,K as _,D as z,y as M,N as k,O as u,Q as T}from"./index-B4tfeJ0Q.js";import{T as f}from"./index-D6Uh_XyP.js";import{H as c,P as C}from"./index-DskRqDMQ.js";import{l as X}from"./storybook.testing.utils-BgHZnMzD.js";import{e as j}from"./stories.utils-CZ5hej_8.js";n.Header.displayName="Card.Header";n.Content.displayName="Card.Content";n.Actions.displayName="Card.Actions";n.Alert.displayName="Card.Alert";const O={component:n,title:"Komponenter/Card/Card",argTypes:{children:{control:"text",table:{category:p.props}},spacing:{table:{category:p.props,defaultValue:{summary:F()}}},color:{control:"inline-radio",table:{category:p.props,defaultValue:{summary:V()}}},ariaLabelledBy:{table:{category:p.aria}}},args:{children:X}},m={render:h=>e.jsx(n,{...h,children:e.jsx(n.Content,{children:h.children})})},s={name:"Skjemakort",render:h=>e.jsxs("div",{className:"containerS flex flexColumn gapS",children:[e.jsxs(n,{color:"graphite",children:[e.jsx(n.Header,{rightContent:e.jsx(f,{svgPath:G,children:"Endret av deg"}),children:e.jsx(c,{as:"h3",level:3,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Beløp",children:"654 321"}),e.jsx(r.Element,{term:"Fradrag",children:"321 098"}),e.jsx(r.Element,{term:"Ytelser",children:"987 654"})]})}),e.jsx(n.Actions,{children:e.jsx(i,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{color:"graphite",children:[e.jsxs(n.Header,{rightContent:e.jsx(C,{children:e.jsx(i,{svgPath:z,children:"Fjern"})}),children:[e.jsx(_,{size:"extraLarge"}),e.jsx(c,{as:"h3",level:3,children:"Andre inntekter"})]}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Opprinnelig beløp",children:"1 753 kroner"}),e.jsx(r.Element,{term:"Forsinkelsesrenter",children:"200 kroner"}),e.jsx(r.Element,{term:"Betaligsfrist",children:"09.10.2024"})]})}),e.jsx(n.Actions,{children:e.jsx(i,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{children:[e.jsx(n.Header,{rightContent:e.jsx(f,{color:"forest",svgPath:M,children:"OK til innsending"}),children:e.jsx(c,{as:"h3",level:3,hasSpacing:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"1 000 000 kr"})})}),e.jsx(n.Actions,{children:e.jsx(i,{svgPath:o,children:"Endre"})})]})]})};s.parameters=j;const l={name:"Liste med filer",render:h=>e.jsxs("div",{className:"flex flexColumn gapS width400 topSpacingXL centerMargin",children:[e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(k,{className:"paddingXS",size:"small"}),"mine-hus-og-hoteller.zip"]})}),e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(k,{className:"blueIcon paddingXS",size:"small"}),e.jsx(g,{className:"resetLinkStyling",href:"#",children:"mine-hus-og-hoteller.zip"})]})}),e.jsx(n,{spacing:"xxs",color:"burgundy",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(T,{className:"dangerIcon paddingXS",size:"small"}),"carlos-santana_smooth-featuring-rob-thomas.mp3"]})})]})};l.parameters=j;const d={name:"Card med merknad",render:h=>{const t=b.useRef(null);return e.jsxs("div",{className:"flex flexWrap gapS",children:[e.jsxs(n,{className:"cardWidth",ariaLabelledBy:"card-heading-1",children:[e.jsxs(n.Alert,{variant:"info",title:"Informasjon",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Denne tingen kan du kanskje kikke litt på:"}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,id:"card-heading-1",as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(i,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",ariaLabelledBy:"card-heading-2",children:[e.jsxs(n.Alert,{variant:"warning",title:"Merknad",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Nå har vi gjort en endring i et annet kort som påvirker dette kortet."}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,id:"card-heading-2",as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(i,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",ariaLabelledBy:"card-heading-3",children:[e.jsxs(n.Alert,{variant:"danger",title:"Å nei, ikke bra!",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil."}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,id:"card-heading-3",as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(i,{svgPath:o,children:"Endre"})})]})]})}};d.parameters=j;var v,E,L;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Content>{args.children}</Card.Content>
    </Card>
} satisfies Story`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,S,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Skjemakort',
  render: (_args): JSX.Element => {
    return <div className={'containerS flex flexColumn gapS'}>
        <Card color={'graphite'}>
          <Card.Header rightContent={<Tag svgPath={InfoOutlineSVGpath}>{'Endret av deg'}</Tag>}>
            <Heading as={'h3'} level={3}>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Fradrag'}>
                {'321 098'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Ytelser'}>
                {'987 654'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card color={'graphite'}>
          <Card.Header rightContent={<Paragraph>
                <InlineButton svgPath={DeleteSVGpath}>{'Fjern'}</InlineButton>
              </Paragraph>}>
            <ArbeidTrygdPensjonIcon size={'extraLarge'} />
            <Heading as={'h3'} level={3}>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Opprinnelig beløp'}>
                {'1 753 kroner'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Forsinkelsesrenter'}>
                {'200 kroner'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Betaligsfrist'}>
                {'09.10.2024'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card>
          <Card.Header rightContent={<Tag color={'forest'} svgPath={CheckSVGpath}>
                {'OK til innsending'}
              </Tag>}>
            <Heading as={'h3'} level={3} hasSpacing>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'1 000 000 kr'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>
      </div>;
  }
} satisfies Story`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var D,N,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Liste med filer',
  render: (_args): JSX.Element => {
    return <div className={'flex flexColumn gapS width400 topSpacingXL centerMargin'}>
        <Card spacing={'xxs'} color={'denim'}>
          <Card.Content classNames={{
          children: 'flex'
        }} rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}>
            <FileIcon className={'paddingXS'} size={'small'} />
            {'mine-hus-og-hoteller.zip'}
          </Card.Content>
        </Card>

        <Card spacing={'xxs'} color={'denim'}>
          <Card.Content classNames={{
          children: 'flex'
        }} rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}>
            <FileIcon className={'blueIcon paddingXS'} size={'small'} />
            <Link className={'resetLinkStyling'} href={'#'}>
              {'mine-hus-og-hoteller.zip'}
            </Link>
          </Card.Content>
        </Card>

        <Card spacing={'xxs'} color={'burgundy'}>
          <Card.Content classNames={{
          children: 'flex'
        }} rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}>
            <WarningIcon className={'dangerIcon paddingXS'} size={'small'} />
            {'carlos-santana_smooth-featuring-rob-thomas.mp3'}
          </Card.Content>
        </Card>
      </div>;
  }
} satisfies Story`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var y,I,H;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Card med merknad',
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return <div className={'flex flexWrap gapS'}>
        <Card className={'cardWidth'} ariaLabelledBy={'card-heading-1'}>
          <Card.Alert variant={'info'} title={'Informasjon'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
            <Paragraph>
              {'Denne tingen kan du kanskje kikke litt på:'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading ref={headingRef} id={'card-heading-1'} as={'h3'} level={3} canBeManuallyFocused>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card className={'cardWidth'} ariaLabelledBy={'card-heading-2'}>
          <Card.Alert variant={'warning'} title={'Merknad'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
            <Paragraph>
              {'Nå har vi gjort en endring i et annet kort som påvirker dette kortet.'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading ref={headingRef} id={'card-heading-2'} as={'h3'} level={3} canBeManuallyFocused>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>

        <Card className={'cardWidth'} ariaLabelledBy={'card-heading-3'}>
          <Card.Alert variant={'danger'} title={'Å nei, ikke bra!'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
            <Paragraph>
              {'Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil.'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading ref={headingRef} id={'card-heading-3'} as={'h3'} level={3} canBeManuallyFocused>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <DescriptionList>
              <DescriptionList.Element term={'Beløp'}>
                {'654 321'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
          <Card.Actions>
            <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
          </Card.Actions>
        </Card>
      </div>;
  }
} satisfies Story`,...(H=(I=d.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};const W=["Preview","Examples","FileListExample","AlertExample"],Z=Object.freeze(Object.defineProperty({__proto__:null,AlertExample:d,Examples:s,FileListExample:l,Preview:m,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{d as A,Z as C,s as E,l as F};
//# sourceMappingURL=Card.stories-D-9NkD0H.js.map
