const jwt = require('./jwt');
const User = require('../models/User');


module.exports = (justContinue = false) => {

    return function (req, res, next) {
       // const token = req.cookies[cookie] || '';

        const token = req.headers.authorization || '';

        jwt.verifyToken(token)
            .then((result) => {
                User.findById(result.id)
                    .then(user => {
                        req.user = user;
                        next();
                    })
            }).catch(err => {
                if (justContinue) {
                    next();
                    return;
                }
               console.log(err)
            })
    }
};