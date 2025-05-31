import mongoose from "mongoose";


const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    trim: true
  },
  residenceType: {
    type: String,
    enum: ['Owned', 'Rented', 'Company Provided', 'Other'],
    required: true
  },
  monthlyIncome: {
    type: Number,
    required: true
  },
  previousLoan: {
    type: Boolean,
    required: true
  },
  maritalStatus: {
    type: String,
    enum: ['Single', 'Married', 'Divorced', 'Widowed'],
    required: true
  },
  numberOfDependency: {
    type: Number,
    required: true,
    min: 0
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

 export const Signup = mongoose.model('Signup', signupSchema);


