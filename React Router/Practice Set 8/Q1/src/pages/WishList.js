import { products } from "../api/fakefetch";
export const Wishlist = () => {
  const productData = products.find((product) => product.id === 3);

  console.log(productData);
  console.log(products);

  return (
    <div>
      <h1>My Wishlist</h1>
      <p>Name: {productData.name}</p>
      <p>Descriptipn: {productData.description}</p>
      <p>Quantity: {productData.quantity}</p>
      <p>Category: {productData.category}</p>
      <p>Brand: {productData.brand}</p>
    </div>
  );
};
