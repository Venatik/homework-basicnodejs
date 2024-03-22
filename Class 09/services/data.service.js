import fs from "fs/promises";

export default class DataService {
    static async readData(path) {
        const array = await fs.readFile(path, { encoding: "utf-8" });

        return JSON.parse(array);
    }

    static async writeData(path, data = []) {
        await fs.writeFile(path, JSON.stringify(data, null));
    }
}