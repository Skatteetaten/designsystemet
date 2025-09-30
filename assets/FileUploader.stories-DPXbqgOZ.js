import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-D_ouKaeX.js";import{b as $}from"./index-CGk5cNE3.js";import{d as h,C as H}from"./index-DkXzVmhj.js";import{c as e}from"./helpers-B90wjoUE.js";import{S as C}from"./icon.systems-DGFW7KrD.js";import{e as J}from"./stories.utils-Ys3NG0dr.js";const A={component:h,title:"Komponenter/FileUploader",argTypes:{classNames:{control:!1,table:{category:e.props}},acceptedFileFormatsDisplay:{table:{category:e.props}},description:{table:{category:e.props}},fileIconTitle:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(C),mapping:C,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLabel:{table:{category:e.props}},invalidCharacterRegexp:{control:"text",table:{category:e.props}},isUploading:{table:{category:e.props}},label:{table:{category:e.props}},acceptedFileFormats:{table:{category:e.props}},shouldNormalizeFileName:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:$()}}},uploadedFiles:{control:!1,table:{category:e.props}},uploadResult:{control:!1,table:{category:e.props}},multiple:{table:{category:e.htmlAttribute}},children:{table:{category:e.props}},acceptedFileFormatsDescription:{table:{category:e.props}},onFileDelete:{table:{category:e.event}},onFileDownload:{table:{category:e.event}},onFileChange:{table:{category:e.event}},onHelpToggle:{control:!1,table:{category:e.event}}},args:{helpText:"Hjelpetekst",label:"Ledetekst",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"test.pdf",href:"https://i.imgur.com/guZeGcr.png"},{name:"test.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}],onFileDelete:p=>(console.log(p),!0)}},f={};async function V(p){return await new Promise(n=>setTimeout(n,500)),p?Response.json({},{status:400}):Response.json({})}function G(p,n){return V(n)}function I(p,n){return V(n)}const u={render:p=>{const[n,b,y,U,j]=h.useFileUploader(),[c,E]=S.useState(!1),[F,d]=S.useState(""),M=async a=>(await I(a.name,c)).ok?(j(a),!0):!1,k=async a=>n.uploadedFiles.length>0?(d("Du har allerede lastet opp en fil. Fjern filen først om du ønsker å laste opp en annen fil i stedet"),Promise.reject()):a.length>1?(d("Det er ikke lov med flere filer (dette kan bare skje med drag and drop)"),Promise.reject()):(y(),(await G(a[0],c)).ok?(b(a),!0):(U(a,[{error:"det har skjedd noe feil",files:[{name:a[0].name}]}]),!1));return i.jsxs(i.Fragment,{children:[i.jsx(H,{checked:c,onChange:()=>E(!c),children:"La nettverkskall feile"}),i.jsx(h,{label:"Last opp et dokument",acceptedFileFormats:[".pdf",".jpeg",".png"],multiple:!1,...n,errorMessage:F,onFileDelete:M,onFileChange:k})]})}};u.parameters=J;const m={render:p=>{const n=o=>{const l=[];for(let t=0;t<o;t++){const g=new Promise((v,r)=>{Math.random()<.5?v({href:"https://skatteetaten.github.io/designsystemet/"}):r("Promise rejected")});l.push(g)}return l},[b,y,U,j,c]=h.useFileUploader(),[E,F]=S.useState(),[d,M]=S.useState(!0),k="http://localhost:9090/test",a=async o=>{if(await new Promise(t=>setTimeout(t,1500)),d)return c(o),!0;let l=!0;return await fetch(k,{method:"DELETE"}).then(t=>{t.ok?c(o):l=!1}),l},P=async o=>{if(U(),F(""),o.some(r=>r.size>9e5)){F("Filen er for stor");return}const l=[],t=[];let g=[];if(d?g=n(o.length):g=o.map(r=>fetch(k,{method:"POST",body:r}).then(s=>(console.log(s),s.ok?s.json():Promise.reject(s)))),(await Promise.allSettled(g)).forEach((r,s)=>{r.status==="fulfilled"?(console.log("FULLLFILLED",r),l.push({name:o[s].name,href:r.value.href,id:Math.random().toString(36).substring(2,10)})):r.status==="rejected"&&(console.log("REJECT",r),t.push({name:o[s].name,reason:r.reason.statusText,id:Math.random().toString(36).substring(2,10)}))}),t.length){const r=`${t.length} av ${o.length} filer ble ikke lastet Opp`;j(t.map(({name:s,reason:x})=>({name:s,errorMessage:x})),[{error:r,files:t.map(({name:s,id:x})=>({name:s,id:x}))}],l)}else y(l)};return i.jsxs(i.Fragment,{children:[i.jsx(H,{checked:d,onChange:()=>M(!d),children:"Bruk mockUpload"}),i.jsx(h,{label:"Dokumentasjon og grunnlag",helpText:"Trenger du hjelp?",acceptedFileFormats:[".pdf",".jpeg",".png"],invalidCharacterRegexp:/e/g,shouldNormalizeFileName:!0,...b,errorMessage:E??"",multiple:!0,onFileDelete:a,onFileChange:P})]})}};m.parameters=J;var D,L,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"{} satisfies Story",...(T=(L=f.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var w,_,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var O,N,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    interface MockUploadedFile {
      href?: string;
    }
    const createMockPromises = (amount: number): Promise<MockUploadedFile>[] => {
      const promises: Promise<MockUploadedFile>[] = [];
      for (let i = 0; i < amount; i++) {
        const promise = new Promise<MockUploadedFile>((resolve, reject) => {
          if (Math.random() < 0.5) {
            resolve({
              href: 'https://skatteetaten.github.io/designsystemet/'
            });
          } else {
            reject('Promise rejected');
          }
        });
        promises.push(promise);
      }
      return promises;
    };
    const [fileUploaderState, setSuccess, setLoading, setFailure, remove] = FileUploader.useFileUploader();
    const [error, setError] = useState<string>();
    const [shouldMockUpload, setShouldMockUpload] = useState<boolean>(true);
    const uploadUrl = 'http://localhost:9090/test';
    const handleDelete = async (file: UploadedFile): Promise<boolean> => {
      await new Promise(_ => setTimeout(_, 1500));
      if (shouldMockUpload) {
        remove(file);
        return true;
      }
      let deleteStatus = true;
      await fetch(uploadUrl, {
        method: 'DELETE'
      }).then(response => {
        if (!response.ok) {
          deleteStatus = false;
        } else {
          remove(file);
        }
      });
      return deleteStatus;
    };
    const handleChange = async (files: File[]): Promise<void> => {
      setLoading();
      setError('');
      if (files.some(file => file.size > 900_000)) {
        setError('Filen er for stor');
        return;
      }
      const succeeded: Array<UploadedFile> = [];
      const failed: Array<{
        name: string;
        reason: string;
        id?: string;
      }> = [];
      let uploadPromises: Promise<MockUploadedFile>[] = [];
      if (shouldMockUpload) {
        uploadPromises = createMockPromises(files.length);
      } else {
        uploadPromises = files.map(file => fetch(uploadUrl, {
          method: 'POST',
          body: file
        }).then(response => {
          console.log(response);
          if (!response.ok) {
            return Promise.reject(response);
          }
          return response.json();
        }));
      }
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
        <Checkbox checked={shouldMockUpload} onChange={() => setShouldMockUpload(!shouldMockUpload)}>
          {'Bruk mockUpload'}
        </Checkbox>
        <FileUploader label={'Dokumentasjon og grunnlag'} helpText={'Trenger du hjelp?'} acceptedFileFormats={['.pdf', '.jpeg', '.png']} invalidCharacterRegexp={/e/g} shouldNormalizeFileName {...fileUploaderState} errorMessage={error ?? ''} multiple onFileDelete={handleDelete} onFileChange={handleChange}></FileUploader>
      </>;
  }
} satisfies Story`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const B=["Preview","SimpleCompleteExample","Examples"],ee=Object.freeze(Object.defineProperty({__proto__:null,Examples:m,Preview:f,SimpleCompleteExample:u,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{m as E,ee as F,u as S};
//# sourceMappingURL=FileUploader.stories-DPXbqgOZ.js.map
