import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-D_ouKaeX.js";import{B as T}from"./index-eDVrZHQi.js";import{d as R,l as L}from"./index-ChzTQA-a.js";import{T as v}from"./index-DyriRbJa.js";import{h as P,i as E,j as C,k as x,l as j,b as I,c as N,R as d}from"./index-DoReeGMy.js";import{c as e}from"./helpers-B7KPg_So.js";import{e as M}from"./stories.utils-Ys3NG0dr.js";const u={name:"Ola Nordmann",personId:"10101012345",type:"Person"},y={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},f={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},w={component:d,title:"Komponenter/RolePicker",render:S=>{const[t,g]=m.useState(),r=m.useRef(null),p=async a=>{var n;let s;a.name===u.name?s="meg":a.type==="Organization"?s="virksomhet":s="andre",g({role:s,name:a.name}),(n=r.current)==null||n.close()};return o.jsxs(o.Fragment,{children:[o.jsx(T,{onClick:()=>{var a;return(a=r.current)==null?void 0:a.showModal()},children:t?(t==null?void 0:t.role)==="meg"?"Meg selv":t==null?void 0:t.name:"Åpne representasjonsvelger"}),o.jsx(d,{ref:r,me:u,businesses:y,people:f,...S,onEntitySelect:p})]})},argTypes:{children:{control:!1,table:{category:e.props}},me:{control:"object",table:{category:e.props}},people:{control:"object",table:{category:e.props}},businesses:{control:"object",table:{category:e.props}},dismissOnEsc:{table:{category:e.props,defaultValue:{summary:N().toString()}}},dismissOnOutsideClick:{table:{category:e.props,defaultValue:{summary:I().toString()}}},hideCloseButton:{table:{category:e.props,defaultValue:{summary:j().toString()}}},minimumEntitiesForSearch:{table:{category:e.props,defaultValue:{summary:x().toString()}}},showInactiveBusinesses:{table:{category:e.props,defaultValue:{summary:C().toString()}}},showSubunits:{table:{category:e.props,defaultValue:{summary:E().toString()}}},showDeceasedPeople:{table:{category:e.props,defaultValue:{summary:P().toString()}}},title:{table:{category:e.props}},onClose:{control:!1,table:{category:e.event}},onEntitySelect:{control:!1,table:{category:e.event}},onLogout:{control:!1,table:{category:e.event}}},args:{me:u,people:f,businesses:y}},c={},i={render:S=>{const t=m.useRef(null),[g,r]=m.useState(),p=n=>{const l=n.currentTarget.lang;R.changeLanguage(L[l])},a=()=>{r(void 0)},s=()=>{var n;(n=t.current)==null||n.showModal()};return o.jsxs(o.Fragment,{children:[o.jsx(v,{user:g,onLanguageClick:p,onLogInClick:s,onLogOutClick:a,onUserClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()}}),o.jsx(d,{ref:t,me:u,businesses:y,people:f,onEntitySelect:async n=>{var b;let l;n.name===u.name?l="meg":n.type==="Organization"?l="virksomhet":l="andre",r({role:l,name:n.name}),(b=t.current)==null||b.close()}})]})}};i.parameters=M;var h,k,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"{} satisfies Story",...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,O,z;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(O=i.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const B=["Preview","WithExternalTopBanner"],K=Object.freeze(Object.defineProperty({__proto__:null,Preview:c,WithExternalTopBanner:i,__namedExportsOrder:B,default:w},Symbol.toStringTag,{value:"Module"}));export{K as R,i as W};
//# sourceMappingURL=RolePicker.stories-Dj9UR7LP.js.map
