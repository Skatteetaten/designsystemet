import{e,r as s,j as o}from"./iframe-Br1Xu9zr.js";import{B as m}from"./index-Mga-TJ2K.js";import{a as g,b as S,c as f,g as d,S as c}from"./index-CjBS1QGy.js";import{e as v}from"./stories.utils-CZ5hej_8.js";const y={component:c,title:"Komponenter/Spinner",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{table:{category:e.props,defaultValue:{summary:d()}}},size:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:f()}}},titlePosition:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:S()}}},color:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:g()}}},percentComplete:{table:{category:e.props}},hideTitle:{table:{category:e.props}}}},n={},r={render:h=>{const[i,u]=s.useState(!1),[a,l]=s.useState(0),t=s.useRef(void 0);return s.useEffect(()=>{a===100&&clearInterval(t.current)},[a]),o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>{l(0),u(!i),t.current&&(clearInterval(t.current),t.current=void 0),t.current=setInterval(()=>{l(p=>p>=100?0:p+10)},1e3)},children:"toggle spinner"}),i&&o.jsx(c,{percentComplete:a,className:"bottomSpacingXL",size:"large",color:"blue",titlePosition:"right"})]})}};r.parameters=v;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{} satisfies Story",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};const b=["Preview","Examples"],_=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:n,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{r as E,_ as S};
//# sourceMappingURL=Spinner.stories-CL913N1z.js.map
