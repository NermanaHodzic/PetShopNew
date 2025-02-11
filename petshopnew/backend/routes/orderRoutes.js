// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/Order');

router.post('/purchase', async (req, res) => {
    const { userId, cartItems } = req.body;

    try {
        // Pretvori cartItems u format proizvoda za narudžbinu
        const products = Object.keys(cartItems).map(productId => ({
            product: mongoose.Types.ObjectId(productId), // Pretvori u ObjectId ako je potrebno
            quantity: cartItems[productId]
        }));

        // Kreiraj novu narudžbinu
        const newOrder = new Order({
            user: mongoose.Types.ObjectId(userId), // Pretvori u ObjectId ako je potrebno
            products: products
        });

        // Spremi novu narudžbinu u bazu
        await newOrder.save();

        // Pošalji odgovor da je narudžbina uspješno kreirana
        res.status(201).send('Narudžbina uspješno kreirana');
    } catch (error) {
        console.error('Greška prilikom kreiranja narudžbine:', error);
        res.status(500).send('Došlo je do greške prilikom kreiranja narudžbine');
    }
});

module.exports = router;

