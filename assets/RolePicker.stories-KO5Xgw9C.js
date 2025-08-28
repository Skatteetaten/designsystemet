import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-D_ouKaeX.js";import{B as R}from"./index-Du3yX_TW.js";import{d as I,l as v}from"./index-CGk5cNE3.js";import{T as L}from"./index-palH82_U.js";import{h as C,i as E,j as x,k as M,l as j,b as B,c as w,R as y}from"./index-hcTrRhi3.js";import{c as e}from"./helpers-B90wjoUE.js";import{e as F}from"./stories.utils-Ys3NG0dr.js";const d={name:"Ola Nordmann",personId:"10101012345",type:"Person"},f={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},b={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},H={component:y,title:"Komponenter/RolePicker",render:S=>{const[n,g]=p.useState(),i=p.useRef(null),c=async a=>{var m;let s;a.name===d.name?s="meg":a.type==="Organization"?s="virksomhet":s="andre",g({role:s,name:a.name}),(m=i.current)==null||m.close()};return o.jsxs(o.Fragment,{children:[o.jsx(R,{onClick:()=>{var a;return(a=i.current)==null?void 0:a.showModal()},children:n?(n==null?void 0:n.role)==="meg"?"Meg selv":n==null?void 0:n.name:"Åpne representasjonsvelger"}),o.jsx(y,{ref:i,me:d,businesses:f,people:b,...S,onEntitySelect:c})]})},argTypes:{children:{control:!1,table:{category:e.props}},me:{control:"object",table:{category:e.props}},people:{control:"object",table:{category:e.props}},businesses:{control:"object",table:{category:e.props}},dismissOnEsc:{table:{category:e.props,defaultValue:{summary:w().toString()}}},dismissOnOutsideClick:{table:{category:e.props,defaultValue:{summary:B().toString()}}},hideCloseButton:{table:{category:e.props,defaultValue:{summary:j().toString()}}},minimumEntitiesForSearch:{table:{category:e.props,defaultValue:{summary:M().toString()}}},showInactiveBusinesses:{table:{category:e.props,defaultValue:{summary:x().toString()}}},showSubunits:{table:{category:e.props,defaultValue:{summary:E().toString()}}},showDeceasedPeople:{table:{category:e.props,defaultValue:{summary:C().toString()}}},title:{table:{category:e.props}},onClose:{control:!1,table:{category:e.event}},onEntitySelect:{control:!1,table:{category:e.event}},onLogout:{control:!1,table:{category:e.event}}},args:{me:d,people:b,businesses:f}},u={},l={render:S=>{const n=p.useRef(null),[g,i]=p.useState(),c=t=>{const r=t.currentTarget.lang;I.changeLanguage(v[r])},a=()=>{i(void 0)},s=()=>{var t;(t=n.current)==null||t.showModal()},m={name:"Ola Nordmann",personId:"10101012345",type:"Person"},k={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},P={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]};return o.jsxs(o.Fragment,{children:[o.jsx(L,{user:g,onLanguageClick:c,onLogInClick:s,onLogOutClick:a,onUserClick:()=>{var t;return(t=n.current)==null?void 0:t.showModal()}}),o.jsx(y,{ref:n,me:m,businesses:k,people:P,onEntitySelect:async t=>{var A;let r;t.name===m.name?r="meg":t.type==="Organization"?r="virksomhet":r="andre",i({role:r,name:t.name}),(A=n.current)==null||A.close()}})]})}};l.parameters=F;var z,D,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:"{} satisfies Story",...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var T,h,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [user, setUser] = useState<User>();
    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };
    const handleLogOut = (): void => {
      setUser(undefined);
    };
    const handleLogIn = (): void => {
      modalRef.current?.showModal();
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
        <TopBannerExternal user={user} onLanguageClick={handleLanguageClick} onLogInClick={handleLogIn} onLogOutClick={handleLogOut} onUserClick={(): void => modalRef.current?.showModal()} />
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
} satisfies Story`,...(N=(h=l.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const V=["Preview","WithExternalTopBanner"],Q=Object.freeze(Object.defineProperty({__proto__:null,Preview:u,WithExternalTopBanner:l,__namedExportsOrder:V,default:H},Symbol.toStringTag,{value:"Module"}));export{Q as R,l as W};
//# sourceMappingURL=RolePicker.stories-KO5Xgw9C.js.map
