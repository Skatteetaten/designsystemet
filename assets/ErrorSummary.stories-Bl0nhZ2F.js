import{j as r,e as a,r as E,l}from"./iframe-CBOQuZmX.js";import{B as h}from"./index-BxmwhRWV.js";import{i as f,E as e}from"./index-D76sDZza.js";import{H as p,P as m,L as d}from"./index-B4-BoLKC.js";import{e as g}from"./stories.utils-CZ5hej_8.js";import{T as c}from"./DatePickerCalendar-DF1H3gtV.js";const k={component:e,title:"Komponenter/ErrorSummary",argTypes:{children:{control:!1,table:{category:a.props}},content:{control:"text",table:{category:a.props}},hasSpacing:{table:{category:a.props}},shadowRootNode:{control:!1,table:{control:!1,category:a.props}},showErrorSummary:{table:{category:a.props}},title:{table:{category:a.props}},titleAs:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:f()}}}},args:{showErrorSummary:!0,content:"Her kan du legge inn vilkårlig innhold.",children:[r.jsx(e.Error,{referenceId:"id1",children:"Husk å fylle ut type varer"},"error1"),r.jsx(e.Error,{referenceId:"id2",children:"Selger du varer og tjenester for egen regning?"},"error2")]}},i={},t={render:S=>{const[n,u]=E.useState({hasError:!1});return r.jsxs(r.Fragment,{children:[r.jsx(c,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),r.jsx(c,{id:"input_epost",label:"E-post",value:"Ola.Normann.no",errorMessage:n.hasError?"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no":void 0,hasSpacing:!0,required:!0}),r.jsx(c,{className:"bottomSpacingXL",id:"input_dager",label:"Antall dager i Norge i perioden/inntekståret",errorMessage:n.hasError?"Antall dager må fylles ut.":void 0,hasSpacing:!0,required:!0}),r.jsxs(e,{id:"errorSummary1",showErrorSummary:n.hasError,hasSpacing:!0,children:[r.jsx(e.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"}),r.jsx(e.Error,{referenceId:"input_epost",children:"E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no"}),r.jsx(e.Error,{referenceId:"input_dager",children:"Antall dager må fylles ut."})]}),r.jsx(h,{onClick:()=>{u({hasError:!n.hasError})},children:"Send"})]})}};t.parameters=g;const o={render:S=>{const[n,u]=E.useState(300);return r.jsxs(r.Fragment,{children:[r.jsx(p,{level:3,as:"h1",hasSpacing:!0,children:"Container Queries i ErrorSummary"}),r.jsx(m,{hasSpacing:!0,children:"ErrorSummary støtter container queries, som gjør at komponenten tilpasser seg bredden på sin parent-container i stedet for hele viewporten. Dette er nyttig når komponenten brukes i stegliste, modaler eller andre områder med begrenset bredde."}),r.jsx(p,{level:4,as:"h2",hasSpacing:!0,children:"Slik aktiverer du container queries"}),r.jsx(m,{className:"bottomSpacingS",children:"Sett CSS-egenskapen container-type: inline-size på et parent-element:"}),r.jsx("pre",{className:"bottomSpacingS",children:`.error-summary-wrapper {
  container-type: inline-size;
}`}),r.jsx(m,{className:"bottomSpacingS",children:"Komponenten responderer på følgende breakpoints og tilpasser padding, ikon-størrelse og layout:"}),r.jsxs(d,{hasSpacing:!0,children:[r.jsx(d.Element,{children:`${l["--breakpoint-s"]} og over: Full layout med horisontal visning`}),r.jsx(d.Element,{children:`Mellom ${l["--breakpoint-s"]} og ${l["--breakpoint-xs"]}: Vertikal visning`}),r.jsx(d.Element,{children:`Under ${l["--breakpoint-xs"]}: Vertikal visning med mindre padding`})]}),r.jsx(p,{level:4,as:"h2",hasSpacing:!0,children:"Interaktiv demo"}),r.jsx(m,{className:"bottomSpacingS",children:"Juster bredden for å se hvordan layouten endrer seg:"}),r.jsx("pre",{children:`Bredde på container: ${n}px`}),r.jsx("input",{className:"bottomSpacingS containerQuerySlider",max:800,min:200,type:"range",value:n,onChange:y=>u(Number(y.target.value))}),r.jsx("div",{className:"containerQueryWrapper",style:{"--container-query-width":`${n}px`},children:r.jsxs(e,{showErrorSummary:!0,children:[r.jsx(e.Error,{referenceId:"field1",children:"Feltet må fylles ut"}),r.jsx(e.Error,{referenceId:"field2",children:"Ugyldig verdi"})]})})]})}};o.parameters=g;const s={render:S=>r.jsxs(e,{id:"errorSummaryWithGroups",title:"For å gå videre må du rette opp i følgende",hasSpacing:!0,showErrorSummary:!0,children:[r.jsx(e.Error,{referenceId:"inntekstaaret",children:"Inntekstsåret må være etter 2008"}),r.jsx(e.Error,{referenceId:"epost",children:"E-posten ser ikke riktig ut. Skriv slik: olaug.nordmann@norge.no"}),r.jsx(e.Error,{referenceId:"antallDager",children:"Antall dager må fylles ut."}),r.jsxs(e.Group,{title:"Mottaker 1 av fullmakt",children:[r.jsx(e.Error,{referenceId:"navn1",children:"Navn på person må fylles ut"}),r.jsx(e.Error,{referenceId:"fnummer1",children:"Fødselsnummer eller D-nummer må fylles ut"}),r.jsx(e.Error,{referenceId:"telefon1",children:"Telefonnummer må fylles ut"})]}),r.jsxs(e.Group,{title:"Mottaker 2 av fullmakt",children:[r.jsx(e.Error,{referenceId:"navn2",children:"Navn på person må fylles ut"}),r.jsx(e.Error,{referenceId:"fnummer2",children:"Fødselsnummer eller D-nummer må fylles ut"}),r.jsx(e.Error,{referenceId:"telefon2",children:"Telefonnummer må fylles ut"})]})]})};s.parameters=g;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{} satisfies Story",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [width, setWidth] = useState(300);
    return <>
        <Heading level={3} as={'h1'} hasSpacing>
          {'Container Queries i ErrorSummary'}
        </Heading>

        <Paragraph hasSpacing>
          {'ErrorSummary støtter container queries, som gjør at komponenten tilpasser seg bredden på sin parent-container i stedet for hele viewporten. Dette er nyttig når komponenten brukes i stegliste, modaler eller andre områder med begrenset bredde.'}
        </Paragraph>

        <Heading level={4} as={'h2'} hasSpacing>
          {'Slik aktiverer du container queries'}
        </Heading>

        <Paragraph className={'bottomSpacingS'}>
          {'Sett CSS-egenskapen container-type: inline-size på et parent-element:'}
        </Paragraph>

        <pre className={'bottomSpacingS'}>
          {\`.error-summary-wrapper {
  container-type: inline-size;
}\`}
        </pre>

        <Paragraph className={'bottomSpacingS'}>
          {'Komponenten responderer på følgende breakpoints og tilpasser padding, ikon-størrelse og layout:'}
        </Paragraph>

        <List hasSpacing>
          <List.Element>{\`\${breakpointsJson['--breakpoint-s']} og over: Full layout med horisontal visning\`}</List.Element>
          <List.Element>{\`Mellom \${breakpointsJson['--breakpoint-s']} og \${breakpointsJson['--breakpoint-xs']}: Vertikal visning\`}</List.Element>
          <List.Element>{\`Under \${breakpointsJson['--breakpoint-xs']}: Vertikal visning med mindre padding\`}</List.Element>
        </List>

        <Heading level={4} as={'h2'} hasSpacing>
          {'Interaktiv demo'}
        </Heading>

        <Paragraph className={'bottomSpacingS'}>
          {'Juster bredden for å se hvordan layouten endrer seg:'}
        </Paragraph>

        <pre>{\`Bredde på container: \${width}px\`}</pre>

        <input className={'bottomSpacingS containerQuerySlider'} max={800} min={200} type={'range'} value={width} onChange={(e): void => setWidth(Number(e.target.value))} />

        <div className={'containerQueryWrapper'}
      // eslint-disable-next-line react/forbid-dom-props -- dynamisk bredde krever inline style
      style={{
        '--container-query-width': \`\${width}px\`
      } as React.CSSProperties}>
          <ErrorSummary showErrorSummary>
            <ErrorSummary.Error referenceId={'field1'}>
              {'Feltet må fylles ut'}
            </ErrorSummary.Error>
            <ErrorSummary.Error referenceId={'field2'}>
              {'Ugyldig verdi'}
            </ErrorSummary.Error>
          </ErrorSummary>
        </div>
      </>;
  }
} satisfies Story`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <ErrorSummary id={'errorSummaryWithGroups'} title={'For å gå videre må du rette opp i følgende'} hasSpacing showErrorSummary>
        <ErrorSummary.Error referenceId={'inntekstaaret'}>
          {'Inntekstsåret må være etter 2008'}
        </ErrorSummary.Error>
        <ErrorSummary.Error referenceId={'epost'}>
          {'E-posten ser ikke riktig ut. Skriv slik: olaug.nordmann@norge.no'}
        </ErrorSummary.Error>

        <ErrorSummary.Error referenceId={'antallDager'}>
          {'Antall dager må fylles ut.'}
        </ErrorSummary.Error>

        <ErrorSummary.Group title={'Mottaker 1 av fullmakt'}>
          <ErrorSummary.Error referenceId={'navn1'}>
            {'Navn på person må fylles ut'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'fnummer1'}>
            {'Fødselsnummer eller D-nummer må fylles ut'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'telefon1'}>
            {'Telefonnummer må fylles ut'}
          </ErrorSummary.Error>
        </ErrorSummary.Group>

        <ErrorSummary.Group title={'Mottaker 2 av fullmakt'}>
          <ErrorSummary.Error referenceId={'navn2'}>
            {'Navn på person må fylles ut'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'fnummer2'}>
            {'Fødselsnummer eller D-nummer må fylles ut'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'telefon2'}>
            {'Telefonnummer må fylles ut'}
          </ErrorSummary.Error>
        </ErrorSummary.Group>
      </ErrorSummary>;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const v=["Preview","Examples","WithContainerQuery","WithErrorGroups"],w=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:i,WithContainerQuery:o,WithErrorGroups:s,__namedExportsOrder:v,default:k},Symbol.toStringTag,{value:"Module"}));export{w as E,s as W,t as a};
//# sourceMappingURL=ErrorSummary.stories-Bl0nhZ2F.js.map
