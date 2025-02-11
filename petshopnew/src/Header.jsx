import {useContext, useState} from 'react'
import pic1 from './assets/logo.png'
import pic3 from './assets/shopping-cart.png'
import paw from './assets/paws.png'
import {Link} from 'react-router-dom'
import { ShopContext } from './Context/ShopContext'


function Header() {
 
    const [menu,setMenu]=useState("Home");
   const{getTotalCartItems}=useContext(ShopContext);
    return (
      
        <div className="navbar">
          <div className='nav-logo'>
          <img src={pic1} alt="Pet Shop Logo" id="logo"/>
            <img id='paw' src={paw}></img>
          
          </div>
          <ul className='nav-menu'>
        <li onClick={() => { setMenu("Home") }}><Link style={{textDecoration:"none"}} to='/'>Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("Shop") }}><Link style={{textDecoration:"none"}} to='/shop'>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("Onama") }}><Link style={{textDecoration:"none"}} to='/onama'>O nama</Link>{menu === "Onama" ? <hr /> : <></>}</li>   
        </ul>
          <div className='nav-login-cart'>
            <Link to='/registerform'><button>Login</button></Link>
            <Link to='/cart'><img src={pic3} alt="Shopping Cart" id="cart"/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </div>
        </div>
    )}  

export default Header