const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/winner-team") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: ["Jhon", "Raju", "Anjali", "Sakshi"]
            }
          });
        } else {
          reject({
            status: 404,
            message: "No Users found."
          });
        }
      }, 2000);
    });
  };
  
  const outputElement=document.querySelector("#output");
  
  fakeFetch("https://example.com/winner-team")
  .then((data)=>{
    if(data.data.message==="Success"){
      let outputStr=" ";
  
      for(let i=0;i<data.data.data.length;i++){
        outputStr+=` ${data.data.data[i]}, `
      }
    outputElement.innerText=`Congratulation to the members of winning team ${outputStr} `;
    }
      console.log("Working")
    })
  // Output on the DOM should be:
  // Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.