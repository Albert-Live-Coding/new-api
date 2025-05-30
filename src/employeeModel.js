import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    age: Number,
    firstName: { type: String, maxlength: 50 },
    lastName: String,
    role: String,
    team: String,
    email: String,
    location: String /* \_id */,
    address: {
      street: String,
      number: String,
      city: String,
      zip: String,
    },
  },
  {
    timestamps: false,
    version: false,
  }
);

export const Employee = model("Employee", employeeSchema);
