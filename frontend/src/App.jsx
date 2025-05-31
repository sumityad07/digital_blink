import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residenceType: "Owned",
    monthlyIncome: "",
    previousLoan: false,
    maritalStatus: "Single",
    numberOfDependency: 0,
    city: "",
    state: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1303/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          monthlyIncome: Number(formData.monthlyIncome),
          numberOfDependency: Number(formData.numberOfDependency)
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      alert("Signup Successful ✅");
    } catch (err) {
      console.error("Signup Error:", err.message);
      alert("Signup failed ❌: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">Create Your Account</h1>

        <div className="grid grid-cols-2 gap-4">
          <input name="name" onChange={handleChange} value={formData.name} className="input" placeholder="Name" required />
          <input name="email" type="email" onChange={handleChange} value={formData.email} className="input" placeholder="Email" required />
          <input name="phone" onChange={handleChange} value={formData.phone} className="input" placeholder="Phone" required />
          <select name="residenceType" onChange={handleChange} value={formData.residenceType} className="input">
            <option>Owned</option>
            <option>Rented</option>
            <option>Company Provided</option>
            <option>Other</option>
          </select>
          <input name="monthlyIncome" type="number" onChange={handleChange} value={formData.monthlyIncome} className="input" placeholder="Monthly Income" required />
          <select name="maritalStatus" onChange={handleChange} value={formData.maritalStatus} className="input">
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
          <input name="numberOfDependency" type="number" onChange={handleChange} value={formData.numberOfDependency} className="input" placeholder="Number of Dependents" min="0" required />
          <input name="city" onChange={handleChange} value={formData.city} className="input" placeholder="City" required />
          <input name="state" onChange={handleChange} value={formData.state} className="input" placeholder="State" required />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" name="previousLoan" onChange={handleChange} checked={formData.previousLoan} />
          <label>Had Previous Loan?</label>
        </div>

        <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
      </form>
    </div>
  );
}
