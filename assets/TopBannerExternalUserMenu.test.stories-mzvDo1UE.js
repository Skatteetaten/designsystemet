import{j as E,d as s}from"./iframe-VHQh6taY.js";import{T as N}from"./index-B_yqNyPt.js";const{expect:t,fn:$,userEvent:i,waitFor:I,within:c}=__STORYBOOK_MODULE_TEST__,R={title:"Tester/TopBannerExternal/UserMenu",component:N.UserMenu,argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},notificationCount:{table:{disable:!0}},hostname:{table:{disable:!0}},hideDefaultLinks:{table:{disable:!0}},children:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onSwitchUserClick:{table:{disable:!0}}},args:{onSwitchUserClick:$(),user:{name:"Buljo Tulljo",role:"virksomhet",orgnr:"123456789",person:{name:"Buljo Tulljo",personId:"6969420420",type:""}},notificationCount:5},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=s.t("ds_layout:topbannerbutton.Menu"),l=s.t("ds_layout:topbannerbutton.CompanyTitle"),m="Buljo Tulljo",d={name:"With Defaults (A1, A2, B1, B2)",play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${r} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-expanded","false"),await i.click(a),await t(a).toHaveAttribute("aria-expanded","true");const u=a.nextSibling,C=c(u).getByText("Buljo Tulljo".toUpperCase());await t(C).toBeInTheDocument();const D=c(u).getByText(`${s.t("ds_overlays:rolepicker.BusinessDescriptionPrefix")} 123 456 789`);await t(D).toBeInTheDocument();const S=n.getByText("5");await t(S).toBeInTheDocument()}},p={name:"No Notifications",args:{notificationCount:0},argTypes:{notificationCount:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${r}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByTestId("varsel-circle");await t(a).not.toBeInTheDocument()}},B={name:"One Notification",args:{notificationCount:1},argTypes:{notificationCount:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${r} ${s.t("ds_overlays:topbannerexternalusermenu.OneNotificationMessage")}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.getByText("1");await t(a).toBeInTheDocument()}},h={name:"More Than 99 Notifications (A3)",args:{notificationCount:100},argTypes:{notificationCount:{table:{disable:!1}}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${r} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await i.click(a);const u=n.getByText("99+");await t(u).toBeInTheDocument()}},y={args:{onSwitchUserClick:$()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${r} ${s.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(a).toBeInTheDocument(),await i.click(a);const u=n.getByRole("button",{name:"Bytt bruker"});await t(u).toBeInTheDocument(),await i.click(u),await I(()=>t(o.onSwitchUserClick).toHaveBeenCalled())}},g={args:{onLogOutClick:$(),notificationCount:0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:o,canvasElement:e})=>{const n=c(e),a=n.getByRole("button",{name:`${l} ${m} ${r}`});await t(a).toBeInTheDocument(),await i.click(a);const u=n.getByRole("button",{name:"Logg ut"});await t(u).toBeInTheDocument(),await i.click(u),await I(()=>t(o.onLogOutClick).toHaveBeenCalled())}},v={name:'No "På vegne av"',args:{user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${s.t("ds_layout:topbannerbutton.MyselfTitle")} ${s.t("ds_layout:topbannerbutton.Myself")} ${r}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByText("På vegne av");await t(a).not.toBeInTheDocument()}},b={name:"With Custom Children (A6)",args:{children:E.jsx("div",{"data-testid":"usermenu-child",children:"Child"}),notificationCount:0},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${r}`});await i.click(n);const a=e.getByTestId("usermenu-child");await t(a).toBeInTheDocument(),await t(a).toHaveTextContent("Child")}},w={args:{user:{name:"Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals",role:"virksomhet",orgnr:"123456789"}}},f={name:"Escape Key Returns Focus to Button (C2)",args:{notificationCount:0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:o})=>{const n=c(o).getByRole("button",{name:`${l} ${m} ${r}`});await t(n).toBeInTheDocument(),await i.click(n),await t(n).toHaveAttribute("aria-expanded","true"),await i.keyboard("{Escape}"),await t(n).toHaveAttribute("aria-expanded","false"),await t(n).toHaveFocus()}},T={name:"With No onSwitchUserClick",args:{onSwitchUserClick:void 0,notificationCount:0},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${r}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByRole("button",{name:s.t("ds_overlays:topbannerexternalusermenu.SwitchUser")});await t(a).not.toBeInTheDocument()}},k={name:"With Custom Hostname (A7)",args:{hostname:"test.skatteetaten.no",notificationCount:0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${l} ${m} ${r}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.getByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.Notification")});await t(a).toHaveAttribute("href","https://test.skatteetaten.no/web/minside/virksomhet/varsler")}},x={name:"With Hidden Default Links (A8)",args:{hideDefaultLinks:!0,user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0,onSwitchUserClick:void 0,children:"Child"},play:async({canvasElement:o})=>{const e=c(o),n=e.getByRole("button",{name:`${s.t("ds_layout:topbannerbutton.MyselfTitle")} ${s.t("ds_layout:topbannerbutton.Myself")} ${r}`});await t(n).toBeInTheDocument(),await i.click(n);const a=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.Notifications")});await t(a).not.toBeInTheDocument();const u=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.MyPage")});await t(u).not.toBeInTheDocument();const C=e.queryByRole("link",{name:s.t("ds_overlays:topbannerexternalusermenu.AboutOrganization")});await t(C).not.toBeInTheDocument()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals',
      role: 'virksomhet',
      orgnr: '123456789'
    }
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const U=["Default","WithNoNotifications","WithOneNotification","WithMoreThan99Notifications","SwitchUser","LogOut","NoPaaVegneAv","WithChildren","WithLongBusinessName","EscapeKeyFocusReturn","WithNoOnSwitchUserClick","WithCustomHostname","WithHiddenLinks"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:d,EscapeKeyFocusReturn:f,LogOut:g,NoPaaVegneAv:v,SwitchUser:y,WithChildren:b,WithCustomHostname:k,WithHiddenLinks:x,WithLongBusinessName:w,WithMoreThan99Notifications:h,WithNoNotifications:p,WithNoOnSwitchUserClick:T,WithOneNotification:B,__namedExportsOrder:U,default:R},Symbol.toStringTag,{value:"Module"}));export{L as T};
//# sourceMappingURL=TopBannerExternalUserMenu.test.stories-mzvDo1UE.js.map
