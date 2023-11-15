import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import sharp from "sharp";
import { storage } from "../config/fireBase.js";

export const uploadFiles= async(file)=>{


    const tamañoFile= await sharp(file.buffer).resize({width: 200, fit: 'cover'}).toBuffer();
    
    const fileRef= ref(storage, `/file ${file.originalname} ${Date.now()}`)
    const typeFile={
        contentType: file.mimetype
    }


    const upload= uploadBytesResumable(
        fileRef,
        tamañoFile,
        typeFile
    )

    await upload;
    const downloadUrl= await getDownloadURL(fileRef)
    return({refe: fileRef, url: downloadUrl })


} 