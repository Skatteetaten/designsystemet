import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as L,a as x}from"./index-6vKJeIrk.js";import{k as S,l as f,m as v,n as j,o as b,p as y,D as t}from"./index-DzEaN3on.js";import"./index-BeXAOmuM.js";import{$ as k,_ as P,m as F}from"./index-C8q4C1To.js";import{P as o}from"./index-mS9FOLTA.js";import{T}from"./index-DTUQ_OOd.js";import{c as n}from"./helpers-Q4uYuiE4.js";import{e as E}from"./stories.utils-BbHpJfAb.js";import{E as C}from"./DatePickerCalendar-BbGeszOG.js";const V="_descriptionListTwoColumns_k1ni1_1",w={descriptionListTwoColumns:V},K={component:t,title:"Komponenter/DescriptionList/DescriptionList",argTypes:{children:{control:{disable:!0},table:{category:n.props}},size:{table:{category:n.props,defaultValue:{summary:y()}}},variant:{table:{category:n.props,defaultValue:{summary:b()}}},hasSpacing:{table:{category:n.props}},isVerticalOnMobile:{table:{category:n.props,defaultValue:{summary:j().toString()}}},descriptionDirection:{table:{category:n.props,defaultValue:{summary:v()}}},termWeight:{table:{category:n.props,defaultValue:{summary:f()}}},descriptionWeight:{table:{category:n.props,defaultValue:{summary:S()}}}},args:{children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),e.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]}},i={},r={render:D=>e.jsxs("div",{children:[e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]}),e.jsxs(t,{variant:"vertical",children:[e.jsx(t.Element,{term:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"navn"}),e.jsxs(o,{children:[e.jsx(o.Trigger,{className:"dummySpacingLeft",size:"extraSmall"}),e.jsx(o.Content,{children:"Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept."})]})]}),children:"Byron Schweppes-Hansen"}),e.jsxs(t.Element,{term:"Kommune",children:[e.jsx(T,{svgPath:k,color:"burgundy",size:"small",children:"Skjult"}),e.jsx(L,{svgPath:P,children:"vis informasjon"})]}),e.jsxs(t.Element,{term:"Adresse",children:["Adresseveien 1 ",e.jsx(x,{size:"extraSmall",title:"kopier",svgPath:F,onClick:()=>{navigator.clipboard.writeText(`Adresseveien 1
1410 Kolbotn`)}}),e.jsx("br",{}),"1410 Kolbotn"]}),e.jsx(t.Element,{term:"Boligtype",children:e.jsx(C,{showError:!0,children:"Kunne ikke hente inn info"})})]})]})};r.parameters=E;const s={render:D=>e.jsx("div",{children:e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",className:w.descriptionListTwoColumns,hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]})})};s.parameters=E;var a,l,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{} satisfies Story",...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const _=["Preview","Examples","ExampleWithFixedColumns"],H=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithFixedColumns:s,Examples:r,Preview:i,__namedExportsOrder:_,default:K},Symbol.toStringTag,{value:"Module"}));export{H as D,r as E,s as a};
//# sourceMappingURL=DescriptionList.stories-BSObU8Ka.js.map
