const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Dodajte id polje koje će se automatski generirati
  username: String,
  userId: String,
  products: [
    {
      productId: String,
      productName: String,
      productPrice: Number,
      quantity: Number,
      subtotal: Number,
    },
  ],
  total: Number,
  shipping: {
    firstName: String,
    lastName: String,
    company: String,
    address: String,
    apartment: String,
    city: String,
    country: String,
    postalCode: String,
    phone: String,
  },
  delivery_status: String,
  payment_status: String,
}, { timestamps: true }); // Dodajte timestamps za created_at i updated_at

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;
