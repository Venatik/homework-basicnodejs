import EventEmitter from "events";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

class LoggerEmitter extends EventEmitter { };
const loggerEmitter = new LoggerEmitter();

const currentlFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentlFileUrl);
const projectPath = path.dirname(currentFilePath);
const logsPath = path.join(projectPath, "..", "logs", "logs.txt");

const appendText = (filePath, text) => {
    fs.appendFileSync(filePath, text);
};

loggerEmitter.on("log", (action, status) => {
    const currentDateAndTime = new Date().toLocaleString();
    appendText(logsPath,
        `
        -----------------------------------------------------------
        Action: ${action}
        Status: ${status}
        Date and Time: ${currentDateAndTime}
        -----------------------------------------------------------
        `)
});

export { loggerEmitter, projectPath };