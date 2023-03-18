const delayedLoop=(num)=>{
    for(let i=0;i<num;i++){
      setTimeout(()=>{
        console.log("Hello");
      },(i+1)*1000);
    }
  }
  
  delayedLoop(3);
  // should print Hello three times after 1 second each
  // Output:
  // Hello -- after 1 second
  // Hello -- after another 1 second
  // Hello -- after another 1 second