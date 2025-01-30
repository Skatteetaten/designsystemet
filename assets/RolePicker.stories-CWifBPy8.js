import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{B as L}from"./index-U0B695k8.js";import{d as v,l as R}from"./index--O6iZ70i.js";import{a as C}from"./index-3rMk6jj3.js";import{R as d,g as E,a as P,h as x,i as j,j as A}from"./index-D1gqbwNK.js";import{c as n}from"./helpers-Dccz2jQ-.js";import{e as I}from"./stories.utils-Ys3NG0dr.js";const m={name:"Ola Nordmann",personId:"101010 12345",type:"Person"},y={total:12,list:[{name:"Costco",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Facebook",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"AS"}]},{name:"Instagram",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]},{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Toshiba",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"AS"}]},f={total:4,list:[{name:"Antikvitet presis",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1}]},M={component:d,title:"Komponenter/RolePicker",render:b=>{const[t,g]=u.useState(),r=u.useRef(null),p=async a=>{var e;let s;a.name===m.name?s="meg":a.type==="Organization"?s="virksomhet":s="andre",g({role:s,name:a.name}),(e=r.current)==null||e.close()};return o.jsxs(o.Fragment,{children:[o.jsx(L,{onClick:()=>{var a;return(a=r.current)==null?void 0:a.showModal()},children:t?(t==null?void 0:t.role)==="meg"?"Meg selv":t==null?void 0:t.name:"Åpne representasjonsvelger"}),o.jsx(d,{ref:r,me:m,businesses:y,people:f,...b,onEntitySelect:p})]})},argTypes:{children:{control:!1,table:{category:n.props}},me:{control:"object",table:{category:n.props}},people:{control:"object",table:{category:n.props}},businesses:{control:"object",table:{category:n.props}},dismissOnEsc:{table:{category:n.props,defaultValue:{summary:E().toString()}}},dismissOnOutsideClick:{table:{category:n.props,defaultValue:{summary:P().toString()}}},hideCloseButton:{table:{category:n.props,defaultValue:{summary:x().toString()}}},showInactiveBusinesses:{table:{category:n.props,defaultValue:{summary:j().toString()}}},showSubunits:{table:{category:n.props,defaultValue:{summary:A().toString()}}},title:{table:{category:n.props}},onClose:{control:!1,table:{category:n.event}},onEntitySelect:{control:!1,table:{category:n.event}},onLogout:{control:!1,table:{category:n.event}}},args:{me:m,people:f,businesses:y}},c={},i={render:b=>{const t=u.useRef(null),[g,r]=u.useState(),p=e=>{const l=e.currentTarget.lang;v.changeLanguage(R[l])},a=()=>{r(void 0)},s=()=>{var e;(e=t.current)==null||e.showModal()};return o.jsxs(o.Fragment,{children:[o.jsx(C,{user:g,onLanguageClick:p,onLogInClick:s,onLogOutClick:a,onUserClick:()=>{var e;return(e=t.current)==null?void 0:e.showModal()}}),o.jsx(d,{ref:t,me:m,businesses:y,people:f,onEntitySelect:async e=>{var S;let l;e.name===m.name?l="meg":e.type==="Organization"?l="virksomhet":l="andre",r({role:l,name:e.name}),(S=t.current)==null||S.close()}})]})}};i.parameters=I;var h,O,z;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"{} satisfies Story",...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var k,T,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const N=["Preview","WithExternalTopBanner"],G=Object.freeze(Object.defineProperty({__proto__:null,Preview:c,WithExternalTopBanner:i,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{G as R,i as W};
//# sourceMappingURL=RolePicker.stories-CWifBPy8.js.map
