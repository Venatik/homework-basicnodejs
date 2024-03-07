import http from "node:http";
import { v4 as uuidv4 } from "uuid";

const host = "http://localhost";
const port = 3003;
const students = [];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Max-Age", 2592000);

    if (req.url === "/" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Welcome to the Student Directory</h1>")
        res.end();
    } else if (req.url === "/student" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Student Information</h1>");
        res.write("<p>Name: Stefan</p>");
        res.write("<p>Last Name: Trajkovski</p>");
        res.write("<p>Academy: Web Development</p>");
        res.write("<p>Subject: Basic Node.js</p>");
        res.end();
    } else if (req.url === "/add_student" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Add Student</h1>");
        res.write('<form action="/all_students" method="POST">'); // Corrected line
        res.write('<input type="text" name="name" placeholder="Name" />');
        res.write('<button type="submit">Add Student</button>');
        res.write("</form>");
        res.end();
    } else if (req.url === "/all_students" && method === "POST") {
        const body = [];
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const studentName = decodeURIComponent(body.split("=")[1]);
            students.push(studentName);
            res.end();

        });
    } else if (req.url === "/add_student" && method === "POST") {
        const body = [];
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const studentName = decodeURIComponent(body.split("=")[1]);
            students.push(studentName);
            res.end();
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
});


server.listen(port, () => {
    console.log(`The server is up and running on port ${port}.`);
});