"use strict";(self.webpackChunkliveui_website=self.webpackChunkliveui_website||[]).push([[3812],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(4137)),i=["components"],l={id:"getting-started-react-native",title:"React Native",sidebar_label:"React Native"},p=void 0,s={unversionedId:"LiveUI/getting-started/getting-started-react-native",id:"LiveUI/getting-started/getting-started-react-native",title:"React Native",description:"In this section, we will quickly describe how to start using LiveUI with a React Native mobile application.",source:"@site/docs/LiveUI/getting-started/getting-started-react-native.md",sourceDirName:"LiveUI/getting-started",slug:"/LiveUI/getting-started/getting-started-react-native",permalink:"/docs/docs/LiveUI/getting-started/getting-started-react-native",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LiveUI/getting-started/getting-started-react-native.md",tags:[],version:"current",frontMatter:{id:"getting-started-react-native",title:"React Native",sidebar_label:"React Native"},sidebar:"mutoSidebar",previous:{title:"React",permalink:"/docs/docs/LiveUI/getting-started/getting-started-react"},next:{title:"Advanced",permalink:"/docs/docs/LiveUI/advanced/"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating an App",id:"creating-an-app",level:2},{value:"<strong><code>\x1dnpm start</code>\x1d</strong>",id:"npm-start",level:3},{value:"<strong><code>\x1dnpm run build</code>\x1d</strong>",id:"npm-run-build",level:3},{value:"Using Remote Components",id:"using-remote-components",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, we will quickly describe how to start using LiveUI with a React Native mobile application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are interested in React Web apps, you can ",(0,r.kt)("a",{parentName:"p",href:"getting-started-react"},"go to the react ")," section.")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/",title:"Heading link"},"node >= 8"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm/",title:"Heading link"},"npm >= 5"),(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"creating-an-app"},"Creating an App"),(0,r.kt)("p",null,"First, we need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"liveui")," wizard to create a new LiveUI app. To install the new package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @eclipse-muto/liveui -g\n")),(0,r.kt)("p",null,"After installation, you will have access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"liveui")," binary in your command line. You can verify that it is properly installed by simply running ",(0,r.kt)("inlineCode",{parentName:"p"},"liveui"),", which should present you with a help message listing all available commands."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npx @eclipse-muto/liveui")," can be run for the same purpose.")),(0,r.kt)("p",null,"To create a new LiveUI app with remotable components, you may choose one of the following methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"liveui\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"liveui create\n")),(0,r.kt)("p",null,"This prompt runs the LiveUI project wizard and will ask a project type and a project name. For this example, choose the project type as ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," and follow the wizard instructions. The wizard will generate your project and start to install the required packages. When it's done you can start to develop your first LiveUI project.  This project will contain a component that can be consumed by other web apps."),(0,r.kt)("p",null,"Once the installation is done, you can open your project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd <project-name>\n")),(0,r.kt)("p",null,"The initial project structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"your-liveui-native-app\n\u2502\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 __tests__\n\u251c\u2500\u2500 android\n\u251c\u2500\u2500 app.json\n\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 metro.config.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 index.js\n")),(0,r.kt)("p",null,"No configuration or complicated folder structures are created, only the files you need to build your app are added. To start the application run ",(0,r.kt)("strong",{parentName:"p"},"npm run ios")," or ",(0,r.kt)("strong",{parentName:"p"},"npm run android")," inside your React Native project folder:"),(0,r.kt)("p",null,"On IOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pod-install\nnpm run ios\n")),(0,r.kt)("p",null,"On Android:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run android     \n")),(0,r.kt)("p",null,"Inside the newly created project, you can run some built-in commands:"),(0,r.kt)("h3",{id:"npm-start"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"\x1dnpm start"),"\x1d")),(0,r.kt)("p",null,"Runs the app in development mode and serve the initial remote component. "),(0,r.kt)("p",null,"When you start the application open to view it in the emulator. You will see just a basic component that displays 'This is the Foo component..'. This application is no different from a traditional React Native application. However, LiveUI has added a ",(0,r.kt)("a",{parentName:"p",href:"../explore#remotes"},(0,r.kt)("inlineCode",{parentName:"a"},"remote"))," configuration for component that is running on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:5001/foo"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:5001/foo"))," and it is ready to be used in other React Native applications for development or deployment. Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js")," to change the initial remote component and see the browser to view your changes."),(0,r.kt)("h3",{id:"npm-run-build"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"\x1dnpm run build"),"\x1d")),(0,r.kt)("p",null,"Builds the remote component(s) for production to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," folder.\nIt correctly bundles the remote component in production mode and optimizes the build for the best performance."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This command is only responsible for building the remote component(s) not the whole application.")),(0,r.kt)("p",null,"Your component is ready to be deployed."),(0,r.kt)("p",null,"At this point you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run docker")," to generate a docker image."),(0,r.kt)("p",null,"In the next steps, you will learn more about how to use remote components."),(0,r.kt)("h2",{id:"using-remote-components"},"Using Remote Components"),(0,r.kt)("p",null,"In the previous sections we demonstrated how to create and run a basic LiveUI project that contains a remote component. In this section we will demonstrate how to consume these remote component(s) in a host application."),(0,r.kt)("p",null,"First we need an application (called host) to make use of our remote components. For the simplicity we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native"},"react-native init")," to create a React Native project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx react-native init myapp\ncd myapp\n")),(0,r.kt)("p",null,"After creating the project we will add the liveui npm packages to use remote components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @eclipse-muto/liveui-core @eclipse-muto/liveui-react-native\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These packages are responsible for initializing LiveUI configuration and consuming components that are running locally or remotely.")),(0,r.kt)("p",null,"Next, we will create a file that is used to configure the host."),(0,r.kt)("p",null,"Create a liveui.config.js file under the project folder with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"liveui init\n")),(0,r.kt)("p",null,"The command above will create a config file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="appDir/liveui.config.js"',title:'"appDir/liveui.config.js"'},"module.exports = {\n    // ...\n    // other configuration options\n    shares: {\n        react: require('react'),\n        'react-native': require('react-native'),\n    },\n    remotes: {\n        foo: 'http://localhost:5001/foo',\n    }\n}\n")),(0,r.kt)("p",null,"In the above config, we define the ",(0,r.kt)("a",{parentName:"p",href:"../explore#shares"},(0,r.kt)("inlineCode",{parentName:"a"},"shares"))," configuration option to tell what libraries, packages, components, or static files will be commonly used between the host application and ",(0,r.kt)("a",{parentName:"p",href:"../explore#remotes"},(0,r.kt)("inlineCode",{parentName:"a"},"remotes")),".  This will optimize the bundles that are used in runtime by avoiding duplications of libraries in the host and remote packages."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../explore#remotes"},(0,r.kt)("inlineCode",{parentName:"a"},"remotes"))," option is where we specify the name and URL of our component. If you remember, in the previous section when we start the application the remote component was running on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:5001/foo"},"http://localhost:5001/foo"),"."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," under the project folder and edit to initialize the config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/index.js"',title:'"src/index.js"'},"/**\n * @format\n */\n\nimport {AppRegistry} from 'react-native';\nimport App from './App';\nimport {name as appName} from './app.json';\n\n+ import liveui from '@eclipse-muto/liveui-core';\n+ import config from './liveui.config';\n\n+ liveui.initializeApp(config);\n\nAppRegistry.registerComponent(appName, () => App);\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," and edit it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/App.js"',title:'"src/App.js"'},"/**\n * Sample React Native App\n * https://github.com/facebook/react-native\n *\n * @format\n * @flow strict-local\n */\n\nimport React from 'react';\nimport {SafeAreaView} from 'react-native';\n+ import RemoteComponent from '@eclipse-muto/liveui-react-native';\n\n+ const Foo = () => <RemoteComponent name=\"foo\" />;\n\nconst App: () => React$Node = () => {\n  return (\n    <SafeAreaView>\n+      <Foo />\n    </SafeAreaView>\n  );\n};\n\nexport default App;\n")),(0,r.kt)("p",null,"We have define our remote component as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Foo = props =>  <RemoteComponent name="foo" {...props} />\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The value of the 'name'  should be the same as the name we defined in the config file for the remote component.")),(0,r.kt)("p",null,"Save changes and start the application. At the same time you should start the LiveUI app created in the previous section to see our first remote component."),(0,r.kt)("p",null,"That's it! You created your first LiveUI Mobile App. But there\u2019s more! You can use different styles to organize your codebase,  customizing the liveui.config allows you to use working with different codebases, deployment of multiple components, etc.  Read to learn more about LiveUI and explore the documentation!"))}d.isMDXComponent=!0}}]);