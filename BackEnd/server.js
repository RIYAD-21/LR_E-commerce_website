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
  origin: process.env.CORS_ORIGIN || "*", // Allow all origins by default, can be restricted to specific domains
  credentials: true, // Allow credentials (cookies, authorization headers, etc.) 
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
); // helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")); // log the requests


app.use("/api", routes);


if (process.env.NODE_ENV === "production") {
  // server our react app
  app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));
  app.use('/public', express.static(path.join(__dirname, '../FrontEnd/public')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../FrontEnd", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
