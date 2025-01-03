const mongoose = require('mongoose');

const config = require('config');

const db = config.get('mongoURI');

//const db = process.env.MONGO_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useCreateIndex: true //not applicable -- [nodemon] app crashed - waiting for file changes before starting...
        });

        console.log("MongoDB Connected ...");
    } catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;

