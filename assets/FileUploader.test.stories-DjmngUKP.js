import{c as V,e as $,j as d,d as c,r as M}from"./iframe-VHQh6taY.js";import"./dom.esm-C5PF_ajt.js";import{b as E}from"./index-lB78RBB2.js";import{w as U}from"./storybook.testing.utils-BgHZnMzD.js";import{S as j}from"./icon.systems-pjRjKMCZ.js";const R=Symbol("Manage ClipboardSub");function q(e){return!!e?.[R]}function O(e){q(e.navigator.clipboard)&&e.navigator.clipboard[R].resetClipboardStub()}function z(e){q(e.navigator.clipboard)&&e.navigator.clipboard[R].detachClipboardStub()}const H=globalThis;typeof H.afterEach=="function"&&H.afterEach(()=>O(globalThis.window));typeof H.afterAll=="function"&&H.afterAll(()=>z(globalThis.window));var I=function(e){return e[e.EachTrigger=4]="EachTrigger",e[e.EachApiCall=2]="EachApiCall",e[e.EachTarget=1]="EachTarget",e[e.Never=0]="Never",e}({}),r=function(e){return e[e.STANDARD=0]="STANDARD",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.NUMPAD=3]="NUMPAD",e}({});[..."0123456789".split("").map(e=>({code:`Digit${e}`,key:e})),...")!@#$%^&*(".split("").map((e,t)=>({code:`Digit${t}`,key:e,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(e=>({code:`Key${e.toUpperCase()}`,key:e})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(e=>({code:`Key${e}`,key:e,shiftKey:!0})),r.LEFT,r.RIGHT,r.LEFT,r.RIGHT,r.LEFT,r.RIGHT,r.LEFT,r.RIGHT,r.LEFT,r.RIGHT];I.EachApiCall;const{expect:a,fn:_,userEvent:A,waitFor:W,within:l}=__STORYBOOK_MODULE_TEST__,J={component:E,title:"Tester/FileUploader",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{options:Object.keys(j),mapping:j,table:{disable:!0,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},shouldNormalizeFileName:{table:{disable:!0}},titleHelpSvg:{table:{category:$.props,disable:!0,defaultValue:{summary:V()}}},uploadedFiles:{table:{disable:!0}},acceptedFileFormatsDisplay:{table:{disable:!0}},acceptedFileFormatsDescription:{table:{disable:!0}},uploadResult:{table:{disable:!0}},children:{table:{disable:!0}},fileIconTitle:{table:{disable:!0}},isUploading:{table:{disable:!0}},invalidCharacterRegexp:{control:"text",table:{disable:!0}},spinnerLabel:{table:{disable:!0}},acceptedFileFormats:{table:{disable:!0}},multiple:{table:{disable:!0}},onFileDelete:{table:{disable:!0}},onFileDownload:{table:{disable:!0}},onFileChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=l(e).getAllByRole("generic")[1];await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=l(e),n=t.getAllByRole("generic")[1],s=t.getByRole("button");await a(s).toHaveAttribute("id","htmlId"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","en"),await a(n).toHaveAttribute("data-testid","123ID")}},g={name:"Defaults (A1 delvis)",play:async({canvasElement:e})=>{const t=l(e);await a(t.getByText(c.t("ds_forms:fileuploader.AddSingleLabel"))).toBeInTheDocument()},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},f={name:"With Files (A5, B4 delvis)",args:{helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"},{name:"Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}]},play:async({canvasElement:e})=>{const t=l(e);await a(t.getAllByText(c.t("ds_forms:fileuploader.FileIconLabel"))[0]).toBeInTheDocument(),await a(t.getByText("grunnlag.jpg")).toBeInTheDocument(),await a(t.getByText("test.png")).toBeInTheDocument(),await a(t.getByText("dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf")).toBeInTheDocument()},parameters:{}},h={name:"With Uploading (A3 delvis, A2 delvis)",args:{isUploading:!0},argTypes:{isUploading:{table:{disable:!1}}}},y={name:"With Error And Multiple (A4, A1 delvis)",args:{multiple:!0,helpText:"Hjelpetekst",label:"Hemmelig kode",acceptedFileFormats:[".java",".cpp",".py"],errorMessage:"Du må laste opp en fil"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e);await a(t.getByText("Du må laste opp en fil")).toBeInTheDocument(),await a(t.getByText(c.t("ds_forms:fileuploader.AddMultipleLabel"))).toBeInTheDocument()}},X=e=>d.jsxs(d.Fragment,{children:[d.jsx(E,{...e,uploadResult:{statusMessage:"Lastet opp 4 filer"},hasSpacing:!0}),d.jsx(E,{...e,uploadResult:{statusMessage:"1 av 3 filer ble stoppet av virussjekk.",hasUploadFailed:!0}})]}),b={name:"With UploadResult (A4)",render:X,args:{acceptedFileFormats:[".java",".cpp",".py"],uploadedFiles:[{name:"dokumentasjon.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"}]}},v={name:"With Text Overrides (A8)",args:{acceptedFileFormats:["image/png"],acceptedFileFormatsDescription:"Tillatte filformater:_",acceptedFileFormatsDisplay:"bilder og dokumenter",children:"Trykk eller dra og slipp filer her",uploadedFiles:[{name:"document.pdf"}]},play:async({canvasElement:e})=>{const t=l(e);await a(t.getByText("Tillatte filformater:_")).toBeInTheDocument(),await a(t.getByText("bilder og dokumenter")).toBeInTheDocument(),await a(t.getByText("Trykk eller dra og slipp filer her")).toBeInTheDocument()}},T={name:"With File Change(A6)",args:{"data-testid":"testid123",helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",uploadedFiles:[{name:"file.txt",href:"#"}],onFileDownload:_(),onFileChange:_(),onFileDelete:_()},play:async({args:e,canvasElement:t})=>{const n=l(t),s=n.getByTestId("testid123-input"),o=new File(["test"],"test.txt",{type:"txt"});await A.setup({pointerEventsCheck:I.Never}).upload(s,o),await W(()=>a(e.onFileChange).toHaveBeenCalledWith([o]));const p=n.getByTitle(c.t("ds_forms:fileuploader.DeleteLabel"));await A.click(p),await W(()=>a(e.onFileDelete).toHaveBeenCalledWith({name:"file.txt",href:"#"})),await A.click(n.getByText("file.txt")),await W(()=>a(e.onFileDownload).toHaveBeenCalledWith(a.anything(),{name:"file.txt",href:"#"}))},parameters:{imageSnapshot:{disableSnapshot:!0}}},B={name:"With onHelpToggle Event",args:{label:"Last opp filer",helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},F={name:"With Custom ClassNames (FA3)",args:{classNames:{container:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=e.querySelector(`${U} > div`);await a(t).toHaveClass("dummyClassname")}},w={name:"With Focus Management (B7)",render:()=>{const e=()=>{const[t,n]=M.useState([{name:"first.pdf"},{name:"second.pdf"},{name:"third.pdf"}]);return d.jsx(E,{uploadedFiles:t,onFileDelete:s=>(n(o=>o.filter(i=>i.name!==s.name)),!0)})};return d.jsx(e,{})},play:async({canvasElement:e})=>{const t=l(e),n=c.t("ds_forms:fileuploader.DeleteLabel"),s=c.t("ds_forms:fileuploader.AddSingleLabel"),o=A.setup({pointerEventsCheck:I.Never}),i=t.getAllByRole("button",{name:n});a(i).toHaveLength(3);const p=i[0],N=i[1];await o.click(N),await a(t.queryByText("second.pdf")).not.toBeInTheDocument(),await a(p).toHaveFocus();const P=t.getAllByTitle(n)[0];await o.click(P),await a(t.queryByText("first.pdf")).not.toBeInTheDocument();const C=t.getByRole("button",{name:s});await a(C).toHaveFocus();const G=t.getAllByTitle(n)[0];await o.click(G),await a(t.queryByText("third.pdf")).not.toBeInTheDocument(),await a(t.queryAllByTitle(n).length).toBe(0),await a(C).toHaveFocus()},parameters:{imageSnapshot:{disableSnapshot:!0}}},L="Opplasting pågår, kan ta et par minutter.",x={name:"With Custom Spinner Label",args:{spinnerLabel:L,isUploading:!0},argTypes:{spinnerLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=e.querySelector(`${U} > div`),n=l(t).getByRole("button");await a(n).toHaveTextContent(L)}},S={name:"With Description",args:{label:"Last opp filer",description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),n=t.getByText("En liten beskrivelse tekst");await a(n).toBeInTheDocument();const s=t.getByRole("button");await a(s).toHaveAttribute("aria-describedby");const o=s.getAttribute("aria-describedby");await a(o).toMatch(/descId-/)}},k={name:"With Focus Management on Delete Failure",render:()=>{const e=()=>{const[t,n]=M.useState([{name:"first.pdf"},{name:"second.pdf"},{name:"third.pdf"}]);return d.jsx(E,{uploadedFiles:t,onFileDelete:s=>s.name==="second.pdf"?!1:(n(o=>o.filter(i=>i.name!==s.name)),!0)})};return d.jsx(e,{})},play:async({canvasElement:e})=>{const t=l(e),n=c.t("ds_forms:fileuploader.DeleteLabel"),s=A.setup({pointerEventsCheck:I.Never}),o=t.getAllByRole("button",{name:n});a(o).toHaveLength(3);const i=o[1];await s.click(i),await a(t.queryByText("second.pdf")).toBeInTheDocument(),await a(i).toHaveFocus(),await W(()=>{const p=t.queryByText(c.t("ds_forms:fileuploader.GeneralDeleteError"));a(p).toBeInTheDocument()},{timeout:2e3})},parameters:{imageSnapshot:{disableSnapshot:!0}}},D={name:"With IsRequired",args:{label:"Last opp dokumenter",isRequired:!0},play:async({canvasElement:e})=>{const n=l(e).getByText(c.t("ds_forms:fileuploader.required"));await a(n).toBeInTheDocument();const s=n.getAttribute("class");await a(s).toContain("srOnly")},parameters:{imageSnapshot:{disableSnapshot:!0}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1 delvis)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};const K=["WithRef","WithAttributes","Defaults","WithUploadedFiles","WithIsUploading","WithError","WithUploadResult","WithTextOverrides","WithFileChange","WithHelpToggleEvent","WithCustomClassNames","WithFocusManagement","WithCustomSpinnerLabel","WithDescription","WithFocusManagementOnDeleteFailure","WithIsRequired"],ae=Object.freeze(Object.defineProperty({__proto__:null,Defaults:g,WithAttributes:m,WithCustomClassNames:F,WithCustomSpinnerLabel:x,WithDescription:S,WithError:y,WithFileChange:T,WithFocusManagement:w,WithFocusManagementOnDeleteFailure:k,WithHelpToggleEvent:B,WithIsRequired:D,WithIsUploading:h,WithRef:u,WithTextOverrides:v,WithUploadResult:b,WithUploadedFiles:f,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{ae as F};
//# sourceMappingURL=FileUploader.test.stories-DjmngUKP.js.map
