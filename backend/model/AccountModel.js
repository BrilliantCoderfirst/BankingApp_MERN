const mongoose = require("mongoose");

URL = process.env.URL;
mongoose
  .connect(URL)
  .then(function (e) {
    console.log("Database connected Successfully---!");
  })
  .catch(function (err) {
    console.log(err);
  });

const AccountScheme = new mongoose.Schema({
  sName: {
    type: String,
    required: true,
  },
  sEmail: {
    type: String,
    required: true,
  },
  rName: {
    type: String,
    required: true,
  },
  rEmail: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const AccountModel = new mongoose.model("account", AccountScheme);
module.exports = AccountModel;
