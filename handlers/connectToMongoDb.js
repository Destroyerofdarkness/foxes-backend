const mongoose = require("mongoose");

async function connectToMongoDb(){
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Succesfully connecte to MongoDB on: ",mongoose.connection.name)
    } catch (err) {
        console.log("Error on connecting to MongoDB: ",err)
    }
}

module.exports = connectToMongoDb