import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-D_ouKaeX.js";import"./index-Cu4lwwaE.js";import{L as p,b as te,I as M}from"./index-CUnERQXD.js";import{S as b}from"./index-BXx9z1rZ.js";import{D as f,C as O}from"./index-j9ELDiWk.js";import{d as re,l as se,j as ae,k as $}from"./index-CwaotbcG.js";import{R as F,E as D,C as oe}from"./index-CReUDGGp.js";import{a7 as ie,O as le}from"./index-BQO_0U1F.js";import{T as de,F as m}from"./index-0WkfVUAV.js";import{R as ce}from"./index--pPtgbjO.js";import{H,P as v}from"./index-BAA7SjBM.js";import{i as me}from"./helpers-DjiZIot2.js";import{T as x}from"./DatePickerCalendar-v_gY3V1L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BQtvKDNR.js";import"./Help-BOwxnveE.js";import"./LabelWithHelp-JKcqOKZ0.js";import"./index-CPxI8T3e.js";import"./TopBannerButton-BI-Vwo8Q.js";import"./TopBannerLangPicker-BquFub-4.js";import"./TopBannerLangPickerButton-DhNHUnfV.js";import"./TopBannerLogo-Ovo-997i.js";import"./TopBannerSkipLink-DXq4r_P8.js";import"./TopBannerUserButton-CHtboRIb.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";import"./index-CK6_WcSP.js";const{STORY_CHANGED:pe,SELECT_STORY:ue}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:he,addons:q}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ge}=__STORYBOOK_MODULE_GLOBAL__;var fe="links",{document:V,HTMLElement:ve}=ge,L=a=>q.getChannel().emit(ue,a),ke=a=>o=>typeof o=="function"?o(...a):o,Le=(a,o)=>(...k)=>{let u=ke(k),s=u(a),i=u(o);s!=null&&s.match(/--/)&&!i?L({storyId:s}):i&&s?L({kind:s,story:i}):s?L({kind:s}):i&&L({story:i})},J=a=>{let{target:o}=a;if(!(o instanceof ve))return;let k=o,{sbKind:u,sbStory:s}=k.dataset;(u||s)&&(a.preventDefault(),L({kind:u,story:s}))},E=!1,Se=()=>{E||(E=!0,V.addEventListener("click",J))},xe=()=>{E&&(E=!1,V.removeEventListener("click",J))};he({name:"withLinks",parameterName:fe,wrapper:(a,o)=>(Se(),q.getChannel().once(pe,xe),a(o))});const Ce="_mainExternal_14ngh_1",Ee="_miniNav_14ngh_8",je="_article_14ngh_15",ye="_marginTopM_14ngh_20",Ne="_marginBottomM_14ngh_24",_e="_marginTopL_14ngh_28",Me="_marginRightM_14ngh_32",be="_flexWrap_14ngh_36",Fe="_address_14ngh_41",Be="_postalCode_14ngh_47",Te="_city_14ngh_52",Ae="_phone_14ngh_58",Re="_preLine_14ngh_62",Pe="_noWrap_14ngh_66",Ie="_wideContent_14ngh_70",we="_marginBottomL_14ngh_74",r={mainExternal:Ce,miniNav:Ee,article:je,marginTopM:ye,marginBottomM:Ne,marginTopL:_e,marginRightM:Me,flexWrap:be,address:Fe,postalCode:Be,city:Te,phone:Ae,preLine:Re,noWrap:Pe,wideContent:Ie,marginBottomL:we},Ge=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  padding: var(--semantic-responsive-container-spacing);
  margin: auto;
}

.miniNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-m) 0;
}

.article {
  width: var(--semantic-responsive-article);
  margin: auto;
}

.marginTopM {
  margin-top: var(--spacing-m);
}

.marginBottomM {
  margin-bottom: var(--spacing-m);
}

.marginTopL {
  margin-top: var(--spacing-l);
}

