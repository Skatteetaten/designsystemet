import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{d as H}from"./index-C498nvnC.js";import{P as n}from"./index-BFMd1xC6.js";import{w as b,e as t,f as W,a as l,u as j}from"./index-B8otpkpo.js";import{l as O}from"./storybook.testing.utils-CMs160i9.js";import{c as T}from"./base-props.types-sXyoNogd.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKHxS2Ra.js";import"./index-C3Vp3Ydz.js";import"./index-jWwGX2yX.js";import"./index-DWqb7jS3.js";import"./index-Drt3gf4w.js";const P=[T[0],T[1],T[6]],i="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",R=e=>a.jsxs(n,{...e,children:[a.jsx(n.Trigger,{}),a.jsx(n.Content,{children:i})]}),Z={component:n,title:"Tester/Popover/Popover",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{options:[...P],control:"radio",table:{disable:!0}},disableAutoDismiss:{table:{disable:!0}},disableAutoDismissOnMobile:{table:{disable:!0}},isOpen:{table:{disable:!0}},position:{table:{disable:!0}},shouldRestoreFocus:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:R},c={name:"Defaults",args:{},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const o=b(e).getByRole("button");await t(o).toBeInTheDocument()}},M=e=>a.jsxs("div",{className:"flex gapS centerContent",children:[a.jsxs(n,{color:"forest",position:"topEnd",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"extraSmall"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"white",position:"bottomEnd",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"small"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"ochre",position:"topStart",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"medium"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"forest",position:"bottomStart",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"large"}),a.jsx(n.Content,{children:e.children})]})]}),u={render:M,name:"All Colors Floating Position (A1, A2, A3, A4)",argTypes:{position:{table:{disable:!1}},color:{table:{disable:!1}}},args:{children:O}},d={name:"With OnClick Trigger Close Button (A9)",args:{onClose:W()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e,args:s})=>{const o=b(e),r=o.getByRole("button");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute("aria-expanded","false"),await t(o.queryByText(i)).not.toBeInTheDocument(),await l.click(r),await t(r).toHaveAttribute("aria-expanded","true"),await t(o.getByText(i)).toBeInTheDocument(),await l.click(r),await t(o.queryByText(i)).not.toBeInTheDocument(),await l.click(r);const q=o.getByTitle(H.t("Shared:shared.Close"));await l.click(q),await t(o.queryByText(i)).not.toBeInTheDocument(),await t(s.onClose).toHaveBeenCalled()}},m={name:"With AutoClose (A8)",args:{},argTypes:{disableAutoDismiss:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=b(e),o=s.getByRole("button");await t(o).toBeInTheDocument(),await t(s.queryByText(i)).not.toBeInTheDocument(),await l.click(o),await t(s.getByText(i)).toBeInTheDocument(),await j.click(document.body),await t(s.queryByText(i)).not.toBeInTheDocument()}},p={name:"With AutoClose Disabled (A8)",argTypes:{disableAutoDismiss:{table:{disable:!1}}},args:{disableAutoDismiss:!0},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=b(e),o=s.getByRole("button");await t(o).toBeInTheDocument(),await t(s.queryByText(i)).not.toBeInTheDocument(),await l.click(o),await t(s.getByText(i)).toBeInTheDocument(),await j.click(document.body),await t(s.getByText(i)).toBeInTheDocument()}};var h,y,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,B,v;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(B=u.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var w,f,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With OnClick Trigger Close Button (A9)',
  args: {
    onClose: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var D,C,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,k,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const $=["Defaults","AllColors","WithOnClickTriggerAndCloseButton","WithAutoClose","WithAutoCloseDisabled"];export{u as AllColors,c as Defaults,m as WithAutoClose,p as WithAutoCloseDisabled,d as WithOnClickTriggerAndCloseButton,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Popover.test.stories-B8acUCqZ.js.map
