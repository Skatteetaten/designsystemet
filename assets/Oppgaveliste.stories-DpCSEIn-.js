import{A as k,m as x,j as n,B as v}from"./iframe-CBOQuZmX.js";import{B as S,I as g,b}from"./index-BxmwhRWV.js";import{D as o,P as j,a as f}from"./index-haEYng38.js";import{X as L,ae as y,S as _,y as B,af as I}from"./index-tEZUkoN5.js";import{B as t}from"./index-Dv_ndgGc.js";import{T}from"./index-Zmgbh9ba.js";import{H as c}from"./index-B4-BoLKC.js";import{w as N}from"./pagelayout-decorator-BNDkzn4v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSgUqAK2.js";import"./index-CHesE-0v.js";import"./index-D76sDZza.js";import"./DatePickerCalendar-DF1H3gtV.js";import"./LabelWithHelp-vli_xocL.js";import"./Help-4dQh7YC4.js";import"./Combobox.module-C9fS7084.js";import"./ComboboxButton-BoJZJCCB.js";import"./ComboboxSelectedOptions-Dx5LiZBO.js";import"./index-BYntwts4.js";import"./TopBannerButton-DyppBcwQ.js";import"./floating-ui.react-D2pFwR57.js";import"./index-CT7HSXc_.js";import"./index-BcO1AqEL.js";import"./TopBannerLangPicker-SaEGrlJh.js";import"./TopBannerLangPickerButton-CTBwZLn0.js";import"./TopBannerLogo-BPliLnu3.js";import"./TopBannerSkipLink-BOHWWP6f.js";import"./TopBannerUserButton-etZa22Zn.js";import"./index-B2Uv0TYg.js";import"./TopBannerExternalExample.module-D-cyqUXs.js";const E="_mainExternal_ss5jo_1",w="_marginRightButton_ss5jo_9",D="_task_ss5jo_13",M="_taskLink_ss5jo_18",z="_article_ss5jo_27",P="_heading_ss5jo_32",C="_panel_ss5jo_36",O="_headingIcon_ss5jo_40",H="_marginTopXl_ss5jo_77",V="_marginTopM_ss5jo_81",X="_sendInButton_ss5jo_85",R="_resetList_ss5jo_89",F="_resetListElement_ss5jo_95",e={mainExternal:E,marginRightButton:w,task:D,taskLink:M,article:z,heading:P,panel:C,headingIcon:O,marginTopXl:H,marginTopM:V,sendInButton:X,resetList:R,resetListElement:F},G=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
  flex: 1;
  padding: var(--semantic-responsive-container-spacing);
  margin: auto;
}

.marginRightButton {
  margin-right: var(--spacing-l);
}

.task {
  display: flex;
  justify-content: space-between;
}

.taskLink {
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);

  @media (width >= 480px) {
    font-size: var(--font-size-m);
  }
}

.article {
  max-width: var(--semantic-responsive-article);
  margin: var(--spacing-xl) auto 0;
}

.heading {
  position: relative;
}

.panel {
  margin: 0 auto;
}

.headingIcon {
  position: absolute;
  left: calc(-1 * (var(--size-extra-large) + var(--spacing-l)));
  display: none;
  width: var(--size-extra-large);
  height: var(--size-extra-large);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--palette-graphite-70);
  border-radius: 50%;
  background: var(--step-circle-background);
  color: var(--step-circle-foreground);
  outline-offset: 2px;

  @media (width >= 1024px) {
    display: flex;
  }

  &_passive {
    border: 2px solid var(--palette-graphite-70);
  }

  &_active {
    border: none;
    font-weight: var(--font-weight-bold);
    outline: 2px solid var(--semantic-interactive-main);
  }

  &Icon {
    width: var(--size-large);
    min-width: var(--size-large);
    height: var(--size-large);
    fill: var(--step-circle-foreground);
  }
}

.marginTopXl {
  margin-top: var(--spacing-xl);
}

.marginTopM {
  margin-top: var(--spacing-m);
}

