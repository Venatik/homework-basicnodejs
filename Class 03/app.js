import emitter from "./emitter.js";
import User from "./user.js";

emitter.on("userRegister", (User) => {
    console.log(`Welcome, ${User.name}! Thank you for registering.`);
});

emitter.on("userLogin", (User) => {
    console.log(`Welcome back, ${User.name}! You've logged in.`);
});

emitter.on("userLogout", (User) => {
    console.log(`Goodbye, ${User.name}! You've logged out.`);
});

const user1 = new User(1, "Obi-wan", "obicivilized@galaxymail.com");
const user2 = new User(2, "Darth Maul", "obisucks@sithnetwork.com");

export { user1, user2 };