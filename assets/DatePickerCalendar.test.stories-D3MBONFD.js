import{j as le}from"./jsx-runtime-Nms4Y4qS.js";import{d as s}from"./index-C498nvnC.js";import{w as l,e as t,a as A}from"./index-B8otpkpo.js";import{D as se}from"./DatePickerCalendar-CBp1RHw1.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKHxS2Ra.js";import"./index-C3Vp3Ydz.js";import"./index-jWwGX2yX.js";import"./LabelWithHelp-Cd6nOtjt.js";import"./Help-et05bSay.js";const ie=e=>(e.selectedDate=new Date(e.selectedDate),e.minDate=new Date(e.minDate),e.maxDate=new Date(e.maxDate),le.jsx(se,{...e,selectedDate:e.selectedDate,minDate:e.minDate,maxDate:e.maxDate})),oe=new Date("2024-01-15"),xe={component:se,title:"Tester/DatePicker/DatePickerCalendar",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},disabledDates:{table:{disable:!0}},selectedDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},onSelectDate:{table:{disable:!0}},onTabKeyOut:{table:{disable:!0}}},parameters:{mockDate:oe},render:ie},o={selectedDate:oe,onSelectDate:()=>{Function.prototype()}},b={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","en"),await t(n).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A1 delvis, B1, B2)",args:{...o},argTypes:{},play:async({canvasElement:e})=>{const a=l(e),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,r=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`;await t(a.getByRole("button",{name:n})).toBeInTheDocument(),await t(a.getByRole("button",{name:r})).toBeInTheDocument(),await t(a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")})).toBeInTheDocument(),await t(a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")})).toBeInTheDocument();const i=a.getByRole("table"),c=i.querySelector("caption"),d=i.querySelectorAll("td"),m=i.querySelectorAll("button"),re=i.querySelectorAll('button[tabindex="0"]');await t(i).toBeInTheDocument(),await t(c).toBeInTheDocument(),await t(d.length).toBe(m.length),await t(re.length).toBe(1);const f=a.getAllByText("15")[0];await t(f).toHaveAttribute("aria-label","I dag 15. Januar 2024"),await t(f).toHaveAttribute("aria-current","true"),await t(f).toHaveAttribute("tabindex","0")}},D={name:"WithSelectedDate (B2)",args:{...o,selectedDate:new Date("2024-01-31")},argTypes:{selectedDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByText("31");await t(n).toHaveAttribute("aria-current","true")}},y={name:"With MinDate (A3 delvis)",args:{...o,minDate:new Date("2024-01-15")},argTypes:{minDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=l(e).getByRole("table").querySelectorAll("button:disabled");await t(r.length).toBe(14)}},g={name:"With MaxDate (A3 delvis)",args:{...o,maxDate:new Date("2024-01-15")},argTypes:{maxDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=l(e).getByRole("table").querySelectorAll("button:disabled");await t(r.length).toBe(20)}},v={name:"With MaxDate Where Selected Date Is Within The Range",args:{...o,selectedDate:new Date("2024-01-16"),maxDate:new Date("2024-01-15")},argTypes:{selectedDate:{table:{disable:!1}},maxDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e),n=a.getByText("16");await t(n).toHaveAttribute("tabindex","-1");const r=a.getByText("15");await t(r).toHaveAttribute("tabindex","0")}},w={name:"With Breakpoint-mobile (A1 delvis)",args:{...o},argTypes:{},parameters:{viewport:{defaultViewport:"--mobile"}}},x={name:"Click And Change Month And Year (A5 delvis)",args:{...o},argTypes:{},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,r=a.getByRole("button",{name:n}),i=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`,c=a.getByRole("button",{name:i}),d=a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")}),m=a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")});await t(d).toHaveValue("0"),await t(m).toHaveValue("2024"),await A.click(r),await t(d).toHaveValue("11"),await t(m).toHaveValue("2023"),await A.click(c),await t(d).toHaveValue("0"),await t(m).toHaveValue("2024")}},h={name:"With DisabledDates",args:{...o,disabledDates:[new Date("2024-01-04"),new Date("2024-01-06"),new Date("2024-01-07"),new Date("2024-01-13"),new Date("2024-01-14"),new Date("2024-01-20"),new Date("2024-01-21"),new Date("2024-01-27"),new Date("2024-01-28"),new Date("2024-02-03T09:40:00"),new Date(2024,1,4)],minDate:new Date("2023-12-01"),maxDate:new Date("2024-02-10")},argTypes:{disabledDates:{table:{disable:!1}}},play:async({args:e,canvasElement:a})=>{var c;const i=l(a).getByRole("table").querySelectorAll("button:disabled");await t(i.length).toBe((c=e.disabledDates)==null?void 0:c.length)}},B={name:"With DisabledDate As Value",args:{...o,disabledDates:[new Date("2024-01-15")]},argTypes:{disabledDates:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByText("16");await t(n).toHaveAttribute("tabindex","0")}};var T,S,I;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(S=b.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var W,k,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(k=u.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var H,M,E;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(M=p.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var _,V,F;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(V=D.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var P,C,$;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With MinDate (A3 delvis)',
  args: {
    ...defaultArgs,
    minDate: new Date('2024-01-15')
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
} satisfies Story`,...($=(C=y.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var q,N,Y;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With MaxDate (A3 delvis)',
  args: {
    ...defaultArgs,
    maxDate: new Date('2024-01-15')
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
} satisfies Story`,...(Y=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var j,L,J;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(L=v.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var O,K,z;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(K=w.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var G,Q,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(args.disabledDates?.length);
  }
} satisfies Story`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const he=["WithRef","WithAttributes","Defaults","WithSelectedDate","WithMinDate","WithMaxDate","WithMaxDateWhereSelectedDateIsWithinTheRange","WithBreakpointMobile","ClickAndChangeMonthAndYear","WithDisabledDates","WithDisabledDateAsValue"];export{x as ClickAndChangeMonthAndYear,p as Defaults,u as WithAttributes,w as WithBreakpointMobile,B as WithDisabledDateAsValue,h as WithDisabledDates,g as WithMaxDate,v as WithMaxDateWhereSelectedDateIsWithinTheRange,y as WithMinDate,b as WithRef,D as WithSelectedDate,he as __namedExportsOrder,xe as default};
//# sourceMappingURL=DatePickerCalendar.test.stories-D3MBONFD.js.map