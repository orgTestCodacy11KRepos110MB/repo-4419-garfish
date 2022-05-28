"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[5325],{4852:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(9231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,v=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return t?r.createElement(v,i(i({ref:n},m),{},{components:t})):r.createElement(v,i({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4783:function(e,n,t){t.d(n,{ZP:function(){return c}});var r=t(5086),a=t(9126),o=(t(9231),t(4852)),i=["components"],l={toc:[]};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nconst webpack = require('webpack');\nconst isDevelopment = process.env.NODE_ENV !== 'production';\n\nmodule.exports = {\n  output: {\n    // \u5f00\u53d1\u73af\u5883\u8bbe\u7f6e true \u5c06\u4f1a\u5bfc\u81f4\u70ed\u66f4\u65b0\u5931\u6548\n    clean: isDevelopment ? false : true,\n    filename: '[name].[contenthash].js',\n    chunkFilename: '[name].[contenthash].js',\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // webpack5 \u4f7f\u7528 chunkLoadingGlobal \u4ee3\u66ff\uff0c\u6216\u4e0d\u586b\u4fdd\u8bc1 package.json name \u552f\u4e00\u5373\u53ef\n    jsonpFunction: 'garfish-demo-react',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\n    publicPath: 'http://localhost:8080',\n  },\n  plugin: [\n    // \u4fdd\u8bc1\u9519\u8bef\u5806\u6808\u4fe1\u606f\u53ca sourcemap \u884c\u5217\u4fe1\u606f\u6b63\u786e\n    new webpack.BannerPlugin({\n      banner: 'Micro front-end',\n    }),\n  ],\n  devServer: {\n    // \u4fdd\u8bc1\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5e94\u7528\u7aef\u53e3\u4e0d\u4e00\u6837\n    port: '8000',\n    headers: {\n      // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\uff0c\u5728\u4e0a\u7ebf\u540e\u9700\u8981\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08**\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898**\uff09\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u3010\u91cd\u8981\u3011\u6ce8\u610f\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"libraryTarget \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\uff1b"),(0,o.kt)("li",{parentName:"ol"},"globalObject \u9700\u8981\u8bbe\u7f6e\u4e3a 'window'\uff0c\u4ee5\u907f\u514d\u7531\u4e8e\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\u5bfc\u81f4\u7684\u9003\u9038\u6c99\u7bb1\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684 webpack \u4e3a v4 \u7248\u672c\uff0c\u9700\u8981\u8bbe\u7f6e jsonpFunction \u5e76\u4fdd\u8bc1\u8be5\u503c\u552f\u4e00\uff08\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\uff09\u3002\u82e5\u4e3a webpack5 \u5c06\u4f1a\u76f4\u63a5\u4f7f\u7528 package.json name \u4f5c\u4e3a\u552f\u4e00\u503c\uff0c\u8bf7\u786e\u4fdd\u5e94\u7528\u95f4\u7684 name \u5404\u4e0d\u76f8\u540c\uff1b"),(0,o.kt)("li",{parentName:"ol"},"publicPath \u8bbe\u7f6e\u4e3a\u5b50\u5e94\u7528\u8d44\u6e90\u7684\u7edd\u5bf9\u5730\u5740\uff0c\u907f\u514d\u7531\u4e8e\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5bfc\u81f4\u8d44\u6e90\u53d8\u4e3a\u4e86\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\u3002\u8fd9\u662f\u56e0\u4e3a\u4e3b\u3001\u5b50\u5e94\u7528\u5904\u4e8e\u540c\u4e00\u4e2a\u6587\u6863\u6d41\u4e2d\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684"),(0,o.kt)("li",{parentName:"ol"},"'Access-Control-Allow-Origin': '","*","' \u5141\u8bb8\u5f00\u53d1\u73af\u5883\u8de8\u57df\uff0c\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\u3002\u53e6\u5916\u4e5f\u9700\u8981\u4fdd\u8bc1\u5728\u4e0a\u7ebf\u540e\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08",(0,o.kt)("strong",{parentName:"li"},"\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898"),"\uff09\uff1b\n:::")))))}c.isMDXComponent=!0},1235:function(e,n,t){var r=t(9231);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},3475:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(5086),a=t(9231),o=t(1213),i=t(181);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(883),s=t(1506),m="tabItem_3CfY";function u(e){var n,t,r,o=e.lazy,i=e.block,u=e.defaultValue,d=e.values,p=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,c.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),N=k.tabGroupChoices,y=k.setTabGroupChoices,w=(0,a.useState)(h),x=w[0],E=w[1],T=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=N[p];null!=O&&O!==x&&b.some((function(e){return e.value===O}))&&E(O)}var B=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==x&&(C(n),E(r),null!=p&&y(p,r))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},v)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,s.Z)("tabs__item",m,{"tabs__item--active":x===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:R,onFocus:B,onClick:B},null!=t?t:n)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},181:function(e,n,t){var r=(0,t(9231).createContext)(void 0);n.Z=r},4520:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(5086),a=t(9126),o=(t(9231),t(4852)),i=t(3475),l=t(1235),c=t(4783),s=["components"],m={title:"react \u5b50\u5e94\u7528",slug:"/guide/demo/react",order:2},u=void 0,d={unversionedId:"guide/demo/react",id:"guide/demo/react",isDocsHomePage:!1,title:"react \u5b50\u5e94\u7528",description:"\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd react \u6846\u67b6\u7684\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u63a5\u5165\u6b65\u9aa4\u3002",source:"@site/docs/guide/demo/react.md",sourceDirName:"guide/demo",slug:"/guide/demo/react",permalink:"/guide/demo/react",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/guide/demo/react.md",tags:[],version:"current",lastUpdatedBy:"danpeen",lastUpdatedAt:1653699242,formattedLastUpdatedAt:"2022/5/28",frontMatter:{title:"react \u5b50\u5e94\u7528",slug:"/guide/demo/react",order:2},sidebar:"guide",previous:{title:"\u6982\u8ff0",permalink:"/guide/demo"},next:{title:"vue \u5b50\u5e94\u7528",permalink:"/guide/demo/vue"}},p=[{value:"react \u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4",id:"react-\u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4",children:[{value:"1. bridge \u4f9d\u8d56\u5b89\u88c5",id:"1-bridge-\u4f9d\u8d56\u5b89\u88c5",children:[],level:3},{value:"2. \u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa provider \u51fd\u6570",id:"2-\u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa-provider-\u51fd\u6570",children:[],level:3},{value:"react v16\u3001v17 \u5bfc\u51fa",id:"react-v16v17-\u5bfc\u51fa",children:[],level:3},{value:"react v18 \u5bfc\u51fa",id:"react-v18-\u5bfc\u51fa",children:[],level:3},{value:"3. \u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684 basename",id:"3-\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684-basename",children:[],level:3},{value:"4. \u66f4\u6539 webpack \u914d\u7f6e",id:"4-\u66f4\u6539-webpack-\u914d\u7f6e",children:[],level:3},{value:"5. \u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91",id:"5-\u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91",children:[],level:3}],level:2}],v={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd react \u6846\u67b6\u7684\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u63a5\u5165\u6b65\u9aa4\u3002"),(0,o.kt)("h2",{id:"react-\u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4"},"react \u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4"),(0,o.kt)("h3",{id:"1-bridge-\u4f9d\u8d56\u5b89\u88c5"},"1. bridge \u4f9d\u8d56\u5b89\u88c5"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u8bf7\u6ce8\u610f\uff0c\u6865\u63a5\u51fd\u6570\u7684\u5b89\u88c5\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5bfc\u51fa\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u63d0\u4f9b\u6865\u63a5\u51fd\u6570\u662f\u4e3a\u4e86\u8fdb\u4e00\u6b65\u964d\u4f4e\u7528\u6237\u63a5\u5165\u6210\u672c\u5e76\u964d\u4f4e\u7528\u6237\u51fa\u9519\u6982\u7387\uff0c\u6865\u63a5\u51fd\u6570\u4e2d\u5c06\u4f1a\u5185\u7f6e\u4e00\u4e9b\u9ed8\u8ba4\u884c\u4e3a\uff0c\u53ef\u4ee5\u907f\u514d\u7531\u4e8e\u63a5\u5165\u4e0d\u89c4\u8303\u5bfc\u81f4\u7684\u9519\u8bef\uff0c\u6240\u4ee5\u8fd9\u4e5f\u662f\u6211\u4eec\u63a8\u8350\u7684\u63a5\u5165\u65b9\u5f0f\u3002")))),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @garfish/bridge --save\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @garfish/bridge\n")))),(0,o.kt)("h3",{id:"2-\u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa-provider-\u51fd\u6570"},"2. \u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa provider \u51fd\u6570"),(0,o.kt)("p",null,"\u66f4\u591a bridge \u51fd\u6570\u53c2\u6570\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/guide/bridge"},"\u8fd9\u91cc")),(0,o.kt)("h3",{id:"react-v16v17-\u5bfc\u51fa"},"react v16\u3001v17 \u5bfc\u51fa"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"bridge_provider",label:"\u4f7f\u7528 @garfish/bridge",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/index.tsx\nimport { reactBridge } from '@garfish/bridge-react';\nimport RootComponent from './components/root';\nimport Error from './components/ErrorBoundary';\n\nexport const provider = reactBridge({\n  // \u5b50\u5e94\u7528\u6302\u8f7d\u70b9\uff0c\u82e5\u5b50\u5e94\u7528\u6784\u5efa\u6210 js \uff0c\u5219\u4e0d\u9700\u8981\u4f20\u9012\u8be5\u503c\n  el: '#root',\n  // \u6839\u7ec4\u4ef6, bridge \u4f1a\u9ed8\u8ba4\u4f20\u9012 basename\u3001dom\u3001props \u7b49\u4fe1\u606f\u5230\u6839\u7ec4\u4ef6\n  rootComponent: RootComponent,\n  // \u8bbe\u7f6e\u5e94\u7528\u7684 errorBoundary\n  errorBoundary: () => <Error />,\n});\n"))),(0,o.kt)(l.Z,{value:"customer_provider",label:"\u81ea\u5b9a\u4e49\u5bfc\u51fa\u51fd\u6570",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},' // src/index.tsx\n import React from "react";\n import ReactDOM from "react-dom";\n import RootComponent from "./components/root";\n\n export const provider = () => {\n   return {\n     // \u548c\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u65f6\u4e00\u6837\uff0c\u5c06\u5b50\u5e94\u7528\u6e32\u67d3\u81f3\u5bf9\u5e94\u7684\u5bb9\u5668\u8282\u70b9\uff0c\u6839\u636e\u4e0d\u540c\u7684\u6846\u67b6\u4f7f\u7528\u4e0d\u540c\u7684\u6e32\u67d3\u65b9\u5f0f\n     render({ dom, basename, props})) {\n       ReactDOM.render(<RootComponent {...props} />, root);\n     },\n     destroy({ dom, basename}) {\n       // \u4f7f\u7528\u6846\u67b6\u63d0\u4f9b\u7684\u9500\u6bc1\u51fd\u6570\u9500\u6bc1\u6574\u4e2a\u5e94\u7528\uff0c\u5df2\u8fbe\u5230\u9500\u6bc1\u6846\u67b6\u4e2d\u53ef\u80fd\u5b58\u5728\u5f97\u526f\u4f5c\u7528\uff0c\u5e76\u89e6\u53d1\u5e94\u7528\u4e2d\u7684\u4e00\u4e9b\u7ec4\u4ef6\u9500\u6bc1\u51fd\u6570\n       // \u9700\u8981\u6ce8\u610f\u7684\u65f6\u4e00\u5b9a\u8981\u4fdd\u8bc1\u5bf9\u5e94\u6846\u67b6\u5f97\u9500\u6bc1\u51fd\u6570\u4f7f\u7528\u6b63\u786e\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u5b50\u5e94\u7528\u672a\u6b63\u5e38\u5378\u8f7d\u5f71\u54cd\u5176\u4ed6\u5b50\u5e94\u7528\n       ReactDOM.unmountComponentAtNode(\n         dom ? dom.querySelector(\'#root\') : document.querySelector(\'#root\'),\n       );\n     },\n   };\n };\n')))),(0,o.kt)("h3",{id:"react-v18-\u5bfc\u51fa"},"react v18 \u5bfc\u51fa"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"react v18 bridge \u5bfc\u51fa\u65b9\u5f0f\u6682\u672a\u652f\u6301\uff0c\u76ee\u524d\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49\u5bfc\u51fa\u51fd\u6570\u5bfc\u51fa\u3002")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"bridge_provider",label:"\u4f7f\u7528 @garfish/bridge",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/index.tsx\nimport { reactBridge } from '@garfish/bridge-react-v18';\nimport RootComponent from './root';\nimport ErrorBoundary from './ErrorBoundary';\n\nexport const provider = reactBridge({\n  el: '#root',\n  rootComponent: RootComponent,\n  errorBoundary: (e: any) => <ErrorBoundary />,\n});\n\n"))),(0,o.kt)(l.Z,{value:"customer_provider",label:"\u81ea\u5b9a\u4e49\u5bfc\u51fa\u51fd\u6570",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/index.tsx\nimport { createRoot } from 'react-dom/client';\nimport RootComponent from './root';\n\n// \u5728\u9996\u6b21\u52a0\u8f7d\u548c\u6267\u884c\u65f6\u4f1a\u89e6\u53d1\u8be5\u51fd\u6570\nexport const provider = () => {\n  let root = null;\n  return {\n    render({ basename, dom, store, props }) {\n      const container = dom.querySelector('#root');\n      root = createRoot(container!);\n      (root as any).render(<RootComponent basename={basename} />);\n    },\n    destroy({ dom }) {\n      (root as any).unmount();\n    },\n  };\n};\n")))),(0,o.kt)("h3",{id:"3-\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684-basename"},"3. \u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684 basename"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u8bbe\u7f6e basename\uff1f\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/issues#%E5%AD%90%E5%BA%94%E7%94%A8%E6%8B%BF%E5%88%B0-basename-%E7%9A%84%E4%BD%9C%E7%94%A8"},"issue")),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u4ece\u4e3b\u5e94\u7528\u4f20\u9012\u8fc7\u6765\u7684 basename \u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 basename\uff0c\u800c\u975e\u4e3b\u3001\u5b50\u5e94\u7528\u7ea6\u5b9a\u5f0f\uff0c\u907f\u514d basename \u540e\u671f\u53d8\u66f4\u672a\u540c\u6b65\u5e26\u6765\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76ee\u524d\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 history \u6a21\u5f0f\u7684\u5b50\u5e94\u7528\u8def\u7531\uff0c",(0,o.kt)("a",{parentName:"li",href:"/issues#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%BB%E5%BA%94%E7%94%A8%E4%BB%85%E6%94%AF%E6%8C%81-history-%E6%A8%A1%E5%BC%8F"},"why"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// src/component/rootComponent\nimport React from "react";\nimport { BrowserRouter } from "react-router-dom";\n\nconst RootComponent = ({ basename }) => {\n  return (\n    <BrowserRouter basename={basename}>\n      <Routes>\n        <Route path="/" element={<App />}>\n          <Route path="/home" element={<Home />} />\n          <Route path="*" element={<PageNotFound />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  )\n}\n')),(0,o.kt)("h3",{id:"4-\u66f4\u6539-webpack-\u914d\u7f6e"},"4. \u66f4\u6539 webpack \u914d\u7f6e"),(0,o.kt)(c.ZP,{mdxType:"WebpackConfig"}),(0,o.kt)("h3",{id:"5-\u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91"},"5. \u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"last but not least, \u522b\u5fd8\u4e86\u6dfb\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u903b\u8f91\uff0c\u8fd9\u80fd\u591f\u8ba9\u4f60\u7684\u5b50\u5e94\u7528\u8131\u79bb\u4e3b\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\uff0c\u4fbf\u4e8e\u540e\u7eed\u5f00\u53d1\u548c\u90e8\u7f72\u3002"))),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"react_16/17",label:"react v16/v17",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/index.tsx\nif (!window.__GARFISH__) {\n  ReactDOM.render(\n    <RootComponent\n      basename={\n        process.env.NODE_ENV === 'production' ? '/examples/subapp/react18' : '/'\n      }\n    />, document.getElementById(\"root\"));\n}\n"))),(0,o.kt)(l.Z,{value:"react_18",label:"react v18",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/index.tsx\nif (!window.__GARFISH__) {\n  const container = document.getElementById('root');\n  const root = createRoot(container!);\n  root.render(\n    <RootComponent\n      basename={\n        process.env.NODE_ENV === 'production' ? '/examples/subapp/react18' : '/'\n      }\n    />\n  );\n}\n")))))}f.isMDXComponent=!0}}]);