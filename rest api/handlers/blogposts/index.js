const Blogpost = require('../../models/Blogpost');
const User = require('../../models/User');

module.exports = {
    get: (req, res, next) => {

        const length = req.query.length ? parseInt(req.query.length) : 20
        const id = req.query.id ? req.query.id : undefined

        if (id && id !== "undefined") {
            Blogpost.findById(id)
                .populate('author')
                .then((blogpost) => res.send(blogpost))
                .catch(e => { console.log(e) })
        } else {
            Blogpost.find()
                .sort('-created_at')
                .limit(length)
                .populate('author')
                .then((blogposts) => res.send(blogposts))
                .catch(e => { console.log(e) });
        };

    },

    post: (req, res, next) => {
        const { title, image, category, content } = req.body;
        const { _id } = req.user;

        Blogpost.create({ title, image, category, content, author: _id })
            .then((createdBlogpost) => {
                return Promise.all([
                    User.updateOne({ _id }, { $push: { blogpostHistory: createdBlogpost } }),
                    Blogpost.findOne({ _id: createdBlogpost._id })
                ]);
            })
            .then(([modifiedObj, blogpostObj]) => {
                res.send(blogpostObj);
            })
            .catch(next);

    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, image, category, content } = req.body;
        Blogpost.updateOne({ _id: id }, { title, image, category, content })
            .then((updatedBlogpost) => res.send(updatedBlogpost))
            .catch(next)
    },

    delete: (req, res, next) => {

        const id = req.params.id;
        Blogpost.deleteOne({ _id: id })
            .then((removedBlogpost) => res.send(removedBlogpost))
            .catch(next)
    }
};