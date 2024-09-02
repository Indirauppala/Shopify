import React, { useContext, useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
const Cart = () => {
    const { cart, removeFromCart, total } = useCart();
    const [showModal, setShowModal] = useState(false);
    const navigate=useNavigate()
    const {logged}=useContext(AuthContext)
    console.log(logged)
    const handleImageError = (e) => {
        e.target.src = default_img;
    };

    const handleShowModal = () => setShowModal(true);

    const handleCloseModal = () => setShowModal(false);

    return (
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"30px"}}>
        <h1 style={{marginLeft:"30px"}}>Cart</h1>
        {cart.length>0&&
        <button 
                style={{marginRight:"70px",width:"130px"}}
                onClick={handleShowModal}>
                Buy Now
        </button>
        }
        </div>
        <div className='product-container' style={{margin:"50px"}}>
            {cart.length > 0 ? (
                cart.map((product) => (
                    <div key={product.id} className='product'>
                        <h1 className='title'>{product.title}</h1>
                        <p className='desc'>{product.description.length > 30 ? product.description.substring(0, 30) + '...' : product.description}</p>
                        <img
                            src={product.image ? product.image : default_img} 
                            alt={product.title}
                            className='image_cart'
                            height="300px"
                            width="300px"
                            onError={handleImageError}
                        />
                        <p className='price'>Price: ${product.price}</p>
                        <button onClick={() => removeFromCart(product.id)} style={{width:"100px"}}>Remove</button>
                    </div>
                ))
            ) : (
                <>
                <p className='empty-cart-message'>Your cart is empty.</p>
                <p className='empty-cart-msg'><i onClick={()=>navigate('/wishlist')} style={{cursor:'pointer'}}>Click here </i> to add items from wishlist</p>
                </>
            )}

            {/* Modal to show total amount */}
            {showModal && (
                <div className="modal fade show" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Total Amount</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <h4>${total}</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Cart;
