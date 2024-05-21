const express = require("express");
const path = require("path"); // Make sure to import the path module
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const compression = require("compression");
const cors = require("cors");
const connectDB = require("./config/dbcon");
dotenv.config();
// Import routes
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");
const LoginRoute = require("./routes/login");
const ProductsRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const PaystackRoute = require("./routes/paystack");

const app = express();
const https = require("https");

app.use(cors());
app.use(compression());
app.use(express.json()); // Ensure this middleware is set up before defining routes

// Set static folder for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
}

// app.use((req, res, next) => {
//   const allowedOrigins = [
//     "http://localhost:5173",
//     "https://ecomappi.onrender.com",
//   ];
//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }

//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   next();
// });

// Connect to the database
connectDB();

// Endpoint for API test
app.get("/api/test", (req, res) => {
  res.send("API is running....");
});

// Routes
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

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
