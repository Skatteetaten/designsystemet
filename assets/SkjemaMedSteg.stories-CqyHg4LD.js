import{x as q,r as a,j as e,n as K,y as B}from"./iframe-BoxHncFg.js";import{l as V}from"./index-D3GjUKSb.js";import{b as J,I as E}from"./index-DyY5joHW.js";import{S as C}from"./index-CfnY26Mx.js";import{D as d,C as I}from"./index-CxRKwedM.js";import{c as y,E as P,C as U}from"./index-d7h_eiwz.js";import{a5 as z,O as X}from"./index-Mlou2Fgf.js";import{H as Q,P as p}from"./index-COS0aIOi.js";import{w as Y}from"./pagelayout-decorator-BIAl_tad.js";import{T as h}from"./DatePickerCalendar-NBFB_hA6.js";import"./index-CvbIYQ1J.js";import"./Help-DtlVvBAO.js";import"./LabelWithHelp-CeoEDrnt.js";import"./index-k61vOTBl.js";import"./index-z4c3QXb-.js";import"./TopBannerButton-C3rtnis-.js";import"./floating-ui.react-Cx2bJYit.js";import"./index-BWe3UoPQ.js";import"./index-BHwnoM9V.js";import"./TopBannerLangPicker-uoLEUZhA.js";import"./TopBannerLangPickerButton-ELq5E0QT.js";import"./TopBannerLogo-BeX8MPXd.js";import"./TopBannerSkipLink-DAAkcUni.js";import"./TopBannerUserButton-D_jNR-zE.js";import"./index-DK27EPS2.js";import"./index-CIMmj5uo.js";import"./TopBannerExternalExample.module-J_szXmUm.js";const Z="_mainExternal_dn77d_1",ee="_miniNav_dn77d_8",ne="_article_dn77d_15",te="_marginTopM_dn77d_20",re="_marginBottomM_dn77d_24",se="_marginRightM_dn77d_28",ae="_flexWrap_dn77d_32",oe="_address_dn77d_37",ie="_postalCode_dn77d_42",le="_city_dn77d_46",de="_phone_dn77d_51",ce="_preLine_dn77d_55",me="_noWrap_dn77d_59",pe="_wideContent_dn77d_63",ue="_marginBottomL_dn77d_67",t={mainExternal:Z,miniNav:ee,article:ne,marginTopM:te,marginBottomM:re,marginRightM:se,flexWrap:ae,address:oe,postalCode:ie,city:le,phone:de,preLine:ce,noWrap:me,wideContent:pe,marginBottomL:ue},he=`.mainExternal {
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
}

.postalCode {
  width: 109px;
}

.city {
  width: 100%;
  max-width: 280px;
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
`,We={title:"Sidetyper/Ekstern/Skjema med steg",decorators:[Y],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:q(he)}}}},g=()=>{const m={name:"Knuslete Foxtrot",personId:"12345678910"},[o,N]=a.useState(1),[i,R]=a.useState(""),[F,k]=a.useState(""),[s,D]=a.useState({address:"",postalCode:"",city:"",phone:""}),[l,v]=a.useState({address:"",postalCode:"",phone:""}),[G,j]=a.useState(!1),[f,L]=a.useState(!1),[O,M]=a.useState("");a.useEffect(()=>{Object.values(l).some(n=>n)||j(!1)},[l]);const x=n=>r=>{const c=r.target.value;l[n]!==""&&v(u=>({...u,[n]:""})),D(u=>({...u,[n]:c,city:n==="postalCode"&&/^\d{4}$/.test(c)?"Oslo":u.city}))},S=(n,r)=>{v(c=>({...c,[n]:_(n,r)}))},_=(n,r)=>{switch(n){case"address":return r?"":"Postadresse må fylles ut.";case"postalCode":return r?/^\d{4}$/.test(r)?"":"Postnummer må inneholde fire tall.":"Postnummer må fylles ut.";case"phone":return r?/^[0-9+ ]*$/.test(r)?"":"Telefonnummer må inneholde tall.":"Telefonnummer må fylles ut.";default:return""}},W=()=>{N(o+1),L(!1)},b=()=>i?!1:(k("Svar på om du har norsk adresse."),!0),A=()=>{M("Du må bekrefte at opplysningene over stemmer.")},H=()=>{if(!b()){if(i==="ja"){const n={...l};if(Object.entries(s).forEach(([r,c])=>{n[r]=_(r,c)}),v(n),Object.values(n).filter(r=>r).length>1){j(!0);return}if(Object.values(n).some(r=>r))return}W()}};return e.jsxs("main",{className:t.mainExternal,children:[e.jsxs("div",{className:t.miniNav,children:[e.jsx(J,{href:"#",svgPath:z,children:"Til Min side"}),e.jsx(E,{svgPath:X,children:"Skriv ut"})]}),e.jsxs("div",{className:t.article,children:[e.jsx(Q,{as:"h1",level:1,hasSpacing:!0,children:"Skjematittel"}),e.jsxs(d,{hasSpacing:!0,children:[e.jsx(d.Element,{term:"Navn",children:m.name}),e.jsx(d.Element,{term:"Fødselsnummer",children:K(m.personId)})]}),e.jsx(p,{className:t.wideContent,hasSpacing:!0,children:e.jsx("i",{children:"Alle felt må fylles ut med mindre feltet er merket valgfritt."})})]}),e.jsxs(C,{className:t.marginBottomL,children:[o>=1&&e.jsxs(C.Step,{title:"Kort beskrivelse av steg",titleAs:"h2",stepNumber:1,variant:o===1?"active":"passive",nextButtonProps:{ariaDescribedby:"infoNextButton"},shouldAutoFocusWhenActive:!1,onNext:H,onEdit:o>1?()=>N(1):void 0,children:[o===1&&e.jsxs(e.Fragment,{children:[e.jsx(p,{className:t.marginTopM,hasSpacing:!0,children:"Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene."}),e.jsxs(y,{legend:"Har du norsk adresse?",selectedValue:i,errorMessage:F,onBlur:b,onChange:n=>{k(""),R(n.target.value)},children:[e.jsx(y.Radio,{value:"ja",children:"Ja, har norsk adresse"}),e.jsx(y.Radio,{value:"nei",children:"Nei, har ikke norsk adresse"})]}),i==="ja"&&e.jsxs(e.Fragment,{children:[e.jsx(h,{id:"input_address",label:"Postadresse",className:t.address,value:s.address,errorMessage:l.address,hasSpacing:!0,required:!0,onChange:x("address"),onBlur:n=>S("address",n.target.value)}),e.jsxs("div",{className:t.flexWrap,children:[e.jsx(h,{id:"input_postalCode",label:"Postnummer",className:`${t.postalCode} ${t.marginRightM}`,classNames:{errorMessage:t.noWrap},value:s.postalCode,inputMode:"numeric",pattern:"[0-9]{4}",maxLength:4,minLength:4,errorMessage:l.postalCode,hasSpacing:!0,required:!0,onChange:x("postalCode"),onBlur:n=>S("postalCode",n.target.value)}),e.jsx(h,{label:"Poststed",className:t.city,value:s.city,hasSpacing:!0,required:!0,readOnly:!0})]}),e.jsx(h,{id:"input_phone",label:"Telefonnummer",classNames:{textbox:t.phone},value:s.phone,inputMode:"tel",pattern:"[0-9+ ]*",errorMessage:l.phone,required:!0,onChange:x("phone"),onBlur:n=>S("phone",n.target.value)}),e.jsx(P,{showErrorSummary:G,className:t.marginTopM,title:"For å gå videre må du rette opp i følgende:",titleAs:"h3",children:Object.entries(l).filter(([n,r])=>r).map(([n,r])=>e.jsx(P.Error,{referenceId:`input_${n}`,children:r},n))})]}),i==="nei"&&e.jsx(p,{children:"Felter med utenlandsk format eller tilsvarende"})]}),o>1&&e.jsx("div",{className:t.flexWrap,children:e.jsx(p,{className:t.marginRightM,children:i==="ja"?`${m.name}, ${s.address}, ${s.postalCode}, ${s.city}, ${B(s.phone)}`:`${m.name}, Utenlandsk adresse`})})]}),o===2&&e.jsx(C.Step,{title:"Oppsummering før innsending",titleAs:"h2",stepNumber:2,nextButtonText:"Send inn",variant:o===2?"active":"passive",onNext:f?V("Sidetyper/Ekstern/Kvittering","Kvittering"):A,children:e.jsx(I,{color:"ochre",className:t.marginTopM,children:e.jsxs(I.Content,{children:[e.jsxs(d,{hasSpacing:!0,children:[e.jsx(d.Element,{term:"Innsender",children:m.name}),e.jsx(d.Element,{term:"Adresse",children:e.jsx("span",{className:t.preLine,children:i==="ja"?`${s.address}
${s.postalCode} ${s.city}`:"Utenlandsk adresse"})}),i&&e.jsx(d.Element,{term:"Telefon",children:B(s.phone)})]}),e.jsx(U,{checked:f,errorMessage:O,required:!0,onBlur:f?void 0:A,onChange:n=>{M(""),L(n.target.checked)},children:"Jeg bekrefter at opplysningene over stemmer."})]})})})]}),e.jsxs("div",{className:t.article,children:[e.jsxs("div",{className:t.flexWrap,children:[e.jsx(E,{className:`${t.marginRightM} ${t.marginBottomM}`,children:"Lagre og fortsett senere"}),e.jsx(E,{className:t.marginBottomM,children:"Avbryt og slett"})]}),e.jsx(p,{id:"infoNextButton",hasSpacing:!0,children:e.jsx("i",{children:"Når du klikker på «Neste», blir informasjonen som du har skrevet inn automatisk lagret."})})]})]})};var w,$,T;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`(): JSX.Element => {
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
  return <main className={styles.mainExternal}>
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
                    <TextField id={'input_address'} label={'Postadresse'} className={styles.address} value={contactsInput.address} errorMessage={contactsError.address} hasSpacing required onChange={handleInputChange('address')} onBlur={e => handleBlur('address', e.target.value)} />
                    <div className={styles.flexWrap}>
                      <TextField id={'input_postalCode'} label={'Postnummer'} className={\`\${styles.postalCode} \${styles.marginRightM}\`} classNames={{
                errorMessage: styles.noWrap
              }} value={contactsInput.postalCode} inputMode={'numeric'} pattern={'[0-9]{4}'} maxLength={4} minLength={4} errorMessage={contactsError.postalCode} hasSpacing required onChange={handleInputChange('postalCode')} onBlur={e => handleBlur('postalCode', e.target.value)} />
                      <TextField label={'Poststed'} className={styles.city} value={contactsInput.city} hasSpacing required readOnly />
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
    </main>;
}`,...(T=($=g.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const He=["SkjemaMedSteg"];export{g as SkjemaMedSteg,He as __namedExportsOrder,We as default};
//# sourceMappingURL=SkjemaMedSteg.stories-CqyHg4LD.js.map
