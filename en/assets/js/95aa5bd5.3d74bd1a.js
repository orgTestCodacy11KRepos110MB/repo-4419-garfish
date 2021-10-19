"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[995],{4635:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7711);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(8538),r=n(7765),i=(n(7711),n(4635)),o=["components"],p={title:"router",slug:"/api/attributes/router",order:3},l=void 0,u={unversionedId:"api/attributes/router",id:"api/attributes/router",isDocsHomePage:!1,title:"router",description:"Provides routing-related capabilities in micro front-end scenarios.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/attributes/router.md",sourceDirName:"api/attributes",slug:"/api/attributes/router",permalink:"/en/api/attributes/router",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/attributes/router.md",tags:[],version:"current",lastUpdatedBy:"Arthur",lastUpdatedAt:1634624183,formattedLastUpdatedAt:"10/19/2021",frontMatter:{title:"router",slug:"/api/attributes/router",order:3},sidebar:"api",previous:{title:"props",permalink:"/en/api/attributes/props"},next:{title:"loadApp",permalink:"/en/api/attributes/loadApp"}},s=[],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides routing-related capabilities in micro front-end scenarios."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.router")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," for switching sub-applications, switching between applications is also possible via ",(0,i.kt)("inlineCode",{parentName:"p"},"vue-router")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"react-router"),", but it will cause exceptions in some special scenarios: ",(0,i.kt)("a",{parentName:"p",href:"https://code.byted.org/pgcfe/gar/issues/5"},"react-router-prompt triggered multiple times"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"currently the main application only supports ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," mode to automatically mount the sub-application, you can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"activeWhen")," as a function activation condition to activate the main application as a ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," mode application")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When both the main application and the sub-application have routes, please convert the main application to ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," mode (since Garfish does not currently isolate the sub-application routes from the main application routes)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Since the main application routing and sub-application are in the same routing execution environment, if the main application is ",(0,i.kt)("inlineCode",{parentName:"li"},"hash")," routing and the sub-application is ",(0,i.kt)("inlineCode",{parentName:"li"},"history")," routing, the routing will not comply with the specification"),(0,i.kt)("li",{parentName:"ul"},"After the main application enters the detail page, the address is ",(0,i.kt)("inlineCode",{parentName:"li"},"http://gar.byted.com#/gar-example/detail"),", after loading the sub-application as history, the route becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"http://gar.byted.com/app1#/gar-example/detail"),". 3."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Currently Garfish isolates the routing between applications by ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," to avoid routing conflicts like the above between the main application and the child application. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://gar.byted.com/gar-example"),", the child application activation path is ",(0,i.kt)("inlineCode",{parentName:"p"},"/app1"),", the child application will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"http://gar.byted.com/gar-example/app1")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", the child application will use it as its base path, change the path\n:::"))),(0,i.kt)("h2",{parentName:"div",id:"routerpush"},"router.push"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.push({ path: string, query?: Record<string, string> }) : void"),(0,i.kt)("br",null)),(0,i.kt)("p",{parentName:"div"},"To navigate to a different URL, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push")," method. This method adds a new record to the ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," stack, so that when the user clicks the browser back button, it goes back to the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"."),(0,i.kt)("h3",{parentName:"div",id:"points-to-note"},"Points to note"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If there is a ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," configured at the time of ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run"),". will add ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," as a jump prefix when jumping."),(0,i.kt)("li",{parentName:"ul"},"Using the routing methods provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish"),", jumping to a sub-route corresponding to a sub-application in a scenario where the sub-application is already open will trigger a component update",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"In a non-Garfish micro front-end environment, jumping a route directly using ",(0,i.kt)("inlineCode",{parentName:"p"},"history.pushState")," will not trigger a component update for the corresponding route, because ",(0,i.kt)("inlineCode",{parentName:"p"},"vue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," are not listening for route changes and triggering component updates"))),(0,i.kt)("li",{parentName:"ul"},"This ",(0,i.kt)("inlineCode",{parentName:"li"},"api")," can be configured with ",(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"react-router-prompt")," is triggered multiple times. Turning off other jump methods to trigger child app refresh components limits the scenario where ",(0,i.kt)("inlineCode",{parentName:"li"},"prompt")," triggers multiple times or the child app unloads additional times."),(0,i.kt)("li",{parentName:"ul"},"With the ",(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," option turned off, you can only route the application through the ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router")," hopper")),(0,i.kt)("h3",{parentName:"div",id:"example"},"Example"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<a onclick=\"Garfish.router.push({path: '/vue-a'})\">Vue A</a\n<a onclick=\"Garfish.router.push({path: '/vue-b'})\">Vue B</a\n<a onclick=\"Garfish.router.push({path: '/vue-a/todo'})\">Vue A sub route</a\n<a onclick=\"Garfish.router.replace({path: '/react2'})\">react2</a\n<a onclick=\"Garfish.router.push({path: '/error'})\">error path</a\n")),(0,i.kt)("h2",{parentName:"div",id:"routerreplace"},"router.replace"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.replace({ path: string, query?: Record<string, string> }) : void")),(0,i.kt)("p",{parentName:"div"},"Much like ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push"),", the only difference is that it doesn't add a new record to ",(0,i.kt)("inlineCode",{parentName:"p"},"history"),", but rather replaces the current ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," record, just like its method name."),(0,i.kt)("h2",{parentName:"div",id:"routerbeforeeach"},"router.beforeEach"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"router.beforeEach(to: RouterInfo, from: RouterInfo, next: Function): void")),(0,i.kt)("p",{parentName:"div"},"Triggered after a route jump and before a child application is mounted."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RouterInfo {\n  fullPath: string;\n  path: string;\n  query: Object;\n  matched: Array<AppInfo>;\n}\n")),(0,i.kt)("p",{parentName:"div"},"Each guard method takes three parameters"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," Information about the target route that is coming in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," The information about the route that is about to leave."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next")," The blocking execution callback.")),(0,i.kt)("p",{parentName:"div"},"``js\nGarfish.router.beforeEach((to, from, next) => {\n// console.log(to, from);\nnext();\n})"),(0,i.kt)("p",{parentName:"div"},"Garfish.router.afterEach((to, from, next) => {\n// console.log(to, from);\nnext();autoRefreshApp\n})"),(0,i.kt)("p",{parentName:"div"},"Garfish.run(...) ;"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\n## router.afterEach\n\n`router.afterEach(to: RouterInfo, from: RouterInfo, next) : void`\n\nMuch like `router.afterEach`, the only difference is that it is triggered after the route is jumped and the child application is mounted.\n\n## Route Guard\n\nAs the name suggests, the navigation guard is provided mainly to guard the navigation by jumping or canceling. In a micro front-end environment, when jumping routes, the route guard will block the rendering of the sub-application when the `next` function is not called.\n\n> but cannot block route hops within a subapplication, because route hops within a subapplication cannot be blocked by `Garfish`\n\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Put the route guard registration before ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run"),", otherwise it will not receive the first loaded route hook."),(0,i.kt)("li",{parentName:"ul"},"If you use a route guard, make sure the ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," function is executed, otherwise it will block the route's internal loading logic.\n:::")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0}}]);