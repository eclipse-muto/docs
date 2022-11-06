"use strict";(self.webpackChunkliveui_website=self.webpackChunkliveui_website||[]).push([[8107],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],l={id:"by-example",title:"Muto By Example",sidebar_label:"Muto By Example",sidebar_position:1},s=void 0,u={unversionedId:"muto-edge/getting-started/by-example",id:"muto-edge/getting-started/by-example",title:"Muto By Example",description:"In this section, we will quickly describe how to start and get familiar with using Muto runtime by the way of examples.",source:"@site/docs/muto-edge/getting-started/by-example.md",sourceDirName:"muto-edge/getting-started",slug:"/muto-edge/getting-started/by-example",permalink:"/docs/docs/muto-edge/getting-started/by-example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/muto-edge/getting-started/by-example.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"by-example",title:"Muto By Example",sidebar_label:"Muto By Example",sidebar_position:1},sidebar:"mutoSidebar",previous:{title:"Getting Started",permalink:"/docs/docs/muto-edge/getting-started/"},next:{title:"Command Plugin By Example",permalink:"/docs/docs/muto-edge/getting-started/command-plugin-by-example"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Starting a device with muto and F1Tenth simulator example",id:"starting-a-device-with-muto-and-f1tenth-simulator-example",level:2},{value:"Edit your muto configuration",id:"edit-your-muto-configuration",level:3},{value:"Launch a simulated muto device in a docker container",id:"launch-a-simulated-muto-device-in-a-docker-container",level:3},{value:"What happened ?",id:"what-happened-",level:3},{value:"Simulation and Data Observation using Muto Dashboard and Foxglove",id:"simulation-and-data-observation-using-muto-dashboard-and-foxglove",level:3},{value:"Visualization with the Foxglove Studio",id:"visualization-with-the-foxglove-studio",level:3},{value:"RECAP",id:"recap",level:3}],m={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will quickly describe how to start and get familiar with using Muto runtime by the way of examples."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/",title:"Heading link"},"docker"),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm/",title:"Heading link"},"npm >= 5"),(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"starting-a-device-with-muto-and-f1tenth-simulator-example"},"Starting a device with muto and F1Tenth simulator example"),(0,o.kt)("h3",{id:"edit-your-muto-configuration"},"Edit your muto configuration"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yaml")," under the src folder and edit to initialize the the host app with the LiveUI config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="example.yaml"',title:'"example.yaml"'},'  muto:\n    stack_topic: /stack\n    twin_topic: /twin\n    type: simulator\n-   twin_url: "http://localhost:8080"\n+   twin_url: "http://ditto:ditto@sandbox.composiv.ai"\n    commands:\n        - name: ros/topic\n          service: rostopic_list\n          plugin: CommandPlugin\n        - name: ros/topic/info\n          service: rostopic_info\n          plugin: CommandPlugin\n        - name: ros/topic/echo\n          service: rostopic_echo\n          plugin: CommandPlugin\n        - name: ros/node\n          service: rosnode_list\n          plugin: CommandPlugin\n        - name: ros/node/info\n          service: rosnode_info\n          plugin: CommandPlugin\n        - name: ros/param\n          service: rosparam_list\n          plugin: CommandPlugin\n        - name: ros/param/get\n          service: rosparam_get\n          plugin: CommandPlugin\n        - name: bcx/rc\n          service: bcx_remotecontrol\n          plugin: CommandPlugin\n    pipelines:\n        - name:  start\n          pipeline:\n            - sequence:\n              - service: muto_compose\n                plugin: ComposePlugin\n              - service: muto_start_stack\n                plugin: ComposePlugin\n          compensation:\n            - service: muto_kill_stack\n              plugin: ComposePlugin   \n        - name:  kill\n          pipeline:\n            - sequence:\n              - service: muto_compose\n                plugin: ComposePlugin\n              - service: muto_kill_stack\n                plugin: ComposePlugin\n          compensation:\n            - service: muto_kill_stack\n              plugin: ComposePlugin \n        - name:  apply\n          pipeline:\n            - sequence:\n              - service: muto_compose\n                plugin: ComposePlugin\n              - service: muto_apply_stack\n                plugin: ComposePlugin\n          compensation:\n            - service: muto_kill_stack\n              plugin: ComposePlugin \n    mqtt:\n-     host: localhost \n+     host: sandbox.composiv.ai\n      port: 1883\n      keep_alive: 60\n      user: none\n      password: none\n    thing:\n      namespace: org.eclipse.muto.sandbox.f1tenth # subject to change\n      anonymous: False  # Use this for automatically generated id (uuid based)\n      #   if anonymous is True or anynoymous param is missing, name/id will be auto generated\n      # TODO: edit the name below\n+     name: bcx-f1tenth-01\n')),(0,o.kt)("h3",{id:"launch-a-simulated-muto-device-in-a-docker-container"},"Launch a simulated muto device in a docker container"),(0,o.kt)("p",null,"Muto has 3 main docker images."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ROS image")),(0,o.kt)("p",null,"This image is the typical standard ROS image + ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ros/",title:"Header link"},"ROS Docker Image"),(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Standalone Muto Image"),(0,o.kt)("p",{parentName:"li"},"This image contains the ROS Image + Muto Core , Muto Composer, Muto Messages and Muto Agent.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Demo Image"),(0,o.kt)("p",{parentName:"li"},"This image contains the Standalone Muto Image with the F1Tenth algorithms such as :"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Gap follower"),(0,o.kt)("li",{parentName:"ul"},"Wall follower"),(0,o.kt)("li",{parentName:"ul"},"Time Elastic Band"),(0,o.kt)("li",{parentName:"ul"},"Rosbridge")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --name muto-demo --rm -it \\\n   -v $(pwd)/example.yaml:/home/muto/launch/config/muto.yaml  \\\n   -p 7777:7777 -p 11311:11311  \\\n   composiv/muto-demo:noetic-ros-base-focal  \\\n   /bin/bash -c "source devel/setup.bash && roslaunch launch/demo.launch"\n')),(0,o.kt)("h3",{id:"what-happened-"},"What happened ?"),(0,o.kt)("p",null,"So, what happened ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Muto agent, Muto Composer and Muto Core launched on the vehicle.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We subscribed to ditto and the rosbridge which provides the service through the websocket became online through the port that we defined. (7777 in this case)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Connected with result code Success\nSubscribed to:  org.eclipse.muto.sandbox.f1tenth:docs-bcx-01/#\n...\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Why did these items launch ?")," "),(0,o.kt)("p",null,"The corresponding items were insterted within the .launch file, hence we can see the items."),(0,o.kt)("p",null,"Now for the next step;"),(0,o.kt)("h3",{id:"simulation-and-data-observation-using-muto-dashboard-and-foxglove"},"Simulation and Data Observation using Muto Dashboard and Foxglove"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("a",{parentName:"li",href:"https://dashboard.composiv.ai/",title:"Heading link"},"composiv dashboard"),(0,o.kt)("br",null))),(0,o.kt)("p",null,"Here we are greeted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"summary screen"),".\nThis screen has all the vehicles and stacks that are registered."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/summary_screen.png",style:{scale:.5}})),(0,o.kt)("p",null,"Now we navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Vehicle List"),"\nYou can see there are several vehicles that are registered here and the ones that are online are designated depending on their status.\nTo try out the device you can kill the docker image and restart a new one and experiment."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/vehicles.png",style:{scale:.5}})),(0,o.kt)("p",null,"When you click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Vehicle Detail")," we are greeted by the default design, however we can also see the console output the we observed just now in here."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/vehicle_detail.png",style:{scale:.5}})),(0,o.kt)("p",null,"If you open up ",(0,o.kt)("inlineCode",{parentName:"p"},"muto agent")," from plugins you can see the services supported by muto agent.\nAlso the rosnode information matches with the corresponding line in our yaml file hence the buttons can work."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/agent_nodes.png",style:{scale:.5}})),(0,o.kt)("p",null,"Now let's work with a stack. These are the stacks stored in the ditto twin server.\nAny one of these stacks can be run if there's current provisioning. (Which is provided for you guys.)\nThe structure can be defined as a linear flow.\nIf you navigate to the stacks tab you see the ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," buttons. if you press set, we can see that something's going on in our console. If not, this may be the result of a refresh issue due to syncronization. You can work around this issue by returning to vehicle list and coming back."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/stackset.png",style:{scale:.5}})),(0,o.kt)("p",null,"After setting the stack, you can observe that the ",(0,o.kt)("inlineCode",{parentName:"p"},"current stack id")," has changed. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/currentstack.png",style:{scale:.5}})),(0,o.kt)("p",null,"When this list updates you'll see ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," buttons.\nIt's pretty straightforward, ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," executes the stack and ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," stops the execution.\nWhen you press start you'll see activity in your console.\nAfter if you navigate back to the node list, you can see all the nodes that muto composer summoned. (Cass-gap-follower for instance)\nIf you wish to see the parameters used by the system, you can easily do so by navigating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameters")," tab and opening it."),(0,o.kt)("h3",{id:"visualization-with-the-foxglove-studio"},"Visualization with the Foxglove Studio"),(0,o.kt)("p",null,"Now navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://studio.foxglove.dev/?layoutId=6fa30c07-f383-4b8d-9111-09947663e371",title:"Heading link"},"foxglove studio webbsite"),". Click on Open Connection and change the Port ID from ",(0,o.kt)("inlineCode",{parentName:"p"},"9090")," to your own port ID. In this example, we set the websoocket port to 7777, so set the data connection to ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://locahost:7777")," and  You should be greeted by a layout similar to :"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/foxglove_1.png",style:{scale:.5}})),(0,o.kt)("p",null,"Now we we can import the ",(0,o.kt)("a",{target:"_blank",href:n(1328).Z},"layout"),". These layouts will display predfined panels suitable for visualizarion o\u0131f our example. You'll notice a panel named Publist with the  preset ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," topic. It publishes given keystrokes just like a keyboard. It works like a toggle switch. for instance if you want to start the autopilot, you publish ",(0,o.kt)("inlineCode",{parentName:"p"},'"n"')," and if you want to stop it you need to republish the same message."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/foxglove_2.png",style:{scale:.5}})),(0,o.kt)("p",null,"We have the vehicle telemetry in the dashboard but we can also see it here if we wish to do so."),(0,o.kt)("p",null,"Now let's get back to the vehicle page. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Topics")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"/drive"),"."),(0,o.kt)("p",{align:"left"},(0,o.kt)("img",{src:"../../../img/drivetopic.png",style:{scale:.5}})),(0,o.kt)("p",null,"Here we can see all of the telemetry data associated with our drive topic such as ackermann messages."),(0,o.kt)("p",null,"If you click on ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," it will give you an output which'll take you to the same telemetry page."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/addtelemetry.png",style:{scale:.5}})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../img/drivetopicinternal.png",style:{scale:.5}})),(0,o.kt)("p",null,"Since this runs on MQTTX protocol, you can copy the corresponding information to memory."),(0,o.kt)("p",null,'And another feature is that anybody who connects to your MQTT server can "listen" to the published data.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You'll start to see the data when you click on drive and start respectively")),(0,o.kt)("h3",{id:"recap"},"RECAP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WHAT HAPPENED ?"),(0,o.kt)("p",{parentName:"li"},"Let's have a quick recap"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We checked our topics and defined a telemetry definition."),(0,o.kt)("li",{parentName:"ol"},"We published said definition and we observed it on our screen."),(0,o.kt)("li",{parentName:"ol"},"We stopped the stack and the telemetry data halted. BUT we'll still see the data with every refresh since it's memorized."),(0,o.kt)("li",{parentName:"ol"},"Lastly we checked out similar topic datas using foxglove. (BE CAREFUL Since you don't have the option to set a custom rate in foxglove, you can overwork your system and your computer may slow down quite a bit.)")))}d.isMDXComponent=!0},1328:function(e,t,n){t.Z=n.p+"assets/files/FoxgloveLayout-F1Tenth-58ce944c59145cf53a089d3131e7b74a.json"}}]);