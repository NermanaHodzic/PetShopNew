import React from 'react'
import pic1 from './assets/pas.png'
import pic2 from './assets/macka.png'
import pic3 from './assets/ptice.png'
import pic4 from './assets/zeko.png'
import pic5 from './assets/ribica.png'
import pic6 from './assets/konj.png'
import { Link } from 'react-router-dom';  
function Card(){
return(
    
    <div id='velikidiv'>
   
    <div className="card">
        <img className='card-image' src={pic1} alt="Slika se ne moze ucitati"></img>
        <h2 className='naslov'>Psi</h2>
        <Link to="/psi"><button className='otvori'>Otvori</button></Link>
        
    </div>
    <div className="card">
        <img className='card-image' src={pic2} alt="Slika se ne moze ucitati"></img>
        <h2 className='naslov'>Mačke</h2>
        <Link to="/macke"><button className='otvori'>Otvori</button></Link>
        
    </div>
    <div className="card">
        <img className='card-image' src={pic3} alt="Slika se ne moze ucitati"></img>
        <h2 className='naslov'>Ptice</h2>
        <button className='otvori'>Otvori</button>
        
    </div>
    <div className="card">
        <img className='card-image' src={pic4} alt="Slika se ne moze ucitati"></img>
        <h2 className='naslov'>Male životinje</h2>
        <button className='otvori'>Otvori</button>
        
    </div>
    <div className="card">
        <img className='card-image' src={pic5} alt="Slika se ne moze ucitati"></img>
        <h2 className='naslov'>Ribice</h2>
        <button className='otvori'>Otvori</button>
     
        
        
    </div>
    <div className="card">
        <img className='card-image' src={pic6} alt="Slika se ne moze ucitati"></img>
        <h2 className='naslov'>Konji</h2>
        <button className='otvori'>Otvori</button>
        
    </div>
    </div>
)
}
export default Card
