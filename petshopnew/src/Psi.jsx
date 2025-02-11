import React from 'react'
import data_product from './assets/data'
import { Item } from './Item'

 const Psi = () => {
  return (
    <div className='popular'>
        <h1>Proizvodi za pse</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} ProizvodId={item.ProizvodId} NazivProizvoda={item.NazivProizvoda} image={item.image} Cijena={item.Cijena}/>
            }
        )}
        </div>
    </div>
  )
}
export default Psi