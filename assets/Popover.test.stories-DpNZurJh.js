import{j as a,d as y}from"./iframe-VHQh6taY.js";import{P as n}from"./index-CqsuB6cf.js";import{l as g}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:t,fireEvent:l,fn:x,userEvent:T,within:b}=__STORYBOOK_MODULE_TEST__,i="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",B=e=>a.jsxs(n,{...e,children:[a.jsx(n.Trigger,{}),a.jsx(n.Content,{children:i})]}),v={component:n,title:"Tester/Popover",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},disableAutoDismiss:{table:{disable:!0}},disableAutoDismissOnMobile:{table:{disable:!0}},isOpen:{table:{disable:!0}},position:{table:{disable:!0}},shouldRestoreFocus:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:B,tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},c={name:"Defaults",args:{},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const o=b(e).getByRole("button");await t(o).toBeInTheDocument()}},w=e=>a.jsxs("div",{className:"flex gapS centerContent",children:[a.jsxs(n,{color:"forest",position:"topEnd",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"extraSmall"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"white",position:"bottomEnd",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"small"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"ochre",position:"topStart",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"medium"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"forest",position:"bottomStart",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"large"}),a.jsx(n.Content,{children:e.children})]})]}),u={render:w,name:"All Colors Floating Position (A1, A2, A3, A4)",argTypes:{position:{table:{disable:!1}},color:{table:{disable:!1}}},args:{children:g}},d={name:"With OnClick Trigger Close Button (A9)",args:{onClose:x()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e,args:s})=>{const o=b(e),r=o.getByRole("button");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute("aria-expanded","false"),await t(o.queryByText(i)).not.toBeInTheDocument(),await l.click(r),await t(r).toHaveAttribute("aria-expanded","true"),await t(o.getByText(i)).toBeInTheDocument(),await l.click(r),await t(o.queryByText(i)).not.toBeInTheDocument(),await l.click(r);const h=o.getByTitle(y.t("Shared:shared.Close"));await l.click(h),await t(o.queryByText(i)).not.toBeInTheDocument(),await t(s.onClose).toHaveBeenCalled()}},m={name:"With AutoClose (A8)",args:{},argTypes:{disableAutoDismiss:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const s=b(e),o=s.getByRole("button");await t(o).toBeInTheDocument(),await t(s.queryByText(i)).not.toBeInTheDocument(),await l.click(o),await t(s.getByText(i)).toBeInTheDocument(),await T.click(document.body),await t(s.queryByText(i)).not.toBeInTheDocument()}},p={name:"With AutoClose Disabled (A8)",argTypes:{disableAutoDismiss:{table:{disable:!1}}},args:{disableAutoDismiss:!0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const s=b(e),o=s.getByRole("button");await t(o).toBeInTheDocument(),await t(s.queryByText(i)).not.toBeInTheDocument(),await l.click(o),await t(s.getByText(i)).toBeInTheDocument(),await T.click(document.body),await t(s.getByText(i)).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {},
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const triggerButton = canvas.getByRole('button');
    await expect(triggerButton).toBeInTheDocument();
  }
} satisfies Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'All Colors Floating Position (A1, A2, A3, A4)',
  argTypes: {
    position: {
      table: {
        disable: false
      }
    },
    color: {
      table: {
        disable: false
      }
    }
  },
  args: {
    children: loremIpsum
  }
} satisfies Story`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With OnClick Trigger Close Button (A9)',
  args: {
    onClose: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    const closeButton = canvas.getByTitle(dsI18n.t('Shared:shared.Close'));
    await fireEvent.click(closeButton);
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await expect(args.onClose).toHaveBeenCalled();
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With AutoClose (A8)',
  args: {},
  argTypes: {
    disableAutoDismiss: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await userEvent.click(document.body);
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With AutoClose Disabled (A8)',
  argTypes: {
    disableAutoDismiss: {
      table: {
        disable: false
      }
    }
  },
  args: {
    disableAutoDismiss: true
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(canvas.queryByText(defaultText)).not.toBeInTheDocument();
    await fireEvent.click(button);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await userEvent.click(document.body);
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
  }
} satisfies Story`,...p.parameters?.docs?.source}}};const f=["Defaults","AllColors","WithOnClickTriggerAndCloseButton","WithAutoClose","WithAutoCloseDisabled"],S=Object.freeze(Object.defineProperty({__proto__:null,AllColors:u,Defaults:c,WithAutoClose:m,WithAutoCloseDisabled:p,WithOnClickTriggerAndCloseButton:d,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{S as P};
//# sourceMappingURL=Popover.test.stories-DpNZurJh.js.map
