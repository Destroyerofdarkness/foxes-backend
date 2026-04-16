const Fox = require("../models/Fox")


const make_fox = async(req,res)=>{
    try {
    await Fox.make(req.body);
    res.status(201).json({success:true, message: "Succesfully created a new Fox"});
    } catch (err) {
        console.log(err);
        res.status(400).json({err,success:false, message:"Unable to create a new Fox because of errors!!"})
    }
}

const get_foxes = async(req,res)=>{
    try {
        const foxes = await Fox.find();
        res.status(200).json({foxes, success:true, message: "Succesfully got all the foxes"})
    } catch (err) {
        console.log(err);
        res.status(500).json({err, success:false, message: "Unable to get all the foxes because of Internal Server Error"})
    }
}

const update_vote_fox = async(req,res)=>{
    const {BODY} = req.body
    try {
        await Fox.vote(BODY);
        res.status(201).json({success:true, message: "Succesfully voted for the fox"})
    } catch (err) {
        console.log(err);
        res.status(400).json({err,success:false, message:"Unable to vote for the fox because of error"})
    }
}

module.exports = {make_fox, get_foxes, update_vote_fox}