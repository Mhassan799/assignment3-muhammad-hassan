const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true
        });
        console.log("databse connected succcesfully");
    }catch(error){
        console.log(error);
        process.exit(1);
    }

}
module.exports= connectDB;