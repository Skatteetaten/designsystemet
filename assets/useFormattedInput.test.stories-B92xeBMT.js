import{j as r,f as o,u as H}from"./iframe-s2_bNgHU.js";import"./index-D9_nlc1h.js";import{T as k}from"./DatePickerCalendar-ePUd64Qm.js";import"./preload-helper-PPVm8Dsz.js";import"./Help-DC9TS-B6.js";import"./index-Ck1G954W.js";import"./index-CUsfAC9p.js";import"./index-DcFKixUR.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-COhLZqHg.js";import"./ComboboxSelectedOptions-DI0eIcsf.js";import"./index-DFs0_No2.js";import"./index-jj9Gfu02.js";import"./index-CJpzHRrE.js";import"./LabelWithHelp-rfkuXU1a.js";import"./index-DdQvxWAg.js";const{expect:t,userEvent:a,waitFor:c,within:s}=__STORYBOOK_MODULE_TEST__,O={title:"Tester/useFormattedInput",tags:["test"],parameters:{controls:{disable:!0},docs:{description:{component:"Tests for the useFormattedInput hook functionality with various formatting types."}}}},l=({type:n,initialValue:i,label:e})=>{const u=H({type:n,initialValue:i});return r.jsx(k,{label:e,value:u.value,"data-testid":`formatted-input-${n}`,onChange:u.onChange,onKeyDown:u.onKeyDown})},x={name:"Phone Number Formatting",render:()=>r.jsx(l,{type:"phoneNumber",initialValue:"12345678",label:"Telefonnummer"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");await t(e).toHaveValue(o("12 34 56 78")),e.focus(),await a.clear(e),await a.type(e,"87654321"),await t(e).toHaveValue(o("87 65 43 21"))}},p={name:"Organisation Number Formatting",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"974761076",label:"Organisasjonsnummer"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");await t(e).toHaveValue(o("974 761 076")),e.focus(),await a.clear(e),await a.type(e,"123456789"),await t(e).toHaveValue(o("123 456 789"))}},d={name:"National Identity Number Formatting",render:()=>r.jsx(l,{type:"nationalIdentityNumber",initialValue:"26301518292",label:"Fødselsnummer"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");await t(e).toHaveValue(o("263015 18292")),e.focus(),await a.clear(e),await a.type(e,"12345612345"),await t(e).toHaveValue(o("123456 12345"))}},m={name:"Bank Account Number Formatting",render:()=>r.jsx(l,{type:"bankAccountNumber",initialValue:"76940524802",label:"Kontonummer"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");await t(e).toHaveValue(o("7694 05 24802")),e.focus(),await a.clear(e),await a.type(e,"12341212345"),await t(e).toHaveValue(o("1234 12 12345"))}},b={name:"Max Length Validation",render:()=>r.jsx(l,{type:"phoneNumber",label:"Telefonnummer (max 10 digits)"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await a.type(e,"123456789012345"),await t(e).toHaveValue(o("12 34 56 78 90")),await a.type(e,"1"),await t(e).toHaveValue(o("12 34 56 78 90"))}},w={name:"Backspace at Separator Behavior",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"123456789",label:"Test Backspace"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123 456 789")),e.setSelectionRange(4,4),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("124 567 89"))}},y={name:"Delete at Separator Behavior",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"123456789",label:"Test Delete"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123 456 789")),e.setSelectionRange(3,3),await a.keyboard("{Delete}"),await t(e).toHaveValue(o("123 567 89"))}},v={name:"Non-Digit Filtering",render:()=>r.jsx(l,{type:"phoneNumber",label:"Test Non-Digit Filtering"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await a.type(e,"1a2b3c4d5e6f7g8h"),await t(e).toHaveValue(o("12 34 56 78"))}},S={name:"Raw Value Extraction",render:()=>{const n=H({type:"organisationNumber",initialValue:"123456789"});return r.jsxs(r.Fragment,{children:[r.jsx(k,{label:"Organisasjonsnummer",value:n.value,onChange:n.onChange,onKeyDown:n.onKeyDown}),r.jsxs("div",{"data-testid":"raw-value",children:["Raw: ",n.rawValue]})]})},play:async({canvasElement:n})=>{const i=s(n),e=i.getByRole("textbox"),u=i.getByTestId("raw-value");await t(e).toHaveValue(o("123 456 789")),await t(u).toHaveTextContent("Raw: 123456789"),e.focus(),await a.clear(e),await a.type(e,"987654321"),await t(e).toHaveValue(o("987 654 321")),await c(()=>{t(u).toHaveTextContent("Raw: 987654321")})}},f={name:"Undo/Redo - Multiple Steps",render:()=>r.jsx(l,{type:"organisationNumber",label:"Test Multiple Undo/Redo"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await a.type(e,"123"),await t(e).toHaveValue(o("123")),await a.type(e,"456"),await t(e).toHaveValue(o("123 456")),await a.type(e,"789"),await t(e).toHaveValue(o("123 456 789")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123 456")),await c(()=>{t(e.selectionStart).toBe(7)}),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123")),await c(()=>{t(e.selectionStart).toBe(3)}),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await c(()=>{t(e.selectionStart).toBe(0)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123 456")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123 456 789"))}},h={name:"Undo/Redo - With Backspace",render:()=>r.jsx(l,{type:"nationalIdentityNumber",initialValue:"12345678901",label:"Test Undo/Redo with Backspace"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123456 78901")),e.setSelectionRange(12,12),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("123456 7890")),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("123456 789")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123456 7890")),await c(()=>{t(e.selectionStart).toBe(11)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123456 78901")),await c(()=>{t(e.selectionStart).toBe(12)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123456 7890")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123456 789"))}},M={name:"Undo/Redo - With Delete Key",render:()=>r.jsx(l,{type:"bankAccountNumber",initialValue:"12345678901",label:"Test Undo/Redo with Delete"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("1234 56 78901")),e.setSelectionRange(5,5),await a.type(e,"{Delete}",{initialSelectionStart:5,initialSelectionEnd:5}),await t(e).toHaveValue(o("1234 67 8901")),await a.type(e,"{Delete}",{initialSelectionStart:5,initialSelectionEnd:5}),await t(e).toHaveValue(o("1234 78 901")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("1234 67 8901")),await c(()=>{t(e.selectionStart).toBe(5)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("1234 56 78901")),await c(()=>{t(e.selectionStart).toBe(5)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("1234 67 8901")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("1234 78 901"))}},E={name:"Undo/Redo - New Typing Clears Future",render:()=>r.jsx(l,{type:"organisationNumber",label:"Test Undo then Type"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await a.type(e,"123456"),await t(e).toHaveValue(o("123 456")),await a.type(e,"789"),await t(e).toHaveValue(o("123 456 789")),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123 456 78")),await a.type(e,"1"),await t(e).toHaveValue(o("123 456 781")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123 456 781"))}},g={name:"Undo/Redo - Alternative Keyboard Shortcuts",render:()=>r.jsx(l,{type:"phoneNumber",label:"Test Alternative Undo/Redo Keys"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await a.type(e,"12345678"),await t(e).toHaveValue(o("12 34 56 78")),await a.keyboard("{Control>}z{/Control}"),await t(e).toHaveValue(o("12 34 56 7")),await a.keyboard("{Control>}y{/Control}"),await t(e).toHaveValue(o("12 34 56 78")),await c(()=>{t(e.selectionStart).toBe(11)})}},V={name:"Undo/Redo - Backspace at Separator",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"123456789",label:"Test Undo/Redo with Separator"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await t(e).toHaveValue(o("123 456 789")),e.setSelectionRange(4,4),await a.keyboard("{Backspace}"),await t(e).toHaveValue(o("124 567 89")),await c(()=>{t(e.selectionStart).toBe(2)}),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(o("123 456 789")),await c(()=>{t(e.selectionStart).toBe(4),t(e.selectionEnd).toBe(4)}),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("124 567 89")),await c(()=>{t(e.selectionStart).toBe(2),t(e.selectionEnd).toBe(2)})}},B={name:"Undo/Redo - Empty History Edge Case",render:()=>r.jsx(l,{type:"organisationNumber",label:"Test Empty History"}),play:async({canvasElement:n})=>{const e=s(n).getByRole("textbox");e.focus(),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(""),await a.type(e,"123"),await t(e).toHaveValue(o("123")),await a.keyboard("{Meta>}{Shift>}z{/Shift}{/Meta}"),await t(e).toHaveValue(o("123")),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue(""),await a.keyboard("{Meta>}z{/Meta}"),await t(e).toHaveValue("")}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
    //NOTE: testen blir ustabil hvis man bruker userEvent.keyboard for delete i stedet for userEvent.type
    await userEvent.type(textbox, '{Delete}', {
      initialSelectionStart: 5,
      initialSelectionEnd: 5
    });
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));
    await userEvent.type(textbox, '{Delete}', {
      initialSelectionStart: 5,
      initialSelectionEnd: 5
    });
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
} satisfies Story`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};const W=["PhoneNumberFormatting","OrganisationNumberFormatting","NationalIdentityNumberFormatting","BankAccountNumberFormatting","MaxLengthValidation","BackspaceAtSeparator","DeleteAtSeparator","NonDigitFilteringInput","RawValueExtraction","UndoRedoMultipleSteps","UndoRedoWithBackspace","UndoRedoWithDelete","UndoRedoNewTypingClearsFuture","UndoRedoAlternativeKeys","UndoRedoWithSeparatorDeletion","UndoRedoEmptyHistory"];export{w as BackspaceAtSeparator,m as BankAccountNumberFormatting,y as DeleteAtSeparator,b as MaxLengthValidation,d as NationalIdentityNumberFormatting,v as NonDigitFilteringInput,p as OrganisationNumberFormatting,x as PhoneNumberFormatting,S as RawValueExtraction,g as UndoRedoAlternativeKeys,B as UndoRedoEmptyHistory,f as UndoRedoMultipleSteps,E as UndoRedoNewTypingClearsFuture,h as UndoRedoWithBackspace,M as UndoRedoWithDelete,V as UndoRedoWithSeparatorDeletion,W as __namedExportsOrder,O as default};
//# sourceMappingURL=useFormattedInput.test.stories-B92xeBMT.js.map
