const {Router} = require('express');
const router = Router();
const{getResourseMetadataform, createResourceMeadataform}= require('../controllers/metadataform.controller');
router.route('/')

.get(getResourseMetadataform)
.post(createResourceMeadataform)

module.exports = router;