import{e as a,r as g,j as r}from"./iframe-C2uFIQ6s.js";import{B as E}from"./index-C2_9aJjw.js";import"./index-k3V7IYJD.js";import{e as f}from"./stories.utils-CZ5hej_8.js";import{E as c,T as u}from"./DatePickerCalendar-8_aO5TLp.js";const h={component:c,title:"Komponenter/ErrorMessage",argTypes:{children:{table:{category:a.props}},hasSpacing:{table:{category:a.props}},showError:{table:{category:a.props}}},args:{children:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",showError:!0}},s={},e={render:x=>{const[t,p]=g.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(u,{label:"Fødselsdato",value:"17.5.19",errorMessage:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",hasSpacing:!0}),r.jsx(E,{variant:"secondary",onClick:()=>p({hasError:!t.hasError}),children:"Neste"}),r.jsx(c,{showError:t.hasError,children:"Skjemaet inneholder tre feil som må rettes før du kan gå videre."})]})}};e.parameters=f;var o,n,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
} satisfies Story`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const S=["Preview","Examples"],b=Object.freeze(Object.defineProperty({__proto__:null,Examples:e,Preview:s,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{b as E,e as a};
//# sourceMappingURL=ErrorMessage.stories-DOgZRnl7.js.map
