import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const writeFile = () => {
    const fileName = "homework.txt";
    fs.writeFile(fileName, "Class 02 Basic Node.\n", function (err) {
        if (err) {
            console.log("Error while creating file", err);
            return;
        }
        console.log("File created successfully.");
    });
}

const appendFile = () => {
    const fileName = "homework.txt";
    fs.appendFile(fileName, "FINISHED!", function (err) {
        if (err) {
            console.log("Error while appending to file", err);
            return;
        }
        console.log("File updated successfully.");
    });
}

const readFile = () => {
    const fileName = "homework.txt";
    fs.readFile(fileName, "utf8", function (err, data) {
        if (err) {
            console.log("Error while reading file", err);
            return;
        }
        console.log("File content:", data);
    });
}

function createPath(fileName) {
    console.log(path.resolve(fileName));
    return path.resolve(fileName);
}

const homeworkFileUrl = import.meta.url;
const __dirname = path.dirname(fileURLToPath(homeworkFileUrl));
const filePath = path.join(__dirname, "homework.txt");
console.log(filePath);

createPath("homework.txt");

// writeFile();
// appendFile();
// readFile();

export { writeFile, appendFile, readFile, createPath };