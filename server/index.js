const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

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



const corsOptions ={
  origin:'http://localhost:4000', 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials:true,            //access-control-allow-credentials:true
}
app.use(cors(corsOptions));


app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
