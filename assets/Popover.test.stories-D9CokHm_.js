import{j as n,d as h}from"./iframe-DyzX2HZk.js";import{P as o}from"./index-D9pjZFNn.js";import{l as B}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:e,fireEvent:l,fn:T,userEvent:x,within:b}=__STORYBOOK_MODULE_TEST__,i="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",y=t=>n.jsxs(o,{...t,children:[n.jsx(o.Trigger,{}),n.jsx(o.Content,{children:i})]}),w={component:o,title:"Tester/Popover",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},disableAutoDismiss:{table:{disable:!0}},disableAutoDismissOnMobile:{table:{disable:!0}},isOpen:{table:{disable:!0}},position:{table:{disable:!0}},shouldRestoreFocus:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:y,tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},c={name:"Defaults",args:{onClose:T()},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t,args:s})=>{const a=b(t),r=a.getByRole("button");await e(r).toBeInTheDocument(),await e(r).toHaveAttribute("aria-expanded","false"),await l.click(r),await e(r).toHaveAttribute("aria-expanded","true"),await e(a.getByText(i)).toBeInTheDocument(),await l.scroll(window),await e(r).toHaveAttribute("aria-expanded","true"),await e(a.getByText(i)).toBeInTheDocument(),await e(s.onClose).not.toHaveBeenCalled()}},v=t=>n.jsxs("div",{className:"flex gapS centerContent",children:[n.jsxs(o,{color:"forest",position:"topEnd",isOpen:!0,...t,children:[n.jsx(o.Trigger,{size:"extraSmall"}),n.jsx(o.Content,{children:t.children})]}),n.jsxs(o,{color:"white",position:"bottomEnd",isOpen:!0,...t,children:[n.jsx(o.Trigger,{size:"small"}),n.jsx(o.Content,{children:t.children})]}),n.jsxs(o,{color:"ochre",position:"topStart",isOpen:!0,...t,children:[n.jsx(o.Trigger,{size:"medium"}),n.jsx(o.Content,{children:t.children})]}),n.jsxs(o,{color:"forest",position:"bottomStart",isOpen:!0,...t,children:[n.jsx(o.Trigger,{size:"large"}),n.jsx(o.Content,{children:t.children})]})]}),u={render:v,name:"All Colors Floating Position (A1, A2, A3, A4)",argTypes:{position:{table:{disable:!1}},color:{table:{disable:!1}}},args:{children:B}},d={name:"With OnClick Trigger Close Button (A9)",args:{onClose:T()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:s})=>{const a=b(t),r=a.getByRole("button");await e(r).toBeInTheDocument(),await e(r).toHaveAttribute("aria-expanded","false"),await e(a.queryByText(i)).not.toBeInTheDocument(),await l.click(r),await e(r).toHaveAttribute("aria-expanded","true"),await e(a.getByText(i)).toBeInTheDocument(),await l.click(r),await e(a.queryByText(i)).not.toBeInTheDocument(),await l.click(r);const g=a.getByTitle(h.t("Shared:shared.Close"));await l.click(g),await e(a.queryByText(i)).not.toBeInTheDocument(),await e(s.onClose).toHaveBeenCalled()}},m={name:"With AutoClose (A8)",args:{},argTypes:{disableAutoDismiss:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=b(t),a=s.getByRole("button");await e(a).toBeInTheDocument(),await e(s.queryByText(i)).not.toBeInTheDocument(),await l.click(a),await e(s.getByText(i)).toBeInTheDocument(),await x.click(document.body),await e(s.queryByText(i)).not.toBeInTheDocument()}},p={name:"With AutoClose Disabled (A8)",argTypes:{disableAutoDismiss:{table:{disable:!1}}},args:{disableAutoDismiss:!0},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=b(t),a=s.getByRole("button");await e(a).toBeInTheDocument(),await e(s.queryByText(i)).not.toBeInTheDocument(),await l.click(a),await e(s.getByText(i)).toBeInTheDocument(),await x.click(document.body),await e(s.getByText(i)).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {
    onClose: fn()
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const triggerButton = canvas.getByRole('button');
    await expect(triggerButton).toBeInTheDocument();
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(triggerButton);
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await fireEvent.scroll(window);
    await expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(defaultText)).toBeInTheDocument();
    await expect(args.onClose).not.toHaveBeenCalled();
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
} satisfies Story`,...p.parameters?.docs?.source}}};const f=["Defaults","AllColors","WithOnClickTriggerAndCloseButton","WithAutoClose","WithAutoCloseDisabled"],I=Object.freeze(Object.defineProperty({__proto__:null,AllColors:u,Defaults:c,WithAutoClose:m,WithAutoCloseDisabled:p,WithOnClickTriggerAndCloseButton:d,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{I as P};
//# sourceMappingURL=Popover.test.stories-D9CokHm_.js.map
