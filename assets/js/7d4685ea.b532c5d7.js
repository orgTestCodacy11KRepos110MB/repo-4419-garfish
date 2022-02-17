"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[797],{8766:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return s},default:function(){return d}});var i=a(1513),n=a(1275),r=(a(7711),a(4635)),l=["components"],p={title:"Garfish \u4ecb\u7ecd",slug:"/guide",order:1},u="\u5173\u4e8e Garfish",o={unversionedId:"guide/index",id:"guide/index",isDocsHomePage:!1,title:"Garfish \u4ecb\u7ecd",description:"Garfish \u8d77\u6e90\u4e8e \u5934\u6761\u53f7 \u7684\u5b9e\u9645\u573a\u666f\uff0c\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\u53d8\u6210\u4e00\u4e2a Monolithic-Applications \uff08\u5de8\u77f3\u5e94\u7528\uff09\uff0c\u540c\u65f6\u7ef4\u62a4\u7684\u56e2\u961f\u4eba\u5458\u90fd\u6bd4\u8f83\u5206\u6563\uff0c\u5de5\u7a0b\u5927\uff0c\u5bfc\u81f4\u5f00\u53d1\u8c03\u8bd5\u6548\u7387\u4f4e\u3001\u4e0a\u7ebf\u56f0\u96be\uff08\u4ee3\u7801\u5408\u5e76\u76f8\u4e92\u4f9d\u8d56\uff09\uff0c\u6210\u4e3a\u963b\u585e\u4e1a\u52a1\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u56e0\u7d20\u3002",source:"@site/docs/guide/index.md",sourceDirName:"guide",slug:"/guide",permalink:"/guide",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/index.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1645068910,formattedLastUpdatedAt:"2022/2/17",frontMatter:{title:"Garfish \u4ecb\u7ecd",slug:"/guide",order:1},sidebar:"guide",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/quick-start"}},s=[{value:"\u6846\u67b6\u7279\u6027",id:"\u6846\u67b6\u7279\u6027",children:[],level:2},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",children:[],level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u7528",id:"\u4ec0\u4e48\u65f6\u5019\u7528",children:[],level:2}],m={toc:s};function d(t){var e=t.components,a=(0,n.Z)(t,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5173\u4e8e-garfish"},"\u5173\u4e8e Garfish"),(0,r.kt)("p",null,"Garfish \u8d77\u6e90\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"http://mp.toutiao.com"},"\u5934\u6761\u53f7")," \u7684\u5b9e\u9645\u573a\u666f\uff0c\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\u53d8\u6210\u4e00\u4e2a Monolithic-Applications \uff08",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Monolithic_application"},"\u5de8\u77f3\u5e94\u7528"),"\uff09\uff0c\u540c\u65f6\u7ef4\u62a4\u7684\u56e2\u961f\u4eba\u5458\u90fd\u6bd4\u8f83\u5206\u6563\uff0c\u5de5\u7a0b\u5927\uff0c\u5bfc\u81f4\u5f00\u53d1\u8c03\u8bd5\u6548\u7387\u4f4e\u3001\u4e0a\u7ebf\u56f0\u96be\uff08\u4ee3\u7801\u5408\u5e76\u76f8\u4e92\u4f9d\u8d56\uff09\uff0c\u6210\u4e3a\u963b\u585e\u4e1a\u52a1\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u56e0\u7d20\u3002"),(0,r.kt)("p",null,"\u4e8e\u662f\u5728 2018 \u5e74\u884d\u751f\u4e86 Garfish \u8fd9\u4e2a\u5fae\u524d\u7aef\u6846\u67b6\uff0c\u7ecf\u8fc7\u5927\u91cf\u4e1a\u52a1\u65b9\u5b9e\u9645\u573a\u666f\u7684\u9a8c\u8bc1\u548c\u6253\u78e8\uff0cGarfish \u9010\u6e10\u8d8b\u4e8e\u6210\u719f\u3002\u5e76\u4e14\u968f\u7740\u66f4\u591a\u7684\u4e1a\u52a1\u5bf9\u5fae\u524d\u7aef\u7684\u9700\u6c42\uff0cGarfish \u4e5f\u5728\u4e0d\u65ad\u8fed\u4ee3\u4e4b\u4e2d\uff0c\u5df2\u7ecf\u79ef\u7d2f\u4e86\u4e30\u5bcc\u7684\u5fae\u524d\u7aef\u95ee\u9898\u89e3\u51b3\u7ecf\u9a8c\u3002"),(0,r.kt)("p",null,"Garfish \u662f\u4e00\u5957\u5fae\u524d\u7aef\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4e3b\u8981\u7528\u4e8e\u89e3\u51b3\u73b0\u4ee3 web \u5e94\u7528\u5728\u524d\u7aef\u751f\u6001\u7e41\u8363\u548c web \u5e94\u7528\u65e5\u76ca\u590d\u6742\u5316\u4e24\u5927\u80cc\u666f\u4e0b\u5e26\u6765\u7684\u8de8\u56e2\u961f\u534f\u4f5c\u3001\u6280\u672f\u4f53\u7cfb\u591a\u6837\u5316\u3001web \u5e94\u7528\u65e5\u76ca\u590d\u6742\u5316\u7b49\u95ee\u9898\u3002\u4ece\u67b6\u6784\u5c42\u9762\u51fa\u53d1\u5c06\u591a\u4e2a\u72ec\u7acb\u4ea4\u4ed8\u7684\u524d\u7aef\u5e94\u7528\u7ec4\u6210\u6574\u4f53\uff0c\u8fd9\u4e9b\u524d\u7aef\u5e94\u7528\u80fd\u591f\u300c",(0,r.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u5f00\u53d1"),"\u300d\u3001\u300c",(0,r.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u6d4b\u8bd5"),"\u300d\u3001\u300c",(0,r.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u90e8\u7f72"),"\u300d\uff0c\u4f46\u662f\u6700\u7ec8\u5728\u7528\u6237\u770b\u6765\u4ecd\u7136\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5185\u805a\u7684\u5355\u4e2a\u4ea7\u54c1"),"\u3002"),(0,r.kt)("h2",{id:"\u6846\u67b6\u7279\u6027"},"\u6846\u67b6\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83c\udf08 ",(0,r.kt)("strong",{parentName:"p"},"\u4e30\u5bcc\u9ad8\u6548\u7684\u4ea7\u54c1\u7279\u5f81")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Garfish \u5fae\u524d\u7aef\u5b50\u5e94\u7528\u652f\u6301\u4efb\u610f\u591a\u79cd\u6846\u67b6\u3001\u6280\u672f\u4f53\u7cfb\u63a5\u5165"),(0,r.kt)("li",{parentName:"ul"},"Garfish \u5fae\u524d\u7aef\u5b50\u5e94\u7528\u652f\u6301\u300c\u72ec\u7acb\u5f00\u53d1\u300d\u3001\u300c\u72ec\u7acb\u6d4b\u8bd5\u300d\u3001\u300c\u72ec\u7acb\u90e8\u7f72\u300d"),(0,r.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u7684\u9884\u52a0\u8f7d\u80fd\u529b\uff0c\u81ea\u52a8\u8bb0\u5f55\u7528\u6237\u5e94\u7528\u52a0\u8f7d\u4e60\u60ef\u589e\u52a0\u52a0\u8f7d\u6743\u91cd\uff0c\u5e94\u7528\u5207\u6362\u65f6\u95f4\u6781\u5927\u7f29\u77ed"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f9d\u8d56\u5171\u4eab\uff0c\u6781\u5927\u7a0b\u5ea6\u7684\u964d\u4f4e\u6574\u4f53\u7684\u5305\u4f53\u79ef\uff0c\u51cf\u5c11\u4f9d\u8d56\u7684\u91cd\u590d\u52a0\u8f7d"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u6570\u636e\u6536\u96c6\uff0c\u6709\u6548\u7684\u611f\u77e5\u5230\u5e94\u7528\u5728\u8fd0\u884c\u671f\u95f4\u7684\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5b9e\u4f8b\u80fd\u529b\uff0c\u53ef\u5728\u9875\u9762\u4e2d\u540c\u65f6\u8fd0\u884c\u591a\u4e2a\u5b50\u5e94\u7528\u63d0\u5347\u4e86\u4e1a\u52a1\u7684\u62c6\u5206\u529b\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u9ad8\u6548\u53ef\u7528\u7684\u8c03\u8bd5\u5de5\u5177\uff0c\u534f\u52a9\u7528\u6237\u5728\u5fae\u524d\u7aef\u6a21\u5f0f\u4e0b\u5e26\u6765\u7684\u4e0e\u4f20\u7edf\u7814\u53d1\u6a21\u5f0f\u4e0d\u540c\u5e26\u6765\u7684\u5f00\u53d1\u4f53\u9a8c\u95ee\u9898"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udce6 ",(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u6269\u5c55\u6027\u7684\u6838\u5fc3\u6a21\u5757")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Loader \u6838\u5fc3\u6a21\u5757\u652f\u6301 HTML entry\u3001JS entry \u7684\u652f\u6301\uff0c\u63a5\u5165\u5fae\u524d\u7aef\u5e94\u7528\u7b80\u5355\u6613\u7528"),(0,r.kt)("li",{parentName:"ul"},"Router \u6a21\u5757\u63d0\u4f9b\u4e86\u8def\u7531\u9a71\u52a8\u3001\u4e3b\u5b50\u8def\u7531\u9694\u79bb\uff0c\u7528\u6237\u4ec5\u9700\u8981\u914d\u7f6e\u8def\u7531\u8868\u5e94\u7528\u5373\u53ef\u5b8c\u6210\u81ea\u4e3b\u7684\u6e32\u67d3\u548c\u9500\u6bc1\uff0c\u7528\u6237\u65e0\u9700\u5173\u5fc3\u5185\u90e8\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"Sandbox \u6a21\u5757\u4e3a\u5e94\u7528\u7684 Runtime \u63d0\u4f9b\u8fd0\u884c\u65f6\u9694\u79bb\u80fd\u529b\uff0c\u80fd\u6709\u6548\u9694\u79bb JS\u3001Style \u5bf9\u5e94\u7528\u7684\u526f\u4f5c\u7528\u5f71\u54cd"),(0,r.kt)("li",{parentName:"ul"},"Store \u63d0\u4f9b\u4e86\u4e00\u5957\u7b80\u5355\u7684\u901a\u4fe1\u6570\u636e\u4ea4\u6362\u673a\u5236"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83c\udfaf ",(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u5ea6\u53ef\u6269\u5c55\u7684\u63d2\u4ef6\u673a\u5236"),"\uff08coming soon...\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e1a\u52a1\u63d2\u4ef6\u6ee1\u8db3\u4e1a\u52a1\u65b9\u7684\u5404\u79cd\u5b9a\u5236\u9700\u6c42")))),(0,r.kt)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/d456c7d2235c41daa298aba69ade435f~tplv-em5hxbkur4-noop.image?width=1126&height=454",alt:"image.png"})),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u7528"},"\u4ec0\u4e48\u65f6\u5019\u7528"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u56e2\u961f\u6210\u5458\u591a\u3001\u9879\u76ee\u7c7b\u578b\u591a\uff0c\u5e76\u4e14\u60f3\u5c06\u5176\u6253\u9020\u6210\u300c\u5185\u805a\u7684\u5355\u4e2a\u4ea7\u54c1\u300d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7684\u56e2\u961f\u6210\u5458\u6765\u81ea\u591a\u4e2a\u56e2\u961f"),(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5185\u591a\u6761\u8fed\u4ee3\u51fa\u73b0\u9700\u6c42\u6324\u5151\uff0c\u5f71\u54cd\u6d4b\u8bd5\u3001\u53d1\u5e03\u6548\u7387"),(0,r.kt)("li",{parentName:"ul"},"\u8de8\u7a7a\u95f4\u3001\u8de8\u65f6\u95f4\u7ef4\u5ea6\u5bfc\u81f4\u56e2\u961f\u5185\u6280\u672f\u4f53\u7cfb\u65e0\u6cd5\u7edf\u4e00"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u524d\u7aef\u5e94\u7528\u9700\u8981\u8fbe\u5230\u300c\u5185\u805a\u7684\u5355\u4e2a\u4ea7\u54c1\u300d\u7279\u5f81"),(0,r.kt)("li",{parentName:"ul"},"\u300c\u5185\u805a\u7684\u5355\u4e2a\u4ea7\u54c1\u300d\u4e2d\u90e8\u5206\u5185\u5bb9\u5e0c\u671b\u8fbe\u5230\u72ec\u7acb\u5f00\u53d1\u3001\u72ec\u7acb\u53d1\u5e03\u3001\u72ec\u7acb\u6d4b\u8bd5\u3001\u72ec\u7acb\u7070\u5ea6\u7b49\u80fd\u529b")))}d.isMDXComponent=!0}}]);