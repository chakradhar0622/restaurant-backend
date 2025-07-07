const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  people: Number,              // 👈 Must be Number!
  specialRequest: String
});

module.exports = mongoose.model("Reservation", ReservationSchema);
