import{j as Z}from"./jsx-runtime-Nms4Y4qS.js";import{d as s}from"./index-e2J6NVvS.js";import{w as l,e as t,b as B}from"./index-hUG6DWTw.js";import{D as Q}from"./DatePickerCalendar-Bhlu0kBA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C4S6bjjo.js";import"./index-nyVGXzax.js";import"./index-DnZXMkM7.js";import"./LabelWithHelp-agrIQouL.js";import"./Help-Bjo-3yoG.js";const ee=e=>(e.selectedDate=new Date(e.selectedDate),e.minDate=new Date(e.minDate),e.maxDate=new Date(e.maxDate),Z.jsx(Q,{...e,selectedDate:e.selectedDate,minDate:e.minDate,maxDate:e.maxDate})),U=new Date("2024.01.15"),ue={component:Q,title:"Tester/DatePicker/DatePickerCalendar",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},selectedDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},onSelectDate:{table:{disable:!0}},onTabKeyOut:{table:{disable:!0}}},parameters:{mockDate:U},render:ee},r={selectedDate:U,onSelectDate:()=>{Function.prototype()}},m={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","en"),await t(n).toHaveAttribute("data-testid","123ID")}},b={name:"Defaults (A1 delvis, B1, B2)",args:{...r},argTypes:{},play:async({canvasElement:e})=>{const a=l(e),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,o=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`;await t(a.getByRole("button",{name:n})).toBeInTheDocument(),await t(a.getByRole("button",{name:o})).toBeInTheDocument(),await t(a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")})).toBeInTheDocument(),await t(a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")})).toBeInTheDocument();const c=a.getByRole("table"),h=c.querySelector("caption"),i=c.querySelectorAll("td"),d=c.querySelectorAll("button"),X=c.querySelectorAll('button[tabindex="0"]');await t(c).toBeInTheDocument(),await t(h).toBeInTheDocument(),await t(i.length).toBe(d.length),await t(X.length).toBe(1);const w=a.getAllByText("15")[0];await t(w).toHaveAttribute("aria-label","I dag 15. Januar 2024"),await t(w).toHaveAttribute("aria-current","true"),await t(w).toHaveAttribute("tabindex","0")}},p={name:"WithSelectedDate (B2)",args:{...r,selectedDate:new Date("2024.01.31")},argTypes:{selectedDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByText("31");await t(n).toHaveAttribute("aria-current","true")}},y={name:"With MinDate (A3 delvis)",args:{...r,minDate:new Date("2024.01.15")},argTypes:{minDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const o=l(e).getByRole("table").querySelectorAll("button:disabled");await t(o.length).toBe(14)}},v={name:"With MaxDate (A3 delvis)",args:{...r,maxDate:new Date("2024.01.15")},argTypes:{maxDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const o=l(e).getByRole("table").querySelectorAll("button:disabled");await t(o.length).toBe(20)}},g={name:"With MaxDate Where Selected Date Is Within The Range",args:{...r,selectedDate:new Date("2024.01.16"),maxDate:new Date("2024.01.15")},argTypes:{selectedDate:{table:{disable:!1}},maxDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e),n=a.getByText("16");await t(n).toHaveAttribute("tabindex","-1");const o=a.getByText("15");await t(o).toHaveAttribute("tabindex","0")}},D={name:"With Breakpoint-mobile (A1 delvis)",args:{...r},argTypes:{},parameters:{viewport:{defaultViewport:"--mobile"}}},x={name:"Click And Change Month And Year (A5 delvis)",args:{...r},argTypes:{},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,o=a.getByRole("button",{name:n}),c=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`,h=a.getByRole("button",{name:c}),i=a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")}),d=a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")});await t(i).toHaveValue("0"),await t(d).toHaveValue("2024"),await B.click(o),await t(i).toHaveValue("11"),await t(d).toHaveValue("2023"),await B.click(h),await t(i).toHaveValue("0"),await t(d).toHaveValue("2024")}};var f,A,T;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    const calendar = canvas.getAllByRole('generic')[1];
    await expect(calendar).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(T=(A=m.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var S,I,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    const calendar = canvas.getAllByRole('generic')[1];
    await expect(calendar).toHaveAttribute('id', 'htmlId');
    await expect(calendar).toHaveClass('dummyClassname');
    await expect(calendar).toHaveAttribute('lang', 'en');
    await expect(calendar).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(k=(I=u.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var R,H,W;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Defaults (A1 delvis, B1, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const prevArrowBtnText = \`\${dsI18n.t('ds_forms:datepicker.PreviousMonth')} \${dsI18n.t('ds_forms:datepicker.December')} 2023\`;
    const nextArrowBtnText = \`\${dsI18n.t('ds_forms:datepicker.NextMonth')} \${dsI18n.t('ds_forms:datepicker.February')} 2024\`;
    await expect(canvas.getByRole('button', {
      name: prevArrowBtnText
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: nextArrowBtnText
    })).toBeInTheDocument();
    await expect(canvas.getByRole('combobox', {
      name: dsI18n.t('ds_forms:datepicker.SelectMonth')
    })).toBeInTheDocument();
    await expect(canvas.getByRole('textbox', {
      name: dsI18n.t('ds_forms:datepicker.Year')
    })).toBeInTheDocument();
    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const caption = calendarTable.querySelector('caption');
    // eslint-disable-next-line testing-library/no-node-access
    const cells = calendarTable.querySelectorAll('td');
    // eslint-disable-next-line testing-library/no-node-access
    const buttons = calendarTable.querySelectorAll('button');
    // eslint-disable-next-line testing-library/no-node-access
    const focusableButtons = calendarTable.querySelectorAll('button[tabindex="0"]');
    await expect(calendarTable).toBeInTheDocument();
    await expect(caption).toBeInTheDocument();
    await expect(cells.length).toBe(buttons.length);
    await expect(focusableButtons.length).toBe(1);
    const defaultSelectedDateButton = canvas.getAllByText('15')[0];
    await expect(defaultSelectedDateButton).toHaveAttribute('aria-label', 'I dag 15. Januar 2024');
    await expect(defaultSelectedDateButton).toHaveAttribute('aria-current', 'true');
    await expect(defaultSelectedDateButton).toHaveAttribute('tabindex', '0');
  }
} satisfies Story`,...(W=(H=b.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var M,_,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'WithSelectedDate (B2)',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024.01.31')
  },
  argTypes: {
    selectedDate: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectedDateButton = canvas.getByText('31');
    await expect(selectedDateButton).toHaveAttribute('aria-current', 'true');
  }
} satisfies Story`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,C,$;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With MinDate (A3 delvis)',
  args: {
    ...defaultArgs,
    minDate: new Date('2024.01.15')
  },
  argTypes: {
    minDate: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(14);
  }
} satisfies Story`,...($=(C=y.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var P,V,q;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With MaxDate (A3 delvis)',
  args: {
    ...defaultArgs,
    maxDate: new Date('2024.01.15')
  },
  argTypes: {
    maxDate: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(20);
  }
} satisfies Story`,...(q=(V=v.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,Y,j;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With MaxDate Where Selected Date Is Within The Range',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024.01.16'),
    maxDate: new Date('2024.01.15')
  },
  argTypes: {
    selectedDate: {
      table: {
        disable: false
      }
    },
    maxDate: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const oldSelectedDateButton = canvas.getByText('16');
    await expect(oldSelectedDateButton).toHaveAttribute('tabindex', '-1');
    const newSelectedDateButton = canvas.getByText('15');
    await expect(newSelectedDateButton).toHaveAttribute('tabindex', '0');
  }
} satisfies Story`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var L,J,O;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Breakpoint-mobile (A1 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(O=(J=D.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var K,z,G;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Click And Change Month And Year (A5 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
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
    const prevArrowBtnText = \`\${dsI18n.t('ds_forms:datepicker.PreviousMonth')} \${dsI18n.t('ds_forms:datepicker.December')} 2023\`;
    const prevButton = canvas.getByRole('button', {
      name: prevArrowBtnText
    });
    const nextArrowBtnText = \`\${dsI18n.t('ds_forms:datepicker.NextMonth')} \${dsI18n.t('ds_forms:datepicker.February')} 2024\`;
    const nextButton = canvas.getByRole('button', {
      name: nextArrowBtnText
    });
    const monthSelect = canvas.getByRole('combobox', {
      name: dsI18n.t('ds_forms:datepicker.SelectMonth')
    });
    const yearInput = canvas.getByRole('textbox', {
      name: dsI18n.t('ds_forms:datepicker.Year')
    });
    await expect(monthSelect).toHaveValue('0');
    await expect(yearInput).toHaveValue('2024');
    await fireEvent.click(prevButton);
    await expect(monthSelect).toHaveValue('11');
    await expect(yearInput).toHaveValue('2023');
    await fireEvent.click(nextButton);
    await expect(monthSelect).toHaveValue('0');
    await expect(yearInput).toHaveValue('2024');
  }
} satisfies Story`,...(G=(z=x.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const be=["WithRef","WithAttributes","Defaults","WithSelectedDate","WithMinDate","WithMaxDate","WithMaxDateWhereSelectedDateIsWithinTheRange","WithBreakpointMobile","ClickAndChangeMonthAndYear"];export{x as ClickAndChangeMonthAndYear,b as Defaults,u as WithAttributes,D as WithBreakpointMobile,v as WithMaxDate,g as WithMaxDateWhereSelectedDateIsWithinTheRange,y as WithMinDate,m as WithRef,p as WithSelectedDate,be as __namedExportsOrder,ue as default};
//# sourceMappingURL=DatePickerCalendar.test.stories-BpaujS2P.js.map
