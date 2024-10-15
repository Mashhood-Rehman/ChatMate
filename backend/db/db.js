const mongoose = require("mongoose")

const db = () => {

    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('db connected'))
    .catch((err)=> console.log('err'))
}
module.exports = db