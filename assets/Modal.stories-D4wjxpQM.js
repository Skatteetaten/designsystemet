import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as o}from"./index-ClcD9ViR.js";import{B as s,b as H}from"./index-CEFmy_Ic.js";import{s as X,d as y,u as z}from"./index-BYKicpQW.js";import{R as M}from"./index-DEJUArlV.js";import{g as G,I as J,U}from"./index-C8q4C1To.js";import{g as Q,a as K,b as q,c as Y,M as f}from"./index-C22RbeRZ.js";import{P as l,L as S}from"./index-7bHEsQL_.js";import{c as t}from"./helpers-Q4uYuiE4.js";import{f as Z,w as O}from"./wait-alert-illustration-CyF06_2L.js";import{l as $}from"./storybook.testing.utils-CMs160i9.js";import{e as x}from"./stories.utils-BbHpJfAb.js";const ee={component:f,title:"Komponenter/Modal",argTypes:{children:{control:{disable:!0},table:{category:t.props}},classNames:{control:{disable:!0},table:{category:t.props}},dismissOnEsc:{table:{category:t.props,defaultValue:{summary:Y().toString()}}},dismissOnOutsideClick:{table:{category:t.props,defaultValue:{summary:q().toString()}}},hideCloseButton:{table:{category:t.props}},hideTitle:{table:{category:t.props}},imageSource:{table:{category:t.props},control:"select",options:["",Z,O]},imageSourceAltText:{table:{category:t.props}},padding:{table:{category:t.props,defaultValue:{summary:K()}}},renderIcon:{table:{category:t.props},control:"select",options:["","Icon","Logo"],mapping:{"":"",Icon:()=>e.jsx(G,{size:"extraLarge"}),Logo:()=>e.jsx("img",{src:X,alt:"Skatteetaten logo",className:"logo"})}},shadowRootNode:{control:!1,table:{control:!1,category:t.props}},title:{table:{category:t.props}},variant:{table:{category:t.props,defaultValue:{summary:Q()}}},onClose:{control:{disable:!0},table:{category:t.event}}},args:{children:e.jsx(l,{children:$}),title:"Modal title"}},k={render:d=>{const r=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>{var n;return(n=r.current)==null?void 0:n.showModal()},children:"Åpne modal"}),e.jsx(f,{...d,ref:r,children:d.children})]})}},m={render:d=>{const r=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>{var n;return(n=r.current)==null?void 0:n.showModal()},children:"Nye opplysninger"}),e.jsxs(f,{ref:r,title:"Vil du erstatte nye opplysninger fra fil?",children:[e.jsx(l,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),e.jsxs("div",{className:"flex",children:[e.jsx(s,{className:"marginRightM",children:"Erstatt opplysninger"}),e.jsx(s,{variant:"tertiary",onClick:()=>{var n;return(n=r.current)==null?void 0:n.close()},children:"Avbryt"})]})]})]})}};m.parameters=x;const u={render:d=>{const r=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"tertiary",svgPath:J,onClick:()=>{var n;return(n=r.current)==null?void 0:n.showModal()},children:"Viktig driftsmelding"}),e.jsxs(f,{ref:r,variant:"important",title:"Viktig melding!",children:[e.jsx(l,{hasSpacing:!0,children:"Løsningen er ikke kommet i drift ennå eller tatt ned for vedlikehold."}),e.jsx("div",{className:"modalLink",children:e.jsx(H,{href:"#",onClick:()=>{var n;return(n=r.current)==null?void 0:n.close()},children:"Les mer på skatteetaten.no"})})]})]})}};u.parameters=x;const g={render:function(r){const n=o.useRef(null),[h,i]=o.useState(12e5),j=o.useRef(new Date().getTime()),v=()=>{j.current=new Date().getTime()},b=()=>{var a;(a=n.current)==null||a.close(),v()};return o.useEffect(()=>{const c=setInterval(()=>{var w;new Date().getTime()-j.current>=h&&((w=n.current)==null||w.showModal())},1e3);return()=>clearInterval(c)},[h]),o.useEffect(()=>{const a=new AbortController,{signal:c}=a;return window.addEventListener("keydown",v,{signal:c}),window.addEventListener("mousemove",v,{signal:c}),window.addEventListener("scroll",v,{signal:c}),window.addEventListener("resize",v,{signal:c}),()=>{a.abort()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",className:"bottomSpacingXL",onClick:()=>{var a;return(a=n.current)==null?void 0:a.showModal()},children:"Vis ventevarsel"}),e.jsxs(M,{legend:"Ventevarseleksempel åpnes automatisk etter",helpText:"Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.",selectedValue:h,onChange:a=>i(Number(a.target.value)),children:[e.jsx(M.Radio,{value:12e5,children:"20 minutter (anbefalt i løsninger)"}),e.jsx(M.Radio,{value:5e3,children:"5 sekunder"})]}),e.jsxs(f,{ref:n,title:y.t("ds_overlays:modal.WaitNoticeTitle"),imageSource:O,imageSourceAltText:y.t("ds_overlays:modal.WaitNoticeImageAltText"),onClose:b,children:[e.jsx(l,{hasSpacing:!0,children:y.t("ds_overlays:modal.WaitNoticeParagraph")}),e.jsx(s,{onClick:()=>{b()},children:y.t("ds_overlays:modal.StayLoggedIn")})]})]})}};g.parameters=x;const p={render:function(r){const n=o.useRef(null),h=z("(min-width: 640px)");return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"danger",onClick:()=>{var i;return(i=n.current)==null?void 0:i.showModal()},children:"Åpne feilmeldingsmodal"}),e.jsxs(f,{ref:n,title:"Beklager, noe gikk galt",padding:h?"mega":"m",renderIcon:()=>e.jsx(G,{size:"extraLarge"}),children:[e.jsx(l,{hasSpacing:!0,children:"Vi klarte ikke å hente skjemet akkurat nå."}),e.jsx(l,{className:"bold",children:"Du kan prøve å"}),e.jsxs(S,{hasSpacing:!0,children:[e.jsxs(S.Element,{children:["vente noen minutter og ",e.jsx("a",{href:"#link",children:"laste inn siden på nytt"})]}),e.jsx(S.Element,{children:e.jsx("a",{href:"#link",children:"gå tilbake til forrige side"})})]}),e.jsxs(l,{hasSpacing:!0,children:["Hvis du fortsatt har problemer kan du ",e.jsx("a",{href:"#link",children:"kontakte oss"})]}),e.jsx(s,{className:"exampleSpacing",svgPath:U,onClick:()=>{var i;return(i=n.current)==null?void 0:i.close()},children:"Last inn siden på nytt"}),e.jsx(s,{variant:"secondary",href:"#",children:"Gå til forsiden"})]})]})}};p.parameters=x;var L,E,T;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(E=k.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var I,R,C;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(R=m.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var V,P,B;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(P=u.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var D,N,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function Render(_args): JSX.Element {
    const refModalWait = useRef<HTMLDialogElement>(null);
    const [time, setTime] = useState<number>(1200000);
    const lastActivity = useRef(new Date().getTime());
    const resetTimer = (): void => {
      lastActivity.current = new Date().getTime();
    };
    const closeDialog = (): void => {
      refModalWait.current?.close();
      resetTimer();
    };
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
      const abortController = new AbortController();
      const {
        signal
      } = abortController;
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
        abortController.abort();
      };
    }, []);
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
} satisfies Story`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var W,A,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: function Render(_args): JSX.Element {
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
} satisfies Story`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const ne=["Preview","Samtykkemodal","ViktigMelding","Ventevarsel","Feilmeldingsmodal"],fe=Object.freeze(Object.defineProperty({__proto__:null,Feilmeldingsmodal:p,Preview:k,Samtykkemodal:m,Ventevarsel:g,ViktigMelding:u,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{p as F,fe as M,m as S,u as V,g as a};
//# sourceMappingURL=Modal.stories-D4wjxpQM.js.map
