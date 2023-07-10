
const express = require("express");
const path = require("path");
const app = express();
require("./db/connect");
const Register = require("./models/registers");
const { log } = require("console");



//set Public Path and Port Address
const port = 8000;
const main_path  = path.join(__dirname, "../public");
app.use(express.static(main_path));

//View Your Data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Set Path
app.set("view engine", "hbs");
const viewPath = path.join(__dirname, "../template/views");
app.set("views", viewPath);


//Set Routes
app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/register", (req, res)=>{
    res.render("register")
});

app.get("/login", (req, res)=>{
    res.render("login")
});


// Create or InsertData (Document) For Model

app.post("/register", async (req, res)=>{

    try {
       
        const resiterData = new Register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        const registered = await resiterData.save();
        res.status(201).render("index");


    } catch (error) {
        res.status(400).send(error);
    }


});



//Login Check Form Data

app.post("/login", async (req, res)=>{

    try {
        
        const email =  req.body.email
        const password =  req.body.password
        console.log(email);
        console.log(password);

        const useremail = await Register.findOne({email: email});
        res.send(useremail);
        console.log(useremail);


    } catch (error) {
        res.status(400).send("invalid Email");
    }

})

app.listen(port, ()=>{
    console.log("server is running");
});