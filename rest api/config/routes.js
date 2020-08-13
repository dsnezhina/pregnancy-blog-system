const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/blogpost', router.blogpost);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};