import{j as k,d as s}from"./iframe-s2_bNgHU.js";import{D as T}from"./DatePickerCalendar-ePUd64Qm.js";const{expect:e,fireEvent:A,within:l}=__STORYBOOK_MODULE_TEST__,H=t=>k.jsx(T,{...t,selectedDate:new Date(t.selectedDate),minDate:new Date(t.minDate),maxDate:new Date(t.maxDate)}),S=new Date("2024-01-15"),_={component:T,title:"Tester/DatePicker/Calendar",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},disabledDates:{table:{disable:!0}},selectedDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},onSelectDate:{table:{disable:!0}},onTabKeyOut:{table:{disable:!0}}},render:H,tags:["test"],parameters:{mockDate:S,imageSnapshot:{disableSnapshot:!1}}},o={selectedDate:S,onSelectDate:()=>{Function.prototype()}},m={name:"With Ref (FA1)",args:{...o,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=l(t).getAllByRole("generic")[1];await e(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=l(t).getAllByRole("generic")[1];await e(n).toHaveAttribute("id","htmlId"),await e(n).toHaveClass("dummyClassname"),await e(n).toHaveAttribute("lang","en"),await e(n).toHaveAttribute("data-testid","123ID")}},b={name:"Defaults (A1 delvis, B1, B2)",args:{...o},argTypes:{},play:async({canvasElement:t})=>{const a=l(t),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,r=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`;await e(a.getByRole("button",{name:n})).toBeInTheDocument(),await e(a.getByRole("button",{name:r})).toBeInTheDocument(),await e(a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")})).toBeInTheDocument(),await e(a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")})).toBeInTheDocument();const c=a.getByRole("table"),f=c.querySelector("caption"),i=c.querySelectorAll("td"),d=c.querySelectorAll("button"),R=c.querySelectorAll('button[tabindex="0"]');await e(c).toBeInTheDocument(),await e(f).toBeInTheDocument(),await e(i.length).toBe(d.length),await e(R.length).toBe(1);const x=a.getAllByText("15")[0];await e(x).toHaveAttribute("aria-label","I dag 15. Januar 2024"),await e(x).toHaveAttribute("aria-current","true"),await e(x).toHaveAttribute("tabindex","0")}},p={name:"WithSelectedDate (B2)",args:{...o,selectedDate:new Date("2024-01-31")},argTypes:{selectedDate:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t).getByText("31");await e(n).toHaveAttribute("aria-current","true")}},I=new Date("2024-01-15");I.setHours(1,1,1,1);const D={name:"With MinDate (A3 delvis)",args:{...o,minDate:I},argTypes:{minDate:{table:{disable:!1}}},play:async({canvasElement:t})=>{const r=l(t).getByRole("table").querySelectorAll("button:disabled");await e(r.length).toBe(14)}},W=new Date("2024-01-15");W.setHours(1,1,1,1);const g={name:"With MaxDate (A3 delvis)",args:{...o,maxDate:W},argTypes:{maxDate:{table:{disable:!1}}},play:async({canvasElement:t})=>{const r=l(t).getByRole("table").querySelectorAll("button:disabled");await e(r.length).toBe(20)}},y={name:"With MaxDate Where Selected Date Is Within The Range",args:{...o,selectedDate:new Date("2024-01-16"),maxDate:new Date("2024-01-15")},argTypes:{selectedDate:{table:{disable:!1}},maxDate:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=l(t),n=a.getByText("16");await e(n).toHaveAttribute("tabindex","-1");const r=a.getByText("15");await e(r).toHaveAttribute("tabindex","0")}},v={name:"With Breakpoint-mobile (A1 delvis)",args:{...o},argTypes:{},globals:{viewport:{value:"--mobile"}}},w={name:"Click And Change Month And Year (A5 delvis)",args:{...o},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const a=l(t),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,r=a.getByRole("button",{name:n}),c=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`,f=a.getByRole("button",{name:c}),i=a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")}),d=a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")});await e(i).toHaveValue("0"),await e(d).toHaveValue("2024"),await A.click(r),await e(i).toHaveValue("11"),await e(d).toHaveValue("2023"),await A.click(f),await e(i).toHaveValue("0"),await e(d).toHaveValue("2024")}},h={name:"With DisabledDates",args:{...o,disabledDates:[new Date("2024-01-04"),new Date("2024-01-06"),new Date("2024-01-07"),new Date("2024-01-13"),new Date("2024-01-14"),new Date("2024-01-20"),new Date("2024-01-21"),new Date("2024-01-27"),new Date("2024-01-28"),new Date("2024-02-03T09:40:00"),new Date(2024,1,4)],minDate:new Date("2023-12-01"),maxDate:new Date("2024-02-10")},argTypes:{disabledDates:{table:{disable:!1}}},play:async({args:t,canvasElement:a})=>{const c=l(a).getByRole("table").querySelectorAll("button:disabled");await e(c.length).toBe(t.disabledDates?.length)}},B={name:"With DisabledDate As Value",args:{...o,disabledDates:[new Date("2024-01-15")]},argTypes:{disabledDates:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t).getByText("16");await e(n).toHaveAttribute("tabindex","0")}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendar = canvas.getAllByRole('generic')[1];
    await expect(calendar).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    const caption = calendarTable.querySelector('caption');
    const cells = calendarTable.querySelectorAll('td');
    const buttons = calendarTable.querySelectorAll('button');
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
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'WithSelectedDate (B2)',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024-01-31')
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
} satisfies Story`,...p.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With MinDate (A3 delvis)',
  args: {
    ...defaultArgs,
    minDate
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
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(14);
  }
} satisfies Story`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With MaxDate (A3 delvis)',
  args: {
    ...defaultArgs,
    maxDate
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
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(20);
  }
} satisfies Story`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With MaxDate Where Selected Date Is Within The Range',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024-01-16'),
    maxDate: new Date('2024-01-15')
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Breakpoint-mobile (A1 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Click And Change Month And Year (A5 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With DisabledDates',
  args: {
    ...defaultArgs,
    disabledDates: [new Date('2024-01-04'), new Date('2024-01-06'), new Date('2024-01-07'), new Date('2024-01-13'), new Date('2024-01-14'), new Date('2024-01-20'), new Date('2024-01-21'), new Date('2024-01-27'), new Date('2024-01-28'), new Date('2024-02-03T09:40:00'), new Date(2024, 1, 4)],
    minDate: new Date('2023-12-01'),
    maxDate: new Date('2024-02-10')
  },
  argTypes: {
    disabledDates: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarTable = canvas.getByRole('table');
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(args.disabledDates?.length);
  }
} satisfies Story`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With DisabledDate As Value',
  args: {
    ...defaultArgs,
    disabledDates: [new Date('2024-01-15')]
  },
  argTypes: {
    disabledDates: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const focusedButton = canvas.getByText('16');
    await expect(focusedButton).toHaveAttribute('tabindex', '0');
  }
} satisfies Story`,...B.parameters?.docs?.source}}};const M=["WithRef","WithAttributes","Defaults","WithSelectedDate","WithMinDate","WithMaxDate","WithMaxDateWhereSelectedDateIsWithinTheRange","WithBreakpointMobile","ClickAndChangeMonthAndYear","WithDisabledDates","WithDisabledDateAsValue"],C=Object.freeze(Object.defineProperty({__proto__:null,ClickAndChangeMonthAndYear:w,Defaults:b,WithAttributes:u,WithBreakpointMobile:v,WithDisabledDateAsValue:B,WithDisabledDates:h,WithMaxDate:g,WithMaxDateWhereSelectedDateIsWithinTheRange:y,WithMinDate:D,WithRef:m,WithSelectedDate:p,__namedExportsOrder:M,default:_},Symbol.toStringTag,{value:"Module"}));export{C as D};
//# sourceMappingURL=DatePickerCalendar.test.stories-BRCn8XFw.js.map
