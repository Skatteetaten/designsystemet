import{h as s,e,r as l,j as o}from"./iframe-DRo7xN6O.js";import{B as k}from"./index-C6akGUuV.js";import{C as u}from"./index-CJxdEpCy.js";import{e as y}from"./stories.utils-CZ5hej_8.js";const C={component:u,title:"Komponenter/Checkbox",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{table:{category:e.props}},defaultChecked:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},hideLabel:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},checked:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{table:{category:e.htmlAttribute}},ariaDescribedby:{table:{category:e.aria}},onBlur:{...s},onChange:{...s},onFocus:{...s}},args:{children:"Jeg har lest og forstått innholdet"}},t={},r={render:S=>{const[a,b]=l.useState(!1),[f,n]=l.useState(""),c=()=>{a||n("Du må lese og forstå innholdet for å gå videre.")};return o.jsxs(o.Fragment,{children:[o.jsx(u,{className:"exampleSpacing",errorMessage:f,checked:a,required:!0,onBlur:c,onChange:()=>{b(!a),n("")},children:"Jeg har lest og forstått innholdet"}),o.jsx(k,{onClick:c,children:"Send"})]})}};r.parameters=y;var i,g,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,h,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (): void => {
      if (!checked) {
        setErrorMessage('Du må lese og forstå innholdet for å gå videre.');
      }
    };
    return <>
        <Checkbox className={'exampleSpacing'} errorMessage={errorMessage} checked={checked} required onBlur={handleChange} onChange={(): void => {
        setChecked(!checked);
        setErrorMessage('');
      }}>
          {'Jeg har lest og forstått innholdet'}
        </Checkbox>
        <Button onClick={handleChange}>{'Send'}</Button>
      </>;
  }
} satisfies Story`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const x=["Preview","Examples"],B=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:t,__namedExportsOrder:x,default:C},Symbol.toStringTag,{value:"Module"}));export{B as C,r as E};
//# sourceMappingURL=Checkbox.stories-DDFrUB2h.js.map
