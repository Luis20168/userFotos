import { Schema, model } from "mongoose";


const userShema= new Schema({
    image: {type: String},
    email: {type: String},
    password: {type: String}
})


export default model('user', userShema);