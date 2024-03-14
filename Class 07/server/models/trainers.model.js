import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);
const trainersPath = path.join(projectPath, "..", "data", "trainers.json");

export default class TrainerModel {
    static async getAll() {
        return await DataService.readData(trainersPath);
    }

    static async getById(id) {
        const trainers = await this.getAll();

        const foundTrainer = trainers.find((trainer) => trainer.id === id);
        return foundTrainer;
    }

    static async create(body) {
        const trainers = await this.getAll();
        trainers.push(body);
        await DataService.writeData(trainersPath, trainers);
        return body;
    }

    static async update(id, body) {
        const trainers = await this.getAll();
        const trainerIndex = trainers.findIndex((trainer) => trainer.id === id);
        if (trainerIndex < 0) {
            throw new Error("Trainer not found");
        }
        trainers[trainerIndex] = body;
        await DataService.writeData(trainersPath, trainers);
        return body;
    }

    static async delete(id) {
        const trainers = await this.getAll();
        const filteredTrainers = trainers.filter((trainer) => trainer.id !== id);
        await DataService.writeData(trainersPath, filteredTrainers);
    }
}