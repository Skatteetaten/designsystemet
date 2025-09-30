import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-D_ouKaeX.js";import{B as f}from"./index-DfnG5Ebn.js";import"./index-DqufxDJQ.js";import{c as a}from"./helpers-B90wjoUE.js";import{e as E}from"./stories.utils-Ys3NG0dr.js";import{E as c,T as u}from"./DatePickerCalendar-PuG5IodJ.js";const h={component:c,title:"Komponenter/ErrorMessage",argTypes:{children:{table:{category:a.props}},hasSpacing:{table:{category:a.props}},showError:{table:{category:a.props}}},args:{children:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",showError:!0}},s={},e={render:x=>{const[t,p]=g.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(u,{label:"Fødselsdato",value:"17.5.19",errorMessage:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",hasSpacing:!0}),r.jsx(f,{variant:"secondary",onClick:()=>p({hasError:!t.hasError}),children:"Neste"}),r.jsx(c,{showError:t.hasError,children:"Skjemaet inneholder tre feil som må rettes før du kan gå videre."})]})}};e.parameters=E;var o,n,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [state, setState] = useState({
      hasError: false
    });
    return <>
        <TextField label={'Fødselsdato'} value={'17.5.19'} errorMessage={'Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ'} hasSpacing />
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
} satisfies Story`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const S=["Preview","Examples"],w=Object.freeze(Object.defineProperty({__proto__:null,Examples:e,Preview:s,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{w as E,e as a};
//# sourceMappingURL=ErrorMessage.stories-B62zQ3bG.js.map
