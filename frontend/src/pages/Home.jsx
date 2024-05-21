import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Sliders from "../components/Sliders";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import PaymentForm from "../components/PaymentForm";
import PayformReact from "../components/PayformReact";
import { useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { useState, useEffect } from "react";
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 900); // Adjust the timeout duration as needed
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
      </div>
    );
  }

  return (
    <div>
      <Announcement />

      <Sliders />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
