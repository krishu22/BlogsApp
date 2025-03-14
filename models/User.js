const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({

    firstName:{ 
        type:String,
        required:true,
        trim:true,
    },

    lastName:{
        type:String,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        trim:true,
    },
 
    password:{
        type:String,
        required:true,
        trim:true,
    },

    accountType:{
        type:String,
        //required:true,
        enum:["Admin","Creator"],
        trim:true,
        default:"Creator"
    },

    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true,
    },

    blogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    }],

    token:{
        type:String,
        trim:true,
    },

    image:{
        type:String,
        required:true,
        trim:true,
    },

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],

    favorites:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    }],

    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rating",
    }],

});
 
module.exports = mongoose.model('User', userSchema);