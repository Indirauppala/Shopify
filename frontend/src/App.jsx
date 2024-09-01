import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './Components/Register'
import Cart from './Components/Cart'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Wishlist from './Components/Wishlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './Components/ForgotPassword'
import Contact from './Components/Contact'
import About from './Components/About'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login/forgetPassword' element={<ForgotPassword/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
