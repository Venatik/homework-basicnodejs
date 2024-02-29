import fs from "fs";
import { writeFile, appendFile, readFile, createPath } from "./module.js";

const editTask = (oldText, newText) => {
    fs.readFile("homework.txt", "utf8", function (err, data) {
        if (err) {
            console.log("Error while reading file.", err);
        }
        const updateText = data.replace(oldText, newText);

        fs.writeFile("homework.txt", updateText, function (err) {
            if (err) {
                console.log("Error while editing file.", err);
            }
            console.log("File edited successfully.");
        });
    });
};

export { editTask };