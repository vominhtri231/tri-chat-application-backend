import { Router } from "express";
import { createUser } from "../controllers/user/index.js";

const router = Router()

router.post('/', createUser)

export default router