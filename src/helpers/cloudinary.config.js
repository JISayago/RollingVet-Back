const cloudinary = require('cloudinary').v2

//cloud_name: process.env.ClOUD_NAME,
cloudinary.config({
        cloud_name:'dqhdgsolz',
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET,
    });

module.exports = cloudinary;

