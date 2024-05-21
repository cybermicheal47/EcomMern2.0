import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const cart = useSelector((state) => state.cart);

  const publicKey = "pk_test_576c0fdeedbff26302b1238d320e402be91fc3ca"; // Replace with your Paystack public key

  const handlePaymentSuccess = async (response) => {
    try {
      // Send the Paystack response to your server for verification
      const serverResponse = await axios.post(
        "http://localhost:3500/api/paystack/verify",
        {
          reference: response.reference,
        }
      );

      // Handle the server response as needed
      console.log(serverResponse.data);
    } catch (err) {
      setError("Failed to verify payment");
    }
  };

  const handlePaymentError = (error) => {
    setError(error.message);
  };

  const config = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    email,
    amount: cart.total * 100,
    publicKey,
  };

  return (
    <div>
      <h2>Payment Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount</label> {cart.total}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-submit">
        <PaystackButton
          {...config}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
          text="Pay Now"
        />
      </div>
    </div>
  );
};

export default PaymentForm;
