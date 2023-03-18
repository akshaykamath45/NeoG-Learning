const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile/NC002") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
            }
          });
        } else {
          reject({
            status: 404,
            message: "Resource not found"
          });
        }
      }, 2000);
    });
  };
  
  const displayOutput=document.querySelector("#output");
  
  fakeFetch("https://example.com/api/profile/NC001")
  .then((res)=>{
    if(res.status===200){
      displayOutput.innerText=`Welcome!, ${res.data.data.name} from ${res.data.data.institute}`
    }
  })
  .catch((err)=>{
    if(err.status===404){
      console.error(`${err.message}`);
      displayOutput.innerText=`Sorry,No Data Found`
    }
  })

// Output on the DOM should be: Welcome!, Roshan from neoG Camp