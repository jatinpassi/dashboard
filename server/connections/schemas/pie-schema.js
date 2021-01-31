const mongoose = require('mongoose');
const { Schema } = mongoose;
const pieSchema = new Schema({
    data: {type:Number,required: true},
    month:{type:String,required:true}
},{collection:'pie'})
module.exports = pieSchema;