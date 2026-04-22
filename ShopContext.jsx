import React, { createContext, useState } from "react";
import all_product from "../assests/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, size) => {
        const key = `${itemId}-${size}`;
        setCartItems((prev) => ({
            ...prev,
            [key]: (prev[key] || 0) + 1
        }));
    };

    const removeFromCart = (itemId, size) => {
        const key = `${itemId}-${size}`;
        setCartItems((prev) => {
            const updated = { ...prev };
            if (updated[key] > 1) {
                updated[key] -= 1;
            } else {
                delete updated[key];
            }
            return updated;
        });
    };

    // ✅ Add this function to calculate the total
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const key in cartItems) {
            if (cartItems[key] > 0) {
                // Split the key "1-M" into ["1", "M"]
                const [id] = key.split("-");
                // Find the product data using the ID
                let itemInfo = all_product.find((product) => product.id === Number(id));
                
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[key];
                }
            }
        }
        return totalAmount;
    };

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount // ✅ Exporting the new function
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;