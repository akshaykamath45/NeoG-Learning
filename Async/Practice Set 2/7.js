const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/users") {
          reject({
            status: 500,
          message: "Internal Server Error"
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
  
  fakeFetch("https://example.com/api/users")
  .then((data)=>{
    outputElement.innerText=`${data.data.message}`;
    outputElement.style.color = "green";
  })
  .catch((err)=>{
    outputElement.innerText=`${err.message}`;
    outputElement.style.color = "red";
  
  })
  
  // Output on the DOM should be (in red color): 
  // Oops. Unexpected Error. Please try again.
  