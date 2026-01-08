import{h as s,e,r as l,j as o}from"./iframe-s2_bNgHU.js";import{B as m}from"./index-Ck1G954W.js";import{C as i}from"./index-D9_nlc1h.js";import{e as h}from"./stories.utils-CZ5hej_8.js";const p={component:i,title:"Komponenter/Checkbox",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{table:{category:e.props}},defaultChecked:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},hideLabel:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},checked:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{table:{category:e.htmlAttribute}},ariaDescribedby:{table:{category:e.aria}},onBlur:{...s},onChange:{...s},onFocus:{...s}},args:{children:"Jeg har lest og forstått innholdet"}},t={},r={render:b=>{const[a,g]=l.useState(!1),[d,n]=l.useState(""),c=()=>{a||n("Du må lese og forstå innholdet for å gå videre.")};return o.jsxs(o.Fragment,{children:[o.jsx(i,{className:"exampleSpacing",errorMessage:d,checked:a,required:!0,onBlur:c,onChange:()=>{g(!a),n("")},children:"Jeg har lest og forstått innholdet"}),o.jsx(m,{onClick:c,children:"Send"})]})}};r.parameters=h;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{} satisfies Story",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};const u=["Preview","Examples"],x=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{x as C,r as E};
//# sourceMappingURL=Checkbox.stories-DRyZDO_L.js.map
