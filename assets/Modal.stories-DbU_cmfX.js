import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{B as s,b as O}from"./index-U0B695k8.js";import{s as H,d as v,u as X}from"./index--O6iZ70i.js";import{R as x}from"./index-GOkwpqhH.js";import{g as F,I as z,U as J}from"./index-BWc9jU-Q.js";import{M as p,g as U,a as Q,b as K,c as q}from"./index-D1gqbwNK.js";import{P as l,L as M}from"./index-BaCHQVlv.js";import{c as r}from"./helpers-Dccz2jQ-.js";import{f as Y,w as G}from"./wait-alert-illustration-CyF06_2L.js";import{l as Z}from"./storybook.testing.utils-CMs160i9.js";import{e as k}from"./stories.utils-Ys3NG0dr.js";const $={component:p,title:"Komponenter/Modal",argTypes:{children:{control:{disable:!0},table:{category:r.props}},classNames:{control:{disable:!0},table:{category:r.props}},dismissOnEsc:{table:{category:r.props,defaultValue:{summary:U().toString()}}},dismissOnOutsideClick:{table:{category:r.props,defaultValue:{summary:Q().toString()}}},hideCloseButton:{table:{category:r.props}},hideTitle:{table:{category:r.props}},imageSource:{table:{category:r.props},control:"select",options:["",Y,G]},imageSourceAltText:{table:{category:r.props}},padding:{table:{category:r.props,defaultValue:{summary:K()}}},renderIcon:{table:{category:r.props},control:"select",options:["","Icon","Logo"],mapping:{"":"",Icon:()=>e.jsx(F,{size:"extraLarge"}),Logo:()=>e.jsx("img",{src:H,alt:"Skatteetaten logo",className:"logo"})}},shadowRootNode:{control:!1,table:{control:!1,category:r.props}},title:{table:{category:r.props}},variant:{table:{category:r.props,defaultValue:{summary:q()}}},onClose:{control:{disable:!0},table:{category:r.event}}},args:{children:e.jsx(l,{children:Z}),title:"Modal title"}},h={render:d=>{const t=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Åpne modal"}),e.jsx(p,{...d,ref:t,children:d.children})]})}},c={render:d=>{const t=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Nye opplysninger"}),e.jsxs(p,{ref:t,title:"Vil du erstatte nye opplysninger fra fil?",children:[e.jsx(l,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),e.jsxs("div",{className:"flex",children:[e.jsx(s,{className:"marginRightM",children:"Erstatt opplysninger"}),e.jsx(s,{variant:"tertiary",onClick:()=>{var n;return(n=t.current)==null?void 0:n.close()},children:"Avbryt"})]})]})]})}};c.parameters=k;const m={render:d=>{const t=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"tertiary",svgPath:z,onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Viktig driftsmelding"}),e.jsxs(p,{ref:t,variant:"important",title:"Viktig melding!",children:[e.jsx(l,{hasSpacing:!0,children:"Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold."}),e.jsx("div",{className:"modalLink",children:e.jsx(O,{href:"#",onClick:()=>{var n;return(n=t.current)==null?void 0:n.close()},children:"Les mer på skatteetaten.no"})})]})]})}};m.parameters=k;const g={render:d=>{const t=o.useRef(null),[n,i]=o.useState(12e5),S=o.useRef(new Date().getTime());o.useEffect(()=>{const y=setInterval(()=>{var w;new Date().getTime()-S.current>=n&&((w=t.current)==null||w.showModal())},1e3);return()=>clearInterval(y)},[n]),o.useEffect(()=>{const{signal:a,abort:y}=new AbortController;return window.addEventListener("keydown",f,{signal:a}),window.addEventListener("mousemove",f,{signal:a}),window.addEventListener("scroll",f,{signal:a}),window.addEventListener("resize",f,{signal:a}),()=>{y()}},[]);const f=()=>{S.current=new Date().getTime()},j=()=>{var a;(a=t.current)==null||a.close(),f()};return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",className:"bottomSpacingXL",onClick:()=>{var a;return(a=t.current)==null?void 0:a.showModal()},children:"Vis ventevarsel"}),e.jsxs(x,{legend:"Ventevarseleksempel åpnes automatisk etter",helpText:"Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.",selectedValue:n,onChange:a=>i(Number(a.target.value)),children:[e.jsx(x.Radio,{value:12e5,children:"20 minutter (anbefalt i løsninger)"}),e.jsx(x.Radio,{value:5e3,children:"5 sekunder"})]}),e.jsxs(p,{ref:t,title:v.t("ds_overlays:modal.WaitNoticeTitle"),imageSource:G,imageSourceAltText:v.t("ds_overlays:modal.WaitNoticeImageAltText"),onClose:j,children:[e.jsx(l,{hasSpacing:!0,children:v.t("ds_overlays:modal.WaitNoticeParagraph")}),e.jsx(s,{onClick:()=>{j()},children:v.t("ds_overlays:modal.StayLoggedIn")})]})]})}};g.parameters=k;const u={render:d=>{const t=o.useRef(null),n=X("(min-width: 640px)");return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"danger",onClick:()=>{var i;return(i=t.current)==null?void 0:i.showModal()},children:"Åpne feilmeldingsmodal"}),e.jsxs(p,{ref:t,title:"Beklager, noe gikk galt",padding:n?"mega":"m",renderIcon:()=>e.jsx(F,{size:"extraLarge"}),children:[e.jsx(l,{hasSpacing:!0,children:"Vi klarte ikke å hente skjemet akkurat nå."}),e.jsx(l,{className:"bold",children:"Du kan prøve å"}),e.jsxs(M,{hasSpacing:!0,children:[e.jsxs(M.Element,{children:["vente noen minutter og ",e.jsx("a",{href:"#link",children:"laste inn siden på nytt"})]}),e.jsx(M.Element,{children:e.jsx("a",{href:"#link",children:"gå tilbake til forrige side"})})]}),e.jsxs(l,{hasSpacing:!0,children:["Hvis du fortsatt har problemer kan du ",e.jsx("a",{href:"#link",children:"kontakte oss"})]}),e.jsx(s,{className:"exampleSpacing",svgPath:J,onClick:()=>{var i;return(i=t.current)==null?void 0:i.close()},children:"Last inn siden på nytt"}),e.jsx(s,{variant:"secondary",href:"#",children:"Gå til forsiden"})]})]})}};u.parameters=k;var b,L,E;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <Button onClick={(): void => ref.current?.showModal()}>
          {'Åpne modal'}
        </Button>
        <Modal {...args} ref={ref}>
          {args.children}
        </Modal>
      </>;
  }
} satisfies Story`,...(E=(L=h.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var T,I,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const refModal = useRef<HTMLDialogElement>(null);
    return <>
        <Button onClick={(): void => refModal.current?.showModal()}>
          {'Nye opplysninger'}
        </Button>
        <Modal ref={refModal} title={'Vil du erstatte nye opplysninger fra fil?'}>
          <Paragraph hasSpacing>
            {'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'}
          </Paragraph>
          <div className={'flex'}>
            <Button className={'marginRightM'}>{'Erstatt opplysninger'}</Button>
            <Button variant={'tertiary'} onClick={(): void => refModal.current?.close()}>
              {'Avbryt'}
            </Button>
          </div>
        </Modal>
      </>;
  }
} satisfies Story`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,P,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const refModalImportant = useRef<HTMLDialogElement>(null);
    return <>
        <Button variant={'tertiary'} svgPath={InfoOutlineSVGpath} onClick={(): void => refModalImportant.current?.showModal()}>
          {'Viktig driftsmelding'}
        </Button>
        <Modal ref={refModalImportant} variant={'important'} title={'Viktig melding!'}>
          <Paragraph hasSpacing>
            {'Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold.'}
          </Paragraph>
          <div className={'modalLink'}>
            <Link href={'#'} onClick={(): void => refModalImportant.current?.close()}>
              {'Les mer på skatteetaten.no'}
            </Link>
          </div>
        </Modal>
      </>;
  }
} satisfies Story`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var C,D,N;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const refModalWait = useRef<HTMLDialogElement>(null);
    const [time, setTime] = useState<number>(1200000);
    const lastActivity = useRef(new Date().getTime());
    useEffect(() => {
      const checkExpiredTime = (): void => {
        const timePassed = new Date().getTime() - lastActivity.current;
        if (timePassed >= time) {
          refModalWait.current?.showModal();
        }
      };
      const intervalId = setInterval(checkExpiredTime, 1000);
      return (): void => clearInterval(intervalId);
    }, [time]);
    useEffect(() => {
      const {
        signal,
        abort
      } = new AbortController();
      window.addEventListener('keydown', resetTimer, {
        signal
      });
      window.addEventListener('mousemove', resetTimer, {
        signal
      });
      window.addEventListener('scroll', resetTimer, {
        signal
      });
      window.addEventListener('resize', resetTimer, {
        signal
      });
      return (): void => {
        abort();
      };
    }, []);
    const resetTimer = (): void => {
      lastActivity.current = new Date().getTime();
    };
    const closeDialog = (): void => {
      refModalWait.current?.close();
      resetTimer();
    };
    return <>
        <Button variant={'secondary'} className={'bottomSpacingXL'} onClick={(): void => refModalWait.current?.showModal()}>
          {'Vis ventevarsel'}
        </Button>
        <RadioGroup legend={'Ventevarseleksempel åpnes automatisk etter'} helpText={'Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.'} selectedValue={time} onChange={(e): void => setTime(Number(e.target.value))}>
          <RadioGroup.Radio value={1200000}>
            {'20 minutter (anbefalt i løsninger)'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={5000}>{'5 sekunder'}</RadioGroup.Radio>
        </RadioGroup>
        <Modal ref={refModalWait} title={dsI18n.t('ds_overlays:modal.WaitNoticeTitle')} imageSource={waitIllustration} imageSourceAltText={dsI18n.t('ds_overlays:modal.WaitNoticeImageAltText')} onClose={closeDialog}>
          <Paragraph hasSpacing>
            {dsI18n.t('ds_overlays:modal.WaitNoticeParagraph')}
          </Paragraph>
          <Button onClick={(): void => {
          closeDialog();
        }}>
            {dsI18n.t('ds_overlays:modal.StayLoggedIn')}
          </Button>
        </Modal>
      </>;
  }
} satisfies Story`,...(N=(D=g.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,W,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const refModalFeil = useRef<HTMLDialogElement>(null);
    const isBigScreen = useMediaQuery('(min-width: 640px)');
    return <>
        <Button variant={'danger'} onClick={(): void => refModalFeil.current?.showModal()}>
          {'Åpne feilmeldingsmodal'}
        </Button>
        <Modal ref={refModalFeil} title={'Beklager, noe gikk galt'} padding={isBigScreen ? 'mega' : 'm'} renderIcon={(): JSX.Element => <WarningOutlineIcon size={'extraLarge'} />}>
          <Paragraph hasSpacing>
            {'Vi klarte ikke å hente skjemet akkurat nå.'}
          </Paragraph>
          <Paragraph className={'bold'}>{'Du kan prøve å'}</Paragraph>
          <List hasSpacing>
            <List.Element>
              {'vente noen minutter og '}
              <a href={'#link'}>{'laste inn siden på nytt'}</a>
            </List.Element>
            <List.Element>
              <a href={'#link'}>{'gå tilbake til forrige side'}</a>
            </List.Element>
          </List>
          <Paragraph hasSpacing>
            {'Hvis du fortsatt har problemer kan du '}
            <a href={'#link'}>{'kontakte oss'}</a>
          </Paragraph>
          <Button className={'exampleSpacing'} svgPath={UpdateSVGpath} onClick={(): void => refModalFeil.current?.close()}>
            {'Last inn siden på nytt'}
          </Button>
          <Button variant={'secondary'} href={'#'}>
            {'Gå til forsiden'}
          </Button>
        </Modal>
      </>;
  }
} satisfies Story`,...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const ee=["Preview","Samtykkemodal","ViktigMelding","Ventevarsel","Feilmeldingsmodal"],pe=Object.freeze(Object.defineProperty({__proto__:null,Feilmeldingsmodal:u,Preview:h,Samtykkemodal:c,Ventevarsel:g,ViktigMelding:m,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{u as F,pe as M,c as S,m as V,g as a};
//# sourceMappingURL=Modal.stories-DbU_cmfX.js.map
