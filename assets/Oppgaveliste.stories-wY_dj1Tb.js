import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{l as f}from"./chunk-FJGFNJ3B-C_Q3UZfH.js";import{B as S,I as g,b}from"./index-Du3yX_TW.js";import{D as o,P as L,a as j}from"./index-DtTKNpP0.js";import{h as y}from"./index-CGk5cNE3.js";import{Q as _,a8 as I,S as B,v as T,a9 as N}from"./index-CgEl4Pzg.js";import{B as t}from"./index-CxZaSSAf.js";import{T as E}from"./index-krISk8b9.js";import{H as c}from"./index-DXWIZOJk.js";import{i as w}from"./helpers-B90wjoUE.js";import{w as D}from"./pagelayout-decorator-CCdyBq3P.js";import"./index-Cu4lwwaE.js";import"./index-uxUkjR_c.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-palH82_U.js";import"./index-BuHbB7kV.js";import"./DatePickerCalendar-wzrlqniL.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./TopBannerButton-nMBjyS0d.js";import"./floating-ui.react-ayiMHenP.js";import"./index-D9u29hOa.js";import"./TopBannerLangPicker-CgqTpUMW.js";import"./TopBannerLangPickerButton-B4IymQya.js";import"./TopBannerLogo-CQvHH4Ba.js";import"./TopBannerSkipLink-DV7Ysy1E.js";import"./TopBannerUserButton-CmmWVGv5.js";import"./index-hcTrRhi3.js";const M="_mainExternal_fh08h_1",z="_marginRightButton_fh08h_8",P="_task_fh08h_12",C="_taskLink_fh08h_17",O="_article_fh08h_26",H="_heading_fh08h_31",V="_panel_fh08h_35",R="_headingIcon_fh08h_39",X="_marginTopXl_fh08h_76",F="_marginTopM_fh08h_80",G="_sendInButton_fh08h_84",$="_resetList_fh08h_88",A="_resetListElement_fh08h_94",e={mainExternal:M,marginRightButton:z,task:P,taskLink:C,article:O,heading:H,panel:V,headingIcon:R,marginTopXl:X,marginTopM:F,sendInButton:G,resetList:$,resetListElement:A},J=`.mainExternal {
  width: var(--semantic-responsive-container);
  box-sizing: border-box;
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
`,jn={title:"Sidetyper/Ekstern/Oppgaveliste (beta)",decorators:[D],parameters:{layout:"fullscreen",controls:{disable:!0},docs:{source:{transform:w(J)}}}},l=()=>{const u=y("(min-width: 480px)"),k=[{text:"Sjekk om du må sende inn",status:2},{text:"Sjekk tilgang og rettigheter",status:2}],x=[{text:"Bekreft virksomhetsopplysninger",status:1},{text:"Kontaktopplysninger",status:1},{text:"Dokumentasjon (Statens Vegvesen)",status:3},{text:"Liste over personer",status:0},{text:"Samtykke og innsending",status:1}],m=s=>{let a="forest";switch(s.status){case 3:a="burgundy";break;case 1:a="graphite";break;case 0:a="ochre";break}let r="Ferdig";switch(s.status){case 3:r="Mangler";break;case 1:r="Ikke startet";break;case 0:r="I gang";break}let i=T;switch(s.status){case 3:i=N;break;case 1:i=void 0;break;case 0:i=void 0;break}return n.jsxs("li",{className:e.resetListElement,children:[n.jsxs("div",{className:e.task,children:[n.jsx(b,{className:e.taskLink,href:"#",onClick:v=>{v.preventDefault(),f("Sidetyper/Ekstern/Oppgaveliste (beta)","Deloppgave")()},children:s.text}),n.jsx("div",{children:n.jsx(E,{color:a,svgPath:i,size:u?"medium":"small",children:r})})]}),n.jsx(j,{})]},s.text)};return n.jsxs("main",{className:e.mainExternal,children:[n.jsx(t,{className:e.marginTopM,children:n.jsxs(t.List,{children:[n.jsx(t.Item,{children:n.jsx(t.Link,{href:"#",children:"Min side"})}),n.jsx(t.Item,{children:n.jsx(t.Link,{href:"#",children:"Løsning"})}),n.jsx(t.Item,{children:n.jsx(t.Link,{href:"#",children:"Rytmisk musikkutdanning"})})]})}),n.jsxs("div",{className:e.article,children:[n.jsx(c,{as:"h1",level:1,hasSpacing:!0,children:"Innrapportering for rytmisk musikkutdanning"}),n.jsxs(o,{hasSpacing:!0,children:[n.jsx(o.Element,{term:"Virksomhetetns navn",children:"Høssing Funk Skole"}),n.jsx(o.Element,{term:"Organisasjonsnummer",children:"999 999 999"}),n.jsx(o.Element,{term:"Inntektsår",children:"2025"})]}),n.jsxs(c,{as:"h2",className:e.heading,level:2,hasSpacing:!0,children:[n.jsx("span",{className:e.headingIcon,children:n.jsx(_,{})}),"Sjekk før du starter"]}),n.jsx("ul",{className:e.resetList,children:k.map(m)}),n.jsxs(c,{as:"h2",className:`${e.heading} ${e.marginTopXl}`,level:2,hasSpacing:!0,children:[n.jsx("span",{className:e.headingIcon,children:n.jsx(I,{})}),"Forbered søknad"]}),n.jsx("ul",{className:e.resetList,children:x.map(m)}),n.jsx(S,{className:e.sendInButton,svgPath:B,children:"Se over og send inn"})]}),n.jsxs(L,{className:e.panel,variant:"filled",color:"graphite",spacing:"xxl",padding:"m",children:[n.jsx(g,{className:e.marginRightButton,children:"Lagre og fortsett senere"}),n.jsx(g,{children:"Avbryt og slett"})]})]})};var d,p,h;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
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
        <Heading as={'h1'} level={1} hasSpacing>
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
        <Heading as={'h2'} className={styles.heading} level={2} hasSpacing>
          <span className={styles.headingIcon}>
            <CheckIcon />
          </span>
          {'Sjekk før du starter'}
        </Heading>
        <ul className={styles.resetList}>{checkTasks.map(createTask)}</ul>
        <Heading as={'h2'} className={\`\${styles.heading} \${styles.marginTopXl}\`} level={2} hasSpacing>
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
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const yn=["Oppgaveliste"];export{l as Oppgaveliste,yn as __namedExportsOrder,jn as default};
//# sourceMappingURL=Oppgaveliste.stories-wY_dj1Tb.js.map
