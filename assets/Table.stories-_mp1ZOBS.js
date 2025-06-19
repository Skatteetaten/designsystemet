import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-D_ouKaeX.js";import{B as z,I as j}from"./index-CUnERQXD.js";import{C as v}from"./index-CReUDGGp.js";import{E as q,p as $,D as Q}from"./index-BQO_0U1F.js";import{g as Z,T as a}from"./index-CuNl2EzI.js";import{P as ee}from"./index-BAA7SjBM.js";import{c as d}from"./helpers-DjiZIot2.js";import{e as c}from"./stories.utils-WEsnq5G6.js";const ae={component:a,title:"Komponenter/Table/Table",argTypes:{canBeManuallyFocused:{table:{category:d.props}},children:{control:!1,table:{category:d.props}},variant:{table:{category:d.props,defaultValue:{summary:Z()}}},showCaption:{table:{category:d.props}},sortState:{control:!1,table:{category:d.props}},setSortState:{control:!1,table:{category:d.props}},caption:{table:{category:d.props}},hasFullWidth:{table:{category:d.props}},rowInEditModeId:{table:{category:d.props}}},args:{caption:"Dette er en tabell.",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]},"body"),e.jsx(a.Sum,{valueAlignment:"left",colSpan:2,children:"32,000"},"sum")]}},x={},p={render:b=>{const r="Klage på vedtak";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Standard table",e.jsxs(a,{caption:"Dette er en standard tabell",variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.03.2023"}),e.jsx(a.DataCell,{children:"Kategori 2"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"HAIKU HEDGE ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"11.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 4"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"ATMOSPHERIC EXPLORER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Compact table",e.jsxs(a,{caption:"Dette er en kompakt tabell.",variant:"compact",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:r}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]})]})}};p.parameters=c;const C={render:b=>{const[r,t]=y.useState({direction:"none"}),o=[{player:"Ole",score:100},{player:"Dole",score:20},{player:"Doffen",score:30}].slice().sort((n,s)=>{const l=r.sortKey;return!l||n[l]===s[l]?0:r.direction==="ascending"?n[l]>s[l]?1:-1:n[l]<s[l]?1:-1});return e.jsxs(a,{sortState:r,setSortState:t,caption:"High scores",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"player",isSortable:!0,children:"Player"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"score",isSortable:!0,children:"High Score"})]})}),e.jsx(a.Body,{children:o.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"center",children:n.player}),e.jsx(a.DataCell,{alignment:"right",children:n.score})]},n.player))})]})}};C.parameters=c;const g={render:b=>{const[r,t]=y.useState({direction:"none"}),o=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}].slice().sort((n,s)=>{const l=r.sortKey;return!l||n[l]===s[l]?0:r.direction==="ascending"?n[l]>s[l]?1:-1:n[l]<s[l]?1:-1});return e.jsxs(a,{caption:"Firmaoversikt",sortState:r,setSortState:t,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:o.map(n=>e.jsxs(a.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:n.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:n.id,children:n.firma}),e.jsx(a.DataCell,{children:n.timestamp}),e.jsx(a.DataCell,{children:n.status}),e.jsx(a.DataCell,{children:n.eta})]},n.id))})]})}};g.parameters=c;const T={render:b=>{const[r,t]=y.useState({direction:"none"}),o=[{month:"Januar",amount:5426,coverage:"100 %",revenue:"1000",id:"9f78"},{month:"Februar",amount:5432,coverage:"50 %",revenue:"500",id:"6925"},{month:"Mars",amount:4899,coverage:"20 %",revenue:"2000",id:"fc9d"},{month:"April",amount:2344,coverage:"30 %",revenue:"1055",id:"1d15"}].slice().sort((n,s)=>{const l=r.sortKey;return!l||n[l]===s[l]?0:r.direction==="ascending"?n[l]>s[l]?1:-1:n[l]<s[l]?1:-1});return e.jsxs(a,{sortState:r,setSortState:t,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"})]})}),e.jsx(a.Body,{children:o.map(n=>e.jsxs(a.EditableRow,{editableContent:s=>e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(z,{onClick:()=>{s()},children:"Lukk"})}),editButtonAriaDescribedby:n.id,onEdit:()=>{console.log("redigerrer rad")},children:[e.jsx(a.DataCell,{id:n.id,alignment:"right",children:n.month}),e.jsx(a.DataCell,{alignment:"right",children:n.amount}),e.jsx(a.DataCell,{children:n.coverage}),e.jsx(a.DataCell,{alignment:"right",children:n.revenue})]},n.id))})]})}};T.parameters=c;const h={render:b=>{const[r,t]=y.useState({direction:"none"}),o=[{deadline:"10.04.2023",category:"Kategori 1",task:"Mottatt tilbakemelding",name:"BARMEN OG BORGHEIM",status:"Tilgjengelig",id:"9f78"},{deadline:"12.04.2023",category:"Kategori 2",task:"Klage på vedtak",name:"LIMERICKS PARTNER ASA",status:"Ny",id:"4b90"},{deadline:"13.04.2023",category:"Kategori 3",task:"Mottatt tilbakemelding",name:"ENCKEL OG WIRCKE LØSNINGER",status:"Ny",id:"8c6f"},{deadline:"15.04.2023",category:"Kategori 1",task:"Klage på vedtak",name:"CORWOOD INDUSTRIES NORGE",status:"Tilgjengelig",id:"8182"},{deadline:"22.04.2023",category:"Kategori 3",task:"Medhold klage",name:"SLANTED N CHANTED",status:"Under arbeid",id:"85cd"}].slice().sort((n,s)=>{const l=r.sortKey;return!l||n[l]===s[l]?0:r.direction==="ascending"?n[l]>s[l]?1:-1:n[l]<s[l]?1:-1});return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{children:["Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør","vi legge på sr-only tekster som th for at det skulle bli lettere for","skjermleserbrukere å forstå tabellen."]}),e.jsxs(a,{caption:"Arbeidsoppgaver",sortState:r,setSortState:t,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"deadline",isSortable:!0,children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"category",isSortable:!0,children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",sortKey:"name",isSortable:!0,children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Rediger-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Kopier-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Slett-funksjon"})})]})}),e.jsx(a.Body,{children:o.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{id:n.id,children:n.deadline}),e.jsx(a.DataCell,{children:n.category}),e.jsx(a.DataCell,{children:n.task}),e.jsx(a.DataCell,{children:n.name}),e.jsx(a.DataCell,{children:n.status}),e.jsx(a.DataCell,{children:e.jsx(j,{svgPath:q,children:"Rediger"})}),e.jsx(a.DataCell,{children:e.jsx(j,{svgPath:$,children:"Kopier"})}),e.jsx(a.DataCell,{children:e.jsx(j,{svgPath:Q,children:"Slett"})})]},n.id))})]})]})}};h.parameters=c;const m={render:b=>{const r=[{fastsatt:"31.01.2018",avgiftstype:"OR",avgiftsgruppe:"525",beloep:"6045",status:"Iverksatt",id:"1"},{fastsatt:"31.05.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6033",status:"Iverksatt",id:"2"},{fastsatt:"02.03.2018",avgiftstype:"AR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"3"},{fastsatt:"03.03.2018",avgiftstype:"DR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"4"},{fastsatt:"04.01.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"5"}],[t,i]=y.useState([]),[o,n]=y.useState(!1);return e.jsxs(a,{caption:"avgiftsstatus",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(v,{checked:o,hideLabel:!0,onChange:()=>{o&&i([]),n(!o)},children:"velg alle rader"})}),e.jsx(a.HeaderCell,{children:"Fastsatt"}),e.jsx(a.HeaderCell,{children:"avgiftstype"}),e.jsx(a.HeaderCell,{children:"avgiftsgruppe"}),e.jsx(a.HeaderCell,{children:"Beløp"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:r.map((s,l)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:e.jsx(v,{checked:o||t.some(f=>f===l),hideLabel:!0,onChange:f=>{o?(i(Array.from(Array(r.length).keys()).filter(D=>D!==l)),n(!1)):f.target.checked?i([l,...t]):i(t.filter(D=>D!==l))},children:`Velg ${s.fastsatt}`})}),e.jsx(a.DataCell,{as:"th",scope:"row",children:s.fastsatt}),e.jsx(a.DataCell,{children:s.avgiftstype}),e.jsx(a.DataCell,{children:s.avgiftsgruppe}),e.jsx(a.DataCell,{children:s.beloep}),e.jsx(a.DataCell,{children:s.status})]},s.id))})]})}};m.parameters=c;const u={render:b=>{const r=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{caption:"Firmaoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:r.map(t=>e.jsxs(a.Row,{className:"stripedTable",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:t.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:t.id,children:t.firma}),e.jsx(a.DataCell,{children:t.timestamp}),e.jsx(a.DataCell,{children:t.status}),e.jsx(a.DataCell,{children:t.eta})]},t.id))})]}),e.jsxs(a,{caption:"Firmaoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:r.map((t,i)=>e.jsxs(a.Row,{className:i%2===0?"oddRow":"evenRow",expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:t.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:t.id,children:t.firma}),e.jsx(a.DataCell,{children:t.timestamp}),e.jsx(a.DataCell,{children:t.status}),e.jsx(a.DataCell,{children:t.eta})]},t.id))})]})]})}};u.parameters=c;var S,H,k;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:"{} satisfies Story",...(k=(H=x.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var R,K,w;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(K=p.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var E,B,A;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(B=C.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var N,I,F;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(I=g.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var M,P,O;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(P=T.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var L,U,_;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,V,W;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var J,X,Y;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
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
} satisfies Story`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ne=["Preview","Variants","Sortable","Expandable","Editable","WithEmptyHeaders","Selectable","WithStripes"],pe=Object.freeze(Object.defineProperty({__proto__:null,Editable:T,Expandable:g,Preview:x,Selectable:m,Sortable:C,Variants:p,WithEmptyHeaders:h,WithStripes:u,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{g as E,C as S,pe as T,p as V,h as W,T as a,m as b,u as c};
//# sourceMappingURL=Table.stories-_mp1ZOBS.js.map
