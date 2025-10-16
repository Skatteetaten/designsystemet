import{j as yn,d as s}from"./iframe-DRo7xN6O.js";import{a as gn}from"./index-D7FhWP7R.js";const{expect:t,fn:$,userEvent:i,waitFor:pn,within:c}=__STORYBOOK_MODULE_TEST__,vn={title:"Tester/TopBanner/TopBannerExternalUserMenu",component:gn,argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},notificationCount:{table:{disable:!0}},hostname:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},children:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onSwitchUserClick:{table:{disable:!0}}},args:{onSwitchUserClick:$(),user:{name:"Buljo Tulljo",role:"virksomhet",orgnr:"123456789",person:{name:"Buljo Tulljo",personId:"6969420420",type:""}},notificationCount:5},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u=s.t("ds_layout:topbannerbutton.Menu"),l=s.t("ds_layout:topbannerbutton.CompanyTitle"),m="Buljo Tulljo",d={name:"With Defaults (A1, A2, B1, B2)",play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-expanded","false"),await i.click(a),await t(a).toHaveAttribute("aria-expanded","true");const r=a.nextSibling,C=c(r).getByText("Buljo Tulljo".toUpperCase());await t(C).toBeInTheDocument();const Bn=c(r).getByText(`${s.t("ds_overlays:rolepicker.BusinessDescriptionPrefix")} 123 456 789`);await t(Bn).toBeInTheDocument();const hn=n.getByText("5");await t(hn).toBeInTheDocument()}},p={name:"No Notifications",args:{notificationCount:0},argTypes:{notificationCount:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByTestId("varsel-circle");await t(a).not.toBeInTheDocument()}},B={name:"One Notification",args:{notificationCount:1},argTypes:{notificationCount:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.OneNotificationMessage")}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.getByText("1");await t(a).toBeInTheDocument()}},h={name:"More Than 99 Notifications (A3)",args:{notificationCount:100},argTypes:{notificationCount:{table:{disable:!1}}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await i.click(a);const r=n.getByText("99+");await t(r).toBeInTheDocument()}},y={args:{onSwitchUserClick:$()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await i.click(a);const r=n.getByRole("button",{name:"Bytt bruker"});await t(r).toBeInTheDocument(),await i.click(r),await pn(()=>t(o.onSwitchUserClick).toHaveBeenCalled())}},g={args:{onLogOutClick:$(),notificationCount:0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${u}`});await t(a).toBeInTheDocument(),await i.click(a);const r=n.getByRole("button",{name:"Logg ut"});await t(r).toBeInTheDocument(),await i.click(r),await pn(()=>t(o.onLogOutClick).toHaveBeenCalled())}},v={name:'No "På vegne av"',args:{user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${s.t("ds_layout:topbannerbutton.MyselfTitle")} ${s.t("ds_layout:topbannerbutton.Myself")} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByText("På vegne av");await t(a).not.toBeInTheDocument()}},b={name:"With Custom Children (A6)",args:{children:yn.jsx("div",{"data-testid":"usermenu-child",children:"Child"}),notificationCount:0},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await i.click(n);const a=e.getByTestId("usermenu-child");await t(a).toBeInTheDocument(),await t(a).toHaveTextContent("Child")}},w={args:{user:{name:"Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals",role:"virksomhet",orgnr:"123456789"}}},f={name:"Escape Key Returns Focus to Button (C2)",args:{notificationCount:0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:o})=>{const n=c(o).getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n),await t(n).toHaveAttribute("aria-expanded","true"),await i.keyboard("{Escape}"),await t(n).toHaveAttribute("aria-expanded","false"),await t(n).toHaveFocus()}},T={name:"With No onSwitchUserClick",args:{onSwitchUserClick:void 0,notificationCount:0},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByRole("button",{name:s.t("ds_overlays:topbannerexternalusermenu.SwitchUser")});await t(a).not.toBeInTheDocument()}},k={name:"With Custom Hostname (A7)",args:{hostname:"test.skatteetaten.no",notificationCount:0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.getByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.Notification")});await t(a).toHaveAttribute("href","https://test.skatteetaten.no/web/minside/virksomhet/varsler")}},x={name:"With Hidden Default Links (A8)",args:{hideDefaultLinks:!0,user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0,onSwitchUserClick:void 0,children:"Child"},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${s.t("ds_layout:topbannerbutton.MyselfTitle")} ${s.t("ds_layout:topbannerbutton.Myself")} ${u}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.Notifications")});await t(a).not.toBeInTheDocument();const r=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.MyPage")});await t(r).not.toBeInTheDocument();const C=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.AboutOrganization")});await t(C).not.toBeInTheDocument()}};var I,D,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var E,N,R;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,_,A;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'One Notification',
  args: {
    notificationCount: 1
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
      name: \`\${userIconTitle} \${defaultUserName} \${menuText} \${dsI18n.t('ds_overlays:topbannerexternalusermenu.OneNotificationMessage')}\`
    });
    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    const notificationAmount = canvas.getByText('1');
    await expect(notificationAmount).toBeInTheDocument();
  }
}`,...(A=(_=B.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,M,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var H,W,j;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    onSwitchUserClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
}`,...(j=(W=y.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var P,q,F;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    onLogOutClick: fn(),
    notificationCount: 0
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
}`,...(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var K,z,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var V,G,J;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals',
      role: 'virksomhet',
      orgnr: '123456789'
    }
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var nn,tn,en;f.parameters={...f.parameters,docs:{...(nn=f.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  name: 'Escape Key Returns Focus to Button (C2)',
  args: {
    notificationCount: 0
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
}`,...(en=(tn=f.parameters)==null?void 0:tn.docs)==null?void 0:en.source}}};var an,on,sn;T.parameters={...T.parameters,docs:{...(an=T.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(sn=(on=T.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var cn,rn,un;k.parameters={...k.parameters,docs:{...(cn=k.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  name: 'With Custom Hostname (A7)',
  args: {
    hostname: 'test.skatteetaten.no',
    notificationCount: 0
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
}`,...(un=(rn=k.parameters)==null?void 0:rn.docs)==null?void 0:un.source}}};var ln,mn,dn;x.parameters={...x.parameters,docs:{...(ln=x.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(dn=(mn=x.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};const bn=["Default","WithNoNotifications","WithOneNotification","WithMoreThan99Notifications","SwitchUser","LogOut","NoPaaVegneAv","WithChildren","WithLongBusinessName","EscapeKeyFocusReturn","WithNoOnSwitchUserClick","WithCustomHostname","WithHiddenLinks"],Tn=Object.freeze(Object.defineProperty({__proto__:null,Default:d,EscapeKeyFocusReturn:f,LogOut:g,NoPaaVegneAv:v,SwitchUser:y,WithChildren:b,WithCustomHostname:k,WithHiddenLinks:x,WithLongBusinessName:w,WithMoreThan99Notifications:h,WithNoNotifications:p,WithNoOnSwitchUserClick:T,WithOneNotification:B,__namedExportsOrder:bn,default:vn},Symbol.toStringTag,{value:"Module"}));export{Tn as T};
//# sourceMappingURL=TopBannerExternalUserMenu.test.stories-BXLeN3Mu.js.map
