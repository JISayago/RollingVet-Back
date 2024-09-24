const mongoose = require('mongoose');

//"mongodb+srv://juanignaciosayago:8H8oMYvi22zTQQtv@cluster0.uf8k4.mongodb.net/DB_RVet"
mongoose.connect(process.env.MONGO_CONNECT)
    .then(() => console.log("db connect"))
    .catch((error) => console.log(error));