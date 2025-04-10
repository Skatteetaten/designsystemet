import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-7h80QhK_.js";import{B as g}from"./index-B77p9Xne.js";import"./index-Byc3xEr-.js";import{c as a}from"./helpers-BRYKCfPN.js";import{e as E}from"./stories.utils-Ys3NG0dr.js";import{E as c,T as u}from"./DatePickerCalendar-DfBQ8U9V.js";const S={component:c,title:"Komponenter/ErrorMessage",argTypes:{children:{table:{category:a.props}},showError:{table:{category:a.props}}},args:{children:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",showError:!0}},s={},e={render:x=>{const[t,p]=f.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(u,{className:"bottomSpacingXL",label:"Fødselsdato",value:"17.5.19",errorMessage:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ"}),r.jsx(g,{variant:"secondary",onClick:()=>p({hasError:!t.hasError}),children:"Neste"}),r.jsx(c,{showError:t.hasError,children:"Skjemaet inneholder tre feil som må rettes før du kan gå videre."})]})}};e.parameters=E;var o,n,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,d,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
} satisfies Story`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const h=["Preview","Examples"],w=Object.freeze(Object.defineProperty({__proto__:null,Examples:e,Preview:s,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{w as E,e as a};
//# sourceMappingURL=ErrorMessage.stories-CnGpdoxF.js.map
