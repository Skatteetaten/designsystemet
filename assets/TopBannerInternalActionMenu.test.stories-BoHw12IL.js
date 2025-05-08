import{j as i}from"./jsx-runtime-BYYWji4R.js";import{r as T}from"./index-ClcD9ViR.js";import{w as p,e,a as m,u as M}from"./index-DIxTUSTt.js";import{I as l}from"./index-6vKJeIrk.js";import{d as C}from"./index-BYKicpQW.js";import{a as A}from"./index-D-_w6T1f.js";import{w as k}from"./storybook.testing.utils-CMs160i9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./index-B13CNY-b.js";import"./TopBannerButton-C_mTCJEu.js";import"./TopBannerLangPicker-A5eTa0P2.js";import"./TopBannerLangPickerButton-DVjpbIe0.js";import"./TopBannerLogo-CVMRMD-e.js";import"./TopBannerSkipLink-Drm7zQs5.js";import"./TopBannerUserButton-BYwrn7_j.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";const K={component:A.ActionMenu,title:"Tester/TopBanner/TopBannerInternalActionMenu",argTypes:{children:{control:"text",table:{disable:!0}},id:{table:{disable:!0}},className:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},menuActionsRef:{table:{disable:!0}}},args:{children:"Menu Content"},parameters:{backgrounds:{default:"themePrimary"}}},r={name:"With Attributes",args:{id:"actionMenuId",className:"actionMenuClassname",lang:"en","data-testid":"actionMenuTestId"},play:async({canvasElement:o})=>{const t=p(o).getByTestId("actionMenuTestId");await e(t).toHaveClass("actionMenuClassname"),await e(t).toHaveAttribute("id","actionMenuId"),await e(t).toHaveAttribute("lang","en")},parameters:{imageSnapshot:{disable:!0}}},c={name:"With Ref (FA1)",args:{ref:o=>{o&&(o.id="dummyIdForwardedFromRef")}},play:async({canvasElement:o})=>{const t=p(o).getByRole("button");await e(t).toHaveAttribute("id","dummyIdForwardedFromRef")},parameters:{imageSnapshot:{disable:!0}}},u={name:"With Imperative Actions (A2, A3, A5, A6, B1, C2)",render:o=>{const a=T.useRef(null);return i.jsxs(i.Fragment,{children:[i.jsxs(A.ActionMenu,{menuActionsRef:a,children:["Menu Content",i.jsx(l,{onClick:()=>{var t,n;return(n=(t=a==null?void 0:a.current)==null?void 0:t.close)==null?void 0:n.call(t)},children:"Lukk"})]}),i.jsx(l,{brightness:"light",className:"marginLeftL",onClick:()=>{var t,n;return(n=(t=a==null?void 0:a.current)==null?void 0:t.open)==null?void 0:n.call(t)},children:"Åpne"})]})},play:async({canvasElement:o})=>{const a=C.t("ds_layout:topbannerbutton.Menu"),t=p(o),n=t.getByRole("button",{name:a});await e(n).toHaveAttribute("aria-expanded","false"),await m.click(n),await e(n).toHaveAttribute("aria-expanded","true");const s=t.getByText("Menu Content");await e(s).toBeInTheDocument();const I=t.getByText("Lukk");await m.click(I),await e(s).not.toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","false"),await e(n).toHaveFocus(),await e(s).not.toBeInTheDocument();const y=t.getByText("Åpne");await m.click(y),await e(t.getByText("Menu Content")).toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","true"),await M.keyboard("{Escape}"),await e(s).not.toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","false"),await e(n).toHaveFocus()},parameters:{imageSnapshot:{click:`${k} > :first-child`}}};var d,v,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'With Attributes',
  args: {
    id: 'actionMenuId',
    className: 'actionMenuClassname',
    lang: 'en',
    'data-testid': 'actionMenuTestId'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const actionMenu = canvas.getByTestId('actionMenuTestId');
    await expect(actionMenu).toHaveClass('actionMenuClassname');
    await expect(actionMenu).toHaveAttribute('id', 'actionMenuId');
    await expect(actionMenu).toHaveAttribute('lang', 'en');
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,B,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var f,h,g;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With Imperative Actions (A2, A3, A5, A6, B1, C2)',
  render: (_args): JSX.Element => {
    const actionsRef = useRef<ActionMenuActionsRef>(null);
    return <>
        <TopBannerInternal.ActionMenu menuActionsRef={actionsRef}>
          {'Menu Content'}
          <InlineButton onClick={() => actionsRef?.current?.close?.()}>
            {'Lukk'}
          </InlineButton>
        </TopBannerInternal.ActionMenu>
        <InlineButton brightness={'light'} className={'marginLeftL'} onClick={() => actionsRef?.current?.open?.()}>
          {'Åpne'}
        </InlineButton>
      </>;
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const buttonText = dsI18n.t('ds_layout:topbannerbutton.Menu');
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: buttonText
    });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContent = canvas.getByText('Menu Content');
    await expect(menuContent).toBeInTheDocument();
    const closeButton = canvas.getByText('Lukk');
    await fireEvent.click(closeButton);
    await expect(menuContent).not.toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toHaveFocus();
    await expect(menuContent).not.toBeInTheDocument();
    const openButton = canvas.getByText('Åpne');
    await fireEvent.click(openButton);
    await expect(canvas.getByText('Menu Content')).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Escape}');
    await expect(menuContent).not.toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toHaveFocus();
  },
  parameters: {
    imageSnapshot: {
      click: \`\${wrapper} > :first-child\`
    }
  }
} satisfies Story`,...(g=(h=u.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Q=["WithAttributes","WithRef","WithImperativeActions"];export{r as WithAttributes,u as WithImperativeActions,c as WithRef,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=TopBannerInternalActionMenu.test.stories-BoHw12IL.js.map
