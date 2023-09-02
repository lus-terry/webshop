const express = require("express");
const router = express.Router();
const { Order } = require("../Models/OrderModel");


router.post("/", async (req, res) => {
  try {
    const orderData = req.body;

    const order = new Order(orderData);
    const savedOrder = await order.save();

    const generatedId = savedOrder._id;
    console.log(`Generirani ID narudžbe: ${generatedId}`);



    console.log('Order saved to database');


    res.status(201).json({ id: generatedId, order: savedOrder }); 
  } catch (error) {
    console.error('Order not saved to database:', error);
    res.status(500).json({ error: 'Order not saved to database.' });
  }
});


// Dohvati sve ordere
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find(); // Koristi Mongoose metodu 'find' za dohvaćanje svih ordere iz baze
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Error fetching orders.' });
  }
});


module.exports = router; 
