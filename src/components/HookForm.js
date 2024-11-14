import React from "react";
import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            {...register("FirstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only alphabets are allowed",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.FirstName && <p className="text-red-500">{errors.FirstName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Second Name</label>
          <input
            type="text"
            {...register("SecondName", {
              required: "Second name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only alphabets are allowed",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.SecondName && <p className="text-red-500">{errors.SecondName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            {...register("UserName", {
              required: "Username is required",
              pattern: {
                value: /^[A-Za-z0-9_@./#&+-]*$/,
                message: "Only letters, numbers, and special characters are allowed",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.UserName && <p className="text-red-500">{errors.UserName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("Password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Must include letters, numbers, and special characters",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.Password && <p className="text-red-500">{errors.Password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            {...register("PhoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^\+92\d{3}\s\d{3}\s\d{4}$/,
                message: "Must follow the format +92xxx xxxx xxx",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.PhoneNumber && <p className="text-red-500">{errors.PhoneNumber.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HookForm;
