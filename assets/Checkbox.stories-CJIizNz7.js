import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-D_ouKaeX.js";import{B as y}from"./index-CUnERQXD.js";import{C as u}from"./index-CReUDGGp.js";import{h as s,c as e}from"./helpers-DjiZIot2.js";import{e as C}from"./stories.utils-WEsnq5G6.js";const k={component:u,title:"Komponenter/Checkbox",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{table:{category:e.props}},defaultChecked:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hideLabel:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},checked:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{table:{category:e.htmlAttribute}},ariaDescribedby:{table:{category:e.aria}},onBlur:{...s},onChange:{...s},onFocus:{...s}},args:{children:"Jeg har lest og forstått innholdet"}},t={},r={render:S=>{const[a,b]=l.useState(!1),[f,n]=l.useState(""),c=()=>{a||n("Du må lese og forstå innholdet for å gå videre.")};return o.jsxs(o.Fragment,{children:[o.jsx(u,{className:"exampleSpacing",errorMessage:f,checked:a,required:!0,onBlur:c,onChange:()=>{b(!a),n("")},children:"Jeg har lest og forstått innholdet"}),o.jsx(y,{onClick:c,children:"Send"})]})}};r.parameters=C;var i,d,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,m,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Preview","Examples"],_=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:t,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{_ as C,r as E};
//# sourceMappingURL=Checkbox.stories-CJIizNz7.js.map
