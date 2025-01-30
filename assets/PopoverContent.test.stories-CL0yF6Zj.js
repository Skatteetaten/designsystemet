import{j as a}from"./jsx-runtime-CfatFE5O.js";import{w as x,e as n}from"./index-XVqkR3zt.js";import{P as d}from"./index-D1gqbwNK.js";import{H,P as R}from"./index-BaCHQVlv.js";import{l as I}from"./storybook.testing.utils-CMs160i9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-U0B695k8.js";import"./index--O6iZ70i.js";import"./index-BWc9jU-Q.js";import"./index-Dxnk4fMh.js";import"./index-ZuzByk-F.js";import"./index-GOkwpqhH.js";import"./DatePickerCalendar-BtRIsojo.js";import"./LabelWithHelp-b-VgeEnv.js";import"./Help-CS2lfMec.js";import"./index-8cXy7PJr.js";import"./index-DbZa4S7y.js";const J={component:d.Content,title:"Tester/Popover/Content",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}},render:e=>a.jsx(d,{isOpen:!0,children:a.jsx(d.Content,{...e})})},S="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",c={children:S},r={name:"With Ref (FA1)",args:{...c,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const l=x(e),t=l.getAllByRole("generic")[1];console.log(l.getAllByRole("generic")),await n(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={name:"With Attributes (FA2-5)",args:{...c,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=x(e).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","htmlId"),await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("lang","en"),await n(t).toHaveAttribute("data-testid","123ID")}},i={name:"With Markup (A2)",args:{...c,children:a.jsxs(a.Fragment,{children:[a.jsx(H,{as:"h1",level:4,children:"Avvist av kortutsteder"}),a.jsxs(R,{children:["Ta kontakt med kortutsteder for ",a.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},o={name:"With Scroll (A7)",args:{children:I.repeat(100)}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
  },
  argTypes: {
    ref: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    console.log(canvas.getAllByRole('generic'));
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID'
  },
  argTypes: {
    id: {
      table: {
        disable: false
      }
    },
    className: {
      table: {
        disable: false
      }
    },
    lang: {
      table: {
        disable: false
      }
    },
    'data-testid': {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Markup (A2)',
  args: {
    ...defaultArgs,
    children: <>
        <Heading as={'h1'} level={4}>
          {'Avvist av kortutsteder'}
        </Heading>
        <Paragraph>
          {'Ta kontakt med kortutsteder for '}
          <a href={'#storybook-root'}>{'mer informasjon'}</a>
        </Paragraph>
      </>
  },
  argTypes: {
    children: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,k,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Scroll (A7)',
  args: {
    children: loremIpsum.repeat(100)
  }
} satisfies Story`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const K=["WithRef","WithAttributes","WithMarkup","VerticalScroll"];export{o as VerticalScroll,s as WithAttributes,i as WithMarkup,r as WithRef,K as __namedExportsOrder,J as default};
//# sourceMappingURL=PopoverContent.test.stories-CL0yF6Zj.js.map
