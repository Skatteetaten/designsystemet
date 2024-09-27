import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as E}from"./index-BwDkhjyp.js";import{B as f}from"./index-DMYlLpXe.js";import"./index-FK3RsA-s.js";import{c as a}from"./helpers-CDRJ97Ot.js";import{e as g}from"./stories.utils-DTsHYhvm.js";import{E as c,T as x}from"./DatePickerCalendar-CuGySpz0.js";const u={component:c,title:"Komponenter/ErrorMessage",argTypes:{children:{table:{category:a.props}},showError:{table:{category:a.props}}},args:{children:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",showError:!0}},s={},e={render:h=>{const[t,p]=E.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(x,{className:"bottomSpacingXL",label:"Fødselsdato",value:"17.5.19",errorMessage:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ"}),r.jsx(f,{variant:"secondary",onClick:()=>p({hasError:!t.hasError}),children:"Neste"}),r.jsx(c,{showError:t.hasError,children:"Skjemaet inneholder tre feil som må rettes før du kan gå videre."})]})}};e.parameters=g;var o,n,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,d,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [state, setState] = useState({
      hasError: false
    });
    return <>
        <TextField className={'bottomSpacingXL'} label={'Fødselsdato'} value={'17.5.19'} errorMessage={'Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ'} />
        <Button variant={'secondary'} onClick={(): void => setState({
        hasError: !state.hasError
      })}>
          {'Neste'}
        </Button>
        <ErrorMessage showError={state.hasError}>
          {'Skjemaet inneholder tre feil som må rettes før du kan gå videre.'}
        </ErrorMessage>
      </>;
  }
} satisfies Story`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const S=["Preview","Examples"],_=Object.freeze(Object.defineProperty({__proto__:null,Examples:e,Preview:s,__namedExportsOrder:S,default:u},Symbol.toStringTag,{value:"Module"}));export{_ as E,e as a};
//# sourceMappingURL=ErrorMessage.stories-CfDWWKXf.js.map
