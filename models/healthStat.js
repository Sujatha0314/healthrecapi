const mongoose = require('mongoose');

mongoose.set('useCreateIndex',true);

const healthStatSchema = mongoose.Schema({
    emailAddress:{
        type:String,
        required:true
    },
    bodyTemperature:{
        type:Number,
        required:true
    },
    bloodPressure:{
        type:Number,
        required:true
    },
    respiration:{
        type:Number,
        required:true
    },
    glucose:{
        type:Number,
        required:true
    },
    heartRate:{
        type:Number,
        required:true
    },
    oxygenSaturation:{
        type:Number,
        required:true
    },
    cholestrol:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('vitals', healthStatSchema)