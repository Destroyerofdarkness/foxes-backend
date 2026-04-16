const {Schema, model} = require("mongoose")

const foxSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true
    },
    votes:{
        type:Number,
        default: 0
    }
})


foxSchema.statics.make = async(info)=>{
    const newFox = new Fox({
        name: info.name,
        img:info.img
    })
    await newFox.save();
    return;
}

const Fox = model("foxes", foxSchema);

module.exports = Fox