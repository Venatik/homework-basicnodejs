import fs from "fs";
// export { addText, readText };
export { addTextAsync, readTextAsync };

const file = "note.txt";
const newText = "This is some additional text.\n";

// Ako koristime samo exercise.js

// fs.appendFile(file, newText, (err) => {
//     if (err) {
//         console.log("Error while appending to file", err);
//         return;
//     }
//     console.log("File updated successfully.");
// });

// fs.readFile(file, "utf8", (err, data) => {
//     if (err) {
//         console.log("Error while reading file", err);
//         return;
//     }
//     console.log("File content:", data);
// });

// fs.appendFileSync(file, newText);

// let data = fs.readFileSync(file, "utf8");
// console.log("File content:", data);

// Ako pravime export/import

// const addText = () => {
//     fs.appendFileSync(file, newText);
//     console.log("Text appended successfully.");
// };

// const readText = () => {
//     const data = fs.readFileSync(file, "utf8");
//     console.log("File content:", data);
// };

const addTextAsync = () => {
    fs.appendFile(file, newText, (err) => {
        if (err) {
            console.log("Error while appending to file", err);
            return;
        }
        console.log("Text appended successfully.");
    });
};

const readTextAsync = () => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log("Error while reading file", err);
            return;
        }
        console.log("File content:", data);
    });
};