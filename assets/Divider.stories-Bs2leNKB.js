import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-D_ouKaeX.js";import{I as k}from"./index-Du3yX_TW.js";import{s as S,t as b,u as y,a as l,C as n,D as r}from"./index-DtTKNpP0.js";import{y as H,E as T}from"./index-CgEl4Pzg.js";import{P as v,H as o}from"./index-DXWIZOJk.js";import{c as i}from"./helpers-B90wjoUE.js";import{e as D}from"./stories.utils-Ys3NG0dr.js";import"./index-CGk5cNE3.js";import{b as P}from"./base-props.types-B340BQPQ.js";const d=[...P,"none"],N={component:l,title:"Komponenter/Divider",argTypes:{spacingTop:{options:d,table:{category:i.props,defaultValue:{summary:y()}}},spacingBottom:{options:d,table:{category:i.props,defaultValue:{summary:b()}}},variant:{table:{category:i.props,defaultValue:{summary:S()}}},ariaHidden:{control:"boolean",table:{category:i.aria}}},args:{}},a={},s={render:E=>e.jsxs("div",{children:[e.jsx(v,{hasSpacing:!0,children:"Delestrek som er meningsbærende og dermed ikke skjult for skjermleser"}),e.jsxs(n,{className:"dividerCard",children:[e.jsx(n.Header,{children:e.jsx(o,{as:"h3",level:3,children:"Utregning"})}),e.jsxs(n.Content,{classNames:{children:"flexGrow"},children:[e.jsxs(r,{className:"descriptionList",descriptionWeight:"regular",termWeight:"regular",children:[e.jsx(r.Element,{term:"Tall nummer 1",children:"99 000"}),e.jsx(r.Element,{term:"Tall nummer 2",children:"100 000"}),e.jsx(r.Element,{term:"Tall nummer 3",children:"110 000"})]}),e.jsx(l,{}),e.jsx(r,{className:"descriptionList",descriptionWeight:"bold",termWeight:"bold",children:e.jsx(r.Element,{term:"Sum",children:"200 000"})})]})]})]})};s.parameters=D;const t={name:"I temavisning",render:E=>{const C=L.useRef(null);return e.jsxs("div",{children:[e.jsx(v,{hasSpacing:!0,children:"Delestrek brukt som dekorelement og skjult for skjermleser"}),e.jsxs("div",{className:"flex gapM",children:[e.jsx(H,{size:"extraLarge"}),e.jsx(o,{as:"h1",level:2,children:"Arbeid, trygd og pensjon"})]}),e.jsx(l,{spacingTop:"xs",spacingBottom:"l",ariaHidden:!0}),e.jsxs(n,{className:"cardWidth",children:[e.jsx(n.Header,{children:e.jsx(o,{ref:C,as:"h3",level:3,canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(n.Content,{children:e.jsx(r,{children:e.jsx(r.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(n.Actions,{children:e.jsx(k,{svgPath:T,children:"Endre"})})]})]})}};t.parameters=D;var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{} satisfies Story",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <div>
        <Paragraph hasSpacing>
          {'Delestrek som er meningsbærende og dermed ikke skjult for skjermleser'}
        </Paragraph>
        <Card className={'dividerCard'}>
          <Card.Header>
            <Heading as={'h3'} level={3}>
              {'Utregning'}
            </Heading>
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
} satisfies Story`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,j,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(j=t.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const A=["Preview","Examples","ThemeExample"],O=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:a,ThemeExample:t,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{O as D,s as E,t as T};
//# sourceMappingURL=Divider.stories-Bs2leNKB.js.map
