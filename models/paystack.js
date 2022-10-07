const mongoose = require("mongoose");

const paystackSchema = new mongoose.Schema(
  {
    transactionID: { type: String, required: true },
    trxref: { type: String, require: true },
    message: { type: String, required: true },
    status: { type: String, require: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PayStack", paystackSchema);
