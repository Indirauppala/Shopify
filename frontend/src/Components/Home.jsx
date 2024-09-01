import React, { useEffect, useState } from 'react';
import default_img from '../assets/default_img.jpg'
import { useNavigate } from 'react-router-dom';
import {useCart} from './CartContext'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Home = () => {

  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);
  const {addToCart,addToWishlist,amount,cartCount}=useCart();
  const [count,setCount]=useState(0)
  const navigate=useNavigate()
  const location = useLocation();
  const [filtervlue,setFilterValue]=useState('revalant')
  const [sortedproducts,setSortedProducts]=useState([])
  const { email, password } = location.state || {};


  // const {loggedIn}= useAuth();

  // useEffect(() => {
  //   if (!loggedIn) {
  //     navigate('/');
  //   }
  // }, [loggedIn, navigate]);

  
  
  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (value) {
      url = `https://fakestoreapi.com/products/category/${value}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setSortedProducts(data)
      })
      .catch((err) => console.log(err));
  }, [value]);

  useEffect(()=>{
    sortproducts();
  },[filtervlue,products])

  const sortproducts=()=>{
    const sorted=[...products]

    if( filtervlue=="LowToHigh"){
      sorted.sort((a,b)=>a.price-b.price);
    }
    else if(filtervlue=="HighToLow"){
      sorted.sort((a,b)=>b.price-a.price)
    }
    else{
      setSortedProducts(products)
      return
    }
    setSortedProducts(sorted)
  }

  const handleImageError = (e) => {
    e.target.src = default_img; 
  };

  const handleWishlist=(product)=>{
    addToWishlist(product)
    console.log("product added to wishlist")
  }

  const handleCart=(product)=>{
    addToCart(product)
    setCount(count+1)
    amount(product.price)
    console.log("product added to cart")
  }
  return (
    <>
    <div className='header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shopify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate('/about')}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={()=>navigate('/contact')}>Contact</a>
        </li>
        
        </ul>
        <div className="search-container">
          <i className="fa fa-search search-icon"></i>
          <input type="text" placeholder="Search for products,brands and more" className="search-input" />
        </div>

        <ul>
        <div className="nav-item dropdown profile" style={{ marginRight: "30px" }}>
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-user" style={{ padding: "10px" }}></i>
        </a>
        <ul className="dropdown-menu dropdown">
        <li><a className="dropdown-item" href="#">{email}</a></li>
        <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#" onClick={()=>navigate('/')}>Log out</a></li>
          <li><a className="dropdown-item" href="#" onClick={()=>navigate('/register')}>Sign up</a></li>
        </ul>
        </div>
        </ul>
        <div style={{marginRight:"20px",marginLeft:"5px"}} onClick={()=>navigate('/wishlist')}>
      <i className="fa-solid fa-heart" style={{ fontSize: '24px', marginRight: '15px' }}></i>
      <p>Wishlist</p>
      </div>
      <div style={{ marginRight: "20px", marginLeft: "5px" }} onClick={() => navigate('/cart')}>
      <i className="fa-sharp fa-solid fa-cart-shopping" style={{ fontSize: '24px', marginRight: '8px'}}>{cartCount}</i>
      
      <p>Cart</p>
      </div>

    </div>
  </div>
</nav>
    </div>
    <div className='shopping'>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"20px"}}>
      <select onChange={(e) => setValue(e.target.value)} className='select'>
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's wear</option>
        <option value="women's clothing">Women's wear</option>
      </select>
      <select onChange={(e) => setFilterValue(e.target.value)} className='select'>
        <option value="">Filter</option>
        <option value="">Relavant</option>
        <option value="LowToHigh">Low to high</option>
        <option value="HighToLow">High to low</option>
      </select>
      </div>
      <div className='product-container'>
      {sortedproducts.map((product) => (
      <div key={product.id} className='product' >
      <h1 className='title'>{product.title}</h1>
      <p className='desc'>{product.description.length>30? product.description.substring(0, 30) + '...' :product.description}</p>
      <img src={product.image ? product.image : default_img} 
                alt={product.title} 
                className='image'
                height="300px"
                width="300px"
                onError={handleImageError} 
              />
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <p className='price'>Price: ${product.price}</p>
      <i className="fa-regular fa-heart icon" style={{ fontSize: '24px', marginRight: '15px' }} onClick={()=>handleWishlist(product)}></i>
      </div>
      <div className='buttons'> 
      <button onClick={()=>
        {
          handleCart(product)
        }
        } style={{marginRight:"10px"}}>Add to cart</button>
      <button>Buy Now</button>
      </div>
    </div>
  )
  )}
  </div>
  </div>
  </>
  );

};

export default Home;
