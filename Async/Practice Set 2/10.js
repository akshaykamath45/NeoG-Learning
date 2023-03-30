const fakeFetch = (url, dimensions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/getImage") {
          resolve({
            status: 200,
          data: {
             image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image"
            }
          }
        });
      } else {
          reject({
            status: 404,
          message: "No photo of such dimension found"
        });
      }
    }, 2000);
  });
  }
  
  const outputElement = document.querySelector("#output");
  
  fakeFetch("https://example.com/getImage",[200,200])
  .then((data)=>{
      let src=data.data.image.link;
      let img=document.createElement("img");
     img.src=src;
     outputElement.appendChild(img);
  })
  .catch((err)=>{
    outputElement.innerText=`${err.message}`
  })
  
  
  
  // Output on the DOM should be an image.