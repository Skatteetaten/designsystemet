import{e,r as g,j as o,d as P,m as R}from"./iframe-BoxHncFg.js";import{B as v}from"./index-DyY5joHW.js";import{T as f}from"./index-z4c3QXb-.js";import{i as I,j as C,k as E,l as x,m as L,b as M,c as B,R as y}from"./index-DK27EPS2.js";import{e as j}from"./stories.utils-CZ5hej_8.js";const d={name:"Ola Nordmann",personId:"10101012345",type:"Person"},b={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},z={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},w={component:y,title:"Komponenter/RolePicker",render:S=>{const[n,i]=g.useState(),r=g.useRef(null),c=async a=>{var p;let s;a.name===d.name?s="meg":a.type==="Organization"?s="virksomhet":s="andre",i({role:s,name:a.name}),(p=r.current)==null||p.close()};return o.jsxs(o.Fragment,{children:[o.jsx(v,{onClick:()=>{var a;return(a=r.current)==null?void 0:a.showModal()},children:n?(n==null?void 0:n.role)==="meg"?"Meg selv":n==null?void 0:n.name:"Åpne representasjonsvelger"}),o.jsx(y,{ref:r,me:d,businesses:b,people:z,...S,onEntitySelect:c})]})},argTypes:{children:{control:!1,table:{category:e.props}},me:{control:"object",table:{category:e.props}},people:{control:"object",table:{category:e.props}},businesses:{control:"object",table:{category:e.props}},dismissOnEsc:{table:{category:e.props,defaultValue:{summary:B().toString()}}},dismissOnOutsideClick:{table:{category:e.props,defaultValue:{summary:M().toString()}}},hideCloseButton:{table:{category:e.props,defaultValue:{summary:L().toString()}}},minimumEntitiesForSearch:{table:{category:e.props,defaultValue:{summary:x().toString()}}},showInactiveBusinesses:{table:{category:e.props,defaultValue:{summary:E().toString()}}},showSubunits:{table:{category:e.props,defaultValue:{summary:C().toString()}}},showDeceasedPeople:{table:{category:e.props,defaultValue:{summary:I().toString()}}},title:{table:{category:e.props}},onClose:{control:!1,table:{category:e.event}},onEntitySelect:{control:!1,table:{category:e.event}},onLogout:{control:!1,table:{category:e.event}}},args:{me:d,people:z,businesses:b}},m={},u={render:S=>{const n=g.useRef(null),[i,r]=g.useState(),c=t=>{const l=t.currentTarget.lang;P.changeLanguage(R[l])},a={name:"Ola Nordmann",personId:"10101012345",type:"Person"},s={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},p={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]};return o.jsxs(o.Fragment,{children:[o.jsx(f,{user:i,onLanguageClick:c,onLogInClick:i?void 0:()=>{var t;return(t=n.current)==null?void 0:t.showModal()},children:i&&o.jsx(f.UserMenu,{user:i,notificationCount:1,onLogOutClick:()=>r(void 0),onSwitchUserClick:()=>{var t;return(t=n.current)==null?void 0:t.showModal()}})}),o.jsx(y,{ref:n,me:a,businesses:s,people:p,onEntitySelect:async t=>{var A;let l;t.name===a.name?l="meg":t.type==="Organization"?l="virksomhet":l="andre",r({role:l,name:t.name}),(A=n.current)==null||A.close()}})]})}};u.parameters=j;var D,T,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:"{} satisfies Story",...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var N,h,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [user, setUser] = useState<User>();
    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };
    const me: Person = {
      name: 'Ola Nordmann',
      personId: '10101012345',
      type: 'Person'
    };
    const businesses: Paginated<Business> = {
      total: 12,
      list: [{
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization',
        subunits: [{
          name: 'Google ASA',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA'
        }, {
          name: 'Facebook RHF',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'RHF'
        }]
      }, {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization',
        subunits: [{
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS'
        }, {
          name: 'Statoil ASA',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA'
        }]
      }, {
        name: 'Samsung DA',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'DA'
      }, {
        name: 'Toshiba AS',
        organizationNumber: '312643218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS'
      }, {
        name: 'Hitachi AS',
        organizationNumber: '312743218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS'
      }, {
        name: 'Vanguard AS',
        organizationNumber: '332843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS'
      }, {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA'
      }, {
        name: 'Meta ANS',
        organizationNumber: '212843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ANS'
      }]
    };
    const people: Paginated<Person> = {
      total: 4,
      list: [{
        name: 'Antikvitet presis',
        personId: '13889999726',
        type: 'Person',
        isDeleted: false
      }, {
        name: 'Bønne elegant',
        personId: '18849574503',
        type: 'Person',
        isDeleted: true
      }, {
        name: 'Lomme filosofisk',
        personId: '08889674513',
        type: 'Person',
        isDeleted: true
      }, {
        name: 'Adelsmann varm',
        personId: '14892449911',
        type: 'Person',
        isDeleted: false
      }]
    };
    return <>
        <TopBannerExternal user={user} onLanguageClick={handleLanguageClick} onLogInClick={!user ? (): void => modalRef.current?.showModal() : undefined}>
          {user && <TopBannerExternal.UserMenu user={user} notificationCount={1} onLogOutClick={() => setUser(undefined)} onSwitchUserClick={() => modalRef.current?.showModal()} />}
        </TopBannerExternal>
        <RolePicker ref={modalRef} me={me} businesses={businesses} people={people} onEntitySelect={async entity => {
        let role: User['role'];
        if (entity.name === me.name) {
          role = 'meg';
        } else if (entity.type === 'Organization') {
          role = 'virksomhet';
        } else {
          role = 'andre';
        }
        setUser({
          role: role,
          name: entity.name
        });
        modalRef.current?.close();
      }} />
      </>;
  }
} satisfies Story`,...(k=(h=u.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const F=["Preview","WithExternalTopBanner"],W=Object.freeze(Object.defineProperty({__proto__:null,Preview:m,WithExternalTopBanner:u,__namedExportsOrder:F,default:w},Symbol.toStringTag,{value:"Module"}));export{W as R,u as W};
//# sourceMappingURL=RolePicker.stories-CgH8sMXz.js.map
