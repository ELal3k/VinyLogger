const express = require("express")

const { getAllAlbums, createAlbum } = require("../controllers/albumController")

const router = express.Router()

router.get("/albums", getAllAlbums)
router.post("/album/create", createAlbum)

module.exports = router
