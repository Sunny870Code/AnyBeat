const express = require('express')
const musicController = require('../controller/music.controller')
const router = express.Router();
const multer = require('multer')
const authMiddleware = require('../middleware/auth.middleware')

const upload = multer({
    storage: multer.memoryStorage()
})


router.post('/upload',authMiddleware.authArtist,upload.single("music"),musicController.createMusic);
router.post('/album',authMiddleware.authArtist,musicController.createAlbum)

router.get('/songs',authMiddleware.authUser,musicController.getAllMusic)
router.get('/albums',authMiddleware.authUser,musicController.getAllAlbum)
router.get("/albums/:albumId",authMiddleware.authUser,musicController.getAlbumById)

module.exports = router;