import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{L as h,B as M}from"./index-yuNN44a_.js";import{R as g}from"./index-iIx-nC6Z.js";import{T as y}from"./index-DWDUoFhM.js";import{M as j}from"./index-B8sdZvb9.js";import{d as O,l as U}from"./index-CI44Z2h3.js";import{g as w,a as D}from"./TopBannerLangPicker-RXzljUs-.js";import{c as n,h as u}from"./helpers-CDRJ97Ot.js";import{c as _}from"./custom-logo-BtdQ4zfZ.js";import{s as P}from"./ske-logo-DSQNLHUx.js";import{e as V}from"./stories.utils-DTsHYhvm.js";const H={component:y,title:"Komponenter/TopBannerExternal",argTypes:{showSami:{table:{category:n.props,defaultValue:{summary:String(w())}}},defaultLocale:{table:{category:n.props,defaultValue:{summary:D()}}},children:{control:"text",table:{category:n.props}},skipLink:{table:{category:n.props}},logo:{table:{category:n.props},control:"select",options:["",_,P]},user:{table:{category:n.props}},firstColumn:{control:"text",table:{category:n.props}},secondColumn:{control:"text",table:{category:n.props}},thirdColumn:{control:"text",table:{category:n.props}},onLogInClick:{...u},onLogOutClick:{...u},onUserClick:{...u},onLanguageClick:{...u}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},a={},t={render:K=>{const l=c.useRef(null),m=c.useRef(null),[s,d]=c.useState(),[p,f]=c.useState(!1),S=e=>{const r=e.currentTarget.lang;O.changeLanguage(U[r])},T=()=>{d(void 0),f(!1)},b=()=>{var e;(e=l.current)==null||e.showModal()},E=e=>{f(!0);const r=e.target.value;d(r==="meg"?{role:r}:{role:r,name:"Knotten, Gudleik"})},B=[{href:"#storybook-root",text:"Skatt"},{href:"#storybook-root",text:"Avgift"},{href:"#storybook-root",text:"Folkeregisteret"}];return o.jsxs(o.Fragment,{children:[o.jsx(y,{ref:m,firstColumn:o.jsx(h,{children:B.map((e,r)=>o.jsx(h.Link,{href:e.href,onClick:G=>{var i,k;G.preventDefault(),(k=(i=m.current)==null?void 0:i.closeMenu)==null||k.call(i)},children:e.text},r))}),secondColumn:p?"Second column":"",thirdColumn:p?"Third column":"",user:s,onLanguageClick:S,onLogInClick:b,onLogOutClick:T,onUserClick:()=>{var e;return(e=l.current)==null?void 0:e.showModal()}}),o.jsxs(j,{ref:l,title:"Dette er dine roller",children:[o.jsxs(g,{legend:"Velge en rolle",selectedValue:(s==null?void 0:s.role)??"",onChange:E,children:[o.jsx(g.Radio,{value:"meg",children:"Innlogget som meg selv"}),o.jsx(g.Radio,{value:"andre",children:"Innlogget som annen person"}),o.jsx(g.Radio,{value:"virksomhet",children:"Innlogget som virksomhet"})]}),o.jsx(M,{onClick:()=>{var e;return(e=l.current)==null?void 0:e.close()},children:"Ok"})]})]})}};t.parameters=V;var L,x,C;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:"{} satisfies Story",...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var R,v,I;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    const handleChangeRole = (e: ChangeEvent<HTMLInputElement>): void => {
      setIsLoggedIn(true);
      const role = e.target.value as User['role'];
      if (role === 'meg') {
        setUser({
          role
        });
      } else {
        setUser({
          role,
          name: 'Knotten, Gudleik'
        });
      }
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
        <Modal ref={modalRef} title={'Dette er dine roller'}>
          <RadioGroup legend={'Velge en rolle'} selectedValue={user?.role ?? ''} onChange={handleChangeRole}>
            <RadioGroup.Radio value={'meg'}>
              {'Innlogget som meg selv'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'andre'}>
              {'Innlogget som annen person'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'virksomhet'}>
              {'Innlogget som virksomhet'}
            </RadioGroup.Radio>
          </RadioGroup>
          <Button onClick={(): void => modalRef.current?.close()}>
            {'Ok'}
          </Button>
        </Modal>
      </>;
  }
} satisfies Story`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const F=["Preview","Examples"],oe=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:a,__namedExportsOrder:F,default:H},Symbol.toStringTag,{value:"Module"}));export{t as E,oe as T};
//# sourceMappingURL=TopBannerExternal.stories-DdjkGzED.js.map
