const mongoose = require('mongoose');
const DATABASE = "mongodb://d:27017/testup"

mongoose
    .connect(DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("DB connected");
    })
    .catch(()=>{
        console.log("Error in DB Connection");
    })