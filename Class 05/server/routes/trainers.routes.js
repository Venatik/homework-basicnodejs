import express from "express";
import {
    getTrainers,
    addTrainer,
    getTrainerById,
    updateTrainer,
    deleteTrainer,
    deleteAllTrainers
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
        res.status(500).send(err.message);
    }
});

router.post("/trainers", (req, res) => {
    const newTrainerData = req.body;
    try {
        const newTrainer = addTrainer(newTrainerData);
        res.status(201).send(newTrainer);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put("/trainers/:id", (req, res) => {
    const id = req.params.id;
    const trainerUpdateData = req.body;
    try {
        const updatedTrainer = updateTrainer(id, trainerUpdateData);
        res.send(updatedTrainer);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete("/trainers/:id", (req, res) => {
    const id = req.params.id;
    try {
        deleteTrainer(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete("/trainers", (req, res) => {
    try {
        deleteAllTrainers();
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export { router };