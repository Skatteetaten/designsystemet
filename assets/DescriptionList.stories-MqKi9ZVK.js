import{j as e,f as n}from"./iframe-CdXtTKZQ.js";import{I as S,a as x}from"./index-CDWtp_lT.js";import{f as L,h as f,i as j,j as v,k as b,l as y,m as k,D as t}from"./index-BEPTjI1-.js";import"./index-CLKUz3Po.js";import{R as P,o as F,s as V}from"./index-D0xxaDHU.js";import{P as a}from"./index-6vEA_ZXZ.js";import{T as K}from"./index-D-15xU56.js";import{e as E}from"./stories.utils-CZ5hej_8.js";import{E as T}from"./DatePickerCalendar-ByRci1Oe.js";const z={component:t,title:"Komponenter/DescriptionList",argTypes:{children:{control:{disable:!0},table:{category:n.props}},size:{table:{category:n.props,defaultValue:{summary:k()}}},variant:{table:{category:n.props,defaultValue:{summary:y()}}},hasSpacing:{table:{category:n.props}},isVerticalOnMobile:{table:{category:n.props,defaultValue:{summary:b().toString()}}},isDescriptionVerticalOnMobile:{table:{category:n.props,defaultValue:{summary:v().toString()}}},descriptionDirection:{table:{category:n.props,defaultValue:{summary:j()}}},termWeight:{table:{category:n.props,defaultValue:{summary:f()}}},descriptionWeight:{table:{category:n.props,defaultValue:{summary:L()}}}},args:{children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),e.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]}},s={},r={render:D=>e.jsxs("div",{children:[e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]}),e.jsxs(t,{variant:"vertical",children:[e.jsx(t.Element,{term:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"navn"}),e.jsxs(a,{children:[e.jsx(a.Trigger,{className:"dummySpacingLeft",size:"extraSmall"}),e.jsx(a.Content,{children:"Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept."})]})]}),children:"Byron Schweppes-Hansen"}),e.jsxs(t.Element,{term:"Kommune",children:[e.jsx(K,{svgPath:P,color:"burgundy",size:"small",children:"Skjult"}),e.jsx(S,{svgPath:F,children:"vis informasjon"})]}),e.jsxs(t.Element,{term:"Adresse",children:["Adresseveien 1 ",e.jsx(x,{size:"extraSmall",title:"kopier",svgPath:V,onClick:()=>{navigator.clipboard.writeText(`Adresseveien 1
1410 Kolbotn`)}}),e.jsx("br",{}),"1410 Kolbotn"]}),e.jsx(t.Element,{term:"Boligtype",children:e.jsx(T,{showError:!0,children:"Kunne ikke hente inn info"})})]})]})};r.parameters=E;const i={render:D=>e.jsx("div",{children:e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",className:"descriptionListTwoColumns",hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]})})};i.parameters=E;var o,l,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <div>
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
      </div>;
  }
} satisfies Story`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  /*
  Innhold i className
   .descriptionListTwoColumns {
    --description-list-columns: 2;
  }
   */
  render: (_args): JSX.Element => {
    return <div>
        <DescriptionList variant={'horizontal'} descriptionDirection={'vertical'} className={'descriptionListTwoColumns'} hasSpacing>
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
      </div>;
  }
} satisfies Story`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const C=["Preview","Examples","ExampleWithFixedColumns"],N=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithFixedColumns:i,Examples:r,Preview:s,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{N as D,r as E,i as a};
//# sourceMappingURL=DescriptionList.stories-MqKi9ZVK.js.map
