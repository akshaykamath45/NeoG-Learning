const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile") {
          reject({
            status: 401,
            message: "Unauthorized Access"
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
  
  const displayOutput=document.querySelector("#output");
  
  fakeFetch("https://example.com/api/profile")
  .then((response)=>{
    if(response.status===200){
    displayOutput.innerText=`Login ${response.data.message},See your profile here`;
    }
  })
  .catch((err)=>{
    if(err.status===401){
      displayOutput.innerText=`${err.message}! Looks like you are not logged in. Please login to see your profile data.`
    }
  })
  
  
//   Output on the DOM should be: 
//   Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.