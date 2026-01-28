import{e as i,j as e,r as u}from"./iframe-CBOQuZmX.js";import{I as h}from"./index-BxmwhRWV.js";import{t as x,u as j,v as f,a as d,C as n,D as r}from"./index-haEYng38.js";import{K as D,E as v}from"./index-tEZUkoN5.js";import{P as m,H as o}from"./index-B4-BoLKC.js";import{e as c}from"./stories.utils-CZ5hej_8.js";import{b as E}from"./base-props.types-B340BQPQ.js";const l=[...E,"none"],C={component:d,title:"Komponenter/Divider",argTypes:{spacingTop:{options:l,table:{category:i.props,defaultValue:{summary:f()}}},spacingBottom:{options:l,table:{category:i.props,defaultValue:{summary:j()}}},variant:{table:{category:i.props,defaultValue:{summary:x()}}},ariaHidden:{control:"boolean",table:{category:i.aria}}},args:{}},t={},s={render:p=>e.jsxs("div",{children:[e.jsx(m,{hasSpacing:!0,children:"Delestrek som er meningsbærende og dermed ikke skjult for skjermleser"}),e.jsxs(n,{className:"dividerCard",children:[e.jsx(n.Header,{children:e.jsx(o,{as:"h3",children:"Utregning"})}),e.jsxs(n.Content,{classNames:{children:"flexGrow"},children:[e.jsxs(r,{className:"descriptionList",descriptionWeight:"regular",termWeight:"regular",children:[e.jsx(r.Element,{term:"Tall nummer 1",children:"99 000"}),e.jsx(r.Element,{term:"Tall nummer 2",children:"100 000"}),e.jsx(r.Element,{term:"Tall nummer 3",children:"110 000"})]}),e.jsx(d,{}),e.jsx(r,{className:"descriptionList",descriptionWeight:"bold",termWeight:"bold",children:e.jsx(r.Element,{term:"Sum",children:"200 000"})})]})]})]})};s.parameters=c;const a={name:"I temavisning",render:p=>{const g=u.useRef(null);return e.jsxs("div",{children:[e.jsx(m,{hasSpacing:!0,children:"Delestrek brukt som dekorelement og skjult for skjermleser"}),e.jsxs("div",{className:"flex gapM",children:[e.jsx(D,{size:"extraLarge"}),e.jsx(o,{as:"h1",level:2,children:"Arbeid, trygd og pensjon"})]}),e.jsx(d,{spacingTop:"xs",spacingBottom:"l",ariaHidden:!0}),e.jsxs(n,{className:"cardWidth",children:[e.jsx(n.Header,{children:e.jsx(o,{ref:g,as:"h3",canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(h,{svgPath:v,children:"Endre"})})]})]})}};a.parameters=c;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{} satisfies Story",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <div>
        <Paragraph hasSpacing>
          {'Delestrek som er meningsbærende og dermed ikke skjult for skjermleser'}
        </Paragraph>
        <Card className={'dividerCard'}>
          <Card.Header>
            <Heading as={'h3'}>{'Utregning'}</Heading>
          </Card.Header>
          <Card.Content classNames={{
          children: 'flexGrow'
        }}>
            <DescriptionList className={'descriptionList'} descriptionWeight={'regular'} termWeight={'regular'}>
              <DescriptionList.Element term={'Tall nummer 1'}>
                {'99 000'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Tall nummer 2'}>
                {'100 000'}
              </DescriptionList.Element>
              <DescriptionList.Element term={'Tall nummer 3'}>
                {'110 000'}
              </DescriptionList.Element>
            </DescriptionList>
            <Divider />

            <DescriptionList className={'descriptionList'} descriptionWeight={'bold'} termWeight={'bold'}>
              <DescriptionList.Element term={'Sum'}>
                {'200 000'}
              </DescriptionList.Element>
            </DescriptionList>
          </Card.Content>
        </Card>
      </div>;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'I temavisning',
  render: (_args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    return <div>
        <Paragraph hasSpacing>
          {'Delestrek brukt som dekorelement og skjult for skjermleser'}
        </Paragraph>
        <div className={'flex gapM'}>
          <ArbeidTrygdPensjonIcon size={'extraLarge'} />
          <Heading as={'h1'} level={2}>
            {'Arbeid, trygd og pensjon'}
          </Heading>
        </div>
        <Divider spacingTop={'xs'} spacingBottom={'l'} ariaHidden />
        <Card className={'cardWidth'}>
          <Card.Header>
            <Heading ref={headingRef} as={'h3'} canBeManuallyFocused>
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
} satisfies Story`,...a.parameters?.docs?.source}}};const L=["Preview","Examples","ThemeExample"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:t,ThemeExample:a,__namedExportsOrder:L,default:C},Symbol.toStringTag,{value:"Module"}));export{N as D,s as E,a as T};
//# sourceMappingURL=Divider.stories-DJLSlL8l.js.map
