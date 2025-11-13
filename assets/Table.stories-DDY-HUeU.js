import{j as e,f as g,r as d,n as we}from"./iframe-CdXtTKZQ.js";import{B as I,I as U}from"./index-CDWtp_lT.js";import{C as J}from"./index-CLKUz3Po.js";import{E as Ee,s as Ke,D as Be}from"./index-D0xxaDHU.js";import{g as Ae,T as a}from"./index-D_51gR3W.js";import{P as Ie}from"./index-DUrzBgqO.js";import{e as C}from"./stories.utils-CZ5hej_8.js";import{T as _}from"./DatePickerCalendar-ByRci1Oe.js";const Fe={component:a,title:"Komponenter/Table/Table",argTypes:{canBeManuallyFocused:{table:{category:g.props}},children:{control:!1,table:{category:g.props}},variant:{table:{category:g.props,defaultValue:{summary:Ae()}}},showCaption:{table:{category:g.props}},sortState:{control:!1,table:{category:g.props}},setSortState:{control:!1,table:{category:g.props}},caption:{table:{category:g.props}},hasFullWidth:{table:{category:g.props}},rowInEditModeId:{table:{category:g.props}}},args:{caption:"Dette er en tabell.",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",alignment:"left",children:"Expenditure"})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{alignment:"right",children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{alignment:"right",children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{alignment:"right",children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{alignment:"right",children:"9,000"})]})]},"body"),e.jsx(a.Sum,{valueAlignment:"right",colSpan:2,children:"32,000"},"sum")]}},R={},f={render:h=>{const s="Klage på vedtak";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Standard table",e.jsxs(a,{caption:"Dette er en standard tabell",variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.03.2023"}),e.jsx(a.DataCell,{children:"Kategori 2"}),e.jsx(a.DataCell,{children:s}),e.jsx(a.DataCell,{children:"HAIKU HEDGE ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"11.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 4"}),e.jsx(a.DataCell,{children:s}),e.jsx(a.DataCell,{children:"ATMOSPHERIC EXPLORER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Compact table",e.jsxs(a,{caption:"Dette er en kompakt tabell.",variant:"compact",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:s}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"10.04.2023"}),e.jsx(a.DataCell,{children:"Kategori 1"}),e.jsx(a.DataCell,{children:s}),e.jsx(a.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(a.DataCell,{children:"NY"})]})]})]})]})]})}};f.parameters=C;const x={render:h=>{const[s,r]=d.useState({direction:"none"}),b=[{player:"Ole",score:100},{player:"Dole",score:20},{player:"Doffen",score:30}].slice().sort((n,o)=>{const t=s.sortKey;return!t||n[t]===o[t]?0:s.direction==="ascending"?n[t]>o[t]?1:-1:n[t]<o[t]?1:-1});return e.jsxs(a,{sortState:s,setSortState:r,caption:"High scores",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"player",isSortable:!0,children:"Player"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"score",isSortable:!0,children:"High Score"})]})}),e.jsx(a.Body,{children:b.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"center",children:n.player}),e.jsx(a.DataCell,{alignment:"right",children:n.score})]},n.player))})]})}};x.parameters=C;const y={render:h=>{const[s,r]=d.useState({direction:"none"}),b=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}].slice().sort((n,o)=>{const t=s.sortKey;return!t||n[t]===o[t]?0:s.direction==="ascending"?n[t]>o[t]?1:-1:n[t]<o[t]?1:-1});return e.jsxs(a,{caption:"Firmaoversikt",sortState:s,setSortState:r,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:b.map(n=>e.jsxs(a.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:n.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:n.id,children:n.firma}),e.jsx(a.DataCell,{children:n.timestamp}),e.jsx(a.DataCell,{children:n.status}),e.jsx(a.DataCell,{children:n.eta})]},n.id))})]})}};y.parameters=C;const v={render:h=>{const[s,r]=d.useState({direction:"none"}),b=[{month:"Januar",amount:5426,coverage:"100 %",revenue:"1000",id:"9f78"},{month:"Februar",amount:5432,coverage:"50 %",revenue:"500",id:"6925"},{month:"Mars",amount:4899,coverage:"20 %",revenue:"2000",id:"fc9d"},{month:"April",amount:2344,coverage:"30 %",revenue:"1055",id:"1d15"}].slice().sort((n,o)=>{const t=s.sortKey;return!t||n[t]===o[t]?0:s.direction==="ascending"?n[t]>o[t]?1:-1:n[t]<o[t]?1:-1});return e.jsxs(a,{sortState:s,setSortState:r,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"})]})}),e.jsx(a.Body,{children:b.map(n=>e.jsxs(a.EditableRow,{editableContent:o=>e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(I,{onClick:()=>{o()},children:"Lukk"})}),editButtonAriaDescribedby:n.id,onEdit:()=>{console.log("redigerrer rad")},children:[e.jsx(a.DataCell,{id:n.id,alignment:"right",children:n.month}),e.jsx(a.DataCell,{alignment:"right",children:n.amount}),e.jsx(a.DataCell,{children:n.coverage}),e.jsx(a.DataCell,{alignment:"right",children:n.revenue})]},n.id))})]})}};v.parameters=C;const S={render:h=>{const[s,r]=d.useState({direction:"none"}),b=[{deadline:"10.04.2023",category:"Kategori 1",task:"Mottatt tilbakemelding",name:"BARMEN OG BORGHEIM",status:"Tilgjengelig",id:"9f78"},{deadline:"12.04.2023",category:"Kategori 2",task:"Klage på vedtak",name:"LIMERICKS PARTNER ASA",status:"Ny",id:"4b90"},{deadline:"13.04.2023",category:"Kategori 3",task:"Mottatt tilbakemelding",name:"ENCKEL OG WIRCKE LØSNINGER",status:"Ny",id:"8c6f"},{deadline:"15.04.2023",category:"Kategori 1",task:"Klage på vedtak",name:"CORWOOD INDUSTRIES NORGE",status:"Tilgjengelig",id:"8182"},{deadline:"22.04.2023",category:"Kategori 3",task:"Medhold klage",name:"SLANTED N CHANTED",status:"Under arbeid",id:"85cd"}].slice().sort((n,o)=>{const t=s.sortKey;return!t||n[t]===o[t]?0:s.direction==="ascending"?n[t]>o[t]?1:-1:n[t]<o[t]?1:-1});return e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:["Hvis vi har en tabell med med minst 3 kolonner uten kolonnetitler så bør","vi legge på sr-only tekster som th for at det skulle bli lettere for","skjermleserbrukere å forstå tabellen."]}),e.jsxs(a,{caption:"Arbeidsoppgaver",sortState:s,setSortState:r,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"deadline",isSortable:!0,children:"Frist"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"category",isSortable:!0,children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",sortKey:"name",isSortable:!0,children:"navn"}),e.jsx(a.HeaderCell,{scope:"col",children:"status"}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Rediger-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Kopier-funksjon"})}),e.jsx(a.HeaderCell,{children:e.jsx("span",{className:"srOnly",children:"Slett-funksjon"})})]})}),e.jsx(a.Body,{children:b.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{id:n.id,children:n.deadline}),e.jsx(a.DataCell,{children:n.category}),e.jsx(a.DataCell,{children:n.task}),e.jsx(a.DataCell,{children:n.name}),e.jsx(a.DataCell,{children:n.status}),e.jsx(a.DataCell,{children:e.jsx(U,{svgPath:Ee,children:"Rediger"})}),e.jsx(a.DataCell,{children:e.jsx(U,{svgPath:Ke,children:"Kopier"})}),e.jsx(a.DataCell,{children:e.jsx(U,{svgPath:Be,children:"Slett"})})]},n.id))})]})]})}};S.parameters=C;const D={render:h=>{const s=[{fastsatt:"31.01.2018",avgiftstype:"OR",avgiftsgruppe:"525",beloep:"6045",status:"Iverksatt",id:"1"},{fastsatt:"31.05.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6033",status:"Iverksatt",id:"2"},{fastsatt:"02.03.2018",avgiftstype:"AR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"3"},{fastsatt:"03.03.2018",avgiftstype:"DR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"4"},{fastsatt:"04.01.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"5"}],[r,m]=d.useState([]),[b,n]=d.useState(!1);return e.jsxs(a,{caption:"avgiftsstatus",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td",children:e.jsx(J,{checked:b,hideLabel:!0,onChange:()=>{b&&m([]),n(!b)},children:"velg alle rader"})}),e.jsx(a.HeaderCell,{children:"Fastsatt"}),e.jsx(a.HeaderCell,{children:"avgiftstype"}),e.jsx(a.HeaderCell,{alignment:"right",children:"avgiftsgruppe"}),e.jsx(a.HeaderCell,{alignment:"right",children:"Beløp"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:s.map((o,t)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:e.jsx(J,{checked:b||r.some(T=>T===t),hideLabel:!0,onChange:T=>{b?(m(Array.from(Array(s.length).keys()).filter(H=>H!==t)),n(!1)):T.target.checked?m([t,...r]):m(r.filter(H=>H!==t))},children:`Velg ${o.fastsatt}`})}),e.jsx(a.DataCell,{as:"th",scope:"row",children:o.fastsatt}),e.jsx(a.DataCell,{children:o.avgiftstype}),e.jsx(a.DataCell,{alignment:"right",children:o.avgiftsgruppe}),e.jsx(a.DataCell,{alignment:"right",children:o.beloep}),e.jsx(a.DataCell,{children:o.status})]},o.id))})]})}};D.parameters=C;const j={render:h=>{const s=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag",ansatte:[{id:"efgh",navn:"Per Olsen",fnr:"11012020 99999",beskrivelse:"Ingen flere opplysninger"}]},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min",ansatte:[{id:"mnop",navn:"Bryce Navnesen",fnr:"02012020 99999",beskrivelse:"noen flere opplysninger"},{id:"qrst",navn:"Alice Middleman",fnr:"03012020 99999",beskrivelse:"mange flere opplysninger"}]},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"–",ansatte:[{id:"yzab",navn:"Kai Mossige",fnr:"01012020 99999",beskrivelse:"finnes flere opplysninger?"}]},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"–",ansatte:[{id:"ghij",navn:"Kari Saksbehandler",fnr:"01012020 99999",beskrivelse:"Ingen flere opplysninger"},{id:"klmn",navn:"Bob Egil Hansen",fnr:"04012020 99999",beskrivelse:"Ingen andre opplysninger"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{caption:"Firmaoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:s.map(r=>e.jsxs(a.Row,{className:"stripedTable",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:r.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:r.id,children:r.firma}),e.jsx(a.DataCell,{children:r.timestamp}),e.jsx(a.DataCell,{children:r.status}),e.jsx(a.DataCell,{children:r.eta})]},r.id))})]}),e.jsxs(a,{caption:"Firmaoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Firma"}),e.jsx(a.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Status"}),e.jsx(a.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:s.map((r,m)=>e.jsxs(a.Row,{className:m%2===0?"oddRow":"evenRow",expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:r.id,isExpandable:!0,children:[e.jsx(a.DataCell,{id:r.id,children:r.firma}),e.jsx(a.DataCell,{children:r.timestamp}),e.jsx(a.DataCell,{children:r.status}),e.jsx(a.DataCell,{children:r.eta})]},r.id))})]})]})}};j.parameters=C;const N={render:h=>{const[s,r]=d.useState([{id:"abc",dato:"23.7.2025",personNumber:"14487219408",firstName:"Treliters",lastName:"Geir",amount:"641693"},{id:"def",dato:"23.8.2025",personNumber:"70070903485",firstName:"Ringlete",lastName:"Under",amount:"139914"},{id:"ghi",dato:"23.9.2025",personNumber:"70168226499",firstName:"Uskikka",lastName:"Resistens",amount:"667946"}]),[m,b]=d.useState({direction:"none"}),[n,o]=d.useState(4),[t,T]=d.useState(!1),[H,G]=d.useState(null),F=d.useRef(null),X=d.useRef(null),xe=s.slice().sort((l,i)=>{const c=m.sortKey;return!c||l[c]===i[c]?0:m.direction==="ascending"?l[c]>i[c]?1:-1:l[c]<i[c]?1:-1}),ye=(l,i)=>{r(c=>c.map(p=>p.id===l?{...p,...i}:p))},k=(l,i)=>{if(l==="personNumber"){if(i.trim()==="")return"Fødselsnummer må fylles ut";if(i.length!==11)return"Fødselsnummer må være 11 siffer"}if(l==="lastName"&&i.trim()==="")return"Etternavn må fylles ut";if(l==="amount"){if(i.trim()==="")return"Beløp må fylles ut";if(i!==""&&Number.isNaN(Number(i)))return"Beløp må være et tall"}return""},V=(l,i,c,p)=>{const[w,ve]=d.useState(l.personNumber),[E,Se]=d.useState(l.lastName),[K,De]=d.useState(l.amount),[je,P]=d.useState(""),[Ne,M]=d.useState(""),[He,L]=d.useState(""),O=(u,B,A)=>{const ke=k(u,B);A(ke)},Re=()=>{const u=k("personNumber",w),B=k("lastName",E),A=k("amount",K);P(u),M(B),L(A),!u&&!B&&!A&&i({personNumber:w,lastName:E,amount:K})};return e.jsxs("div",{className:"editableContent",children:[e.jsxs("div",{className:"flex gapM bottomSpacingXL",children:[e.jsx(_,{label:"Fødselsnummer (11 siffer)",value:w,errorMessage:je,onChange:u=>{ve(u.target.value),P("")},onBlur:()=>O("personNumber",w,P)}),e.jsx(_,{label:"Etternavn",value:E,errorMessage:Ne,onChange:u=>{Se(u.target.value),M("")},onBlur:()=>O("lastName",E,M)})]}),e.jsx(_,{label:"Beløp i kroner",className:"textField150 bottomSpacingXL",value:K,errorMessage:He,onChange:u=>{De(u.target.value),L("")},onBlur:()=>O("amount",K,L)}),e.jsxs("div",{className:"flex gapS",children:[e.jsx(I,{onClick:Re,children:"Lagre"}),e.jsx(I,{variant:"secondary",onClick:c,children:"Avbryt"})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:F,className:"bottomSpacingL",onClick:()=>{T(!0),setTimeout(()=>{var l;return(l=X.current)==null?void 0:l.focus()},0)},children:"Legg til person"}),e.jsxs(a,{caption:"Personoversikt",variant:"compact",rowInEditModeId:t?"addPerson":void 0,sortState:m,setSortState:b,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",sortKey:"dato",isSortable:!0,children:"Sist endret"}),e.jsx(a.HeaderCell,{scope:"col",children:"Fødselsnummer"}),e.jsx(a.HeaderCell,{scope:"col",children:"Navn"}),e.jsx(a.HeaderCell,{scope:"col",alignment:"right",children:"Beløp"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsxs(a.Body,{children:[t&&e.jsx(a.EditableRow,{id:"addPerson",editButtonPosition:"right",editableContent:l=>V({personNumber:"",lastName:"",amount:""},i=>{const c={id:n.toString(),dato:new Date().toLocaleDateString("no-NO"),personNumber:i.personNumber,firstName:"",lastName:i.lastName,amount:i.amount};r(p=>[c,...p]),G(c.id),o(p=>p+1),T(!1),l(),setTimeout(()=>{var p;return(p=F.current)==null?void 0:p.focus()},0),setTimeout(()=>G(null),3e3)},()=>{T(!1),l(),setTimeout(()=>{var i;return(i=F.current)==null?void 0:i.focus()},0)}),isNew:!0,children:e.jsx(a.DataCell,{colSpan:4,children:e.jsx("div",{ref:X,tabIndex:-1,className:"tabIndexNoOutline",children:"Legg til person"})})}),xe.map(l=>e.jsxs(a.EditableRow,{className:l.id===H?"highlightRow":"",editButtonPosition:"right",editableContent:i=>V({personNumber:l.personNumber,lastName:l.lastName,amount:l.amount},c=>{ye(l.id,{dato:new Date().toLocaleDateString("no-NO"),personNumber:c.personNumber,lastName:c.lastName,amount:c.amount}),i()},()=>{i()}),children:[e.jsx(a.DataCell,{children:l.dato}),e.jsx(a.DataCell,{children:we(l.personNumber)}),e.jsx(a.DataCell,{children:`${l.firstName} ${l.lastName}`}),e.jsx(a.DataCell,{alignment:"right",children:`${l.amount} kr`})]},l.id))]})]})]})}};N.parameters=C;var W,Y,$;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:"{} satisfies Story",...($=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,q,Q;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(q=f.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(te=y.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,se,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,de,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var be,me,pe;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
            <Table.HeaderCell as={'td'}>
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
            <Table.HeaderCell alignment={'right'}>
              {'avgiftsgruppe'}
            </Table.HeaderCell>
            <Table.HeaderCell alignment={'right'}>{'Beløp'}</Table.HeaderCell>
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
              <Table.DataCell alignment={'right'}>
                {item.avgiftsgruppe}
              </Table.DataCell>
              <Table.DataCell alignment={'right'}>{item.beloep}</Table.DataCell>
              <Table.DataCell>{item.status}</Table.DataCell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...(pe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ge,Ce;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var he,Te,fe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [data, setData] = useState([{
      id: 'abc',
      dato: '23.7.2025',
      personNumber: '14487219408',
      firstName: 'Treliters',
      lastName: 'Geir',
      amount: '641693'
    }, {
      id: 'def',
      dato: '23.8.2025',
      personNumber: '70070903485',
      firstName: 'Ringlete',
      lastName: 'Under',
      amount: '139914'
    }, {
      id: 'ghi',
      dato: '23.9.2025',
      personNumber: '70168226499',
      firstName: 'Uskikka',
      lastName: 'Resistens',
      amount: '667946'
    }]);
    const [sortState, setSortState] = useState<SortState>({
      direction: 'none'
    });
    const [nextId, setNextId] = useState(4);
    const [addRow, setAddRow] = useState<boolean>(false);
    const [highlightedRowId, setHighlightedRowId] = useState<string | null>(null);
    const addPersonButtonRef = useRef<HTMLButtonElement>(null);
    const addPersonRef = useRef<HTMLDivElement>(null);
    const sortedData = data.slice().sort((a, b) => {
      const sortKey = sortState.sortKey as keyof (typeof data)[0];
      if (!sortKey) return 0;
      if (a[sortKey] === b[sortKey]) return 0;
      if (sortState.direction === 'ascending') return a[sortKey] > b[sortKey] ? 1 : -1;
      return a[sortKey] < b[sortKey] ? 1 : -1;
    });
    const handleSaveRow = (id: string, updated: Partial<(typeof data)[0]>): void => {
      setData(prev => prev.map(row => row.id === id ? {
        ...row,
        ...updated
      } : row));
    };
    const validateField = (field: string, value: string): string => {
      if (field === 'personNumber') {
        if (value.trim() === '') return 'Fødselsnummer må fylles ut';
        if (value.length !== 11) return 'Fødselsnummer må være 11 siffer';
      }
      if (field === 'lastName') {
        if (value.trim() === '') return 'Etternavn må fylles ut';
      }
      if (field === 'amount') {
        if (value.trim() === '') return 'Beløp må fylles ut';
        if (value !== '' && Number.isNaN(Number(value))) return 'Beløp må være et tall';
      }
      return '';
    };
    const createFormComponent = (initialData: {
      personNumber: string;
      lastName: string;
      amount: string;
    }, onSave: (data: {
      personNumber: string;
      lastName: string;
      amount: string;
    }) => void, onCancel: () => void, isAdd?: boolean): JSX.Element => {
      const [personNumber, setPersonNumber] = useState(initialData.personNumber);
      const [lastName, setLastName] = useState(initialData.lastName);
      const [amount, setAmount] = useState(initialData.amount);
      const [personNumberError, setPersonNumberError] = useState('');
      const [lastNameError, setLastNameError] = useState('');
      const [amountError, setAmountError] = useState('');
      const handleBlur = (field: string, value: string, setError: (msg: string) => void): void => {
        const error = validateField(field, value);
        setError(error);
      };
      const handleSave = (): void => {
        const personNumberErr = validateField('personNumber', personNumber);
        const lastNameErr = validateField('lastName', lastName);
        const amountErr = validateField('amount', amount);
        setPersonNumberError(personNumberErr);
        setLastNameError(lastNameErr);
        setAmountError(amountErr);
        if (!personNumberErr && !lastNameErr && !amountErr) {
          onSave({
            personNumber,
            lastName,
            amount
          });
        }
      };
      return <div className={'editableContent'}>
          <div className={'flex gapM bottomSpacingXL'}>
            <TextField label={'Fødselsnummer (11 siffer)'} value={personNumber} errorMessage={personNumberError} onChange={e => {
            setPersonNumber(e.target.value);
            setPersonNumberError('');
          }} onBlur={() => handleBlur('personNumber', personNumber, setPersonNumberError)} />
            <TextField label={'Etternavn'} value={lastName} errorMessage={lastNameError} onChange={e => {
            setLastName(e.target.value);
            setLastNameError('');
          }} onBlur={() => handleBlur('lastName', lastName, setLastNameError)} />
          </div>
          <TextField label={'Beløp i kroner'} className={'textField150 bottomSpacingXL'} value={amount} errorMessage={amountError} onChange={e => {
          setAmount(e.target.value);
          setAmountError('');
        }} onBlur={() => handleBlur('amount', amount, setAmountError)} />
          <div className={'flex gapS'}>
            <Button onClick={handleSave}>{'Lagre'}</Button>
            <Button variant={'secondary'} onClick={onCancel}>
              {'Avbryt'}
            </Button>
          </div>
        </div>;
    };
    return <>
        <Button ref={addPersonButtonRef} className={'bottomSpacingL'} onClick={(): void => {
        setAddRow(true);
        setTimeout(() => addPersonRef.current?.focus(), 0);
      }}>
          {'Legg til person'}
        </Button>
        <Table caption={'Personoversikt'} variant={'compact'} rowInEditModeId={addRow ? 'addPerson' : undefined} sortState={sortState} setSortState={setSortState}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'} sortKey={'dato'} isSortable>
                {'Sist endret'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Fødselsnummer'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'} alignment={'right'}>
                {'Beløp'}
              </Table.HeaderCell>
              <Table.HeaderCell as={'td'} />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {addRow && <Table.EditableRow id={'addPerson'} editButtonPosition={'right'} editableContent={(closeEditing: () => void): ReactNode => {
            return createFormComponent({
              personNumber: '',
              lastName: '',
              amount: ''
            }, data => {
              const newRow = {
                id: nextId.toString(),
                dato: new Date().toLocaleDateString('no-NO'),
                personNumber: data.personNumber,
                firstName: '',
                lastName: data.lastName,
                amount: data.amount
              };
              setData(prev => [newRow, ...prev]);
              setHighlightedRowId(newRow.id);
              setNextId(prev => prev + 1);
              setAddRow(false);
              closeEditing();
              setTimeout(() => addPersonButtonRef.current?.focus(), 0);
              setTimeout(() => setHighlightedRowId(null), 3000);
            }, () => {
              setAddRow(false);
              closeEditing();
              setTimeout(() => addPersonButtonRef.current?.focus(), 0);
            }, true);
          }} isNew>
                <Table.DataCell colSpan={4}>
                  <div ref={addPersonRef} tabIndex={-1} className={'tabIndexNoOutline'}>
                    {'Legg til person'}
                  </div>
                </Table.DataCell>
              </Table.EditableRow>}
            {sortedData.map(person => <Table.EditableRow key={person.id}
          // .highlightRow {
          //   animation-name: highlightRow;
          //   animation-duration: 3s;
          //   animation-iteration-count: 1;
          // }
          // @keyframes highlightRow {
          //   0%,
          //   99% {
          //     background-color: var(--palette-forest-10);
          //   }
          //   100% {
          //     background-color: unset;
          //   }
          // }
          className={person.id === highlightedRowId ? 'highlightRow' : ''} editButtonPosition={'right'} editableContent={(closeEditing: () => void): ReactNode => {
            return createFormComponent({
              personNumber: person.personNumber,
              lastName: person.lastName,
              amount: person.amount
            }, data => {
              handleSaveRow(person.id, {
                dato: new Date().toLocaleDateString('no-NO'),
                personNumber: data.personNumber,
                lastName: data.lastName,
                amount: data.amount
              });
              closeEditing();
            }, () => {
              closeEditing();
            });
          }}>
                <Table.DataCell>{person.dato}</Table.DataCell>
                <Table.DataCell>
                  {formatNationalIdentityNumber(person.personNumber)}
                </Table.DataCell>
                <Table.DataCell>{\`\${person.firstName} \${person.lastName}\`}</Table.DataCell>
                <Table.DataCell alignment={'right'}>
                  {\`\${person.amount} kr\`}
                </Table.DataCell>
              </Table.EditableRow>)}
          </Table.Body>
        </Table>
      </>;
  }
} satisfies Story`,...(fe=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};const Pe=["Preview","Variants","Sortable","Expandable","Editable","WithEmptyHeaders","Selectable","WithStripes","AddRow"],Je=Object.freeze(Object.defineProperty({__proto__:null,AddRow:N,Editable:v,Expandable:y,Preview:R,Selectable:D,Sortable:x,Variants:f,WithEmptyHeaders:S,WithStripes:j,__namedExportsOrder:Pe,default:Fe},Symbol.toStringTag,{value:"Module"}));export{N as A,y as E,x as S,Je as T,f as V,S as W,v as a,D as b,j as c};
//# sourceMappingURL=Table.stories-DDY-HUeU.js.map
