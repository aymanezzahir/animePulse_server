const express = require("express");
const User = require("../../models/user/user");
const Route = express.Router();
const bcrypt = require("bcrypt");
const uuidv4 = require("uuid");
const Profileinfo = require("../../models/user/profile_info");
const OtakuInfo = require("../../models/user/otakuinfo");
Route.route("/register").post(async (req, res) => {
    try {
        const { email, password, username, firstName, lastName } = req.body;

        // Check if username or email already exist
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ error: existingUser.username === username ? "Username already exists" : "Email is already taken" });
        }

        // password hashing
        const hashPassword = await bcrypt.hash(password , 10);
        const id = uuidv4.v4();

        const newUser = await User.create({ userId:id , email, username, userinfo: { password : hashPassword, firstName, lastName } });
        await Profileinfo.create({userId : id});
        await OtakuInfo.create({userId : id});

        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


Route.route("/sign-in")
    .post(async (req , res)=> {
        const {username , password} = req.body
        
        const existingUser = await User.findOne({username})

        if(!existingUser){
            return res.status(404).json({"error" : "user not found" , ok: false})
        }

        // compare between hashpassword and plaintext password
        const result = await bcrypt.compare(password , existingUser.userinfo.password)
        if(!result){
            return res.status(401).json({"error" : "password is incorrect" , ok:false})
        }
        return res.status(200).json(existingUser)
    })

Route.route("/get")
    .get(async (req , res)=> {
        const {id} = req.query

        // hashing password
        console.log(id);
        
        const existingUser = await User.findById(id)

        if(!existingUser){
            return res.json({"error" : "user not found" , ok: false})
        }
        
        return res.json(existingUser)
    })
module.exports = Route;