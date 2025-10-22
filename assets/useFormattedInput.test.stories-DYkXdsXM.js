import{j as r,f as n,u as Y}from"./iframe-BoxHncFg.js";import"./index-d7h_eiwz.js";import{T as $}from"./DatePickerCalendar-NBFB_hA6.js";import"./Help-DtlVvBAO.js";import"./index-DyY5joHW.js";import"./index-Mlou2Fgf.js";import"./index-CvbIYQ1J.js";import"./LabelWithHelp-CeoEDrnt.js";import"./index-COS0aIOi.js";import"./index-k61vOTBl.js";import"./index-CxRKwedM.js";const{expect:a,userEvent:o,waitFor:q,within:i}=__STORYBOOK_MODULE_TEST__,se={title:"Tester/useFormattedInput",tags:["test"],parameters:{controls:{disable:!0},docs:{description:{component:"Tests for the useFormattedInput hook functionality with various formatting types."}}}},l=({type:t,initialValue:s,label:e})=>{const c=Y({type:t,initialValue:s});return r.jsx($,{label:e,value:c.value,"data-testid":`formatted-input-${t}`,onChange:c.onChange,onKeyDown:c.onKeyDown})},m={name:"Phone Number Formatting",render:()=>r.jsx(l,{type:"phoneNumber",initialValue:"12345678",label:"Telefonnummer"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(n("12 34 56 78")),e.focus(),await o.clear(e),await o.type(e,"87654321"),await a(e).toHaveValue(n("87 65 43 21"))}},u={name:"Organisation Number Formatting",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"974761076",label:"Organisasjonsnummer"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(n("974 761 076")),e.focus(),await o.clear(e),await o.type(e,"123456789"),await a(e).toHaveValue(n("123 456 789"))}},x={name:"National Identity Number Formatting",render:()=>r.jsx(l,{type:"nationalIdentityNumber",initialValue:"26301518292",label:"Fødselsnummer"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(n("263015 18292")),e.focus(),await o.clear(e),await o.type(e,"12345612345"),await a(e).toHaveValue(n("123456 12345"))}},p={name:"Bank Account Number Formatting",render:()=>r.jsx(l,{type:"bankAccountNumber",initialValue:"76940524802",label:"Kontonummer"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await a(e).toHaveValue(n("7694 05 24802")),e.focus(),await o.clear(e),await o.type(e,"12341212345"),await a(e).toHaveValue(n("1234 12 12345"))}},b={name:"Max Length Validation",render:()=>r.jsx(l,{type:"phoneNumber",label:"Telefonnummer (max 10 digits)"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");e.focus(),await o.type(e,"123456789012345"),await a(e).toHaveValue(n("12 34 56 78 90")),await o.type(e,"1"),await a(e).toHaveValue(n("12 34 56 78 90"))}},v={name:"Backspace at Separator Behavior",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"123456789",label:"Test Backspace"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");e.focus(),await a(e).toHaveValue(n("123 456 789")),e.setSelectionRange(4,4),await o.keyboard("{Backspace}"),await a(e).toHaveValue(n("124 567 89"))}},d={name:"Delete at Separator Behavior",render:()=>r.jsx(l,{type:"organisationNumber",initialValue:"123456789",label:"Test Delete"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");e.focus(),await a(e).toHaveValue(n("123 456 789")),e.setSelectionRange(3,3),await o.keyboard("{Delete}"),await a(e).toHaveValue(n("123 567 89"))}},y={name:"Non-Digit Filtering",render:()=>r.jsx(l,{type:"phoneNumber",label:"Test Non-Digit Filtering"}),play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");e.focus(),await o.type(e,"1a2b3c4d5e6f7g8h"),await a(e).toHaveValue(n("12 34 56 78"))}},w={name:"Raw Value Extraction",render:()=>{const t=Y({type:"organisationNumber",initialValue:"123456789"});return r.jsxs(r.Fragment,{children:[r.jsx($,{label:"Organisasjonsnummer",value:t.value,onChange:t.onChange,onKeyDown:t.onKeyDown}),r.jsxs("div",{"data-testid":"raw-value",children:["Raw: ",t.rawValue]})]})},play:async({canvasElement:t})=>{const s=i(t),e=s.getByRole("textbox"),c=s.getByTestId("raw-value");await a(e).toHaveValue(n("123 456 789")),await a(c).toHaveTextContent("Raw: 123456789"),e.focus(),await o.clear(e),await o.type(e,"987654321"),await a(e).toHaveValue(n("987 654 321")),await q(()=>{a(c).toHaveTextContent("Raw: 987654321")})}};var g,f,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,N,V;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var E,B,T;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(B=x.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var H,F,I;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var R,D,k;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(D=b.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var j,P,L;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(P=v.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var M,O,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,J,K;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,_,U;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(_=w.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const ie=["PhoneNumberFormatting","OrganisationNumberFormatting","NationalIdentityNumberFormatting","BankAccountNumberFormatting","MaxLengthValidation","BackspaceAtSeparator","DeleteAtSeparator","NonDigitFilteringInput","RawValueExtraction"];export{v as BackspaceAtSeparator,p as BankAccountNumberFormatting,d as DeleteAtSeparator,b as MaxLengthValidation,x as NationalIdentityNumberFormatting,y as NonDigitFilteringInput,u as OrganisationNumberFormatting,m as PhoneNumberFormatting,w as RawValueExtraction,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=useFormattedInput.test.stories-DYkXdsXM.js.map
