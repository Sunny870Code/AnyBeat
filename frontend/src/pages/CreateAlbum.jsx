import { useState, useEffect } from "react";
import axios from "axios";

const CreateAlbum = () => {
    const [title, setTitle] = useState("");
    const [availableSongs, setAvailableSongs] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]); // Stores the IDs
    const [loading, setLoading] = useState(false);

    // Load songs so the user can pick from them
    useEffect(() => {
        const fetchMySongs = async () => {
            const res = await axios.get("http://localhost:3000/api/music/songs", { withCredentials: true });
            setAvailableSongs(res.data.musics);
        };
        fetchMySongs();
    }, []);

    const toggleSong = (songId) => {
        if (selectedSongs.includes(songId)) {
            // Remove if already selected
            setSelectedSongs(selectedSongs.filter(id => id !== songId));
        } else {
            // Add if not selected
            setSelectedSongs([...selectedSongs, songId]);
        }
    };

    const handleCreateAlbum = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:3000/api/music/album", 
                { title, music: selectedSongs }, // Send the array of IDs
                { withCredentials: true }
            );
            alert("Album Created!");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <form onSubmit={handleCreateAlbum} className="max-w-lg mx-auto bg-zinc-900 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Create New Album</h2>
                
                <input 
                    className="w-full bg-zinc-800 p-3 rounded mb-6 outline-none border border-zinc-700 focus:border-green-500"
                    placeholder="Album Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <h3 className="text-sm text-gray-400 mb-2">Select Songs for this Album:</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto mb-6 border border-zinc-800 p-2 rounded">
                    {availableSongs.map(song => (
                        <div 
                            key={song._id}
                            onClick={() => toggleSong(song._id)}
                            className={`p-3 rounded-lg cursor-pointer flex justify-between items-center transition ${
                                selectedSongs.includes(song._id) ? 'bg-green-600' : 'bg-zinc-800 hover:bg-zinc-700'
                            }`}
                        >
                            <span>{song.title}</span>
                            {selectedSongs.includes(song._id) && <span>✓</span>}
                        </div>
                    ))}
                </div>

                <button 
                    className="w-full bg-green-500 py-3 rounded-lg text-black font-bold disabled:opacity-50"
                    disabled={loading || selectedSongs.length === 0}
                >
                    {loading ? "Creating..." : `Create Album with ${selectedSongs.length} songs`}
                </button>
            </form>
        </div>
    );
};

export default CreateAlbum;