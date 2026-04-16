const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config();

const connectToMongoDb = require("./handlers/connectToMongoDb")

const fox_routes = require("./router/fox_router")


app.use(express.json());

app.use(express.urlencoded({extended:true}));

connectToMongoDb()

app.use(cors({
    origin: process.env.HOST,
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

app.use("/fox",fox_routes);

app.listen(process.env.PORT, ()=>{
    console.log("Succesfully started the API!!")
})
