import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const trainersPath = path.join(projectPath, "..", "data", "trainers.json");

const getTrainers = (queryData) => {
    const trainers = JSON.parse(fs.readFileSync(trainersPath, "utf-8"));

    let updatedTrainers = [...trainers];
    if (queryData?.isCurrentlyTeaching) {
        const isCurrentlyTeaching = queryData.isCurrentlyTeaching === "true";
        updatedTrainers = updatedTrainers.filter((trainer) => trainer.isCurrentlyTeaching === isCurrentlyTeaching);
    }

    if (updatedTrainers.length <= 0) {
        throw new Error("No trainers found.");
    }
    return updatedTrainers;
};

const saveData = (trainers) => {
    fs.writeFileSync(trainersPath, JSON.stringify(trainers));
};

const addTrainer = (newTrainerData) => {
    const trainers = getTrainers();
    const newTrainer = {
        id: uuidv4(),
        ...newTrainerData
    };

    const updatedTrainers = [...trainers, newTrainer];
    saveData(updatedTrainers);
    return newTrainer;
};

const getTrainerById = (trainerId) => {
    const trainers = getTrainers();
    const foundTrainer = trainers.find((trainer) => trainer.id === trainerId);
    if (!foundTrainer) {
        throw new Error("Trainer not found.");
    };

    return foundTrainer;
};

const updateTrainer = (trainerId, trainerUpdateData) => {
    if (trainerUpdateData.id) {
        throw new Error("ID cannot be updated.");
    };

    const trainers = getTrainers();

    const foundTrainer = trainers.find((trainer) => trainer.id === trainerId);

    if (!foundTrainer) {
        throw new Error("Trainer not found.");
    };

    const foundTrainerIndex = trainers.findIndex((trainer) => trainer.id === trainerId);

    const updatedTrainers = {
        ...trainers[foundTrainerIndex],
        ...trainerUpdateData
    };

    trainers[foundTrainerIndex] = updatedTrainers;
    saveData(trainers);
    return updatedTrainers;
};

const deleteTrainer = (trainerId) => {
    const trainers = getTrainers();

    const updatedTrainers = trainers.filter((trainer) => trainer.id !== trainerId);
    if (!updatedTrainers) {
        throw new Error("Trainer not found.");
    };

    saveData(updatedTrainers);
};

export {
    getTrainers,
    addTrainer,
    getTrainerById,
    updateTrainer,
    deleteTrainer
};