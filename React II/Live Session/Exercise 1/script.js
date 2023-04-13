const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { name: "Pen", price: 30, quantity: 100 },
              { name: "Pencil", price: 50, quantity: 50 },
              { name: "Paper", price: 20, quantity: 30 },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

const displayOutput = document.querySelector("#output");

fakeFetch("https://example.com/api/itemlist")
  .then((response) => {
    if (response.status === 200) {
      displayOutput.innerHTML = `<ol>
        ${response.data.products
          .map(
            (item) =>
              `<li>${item.name} -- INR ${item.price} -- ${item.quantity}</li>`
          )
          .join("")}
        </ol>`;
    }
  })
  .catch((error) => console.log("Error: ", error.status, error.message));
