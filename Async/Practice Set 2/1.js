const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/post/comments") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
              {
                email: "hello@outlook.com",
                commentBody: "Good going a lot to learn from you awesome"
              },
              {
                email: "ram99@gmail.com",
                commentBody: "Anyone from Vadodara here"
              }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "No Comments found."
          });
        }
      }, 2000);
    });
  };
  
  const outputEl=document.querySelector("#output");
   // 
  fakeFetch("https://example.com/post/comments")
  .then((data)=>{
    let outputStr=" "
    if(data.status===200 && data.message==="Success"){
      for(let i=0;i<data.data.length;i++){
      outputStr+=`${i+1}. ${data.data[i].email} \n`;
     
      }
      outputEl.innerText=outputStr;
    }
  })
  .catch((err)=>{
    outputEl.innerText="No Comments found";
  })
  
//   Output on the DOM should be:
//   1. xyz@gmail.com
//   2. hello@outlook.com
//   3. ram99@gmail.com