import{e as n,r as x,j as a}from"./iframe-BoxHncFg.js";import{g,a as p,h as C,i as j,P as d}from"./index-CIMmj5uo.js";import{L as c}from"./index-COS0aIOi.js";import{e as B}from"./stories.utils-CZ5hej_8.js";const z={component:d,title:"Komponenter/Pagination",argTypes:{currentPage:{table:{category:n.props}},defaultCurrent:{table:{category:n.props}},sibling:{table:{category:n.props,defaultValue:{summary:g().toString()}}},hidePrevNextButtonTitle:{table:{category:n.props,defaultValue:{summary:j().toString()}}},hidePageSummary:{table:{category:n.props,defaultValue:{summary:C().toString()}}},pageSize:{table:{category:n.props,defaultValue:{summary:p().toString()}}},totalItems:{table:{category:n.props}},ariaLabel:{table:{category:n.aria}},onChange:{table:{category:n.event}}},args:{pageSize:p(),totalItems:70,sibling:g(),defaultCurrent:1}},o={},e={render:T=>{const[i,D]=x.useState(1),l=5,v=[{navn:"Donald Duck",dato:"25.03.20"},{navn:"Robbie Wiliams",dato:"25.03.15"},{navn:"Minnie Mouse",dato:"12.05.18"},{navn:"Katy Perry",dato:"01.01.23"},{navn:"Langbein",dato:"14.02.22"},{navn:"Justin Bieber",dato:"08.03.19"},{navn:"Daisy Duck",dato:"07.04.21"},{navn:"Ed Sheeran",dato:"17.05.20"},{navn:"Timmy Gresshoppe",dato:"21.06.19"},{navn:"Beyoncé",dato:"04.07.18"},{navn:"Dovre Gubben Grå",dato:"25.12.24"},{navn:"Taylor Swift",dato:"13.08.23"},{navn:"Karius og Baktus",dato:"29.09.22"},{navn:"Ariana Grande",dato:"10.10.21"},{navn:"Askeladden",dato:"11.11.20"},{navn:"Billie Eilish",dato:"12.12.19"},{navn:"Ole Brumm",dato:"01.01.24"},{navn:"Rihanna",dato:"25.03.20"},{navn:"Pippi Langstrømpe",dato:"02.02.23"},{navn:"The Weeknd",dato:"03.03.22"},{navn:"Kardemomme by",dato:"04.04.21"},{navn:"Dua Lipa",dato:"05.05.20"},{navn:"Bamse og Kylling",dato:"06.06.19"},{navn:"Coldplay",dato:"07.07.18"},{navn:"Morten Harket",dato:"08.08.23"},{navn:"Kaisa Lundquist",dato:"23.05.16"},{navn:"Reidar Olsen",dato:"15.11.16"},{navn:"Bob Egil Hansen",dato:"15.11.16"},{navn:"Leif Kåre Lund",dato:"23.10.17"},{navn:"Kai Mossige",dato:"25.11.19"},{navn:"Bob Testman",dato:"01.01.20"},{navn:"Alice Middleman",dato:"25.03.20"},{navn:"Kari Saksbehandler",dato:"25.03.20"},{navn:"Frank Johansen",dato:"26.03.20"},{navn:"Tallulah Willis",dato:"01.05.20"},{navn:"Kaisa Lundquist",dato:"23.05.16"},{navn:"Reidar Olsen",dato:"15.11.16"},{navn:"Bob Egil Hansen",dato:"15.11.16"},{navn:"Leif Kåre Lund",dato:"23.10.17"},{navn:"Kai Mossige",dato:"25.11.19"},{navn:"Bob Testman",dato:"01.01.20"},{navn:"Alice Middleman",dato:"25.03.20"},{navn:"Kari Saksbehandler",dato:"25.03.20"},{navn:"Frank Johansen",dato:"26.03.20"},{navn:"Tallulah Willis",dato:"01.05.20"},{navn:"Kari Nordmann",dato:"2024-02-07"},{navn:"Ola Olsen",dato:"2024-02-07"},{navn:"Anne Persen",dato:"2024-02-07"},{navn:"Bjørn Hansen",dato:"2024-02-07"},{navn:"Lisa Karlsen",dato:"2024-02-07"},{navn:"Kari Nordmann",dato:"2024-02-07"},{navn:"Ola Olsen",dato:"2024-01-30"},{navn:"Anne Hansen",dato:"2024-02-14"},{navn:"Per Pettersen",dato:"2024-02-01"},{navn:"Lisa Lie",dato:"2024-02-19"},{navn:"Martin Martinsen",dato:"2024-02-05"},{navn:"Turid Thoresen",dato:"2024-02-12"},{navn:"Knut Knutsen",dato:"2024-02-08"},{navn:"Helene Hansen",dato:"2024-02-16"},{navn:"Lars Larsen",dato:"2024-02-10"}],M=(r,H,m)=>{const u=(H-1)*m;return r.map((s,O)=>a.jsxs(c.Element,{children:[O+1," ",s.navn]},`${s.navn}-${s.dato}`)).slice(u,u+m)},E=r=>{D(r)};return a.jsxs(a.Fragment,{children:[a.jsx(c,{hasSpacing:!0,children:M(v,i,l)}),a.jsx(d,{pageSize:l,totalItems:v.length,currentPage:i,onChange:E})]})}},t={render:T=>a.jsx(d,{pageSize:10,totalItems:40,defaultCurrent:3})};t.parameters=B;e.parameters=B;var S,b,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"{} satisfies Story",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,L,K;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const data = [{
      navn: 'Donald Duck',
      dato: '25.03.20'
    }, {
      navn: 'Robbie Wiliams',
      dato: '25.03.15'
    }, {
      navn: 'Minnie Mouse',
      dato: '12.05.18'
    }, {
      navn: 'Katy Perry',
      dato: '01.01.23'
    }, {
      navn: 'Langbein',
      dato: '14.02.22'
    }, {
      navn: 'Justin Bieber',
      dato: '08.03.19'
    }, {
      navn: 'Daisy Duck',
      dato: '07.04.21'
    }, {
      navn: 'Ed Sheeran',
      dato: '17.05.20'
    }, {
      navn: 'Timmy Gresshoppe',
      dato: '21.06.19'
    }, {
      navn: 'Beyoncé',
      dato: '04.07.18'
    }, {
      navn: 'Dovre Gubben Grå',
      dato: '25.12.24'
    }, {
      navn: 'Taylor Swift',
      dato: '13.08.23'
    }, {
      navn: 'Karius og Baktus',
      dato: '29.09.22'
    }, {
      navn: 'Ariana Grande',
      dato: '10.10.21'
    }, {
      navn: 'Askeladden',
      dato: '11.11.20'
    }, {
      navn: 'Billie Eilish',
      dato: '12.12.19'
    }, {
      navn: 'Ole Brumm',
      dato: '01.01.24'
    }, {
      navn: 'Rihanna',
      dato: '25.03.20'
    }, {
      navn: 'Pippi Langstrømpe',
      dato: '02.02.23'
    }, {
      navn: 'The Weeknd',
      dato: '03.03.22'
    }, {
      navn: 'Kardemomme by',
      dato: '04.04.21'
    }, {
      navn: 'Dua Lipa',
      dato: '05.05.20'
    }, {
      navn: 'Bamse og Kylling',
      dato: '06.06.19'
    }, {
      navn: 'Coldplay',
      dato: '07.07.18'
    }, {
      navn: 'Morten Harket',
      dato: '08.08.23'
    }, {
      navn: 'Kaisa Lundquist',
      dato: '23.05.16'
    }, {
      navn: 'Reidar Olsen',
      dato: '15.11.16'
    }, {
      navn: 'Bob Egil Hansen',
      dato: '15.11.16'
    }, {
      navn: 'Leif Kåre Lund',
      dato: '23.10.17'
    }, {
      navn: 'Kai Mossige',
      dato: '25.11.19'
    }, {
      navn: 'Bob Testman',
      dato: '01.01.20'
    }, {
      navn: 'Alice Middleman',
      dato: '25.03.20'
    }, {
      navn: 'Kari Saksbehandler',
      dato: '25.03.20'
    }, {
      navn: 'Frank Johansen',
      dato: '26.03.20'
    }, {
      navn: 'Tallulah Willis',
      dato: '01.05.20'
    }, {
      navn: 'Kaisa Lundquist',
      dato: '23.05.16'
    }, {
      navn: 'Reidar Olsen',
      dato: '15.11.16'
    }, {
      navn: 'Bob Egil Hansen',
      dato: '15.11.16'
    }, {
      navn: 'Leif Kåre Lund',
      dato: '23.10.17'
    }, {
      navn: 'Kai Mossige',
      dato: '25.11.19'
    }, {
      navn: 'Bob Testman',
      dato: '01.01.20'
    }, {
      navn: 'Alice Middleman',
      dato: '25.03.20'
    }, {
      navn: 'Kari Saksbehandler',
      dato: '25.03.20'
    }, {
      navn: 'Frank Johansen',
      dato: '26.03.20'
    }, {
      navn: 'Tallulah Willis',
      dato: '01.05.20'
    }, {
      navn: 'Kari Nordmann',
      dato: '2024-02-07'
    }, {
      navn: 'Ola Olsen',
      dato: '2024-02-07'
    }, {
      navn: 'Anne Persen',
      dato: '2024-02-07'
    }, {
      navn: 'Bjørn Hansen',
      dato: '2024-02-07'
    }, {
      navn: 'Lisa Karlsen',
      dato: '2024-02-07'
    }, {
      navn: 'Kari Nordmann',
      dato: '2024-02-07'
    }, {
      navn: 'Ola Olsen',
      dato: '2024-01-30'
    }, {
      navn: 'Anne Hansen',
      dato: '2024-02-14'
    }, {
      navn: 'Per Pettersen',
      dato: '2024-02-01'
    }, {
      navn: 'Lisa Lie',
      dato: '2024-02-19'
    }, {
      navn: 'Martin Martinsen',
      dato: '2024-02-05'
    }, {
      navn: 'Turid Thoresen',
      dato: '2024-02-12'
    }, {
      navn: 'Knut Knutsen',
      dato: '2024-02-08'
    }, {
      navn: 'Helene Hansen',
      dato: '2024-02-16'
    }, {
      navn: 'Lars Larsen',
      dato: '2024-02-10'
    }];
    type DataList = typeof data;

    // Hjelpefunksjon for å vise hvordan pagination påvirker liste utenfor komponent
    const exampleListWithLimit = (data: DataList, start: number, pageSize: number): JSX.Element[] => {
      const itemStart = (start - 1) * pageSize;
      return data.map((e, i) => {
        return <List.Element key={\`\${e.navn}-\${e.dato}\`}>
              {i + 1} {e.navn}
            </List.Element>;
      }).slice(itemStart, itemStart + pageSize);
    };
    const onChange = (page: number): void => {
      setPage(page);
    };
    // Antall elementer i data-arrayen bestemmer totalItems
    //   const data = [
    // {
    //   navn: 'Donald Duck',
    //   dato: '25.03.20'
    // },
    // ....]
    return <>
        <List hasSpacing>{exampleListWithLimit(data, page, pageSize)}</List>
        <Pagination pageSize={pageSize} totalItems={data.length} currentPage={page} onChange={onChange} />
      </>;
  }
} satisfies Story`,...(K=(L=e.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var f,P,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Pagination pageSize={10} totalItems={40} defaultCurrent={3} />;
  }
} satisfies Story`,...(k=(P=t.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const A=["Preview","Controlled","Uncontrolled"],G=Object.freeze(Object.defineProperty({__proto__:null,Controlled:e,Preview:o,Uncontrolled:t,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{e as C,G as P,t as U};
//# sourceMappingURL=Pagination.stories-CJ-517kJ.js.map
