const mongoose = require('mongoose');
const { Schema } = mongoose;
const barSchema = new Schema({
    data1: {type:Number,required: true},
    data2: {type:Number,required: true},
    month:{type:String,required:true}
},{collection:'bar'})
module.exports = barSchema;