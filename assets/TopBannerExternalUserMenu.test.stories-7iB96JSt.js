import{j as pn}from"./jsx-runtime-BjG_zV1W.js";import{f as C,w as c,e as t,u as i,b as un}from"./index-DIxTUSTt.js";import{d as s}from"./index-CGk5cNE3.js";import{a as dn}from"./index-FmG4s-WC.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfnG5Ebn.js";import"./index-DAV9Xejq.js";import"./index-uxUkjR_c.js";import"./index-DXWIZOJk.js";import"./index-DqufxDJQ.js";import"./DatePickerCalendar-PuG5IodJ.js";import"./LabelWithHelp-B8AAT5XN.js";import"./Help-ChcS7hng.js";import"./index-Bid14VJj.js";import"./index-CWrHDE5u.js";import"./TopBannerButton-gnYzOY4E.js";import"./floating-ui.react-ayiMHenP.js";import"./index-D9u29hOa.js";import"./TopBannerLangPicker-D9vesMnm.js";import"./TopBannerLangPickerButton-uUMcnrZP.js";import"./TopBannerLogo-CQvHH4Ba.js";import"./TopBannerSkipLink-D3ySv9rb.js";import"./TopBannerUserButton-CFB1INkH.js";const Mn={title:"Tester/TopBanner/TopBannerExternalUserMenu",component:dn,argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},notificationCount:{table:{disable:!0}},hostname:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},children:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onSwitchUserClick:{table:{disable:!0}}},args:{onSwitchUserClick:C(),user:{name:"Buljo Tulljo",role:"virksomhet",orgnr:"123456789",person:{name:"Buljo Tulljo",personId:"6969420420",type:""}},notificationCount:5}},u=s.t("ds_layout:topbannerbutton.Menu"),l=s.t("ds_layout:topbannerbutton.CompanyTitle"),m="Buljo Tulljo",p={name:"With Defaults (A1, A2, B1, B2)",play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-expanded","false"),await i.click(a),await t(a).toHaveAttribute("aria-expanded","true");const r=a.nextSibling,x=c(r).getByText("Buljo Tulljo".toUpperCase());await t(x).toBeInTheDocument();const ln=c(r).getByText(`${s.t("ds_overlays:rolepicker.BusinessDescriptionPrefix")} 123 456 789`);await t(ln).toBeInTheDocument();const mn=n.getByText("5");await t(mn).toBeInTheDocument()}},d={name:"No Notifications",args:{notificationCount:0},argTypes:{notificationCount:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByTestId("varsel-circle");await t(a).not.toBeInTheDocument()}},B={name:"More Than 99 Notifications (A3)",args:{notificationCount:100},argTypes:{notificationCount:{table:{disable:!1}}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await i.click(a);const r=n.getByText("99+");await t(r).toBeInTheDocument()}},h={args:{onSwitchUserClick:C()},parameters:{imageSnapshot:{disable:!0}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await i.click(a);const r=n.getByRole("button",{name:"Bytt bruker"});await t(r).toBeInTheDocument(),await i.click(r),await un(()=>t(o.onSwitchUserClick).toHaveBeenCalled())}},y={args:{onLogOutClick:C(),notificationCount:0},parameters:{imageSnapshot:{disable:!0}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u}`});await t(a).toBeInTheDocument(),await i.click(a);const r=n.getByRole("button",{name:"Logg ut"});await t(r).toBeInTheDocument(),await i.click(r),await un(()=>t(o.onLogOutClick).toHaveBeenCalled())}},g={name:'No "På vegne av"',args:{user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${s.t("ds_layout:topbannerbutton.MyselfTitle")} ${s.t("ds_layout:topbannerbutton.Myself")} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByText("På vegne av");await t(a).not.toBeInTheDocument()}},v={name:"With Custom Children (A6)",args:{children:pn.jsx("div",{"data-testid":"usermenu-child",children:"Child"}),notificationCount:0},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await i.click(n);const a=e.getByTestId("usermenu-child");await t(a).toBeInTheDocument(),await t(a).toHaveTextContent("Child")}},w={args:{user:{name:"Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals",role:"virksomhet",orgnr:"123456789"}}},b={name:"Escape Key Returns Focus to Button (C2)",args:{notificationCount:0},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:o})=>{const n=c(o).getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n),await t(n).toHaveAttribute("aria-expanded","true"),await i.keyboard("{Escape}"),await t(n).toHaveAttribute("aria-expanded","false"),await t(n).toHaveFocus()}},f={name:"With No onSwitchUserClick",args:{onSwitchUserClick:void 0,notificationCount:0},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByRole("button",{name:s.t("ds_overlays:topbannerexternalusermenu.SwitchUser")});await t(a).not.toBeInTheDocument()}},T={name:"With Custom Hostname (A7)",args:{hostname:"test.skatteetaten.no",notificationCount:0},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.getByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.Notification")});await t(a).toHaveAttribute("href","https://test.skatteetaten.no/web/minside/virksomhet/varsler")}},k={name:"With Hidden Default Links (A8)",args:{hideDefaultLinks:!0,user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0,onSwitchUserClick:void 0,children:"Child"},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${s.t("ds_layout:topbannerbutton.MyselfTitle")} ${s.t("ds_layout:topbannerbutton.Myself")} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.Notifications")});await t(a).not.toBeInTheDocument();const r=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.MyPage")});await t(r).not.toBeInTheDocument();const x=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.AboutOrganization")});await t(x).not.toBeInTheDocument()}};var I,$,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Defaults (A1, A2, B1, B2)',
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText} \${dsI18n.t('ds_overlays:topbannerexternalusermenu.NotificationCountMessage', {
        count: args.notificationCount
      })}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const userMenu = menuButton.nextSibling as HTMLDivElement;
    const userName = within(userMenu).getByText('Buljo Tulljo'.toUpperCase());
    await expect(userName).toBeInTheDocument();
    const orgnr = within(userMenu).getByText(\`\${dsI18n.t('ds_overlays:rolepicker.BusinessDescriptionPrefix')} 123 456 789\`);
    await expect(orgnr).toBeInTheDocument();
    const notificationAmount = canvas.getByText('5');
    await expect(notificationAmount).toBeInTheDocument();
  }
}`,...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var E,N,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'No Notifications',
  args: {
    notificationCount: 0
  },
  argTypes: {
    notificationCount: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    // Sjekker at varsel-sirkelen ikke er synlig
    const varselCircle = canvas.queryByTestId('varsel-circle');
    await expect(varselCircle).not.toBeInTheDocument();
  }
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var S,U,L;B.parameters={...B.parameters,docs:{...(S=B.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'More Than 99 Notifications (A3)',
  args: {
    notificationCount: 100
  },
  argTypes: {
    notificationCount: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText} \${dsI18n.t('ds_overlays:topbannerexternalusermenu.NotificationCountMessage', {
        count: args.notificationCount
      })}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const notificationAmount = canvas.getByText('99+');
    await expect(notificationAmount).toBeInTheDocument();
  }
}`,...(L=(U=B.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var A,_,H;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onSwitchUserClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText} \${dsI18n.t('ds_overlays:topbannerexternalusermenu.NotificationCountMessage', {
        count: args.notificationCount
      })}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const switchUserButton = canvas.getByRole('button', {
      name: 'Bytt bruker'
    });
    await expect(switchUserButton).toBeInTheDocument();
    await userEvent.click(switchUserButton);
    await waitFor(() => expect(args.onSwitchUserClick).toHaveBeenCalled());
  }
}`,...(H=(_=h.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var M,W,j;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    onLogOutClick: fn(),
    notificationCount: 0
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const logOutButton = canvas.getByRole('button', {
      name: 'Logg ut'
    });
    await expect(logOutButton).toBeInTheDocument();
    await userEvent.click(logOutButton);
    await waitFor(() => expect(args.onLogOutClick).toHaveBeenCalled());
  }
}`,...(j=(W=y.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var O,P,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'No "På vegne av"',
  args: {
    user: {
      name: 'Buljo Tulljo',
      role: 'meg'
    },
    notificationCount: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${dsI18n.t('ds_layout:topbannerbutton.MyselfTitle')} \${dsI18n.t('ds_layout:topbannerbutton.Myself')} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const onBehalfOfText = canvas.queryByText('På vegne av');
    await expect(onBehalfOfText).not.toBeInTheDocument();
  }
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var F,K,z;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Custom Children (A6)',
  args: {
    children: <div data-testid={'usermenu-child'}>{'Child'}</div>,
    notificationCount: 0
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText}\`
    });
    await userEvent.click(menuButton);
    const customChild = canvas.getByTestId('usermenu-child');
    await expect(customChild).toBeInTheDocument();
    await expect(customChild).toHaveTextContent('Child');
  }
}`,...(z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var V,Y,G;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals',
      role: 'virksomhet',
      orgnr: '123456789'
    }
  }
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Escape Key Returns Focus to Button (C2)',
  args: {
    notificationCount: 0
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Escape}');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toHaveFocus();
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,nn,tn;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With No onSwitchUserClick',
  args: {
    onSwitchUserClick: undefined,
    notificationCount: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const switchUserButton = canvas.queryByRole('button', {
      name: dsI18n.t('ds_overlays:topbannerexternalusermenu.SwitchUser')
    });
    await expect(switchUserButton).not.toBeInTheDocument();
  }
}`,...(tn=(nn=f.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var en,an,on;T.parameters={...T.parameters,docs:{...(en=T.parameters)==null?void 0:en.docs,source:{originalSource:`{
  name: 'With Custom Hostname (A7)',
  args: {
    hostname: 'test.skatteetaten.no',
    notificationCount: 0
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${userIconTitle} \${defaultUserName} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const notificationLink = canvas.getByRole('link', {
      name: dsI18n.t('ds_overlays:topbannerexternalusermenu.Notification')
    });
    await expect(notificationLink).toHaveAttribute('href', 'https://test.skatteetaten.no/web/minside/virksomhet/varsler');
  }
}`,...(on=(an=T.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var sn,cn,rn;k.parameters={...k.parameters,docs:{...(sn=k.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  name: 'With Hidden Default Links (A8)',
  args: {
    hideDefaultLinks: true,
    user: {
      name: 'Buljo Tulljo',
      role: 'meg'
    },
    notificationCount: 0,
    onSwitchUserClick: undefined,
    children: 'Child'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: \`\${dsI18n.t('ds_layout:topbannerbutton.MyselfTitle')} \${dsI18n.t('ds_layout:topbannerbutton.Myself')} \${menuText}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    // Check that notifications link is hidden
    const notificationLink = canvas.queryByRole('link', {
      name: dsI18n.t('ds_overlays:topbannerexternalusermenu.Notifications')
    });
    await expect(notificationLink).not.toBeInTheDocument();

    // Check that myPage link is hidden
    const myPageLink = canvas.queryByRole('link', {
      name: dsI18n.t('ds_overlays:topbannerexternalusermenu.MyPage')
    });
    await expect(myPageLink).not.toBeInTheDocument();

    // Check that about link is hidden
    const aboutLink = canvas.queryByRole('link', {
      name: dsI18n.t('ds_overlays:topbannerexternalusermenu.AboutOrganization')
    });
    await expect(aboutLink).not.toBeInTheDocument();
  }
}`,...(rn=(cn=k.parameters)==null?void 0:cn.docs)==null?void 0:rn.source}}};const Wn=["Default","WithNoNotifications","WithMoreThan99Notifications","SwitchUser","LogOut","NoPaaVegneAv","WithChildren","WithLongBusinessName","EscapeKeyFocusReturn","WithNoOnSwitchUserClick","WithCustomHostname","WithHiddenLinks"];export{p as Default,b as EscapeKeyFocusReturn,y as LogOut,g as NoPaaVegneAv,h as SwitchUser,v as WithChildren,T as WithCustomHostname,k as WithHiddenLinks,w as WithLongBusinessName,B as WithMoreThan99Notifications,d as WithNoNotifications,f as WithNoOnSwitchUserClick,Wn as __namedExportsOrder,Mn as default};
//# sourceMappingURL=TopBannerExternalUserMenu.test.stories-7iB96JSt.js.map
