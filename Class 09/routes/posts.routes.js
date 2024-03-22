import { Router } from "express";
import PostController from "../controllers/post.controller.js";
import adminStuff from "../middleware/admin.middleware.js";

const router = Router();

router.get("", PostController.getPosts);
router.get("/:id", PostController.getPost);
router.post("", adminStuff, PostController.createPost);
router.patch("/:id", adminStuff, PostController.updatePost);
router.delete("/:id", adminStuff, PostController.deletePost);

export default router;