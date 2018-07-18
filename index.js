// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}

//Intent Map function 
//agent is used to give the values back to Assistant. 
function AddNumber(agent){
    var x =agent.parameters.a;
    var y =agent.parameters.b;
    var z =x+y;
    agent.add('sum of '+x+' and '+y+' = '+z);
}

function SubNumber(agent){
    var x =agent.parameters.a;
    var y =agent.parameters.b;
    var z =x-y;
    agent.add('sub of '+x+' and '+y+' = '+z);
}

function mulNumber(agent){
    var x =agent.parameters.a;
    var y =agent.parameters.b;
    var z =x*y;
    agent.add('Mul of '+x+' and '+y+' = '+z);
}

function divisionNumber(agent){
    var x =agent.parameters.a;
    var y =agent.parameters.b;
    var z =x/y;
    agent.add('Division of '+x+' and '+y+' = '+z);
}

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  // Custom
  intentMap.set('addTwoNumbers', AddNumber);
  intentMap.set('subTwoNumbers', SubNumber);
  intentMap.set('mulTwoNumbers', mulNumber);
  intentMap.set('divisionTwoNumbers', divisionNumber);
  
  agent.handleRequest(intentMap);
});
