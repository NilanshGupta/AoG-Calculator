# AoG-Calculator

## How to make Add two Numbers Logic?
1) Create a new Intent name: `addTwoNumbers`.
2) Under Training phrases type: `add 5 and 6` and Change the parameters name: `number to a` & `number1 to b`.
3) Then go to Fulfillment session under intent. and `Enable webhook call for this intent`.
4) Now go to Fulfillment menu undersidebar and `Enable` the `Inline Editor`.
6) Define `intentMap.set('YourIntentName', FunctionsName)` Functions. For example in this intent I'm using 

    ```js  
        intentMap.set('addTwoNumbers', AddNumber);
    ```
7) Create a function named 'addTwoNumbers'.
    ```js
      function AddNumber(agent){
        var x =agent.parameters.a;
        var y =agent.parameters.b;
        var z =x+y;
        agent.add('sum of '+x+' and '+y+' = '+z);
      }
    ```
    
 8) Click on Deploy Button and Test it.

## Same you can make a logic for subtraction, multiplication and division.

### Developed By Sonakshi Shukla
