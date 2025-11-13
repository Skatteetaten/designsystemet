import{f as e,r as s,j as o}from"./iframe-CdXtTKZQ.js";import{B as y}from"./index-CDWtp_lT.js";import{a as b,b as h,c as P,g as x,S as d}from"./index-CVW4skVE.js";import{e as w}from"./stories.utils-CZ5hej_8.js";const E={component:d,title:"Komponenter/Spinner",argTypes:{classNames:{control:!1,table:{category:e.props}},children:{table:{category:e.props,defaultValue:{summary:x()}}},size:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:P()}}},titlePosition:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:h()}}},color:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:b()}}},percentComplete:{table:{category:e.props}},hideTitle:{table:{category:e.props}}}},n={},r={render:j=>{const[i,v]=s.useState(!1),[a,l]=s.useState(0),t=s.useRef(void 0);return s.useEffect(()=>{a===100&&clearInterval(t.current)},[a]),o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>{l(0),v(!i),t.current&&(clearInterval(t.current),t.current=void 0),t.current=setInterval(()=>{l(p=>p>=100?0:p+10)},1e3)},children:"toggle spinner"}),i&&o.jsx(d,{percentComplete:a,className:"bottomSpacingXL",size:"large",color:"blue",titlePosition:"right"})]})}};r.parameters=w;var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const _=["Preview","Examples"],B=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:n,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{r as E,B as S};
//# sourceMappingURL=Spinner.stories-CFfO43fr.js.map
