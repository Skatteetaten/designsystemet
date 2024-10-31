import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as d,I as g}from"./index-PT2LozU0.js";import{D as t,g as h,a as E,b as u}from"./index-Cons3ews.js";import"./index-CPXmgfFQ.js";import{E as x,f as D,g as S}from"./index-BU2UjPj9.js";import{P as i}from"./index-Drqvk58T.js";import{T as v}from"./index-i_3--Rbb.js";import{c as n}from"./helpers-Dccz2jQ-.js";import{e as f}from"./stories.utils-Ys3NG0dr.js";import{E as j}from"./DatePickerCalendar-C0jMV8LR.js";const b={component:t,title:"Komponenter/DescriptionList/DescriptionList",argTypes:{children:{control:{disable:!0},table:{category:n.props}},size:{table:{category:n.props},defaultValue:{summary:h()}},variant:{table:{category:n.props}},hasSpacing:{table:{category:n.props}},isVerticalOnMobile:{table:{category:n.props,defaultValue:{summary:E().toString()}}},descriptionDirection:{table:{category:n.props,defaultValue:{summary:u()}}},termWeight:{table:{category:n.props}},descriptionWeight:{table:{category:n.props}}},args:{children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),e.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]}},s={},r={render:y=>e.jsxs("div",{children:[e.jsxs(t,{variant:"horizontal",descriptionDirection:"vertical",hasSpacing:!0,children:[e.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(t.Element,{term:"Status",children:"Under behandling"}),e.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"}),e.jsx(t.Element,{term:"Frist",children:"30.12.2013"}),e.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"}),e.jsx(t.Element,{term:"Først endret",children:"30.12.2010"})]}),e.jsxs(t,{variant:"vertical",children:[e.jsx(t.Element,{term:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"navn"}),e.jsxs(i,{children:[e.jsx(i.Trigger,{className:"dummySpacingLeft",size:"extraSmall"}),e.jsx(i.Content,{children:"Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept."})]})]}),children:"Byron Schweppes-Hansen"}),e.jsxs(t.Element,{term:"Kommune",children:[e.jsx(v,{svgPath:x,color:"burgundy",size:"small",children:"Skjult"}),e.jsx(d,{svgPath:D,children:"vis informasjon"})]}),e.jsxs(t.Element,{term:"Adresse",children:["Adresseveien 1 ",e.jsx(g,{size:"extraSmall",title:"kopier",svgPath:S,onClick:()=>{navigator.clipboard.writeText(`Adresseveien 1
1410 Kolbotn`)}}),e.jsx("br",{}),"1410 Kolbotn"]}),e.jsx(t.Element,{term:"Boligtype",children:e.jsx(j,{showError:!0,children:"Kunne ikke hente inn info"})})]})]})};r.parameters=f;var o,a,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const L=["Preview","Examples"],_=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:s,__namedExportsOrder:L,default:b},Symbol.toStringTag,{value:"Module"}));export{_ as D,r as E};
//# sourceMappingURL=DescriptionList.stories-MVg5UPqo.js.map
