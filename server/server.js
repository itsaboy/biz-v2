import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from 'body-parser';
import path from "path";
import * as url from "url";
import { contactRoute } from "./routes/contactRoute.js";

const directory = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use("/api/messages", contactRoute);

app.use(express.static(path.join(directory, "../client/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(directory, "../client/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
