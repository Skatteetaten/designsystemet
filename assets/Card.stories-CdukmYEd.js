import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as b}from"./index-ClcD9ViR.js";import{I as s,a as x,b as g}from"./index-DYo2YWtE.js";import{g as F,C as n,D as r}from"./index-xt3MBfhK.js";import{I as V,E as o,u as G,D as _,s as z,v as k,w as u,x as M}from"./index-BomPkCop.js";import{T as f}from"./index-DeA6s3pl.js";import{H as c,P as C}from"./index--gfV2u6P.js";import{c as p}from"./helpers-BRYKCfPN.js";import{l as T}from"./storybook.testing.utils-CMs160i9.js";import{e as j}from"./stories.utils-Ys3NG0dr.js";n.Header.displayName="Card.Header";n.Content.displayName="Card.Content";n.Actions.displayName="Card.Actions";n.Alert.displayName="Card.Alert";const X={component:n,title:"Komponenter/Card/Card",argTypes:{children:{control:"text",table:{category:p.props}},spacing:{table:{category:p.props}},color:{control:"inline-radio",table:{category:p.props,defaultValue:{summary:F()}}},ariaLabelledBy:{table:{category:p.aria}}},args:{children:T}},m={render:h=>e.jsx(n,{...h,children:e.jsx(n.Content,{children:h.children})})},i={name:"Skjemakort",render:h=>e.jsxs("div",{className:"containerS flex flexColumn gapS",children:[e.jsxs(n,{color:"graphite",children:[e.jsx(n.Header,{rightContent:e.jsx(f,{svgPath:V,children:"Endret av deg"}),children:e.jsx(c,{as:"h3",level:3,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Beløp",children:"654 321"}),e.jsx(r.Element,{term:"Fradrag",children:"321 098"}),e.jsx(r.Element,{term:"Ytelser",children:"987 654"})]})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{color:"graphite",children:[e.jsxs(n.Header,{rightContent:e.jsx(C,{children:e.jsx(s,{svgPath:_,children:"Fjern"})}),children:[e.jsx(G,{size:"extraLarge",className:"flexShrinkZero"}),e.jsx(c,{as:"h3",level:3,children:"Andre inntekter"})]}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Opprinnelig beløp",children:"1 753 kroner"}),e.jsx(r.Element,{term:"Forsinkelsesrenter",children:"200 kroner"}),e.jsx(r.Element,{term:"Betaligsfrist",children:"09.10.2024"})]})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{children:[e.jsx(n.Header,{rightContent:e.jsx(f,{color:"forest",svgPath:z,children:"OK til innsending"}),children:e.jsx(c,{as:"h3",level:3,hasSpacing:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"1 000 000 kr"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]})]})};i.parameters=j;const l={name:"Liste med filer",render:h=>e.jsxs("div",{className:"flex flexColumn gapS width400 topSpacingXL centerMargin",children:[e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(k,{className:"flexShrinkZero paddingXS",size:"small"}),"mine-hus-og-hoteller.zip"]})}),e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(k,{className:"blueIcon flexShrinkZero paddingXS",size:"small"}),e.jsx(g,{className:"resetLinkStyling",href:"#",children:"mine-hus-og-hoteller.zip"})]})}),e.jsx(n,{spacing:"xxs",color:"burgundy",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(x,{title:"Lukk",svgPath:u}),children:[e.jsx(M,{className:"dangerIcon flexShrinkZero paddingXS",size:"small"}),"carlos-santana_smooth-featuring-rob-thomas.mp3"]})})]})};l.parameters=j;const d={name:"Card med merknad",render:h=>{const t=b.useRef(null);return e.jsxs("div",{className:"flex flexWrap gapS",children:[e.jsxs(n,{className:"cardWidth",children:[e.jsxs(n.Alert,{variant:"neutral",title:"Informasjon",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Denne tingen kan du kanskje kikke litt på:"}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",children:[e.jsxs(n.Alert,{variant:"warning",title:"Merknad",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Nå har vi gjort en endring i et annet kort som påvirker dette kortet."}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",children:[e.jsxs(n.Alert,{variant:"danger",title:"Å nei, ikke bra!",titleAs:"h3",onClose:()=>{var a;return(a=t==null?void 0:t.current)==null?void 0:a.focus()},children:[e.jsx(C,{children:"Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil."}),e.jsx(g,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(c,{ref:t,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(s,{svgPath:o,children:"Endre"})})]})]})}};d.parameters=j;var v,E,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Content>{args.children}</Card.Content>
    </Card>
} satisfies Story`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var L,A,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
            <ArbeidTrygdPensjonIcon size={'extraLarge'} className={'flexShrinkZero'} />
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
} satisfies Story`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var D,P,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Liste med filer',
  render: (_args): JSX.Element => {
    return <div className={'flex flexColumn gapS width400 topSpacingXL centerMargin'}>
        <Card spacing={'xxs'} color={'denim'}>
          <Card.Content classNames={{
          children: 'flex'
        }} rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}>
            <FileIcon className={'flexShrinkZero paddingXS'} size={'small'} />
            {'mine-hus-og-hoteller.zip'}
          </Card.Content>
        </Card>

        <Card spacing={'xxs'} color={'denim'}>
          <Card.Content classNames={{
          children: 'flex'
        }} rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}>
            <FileIcon className={'blueIcon flexShrinkZero paddingXS'} size={'small'} />
            <Link className={'resetLinkStyling'} href={'#'}>
              {'mine-hus-og-hoteller.zip'}
            </Link>
          </Card.Content>
        </Card>

        <Card spacing={'xxs'} color={'burgundy'}>
          <Card.Content classNames={{
          children: 'flex'
        }} rightContent={<IconButton title={'Lukk'} svgPath={CancelSVGpath} />}>
            <WarningIcon className={'dangerIcon flexShrinkZero paddingXS'} size={'small'} />
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
          <Card.Alert variant={'neutral'} title={'Informasjon'} titleAs={'h3'} onClose={(): void => headingRef?.current?.focus()}>
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
} satisfies Story`,...(y=(H=d.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};const W=["Preview","Examples","FileListExample","AlertExample"],$=Object.freeze(Object.defineProperty({__proto__:null,AlertExample:d,Examples:i,FileListExample:l,Preview:m,__namedExportsOrder:W,default:X},Symbol.toStringTag,{value:"Module"}));export{d as A,$ as C,i as E,l as F};
//# sourceMappingURL=Card.stories-CdukmYEd.js.map
