const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://juanignaciosayago:8H8oMYvi22zTQQtv@cluster0.uf8k4.mongodb.net/DB_RVet"
).then(() => console.log("db connect")).catch((error) => console.log(error));