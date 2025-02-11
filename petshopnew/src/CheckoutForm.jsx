import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export const CheckoutForm = ({ totalAmount, onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        if (!stripe || !elements) {
          return;
        }

        // Kreiranje PaymentMethod na Stripe
        const { paymentMethod, error: stripeError } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
            address: {
              line1: address,
            },
            phone: phone,
          },
        });
      
        if (stripeError) {
          setError(stripeError.message);
          return;
        }
      
        // Slanje podataka na backend za obradu plaćanja i spremanje narudžbe
        try {
          const response = await fetch('/charge', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              paymentMethodId: paymentMethod.id,
              name: name,
              address: address,
              phone: phone
            }),
          });
      
          const data = await response.json();
          if (response.ok) {
            setSuccess('Plaćanje je uspešno!');
            onSuccess(); // Pozivanje callback funkcije za spremanje narudžbe u bazu
          } else {
            setError(data.error);
          }
        } catch (err) {
          setError('Došlo je do greške prilikom obrade plaćanja.');
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ime:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Adresa:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div>
                <label>Telefon:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay ${totalAmount}
            </button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
        </form>
    );
};
