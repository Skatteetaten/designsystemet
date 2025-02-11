import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{L as f}from"./index-CT5qi75N.js";import{T}from"./index-_nuyvf81.js";import{R as E}from"./index-D1Hhakcg.js";import{d as R,l as A}from"./index-qxaMszO_.js";import{g as B,a as N}from"./TopBannerLangPicker-kC0pbnf7.js";import{c as n,h as u}from"./helpers-Dccz2jQ-.js";import{c as P}from"./custom-logo-BrHcv9Ci.js";import{s as M}from"./ske-logo-BWJ74hw_.js";import{e as U}from"./stories.utils-Ys3NG0dr.js";const y={name:"Ola Nordmann",personId:"101010 12345",type:"Person"},j={total:12,list:[{name:"Costco",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Facebook",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"AS"}]},{name:"Instagram",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]},{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Toshiba",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"AS"}]},w={total:4,list:[{name:"Antikvitet presis",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1}]},_={component:T,title:"Komponenter/TopBannerExternal",argTypes:{showSami:{table:{category:n.props,defaultValue:{summary:String(B())}}},defaultLocale:{table:{control:"text",category:n.props,defaultValue:{summary:N()}}},children:{control:"text",table:{category:n.props}},skipLink:{table:{category:n.props}},logo:{table:{category:n.props},control:"select",options:["",P,M]},user:{table:{category:n.props}},firstColumn:{control:"text",table:{category:n.props}},secondColumn:{control:"text",table:{category:n.props}},thirdColumn:{control:"text",table:{category:n.props}},additionalLanguages:{table:{category:n.props}},onLogInClick:{...u},onLogOutClick:{...u},onUserClick:{...u},onLanguageClick:{...u}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},r={},a={render:F=>{const s=c.useRef(null),m=c.useRef(null),[C,g]=c.useState(),[p,z]=c.useState(!1),I=e=>{const o=e.currentTarget.lang;R.changeLanguage(A[o])},O=()=>{g(void 0),z(!1)},v=()=>{var e;(e=s.current)==null||e.showModal()},D=[{href:"#storybook-root",text:"Skatt"},{href:"#storybook-root",text:"Avgift"},{href:"#storybook-root",text:"Folkeregisteret"}];return t.jsxs(t.Fragment,{children:[t.jsx(T,{ref:m,firstColumn:t.jsx(f,{children:D.map((e,o)=>t.jsx(f.Link,{href:e.href,onClick:i=>{var l,d;i.preventDefault(),(d=(l=m.current)==null?void 0:l.closeMenu)==null||d.call(l)},children:e.text},o))}),secondColumn:p?"Second column":"",thirdColumn:p?"Third column":"",user:C,onLanguageClick:I,onLogInClick:v,onLogOutClick:O,onUserClick:()=>{var e;return(e=s.current)==null?void 0:e.showModal()}}),t.jsx(E,{ref:s,me:y,businesses:j,people:w,onEntitySelect:async e=>{var i;let o;e.name===y.name?o="meg":e.type==="Organization"?o="virksomhet":o="andre",g({role:o,name:e.name}),(i=s.current)==null||i.close()}})]})}};a.parameters=U;var k,L,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:"{} satisfies Story",...(h=(L=r.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var b,S,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };
    const handleLogOut = (): void => {
      setUser(undefined);
      setIsLoggedIn(false);
    };
    const handleLogIn = (): void => {
      modalRef.current?.showModal();
    };
    const links = [{
      href: '#storybook-root',
      text: 'Skatt'
    }, {
      href: '#storybook-root',
      text: 'Avgift'
    }, {
      href: '#storybook-root',
      text: 'Folkeregisteret'
    }];
    return <>
        <TopBannerExternal ref={topBannerRef} firstColumn={<LinkGroup>
              {links.map((link, index) => <LinkGroup.Link key={index} href={link.href} onClick={(e): void => {
          e.preventDefault();
          topBannerRef.current?.closeMenu?.();
        }}>
                  {link.text}
                </LinkGroup.Link>)}
            </LinkGroup>} secondColumn={isLoggedIn ? 'Second column' : ''} thirdColumn={isLoggedIn ? 'Third column' : ''} user={user} onLanguageClick={handleLanguageClick} onLogInClick={handleLogIn} onLogOutClick={handleLogOut} onUserClick={(): void => modalRef.current?.showModal()} />
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
} satisfies Story`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const G=["Preview","Examples"],ee=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:r,__namedExportsOrder:G,default:_},Symbol.toStringTag,{value:"Module"}));export{a as E,ee as T};
//# sourceMappingURL=TopBannerExternal.stories-Dy9QZ9ld.js.map
