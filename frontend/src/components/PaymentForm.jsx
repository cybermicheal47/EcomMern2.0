import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";

const FormWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: lightgreen;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [error, setError] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "https://ecomappi.onrender.com/paystack",
        {
          email,
          amount: cart.total,
          billing_address: billingAddress,
        }
      );
      // Handle the Paystack response
      const { authorization_url, access_code, reference } = response.data.data;
      console.log(authorization_url);

      // Redirect the user to the Paystack authorization URL
      window.location.href = authorization_url;

      // Dispatch the clearCart action after successful redirection
      dispatch(clearCart());
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <FormWrapper>
      <Title>Pay Now</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Label>Email:</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label>Shipping Address:</Label>
      <Input
        type="text"
        value={billingAddress}
        onChange={(e) => setBillingAddress(e.target.value)}
      />
      <PaymentButton onClick={handlePayment}>
        Make Payment ${cart.total}
      </PaymentButton>
    </FormWrapper>
  );
};

export default PaymentForm;
