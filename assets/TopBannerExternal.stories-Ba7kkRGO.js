import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-7h80QhK_.js";import{L as f}from"./index-TStLVSlm.js";import{T as A}from"./index-XLCM6Ud4.js";import{R as v}from"./index-w6speL5o.js";import{d as R,l as E}from"./index-EsEcB_zD.js";import{g as N,a as B}from"./TopBannerLangPicker-CvKH5_mx.js";import{h as u,c as n}from"./helpers-BRYKCfPN.js";import{c as P}from"./custom-logo-Bf6pzwMZ.js";import{s as M}from"./ske-logo-D1oha_CV.js";import{e as U}from"./stories.utils-Ys3NG0dr.js";const y={name:"Ola Nordmann",personId:"10101012345",type:"Person"},j={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},w={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},_={component:A,title:"Komponenter/TopBannerExternal",argTypes:{showSami:{table:{category:n.props,defaultValue:{summary:String(B())}}},defaultLocale:{table:{control:"text",category:n.props,defaultValue:{summary:N()}}},children:{control:"text",table:{category:n.props}},skipLink:{control:!1,table:{category:n.props}},logo:{table:{category:n.props},control:"select",options:["",P,M]},user:{control:!1,table:{category:n.props}},firstColumn:{control:"text",table:{category:n.props}},secondColumn:{control:"text",table:{category:n.props}},thirdColumn:{control:"text",table:{category:n.props}},additionalLanguages:{control:!1,table:{category:n.props}},onLogInClick:{...u},onLogOutClick:{...u},onUserClick:{...u},onLanguageClick:{...u}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},r={},a={render:G=>{const s=c.useRef(null),m=c.useRef(null),[T,g]=c.useState(),[p,C]=c.useState(!1),z=e=>{const o=e.currentTarget.lang;R.changeLanguage(E[o])},I=()=>{g(void 0),C(!1)},O=()=>{var e;(e=s.current)==null||e.showModal()},D=[{href:"#storybook-root",text:"Skatt"},{href:"#storybook-root",text:"Avgift"},{href:"#storybook-root",text:"Folkeregisteret"}];return t.jsxs(t.Fragment,{children:[t.jsx(A,{ref:m,firstColumn:t.jsx(f,{children:D.map((e,o)=>t.jsx(f.Link,{href:e.href,onClick:i=>{var l,d;i.preventDefault(),(d=(l=m.current)==null?void 0:l.closeMenu)==null||d.call(l)},children:e.text},o))}),secondColumn:p?"Second column":"",thirdColumn:p?"Third column":"",user:T,onLanguageClick:z,onLogInClick:O,onLogOutClick:I,onUserClick:()=>{var e;return(e=s.current)==null?void 0:e.showModal()}}),t.jsx(v,{ref:s,me:y,businesses:j,people:w,onEntitySelect:async e=>{var i;let o;e.name===y.name?o="meg":e.type==="Organization"?o="virksomhet":o="andre",g({role:o,name:e.name}),(i=s.current)==null||i.close()}})]})}};a.parameters=U;var k,L,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:"{} satisfies Story",...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var h,b,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const F=["Preview","Examples"],ee=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:r,__namedExportsOrder:F,default:_},Symbol.toStringTag,{value:"Module"}));export{a as E,ee as T};
//# sourceMappingURL=TopBannerExternal.stories-Ba7kkRGO.js.map
