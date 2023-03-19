const first = () => 
new Promise((resolve,reject)=> {
  console.log('a');
  reject('b');
  console.log('c');
})
console.log('d');
first().then((data) => {
console.log(data);
}).catch(err=>console.log(err));
console.log('e')

// d
// a
// c
// e
// b

// When the code is initially executed, a global execution context is created and added to the call stack. The first statement in the global context is const first = () => ..., so a function named first is created and added to the global scope.

// The next statement is console.log('d');, which is executed immediately and logs 'd' to the console.

// The first() function is called, which creates a new Promise and logs 'a' to the console. However, before the Promise is resolved or rejected, the function returns, and the Promise is added to the job queue.

// The call stack is now empty, so the JavaScript engine checks the job queue for any pending tasks. It finds the Promise created by first() and executes its rejection handler, which logs 'b' to the console. The rejection handler is executed synchronously, so it is added to the call stack.

// After the rejection handler completes, the call stack is empty again. The JavaScript engine checks for any pending microtasks, finds none, and then checks for any pending events in the task/event queue.

// There are no pending events, so the JavaScript engine waits for any new events to be added to the task/event queue.

// Finally, the code outside the Promise (console.log('e')) is executed, logging 'e' to the console. This statement is added to the call stack and executed synchronously.