const router = require('express').Router();
const handler = require('../handlers/users');


router.get('/', handler.get);

router.post('/register', handler.post.register);

router.get('/verify', handler.post.verifyLogin);

router.post('/login', handler.post.login);

router.get('/logout', handler.post.logout);

router.put('/:id', handler.put);

router.delete('/:id', handler.delete);


module.exports = router;