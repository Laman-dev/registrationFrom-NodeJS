const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/registrationFrom", {
    useUnifiedTopology: true,
} ).then(()=>{
    console.log("connection successfully");
}).catch((error)=>{
    console.log(error);
});

