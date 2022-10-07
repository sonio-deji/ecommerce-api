const express = require("express");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const cartRoutes = require("./routes/cart");
const ordersRoutes = require("./routes/order");
const paymentRoute = require("./routes/paystack");
const cors = require("cors");

dotenv.config();
const app = express();

//connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => {
    console.log(err);
  });

//parse json
app.use(express.json());

//cors
app.use(cors());

//users route
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/checkout", paymentRoute);

//run server
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
