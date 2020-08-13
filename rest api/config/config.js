const env = process.env.NODE_ENV || 'development';
const dbName = 'PregnancyBlogSystem';

// const dbUrl = `mongodb+srv://user:user123@softuni-oushu.mongodb.net/${dbName}?retryWrites=true&w=majority` //Cloud DB

const dbUrl = 'mongodb://localhost:27017/'; //Local DB

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: dbUrl,
        dbName: dbName,
        cookie: 'x-auth-token',
        secret: 'mum2Be'
    },
    production: {}
};

module.exports = config[env]