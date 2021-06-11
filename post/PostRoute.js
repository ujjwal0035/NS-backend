const router = require('express').Router({ caseSensitive: true, strict: true });
const postController = require('../Post/postController');


router.post('/',postController.createPost);

module.exports = router;
