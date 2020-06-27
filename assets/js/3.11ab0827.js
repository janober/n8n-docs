(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(e,t,o){e.exports=o.p+"assets/img/final-workflow.f380b957.png"},358:function(e,t,o){e.exports=o.p+"assets/img/creating-the-cron-node.50f3e0ec.gif"},359:function(e,t,o){e.exports=o.p+"assets/img/creating-the-openweathermap-node.6a25c8fe.gif"},360:function(e,t,o){e.exports=o.p+"assets/img/creating-the-if-node.af39d325.gif"},361:function(e,t,o){e.exports=o.p+"assets/img/creating-the-twilio-node.27bdda07.gif"},362:function(e,t,o){e.exports=o.p+"assets/img/creating-the-noop-node.498edbd4.gif"},363:function(e,t,o){e.exports=o.p+"assets/img/workflow-running-with-true-output-from-the-if-node.8687d193.png"},364:function(e,t,o){e.exports=o.p+"assets/img/sms-sent-by-the-workflow.fc82d6e6.jpeg"},435:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"creating-your-first-workflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-workflow"}},[e._v("#")]),e._v(" Creating Your First Workflow")]),e._v(" "),n("p",[e._v("Let's create your first workflow in n8n. We'll create a workflow which will run every morning at 8 AM and will send an SMS if you should take a sweater with you. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/409",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on the website.")]),e._v(" "),n("p",[e._v("This workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("Cron")]),e._v(" - Specify when the workflow should start (be triggered)")]),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("OpenWeatherMap")]),e._v(" - Get weather details for a particular city")]),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("IF")]),e._v(" - Conditional logic to decide the flow of the workflow")]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[e._v("Twilio")]),e._v(" - Send an SMS")],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("NoOp")]),e._v(" - Do nothing (optional)")])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(357),alt:"The final workflow"}})]),e._v(" "),n("h2",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("We'll use the Cron trigger node for starting the workflow. Add a Cron node by clicking on the + button on the top right of the "),n("em",[e._v("Editor UI")]),e._v(". Click on the "),n("em",[e._v("Cron")]),e._v(" node under the section marked "),n("em",[e._v("Trigger")]),e._v(".")]),e._v(" "),n("p",[e._v("Double click on the Cron node to enter the "),n("em",[e._v("Node Editor")]),e._v(". Click on the "),n("em",[e._v("Add Cron Time")]),e._v(" button under the section marked "),n("em",[e._v("Trigger Times")]),e._v(". Since we want the workflow to run every day at 8 AM, we'll let the "),n("em",[e._v("Mode")]),e._v(" be 'Every Day' and set "),n("em",[e._v("Hour")]),e._v(" to 8.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(358),alt:"Creating the Cron node"}})]),e._v(" "),n("h2",{attrs:{id:"_2-openweathermap-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node")]),e._v(" "),n("p",[e._v("Add the OpenWeatherMap node by clicking on the + button and selecting the "),n("em",[e._v("OpenWeatherMap")]),e._v(" node. Double click on the node and create credentials for the node by clicking on the "),n("em",[e._v("Select Credentials")]),e._v(" dropdown list and selecting "),n("em",[e._v("Create New")]),e._v(".")]),e._v(" "),n("p",[e._v("You'll need to enter an "),n("em",[e._v("Access Token")]),e._v(" for the OpenWeatherMap API. You can find instructions on how to obtain that "),n("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("p",[e._v("We'll let the other options stay as they are. I'll enter the city name to "),n("code",[e._v("berlin,de")]),e._v(" here, feel free to enter another city's name. Click on the "),n("em",[e._v("Execute Node")]),e._v(" button on the top right to get the data from the API. You can then see the data from the API in JSON or Table format.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(359),alt:"Creating the OpenWeatherMap node"}})]),e._v(" "),n("h2",{attrs:{id:"_3-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("Add the IF node by clicking on the + button and selecting the "),n("em",[e._v("IF")]),e._v(" node. This is a conditional logic node that allows us to alter the flow of the workflow depending on the data that we get from the previous node(s).")]),e._v(" "),n("p",[e._v("Double click on the node, click on the "),n("em",[e._v("Add Condition")]),e._v(" button, and select "),n("em",[e._v("Number")]),e._v(" from the menu. Since the "),n("em",[e._v("Value 1")]),e._v(" (temperature) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[e._v("Add Expressions")]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[e._v("Variable Selector")]),e._v(". From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > Output Data > JSON > main > feels_like")])]),e._v(" "),n("p",[e._v("For the "),n("em",[e._v("Operation")]),e._v(" field, we'll let it be set to 'Smaller'. For the "),n("em",[e._v("Value 2")]),e._v(", I entered 18. This will ensure that the IF node returns true only if the weather is lower than 18°C. Feel free to change this to some other value.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(360),alt:"Creating the IF node"}})]),e._v(" "),n("h2",{attrs:{id:"_4-twilio-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-twilio-node"}},[e._v("#")]),e._v(" 4. Twilio node")]),e._v(" "),n("p",[e._v("Add the Twilio node by clicking on the + button and selecting the "),n("em",[e._v("Twilio")]),e._v(" node. Connect this node with the "),n("em",[e._v("true")]),e._v(" output of the IF node.")]),e._v(" "),n("p",[e._v("Double click on the node and create credentials for the node by clicking on the "),n("em",[e._v("Select Credentials")]),e._v(" dropdown list and selecting "),n("em",[e._v("Create New")]),e._v(".")]),e._v(" "),n("p",[e._v("You'll need to enter an "),n("em",[e._v("Account SID")]),e._v(" and "),n("em",[e._v("Auth Token")]),e._v(" for the Twilio API. You can find instructions on how to obtain that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[e._v("here")]),e._v(". Now, enter the phone number from which you'll be sending the message in the "),n("em",[e._v("From")]),e._v(" field (you'll have to create a Trial Number for yourself in the Twilio "),n("a",{attrs:{href:"https://www.twilio.com/console",target:"_blank",rel:"noopener noreferrer"}},[e._v("console"),n("OutboundLink")],1),e._v("). Enter the phone number to which you'll be sending the message in the "),n("em",[e._v("To")]),e._v(" field (this will have to be the phone number you verified your Twilio account with, if you are using a trial account).")],1),e._v(" "),n("p",[e._v("You can now add the message that you want to send yourself if the temperature is lower than 18°C. This is what I added in the "),n("em",[e._v("Message")]),e._v(" field (you can click on "),n("em",[e._v("Add Expressions")]),e._v(" and paste this):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Wear a sweater today, it is {{$node["OpenWeatherMap"].json["main"]["feels_like"]}}°C outside right now.\n')])])]),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(361),alt:"Creating the Twilio node"}})]),e._v(" "),n("h2",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("If the temperature is greater than 18°C, we don't want the workflow to do anything. We'll use the NoOp node for that. Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. Add the NoOp node by clicking on the + button and selecting the "),n("em",[e._v("NoOp")]),e._v(" node. Connect this node with the "),n("em",[e._v("false")]),e._v(" output of the "),n("em",[e._v("IF")]),e._v(" node.")]),e._v(" "),n("p",[e._v("To test the workflow, click on the "),n("em",[e._v("Execute Workflow")]),e._v(" button at the bottom of the "),n("em",[e._v("Editor UI")]),e._v(". I didn't get an SMS in my case since it was 24°C in Berlin at the time of writing this article, and the workflow ended at the NoOp node.")]),e._v(" "),n("p",[e._v("Don't forget to save the workflow and then click on the Activate button on the top right of the screen to activate the workflow. Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(362),alt:"Creating the NoOp node"}})]),e._v(" "),n("p",[e._v("I raised the value of "),n("em",[e._v("Value 2")]),e._v(" in the "),n("em",[e._v("IF")]),e._v(" node from 18 to 27 to see what the SMS would look like. This is how the finished workflow and the SMS looked like.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(363),alt:"Workflow running with true output from the IF node"}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(364),alt:"SMS sent by the workflow"}})]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Congratulations on creating your first workflow with n8n 🥳")]),e._v(" "),n("p",[e._v("As a next step, you can get updates on whether you should carry an umbrella or maybe sunglasses. n8n enables you to connect anything to everything and create powerful workflows in the process. Did you extend the workflow in this example with additional functionalities or nodes? Don't forget to submit them on the "),n("a",{attrs:{href:"https://n8n.io/workflows",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),n("OutboundLink")],1),e._v(" to share them with the community.")]),e._v(" "),n("p",[e._v("Did you run into any troubles while working on your first workflow? Don't be shy to ask questions or share the challenges you are facing in the community "),n("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),n("OutboundLink")],1),e._v(", we are all learners here 🙌")])])}),[],!1,null,null,null);t.default=r.exports}}]);