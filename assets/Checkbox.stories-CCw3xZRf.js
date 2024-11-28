import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{B as k}from"./index-CKHxS2Ra.js";import{C as b}from"./index-Be268C4q.js";import{c as e,h as c}from"./helpers-Dccz2jQ-.js";import{e as x}from"./stories.utils-Ys3NG0dr.js";const C={component:b,title:"Komponenter/Checkbox",argTypes:{classNames:{table:{category:e.props}},children:{table:{category:e.props}},defaultChecked:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hideLabel:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},checked:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{table:{category:e.htmlAttribute}},ariaDescribedby:{table:{category:e.aria}},onBlur:{...c},onChange:{...c},onFocus:{...c}},args:{children:"Jeg har lest og forstått innholdet"}},o={},t={render:r=>{const[a,f]=i.useState(!1),[y,l]=i.useState("");return s.jsxs(s.Fragment,{children:[s.jsx(b,{className:"exampleSpacing",errorMessage:y,checked:a,required:!0,onChange:()=>{f(!a),l("")},onBlur:n=>{r!=null&&r.onBlur&&r.onBlur(n)},onFocus:n=>{r!=null&&r.onFocus&&r.onFocus(n)},children:"Jeg har lest og forstått innholdet"}),s.jsx(k,{onClick:()=>{a||l("Du må lese og forstå innholdet for å gå videre.")},children:"Send"})]})}};t.parameters=x;var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{} satisfies Story",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    return <>
        <Checkbox className={'exampleSpacing'} errorMessage={errorMessage} checked={checked} required onChange={(): void => {
        setChecked(!checked);
        setErrorMessage('');
      }} onBlur={(event): void => {
        args?.onBlur && args.onBlur(event);
      }} onFocus={(event): void => {
        args?.onFocus && args.onFocus(event);
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
} satisfies Story`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const S=["Preview","Examples"],A=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:o,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{A as C,t as E};
//# sourceMappingURL=Checkbox.stories-CCw3xZRf.js.map
