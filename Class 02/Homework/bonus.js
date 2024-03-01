import fs, { read } from "fs";

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

export { editTask, editUser, deleteUser, addUser, readUsers };

const readUsers = () => {
    const usersFile = fs.readFileSync("users.json", "utf8");

    console.log("Users", JSON.parse(usersFile));
};

const editUser = (number, object) => {
    const usersFile = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(usersFile);

    const userIndex = users.findIndex((user) => user.id === number);
    if (userIndex === -1) {
        console.log("User not found");
        return;
    }

    users[userIndex] = object;

    const updatedUsers = JSON.stringify(users);
    fs.writeFileSync("users.json", updatedUsers);

    console.log("User edited successfully.");
    readUsers();
};

// editUser(4, { id: 5, name: "John Doe", username: "johnDoe", email: "" });

const deleteUser = (number) => {
    const usersFile = fs.readFileSync("users.json", "utf8");
    const users = JSON.parse(usersFile);

    const userIndex = users.findIndex((user) => user.id === number);
    if (userIndex === -1) {
        console.log("User not found");
        return;
    }

    users.splice(userIndex, 1);

    const updatedUsers = JSON.stringify(users);
    fs.writeFileSync("users.json", updatedUsers);

    console.log("User deleted successfully.");
    readUsers();
};

// deleteUser(4);

const addUser = (user) => {
    const usersFile = fs.readFileSync("users.json", "utf-8");
    const users = JSON.parse(usersFile);

    const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
    user.id = lastUserId + 1;

    users.push(user);

    const updatedUsers = JSON.stringify(users);
    fs.writeFileSync("users.json", updatedUsers);

    console.log("User added successfully.");
    readUsers();
}

// addUser({ name: "Vinicius", username: "Vini Jr", email: "" });