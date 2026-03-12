import{j as r,o,u as K}from"./iframe-BHAek7Q1.js";import"./index-D1w89d87.js";import{T as W}from"./DatePickerCalendar-BX9HtFSH.js";import"./preload-helper-PPVm8Dsz.js";import"./Help-CgNeZLkX.js";import"./index-BkWKVRRR.js";import"./index-k4H7HdQu.js";import"./index-MVsVTAOX.js";import"./Combobox.module-DmWNkYt7.js";import"./ComboboxButton-DO8yVEaz.js";import"./index-DNPWp4Lv.js";import"./index-BVEcgXLv.js";import"./ComboboxSelectedOptions-CCttgKi_.js";import"./index-B6YsjIh8.js";import"./LabelWithHelp-ZJcs-Zvg.js";import"./index-DVawnBNL.js";const{expect:t,userEvent:a,waitFor:m,within:l}=__STORYBOOK_MODULE_TEST__,ue={title:"Tester/useFormattedInput",tags:["test"],parameters:{controls:{disable:!0},docs:{description:{component:"Tests for the useFormattedInput hook functionality with various formatting types."}}}},x=({type:n,initialValue:s,label:e,locale:i})=>{const c=K({type:n,initialValue:s,locale:i});return r.jsx(W,{label:e,value:c.value,"data-testid":`formatted-input-${n}`,onChange:c.onChange,onKeyDown:c.onKeyDown})},p={name:"Phone Number Formatting",render:()=>r.jsx(x,{type:"phoneNumber",initialValue:"12345678",label:"Telefonnummer"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("12 34 56 78")),e.focus(),await a.clear(e),await a.type(e,"87654321"),await t(e).toHaveValue(o("87 65 43 21"))}},b={name:"Organisation Number Formatting",render:()=>r.jsx(x,{type:"organisationNumber",initialValue:"974761076",label:"Organisasjonsnummer"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("974 761 076")),e.focus(),await a.clear(e),await a.type(e,"123456789"),await t(e).toHaveValue(o("123 456 789"))}},v={name:"National Identity Number Formatting",render:()=>r.jsx(x,{type:"nationalIdentityNumber",initialValue:"26301518292",label:"Fødselsnummer"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("263015 18292")),e.focus(),await a.clear(e),await a.type(e,"12345612345"),await t(e).toHaveValue(o("123456 12345"))}},w={name:"Bank Account Number Formatting",render:()=>r.jsx(x,{type:"bankAccountNumber",initialValue:"76940524802",label:"Kontonummer"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("7694 05 24802")),e.focus(),await a.clear(e),await a.type(e,"12341212345"),await t(e).toHaveValue(o("1234 12 12345"))}},d={name:"Max Length Validation",render:()=>r.jsx(x,{type:"phoneNumber",label:"Telefonnummer (max 10 digits)"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"123456789012345"),await t(e).toHaveValue(o("12 34 56 78 90")),await a.type(e,"1"),await t(e).toHaveValue(o("12 34 56 78 90"))}},y={name:"Backspace at Separator Behavior",render:()=>r.jsx(x,{type:"organisationNumber",initialValue:"123456789",label:"Test Backspace"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123 456 789")),e.setSelectionRange(4,4),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("124 567 89"))}},S={name:"Delete at Separator Behavior",render:()=>r.jsx(x,{type:"organisationNumber",initialValue:"123456789",label:"Test Delete"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123 456 789")),e.setSelectionRange(3,3),await a.keyboard("{Delete}"),await t(e).toHaveValue(o("123 567 89"))}},g={name:"Non-Digit Filtering",render:()=>r.jsx(x,{type:"phoneNumber",label:"Test Non-Digit Filtering"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"1a2b3c4d5e6f7g8h"),await t(e).toHaveValue(o("12 34 56 78"))}},V={name:"Raw Value Extraction",render:()=>{const n=K({type:"organisationNumber",initialValue:"123456789"});return r.jsxs(r.Fragment,{children:[r.jsx(W,{label:"Organisasjonsnummer",value:n.value,onChange:n.onChange,onKeyDown:n.onKeyDown}),r.jsxs("div",{"data-testid":"raw-value",children:["Raw: ",n.rawValue]})]})},play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value");await t(e).toHaveValue(o("123 456 789")),await t(i).toHaveTextContent("Raw: 123456789"),e.focus(),await a.clear(e),await a.type(e,"987654321"),await t(e).toHaveValue(o("987 654 321")),await m(()=>{t(i).toHaveTextContent("Raw: 987654321")})}},f={name:"Undo/Redo - Multiple Steps",render:()=>r.jsx(x,{type:"organisationNumber",label:"Test Multiple Undo/Redo"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"123"),await t(e).toHaveValue(o("123")),await a.type(e,"456"),await t(e).toHaveValue(o("123 456")),await a.type(e,"789"),await t(e).toHaveValue(o("123 456 789")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123 456")),await m(()=>{t(e.selectionStart).toBe(7)}),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123")),await m(()=>{t(e.selectionStart).toBe(3)}),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await m(()=>{t(e.selectionStart).toBe(0)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123 456")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123 456 789"))}},H={name:"Undo/Redo - With Backspace",render:()=>r.jsx(x,{type:"nationalIdentityNumber",initialValue:"12345678901",label:"Test Undo/Redo with Backspace"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123456 78901")),e.setSelectionRange(12,12),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("123456 7890")),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("123456 789")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123456 7890")),await m(()=>{t(e.selectionStart).toBe(11)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123456 78901")),await m(()=>{t(e.selectionStart).toBe(12)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123456 7890")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123456 789"))}},E={name:"Undo/Redo - With Delete Key",render:()=>r.jsx(x,{type:"bankAccountNumber",initialValue:"12345678901",label:"Test Undo/Redo with Delete"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("1234 56 78901")),e.setSelectionRange(5,5),await a.keyboard("{Delete}"),await t(e).toHaveValue(o("1234 67 8901")),e.setSelectionRange(5,5),await a.keyboard("{Delete}"),await t(e).toHaveValue(o("1234 78 901")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("1234 67 8901")),await m(()=>{t(e.selectionStart).toBe(5)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("1234 56 78901")),await m(()=>{t(e.selectionStart).toBe(5)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("1234 67 8901")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("1234 78 901"))}},N={name:"Undo/Redo - New Typing Clears Future",render:()=>r.jsx(x,{type:"organisationNumber",label:"Test Undo then Type"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"123456"),await t(e).toHaveValue(o("123 456")),await a.type(e,"789"),await t(e).toHaveValue(o("123 456 789")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123 456 78")),await a.type(e,"1"),await t(e).toHaveValue(o("123 456 781")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123 456 781"))}},h={name:"Undo/Redo - Alternative Keyboard Shortcuts",render:()=>r.jsx(x,{type:"phoneNumber",label:"Test Alternative Undo/Redo Keys"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"12345678"),await t(e).toHaveValue(o("12 34 56 78")),await a.keyboard("{Control>}z{/Control}"),await t(e).toHaveValue(o("12 34 56 7")),await a.keyboard("{Control>}y{/Control}"),await t(e).toHaveValue(o("12 34 56 78")),await m(()=>{t(e.selectionStart).toBe(11)})}},T={name:"Undo/Redo - Backspace at Separator",render:()=>r.jsx(x,{type:"organisationNumber",initialValue:"123456789",label:"Test Undo/Redo with Separator"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123 456 789")),e.setSelectionRange(4,4),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("124 567 89")),await m(()=>{t(e.selectionStart).toBe(2)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123 456 789")),await m(()=>{t(e.selectionStart).toBe(4),t(e.selectionEnd).toBe(4)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("124 567 89")),await m(()=>{t(e.selectionStart).toBe(2),t(e.selectionEnd).toBe(2)})}},B={name:"Undo/Redo - Empty History Edge Case",render:()=>r.jsx(x,{type:"organisationNumber",label:"Test Empty History"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(""),await a.type(e,"123"),await t(e).toHaveValue(o("123")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue("")}},u=({initialValue:n,label:s,locale:e,maxFractionDigits:i})=>{const c=K({type:"number",initialValue:n,locale:e,allowDecimals:!0,maxFractionDigits:i});return r.jsxs(r.Fragment,{children:[r.jsx(W,{label:s,value:c.value,"data-testid":"formatted-input-number",onChange:c.onChange,onKeyDown:c.onKeyDown}),r.jsxs("div",{"data-testid":"raw-value",children:["Raw: ",c.rawValue]}),r.jsxs("div",{"data-testid":"number-value",children:["Number: ",c.numberValue]})]})},M={name:"Number - Basic Formatting",render:()=>r.jsx(u,{initialValue:"1234567",label:"Tall"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("1 234 567")),e.focus(),await a.clear(e),await a.type(e,"9876543"),await t(e).toHaveValue(o("9 876 543"))}},k={name:"Number - Decimal Input",render:()=>r.jsx(u,{initialValue:"1234,56",label:"Tall med desimaler"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("1 234,56")),e.focus(),await a.clear(e),await a.type(e,"9999,99"),await t(e).toHaveValue(o("9 999,99"))}},R={name:"Number - Negative Value",render:()=>r.jsx(u,{initialValue:"-1234",label:"Negativt tall"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");await t(e).toHaveValue(o("-1 234")),e.focus(),await a.clear(e),await a.type(e,"-5678,90"),await t(e).toHaveValue(o("-5 678,90"))}},D={name:"Number - Value Extraction",render:()=>r.jsx(u,{initialValue:"1234,56",label:"Verdiuttrekking"}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");await t(e).toHaveValue(o("1 234,56")),await t(i).toHaveTextContent("Raw: 1234,56"),await t(c).toHaveTextContent("Number: 1234.56"),e.focus(),await a.clear(e),await a.type(e,"9876,54"),await m(()=>{t(i).toHaveTextContent("Raw: 9876,54")}),await m(()=>{t(c).toHaveTextContent("Number: 9876.54")})}},I={name:"Number - Typing Decimal Separator",render:()=>r.jsx(u,{label:"Skriv desimaltall"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"123,45"),await t(e).toHaveValue("123,45"),await a.type(e,",67"),await t(e).toHaveValue("123,45")}},F={name:"Number - Filter Non-Numeric Characters",render:()=>r.jsx(u,{label:"Filtrer ugyldige tegn"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"abc123def,45ghi"),await t(e).toHaveValue("123,45")}},C={name:"Number - Backspace at Thousand Separator",render:()=>r.jsx(u,{initialValue:"1234567",label:"Backspace ved tusen-skilletegn"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("1 234 567")),e.setSelectionRange(2,2),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("234 567"))}},z={name:"Number - Delete at Thousand Separator",render:()=>r.jsx(u,{initialValue:"1234567",label:"Delete ved tusen-skilletegn"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("1 234 567")),e.setSelectionRange(1,1),await a.keyboard("{Delete}"),await t(e).toHaveValue(o("134 567"))}},L={name:"Number - English Locale (en-GB)",render:()=>r.jsx(u,{initialValue:"1234.56",label:"Number with English locale",locale:"en-GB"}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("number-value");await t(e).toHaveValue("1,234.56"),await t(i).toHaveTextContent("Number: 1234.56"),e.focus(),await a.clear(e),await a.type(e,"9876.54"),await t(e).toHaveValue("9,876.54")}},U={name:"Number - Undo/Redo",render:()=>r.jsx(u,{label:"Angre/Gjenta"}),play:async({canvasElement:n})=>{const e=l(n).getByRole("textbox");e.focus(),await a.type(e,"1234"),await t(e).toHaveValue(o("1 234")),await a.type(e,",56"),await t(e).toHaveValue(o("1 234,56")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("1 234")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("1 234,56"))}},j={name:"Number - Leading Zeroes",render:()=>r.jsx(u,{label:"Ledende nuller"}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");e.focus(),await a.type(e,"007"),await t(e).toHaveValue("007"),await t(i).toHaveTextContent("Raw: 007"),await t(c).toHaveTextContent("Number: 7"),await a.clear(e),await a.type(e,"00123"),await t(e).toHaveValue(o("00 123")),await t(i).toHaveTextContent("Raw: 00123"),await t(c).toHaveTextContent("Number: 123"),await a.clear(e),await a.type(e,"007,50"),await t(e).toHaveValue("007,50"),await t(i).toHaveTextContent("Raw: 007,50"),await t(c).toHaveTextContent("Number: 7.5")}},P={name:"Number - Leading Zeroes with Negative",render:()=>r.jsx(u,{label:"Ledende nuller negativt"}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");e.focus(),await a.type(e,"-007"),await t(e).toHaveValue("-007"),await t(i).toHaveTextContent("Raw: -007"),await t(c).toHaveTextContent("Number: -7"),await a.clear(e),await a.type(e,"-00123,45"),await t(e).toHaveValue(o("-00 123,45")),await t(i).toHaveTextContent("Raw: -00123,45"),await t(c).toHaveTextContent("Number: -123.45")}},J={name:"Number - Leading Zeroes Decimal Only",render:()=>r.jsx(u,{label:"Bare desimal med null"}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");e.focus(),await a.type(e,",5"),await t(e).toHaveValue("0,5"),await t(i).toHaveTextContent("Raw: ,5"),await t(c).toHaveTextContent("Number: 0.5"),await a.clear(e),await a.type(e,"-,5"),await t(e).toHaveValue("-0,5"),await t(i).toHaveTextContent("Raw: -,5"),await t(c).toHaveTextContent("Number: -0.5"),await a.clear(e),await a.type(e,"0,99"),await t(e).toHaveValue("0,99"),await t(i).toHaveTextContent("Raw: 0,99"),await t(c).toHaveTextContent("Number: 0.99")}},X={name:"Number - Leading Zeroes with Thousand Separator",render:()=>r.jsx(u,{label:"Ledende nuller med tusenskille"}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value");e.focus(),await a.type(e,"001234567"),await t(e).toHaveValue(o("001 234 567")),await t(i).toHaveTextContent("Raw: 001234567"),await a.clear(e),await a.type(e,"000000123"),await t(e).toHaveValue(o("000 000 123")),await t(i).toHaveTextContent("Raw: 000000123")}},A={name:"Number - Max Fraction Digits",render:()=>r.jsx(u,{initialValue:"",label:"Maks 4 desimaler",maxFractionDigits:4}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");e.focus(),await a.type(e,"123,4567"),await t(e).toHaveValue("123,4567"),await t(i).toHaveTextContent("Raw: 123,4567"),await t(c).toHaveTextContent("Number: 123.4567"),await a.type(e,"89"),await t(e).toHaveValue("123,4567"),await t(i).toHaveTextContent("Raw: 123,4567"),await a.clear(e),await a.type(e,"99,123456789"),await t(e).toHaveValue("99,1234"),await t(i).toHaveTextContent("Raw: 99,1234"),await a.clear(e),await a.type(e,"99,0010"),await t(e).toHaveValue("99,0010"),await t(i).toHaveTextContent("Raw: 99,0010")}},O={name:"Number - Max Fraction Digits One",render:()=>r.jsx(u,{initialValue:"",label:"Maks 1 desimal",maxFractionDigits:1}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");e.focus(),await a.type(e,"500,5"),await t(e).toHaveValue("500,5"),await t(i).toHaveTextContent("Raw: 500,5"),await t(c).toHaveTextContent("Number: 500.5"),await a.type(e,"99"),await t(e).toHaveValue("500,5"),await t(i).toHaveTextContent("Raw: 500,5")}},Z={name:"Number - Max Fraction Digits Zero",render:()=>r.jsx(u,{initialValue:"",label:"Maks 0 desimal",maxFractionDigits:0}),play:async({canvasElement:n})=>{const s=l(n),e=s.getByRole("textbox"),i=s.getByTestId("raw-value"),c=s.getByTestId("number-value");e.focus(),await a.type(e,"500,5"),await t(e).toHaveValue(o("5 005")),await t(i).toHaveTextContent("Raw: 5005"),await t(c).toHaveTextContent("Number: 5005"),await a.type(e,"99"),await t(e).toHaveValue(o("500 599")),await t(i).toHaveTextContent("Raw: 500599")}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...V.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...X.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Number - Max Fraction Digits',
  render: (): JSX.Element => <TestNumberInput initialValue={''} label={'Maks 4 desimaler'} maxFractionDigits={4} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    textbox.focus();

    // Skriv tall med 4 desimaler (skal tillates)
    await userEvent.type(textbox, '123,4567');
    await expect(textbox).toHaveValue('123,4567');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 123,4567');
    await expect(numberValueDisplay).toHaveTextContent('Number: 123.4567');

    // Forsøk å skrive flere desimaler (skal avvises)
    await userEvent.type(textbox, '89');
    await expect(textbox).toHaveValue('123,4567');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 123,4567');

    // Test med initial value som overstiger maks desimaler
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '99,123456789');
    await expect(textbox).toHaveValue('99,1234');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 99,1234');

    // Test med ekstra nuller i desimal
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '99,0010');
    await expect(textbox).toHaveValue('99,0010');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 99,0010');
  }
} satisfies Story`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Number - Max Fraction Digits One',
  render: (): JSX.Element => <TestNumberInput initialValue={''} label={'Maks 1 desimal'} maxFractionDigits={1} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    textbox.focus();

    // Skriv tall med 1 desimal
    await userEvent.type(textbox, '500,5');
    await expect(textbox).toHaveValue('500,5');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 500,5');
    await expect(numberValueDisplay).toHaveTextContent('Number: 500.5');

    // Forsøk å skrive flere desimaler
    await userEvent.type(textbox, '99');
    await expect(textbox).toHaveValue('500,5');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 500,5');
  }
} satisfies Story`,...O.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Number - Max Fraction Digits Zero',
  render: (): JSX.Element => <TestNumberInput initialValue={''} label={'Maks 0 desimal'} maxFractionDigits={0} />,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');
    textbox.focus();

    // Skriv tall med 1 desimal
    await userEvent.type(textbox, '500,5');
    //input behandles som heltall i stedet for desimal
    await expect(textbox).toHaveValue(formatNBS('5 005'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 5005');
    await expect(numberValueDisplay).toHaveTextContent('Number: 5005');

    // Forsøk å skrive flere desimaler
    await userEvent.type(textbox, '99');
    await expect(textbox).toHaveValue(formatNBS('500 599'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 500599');
  }
} satisfies Story`,...Z.parameters?.docs?.source}}};const xe=["PhoneNumberFormatting","OrganisationNumberFormatting","NationalIdentityNumberFormatting","BankAccountNumberFormatting","MaxLengthValidation","BackspaceAtSeparator","DeleteAtSeparator","NonDigitFilteringInput","RawValueExtraction","UndoRedoMultipleSteps","UndoRedoWithBackspace","UndoRedoWithDelete","UndoRedoNewTypingClearsFuture","UndoRedoAlternativeKeys","UndoRedoWithSeparatorDeletion","UndoRedoEmptyHistory","NumberFormatting","NumberWithDecimal","NumberNegativeValue","NumberValueExtraction","NumberTypingDecimal","NumberFilterNonNumeric","NumberBackspaceAtThousandSeparator","NumberDeleteAtThousandSeparator","NumberWithEnglishLocale","NumberUndoRedo","NumberLeadingZeroes","NumberLeadingZeroesNegative","NumberLeadingZeroesDecimalOnly","NumberLeadingZeroesWithThousandSeparator","NumberMaxFractionDigits","NumberMaxFractionDigitsOne","NumberMaxFractionDigitsZero"];export{y as BackspaceAtSeparator,w as BankAccountNumberFormatting,S as DeleteAtSeparator,d as MaxLengthValidation,v as NationalIdentityNumberFormatting,g as NonDigitFilteringInput,C as NumberBackspaceAtThousandSeparator,z as NumberDeleteAtThousandSeparator,F as NumberFilterNonNumeric,M as NumberFormatting,j as NumberLeadingZeroes,J as NumberLeadingZeroesDecimalOnly,P as NumberLeadingZeroesNegative,X as NumberLeadingZeroesWithThousandSeparator,A as NumberMaxFractionDigits,O as NumberMaxFractionDigitsOne,Z as NumberMaxFractionDigitsZero,R as NumberNegativeValue,I as NumberTypingDecimal,U as NumberUndoRedo,D as NumberValueExtraction,k as NumberWithDecimal,L as NumberWithEnglishLocale,b as OrganisationNumberFormatting,p as PhoneNumberFormatting,V as RawValueExtraction,h as UndoRedoAlternativeKeys,B as UndoRedoEmptyHistory,f as UndoRedoMultipleSteps,N as UndoRedoNewTypingClearsFuture,H as UndoRedoWithBackspace,E as UndoRedoWithDelete,T as UndoRedoWithSeparatorDeletion,xe as __namedExportsOrder,ue as default};
//# sourceMappingURL=useFormattedInput.test.stories-l3fKokyF.js.map
