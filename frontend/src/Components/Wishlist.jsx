import React from 'react'
import { useCart } from './CartContext'
const Wishlist = () => {

    const {wishlist,removeFromWishlist,addToCart}=useCart();
    return (
       <>
            <h1 style={{textAlign:"center",margin:"30px"}}>Wishlist</h1>
            <div className='product-container' style={{margin:"50px"}}>
            {wishlist.length > 0 ? (
                wishlist.map((product) => (
                    <div key={product.id} className='product'>
                        <h1 className='title'>{product.title}</h1>
                        <p className='desc'>{product.description.length > 30 ? product.description.substring(0, 30) + '...' : product.description}</p>
                        <img
                            src={product.image} 
                            alt={product.title}
                            className='image_cart'
                            height="300px"
                            width="300px"
                        />
                        <p className='price'>Price: ${product.price}</p>
                        <button onClick={() => removeFromWishlist(product.id)} style={{marginBottom:"10px"}}>Remove from wishlist</button>
                        <button onClick={()=>{addToCart(product)
                            removeFromWishlist(product.id)
                        }}>Move to Cart</button>
                    </div>
                ))
            ) : (
                <p className='empty-cart-message'>No items in wishlist.</p>
            )}
        </div>
        </>
    );
}

export default Wishlist
