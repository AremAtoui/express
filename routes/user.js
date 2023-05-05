
const express = require("express");
const users = require("../UserList");
const userRouter = express.Router();






//get product 
userRouter.get("/", (req, res) => res.send({ listuser: users }));
userRouter.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    res.send(`my email is ${email} and my password is ${password}`);
})
//get delete
userRouter.get("/Boutique", (req, res) => {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 9 && hours < 17) {
        res.render("opened");
    } else {
        res.render("Closed");
    }

})


userRouter.get("/home", (req, res) => {
    // res.sendFile(__dirname+'/home.html') });
    res.render("Home");
});

userRouter.get("/contact", (req, res) => {
    // res.sendFile(__dirname+'/home.html') });
    res.render("Contact");
});
userRouter.get("/services", (req, res) => {
    // res.sendFile(__dirname+'/home.html') });
    res.render("Services")
});
// get update

// get add
module.exports = userRouter;



//get user


//delete user


//update user

//add user