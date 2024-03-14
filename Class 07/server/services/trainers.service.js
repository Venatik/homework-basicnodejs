import TrainerModel from "../models/trainers.model.js";
import { v4 as uuidv4 } from "uuid";

export default class TrainerService {
    static async getTrainer() {
        return await TrainerModel.getAll();
    }

    static async getTrainerById(id) {
        const trainer = await TrainerModel.getById(id);

        if (!trainer) {
            throw new Error("Trainer not found");
        }

        return trainer;
    }

    static async addTrainer(body) {
        const trainer = {
            ...body,
            id: uuidv4(),
        }

        return await TrainerModel.create(trainer);
    }

    static async updateTrainer(id, body) {
        const trainer = await TrainerModel.getById(id);

        if (!trainer) {
            throw new Error("Trainer not found");
        }

        const updatedTrainer = {
            ...body,
            id,
        }

        return await TrainerModel.update(id, updatedTrainer);
    }

    static async deleteTrainer(id) {
        return await TrainerModel.delete(id);
    }
}