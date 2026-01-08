import{j as e,e as n}from"./iframe-s2_bNgHU.js";import{I as m,a as c}from"./index-Ck1G954W.js";import{f as p,h as d,i as g,j as h,k as u,l as E,m as D,D as t}from"./index-jj9Gfu02.js";import"./index-D9_nlc1h.js";import{R as S,o as x,s as L}from"./index-CUsfAC9p.js";import{P as a}from"./index-C_DRppF7.js";import{T as f}from"./index-DdQvxWAg.js";import{e as o}from"./stories.utils-CZ5hej_8.js";import{E as j}from"./DatePickerCalendar-ePUd64Qm.js";const v={component:t,title:"Komponenter/DescriptionList",argTypes:{children:{control:{disable:!0},table:{category:n.props}},size:{table:{category:n.props,defaultValue:{summary:D()}}},variant:{table:{category:n.props,defaultValue:{summary:E()}}},hasSpacing:{table:{category:n.props}},isVerticalOnMobile:{table:{category:n.props,defaultValue:{summary:u().toString()}}},isDescriptionVerticalOnMobile:{table:{category:n.props,defaultValue:{summary:h().toString()}}},descriptionDirection:{table:{category:n.props,defaultValue:{summary:g()}}},termWeight:{table:{category:n.props,defaultValue:{summary:d()}}},descriptionWeight:{table:{category:n.props,defaultValue:{summary:p()}}}},args:{children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),e.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]}},s={},r={render:l=>e.jsxs("div",{children:[e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]}),e.jsxs(t,{variant:"vertical",children:[e.jsx(t.Element,{term:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"navn"}),e.jsxs(a,{children:[e.jsx(a.Trigger,{className:"dummySpacingLeft",size:"extraSmall"}),e.jsx(a.Content,{children:"Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept."})]})]}),children:"Byron Schweppes-Hansen"}),e.jsxs(t.Element,{term:"Kommune",children:[e.jsx(f,{svgPath:S,color:"burgundy",size:"small",children:"Skjult"}),e.jsx(m,{svgPath:x,children:"vis informasjon"})]}),e.jsxs(t.Element,{term:"Adresse",children:["Adresseveien 1 ",e.jsx(c,{size:"extraSmall",title:"kopier",svgPath:L,onClick:()=>{navigator.clipboard.writeText(`Adresseveien 1
1410 Kolbotn`)}}),e.jsx("br",{}),"1410 Kolbotn"]}),e.jsx(t.Element,{term:"Boligtype",children:e.jsx(j,{showError:!0,children:"Kunne ikke hente inn info"})})]})]})};r.parameters=o;const i={render:l=>e.jsx("div",{children:e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",className:"descriptionListTwoColumns",hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]})})};i.parameters=o;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};const b=["Preview","Examples","ExampleWithFixedColumns"],w=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithFixedColumns:i,Examples:r,Preview:s,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{w as D,r as E,i as a};
//# sourceMappingURL=DescriptionList.stories-DOmVGvvG.js.map
