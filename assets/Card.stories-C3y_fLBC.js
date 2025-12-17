import{e as m,j as e,r as k}from"./iframe-VHQh6taY.js";import{I as t,a as C,b as p}from"./index-C8wxqHpZ.js";import{g as v,b as E,C as n,D as r}from"./index-CEjXTNb1.js";import{I as L,E as d,K as A,D as S,y as B,N as j,O as x,Q as D}from"./index-Di_7ammq.js";import{T as f}from"./index-BJkQPiPu.js";import{H as o,P as g}from"./index-Don9wpRQ.js";import{l as N}from"./storybook.testing.utils-BgHZnMzD.js";import{e as u}from"./stories.utils-BTGWRhRm.js";n.Header.displayName="Card.Header";n.Content.displayName="Card.Content";n.Actions.displayName="Card.Actions";n.Alert.displayName="Card.Alert";const P={component:n,title:"Komponenter/Card",argTypes:{children:{control:"text",table:{category:m.props}},spacing:{table:{category:m.props,defaultValue:{summary:E()}}},color:{control:"inline-radio",table:{category:m.props,defaultValue:{summary:v()}}},ariaLabelledBy:{table:{category:m.aria}}},args:{children:N}},h={render:c=>e.jsx(n,{...c,children:e.jsx(n.Content,{children:c.children})})},i={name:"Skjemakort",render:c=>e.jsxs("div",{className:"containerS flex flexColumn gapS",children:[e.jsxs(n,{color:"graphite",children:[e.jsx(n.Header,{rightContent:e.jsx(f,{svgPath:L,children:"Endret av deg"}),children:e.jsx(o,{as:"h3",level:3,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Beløp",children:"654 321"}),e.jsx(r.Element,{term:"Fradrag",children:"321 098"}),e.jsx(r.Element,{term:"Ytelser",children:"987 654"})]})}),e.jsx(n.Actions,{children:e.jsx(t,{svgPath:d,children:"Endre"})})]}),e.jsxs(n,{color:"graphite",children:[e.jsxs(n.Header,{rightContent:e.jsx(g,{children:e.jsx(t,{svgPath:S,children:"Fjern"})}),children:[e.jsx(A,{size:"extraLarge"}),e.jsx(o,{as:"h3",level:3,children:"Andre inntekter"})]}),e.jsx(n.Content,{children:e.jsxs(r,{children:[e.jsx(r.Element,{term:"Opprinnelig beløp",children:"1 753 kroner"}),e.jsx(r.Element,{term:"Forsinkelsesrenter",children:"200 kroner"}),e.jsx(r.Element,{term:"Betaligsfrist",children:"09.10.2024"})]})}),e.jsx(n.Actions,{children:e.jsx(t,{svgPath:d,children:"Endre"})})]}),e.jsxs(n,{children:[e.jsx(n.Header,{rightContent:e.jsx(f,{color:"forest",svgPath:B,children:"OK til innsending"}),children:e.jsx(o,{as:"h3",level:3,hasSpacing:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"1 000 000 kr"})})}),e.jsx(n.Actions,{children:e.jsx(t,{svgPath:d,children:"Endre"})})]})]})};i.parameters=u;const s={name:"Liste med filer",render:c=>e.jsxs("div",{className:"flex flexColumn gapS width400 topSpacingXL centerMargin",children:[e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(C,{title:"Lukk",svgPath:x}),children:[e.jsx(j,{className:"paddingXS",size:"small"}),"mine-hus-og-hoteller.zip"]})}),e.jsx(n,{spacing:"xxs",color:"denim",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(C,{title:"Lukk",svgPath:x}),children:[e.jsx(j,{className:"blueIcon paddingXS",size:"small"}),e.jsx(p,{className:"resetLinkStyling",href:"#",children:"mine-hus-og-hoteller.zip"})]})}),e.jsx(n,{spacing:"xxs",color:"burgundy",children:e.jsxs(n.Content,{classNames:{children:"flex"},rightContent:e.jsx(C,{title:"Lukk",svgPath:x}),children:[e.jsx(D,{className:"dangerIcon paddingXS",size:"small"}),"carlos-santana_smooth-featuring-rob-thomas.mp3"]})})]})};s.parameters=u;const l={name:"Card med merknad",render:c=>{const a=k.useRef(null);return e.jsxs("div",{className:"flex flexWrap gapS",children:[e.jsxs(n,{className:"cardWidth",ariaLabelledBy:"card-heading-1",children:[e.jsxs(n.Alert,{variant:"info",title:"Informasjon",titleAs:"h3",onClose:()=>a?.current?.focus(),children:[e.jsx(g,{children:"Denne tingen kan du kanskje kikke litt på:"}),e.jsx(p,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(o,{ref:a,id:"card-heading-1",as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(t,{svgPath:d,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",ariaLabelledBy:"card-heading-2",children:[e.jsxs(n.Alert,{variant:"warning",title:"Merknad",titleAs:"h3",onClose:()=>a?.current?.focus(),children:[e.jsx(g,{children:"Nå har vi gjort en endring i et annet kort som påvirker dette kortet."}),e.jsx(p,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(o,{ref:a,id:"card-heading-2",as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(t,{svgPath:d,children:"Endre"})})]}),e.jsxs(n,{className:"cardWidth",ariaLabelledBy:"card-heading-3",children:[e.jsxs(n.Alert,{variant:"danger",title:"Å nei, ikke bra!",titleAs:"h3",onClose:()=>a?.current?.focus(),children:[e.jsx(g,{children:"Nå bør du fikse på dette kortet for å unngå at [annet kort] blir feil."}),e.jsx(p,{href:"#",children:"Navn på et annet kort"})]}),e.jsx(n.Header,{children:e.jsx(o,{ref:a,id:"card-heading-3",as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(t,{svgPath:d,children:"Endre"})})]})]})}};l.parameters=u;h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Content>{args.children}</Card.Content>
    </Card>
} satisfies Story`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};const y=["Preview","Examples","FileListExample","AlertExample"],M=Object.freeze(Object.defineProperty({__proto__:null,AlertExample:l,Examples:i,FileListExample:s,Preview:h,__namedExportsOrder:y,default:P},Symbol.toStringTag,{value:"Module"}));export{l as A,M as C,i as E,s as F};
//# sourceMappingURL=Card.stories-C3y_fLBC.js.map
