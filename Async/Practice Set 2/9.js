const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!(url === "https://example.com/welcome")) {
          reject({
            status: 511,
            message: "Network auth required"
          });
        } else {
          resolve({
            status: 200,
            data: {
              logged: true
            }
          });
        }
      }, 2000);
    });
  };
  
  
  const outputElement = document.querySelector("#output");
  
  fakeFetch("https://example.com/welcome")
  .then((data)=>{
    if(data.status===200 && data.data.logged){
      outputElement.innerText="Welcome to the server";
    }
  })
  .catch((err)=>{
    outputElement.innerText=`${err.message}.Please try again.`
  })
  
  // Output on the DOM should be: 
  // As per the response from serve