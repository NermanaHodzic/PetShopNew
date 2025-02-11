import React, { useContext, useState } from 'react';
import { ShopContext } from './Context/ShopContext';
import './CartItems.css';
import remove_icon from './assets/remove.png';
import plus_icon from './assets/plus.png';
//
export const CartItems = () => {
    const { getTotalCartAmount, data_product, cartItems, removeFromCart, addToCart, UserId } = useContext(ShopContext);
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        const items = data_product
            .filter(item => cartItems[item.ProizvodId] > 0)
            .map(item => ({
                ProizvodId: item.ProizvodId,
            }));
        const orders = items.map(item => ({
            UserId: UserId,
            ProizvodId: item.ProizvodId
        }));
        console.log('Orders:', orders);
        try {
            const response = await fetch('http://localhost:5082/api/Narudzba', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orders),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Order saved:', data);
            setMessage('Narudžba uspješno spremljena!');
        } catch (error) {
            console.error('Error:', error.message);
            setMessage('Greška prilikom spremanja narudžbe.');
        }
    };

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Proizvodi</p>
                <p>Naziv</p>
                <p>Cijena</p>
                <p>Količina</p>
                <p>Ukupno</p>
                <p>Ukloni</p>
                <p>Povećaj</p>
            </div>
            <hr />
            {data_product.map((e) => {
                if (cartItems[e.ProizvodId] > 0) {
                    return (
                        <div key={e.ProizvodId}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.NazivProizvoda}</p>
                                <p>{e.Cijena.toFixed(2)}KM</p>
                                <button className="cartitems-quantity">{cartItems[e.ProizvodId]}</button>
                                <p>{(e.Cijena * cartItems[e.ProizvodId]).toFixed(2)}KM</p>
                                <img src={remove_icon} alt="" className="cartitems-remove-icon" onClick={() => { removeFromCart(e.ProizvodId); }} />
                                <img src={plus_icon} alt="" className="cartitems-add-icon" onClick={() => { addToCart(e.ProizvodId); }} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Ukupno</h1>
                    <div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>{getTotalCartAmount().toFixed(2)} KM</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
            {message && <div className="cartitems-message">{message}</div>}
        </div>
    );
};
