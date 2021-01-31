const mongoose = require('mongoose');
const { Schema } = mongoose;
const lineSchema = new Schema({
    data: {type:Number,required: true},
    month:{type:String,required:true}
},{collection:'line'})
module.exports = lineSchema;