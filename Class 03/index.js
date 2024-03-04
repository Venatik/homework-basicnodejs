import emitter from "./emitter.js";
import { user1, user2 } from "./app.js";

emitter.emit("userRegister", user1);
emitter.emit("userLogin", user1);
emitter.emit("userLogout", user1);
console.log("---------------------------------------------------");
emitter.emit("userRegister", user2);
emitter.emit("userLogin", user2);
emitter.emit("userLogout", user2);