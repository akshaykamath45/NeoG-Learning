const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/allbooks") {
          reject({
            status: 400,
            message: "Bad Request"
          });
        } else {
          resolve({
            status: 200,
            data: {
              message: "Success"
            }
          });
        }
      }, 2000);
    });
  };
  
  
  const outputElement = document.querySelector("#output");
  
  fakeFetch("https://example.com/api/allbooks")
  .then((data)=>{
    outputElement.innerText=`${data.data.message} !`
  })
  .catch((err)=>{
    outputElement.innerText=`${err.message}! Requested size too large.`
    outputElement.style.color="red"
  })
  
  // Output on the DOM should be: 
  // Bad Request! Requested size too large.