import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ menu, isLoading, setMenu }) => {
  //useState hooks
  const [searchValue, setSearchValue] = useState("");
  const [filterFoodItems, setFilterFoodItems] = useState([]);
  const [selectVegItem, setSelectVegItem] = useState(false);
  const [selectSpicyItem, setSelectSpicyItem] = useState(false);
  const [handleAscendingSort, setAscendingSort] = useState(false);
  const [handleDescendingSort, setDescendingSort] = useState(false);

  //rendering the filtered data
  useEffect(() => {
    const filteredMenu = menu.reduce((acc, food) => {
      const nameMatch = food.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const vegMatch = !selectVegItem || food.is_vegetarian;
      const spicyMatch = !selectSpicyItem || food.is_spicy;

      if (nameMatch && vegMatch && spicyMatch) {
        acc.push(food);
      }

      return acc;
    }, []);

    setFilterFoodItems(filteredMenu);
  }, [searchValue, selectVegItem, selectSpicyItem, menu]);

  // useEffect(() => {
  //   const filteredMenu = menu.filter((food) => {
  //     const nameMatch = food.name.toLowerCase().includes(searchValue.toLowerCase());
  //     const vegMatch = !selectVegItem || food.is_vegetarian;
  //     const spicyMatch = !selectSpicyItem || food.is_spicy;

  //     return nameMatch && vegMatch && spicyMatch;
  //   });

  //   setFilterFoodItems(filteredMenu);
  // }, [searchValue, selectVegItem, selectSpicyItem, menu]);

  //filter functions
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterVegItems = () => {
    setSelectVegItem(!selectVegItem);
  };

  const handleFilterSpicyItems = () => {
    setSelectSpicyItem(!selectSpicyItem);
  };

  const handleSortFromLowToHigh = () => {
    const sortItemAscending = [...filterFoodItems].sort(
      (a, b) => a.price - b.price
    );
    setFilterFoodItems(sortItemAscending);
    setAscendingSort(true);
    setDescendingSort(false);
  };

  const handleSortFromHighToLow = () => {
    const sortItemDescending = [...filterFoodItems].sort(
      (a, b) => b.price - a.price
    );
    setFilterFoodItems(sortItemDescending);
    setDescendingSort(true);
    setAscendingSort(false);
  };

  const handleAddToCart = (food) => {
    const updatedMenu = menu.map((item) =>
      item.id === food.id ? { ...item, cart: true } : item
    );
    setMenu(updatedMenu);
    setFilterFoodItems(updatedMenu);
  };

  const navigate = useNavigate();
  return (
    <div>
      <h1>Menu</h1>
      <input
        placeholder="Search an item"
        value={searchValue}
        onChange={handleSearchInput}
      ></input>
      <p>
        Veg{" "}
        <input
          type="checkbox"
          onChange={handleFilterVegItems}
          checked={selectVegItem}
        ></input>
      </p>
      <p>
        Spicy{" "}
        <input
          type="checkbox"
          onChange={handleFilterSpicyItems}
          checked={selectSpicyItem}
        ></input>
      </p>
      <p>
        Sort (Low to High)
        <input
          type="radio"
          onChange={handleSortFromLowToHigh}
          checked={handleAscendingSort}
        ></input>
      </p>
      <p>
        Sort (High to Low)
        <input
          type="radio"
          onChange={handleSortFromHighToLow}
          checked={handleDescendingSort}
        ></input>
      </p>
      {isLoading && <h2>Loading Menu...</h2>}
      <div className="menu-list">
        {filterFoodItems.map((food) => (
          <div className="menu-item" key={food.id}>
            <img src={food.image} className="menu-image" alt="menu-img"></img>
            <p>Name: {food.name}</p>
            <p>
              <b>description: </b>
              {food.description}
            </p>

            <p>Price: {food.price}</p>
            <p>Delivery Time: {food.delivery_time}</p>
            {food.cart && (
              <button onClick={() => navigate("/cart")}>Go to Cart</button>
            )}
            {!food.cart && (
              <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
