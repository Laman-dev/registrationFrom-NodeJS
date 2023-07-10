const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 

    email: {
        type: String,
        required: true,
        unique: true
    }, 

    password: {
        type: String,
        required: true
    }

});


////// Create Model

const Register = new mongoose.model("Register", registerSchema);
module.exports = Register