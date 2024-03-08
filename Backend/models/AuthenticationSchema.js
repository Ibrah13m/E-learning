const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('authentication',authSchema);