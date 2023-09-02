
const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);
const router = require("express").Router();
const express = require("express");
const { Order } = require("../Models/OrderModel");
const mongoose = require("mongoose");
const { useState } = require("react");

router.post('/create-checkout-session', async (req, res) => {


    const customer = await stripe.customers.create({
      
          metadata: {
            userId: req.body.userId,
            cart: JSON.stringify(req.body.cartItems),
          },
        
    })

    console.log('Dolazni zahtjev na /create-checkout-session:', req.method, req.url);

    console.log(req.body.cartItems);

    console.log("user: ", req.body.user);

    const line_items = req.body.cartItems.map((item) => {
        return {
           
                price_data: {
                  currency: 'eur',
                  product_data: {
                    name: item.name,
                    images: [item.image.url],
                    description: item.desc, 
                    metadata: {
                        id: item._id
                    }
                  },
                  unit_amount: item.price * 100, //jer je u centima
                },
                quantity: item.cartTotalQuantity ,
              };
    });

    console.log("line_items: ", line_items);
    

    const session = await stripe.checkout.sessions.create({

    payment_method_types: ["card"],
    shipping_address_collection: {
    allowed_countries: ["HR"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "eur",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "eur",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
        enabled: true,
    },
    
      customer: customer.id,
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
  
    res.send({url: session.url});
  });

  //create order

  const createOrder = async(customer, data) => {

    const Items = JSON.parse(customer.metadata.cart);

  const products = Items.map((item) => {
    return {
      productId: item.id,
      quantity: item.cartQuantity,
    };
  });

  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

    console.log("newOrder", newOrder);

    try {
        const savedOrder = await newOrder.save(); 
        console.log("Processed order: ", savedOrder);
    }catch(err) {
        console.log("Order error")
    }

  }
  
  //stripe webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
// endpointSecret = "whsec_81668179147c9a25a91d23a1d78eaa583b5a28d945cab902664dfc383ac40c9f";

router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

    let data;
    let eventType;

    //buduci da imamo gresku, izbjegnemo verifikaciju stripea
    if(endpointSecret) {
        let event;

        try {
          event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
          console.log("Webhook verified.")
        } catch (err) {
          console.log(`Webhook Error: ${err.message}`)
          res.status(400).send(`Webhook Error: ${err.message}`);
          return;
        }

        data = event.data.object;
        eventType = event.type;
    } else {
        data = req.body.data.object;
        eventType = req.body.type;
    }




  // Handle the event

  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then(async (customer) => {
        try {
          // CREATE ORDER
          createOrder(customer, data);
        } catch (err) {
          console.log(typeof createOrder);
          console.log(err);
        }
      })
      .catch((err) => console.log(err.message));
  }
  // Return a 200 response to acknowledge receipt of the event
  res.status(200).end();    
});


  module.exports = router;