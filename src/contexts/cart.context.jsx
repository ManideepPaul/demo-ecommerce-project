import { createContext, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    inCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemsToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        /* 
        -> If product is present in the cartItems then only increase the qunatity of the item.
        -> If product not found in the cartItems then add the product to the cartItems array.
        */
        setCartItems(addCartItems(cartItems, productToAdd))
    }
    const value = { isCartOpen, setIsCartOpen , addItemToCart, cartItems}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}