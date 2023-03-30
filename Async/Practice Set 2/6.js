const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/productlist") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { itemName: "Shoes", price: 100, quantity: 2 },
              { itemName: "Hat", price: 350, quantity: 1 },
              { itemName: "Tshirt", price: 410, quantity: 5 }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found."
          });
        }
      }, 2000);
    });
  };
  
  const outputElement=document.querySelector("#output");
  
  fakeFetch("https://example.com/api/productlist")
  .then((data)=>{
    let price=0;
    for(let i=0;i<data.data.length;i++){
      price+=data.data[i].price*data.data[i].quantity;
    }
    outputElement.innerText=`Total : ${price}`;
  })
  
//Output on the DOM should be:
// Total: INR 2600
