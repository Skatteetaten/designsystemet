try{
(()=>{var e={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:".",STORYBOOK_WEBPACK_STATS:"false"};var b=__STORYBOOK_API__,{ActiveTabs:v,Consumer:S,ManagerContext:k,Provider:y,addons:s,combineParameters:_,controlOrMetaKey:O,controlOrMetaSymbol:T,eventMatchesShortcut:P,eventToShortcut:z,isMacLike:C,isShortcutTaken:x,keyToSymbol:A,merge:M,mockChannel:B,optionOrAltSymbol:I,shortcutMatchesShortcut:K,shortcutToHumanString:N,types:R,useAddonState:w,useArgTypes:E,useArgs:G,useChannel:H,useGlobalTypes:Y,useGlobals:D,useParameter:V,useSharedState:j,useStoryPrepared:L,useStorybookApi:W,useStorybookState:F}=__STORYBOOK_API__;var t={":root,\n:host":{"--palette-burgundy-5":"#faf0f3","--palette-burgundy-10":"#f7e2e8","--palette-burgundy-30":"#f3a7b0","--palette-burgundy-50":"#f06674","--palette-burgundy-70":"#b04c5c","--palette-burgundy-100":"#6f2c3f","--palette-forest-5":"#f4faf5","--palette-forest-10":"#e3f5ea","--palette-forest-30":"#b9e1c8","--palette-forest-50":"#91d6ac","--palette-forest-70":"#5d9b73","--palette-forest-100":"#2b6940","--palette-ochre-5":"#f9f4f0","--palette-ochre-10":"#f9ede2","--palette-ochre-30":"#f0d2b6","--palette-ochre-50":"#e7b78a","--palette-ochre-70":"#a9805b","--palette-ochre-100":"#6b492c","--palette-denim-5":"#eff3f9","--palette-denim-10":"#e2eaf7","--palette-denim-30":"#b5cbee","--palette-denim-50":"#89abe5","--palette-denim-70":"#5a77a8","--palette-denim-100":"#2c436b","--palette-azure-10":"#cde1f9","--palette-azure-30":"#9ccff2","--palette-azure-70":"#1362ae","--palette-azure-100":"#093e61","--palette-graphite-0":"#ffffff","--palette-graphite-5":"#f4f4f4","--palette-graphite-10":"#e5e5e5","--palette-graphite-30":"#b2b2b2","--palette-graphite-50":"#757575","--palette-graphite-70":"#4d4d4d","--palette-graphite-100":"#1a1a1a","--semantic-page-background":"var(--palette-graphite-0)","--semantic-page-foreground":"var(--palette-graphite-100)","--semantic-danger-background":"var(--palette-burgundy-10)","--semantic-danger-foreground":"#a82e39","--semantic-warning-background":"var(--palette-ochre-10)","--semantic-warning-foreground":"#9f7509","--semantic-success-background":"var(--palette-forest-10)","--semantic-success-foreground":"#316f2a","--semantic-disabled-background":"var(--palette-graphite-10)","--semantic-disabled-foreground":"var(--palette-graphite-50)","--semantic-interactive-background":"var(--palette-azure-10)","--semantic-interactive-main":"var(--palette-azure-70)","--semantic-interactive-foreground":"var(--palette-azure-100)","--semantic-divider-30":"var(--palette-graphite-30)","--semantic-divider-100":"var(--palette-graphite-100)"}};var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:ae,background:re,color:oe,convert:se,create:n,createCache:ne,createGlobal:pe,createReset:ie,css:le,darken:ce,ensure:de,ignoreSsrWarning:ue,isPropValid:ge,jsx:me,keyframes:fe,lighten:he,styled:be,themes:ve,typography:Se,useTheme:ke,withTheme:ye}=__STORYBOOK_THEMING__;var p=n({base:"light",appBg:t[`:root,
:host`]["--palette-graphite-5"],barTextColor:t[`:root,
:host`]["--palette-graphite-70"],textColor:t[`:root,
:host`]["--palette-graphite-100"],colorPrimary:t[`:root,
:host`]["--palette-azure-70"],colorSecondary:t[`:root,
:host`]["--palette-azure-70"],brandImage:"https://www.skatteetaten.no/globalassets/design/logo/skatteetaten/skjerm/horisontal/skatteetaten-logo-horisontal-rgb-svart.png",brandTitle:"Skatteetatens logo"});var d=()=>e.STORYBOOK_BUILD_VERSION?.includes("-SNAPSHOT")?{}:{tests:i=>!i.title.startsWith("Tester/")};s.setConfig({theme:p,sidebar:{filters:{patterns:o=>!o.tags.includes("isHidden"),...d()}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
