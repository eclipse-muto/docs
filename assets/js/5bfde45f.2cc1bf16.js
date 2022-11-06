"use strict";(self.webpackChunkliveui_website=self.webpackChunkliveui_website||[]).push([[9293],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],l={id:"dashboard-by-example",title:"Dashboard By Example",sidebar_label:"Dashboard By Example",sidebar_position:1},s=void 0,u={unversionedId:"muto-edge/getting-started/dashboard-by-example",id:"muto-edge/getting-started/dashboard-by-example",title:"Dashboard By Example",description:"In this section, we will quickly describe how to start and get familiar with using Muto Dashboard by the way of examples.",source:"@site/docs/muto-edge/getting-started/dashboard-by-example.md",sourceDirName:"muto-edge/getting-started",slug:"/muto-edge/getting-started/dashboard-by-example",permalink:"/docs/docs/muto-edge/getting-started/dashboard-by-example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/muto-edge/getting-started/dashboard-by-example.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"dashboard-by-example",title:"Dashboard By Example",sidebar_label:"Dashboard By Example",sidebar_position:1},sidebar:"mutoSidebar",previous:{title:"Command Plugin By Example",permalink:"/docs/docs/muto-edge/getting-started/command-plugin-by-example"},next:{title:"Core",permalink:"/docs/docs/muto-edge/mutocore"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Definition",id:"definition",level:3},{value:"Installation",id:"installation",level:3},{value:"How to Start",id:"how-to-start",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we will quickly describe how to start and get familiar with using Muto Dashboard by the way of examples."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mqttx.app/",title:"Heading link"},"mqttx"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/",title:"Heading link"},"docker"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm/",title:"Heading link"},"npm >= 5"),(0,i.kt)("br",null))),(0,i.kt)("h3",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Dashboard is an extensible liveUI plugin that enables the user to communicate with Muto driven vehicles and their Digital Twins."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a dedicated workspace for dashboard.")),(0,i.kt)("p",null,"This project was bootstrapped with Create React App."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the repository:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/eclipse-muto/dashboard\n")),(0,i.kt)("h3",{id:"how-to-start"},"How to Start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install dependencies (from the root folder where package.json is located):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd yourdirectory/dashboard\nnpm install or npm i (identical)\nnpm run start or npm start (see difference)\n")),(0,i.kt)("p",null,"You should see "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u2139 \uff62wdm\uff63: Compiled successfully.\n")),(0,i.kt)("p",null,"and the server should start."),(0,i.kt)("p",null,"Here you'll be greeted by the page similar to the one in ",(0,i.kt)("inlineCode",{parentName:"p"},"Muto by Example"),"\nThe only difference is there's a new tab called ",(0,i.kt)("inlineCode",{parentName:"p"},"F1Tenth"),"\nIf you navigate to this tab you'll see the following: "),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/f1tenthpage.png",style:{scale:.5}})),(0,i.kt)("p",null,"Then you'll navigate to your desired vehicle (docs-bcx-01 in this case)\nYou'll be greeted by the Vehicle Details page"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/dashvehicledet.png",style:{scale:.5}})),(0,i.kt)("p",null,"When you move the joystick in the corresponding directions you should see the MQTTX responses."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/mqttfor.png",style:{scale:.5}})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/mqttback.png",style:{scale:.5}})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/mqttleft.png",style:{scale:.5}})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/mqttright.png",style:{scale:.5}})),(0,i.kt)("p",null,"What seperates this example from the ones before is that you can use the joystick here. Follow the steps in ",(0,i.kt)("inlineCode",{parentName:"p"},"Muto by Example")," and then you can give inputs through the joystick and observe the corresponding vehicle movement in foxglove."))}m.isMDXComponent=!0}}]);