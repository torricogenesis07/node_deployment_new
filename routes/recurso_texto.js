const {Router} = require('express');
const router = Router();
const{getResourseText, createResourceText}= require('../controllers/text.controller');
router.route('/')

.get(getResourseText)
.post(createResourceText)

module.exports = router;