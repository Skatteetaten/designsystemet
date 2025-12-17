import{F as W,r as a,j as e,m as O,H as B,G as H}from"./iframe-VHQh6taY.js";import{b as q,I as S}from"./index-C8wxqHpZ.js";import{S as E}from"./index-DgU9os4N.js";import{D as d,C as I}from"./index-CEjXTNb1.js";import{c as C,E as P,C as K}from"./index-lB78RBB2.js";import{a9 as V,U as J}from"./index-Di_7ammq.js";import{H as U,P as p}from"./index-Don9wpRQ.js";import{w as z}from"./pagelayout-decorator-DI3RWUkk.js";import{T as h}from"./DatePickerCalendar-fvOeZNLZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DALzD4Pw.js";import"./Help-DcN2X4V-.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-DM_xyLsF.js";import"./ComboboxSelectedOptions-BxHsyaCT.js";import"./LabelWithHelp-By58SB7B.js";import"./index-BJkQPiPu.js";import"./index-B_yqNyPt.js";import"./TopBannerButton-CyO2leJr.js";import"./floating-ui.react-CubAuxUS.js";import"./index-C1tDoD4z.js";import"./index-CPemCIdg.js";import"./TopBannerLangPicker-ByIsuxlN.js";import"./TopBannerLangPickerButton-CSOQUeNc.js";import"./TopBannerLogo-DBta5hf-.js";import"./TopBannerSkipLink-Br1ef_2-.js";import"./TopBannerUserButton-CpmZJ9Rk.js";import"./index-CqsuB6cf.js";import"./index-9yOjvRwa.js";import"./TopBannerExternalExample.module-D-cyqUXs.js";const X="_mainExternal_1x0yn_1",Q="_miniNav_1x0yn_9",Y="_article_1x0yn_16",Z="_marginTopM_1x0yn_21",ee="_marginBottomM_1x0yn_25",ne="_marginRightM_1x0yn_29",te="_flexWrap_1x0yn_33",re="_address_1x0yn_38",se="_postalCode_1x0yn_43",ae="_city_1x0yn_47",oe="_phone_1x0yn_52",ie="_preLine_1x0yn_56",le="_noWrap_1x0yn_60",de="_wideContent_1x0yn_64",ce="_marginBottomL_1x0yn_68",t={mainExternal:X,miniNav:Q,article:Y,marginTopM:Z,marginBottomM:ee,marginRightM:ne,flexWrap:te,address:re,postalCode:se,city:ae,phone:oe,preLine:ie,noWrap:le,wideContent:de,marginBottomL:ce},me=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  flex: 1;
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
`,Oe={title:"Sidetyper/Ekstern/Skjema med steg",decorators:[z],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:W(me)}}}},g=()=>{const m={name:"Knuslete Foxtrot",personId:"12345678910"},[o,N]=a.useState(1),[i,w]=a.useState(""),[$,k]=a.useState(""),[s,T]=a.useState({address:"",postalCode:"",city:"",phone:""}),[l,v]=a.useState({address:"",postalCode:"",phone:""}),[F,j]=a.useState(!1),[f,L]=a.useState(!1),[R,M]=a.useState("");a.useEffect(()=>{Object.values(l).some(n=>n)||j(!1)},[l]);const x=n=>r=>{const c=r.target.value;l[n]!==""&&v(u=>({...u,[n]:""})),T(u=>({...u,[n]:c,city:n==="postalCode"&&/^\d{4}$/.test(c)?"Oslo":u.city}))},y=(n,r)=>{v(c=>({...c,[n]:_(n,r)}))},_=(n,r)=>{switch(n){case"address":return r?"":"Postadresse må fylles ut.";case"postalCode":return r?/^\d{4}$/.test(r)?"":"Postnummer må inneholde fire tall.":"Postnummer må fylles ut.";case"phone":return r?/^[0-9+ ]*$/.test(r)?"":"Telefonnummer må inneholde tall.":"Telefonnummer må fylles ut.";default:return""}},G=()=>{N(o+1),L(!1)},b=()=>i?!1:(k("Svar på om du har norsk adresse."),!0),A=()=>{M("Du må bekrefte at opplysningene over stemmer.")},D=()=>{if(!b()){if(i==="ja"){const n={...l};if(Object.entries(s).forEach(([r,c])=>{n[r]=_(r,c)}),v(n),Object.values(n).filter(r=>r).length>1){j(!0);return}if(Object.values(n).some(r=>r))return}G()}};return e.jsxs("main",{className:t.mainExternal,children:[e.jsxs("div",{className:t.miniNav,children:[e.jsx(q,{href:"#",svgPath:V,children:"Til Min side"}),e.jsx(S,{svgPath:J,children:"Skriv ut"})]}),e.jsxs("div",{className:t.article,children:[e.jsx(U,{as:"h1",level:1,hasSpacing:!0,children:"Skjematittel"}),e.jsxs(d,{hasSpacing:!0,children:[e.jsx(d.Element,{term:"Navn",children:m.name}),e.jsx(d.Element,{term:"Fødselsnummer",children:O(m.personId)})]}),e.jsx(p,{className:t.wideContent,hasSpacing:!0,children:e.jsx("i",{children:"Alle felt må fylles ut med mindre feltet er merket valgfritt."})})]}),e.jsxs(E,{className:t.marginBottomL,children:[o>=1&&e.jsxs(E.Step,{title:"Kort beskrivelse av steg",titleAs:"h2",stepNumber:1,variant:o===1?"active":"passive",nextButtonProps:{ariaDescribedby:"infoNextButton"},shouldAutoFocusWhenActive:!1,onNext:D,onEdit:o>1?()=>N(1):void 0,children:[o===1&&e.jsxs(e.Fragment,{children:[e.jsx(p,{className:t.marginTopM,hasSpacing:!0,children:"Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene."}),e.jsxs(C,{legend:"Har du norsk adresse?",selectedValue:i,errorMessage:$,onBlur:b,onChange:n=>{k(""),w(n.target.value)},children:[e.jsx(C.Radio,{value:"ja",children:"Ja, har norsk adresse"}),e.jsx(C.Radio,{value:"nei",children:"Nei, har ikke norsk adresse"})]}),i==="ja"&&e.jsxs(e.Fragment,{children:[e.jsx(h,{id:"input_address",label:"Postadresse",className:t.address,value:s.address,errorMessage:l.address,hasSpacing:!0,required:!0,onChange:x("address"),onBlur:n=>y("address",n.target.value)}),e.jsxs("div",{className:t.flexWrap,children:[e.jsx(h,{id:"input_postalCode",label:"Postnummer",className:`${t.postalCode} ${t.marginRightM}`,classNames:{errorMessage:t.noWrap},value:s.postalCode,inputMode:"numeric",pattern:"[0-9]{4}",maxLength:4,minLength:4,errorMessage:l.postalCode,hasSpacing:!0,required:!0,onChange:x("postalCode"),onBlur:n=>y("postalCode",n.target.value)}),e.jsx(h,{label:"Poststed",className:t.city,value:s.city,hasSpacing:!0,required:!0,readOnly:!0})]}),e.jsx(h,{id:"input_phone",label:"Telefonnummer",classNames:{textbox:t.phone},value:s.phone,inputMode:"tel",pattern:"[0-9+ ]*",errorMessage:l.phone,required:!0,onChange:x("phone"),onBlur:n=>y("phone",n.target.value)}),e.jsx(P,{showErrorSummary:F,className:t.marginTopM,title:"For å gå videre må du rette opp i følgende:",titleAs:"h3",children:Object.entries(l).filter(([n,r])=>r).map(([n,r])=>e.jsx(P.Error,{referenceId:`input_${n}`,children:r},n))})]}),i==="nei"&&e.jsx(p,{children:"Felter med utenlandsk format eller tilsvarende"})]}),o>1&&e.jsx("div",{className:t.flexWrap,children:e.jsx(p,{className:t.marginRightM,children:i==="ja"?`${m.name}, ${s.address}, ${s.postalCode}, ${s.city}, ${B(s.phone)}`:`${m.name}, Utenlandsk adresse`})})]}),o===2&&e.jsx(E.Step,{title:"Oppsummering før innsending",titleAs:"h2",stepNumber:2,nextButtonText:"Send inn",variant:o===2?"active":"passive",onNext:f?H("Sidetyper/Ekstern/Kvittering","Kvittering"):A,children:e.jsx(I,{color:"ochre",className:t.marginTopM,children:e.jsxs(I.Content,{children:[e.jsxs(d,{hasSpacing:!0,children:[e.jsx(d.Element,{term:"Innsender",children:m.name}),e.jsx(d.Element,{term:"Adresse",children:e.jsx("span",{className:t.preLine,children:i==="ja"?`${s.address}
${s.postalCode} ${s.city}`:"Utenlandsk adresse"})}),i&&e.jsx(d.Element,{term:"Telefon",children:B(s.phone)})]}),e.jsx(K,{checked:f,errorMessage:R,required:!0,onBlur:f?void 0:A,onChange:n=>{M(""),L(n.target.checked)},children:"Jeg bekrefter at opplysningene over stemmer."})]})})})]}),e.jsxs("div",{className:t.article,children:[e.jsxs("div",{className:t.flexWrap,children:[e.jsx(S,{className:`${t.marginRightM} ${t.marginBottomM}`,children:"Lagre og fortsett senere"}),e.jsx(S,{className:t.marginBottomM,children:"Avbryt og slett"})]}),e.jsx(p,{id:"infoNextButton",hasSpacing:!0,children:e.jsx("i",{children:"Når du klikker på «Neste», blir informasjonen som du har skrevet inn automatisk lagret."})})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...g.parameters?.docs?.source}}};const He=["SkjemaMedSteg"];export{g as SkjemaMedSteg,He as __namedExportsOrder,Oe as default};
//# sourceMappingURL=SkjemaMedSteg.stories-zXATn4e5.js.map
