const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();



const connect = () => {
    mongoose
        .connect(
            // 'mongodb://127.0.0.1:27017/qr_code',
            process.env.atlasUrl
   
        
        )
        .then(() => console.log("DB Connection Successfull!"))
        .catch((err) => {
            console.log(err);
        });
}

module.exports ={
    connect
}
