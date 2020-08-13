const router = require('express').Router();
const handler = require('../handlers/blogposts');
const isAuth = require('../utils/isAuth');

router.get('/', handler.get);

router.post('/', isAuth(), handler.post);

router.put('/:id', isAuth(), handler.put);

router.delete('/:id', isAuth(), handler.delete);

module.exports = router
