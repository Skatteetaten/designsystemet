import{w as a,j as n}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{D as o}from"./docs-fv9hqdd2.js";import"./router-link-eakWayll.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";import"./example-url-DyvRJhlD.js";import"./root-DjLZ-b5M.js";import"./docs.module-TuI7tDJv.js";async function t({}){return{path:"index.mdx",markdownUrl:""}}const h=a(function({loaderData:r}){return n.jsx(o,{...r})});try{t.displayName="clientLoader",t.__docgenInfo={description:"",displayName:"clientLoader",props:{request:{defaultValue:null,description:`A {@link https://developer.mozilla.org/en-US/docs/Web/API/Request Fetch Request instance} which you can use to read the URL, the method, the "content-type" header, and the request body from the request.
@note Because client data functions are called before a network request is made, the Request object does not include the headers which the browser automatically adds. React Router infers the "content-type" header from the enc-type of the form that performed the submission.`,name:"request",required:!0,type:{name:"Request"}},url:{defaultValue:null,description:"A URL instance representing the application location being navigated to or\nfetched. By default, this matches `request.url`.\n\nIn Framework mode with `future.v8_passThroughRequests` enabled, this is a\nnormalized URL with React-Router-specific implementation details removed\n(`.data` suffixes, `index`/`_routes` search params).",name:"url",required:!0,type:{name:"URL"}},params:{defaultValue:null,description:`{@link https://reactrouter.com/start/framework/routing#dynamic-segments Dynamic route params} for the current route.
@example // app/routes.ts
route("teams/:teamId", "./team.tsx"),

// app/team.tsx
export function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  params.teamId;
  //        ^ string
}`,name:"params",required:!0,type:{name:"{ [x: string]: string | undefined; }"}},pattern:{defaultValue:null,description:`Matched un-interpolated route pattern for the current path (i.e., /blog/:slug).
Mostly useful as a identifier to aggregate on for logging/tracing/etc.`,name:"pattern",required:!0,type:{name:"string"}},context:{defaultValue:null,description:"When `future.v8_middleware` is not enabled, this is undefined.\n\nWhen `future.v8_middleware` is enabled, this is an instance of\n`RouterContextProvider` and can be used to access context values\nfrom your route middlewares.  You may pass in initial context values in your\n`<HydratedRouter getContext>` prop",name:"context",required:!0,type:{name:"Readonly<RouterContextProvider>"}},serverLoader:{defaultValue:null,description:"This is an asynchronous function to get the data from the server loader for this route. On client-side navigations, this will make a {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API fetch} call to the React Router server loader. If you opt-into running your clientLoader on hydration, then this function will return the data that was already loaded on the server (via Promise.resolve).",name:"serverLoader",required:!0,type:{name:"() => Promise<undefined>"}}}}}catch{}try{routes.displayName="routes",routes.__docgenInfo={description:"",displayName:"routes",props:{params:{defaultValue:null,description:`{@link https://reactrouter.com/start/framework/routing#dynamic-segments Dynamic route params} for the current route.
@example // app/routes.ts
route("teams/:teamId", "./team.tsx"),

// app/team.tsx
export default function Component({
  params,
}: Route.ComponentProps) {
  params.teamId;
  //        ^ string
}`,name:"params",required:!0,type:{name:"{ [x: string]: string | undefined; }"}},matches:{defaultValue:null,description:"An array of the current {@link https://api.reactrouter.com/v7/interfaces/react-router.UIMatch.html route matches}, including parent route matches.",name:"matches",required:!0,type:{name:'[{ id: "root"; params: Record<string, string | undefined>; pathname: string; data: { pageTree: { $fumadocs_loader: "page-tree"; data: object; }; }; loaderData: { pageTree: { $fumadocs_loader: "page-tree"; data: object; }; }; handle: unknown; }, { ...; }, { ...; }, ...({ ...; } | undefined)[]]'}},loaderData:{defaultValue:null,description:"The data returned from the `loader` or `clientLoader`",name:"loaderData",required:!0,type:{name:"LoaderData"}},actionData:{defaultValue:null,description:"The data returned from the `action` or `clientAction` following an action submission.",name:"actionData",required:!1,type:{name:"undefined"}}}}}catch{}export{t as clientLoader,h as default};
