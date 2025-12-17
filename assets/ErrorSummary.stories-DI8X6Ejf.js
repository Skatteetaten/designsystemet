import{j as r,e,r as l}from"./iframe-VHQh6taY.js";import{B as m}from"./index-C8wxqHpZ.js";import{i as u,E as t}from"./index-lB78RBB2.js";import{e as d}from"./stories.utils-BTGWRhRm.js";import{T as s}from"./DatePickerCalendar-fvOeZNLZ.js";const p={component:t,title:"Komponenter/ErrorSummary",argTypes:{children:{control:!1,table:{category:e.props}},content:{control:"text",table:{category:e.props}},hasSpacing:{table:{category:e.props}},shadowRootNode:{control:!1,table:{control:!1,category:e.props}},showErrorSummary:{table:{category:e.props}},title:{table:{category:e.props}},titleAs:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:u()}}}},args:{showErrorSummary:!0,content:"Her kan du legge inn vilkårlig innhold.",children:[r.jsx(t.Error,{referenceId:"id1",children:"Husk å fylle ut type varer"},"error1"),r.jsx(t.Error,{referenceId:"id2",children:"Selger du varer og tjenester for egen regning?"},"error2")]}},o={},a={render:g=>{const[n,i]=l.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(s,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),r.jsx(s,{id:"input_epost",label:"E-post",value:"Ola.Normann.no",errorMessage:n.hasError?"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no":void 0,hasSpacing:!0,required:!0}),r.jsx(s,{className:"bottomSpacingXL",id:"input_dager",label:"Antall dager i Norge i perioden/inntekståret",errorMessage:n.hasError?"Antall dager må fylles ut.":void 0,hasSpacing:!0,required:!0}),r.jsxs(t,{id:"errorSummary1",showErrorSummary:n.hasError,hasSpacing:!0,children:[r.jsx(t.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"}),r.jsx(t.Error,{referenceId:"input_epost",children:"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"}),r.jsx(t.Error,{referenceId:"input_dager",children:"Antall dager må fylles ut."})]}),r.jsx(m,{onClick:()=>{i({hasError:!n.hasError})},children:"Send"})]})}};a.parameters=d;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{} satisfies Story",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}};const c=["Preview","Examples"],k=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{k as E,a};
//# sourceMappingURL=ErrorSummary.stories-DI8X6Ejf.js.map
