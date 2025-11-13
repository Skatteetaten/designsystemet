import{j as s,f as p,r as g}from"./iframe-CdXtTKZQ.js";import{C as a}from"./index-C6J3KzFu.js";import{H as c}from"./index-DUrzBgqO.js";import{e as y}from"./stories.utils-CZ5hej_8.js";a.Toggle.displayName="Chips.Toggle";a.Removable.displayName="Chips.Removable";const b={component:a,title:"Komponenter/Chips/Chips",argTypes:{children:{control:!1,table:{category:p.props}},ariaLabel:{table:{category:p.aria}}},args:{children:[s.jsx(a.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),s.jsx(a.Toggle,{children:"Bergen"},"bgo"),s.jsx(a.Removable,{children:"Oslo"},"osl")]}},o={},r={render:L=>{const l=["Ål","Bjørnafjorden","Evje og Hornnes","Hamar","Trondheim"],d=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag"],[f,C]=g.useState(l),[t,u]=g.useState([d[0],d[2]]),[i,T]=g.useState([l[1],l[3]]);return s.jsxs("div",{className:"flex flexColumn gapXl",children:[s.jsxs("div",{children:[s.jsx(c,{level:5,as:"h2",children:"Kontorsted"}),s.jsx(a,{children:l.map(e=>s.jsx(a.Toggle,{showCheckmark:!1,isSelected:i.includes(e),onClick:()=>T(i.includes(e)?i.filter(n=>n!==e):[...i,e]),children:e},e))})]}),s.jsxs("div",{children:[s.jsx(c,{level:5,as:"h2",children:"Jeg kan kontaktes på"}),s.jsx(a,{children:d.map(e=>s.jsx(a.Toggle,{isSelected:t.includes(e),onClick:()=>u(t.includes(e)?t.filter(n=>n!==e):[...t,e]),children:e},e))})]}),s.jsxs("div",{children:[s.jsx(c,{level:5,as:"h2",children:"Viser saker fra"}),s.jsx(a,{children:f.map(e=>s.jsx(a.Removable,{onClose:()=>{C(n=>n.filter(S=>S!==e))},children:e},e))})]})]})}};r.parameters=y;var m,h,j;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{} satisfies Story",...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var v,k,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const lokasjoner = ['Ål', 'Bjørnafjorden', 'Evje og Hornnes', 'Hamar', 'Trondheim'];
    const dager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'];
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
} satisfies Story`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const H=["Preview","Examples"],R=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:o,__namedExportsOrder:H,default:b},Symbol.toStringTag,{value:"Module"}));export{R as C,r as E};
//# sourceMappingURL=Chips.stories--U0xWeHr.js.map
