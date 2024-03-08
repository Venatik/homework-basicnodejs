import express from "express";
import {
    getTrainers,
    addTrainer,
    getTrainerById,
    updateTrainer,
    deleteTrainer
} from "../services/trainers.service.js";

const router = express.Router();

router.get("/trainers", (req, res) => {
    const queryData = req.query;
    try {
        const trainers = getTrainers(queryData);
        res.send(trainers);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get("/trainers/:id", (req, res) => {
    const id = req.params.id;
    try {
        const trainer = getTrainerById(id);
        if (trainer) {
            res.send(trainer);
        } else {
            res.status(404).send("Trainer not found.")
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

export { router };