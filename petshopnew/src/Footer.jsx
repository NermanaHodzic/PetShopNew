import React  from "react"
import logo from './assets/logo.png'
import footprints from './assets/footprints.png'
function Footer(){
    return(
<footer>
    <br></br>
    <br></br>
    <hr></hr>
    <div className="footer">
        <div className="footer-logo"> 
        <img className="footprints" src={footprints} alt=""></img>
        <p>Pet Shop</p>
        </div>
        <ul className="footer-links">
            <li>O nama</li>
            <li>Poslovnice</li>
            <li>Kontakt</li>
            <li>Uvjeti kupnje</li>
        </ul>
        
<div className="footer-copyright">
    <hr></hr>
    <p >&copy;{new Date().getFullYear()} Pet Shop</p>
    </div>
    </div>
</footer>
    )
}
export default Footer