import fs from "fs/promises";

export default class DataService {
    static async readData(filePath) {
        const arr = await fs.readFile(filePath, "utf-8");
        return JSON.parse(arr);
    }

    static async writeData(filePath, data = []) {
        await fs.writeFile(filePath, JSON.stringify(data));
    }
};