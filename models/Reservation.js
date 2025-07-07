const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    name: String,
    phone: String,
    date: String,
    time: String,
    people: Number,
    specialRequest: String
});

module.exports = mongoose.model("Reservation", ReservationSchema);
