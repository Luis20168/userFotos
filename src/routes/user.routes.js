import { registerUser, getAllUsers, deleteUser, login } from "../controllers/user.controllers.js";
import { Router } from "express";
import { upload } from "../config/multer.js";
const router= Router();

router.get('/', getAllUsers)


router.post('/', upload.fields([{name: "image", maxCount: 1}]), registerUser)
router.delete('/:id', deleteUser)



router.post('/login', login)

export default router;
