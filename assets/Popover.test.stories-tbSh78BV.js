import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{f as q,w as b,e as t,a as l,u as E}from"./index-DIxTUSTt.js";import{d as H}from"./index-CwaotbcG.js";import{P as n}from"./index-D-iyn2dT.js";import{l as W}from"./storybook.testing.utils-CMs160i9.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dvbywa6-.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";import"./index-Dc9vnWYl.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";import"./index-BP9ucNdn.js";import"./DatePickerCalendar-CmyXWAFv.js";import"./LabelWithHelp-DECIiZLx.js";import"./Help-DnfPEwtQ.js";import"./index-DisSb1NM.js";import"./index-CJxYRboy.js";import"./index-BUexH3MM.js";const i="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",O=e=>a.jsxs(n,{...e,children:[a.jsx(n.Trigger,{}),a.jsx(n.Content,{children:i})]}),ne={component:n,title:"Tester/Popover/Popover",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},disableAutoDismiss:{table:{disable:!0}},disableAutoDismissOnMobile:{table:{disable:!0}},isOpen:{table:{disable:!0}},position:{table:{disable:!0}},shouldRestoreFocus:{table:{disable:!0}},onClose:{table:{disable:!0}}},render:O},c={name:"Defaults",args:{},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const o=b(e).getByRole("button");await t(o).toBeInTheDocument()}},P=e=>a.jsxs("div",{className:"flex gapS centerContent",children:[a.jsxs(n,{color:"forest",position:"topEnd",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"extraSmall"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"white",position:"bottomEnd",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"small"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"ochre",position:"topStart",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"medium"}),a.jsx(n.Content,{children:e.children})]}),a.jsxs(n,{color:"forest",position:"bottomStart",isOpen:!0,...e,children:[a.jsx(n.Trigger,{size:"large"}),a.jsx(n.Content,{children:e.children})]})]}),u={render:P,name:"All Colors Floating Position (A1, A2, A3, A4)",argTypes:{position:{table:{disable:!1}},color:{table:{disable:!1}}},args:{children:W}},d={name:"With OnClick Trigger Close Button (A9)",args:{onClose:q()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e,args:s})=>{const o=b(e),r=o.getByRole("button");await t(r).toBeInTheDocument(),await t(r).toHaveAttribute("aria-expanded","false"),await t(o.queryByText(i)).not.toBeInTheDocument(),await l.click(r),await t(r).toHaveAttribute("aria-expanded","true"),await t(o.getByText(i)).toBeInTheDocument(),await l.click(r),await t(o.queryByText(i)).not.toBeInTheDocument(),await l.click(r);const j=o.getByTitle(H.t("Shared:shared.Close"));await l.click(j),await t(o.queryByText(i)).not.toBeInTheDocument(),await t(s.onClose).toHaveBeenCalled()}},m={name:"With AutoClose (A8)",args:{},argTypes:{disableAutoDismiss:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=b(e),o=s.getByRole("button");await t(o).toBeInTheDocument(),await t(s.queryByText(i)).not.toBeInTheDocument(),await l.click(o),await t(s.getByText(i)).toBeInTheDocument(),await E.click(document.body),await t(s.queryByText(i)).not.toBeInTheDocument()}},p={name:"With AutoClose Disabled (A8)",argTypes:{disableAutoDismiss:{table:{disable:!1}}},args:{disableAutoDismiss:!0},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=b(e),o=s.getByRole("button");await t(o).toBeInTheDocument(),await t(s.queryByText(i)).not.toBeInTheDocument(),await l.click(o),await t(s.getByText(i)).toBeInTheDocument(),await E.click(document.body),await t(s.getByText(i)).toBeInTheDocument()}};var T,h,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,g,B;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(g=u.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var v,w,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(w=d.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var D,A,C;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,S,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const oe=["Defaults","AllColors","WithOnClickTriggerAndCloseButton","WithAutoClose","WithAutoCloseDisabled"];export{u as AllColors,c as Defaults,m as WithAutoClose,p as WithAutoCloseDisabled,d as WithOnClickTriggerAndCloseButton,oe as __namedExportsOrder,ne as default};
//# sourceMappingURL=Popover.test.stories-tbSh78BV.js.map
