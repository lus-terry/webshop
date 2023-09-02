const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const stripe = require("./Routes/stripe");
const productsRoute = require("./Routes/products");
const ordersRoute = require("./Routes/orders");
const products= require("./products")

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const corsOptions = {
  origin: "http://localhost:4000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/stripe", stripe );
app.use("/products", productsRoute );
app.use("/orders", ordersRoute);


app.get("/products", (req, res) => {
  res.send(products);
});


/*
// KORISTI userVerification KAO SREDNJI SLOJ (MIDDLEWARE) ZA ZAŠTITU RUTE /admin
app.get("/admin", userVerification, (req, res) => {
  // Ovdje dodajte logiku za admin panel
  res.json({ message: "Admin panel" });
});




*/

