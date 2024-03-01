import { writeFile, appendFile, readFile, createPath } from "./module.js";
import { editTask, editUser, deleteUser, addUser, readUsers } from "./bonus.js";

writeFile();
appendFile();
readFile();

editTask("FINISHED!", "DONE!");

// deleteUser(5);
// addUser({ name: "Rodrygo", username: "rodrygo", email: "" });
// editUser(4, { id: 5, name: "Lunin", username: "Andrej4o", email: "" });
readUsers();