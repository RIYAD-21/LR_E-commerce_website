import routes from "./routes/index.js";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();


app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev")); 


app.use("/api", routes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));
  app.use('/public', express.static(path.join(__dirname, '../FrontEnd/public')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../FrontEnd", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
