const fakeFetch = (url) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
	    if (url === "https://example.com/api/itemlist") {
	      reject({
	        status: 404,
	        message: "Items list not found."
	      });
	    } else {
	      resolve({
	        status: 200,
	        data: {
	          message: "Success",
	          data: [
	            { itemName: "Bread", price: 30 },
	            { itemName: "Water Bottle", price: 50 },
	            { itemName: "Dairy Milk", price: 20 }
	          ]
	        }
	      });
	    }
	  }, 2000);
	});
}

// Your Code here (Solution Given)
const displayOutput = document.querySelector("#output");

fakeFetch("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent =
        "The data you are looking for, does not exist.";
    }
  });

// Output on the DOM should be: 
// The data you are looking for, does not exist.