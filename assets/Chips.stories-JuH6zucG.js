import{j as a,e as g,r as c}from"./iframe-CBOQuZmX.js";import{C as s}from"./index-BYntwts4.js";import{H as h}from"./index-B4-BoLKC.js";import{e as f}from"./stories.utils-CZ5hej_8.js";s.Toggle.displayName="Chips.Toggle";s.Removable.displayName="Chips.Removable";const x={component:s,title:"Komponenter/Chips",argTypes:{children:{control:!1,table:{category:g.props}},ariaLabel:{table:{category:g.aria}},ariaLabelledBy:{table:{category:g.aria}}},args:{children:[a.jsx(s.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),a.jsx(s.Toggle,{children:"Bergen"},"bgo"),a.jsx(s.Removable,{children:"Oslo"},"osl")]}},o={},r={render:u=>{const l=["Ål","Bjørnafjorden","Evje og Hornnes","Hamar","Trondheim"],d=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag"],[p,k]=c.useState(l),[t,m]=c.useState([d[0],d[2]]),[i,j]=c.useState([l[1],l[3]]);return a.jsxs("div",{className:"flex flexColumn gapXl",children:[a.jsxs("div",{children:[a.jsx(h,{level:5,as:"h2",id:"kontorsted-heading",children:"Kontorsted"}),a.jsx(s,{ariaLabelledBy:"kontorsted-heading",children:l.map(e=>a.jsx(s.Toggle,{showCheckmark:!1,isSelected:i.includes(e),onClick:()=>j(i.includes(e)?i.filter(n=>n!==e):[...i,e]),children:e},e))})]}),a.jsxs("div",{children:[a.jsx(h,{level:5,as:"h2",id:"kontakt-dager-heading",children:"Jeg kan kontaktes på"}),a.jsx(s,{ariaLabelledBy:"kontakt-dager-heading",children:d.map(e=>a.jsx(s.Toggle,{isSelected:t.includes(e),onClick:()=>m(t.includes(e)?t.filter(n=>n!==e):[...t,e]),children:e},e))})]}),a.jsxs("div",{children:[a.jsx(h,{level:5,as:"h2",id:"saker-fra-heading",children:"Viser saker fra"}),a.jsx(s,{ariaLabelledBy:"saker-fra-heading",children:p.map(e=>a.jsx(s.Removable,{onClose:()=>{k(n=>n.filter(v=>v!==e))},children:e},e))})]})]})}};r.parameters=f;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{} satisfies Story",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const lokasjoner = ['Ål', 'Bjørnafjorden', 'Evje og Hornnes', 'Hamar', 'Trondheim'];
    const dager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'];
    const [filter, setFilter] = useState(lokasjoner);
    const [valgteDager, setValgteDater] = useState<string[]>([dager[0], dager[2]]);
    const [valgteLokasjoner, setValgteLokasjoner] = useState<string[]>([lokasjoner[1], lokasjoner[3]]);
    return <div className={'flex flexColumn gapXl'}>
        <div>
          <Heading level={5} as={'h2'} id={'kontorsted-heading'}>
            {'Kontorsted'}
          </Heading>
          <Chips ariaLabelledBy={'kontorsted-heading'}>
            {lokasjoner.map(lokasjon => <Chips.Toggle key={lokasjon} showCheckmark={false} isSelected={valgteLokasjoner.includes(lokasjon)} onClick={() => setValgteLokasjoner(valgteLokasjoner.includes(lokasjon) ? valgteLokasjoner.filter(x => x !== lokasjon) : [...valgteLokasjoner, lokasjon])}>
                {lokasjon}
              </Chips.Toggle>)}
          </Chips>
        </div>

        <div>
          <Heading level={5} as={'h2'} id={'kontakt-dager-heading'}>
            {'Jeg kan kontaktes på'}
          </Heading>
          <Chips ariaLabelledBy={'kontakt-dager-heading'}>
            {dager.map(dag => <Chips.Toggle key={dag} isSelected={valgteDager.includes(dag)} onClick={() => setValgteDater(valgteDager.includes(dag) ? valgteDager.filter(x => x !== dag) : [...valgteDager, dag])}>
                {dag}
              </Chips.Toggle>)}
          </Chips>
        </div>
        <div>
          <Heading level={5} as={'h2'} id={'saker-fra-heading'}>
            {'Viser saker fra'}
          </Heading>
          <Chips ariaLabelledBy={'saker-fra-heading'}>
            {filter.map(c => <Chips.Removable key={c} onClose={() => {
            setFilter(x => x.filter(y => y !== c));
          }}>
                {c}
              </Chips.Removable>)}
          </Chips>
        </div>
      </div>;
  }
} satisfies Story`,...r.parameters?.docs?.source}}};const C=["Preview","Examples"],L=Object.freeze(Object.defineProperty({__proto__:null,Examples:r,Preview:o,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{L as C,r as E};
//# sourceMappingURL=Chips.stories-JuH6zucG.js.map
