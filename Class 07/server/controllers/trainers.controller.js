import TrainerService from "../services/trainers.service.js";

export default class TrainerController {
    static async getTrainer(req, res) {
        try {
            const trainers = await TrainerService.getTrainer();
            res.send(trainers);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getTrainerById(req, res) {
        try {
            const trainer = await TrainerService.getTrainerById(req.params.id);
            res.send(trainer);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async addTrainer(req, res) {
        try {
            const newTrainer = req.body;
            const trainer = await TrainerService.addTrainer(newTrainer);
            res.status(201).send(trainer);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async updateTrainer(req, res) {
        try {
            const trainer = await TrainerService.updateTrainer(req.params.id, req.body);
            res.send(trainer);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteTrainer(req, res) {
        try {
            await TrainerService.deleteTrainer(req.params.id);
            res.status(204).send({ message: "Trainer deleted." });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}