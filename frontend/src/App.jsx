import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

import Navbarx from "./components/Navbar/Navbarx";
import PaymentForm from "./components/PaymentForm";
import { useSelector } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
const App = () => {
  if (process.env.NODE_ENV === "production") {
    disableReactDevTools();
  }
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Navbarx />

      {/* files that doesn't need route */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
