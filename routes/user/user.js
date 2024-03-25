const express = require("express");
const User = require("../../models/user");
const Route = express.Router();

Route.route("/register").post(async (req, res) => {
    try {
        const { email, password, username, firstName, lastName } = req.body;

        // Check if username or email already exist
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ error: existingUser.username === username ? "Username already exists" : "Email is already taken" });
        }

        // Create the new user
        const newUser = await User.create({ email, username, userinfo: { password, firstName, lastName } });

        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


Route.route("/sign-in")
    .post(async (req , res)=> {
        console.log("req : " , req.body)
        const {username} = req.body
        const existingUser = await User.findOne({username})
        console.log(username)
        if(!existingUser){
            return res.status(404).json({"error" : "user not found"})
        }
        console.log("user is " , existingUser)
        return res.json(existingUser)
    })
module.exports = Route;