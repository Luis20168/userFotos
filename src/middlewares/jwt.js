import e from "express";
import jwt from "jsonwebtoken";


export const createToken= (payload)=>{
    return new Promise((resolve,reject )=>{
        jwt.sign(
            payload,
            "clave_secreata",
            {expiresIn: '1d'},
            (err, token)=>{
                if(err) reject(err);
                resolve(token)
    
            }
        )
    

    })
}