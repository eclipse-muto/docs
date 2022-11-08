"use strict";(self.webpackChunkliveui_website=self.webpackChunkliveui_website||[]).push([[9293],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],l={id:"dashboard-by-example",title:"Dashboard By Example",sidebar_label:"Dashboard By Example",sidebar_position:1},s=void 0,p={unversionedId:"muto-edge/getting-started/dashboard-by-example",id:"muto-edge/getting-started/dashboard-by-example",title:"Dashboard By Example",description:"In this quick start section, we will quickly demonstrate how to use and extending Muto Dashboard",source:"@site/docs/muto-edge/getting-started/dashboard-by-example.md",sourceDirName:"muto-edge/getting-started",slug:"/muto-edge/getting-started/dashboard-by-example",permalink:"/docs/docs/muto-edge/getting-started/dashboard-by-example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/muto-edge/getting-started/dashboard-by-example.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"dashboard-by-example",title:"Dashboard By Example",sidebar_label:"Dashboard By Example",sidebar_position:1},sidebar:"mutoSidebar",previous:{title:"Command Plugin By Example",permalink:"/docs/docs/muto-edge/getting-started/command-plugin-by-example"},next:{title:"Core",permalink:"/docs/docs/muto-edge/mutocore"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Definition",id:"definition",level:2},{value:"Running the Dashboard Locally",id:"running-the-dashboard-locally",level:3},{value:"How to Start",id:"how-to-start",level:3},{value:"Creating a new Remote Control Plugin",id:"creating-a-new-remote-control-plugin",level:3},{value:"<strong><code>\x1dnpm start</code>\x1d</strong>",id:"npm-start",level:3},{value:"Adding the new components to the Dashboard",id:"adding-the-new-components-to-the-dashboard",level:3},{value:"MQTT Messages",id:"mqtt-messages",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this quick start section, we will quickly demonstrate how to use and extending Muto Dashboard"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mqttx.app/",title:"Heading link"},"mqttx"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/",title:"Heading link"},"docker"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm/",title:"Heading link"},"npm >= 5"),(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Muto Dashboard is an example web based user interface for managing and monitoring ",(0,r.kt)("inlineCode",{parentName:"p"},"Eclipse Muto")," concepts such as ",(0,r.kt)("inlineCode",{parentName:"p"},"EdgeDevices")," (Cars) and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stacks")," (ROS software) running on these devices. You can extend the Dashboard with ",(0,r.kt)("a",{parentName:"p",href:"../../LiveUI/"},"liveUI plugins")," that enables the user to communicate with Muto driven vehicles and their ",(0,r.kt)("inlineCode",{parentName:"p"},"Digital Twins"),". An example ",(0,r.kt)("a",{parentName:"p",href:"../../muto-dashboard"},(0,r.kt)("inlineCode",{parentName:"a"},"Muto Dashboard"))," that works with ",(0,r.kt)("a",{parentName:"p",href:"https://sandbox.composiv.ai"},(0,r.kt)("inlineCode",{parentName:"a"},"Muto Sandbox"))," is is made available to you at ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.composiv.ai"},"https://dashboard.composiv.ai")),(0,r.kt)("h3",{id:"running-the-dashboard-locally"},"Running the Dashboard Locally"),(0,r.kt)("p",null,"Create a work directory to clone the Dashboard source code from Github repository and start it, and then follow these steps to use and extend the dashboard.  This project was bootstrapped with ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),", you can read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone the repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/eclipse-muto/dashboard\n")),(0,r.kt)("h3",{id:"how-to-start"},"How to Start"),(0,r.kt)("p",null,"First Install npm dependencies (from the root folder where package.json is located):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd yourdirectory/dashboard\nnpm install or npm i (identical)\nnpm run start or npm start (see difference)\n")),(0,r.kt)("p",null,"You should see "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u2139 \uff62wdm\uff63: Compiled successfully.\n")),(0,r.kt)("p",null,"and the server should start. You will be greeted by the page similar to the one in ",(0,r.kt)("inlineCode",{parentName:"p"},"Muto by Example"),"\nThe only difference is that we will ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a new page")," to remotely control the ",(0,r.kt)("inlineCode",{parentName:"p"},"F1Tenth")," simualted car"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../img/summary_screen.png",style:{scale:.5}})),(0,r.kt)("h3",{id:"creating-a-new-remote-control-plugin"},"Creating a new Remote Control Plugin"),(0,r.kt)("p",null,"We will create a new plugin project that can be added to the dasboard. Plugins are micro frontends that can be dynamically assembled into a parent application at runtime. You should consult the ",(0,r.kt)("a",{parentName:"p",href:"../../LiveUI"},"LiveUI")," sections of these document and other examples to learn more about them. We will basically follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"../../LiveUI/getting-started"},"here")," to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard Plugin"),"."),(0,r.kt)("p",null,"First, we need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"liveui")," wizard to create a new LiveUI app. To install the new package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @eclipse-muto/liveui -g\n")),(0,r.kt)("p",null,"After installation, you will have access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"liveui")," binary in your command line. You can verify that it is properly installed by simply running ",(0,r.kt)("inlineCode",{parentName:"p"},"liveui"),", which should present you with a help message listing all available commands."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npx @eclipse-muto/liveui")," can be run for the same purpose.")),(0,r.kt)("p",null,"To create a new LiveUI app with remotable components, you may choose one of the following methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"% nnpx  @eclipse-muto/liveui\n _ _              _\n| (_)_ _____ _  _(_)\n| | \\ V / -_) || | |\n|_|_|\\_/\\___|\\_,_|_|\nhttps://eclipse-muto.github.io/docs/\n\nCreate a new liveui project:\n? Please choose a project type. react - Create a liveui react project\n? Project name: f1tenth\n? Enable Typescript? (Y/n)\n")),(0,r.kt)("p",null,"This prompt runs the LiveUI project wizard and will ask a project type and a project name. For this example, choose the project type as ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," and follow the wizard instructions (use f1tenth as the name, and choose Typescript as the programming language). The wizard will generate your project and start to install the required packages. When it's done you can start to develop your first LiveUI project.  This project will contain a component that can be consumed by other web apps."),(0,r.kt)("p",null,"Once the installation is done, you can open your project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd f1tenth\n")),(0,r.kt)("p",null,"The initial project structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"f1tenth\n\u2502\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 internals\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u2514\u2500\u2500 index.html\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 index.js\n")),(0,r.kt)("p",null,"No configuration or complicated folder structures are created, only the files you need to build your app are added. Inside the newly created project, you can now run the following commands.  Now add a src/liveui.config.js ",(0,r.kt)("a",{parentName:"p",href:"../../LiveUI/advanced"},"advanced configuration")," as decribed here. You can find the enterise source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Eclipse-SDV-Hackathon-BCX/hackchallenge-driving-score/tree/main/sources/muto/plugins/f1tenth"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/liveui.config.js"',title:'"src/liveui.config.js"'},"{\n    hotReloadContext: 'src',\n    devPort: 4007,\n    microPort: 5007,\n    exposes: {\n        'f1tenth': './src/index.tsx'\n    },\n    shared: [\n        'react',\n        'react-dom',\n        'react-router-dom',\n        '@patternfly/react-core',\n        '@patternfly/react-icons',\n        'html-loader',\n        'style-loader',\n        'uuid',\n        'graphql',\n        '@apollo/client'   \n\n    ],\n}\n")),(0,r.kt)("p",null,"Also make the changes for the required Javascript libraries to the package.json so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "f1tenth",\n  ...\n  "peerDependencies": {\n+   "@apollo/client": "^3.7.0",\n+   "@patternfly/patternfly": "^4.159.1",\n+   "@patternfly/react-core": "^4.175.4",\n+   "@patternfly/react-icons": "^4.26.4",\n+   "css-loader": "^3.5.3",\n+   "file-loader": "^6.0.0",\n+   "graphql": "^15.8.0",\n+   "html-loader": "~1.1.0",\n+   "image-webpack-loader": "^6.0.0",\n+   "react": ">=16",\n+   "react-dom": ">=16",\n+   "react-router-dom": "^5.3.0",\n+   "react-scripts": "5.0.1",\n+   "style-loader": "^1.2.1",\n+   "svg-url-loader": "^5.0.0",\n+   "url-loader": "^4.1.0",\n+   "uuid": "^8.3.2"\n  },\n  "devDependencies": {\n    ...\n+    "webpack": "4.44.2"\n  },\n  "dependencies": {\n+    "mqtt": "^4.3.7",\n+    "react-joystick-component": "^4.1.0",\n+    "react-json-view": "^1.21.3"\n  }\n}\n')),(0,r.kt)("h3",{id:"npm-start"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"\x1dnpm start"),"\x1d")),(0,r.kt)("p",null,"Runs the app in development mode and serve the initial remote component. "),(0,r.kt)("p",null,"This application is no different from a traditional React application. However, LiveUI has added a ",(0,r.kt)("a",{parentName:"p",href:"../../LiveUI/explore#remotes"},(0,r.kt)("inlineCode",{parentName:"a"},"remote"))," configuration for component that is running on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:5007"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:5007"))," and it is ready to be used in other React applications for development or deployment. "),(0,r.kt)("h3",{id:"adding-the-new-components-to-the-dashboard"},"Adding the new components to the Dashboard"),(0,r.kt)("p",null,"Next, we will switch to the dashboard project and edit the liveui.config.js under the src folder to add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/liveui.config.js"',title:'"src/liveui.config.js"'},'const config = {\n    ...\n    remotes: {\n+      "f1tenth": "http://localhost:5007/f1tenth",\n        "dashboard-device": global.__DEV__ ? \'http://localhost:5005/dashboard-device\' : `/dashboard-device?${timestamp}`,\n        "dashboard-stack": global.__DEV__ ? \'http://localhost:5006/dashboard-stack\' : `/dashboard-stack?${timestamp}`,\n    },\n}\nexport default config;\n')),(0,r.kt)("p",null,"And add the new plugin to the Dashboard menu by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/containers/routes.tsx"',title:'"src/containers/routes.tsx"'},'  \n  // Code deleted for brevity\n\n  const ParamList= props =>  <RemoteComponent  form={{component: "ParamList", from: "dashboard-device"}}  {...props} />\n  const ParamDetail= props =>  <RemoteComponent  form={{component: "ParamDetail", from: "dashboard-device"}}  {...props} />\n\n\n+ const F1tenthList= props =>  <RemoteComponent  form={{component: "VehicleList", from: "f1tenth"}} {...props} />\n+ const F1tenthVehicleDetail= props =>  <RemoteComponent  form={{component: "VehicleDetail", from: "f1tenth"}} {...props} />\n  \n  // Code deleted for brevity\n\n+ {\n+   component: F1tenthList,\n+   exact: true,\n+   isAsync: true,\n+   label: \'F1Tenth\',\n+   path: \'/f1tenth\',\n+   title: \'Eclipse Muto | Vehicle List\',\n+ },  \n+ {\n+   component: F1tenthVehicleDetail,\n+   exact: true,\n+   isAsync: true,\n+   //label: \'F1Tenth Vehicle Controls\',\n+   path: \'/f1tenth/:thingid\',\n+   title: \'Eclipse Muto | F1Tenth Vehicle Controls\',\n+ },\n\n')),(0,r.kt)("p",null,"Run npm start and Navigate to your car and give it a try! In this example we add to the ones before so that you can use the joystick for remote control. Follow the steps in ",(0,r.kt)("inlineCode",{parentName:"p"},"Muto by Example")," and then you can give inputs through the joystick and observe the corresponding vehicle movement in foxglove."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../img/remotecontrol.png",style:{scale:.5}})),(0,r.kt)("h3",{id:"mqtt-messages"},"MQTT Messages"),(0,r.kt)("p",null,"You can inspect th mqtt messages between the Dashboard and Eclipse Muto components using the ",(0,r.kt)("a",{parentName:"p",href:"https://mqttx.app/"},"MQTTX")," tool.  Connect to mqtt://sandbox.composiv.ai:1883 ans subscribe to ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),". When you move the joystick in the corresponding directions you should see the MQTTX messages."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../img/mqttfor.png",style:{scale:.5}})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../img/mqttback.png",style:{scale:.5}})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../img/mqttleft.png",style:{scale:.5}})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"../../../img/mqttright.png",style:{scale:.5}})))}u.isMDXComponent=!0}}]);