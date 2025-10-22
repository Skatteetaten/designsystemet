import{j as e,e as t,s as A,r as o,d as k,l as F}from"./iframe-BoxHncFg.js";import{B as a}from"./index-DyY5joHW.js";import{c as y}from"./index-d7h_eiwz.js";import{h as _,U as G}from"./index-Mlou2Fgf.js";import{g as O,a as H,b as X,c as z,M as v}from"./index-DK27EPS2.js";import{P as u,L as x}from"./index-COS0aIOi.js";import{f as J,w as W}from"./wait-alert-illustration-DhQ8WfaC.js";import{l as U}from"./storybook.testing.utils-CMs160i9.js";import{e as M}from"./stories.utils-CZ5hej_8.js";const Q={component:v,title:"Komponenter/Modal",argTypes:{children:{control:"text",table:{category:t.props}},classNames:{control:{disable:!0},table:{category:t.props}},dismissOnEsc:{table:{category:t.props,defaultValue:{summary:z().toString()}}},dismissOnOutsideClick:{table:{category:t.props,defaultValue:{summary:X().toString()}}},hideCloseButton:{table:{category:t.props}},hideTitle:{table:{category:t.props}},imageSource:{table:{category:t.props},control:"select",options:["",J,W]},imageSourceAltText:{table:{category:t.props}},padding:{table:{category:t.props,defaultValue:{summary:H()}}},renderIcon:{table:{category:t.props},control:"select",options:["","Icon","Logo"],mapping:{"":"",Icon:()=>e.jsx(_,{size:"extraLarge"}),Logo:()=>e.jsx("img",{src:A,alt:"Skatteetaten logo",className:"logo"})}},shadowRootNode:{control:!1,table:{control:!1,category:t.props}},title:{table:{category:t.props}},variant:{table:{category:t.props,defaultValue:{summary:O()}}},onClose:{control:{disable:!0},table:{category:t.event}}},args:{children:e.jsx(u,{children:U}),title:"Modal title"}},h={render:g=>{const s=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{var n;return(n=s.current)==null?void 0:n.showModal()},children:"Åpne modal"}),e.jsx(v,{...g,ref:s,children:g.children})]})}},d={render:g=>{const s=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>{var n;return(n=s.current)==null?void 0:n.showModal()},children:"Nye opplysninger"}),e.jsxs(v,{ref:s,title:"Vil du erstatte nye opplysninger fra fil?",children:[e.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),e.jsxs("div",{className:"flex",children:[e.jsx(a,{className:"marginRightM",children:"Erstatt opplysninger"}),e.jsx(a,{variant:"tertiary",onClick:()=>{var n;return(n=s.current)==null?void 0:n.close()},children:"Avbryt"})]})]})]})}};d.parameters=M;const c={render:function(s){const n=o.useRef(null),[p,l]=o.useState(12e5),S=o.useRef(new Date().getTime()),f=()=>{S.current=new Date().getTime()},j=()=>{var r;(r=n.current)==null||r.close(),f()};return o.useEffect(()=>{const i=setInterval(()=>{var b;new Date().getTime()-S.current>=p&&((b=n.current)==null||b.showModal())},1e3);return()=>clearInterval(i)},[p]),o.useEffect(()=>{const r=new AbortController,{signal:i}=r;return window.addEventListener("keydown",f,{signal:i}),window.addEventListener("mousemove",f,{signal:i}),window.addEventListener("scroll",f,{signal:i}),window.addEventListener("resize",f,{signal:i}),()=>{r.abort()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",className:"bottomSpacingXL",onClick:()=>{var r;return(r=n.current)==null?void 0:r.showModal()},children:"Vis ventevarsel"}),e.jsxs(y,{legend:"Ventevarseleksempel åpnes automatisk etter",helpText:"Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.",selectedValue:p,onChange:r=>l(Number(r.target.value)),children:[e.jsx(y.Radio,{value:12e5,children:"20 minutter (anbefalt i løsninger)"}),e.jsx(y.Radio,{value:5e3,children:"5 sekunder"})]}),e.jsxs(v,{ref:n,title:k.t("ds_overlays:modal.WaitNoticeTitle"),imageSource:W,imageSourceAltText:k.t("ds_overlays:modal.WaitNoticeImageAltText"),onClose:j,children:[e.jsx(u,{hasSpacing:!0,children:k.t("ds_overlays:modal.WaitNoticeParagraph")}),e.jsx(a,{onClick:()=>{j()},children:k.t("ds_overlays:modal.StayLoggedIn")})]})]})}};c.parameters=M;const m={render:function(s){const n=o.useRef(null),p=F("(min-width: 640px)");return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"danger",onClick:()=>{var l;return(l=n.current)==null?void 0:l.showModal()},children:"Åpne feilmeldingsmodal"}),e.jsxs(v,{ref:n,title:"Beklager, noe gikk galt",padding:p?"mega":"m",renderIcon:()=>e.jsx(_,{size:"extraLarge"}),children:[e.jsx(u,{hasSpacing:!0,children:"Vi klarte ikke å hente skjemet akkurat nå."}),e.jsx(u,{className:"bold",children:"Du kan prøve å"}),e.jsxs(x,{hasSpacing:!0,children:[e.jsxs(x.Element,{children:["vente noen minutter og ",e.jsx("a",{href:"#link",children:"laste inn siden på nytt"})]}),e.jsx(x.Element,{children:e.jsx("a",{href:"#link",children:"gå tilbake til forrige side"})})]}),e.jsxs(u,{hasSpacing:!0,children:["Hvis du fortsatt har problemer kan du ",e.jsx("a",{href:"#link",children:"kontakte oss"})]}),e.jsx(a,{className:"exampleSpacing",svgPath:G,onClick:()=>{var l;return(l=n.current)==null?void 0:l.close()},children:"Last inn siden på nytt"}),e.jsx(a,{variant:"secondary",href:"#",children:"Gå til forsiden"})]})]})}};m.parameters=M;var w,E,T;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(E=h.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var L,R,C;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(R=d.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var I,B,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var D,N,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const K=["Preview","Samtykkemodal","Ventevarsel","Feilmeldingsmodal"],oe=Object.freeze(Object.defineProperty({__proto__:null,Feilmeldingsmodal:m,Preview:h,Samtykkemodal:d,Ventevarsel:c,__namedExportsOrder:K,default:Q},Symbol.toStringTag,{value:"Module"}));export{m as F,oe as M,d as S,c as V};
//# sourceMappingURL=Modal.stories-Aj9MJ_Df.js.map
