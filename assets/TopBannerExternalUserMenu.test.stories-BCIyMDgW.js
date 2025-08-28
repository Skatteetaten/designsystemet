import{j as an}from"./jsx-runtime-BjG_zV1W.js";import{f,w as i,e as t,u as s,b as Z}from"./index-DIxTUSTt.js";import{d as r}from"./index-CGk5cNE3.js";import{a as on}from"./index-palH82_U.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du3yX_TW.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./index-DXWIZOJk.js";import"./index-BuHbB7kV.js";import"./DatePickerCalendar-wzrlqniL.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./TopBannerButton-nMBjyS0d.js";import"./floating-ui.react-ayiMHenP.js";import"./index-D9u29hOa.js";import"./TopBannerLangPicker-CgqTpUMW.js";import"./TopBannerLangPickerButton-B4IymQya.js";import"./TopBannerLogo-CQvHH4Ba.js";import"./TopBannerSkipLink-DV7Ysy1E.js";import"./TopBannerUserButton-CmmWVGv5.js";const Nn={title:"Tester/TopBanner/TopBannerExternalUserMenu",component:on,argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},notificationCount:{table:{disable:!0}},children:{table:{disable:!0}},onLogOutClick:{table:{disable:!0}},onSwitchUserClick:{table:{disable:!0}}},args:{onSwitchUserClick:f(),user:{name:"Buljo Tulljo",role:"virksomhet",orgnr:"123456789",person:{name:"Buljo Tulljo",personId:"6969420420",type:""}},notificationCount:5}},u=r.t("ds_layout:topbannerbutton.Menu"),l=r.t("ds_layout:topbannerbutton.CompanyTitle"),m="Buljo Tulljo",p={name:"With Defaults (A1, A2, B1, B2)",play:async({args:o,canvasElement:a})=>{const n=i(a),e=n.getByRole("button",{name:`${l} ${m} ${u} ${r.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false"),await s.click(e),await t(e).toHaveAttribute("aria-expanded","true");const c=e.nextSibling,nn=i(c).getByText("Buljo Tulljo".toUpperCase());await t(nn).toBeInTheDocument();const tn=i(c).getByText(`${r.t("ds_overlays:rolepicker.BusinessDescriptionPrefix")} 123 456 789`);await t(tn).toBeInTheDocument();const en=n.getByText("5");await t(en).toBeInTheDocument()}},B={name:"No Notifications",args:{notificationCount:0},argTypes:{notificationCount:{table:{disable:!1}}},play:async({canvasElement:o})=>{const a=i(o),n=a.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await s.click(n);const e=a.queryByTestId("varsel-circle");await t(e).not.toBeInTheDocument()}},d={name:"More Than 99 Notifications (A3)",args:{notificationCount:100},argTypes:{notificationCount:{table:{disable:!1}}},play:async({args:o,canvasElement:a})=>{const n=i(a),e=n.getByRole("button",{name:`${l} ${m} ${u} ${r.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(e).toBeInTheDocument(),await s.click(e);const c=n.getByText("99+");await t(c).toBeInTheDocument()}},g={args:{onSwitchUserClick:f()},parameters:{imageSnapshot:{disable:!0}},play:async({args:o,canvasElement:a})=>{const n=i(a),e=n.getByRole("button",{name:`${l} ${m} ${u} ${r.t("ds_overlays:topbannerexternalusermenu.NotificationCountMessage",{count:o.notificationCount})}`});await t(e).toBeInTheDocument(),await s.click(e);const c=n.getByRole("button",{name:"Bytt bruker"});await t(c).toBeInTheDocument(),await s.click(c),await Z(()=>t(o.onSwitchUserClick).toHaveBeenCalled())}},h={args:{onLogOutClick:f(),notificationCount:0},parameters:{imageSnapshot:{disable:!0}},play:async({args:o,canvasElement:a})=>{const n=i(a),e=n.getByRole("button",{name:`${l} ${m} ${u}`});await t(e).toBeInTheDocument(),await s.click(e);const c=n.getByRole("button",{name:"Logg ut"});await t(c).toBeInTheDocument(),await s.click(c),await Z(()=>t(o.onLogOutClick).toHaveBeenCalled())}},y={name:'No "På vegne av"',args:{user:{name:"Buljo Tulljo",role:"meg"},notificationCount:0},play:async({canvasElement:o})=>{const a=i(o),n=a.getByRole("button",{name:`${r.t("ds_layout:topbannerbutton.MyselfTitle")} ${r.t("ds_layout:topbannerbutton.Myself")} ${u}`});await t(n).toBeInTheDocument(),await s.click(n);const e=a.queryByText("På vegne av");await t(e).not.toBeInTheDocument()}},v={name:"With Custom Children (A6)",args:{children:an.jsx("div",{"data-testid":"usermenu-child",children:"Child"}),notificationCount:0},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:o})=>{const a=i(o),n=a.getByRole("button",{name:`${l} ${m} ${u}`});await s.click(n);const e=a.getByTestId("usermenu-child");await t(e).toBeInTheDocument(),await t(e).toHaveTextContent("Child")}},w={args:{user:{name:"Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals",role:"virksomhet",orgnr:"123456789"}}},T={name:"Escape Key Returns Focus to Button (C2)",args:{notificationCount:0},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:o})=>{const n=i(o).getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await s.click(n),await t(n).toHaveAttribute("aria-expanded","true"),await s.keyboard("{Escape}"),await t(n).toHaveAttribute("aria-expanded","false"),await t(n).toHaveFocus()}},b={name:"With No onSwitchUserClick",args:{onSwitchUserClick:void 0,notificationCount:0},play:async({canvasElement:o})=>{const a=i(o),n=a.getByRole("button",{name:`${l} ${m} ${u}`});await t(n).toBeInTheDocument(),await s.click(n);const e=a.queryByRole("button",{name:r.t("ds_overlays:topbannerexternalusermenu.SwitchUser")});await t(e).not.toBeInTheDocument()}};var x,C,$;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...($=(C=p.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var k,I,E;B.parameters={...B.parameters,docs:{...(k=B.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(I=B.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var D,N,U;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(U=(N=d.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var S,R,A;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var M,H,j;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(H=h.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var _,O,W;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(O=y.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var L,F,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(F=v.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,K,V;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals',
      role: 'virksomhet',
      orgnr: '123456789'
    }
  }
}`,...(V=(K=w.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var Y,z,G;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(z=T.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Un=["Default","WithNoNotifications","WithMoreThan99Notifications","SwitchUser","LogOut","NoPaaVegneAv","WithChildren","WithLongBusinessName","EscapeKeyFocusReturn","WithNoOnSwitchUserClick"];export{p as Default,T as EscapeKeyFocusReturn,h as LogOut,y as NoPaaVegneAv,g as SwitchUser,v as WithChildren,w as WithLongBusinessName,d as WithMoreThan99Notifications,B as WithNoNotifications,b as WithNoOnSwitchUserClick,Un as __namedExportsOrder,Nn as default};
//# sourceMappingURL=TopBannerExternalUserMenu.test.stories-BCIyMDgW.js.map
