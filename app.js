import express from "express";
import errorHandler from "./utils/ErrorHandler.js";
import notFound from "./utils/NotFound.js";
import { validateRequest, schema } from "./utils/validate.js";

const port = 8000;

const app = express();
app.use(express.json());
app.use("/bad", validateRequest(schema), (req, res) => {
  try {
    return res.json("EveryThing is working fine");
  } catch (err) {
    throw new Error(err.message);
  }
});

app.use("/good", (req, res) => {
  res.statusCode = 400;

  throw new Error("Something went wrong for good");

  res.json({
    message: "Hello there from good",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