.sendInButton {
  margin: var(--spacing-xxl) 0 var(--spacing-m);
}

.resetList {
  padding: 0;
  margin: 0;
  list-style: none;
}

.resetListElement {
  padding: 0;
  margin: 0;
}
`,jn={title:"Sidetyper/Ekstern/Oppgaveliste (beta)",decorators:[N],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:k(G)}}}},l=()=>{const d=x("(min-width: 480px)"),p=[{text:"Sjekk om du må sende inn",status:2},{text:"Sjekk tilgang og rettigheter",status:2}],u=[{text:"Bekreft virksomhetsopplysninger",status:1},{text:"Kontaktopplysninger",status:1},{text:"Dokumentasjon (Statens Vegvesen)",status:3},{text:"Liste over personer",status:0},{text:"Samtykke og innsending",status:1}],m=s=>{let a="forest";switch(s.status){case 3:a="burgundy";break;case 1:a="graphite";break;case 0:a="ochre";break}let r="Ferdig";switch(s.status){case 3:r="Mangler";break;case 1:r="Ikke startet";break;case 0:r="I gang";break}let i=B;switch(s.status){case 3:i=I;break;case 1:i=void 0;break;case 0:i=void 0;break}return n.jsxs("li",{className:e.resetListElement,children:[n.jsxs("div",{className:e.task,children:[n.jsx(b,{className:e.taskLink,href:"#",onClick:h=>{h.preventDefault(),v("Sidetyper/Ekstern/Oppgaveliste (beta)","Deloppgave")()},children:s.text}),n.jsx("div",{children:n.jsx(T,{color:a,svgPath:i,size:d?"medium":"small",children:r})})]}),n.jsx(f,{})]},s.text)};return n.jsxs("main",{className:e.mainExternal,children:[n.jsx(t,{className:e.marginTopM,children:n.jsxs(t.List,{children:[n.jsx(t.Item,{children:n.jsx(t.Link,{href:"#",children:"Min side"})}),n.jsx(t.Item,{children:n.jsx(t.Link,{href:"#",children:"Løsning"})}),n.jsx(t.Item,{children:n.jsx(t.Link,{href:"#",children:"Rytmisk musikkutdanning"})})]})}),n.jsxs("div",{className:e.article,children:[n.jsx(c,{as:"h1",hasSpacing:!0,children:"Innrapportering for rytmisk musikkutdanning"}),n.jsxs(o,{hasSpacing:!0,children:[n.jsx(o.Element,{term:"Virksomhetetns navn",children:"Høssing Funk Skole"}),n.jsx(o.Element,{term:"Organisasjonsnummer",children:"999 999 999"}),n.jsx(o.Element,{term:"Inntektsår",children:"2025"})]}),n.jsxs(c,{as:"h2",className:e.heading,hasSpacing:!0,children:[n.jsx("span",{className:e.headingIcon,children:n.jsx(L,{})}),"Sjekk før du starter"]}),n.jsx("ul",{className:e.resetList,children:p.map(m)}),n.jsxs(c,{as:"h2",className:`${e.heading} ${e.marginTopXl}`,hasSpacing:!0,children:[n.jsx("span",{className:e.headingIcon,children:n.jsx(y,{})}),"Forbered søknad"]}),n.jsx("ul",{className:e.resetList,children:u.map(m)}),n.jsx(S,{className:e.sendInButton,svgPath:_,children:"Se over og send inn"})]}),n.jsxs(j,{className:e.panel,variant:"filled",color:"graphite",spacing:"xxl",padding:"m",children:[n.jsx(g,{className:e.marginRightButton,children:"Lagre og fortsett senere"}),n.jsx(g,{children:"Avbryt og slett"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width: 480px)');
  const checkTasks: Task[] = [{
    text: 'Sjekk om du må sende inn',
    status: Status.Finished
  }, {
    text: 'Sjekk tilgang og rettigheter',
    status: Status.Finished
  }];
  const prepareTasks: Task[] = [{
    text: 'Bekreft virksomhetsopplysninger',
    status: Status.NotStarted
  }, {
    text: 'Kontaktopplysninger',
    status: Status.NotStarted
  }, {
    text: 'Dokumentasjon (Statens Vegvesen)',
    status: Status.Missing
  }, {
    text: 'Liste over personer',
    status: Status.Started
  }, {
    text: 'Samtykke og innsending',
    status: Status.NotStarted
  }];
  const createTask = (task: Task): JSX.Element => {
    let tagColor: TagColor = 'forest';
    switch (task.status) {
      case Status.Missing:
        tagColor = 'burgundy';
        break;
      case Status.NotStarted:
        tagColor = 'graphite';
        break;
      case Status.Started:
        tagColor = 'ochre';
        break;
    }
    let tagText = 'Ferdig';
    switch (task.status) {
      case Status.Missing:
        tagText = 'Mangler';
        break;
      case Status.NotStarted:
        tagText = 'Ikke startet';
        break;
      case Status.Started:
        tagText = 'I gang';
        break;
    }
    let svgPath: JSX.Element | undefined = CheckSVGpath;
    switch (task.status) {
      case Status.Missing:
        svgPath = WarningOutlineSVGpath;
        break;
      case Status.NotStarted:
        svgPath = undefined;
        break;
      case Status.Started:
        svgPath = undefined;
        break;
    }
    return <li key={task.text} className={styles.resetListElement}>
        <div className={styles.task}>
          <Link className={styles.taskLink} href={'#'} onClick={e => {
          e.preventDefault();
          linkTo('Sidetyper/Ekstern/Oppgaveliste (beta)', 'Deloppgave')();
        }}>
            {task.text}
          </Link>
          <div>
            <Tag color={tagColor} svgPath={svgPath} size={isDesktop ? 'medium' : 'small'}>
              {tagText}
            </Tag>
          </div>
        </div>
        <Divider />
      </li>;
  };
  return <main className={styles.mainExternal}>
      <Breadcrumbs className={styles.marginTopM}>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Min side'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Løsning'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>
              {'Rytmisk musikkutdanning'}
            </Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
      <div className={styles.article}>
        <Heading as={'h1'} hasSpacing>
          {'Innrapportering for rytmisk musikkutdanning'}
        </Heading>
        <DescriptionList hasSpacing>
          <DescriptionList.Element term={'Virksomhetetns navn'}>
            {'Høssing Funk Skole'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Organisasjonsnummer'}>
            {'999 999 999'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Inntektsår'}>
            {'2025'}
          </DescriptionList.Element>
        </DescriptionList>
        <Heading as={'h2'} className={styles.heading} hasSpacing>
          <span className={styles.headingIcon}>
            <CheckIcon />
          </span>
          {'Sjekk før du starter'}
        </Heading>
        <ul className={styles.resetList}>{checkTasks.map(createTask)}</ul>
        <Heading as={'h2'} className={\`\${styles.heading} \${styles.marginTopXl}\`} hasSpacing>
          <span className={styles.headingIcon}>
            <EditIcon />
          </span>
          {'Forbered søknad'}
        </Heading>
        <ul className={styles.resetList}>{prepareTasks.map(createTask)}</ul>
        <Button className={styles.sendInButton} svgPath={SendSVGpath}>
          {'Se over og send inn'}
        </Button>
      </div>

      <Panel className={styles.panel} variant={'filled'} color={'graphite'} spacing={'xxl'} padding={'m'}>
        <InlineButton className={styles.marginRightButton}>
          {'Lagre og fortsett senere'}
        </InlineButton>
        <InlineButton>{'Avbryt og slett'}</InlineButton>
      </Panel>
    </main>;
}`,...l.parameters?.docs?.source}}};const fn=["Oppgaveliste"];export{l as Oppgaveliste,fn as __namedExportsOrder,jn as default};
//# sourceMappingURL=Oppgaveliste.stories-DpCSEIn-.js.map
