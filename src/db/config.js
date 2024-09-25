const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECT)
    .then(() => console.log("db connect"))
    .catch((error) => console.log(error));