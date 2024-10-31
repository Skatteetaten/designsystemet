import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as T}from"./index-BwDkhjyp.js";import{B as J,a as S}from"./index-PT2LozU0.js";import"./index-BSjcMZTJ.js";import{C as f}from"./index-CPXmgfFQ.js";import{o as W,g as X,p as Y}from"./index-BU2UjPj9.js";import{T as a,g as z}from"./index-BfEJetEM.js";import{P as q}from"./index-BFUMlpsH.js";import{c as i}from"./helpers-Dccz2jQ-.js";import{e as m}from"./stories.utils-Ys3NG0dr.js";import{d as $}from"./base-props.types-sXyoNogd.js";const Q={component:a,title:"Komponenter/Table/Table",argTypes:{canBeManuallyFocused:{table:{category:i.props}},children:{control:!1,table:{category:i.props}},variant:{options:[...$],control:"radio",table:{category:i.props,defaultValue:{summary:z()}}},showCaption:{table:{category:i.props}},sortState:{control:!1,table:{category:i.props}},setSortState:{control:!1,table:{category:i.props}},caption:{table:{category:i.props}},hasFullWidth:{table:{category:i.props}},rowInEditModeId:{table:{category:i.props}}},args:{caption:"Dette er en tabell.",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]},"body"),e.jsx(a.Sum,{valueAlignment:"left",colSpan:2,children:"32,000"},"sum")]}},y={},c={render:u=>{const r="Klage på vedtak";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Standard table",e.jsxs(a,{caption:"Dette er en standard tabell",variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.03.2023"}),e.jsx(a.DataCell,{children:"Kategori 2"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"HAIKU HEDGE ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"11.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 4"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"ATMOSPHERIC EXPLORER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Compact table",e.jsxs(a,{caption:"Dette er en kompakt tabell.",variant:"compact",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]})]})}};c.parameters=m;const b={render:u=>{const[r,o]=T.useState({direction:"none"}),s=[{player:"Ole",score:100},{player:"Dole",score:20},{player:"Doffen",score:30}].slice().sort((t,n)=>{const l=r.sortKey;return!l||t[l]===n[l]?0:r.direction==="ascending"?t[l]>n[l]?1:-1:t[l]<n[l]?1:-1});return e.jsxs(a,{sortState:r,setSortState:o,caption:"High scores",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"player",isSortable:!0,children:"Player"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"score",isSortable:!0,children:"High Score"})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"center",children:t.player}),e.jsx(a.DataCell,{alignment:"right",children:t.score})]},t.player))})]})}};b.parameters=m;const p={render:u=>{const[r,o]=T.useState({direction:"none"}),s=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}].slice().sort((t,n)=>{const l=r.sortKey;return!l||t[l]===n[l]?0:r.direction==="ascending"?t[l]>n[l]?1:-1:t[l]<n[l]?1:-1});return e.jsxs(a,{caption:"Firmaoversikt",sortState:r,setSortState:o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:t.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:t.id,children:t.firma}),e.jsx(a.DataCell,{children:t.timestamp}),e.jsx(a.DataCell,{children:t.status}),e.jsx(a.DataCell,{children:t.eta})]},t.id))})]})}};p.parameters=m;const C={render:u=>{const[r,o]=T.useState({direction:"none"}),s=[{month:"Januar",amount:5426,coverage:"100 %",revenue:"1000",id:"9f78"},{month:"Februar",amount:5432,coverage:"50 %",revenue:"500",id:"6925"},{month:"Mars",amount:4899,coverage:"20 %",revenue:"2000",id:"fc9d"},{month:"April",amount:2344,coverage:"30 %",revenue:"1055",id:"1d15"}].slice().sort((t,n)=>{const l=r.sortKey;return!l||t[l]===n[l]?0:r.direction==="ascending"?t[l]>n[l]?1:-1:t[l]<n[l]?1:-1});return e.jsxs(a,{sortState:r,setSortState:o,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.EditableRow,{editableContent:n=>e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(J,{onClick:()=>{n()},children:"Lukk"})}),editButtonAriaDescribedby:t.id,onEdit:()=>{console.log("redigerrer rad")},children:[e.jsx(a.DataCell,{id:t.id,alignment:"right",children:t.month}),e.jsx(a.DataCell,{alignment:"right",children:t.amount}),e.jsx(a.DataCell,{children:t.coverage}),e.jsx(a.DataCell,{alignment:"right",children:t.revenue})]},t.id))})]})}};C.parameters=m;const g={render:u=>{const[r,o]=T.useState({direction:"none"}),s=[{deadline:"10.04.2023",category:"Kategori 1",task:"Mottatt tilbakemelding",name:"BARMEN OG BORGHEIM",status:"Tilgjengelig",id:"9f78"},{deadline:"12.04.2023",category:"Kategori 2",task:"Klage på vedtak",name:"LIMERICKS PARTNER ASA",status:"Ny",id:"4b90"},{deadline:"13.04.2023",category:"Kategori 3",task:"Mottatt tilbakemelding",name:"ENCKEL OG WIRCKE LØSNINGER",status:"Ny",id:"8c6f"},{deadline:"15.04.2023",category:"Kategori 1",task:"Klage på vedtak",name:"CORWOOD INDUSTRIES NORGE",status:"Tilgjengelig",id:"8182"},{deadline:"22.04.2023",category:"Kategori 3",task:"Medhold klage",name:"SLANTED N CHANTED",status:"Under arbeid",id:"85cd"}].slice().sort((t,n)=>{const l=r.sortKey;return!l||t[l]===n[l]?0:r.direction==="ascending"?t[l]>n[l]?1:-1:t[l]<n[l]?1:-1});return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:["Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør","vi legge på sr-only tekster som th for at det skulle bli lettere for","skjermleserbrukere å forstå tabellen."]}),e.jsxs(a,{caption:"Arbeidsoppgaver",sortState:r,setSortState:o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"deadline",isSortable:!0,children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"category",isSortable:!0,children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",sortKey:"name",isSortable:!0,children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Rediger-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Kopier-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Slett-funksjon"})})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{id:t.id,children:t.deadline}),e.jsx(a.DataCell,{children:t.category}),e.jsx(a.DataCell,{children:t.task}),e.jsx(a.DataCell,{children:t.name}),e.jsx(a.DataCell,{children:t.status}),e.jsx(a.DataCell,{children:e.jsx(S,{svgPath:W,children:"Rediger"})}),e.jsx(a.DataCell,{children:e.jsx(S,{svgPath:X,children:"Kopier"})}),e.jsx(a.DataCell,{children:e.jsx(S,{svgPath:Y,children:"Slett"})})]},t.id))})]})]})}};g.parameters=m;const h={render:u=>{const r=[{fastsatt:"31.01.2018",avgiftstype:"OR",avgiftsgruppe:"525",beloep:"6045",status:"Iverksatt",id:"1"},{fastsatt:"31.05.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6033",status:"Iverksatt",id:"2"},{fastsatt:"02.03.2018",avgiftstype:"AR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"3"},{fastsatt:"03.03.2018",avgiftstype:"DR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"4"},{fastsatt:"04.01.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"5"}],[o,d]=T.useState([]),[s,t]=T.useState(!1);return e.jsxs(a,{caption:"avgiftsstatus",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(f,{checked:s,hideLabel:!0,onChange:()=>{s&&d([]),t(!s)},children:"velg alle rader"})}),e.jsx(a.HeaderCell,{children:"Fastsatt"}),e.jsx(a.HeaderCell,{children:"avgiftstype"}),e.jsx(a.HeaderCell,{children:"avgiftsgruppe"}),e.jsx(a.HeaderCell,{children:"Beløp"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:r.map((n,l)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:e.jsx(f,{checked:s||o.some(D=>D===l),hideLabel:!0,onChange:D=>{s?(d(Array.from(Array(r.length).keys()).filter(x=>x!==l)),t(!1)):D.target.checked?d([l,...o]):d(o.filter(x=>x!==l))},children:`Velg ${n.fastsatt}`})}),e.jsx(a.DataCell,{as:"th",scope:"row",children:n.fastsatt}),e.jsx(a.DataCell,{children:n.avgiftstype}),e.jsx(a.DataCell,{children:n.avgiftsgruppe}),e.jsx(a.DataCell,{children:n.beloep}),e.jsx(a.DataCell,{children:n.status})]},n.id))})]})}};h.parameters=m;var j,H,v;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:"{} satisfies Story",...(v=(H=y.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var k,R,K;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(R=c.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var E,w,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
          {sortedData.map(row => <Table.Row key={row.player}>
              <Table.DataCell alignment={'center'}>{row.player}</Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.score}</Table.DataCell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(A=(w=b.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,I,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
          {sortedData.map(row => {
          return <Table.Row key={row.id} expandButtonPosition={'right'} expandableContent={<div className={'emptyExpandedTableRow'}></div>} expandButtonAriaDescribedby={row.id} isExpandable>
                <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
                <Table.DataCell>{row.timestamp}</Table.DataCell>
                <Table.DataCell>{row.status}</Table.DataCell>
                <Table.DataCell>{row.eta}</Table.DataCell>
              </Table.Row>;
        })}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var M,O,P;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          {sortedData.map(row => {
          return <Table.EditableRow key={row.id} editableContent={(closeEditing: () => void): ReactNode => <div className={'emptyExpandedTableRow'}>
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
} satisfies Story`,...(P=(O=C.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var F,L,G;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
            {sortedData.map(row => {
            return <Table.Row key={row.id}>
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
} satisfies Story`,...(G=(L=g.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var _,U,V;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const items = [{
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6045',
      status: 'Iverksatt',
      id: '1'
    }, {
      fastsatt: '31.05.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6033',
      status: 'Iverksatt',
      id: '2'
    }, {
      fastsatt: '02.03.2018',
      avgiftstype: 'AR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '3'
    }, {
      fastsatt: '03.03.2018',
      avgiftstype: 'DR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '4'
    }, {
      fastsatt: '04.01.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '5'
    }];
    const [checkedState, setCheckedState] = useState<Array<number>>([]);
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    return <Table caption={'avgiftsstatus'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox checked={isAllChecked} hideLabel onChange={() => {
              if (isAllChecked) {
                setCheckedState([]);
              }
              setIsAllChecked(!isAllChecked);
            }}>
                {'velg alle rader'}
              </Checkbox>
            </Table.HeaderCell>
            <Table.HeaderCell>{'Fastsatt'}</Table.HeaderCell>
            <Table.HeaderCell>{'avgiftstype'}</Table.HeaderCell>
            <Table.HeaderCell>{'avgiftsgruppe'}</Table.HeaderCell>
            <Table.HeaderCell>{'Beløp'}</Table.HeaderCell>
            <Table.HeaderCell>{'Status'}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item, index) => <Table.Row key={item.id}>
              <Table.DataCell>
                <Checkbox checked={isAllChecked || checkedState.some(it => it === index)} hideLabel onChange={event => {
              if (isAllChecked) {
                setCheckedState(Array.from(Array(items.length).keys()).filter(it => it !== index));
                setIsAllChecked(false);
              } else if (event.target.checked) {
                setCheckedState([index, ...checkedState]);
              } else {
                setCheckedState(checkedState.filter(it => it !== index));
              }
            }}>{\`Velg \${item.fastsatt}\`}</Checkbox>
              </Table.DataCell>
              <Table.DataCell as={'th'} scope={'row'}>
                {item.fastsatt}
              </Table.DataCell>
              <Table.DataCell>{item.avgiftstype}</Table.DataCell>
              <Table.DataCell>{item.avgiftsgruppe}</Table.DataCell>
              <Table.DataCell>{item.beloep}</Table.DataCell>
              <Table.DataCell>{item.status}</Table.DataCell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Z=["Preview","Variants","Sortable","Expandable","Editable","WithEmptyHeaders","Selectable"],be=Object.freeze(Object.defineProperty({__proto__:null,Editable:C,Expandable:p,Preview:y,Selectable:h,Sortable:b,Variants:c,WithEmptyHeaders:g,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{p as E,b as S,be as T,c as V,g as W,C as a,h as b};
//# sourceMappingURL=Table.stories-CqkqKu67.js.map
