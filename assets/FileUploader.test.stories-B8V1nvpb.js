import{b as J,c as X,j as r,d,r as M}from"./iframe-B8GUhlLl.js";import"./dom.esm-BNXj00yI.js";import{i as m}from"./index-C8bgUDlY.js";import{w as P}from"./storybook.testing.utils-BgHZnMzD.js";import{S as N}from"./icon.systems-B1LFOHPk.js";import{T as z}from"./DatePickerCalendar-PLUA6iCa.js";const L=Symbol("Manage ClipboardSub");function V(e){return!!e?.[L]}function K(e){V(e.navigator.clipboard)&&e.navigator.clipboard[L].resetClipboardStub()}function Q(e){V(e.navigator.clipboard)&&e.navigator.clipboard[L].detachClipboardStub()}const _=globalThis;typeof _.afterEach=="function"&&_.afterEach(()=>K(globalThis.window));typeof _.afterAll=="function"&&_.afterAll(()=>Q(globalThis.window));var C=function(e){return e[e.EachTrigger=4]="EachTrigger",e[e.EachApiCall=2]="EachApiCall",e[e.EachTarget=1]="EachTarget",e[e.Never=0]="Never",e}({}),c=function(e){return e[e.STANDARD=0]="STANDARD",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.NUMPAD=3]="NUMPAD",e}({});[..."0123456789".split("").map(e=>({code:`Digit${e}`,key:e})),...")!@#$%^&*(".split("").map((e,t)=>({code:`Digit${t}`,key:e,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(e=>({code:`Key${e.toUpperCase()}`,key:e})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(e=>({code:`Key${e}`,key:e,shiftKey:!0})),c.LEFT,c.RIGHT,c.LEFT,c.RIGHT,c.LEFT,c.RIGHT,c.LEFT,c.RIGHT,c.LEFT,c.RIGHT];C.EachApiCall;const{expect:a,fn:j,userEvent:u,waitFor:p,within:l}=__STORYBOOK_MODULE_TEST__,Z={component:m,title:"Tester/FileUploader",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{options:Object.keys(N),mapping:N,table:{disable:!0,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},shouldNormalizeFileName:{table:{disable:!0}},titleHelpSvg:{table:{category:X.props,disable:!0,defaultValue:{summary:J()}}},uploadedFiles:{table:{disable:!0}},acceptedFileFormatsDisplay:{table:{disable:!0}},acceptedFileFormatsDescription:{table:{disable:!0}},uploadResult:{table:{disable:!0}},children:{table:{disable:!0}},fileIconTitle:{table:{disable:!0}},isUploading:{table:{disable:!0}},invalidCharacterRegexp:{control:"text",table:{disable:!0}},spinnerLabel:{table:{disable:!0}},acceptedFileFormats:{table:{disable:!0}},multiple:{table:{disable:!0}},onFileDelete:{table:{disable:!0}},onFileDownload:{table:{disable:!0}},onFileChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{htmlValidate:{test:"off"},imageSnapshot:{disableSnapshot:!1}}},H=(e,t)=>{const n=e.querySelector('[data-variant="success"]');if(!n)throw new Error("Fant ikke suksess-alert");return l(n).getByText(t)},f={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=l(e),n=t.getAllByRole("generic")[1],s=t.getByRole("button");await a(s).toHaveAttribute("id","htmlId"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","en"),await a(n).toHaveAttribute("data-testid","123ID")}},y={name:"Defaults (A1 delvis)",play:async({canvasElement:e})=>{const t=l(e);await a(t.getByText(d.t("ds_forms:fileuploader.AddSingleLabel"))).toBeInTheDocument()},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}}},b={name:"With Files (A5, B4 delvis)",args:{helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"},{name:"Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}]},play:async({canvasElement:e})=>{const t=l(e);await a(t.getAllByText(d.t("ds_forms:fileuploader.FileIconLabel"))[0]).toBeInTheDocument(),await a(t.getByText("grunnlag.jpg")).toBeInTheDocument(),await a(t.getByText("test.png")).toBeInTheDocument(),await a(t.getByText("dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf")).toBeInTheDocument()},parameters:{}},v={name:"With Uploading (A3 delvis, A2 delvis)",args:{isUploading:!0},argTypes:{isUploading:{table:{disable:!1}}}},T={name:"With Error And Multiple (A4, A1 delvis)",args:{multiple:!0,helpText:"Hjelpetekst",label:"Hemmelig kode",acceptedFileFormats:[".java",".cpp",".py"],errorMessage:"Du må laste opp en fil"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e);await a(t.getByText("Du må laste opp en fil")).toBeInTheDocument(),await a(t.getByText(d.t("ds_forms:fileuploader.AddMultipleLabel"))).toBeInTheDocument()}},Y=e=>r.jsxs(r.Fragment,{children:[r.jsx(m,{...e,uploadResult:{statusMessage:"Lastet opp 4 filer"},hasSpacing:!0}),r.jsx(m,{...e,uploadResult:{statusMessage:"1 av 3 filer ble stoppet av virussjekk.",hasUploadFailed:!0}})]}),F={name:"With UploadResult (A4)",render:Y,args:{acceptedFileFormats:[".java",".cpp",".py"],uploadedFiles:[{name:"dokumentasjon.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"}]}},w={name:"With UploadResult And No Files",args:{uploadResult:{statusMessage:"Lastet opp 1 fil"}},play:async({canvasElement:e})=>{const t="Lastet opp 1 fil";await p(()=>a(H(e,t)).toBeInTheDocument())},parameters:{imageSnapshot:{disableSnapshot:!0}}},B={name:"With UploadResult Inside Form Without Flicker",render:()=>{const e=()=>{const[t,n]=M.useState("");return r.jsxs("form",{children:[r.jsx(z,{label:"Navn",value:t,onChange:s=>n(s.target.value)}),r.jsx(m,{uploadResult:{statusMessage:"Lastet opp 1 fil"}})]})};return r.jsx(e,{})},play:async({canvasElement:e})=>{const n=l(e).getByRole("textbox",{name:"Navn"}),s="Lastet opp 1 fil";await p(()=>a(H(e,s)).toBeInTheDocument()),await u.type(n,"abc"),await a(H(e,s)).toBeInTheDocument(),await p(()=>a(H(e,s)).toBeInTheDocument(),{timeout:300})},parameters:{imageSnapshot:{disableSnapshot:!0}}},x={name:"With Text Overrides (A8)",args:{acceptedFileFormats:["image/png"],acceptedFileFormatsDescription:"Tillatte filformater:_",acceptedFileFormatsDisplay:"bilder og dokumenter",children:"Trykk eller dra og slipp filer her",uploadedFiles:[{name:"document.pdf"}]},play:async({canvasElement:e})=>{const t=l(e);await a(t.getByText("Tillatte filformater:_")).toBeInTheDocument(),await a(t.getByText("bilder og dokumenter")).toBeInTheDocument(),await a(t.getByText("Trykk eller dra og slipp filer her")).toBeInTheDocument()}},S={name:"With File Change(A6)",args:{"data-testid":"testid123",helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",uploadedFiles:[{name:"file.txt",href:"#"}],onFileDownload:j(),onFileChange:j(),onFileDelete:j()},play:async({args:e,canvasElement:t})=>{const n=l(t),s=n.getByTestId("testid123-input"),o=new File(["test"],"test.txt",{type:"txt"});await u.setup({pointerEventsCheck:C.Never}).upload(s,o),await p(()=>a(e.onFileChange).toHaveBeenCalledWith([o]));const g=n.getByTitle(d.t("ds_forms:fileuploader.DeleteLabel"));await u.click(g),await p(()=>a(e.onFileDelete).toHaveBeenCalledWith({name:"file.txt",href:"#"})),await u.click(n.getByText("file.txt")),await p(()=>a(e.onFileDownload).toHaveBeenCalledWith(a.anything(),{name:"file.txt",href:"#"}))},parameters:{imageSnapshot:{disableSnapshot:!0}}},k={name:"With onHelpToggle Event",args:{label:"Last opp filer",helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},D={name:"With Custom ClassNames (FA3)",args:{classNames:{container:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=e.querySelector(`${P} > div`);await a(t).toHaveClass("dummyClassname")}},A={name:"With Focus Management (B7)",render:()=>{const e=()=>{const[t,n]=M.useState([{name:"first.pdf"},{name:"second.pdf"},{name:"third.pdf"}]);return r.jsx(m,{uploadedFiles:t,onFileDelete:s=>(n(o=>o.filter(i=>i.name!==s.name)),!0)})};return r.jsx(e,{})},play:async({canvasElement:e})=>{const t=l(e),n=d.t("ds_forms:fileuploader.DeleteLabel"),s=d.t("ds_forms:fileuploader.AddSingleLabel"),o=u.setup({pointerEventsCheck:C.Never}),i=t.getAllByRole("button",{name:n});a(i).toHaveLength(3);const g=i[0],G=i[1];await o.click(G),await a(t.queryByText("second.pdf")).not.toBeInTheDocument(),await a(g).toHaveFocus();const $=t.getAllByTitle(n)[0];await o.click($),await a(t.queryByText("first.pdf")).not.toBeInTheDocument();const U=t.getByRole("button",{name:s});await a(U).toHaveFocus();const O=t.getAllByTitle(n)[0];await o.click(O),await a(t.queryByText("third.pdf")).not.toBeInTheDocument(),await a(t.queryAllByTitle(n).length).toBe(0),await a(U).toHaveFocus()},parameters:{imageSnapshot:{disableSnapshot:!0}}},q="Opplasting pågår, kan ta et par minutter.",W={name:"With Custom Spinner Label",args:{spinnerLabel:q,isUploading:!0},argTypes:{spinnerLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=e.querySelector(`${P} > div`),n=l(t).getByRole("button");await a(n).toHaveTextContent(q)}},E={name:"With Description",args:{label:"Last opp filer",description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),n=t.getByText("En liten beskrivelse tekst");await a(n).toBeInTheDocument();const s=t.getByRole("button");await a(s).toHaveAttribute("aria-describedby");const o=s.getAttribute("aria-describedby");await a(o).toMatch(/descId-/)}},I={name:"With Focus Management on Delete Failure",render:()=>{const e=()=>{const[t,n]=M.useState([{name:"first.pdf"},{name:"second.pdf"},{name:"third.pdf"}]);return r.jsx(m,{uploadedFiles:t,onFileDelete:s=>s.name==="second.pdf"?!1:(n(o=>o.filter(i=>i.name!==s.name)),!0)})};return r.jsx(e,{})},play:async({canvasElement:e})=>{const t=l(e),n=d.t("ds_forms:fileuploader.DeleteLabel"),s=u.setup({pointerEventsCheck:C.Never}),o=t.getAllByRole("button",{name:n});a(o).toHaveLength(3);const i=o[1];await s.click(i),await a(t.queryByText("second.pdf")).toBeInTheDocument(),await a(i).toHaveFocus(),await p(()=>{const g=t.queryByText(d.t("ds_forms:fileuploader.GeneralDeleteError"));a(g).toBeInTheDocument()},{timeout:2e3})},parameters:{imageSnapshot:{disableSnapshot:!0}}},R={name:"With IsRequired",args:{label:"Last opp dokumenter",isRequired:!0},play:async({canvasElement:e})=>{const n=l(e).getByText(d.t("ds_forms:fileuploader.required"));await a(n).toBeInTheDocument();const s=n.getAttribute("class");await a(s).toContain("srOnly")},parameters:{imageSnapshot:{disableSnapshot:!0}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
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
    const container = canvas.getAllByRole('generic')[1];
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1 delvis)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  }
} satisfies Story`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Files (A5, B4 delvis)',
  args: {
    helpText: 'Hjelpetekst',
    label: 'Dokumentasjon og grunnlag',
    acceptedFileFormats: ['.pdf', '.jpeg'],
    uploadedFiles: [{
      name: 'dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf',
      href: 'https://www.skatteetaten.no/person/'
    }, {
      name: 'grunnlag.jpg'
    }, {
      name: 'Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg'
    }, {
      name: 'test.png',
      href: 'http://localhost:4400/designsystem_illustrasjon.png'
    }]
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText(dsI18n.t('ds_forms:fileuploader.FileIconLabel'))[0]).toBeInTheDocument();
    await expect(canvas.getByText('grunnlag.jpg')).toBeInTheDocument();
    await expect(canvas.getByText('test.png')).toBeInTheDocument();
    await expect(canvas.getByText('dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf')).toBeInTheDocument();
  },
  parameters: {}
} satisfies Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Uploading (A3 delvis, A2 delvis)',
  args: {
    isUploading: true
  },
  argTypes: {
    isUploading: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Error And Multiple (A4, A1 delvis)',
  args: {
    multiple: true,
    helpText: 'Hjelpetekst',
    label: 'Hemmelig kode',
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    errorMessage: 'Du må laste opp en fil'
  },
  argTypes: {
    errorMessage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Du må laste opp en fil')).toBeInTheDocument();
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddMultipleLabel'))).toBeInTheDocument();
  }
} satisfies Story`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'With UploadResult (A4)',
  render: UploadResultTemplate,
  args: {
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    uploadedFiles: [{
      name: 'dokumentasjon.pdf',
      href: 'https://www.skatteetaten.no/person/'
    }, {
      name: 'grunnlag.jpg'
    }]
  }
} satisfies Story`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With UploadResult And No Files',
  args: {
    uploadResult: {
      statusMessage: 'Lastet opp 1 fil'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const statusMessageText = 'Lastet opp 1 fil';
    await waitFor(() => expect(getSuccessStatusMessage(canvasElement, statusMessageText)).toBeInTheDocument());
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With UploadResult Inside Form Without Flicker',
  render: (): JSX.Element => {
    const FormWrapper = (): JSX.Element => {
      const [value, setValue] = useState('');
      return <form>
          <TextField label={'Navn'} value={value} onChange={event => setValue(event.target.value)} />
          <FileUploader uploadResult={{
          statusMessage: 'Lastet opp 1 fil'
        }} />
        </form>;
    };
    return <FormWrapper />;
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textField = canvas.getByRole('textbox', {
      name: 'Navn'
    });
    const statusMessageText = 'Lastet opp 1 fil';
    await waitFor(() => expect(getSuccessStatusMessage(canvasElement, statusMessageText)).toBeInTheDocument());
    await userEvent.type(textField, 'abc');
    await expect(getSuccessStatusMessage(canvasElement, statusMessageText)).toBeInTheDocument();
    await waitFor(() => expect(getSuccessStatusMessage(canvasElement, statusMessageText)).toBeInTheDocument(), {
      timeout: 300
    });
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Text Overrides (A8)',
  args: {
    acceptedFileFormats: ['image/png'],
    acceptedFileFormatsDescription: 'Tillatte filformater:_',
    acceptedFileFormatsDisplay: 'bilder og dokumenter',
    children: 'Trykk eller dra og slipp filer her',
    uploadedFiles: [{
      name: 'document.pdf'
    }]
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Tillatte filformater:_')).toBeInTheDocument();
    await expect(canvas.getByText('bilder og dokumenter')).toBeInTheDocument();
    await expect(canvas.getByText('Trykk eller dra og slipp filer her')).toBeInTheDocument();
  }
} satisfies Story`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With File Change(A6)',
  args: {
    'data-testid': 'testid123',
    helpText: 'Hjelpetekst',
    label: 'Dokumentasjon og grunnlag',
    uploadedFiles: [{
      name: 'file.txt',
      href: '#'
    }],
    onFileDownload: fn(),
    onFileChange: fn(),
    onFileDelete: fn()
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('testid123-input');
    const file = new File(['test'], 'test.txt', {
      type: 'txt'
    });
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });
    await user.upload(input, file);
    await waitFor(() => expect(args.onFileChange).toHaveBeenCalledWith([file]));
    const deleteButton = canvas.getByTitle(dsI18n.t('ds_forms:fileuploader.DeleteLabel'));
    await userEvent.click(deleteButton);
    await waitFor(() => expect(args.onFileDelete).toHaveBeenCalledWith({
      name: 'file.txt',
      href: '#'
    }));
    await userEvent.click(canvas.getByText('file.txt'));
    await waitFor(() => expect(args.onFileDownload).toHaveBeenCalledWith(expect.anything(), {
      name: 'file.txt',
      href: '#'
    }));
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
    label: 'Last opp filer',
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    classNames: {
      container: 'dummyClassname',
      errorMessage: 'dummyClassname'
    },
    errorMessage: 'feil'
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    await expect(container).toHaveClass('dummyClassname');
  }
} satisfies Story`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Focus Management (B7)',
  render: () => {
    const FocusManagementWrapper = (): JSX.Element => {
      const [files, setFiles] = useState([{
        name: 'first.pdf'
      }, {
        name: 'second.pdf'
      }, {
        name: 'third.pdf'
      }]);
      return <FileUploader uploadedFiles={files} onFileDelete={file => {
        setFiles(prev => prev.filter(f => f.name !== file.name));
        return true; // indicate successful delete
      }} />;
    };
    return <FocusManagementWrapper />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const deleteTitle = dsI18n.t('ds_forms:fileuploader.DeleteLabel');
    const uploadButtonName = dsI18n.t('ds_forms:fileuploader.AddSingleLabel');
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });
    const initialDeleteButtons = canvas.getAllByRole('button', {
      name: deleteTitle
    });
    expect(initialDeleteButtons).toHaveLength(3);
    const firstButton = initialDeleteButtons[0];
    const secondButton = initialDeleteButtons[1];

    // Delete the second file -> focus should move to previous (first) file's delete button
    await user.click(secondButton);
    await expect(canvas.queryByText('second.pdf')).not.toBeInTheDocument();
    await expect(firstButton).toHaveFocus();

    // Delete the first file (now list has first.pdf & third.pdf -> after deletion only third.pdf). No previous file, focus should move to upload button.
    const firstButtonAfter = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(firstButtonAfter);
    await expect(canvas.queryByText('first.pdf')).not.toBeInTheDocument();
    const uploadButton = canvas.getByRole('button', {
      name: uploadButtonName
    });
    await expect(uploadButton).toHaveFocus();

    // Delete the last remaining file -> still focus on upload button and no delete buttons remain
    const lastDeleteButton = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(lastDeleteButton);
    await expect(canvas.queryByText('third.pdf')).not.toBeInTheDocument();
    await expect(canvas.queryAllByTitle(deleteTitle).length).toBe(0);
    await expect(uploadButton).toHaveFocus();
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
}`,...A.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Spinner Label',
  args: {
    spinnerLabel,
    isUploading: true
  },
  argTypes: {
    spinnerLabel: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const button = within(container as HTMLElement).getByRole('button');
    await expect(button).toHaveTextContent(spinnerLabel);
  }
} satisfies Story`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Description',
  args: {
    label: 'Last opp filer',
    description: 'En liten beskrivelse tekst'
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('En liten beskrivelse tekst');
    await expect(description).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-describedby');
    const describedbyValue = button.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'With Focus Management on Delete Failure',
  render: () => {
    const FocusManagementFailureWrapper = (): JSX.Element => {
      const [files, setFiles] = useState([{
        name: 'first.pdf'
      }, {
        name: 'second.pdf'
      }, {
        name: 'third.pdf'
      }]);
      return <FileUploader uploadedFiles={files} onFileDelete={file => {
        // Simulate deletion failure for 'second.pdf'
        if (file.name === 'second.pdf') {
          return false; // indicate failed delete
        }
        // Successful deletion for other files
        setFiles(prev => prev.filter(f => f.name !== file.name));
        return true;
      }} />;
    };
    return <FocusManagementFailureWrapper />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const deleteTitle = dsI18n.t('ds_forms:fileuploader.DeleteLabel');
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });
    const initialDeleteButtons = canvas.getAllByRole('button', {
      name: deleteTitle
    });
    expect(initialDeleteButtons).toHaveLength(3);
    const secondButton = initialDeleteButtons[1];

    // Try to delete the second file -> deletion fails
    await user.click(secondButton);
    // File should still be in the document
    await expect(canvas.queryByText('second.pdf')).toBeInTheDocument();
    // Focus should remain on the same delete button
    await expect(secondButton).toHaveFocus();
    // SR announcement should be made (error message)
    await waitFor(() => {
      const srOnlyDiv = canvas.queryByText(dsI18n.t('ds_forms:fileuploader.GeneralDeleteError'));
      expect(srOnlyDiv).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With IsRequired',
  args: {
    label: 'Last opp dokumenter',
    isRequired: true
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const requiredText = canvas.getByText(dsI18n.t('ds_forms:fileuploader.required'));
    await expect(requiredText).toBeInTheDocument();
    const className = requiredText.getAttribute('class');
    await expect(className).toContain('srOnly');
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...R.parameters?.docs?.source}}};const ee=["WithRef","WithAttributes","Defaults","WithUploadedFiles","WithIsUploading","WithError","WithUploadResult","WithUploadResultAndNoFiles","WithUploadResultInsideFormWithoutFlicker","WithTextOverrides","WithFileChange","WithHelpToggleEvent","WithCustomClassNames","WithFocusManagement","WithCustomSpinnerLabel","WithDescription","WithFocusManagementOnDeleteFailure","WithIsRequired"],re=Object.freeze(Object.defineProperty({__proto__:null,Defaults:y,WithAttributes:h,WithCustomClassNames:D,WithCustomSpinnerLabel:W,WithDescription:E,WithError:T,WithFileChange:S,WithFocusManagement:A,WithFocusManagementOnDeleteFailure:I,WithHelpToggleEvent:k,WithIsRequired:R,WithIsUploading:v,WithRef:f,WithTextOverrides:x,WithUploadResult:F,WithUploadResultAndNoFiles:w,WithUploadResultInsideFormWithoutFlicker:B,WithUploadedFiles:b,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{re as F};
//# sourceMappingURL=FileUploader.test.stories-B8V1nvpb.js.map
