const {Schema, model} = require("mongoose")

//Fox model in the database. The img link is unique and the name is too. The default number of votes is 0
const foxSchema = new Schema({
    name:{
        unique:true,
        type:String,
        required:true
    },
    img:{
        unique:true,
        type:String,
        required:true
    },
    votes:{
        type:Number,
        default: 0
    }
})

//Creation of the fox on post route
foxSchema.statics.make = async(info)=>{
    const newFox = new Fox({
        name: info.name,
        img:info.img
    })
    await newFox.save();
    return;
}

//Updating of fox votes by 1
foxSchema.statics.vote = async (info) => {
    console.log(info);
    await Fox.findByIdAndUpdate(info.id, { $inc: { votes: 1 } });
};

const Fox = model("foxes", foxSchema);

module.exports = Fox