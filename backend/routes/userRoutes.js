import express from "express";

import {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
