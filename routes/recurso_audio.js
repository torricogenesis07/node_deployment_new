const {Router} = require('express');
const router = Router();

const{getAudio, getAudios, saveAudio}= require('../controllers/audio.controller');



router.get('/audio/:id', getAudio)
router.get('/audios/', getAudios)
router.post('/audio', saveAudio)

module.exports = router;