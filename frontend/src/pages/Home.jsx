import { useState } from "react";
import Navbar from "../component/Navbar";

import { useNavigate } from "react-router-dom";

const Home =()=> {

  const [songs,setSongs] = useState([]);

//   const navigate = useNavigate();
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center pt-40 pb-20 px-6">

        <h1 className="text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
          Feel The Music
        </h1>

        <p className="text-gray-400 max-w-xl mb-8 text-lg">
          Discover millions of songs, build playlists, and enjoy music anywhere.
        </p>

        <button className="bg-green-500 px-8 py-3 rounded-full text-black font-semibold text-lg hover:bg-green-400 transition shadow-lg">
          Start Listening
        </button>

      </section>

      {/* FEATURED MUSIC */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8">
          Featured Tracks
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Card */}
          <div className="bg-zinc-900 rounded-xl p-5 hover:bg-zinc-800 transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />

            <h3 className="text-xl font-semibold">
              Midnight Dreams
            </h3>

            <p className="text-gray-400">
              DJ Aurora
            </p>
          </div>

          {/* Card */}
          <div className="bg-zinc-900 rounded-xl p-5 hover:bg-zinc-800 transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />

            <h3 className="text-xl font-semibold">
              Ocean Waves
            </h3>

            <p className="text-gray-400">
              Luna Beats
            </p>
          </div>

          {/* Card */}
          <div className="bg-zinc-900 rounded-xl p-5 hover:bg-zinc-800 transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />

            <h3 className="text-xl font-semibold">
              Neon Lights
            </h3>

            <p className="text-gray-400">
              Synth Rider
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;