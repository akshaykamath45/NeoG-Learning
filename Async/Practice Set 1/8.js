const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlist") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { itemName: "Bread", price: 30, quantity: 10 },
              { itemName: "Water Bottle", price: 50, quantity: 50 },
              { itemName: "Dairy Milk", price: 20, quantity: 30 }
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
  
  const outputDisplay=document.querySelector("#output");
  
  fakeFetch("https://example.com/api/itemlist")
  .then((response)=>{
    if(response.status=="200"){
      let outputStr=" ";
      for(let i=0;i<response.data.length;i++){
        outputStr+=`${i+1}. ${response.data[i].itemName} -- INR ${response.data[i].price} -- ${response.data[i].quantity} \n`;
      }
        outputDisplay.innerText=outputStr;
      // outputDisplay.innerText=`${response.data.length}`
  
    }
  })
  .catch((err)=>{
    if(err.status=="404"){
      outputDisplay.innerText="We are facing high demand at the moment. Please check back later in sometime."
      //console.error(err);
    }
  });
  
  
  
  
  
//   Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
//   1. Bread -- INR 30 -- 10
//   2. Water Bottle -- INR 50 -- 50
//   3. Dairy Milk -- INR 20 -- 30