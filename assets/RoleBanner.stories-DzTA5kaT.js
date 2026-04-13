import{m as i,c as r,j as e,C as x}from"./iframe-_BeEUj9n.js";import{L as h}from"./index-BcVMbygC.js";import{R as l,T as o}from"./index-dlUfCeWW.js";import{P as d}from"./index-CUk3vgdJ.js";import{e as f,a as u}from"./stories.utils-D-WWwTx3.js";const p=`.hiddenUserMenuButton {
  display: none;
}
`,S="_hiddenUserMenuButton_3ue9z_1",g={hiddenUserMenuButton:S},j={component:l,title:"Komponenter/RoleBanner",argTypes:{ref:{table:{category:r.baseProps}},id:{table:{category:r.baseProps}},className:{table:{category:r.baseProps}},lang:{table:{category:r.baseProps}},"data-testid":{table:{category:r.baseProps}},user:{table:{category:r.props}},isSticky:{table:{category:r.props,defaultValue:{summary:"undefined"}}}},args:{user:{name:"Ola Nordmann",role:"andre",identifier:i("12345678901")}}},s={},t={render:m=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{hasSpacing:!0,children:['Velg "logg inn" i ',e.jsx(h,{href:"#",onClick:c=>{c.preventDefault(),x("Sidetyper/Ekstern/Skjema Med Steg","Skjema Med Steg")()},children:"skjema med steg"})," for å se eksempel i kontekst."]}),e.jsx(l,{...m})]}),parameters:f},n={name:"Rollebanner for meg selv i skjemamodus",render:m=>e.jsxs(e.Fragment,{children:[e.jsx(o,{user:{role:"meg"},onLogOutClick:()=>alert("du logget ut"),children:e.jsx(o.UserMenu,{className:g.hiddenUserMenuButton,user:{role:"meg"}})}),e.jsx(l,{user:{name:"Ola Nordmann",role:"meg",identifier:i("12345678901")}}),e.jsx("main",{children:e.jsx(d,{children:"Hovedinnhold"})})]})};n.parameters=u(p);const a={name:"Rollebanner for andre i skjemamodus",render:m=>e.jsxs(e.Fragment,{children:[e.jsx(o,{user:{role:"meg"},onLogOutClick:()=>alert("du logget ut"),children:e.jsx(o.UserMenu,{className:g.hiddenUserMenuButton,user:{role:"meg"}})}),e.jsx(l,{user:{name:"Kari Nordmann",role:"andre",identifier:i("10101012345")}}),e.jsx("main",{children:e.jsx(d,{children:"Hovedinnhold"})})]})};a.parameters=u(p);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    return <>
        <Paragraph hasSpacing>
          {'Velg "logg inn" i '}
          <Link href={'#'} onClick={e => {
          e.preventDefault();
          linkTo('Sidetyper/Ekstern/Skjema Med Steg', 'Skjema Med Steg')();
        }}>
            {'skjema med steg'}
          </Link>
          {' for å se eksempel i kontekst.'}
        </Paragraph>
        <RoleBanner {...args} />
      </>;
  },
  parameters: exampleParameters
} satisfies Story`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Rollebanner for meg selv i skjemamodus',
  render: (_args): JSX.Element => {
    return <>
        <TopBannerExternal user={{
        role: 'meg'
      }} onLogOutClick={() => alert('du logget ut')}>
          <TopBannerExternal.UserMenu className={styles.hiddenUserMenuButton} user={{
          role: 'meg'
        }} />
        </TopBannerExternal>
        <RoleBanner user={{
        name: 'Ola Nordmann',
        role: 'meg',
        identifier: formatNationalIdentityNumber('12345678901')
      }} />
        <main>
          <Paragraph>{'Hovedinnhold'}</Paragraph>
        </main>
      </>;
  }
} satisfies Story`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Rollebanner for andre i skjemamodus',
  render: (_args): JSX.Element => {
    return <>
        <TopBannerExternal user={{
        role: 'meg'
      }} onLogOutClick={() => alert('du logget ut')}>
          <TopBannerExternal.UserMenu className={styles.hiddenUserMenuButton} user={{
          role: 'meg'
        }} />
        </TopBannerExternal>
        <RoleBanner user={{
        name: 'Kari Nordmann',
        role: 'andre',
        identifier: formatNationalIdentityNumber('10101012345')
      }} />
        <main>
          <Paragraph>{'Hovedinnhold'}</Paragraph>
        </main>
      </>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const k=["Preview","Examples","ExampleWithTopBannerExternalMegSelv","ExampleWithTopBannerExternalAndre"],P=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithTopBannerExternalAndre:a,ExampleWithTopBannerExternalMegSelv:n,Examples:t,Preview:s,__namedExportsOrder:k,default:j},Symbol.toStringTag,{value:"Module"}));export{t as E,P as R,n as a,a as b};
//# sourceMappingURL=RoleBanner.stories-DzTA5kaT.js.map
