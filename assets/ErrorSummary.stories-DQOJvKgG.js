import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-D_ouKaeX.js";import{B as E}from"./index-Du3yX_TW.js";import{c as S,E as t}from"./index-BuHbB7kV.js";import{c as e}from"./helpers-B90wjoUE.js";import{e as y}from"./stories.utils-Ys3NG0dr.js";import{T as s}from"./DatePickerCalendar-wzrlqniL.js";const h={component:t,title:"Komponenter/ErrorSummary",argTypes:{children:{control:!1,table:{category:e.props}},content:{control:"text",table:{category:e.props}},hasSpacing:{table:{category:e.props}},shadowRootNode:{control:!1,table:{control:!1,category:e.props}},showErrorSummary:{table:{category:e.props}},title:{table:{category:e.props}},titleAs:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:S()}}}},args:{showErrorSummary:!0,content:"Her kan du legge inn vilkårlig innhold.",children:[r.jsx(t.Error,{referenceId:"id1",children:"Husk å fylle ut type varer"},"error1"),r.jsx(t.Error,{referenceId:"id2",children:"Selger du varer og tjenester for egen regning?"},"error2")]}},o={},a={render:k=>{const[n,c]=g.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(s,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),r.jsx(s,{id:"input_epost",label:"E-post",value:"Ola.Normann.no",errorMessage:n.hasError?"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no":void 0,hasSpacing:!0,required:!0}),r.jsx(s,{className:"bottomSpacingXL",id:"input_dager",label:"Antall dager i Norge i perioden/inntekståret",errorMessage:n.hasError?"Antall dager må fylles ut.":void 0,hasSpacing:!0,required:!0}),r.jsxs(t,{id:"errorSummary1",showErrorSummary:n.hasError,hasSpacing:!0,children:[r.jsx(t.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"}),r.jsx(t.Error,{referenceId:"input_epost",children:"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"}),r.jsx(t.Error,{referenceId:"input_dager",children:"Antall dager må fylles ut."})]}),r.jsx(E,{onClick:()=>{c({hasError:!n.hasError})},children:"Send"})]})}};a.parameters=y;var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [state, setState] = useState({
      hasError: false
    });
    return <>
        <TextField id={'input_aar'} label={'År'} value={1009} errorMessage={'Inntekståret må være etter 2008'} hasSpacing required />
        <TextField id={'input_epost'} label={'E-post'} value={'Ola.Normann.no'} errorMessage={state.hasError ? 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no' : undefined} hasSpacing required />
        <TextField className={'bottomSpacingXL'} id={'input_dager'} label={'Antall dager i Norge i perioden/inntekståret'} errorMessage={state.hasError ? 'Antall dager må fylles ut.' : undefined} hasSpacing required />
        <ErrorSummary id={'errorSummary1'} showErrorSummary={state.hasError} hasSpacing>
          <ErrorSummary.Error referenceId={'input_aar'}>
            {'Inntekståret må være etter 2008'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'input_epost'}>
            {'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'input_dager'}>
            {'Antall dager må fylles ut.'}
          </ErrorSummary.Error>
        </ErrorSummary>
        <Button onClick={(): void => {
        setState({
          hasError: !state.hasError
        });
      }}>
          {'Send'}
        </Button>
      </>;
  }
} satisfies Story`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Preview","Examples"],T=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{T as E,a};
//# sourceMappingURL=ErrorSummary.stories-DQOJvKgG.js.map
