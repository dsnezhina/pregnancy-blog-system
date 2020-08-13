const mongoose = require('mongoose');
const { Schema, model: Model } = mongoose;
const { String, Number, ObjectId, Boolean } = Schema.Types;

const blogpostSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Blogpost', blogpostSchema);
