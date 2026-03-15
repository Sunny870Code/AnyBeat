import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadSong = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append("title", title);
        data.append("music", file); // 'file' matches the Multer upload.single('file')

        try {
            await axios.post("http://localhost:3000/api/music/upload", data, {
                withCredentials: true
            });
            alert("Song uploaded successfully! 🎵");
        } catch (err) {
            alert(err.response?.data?.message || "Upload failed");
        } finally {
            setLoading(false);
        }
    };

    const LogOut = async () => {

        try {
            const res = await axios.post("http://localhost:3000/api/auth/logout", {}, {
                withCredentials: true
            })
            alert("Logged out successfully!")
            navigate('/login');
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <nav className="p-5 bg-black flex justify-end">
                <button
                    className="text-md font-semibold px-6 py-2 cursor-pointer active:scale-95 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all"
                    onClick={() => LogOut()}
                >
                    LogOut
                </button>

                <button className="text-md font-semibold px-6 py-2 cursor-pointer active:scale-95 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all"
                onClick={()=>navigate('/createAlbum')}>Create album</button>
            </nav>
            <div className="min-h-screen bg-black flex items-center justify-center p-6">
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Upload New Track</h2>

                    <form onSubmit={handleUpload} className="space-y-6">
                        <div>
                            <label className="text-gray-400 text-sm block mb-2">Song Title</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:border-green-500 outline-none"
                                placeholder="e.g. Midnight Melodies"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-green-500 transition-colors cursor-pointer relative">
                            <input
                                type="file"
                                accept="audio/*"
                                required
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <p className="text-gray-400">
                                {file ? file.name : "Click to select or drag & drop audio file"}
                            </p>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-green-500 py-3 rounded-lg font-bold text-black hover:bg-green-400 disabled:opacity-50"
                        >
                            {loading ? "Uploading..." : "Publish Song"}
                        </button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default UploadSong;