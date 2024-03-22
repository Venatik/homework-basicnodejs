import { Router } from "express";
import authRouter from "./auth.routes.js";
import postRouter from "./posts.routes.js";
import tokenValidator from "../middleware/token-validator.js";

const router = Router();

router.use(authRouter);
router.use("/posts", tokenValidator, postRouter);

export default router;