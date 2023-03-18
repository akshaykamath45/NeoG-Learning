const fakeFetch = (url) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
	    if (url === "https://example.com/api/chat") {
	      reject({
	        status: 503,
	        message: "Service Unavailable"
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

fakeFetch("https://example.com/api/chat")
.then((response)=>console.log(response))
.catch((err)=>{
  if(err.status=="503"){
    outputDisplay.innerText="We are facing high demand at the moment. Please check back later in sometime."
    //console.error(err);
  }
});

// Output on the DOM should be: 
// We are facing high demand at the moment. Please check back later in sometime.