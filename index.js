import express from "express";
import paymentRoutes from "./src/routes/payment.routes.js";
import { PORT } from "./config.js";
import morgan from "morgan";
import path from "node:path";
import cors from "cors"

const app = express();

app.use(morgan("dev"));
app.use(paymentRoutes);
app.use(cors())
app.use(express.static(path.join(process.cwd(), "./public")));

app.listen(PORT);
console.log("[server] is running on port ", PORT);
