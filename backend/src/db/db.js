const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('connected to DB')
    } catch(error){
        console.log("Database connection error : ",error)
    }
}

module.exports = connectDB;