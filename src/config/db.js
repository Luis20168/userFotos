import mongoose from "mongoose";


export const db=  async ()=>{
    try {
        await mongoose.connect("mongodb://localhost/z")
        console.log("db is connected")
        
    } catch (error) {
        console.log(error)
        
    }
}
