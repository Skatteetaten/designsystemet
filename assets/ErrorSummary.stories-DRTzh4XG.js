import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-D_ouKaeX.js";import{B as E}from"./index-eDVrZHQi.js";import"./index-ChzTQA-a.js";import{b as S,E as e}from"./index-DzkGBFys.js";import{c as t}from"./helpers-B7KPg_So.js";import{e as y}from"./stories.utils-Ys3NG0dr.js";import{h as f}from"./base-props.types-DUvlOF9f.js";import{T as s}from"./DatePickerCalendar-j9g8dyRt.js";const k={component:e,title:"Komponenter/ErrorSummary",argTypes:{children:{control:!1,table:{category:t.props}},content:{control:"text",table:{category:t.props}},shadowRootNode:{control:!1,table:{control:!1,category:t.props}},showErrorSummary:{table:{category:t.props}},title:{table:{category:t.props}},titleAs:{options:[...f],control:"inline-radio",table:{category:t.props,defaultValue:{summary:S()}}}},args:{showErrorSummary:!0,content:"Her kan du legge inn vilkårlig innhold.",children:[r.jsx(e.Error,{referenceId:"id1",children:"Husk å fylle ut type varer"},"error1"),r.jsx(e.Error,{referenceId:"id2",children:"Selger du varer og tjenester for egen regning?"},"error2")]}},a={},o={render:x=>{const[n,c]=g.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(s,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",required:!0}),r.jsx(s,{id:"input_epost",label:"E-post",value:"Ola.Normann.no",errorMessage:n.hasError?"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no":void 0,required:!0}),r.jsx(s,{className:"bottomSpacingXL",id:"input_dager",label:"Antall dager i Norge i perioden/inntekståret",errorMessage:n.hasError?"Antall dager må fylles ut.":void 0,required:!0}),r.jsxs(e,{id:"errorSummary1",showErrorSummary:n.hasError,children:[r.jsx(e.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"}),r.jsx(e.Error,{referenceId:"input_epost",children:"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"}),r.jsx(e.Error,{referenceId:"input_dager",children:"Antall dager må fylles ut."})]}),r.jsx(E,{className:"topSpacingXL",onClick:()=>{c({hasError:!n.hasError})},children:"Send"})]})}};o.parameters=y;var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [state, setState] = useState({
      hasError: false
    });
    return <>
        <TextField id={'input_aar'} label={'År'} value={1009} errorMessage={'Inntekståret må være etter 2008'} required />
        <TextField id={'input_epost'} label={'E-post'} value={'Ola.Normann.no'} errorMessage={state.hasError ? 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no' : undefined} required />
        <TextField className={'bottomSpacingXL'} id={'input_dager'} label={'Antall dager i Norge i perioden/inntekståret'} errorMessage={state.hasError ? 'Antall dager må fylles ut.' : undefined} required />
        <ErrorSummary id={'errorSummary1'} showErrorSummary={state.hasError}>
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
        <Button className={'topSpacingXL'} onClick={(): void => {
        setState({
          hasError: !state.hasError
        });
      }}>
          {'Send'}
        </Button>
      </>;
  }
} satisfies Story`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const h=["Preview","Examples"],M=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:a,__namedExportsOrder:h,default:k},Symbol.toStringTag,{value:"Module"}));export{M as E,o as a};
//# sourceMappingURL=ErrorSummary.stories-DRTzh4XG.js.map
