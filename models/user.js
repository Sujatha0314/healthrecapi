const mongoose = require('mongoose');

mongoose.set('useCreateIndex',true);

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    emailAddress:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    }
})

module.exports = mongoose.model('user', userSchema)