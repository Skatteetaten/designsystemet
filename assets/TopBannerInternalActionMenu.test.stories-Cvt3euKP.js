import{d as B,r as y,j as s}from"./iframe-s2_bNgHU.js";import{I as p}from"./index-Ck1G954W.js";import{a as v}from"./index-7wWg-Emv.js";const{expect:t,fireEvent:l,userEvent:g,within:d}=__STORYBOOK_MODULE_TEST__,h={component:v.ActionMenu,title:"Tester/TopBannerInternal/ActionMenu",argTypes:{children:{control:"text",table:{disable:!0}},id:{table:{disable:!0}},className:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},menuActionsRef:{table:{disable:!0}}},args:{children:"Menu Content"},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}},globals:{backgrounds:{value:"themePrimary"}}},i={name:"With Attributes",args:{id:"actionMenuId",className:"actionMenuClassname",lang:"en","data-testid":"actionMenuTestId"},play:async({canvasElement:n})=>{const e=d(n).getByTestId("actionMenuTestId");await t(e).toHaveClass("actionMenuClassname"),await t(e).toHaveAttribute("id","actionMenuId"),await t(e).toHaveAttribute("lang","en")},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}}},r={name:"With Ref (FA1)",args:{ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},play:async({canvasElement:n})=>{const e=d(n).getByRole("button");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}}},c={name:"Defaults",args:{},play:async({canvasElement:n})=>{const e=d(n).getByRole("button");await l.click(e)},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},u={name:"With Imperative Actions (A2, A3, A5, A6, B1, C2)",render:n=>{const a=y.useRef(null);return s.jsxs(s.Fragment,{children:[s.jsxs(v.ActionMenu,{menuActionsRef:a,children:["Menu Content",s.jsx(p,{onClick:()=>a?.current?.close?.(),children:"Lukk"})]}),s.jsx(p,{brightness:"light",className:"marginLeftL",onClick:()=>a?.current?.open?.(),children:"Åpne"})]})},play:async({canvasElement:n})=>{const a=B.t("ds_layout:topbannerbutton.Menu"),e=d(n),o=e.getByRole("button",{name:a});await t(o).toHaveAttribute("aria-expanded","false"),await l.click(o),await t(o).toHaveAttribute("aria-expanded","true");const m=e.getByText("Menu Content");await t(m).toBeInTheDocument();const f=e.getByText("Lukk");await l.click(f),await t(m).not.toBeInTheDocument(),await t(o).toHaveAttribute("aria-expanded","false"),await t(o).toHaveFocus(),await t(m).not.toBeInTheDocument();const b=e.getByText("Åpne");await l.click(b),await t(e.getByText("Menu Content")).toBeInTheDocument(),await t(o).toHaveAttribute("aria-expanded","true"),await g.keyboard("{Escape}"),await t(m).not.toBeInTheDocument(),await t(o).toHaveAttribute("aria-expanded","false"),await t(o).toHaveFocus()},parameters:{a11y:{test:"off"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};const w=["WithAttributes","WithRef","WithDefaults","WithImperativeActions"],T=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:i,WithDefaults:c,WithImperativeActions:u,WithRef:r,__namedExportsOrder:w,default:h},Symbol.toStringTag,{value:"Module"}));export{T};
//# sourceMappingURL=TopBannerInternalActionMenu.test.stories-Cvt3euKP.js.map
