import express from "express";
import "express-async-errors";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//db and authUser
import connectDB from "./db/connect.js";

//Middleware
import notFoundMiddleware from "./Middleware/notFound.js";
import errorHandlerMiddleware from "./Middleware/error-handler.js";

//Routes
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("listening on port " + port);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
