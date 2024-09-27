import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{B as n,b as R}from"./index-yuNN44a_.js";import{R as c}from"./index-iIx-nC6Z.js";import{j as f}from"./index-DcL_RvKM.js";import{M as l,g as S,a as b,b as C,c as E}from"./index-B8sdZvb9.js";import{P as p}from"./index-Cj6RUT7V.js";import{c as a}from"./helpers-CDRJ97Ot.js";import{f as V,w as j}from"./wait-alert-illustration-BZ1f2OL4.js";import{l as B}from"./storybook.testing.utils-CMs160i9.js";import{e as I}from"./stories.utils-DTsHYhvm.js";const N={component:l,title:"Komponenter/Modal",argTypes:{children:{control:{disable:!0},table:{category:a.props}},classNames:{control:{disable:!0},table:{category:a.props}},dismissOnEsc:{table:{category:a.props,defaultValue:{summary:S().toString()}}},dismissOnOutsideClick:{table:{category:a.props,defaultValue:{summary:b().toString()}}},hideCloseButton:{table:{category:a.props}},hideTitle:{table:{category:a.props}},imageSource:{table:{category:a.props},control:"select",options:["",V,j]},imageSourceAltText:{table:{category:a.props}},padding:{table:{category:a.props,defaultValue:{summary:C()}}},shadowRootNode:{control:!1,table:{control:!1,category:a.props}},title:{table:{category:a.props}},variant:{table:{category:a.props,defaultValue:{summary:E()}}},onClose:{control:{disable:!0},table:{category:a.event}}},args:{children:e.jsx(p,{children:B}),title:"Modal title"}},d={render:u=>{const t=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>{var o;return(o=t.current)==null?void 0:o.showModal()},children:"Åpne modal"}),e.jsx(l,{...u,ref:t,children:u.children})]})}},s={render:u=>{const t=i.useRef(null),o=i.useRef(null),m=i.useRef(null),g=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"exampleSpacing",onClick:()=>{var r;return(r=t.current)==null?void 0:r.showModal()},children:"Nye opplysninger"}),e.jsxs(l,{ref:t,title:"Vil du erstatte nye opplysninger fra fil?",children:[e.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),e.jsxs("div",{className:"flex",children:[e.jsx(n,{className:"marginRightM",children:"Erstatt opplysninger"}),e.jsx(n,{variant:"tertiary",onClick:()=>{var r;return(r=t.current)==null?void 0:r.close()},children:"Avbryt"})]})]}),e.jsx(n,{className:"exampleSpacing",onClick:()=>{var r;return(r=o.current)==null?void 0:r.showModal()},children:"Velg rolle"}),e.jsxs(l,{ref:o,title:"Dette er dine roller",onClose:()=>{console.log("lukker mod2")},children:[e.jsxs(c,{legend:"Velge en rolle",children:[e.jsx(c.Radio,{value:"meg",children:"Innlogget som meg selv"}),e.jsx(c.Radio,{value:"andre",children:"Innlogget som annen person"}),e.jsx(c.Radio,{value:"virksomhet",children:"Innlogget som virksomhet"})]}),e.jsx(n,{onClick:()=>{var r;return(r=o.current)==null?void 0:r.close()},children:"Ok"})]}),e.jsx(n,{className:"exampleSpacing",variant:"tertiary",svgPath:f,onClick:()=>{var r;return(r=m.current)==null?void 0:r.showModal()},children:"Viktig driftsmelding"}),e.jsxs(l,{ref:m,variant:"important",title:"Viktig melding!",children:[e.jsx(p,{hasSpacing:!0,children:"Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold."}),e.jsx("div",{className:"modalLink",children:e.jsx(R,{href:"#",onClick:()=>{var r;return(r=m.current)==null?void 0:r.close()},children:"Les mer på skatteetaten.no"})})]}),e.jsx(n,{className:"exampleSpacing",variant:"tertiary",svgPath:f,onClick:()=>{var r;return(r=g.current)==null?void 0:r.showModal()},children:"Vis ventevarsel"}),e.jsxs(l,{ref:g,title:"Hei, er du fortsatt her?",imageSource:j,imageSourceAltText:"Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.",children:[e.jsx(p,{hasSpacing:!0,children:"Vi ser at du ikke har gjort noe på nettsiden på ei stund. Er du fortsatt her?"}),e.jsx(n,{className:"width100",onClick:()=>{var r;return(r=g.current)==null?void 0:r.close()},children:"Ja"})]})]})}};s.parameters=I;var h,v,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <Button onClick={(): void => ref.current?.showModal()}>
          {'Åpne modal'}
        </Button>
        <Modal {...args} ref={ref}>
          {args.children}
        </Modal>
      </>;
  }
} satisfies Story`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var M,x,y;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const refModal = useRef<HTMLDialogElement>(null);
    const refModalRadioGroup = useRef<HTMLDialogElement>(null);
    const refModalImportant = useRef<HTMLDialogElement>(null);
    const refModalWait = useRef<HTMLDialogElement>(null);
    return <>
        <Button className={'exampleSpacing'} onClick={(): void => refModal.current?.showModal()}>
          {'Nye opplysninger'}
        </Button>
        <Modal ref={refModal} title={'Vil du erstatte nye opplysninger fra fil?'}>
          <Paragraph hasSpacing>
            {'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'}
          </Paragraph>
          <div className={'flex'}>
            <Button className={'marginRightM'}>{'Erstatt opplysninger'}</Button>
            <Button variant={'tertiary'} onClick={(): void => refModal.current?.close()}>
              {'Avbryt'}
            </Button>
          </div>
        </Modal>

        <Button className={'exampleSpacing'} onClick={(): void => refModalRadioGroup.current?.showModal()}>
          {'Velg rolle'}
        </Button>
        <Modal ref={refModalRadioGroup} title={'Dette er dine roller'} onClose={() => {
        console.log('lukker mod2');
      }}>
          <RadioGroup legend={'Velge en rolle'}>
            <RadioGroup.Radio value={'meg'}>
              {'Innlogget som meg selv'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'andre'}>
              {'Innlogget som annen person'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'virksomhet'}>
              {'Innlogget som virksomhet'}
            </RadioGroup.Radio>
          </RadioGroup>
          <Button onClick={(): void => refModalRadioGroup.current?.close()}>
            {'Ok'}
          </Button>
        </Modal>

        <Button className={'exampleSpacing'} variant={'tertiary'} svgPath={InfoOutlineSVGpath} onClick={(): void => refModalImportant.current?.showModal()}>
          {'Viktig driftsmelding'}
        </Button>
        <Modal ref={refModalImportant} variant={'important'} title={'Viktig melding!'}>
          <Paragraph hasSpacing>
            {'Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold.'}
          </Paragraph>
          <div className={'modalLink'}>
            <Link href={'#'} onClick={(): void => refModalImportant.current?.close()}>
              {'Les mer på skatteetaten.no'}
            </Link>
          </div>
        </Modal>

        <Button className={'exampleSpacing'} variant={'tertiary'} svgPath={InfoOutlineSVGpath} onClick={(): void => refModalWait.current?.showModal()}>
          {'Vis ventevarsel'}
        </Button>
        <Modal ref={refModalWait} title={'Hei, er du fortsatt her?'} imageSource={waitIllustration} imageSourceAltText={'Illustrasjon av travel person med seks armer, opptatt med kontorarbeid.'}>
          <Paragraph hasSpacing>
            {'Vi ser at du ikke har gjort noe på nettsiden på ei stund. Er du fortsatt her?'}
          </Paragraph>
          <Button className={'width100'} onClick={(): void => refModalWait.current?.close()}>
            {'Ja'}
          </Button>
        </Modal>
      </>;
  }
} satisfies Story`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const w=["Preview","Examples"],F=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:d,__namedExportsOrder:w,default:N},Symbol.toStringTag,{value:"Module"}));export{s as E,F as M};
//# sourceMappingURL=Modal.stories-BTCaSpLf.js.map
