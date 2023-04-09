const mongoose = require("mongoose")
const taskModel = mongoose.model("task",{
    title:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:20,
        unique:true
    },
    content:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:100
    },
    dueDate:{
        type:Date,
        default: Date().new
    },
    status:{
        type:Boolean,
        default:false
    }
})

module.exports = taskModel