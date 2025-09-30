import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-D_ouKaeX.js";import{B as y}from"./index-DfnG5Ebn.js";import{a as b,b as h,c as P,g as x,S as d}from"./index-uxUkjR_c.js";import{c as e}from"./helpers-B90wjoUE.js";import{e as w}from"./stories.utils-Ys3NG0dr.js";const E={component:d,title:"Komponenter/Spinner",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{table:{category:e.props,defaultValue:{summary:x()}}},size:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:P()}}},titlePosition:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:h()}}},color:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:b()}}},percentComplete:{table:{category:e.props}},hideTitle:{table:{category:e.props}}}},n={},r={render:j=>{const[i,v]=o.useState(!1),[a,l]=o.useState(0),t=o.useRef(void 0);return o.useEffect(()=>{a===100&&clearInterval(t.current)},[a]),s.jsxs(s.Fragment,{children:[s.jsx(y,{onClick:()=>{l(0),v(!i),t.current&&(clearInterval(t.current),t.current=void 0),t.current=setInterval(()=>{l(p=>p>=100?0:p+10)},1e3)},children:"toggle spinner"}),i&&s.jsx(d,{percentComplete:a,className:"bottomSpacingXL",size:"large",color:"blue",titlePosition:"right"})]})}};r.parameters=w;var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [showSpinner, setShowSpinner] = useState(false);
    const [progress, setProgress] = useState(0);
    const interval = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    useEffect(() => {
      if (progress === 100) {
        clearInterval(interval.current);
      }
    }, [progress]);
    return <>
        <Button onClick={() => {
        setProgress(0);
        setShowSpinner(!showSpinner);
        if (interval.current) {
          clearInterval(interval.current);
          interval.current = undefined;
        }
        interval.current = setInterval(() => {
          setProgress(prev => prev >= 100 ? 0 : prev + 10);
        }, 1000);
      }}>
          {'toggle spinner'}
        </Button>
        {showSpinner && <Spinner percentComplete={progress} className={'bottomSpacingXL'} size={'large'} color={'blue'} titlePosition={'right'} />}
      </>;
  }
} satisfies Story`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const _=["Preview","Examples"],R=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:n,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{r as E,R as S};
//# sourceMappingURL=Spinner.stories-BT5QJT5R.js.map
