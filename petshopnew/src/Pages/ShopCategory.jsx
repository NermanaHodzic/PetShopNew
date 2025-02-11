import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/down-arrow.png'
import { Item } from '../Item';
const ShopCategory = (props) => {
  const { data_product } = useContext(ShopContext);

  console.log('Rendering ShopCategory for:', props.category); 

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt={props.category} />
      <h1> Hrana za vaše ljubimce</h1>
      <br></br>
     
      <div className="shopcategory-products">
        {data_product.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} ProizvodId={item.ProizvodId} NazivProizvoda={item.NazivProizvoda} image={item.image} Cijena={item.Cijena}/>

            }
            else{
                return null;
            }

        })}
      </div>
      <div className="shopcategory-loadmore">
        Pogledajte više
      </div>
    </div>
  );
};

export default ShopCategory;
