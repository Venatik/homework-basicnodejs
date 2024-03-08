import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { router as trainerRouter } from "./routes/trainers.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello is this thing on?" });
});

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const staticHome = path.join(projectPath, "homePage");

app.use("/api", trainerRouter);
app.use("/home", express.static(staticHome));

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port: ${PORT}`);
});