.marginRightM {
  margin-right: var(--spacing-m);
}

.flexWrap {
  display: flex;
  flex-wrap: wrap;
}

.address {
  width: 100%;
  max-width: 338px;
  margin-bottom: var(--spacing-m);
}

.postalCode {
  width: 109px;
  margin-bottom: var(--spacing-m);
}

.city {
  width: 100%;
  max-width: 280px;
  margin-bottom: var(--spacing-m);
}

.phone {
  width: 193px;
}

.preLine {
  white-space: pre-line;
}

.noWrap {
  white-space: nowrap;
}

.wideContent {
  width: var(--semantic-responsive-wide-content);
}

.marginBottomL {
  margin-bottom: var(--spacing-l);
}
`,hn={title:"Sidetyper/Ekstern/Skjema med steg",parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:me(Ge)}}}},C=()=>{const a=c.useRef(null),o=c.useRef(null),[k,u]=c.useState(),s={name:"Knuslete Foxtrot",personId:"12345678910",type:"Person"},[i,B]=c.useState(1),[h,Y]=c.useState(""),[z,T]=c.useState(""),[l,X]=c.useState({address:"",postalCode:"",city:"",phone:""}),[g,j]=c.useState({address:"",postalCode:"",phone:""}),[Q,A]=c.useState(!1),[y,R]=c.useState(!1),[Z,P]=c.useState("");c.useEffect(()=>{Object.values(g).some(n=>n)||A(!1)},[g]);const N=n=>t=>{const d=t.target.value;g[n]!==""&&j(S=>({...S,[n]:""})),X(S=>({...S,[n]:d,city:n==="postalCode"&&/^\d{4}$/.test(d)?"Oslo":S.city}))},_=(n,t)=>{j(d=>({...d,[n]:I(n,t)}))},I=(n,t)=>{switch(n){case"address":return t?"":"Postadresse må fylles ut.";case"postalCode":return t?/^\d{4}$/.test(t)?"":"Postnummer må inneholde fire tall.":"Postnummer må fylles ut.";case"phone":return t?/^[0-9+ ]*$/.test(t)?"":"Telefonnummer må inneholde tall.":"Telefonnummer må fylles ut.";default:return""}},ee=()=>{B(i+1),R(!1)},w=()=>h?!1:(T("Svar på om du har norsk adresse."),!0),G=()=>{P("Du må bekrefte at opplysningene over stemmer.")},ne=()=>{if(!w()){if(h==="ja"){const n={...g};if(Object.entries(l).forEach(([t,d])=>{n[t]=I(t,d)}),j(n),Object.values(n).filter(t=>t).length>1){A(!0);return}if(Object.values(n).some(t=>t))return}ee()}};return e.jsxs(e.Fragment,{children:[e.jsx(de,{ref:o,firstColumn:e.jsxs(p,{children:[e.jsx(p.Link,{href:"#storybook-root",onClick:n=>{var t,d;n.preventDefault(),(d=(t=o.current)==null?void 0:t.closeMenu)==null||d.call(t)},children:"Skatt"}),e.jsx(p.Link,{href:"#storybook-root",onClick:n=>{var t,d;n.preventDefault(),(d=(t=o.current)==null?void 0:t.closeMenu)==null||d.call(t)},children:"Avgift"})]}),user:k,onLanguageClick:n=>{re.changeLanguage(se[n.currentTarget.lang])},onLogInClick:()=>{var n;return(n=a.current)==null?void 0:n.showModal()},onLogOutClick:()=>u(void 0),onUserClick:()=>{var n;return(n=a.current)==null?void 0:n.showModal()}}),e.jsx(ce,{ref:a,me:s,onEntitySelect:async()=>{var n;u({role:"meg"}),(n=a.current)==null||n.close()}}),e.jsxs("main",{className:r.mainExternal,children:[e.jsxs("div",{className:r.miniNav,children:[e.jsx(te,{href:"#",svgPath:ie,children:"Til Min side"}),e.jsx(M,{svgPath:le,children:"Skriv ut"})]}),e.jsxs("div",{className:r.article,children:[e.jsx(H,{as:"h1",level:1,hasSpacing:!0,children:"Skjematittel"}),e.jsxs(f,{hasSpacing:!0,children:[e.jsx(f.Element,{term:"Navn",children:s.name}),e.jsx(f.Element,{term:"Fødselsnummer",children:ae(s.personId)})]}),e.jsx(v,{className:r.wideContent,hasSpacing:!0,children:e.jsx("i",{children:"Alle felt må fylles ut med mindre feltet er merket valgfritt."})})]}),e.jsxs(b,{className:r.marginBottomL,children:[i>=1&&e.jsxs(b.Step,{title:"Kort beskrivelse av steg",titleAs:"h2",stepNumber:1,variant:i===1?"active":"passive",nextButtonProps:{ariaDescribedby:"infoNextButton"},shouldAutoFocusWhenActive:!1,onNext:ne,onEdit:i>1?()=>B(1):void 0,children:[i===1&&e.jsxs(e.Fragment,{children:[e.jsx(v,{className:r.marginTopM,hasSpacing:!0,children:"Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene."}),e.jsxs(F,{legend:"Har du norsk adresse?",selectedValue:h,errorMessage:z,onBlur:w,onChange:n=>{T(""),Y(n.target.value)},children:[e.jsx(F.Radio,{value:"ja",children:"Ja, har norsk adresse"}),e.jsx(F.Radio,{value:"nei",children:"Nei, har ikke norsk adresse"})]}),h==="ja"&&e.jsxs(e.Fragment,{children:[e.jsx(x,{id:"input_address",label:"Postadresse",className:r.address,value:l.address,errorMessage:g.address,required:!0,onChange:N("address"),onBlur:n=>_("address",n.target.value)}),e.jsxs("div",{className:r.flexWrap,children:[e.jsx(x,{id:"input_postalCode",label:"Postnummer",className:`${r.postalCode} ${r.marginRightM}`,classNames:{errorMessage:r.noWrap},value:l.postalCode,inputMode:"numeric",pattern:"[0-9]{4}",maxLength:4,minLength:4,errorMessage:g.postalCode,required:!0,onChange:N("postalCode"),onBlur:n=>_("postalCode",n.target.value)}),e.jsx(x,{label:"Poststed",className:r.city,value:l.city,required:!0,readOnly:!0})]}),e.jsx(x,{id:"input_phone",label:"Telefonnummer",classNames:{textbox:r.phone},value:l.phone,inputMode:"tel",pattern:"[0-9+ ]*",errorMessage:g.phone,required:!0,onChange:N("phone"),onBlur:n=>_("phone",n.target.value)}),e.jsx(D,{showErrorSummary:Q,className:r.marginTopM,title:"For å gå videre må du rette opp i følgende:",titleAs:"h3",children:Object.entries(g).filter(([n,t])=>t).map(([n,t])=>e.jsx(D.Error,{referenceId:`input_${n}`,children:t},n))})]}),h==="nei"&&e.jsx(v,{children:"Felter med utenlandsk format eller tilsvarende"})]}),i>1&&e.jsx("div",{className:r.flexWrap,children:e.jsx(v,{className:r.marginRightM,children:h==="ja"?`${s.name}, ${l.address}, ${l.postalCode}, ${l.city}, ${$(l.phone)}`:`${s.name}, Utenlandsk adresse`})})]}),i===2&&e.jsx(b.Step,{title:"Oppsummering før innsending",titleAs:"h2",stepNumber:2,nextButtonText:"Send inn",variant:i===2?"active":"passive",onNext:y?Le("Sidetyper/Ekstern/Kvittering","Kvittering"):G,children:e.jsx(O,{color:"ochre",className:r.marginTopM,children:e.jsxs(O.Content,{children:[e.jsxs(f,{hasSpacing:!0,children:[e.jsx(f.Element,{term:"Innsender",children:s.name}),e.jsx(f.Element,{term:"Adresse",children:e.jsx("span",{className:r.preLine,children:h==="ja"?`${l.address}
${l.postalCode} ${l.city}`:"Utenlandsk adresse"})}),h&&e.jsx(f.Element,{term:"Telefon",children:$(l.phone)})]}),e.jsx(oe,{checked:y,errorMessage:Z,required:!0,onBlur:y?void 0:G,onChange:n=>{P(""),R(n.target.checked)},children:"Jeg bekrefter at opplysningene over stemmer."})]})})})]}),e.jsxs("div",{className:r.article,children:[e.jsxs("div",{className:r.flexWrap,children:[e.jsx(M,{className:`${r.marginRightM} ${r.marginBottomM}`,children:"Lagre og fortsett senere"}),e.jsx(M,{className:r.marginBottomM,children:"Avbryt og slett"})]}),e.jsx(v,{id:"infoNextButton",hasSpacing:!0,children:e.jsx("i",{children:"Når du klikker på «Neste», blir informasjonen som du har skrevet inn automatisk lagret."})})]})]}),e.jsxs(m,{titleFirstColumn:"Skatteetaten",titleSecondColumn:"Følg oss",secondColumn:e.jsx(p,{color:"white",children:e.jsx(p.Link,{href:"#",children:"Se våre kontoer i sosiale medier"})}),titleThirdColumn:"Presse",thirdColumn:e.jsxs(e.Fragment,{children:[e.jsx(v,{hasSpacing:!0,children:"Pressemeldinger, pressekontaker og annen informasjon for journalister."}),e.jsx(p,{color:"white",hasSpacing:!0,children:e.jsx(p.Link,{href:"#",children:"Se vårt presserom"})}),e.jsx(H,{as:"h2",level:3,className:r.marginTopL,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsx(v,{hasSpacing:!0,children:"Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester."}),e.jsx(p,{color:"white",children:e.jsx(p.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),children:[e.jsx(m.LinkFirstColumn,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(m.LinkFirstColumn,{href:"#",children:"Om oss"}),e.jsx(m.LinkFirstColumn,{href:"#",children:"Analyse og rapporter"}),e.jsx(m.LinkFirstColumn,{href:"#",children:"Forskning"}),e.jsx(m.Link,{href:"#",children:"Satser"}),e.jsx(m.Link,{href:"#",children:"Skjema og tjenester"}),e.jsx(m.Link,{href:"#",children:"RSS"}),e.jsx(m.Link,{href:"#",children:"Tips oss"}),e.jsx(m.Link,{href:"#",isExternal:!0,children:"Koronatiltak"})]})]})};var W,K,U;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`(): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person'
  };
  const [activeStep, setActiveStep] = useState(1);
  const [hasLocalAddress, setHasLocalAddress] = useState<string>('');
  const [localAddressErrorMessage, setLocalAddressErrorMessage] = useState<string>('');
  type Contacts = {
    address: string;
    postalCode: string;
    city: string;
    phone: string;
  };
  type ContactsError = {
    address: string;
    postalCode: string;
    phone: string;
  };
  const [contactsInput, setContactsInput] = useState<Contacts>({
    address: '',
    postalCode: '',
    city: '',
    phone: ''
  });
  const [contactsError, setContactsError] = useState<ContactsError>({
    address: '',
    postalCode: '',
    phone: ''
  });
  const [showErrorSummary, setShowErrorSummary] = useState(false);
  const [hasGivenConsent, setHasGivenConsent] = useState(false);
  const [consentError, setConsentError] = useState<string>('');
  useEffect(() => {
    if (!Object.values(contactsError).some(error => error)) {
      setShowErrorSummary(false);
    }
  }, [contactsError]);
  const handleInputChange = (field: keyof ContactsError) => (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (contactsError[field] !== '') {
      setContactsError(prev => ({
        ...prev,
        [field]: ''
      }));
    }
    setContactsInput(prevState => ({
      ...prevState,
      [field]: value,
      city: field === 'postalCode' && /^\\d{4}$/.test(value) ? 'Oslo' : prevState.city
    }));
  };
  const handleBlur = (field: keyof Contacts, value: string): void => {
    setContactsError(prev => ({
      ...prev,
      [field]: validateField(field, value)
    }));
  };
  const validateField = (field: keyof Contacts, value: string): string => {
    switch (field) {
      case 'address':
        return value ? '' : 'Postadresse må fylles ut.';
      case 'postalCode':
        if (!value) return 'Postnummer må fylles ut.';
        if (!/^\\d{4}$/.test(value)) return 'Postnummer må inneholde fire tall.';
        return '';
      case 'phone':
        if (!value) return 'Telefonnummer må fylles ut.';
        if (!/^[0-9+ ]*$/.test(value)) return 'Telefonnummer må inneholde tall.';
        return '';
      default:
        return '';
    }
  };
  const onNext = (): void => {
    setActiveStep(activeStep + 1);
    setHasGivenConsent(false);
  };
  const setLocalAddressError = (): boolean => {
    if (!hasLocalAddress) {
      setLocalAddressErrorMessage('Svar på om du har norsk adresse.');
      return true;
    }
    return false;
  };
  const setConsentErrorMessage = (): void => {
    setConsentError('Du må bekrefte at opplysningene over stemmer.');
  };
  const handleNextStep = (): void => {
    if (setLocalAddressError()) return;
    if (hasLocalAddress === 'ja') {
      const updatedErrors: ContactsError = {
        ...contactsError
      };
      Object.entries(contactsInput).forEach(([field, value]) => {
        updatedErrors[field as keyof ContactsError] = validateField(field as keyof ContactsError, value);
      });
      setContactsError(updatedErrors);
      if (Object.values(updatedErrors).filter(error => error).length > 1) {
        setShowErrorSummary(true);
        return;
      }
      if (Object.values(updatedErrors).some(error => error)) {
        return;
      }
    }
    onNext();
  };
  return <>
      <TopBannerExternal ref={topBannerRef} firstColumn={<LinkGroup>
            <LinkGroup.Link href={'#storybook-root'} onClick={(e): void => {
        e.preventDefault();
        topBannerRef.current?.closeMenu?.();
      }}>
              {'Skatt'}
            </LinkGroup.Link>
            <LinkGroup.Link href={'#storybook-root'} onClick={(e): void => {
        e.preventDefault();
        topBannerRef.current?.closeMenu?.();
      }}>
              {'Avgift'}
            </LinkGroup.Link>
          </LinkGroup>} user={user} onLanguageClick={(e: MouseEvent<HTMLButtonElement>): void => {
      void dsI18n.changeLanguage(langToLocale[e.currentTarget.lang]);
    }} onLogInClick={(): void => modalRef.current?.showModal()} onLogOutClick={(): void => setUser(undefined)} onUserClick={(): void => modalRef.current?.showModal()} />
      <RolePicker ref={modalRef} me={me} onEntitySelect={async () => {
      setUser({
        role: 'meg'
      });
      modalRef.current?.close();
    }} />
      <main className={styles.mainExternal}>
        <div className={styles.miniNav}>
          <Link href={'#'} svgPath={ArrowBackSVGpath}>
            {'Til Min side'}
          </Link>
          <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
        </div>
        <div className={styles.article}>
          <Heading as={'h1'} level={1} hasSpacing>
            {'Skjematittel'}
          </Heading>
          <DescriptionList hasSpacing>
            <DescriptionList.Element term={'Navn'}>
              {me.name}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Fødselsnummer'}>
              {formatNationalIdentityNumber(me.personId)}
            </DescriptionList.Element>
          </DescriptionList>
          <Paragraph className={styles.wideContent} hasSpacing>
            <i>
              {'Alle felt må fylles ut med mindre feltet er merket valgfritt.'}
            </i>
          </Paragraph>
        </div>
        <StepList className={styles.marginBottomL}>
          {activeStep >= 1 && <StepList.Step title={'Kort beskrivelse av steg'} titleAs={'h2'} stepNumber={1} variant={activeStep === 1 ? 'active' : 'passive'} nextButtonProps={{
          ariaDescribedby: 'infoNextButton'
        }} shouldAutoFocusWhenActive={false} onNext={handleNextStep} onEdit={activeStep > 1 ? (): void => setActiveStep(1) : undefined}>
              {activeStep === 1 && <>
                  <Paragraph className={styles.marginTopM} hasSpacing>
                    {'Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene.'}
                  </Paragraph>
                  <RadioGroup legend={'Har du norsk adresse?'} selectedValue={hasLocalAddress} errorMessage={localAddressErrorMessage} onBlur={setLocalAddressError} onChange={(e): void => {
              setLocalAddressErrorMessage('');
              setHasLocalAddress(e.target.value);
            }}>
                    <RadioGroup.Radio value={'ja'}>
                      {'Ja, har norsk adresse'}
                    </RadioGroup.Radio>
                    <RadioGroup.Radio value={'nei'}>
                      {'Nei, har ikke norsk adresse'}
                    </RadioGroup.Radio>
                  </RadioGroup>
                  {hasLocalAddress === 'ja' && <>
                      <TextField id={'input_address'} label={'Postadresse'} className={styles.address} value={contactsInput.address} errorMessage={contactsError.address} required onChange={handleInputChange('address')} onBlur={e => handleBlur('address', e.target.value)} />
                      <div className={styles.flexWrap}>
                        <TextField id={'input_postalCode'} label={'Postnummer'} className={\`\${styles.postalCode} \${styles.marginRightM}\`} classNames={{
                  errorMessage: styles.noWrap
                }} value={contactsInput.postalCode} inputMode={'numeric'} pattern={'[0-9]{4}'} maxLength={4} minLength={4} errorMessage={contactsError.postalCode} required onChange={handleInputChange('postalCode')} onBlur={e => handleBlur('postalCode', e.target.value)} />
                        <TextField label={'Poststed'} className={styles.city} value={contactsInput.city} required readOnly />
                      </div>
                      <TextField id={'input_phone'} label={'Telefonnummer'} classNames={{
                textbox: styles.phone
              }} value={contactsInput.phone} inputMode={'tel'} pattern={'[0-9+ ]*'} errorMessage={contactsError.phone} required onChange={handleInputChange('phone')} onBlur={e => handleBlur('phone', e.target.value)} />
                      <ErrorSummary showErrorSummary={showErrorSummary} className={styles.marginTopM} title={'For å gå videre må du rette opp i følgende:'} titleAs={'h3'}>
                        {Object.entries(contactsError).filter(([_, error]) => error).map(([field, error]) => <ErrorSummary.Error key={field} referenceId={\`input_\${field}\`}>
                              {error}
                            </ErrorSummary.Error>)}
                      </ErrorSummary>
                    </>}
                  {hasLocalAddress === 'nei' && <Paragraph>
                      {'Felter med utenlandsk format eller tilsvarende'}
                    </Paragraph>}
                </>}
              {activeStep > 1 && <div className={styles.flexWrap}>
                  <Paragraph className={styles.marginRightM}>
                    {hasLocalAddress === 'ja' ? \`\${me.name}, \${contactsInput.address}, \${contactsInput.postalCode}, \${contactsInput.city}, \${formatPhoneNumber(contactsInput.phone)}\` : \`\${me.name}, Utenlandsk adresse\`}
                  </Paragraph>
                </div>}
            </StepList.Step>}
          {activeStep === 2 && <StepList.Step title={'Oppsummering før innsending'} titleAs={'h2'} stepNumber={2} nextButtonText={'Send inn'} variant={activeStep === 2 ? 'active' : 'passive'} onNext={hasGivenConsent ? linkTo('Sidetyper/Ekstern/Kvittering', 'Kvittering') : setConsentErrorMessage}>
              <Card color={'ochre'} className={styles.marginTopM}>
                <Card.Content>
                  <DescriptionList hasSpacing>
                    <DescriptionList.Element term={'Innsender'}>
                      {me.name}
                    </DescriptionList.Element>
                    <DescriptionList.Element term={'Adresse'}>
                      <span className={styles.preLine}>
                        {hasLocalAddress === 'ja' ? \`\${contactsInput.address}\\n\${contactsInput.postalCode} \${contactsInput.city}\` : 'Utenlandsk adresse'}
                      </span>
                    </DescriptionList.Element>
                    {hasLocalAddress && <DescriptionList.Element term={'Telefon'}>
                        {formatPhoneNumber(contactsInput.phone)}
                      </DescriptionList.Element>}
                  </DescriptionList>
                  <Checkbox checked={hasGivenConsent} errorMessage={consentError} required onBlur={hasGivenConsent ? undefined : setConsentErrorMessage} onChange={(e): void => {
                setConsentError('');
                setHasGivenConsent(e.target.checked);
              }}>
                    {'Jeg bekrefter at opplysningene over stemmer.'}
                  </Checkbox>
                </Card.Content>
              </Card>
            </StepList.Step>}
        </StepList>
        <div className={styles.article}>
          <div className={styles.flexWrap}>
            <InlineButton className={\`\${styles.marginRightM} \${styles.marginBottomM}\`}>
              {'Lagre og fortsett senere'}
            </InlineButton>
            <InlineButton className={styles.marginBottomM}>
              {'Avbryt og slett'}
            </InlineButton>
          </div>
          <Paragraph id={'infoNextButton'} hasSpacing>
            <i>
              {'Når du klikker på «Neste», blir informasjonen som du har skrevet inn automatisk lagret.'}
            </i>
          </Paragraph>
        </div>
      </main>
      <Footer titleFirstColumn={'Skatteetaten'} titleSecondColumn={'Følg oss'} secondColumn={<LinkGroup color={'white'}>
            <LinkGroup.Link href={'#'}>
              {'Se våre kontoer i sosiale medier'}
            </LinkGroup.Link>
          </LinkGroup>} titleThirdColumn={'Presse'} thirdColumn={<>
            <Paragraph hasSpacing>
              {'Pressemeldinger, pressekontaker og annen informasjon for journalister.'}
            </Paragraph>
            <LinkGroup color={'white'} hasSpacing>
              <LinkGroup.Link href={'#'}>{'Se vårt presserom'}</LinkGroup.Link>
            </LinkGroup>
            <Heading as={'h2'} level={3} className={styles.marginTopL} hasSpacing>
              {'Bruke data fra Skatteetaten'}
            </Heading>
            <Paragraph hasSpacing>
              {'Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester.'}
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Hvordan få tilgang til data'}
              </LinkGroup.Link>
            </LinkGroup>
          </>}>
        <Footer.LinkFirstColumn href={'#'}>
          {'Jobb i Skatteetaten'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Analyse og rapporter'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Forskning'}
        </Footer.LinkFirstColumn>
        <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
        <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
        <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
        <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
        <Footer.Link href={'#'} isExternal>
          {'Koronatiltak'}
        </Footer.Link>
      </Footer>
    </>;
}`,...(U=(K=C.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const gn=["SkjemaMedSteg"];export{C as SkjemaMedSteg,gn as __namedExportsOrder,hn as default};
//# sourceMappingURL=SkjemaMedSteg.stories-BUvB01Zo.js.map
