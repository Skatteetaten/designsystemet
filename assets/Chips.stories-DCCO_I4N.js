import{j as s,e as p,r as g}from"./iframe-s2_bNgHU.js";import{C as a}from"./index-DFs0_No2.js";import{H as c}from"./index-CJpzHRrE.js";import{e as x}from"./stories.utils-CZ5hej_8.js";a.Toggle.displayName="Chips.Toggle";a.Removable.displayName="Chips.Removable";const f={component:a,title:"Komponenter/Chips",argTypes:{children:{control:!1,table:{category:p.props}},ariaLabel:{table:{category:p.aria}}},args:{children:[s.jsx(a.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),s.jsx(a.Toggle,{children:"Bergen"},"bgo"),s.jsx(a.Removable,{children:"Oslo"},"osl")]}},o={},r={render:u=>{const l=["Ål","Bjørnafjorden","Evje og Hornnes","Hamar","Trondheim"],d=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag"],[m,h]=g.useState(l),[t,j]=g.useState([d[0],d[2]]),[i,v]=g.useState([l[1],l[3]]);return s.jsxs("div",{className:"flex flexColumn gapXl",children:[s.jsxs("div",{children:[s.jsx(c,{level:5,as:"h2",children:"Kontorsted"}),s.jsx(a,{children:l.map(e=>s.jsx(a.Toggle,{showCheckmark:!1,isSelected:i.includes(e),onClick:()=>v(i.includes(e)?i.filter(n=>n!==e):[...i,e]),children:e},e))})]}),s.jsxs("div",{children:[s.jsx(c,{level:5,as:"h2",children:"Jeg kan kontaktes på"}),s.jsx(a,{children:d.map(e=>s.jsx(a.Toggle,{isSelected:t.includes(e),onClick:()=>j(t.includes(e)?t.filter(n=>n!==e):[...t,e]),children:e},e))})]}),s.jsxs("div",{children:[s.jsx(c,{level:5,as:"h2",children:"Viser saker fra"}),s.jsx(a,{children:m.map(e=>s.jsx(a.Removable,{onClose:()=>{h(n=>n.filter(k=>k!==e))},children:e},e))})]})]})}};r.parameters=x;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{} satisfies Story",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};const C=["Preview","Examples"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:o,__namedExportsOrder:C,default:f},Symbol.toStringTag,{value:"Module"}));export{H as C,r as E};
//# sourceMappingURL=Chips.stories-DCCO_I4N.js.map
