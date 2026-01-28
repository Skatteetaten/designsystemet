import{j as s,f as n,u as A}from"./iframe-CBOQuZmX.js";import"./index-D76sDZza.js";import{T as K}from"./DatePickerCalendar-DF1H3gtV.js";import"./preload-helper-PPVm8Dsz.js";import"./Help-4dQh7YC4.js";import"./index-BxmwhRWV.js";import"./index-tEZUkoN5.js";import"./index-CSgUqAK2.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./index-haEYng38.js";import"./index-B4-BoLKC.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./index-BYntwts4.js";import"./LabelWithHelp-vli_xocL.js";import"./index-Zmgbh9ba.js";const{expect:t,userEvent:a,waitFor:x,within:i}=__STORYBOOK_MODULE_TEST__,ie={title:"Tester/useFormattedInput",tags:["test"],parameters:{controls:{disable:!0},docs:{description:{component:"Tests for the useFormattedInput hook functionality with various formatting types."}}}},u=({type:o,initialValue:r,label:e,locale:l})=>{const c=A({type:o,initialValue:r,locale:l});return s.jsx(K,{label:e,value:c.value,"data-testid":`formatted-input-${o}`,onChange:c.onChange,onKeyDown:c.onKeyDown})},b={name:"Phone Number Formatting",render:()=>s.jsx(u,{type:"phoneNumber",initialValue:"12345678",label:"Telefonnummer"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("12 34 56 78")),e.focus(),await a.clear(e),await a.type(e,"87654321"),await t(e).toHaveValue(n("87 65 43 21"))}},p={name:"Organisation Number Formatting",render:()=>s.jsx(u,{type:"organisationNumber",initialValue:"974761076",label:"Organisasjonsnummer"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("974 761 076")),e.focus(),await a.clear(e),await a.type(e,"123456789"),await t(e).toHaveValue(n("123 456 789"))}},d={name:"National Identity Number Formatting",render:()=>s.jsx(u,{type:"nationalIdentityNumber",initialValue:"26301518292",label:"Fødselsnummer"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("263015 18292")),e.focus(),await a.clear(e),await a.type(e,"12345612345"),await t(e).toHaveValue(n("123456 12345"))}},v={name:"Bank Account Number Formatting",render:()=>s.jsx(u,{type:"bankAccountNumber",initialValue:"76940524802",label:"Kontonummer"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("7694 05 24802")),e.focus(),await a.clear(e),await a.type(e,"12341212345"),await t(e).toHaveValue(n("1234 12 12345"))}},w={name:"Max Length Validation",render:()=>s.jsx(u,{type:"phoneNumber",label:"Telefonnummer (max 10 digits)"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"123456789012345"),await t(e).toHaveValue(n("12 34 56 78 90")),await a.type(e,"1"),await t(e).toHaveValue(n("12 34 56 78 90"))}},y={name:"Backspace at Separator Behavior",render:()=>s.jsx(u,{type:"organisationNumber",initialValue:"123456789",label:"Test Backspace"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("123 456 789")),e.setSelectionRange(4,4),await a.keyboard("{Backspace}"),await t(e).toHaveValue(n("124 567 89"))}},S={name:"Delete at Separator Behavior",render:()=>s.jsx(u,{type:"organisationNumber",initialValue:"123456789",label:"Test Delete"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("123 456 789")),e.setSelectionRange(3,3),await a.keyboard("{Delete}"),await t(e).toHaveValue(n("123 567 89"))}},f={name:"Non-Digit Filtering",render:()=>s.jsx(u,{type:"phoneNumber",label:"Test Non-Digit Filtering"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"1a2b3c4d5e6f7g8h"),await t(e).toHaveValue(n("12 34 56 78"))}},g={name:"Raw Value Extraction",render:()=>{const o=A({type:"organisationNumber",initialValue:"123456789"});return s.jsxs(s.Fragment,{children:[s.jsx(K,{label:"Organisasjonsnummer",value:o.value,onChange:o.onChange,onKeyDown:o.onKeyDown}),s.jsxs("div",{"data-testid":"raw-value",children:["Raw: ",o.rawValue]})]})},play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("raw-value");await t(e).toHaveValue(n("123 456 789")),await t(l).toHaveTextContent("Raw: 123456789"),e.focus(),await a.clear(e),await a.type(e,"987654321"),await t(e).toHaveValue(n("987 654 321")),await x(()=>{t(l).toHaveTextContent("Raw: 987654321")})}},V={name:"Undo/Redo - Multiple Steps",render:()=>s.jsx(u,{type:"organisationNumber",label:"Test Multiple Undo/Redo"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"123"),await t(e).toHaveValue(n("123")),await a.type(e,"456"),await t(e).toHaveValue(n("123 456")),await a.type(e,"789"),await t(e).toHaveValue(n("123 456 789")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("123 456")),await x(()=>{t(e.selectionStart).toBe(7)}),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("123")),await x(()=>{t(e.selectionStart).toBe(3)}),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await x(()=>{t(e.selectionStart).toBe(0)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123 456")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123 456 789"))}},H={name:"Undo/Redo - With Backspace",render:()=>s.jsx(u,{type:"nationalIdentityNumber",initialValue:"12345678901",label:"Test Undo/Redo with Backspace"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("123456 78901")),e.setSelectionRange(12,12),await a.keyboard("{Backspace}"),await t(e).toHaveValue(n("123456 7890")),await a.keyboard("{Backspace}"),await t(e).toHaveValue(n("123456 789")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("123456 7890")),await x(()=>{t(e.selectionStart).toBe(11)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("123456 78901")),await x(()=>{t(e.selectionStart).toBe(12)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123456 7890")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123456 789"))}},h={name:"Undo/Redo - With Delete Key",render:()=>s.jsx(u,{type:"bankAccountNumber",initialValue:"12345678901",label:"Test Undo/Redo with Delete"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("1234 56 78901")),e.setSelectionRange(5,5),await a.keyboard("{Delete}"),await t(e).toHaveValue(n("1234 67 8901")),e.setSelectionRange(5,5),await a.keyboard("{Delete}"),await t(e).toHaveValue(n("1234 78 901")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("1234 67 8901")),await x(()=>{t(e.selectionStart).toBe(5)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("1234 56 78901")),await x(()=>{t(e.selectionStart).toBe(5)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("1234 67 8901")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("1234 78 901"))}},E={name:"Undo/Redo - New Typing Clears Future",render:()=>s.jsx(u,{type:"organisationNumber",label:"Test Undo then Type"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"123456"),await t(e).toHaveValue(n("123 456")),await a.type(e,"789"),await t(e).toHaveValue(n("123 456 789")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("123 456 78")),await a.type(e,"1"),await t(e).toHaveValue(n("123 456 781")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123 456 781"))}},N={name:"Undo/Redo - Alternative Keyboard Shortcuts",render:()=>s.jsx(u,{type:"phoneNumber",label:"Test Alternative Undo/Redo Keys"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"12345678"),await t(e).toHaveValue(n("12 34 56 78")),await a.keyboard("{Control>}z{/Control}"),await t(e).toHaveValue(n("12 34 56 7")),await a.keyboard("{Control>}y{/Control}"),await t(e).toHaveValue(n("12 34 56 78")),await x(()=>{t(e.selectionStart).toBe(11)})}},B={name:"Undo/Redo - Backspace at Separator",render:()=>s.jsx(u,{type:"organisationNumber",initialValue:"123456789",label:"Test Undo/Redo with Separator"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("123 456 789")),e.setSelectionRange(4,4),await a.keyboard("{Backspace}"),await t(e).toHaveValue(n("124 567 89")),await x(()=>{t(e.selectionStart).toBe(2)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("123 456 789")),await x(()=>{t(e.selectionStart).toBe(4),t(e.selectionEnd).toBe(4)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("124 567 89")),await x(()=>{t(e.selectionStart).toBe(2),t(e.selectionEnd).toBe(2)})}},M={name:"Undo/Redo - Empty History Edge Case",render:()=>s.jsx(u,{type:"organisationNumber",label:"Test Empty History"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(""),await a.type(e,"123"),await t(e).toHaveValue(n("123")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("123")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue("")}},m=({initialValue:o,label:r,locale:e})=>{const l=A({type:"number",initialValue:o,locale:e,allowDecimals:!0});return s.jsxs(s.Fragment,{children:[s.jsx(K,{label:r,value:l.value,"data-testid":"formatted-input-number",onChange:l.onChange,onKeyDown:l.onKeyDown}),s.jsxs("div",{"data-testid":"raw-value",children:["Raw: ",l.rawValue]}),s.jsxs("div",{"data-testid":"number-value",children:["Number: ",l.numberValue]})]})},T={name:"Number - Basic Formatting",render:()=>s.jsx(m,{initialValue:"1234567",label:"Tall"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("1 234 567")),e.focus(),await a.clear(e),await a.type(e,"9876543"),await t(e).toHaveValue(n("9 876 543"))}},k={name:"Number - Decimal Input",render:()=>s.jsx(m,{initialValue:"1234,56",label:"Tall med desimaler"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("1 234,56")),e.focus(),await a.clear(e),await a.type(e,"9999,99"),await t(e).toHaveValue(n("9 999,99"))}},R={name:"Number - Negative Value",render:()=>s.jsx(m,{initialValue:"-1234",label:"Negativt tall"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");await t(e).toHaveValue(n("-1 234")),e.focus(),await a.clear(e),await a.type(e,"-5678,90"),await t(e).toHaveValue(n("-5 678,90"))}},D={name:"Number - Value Extraction",render:()=>s.jsx(m,{initialValue:"1234,56",label:"Verdiuttrekking"}),play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("raw-value"),c=r.getByTestId("number-value");await t(e).toHaveValue(n("1 234,56")),await t(l).toHaveTextContent("Raw: 1234,56"),await t(c).toHaveTextContent("Number: 1234.56"),e.focus(),await a.clear(e),await a.type(e,"9876,54"),await x(()=>{t(l).toHaveTextContent("Raw: 9876,54")}),await x(()=>{t(c).toHaveTextContent("Number: 9876.54")})}},I={name:"Number - Typing Decimal Separator",render:()=>s.jsx(m,{label:"Skriv desimaltall"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"123,45"),await t(e).toHaveValue("123,45"),await a.type(e,",67"),await t(e).toHaveValue("123,45")}},z={name:"Number - Filter Non-Numeric Characters",render:()=>s.jsx(m,{label:"Filtrer ugyldige tegn"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"abc123def,45ghi"),await t(e).toHaveValue("123,45")}},F={name:"Number - Backspace at Thousand Separator",render:()=>s.jsx(m,{initialValue:"1234567",label:"Backspace ved tusen-skilletegn"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("1 234 567")),e.setSelectionRange(2,2),await a.keyboard("{Backspace}"),await t(e).toHaveValue(n("234 567"))}},C={name:"Number - Delete at Thousand Separator",render:()=>s.jsx(m,{initialValue:"1234567",label:"Delete ved tusen-skilletegn"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await t(e).toHaveValue(n("1 234 567")),e.setSelectionRange(1,1),await a.keyboard("{Delete}"),await t(e).toHaveValue(n("134 567"))}},L={name:"Number - English Locale (en-GB)",render:()=>s.jsx(m,{initialValue:"1234.56",label:"Number with English locale",locale:"en-GB"}),play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("number-value");await t(e).toHaveValue("1,234.56"),await t(l).toHaveTextContent("Number: 1234.56"),e.focus(),await a.clear(e),await a.type(e,"9876.54"),await t(e).toHaveValue("9,876.54")}},U={name:"Number - Undo/Redo",render:()=>s.jsx(m,{label:"Angre/Gjenta"}),play:async({canvasElement:o})=>{const e=i(o).getByRole("textbox");e.focus(),await a.type(e,"1234"),await t(e).toHaveValue(n("1 234")),await a.type(e,",56"),await t(e).toHaveValue(n("1 234,56")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(n("1 234")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(n("1 234,56"))}},j={name:"Number - Leading Zeroes",render:()=>s.jsx(m,{label:"Ledende nuller"}),play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("raw-value"),c=r.getByTestId("number-value");e.focus(),await a.type(e,"007"),await t(e).toHaveValue("007"),await t(l).toHaveTextContent("Raw: 007"),await t(c).toHaveTextContent("Number: 7"),await a.clear(e),await a.type(e,"00123"),await t(e).toHaveValue(n("00 123")),await t(l).toHaveTextContent("Raw: 00123"),await t(c).toHaveTextContent("Number: 123"),await a.clear(e),await a.type(e,"007,50"),await t(e).toHaveValue("007,50"),await t(l).toHaveTextContent("Raw: 007,50"),await t(c).toHaveTextContent("Number: 7.5")}},P={name:"Number - Leading Zeroes with Negative",render:()=>s.jsx(m,{label:"Ledende nuller negativt"}),play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("raw-value"),c=r.getByTestId("number-value");e.focus(),await a.type(e,"-007"),await t(e).toHaveValue("-007"),await t(l).toHaveTextContent("Raw: -007"),await t(c).toHaveTextContent("Number: -7"),await a.clear(e),await a.type(e,"-00123,45"),await t(e).toHaveValue(n("-00 123,45")),await t(l).toHaveTextContent("Raw: -00123,45"),await t(c).toHaveTextContent("Number: -123.45")}},J={name:"Number - Leading Zeroes Decimal Only",render:()=>s.jsx(m,{label:"Bare desimal med null"}),play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("raw-value"),c=r.getByTestId("number-value");e.focus(),await a.type(e,",5"),await t(e).toHaveValue("0,5"),await t(l).toHaveTextContent("Raw: ,5"),await t(c).toHaveTextContent("Number: 0.5"),await a.clear(e),await a.type(e,"-,5"),await t(e).toHaveValue("-0,5"),await t(l).toHaveTextContent("Raw: -,5"),await t(c).toHaveTextContent("Number: -0.5"),await a.clear(e),await a.type(e,"0,99"),await t(e).toHaveValue("0,99"),await t(l).toHaveTextContent("Raw: 0,99"),await t(c).toHaveTextContent("Number: 0.99")}},X={name:"Number - Leading Zeroes with Thousand Separator",render:()=>s.jsx(m,{label:"Ledende nuller med tusenskille"}),play:async({canvasElement:o})=>{const r=i(o),e=r.getByRole("textbox"),l=r.getByTestId("raw-value");e.focus(),await a.type(e,"001234567"),await t(e).toHaveValue(n("001 234 567")),await t(l).toHaveTextContent("Raw: 001234567"),await a.clear(e),await a.type(e,"000000123"),await t(e).toHaveValue(n("000 000 123")),await t(l).toHaveTextContent("Raw: 000000123")}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Phone Number Formatting',
  render: (): JSX.Element => <TestFormattedInput type={'phoneNumber'} initialValue={'12345678'} label={'Telefonnummer'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));

    // Test typing additional numbers
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '87654321');
    await expect(textbox).toHaveValue(formatNBS('87 65 43 21'));
  }
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Organisation Number Formatting',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} initialValue={'974761076'} label={'Organisasjonsnummer'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value (974 761 076)
    await expect(textbox).toHaveValue(formatNBS('974 761 076'));

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '123456789');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
  }
} satisfies Story`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'National Identity Number Formatting',
  render: (): JSX.Element => <TestFormattedInput type={'nationalIdentityNumber'} initialValue={'26301518292'} label={'Fødselsnummer'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value (263015 18292)
    await expect(textbox).toHaveValue(formatNBS('263015 18292'));

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '12345612345');
    await expect(textbox).toHaveValue(formatNBS('123456 12345'));
  }
} satisfies Story`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Bank Account Number Formatting',
  render: (): JSX.Element => <TestFormattedInput type={'bankAccountNumber'} initialValue={'76940524802'} label={'Kontonummer'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value (7694 05 24802)
    await expect(textbox).toHaveValue(formatNBS('7694 05 24802'));

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '12341212345');
    await expect(textbox).toHaveValue(formatNBS('1234 12 12345'));
  }
} satisfies Story`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Max Length Validation',
  render: (): JSX.Element => <TestFormattedInput type={'phoneNumber'} label={'Telefonnummer (max 10 digits)'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Try to type more than 10 digits
    await userEvent.type(textbox, '123456789012345');

    // Should only show first 10 digits formatted
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78 90'));

    // Try to type another digit - should be prevented
    await userEvent.type(textbox, '1');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78 90')); // Should remain unchanged
  }
} satisfies Story`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Backspace at Separator Behavior',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} initialValue={'123456789'} label={'Test Backspace'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Initial value: "123 456 789"
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Position cursor after first separator (after "123 ")
    textbox.setSelectionRange(4, 4);

    // Press backspace - should delete the "3" before the separator
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('124 567 89'));
  }
} satisfies Story`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Delete at Separator Behavior',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} initialValue={'123456789'} label={'Test Delete'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Initial value: "123 456 789"
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Position cursor before first separator (after "123")
    textbox.setSelectionRange(3, 3);

    // Press delete - should delete the "4" after the separator
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('123 567 89'));
  }
} satisfies Story`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Non-Digit Filtering',
  render: (): JSX.Element => <TestFormattedInput type={'phoneNumber'} label={'Test Non-Digit Filtering'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Type mixture of digits and non-digits
    await userEvent.type(textbox, '1a2b3c4d5e6f7g8h');

    // Should only show digits, formatted
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));
  }
} satisfies Story`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Raw Value Extraction',
  render: (): JSX.Element => {
    const formatter = useFormattedInput({
      type: 'organisationNumber',
      initialValue: '123456789'
    });
    return <>
        <TextField label={'Organisasjonsnummer'} value={formatter.value} onChange={formatter.onChange} onKeyDown={formatter.onKeyDown} />
        <div data-testid={'raw-value'}>
          {'Raw: '}
          {formatter.rawValue}
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');

    // Initial formatted value should be "123 456 789"
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
    // Raw value should be just digits
    await expect(rawValueDisplay).toHaveTextContent('Raw: 123456789');
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '987654321');
    await expect(textbox).toHaveValue(formatNBS('987 654 321'));
    await waitFor(() => {
      expect(rawValueDisplay).toHaveTextContent('Raw: 987654321');
    });
  }
} satisfies Story`,...g.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - Multiple Steps',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} label={'Test Multiple Undo/Redo'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();

    // Step 1: Type "123"
    await userEvent.type(textbox, '123');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Step 2: Type "456"
    await userEvent.type(textbox, '456');
    await expect(textbox).toHaveValue(formatNBS('123 456'));

    // Step 3: Type "789"
    await userEvent.type(textbox, '789');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Undo Step 3
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(7);
    });

    // Undo Step 2
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(3);
    });

    // Undo Step 1
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(0);
    });

    // Redo Step 1
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Redo Step 2
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456'));

    // Redo Step 3
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
  }
} satisfies Story`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - With Backspace',
  render: (): JSX.Element => <TestFormattedInput type={'nationalIdentityNumber'} initialValue={'12345678901'} label={'Test Undo/Redo with Backspace'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    await expect(textbox).toHaveValue(formatNBS('123456 78901'));

    // Move cursor to end and backspace a few times
    textbox.setSelectionRange(12, 12); // End of input
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('123456 7890'));
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('123456 789'));

    // Undo the backspaces
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 7890'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(11);
    });
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 78901'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(12);
    });

    // Redo the backspaces
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 7890'));
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 789'));
  }
} satisfies Story`,...H.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - With Delete Key',
  render: (): JSX.Element => <TestFormattedInput type={'bankAccountNumber'} initialValue={'12345678901'} label={'Test Undo/Redo with Delete'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    await expect(textbox).toHaveValue(formatNBS('1234 56 78901'));

    // Move cursor to position after "1234 " and delete
    textbox.setSelectionRange(5, 5);
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));
    textbox.setSelectionRange(5, 5);
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('1234 78 901'));

    // Undo the deletes
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(5);
    });
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 56 78901'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(5);
    });

    // Redo the deletes
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 78 901'));
  }
} satisfies Story`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - New Typing Clears Future',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} label={'Test Undo then Type'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();

    // Type "123456"
    await userEvent.type(textbox, '123456');
    await expect(textbox).toHaveValue(formatNBS('123 456'));

    // Type "789"
    await userEvent.type(textbox, '789');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Undo once
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 78'));

    // Type new content - this should clear the redo history
    await userEvent.type(textbox, '1');
    await expect(textbox).toHaveValue(formatNBS('123 456 781'));

    // Try to redo - should not change anything because history was cleared
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 781'));
  }
} satisfies Story`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - Alternative Keyboard Shortcuts',
  render: (): JSX.Element => <TestFormattedInput type={'phoneNumber'} label={'Test Alternative Undo/Redo Keys'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();

    // Type some content
    await userEvent.type(textbox, '12345678');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));

    // Undo with Ctrl+Z (alternative to Cmd+Z)
    await userEvent.keyboard('{Control>}z{/Control}');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 7'));

    // Redo with Ctrl+Y (alternative redo shortcut)
    await userEvent.keyboard('{Control>}y{/Control}');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(11);
    });
  }
} satisfies Story`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - Backspace at Separator',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} initialValue={'123456789'} label={'Test Undo/Redo with Separator'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Initial value: "123 456 789"
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Position cursor after first separator (after "123 ")
    textbox.setSelectionRange(4, 4);

    // Press backspace - should delete the "3" before the separator
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('124 567 89'));

    // Verify cursor position
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(2);
    });

    // Undo the backspace
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(4);
      expect(textbox.selectionEnd).toBe(4);
    });

    // Redo the backspace
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('124 567 89'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(2);
      expect(textbox.selectionEnd).toBe(2);
    });
  }
} satisfies Story`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Undo/Redo - Empty History Edge Case',
  render: (): JSX.Element => <TestFormattedInput type={'organisationNumber'} label={'Test Empty History'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();

    // Try to undo when there's nothing to undo
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');

    // Try to redo when there's nothing to redo
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue('');

    // Type something
    await userEvent.type(textbox, '123');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Try to redo when at the end of history
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Undo to empty
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');

    // Try to undo past the beginning
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');
  }
} satisfies Story`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Number - Basic Formatting',
  render: (): JSX.Element => <TestNumberInput initialValue={'1234567'} label={'Tall'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Skal formatere med tusen-skilletegn (non-breaking space i nb-NO)
    await expect(textbox).toHaveValue(formatNBS('1 234 567'));

    // Test typing
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9876543');
    await expect(textbox).toHaveValue(formatNBS('9 876 543'));
  }
} satisfies Story`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Number - Decimal Input',
  render: (): JSX.Element => <TestNumberInput initialValue={'1234,56'} label={'Tall med desimaler'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Skal vise med desimalkomma (nb-NO)
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));

    // Skriv ny verdi med desimaler
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9999,99');
    await expect(textbox).toHaveValue(formatNBS('9 999,99'));
  }
} satisfies Story`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Number - Negative Value',
  render: (): JSX.Element => <TestNumberInput initialValue={'-1234'} label={'Negativt tall'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Negative tall skal beholde minus-tegn
    await expect(textbox).toHaveValue(formatNBS('-1 234'));
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '-5678,90');
    await expect(textbox).toHaveValue(formatNBS('-5 678,90'));
  }
} satisfies Story`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Number - Value Extraction',
  render: (): JSX.Element => <TestNumberInput initialValue={'1234,56'} label={'Verdiuttrekking'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));
    // rawValue skal inneholde tall og desimalkomma uten tusen-skilletegn
    await expect(rawValueDisplay).toHaveTextContent('Raw: 1234,56');
    // numberValue skal være et JavaScript-tall
    await expect(numberValueDisplay).toHaveTextContent('Number: 1234.56');
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9876,54');
    await waitFor(() => {
      expect(rawValueDisplay).toHaveTextContent('Raw: 9876,54');
    });
    await waitFor(() => {
      expect(numberValueDisplay).toHaveTextContent('Number: 9876.54');
    });
  }
} satisfies Story`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Number - Typing Decimal Separator',
  render: (): JSX.Element => <TestNumberInput label={'Skriv desimaltall'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    await userEvent.type(textbox, '123,45');
    await expect(textbox).toHaveValue('123,45');

    // Flere desimalkomma skal ignoreres, og max 2 desimaler vises
    await userEvent.type(textbox, ',67');
    await expect(textbox).toHaveValue('123,45');
  }
} satisfies Story`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Number - Filter Non-Numeric Characters',
  render: (): JSX.Element => <TestNumberInput label={'Filtrer ugyldige tegn'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Bokstaver og spesialtegn skal filtreres bort, men desimalkomma og minus beholdes
    await userEvent.type(textbox, 'abc123def,45ghi');
    await expect(textbox).toHaveValue('123,45');
  }
} satisfies Story`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Number - Backspace at Thousand Separator',
  render: (): JSX.Element => <TestNumberInput initialValue={'1234567'} label={'Backspace ved tusen-skilletegn'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Formatert: "1 234 567"
    await expect(textbox).toHaveValue(formatNBS('1 234 567'));

    // Plasser markør etter første tusen-skilletegn (etter "1 ")
    textbox.setSelectionRange(2, 2);

    // Backspace skal slette sifferet før skilletegnet
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('234 567'));
  }
} satisfies Story`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Number - Delete at Thousand Separator',
  render: (): JSX.Element => <TestNumberInput initialValue={'1234567'} label={'Delete ved tusen-skilletegn'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    // Formatert: "1 234 567"
    await expect(textbox).toHaveValue(formatNBS('1 234 567'));

    // Plasser markør før første tusen-skilletegn (etter "1")
    textbox.setSelectionRange(1, 1);

    // Delete skal slette sifferet etter skilletegnet
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('134 567'));
  }
} satisfies Story`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Number - English Locale (en-GB)',
  render: (): JSX.Element => <TestNumberInput initialValue={'1234.56'} label={'Number with English locale'} locale={'en-GB'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const numberValueDisplay = canvas.getByTestId('number-value');

    // en-GB bruker punktum som desimalskilletegn
    await expect(textbox).toHaveValue('1,234.56');
    await expect(numberValueDisplay).toHaveTextContent('Number: 1234.56');
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9876.54');
    await expect(textbox).toHaveValue('9,876.54');
  }
} satisfies Story`,...L.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Number - Undo/Redo',
  render: (): JSX.Element => <TestNumberInput label={'Angre/Gjenta'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    textbox.focus();
    await userEvent.type(textbox, '1234');
    await expect(textbox).toHaveValue(formatNBS('1 234'));
    await userEvent.type(textbox, ',56');
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));

    // Angre
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1 234'));

    // Gjenta
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));
  }
} satisfies Story`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Number - Leading Zeroes',
  render: (): JSX.Element => <TestNumberInput label={'Ledende nuller'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    textbox.focus();

    // Skriv tall med ledende nuller
    await userEvent.type(textbox, '007');
    await expect(textbox).toHaveValue('007');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 007');
    await expect(numberValueDisplay).toHaveTextContent('Number: 7');

    // Skriv flere ledende nuller (med tusenskiller)
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '00123');
    await expect(textbox).toHaveValue(formatNBS('00 123'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 00123');
    await expect(numberValueDisplay).toHaveTextContent('Number: 123');

    // Ledende nuller med desimaler
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '007,50');
    await expect(textbox).toHaveValue('007,50');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 007,50');
    await expect(numberValueDisplay).toHaveTextContent('Number: 7.5');
  }
} satisfies Story`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Number - Leading Zeroes with Negative',
  render: (): JSX.Element => <TestNumberInput label={'Ledende nuller negativt'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    textbox.focus();

    // Negativt tall med ledende nuller
    await userEvent.type(textbox, '-007');
    await expect(textbox).toHaveValue('-007');
    await expect(rawValueDisplay).toHaveTextContent('Raw: -007');
    await expect(numberValueDisplay).toHaveTextContent('Number: -7');

    // Negativt tall med ledende nuller og desimaler (med tusenskiller)
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '-00123,45');
    await expect(textbox).toHaveValue(formatNBS('-00 123,45'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: -00123,45');
    await expect(numberValueDisplay).toHaveTextContent('Number: -123.45');
  }
} satisfies Story`,...P.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Number - Leading Zeroes Decimal Only',
  render: (): JSX.Element => <TestNumberInput label={'Bare desimal med null'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    textbox.focus();

    // Skriv kun komma og siffer (skal ikke krasje)
    await userEvent.type(textbox, ',5');
    await expect(textbox).toHaveValue('0,5');
    await expect(rawValueDisplay).toHaveTextContent('Raw: ,5');
    await expect(numberValueDisplay).toHaveTextContent('Number: 0.5');

    // Negativt bare desimal
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '-,5');
    await expect(textbox).toHaveValue('-0,5');
    await expect(rawValueDisplay).toHaveTextContent('Raw: -,5');
    await expect(numberValueDisplay).toHaveTextContent('Number: -0.5');

    // Null før desimal
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '0,99');
    await expect(textbox).toHaveValue('0,99');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 0,99');
    await expect(numberValueDisplay).toHaveTextContent('Number: 0.99');
  }
} satisfies Story`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Number - Leading Zeroes with Thousand Separator',
  render: (): JSX.Element => <TestNumberInput label={'Ledende nuller med tusenskille'} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    textbox.focus();

    // Store tall med ledende nuller
    await userEvent.type(textbox, '001234567');
    await expect(textbox).toHaveValue(formatNBS('001 234 567'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 001234567');

    // Ledende nuller bevares selv med tusenskiller
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '000000123');
    await expect(textbox).toHaveValue(formatNBS('000 000 123'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 000000123');
  }
} satisfies Story`,...X.parameters?.docs?.source}}};const le=["PhoneNumberFormatting","OrganisationNumberFormatting","NationalIdentityNumberFormatting","BankAccountNumberFormatting","MaxLengthValidation","BackspaceAtSeparator","DeleteAtSeparator","NonDigitFilteringInput","RawValueExtraction","UndoRedoMultipleSteps","UndoRedoWithBackspace","UndoRedoWithDelete","UndoRedoNewTypingClearsFuture","UndoRedoAlternativeKeys","UndoRedoWithSeparatorDeletion","UndoRedoEmptyHistory","NumberFormatting","NumberWithDecimal","NumberNegativeValue","NumberValueExtraction","NumberTypingDecimal","NumberFilterNonNumeric","NumberBackspaceAtThousandSeparator","NumberDeleteAtThousandSeparator","NumberWithEnglishLocale","NumberUndoRedo","NumberLeadingZeroes","NumberLeadingZeroesNegative","NumberLeadingZeroesDecimalOnly","NumberLeadingZeroesWithThousandSeparator"];export{y as BackspaceAtSeparator,v as BankAccountNumberFormatting,S as DeleteAtSeparator,w as MaxLengthValidation,d as NationalIdentityNumberFormatting,f as NonDigitFilteringInput,F as NumberBackspaceAtThousandSeparator,C as NumberDeleteAtThousandSeparator,z as NumberFilterNonNumeric,T as NumberFormatting,j as NumberLeadingZeroes,J as NumberLeadingZeroesDecimalOnly,P as NumberLeadingZeroesNegative,X as NumberLeadingZeroesWithThousandSeparator,R as NumberNegativeValue,I as NumberTypingDecimal,U as NumberUndoRedo,D as NumberValueExtraction,k as NumberWithDecimal,L as NumberWithEnglishLocale,p as OrganisationNumberFormatting,b as PhoneNumberFormatting,g as RawValueExtraction,N as UndoRedoAlternativeKeys,M as UndoRedoEmptyHistory,V as UndoRedoMultipleSteps,E as UndoRedoNewTypingClearsFuture,H as UndoRedoWithBackspace,h as UndoRedoWithDelete,B as UndoRedoWithSeparatorDeletion,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=useFormattedInput.test.stories-CoO20KbB.js.map
