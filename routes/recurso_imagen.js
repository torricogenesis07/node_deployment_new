const express = require('express')
const upload = require('../libs/storage')
const { addImage, getImages } = require('../controllers/image.controller')
const api = express.Router()

api.post('/images', upload.single('image'), addImage)
api.get('/images', getImages)
module.exports = api