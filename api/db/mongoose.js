// mongoDB connection logic

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TekaWeb', {useNewUrlParser: true}).then(() =>{
    console.log("Connection to MongoDB successful!");
}).catch((e) =>{
    console.log("Error while connecting to MongoDB.");
    console.log(e);
});

//warning prevention
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports ={
    mongoose
};