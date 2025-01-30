import{j as ie}from"./jsx-runtime-CfatFE5O.js";import{w as l,e as t,a as A}from"./index-XVqkR3zt.js";import{d as s}from"./index--O6iZ70i.js";import{D as se}from"./DatePickerCalendar-BtRIsojo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-U0B695k8.js";import"./index-BWc9jU-Q.js";import"./index-Dxnk4fMh.js";import"./LabelWithHelp-b-VgeEnv.js";import"./Help-CS2lfMec.js";const de=e=>(e.selectedDate=new Date(e.selectedDate),e.minDate=new Date(e.minDate),e.maxDate=new Date(e.maxDate),ie.jsx(se,{...e,selectedDate:e.selectedDate,minDate:e.minDate,maxDate:e.maxDate})),oe=new Date("2024-01-15"),xe={component:se,title:"Tester/DatePicker/DatePickerCalendar",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},disabledDates:{table:{disable:!0}},selectedDate:{table:{disable:!0},control:"date"},minDate:{table:{disable:!0},control:"date"},maxDate:{table:{disable:!0},control:"date"},onSelectDate:{table:{disable:!0}},onTabKeyOut:{table:{disable:!0}}},parameters:{mockDate:oe},render:de},o={selectedDate:oe,onSelectDate:()=>{Function.prototype()}},u={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","en"),await t(n).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A1 delvis, B1, B2)",args:{...o},argTypes:{},play:async({canvasElement:e})=>{const a=l(e),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,r=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`;await t(a.getByRole("button",{name:n})).toBeInTheDocument(),await t(a.getByRole("button",{name:r})).toBeInTheDocument(),await t(a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")})).toBeInTheDocument(),await t(a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")})).toBeInTheDocument();const c=a.getByRole("table"),i=c.querySelector("caption"),d=c.querySelectorAll("td"),m=c.querySelectorAll("button"),ce=c.querySelectorAll('button[tabindex="0"]');await t(c).toBeInTheDocument(),await t(i).toBeInTheDocument(),await t(d.length).toBe(m.length),await t(ce.length).toBe(1);const f=a.getAllByText("15")[0];await t(f).toHaveAttribute("aria-label","I dag 15. Januar 2024"),await t(f).toHaveAttribute("aria-current","true"),await t(f).toHaveAttribute("tabindex","0")}},D={name:"WithSelectedDate (B2)",args:{...o,selectedDate:new Date("2024-01-31")},argTypes:{selectedDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByText("31");await t(n).toHaveAttribute("aria-current","true")}},re=new Date("2024-01-15");re.setHours(1,1,1,1);const y={name:"With MinDate (A3 delvis)",args:{...o,minDate:re},argTypes:{minDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=l(e).getByRole("table").querySelectorAll("button:disabled");await t(r.length).toBe(14)}},le=new Date("2024-01-15");le.setHours(1,1,1,1);const v={name:"With MaxDate (A3 delvis)",args:{...o,maxDate:le},argTypes:{maxDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=l(e).getByRole("table").querySelectorAll("button:disabled");await t(r.length).toBe(20)}},g={name:"With MaxDate Where Selected Date Is Within The Range",args:{...o,selectedDate:new Date("2024-01-16"),maxDate:new Date("2024-01-15")},argTypes:{selectedDate:{table:{disable:!1}},maxDate:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e),n=a.getByText("16");await t(n).toHaveAttribute("tabindex","-1");const r=a.getByText("15");await t(r).toHaveAttribute("tabindex","0")}},w={name:"With Breakpoint-mobile (A1 delvis)",args:{...o},argTypes:{},parameters:{viewport:{defaultViewport:"--mobile"}}},h={name:"Click And Change Month And Year (A5 delvis)",args:{...o},argTypes:{},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e),n=`${s.t("ds_forms:datepicker.PreviousMonth")} ${s.t("ds_forms:datepicker.December")} 2023`,r=a.getByRole("button",{name:n}),c=`${s.t("ds_forms:datepicker.NextMonth")} ${s.t("ds_forms:datepicker.February")} 2024`,i=a.getByRole("button",{name:c}),d=a.getByRole("combobox",{name:s.t("ds_forms:datepicker.SelectMonth")}),m=a.getByRole("textbox",{name:s.t("ds_forms:datepicker.Year")});await t(d).toHaveValue("0"),await t(m).toHaveValue("2024"),await A.click(r),await t(d).toHaveValue("11"),await t(m).toHaveValue("2023"),await A.click(i),await t(d).toHaveValue("0"),await t(m).toHaveValue("2024")}},B={name:"With DisabledDates",args:{...o,disabledDates:[new Date("2024-01-04"),new Date("2024-01-06"),new Date("2024-01-07"),new Date("2024-01-13"),new Date("2024-01-14"),new Date("2024-01-20"),new Date("2024-01-21"),new Date("2024-01-27"),new Date("2024-01-28"),new Date("2024-02-03T09:40:00"),new Date(2024,1,4)],minDate:new Date("2023-12-01"),maxDate:new Date("2024-02-10")},argTypes:{disabledDates:{table:{disable:!1}}},play:async({args:e,canvasElement:a})=>{var i;const c=l(a).getByRole("table").querySelectorAll("button:disabled");await t(c.length).toBe((i=e.disabledDates)==null?void 0:i.length)}},x={name:"With DisabledDate As Value",args:{...o,disabledDates:[new Date("2024-01-15")]},argTypes:{disabledDates:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByText("16");await t(n).toHaveAttribute("tabindex","0")}};var T,S,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var W,k,H;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(k=b.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var R,M,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(C=y.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var q,N,Y;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var j,L,J;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(L=g.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var O,K,z;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(K=w.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var G,Q,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const fe=["WithRef","WithAttributes","Defaults","WithSelectedDate","WithMinDate","WithMaxDate","WithMaxDateWhereSelectedDateIsWithinTheRange","WithBreakpointMobile","ClickAndChangeMonthAndYear","WithDisabledDates","WithDisabledDateAsValue"];export{h as ClickAndChangeMonthAndYear,p as Defaults,b as WithAttributes,w as WithBreakpointMobile,x as WithDisabledDateAsValue,B as WithDisabledDates,v as WithMaxDate,g as WithMaxDateWhereSelectedDateIsWithinTheRange,y as WithMinDate,u as WithRef,D as WithSelectedDate,fe as __namedExportsOrder,xe as default};
//# sourceMappingURL=DatePickerCalendar.test.stories-C5f0sHpV.js.map
