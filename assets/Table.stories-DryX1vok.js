import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-D_ouKaeX.js";import{B as $,I as S}from"./index-eDVrZHQi.js";import"./index-ChzTQA-a.js";import{C as f}from"./index-DzkGBFys.js";import{E as q,m as Q,D as Z}from"./index-CdwPxLML.js";import{g as ee,T as a}from"./index-BQ7uqCx-.js";import{P as ae}from"./index-DsfABT8I.js";import{c as i}from"./helpers-B7KPg_So.js";import{e as c}from"./stories.utils-Ys3NG0dr.js";import{d as le}from"./base-props.types-DUvlOF9f.js";const H=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}],te={component:a,title:"Komponenter/Table/Table",argTypes:{canBeManuallyFocused:{table:{category:i.props}},children:{control:!1,table:{category:i.props}},variant:{options:[...le],control:"radio",table:{category:i.props,defaultValue:{summary:ee()}}},showCaption:{table:{category:i.props}},sortState:{control:!1,table:{category:i.props}},setSortState:{control:!1,table:{category:i.props}},caption:{table:{category:i.props}},hasFullWidth:{table:{category:i.props}},rowInEditModeId:{table:{category:i.props}}},args:{caption:"Dette er en tabell.",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]},"body"),e.jsx(a.Sum,{valueAlignment:"left",colSpan:2,children:"32,000"},"sum")]}},y={},p={render:b=>{const l="Klage på vedtak";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Standard table",e.jsxs(a,{caption:"Dette er en standard tabell",variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.03.2023"}),e.jsx(a.DataCell,{children:"Kategori 2"}),e.jsx(a.DataCell,{children:l}),e.jsx(a.DataCell,{children:"HAIKU HEDGE ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"11.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 4"}),e.jsx(a.DataCell,{children:l}),e.jsx(a.DataCell,{children:"ATMOSPHERIC EXPLORER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Compact table",e.jsxs(a,{caption:"Dette er en kompakt tabell.",variant:"compact",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:l}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:l}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]})]})}};p.parameters=c;const C={render:b=>{const[l,o]=x.useState({direction:"none"}),s=[{player:"Ole",score:100},{player:"Dole",score:20},{player:"Doffen",score:30}].slice().sort((t,n)=>{const r=l.sortKey;return!r||t[r]===n[r]?0:l.direction==="ascending"?t[r]>n[r]?1:-1:t[r]<n[r]?1:-1});return e.jsxs(a,{sortState:l,setSortState:o,caption:"High scores",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"player",isSortable:!0,children:"Player"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"score",isSortable:!0,children:"High Score"})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"center",children:t.player}),e.jsx(a.DataCell,{alignment:"right",children:t.score})]},t.player))})]})}};C.parameters=c;const T={render:b=>{const[l,o]=x.useState({direction:"none"}),d=H.slice().sort((s,t)=>{const n=l.sortKey;return!n||s[n]===t[n]?0:l.direction==="ascending"?s[n]>t[n]?1:-1:s[n]<t[n]?1:-1});return e.jsxs(a,{caption:"Firmaoversikt",sortState:l,setSortState:o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:d.map(s=>e.jsxs(a.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:s.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:s.id,children:s.firma}),e.jsx(a.DataCell,{children:s.timestamp}),e.jsx(a.DataCell,{children:s.status}),e.jsx(a.DataCell,{children:s.eta})]},s.id))})]})}};T.parameters=c;const h={render:b=>{const[l,o]=x.useState({direction:"none"}),s=[{month:"Januar",amount:5426,coverage:"100 %",revenue:"1000",id:"9f78"},{month:"Februar",amount:5432,coverage:"50 %",revenue:"500",id:"6925"},{month:"Mars",amount:4899,coverage:"20 %",revenue:"2000",id:"fc9d"},{month:"April",amount:2344,coverage:"30 %",revenue:"1055",id:"1d15"}].slice().sort((t,n)=>{const r=l.sortKey;return!r||t[r]===n[r]?0:l.direction==="ascending"?t[r]>n[r]?1:-1:t[r]<n[r]?1:-1});return e.jsxs(a,{sortState:l,setSortState:o,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.EditableRow,{editableContent:n=>e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx($,{onClick:()=>{n()},children:"Lukk"})}),editButtonAriaDescribedby:t.id,onEdit:()=>{console.log("redigerrer rad")},children:[e.jsx(a.DataCell,{id:t.id,alignment:"right",children:t.month}),e.jsx(a.DataCell,{alignment:"right",children:t.amount}),e.jsx(a.DataCell,{children:t.coverage}),e.jsx(a.DataCell,{alignment:"right",children:t.revenue})]},t.id))})]})}};h.parameters=c;const g={render:b=>{const[l,o]=x.useState({direction:"none"}),s=[{deadline:"10.04.2023",category:"Kategori 1",task:"Mottatt tilbakemelding",name:"BARMEN OG BORGHEIM",status:"Tilgjengelig",id:"9f78"},{deadline:"12.04.2023",category:"Kategori 2",task:"Klage på vedtak",name:"LIMERICKS PARTNER ASA",status:"Ny",id:"4b90"},{deadline:"13.04.2023",category:"Kategori 3",task:"Mottatt tilbakemelding",name:"ENCKEL OG WIRCKE LØSNINGER",status:"Ny",id:"8c6f"},{deadline:"15.04.2023",category:"Kategori 1",task:"Klage på vedtak",name:"CORWOOD INDUSTRIES NORGE",status:"Tilgjengelig",id:"8182"},{deadline:"22.04.2023",category:"Kategori 3",task:"Medhold klage",name:"SLANTED N CHANTED",status:"Under arbeid",id:"85cd"}].slice().sort((t,n)=>{const r=l.sortKey;return!r||t[r]===n[r]?0:l.direction==="ascending"?t[r]>n[r]?1:-1:t[r]<n[r]?1:-1});return e.jsxs(e.Fragment,{children:[e.jsxs(ae,{children:["Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør","vi legge på sr-only tekster som th for at det skulle bli lettere for","skjermleserbrukere å forstå tabellen."]}),e.jsxs(a,{caption:"Arbeidsoppgaver",sortState:l,setSortState:o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"deadline",isSortable:!0,children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"category",isSortable:!0,children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",sortKey:"name",isSortable:!0,children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Rediger-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Kopier-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Slett-funksjon"})})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{id:t.id,children:t.deadline}),e.jsx(a.DataCell,{children:t.category}),e.jsx(a.DataCell,{children:t.task}),e.jsx(a.DataCell,{children:t.name}),e.jsx(a.DataCell,{children:t.status}),e.jsx(a.DataCell,{children:e.jsx(S,{svgPath:q,children:"Rediger"})}),e.jsx(a.DataCell,{children:e.jsx(S,{svgPath:Q,children:"Kopier"})}),e.jsx(a.DataCell,{children:e.jsx(S,{svgPath:Z,children:"Slett"})})]},t.id))})]})]})}};g.parameters=c;const m={render:b=>{const l=[{fastsatt:"31.01.2018",avgiftstype:"OR",avgiftsgruppe:"525",beloep:"6045",status:"Iverksatt",id:"1"},{fastsatt:"31.05.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6033",status:"Iverksatt",id:"2"},{fastsatt:"02.03.2018",avgiftstype:"AR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"3"},{fastsatt:"03.03.2018",avgiftstype:"DR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"4"},{fastsatt:"04.01.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"5"}],[o,d]=x.useState([]),[s,t]=x.useState(!1);return e.jsxs(a,{caption:"avgiftsstatus",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(f,{checked:s,hideLabel:!0,onChange:()=>{s&&d([]),t(!s)},children:"velg alle rader"})}),e.jsx(a.HeaderCell,{children:"Fastsatt"}),e.jsx(a.HeaderCell,{children:"avgiftstype"}),e.jsx(a.HeaderCell,{children:"avgiftsgruppe"}),e.jsx(a.HeaderCell,{children:"Beløp"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:l.map((n,r)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:e.jsx(f,{checked:s||o.some(D=>D===r),hideLabel:!0,onChange:D=>{s?(d(Array.from(Array(l.length).keys()).filter(j=>j!==r)),t(!1)):D.target.checked?d([r,...o]):d(o.filter(j=>j!==r))},children:`Velg ${n.fastsatt}`})}),e.jsx(a.DataCell,{as:"th",scope:"row",children:n.fastsatt}),e.jsx(a.DataCell,{children:n.avgiftstype}),e.jsx(a.DataCell,{children:n.avgiftsgruppe}),e.jsx(a.DataCell,{children:n.beloep}),e.jsx(a.DataCell,{children:n.status})]},n.id))})]})}};m.parameters=c;const u={render:b=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{caption:"Firmaoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:H.map(l=>e.jsxs(a.Row,{className:"stripedTable",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:l.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:l.id,children:l.firma}),e.jsx(a.DataCell,{children:l.timestamp}),e.jsx(a.DataCell,{children:l.status}),e.jsx(a.DataCell,{children:l.eta})]},l.id))})]}),e.jsxs(a,{caption:"Firmaoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:H.map((l,o)=>e.jsxs(a.Row,{className:o%2===0?"oddRow":"evenRow",expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:l.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:l.id,children:l.firma}),e.jsx(a.DataCell,{children:l.timestamp}),e.jsx(a.DataCell,{children:l.status}),e.jsx(a.DataCell,{children:l.eta})]},l.id))})]})]})};u.parameters=c;var v,R,k;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:"{} satisfies Story",...(k=(R=y.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var K,w,E;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var A,B,N;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(B=C.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var I,F,O;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [sortState, setSortState] = useState<SortState>({
      direction: 'none'
    });
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
} satisfies Story`,...(O=(F=T.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,M,L;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(M=h.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var _,G,U;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,W,J;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(W=m.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var X,Y,z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Table caption={'Firmaoversikt'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Firma'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Forventet behandlet'}
              </Table.HeaderCell>
              <Table.HeaderCell as={'td'} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(row => {
            return <Table.Row key={row.id}
            // .stripedTable:nth-of-type(even) { background-color: var(--palette-graphite-5);}
            className={'stripedTable'} expandableContent={<div className={'emptyExpandedTableRow'}></div>} expandButtonAriaDescribedby={row.id} isExpandable>
                  <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
                  <Table.DataCell>{row.timestamp}</Table.DataCell>
                  <Table.DataCell>{row.status}</Table.DataCell>
                  <Table.DataCell>{row.eta}</Table.DataCell>
                </Table.Row>;
          })}
          </Table.Body>
        </Table>
        <Table caption={'Firmaoversikt'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Firma'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Forventet behandlet'}
              </Table.HeaderCell>
              <Table.HeaderCell as={'td'} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row, index) => {
            return <Table.Row key={row.id}
            // .evenRow { background-color: var(--palette-graphite-5); }
            // .oddRow { background-color: var(--palette-graphite-0); }
            className={index % 2 === 0 ? 'oddRow' : 'evenRow'} expandButtonPosition={'right'} expandableContent={<div className={'emptyExpandedTableRow'}></div>} expandButtonAriaDescribedby={row.id} isExpandable>
                  <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
                  <Table.DataCell>{row.timestamp}</Table.DataCell>
                  <Table.DataCell>{row.status}</Table.DataCell>
                  <Table.DataCell>{row.eta}</Table.DataCell>
                </Table.Row>;
          })}
          </Table.Body>
        </Table>
      </>;
  }
} satisfies Story`,...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const ne=["Preview","Variants","Sortable","Expandable","Editable","WithEmptyHeaders","Selectable","WithStripes"],ge=Object.freeze(Object.defineProperty({__proto__:null,Editable:h,Expandable:T,Preview:y,Selectable:m,Sortable:C,Variants:p,WithEmptyHeaders:g,WithStripes:u,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{T as E,C as S,ge as T,p as V,g as W,h as a,m as b,u as c};
//# sourceMappingURL=Table.stories-DryX1vok.js.map
