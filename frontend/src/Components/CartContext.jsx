import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const [wishlist,setWishList]=useState([]);
    const [total,setTotal]=useState(0)
    const [cartCount, setCartCount] = useState(0);

    const amount=(price)=>{
        setTotal(total+price)
    }
    
    const addToCart=(product)=>{
        setCart([...cart,product])
        setCartCount(cartCount+1)
    }

    const removeFromCart=(productId)=>{
        setCart(cart.filter(product=>product.id!=productId));
    }

    const addToWishlist=(product)=>{
        setWishList([...wishlist,product])
    }

    const removeFromWishlist=(productId)=>{
        setWishList(wishlist.filter(product=>product.id!=productId))
    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,wishlist,addToWishlist,removeFromWishlist,amount,total,cartCount}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext)