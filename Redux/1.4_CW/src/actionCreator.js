export const ADD_TO_CART = "cart/added";
export const REMOVE_FROM_CART = "cart/removed";
export const UPDATE_QUANTIY = "cart/updatedQuantity";
export const CALCULATE_TOTAL = "cart/calculateTotal";

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const updateQuantity = (productId, quantity) => ({
    type: UPDATE_QUANTIY,
    payload: {
        productId,
        quantity
    }
});

export const calculateTotal = () => ({
    type: CALCULATE_TOTAL
});
