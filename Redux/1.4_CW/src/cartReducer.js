const initialState = { cartItems: [] };

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cart/added": {
            const existingCartItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingCartItem) {
                const updatedCartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...state,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
                return { ...state, cartItems: updatedCartItems };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
                };
            }
        }
        case "cart/removed": {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            };
        }

        case "cart/updatedQuantity":
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.productId) {
                    return Object.assign({}, item, { quantity: action.payload.quantity });
                }
                return item;
            });
            return { ...state, cartItems: updatedCartItems };
        case "cart/calculateTotal":
            const totalPrice = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
            return totalPrice;
        default:
            return state;
    }
};