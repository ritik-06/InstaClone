import express from "express";
import {followOrUnfollow, login, logout, register} from "../controllers/user_controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { editProfile, getProfile, getSuggestedUsers } from "../controllers/user_controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/:id/profile').get(isAuthenticated, getProfile);
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile);
router.route('/suggested').get(isAuthenticated, getSuggestedUsers);
router.route('/followOrUnfollow/:id').post(isAuthenticated, followOrUnfollow);

export default router;
