import React, { useContext } from 'react'
import star from './assets/star.png'
import favourite from './assets/favourite.png'
import { ShopContext } from './Context/ShopContext';
import './ProductDisplay.css'

 export const ProductDisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
   <div className="productdisplay">
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={favourite} alt=""/>
                <img src={favourite} alt=""/>
                <img src={favourite} alt=""/>
                <img src={favourite} alt=""/>
                <img src={star} alt=""/>
                </div>
                <br></br>
                <div className="productdisplay-right-price-new">{product.Cijena}KM</div>
                <div className='productdisplay-right-description'>
             <br></br>
                <button onClick={()=>{addToCart(product.ProizvodId)}}>Dodaj u košaricu</button><br></br>
            </div>
            
        </div>
        
            
            
            
    </div>'
   </div>
  )
}