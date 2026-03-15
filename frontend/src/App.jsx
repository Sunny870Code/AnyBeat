import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Registeration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Songs from "./pages/Song";
import UploadSong from "./pages/UploadSong";
import CreateAlbum from "./pages/CreateAlbum";



const App = () => {
  console.log("this is sunny")
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/upload" element={<UploadSong />} />
      <Route path="/createAlbum" element={<CreateAlbum />} />
    </Routes>
  )
}

export default App;