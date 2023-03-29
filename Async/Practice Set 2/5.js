const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/photo") {
          resolve({
            status: 200,
            data: {
              photo: {
                link: "https://source.unsplash.com/featured/300x201",
                title: "Random Image"
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
  
  const outputElement = document.querySelector("#output");
  
  fakeFetch("https://example.com/photo")
    .then((data) => {
      if (data.status === 200) {
        let link = data.data.photo.link;
  
        // create img element and set src attribute to image link
        let img = document.createElement("img");
        img.src = link;
  
        // append img element to outputElement
        outputElement.appendChild(img);
      }
    });
  
  
    // Output: an image on the DOM