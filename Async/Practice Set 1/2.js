const delayedAddition=(a,b)=>{
    setTimeout(()=>{
      const sum=a+b;
      console.log(sum);
    },4000);
  }
  
  //const delayedAddition = (a, b) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const sum = a + b;
  //       resolve(sum);
  //     }, 4000);
  //   });
  // };
  
  // delayedAddition(2, 3)
  //   .then(sum => {
  //     console.log(sum);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  
  
  
  delayedAddition(2, 3); 
  // 5