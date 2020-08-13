const mongoose = require('mongoose');
const { Schema, model: Model } = mongoose;
const { String, Number, ObjectId, Boolean } = Schema.Types;

const tokenBlacklist = new Schema({
    token: String
});

module.exports = new Model('TokenBlacklist', tokenBlacklist);