import{j as s}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{B as y}from"./index-U0B695k8.js";import{d as b}from"./index--O6iZ70i.js";import{S,g as h,a as P,b as x}from"./index-Dxnk4fMh.js";import{c as e}from"./helpers-Dccz2jQ-.js";import{e as w}from"./stories.utils-Ys3NG0dr.js";import{s as E}from"./Spinner.types-CqRrw5S3.js";const _={component:S,title:"Komponenter/Spinner",argTypes:{classNames:{table:{category:e.props}},children:{table:{category:e.props,defaultValue:{summary:b.t("ds_status:spinner.LoadingLabel")}}},size:{options:[...E],control:"inline-radio",table:{category:e.props,defaultValue:{summary:h()}}},titlePosition:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:P()}}},color:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:x()}}},percentComplete:{table:{category:e.props}},hideTitle:{table:{category:e.props}}}},n={},r={render:I=>{const[i,v]=o.useState(!1),[a,l]=o.useState(0),t=o.useRef(void 0);return o.useEffect(()=>{a===100&&clearInterval(t.current)},[a]),s.jsxs(s.Fragment,{children:[s.jsx(y,{onClick:()=>{l(0),v(!i),t.current&&(clearInterval(t.current),t.current=void 0),t.current=setInterval(()=>{l(p=>p>=100?0:p+10)},1e3)},children:"toggle spinner"}),i&&s.jsx(S,{percentComplete:a,className:"bottomSpacingXL",size:"large",color:"blue",titlePosition:"right"})]})}};r.parameters=w;var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,d,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const j=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:n,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{r as E,N as S};
//# sourceMappingURL=Spinner.stories-BkQHVnBY.js.map
