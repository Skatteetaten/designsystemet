import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-7h80QhK_.js";import{C as a}from"./index-B7e1UgbU.js";import{H as d}from"./index-SYCMKRjb.js";import{c as p}from"./helpers-BRYKCfPN.js";import{e as y}from"./stories.utils-Ys3NG0dr.js";a.Toggle.displayName="Chips.Toggle";a.Removable.displayName="Chips.Removable";const b={component:a,title:"Komponenter/Chips/Chips",argTypes:{children:{control:!1,table:{category:p.props}},ariaLabel:{table:{category:p.aria}}},args:{children:[s.jsx(a.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),s.jsx(a.Toggle,{children:"Bergen"},"bgo"),s.jsx(a.Removable,{children:"Oslo"},"osl")]}},o={},i=["Ål","Bjørnafjorden","Evje og Hornnes","Hamar","Trondheim"],c=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag"],r={render:L=>{const[f,C]=g.useState(i),[l,u]=g.useState([c[0],c[2]]),[t,S]=g.useState([i[1],i[3]]);return s.jsxs("div",{className:"flex flexColumn gapXl",children:[s.jsxs("div",{children:[s.jsx(d,{level:5,as:"h2",children:"Kontorsted"}),s.jsx(a,{children:i.map(e=>s.jsx(a.Toggle,{showCheckmark:!1,isSelected:t.includes(e),onClick:()=>S(t.includes(e)?t.filter(n=>n!==e):[...t,e]),children:e},e))})]}),s.jsxs("div",{children:[s.jsx(d,{level:5,as:"h2",children:"Jeg kan kontaktes på"}),s.jsx(a,{children:c.map(e=>s.jsx(a.Toggle,{isSelected:l.includes(e),onClick:()=>u(l.includes(e)?l.filter(n=>n!==e):[...l,e]),children:e},e))})]}),s.jsxs("div",{children:[s.jsx(d,{level:5,as:"h2",children:"Viser saker fra"}),s.jsx(a,{children:f.map(e=>s.jsx(a.Removable,{onClose:()=>{C(n=>n.filter(T=>T!==e))},children:e},e))})]})]})}};r.parameters=y;var m,h,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{} satisfies Story",...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,k,x;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [filter, setFilter] = useState(lokasjoner);
    const [valgteDager, setValgteDater] = useState<string[]>([dager[0], dager[2]]);
    const [valgteLokasjoner, setValgteLokasjoner] = useState<string[]>([lokasjoner[1], lokasjoner[3]]);
    return <div className={'flex flexColumn gapXl'}>
        <div>
          <Heading level={5} as={'h2'}>
            {'Kontorsted'}
          </Heading>
          <Chips>
            {lokasjoner.map(lokasjon => <Chips.Toggle key={lokasjon} showCheckmark={false} isSelected={valgteLokasjoner.includes(lokasjon)} onClick={() => setValgteLokasjoner(valgteLokasjoner.includes(lokasjon) ? valgteLokasjoner.filter(x => x !== lokasjon) : [...valgteLokasjoner, lokasjon])}>
                {lokasjon}
              </Chips.Toggle>)}
          </Chips>
        </div>

        <div>
          <Heading level={5} as={'h2'}>
            {'Jeg kan kontaktes på'}
          </Heading>
          <Chips>
            {dager.map(dag => <Chips.Toggle key={dag} isSelected={valgteDager.includes(dag)} onClick={() => setValgteDater(valgteDager.includes(dag) ? valgteDager.filter(x => x !== dag) : [...valgteDager, dag])}>
                {dag}
              </Chips.Toggle>)}
          </Chips>
        </div>
        <div>
          <Heading level={5} as={'h2'}>
            {'Viser saker fra'}
          </Heading>
          <Chips>
            {filter.map(c => <Chips.Removable key={c} onClose={() => {
            setFilter(x => x.filter(y => y !== c));
          }}>
                {c}
              </Chips.Removable>)}
          </Chips>
        </div>
      </div>;
  }
} satisfies Story`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const H=["Preview","Examples"],O=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:o,__namedExportsOrder:H,default:b},Symbol.toStringTag,{value:"Module"}));export{O as C,r as E};
//# sourceMappingURL=Chips.stories-CPaH8LEH.js.map
