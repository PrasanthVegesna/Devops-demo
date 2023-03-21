const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/payroll-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  hoursWorked: { type: Number, required: true},
