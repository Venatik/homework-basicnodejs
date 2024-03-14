import { Router } from "express";
import TrainerController from "../controllers/trainers.controller.js";

const router = Router();

router.get("", TrainerController.getTrainer);
router.get("/:id", TrainerController.getTrainerById);
router.post("", TrainerController.addTrainer);
router.put("/:id", TrainerController.updateTrainer);
router.delete("/:id", TrainerController.deleteTrainer);

export default router;