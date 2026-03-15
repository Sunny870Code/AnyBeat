import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", formData);
      setFormData({
        username: "",
        email: "",
        password: "",
        role: "user"
      });
      alert("User created successfully");

    } catch (err) {
      console.error(err);
      alert("Error user id not created.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* Card */}
      <div className="bg-zinc-900 w-full max-w-md p-8 rounded-2xl shadow-lg border border-zinc-800">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="text-gray-400 text-sm">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-green-500"
              placeholder="Enter username"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-400 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-green-500"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-400 text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-green-500"
              placeholder="Enter password"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-gray-400 text-sm">
              Select Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-green-500"
            >
              <option value="user">User</option>
              <option value="artist">Artist</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-500 py-3 rounded-lg text-black font-semibold hover:bg-green-400 transition"
          >
            Sign Up
          </button>

        </form>

        {/* Login link */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span className="text-green-400 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;