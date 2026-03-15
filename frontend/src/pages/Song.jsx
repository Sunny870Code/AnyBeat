import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Songs = () => {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
     const navigate = useNavigate();


    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/music/songs",
                {
                    withCredentials: true
                });
            console.log(res.data.musics)
            setSongs(res.data.musics);
        } catch (error) {
            console.error(error);
        }
    };

    const playSong = (song) => {
        setCurrentSong(song);
    };

    const LogOut =async()=>{
       
        try{
            const res = await axios.post("http://localhost:3000/api/auth/logout",{},{
                withCredentials:true
            })
            alert("Logged out successfully!")
            navigate('/login');
        } catch (err){
            console.error(err)
        }
    }

    return (
        <div className="bg-black text-white min-h-screen p-10">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-10">All Songs</h1>
                <button className="text-md font-semibold px-4 py-2 cursor-pointer active:scale-95 bg-red-500 text-white rounded-xl border-1 "
                onClick={()=>LogOut()}
                >LogOut</button>
            </div>



            {/* Song List */}
            <div className="grid md:grid-cols-3 gap-6">

                {songs.map((song) => (
                    <div
                        key={song._id}
                        className="bg-zinc-900 p-5 rounded-lg hover:bg-zinc-800 cursor-pointer"
                        onClick={() => playSong(song)}
                    >
                        <h2 className="text-xl font-semibold">{song.title}</h2>

                        <p className="text-gray-400">
                            {song.artist?.username || "Unknown Artist"}
                        </p>
                    </div>
                ))}

            </div>

            {/* Player */}
            {currentSong && (
                <div className="fixed bottom-0 left-0 w-full bg-zinc-900 p-5 flex items-center justify-center">

                    <div className="text-center">

                        <h3 className="text-lg font-bold">
                            Now Playing: {currentSong.title}
                        </h3>

                        <audio controls autoPlay className="mt-3">
                            <source src={currentSong.uri} type="audio/mpeg" />
                        </audio>

                    </div>

                </div>
            )}

        </div>
    );
};

export default Songs;