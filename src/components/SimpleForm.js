import React, { useState } from "react";

function SimpleForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!email.includes("@")) {
      errorMessages.email = "Please enter a valid email";
    }

    if (!password || password.length < 6) {
      errorMessages.password = "Password must be at least 6 characters.";
    }

    setErrors(errorMessages);

    if (Object.keys(errorMessages).length === 0) {
      console.log("Form submitted!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 rounded w-full"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
}

export default SimpleForm;
