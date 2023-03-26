const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/login") {
          resolve({
            status: 200,
            data: {
              auth: true
            }
          });
        } else {
          reject({
            status: 404,
            message: "Status not found"
          });
        }
      }, 2000);
    });
  };
  
  const outputElement=document.querySelector("#output")
  
  fakeFetch("https://example.com/login")
  .then((data)=>{
    if(data.data.auth){
      outputElement.innerText="Verified"
    }
  })
  .catch((err)=>outputElement.innerText="Not Verified")
  
  // Output on the DOM should be:
  // Verified