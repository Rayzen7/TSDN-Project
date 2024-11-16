import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import healthyfyRoutes from "./routes/healthyfyRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", healthyfyRoutes);

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
