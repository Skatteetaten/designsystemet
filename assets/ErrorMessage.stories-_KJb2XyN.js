import{e as a,r as d,j as r}from"./iframe-Br1Xu9zr.js";import{B as l}from"./index-Mga-TJ2K.js";import"./index-B55DkYFu.js";import{e as i}from"./stories.utils-CZ5hej_8.js";import{E as o,T as m}from"./DatePickerCalendar-DwBW5N7C.js";const c={component:o,title:"Komponenter/ErrorMessage",argTypes:{children:{table:{category:a.props}},hasSpacing:{table:{category:a.props}},showError:{table:{category:a.props}}},args:{children:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",showError:!0}},s={},e={render:g=>{const[t,n]=d.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(m,{label:"Fødselsdato",value:"17.5.19",errorMessage:"Skriv fødselsdatoen med følgende format: DD.MM.ÅÅÅÅ",hasSpacing:!0}),r.jsx(l,{variant:"secondary",onClick:()=>n({hasError:!t.hasError}),children:"Neste"}),r.jsx(o,{showError:t.hasError,children:"Skjemaet inneholder tre feil som må rettes før du kan gå videre."})]})}};e.parameters=i;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...e.parameters?.docs?.source}}};const p=["Preview","Examples"],x=Object.freeze(Object.defineProperty({__proto__:null,Examples:e,Preview:s,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{x as E,e as a};
//# sourceMappingURL=ErrorMessage.stories-_KJb2XyN.js.map
