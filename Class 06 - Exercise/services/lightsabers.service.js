import { loggerEmitter, projectPath } from "./logger.service.js";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const productFilePath = path.join(projectPath, "..", "data", "lightsabers.json");

const saveData = (data) => {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync(productFilePath, stringifiedData);
};

const checkedOutLightsabers = () => {
    let checkedOutLightsabers = fs.readFileSync(productFilePath, "utf-8");
    return JSON.parse(checkedOutLightsabers).filter((lightsaber) => lightsaber.checkedOut);
};

const getLightsabers = (queryData) => {
    let lightsabers = fs.readFileSync(productFilePath, "utf-8");
    let parsedProducts = JSON.parse(lightsabers);

    if (queryData?.color) {
        let filteredProducts = parsedProducts.filter((product) => product.color === queryData.color);
        return filteredProducts;
    }

    if (queryData?.checkedOut) {
        const isCheckedOut = queryData.checkedOut.toLowerCase() === "true";
        let filteredProducts = parsedProducts.filter((product) => product.checkedOut === isCheckedOut);
        return filteredProducts;
    }

    return parsedProducts;
};

const addLightsaber = (lightsaberData) => {
    const lightsabers = getLightsabers();

    const newLightsaber = {
        id: uuidv4(),
        ...lightsaberData
    };

    lightsabers.push(newLightsaber);
    saveData(lightsabers);
    return newLightsaber;
};

const lightsaberByOwner = (owner) => {
    const lightsabers = getLightsabers();
    const lightsaber = lightsabers.find((lightsaber) => lightsaber.lastOwner.toLowerCase() === owner.toLowerCase());
    if (!lightsaber) {
        throw new Error("No lightsaber found for this owner.");
    };
    return lightsaber;
};

const checkoutLightsaber = (id) => {
    const lightsabers = getLightsabers();

    const lightsaber = lightsabers.find((lightsaber) => lightsaber.id === id);

    if (!lightsaber) {
        throw new Error("No lightsaber found with this id.");
    };

    if (lightsaber.checkedOut) {
        throw new Error("Lightsaber already checked out.");
    };

    lightsaber.checkedOut = true;

    saveData(lightsabers);
    return lightsaber;
};

export { getLightsabers, addLightsaber, lightsaberByOwner, checkoutLightsaber }