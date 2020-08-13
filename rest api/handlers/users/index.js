const User = require('../../models/User');
const TokenBlacklist = require('../../models/TokenBlacklist');
const jwt = require('../../utils/jwt');
const { cookie } = require('../../config/config');

module.exports = {
    get: (req, res, next) => {
        User.findById(req.query.id)
            .populate('blogpostHistory')
            .then((user) => res.send(user))
            .catch((err) => res.status(500).send("Error"))
    },


    post: {
        register: (req, res, next) => {

            const { username, password } = req.body;

            User
                .create({ username, password })
                .then((createdUser) => {
                    const token = jwt.createToken({ id: createdUser._id });
                    res.header("Authorization", token).send(createdUser);
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        verifyLogin: (req, res, next) => {
            const token = req.headers.authorization || '';

            Promise.all([
                jwt.verifyToken(token),
                TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }
                    User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false
                    })
                })
        },

        login: (req, res, next) => {

            const { username, password } = req.body;

            User.findOne({ username })
                .then((user) => Promise.all([user.matchPassword(password), user]))
                .then(([match, user]) => {
                    if (!match) {
                        res.status(401).send(`Invalid username or password`);
                        return;
                    }

                    const token = jwt.createToken({ id: user._id });
                    res.header("Authorization", token).send(user);

                })
                .catch(e => {
                    console.log(e)
                    res.status(401).send(`Invalid username or password`);
                   
                })
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }


    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }

};