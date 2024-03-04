import emitter from "./emitter.js";
import User from "./user.js";

emitter.on("userRegister", (user) => {
    console.log(`Welcome, ${user.name}! Thank you for registering.`);
});

emitter.on("userLogin", (user) => {
    console.log(`Welcome back, ${user.name}! You've logged in.`);
});

emitter.on("userLogout", (user) => {
    console.log(`Goodbye, ${user.name}! You've logged out.`);
});

const user1 = new User(1, "Obi-wan", "obicivilized@galaxymail.com");
const user2 = new User(2, "Darth Maul", "obisucks@sithnetwork.com");

export { user1, user2 };