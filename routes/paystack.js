const router = require("express").Router();
const paystack = require("../models/paystack");

router.post("/payment", async (req, res) => {
  const newPayment = new paystack(req.body);
  try {
    const savedPayment = await newPayment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
