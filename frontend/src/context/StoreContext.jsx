
//context API

import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=> {

    //untuk cart
    const [cartItems,setCartItems] = useState({});

    //ketika add to cart
    const addToCart = (itemId) => {
        //first time to add to cart, create new entry
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        //if already has in cart, increase the number
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    //remove daripada cart, decrease the number
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    //return cart total
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){   
            // when the quantity>0
            if(cartItems[item]>0){
                //to check the product is available in cart
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price*cartItems[item];
            }
        }

        return totalAmount;
    }

    ////to check cartItems
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    
    //add all functionality and assets here
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider