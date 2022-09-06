"use strict";(self.webpackChunkliveui_website=self.webpackChunkliveui_website||[]).push([[4278],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),l=["components"],a={id:"building",title:"Building",sidebar_label:"Building",sidebar_position:8},c=void 0,u={unversionedId:"LiveUI/advanced/building",id:"LiveUI/advanced/building",title:"Building",description:"npm run build",source:"@site/docs/LiveUI/advanced/building.md",sourceDirName:"LiveUI/advanced",slug:"/LiveUI/advanced/building",permalink:"/docs/docs/LiveUI/advanced/building",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LiveUI/advanced/building.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"building",title:"Building",sidebar_label:"Building",sidebar_position:8},sidebar:"mutoSidebar",previous:{title:"Custom Options",permalink:"/docs/docs/LiveUI/advanced/profile-options"},next:{title:"Configure LiveUI",permalink:"/docs/docs/LiveUI/explore/"}},p={},d=[],s={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"npm run build"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To do this, it must be created by the LiveUI generator.")),(0,i.kt)("p",null,"Preps your components for deployment (does not run tests). Optimizes and minifies all files, piping them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/dist")," folder."),(0,i.kt)("p",null,"Upload the contents of docker/dist to your web server to see your work live!"),(0,i.kt)("p",null,"Also, the docker folder includes a Dockerfile to dockerize all components. "),(0,i.kt)("p",null,"Run the following command at the root of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker build -t liveui/live-components:latest ./docker/\n")),(0,i.kt)("p",null,"To run the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --rm -dit -p 6767:80 liveui/live-components:latest\n")),(0,i.kt)("p",null,"Your components will be server at http://localhost:6767:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:6767/<component-name>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," Component name you created in live-components.")))}f.isMDXComponent=!0}}]);