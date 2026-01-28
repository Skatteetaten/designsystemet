import{A as J,m as O,r as h,j as e,B as P}from"./iframe-CBOQuZmX.js";import{I as m,b as p}from"./index-BxmwhRWV.js";import{T as i,O as C}from"./index-BYntwts4.js";import{S as Q,D as A}from"./index-D76sDZza.js";import{q as U,a5 as Y,a9 as q,O as L,aa as X,ab as Z,ac as ee}from"./index-tEZUkoN5.js";import{a as ae}from"./index-CHesE-0v.js";import{B as k,P as le}from"./index-Dv_ndgGc.js";import{T as _}from"./index-Zmgbh9ba.js";import{T as a}from"./index-B9FmAAUs.js";import{P as j}from"./index-B4-BoLKC.js";import{S as x}from"./DatePickerCalendar-DF1H3gtV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgUqAK2.js";import"./index-haEYng38.js";import"./Help-4dQh7YC4.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./LabelWithHelp-vli_xocL.js";import"./TopBannerButton-DyppBcwQ.js";import"./floating-ui.react-D2pFwR57.js";import"./index-CT7HSXc_.js";import"./index-BcO1AqEL.js";import"./TopBannerLangPicker-SaEGrlJh.js";import"./TopBannerLangPickerButton-CTBwZLn0.js";import"./TopBannerLogo-BPliLnu3.js";import"./TopBannerSkipLink-BOHWWP6f.js";import"./TopBannerUserButton-etZa22Zn.js";const ne=`.searchField {
  width: 18.5rem;
}

.commandBar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--semantic-responsive-internal-container-spacing);
  padding-top: var(--spacing-s);
  padding-bottom: var(--spacing-s);
  background-color: var(--palette-graphite-5);
  gap: var(--spacing-xs);
}

.buttonGroup {
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--spacing-m);
}

.main {
  padding: var(--semantic-responsive-internal-container-spacing);
}

.openClose {
  position: relative;
  padding: var(--spacing-xs) var(--spacing-m) var(--spacing-s);
  background-color: var(--palette-graphite-5);

  div[class*='content'] {
    margin: 0;
  }
}

.clearFilterButton {
  position: absolute;
  top: 0;
  right: 0;
  margin: 13.5px 1rem 0 0;
}

.clearFilterButtonMobile {
  margin-top: var(--spacing-m);
}

.filterGroup {
  display: flex;
  flex-wrap: wrap;
  margin: var(--spacing-m) 0;
  gap: var(--spacing-m);
}

.datePicker {
  max-width: 12.25rem;
}

.select {
  width: 15rem;
}

.noWrap {
  white-space: nowrap;
}
`,te="_searchField_u5m4t_1",re="_commandBar_u5m4t_5",se="_buttonGroup_u5m4t_17",ie="_main_u5m4t_23",oe="_openClose_u5m4t_27",pe="_clearFilterButton_u5m4t_36",de="_clearFilterButtonMobile_u5m4t_43",ce="_filterGroup_u5m4t_47",ge="_datePicker_u5m4t_54",be="_select_u5m4t_58",he="_noWrap_u5m4t_62",n={searchField:te,commandBar:re,buttonGroup:se,main:ie,openClose:oe,clearFilterButton:pe,clearFilterButtonMobile:de,filterGroup:ce,datePicker:ge,select:be,noWrap:he},$e={title:"Sidetyper/Intern/Arbeidsliste",parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:J(ne)}}}},S=[{value:"utlegg",label:"Utlegg"},{value:"klage",label:"Klage"}],y=[{value:"vurderutlegg",label:"Vurder utlegg"},{value:"besluttutlegg",label:"Beslutt utlegg"},{value:"vurderunnlattvarsling",label:"Vurder unnlatt varsling"},{value:"vurderklage",label:"Vurder klage"},{value:"behandleklage",label:"Behandle klage"}],I=["Mva-melding","Meldingskontroll","Annen meldingskontroll"],R=["Vurdere levert mva-melding","Vurdere meldingskontroll","Tilfeldig meldingskontroll","Beslutte meldingskontroll"],V=["Siri Saksbehandler","Ole Samhandlings Arena","Krystall Pepsi Johnsen"],me=Array.from({length:10},(T,b)=>{const o=["Ja","Nei"],c=o[Math.floor(Math.random()*o.length)];return{tag:c==="Ja"?e.jsx(_,{svgPath:Z,color:"burgundy",children:"Ny aktivitet"}):Math.random()>.5?e.jsx(_,{svgPath:ee,color:"graphite",children:"Pauset"}):null,antall:Math.floor(Math.random()*20)+1,fristPassert:c,kategori:I[Math.floor(Math.random()*I.length)],arbeidsoppgave:R[Math.floor(Math.random()*R.length)]}}),G=Array.from({length:120},(T,b)=>{const o=["NOK 30 000","NOK 1 500","NOK 500 000"],c=["010101 12345","151375 98765","231590 12345"],t=["WINNIFRED ARCHIPAELAGO JENSEN","ANNA HØST UTSTILLINGSEN","HEINRICH VON SCHELLFAHRER"],g=Math.floor(Math.random()*28)+1,d=Math.floor(Math.random()*12)+1,u=new Date(2023,d-1,g);return{frist:u,opprettet:u,sakstype:S[Math.floor(Math.random()*S.length)].label,arbeidsoppgave:y[Math.floor(Math.random()*y.length)].label,saldo:o[Math.floor(Math.random()*o.length)],fnr:c[Math.floor(Math.random()*c.length)],navn:t[Math.floor(Math.random()*t.length)],saksbehandlere:V[Math.floor(Math.random()*V.length)]}}),D=()=>{const T=!O("(min-width: 480px)"),b=O("(min-width: 1024px)"),[o,c]=h.useState(!1),[t,g]=h.useState({fristFra:null,fristTil:null,sakstype:"",arbeidsoppgave:""}),d=Object.values(t).filter(Boolean).length,[u,M]=h.useState(1),H=10,B=new Date(2023,0,1),N=new Date(2023,11,31),[F,W]=h.useState({direction:"none"}),K=G.slice().sort((l,r)=>{const s=F.sortKey;return!s||l[s]===r[s]?0:F.direction==="ascending"?l[s]>r[s]?1:-1:l[s]<r[s]?1:-1}),$=h.useMemo(()=>S.reduce((l,r)=>(l[r.value]=r.label,l),{}),[]),E=h.useMemo(()=>y.reduce((l,r)=>(l[r.value]=r.label,l),{}),[]),v=K.filter(l=>t.fristFra&&l.frist<t.fristFra||t.fristTil&&l.frist>t.fristTil?!1:t.sakstype?l.sakstype===$[t.sakstype]:t.arbeidsoppgave?l.arbeidsoppgave===E[t.arbeidsoppgave]:!0),f=l=>{const r=l.getDate().toString().padStart(2,"0"),s=(l.getMonth()+1).toString().padStart(2,"0"),z=l.getFullYear();return`${r}.${s}.${z}`},w=()=>{g({fristFra:null,fristTil:null,sakstype:"",arbeidsoppgave:""})};return e.jsxs(e.Fragment,{children:[e.jsxs(ae,{title:"Navn på løsning",logoHref:"/",children:[e.jsx(Q,{placeholder:"Søk etter saksnr, fnr eller orgnr",label:"Søk etter saksnummer, fødselsnummer eller organisasjonsnummer",className:n.searchField}),e.jsx(m,{svgPath:U,brightness:"light",children:"Hjelp"})]}),e.jsxs("div",{className:n.commandBar,children:[e.jsx(k,{children:e.jsx(k.List,{children:e.jsx(k.Item,{children:e.jsx(k.Link,{href:"#",children:"Arbeidsliste"})})})}),e.jsxs("div",{className:n.buttonGroup,children:[e.jsx(m,{svgPath:Y,children:"Opprett sak"}),e.jsx(m,{svgPath:q,children:"Mine siste oppslag"})]})]}),e.jsx("main",{className:n.main,children:e.jsxs(i,{defaultValue:"mineoppgaver",isMultiline:!0,hasBorder:!0,children:[e.jsxs(i.List,{children:[e.jsx(i.Tab,{value:"mineoppgaver",children:`Mine ${b?"oppgaver ":""}(${G.length})`}),e.jsx(i.Tab,{value:"tilgjengeligeoppgaver",children:`Tilgjengelige ${b?"oppgaver ":""}(10)`}),e.jsx(i.Tab,{value:"andresoppgaver",children:`Andres ${b?"oppgaver ":""}(10)`}),e.jsx(i.Tab,{value:"minefullfoerteoppgaver",children:`Mine fullførte ${b?"oppgaver ":""}(10)`})]}),e.jsxs(i.Panel,{value:"mineoppgaver",children:[e.jsxs(C,{className:n.openClose,title:o?`Skjul filter ${d>0?`(${d} aktive)`:""}`:`Vis filter ${d>0?`(${d} aktive)`:""}`,isExpanded:o,onClick:()=>c(!o),children:[!T&&d>0&&e.jsx(m,{className:n.clearFilterButton,svgPath:L,onClick:w,children:"Tilbakestill filter"}),e.jsxs("div",{className:n.filterGroup,children:[e.jsx(A,{classNames:{dateContainer:n.datePicker},label:"Frist fra (dd.mm.åååå)",minDate:B,maxDate:N,value:t.fristFra,onSelectDate:l=>g({...t,fristFra:l})}),e.jsx(A,{classNames:{dateContainer:n.datePicker},label:"Frist til (dd.mm.åååå)",minDate:B,maxDate:N,value:t.fristTil,onSelectDate:l=>g({...t,fristTil:l})}),e.jsx(x,{className:n.select,label:"Sakstype",value:t.sakstype,onChange:l=>{g({...t,sakstype:l.target.value})},children:S.map(l=>e.jsx(x.Option,{value:l.value,children:l.label},l.value))}),e.jsx(x,{className:n.select,label:"Arbeidsoppgave",value:t.arbeidsoppgave,onChange:l=>{g({...t,arbeidsoppgave:l.target.value}),M(1)},children:y.map(l=>e.jsx(x.Option,{value:l.value,children:l.label},l.value))})]}),T&&d>0&&e.jsx(m,{className:n.clearFilterButtonMobile,svgPath:L,onClick:w,children:"Tilbakestill filter"})]}),e.jsxs(a,{caption:"Dette er en tabell med arbeidsoppgaver",sortState:F,setSortState:W,hasFullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{className:n.noWrap,scope:"col",sortKey:"frist",isSortable:!0,children:"Frist"}),e.jsx(a.HeaderCell,{className:n.noWrap,scope:"col",sortKey:"opprettet",isSortable:!0,children:"Opprettet"}),e.jsx(a.HeaderCell,{className:n.noWrap,sortKey:"sakstype",isSortable:!0,children:"Sakstype"}),e.jsx(a.HeaderCell,{className:n.noWrap,scope:"col",sortKey:"arbeidsoppgave",isSortable:!0,children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",alignment:"right",children:"Saldo"}),e.jsx(a.HeaderCell,{scope:"col",colSpan:2,children:"Gjelder"})]})}),e.jsx(a.Body,{children:v.length>0?v.slice((u-1)*H,u*H).map((l,r)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:f(l.frist)}),e.jsx(a.DataCell,{children:f(l.opprettet)}),e.jsx(a.DataCell,{children:l.sakstype}),e.jsx(a.DataCell,{children:e.jsx(p,{href:"#",onClick:s=>{s.preventDefault(),P("Sidetyper/Intern/Saksvisning","Saksvisning")()},children:l.arbeidsoppgave})}),e.jsx(a.DataCell,{className:n.noWrap,alignment:"right",children:l.saldo}),e.jsx(a.DataCell,{children:e.jsx(p,{className:n.noWrap,href:"#",children:l.fnr})}),e.jsx(a.DataCell,{children:e.jsx(p,{href:"#",children:l.navn})})]},r)):e.jsx(a.Row,{children:e.jsx(a.DataCell,{colSpan:6,children:e.jsx(j,{children:"Vi fant dessverre ingen treff med dette filteret. Prøv å filtrere med en større til/fra-dato eller annen sakstype."})})})})]}),e.jsx(le,{pageSize:H,totalItems:v.length,onChange:l=>M(l)})]}),e.jsxs(i.Panel,{value:"tilgjengeligeoppgaver",children:[e.jsx(C,{className:n.openClose,title:"Vis filter",children:e.jsx(j,{children:"Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver"})}),e.jsxs(a,{caption:"Dette er en tabell med tilgjengelige oppgaver",hasFullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col"}),e.jsx(a.HeaderCell,{scope:"col",children:"Antall"}),e.jsx(a.HeaderCell,{scope:"col",children:"Frist passert"}),e.jsx(a.HeaderCell,{scope:"col",children:"Kategori"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col"})]})}),e.jsx(a.Body,{children:me.map((l,r)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:l.tag}),e.jsx(a.DataCell,{children:l.antall}),e.jsx(a.DataCell,{children:l.fristPassert}),e.jsx(a.DataCell,{children:l.kategori}),e.jsx(a.DataCell,{children:l.arbeidsoppgave}),e.jsx(a.DataCell,{alignment:"right",children:e.jsx(m,{svgPath:X,iconPosition:"right",children:"Ta oppgave"})})]},r))})]})]}),e.jsxs(i.Panel,{value:"andresoppgaver",children:[e.jsx(C,{className:n.openClose,title:"Vis filter",children:e.jsx(j,{children:"Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver"})}),e.jsxs(a,{caption:"Dette er en tabell med andres oppgaver",hasFullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Opprettet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Sakstype"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",colSpan:2,children:"Gjelder"}),e.jsx(a.HeaderCell,{scope:"col",children:"Saksbehandler"})]})}),e.jsx(a.Body,{children:v.slice(1,11).map((l,r)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:f(l.opprettet)}),e.jsx(a.DataCell,{children:l.sakstype}),e.jsx(a.DataCell,{children:e.jsx(p,{href:"#",onClick:s=>{s.preventDefault(),P("Sidetyper/Intern/Saksvisning","Saksvisning")()},children:l.arbeidsoppgave})}),e.jsx(a.DataCell,{children:e.jsx(p,{className:n.noWrap,href:"#",children:l.fnr})}),e.jsx(a.DataCell,{children:e.jsx(p,{href:"#",children:l.navn})}),e.jsx(a.DataCell,{children:l.saksbehandlere})]},r))})]})]}),e.jsxs(i.Panel,{value:"minefullfoerteoppgaver",children:[e.jsx(C,{className:n.openClose,title:"Vis filter",children:e.jsx(j,{children:"Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver"})}),e.jsxs(a,{caption:"Dette er en tabell med andres oppgaver",hasFullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Opprettet"}),e.jsx(a.HeaderCell,{scope:"col",children:"Fullført"}),e.jsx(a.HeaderCell,{scope:"col",children:"Sakstype"}),e.jsx(a.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(a.HeaderCell,{scope:"col",colSpan:2,children:"Gjelder"})]})}),e.jsx(a.Body,{children:v.slice(1,11).map((l,r)=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:f(l.opprettet)}),e.jsx(a.DataCell,{children:f(l.frist)}),e.jsx(a.DataCell,{children:l.sakstype}),e.jsx(a.DataCell,{children:e.jsx(p,{href:"#",onClick:s=>{s.preventDefault(),P("Sidetyper/Intern/Saksvisning","Saksvisning")()},children:l.arbeidsoppgave})}),e.jsx(a.DataCell,{children:e.jsx(p,{className:n.noWrap,href:"#",children:l.fnr})}),e.jsx(a.DataCell,{children:e.jsx(p,{href:"#",children:l.navn})})]},r))})]})]})]})})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const isMobile = !useMediaQuery('(min-width: 480px)');
  const breakpointM = useMediaQuery('(min-width: 1024px)');
  const [visFilter, setVisFilter] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    fristFra: null as Date | null,
    fristTil: null as Date | null,
    sakstype: '',
    arbeidsoppgave: ''
  });
  const antallAktiveFilter = Object.values(filters).filter(Boolean).length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const minDate = new Date(2023, 0, 1);
  const maxDate = new Date(2023, 11, 31);
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
  const sakstypeMap = useMemo(() => sakstypeOptions.reduce((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {} as Record<string, string>), []);
  const arbeidsoppgaveMap = useMemo(() => arbeidsoppgaveOptions.reduce((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {} as Record<string, string>), []);
  const filteredData = sortedData.filter(item => {
    if (filters.fristFra && item.frist < filters.fristFra) {
      return false;
    }
    if (filters.fristTil && item.frist > filters.fristTil) {
      return false;
    }
    if (filters.sakstype) {
      return item.sakstype === sakstypeMap[filters.sakstype];
    }
    if (filters.arbeidsoppgave) {
      return item.arbeidsoppgave === arbeidsoppgaveMap[filters.arbeidsoppgave];
    }
    return true;
  });
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return \`\${day}.\${month}.\${year}\`;
  };
  const handleClearFilters = (): void => {
    setFilters({
      fristFra: null,
      fristTil: null,
      sakstype: '',
      arbeidsoppgave: ''
    });
  };
  return <>
      <TopBannerInternal title={'Navn på løsning'} logoHref={'/'}>
        <SearchField placeholder={'Søk etter saksnr, fnr eller orgnr'} label={'Søk etter saksnummer, fødselsnummer eller organisasjonsnummer'} className={styles.searchField} />
        <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
          {'Hjelp'}
        </InlineButton>
      </TopBannerInternal>
      <div className={styles.commandBar}>
        <Breadcrumbs>
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Arbeidsliste'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
        <div className={styles.buttonGroup}>
          <InlineButton svgPath={AddSVGpath}>{'Opprett sak'}</InlineButton>
          <InlineButton svgPath={HistorySVGpath}>
            {'Mine siste oppslag'}
          </InlineButton>
        </div>
      </div>
      <main className={styles.main}>
        <Tabs defaultValue={'mineoppgaver'} isMultiline hasBorder>
          <Tabs.List>
            <Tabs.Tab value={'mineoppgaver'}>{\`Mine \${breakpointM ? 'oppgaver ' : ''}(\${data.length})\`}</Tabs.Tab>
            <Tabs.Tab value={'tilgjengeligeoppgaver'}>
              {\`Tilgjengelige \${breakpointM ? 'oppgaver ' : ''}(10)\`}
            </Tabs.Tab>
            <Tabs.Tab value={'andresoppgaver'}>
              {\`Andres \${breakpointM ? 'oppgaver ' : ''}(10)\`}
            </Tabs.Tab>
            <Tabs.Tab value={'minefullfoerteoppgaver'}>
              {\`Mine fullførte \${breakpointM ? 'oppgaver ' : ''}(10)\`}
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value={'mineoppgaver'}>
            <OpenClose className={styles.openClose} title={visFilter ? \`Skjul filter \${antallAktiveFilter > 0 ? \`(\${antallAktiveFilter} aktive)\` : ''}\` : \`Vis filter \${antallAktiveFilter > 0 ? \`(\${antallAktiveFilter} aktive)\` : ''}\`} isExpanded={visFilter} onClick={() => setVisFilter(!visFilter)}>
              {!isMobile && antallAktiveFilter > 0 && <InlineButton className={styles.clearFilterButton} svgPath={CancelSVGpath} onClick={handleClearFilters}>
                  {'Tilbakestill filter'}
                </InlineButton>}
              <div className={styles.filterGroup}>
                <DatePicker classNames={{
                dateContainer: styles.datePicker
              }} label={'Frist fra (dd.mm.åååå)'} minDate={minDate} maxDate={maxDate} value={filters.fristFra} onSelectDate={date => setFilters({
                ...filters,
                fristFra: date
              })} />
                <DatePicker classNames={{
                dateContainer: styles.datePicker
              }} label={'Frist til (dd.mm.åååå)'} minDate={minDate} maxDate={maxDate} value={filters.fristTil} onSelectDate={date => setFilters({
                ...filters,
                fristTil: date
              })} />
                <Select className={styles.select} label={'Sakstype'} value={filters.sakstype} onChange={e => {
                setFilters({
                  ...filters,
                  sakstype: e.target.value
                });
              }}>
                  {sakstypeOptions.map(option => <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>)}
                </Select>
                <Select className={styles.select} label={'Arbeidsoppgave'} value={filters.arbeidsoppgave} onChange={e => {
                setFilters({
                  ...filters,
                  arbeidsoppgave: e.target.value
                });
                setCurrentPage(1);
              }}>
                  {arbeidsoppgaveOptions.map(option => <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>)}
                </Select>
              </div>
              {isMobile && antallAktiveFilter > 0 && <InlineButton className={styles.clearFilterButtonMobile} svgPath={CancelSVGpath} onClick={handleClearFilters}>
                  {'Tilbakestill filter'}
                </InlineButton>}
            </OpenClose>
            <Table caption={'Dette er en tabell med arbeidsoppgaver'} sortState={sortState} setSortState={setSortState} hasFullWidth>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className={styles.noWrap} scope={'col'} sortKey={'frist'} isSortable>
                    {'Frist'}
                  </Table.HeaderCell>
                  <Table.HeaderCell className={styles.noWrap} scope={'col'} sortKey={'opprettet'} isSortable>
                    {'Opprettet'}
                  </Table.HeaderCell>
                  <Table.HeaderCell className={styles.noWrap} sortKey={'sakstype'} isSortable>
                    {'Sakstype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell className={styles.noWrap} scope={'col'} sortKey={'arbeidsoppgave'} isSortable>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} alignment={'right'}>
                    {'Saldo'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} colSpan={2}>
                    {'Gjelder'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredData.length > 0 ? filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((item, i) => {
                return <Table.Row key={i}>
                          <Table.DataCell>
                            {formatDate(item.frist)}
                          </Table.DataCell>
                          <Table.DataCell>
                            {formatDate(item.opprettet)}
                          </Table.DataCell>
                          <Table.DataCell>{item.sakstype}</Table.DataCell>
                          <Table.DataCell>
                            <Link href={'#'} onClick={e => {
                      e.preventDefault();
                      linkTo('Sidetyper/Intern/Saksvisning', 'Saksvisning')();
                    }}>
                              {item.arbeidsoppgave}
                            </Link>
                          </Table.DataCell>
                          <Table.DataCell className={styles.noWrap} alignment={'right'}>
                            {item.saldo}
                          </Table.DataCell>
                          <Table.DataCell>
                            <Link className={styles.noWrap} href={'#'}>
                              {item.fnr}
                            </Link>
                          </Table.DataCell>
                          <Table.DataCell>
                            <Link href={'#'}>{item.navn}</Link>
                          </Table.DataCell>
                        </Table.Row>;
              }) : <Table.Row>
                    <Table.DataCell colSpan={6}>
                      <Paragraph>
                        {'Vi fant dessverre ingen treff med dette filteret. Prøv å filtrere med en større til/fra-dato eller annen sakstype.'}
                      </Paragraph>
                    </Table.DataCell>
                  </Table.Row>}
              </Table.Body>
            </Table>
            <Pagination pageSize={pageSize} totalItems={filteredData.length} onChange={page => setCurrentPage(page)} />
          </Tabs.Panel>
          <Tabs.Panel value={'tilgjengeligeoppgaver'}>
            <OpenClose className={styles.openClose} title={'Vis filter'}>
              <Paragraph>
                {'Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver'}
              </Paragraph>
            </OpenClose>
            <Table caption={'Dette er en tabell med tilgjengelige oppgaver'} hasFullWidth>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}></Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>{'Antall'}</Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Frist passert'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Kategori'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {dataTilgjengeligeOppgaver.map((item, i) => {
                return <Table.Row key={i}>
                      <Table.DataCell>{item.tag}</Table.DataCell>
                      <Table.DataCell>{item.antall}</Table.DataCell>
                      <Table.DataCell>{item.fristPassert}</Table.DataCell>
                      <Table.DataCell>{item.kategori}</Table.DataCell>
                      <Table.DataCell>{item.arbeidsoppgave}</Table.DataCell>
                      <Table.DataCell alignment={'right'}>
                        <InlineButton svgPath={ArrowForwardSVGpath} iconPosition={'right'}>
                          {'Ta oppgave'}
                        </InlineButton>
                      </Table.DataCell>
                    </Table.Row>;
              })}
              </Table.Body>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel value={'andresoppgaver'}>
            <OpenClose className={styles.openClose} title={'Vis filter'}>
              <Paragraph>
                {'Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver'}
              </Paragraph>
            </OpenClose>
            <Table caption={'Dette er en tabell med andres oppgaver'} hasFullWidth>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}>
                    {'Opprettet'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Sakstype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} colSpan={2}>
                    {'Gjelder'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Saksbehandler'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredData.slice(1, 11).map((item, i) => {
                return <Table.Row key={i}>
                      <Table.DataCell>
                        {formatDate(item.opprettet)}
                      </Table.DataCell>
                      <Table.DataCell>{item.sakstype}</Table.DataCell>
                      <Table.DataCell>
                        <Link href={'#'} onClick={e => {
                      e.preventDefault();
                      linkTo('Sidetyper/Intern/Saksvisning', 'Saksvisning')();
                    }}>
                          {item.arbeidsoppgave}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link className={styles.noWrap} href={'#'}>
                          {item.fnr}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link href={'#'}>{item.navn}</Link>
                      </Table.DataCell>
                      <Table.DataCell>{item.saksbehandlere}</Table.DataCell>
                    </Table.Row>;
              })}
              </Table.Body>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel value={'minefullfoerteoppgaver'}>
            <OpenClose className={styles.openClose} title={'Vis filter'}>
              <Paragraph>
                {'Legg inn ditt eget filterinnhold for Tilgjengelige oppgaver'}
              </Paragraph>
            </OpenClose>
            <Table caption={'Dette er en tabell med andres oppgaver'} hasFullWidth>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope={'col'}>
                    {'Opprettet'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Fullført'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Sakstype'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'}>
                    {'Arbeidsoppgave'}
                  </Table.HeaderCell>
                  <Table.HeaderCell scope={'col'} colSpan={2}>
                    {'Gjelder'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredData.slice(1, 11).map((item, i) => {
                return <Table.Row key={i}>
                      <Table.DataCell>
                        {formatDate(item.opprettet)}
                      </Table.DataCell>
                      <Table.DataCell>{formatDate(item.frist)}</Table.DataCell>
                      <Table.DataCell>{item.sakstype}</Table.DataCell>
                      <Table.DataCell>
                        <Link href={'#'} onClick={e => {
                      e.preventDefault();
                      linkTo('Sidetyper/Intern/Saksvisning', 'Saksvisning')();
                    }}>
                          {item.arbeidsoppgave}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link className={styles.noWrap} href={'#'}>
                          {item.fnr}
                        </Link>
                      </Table.DataCell>
                      <Table.DataCell>
                        <Link href={'#'}>{item.navn}</Link>
                      </Table.DataCell>
                    </Table.Row>;
              })}
              </Table.Body>
            </Table>
          </Tabs.Panel>
        </Tabs>
      </main>
    </>;
}`,...D.parameters?.docs?.source}}};const Ee=["Arbeidsliste"];export{D as Arbeidsliste,Ee as __namedExportsOrder,$e as default};
//# sourceMappingURL=Arbeidsliste.stories-CIT3Nqv0.js.map
