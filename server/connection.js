const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Establishing a Mongo DB connection
mongoose.connect("mongodb://localhost:27017/my-graphs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Connected to MongoDB Database");
});
// Defining a schema and model
const dataschema = new mongoose.Schema({
    label: String,
    value: Number,
    date: { type: Date, default: Date.now },
});
const Data = mongoose.model("Data", dataschema);
// Establish Routes for  data storage
app.get("/api/data", async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
});
app.post("/api/data", async (req, res) => {
    const newData = new Data(req.body);
    try {
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(500).send(err);
    }
});
// Assigning Port
app.listen(port, () => {
    console.log(`Server is Running at port:${port}`);
});
