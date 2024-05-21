const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");
const LoginRoute = require("./routes/login");
const ProductsRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const PaystackRoute = require("./routes/paystack");
const compression = require("compression");
const connectDB = require("./config/dbcon");
const cors = require("cors");

require("dotenv").config();
const https = require("https");
app.use(cors());
dotenv.config();
app.use(compression());
// Set static folder for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
}

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://ecomappi.onrender.com",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

connectDB();

//endpoint for api
app.get("/api/", () => {
  console.log("test is");
});

app.use(express.json());
//Routes
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/auth", LoginRoute);
app.use("/api/products", ProductsRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);
app.use("/paystack", PaystackRoute);

// For production, serve index.html for any other routes
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(process.env.PORT || 3500, () => {
  console.log("backend");
});
