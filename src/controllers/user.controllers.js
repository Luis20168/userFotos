import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createToken } from "../middlewares/jwt.js";
import { uploadFiles } from "../middlewares/uploadFiles.js";


export const registerUser = async (req, res) => {

    const { email, password } = req.body;
    const image = req.files.image;


    const hasPassword = await bcrypt.hash(password, 10)
    try {
        if (!image) return res.json({ message: 'error en la img' })
        const { url } = await uploadFiles(image[0])

        const newUser = new User({
            image: url,
            email,
            password: hasPassword
        })

        const userSaved = await newUser.save();

        const token = await createToken({ id: userSaved._id })

        res.cookie('token', token)


        res.json({ message: 'user saved' })









    } catch (error) {
        console.log(error)

    }

}

export const getAllUsers = async (req, res) => {
    try {

        const allUssers = await User.find()
        res.json(allUssers)

    } catch (error) {
        console.log(error)

    }

}

export const deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ message: 'user deleted' })
    } catch (error) {
        console.log(error)

    }

}



export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userLog = await User.findOne({ email })
        if (!userLog) return res.json({ message: 'user not exist' })
        const passLog = bcrypt.compare(userLog.password, password)
        if (!passLog) return res.json({ message: 'password incorrecta' })

        const token = await createToken({ id: userLog._id })

        res.cookie('token', token)
        res.json({
            foto: userLog.image,
            email: userLog.email

        })



    } catch (error) {
        console.log(error)

    }

}