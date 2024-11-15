import express, { json } from "express";
import cors from "cors";
import PaymentRoutes from "./src/Application/Routes/PaymentRoutes.js";

const app = express();
app.use(cors());
app.use(json());
app.use("/api", PaymentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
