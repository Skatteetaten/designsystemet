import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{B as b}from"./index-DMYlLpXe.js";import{C as p}from"./index-FK3RsA-s.js";import{c as e,h as f}from"./helpers-CDRJ97Ot.js";import{e as x}from"./stories.utils-DTsHYhvm.js";const y={component:p,title:"Komponenter/Checkbox",argTypes:{classNames:{table:{category:e.props}},children:{table:{category:e.props}},defaultChecked:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hideLabel:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},checked:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{table:{category:e.htmlAttribute}},ariaDescribedby:{table:{category:e.aria}},onChange:{...f}},args:{children:"Jeg har lest og forstått innholdet"}},t={},r={render:E=>{const[s,h]=n.useState(!1),[u,a]=n.useState("");return o.jsxs(o.Fragment,{children:[o.jsx(p,{className:"exampleSpacing",errorMessage:u,checked:s,required:!0,onChange:()=>{h(!s),a("")},children:"Jeg har lest og forstått innholdet"}),o.jsx(b,{onClick:()=>{s||a("Du må lese og forstå innholdet for å gå videre.")},children:"Send"})]})}};r.parameters=x;var c,l,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    return <>
        <Checkbox className={'exampleSpacing'} errorMessage={errorMessage} checked={checked} required onChange={(): void => {
        setChecked(!checked);
        setErrorMessage('');
      }}>
          {'Jeg har lest og forstått innholdet'}
        </Checkbox>
        <Button onClick={(): void => {
        if (!checked) {
          setErrorMessage('Du må lese og forstå innholdet for å gå videre.');
        }
      }}>
          {'Send'}
        </Button>
      </>;
  }
} satisfies Story`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const k=["Preview","Examples"],A=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:t,__namedExportsOrder:k,default:y},Symbol.toStringTag,{value:"Module"}));export{A as C,r as E};
//# sourceMappingURL=Checkbox.stories-B_OIiLXA.js.map
