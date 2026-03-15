const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const { uploadFile } = require('../services/storage.service');
const albumModel = require("../models/album.model")


async function createMusic(req, res) {

    const decoded = req.user;
    const { title } = req.body;
    const file = req.file;
    console.log(file)

    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })

}


async function createAlbum(req, res) {
    const decoded = req.user;

    const { title, music } = req.body;

    const album = await albumModel.create({
        title,
        artist: decoded.id,
        musics: music
    })
    res.status(201).json({
        message: "album created successfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album,
            music: album.musics,
        }
    })

}

async function getAllMusic(req, res) {
    const music = await musicModel
        .find()
        .skip(0)
        .limit(10)
        .populate("artist", "username email")
    res.status(200).json({
        message: "Musics fetched successfully",
        musics: music,
    })
}

async function getAllAlbum(req, res) {
    const album = await albumModel.find().select("title artist ").populate("artist", "username email");
    res.status(200).json({
        message: "album fetched successfully",
        albums: album,
    })
}

async function getAlbumById(req, res) {
    const albumId = req.params.albumId;
    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics")
    return res.status(200).json({
        message: "Album fetched successfully",
        album: album
    })
}




module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById }