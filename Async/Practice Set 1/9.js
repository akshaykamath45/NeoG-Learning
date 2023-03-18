const fakeFetch = (url) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
	    if (url === "https://example.com/api/data") {
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

const displayOutput=document.querySelector("#output");

fakeFetch("https://example.com/api/data")
.then((response)=>{
  if(response.status===200){
  displayOutput.innerText=`It is a ${response.data.message}`;
  }
})
.catch((err)=>{
  if(err.status===500){
    displayOutput.innerText=`${err.message}! The server crashed.Please try again in some time.`
  }
})

// Output on the DOM should be: 
// Internal Server Error! The server crashed. Please try again in some time.