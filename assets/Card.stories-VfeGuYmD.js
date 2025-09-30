import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-D_ouKaeX.js";import{I as s,a as x,b as g}from"./index-DfnG5Ebn.js";import{g as V,b as F,C as n,D as r}from"./index-sjPb88pE.js";import{I as G,E as o,y as z,D as _,v as M,z as k,J as u,K as T}from"./index-DAV9Xejq.js";import{T as f}from"./index-Bid14VJj.js";import{H as c,P as C}from"./index-B0Glj4sP.js";import{c as p}from"./helpers-B90wjoUE.js";import{l as X}from"./storybook.testing.utils-CMs160i9.js";import{e as j}from"./stories.utils-Ys3NG0dr.js";n.Header.displayName="Card.Header";n.Content.displayName="Card.Content";n.Actions.displayName="Card.Actions";n.Alert.displayName="Card.Alert";const W={component:n,title:"Komponenter/Card/Card",argTypes:{children:{control:"text",table:{category:p.props}},spacing:{table:{category:p.props,defaultValue:{summary:F()}}},color:{control:"inline-radio",table:{category:p.props,defaultValue:{summary:V()}}},ariaLabelledBy:{table:{category:p.aria}}},args:{children:X}},m={render:h=>e.jsx(n,{...h,children:e.jsx(n.Content,{children:h.children})})},i={name:"Skjemakort",render:h=>e.jsxs("div",{className:"containerS flex flexColumn gapS",children:[e.jsxs(n,{color:"graphite",children:[e.jsx(n.Header,{rightContent:e.jsx(f,{svgPath:G,children:"Endret av deg"}),children:e.jsx(c,{as:"h3",level:3,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Beløp",children:"654 321"}),e.jsx(r.Element,{term:"Fradrag",children:"321 098"}),e.jsx(r.Element,{term:"Ytelser",children:"987 654"})]})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{color:"graphite",children:[e.jsxs(n.Header,{rightContent:e.jsx(C,{children:e.jsx(s,{svgPath:_,children:"Fjern"})}),children:[e.jsx(z,{size:"extraLarge"}),e.jsx(c,{as:"h3",level:3,children:"Andre inntekter"})]}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Opprinnelig beløp",children:"1 753 kroner"}),e.jsx(r.Element,{term:"Forsinkelsesrenter",children:"200 kroner"}),e.jsx(r.Element,{term:"Betaligsfrist",children:"09.10.2024"})]})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{children:[e.jsx(n.Header,{rightContent:e.jsx(f,{color:"forest",svgPath:M,children:"OK til innsending"}),children:e.jsx(c,{as:"h3",level:3,hasSpacing:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"1 000 000 kr"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]})]})};i.parameters=j;const l={name:"Liste med filer",render:h=>e.jsxs("div",{className:"flex flexColumn gapS width400 topSpacingXL centerMargin",children:[e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(k,{className:"paddingXS",size:"small"}),"mine-hus-og-hoteller.zip"]})}),e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(k,{className:"blueIcon paddingXS",size:"small"}),e.jsx(g,{className:"resetLinkStyling",href:"#",children:"mine-hus-og-hoteller.zip"})]})}),e.jsx(n,{spacing:"xxs",color:"burgundy",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(T,{className:"dangerIcon paddingXS",size:"small"}),"carlos-santana_smooth-featuring-rob-thomas.mp3"]})})]})};l.parameters=j;const d={name:"Card med merknad",render:h=>{const t=b.useRef(null);return e.jsxs("div",{className:"flex flexWrap gapS",children:[e.jsxs(n,{className:"cardWidth",children:[e.jsxs(n.Alert,{variant:"info",title:"Informasjon",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Denne tingen kan du kanskje kikke litt på:"}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",children:[e.jsxs(n.Alert,{variant:"warning",title:"Merknad",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Nå har vi gjort en endring i et annet kort som påvirker dette kortet."}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",children:[e.jsxs(n.Alert,{variant:"danger",title:"Å nei, ikke bra!",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil."}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]})]})}};d.parameters=j;var v,E,L;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Content>{args.children}</Card.Content>
    </Card>
} satisfies Story`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,S,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,P,B;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(P=l.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var I,H,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Card med merknad',
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return <div className={'flex flexWrap gapS'}>
        <Card className={'cardWidth'}>
          <Card.Alert variant={'info'} title={'Informasjon'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
            <Paragraph>
              {'Denne tingen kan du kanskje kikke litt på:'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading ref={headingRef} as={'h3'} level={3} canBeManuallyFocused>
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

        <Card className={'cardWidth'}>
          <Card.Alert variant={'warning'} title={'Merknad'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
            <Paragraph>
              {'Nå har vi gjort en endring i et annet kort som påvirker dette kortet.'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading ref={headingRef} as={'h3'} level={3} canBeManuallyFocused>
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

        <Card className={'cardWidth'}>
          <Card.Alert variant={'danger'} title={'Å nei, ikke bra!'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
            <Paragraph>
              {'Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil.'}
            </Paragraph>
            <Link href={'#'}>{'Navn på et annet kort'}</Link>
          </Card.Alert>
          <Card.Header>
            <Heading ref={headingRef} as={'h3'} level={3} canBeManuallyFocused>
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
} satisfies Story`,...(y=(H=d.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};const O=["Preview","Examples","FileListExample","AlertExample"],ee=Object.freeze(Object.defineProperty({__proto__:null,AlertExample:d,Examples:i,FileListExample:l,Preview:m,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{d as A,ee as C,i as E,l as F};
//# sourceMappingURL=Card.stories-VfeGuYmD.js.map
