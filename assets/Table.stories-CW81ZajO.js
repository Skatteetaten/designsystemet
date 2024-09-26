import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as h}from"./index-BwDkhjyp.js";import{B as O,a as y}from"./index-C4S6bjjo.js";import"./index-e2J6NVvS.js";import{o as F,g as G,p as L}from"./index-nyVGXzax.js";import{T as a,g as _}from"./index-ux_AYBE_.js";import{P as $}from"./index-BpsKvWdW.js";import{c as s}from"./helpers-Dccz2jQ-.js";import{e as T}from"./stories.utils-Ys3NG0dr.js";import{d as V}from"./base-props.types-BkCKQDF7.js";const U={component:a,title:"Komponenter/Table/Table",argTypes:{canBeManuallyFocused:{table:{category:s.props}},children:{control:!1,table:{category:s.props}},variant:{options:[...V],control:"radio",table:{category:s.props,defaultValue:{summary:_()}}},showCaption:{table:{category:s.props}},sortState:{control:!1,table:{category:s.props}},setSortState:{control:!1,table:{category:s.props}},caption:{table:{category:s.props}},hasFullWidth:{table:{category:s.props}},rowInEditModeId:{table:{category:s.props}}},args:{caption:"Dette er en tabell.",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]},"body"),e.jsx(a.Sum,{valueAlignment:"left",colSpan:2,children:"32,000"},"sum")]}},g={},d={render:m=>{const r="Klage på vedtak";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Standard table",e.jsxs(a,{caption:"Dette er en standard tabell",variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.03.2023"}),e.jsx(a.DataCell,{children:"Kategori 2"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"HAIKU HEDGE ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"11.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 4"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"ATMOSPHERIC EXPLORER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Compact table",e.jsxs(a,{caption:"Dette er en kompakt tabell.",variant:"compact",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]})]})}};d.parameters=T;const c={render:m=>{const[r,o]=h.useState({direction:"none"}),i=[{player:"Ole",score:100},{player:"Dole",score:20},{player:"Doffen",score:30}].slice().sort((n,t)=>{const l=r.sortKey;return!l||n[l]===t[l]?0:r.direction==="ascending"?n[l]>t[l]?1:-1:n[l]<t[l]?1:-1});return e.jsxs(a,{sortState:r,setSortState:o,caption:"High scores",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"player",isSortable:!0,children:"Player"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"score",isSortable:!0,children:"High Score"})]})}),e.jsx(a.Body,{children:i.map((n,t)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"center",children:n.player}),e.jsx(a.DataCell,{alignment:"right",children:n.score})]},`${n.player}-${t}`))})]})}};c.parameters=T;const b={render:m=>{const[r,o]=h.useState({direction:"none"}),i=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}].slice().sort((n,t)=>{const l=r.sortKey;return!l||n[l]===t[l]?0:r.direction==="ascending"?n[l]>t[l]?1:-1:n[l]<t[l]?1:-1});return e.jsxs(a,{caption:"Firmaoversikt",sortState:r,setSortState:o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:i.map((n,t)=>e.jsxs(a.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:n.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:n.id,children:n.firma}),e.jsx(a.DataCell,{children:n.timestamp}),e.jsx(a.DataCell,{children:n.status}),e.jsx(a.DataCell,{children:n.eta})]},`${n.id}-${t}`))})]})}};b.parameters=T;const p={render:m=>{const[r,o]=h.useState({direction:"none"}),i=[{month:"Januar",amount:5426,coverage:"100 %",revenue:"1000",id:"9f78"},{month:"Februar",amount:5432,coverage:"50 %",revenue:"500",id:"6925"},{month:"Mars",amount:4899,coverage:"20 %",revenue:"2000",id:"fc9d"},{month:"April",amount:2344,coverage:"30 %",revenue:"1055",id:"1d15"}].slice().sort((n,t)=>{const l=r.sortKey;return!l||n[l]===t[l]?0:r.direction==="ascending"?n[l]>t[l]?1:-1:n[l]<t[l]?1:-1});return e.jsxs(a,{sortState:r,setSortState:o,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"})]})}),e.jsx(a.Body,{children:i.map((n,t)=>e.jsxs(a.EditableRow,{editableContent:l=>e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(O,{onClick:()=>{l()},children:"Lukk"})}),editButtonAriaDescribedby:n.id,onEdit:()=>{console.log("redigerrer rad")},children:[e.jsx(a.DataCell,{id:n.id,alignment:"right",children:n.month}),e.jsx(a.DataCell,{alignment:"right",children:n.amount}),e.jsx(a.DataCell,{children:n.coverage}),e.jsx(a.DataCell,{alignment:"right",children:n.revenue})]},`${n.id}-${t}`))})]})}};p.parameters=T;const C={render:m=>{const[r,o]=h.useState({direction:"none"}),i=[{deadline:"10.04.2023",category:"Kategori 1",task:"Mottatt tilbakemelding",name:"BARMEN OG BORGHEIM",status:"Tilgjengelig",id:"9f78"},{deadline:"12.04.2023",category:"Kategori 2",task:"Klage på vedtak",name:"LIMERICKS PARTNER ASA",status:"Ny",id:"4b90"},{deadline:"13.04.2023",category:"Kategori 3",task:"Mottatt tilbakemelding",name:"ENCKEL OG WIRCKE LØSNINGER",status:"Ny",id:"8c6f"},{deadline:"15.04.2023",category:"Kategori 1",task:"Klage på vedtak",name:"CORWOOD INDUSTRIES NORGE",status:"Tilgjengelig",id:"8182"},{deadline:"22.04.2023",category:"Kategori 3",task:"Medhold klage",name:"SLANTED N CHANTED",status:"Under arbeid",id:"85cd"}].slice().sort((n,t)=>{const l=r.sortKey;return!l||n[l]===t[l]?0:r.direction==="ascending"?n[l]>t[l]?1:-1:n[l]<t[l]?1:-1});return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør","vi legge på sr-only tekster som th for at det skulle bli lettere for","skjermleserbrukere å forstå tabellen."]}),e.jsxs(a,{caption:"Arbeidsoppgaver",sortState:r,setSortState:o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"deadline",isSortable:!0,children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"category",isSortable:!0,children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",sortKey:"name",isSortable:!0,children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Rediger-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Kopier-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Slett-funksjon"})})]})}),e.jsx(a.Body,{children:i.map((n,t)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{id:n.id,children:n.deadline}),e.jsx(a.DataCell,{children:n.category}),e.jsx(a.DataCell,{children:n.task}),e.jsx(a.DataCell,{children:n.name}),e.jsx(a.DataCell,{children:n.status}),e.jsx(a.DataCell,{children:e.jsx(y,{svgPath:F,children:"Rediger"})}),e.jsx(a.DataCell,{children:e.jsx(y,{svgPath:G,children:"Kopier"})}),e.jsx(a.DataCell,{children:e.jsx(y,{svgPath:L,children:"Slett"})})]},`${n.id}-${t}`))})]})]})}};C.parameters=T;var x,D,S;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"{} satisfies Story",...(S=(D=g.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var j,H,f;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const klage = 'Klage på vedtak';
    return <>
        <div>
          {'Standard table'}
          <Table caption={'Dette er en standard tabell'} variant={'standard'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>{'Kategori'}</Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>
                  {'Arbeidsoppgave'}
                </Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>{'navn'}</Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.DataCell>{'10.03.2023'}</Table.DataCell>
                <Table.DataCell>{'Kategori 2'}</Table.DataCell>
                <Table.DataCell>{klage}</Table.DataCell>
                <Table.DataCell>{'HAIKU HEDGE ASA'}</Table.DataCell>
                <Table.DataCell>{'NY'}</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>{'11.04.2023'}</Table.DataCell>
                <Table.DataCell>{'Kategori 4'}</Table.DataCell>
                <Table.DataCell>{klage}</Table.DataCell>
                <Table.DataCell>{'ATMOSPHERIC EXPLORER ASA'}</Table.DataCell>
                <Table.DataCell>{'NY'}</Table.DataCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div>
          {'Compact table'}
          <Table caption={'Dette er en kompakt tabell.'} variant={'compact'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>{'Kategori'}</Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>
                  {'Arbeidsoppgave'}
                </Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>{'navn'}</Table.HeaderCell>
                <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.DataCell>{'10.04.2023'}</Table.DataCell>
                <Table.DataCell>{'Kategori 1'}</Table.DataCell>
                <Table.DataCell>{klage}</Table.DataCell>
                <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
                <Table.DataCell>{'NY'}</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>{'10.04.2023'}</Table.DataCell>
                <Table.DataCell>{'Kategori 1'}</Table.DataCell>
                <Table.DataCell>{klage}</Table.DataCell>
                <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
                <Table.DataCell>{'NY'}</Table.DataCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </>;
  }
} satisfies Story`,...(f=(H=d.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var v,K,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [sortState, setSortState] = useState<SortState>({
      direction: 'none'
    });
    const data = [{
      player: 'Ole',
      score: 100
    }, {
      player: 'Dole',
      score: 20
    }, {
      player: 'Doffen',
      score: 30
    }];
    const sortedData = data.slice().sort((a, b) => {
      const sortKey = sortState.sortKey as keyof (typeof data)[0];
      if (!sortKey) {
        return 0;
      }
      if (a[sortKey] === b[sortKey]) {
        return 0;
      }
      if (sortState.direction === 'ascending') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      }
      return a[sortKey] < b[sortKey] ? 1 : -1;
    });
    return <Table sortState={sortState} setSortState={setSortState} caption={'High scores'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'} sortKey={'player'} isSortable>
              {'Player'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'} sortKey={'score'} isSortable>
              {'High Score'}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row, index) => (
        /* hvis ikke index tas med i key slik at de blir unike når tabellen sorteres
        så blir voiceover i Safari forvirret og hopper over rader */
        <Table.Row key={\`\${row.player}-\${index}\`}>
              <Table.DataCell alignment={'center'}>{row.player}</Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.score}</Table.DataCell>
            </Table.Row>))}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(k=(K=c.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var R,E,w;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [sortState, setSortState] = useState<SortState>({
      direction: 'none'
    });
    const data = [{
      id: 'abcd',
      firma: 'Bluth Company',
      timestamp: '08.04.2020 11:31:57',
      status: 'Under behandling',
      eta: 'Mer enn 1 dag',
      ansatte: [{
        id: 'efgh',
        navn: 'Per Olsen',
        fnr: '11012020 99999',
        beskrivelse: 'Ingen flere opplysninger'
      }]
    }, {
      id: 'ijkl',
      firma: 'Business Engros',
      timestamp: '08.04.2020 11:32:16',
      status: 'Under behandling',
      eta: '23 min',
      ansatte: [{
        id: 'mnop',
        navn: 'Bryce Navnesen',
        fnr: '02012020 99999',
        beskrivelse: 'noen flere opplysninger'
      }, {
        id: 'qrst',
        navn: 'Alice Middleman',
        fnr: '03012020 99999',
        beskrivelse: 'mange flere opplysninger'
      }]
    }, {
      id: 'uvwx',
      firma: 'Corwood Industries',
      timestamp: '08.04.2020 11:32:16',
      status: 'Ferdig',
      eta: '–',
      ansatte: [{
        id: 'yzab',
        navn: 'Kai Mossige',
        fnr: '01012020 99999',
        beskrivelse: 'finnes flere opplysninger?'
      }]
    }, {
      id: 'cdef',
      firma: 'Limerick Partner',
      timestamp: '08.04.2020 11:32:47',
      status: 'Ferdig',
      eta: '–',
      ansatte: [{
        id: 'ghij',
        navn: 'Kari Saksbehandler',
        fnr: '01012020 99999',
        beskrivelse: 'Ingen flere opplysninger'
      }, {
        id: 'klmn',
        navn: 'Bob Egil Hansen',
        fnr: '04012020 99999',
        beskrivelse: 'Ingen andre opplysninger'
      }]
    }];
    const sortedData = data.slice().sort((a, b) => {
      const sortKey = sortState.sortKey as keyof (typeof data)[0];
      if (!sortKey) {
        return 0;
      }
      if (a[sortKey] === b[sortKey]) {
        return 0;
      }
      if (sortState.direction === 'ascending') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      }
      return a[sortKey] < b[sortKey] ? 1 : -1;
    });
    return <Table caption={'Firmaoversikt'} sortState={sortState} setSortState={setSortState}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sortKey={'firma'} scope={'col'} isSortable>
              {'Firma'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>
              {'Forventet behandlet'}
            </Table.HeaderCell>
            <Table.HeaderCell as={'td'} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row, index) => {
          return <Table.Row key={\`\${row.id}-\${index}\`} expandButtonPosition={'right'} expandableContent={<div className={'emptyExpandedTableRow'}></div>} expandButtonAriaDescribedby={row.id} isExpandable>
                <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
                <Table.DataCell>{row.timestamp}</Table.DataCell>
                <Table.DataCell>{row.status}</Table.DataCell>
                <Table.DataCell>{row.eta}</Table.DataCell>
              </Table.Row>;
        })}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(w=(E=b.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,B,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [sortState, setSortState] = useState<SortState>({
      direction: 'none'
    });
    const data = [{
      month: 'Januar',
      amount: 5426,
      coverage: '100 %',
      revenue: '1000',
      id: '9f78'
    }, {
      month: 'Februar',
      amount: 5432,
      coverage: '50 %',
      revenue: '500',
      id: '6925'
    }, {
      month: 'Mars',
      amount: 4899,
      coverage: '20 %',
      revenue: '2000',
      id: 'fc9d'
    }, {
      month: 'April',
      amount: 2344,
      coverage: '30 %',
      revenue: '1055',
      id: '1d15'
    }];
    const sortedData = data.slice().sort((a, b) => {
      const sortKey = sortState.sortKey as keyof (typeof data)[0];
      if (!sortKey) {
        return 0;
      }
      if (a[sortKey] === b[sortKey]) {
        return 0;
      }
      if (sortState.direction === 'ascending') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      }
      return a[sortKey] < b[sortKey] ? 1 : -1;
    });
    return <Table sortState={sortState} setSortState={setSortState} caption={'Månedoversikt'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell as={'td'} />
            <Table.HeaderCell alignment={'right'} scope={'col'}>
              {'Måned'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'} sortKey={'amount'} isSortable>
              {'Beløp'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Dekningsgrad'}</Table.HeaderCell>
            <Table.HeaderCell alignment={'right'} scope={'col'}>
              {'Avkastning'}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row, index) => {
          return <Table.EditableRow key={\`\${row.id}-\${index}\`} editableContent={(closeEditing: () => void): ReactNode => <div className={'emptyExpandedTableRow'}>
                    <Button onClick={(): void => {
              closeEditing();
            }}>
                      {'Lukk'}
                    </Button>
                  </div>} editButtonAriaDescribedby={row.id} onEdit={(): void => {
            console.log('redigerrer rad');
          }}>
                <Table.DataCell id={row.id} alignment={'right'}>
                  {row.month}
                </Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {row.amount}
                </Table.DataCell>
                <Table.DataCell>{row.coverage}</Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {row.revenue}
                </Table.DataCell>
              </Table.EditableRow>;
        })}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var I,M,P;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [sortState, setSortState] = useState<SortState>({
      direction: 'none'
    });
    const data = [{
      deadline: '10.04.2023',
      category: 'Kategori 1',
      task: 'Mottatt tilbakemelding',
      name: 'BARMEN OG BORGHEIM',
      status: 'Tilgjengelig',
      id: '9f78'
    }, {
      deadline: '12.04.2023',
      category: 'Kategori 2',
      task: 'Klage på vedtak',
      name: 'LIMERICKS PARTNER ASA',
      status: 'Ny',
      id: '4b90'
    }, {
      deadline: '13.04.2023',
      category: 'Kategori 3',
      task: 'Mottatt tilbakemelding',
      name: 'ENCKEL OG WIRCKE LØSNINGER',
      status: 'Ny',
      id: '8c6f'
    }, {
      deadline: '15.04.2023',
      category: 'Kategori 1',
      task: 'Klage på vedtak',
      name: 'CORWOOD INDUSTRIES NORGE',
      status: 'Tilgjengelig',
      id: '8182'
    }, {
      deadline: '22.04.2023',
      category: 'Kategori 3',
      task: 'Medhold klage',
      name: 'SLANTED N CHANTED',
      status: 'Under arbeid',
      id: '85cd'
    }];
    const sortedData = data.slice().sort((a, b) => {
      const sortKey = sortState.sortKey as keyof (typeof data)[0];
      if (!sortKey) {
        return 0;
      }
      if (a[sortKey] === b[sortKey]) {
        return 0;
      }
      if (sortState.direction === 'ascending') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      }
      return a[sortKey] < b[sortKey] ? 1 : -1;
    });
    return <>
        <Paragraph>
          {'Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør'}
          {'vi legge på sr-only tekster som th for at det skulle bli lettere for'}
          {'skjermleserbrukere å forstå tabellen.'}
        </Paragraph>
        <Table caption={'Arbeidsoppgaver'} sortState={sortState} setSortState={setSortState}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'} sortKey={'deadline'} isSortable>
                {'Frist'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'} sortKey={'category'} isSortable>
                {'Kategori'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell alignment={'right'} scope={'col'} sortKey={'name'} isSortable>
                {'navn'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
              <Table.HeaderCell>
                <span className={'srOnly'}>{'Rediger-funksjon'}</span>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <span className={'srOnly'}>{'Kopier-funksjon'}</span>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <span className={'srOnly'}>{'Slett-funksjon'}</span>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sortedData.map((row, index) => {
            return <Table.Row key={\`\${row.id}-\${index}\`}>
                  <Table.DataCell id={row.id}>{row.deadline}</Table.DataCell>
                  <Table.DataCell>{row.category}</Table.DataCell>
                  <Table.DataCell>{row.task}</Table.DataCell>
                  <Table.DataCell>{row.name}</Table.DataCell>
                  <Table.DataCell>{row.status}</Table.DataCell>
                  <Table.DataCell>
                    <InlineButton svgPath={EditSVGpath}>
                      {'Rediger'}
                    </InlineButton>
                  </Table.DataCell>
                  <Table.DataCell>
                    <InlineButton svgPath={CopySVGpath}>
                      {'Kopier'}
                    </InlineButton>
                  </Table.DataCell>
                  <Table.DataCell>
                    <InlineButton svgPath={DeleteSVGpath}>
                      {'Slett'}
                    </InlineButton>
                  </Table.DataCell>
                </Table.Row>;
          })}
          </Table.Body>
        </Table>
      </>;
  }
} satisfies Story`,...(P=(M=C.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const W=["Preview","Variants","Sortable","Expandable","Editable","WithEmptyHeaders"],le=Object.freeze(Object.defineProperty({__proto__:null,Editable:p,Expandable:b,Preview:g,Sortable:c,Variants:d,WithEmptyHeaders:C,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{b as E,c as S,le as T,d as V,C as W,p as a};
//# sourceMappingURL=Table.stories-CW81ZajO.js.map
