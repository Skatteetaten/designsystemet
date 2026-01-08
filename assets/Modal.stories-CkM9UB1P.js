import{j as e,e as n,s as E,r as s,d as v,l as T}from"./iframe-Br1Xu9zr.js";import{B as t}from"./index-Mga-TJ2K.js";import{c as k}from"./index-B55DkYFu.js";import{k as j,V as L}from"./index-Xbc0duXx.js";import{g as R,a as C,b as I,c as B,M as h}from"./index--7Yk7F8k.js";import{P as c,L as y}from"./index-DCwxX22m.js";import{f as P,w as b}from"./wait-alert-illustration-B8u9k-Re.js";import{l as D}from"./storybook.testing.utils-BgHZnMzD.js";import{e as x}from"./stories.utils-CZ5hej_8.js";const N={component:h,title:"Komponenter/Modal",argTypes:{children:{control:"text",table:{category:n.props}},classNames:{control:{disable:!0},table:{category:n.props}},dismissOnEsc:{table:{category:n.props,defaultValue:{summary:B().toString()}}},dismissOnOutsideClick:{table:{category:n.props,defaultValue:{summary:I().toString()}}},hideCloseButton:{table:{category:n.props}},hideTitle:{table:{category:n.props}},imageSource:{table:{category:n.props},control:"select",options:["",P,b]},imageSourceAltText:{table:{category:n.props}},padding:{table:{category:n.props,defaultValue:{summary:C()}}},renderIcon:{table:{category:n.props},control:"select",options:["","Icon","Logo"],mapping:{"":"",Icon:()=>e.jsx(j,{size:"extraLarge"}),Logo:()=>e.jsx("img",{src:E,alt:"Skatteetaten logo",className:"logo"})}},shadowRootNode:{control:!1,table:{control:!1,category:n.props}},title:{table:{category:n.props}},variant:{table:{category:n.props,defaultValue:{summary:R()}}},onClose:{control:{disable:!0},table:{category:n.event}}},args:{children:e.jsx(c,{children:D}),title:"Modal title"}},f={render:m=>{const r=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r.current?.showModal(),children:"Åpne modal"}),e.jsx(h,{...m,ref:r,children:m.children})]})}},l={render:m=>{const r=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r.current?.showModal(),children:"Nye opplysninger"}),e.jsxs(h,{ref:r,title:"Vil du erstatte nye opplysninger fra fil?",children:[e.jsx(c,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),e.jsxs("div",{className:"flex",children:[e.jsx(t,{className:"marginRightM",children:"Erstatt opplysninger"}),e.jsx(t,{variant:"tertiary",onClick:()=>r.current?.close(),children:"Avbryt"})]})]})]})}};l.parameters=x;const i={render:function(r){const a=s.useRef(null),[u,w]=s.useState(12e5),M=s.useRef(new Date().getTime()),g=()=>{M.current=new Date().getTime()},S=()=>{a.current?.close(),g()};return s.useEffect(()=>{const o=setInterval(()=>{new Date().getTime()-M.current>=u&&a.current?.showModal()},1e3);return()=>clearInterval(o)},[u]),s.useEffect(()=>{const p=new AbortController,{signal:o}=p;return window.addEventListener("keydown",g,{signal:o}),window.addEventListener("mousemove",g,{signal:o}),window.addEventListener("scroll",g,{signal:o}),window.addEventListener("resize",g,{signal:o}),()=>{p.abort()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",className:"bottomSpacingXL",onClick:()=>a.current?.showModal(),children:"Vis ventevarsel"}),e.jsxs(k,{legend:"Ventevarseleksempel åpnes automatisk etter",helpText:"Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.",selectedValue:u,onChange:p=>w(Number(p.target.value)),children:[e.jsx(k.Radio,{value:12e5,children:"20 minutter (anbefalt i løsninger)"}),e.jsx(k.Radio,{value:5e3,children:"5 sekunder"})]}),e.jsxs(h,{ref:a,title:v.t("ds_overlays:modal.WaitNoticeTitle"),imageSource:b,imageSourceAltText:v.t("ds_overlays:modal.WaitNoticeImageAltText"),onClose:S,children:[e.jsx(c,{hasSpacing:!0,children:v.t("ds_overlays:modal.WaitNoticeParagraph")}),e.jsx(t,{onClick:()=>{S()},children:v.t("ds_overlays:modal.StayLoggedIn")})]})]})}};i.parameters=x;const d={render:function(r){const a=s.useRef(null),u=T("(min-width: 640px)");return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"danger",onClick:()=>a.current?.showModal(),children:"Åpne feilmeldingsmodal"}),e.jsxs(h,{ref:a,title:"Beklager, noe gikk galt",padding:u?"mega":"m",renderIcon:()=>e.jsx(j,{size:"extraLarge"}),children:[e.jsx(c,{hasSpacing:!0,children:"Vi klarte ikke å hente skjemet akkurat nå."}),e.jsx(c,{className:"bold",children:"Du kan prøve å"}),e.jsxs(y,{hasSpacing:!0,children:[e.jsxs(y.Element,{children:["vente noen minutter og ",e.jsx("a",{href:"#link",children:"laste inn siden på nytt"})]}),e.jsx(y.Element,{children:e.jsx("a",{href:"#link",children:"gå tilbake til forrige side"})})]}),e.jsxs(c,{hasSpacing:!0,children:["Hvis du fortsatt har problemer kan du ",e.jsx("a",{href:"#link",children:"kontakte oss"})]}),e.jsx(t,{className:"exampleSpacing",svgPath:L,onClick:()=>a.current?.close(),children:"Last inn siden på nytt"}),e.jsx(t,{variant:"secondary",href:"#",children:"Gå til forsiden"})]})]})}};d.parameters=x;f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};const V=["Preview","Samtykkemodal","Ventevarsel","Feilmeldingsmodal"],Q=Object.freeze(Object.defineProperty({__proto__:null,Feilmeldingsmodal:d,Preview:f,Samtykkemodal:l,Ventevarsel:i,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{d as F,Q as M,l as S,i as V};
//# sourceMappingURL=Modal.stories-CkM9UB1P.js.map
