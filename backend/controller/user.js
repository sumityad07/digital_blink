import { Signup } from "../models/user.js";


export const register = async (req,res)=>{
  console.log(req.body);
  
    

      try {
    const {
      name,
      email,
      phone,
      residenceType,
      monthlyIncome,
      previousLoan,
      maritalStatus,
      numberOfDependency,
      city,
      state
    } = req.body;

    // Basic validation 
    if (!name || !email || !phone || !residenceType || !monthlyIncome || previousLoan === undefined ||
        !maritalStatus || numberOfDependency === undefined || !city || !state) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Create new user
    const newUser = new Signup({
      name,
      email,
      phone,
      residenceType,
      monthlyIncome,
      previousLoan,
      maritalStatus,
      numberOfDependency,
      city,
      state
    });

    await newUser.save();
    res.status(201).json({ message: 'Signup successful', user: newUser });

  } catch (err) {
     console.error('Signup Error:', err.message, err.stack);
  res.status(500).json({ error: 'Server error. Please try again later.' });
  }
 
}