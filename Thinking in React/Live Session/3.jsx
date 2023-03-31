import {InformationCard} from "./InformationCard"

export default function App() {
  const productDetails = {
    id: "AC1023",
    name: "Air Conditioner",
    price: 29600,
    specification: "1 Ton, 4 Star Rating",
    warranty: "5 Years Compressor Warranty"
  };
  return (
    <div className="App">
      <InformationCard product={productDetails} />
    </div>
  );
}


export const InformationCard = ( {product} ) => {
    const { name, price, specification, warranty } = product;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{name}</h1>
        <p>Price: INR {price} </p>
        <p>Specification: {specification}</p>
        <p>Warranty: {warranty}</p>
      </div>
    );
  };
  



// The braces used in the InformationCard component when passing product as a prop are actually used for object destructuring. When an object is passed as a prop to a component, you can use object destructuring to extract the individual properties of that object.
// In this code, the product prop is an object containing properties such as name, price, specification, and warranty. By using braces in the function parameter ( {product} ), we are destructuring the product object so that we can directly access its individual properties inside the function, without having to use the product. prefix every time.
// So, using braces in the function parameter allows us to extract the product object passed as a prop and directly access its properties in a more concise way inside the function.