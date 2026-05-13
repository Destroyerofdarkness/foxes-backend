const Fox = require("../models/Fox")

//Post controller for making the foxes
const make_fox = async(req,res)=>{
    try {
    await Fox.make(req.body);
    res.status(201).json({success:true, message: "Succesfully created a new Fox"});
    } catch (err) {
        console.log(err);
        res.status(400).json({err,success:false, message:"Unable to create a new Fox because of errors!!"})
    }
}

//Get controller for getting 2 random foxes from the database
const get_foxes = async(req,res)=>{
    try {
        const foxes = await Fox.aggregate([{$sample:{size:2}}]); //2 random foxes gets taken here
        res.status(200).json({foxes, success:true, message: "Succesfully got all the foxes"})
    } catch (err) {
        console.log(err);
        res.status(500).json({err, success:false, message: "Unable to get all the foxes because of Internal Server Error"})
    }
}

//controller for updating the fox votes
const update_vote_fox = async(req,res)=>{
    const {BODY} = req.body
    try {
        await Fox.vote(BODY); //Statics function in the model file
        res.status(201).json({success:true, message: "Succesfully voted for the fox"})
    } catch (err) {
        console.log(err);
        res.status(400).json({err,success:false, message:"Unable to vote for the fox because of error"})
    }
}

//Controller for getting all the foxes from the database in vote order from highest to lowest
const get_fox_statistics = async(req,res)=>{
    try {
        const foxes = await Fox.find().sort({votes:-1})
        res.status(200).json({foxes, success:true,message: "Got all the foxes in votes order"})
    } catch (err) {
        console.log(err);
        res.status(500).json({err, success:false, message:"Couldn't get the foxes from the database"})
    }
  
}

module.exports = {make_fox, get_foxes, update_vote_fox, get_fox_statistics}