import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as x,I as L}from"./index-CKHxS2Ra.js";import{D as n,f as S,h as v,i as j}from"./index-BjzvYn6A.js";import"./index-Be268C4q.js";import{x as f,w as b,m as y}from"./index-C3Vp3Ydz.js";import{P as o}from"./index-BFMd1xC6.js";import{T as k}from"./index-BQwW25uL.js";import{c as t}from"./helpers-Dccz2jQ-.js";import{e as u}from"./stories.utils-Ys3NG0dr.js";import{E as P}from"./DatePickerCalendar-CBp1RHw1.js";const F="_descriptionListTwoColumns_k1ni1_1",T={descriptionListTwoColumns:F},w={component:n,title:"Komponenter/DescriptionList/DescriptionList",argTypes:{children:{control:{disable:!0},table:{category:t.props}},size:{table:{category:t.props,defaultValue:{summary:S()}}},variant:{table:{category:t.props}},hasSpacing:{table:{category:t.props}},isVerticalOnMobile:{table:{category:t.props,defaultValue:{summary:v().toString()}}},descriptionDirection:{table:{category:t.props,defaultValue:{summary:j()}}},termWeight:{table:{category:t.props}},descriptionWeight:{table:{category:t.props}}},args:{children:[e.jsx(n.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),e.jsx(n.Element,{term:"Status",children:"Under behandling"},"k2"),e.jsx(n.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),e.jsx(n.Element,{term:"Frist",children:"30.12.2013"},"k4"),e.jsx(n.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),e.jsx(n.Element,{term:"Først endret",children:"30.12.2010"},"k6")]}},s={},r={render:D=>e.jsxs("div",{children:[e.jsxs(n,{variant:"horizontal",descriptionDirection:"vertical",hasSpacing:!0,children:[e.jsx(n.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(n.Element,{term:"Status",children:"Under behandling"}),e.jsx(n.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(n.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(n.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(n.Element,{term:"Først endret",children:"30.12.2010"})]}),e.jsxs(n,{variant:"vertical",children:[e.jsx(n.Element,{term:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"navn"}),e.jsxs(o,{children:[e.jsx(o.Trigger,{className:"dummySpacingLeft",size:"extraSmall"}),e.jsx(o.Content,{children:"Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept."})]})]}),children:"Byron Schweppes-Hansen"}),e.jsxs(n.Element,{term:"Kommune",children:[e.jsx(k,{svgPath:f,color:"burgundy",size:"small",children:"Skjult"}),e.jsx(x,{svgPath:b,children:"vis informasjon"})]}),e.jsxs(n.Element,{term:"Adresse",children:["Adresseveien 1 ",e.jsx(L,{size:"extraSmall",title:"kopier",svgPath:y,onClick:()=>{navigator.clipboard.writeText(`Adresseveien 1
1410 Kolbotn`)}}),e.jsx("br",{}),"1410 Kolbotn"]}),e.jsx(n.Element,{term:"Boligtype",children:e.jsx(P,{showError:!0,children:"Kunne ikke hente inn info"})})]})]})};r.parameters=u;const i={render:D=>e.jsx("div",{children:e.jsxs(n,{variant:"horizontal",descriptionDirection:"vertical",className:T.descriptionListTwoColumns,hasSpacing:!0,children:[e.jsx(n.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(n.Element,{term:"Status",children:"Under behandling"}),e.jsx(n.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(n.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(n.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(n.Element,{term:"Først endret",children:"30.12.2010"})]})})};i.parameters=u;var a,l,m;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{} satisfies Story",...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: _args => <div>
      <DescriptionList variant={'horizontal'} descriptionDirection={'vertical'} hasSpacing>
        <DescriptionList.Element term={'Saksbehandler'}>
          {'Kenneth Performance'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Status'}>
          {'Under behandling'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Sist endret'}>
          {'30.12.2013'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Frist'}>
          {'30.12.2013'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Farge'}>
          {'Smaragdgrønn'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Først endret'}>
          {'30.12.2010'}
        </DescriptionList.Element>
      </DescriptionList>

      <DescriptionList variant={'vertical'}>
        <DescriptionList.Element term={<>
              <span>{'navn'}</span>
              <Popover>
                <Popover.Trigger className={'dummySpacingLeft'} size={'extraSmall'} />
                <Popover.Content>
                  {'Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept.'}
                </Popover.Content>
              </Popover>
            </>}>
          {'Byron Schweppes-Hansen'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Kommune'}>
          <Tag svgPath={EyeOffSVGpath} color={'burgundy'} size={'small'}>
            {'Skjult'}
          </Tag>
          <InlineButton svgPath={LockOutlineSVGpath}>
            {'vis informasjon'}
          </InlineButton>
        </DescriptionList.Element>
        <DescriptionList.Element term={'Adresse'}>
          {'Adresseveien 1 '}
          <IconButton size={'extraSmall'} title={'kopier'} svgPath={CopySVGpath} onClick={() => {
          navigator.clipboard.writeText('Adresseveien 1\\n1410 Kolbotn');
        }} />
          <br />
          {'1410 Kolbotn'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Boligtype'}>
          <ErrorMessage showError>{'Kunne ikke hente inn info'}</ErrorMessage>
        </DescriptionList.Element>
      </DescriptionList>
    </div>
} satisfies Story`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  /*
  Innhold i className
   .descriptionListTwoColumns {
    --description-list-columns: 2;
  }
   */
  render: (_args): JSX.Element => <div>
      <DescriptionList variant={'horizontal'} descriptionDirection={'vertical'} className={styles.descriptionListTwoColumns} hasSpacing>
        <DescriptionList.Element term={'Saksbehandler'}>
          {'Kenneth Performance'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Status'}>
          {'Under behandling'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Sist endret'}>
          {'30.12.2013'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Frist'}>
          {'30.12.2013'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Farge'}>
          {'Smaragdgrønn'}
        </DescriptionList.Element>
        <DescriptionList.Element term={'Først endret'}>
          {'30.12.2010'}
        </DescriptionList.Element>
      </DescriptionList>
    </div>
} satisfies Story`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const C=["Preview","Examples","ExampleWithFixedColumns"],N=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithFixedColumns:i,Examples:r,Preview:s,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{N as D,r as E,i as a};
//# sourceMappingURL=DescriptionList.stories-DX8z0avY.js.map
