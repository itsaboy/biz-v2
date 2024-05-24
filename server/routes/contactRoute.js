import express from "express";
import { sendEmail } from "../controllers/contactController.js";

export const contactRoute = express.Router();

contactRoute.post("/send", sendEmail);
