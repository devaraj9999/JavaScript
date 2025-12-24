console.log("Start"); 

setTimeout(() => { 
    console.log("setTimeout callback");
 }, 1000); 
    
    Promise.resolve().then(() => { 
        console.log("Promise resolved"); 
    });
     console.log("End");