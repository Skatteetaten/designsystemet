import{d as E,r as k,j as s}from"./iframe-BoxHncFg.js";import{I as p}from"./index-DyY5joHW.js";import{b as M}from"./index-z4c3QXb-.js";const{expect:e,fireEvent:l,userEvent:H,within:d}=__STORYBOOK_MODULE_TEST__,R={component:M.ActionMenu,title:"Tester/TopBanner/TopBannerInternalActionMenu",argTypes:{children:{control:"text",table:{disable:!0}},id:{table:{disable:!0}},className:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},menuActionsRef:{table:{disable:!0}}},args:{children:"Menu Content"},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}},globals:{backgrounds:{value:"themePrimary"}}},i={name:"With Attributes",args:{id:"actionMenuId",className:"actionMenuClassname",lang:"en","data-testid":"actionMenuTestId"},play:async({canvasElement:o})=>{const t=d(o).getByTestId("actionMenuTestId");await e(t).toHaveClass("actionMenuClassname"),await e(t).toHaveAttribute("id","actionMenuId"),await e(t).toHaveAttribute("lang","en")},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}}},r={name:"With Ref (FA1)",args:{ref:o=>{o&&(o.id="dummyIdForwardedFromRef")}},play:async({canvasElement:o})=>{const t=d(o).getByRole("button");await e(t).toHaveAttribute("id","dummyIdForwardedFromRef")},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}}},c={name:"Defaults",args:{},play:async({canvasElement:o})=>{const t=d(o).getByRole("button");await l.click(t)},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus","active"]}}},u={name:"With Imperative Actions (A2, A3, A5, A6, B1, C2)",render:o=>{const a=k.useRef(null);return s.jsxs(s.Fragment,{children:[s.jsxs(M.ActionMenu,{menuActionsRef:a,children:["Menu Content",s.jsx(p,{onClick:()=>{var t,n;return(n=(t=a==null?void 0:a.current)==null?void 0:t.close)==null?void 0:n.call(t)},children:"Lukk"})]}),s.jsx(p,{brightness:"light",className:"marginLeftL",onClick:()=>{var t,n;return(n=(t=a==null?void 0:a.current)==null?void 0:t.open)==null?void 0:n.call(t)},children:"Åpne"})]})},play:async({canvasElement:o})=>{const a=E.t("ds_layout:topbannerbutton.Menu"),t=d(o),n=t.getByRole("button",{name:a});await e(n).toHaveAttribute("aria-expanded","false"),await l.click(n),await e(n).toHaveAttribute("aria-expanded","true");const m=t.getByText("Menu Content");await e(m).toBeInTheDocument();const S=t.getByText("Lukk");await l.click(S),await e(m).not.toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","false"),await e(n).toHaveFocus(),await e(m).not.toBeInTheDocument();const C=t.getByText("Åpne");await l.click(C),await e(t.getByText("Menu Content")).toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","true"),await H.keyboard("{Escape}"),await e(m).not.toBeInTheDocument(),await e(n).toHaveAttribute("aria-expanded","false"),await e(n).toHaveFocus()},parameters:{a11y:{test:"off"}}};var v,f,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var B,y,g;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,w,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button');
    await fireEvent.click(menuButton);
  },
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  }
} satisfies Story`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var A,I,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    a11y: {
      test: 'off'
    }
  }
} satisfies Story`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const _=["WithAttributes","WithRef","WithDefaults","WithImperativeActions"],L=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:i,WithDefaults:c,WithImperativeActions:u,WithRef:r,__namedExportsOrder:_,default:R},Symbol.toStringTag,{value:"Module"}));export{L as T};
//# sourceMappingURL=TopBannerInternalActionMenu.test.stories-DNPu2ycy.js.map
