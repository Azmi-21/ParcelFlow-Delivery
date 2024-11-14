import express, { json } from "express";
const app = express();
import PaymentRoutes from "./src/Application/Routes/PaymentRoutes.js";

app.use(json());
app.use("/api", PaymentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
