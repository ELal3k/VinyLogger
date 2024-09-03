const Album = require("../models/album")
const User = require("../models/user")

const getAllAlbums = async function (req, res) {
  try {
    const allAlbums = await Album.find()
    res.send(allAlbums)
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to retrieve articles", details: err.message })
  }
}

const createAlbum = async function (req, res) {
  try {
    const { title, artist, year, genre } = req.body

    const createdAlbum = await Album.create({
      title: title,
      artist: artist,
      year: year,
      genre: genre,
    })

    res
      .status(201)
      .json({ msg: "Album created successfully", album: createdAlbum })
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create the article", details: err.message })
  }
}

module.exports = { getAllAlbums, createAlbum }
