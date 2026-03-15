import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", formData,{withCredentials:true});
      alert("Logged in successfully");
      setFormData({
        email: "",
        password: "",
      })

      // console.log(res.data.user.role)


        if(res.data.user.role == "user"){navigate("/songs")}
        else{
          navigate('/upload')
        }
        // (res.data.user.role == "user") ? navigate("/songs") : navigate("/upload")

    } catch (err) {
      console.error(err);
      alert("Unauthorised ! please Register first.")
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
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to continue listening
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

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
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-green-500"
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
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 py-3 rounded-lg text-black font-semibold hover:bg-green-400 transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-green-400 cursor-pointer hover:underline" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;