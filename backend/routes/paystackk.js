// server/routes/paystack.js

const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/verify", async (req, res) => {
  try {
    const { reference } = req.body;

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer sk_test_3ca4621f12c248ccf9d32eedf53d8eafea082208`, // Replace with your Paystack secret key
        },
      }
    );

    const data = response.data.data;

    // Handle the verification result as needed
    res.json({ status: data.status, message: data.gateway_response });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
