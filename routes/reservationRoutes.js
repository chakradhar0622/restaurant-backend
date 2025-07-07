const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

router.post("/", async (req, res) => {
  console.log("Received reservation:", req.body); // ✅ ADD THIS IF MISSING

  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: "Reservation saved" });
  } catch (err) {
    console.error("Reservation Save Error:", err); // ✅ Will show full error in logs
    res.status(500).json({ error: "Error saving reservation" });
  }
});

module.exports = router;
