import{e,c as w,r as b,j as l}from"./iframe-Br1Xu9zr.js";import{j as T,b as f,C as D}from"./index-B55DkYFu.js";import{S as C}from"./icon.systems-BmhPSTgm.js";import{e as M}from"./stories.utils-CZ5hej_8.js";const _={component:f,title:"Komponenter/FileUploader",argTypes:{classNames:{control:!1,table:{category:e.props}},acceptedFileFormatsDisplay:{table:{category:e.props}},description:{table:{category:e.props}},fileIconTitle:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(C),mapping:C,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLabel:{table:{category:e.props}},invalidCharacterRegexp:{control:"text",table:{category:e.props}},isRequired:{table:{category:e.props}},isUploading:{table:{category:e.props}},label:{table:{category:e.props}},spinnerLabel:{table:{category:e.props,defaultValue:{summary:T()}}},acceptedFileFormats:{table:{category:e.props}},shouldNormalizeFileName:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om FileUploader skal markeres med stjerne. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:w()}}},uploadedFiles:{control:!1,table:{category:e.props}},uploadResult:{control:!1,table:{category:e.props}},multiple:{table:{category:e.htmlAttribute}},children:{table:{category:e.props}},acceptedFileFormatsDescription:{table:{category:e.props}},onFileDelete:{table:{category:e.event}},onFileDownload:{table:{category:e.event}},onFileChange:{table:{category:e.event}},onHelpToggle:{control:!1,table:{category:e.event}}},args:{helpText:"Hjelpetekst",label:"Ledetekst",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"test.pdf",href:"https://i.imgur.com/guZeGcr.png"},{name:"test.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}],onFileDelete:i=>(console.log(i),!0)}},g={};async function L(i){return await new Promise(s=>setTimeout(s,500)),i?Response.json({},{status:400}):Response.json({})}function R(i,s){return L(s)}function N(i,s){return L(s)}const u={render:i=>{const[s,k,S,y,j]=f.useFileUploader(),[c,U]=b.useState(!1),[h,p]=b.useState(""),E=async o=>(await N(o.name,c)).ok?(j(o),!0):!1,v=async o=>s.uploadedFiles.length>0?(p("Du har allerede lastet opp en fil. Fjern filen først om du ønsker å laste opp en annen fil i stedet"),Promise.reject()):o.length>1?(p("Det er ikke lov med flere filer (dette kan bare skje med drag and drop)"),Promise.reject()):(S(),(await R(o[0],c)).ok?(k(o),!0):(y(o,[{error:"det har skjedd noe feil",files:[{name:o[0].name}]}]),!1));return l.jsxs(l.Fragment,{children:[l.jsx(D,{checked:c,onChange:()=>U(!c),children:"La nettverkskall feile"}),l.jsx(f,{label:"Last opp et dokument",acceptedFileFormats:[".pdf",".jpeg",".png"],multiple:!1,...s,errorMessage:h,onFileDelete:E,onFileChange:v})]})}};u.parameters=M;const m={render:i=>{const s=(t,d)=>{const n=[];for(let F=0;F<t;F++){const P=new Promise((r,a)=>{d?a("Promise rejected"):r({href:"https://skatteetaten.github.io/designsystemet/"})});n.push(P)}return n},[k,S,y,j,c]=f.useFileUploader(),[U,h]=b.useState(),[p,E]=b.useState(!1),v=async t=>(await new Promise(d=>setTimeout(d,1500)),p?!1:(c(t),!0)),o=async t=>{if(h(""),t.some(r=>r.size>9e5)){h("Filen er for stor");return}y();const d=[],n=[],F=s(t.length,p);if((await Promise.allSettled(F)).forEach((r,a)=>{r.status==="fulfilled"?(console.log("FULLLFILLED",r),d.push({name:t[a].name,href:r.value.href,id:Math.random().toString(36).substring(2,10)})):r.status==="rejected"&&(console.log("REJECT",r),n.push({name:t[a].name,reason:r.reason.statusText,id:Math.random().toString(36).substring(2,10)}))}),n.length){console.log(n);const r=`${n.length} av ${t.length} filer ble ikke lastet Opp`;j(n.map(({name:a,reason:x})=>({name:a,errorMessage:x})),[{error:r,files:n.map(({name:a,id:x})=>({name:a,id:x}))}],d)}else S(d)};return l.jsxs(l.Fragment,{children:[l.jsx(D,{checked:p,onChange:()=>E(!p),children:"la opplasting feile"}),l.jsx(f,{label:"Dokumentasjon og grunnlag",helpText:"Trenger du hjelp?",acceptedFileFormats:[".pdf",".jpeg",".png"],invalidCharacterRegexp:/e/g,shouldNormalizeFileName:!0,...k,errorMessage:U??"",multiple:!0,onFileDelete:v,onFileChange:o})]})}};m.parameters=M;g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{} satisfies Story",...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [fileUploaderState, setSuccess, setLoading, setFailure, remove] = FileUploader.useFileUploader();
    const [shouldError, setShouldError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const onDelete = async (file: UploadedFile): Promise<boolean> => {
      const response = await mockDelete(file.name, shouldError);
      if (response.ok) {
        remove(file);
        return true;
      } else {
        return false;
      }
    };
    const onChange = async (files: File[]): Promise<boolean> => {
      if (fileUploaderState.uploadedFiles.length > 0) {
        setErrorMessage('Du har allerede lastet opp en fil. Fjern filen først om du ønsker å laste opp en annen fil i stedet');
        return Promise.reject();
      }
      if (files.length > 1) {
        setErrorMessage('Det er ikke lov med flere filer (dette kan bare skje med drag and drop)');
        return Promise.reject();
      }
      setLoading();
      const response = await mockUpload(files[0], shouldError);
      if (!response.ok) {
        setFailure(files, [{
          error: 'det har skjedd noe feil',
          files: [{
            name: files[0].name
          }]
        }]);
        return false;
      } else {
        setSuccess(files);
        return true;
      }
    };
    return <>
        <Checkbox checked={shouldError} onChange={() => setShouldError(!shouldError)}>
          {'La nettverkskall feile'}
        </Checkbox>
        <FileUploader label={'Last opp et dokument'} acceptedFileFormats={['.pdf', '.jpeg', '.png']} multiple={false} {...fileUploaderState} errorMessage={errorMessage} onFileDelete={onDelete} onFileChange={onChange} />
      </>;
  }
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    interface MockUploadedFile {
      href?: string;
    }
    const createMockPromises = (amount: number, shouldFail: boolean): Promise<MockUploadedFile>[] => {
      const promises: Promise<MockUploadedFile>[] = [];
      for (let i = 0; i < amount; i++) {
        const promise = new Promise<MockUploadedFile>((resolve, reject) => {
          if (shouldFail) {
            reject('Promise rejected');
          } else {
            resolve({
              href: 'https://skatteetaten.github.io/designsystemet/'
            });
          }
        });
        promises.push(promise);
      }
      return promises;
    };
    const [fileUploaderState, setSuccess, setLoading, setFailure, remove] = FileUploader.useFileUploader();
    const [error, setError] = useState<string>();
    const [shouldUploadFail, setShouldUploadFail] = useState<boolean>(false);
    const handleDelete = async (file: UploadedFile): Promise<boolean> => {
      await new Promise(_ => setTimeout(_, 1500));
      if (!shouldUploadFail) {
        remove(file);
        return true;
      }
      return false;
    };
    const handleChange = async (files: File[]): Promise<void> => {
      setError('');
      if (files.some(file => file.size > 900_000)) {
        setError('Filen er for stor');
        return;
      }
      setLoading();
      const succeeded: Array<UploadedFile> = [];
      const failed: Array<{
        name: string;
        reason: string;
        id?: string;
      }> = [];
      const uploadPromises = createMockPromises(files.length, shouldUploadFail);
      const results = await Promise.allSettled(uploadPromises);
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log('FULLLFILLED', result);
          succeeded.push({
            name: files[index].name,
            href: result.value.href,
            id: Math.random().toString(36).substring(2, 10)
          });
        } else if (result.status === 'rejected') {
          console.log('REJECT', result);
          failed.push({
            name: files[index].name,
            reason: result.reason.statusText,
            id: Math.random().toString(36).substring(2, 10)
          });
        }
      });
      if (failed.length) {
        console.log(failed);
        const error = \`\${failed.length} av \${files.length} filer ble ikke lastet Opp\`;
        setFailure(failed.map(({
          name,
          reason
        }) => ({
          name,
          errorMessage: reason
        })), [{
          error,
          files: failed.map(({
            name,
            id
          }) => ({
            name,
            id
          }))
        }], succeeded);
      } else {
        setSuccess(succeeded);
      }
    };
    return <>
        <Checkbox checked={shouldUploadFail} onChange={() => setShouldUploadFail(!shouldUploadFail)}>
          {'la opplasting feile'}
        </Checkbox>
        <FileUploader label={'Dokumentasjon og grunnlag'} helpText={'Trenger du hjelp?'} acceptedFileFormats={['.pdf', '.jpeg', '.png']} invalidCharacterRegexp={/e/g} shouldNormalizeFileName {...fileUploaderState} errorMessage={error ?? ''} multiple onFileDelete={handleDelete} onFileChange={handleChange}></FileUploader>
      </>;
  }
} satisfies Story`,...m.parameters?.docs?.source}}};const O=["Preview","SimpleCompleteExample","Examples"],J=Object.freeze(Object.defineProperty({__proto__:null,Examples:m,Preview:g,SimpleCompleteExample:u,__namedExportsOrder:O,default:_},Symbol.toStringTag,{value:"Module"}));export{m as E,J as F,u as S};
//# sourceMappingURL=FileUploader.stories-DsEmp3xw.js.map
