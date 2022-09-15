import express from "express";
import {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserControllers.js"
const router = express.Router();


router.get("/",getAllUser);
router.post("/",createUser);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);



export default router;