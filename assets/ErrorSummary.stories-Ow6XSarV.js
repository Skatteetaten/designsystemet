import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as E}from"./index-BwDkhjyp.js";import{B as S}from"./index-CKHxS2Ra.js";import"./index-C498nvnC.js";import{E as e,b as y}from"./index-Be268C4q.js";import{c as t}from"./helpers-Dccz2jQ-.js";import{e as f}from"./stories.utils-Ys3NG0dr.js";import{h as k}from"./base-props.types-sXyoNogd.js";import{T as i}from"./DatePickerCalendar-CBp1RHw1.js";const h={component:e,title:"Komponenter/ErrorSummary/ErrorSummary",argTypes:{children:{table:{category:t.props}},content:{control:"text",table:{category:t.props}},shadowRootNode:{control:!1,table:{control:!1,category:t.props}},showErrorSummary:{table:{category:t.props}},title:{table:{category:t.props}},titleAs:{options:[...k],control:"inline-radio",table:{category:t.props,defaultValue:{summary:y()}}}},args:{showErrorSummary:!0,content:"Her kan du legge inn vilkårlig innhold.",children:[r.jsx(e.Error,{referenceId:"id1",children:"Husk å fylle ut type varer"},"error1"),r.jsx(e.Error,{referenceId:"id2",children:"Selger du varer og tjenester for egen regning?"},"error2")]}},a={},o={render:v=>{const[n,g]=E.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(i,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",required:!0}),r.jsx(i,{id:"input_epost",label:"E-post",value:"Ola.Normann.no",errorMessage:n.hasError?"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no":void 0,required:!0}),r.jsx(i,{className:"bottomSpacingXL",id:"input_dager",label:"Antall dager i Norge i perioden/inntekståret",errorMessage:n.hasError?"Antall dager må fylles ut.":void 0,required:!0}),r.jsxs(e,{id:"errorSummary1",showErrorSummary:n.hasError,children:[r.jsx(e.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"}),r.jsx(e.Error,{referenceId:"input_epost",children:"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"}),r.jsx(e.Error,{referenceId:"input_dager",children:"Antall dager må fylles ut."})]}),r.jsx(S,{className:"topSpacingXL",onClick:()=>{g({hasError:!n.hasError}),setTimeout(()=>{const s=document.getElementById("errorSummary1");s==null||s.focus()},0)},children:"Send"})]})}};o.parameters=f;var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{} satisfies Story",...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        setTimeout((): void => {
          const el = document.getElementById('errorSummary1');
          el?.focus();
        }, 0);
      }}>
          {'Send'}
        </Button>
      </>;
  }
} satisfies Story`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const x=["Preview","Examples"],q=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{q as E,o as a};
//# sourceMappingURL=ErrorSummary.stories-Ow6XSarV.js.map
