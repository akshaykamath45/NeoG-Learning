const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/order/status/OR00A12") {
          resolve({
            status: 200,
            data: {
              order: {
                orderId: "OR00A12",
                status: "delivery pending",
                userName: "Kajal Kumari"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000);
    });
  };
  
  const outputElement=document.querySelector("#output");
  fakeFetch("https://example.com/order/status/OR00A12")
  .then((data)=>{
    if(data.status===200){
      outputElement.innerText=`Hello ${data.data.order.userName} your order status is ${data.data.order.status}.`
    }
  })
  .catch((err)=>{
      outputElement.innerText=`${err.message}`
  })
  
  
  
  // Output on the DOM should be:
  // Hello Kajal Kumari your order status is delivery pending.