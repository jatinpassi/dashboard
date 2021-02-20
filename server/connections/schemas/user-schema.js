const { Schema } = require('mongoose');
const userSchema = new Schema({
    userName: {type:String,required: true},
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true},
    phone_number: { type: Array, required: true },
    password: { type: String, required: true},
    address: {
        location:{type: String, required: true},
        city: { type: String, required: true },
        country: { type: String, required: true },
    }
},{collection:'user'})
module.exports = userSchema;