import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400 tracking-wide">
          MyMusic
        </h1>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Discover</a>
          <a href="#" className="hover:text-white transition">Library</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-300 hover:text-white transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="bg-green-500 px-5 py-2 rounded-full text-black font-semibold hover:bg-green-400 transition"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;