const delayedAlert=(msg,time)=>{
    setTimeout(()=>{
      console.log(msg);
    },time);
  }
  
  delayedAlert('Hello, world!', 2000);
  // Should display an alert box with the message, Hello, world!