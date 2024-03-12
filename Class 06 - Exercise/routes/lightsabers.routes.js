import express from "express";
import { getLightsabers, addLightsaber, lightsaberByOwner, checkoutLightsaber } from "../services/lightsabers.service.js";
import { loggerEmitter } from "../services/logger.service.js";

const router = express.Router();

router.get("/lightsabers", (req, res) => {
    const queryData = req.query;
    try {
        const lightsabers = getLightsabers(queryData);
        res.status(200).send(lightsabers);
        loggerEmitter.emit("log", "Get Lightsabers", "Success");
    } catch (error) {
        res.status(404).send(error.message);
        loggerEmitter.emit("log", "Get Lightsabers", "Fail");
    }
});

router.get("/lightsabers/:owner", (req, res) => {
    const owner = req.params.owner;
    try {
        const lightsaber = lightsaberByOwner(owner);
        res.status(200).send(lightsaber);
        loggerEmitter.emit("log", "Get Lightsaber by Owner", "Success");
    } catch (error) {
        res.status(404).send(error.message);
        loggerEmitter.emit("log", "Get Lightsaber by Owner", "Fail");
    }
});

router.post("/lightsabers", (req, res) => {
    try {
        const lightsaberData = req.body;
        const newLightsaber = addLightsaber(lightsaberData);
        res.status(201).send(newLightsaber);
        loggerEmitter.emit("log", "Add Lightsaber", "Success");
    } catch (error) {
        res.status(400).send(error.message);
        loggerEmitter.emit("log", "Add Lightsaber", "Fail");
    }
});

router.patch("/lightsabers/checkout/:id", (req, res) => {
    try {
        const lightsaberId = req.params.id;
        const checkedOutLightsaber = checkoutLightsaber(lightsaberId);
        res.status(200).send(checkedOutLightsaber);
        loggerEmitter.emit("log", "Checkout Lightsaber", "Success");
    } catch (error) {
        res.status(404).send(error.message);
        loggerEmitter.emit("log", "Checkout Lightsaber", "Fail");
    }
});


export { router };